"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["170906"], {
44094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_creation_arkts_ui_widget_creation_md_76f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-creation-arkts-ui-widget-creation-md-76f.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_creation_arkts_ui_widget_creation_md_76f_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget-creation/arkts-ui-widget-creation","title":"创建ArkTS卡片","description":"ArkTS卡片有两种创建卡片包的方式。开发者在开发过程中任选其一即可。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget-creation/arkts-ui-widget-creation.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget-creation","slug":"/form-kit/arkts-ui/arkts-ui-widget-creation/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-creation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"创建ArkTS卡片","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-creation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-form-overview/"},"next":{"title":"配置ArkTS卡片的配置文件","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-configuration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget-creation/arkts-ui-widget-creation.md


const frontMatter = {
	title: '创建ArkTS卡片',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-creation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建ArkTS卡片';

const assets = {

};



const toc = [{
  "value": "方式一：共包方式创建卡片",
  "id": "方式一共包方式创建卡片",
  "level": 2
}, {
  "value": "创建步骤",
  "id": "创建步骤",
  "level": 3
}, {
  "value": "工程结构介绍",
  "id": "工程结构介绍",
  "level": 3
}, {
  "value": "方式二：独立包方式创建卡片",
  "id": "方式二独立包方式创建卡片",
  "level": 2
}, {
  "value": "创建步骤",
  "id": "创建步骤-1",
  "level": 3
}, {
  "value": "工程结构介绍",
  "id": "工程结构介绍-1",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建arkts卡片",
        children: "创建ArkTS卡片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS卡片有两种创建卡片包的方式。开发者在开发过程中任选其一即可。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方式一：卡片和应用共包方式，创建步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-creation#%E6%96%B9%E5%BC%8F%E4%B8%80%E5%85%B1%E5%8C%85%E6%96%B9%E5%BC%8F%E5%88%9B%E5%BB%BA%E5%8D%A1%E7%89%87",
        children: "共包方式创建卡片"
      }), "，此时卡片UI和应用代码在一个module内，最终编译产物也在同一个HAP包内。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方式二：独立卡片包方式，创建步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-creation#%E6%96%B9%E5%BC%8F%E4%BA%8C%E7%8B%AC%E7%AB%8B%E5%8C%85%E6%96%B9%E5%BC%8F%E5%88%9B%E5%BB%BA%E5%8D%A1%E7%89%87",
        children: "独立包方式创建卡片"
      }), "，此时卡片UI和应用代码在不同module内，最终编译产物分为卡片包和应用包。从API version 20开始支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片创建完成，在开发卡片过程中，支持对卡片进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-service-widget#section18171652015",
        children: "实时预览"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方式一共包方式创建卡片",
      children: "方式一：共包方式创建卡片"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建步骤",
      children: "创建步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 新建工程"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在DevEco Studio中，选择创建Application或Atomic Service工程，这两种都支持创建卡片。工程创建指导具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-create-new-project",
        children: "创建一个新的工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(620519)/* ["default"] */.A) + "",
        width: "982",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(748172)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于不同版本的DevEco Studio，请以实际界面为准。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 新建卡片"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在已有的应用工程中，右键新建ArkTS卡片，具体操作如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选中entry目录单击右键选择【New】->【Service Widget】->【Dynamic Widget】。在API 10及以上 Stage模型的工程中，开发者可通过Service Widget菜单直接选择创建动态卡片（Dynamic Widget）或静态卡片（Static Widget）。创建卡片后，也可在卡片的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
            children: "form_config.json配置文件"
          }), "中，通过isDynamic参数修改卡片类型：isDynamic置空或赋值为“true”，则该卡片为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-form-overview#%E5%8A%A8%E6%80%81%E5%8D%A1%E7%89%87",
            children: "动态卡片"
          }), "；isDynamic赋值为\"false\"，则该卡片为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-form-overview#%E9%9D%99%E6%80%81%E5%8D%A1%E7%89%87",
            children: "静态卡片"
          }), "。静态卡片和动态卡片切换之后用户交互实现也需要修改，具体参考ArkTS卡片概述中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-form-overview#%E5%8A%A8%E6%80%81%E5%8D%A1%E7%89%87",
            children: "动态卡片"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-form-overview#%E9%9D%99%E6%80%81%E5%8D%A1%E7%89%87",
            children: "静态卡片"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(848460)/* ["default"] */.A) + "",
            width: "995",
            height: "590"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择模板后，点击【Next】。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(693102)/* ["default"] */.A) + "",
            width: "982",
            height: "656"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在选择卡片的开发语言类型（Language）时，选择ArkTS选项。选择卡片支持的外观规格（Support dimension）时，选择期望的卡片尺寸，然后选择默认的外观规格（Default dimension），最后点击“Finish”，即可完成ArkTS卡片创建。详细的卡片外观规格可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
            children: "form_config.json"
          }), "配置文件，后续也可以在form_config.json配置文件中修改卡片规格。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(934575)/* ["default"] */.A) + "",
            width: "982",
            height: "656"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议根据实际使用场景命名卡片名称，ArkTS卡片创建完成后，工程中会新增如下卡片相关文件：卡片生命周期管理文件（EntryFormAbility.ets）、卡片页面文件（WidgetCard.ets）和卡片配置文件（form_config.json）。填写卡片配置之后点击【Finish】。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(475268)/* ["default"] */.A) + "",
            width: "347",
            height: "402"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "工程结构介绍",
      children: "工程结构介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " ArkTS卡片工程目录、相关模块"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223868)/* ["default"] */.A) + "",
        width: "801",
        height: "461"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability",
            children: "FormExtensionAbility"
          }), "：卡片扩展模块，提供卡片创建、销毁、刷新等生命周期回调。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/form-arkts-application/js-apis-inner-application-formextensioncontext/js-apis-inner-application-formextensioncontext",
            children: "FormExtensionContext"
          }), "：FormExtensionAbility的上下文环境，提供FormExtensionAbility具有的接口和能力。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider",
            children: "formProvider"
          }), "：提供了获取卡片信息、更新卡片、设置卡片更新时间等能力。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-forminfo/js-apis-app-form-forminfo",
            children: "formInfo"
          }), "：提供了卡片信息和状态等相关类型和枚举。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formbindingdata/js-apis-app-form-formbindingdata",
            children: "formBindingData"
          }), "：提供卡片数据绑定的能力，包括FormBindingData对象的创建、相关信息的描述。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview",
            children: "页面布局（WidgetCard.ets）"
          }), "：基于ArkUI提供卡片UI开发能力。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview#arkts%E5%8D%A1%E7%89%87%E6%94%AF%E6%8C%81%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%83%BD%E5%8A%9B",
              children: "ArkTS卡片通用能力"
            }), "：提供了能在ArkTS卡片中使用的组件、属性和API。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-overview",
              children: "ArkTS卡片特有能力"
            }), "：postCardAction用于卡片内部和提供方应用间的交互，仅在卡片中可以调用。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration",
            children: "卡片配置"
          }), "：包含FormExtensionAbility的配置和卡片的配置。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
              children: "module.json5配置文件"
            }), "中的extensionAbilities标签下，配置FormExtensionAbility相关信息。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在resources/base/profile/目录下的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
              children: "form_config.json"
            }), "配置文件中，配置卡片（WidgetCard.ets）相关信息。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方式二独立包方式创建卡片",
      children: "方式二：独立包方式创建卡片"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建步骤-1",
      children: "创建步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 新建工程"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在DevEco Studio中，选择创建Application或Atomic Service工程，这两种都支持创建卡片。工程创建指导具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-create-new-project",
        children: "创建一个新的工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721213)/* ["default"] */.A) + "",
        width: "982",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(393790)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于不同版本的DevEco Studio，请以实际界面为准。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 新建卡片"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选中entry目录单击右键选择【New】->【Service Widget】->【Dynamic Widget(Standalone)】。在Service Widget菜单可直接选择创建独立包的动态卡片（Dynamic Widget(standalone)）或静态卡片（Static Widget(standalone)）。创建服务卡片后，也可以在卡片的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
            children: "form_config.json配置文件"
          }), "中，通过isDynamic参数修改卡片类型：isDynamic置空或赋值为“true”，则该卡片为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-form-overview#%E5%8A%A8%E6%80%81%E5%8D%A1%E7%89%87",
            children: "动态卡片"
          }), "；isDynamic赋值为\"false\"，则该卡片为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-form-overview#%E9%9D%99%E6%80%81%E5%8D%A1%E7%89%87",
            children: "静态卡片"
          }), "。静态卡片和动态卡片切换之后用户交互实现也需要修改，具体参考ArkTS卡片概述中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-form-overview#%E5%8A%A8%E6%80%81%E5%8D%A1%E7%89%87",
            children: "动态卡片"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-form-overview#%E9%9D%99%E6%80%81%E5%8D%A1%E7%89%87",
            children: "静态卡片"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(953471)/* ["default"] */.A) + "",
            width: "1021",
            height: "492"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择模板后，点击【Next】。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(997288)/* ["default"] */.A) + "",
            width: "982",
            height: "656"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["填写卡片配置之后点击【Finish】。卡片创建成功后，entry包中包含应用和卡片后端能力；library包中包含卡片UI侧能力。entry模块下的module.json5配置文件中的formWidgetModule字段需关联library模块，library模块下的module.json5配置文件中的formExtensionModule字段需关联entry模块，以实现卡片包和应用包相互关联。创建完成后，会自动生成配置文件并配置，后续也可以按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration",
            children: "卡片配置文件"
          }), "修改配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(398438)/* ["default"] */.A) + "",
            width: "982",
            height: "656"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "工程结构介绍-1",
      children: "工程结构介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["独立卡片包与卡片共包方式创建卡片，仅工程结构存在差异，生成的文件是一致的，各文件具体内容请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-creation#%E5%B7%A5%E7%A8%8B%E7%BB%93%E6%9E%84%E4%BB%8B%E7%BB%8D",
        children: "共包方式工程结构介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 独立卡片包工程目录。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(657641)/* ["default"] */.A) + "",
        width: "695",
        height: "525"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(365342)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "独立卡片包中应用包和卡片包为2个独立模块，因此需要关注同时安装的应用包和卡片包版本号一致。"
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
620519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438331-70d42a996e6f4f95784d6778e3e5d372.png");

},
657641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438335-718a1a1200ca2bb0ad8ce08a0ba12ac9.png");

},
398438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798640-c48526ea989a1e0f9ed170d7141e820b.png");

},
721213(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438331-70d42a996e6f4f95784d6778e3e5d372.png");

},
693102(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478287-cc02c2871d6fecbaccd386de9e031566.png");

},
953471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478289-df48d8e74270eefcfbd9083c5c6d1620.png");

},
848460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958286-75c845eccd6b14712359a6e6a2ca8f04.png");

},
748172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
934575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798638-cdbdd2af9d8a9751f996099107406be0.png");

},
365342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
393790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
997288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478287-cc02c2871d6fecbaccd386de9e031566.png");

},
475268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438333-0c7169dc7a44536221acec93deeddba8.png");

},
223868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958288-3370cf00a55d11075bf77ca3e91a7b38.png");

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