"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["51570"], {
542831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_configuration_arkts_ui_widget_configuration_md_1d5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-configuration-arkts-ui-widget-configuration-md-1d5.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_configuration_arkts_ui_widget_configuration_md_1d5_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget-configuration/arkts-ui-widget-configuration","title":"配置ArkTS卡片的配置文件","description":"卡片相关的配置文件包括FormExtensionAbility配置和卡片配置。如果是独立卡片包，还会包含独立卡片包配置。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget-configuration/arkts-ui-widget-configuration.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget-configuration","slug":"/form-kit/arkts-ui/arkts-ui-widget-configuration/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"配置ArkTS卡片的配置文件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-configuration","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建ArkTS卡片","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-creation/"},"next":{"title":"管理ArkTS卡片生命周期","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-lifecycle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget-configuration/arkts-ui-widget-configuration.md


const frontMatter = {
	title: '配置ArkTS卡片的配置文件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-configuration',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '配置ArkTS卡片的配置文件';

const assets = {

};



const toc = [{
  "value": "FormExtensionAbility配置",
  "id": "formextensionability配置",
  "level": 2
}, {
  "value": "独立卡片包配置",
  "id": "独立卡片包配置",
  "level": 2
}, {
  "value": "卡片配置",
  "id": "卡片配置",
  "level": 2
}, {
  "value": "配置文件字段说明",
  "id": "配置文件字段说明",
  "level": 3
}, {
  "value": "supportDeviceTypes标签",
  "id": "supportdevicetypes标签",
  "level": 3
}, {
  "value": "supportDevicePerformanceClasses标签",
  "id": "supportdeviceperformanceclasses标签",
  "level": 3
}, {
  "value": "window标签",
  "id": "window标签",
  "level": 3
}, {
  "value": "funInteractionParams标签",
  "id": "funinteractionparams标签",
  "level": 3
}, {
  "value": "sceneAnimationParams标签",
  "id": "sceneanimationparams标签",
  "level": 3
}, {
  "value": "standby标签",
  "id": "standby标签",
  "level": 3
}, {
  "value": "配置文件示例",
  "id": "配置文件示例",
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
        id: "配置arkts卡片的配置文件",
        children: "配置ArkTS卡片的配置文件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["卡片相关的配置文件包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability",
        children: "FormExtensionAbility"
      }), "配置和卡片配置。如果是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-creation#%E6%96%B9%E5%BC%8F%E4%BA%8C%E7%8B%AC%E7%AB%8B%E5%8C%85%E6%96%B9%E5%BC%8F%E5%88%9B%E5%BB%BA%E5%8D%A1%E7%89%87",
        children: "独立卡片包"
      }), "，还会包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E7%8B%AC%E7%AB%8B%E5%8D%A1%E7%89%87%E5%8C%85%E9%85%8D%E7%BD%AE",
        children: "独立卡片包配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789049)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["卡片五元组是确认卡片唯一的要素信息。五元组分别为bundleName、moduleName、abilityName、formName、formDimension。其中bundleName是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
          children: "app.json5配置文件标签"
        }), "中bundleName配置项、moduleName是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
          children: "module.json5配置文件标签"
        }), "中的name配置项、abilityName是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
          children: "abilities标签"
        }), "中的name配置项、formName是", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
          children: "配置文件字段说明"
        }), "中的name配置项、formDimension对应的是", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
          children: "配置文件字段说明"
        }), "中的supportDimensions配置项。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "五元组不建议使用资源文件导入配置。使用资源文件导入时，资源文件新增字段等，对应的ID都会发生改变，会被认为五元组有改变。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用升级后五元组有改变，系统中对应的卡片会被删除，在屏幕上会消失。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "formextensionability配置",
      children: "FormExtensionAbility配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["卡片需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "的extensionAbilities标签下，配置FormExtensionAbility相关信息。FormExtensionAbility需要填写metadata元信息标签，其中键名称为固定字符串 “ohos.extension.form”，资源为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8D%A1%E7%89%87%E9%85%8D%E7%BD%AE",
        children: "卡片具体配置信息的资源索引"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"extensionAbilities\": [\n      {\n        \"name\": \"EntryFormAbility\",\n        \"srcEntry\": \"./ets/entryformability/EntryFormAbility.ets\",\n        \"label\": \"$string:EntryFormAbility_label\",\n        \"description\": \"$string:EntryFormAbility_desc\",\n        \"type\": \"form\",\n        \"metadata\": [\n          {\n            \"name\": \"ohos.extension.form\",\n            \"resource\": \"$profile:form_config\"\n          }\n        ]\n      }\n    ],\n    // 只在独立卡片包形态中会使用，用来关联卡片包模块。\n    \"formWidgetModule\": \"library\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "独立卡片包配置",
      children: "独立卡片包配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相对应地，在卡片包的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中，formExtensionModule字段用来关联应用包的module。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"name\": \"library\",\n    \"type\": \"shared\",\n    \"description\": \"$string:shared_desc\",\n    \"deviceTypes\": [\n      \"phone\"\n    ],\n    \"deliveryWithInstall\": true,\n    // 只在独立卡片包形态中会使用，用来关联应用包模块。\n    \"formExtensionModule\": \"entry\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片配置",
      children: "卡片配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在上述FormExtensionAbility的元信息metadata配置项中，可以指定卡片具体配置信息的资源索引。例如当resource指定为$profile:form_config时，会使用开发视图的resources/base/profile/目录下的form_config.json作为卡片profile配置文件。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-creation",
        children: "创建卡片"
      }), "时会自动生成form_config.json配置文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置文件字段说明",
      children: "配置文件字段说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 卡片form_config.json配置文件"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示应用的全部卡片配置信息。  最多支持配置16个卡片，若超过16个，则保留配置的前16个。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片的名称，字符串最大长度为127字节。用于开发者区分不同的卡片。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该字段不建议引用资源文件。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片的展示名称。主要在卡片管理页面显示，对应卡片预览下", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/formkit-overview#%E5%8D%A1%E7%89%87%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
              children: "卡片管理页面"
            }), "中的\"cardName\"，用于展示卡片信息，建议能够体现卡片的核心功能或用途。支持字符串或字符串资源索引，建议使用字符串资源索引方式声明，以支持完整多语言能力。字符串最小长度为1字节，最大长度为30字节。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片的描述。用于在卡片管理页面展示卡片功能描述，对应卡片预览下", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/formkit-overview#%E5%8D%A1%E7%89%87%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
              children: "卡片管理页面"
            }), "中的\"This is a service widget.\"。支持字符串或字符串资源索引，建议使用字符串资源索引方式声明，以支持完整多语言能力。字符串最大长度为255字节。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示卡片对应的UI代码的完整路径。当为ArkTS卡片时，完整路径需要包含卡片文件的后缀，如：\"./ets/widget/pages/WidgetCard.ets\"。当为JS卡片时，完整路径无需包含卡片文件的后缀，如：\"./js/widget/pages/WidgetCard\"。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uiSyntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示该卡片的类型，当前支持如下两种类型：  - arkts：当前卡片为ArkTS卡片。  - hml：当前卡片为JS卡片。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为“hml”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "window"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于定义与显示窗口相关的配置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该字段仅对JS卡片生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可缺省，缺省值参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#window%E6%A0%87%E7%AD%BE",
              children: "window标签"
            }), "表格。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isDefault"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示该卡片是否为默认卡片(在卡片中心内希望优先展示的卡片)，每个应用有且只有一个默认卡片。  - true：默认卡片。  - false：非默认卡片。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  应用上架时每个应用只允许配置一张默认卡片。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colorMode(deprecated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片的主题样式，取值范围如下：  - auto：跟随系统的颜色模式值选取主题。  - dark：深色主题。  - light：浅色主题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 从API version 12开始支持该配置项，从API version 20开始废弃该配置项，卡片主题样式统一跟随系统的颜色模式。  2. 该字段仅对JS卡片生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为“auto”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportDimensions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片支持的外观规格，取值范围：  - 1 * 1：表示1行1列的一宫格。  - 1 * 2：表示1行2列的二宫格。  - 2 * 2：表示2行2列的四宫格。  - 2 * 4：表示2行4列的八宫格。  - 2 * 3：表示2行3列的六宫格。  - 3 * 3：表示3行3列的九宫格。  - 4 * 4：表示4行4列的十六宫格。  - 6 * 4：表示6行4列的二十四宫格。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "： 2 * 3和 3 * 3仅支持手表设备， 1 * 1只支持在锁屏上使用。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultDimension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示卡片的默认尺寸，取值必须在该卡片supportDimensions配置的列表中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示卡片是否支持周期性刷新（包含定时刷新和定点刷新），取值范围：  - true：表示支持周期性刷新，可以在定时刷新（updateDuration）和定点刷新（scheduledUpdateTime）两种方式任选其一，当两者同时配置时，定时刷新优先生效。  - false：表示不支持周期性刷新。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scheduledUpdateTime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh#%E5%8D%A1%E7%89%87%E5%AE%9A%E7%82%B9%E5%88%B7%E6%96%B0",
              children: "定点刷新"
            }), "的时刻，采用24小时制，精确到分钟，例如：\"10:30\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  updateDuration参数优先级高于scheduledUpdateTime，两者同时配置时，以updateDuration配置的刷新时间为准。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为“0:0”，缺省时不进行定点刷新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateDuration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh#%E5%8D%A1%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%B7%E6%96%B0",
              children: "卡片定时刷新"
            }), "的更新周期，单位为30分钟，取值为自然数。  当取值为0时，表示该参数不生效。  当取值为正整数N时，表示刷新周期为30*N分钟。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  updateDuration参数优先级高于scheduledUpdateTime，两者同时配置时，以updateDuration配置的刷新时间为准。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formConfigAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示桌面点击编辑后，需要拉起的ability路径，采用URI格式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metadata"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片的自定义信息，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-metadata/js-apis-bundlemanager-metadata",
              children: "Metadata"
            }), "数组标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isDynamic"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示此卡片是否为动态卡片（仅针对ArkTS卡片生效）。  - true：为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-form-overview#%E5%8A%A8%E6%80%81%E5%8D%A1%E7%89%87",
              children: "动态卡片"
            }), " 。  - false：为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-form-overview#%E9%9D%99%E6%80%81%E5%8D%A1%E7%89%87",
              children: "静态卡片"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontScaleFollowSystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示卡片使用方设置此卡片的字体是否支持跟随系统变化。  - true：支持跟随系统字体大小变化。  - false：不支持跟随系统字体大小变化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportShapes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示卡片的显示形状，取值范围如下：  - rect：表示矩形卡片。  - circle：表示圆形卡片。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值：[\"rect\"]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "previewImages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示卡片预览图, 与配置项supportDimensions一一对应。智能穿戴卡片必须配置，当前仅支持在智能穿戴上使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值：[]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transparencyEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否为背板透明卡片（仅对系统应用或者申请了背板透明卡片能力的ArkTS卡片生效）。  - true：表示是背板透明卡片。  - false：表示不是背板透明卡片。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableBlurBackground"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片是否使用模糊背板。  - true：开启模糊背板。  - false：关闭模糊背板。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  本特性对产品功耗、性能要求较高，从API version 23开始仅在旗舰机型上支持，在不支持的机型上调用后不生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renderingMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片的渲染模式，取值范围如下：  - autoColor：自动模式，呈现效果可以根据卡片使用方确定最终是全彩模式还是单色模式，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-service-widget-0000002087671904#section295mcpsimp",
              children: "卡片色彩"
            }), "。该模式下卡片中的颜色和图片允许卡片使用方修改，卡片配置了该模式就可以添加到桌面或锁屏上。  - fullColor：全彩模式，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-service-widget-0000002087671904#section295mcpsimp",
              children: "卡片色彩"
            }), "。该模式下卡片中的颜色和图片不允许被卡片使用方修改，卡片配置了该模式就可以添加到桌面上。  - singleColor：单色模式，通过透明度和模糊区分元素，不使用任何色相，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-service-widget-0000002087671904#section295mcpsimp",
              children: "卡片色彩"
            }), "。该模式下卡片中的颜色和图片允许卡片使用方修改，卡片配置了该模式就可以添加到锁屏上。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 15开始，支持该字段。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为“fullColor”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multiScheduledUpdateTime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片的多定点刷新的时刻，作为单点刷新的一个附加参数，采用24小时制，精确到分钟，多个时间用英文逗号分隔，最多写24个时间。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 18开始，支持该字段。multiScheduledUpdateTime需要配合scheduledUpdateTime使用。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省时不进行多定点刷新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conditionUpdate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示卡片的支持的条件刷新（仅对系统应用的ArkTS卡片生效）。取值范围如下：  - network：表示支持网络刷新。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 18开始，支持该字段。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空字符串数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#funinteractionparams%E6%A0%87%E7%AD%BE",
              children: "funInteractionParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "趣味交互类型互动卡片扩展字段。从API version 20开始，支持该字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。funInteractionParams 和 sceneAnimationParams 同时配置时识别为趣味交互类型互动卡片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sceneanimationparams%E6%A0%87%E7%AD%BE",
              children: "sceneAnimationParams"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-overview",
              children: "场景动效类型互动卡片"
            }), "扩展字段。从API version 20开始，支持该字段。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。funInteractionParams 和 sceneAnimationParams 同时配置时识别为趣味交互类型互动卡片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resizable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示是否可以拖拽卡片调整大小。调整值必须在该卡片或者同groupId卡片的supportDimensions配置列表中。  - true：可以调整大小。  - false：不可以调整大小。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 20开始，支持该字段。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "groupId"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示一组卡片的共同id。多张卡片的groupId相同且resizable为true时，多张卡片的supportDimensions配置共享，推荐多张卡片功能相同且需要调整卡片尺寸时配置。  示例一：卡片A的groupId配置为'1'，resizeable配置为true，supportDimension为2*2。卡片B的groupId配置为'1'，resizeable配置为true，supportDimension为2*4。那么支持卡片A、B之间调整大小。  示例二：当supportDimension存在多个，resizable设置为true时，优先在同一张卡片之间调整大小。卡片A的resizeable配置为true，supportDimension为2*2、2*4，支持卡片A的两个尺寸之间调整大小。  示例三：卡片A的groupId配置为'1'，resizeable配置为true，supportDimension为1*2。卡片B的groupId配置为'1'，resizeable配置为true，supportDimension为2*2、2*4、4*4。卡片A可以调整到卡片B的默认尺寸，卡片B只支持在B卡片支持的三个尺寸之间调整大小，无法调整为卡片A。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 20开始，支持该字段。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#supportdevicetypes%E6%A0%87%E7%AD%BE",
              children: "supportDeviceTypes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示特定卡片支持的设备类型。例如，卡片的supportDeviceTypes字段配置了“phone”、“tablet”、“tv”，那么该卡片就支持在手机、平板、大屏上面显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 22开始，支持该字段。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值：[\"phone\", \"tablet\", \"tv\", \"wearable\", \"car\", \"2in1\"]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#supportdeviceperformanceclasses%E6%A0%87%E7%AD%BE",
              children: "supportDevicePerformanceClasses"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示特定卡片支持的设备性能等级信息。例如，卡片的supportDevicePerformanceClasses字段配置了“high”、“medium”、“low”，那么该卡片就支持在性能等级为“high”、“medium”、“low”设备上面显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 22开始，支持该字段。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值：[\"high\", \"medium\", \"low\"]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#standby%E6%A0%87%E7%AD%BE",
              children: "standby"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待机屏保显示页面卡片扩展字段。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 23开始，支持该字段。依赖系统实现待机屏保显示应用后展示"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可缺省，属性缺省值见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#standby%E6%A0%87%E7%AD%BE",
              children: "standby标签"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supportdevicetypes标签",
      children: "supportDeviceTypes标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识卡片支持的设备类型。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "phone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机设备。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tablet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平板设备。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "智慧屏设备。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wearable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "智能手表设备。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车机设备。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1设备。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supportdeviceperformanceclasses标签",
      children: "supportDevicePerformanceClasses标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识卡片支持的设备性能等级信息。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备能力定级为高。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备能力定级为中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备能力定级为低。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "window标签",
      children: "window标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识window对象的内部结构说明。只支持在JS卡片中使用。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "designWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识页面设计基准宽度。以此为基准，根据实际设备宽度来缩放元素大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为720px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "autoDesignWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识页面设计基准宽度是否自动计算。当配置为true时，designWidth将会被忽略，设计基准宽度由设备宽度与屏幕密度计算得出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "funinteractionparams标签",
      children: "funInteractionParams标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识趣味交互类型互动卡片配置。funInteractionParams 和 sceneAnimationParams 同时配置时识别为趣味交互类型互动卡片。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
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
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "趣味交互场景LiveFormExtensionAbility名称，默认为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetBundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["趣味交互场景", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-independent-subpackage-0000002076341729",
              children: "主包包名"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subBundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["趣味交互场景", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-independent-subpackage-0000002076341729",
              children: "独立分包名"
            }), "，默认为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keepStateDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "趣味交互场景无交互时，激活态保持时长。默认值为10000，单位ms。取值为[0,10000]的整数，超过取值范围则取默认值10000。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"forms\": [\n    {\n       // ...\n      \"funInteractionParams\": {\n         \"targetBundleName\": \"com.example.funInteraction\",\n         \"subBundleName\": \"com.example.subFunInteraction\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sceneanimationparams标签",
      children: "sceneAnimationParams标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识场景动效类型互动卡片配置。funInteractionParams 和 sceneAnimationParams 同时配置时识别为趣味交互类型互动卡片。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
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
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景动效LiveFormExtensionAbility名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   {\n     \"forms\": [\n       {\n          // ...\n         \"sceneAnimationParams\": {\n            \"abilityName\": \"MyLiveFormExtensionAbility\"\n         }\n       }\n     ]\n   }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standby标签",
      children: "standby标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识standby对象的内部结构说明。应用通过开放能力申请，且卡片isSupported配置为true才支持在待机屏保显示界面展示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片是否支持在待机屏保显示界面展示。  - true：表示卡片支持在待机屏保显示界面展示。  - false：表示卡片不支持在待机屏保显示界面展示。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isAdapted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片是否针对待机屏保显示界面做过适配，配置成true，会把卡片布局组件中backgroudimage移除。  - true：表示卡片适配过待机屏保显示界面。  - false：表示卡片没有适配过待机屏保显示界面。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isPrivacySensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片是否是隐私敏感卡片，隐私敏感卡片在待机屏保显示界面展示会用蒙层覆盖。  - true：表示卡片是隐私敏感卡片。  - false：表示卡片不是隐私敏感卡片。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"forms\": [\n    {\n      // ...\n      \"standby\": {\n        \"isSupported\": true,\n        \"isAdapted\": false,\n        \"isPrivacySensitive\": false\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置文件示例",
      children: "配置文件示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"forms\": [\n    {\n      \"name\": \"widget\",\n      \"displayName\": \"$string:widget_display_name\",\n      \"description\": \"$string:widget_desc\",\n      \"src\": \"./ets/widget/pages/WidgetCard.ets\",\n      \"uiSyntax\": \"arkts\",\n      \"window\": {\n        \"designWidth\": 720,\n        \"autoDesignWidth\": true\n      },\n      \"renderingMode\": \"fullColor\",\n      \"isDefault\": true,\n      \"updateEnabled\": true,\n      \"scheduledUpdateTime\": \"10:30\",\n      \"updateDuration\": 1,\n      \"defaultDimension\": \"2*2\",\n      \"supportDimensions\": [\n        \"2*2\"\n      ],\n      \"formConfigAbility\": \"ability://EntryAbility\",\n      \"isDynamic\": true,\n      \"metadata\": []\n    }\n  ]\n}\n"
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
789049(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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