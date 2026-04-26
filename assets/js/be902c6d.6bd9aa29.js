"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["107437"], {
9935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_productview_store_productview_md_be9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-productview-store-productview-md-be9.json
var site_docs_store_kit_guide_store_productview_store_productview_md_be9_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-productview/store-productview","title":"应用市场推荐","description":"场景介绍","source":"@site/docs/store-kit-guide/store-productview/store-productview.md","sourceDirName":"store-kit-guide/store-productview","slug":"/store-kit-guide/store-productview/","permalink":"/harmonyos-docs-site/store-kit-guide/store-productview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"应用市场推荐","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-productview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"测试数字商品服务","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-sandbox/"},"next":{"title":"产品特性按需分发(ArkTS)","permalink":"/harmonyos-docs-site/store-kit-guide/store-moduleinstall/store-moduleinstall_arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-productview/store-productview.md


const frontMatter = {
	title: '应用市场推荐',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-productview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '应用市场推荐';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "元服务卡片加桌&amp;应用详情页展示",
  "id": "元服务卡片加桌应用详情页展示",
  "level": 3
}, {
  "value": "应用内快捷方式加桌",
  "id": "应用内快捷方式加桌",
  "level": 3
}, {
  "value": "通过Deep Linking拉起写评论页",
  "id": "通过deep-linking拉起写评论页",
  "level": 3
}, {
  "value": "通过App Linking拉起写评论页",
  "id": "通过app-linking拉起写评论页",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "元服务卡片加桌",
  "id": "元服务卡片加桌",
  "level": 3
}, {
  "value": "应用详情页展示",
  "id": "应用详情页展示",
  "level": 3
}, {
  "value": "应用内快捷方式加桌",
  "id": "应用内快捷方式加桌-1",
  "level": 3
}, {
  "value": "通过Deep Linking拉起写评论页",
  "id": "通过deep-linking拉起写评论页-1",
  "level": 3
}, {
  "value": "通过App Linking拉起写评论页",
  "id": "通过app-linking拉起写评论页-1",
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
        id: "应用市场推荐",
        children: "应用市场推荐"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "元服务卡片加桌"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["您可调用应用市场服务提供的元服务加桌", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerloadservice",
            children: "loadService"
          }), "接口，加载元服务卡片加桌页面，用户点击“添加至桌面”按钮，将元服务卡片添加至桌面。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用详情页展示"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["您可调用应用市场服务提供的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerloadproduct",
                children: "loadProduct"
              }), "接口，直接加载应用市场的应用详情页面，用户可以在页面内点击“安装”按钮完成应用的下载安装；"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "您可使用Deep Linking链接的方式拉起应用市场应用详情页，通过拼接应用市场Deep Linking链接，在应用中调用或网页中点击Deep Linking链接拉起应用详情页，用户可以在页面内点击“安装”按钮完成应用的下载安装；"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "您可使用App Linking链接的方式拉起应用市场应用详情页，通过拼接应用市场App Linking链接，在应用中调用或网页中点击App Linking链接拉起应用详情页，用户可以在页面内点击“安装”按钮完成应用的下载安装。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(250282)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用内打开应用市场App，通过应用市场下载推荐应用，推荐使用loadProduct()方式；Web页面打开应用市场App，推荐使用App Linking。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用内快捷方式加桌"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["您可调用应用市场服务提供的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted",
                children: "checkPinShortcutPermitted"
              }), "接口，查询快捷方式加桌是否允许，允许的话则返回鉴权结果及结果的有效期；"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["您调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted",
                children: "checkPinShortcutPermitted"
              }), "接口获取到鉴权结果后，并在其有效期内再调用应用市场提供的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerrequestnewpinshortcut",
                children: "requestNewPinShortcut"
              }), "接口，创建快捷方式加桌，展示快捷方式加桌的用户确认弹窗，待用户确认后，可将快捷方式添加至桌面。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(85365)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "单个应用最多可添加2个快捷方式。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用写评论页展示"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "您可使用Deep Linking链接的方式拉起应用市场写评论页，通过拼接应用市场Deep Linking链接，在应用中调用或网页中点击Deep Linking链接在应用详情页拉起写评论页，用户可以在页面内进行评分与评论；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "您可使用App Linking链接的方式拉起应用市场写评论页，通过拼接应用市场App Linking链接，在应用中调用或网页中点击App Linking链接在应用详情页拉起写评论页，用户可以在页面内进行评分与评论。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(144513)/* ["default"] */.A) + "",
        width: "856",
        height: "472"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "元服务卡片加桌应用详情页展示",
      children: "元服务卡片加桌&应用详情页展示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155210)/* ["default"] */.A) + "",
        width: "623",
        height: "355"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户使用打开应用详情页功能；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用调用AppGallery Kit的loadProduct接口；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppGallery Kit API获取应用传入的信息，生成展示页面；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "展示生成的页面给用户使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用内快捷方式加桌",
      children: "应用内快捷方式加桌"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273515)/* ["default"] */.A) + "",
        width: "612",
        height: "432"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用预先调用checkPinShortcutPermitted接口检查是否允许快捷方式加桌；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppGallery Kit获取应用传入的快捷方式信息并生成检查结果；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppGallery Kit返回检查结果和有效时间给应用；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查通过后应用给用户展示添加快捷方式入口；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户点击“添加”快捷方式；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用requestNewPinShortcut接口请求创建快捷方式；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppGallery Kit加载快捷方式信息并弹出用户确认框；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户确认是否同意加桌；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户同意后，AppGallery Kit处理加桌请求；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppGallery Kit返回加桌结果给应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过deep-linking拉起写评论页",
      children: "通过Deep Linking拉起写评论页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(63463)/* ["default"] */.A) + "",
        width: "627",
        height: "363"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户使用某应用时，存在跳转应用市场内针对该应用进行评分与评论的诉求；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过拼接应用市场Deep Linking链接直接跳转写评论页面；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用市场解析Deep Linking链接中的参数，展示应用详情页面（全屏）；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拉起写评论页面（半模态或浅层窗口）；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "向用户展示写评论页面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过app-linking拉起写评论页",
      children: "通过App Linking拉起写评论页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(842187)/* ["default"] */.A) + "",
        width: "620",
        height: "359"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户使用某应用时，存在跳转应用市场内针对该应用进行评分与评论的诉求；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过拼接应用市场App Linking链接直接跳转写评论页面；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用市场解析App Linking链接中的参数，展示应用详情页面（全屏）；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拉起写评论页面（半模态或浅层窗口）；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "向用户展示写评论页面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用市场推荐服务不支持模拟器，请使用真机调试。在模拟器中使用该服务将会提示：无法获取内容，请点击屏幕重试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用市场推荐服务支持Phone、Tablet、PC/2in1设备。并且从6.0.2(22)版本开始，新增支持TV设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用市场推荐场景提供loadService，loadProduct、checkPinShortcutPermitted、requestNewPinShortcut四个接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerloadservice",
              children: "loadService"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "common.UIAbilityContext"
            }), ", want: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            }), ", callback?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#serviceviewcallback",
              children: "ServiceViewCallback"
            }), "): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载元服务加桌页面接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerloadproduct",
              children: "loadProduct"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "common.UIAbilityContext"
            }), ", want: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            }), ", callback?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewcallback",
              children: "ProductViewCallback"
            }), "): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载应用详情页面接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted",
              children: "checkPinShortcutPermitted"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "common.UIAbilityContext"
            }), ", shortcutId: string, want: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            }), ", labelResName: string, iconResName: string): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#checkshortcutresult",
              children: "CheckShortcutResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以静态资源方式校验桌面快捷方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted-1",
              children: "checkPinShortcutPermitted"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "common.UIAbilityContext"
            }), ", shortcutId: string, want: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            }), ", label: string, foregroundIcon: string, backgroundIcon: string): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#checkshortcutresult",
              children: "CheckShortcutResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以自定义资源方式校验桌面快捷方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerrequestnewpinshortcut",
              children: "requestNewPinShortcut"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "common.UIAbilityContext"
            }), ", tid: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建桌面快捷方式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "元服务卡片加桌",
      children: "元服务卡片加桌"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入productViewManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { productViewManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport type { common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造元服务卡片参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["第一个参数是获取当前Page页面的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
                children: "UIAbilityContext"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["第二个参数是构造一个", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
                children: "Want"
              }), "类型的对象，在属性中传入要加载的元服务的加桌链接。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["第三个参数是可选参数对象，可以传入四个属性，", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#serviceviewcallback",
                children: "onError"
              }), "：回调函数，回调返回的信息为元服务卡片加桌页加载失败的错误信息。", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#serviceviewcallback",
                children: "onReceive"
              }), "：回调函数，接收元服务卡片加桌结果信息。", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#serviceviewcallback",
                children: "onAppear"
              }), "：回调函数，当元服务卡片加桌页成功打开时回调。", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#serviceviewcallback",
                children: "onDisappear"
              }), "：回调函数，当元服务卡片加桌页关闭时回调。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct LoadServiceView {\n  @State message: string = '拉起应用市场详情页';\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(24)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            const uiContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            const wantParam: Want = {\n              // 此处填入要加载的元服务的加桌链接\n              uri: 'xxx'\n            }\n            const callback: productViewManager.ServiceViewCallback = {\n              onReceive: (data: productViewManager.ServiceViewReceiveData) => {\n                hilog.info(0x0001, 'TAG', `loadService onReceive.result is ${data.result}, msg is ${data.msg}, formInfo is ${JSON.stringify(data.formInfo)}`);\n              },\n              onError: (error: BusinessError) => {\n                hilog.error(0, 'TAG', `loadService onError.code is ${error.code}, message is ${error.message}`)\n              },\n              onAppear: () => {\n                hilog.info(0, 'TAG', `loadService onAppear.`);\n              },\n              onDisappear: () => {\n                hilog.info(0, 'TAG', `loadService onDisappear.`);\n              }\n            }\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerloadservice",
            children: "productViewManager.loadService"
          }), "方法，将步骤2中构造的参数依次传入接口中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调用接口，加载元服务加桌页面\nproductViewManager.loadService(uiContext, wantParam, callback);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用详情页展示",
      children: "应用详情页展示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "方式一：loadProduct接口调用"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入productViewManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { productViewManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport type { common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造应用详情页参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["第一个参数是获取当前Page页面的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
                children: "UIAbilityContext"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["第二个参数是构造一个", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
                children: "Want"
              }), "类型的对象，可以传入两个属性，bundleName：需要加载的应用包名。skExposure：", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#skexposure",
                children: "SKExposure"
              }), "类型，向应用归因服务传递登记归因来源信息。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["第三个参数是可选参数对象，可以传入三个属性，", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewcallback",
                children: "onError"
              }), "：回调函数，回调返回的信息为应用详情页加载失败时的错误信息。", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewcallback",
                children: "onAppear"
              }), "：回调函数，当应用详情页成功打开时回调。", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewcallback",
                children: "onDisappear"
              }), "：回调函数，当应用详情页关闭时回调。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct LoadProductView {\n  @State message: string = '拉起应用市场详情页';\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(24)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            const exposureData: productViewManager.SKExposure = {\n              adTechId: '20****e8',\n              campaignId: '123456',\n              destinationId: '10******',\n              mmpIds: ['2f****5', '2f7***5'],\n              serviceTag: '123***2',\n              nonce: '123***2',\n              timestamp: 1705536488,\n              signature: 'MEQCIEQlmZ****zKBSE8QnhLTIHZZZ****ZpRqRxHss65Ko****JgJKjdrWdkL****juEx2RmFS7da****ZRVZ8RyMyUXg=='\n            };\n            const uiContext = this.getUIContext().getHostContext() as common.UIAbilityContext\n            const wantParam: Want = {\n              parameters: {\n                // 必填，此处填入要加载的应用包名，例如： bundleName: 'com.huawei.hmsapp.books'\n                bundleName: 'com.xxx',\n                // 可选，向应用归因服务传递登记归因来源数据\n                skExposure: exposureData\n              }\n            }\n            const callback: productViewManager.ProductViewCallback = {\n              onError: (error: BusinessError) => {\n                hilog.error(0, 'TAG',\n                  `loadProduct onError.code is ${error.code}, message is ${error.message}`)\n              },\n              onAppear: () => {\n                hilog.info(0, 'TAG', `loadProduct onAppear.`);\n              },\n              onDisappear: () => {\n                hilog.info(0, 'TAG', `loadProduct onDisappear.`);\n              }\n            }\n          })\n          .width('100%')\n      }\n      .height('100%')\n    }\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerloadproduct",
            children: "loadProduct"
          }), "方法，将步骤2中构造的参数依次传入接口中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调用接口，拉起应用详情页\nproductViewManager.loadProduct(uiContext, wantParam, callback);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式二：Deep Linking方式"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造拼接bundleName的Deep Linking链接，其中bundleName为需要打开的应用包名，其格式为："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uri: 'store://appgallery.huawei.com/app/detail?id=' + bundleName,\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability-2",
            children: "startAbility"
          }), "方法，拉起应用市场应用详情页："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport type { common, Want } from '@kit.AbilityKit';\n\n// 拉起应用市场对应的应用详情页面\nfunction startAppGalleryDetailAbility(context: common.UIAbilityContext, bundleName: string): void {\n  let want: Want = {\n    action: 'ohos.want.action.appdetail', // 隐式指定action为ohos.want.action.appdetail\n    uri: 'store://appgallery.huawei.com/app/detail?id=' + bundleName, // bundleName为需要打开应用详情的应用包名\n  };\n  context.startAbility(want).then(() => {\n    hilog.info(0x0001, 'TAG', \"Succeeded in starting Ability successfully.\")\n  }).catch((error: BusinessError) => {\n    hilog.error(0x0001, 'TAG', `Failed to startAbility.Code: ${error.code}, message is ${error.message}`);\n  });\n}\n\n@Entry\n@Component\nstruct StartAppGalleryDetailAbilityView {\n  @State message: string = '拉起应用市场详情页';\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(24)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            const context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            // 按实际需求获取应用的bundleName，例如bundleName: 'com.huawei.hmsapp.books'\n            const bundleName = 'xxxx';\n            startAppGalleryDetailAbility(context, bundleName);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在网页中打开Deep Linking链接拉起应用市场应用详情页："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n  </head>\n  <body>\n    <div>\n      <button type=\"button\" onclick=\"openDeepLink()\">拉起应用详情页</button>\n    </div>\n  </body>\n</html>\n<script>\n  function openDeepLink() {\n    window.open('store://appgallery.huawei.com/app/detail?id=com.xxxx.xxxx')\n  }\n</script>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式三：App Linking方式"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造拼接bundleName的App Linking链接，其中bundleName为需要打开的应用包名，其格式为："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let link: string = 'https://appgallery.huawei.com/app/detail?id=' + bundleName;\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
            children: "openLink"
          }), "接口拉起App Linking链接："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport type { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('start app linking', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        // 需要拼接不同的应用包名，用以打开不同的应用详情页,例如：bundleName: 'com.huawei.hmsapp.books'\n        let bundleName: string = 'xxxx';\n        let link: string = 'https://appgallery.huawei.com/app/detail?id=' + bundleName;\n        // 以App Linking优先的方式在应用市场打开指定包名的应用详情页\n        context.openLink(link, { appLinkingOnly: false })\n          .then(() => {\n            hilog.info(0x0001, 'TAG', 'openlink success.');\n          })\n          .catch((error: BusinessError) => {\n            hilog.error(0x0001, 'TAG', `openlink failed. Code: ${error.code}, message is ${error.message}`);\n          });\n      })\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在网页中打开App Linking链接："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>跳转示例</title>\n  </head>\n  <body>\n    <a href='https://appgallery.huawei.com/app/detail?id=bundleName'>AppLinking跳转示例</a>\n  </body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用内快捷方式加桌-1",
      children: "应用内快捷方式加桌"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "方式一：以静态资源方式创建桌面快捷方式"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入productViewManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { productViewManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport type { common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted",
            children: "checkPinShortcutPermitted"
          }), "接口校验桌面快捷方式的参数。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["第一个参数是获取当前Page页面的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第二个参数是应用构造的快捷方式ID，取值为长度不超过63字节的字符串。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["第三个参数是构造一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            }), "类型的对象，在该参数中传入用户点击快捷方式后被拉起的目标应用的bundleName、moduleName、abilityName等。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第四个参数是快捷方式显示在桌面上的名称的label资源索引名称。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第五个参数是快捷方式显示在桌面上的图标的icon文件资源索引名称。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const uiContext =this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst shortcutId = \"id_test1\"; // 对应shortcuts标签中配置的shortcutId, 例如: \"shortcutId\": \"id_test1\"\nconst labelResName = \"shortcut\"; // 对应shortcuts标签中配置的label资源索引名称, 例如: \"label\": \"$string:shortcut\"\nconst iconResName = \"aa_icon\"; // 对应shortcuts标签中配置的icon资源索引名称, 例如: \"icon\": \"$media:aa_icon\"\nconst want: Want = {            // 对应shortcuts标签中配置的want\n  bundleName: \"com.example.appgallery.kit.demo\",\n  moduleName: \"entry\",\n  abilityName: \"EntryAbility\",\n  parameters: {\n    testKey: \"testValue\"\n  }\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(903888)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需提前", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-typical-scenarios/typical-scenario-configuration",
            children: "创建应用静态快捷方式"
          }), "，且第二、三、四、五个参数需要与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#shortcuts%E6%A0%87%E7%AD%BE",
            children: "shortcuts标签"
          }), "中的配置保持一致。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若校验参数发生变化，则每次覆盖生成新的tid，否则返回历史tid以及剩余过期时间expired。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted",
            children: "checkPinShortcutPermitted"
          }), "接口，将步骤2中的参数依次传入接口中，并保存异步返回的结果", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#checkshortcutresult",
            children: "CheckShortcutResult"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let checkShortcutResult: productViewManager.CheckShortcutResult;\n  productViewManager.checkPinShortcutPermitted(uiContext, shortcutId, want, labelResName, iconResName)\n    .then((result: productViewManager.CheckShortcutResult) => {\n      hilog.info(0x0001, 'TAG', `checkPinShortcutPermitted success result is ${JSON.stringify(result)}`);\n      checkShortcutResult = result;\n    }).catch((error: BusinessError) => {\n    hilog.error(0x0001, 'TAG',\n      `checkPinShortcutPermitted error. code is ${error.code}, message is ${error.message}`);\n  })\n} catch (err) {\n  hilog.error(0x0001, 'TAG', `checkPinShortcutPermitted failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerrequestnewpinshortcut",
            children: "requestNewPinShortcut"
          }), "接口创建桌面快捷方式的参数。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["第一个参数是获取当前Page页面的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["第二个参数是步骤3中调用接口返回得到的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#checkshortcutresult",
              children: "CheckShortcutResult"
            }), "的属性tid的值。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const uiContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst tid = checkShortcutResult.tid;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerrequestnewpinshortcut",
            children: "requestNewPinShortcut"
          }), "接口，将步骤4中的参数依次传入接口中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  productViewManager.requestNewPinShortcut(uiContext, tid)\n    .then(() => {\n      hilog.info(0x0001, 'TAG', `requestNewPinShortcut success.`);\n    }).catch((error: BusinessError) => {\n    hilog.error(0x0001, 'TAG', `requestNewPinShortcut error. code is ${error.code}, message is ${error.message}`);\n  })\n} catch (err) {\n  hilog.error(0x0001, 'TAG', `requestNewPinShortcut failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(484225)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "快捷方式加桌成功后，原校验结果tid会失效，再次加桌需重新校验生成新的tid。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了提升用户体验，推荐预先调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted",
            children: "checkPinShortcutPermitted"
          }), "接口，当用户点击加桌后，再调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerrequestnewpinshortcut",
            children: "requestNewPinShortcut"
          }), "接口执行加桌请求。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不建议在用户点击加桌后再连续调用这两个接口执行加桌。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "方式二：以自定义资源方式创建桌面快捷方式"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入productViewManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { productViewManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport type { common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted",
            children: "checkPinShortcutPermitted"
          }), "接口构造校验桌面快捷方式的参数。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["第一个参数是获取当前Page页面的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第二个参数是应用构造的快捷方式ID，取值为长度不超过63字节的字符串。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["第三个参数是构造一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            }), "类型的对象，在该参数中传入用户点击快捷方式后被拉起的目标应用的bundleName、moduleName、abilityName等。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第四个参数是快捷方式显示在桌面名称的文本内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第五个参数是快捷方式显示在桌面图标的应用沙箱地址，图标最大不超过100KB，格式为png和webp。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第六个参数预留，暂不支持，传入空字符串。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const uiContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst shortcutId = `${Date.now()}`;\nconst want: Want = {\n  bundleName: \"com.example.appgallery.kit.demo\",\n  moduleName: \"entry\",\n  abilityName: \"EntryAbility\",\n  parameters: {\n    testKey: \"testValue\"\n  }\n}\nconst label = \"shortcut\";\nconst foregroundIcon = uiContext.filesDir + \"/icon.png\";\nconst backgroundIcon = \"\";\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(196592)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前不支持背景层图标，第六个参数backgroundIcon传空字符串。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若校验参数发生变化，则每次覆盖生成新的tid，否则返回历史tid以及剩余过期时间expired。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted-1",
            children: "checkPinShortcutPermitted"
          }), "接口，将步骤2中的参数依次传入接口中，并保存异步返回的结果", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#checkshortcutresult",
            children: "CheckShortcutResult"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let checkShortcutResult: productViewManager.CheckShortcutResult;\n  productViewManager.checkPinShortcutPermitted(uiContext, shortcutId, want, label, foregroundIcon, backgroundIcon)\n    .then((result: productViewManager.CheckShortcutResult) => {\n      hilog.info(0x0001, 'TAG', `checkPinShortcutPermitted success result is ${JSON.stringify(result)}`)\n      checkShortcutResult = result;\n    }).catch((error: BusinessError) => {\n    hilog.error(0x0001, 'TAG',\n      `checkPinShortcutPermitted error. code is ${error.code}, message is ${error.message}`);\n  })\n} catch (err) {\n  hilog.error(0x0001, 'TAG', `checkPinShortcutPermitted failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerrequestnewpinshortcut",
            children: "requestNewPinShortcut"
          }), "接口创建桌面快捷方式的参数。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["第一个参数是获取当前Page页面的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["第二个参数是步骤3中调用接口返回得到的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#checkshortcutresult",
              children: "CheckShortcutResult"
            }), "的属性tid的值。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const uiContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst tid = checkShortcutResult.tid;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerrequestnewpinshortcut",
            children: "requestNewPinShortcut"
          }), "接口，将步骤4中的参数依次传入接口中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  productViewManager.requestNewPinShortcut(uiContext, tid)\n    .then(() => {\n      hilog.info(0x0001, 'TAG', `requestNewPinShortcut success.`);\n    }).catch((error: BusinessError) => {\n    hilog.error(0x0001, 'TAG', `requestNewPinShortcut error. code is ${error.code}, message is ${error.message}`);\n  })\n} catch (err) {\n  hilog.error(0x0001, 'TAG', `requestNewPinShortcut failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(174530)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "快捷方式加桌成功后，原校验结果tid会失效，再次加桌需重新校验生成新的tid。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了提升用户体验，推荐预先调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted",
            children: "checkPinShortcutPermitted"
          }), "接口，当用户点击加桌后，再调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerrequestnewpinshortcut",
            children: "requestNewPinShortcut"
          }), "接口执行加桌请求。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不建议在用户点击加桌后再连续调用这两个接口执行加桌。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过deep-linking拉起写评论页-1",
      children: "通过Deep Linking拉起写评论页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造拼接bundleName和action的Deep Linking链接，其中bundleName为需要拉起写评论页的应用包名，action隐式指定为write-review，表示进入详情页后，下一步将拉起写评论页，其格式为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uri: 'store://appgallery.huawei.com/app/detail?id=' + bundleName + '&action=write-review',\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用中调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability-2",
        children: "startAbility"
      }), "方法，拉起应用市场应用的写评论页："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport type { common, Want } from '@kit.AbilityKit';\n\n// 通过Deep Linking拉起应用市场指定的应用写评论页\nfunction startAppGalleryDetailAbility(context: common.UIAbilityContext, bundleName: string): void {\n  let want: Want = {\n    action: 'ohos.want.action.appdetail', // 隐式指定action为ohos.want.action.appdetail\n    uri: 'store://appgallery.huawei.com/app/detail?id=' + bundleName + '&action=write-review'// bundleName为需要拉起写评论页的应用包名，action隐式指定为write-review，表示进入详情页后，下一步将拉起写评论页。\n  };\n  context.startAbility(want).then(() => {\n    hilog.info(0x0001, 'TAG', \"Succeeded in starting Ability successfully.\")\n  }).catch((error: BusinessError) => {\n    hilog.error(0x0001, 'TAG', `Failed to startAbility. Code: ${error.code}, message is ${error.message}`);\n  });\n}\n\n@Entry\n@Component\nstruct StartAppGalleryDetailAbilityView {\n  @State message: string = '通过Deep Linking拉起应用市场写评论页'\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(24)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            const context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            // 按实际需求获取应用的bundleName，例如bundleName: 'com.huawei.hmsapp.books'\n            const bundleName = 'xxxx';\n            startAppGalleryDetailAbility(context, bundleName);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在网页中打开Deep Linking链接拉起应用市场应用的写评论页："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n  </head>\n  <body>\n    <div>\n      <button type=\"button\" onclick=\"openDeepLink()\">通过Deep Linking拉起应用市场写评论页</button>\n    </div>\n  </body>\n</html>\n<script>\n  function openDeepLink() {\n    window.open('store://appgallery.huawei.com/app/detail?id=com.xxxx.xxxx&action=write-review')\n  }\n</script>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过app-linking拉起写评论页-1",
      children: "通过App Linking拉起写评论页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造拼接bundleName的App Linking链接，其中bundleName为需要拉起写评论页的应用包名，action隐式指定为write-review，表示进入详情页后，下一步将拉起写评论页，其格式为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let link: string = 'https://appgallery.huawei.com/app/detail?id=' + bundleName + '&action=write-review';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用中调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
        children: "openLink"
      }), "接口拉起App Linking链接："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport type { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('start app linking', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        // 需要拼接不同的应用包名，用以打开不同的应用写评论页,例如：bundleName: 'com.huawei.hmsapp.books'\n        let bundleName: string = 'xxxx';\n        let link: string = 'https://appgallery.huawei.com/app/detail?id=' + bundleName + '&action=write-review';\n        // 以App Linking优先的方式在应用市场打开指定包名的应用写评论页\n        context.openLink(link, { appLinkingOnly: false })\n          .then(() => {\n            hilog.info(0x0001, 'TAG', 'openlink success.');\n          })\n          .catch((error: BusinessError) => {\n            hilog.error(0x0001, 'TAG', `openlink failed. Code: ${error.code}, message is ${error.message}`);\n          });\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在网页中打开App Linking链接："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>跳转示例</title>\n  </head>\n  <body>\n    <a href='https://appgallery.huawei.com/app/detail?id=bundleName&action=write-review'>通过AppLinking拉起应用市场写评论页</a>\n  </body>\n</html>\n"
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
155210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958776-3316a9eafb24cca4e6cd5f5a316542e6.png");

},
174530(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
144513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438821-7c05b8d6315f97b3f3cb1b718fb78b48.png");

},
903888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
484225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
85365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
273515(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478777-635e249b6d615112c0d5b7da4852a605.png");

},
250282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
63463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799128-88f2ce8ae0729cbcbb8fa864b47d5161.png");

},
842187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438823-38808dfe6d10a33237f3b99fbb650131.png");

},
196592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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