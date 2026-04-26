"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["694764"], {
431941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_downloadfilebutton_ohos_arkui_advanced_downloadfilebutton_md_f45_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-downloadfilebutton-ohos-arkui-advanced-downloadfilebutton-md-f45.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_downloadfilebutton_ohos_arkui_advanced_downloadfilebutton_md_f45_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-downloadfilebutton/ohos-arkui-advanced-downloadfilebutton","title":"DownloadFileButton","description":"下载文件按钮，通过点击该下载按钮，可以获取到当前应用在Download公共目录中所属的存储路径。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-downloadfilebutton/ohos-arkui-advanced-downloadfilebutton.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-downloadfilebutton","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-downloadfilebutton/ohos-arkui-advanced-downloadfilebutton","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-downloadfilebutton/ohos-arkui-advanced-downloadfilebutton","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"DownloadFileButton","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-downloadfilebutton","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-downloadfilebutton"},"sidebar":"ref","previous":{"title":"ComposeTitleBar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-composetitlebar/ohos-arkui-advanced-composetitlebar"},"next":{"title":"DialogV2","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-dialogv2/ohos-arkui-advanced-dialogv2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-downloadfilebutton/ohos-arkui-advanced-downloadfilebutton.md


const frontMatter = {
	title: 'DownloadFileButton',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-downloadfilebutton',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-downloadfilebutton'
};
const contentTitle = 'DownloadFileButton';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "DownloadFileButton",
  "id": "downloadfilebutton-1",
  "level": 2
}, {
  "value": "DownloadContentOptions",
  "id": "downloadcontentoptions",
  "level": 2
}, {
  "value": "DownloadStyleOptions",
  "id": "downloadstyleoptions",
  "level": 2
}, {
  "value": "DownloadIconStyle",
  "id": "downloadiconstyle",
  "level": 2
}, {
  "value": "DownloadDescription",
  "id": "downloaddescription",
  "level": 2
}, {
  "value": "DownloadLayoutDirection",
  "id": "downloadlayoutdirection",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "downloadfilebutton",
        children: "DownloadFileButton"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载文件按钮，通过点击该下载按钮，可以获取到当前应用在Download公共目录中所属的存储路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(354034)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件不支持在Wearable设备上使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DownloadFileButton } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloadfilebutton-1",
      children: "DownloadFileButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载文件按钮组件，默认显示图标和文字。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
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
            children: "contentOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#downloadcontentoptions",
              children: "DownloadContentOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建包含指定元素内容的下载按钮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "styleOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#downloadstyleoptions",
              children: "DownloadStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建包含指定元素样式的下载按钮。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloadcontentoptions",
      children: "DownloadContentOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载文件按钮中显示的内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#downloadiconstyle",
              children: "DownloadIconStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置下载按钮的图标风格。  不传入该参数表示没有图标，icon和text至少存在一个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#downloaddescription",
              children: "DownloadDescription"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置下载按钮的文本描述。  不传入该参数表示没有文字描述，icon和text至少存在一个。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloadstyleoptions",
      children: "DownloadStyleOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载文件按钮中图标和文字的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "iconSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载控件上图标的尺寸，不支持百分比。  默认值：16vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "layoutDirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#downloadlayoutdirection",
              children: "DownloadLayoutDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载控件上图标和文字分布的方向。  默认值：DownloadLayoutDirection.HORIZONTAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载控件上文字的尺寸，不支持百分比。  默认值：16fp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontstyle",
              children: "FontStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载控件上文字的样式。  默认值：FontStyle.Normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFamily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载控件上文字的颜色。  默认值：#ffffffff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载控件上图标的颜色。  默认值：#ffffffff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textIconSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载控件中图标和文字的间距。  默认值：4vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloadiconstyle",
      children: "DownloadIconStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载文件按钮中图标的风格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "FULL_FILLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮展示填充样式图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LINES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮展示线条样式图标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloaddescription",
      children: "DownloadDescription"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载按钮中文字的内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DOWNLOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的文字描述为“下载”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNLOAD_FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的文字描述为“下载文件”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的文字描述为“保存”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAVE_IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的文字描述为“保存图片”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAVE_FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的文字描述为“保存文件”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNLOAD_AND_SHARE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的文字描述为“下载分享”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RECEIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的文字描述为“接收”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTINUE_TO_RECEIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的文字描述为“继续接收”。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloadlayoutdirection",
      children: "DownloadLayoutDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载文件按钮中图标和文字的排列方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HORIZONTAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载控件上图标和文字分布的方向为水平排列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VERTICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载控件上图标和文字分布的方向为垂直排列。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\nimport { picker } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { DownloadFileButton, DownloadLayoutDirection, DownloadIconStyle, DownloadDescription } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      DownloadFileButton({\n        contentOptions: {\n          icon: DownloadIconStyle.FULL_FILLED,\n          text: DownloadDescription.DOWNLOAD\n        },\n        styleOptions: {\n          iconSize: '16vp',\n          layoutDirection: DownloadLayoutDirection.HORIZONTAL,\n          fontSize: '16vp',\n          fontStyle: FontStyle.Normal,\n          fontWeight: FontWeight.Medium,\n          fontFamily: 'HarmonyOS Sans',\n          fontColor: '#ffffffff',\n          iconColor: '#ffffffff',\n          textIconSpace: '4vp'\n        }\n      })\n        .backgroundColor('#007dff')\n        .borderStyle(BorderStyle.Dotted)\n        .borderWidth(0)\n        .borderRadius('24vp')\n        .position({ x: 0, y: 0 })\n        .markAnchor({ x: 0, y: 0 })\n        .offset({ x: 0, y: 0 })\n        .constraintSize({})\n        .padding({\n          top: '12vp',\n          bottom: '12vp',\n          left: '24vp',\n          right: '24vp'\n        })\n        .onClick(() => {\n          this.downloadAction();\n        })\n    }\n  }\n\n  downloadAction() {\n    try {\n      const document = new picker.DocumentSaveOptions();\n      document.pickerMode = picker.DocumentPickerMode.DOWNLOAD;\n      new picker.DocumentViewPicker().save(document, (err: BusinessError, result: Array<string>) => {\n        if (err) {\n          return;\n        }\n        console.info(`downloadAction result:  ${JSON.stringify(result)}`);\n      });\n    } catch (e) {\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(163427)/* ["default"] */.A) + "",
        width: "400",
        height: "73"
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
354034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
163427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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