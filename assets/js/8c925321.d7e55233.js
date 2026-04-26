"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["64971"], {
293817(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_chip_ohos_arkui_advanced_chip_md_8c9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-chip-ohos-arkui-advanced-chip-md-8c9.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_chip_ohos_arkui_advanced_chip_md_8c9_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip/ohos-arkui-advanced-chip","title":"Chip","description":"Chip用于搜索框历史记录、邮件发送列表等场景。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip/ohos-arkui-advanced-chip.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip/ohos-arkui-advanced-chip","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip/ohos-arkui-advanced-chip","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Chip","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-chip"},"sidebar":"ref","previous":{"title":"组件预览","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/component-preview/ts-universal-component-previewer/ts-universal-component-previewer"},"next":{"title":"ChipGroup","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chipgroup/ohos-arkui-advanced-chipgroup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip/ohos-arkui-advanced-chip.md


const frontMatter = {
	title: 'Chip',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-chip'
};
const contentTitle = 'Chip';

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
  "value": "Chip",
  "id": "chip-1",
  "level": 2
}, {
  "value": "ChipOptions",
  "id": "chipoptions",
  "level": 2
}, {
  "value": "ChipSize",
  "id": "chipsize",
  "level": 2
}, {
  "value": "AccessibilitySelectedType14+",
  "id": "accessibilityselectedtype14",
  "level": 2
}, {
  "value": "IconCommonOptions",
  "id": "iconcommonoptions",
  "level": 2
}, {
  "value": "PrefixIconOptions",
  "id": "prefixiconoptions",
  "level": 2
}, {
  "value": "SuffixIconOptions",
  "id": "suffixiconoptions",
  "level": 2
}, {
  "value": "AccessibilityOptions14+",
  "id": "accessibilityoptions14",
  "level": 2
}, {
  "value": "ChipSuffixSymbolGlyphOptions14+",
  "id": "chipsuffixsymbolglyphoptions14",
  "level": 2
}, {
  "value": "ChipSymbolGlyphOptions12+",
  "id": "chipsymbolglyphoptions12",
  "level": 2
}, {
  "value": "LabelOptions",
  "id": "labeloptions",
  "level": 2
}, {
  "value": "CloseOptions14+",
  "id": "closeoptions14",
  "level": 2
}, {
  "value": "LabelMarginOptions",
  "id": "labelmarginoptions",
  "level": 2
}, {
  "value": "LocalizedLabelMarginOptions12+",
  "id": "localizedlabelmarginoptions12",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（自定义后缀图标）",
  "id": "示例1自定义后缀图标",
  "level": 3
}, {
  "value": "示例2（设置默认后缀图标）",
  "id": "示例2设置默认后缀图标",
  "level": 3
}, {
  "value": "示例3（不显示后缀图标）",
  "id": "示例3不显示后缀图标",
  "level": 3
}, {
  "value": "示例4（激活态操作块）",
  "id": "示例4激活态操作块",
  "level": 3
}, {
  "value": "示例5（设置symbol类型图标）",
  "id": "示例5设置symbol类型图标",
  "level": 3
}, {
  "value": "示例6（设置镜像效果）",
  "id": "示例6设置镜像效果",
  "level": 3
}, {
  "value": "示例7（Image类型无障碍朗读）",
  "id": "示例7image类型无障碍朗读",
  "level": 3
}, {
  "value": "示例8（symbol类型无障碍朗读）",
  "id": "示例8symbol类型无障碍朗读",
  "level": 3
}, {
  "value": "示例9（Chip组件无障碍朗读）",
  "id": "示例9chip组件无障碍朗读",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chip",
        children: "Chip"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chip用于搜索框历史记录、邮件发送列表等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(134831)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Chip, ChipOptions, ChipSize } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chip-1",
      children: "Chip"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chip(options:ChipOptions): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Builder"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常， 异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#chipoptions",
              children: "ChipOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Chip组件的参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chipoptions",
      children: "ChipOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChipOptions定义Chip的样式及具体式样参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#chipsize",
              children: "ChipSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
              children: "SizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip是否可选中。  默认值：true。  true：操作块可选中；false：操作块不可选中。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activated12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip是否为激活态。  默认值：false。  true：操作块为激活态；false：操作块为非激活态。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "prefixIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#prefixiconoptions",
              children: "PrefixIconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["前缀图标属性。  默认值：不显示前缀图标。  值为undefined时，按默认值处理。  prefixIcon和prefixSymbol同时设置时，显示prefixSymbol的效果，prefixIcon无效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "prefixSymbol12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#chipsymbolglyphoptions12",
              children: "ChipSymbolGlyphOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["前缀图标属性，symbol类型。  默认值：不显示前缀图标。  值为undefined时，按默认值处理。  prefixIcon和prefixSymbol同时设置时，显示prefixSymbol的效果，prefixIcon无效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#labeloptions",
              children: "LabelOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "suffixIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#suffixiconoptions",
              children: "SuffixIconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["后缀图标属性。  默认值：不显示后缀图标。  值为undefined时，按默认值处理。  suffixIcon和suffixSymbol同时设置时，显示suffixSymbol的效果，suffixIcon无效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "suffixSymbol12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#chipsymbolglyphoptions12",
              children: "ChipSymbolGlyphOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["后缀图标属性，symbol类型。  默认值：不显示后缀图标。  值为undefined时，按默认值处理。  suffixIcon和suffixSymbol同时设置时，显示suffixSymbol的效果，suffixIcon无效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "suffixSymbolOptions14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#chipsuffixsymbolglyphoptions14",
              children: "ChipSuffixSymbolGlyphOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["symbol类型后缀图标属性的无障碍朗读功能属性。  默认值：不显示后缀图标。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip背景颜色。  默认值：$r('sys.color.ohos_id_color_button_normal')。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activatedBackgroundColor12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip激活时的背景颜色。  默认值：$r('sys.color.ohos_id_color_emphasize')。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip背景圆角半径大小，不支持百分比。  默认值：$r('sys.float.ohos_id_corner_radius_button')。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allowClose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关闭图标是否显示。  默认值：true  true：删除图标显示；false：删除图标不显示。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onClose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "()=>void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认关闭图标点击事件。  值为undefined时，关闭图标点击事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onClicked12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip点击事件。  值为undefined时，Chip不能被点击。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "direction12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#direction",
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["布局方向。  默认值：Direction.Auto。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "closeOptions14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#closeoptions14",
              children: "CloseOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认关闭图标的无障碍朗读功能属性。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityDescription14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip组件的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的结果。特别是当这些结果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。  默认值：空字符串。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityLevel14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip组件无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务所识别。  支持的值为:  \"auto\"：当前组件会转化为\"yes\"。  \"yes\"：当前组件可被无障碍辅助服务所识别。  \"no\"：当前组件不可被无障碍辅助服务所识别。  \"no-hide-descendants\"：当前组件及其所有子组件不可被无障碍辅助服务所识别。  默认值：\"auto\"。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilitySelectedType14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#accessibilityselectedtype14",
              children: "AccessibilitySelectedType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip组件选中态类型。  默认值：当设置了activated属性但未指定accessibilitySelectedType时，默认使用CHECKED类型。当未设置activated属性时，默认使用CLICKED类型。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFontScale23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
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
            children: "minFontScale23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
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
            children: "padding23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chip组件的内边距。  默认值：  - size为ChipSize.SMALL并且activated为true时，默认值：{ start: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'), end: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}  - size为ChipSize.SMALL并且activated为false时，默认值：{ start: LengthMetrics.resource('sys.float.chip_small_text_padding'), end: LengthMetrics.resource('sys.float.chip_small_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}  - size不为ChipSize.SMALL并且activated为true时，默认值：{ start: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'), end: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}  - size不为ChipSize.SMALL并且activated为false时，默认值：{ start: LengthMetrics.resource('sys.float.chip_normal_text_padding'), end: LengthMetrics.resource('sys.float.chip_normal_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["统一设置Chip组件的文本与图标的字体大小，不支持百分比。  该fontSize的优先级低于prefixSymbol、label、suffixSymbol和closeOptions中的fontSize属性。  默认值：  - size为ChipSize.SMALL时，文本默认值：$r('sys.float.chip_small_font_size')；图标默认值：$r('sys.float.chip_small_icon_size')  - 其他情况下，文本默认值：$r('sys.float.chip_normal_font_size')；图标默认值：$r('sys.float.chip_normal_icon_size')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(502132)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当suffixSymbol有传入参数时，suffixIcon和allowClose不生效；当suffixSymbol没有传入参数而suffixIcon有传入参数时，allowClose不生效；当suffixSymbol和suffixIcon都没有传入参数时，allowClose决定是否显示删除图标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "backgroundColor和activatedBackgroundColor赋值为undefined时，显示默认背景颜色；赋值为非法值时，背景颜色透明。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prefixSymbol/suffixSymbol的fontColor默认值为：normalFontColor: [$r('sys.color.ohos_id_color_primary')]、activatedFontColor: [$r('sys.color.ohos_id_color_text_primary_contrary')]。fontColor默认值为16。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prefixIcon的fillColor默认值为：$r('sys.color.ohos_id_color_secondary')，suffixIcon的fillColor默认值为：$r('sys.color.ohos_id_color_primary')。fillColor对颜色的解析与Image组件保持一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prefixIcon和suffixIcon的activatedFillColor默认值均为：$r('sys.color.ohos_id_color_text_primary_contrary')。activatedFillColor对颜色的解析与Image组件保持一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chipsize",
      children: "ChipSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChipSize是Chip可指定的尺寸类型，如普通型Chip。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"NORMAL\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "normal尺寸操作块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"SMALL\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "small尺寸操作块。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityselectedtype14",
      children: "AccessibilitySelectedType14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AccessibilitySelectedType是Chip可指定的选中态类型，用于控制无障碍服务如何向用户传达组件的选中状态。不同的选中态类型提供了不同的语义和用户体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "CLICKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单击型。组件不向无障碍服务报告任何选中状态，仅作为可单击组件使用。适用于执行某个操作但不保持状态的场景，如普通按钮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHECKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["复选型。组件通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitychecked13",
              children: "accessibilityChecked"
            }), " 属性向无障碍服务报告选中状态。适用于多选场景，如标签筛选、属性选择等。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["单选型。组件通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityselected13",
              children: "accessibilitySelected"
            }), " 属性向无障碍服务报告选中状态。适用于表示当前选中项的场景，如导航栏标签、单选列表项等。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iconcommonoptions",
      children: "IconCommonOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IconCommonOptions定义图标的共通属性。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标图片或图片地址引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
              children: "SizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标大小，不支持百分比。  默认值：  - 当ChipOptions.size为ChipSize.SMALL时，默认值为：{width: $r('sys.float.chip_small_icon_size'), height: $r('sys.float.chip_small_icon_size')}  - 当ChipOptions.size为ChipSize.NORMAL时，默认值为：{width: $r('sys.float.chip_normal_icon_size'), height: $r('sys.float.chip_normal_icon_size')}  单位：vp  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fillColor"
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
            children: "图标填充颜色。  默认值：$r('sys.color.chip_usually_icon_color')  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activatedFillColor12+"
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
            children: "操作块激活时图标填充颜色。  默认值：$r('sys.color.chip_active_icon_color')  值为undefined时，按默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(635362)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅在图片格式为SVG时，fillColor和activatedFillColor属性才生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prefixiconoptions",
      children: "PrefixIconOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PrefixIconOptions定义前缀图标的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#iconcommonoptions",
        children: "IconCommonOptions"
      }), "。"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "suffixiconoptions",
      children: "SuffixIconOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SuffixIconOptions定义后缀图标的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#iconcommonoptions",
        children: "IconCommonOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["后缀图标设定事件。  值为undefined时，不设定后缀图标事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityText14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["后缀图标无障碍文本属性。当后缀图标不包含文本属性时，屏幕朗读选中后缀图标时不播报，使用者无法清楚地知道当前是否选中了后缀图标。为了解决此场景，开发人员可为不包含文字信息的后缀图标设置无障碍文本，当屏幕朗读选中后缀图标时播报无障碍文本的内容，帮助屏幕朗读的使用者清楚地知道自己是否选中了后缀图标。  默认值：‘ ’  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityDescription14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["后缀图标的无障碍描述。此描述用于向用户详细解释后缀图标，开发人员应为后缀图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从后缀图标的属性和无障碍文本中直接获知时。如果后缀图标同时具备文本属性和无障碍说明属性，当后缀图标被选中时，系统将首先播报后缀图标的文本属性，随后播报无障碍说明属性的内容。  默认值：‘ ’  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityLevel14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["后缀图标的无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务识别。  支持的值为:  \"auto\"：当前组件存在action时转化为\"yes\"，不存在action时，转化为\"no\"。  \"yes\"：当前组件可被无障碍辅助服务所识别。  \"no\"：当前组件不可被无障碍辅助服务所识别。  \"no-hide-descendants\"：当前组件及其所有子组件不可被无障碍辅助服务所识别。  默认值：\"auto\"。  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityoptions14",
      children: "AccessibilityOptions14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后缀图标的无障碍朗读功能属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "accessibilityText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍文本属性。当组件无文本属性时，屏幕朗读选中此组件不会播报，导致使用者无法清楚了解当前选中的组件。开发人员可为此类组件设置无障碍文本，屏幕朗读时将播报该文本，帮助使用者明确选中了什么组件。  默认值：‘ ’  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityDescription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍描述。此描述用于向用户详细解释当前组件，开发人员应提供详尽的文本说明，以协助用户理解即将执行的操作及其后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。  默认值：‘ ’  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍重要性。用于控制组件是否可被无障碍辅助服务识别。  支持的值为:  \"auto\"：当前组件会转换为\"yes\"。  \"yes\"：当前组件可被无障碍辅助服务所识别。  \"no\"：当前组件不可被无障碍辅助服务所识别。  \"no-hide-descendants\"：当前组件及其所有子组件不可被无障碍辅助服务所识别。  默认值：\"auto\"。  值为undefined时，按默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chipsuffixsymbolglyphoptions14",
      children: "ChipSuffixSymbolGlyphOptions14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "symbol类型后缀图标属性的无障碍朗读功能属性类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#voidcallback12",
              children: "VoidCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后缀图标设定事件。  默认值：undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "normalAccessibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#accessibilityoptions14",
              children: "AccessibilityOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非激活态无障碍朗读功能属性。  默认值：undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activatedAccessibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#accessibilityoptions14",
              children: "AccessibilityOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活态无障碍朗读功能属性。  默认值：undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chipsymbolglyphoptions12",
      children: "ChipSymbolGlyphOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChipSymbolGlyphOptions定义前缀图标和后缀图标的属性。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非激活时图标设定。  默认值：不显示前缀图标或后缀图标  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活时图标设定。  默认值：不显示前缀图标或后缀图标  值为undefined时，按默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(806832)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#symboleffect12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "SymbolEffect"
      }), "修改动效类型及effectStrategy设置动效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "labeloptions",
      children: "LabelOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LabelOptions定义文本属性。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本文字内容。"
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
            children: "文字字号，不支持百分比。  默认值：$r('sys.float.ohos_id_text_size_button2')  值为undefined时，按默认值处理。"
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
            children: "文字颜色。  默认值：$r('sys.color.ohos_id_color_text_primary')  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activatedFontColor12+"
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
            children: "操作块激活时的文字颜色。  默认值：$r('sys.color.ohos_id_color_text_primary_contrary')  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFamily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文字字体。  默认值：\"HarmonyOS Sans\"  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "labelMargin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#labelmarginoptions",
              children: "LabelMarginOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本与左右侧图标之间间距。  默认值：  size为ChipSize.SMALL时，默认值：{ left: 4, right: 4 }  size为ChipSize.NORMAL时，默认值：{ left: 6, right: 6 }  单位：vp  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "localizedLabelMargin12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedlabelmarginoptions12",
              children: "LocalizedLabelMarginOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地化文本与左右侧图标之间间距。  默认值：  size为ChipSize.SMALL时，默认值：  { start: LengthMetrics.resource($r('sys.float.chip_small_text_margin')), end: LengthMetrics.resource($r('sys.float.chip_small_text_margin')) }  size为ChipSize.NORMAL时，默认值：  { start: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')), end: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')) }  值为undefined时，按默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "closeoptions14",
      children: "CloseOptions14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CloseOptions用于定义Chip组件默认的关闭图标功能属性，包括无障碍功能属性，其中accessibilityText默认为\"删除\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#accessibilityoptions14",
        children: "AccessibilityOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Chip组件默认关闭图标的大小，不支持百分比。  默认值：  size为ChipSize.SMALL时，默认值：$r('sys.float.chip_small_font_size')  其他情况默认值：$r('sys.float.chip_normal_font_size')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "labelmarginoptions",
      children: "LabelMarginOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LabelMarginOptions用于定义文本与左右侧图标之间间距。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "left"
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
            children: "文本与左侧图标之间间距，不支持百分比。  默认值：  size为ChipSize.SMALL时，left默认值：4  size为ChipSize.NORMAL时，left默认值：6  单位：vp  超出取值范围按默认值处理。  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "right"
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
            children: "文本与右侧图标之间间距，不支持百分比。  默认值：  size为ChipSize.SMALL时，right默认值：4  size为ChipSize.NORMAL时，right默认值：6  单位：vp  超出取值范围按默认值处理。  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localizedlabelmarginoptions12",
      children: "LocalizedLabelMarginOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LocalizedLabelMarginOptions用于定义本地化文本与左右侧图标之间间距。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本与左侧图标之间间距，不支持百分比。  默认值：  size为ChipSize.SMALL时，start默认值:  LengthMetrics.resource($r('sys.float.chip_small_text_margin'))  size为ChipSize.NORMAL时，start默认值：  LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本与右侧图标之间间距，不支持百分比。  默认值：  size为ChipSize.SMALL时，end默认值：  LengthMetrics.resource($r('sys.float.chip_small_text_margin'))  size为ChipSize.NORMAL时，end默认值:  LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))  值为undefined时，按默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1自定义后缀图标",
      children: "示例1（自定义后缀图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过配置suffixIcon实现自定义操作块的后缀图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Chip, ChipSize, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 10 }) {\n      Chip({\n        // 设置前缀图标属性。\n        prefixIcon: {\n          // 'app.media.chips'仅作示例，请替换为实际使用图片。\n          src: $r('app.media.chips'),\n          size: { width: 16, height: 16 },\n          fillColor: Color.Red\n        },\n        // 设置文本属性。\n        label: {\n          text: '操作块',\n          fontSize: 12,\n          fontColor: Color.Blue,\n          fontFamily: 'HarmonyOS Sans',\n          labelMargin: { left: 20, right: 30 }\n        },\n        // 设置后缀图标属性。\n        suffixIcon: {\n          // 'app.media.close'仅作示例，请替换为实际使用图片。\n          src: $r('app.media.close'),\n          size: { width: 16, height: 16 },\n          fillColor: Color.Red\n        },\n        size: ChipSize.NORMAL,\n        allowClose: false,\n        enabled: true,\n        backgroundColor: $r('sys.color.ohos_id_color_button_normal'),\n        borderRadius: $r('sys.float.ohos_id_corner_radius_button'),\n        minFontScale: 0.2,\n        maxFontScale: 2,\n        padding: {\n          start: LengthMetrics.vp(20),\n          end: LengthMetrics.vp(20)\n        },\n        fontSize: 12\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(12828)/* ["default"] */.A) + "",
        width: "394",
        height: "188"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置默认后缀图标",
      children: "示例2（设置默认后缀图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置allowClose为true，显示后缀移除图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Chip, ChipSize, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 10 }) {\n      Chip({\n        // 设置前缀图标属性。\n        prefixIcon: {\n          // 'app.media.chips'仅作示例，请替换为实际使用图片。\n          src: $r('app.media.chips'),\n          size: { width: 16, height: 16 },\n          fillColor: Color.Blue\n        },\n        // 设置文本属性。\n        label: {\n          text: '操作块',\n          fontSize: 12,\n          fontColor: Color.Blue,\n          fontFamily: 'HarmonyOS Sans',\n          labelMargin: { left: 20, right: 30 }\n        },\n        size: ChipSize.NORMAL,\n        allowClose: true,\n        closeOptions: {fontSize: 12},\n        enabled: true,\n        backgroundColor: $r('sys.color.ohos_id_color_button_normal'),\n        borderRadius: $r('sys.float.ohos_id_corner_radius_button'),\n        minFontScale: 0.2,\n        maxFontScale: 2,\n        padding: {\n          start: LengthMetrics.vp(20),\n          end: LengthMetrics.vp(20)\n        },\n        fontSize: 12\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(985478)/* ["default"] */.A) + "",
        width: "337",
        height: "173"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3不显示后缀图标",
      children: "示例3（不显示后缀图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置allowClose为false，隐藏后缀移除图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Chip, ChipSize, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 10 }) {\n      Chip({\n        // 设置前缀图标属性。\n        prefixIcon: {\n          // 'app.media.chips'仅作示例，请替换为实际使用图片。\n          src: $r('app.media.chips'),\n          size: { width: 16, height: 16 },\n          fillColor: Color.Blue\n        },\n        // 设置文本属性。\n        label: {\n          text: '操作块',\n          fontSize: 12,\n          fontColor: Color.Blue,\n          fontFamily: 'HarmonyOS Sans',\n          labelMargin: { left: 20, right: 30 }\n        },\n        size: ChipSize.SMALL,\n        allowClose: false,\n        enabled: true,\n        backgroundColor: $r('sys.color.ohos_id_color_button_normal'),\n        borderRadius: $r('sys.float.ohos_id_corner_radius_button'),\n        onClose: () => {\n          console.info('chip on close');\n        },\n        minFontScale: 0.2,\n        maxFontScale: 2,\n        padding: {\n          start: LengthMetrics.vp(20),\n          end: LengthMetrics.vp(20)\n        },\n        fontSize: 12\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(410227)/* ["default"] */.A) + "",
        width: "275",
        height: "108"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4激活态操作块",
      children: "示例4（激活态操作块）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置activated实现激活态操作块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Chip, ChipSize } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State isActivated: boolean = false;\n\n  build() {\n    Column({ space: 10 }) {\n      Chip({\n        // 设置前缀图标属性。\n        prefixIcon: {\n          // 'app.media.chips'仅作示例，请替换为实际使用图片。\n          src: $r('app.media.chips'),\n          size: { width: 16, height: 16 },\n          fillColor: Color.Blue,\n          activatedFillColor: $r('sys.color.ohos_id_color_text_primary_contrary')\n        },\n        // 设置文本属性。\n        label: {\n          text: '操作块',\n          fontSize: 12,\n          fontColor: Color.Blue,\n          activatedFontColor: $r('sys.color.ohos_id_color_text_primary_contrary'),\n          fontFamily: 'HarmonyOS Sans',\n          labelMargin: { left: 20, right: 30 }\n        },\n        size: ChipSize.NORMAL,\n        allowClose: true,\n        enabled: true,\n        activated: this.isActivated,\n        backgroundColor: $r('sys.color.ohos_id_color_button_normal'),\n        activatedBackgroundColor: $r('sys.color.ohos_id_color_emphasize'),\n        borderRadius: $r('sys.float.ohos_id_corner_radius_button'),\n        onClose: () => {\n          console.info('chip on close');\n        },\n        onClicked: () => {\n          console.info('chip on clicked');\n        }\n      })\n       // 点击“改变激活状态”，用于控制操作块的激活与关闭。\n      Button('改变激活状态')\n        .onClick(() => {\n          this.isActivated = !this.isActivated;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(427666)/* ["default"] */.A) + "",
        width: "226",
        height: "163"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置symbol类型图标",
      children: "示例5（设置symbol类型图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chip组件的前缀图标使用symbol类型资源展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Chip, ChipSize, SymbolGlyphModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State isActivated: boolean = false;\n\n  build() {\n    Column({ space: 10 }) {\n      Chip({\n        // 设置前缀图标属性，symbol类型。\n        prefixSymbol: {\n          normal: new SymbolGlyphModifier($r('sys.symbol.ohos_star')).fontSize(16).fontColor([Color.Green]),\n          activated: new SymbolGlyphModifier($r('sys.symbol.ohos_star')).fontSize(16).fontColor([Color.Red]),\n        },\n        // 设置文本属性。\n        label: {\n          text: '操作块',\n          fontSize: 12,\n          fontColor: Color.Blue,\n          activatedFontColor: $r('sys.color.ohos_id_color_text_primary_contrary'),\n          fontFamily: 'HarmonyOS Sans',\n          labelMargin: { left: 20, right: 30 },\n        },\n        size: ChipSize.NORMAL,\n        allowClose: true,\n        enabled: true,\n        activated: this.isActivated,\n        backgroundColor: $r('sys.color.ohos_id_color_button_normal'),\n        activatedBackgroundColor: $r('sys.color.ohos_id_color_emphasize'),\n        borderRadius: $r('sys.float.ohos_id_corner_radius_button'),\n        onClose: () => {\n          console.info('chip on close');\n        },\n        onClicked: () => {\n          console.info('chip on clicked');\n        }\n      })\n\n      Button('改变激活状态')\n        .onClick(() => {\n          this.isActivated = !this.isActivated;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(837848)/* ["default"] */.A) + "",
        width: "189",
        height: "116"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置镜像效果",
      children: "示例6（设置镜像效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置direction实现Chip布局镜像化展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Chip, ChipSize, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ChipPage {\n  build() {\n    Column() {\n      Chip({\n        direction: Direction.Rtl,\n        // 设置前缀图标属性。\n        prefixIcon: {\n          // 'app.media.chips'仅作示例，请替换为实际使用图片。\n          src: $r('app.media.chips'),\n          size: { width: 16, height: 16 },\n          fillColor: Color.Red,\n        },\n        // 设置文本属性。\n        label: {\n          text: '操作块',\n          fontSize: 12,\n          fontColor: Color.Blue,\n          fontFamily: 'HarmonyOS Sans',\n          localizedLabelMargin: { start: LengthMetrics.vp(20), end: LengthMetrics.vp(20) },\n        },\n        // 设置后缀图标属性。\n        suffixIcon: {\n          // 'app.media.close'仅作示例，请替换为实际使用图片。\n          src: $r('app.media.close'),\n          size: { width: 16, height: 16 },\n          fillColor: Color.Red,\n        },\n        size: ChipSize.NORMAL,\n        allowClose: false,\n        enabled: true,\n        backgroundColor: $r('sys.color.ohos_id_color_button_normal'),\n        borderRadius: $r('sys.float.ohos_id_corner_radius_button')\n      })\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(577039)/* ["default"] */.A) + "",
        width: "450",
        height: "155"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7image类型无障碍朗读",
      children: "示例7（Image类型无障碍朗读）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例代码实现Chip组件Image类型后缀图标的无障碍朗读功能，点击后缀图标播报“图标，按钮，新手提醒”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Chip } from '@kit.ArkUI';\n\n@Builder\nfunction DefaultFunction(): void {\n}\n\n@Component\nstruct SectionGroup {\n  @Prop\n  @Require\n  title: ResourceStr;\n  @BuilderParam\n  @Require\n  content: () => void = DefaultFunction;\n\n  build() {\n    Column({ space: 4 }) {\n      Text(this.title)\n        .fontColor('#FF666666')\n        .fontSize(12)\n      Column({ space: 8 }) {\n        this.content()\n      }\n    }\n    .alignItems(HorizontalAlign.Start)\n    .width('100%')\n  }\n}\n\n@Component\nstruct SectionItem {\n  @Prop\n  @Require\n  title: ResourceStr;\n  @BuilderParam\n  @Require\n  content: () => void = DefaultFunction;\n\n  build() {\n    Column({ space: 12 }) {\n      Text(this.title)\n      this.content()\n    }\n    .backgroundColor('#FFFFFFFF')\n    .borderRadius(12)\n    .padding(12)\n    .width('100%')\n  }\n}\n\n@Entry\n@Component\nstruct ChipExample2 {\n  @State activated: boolean = false;\n\n  build() {\n    NavDestination() {\n      Scroll() {\n        SectionGroup({ title: '后缀图标播报' }) {\n          SectionItem({ title: '自定义播报' }) {\n            Chip({\n              label: { text: '操作块' },\n              suffixIcon: {\n                src: $r('sys.media.ohos_ic_public_cut'),\n                accessibilityText: '图标', // 播报“图标，按钮，新手提醒”\n                accessibilityDescription: '新手提醒',\n                action: () => {\n                  this.getUIContext().getPromptAction().showToast({\n                    message: '后缀图标被点击！'\n                  });\n                }\n              },\n              onClicked: () => {\n                this.getUIContext().getPromptAction().showToast({\n                  message: '操作块被点击！'\n                });\n              }\n            })\n          }\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8symbol类型无障碍朗读",
      children: "示例8（symbol类型无障碍朗读）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例代码实现Chip组件symbol类型后缀图标的无障碍朗读功能，点击后缀图标播报“音乐，按钮，新手提醒”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Chip, SymbolGlyphModifier } from '@kit.ArkUI';\n\n@Builder\nfunction DefaultFunction(): void {\n}\n\n@Component\nstruct SectionGroup {\n  @Prop\n  @Require\n  title: ResourceStr;\n  @BuilderParam\n  @Require\n  content: () => void = DefaultFunction;\n\n  build() {\n    Column({ space: 4 }) {\n      Text(this.title)\n        .fontColor('#FF666666')\n        .fontSize(12)\n      Column({ space: 8 }) {\n        this.content()\n      }\n    }\n    .alignItems(HorizontalAlign.Start)\n    .width('100%')\n  }\n}\n\n@Component\nstruct SectionItem {\n  @Prop\n  @Require\n  title: ResourceStr;\n  @BuilderParam\n  @Require\n  content: () => void = DefaultFunction;\n\n  build() {\n    Column({ space: 12 }) {\n      Text(this.title)\n      this.content()\n    }\n    .backgroundColor('#FFFFFFFF')\n    .borderRadius(12)\n    .padding(12)\n    .width('100%')\n  }\n}\n\n@Entry\n@Component\nstruct ChipExample2 {\n  @State activated: boolean = false;\n\n  build() {\n    NavDestination() {\n      Scroll() {\n        SectionGroup({ title: '后缀Symbol播报' }) {\n          SectionItem({ title: 'activatedAccessibility' }) {\n            Chip({\n              label: { text: '操作块' },\n              activated: true,\n              suffixSymbol: {\n                activated: new SymbolGlyphModifier($r('sys.symbol.media_sound'))\n                  .fontSize(72),\n              },\n              suffixSymbolOptions: {\n                activatedAccessibility: {\n                  accessibilityText: '音乐', // 播报“音乐，按钮，新手提醒”\n                  accessibilityDescription: '新手提醒'\n                },\n                action: () => {\n                  this.getUIContext().getPromptAction().showToast({\n                    message: '后缀Symbol被点击！'\n                  });\n                }\n              },\n              onClicked: () => {\n                this.getUIContext().getPromptAction().showToast({\n                  message: '操作块被点击！'\n                });\n              }\n            })\n          }\n\n          SectionItem({ title: 'normalAccessibility' }) {\n            Chip({\n              label: { text: '操作块' },\n              suffixSymbol: {\n                normal: new SymbolGlyphModifier($r('sys.symbol.media_sound'))\n                  .fontSize(72),\n              },\n              suffixSymbolOptions: {\n                normalAccessibility: {\n                  accessibilityText: '音乐', // 播报“音乐，按钮，新手提醒”\n                  accessibilityDescription: '新手提醒'\n                },\n                action: () => {\n                  this.getUIContext().getPromptAction().showToast({\n                    message: '后缀Symbol被点击！'\n                  });\n                }\n              },\n              onClicked: () => {\n                this.getUIContext().getPromptAction().showToast({\n                  message: '操作块被点击！'\n                });\n              }\n            })\n          }\n        }\n      }\n    }\n    .padding({\n      top: 8,\n      bottom: 8,\n      left: 16,\n      right: 16,\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9chip组件无障碍朗读",
      children: "示例9（Chip组件无障碍朗读）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例展示Chip组件的无障碍属性设置，包括不同的accessibilitySelectedType类型和各种无障碍属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AccessibilitySelectedType, Chip, ChipSize } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ChipAccessibilityExample {\n  @State clickedChipActivated: boolean = false;\n  @State checkedChipActivated: boolean = false;\n  @State selectedChipActivated: boolean = false;\n\n  build() {\n    Column({ space: 20 }) {\n      Text('Chip组件无障碍属性示例').fontSize(20).fontWeight(FontWeight.Bold)\n\n      // 点击型Chip - CLICKED类型\n      Chip({\n        label: { text: '点击型Chip' },\n        prefixIcon: {\n          src: $r('sys.media.ohos_app_icon'),\n          fillColor: Color.Blue\n        },\n        size: ChipSize.NORMAL,\n        accessibilitySelectedType: AccessibilitySelectedType.CLICKED, // 点击型\n        accessibilityDescription: '这是一个点击型Chip', // 整体无障碍描述\n        accessibilityLevel: 'yes', // 确保可被无障碍服务识别\n        closeOptions: {\n          accessibilityDescription: '删除此Chip，此操作无法撤销' // 为删除按钮提供详细说明\n        },\n        activated: this.clickedChipActivated,\n        onClicked: () => {\n          this.clickedChipActivated = !this.clickedChipActivated;\n          this.getUIContext().getPromptAction().showToast({ message: '点击型Chip被点击' });\n        },\n        onClose: () => {\n          this.getUIContext().getPromptAction().showToast({ message: '点击型Chip的关闭按钮被点击' });\n        }\n      })\n\n      // 复选型Chip - CHECKED类型\n      Chip({\n        label: { text: '复选型Chip' },\n        prefixIcon: {\n          src: $r('sys.media.ohos_app_icon'),\n          fillColor: Color.Green\n        },\n        size: ChipSize.NORMAL,\n        accessibilitySelectedType: AccessibilitySelectedType.CHECKED, // 复选型\n        accessibilityDescription: '这是一个复选型Chip', // 整体无障碍描述\n        activated: this.checkedChipActivated,\n        onClicked: () => {\n          this.checkedChipActivated = !this.checkedChipActivated;\n          this.getUIContext().getPromptAction().showToast({\n            message: this.checkedChipActivated ? '复选型Chip被选中' : '复选型Chip被取消选中'\n          });\n        }\n      })\n\n      // 单选型Chip - SELECTED类型\n      Chip({\n        label: { text: '单选型Chip' },\n        prefixIcon: {\n          src: $r('sys.media.ohos_app_icon'),\n          fillColor: Color.Red\n        },\n        size: ChipSize.NORMAL,\n        accessibilitySelectedType: AccessibilitySelectedType.SELECTED, // 单选型\n        accessibilityDescription: '这是一个单选型Chip', // 整体无障碍描述\n        activated: this.selectedChipActivated,\n        onClicked: () => {\n          this.selectedChipActivated = !this.selectedChipActivated;\n          this.getUIContext().getPromptAction().showToast({\n            message: this.selectedChipActivated ? '单选型Chip被选中' : '单选型Chip被取消选中'\n          });\n        }\n      })\n\n      // 无障碍级别设置示例\n      Chip({\n        label: { text: '无障碍级别为no' },\n        size: ChipSize.NORMAL,\n        accessibilityLevel: 'no', // 此Chip不能被无障碍服务识别\n        closeOptions: {\n          accessibilityLevel: 'no'\n        },\n        backgroundColor: '#CCCCCC',\n        onClicked: () => {\n          this.getUIContext().getPromptAction().showToast({ message: '此Chip无法被无障碍服务识别' });\n        }\n      })\n    }\n    .width('100%')\n    .padding(16)\n  }\n}\n"
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
502132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
134831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
410227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800446-5dd48b8f04ed119ff91e38dc7d152908.png");

},
577039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480097-41a1718ac0baafb0f1de61cd413539a9.png");

},
837848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960096-9b339b36e0caaf1c17aa49adda88c4c9.gif");

},
985478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480095-e4c1f02fd54ef75e09a7abceac9ab39c.png");

},
427666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
635362(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
12828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960094-d0d80402b580dee8b792fa269f16ef72.png");

},
806832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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