"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["467055"], {
230819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_app_linking_kit_guide_applinking_direct_to_ag_applinking_direct_to_ag_md_e53_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-linking-kit-guide-applinking-direct-to-ag-applinking-direct-to-ag-md-e53.json
var site_docs_app_linking_kit_guide_applinking_direct_to_ag_applinking_direct_to_ag_md_e53_namespaceObject = JSON.parse('{"id":"app-linking-kit-guide/applinking-direct-to-ag/applinking-direct-to-ag","title":"通过直达应用市场能力跳转至应用市场下载详情页","description":"场景介绍","source":"@site/docs/app-linking-kit-guide/applinking-direct-to-ag/applinking-direct-to-ag.md","sourceDirName":"app-linking-kit-guide/applinking-direct-to-ag","slug":"/app-linking-kit-guide/applinking-direct-to-ag/","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-direct-to-ag/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"通过直达应用市场能力跳转至应用市场下载详情页","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/applinking-direct-to-ag","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过App Linking应用链接拉起指定应用","permalink":"/harmonyos-docs-site/app-linking-kit-guide/app-linking-startupapp/"},"next":{"title":"通过延迟链接跳转至应用详情页","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-deferredlink/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/app-linking-kit-guide/applinking-direct-to-ag/applinking-direct-to-ag.md


const frontMatter = {
	title: '通过直达应用市场能力跳转至应用市场下载详情页',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/applinking-direct-to-ag',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过直达应用市场能力跳转至应用市场下载详情页';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "原理机制",
  "id": "原理机制",
  "level": 2
}, {
  "value": "链接生效机制",
  "id": "链接生效机制",
  "level": 3
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "FAQ",
  "id": "faq",
  "level": 2
}, {
  "value": "使用ArkWeb拉起目标应用，当目标应用未安装时，会直接跳转到应用市场下载详情页面吗？",
  "id": "使用arkweb拉起目标应用当目标应用未安装时会直接跳转到应用市场下载详情页面吗",
  "level": 3
}, {
  "value": "哪些服务支持接入App Linking Kit的直达应用市场能力？",
  "id": "哪些服务支持接入app-linking-kit的直达应用市场能力",
  "level": 3
}, {
  "value": "直达链接的路径（path、pathStartWith或pathRegex）可以配置多少条？",
  "id": "直达链接的路径pathpathstartwith或pathregex可以配置多少条",
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
        id: "通过直达应用市场能力跳转至应用市场下载详情页",
        children: "通过直达应用市场能力跳转至应用市场下载详情页"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.3(15)版本开始，新增支持直达应用市场能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当成功配置App Linking应用链接后，可以构建App Linking直达应用市场下载详情页链接。当应用已安装时，点击链接直接跳转应用；当应用未安装时，点击链接跳转应用市场下载详情页，引导用户下载应用。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "华为分享打开场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "其他社交APP打开场景"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "原理机制",
      children: "原理机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "链接生效机制",
      children: "链接生效机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "直达应用市场链接配置后不是即时生效的，一般要24小时生效，也有可能出现48小时生效的情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["目标方应用已", (0,jsx_runtime.jsx)(_components.a, {
          href: "/app-linking-kit-guide/app-linking-startupapp",
          children: "配置App Linking应用链接"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["目标方HarmonyOS应用必须已上架，具体可参见“", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-0000002271695230",
          children: "发布HarmonyOS应用"
        }), "”。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["只能获取通过App Linking域名校验的应用链接，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/app-linking-kit-guide/app-linking-startupapp#%E5%9C%A8agc%E4%B8%BA%E5%BA%94%E7%94%A8%E5%88%9B%E5%BB%BA%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
        children: "在AGC为应用创建关联的网址域名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置直达应用市场能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
                children: "AppGallery Connect"
              }), "，点击“开发与服务”。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在项目列表中点击目标方应用所在的项目。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在左侧导航栏中选择“增长 > App Linking > 应用链接”，点击“操作”列的“直达应用市场”。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(584096)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["只有", (0,jsx_runtime.jsx)(_components.a, {
                href: "/app-linking-kit-guide/app-linking-startupapp#%E5%9C%A8agc%E4%B8%BA%E5%BA%94%E7%94%A8%E5%88%9B%E5%BB%BA%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
                children: "在AGC创建关联的网址域名"
              }), "状态为“成功”时，才支持配置直达应用市场链接。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(481843)/* ["default"] */.A) + "",
                width: "1448",
                height: "379"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在配置页面，下拉选择与该域名关联的在架应用，为应用配置直达应用市场链接。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(136345)/* ["default"] */.A) + "",
                width: "1319",
                height: "294"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "可以点击“添加应用”为多个应用配置直达链接，当该域名下关联的在架应用全部配置后，无法再添加应用。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "可以根据以下规则配置直达链接。"
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "路径"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "匹配规则"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "path"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "精确匹配"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "pathStartWith"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "前缀匹配"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "pathRegex"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "正则表达式匹配"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/app-linking-kit-guide/app-linking-startupapp#%E5%9C%A8modulejson5%E4%B8%AD%E9%85%8D%E7%BD%AE%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
                        children: "在module.json5中配置关联的网址域名"
                      }), "时，未配置path、pathStartWith或pathRegex，必须是如下匹配规则之一："]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "pathRegex，匹配路径：.*"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "path，手动输入精确匹配的路径（不允许以“/”开头，不允许出现双斜杠“//”和“..”，允许包含字母（a-z、A-Z）、数字（0-9）、正斜杠“/”、点“.”、下划线“_”和连字符“-”）"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["（不推荐）如果", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/app-linking-kit-guide/app-linking-startupapp#%E5%9C%A8modulejson5%E4%B8%AD%E9%85%8D%E7%BD%AE%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
                        children: "在module.json5中配置关联的网址域名"
                      }), "时，path匹配规则中配置了pathRegex，且值为.*，可以包含如下匹配规则："]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "pathRegex，匹配路径：.*"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "path，手动输入精确匹配的路径（不允许以“/”开头，不允许出现双斜杠“//”和“..”，允许包含字母（a-z、A-Z）、数字（0-9）、正斜杠“/”、点“.”、下划线“_”和连字符“-”）"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["其他场景需要根据", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/app-linking-kit-guide/app-linking-startupapp#%E5%9C%A8modulejson5%E4%B8%AD%E9%85%8D%E7%BD%AE%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
                        children: "在module.json5中配置关联的网址域名"
                      }), "时配置的path匹配规则进行选择。"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "可以点击“删除链接”删除当前关联应用的直达应用市场链接。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "配置完成后，点击页面顶部的“发布”，会跳转到“应用链接”列表页面。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如下图，“是否配置直达应用市场”显示“是”，表示链接配置成功。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(382459)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "链接配置成功后，一般需要24~48小时才能生效，请耐心等待。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(468672)/* ["default"] */.A) + "",
                width: "1448",
                height: "379"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "验证应用被拉起效果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式一：将直达应用市场链接地址存入备忘录中，并点击验证该链接是否可以拉起应用。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式二：通过openLink接口拉起应用。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["拉起方应用需调用", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
                    children: "UIAbilityContext.openLink()"
                  }), "接口，并将appLinkingOnly参数设为false或者不传，以App Linking优先的方式打开应用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "在“entry/src/main/ets/common”目录下添加GlobalContext.ets文件，开发初始化和获取应用上下文的接口。"
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "import { common } from '@kit.AbilityKit';\n\nexport class GlobalContext {\nprivate static context: common.UIAbilityContext;\n\npublic static initContext(context: common.UIAbilityContext): void {\nGlobalContext.context = context;\n}\n\npublic static getContext(): common.UIAbilityContext {\nreturn GlobalContext.context;\n}\n}\n"
                      })
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "在“entry/src/main/ets/entryability/EntryAbility.ets”文件中导入GlobalContext，在onCreate方法中使用GlobalContext.initContext(this.context)初始化全局应用上下文。"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["在“entry/src/main/ets/pages/Index.ets”文件中，使用", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
                        children: "UIAbilityContext.openLink()"
                      }), "接口配置跳转链接。"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { GlobalContext } from '../common/GlobalContext';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('start link', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context = GlobalContext.getContext();\n        let link: string = \"https://www.example.com/product?pageName=productDetail\";\n        context.openLink(link, { appLinkingOnly: false })\n          .then(() => {\n            hilog.info(0x0000, 'testTag', `Succeeded in opening link.`);\n          })\n          .catch((error: BusinessError) => {\n            hilog.error(0x0000, 'testTag', `Failed to open link, code: ${error.code}, message: ${error.message}`);\n          })\n      })\n  }\n}\n"
                      })
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "安装拉起方应用，点击拉起方应用中的跳转按钮。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "此时目标应用未安装，若有App Linking相匹配的应用，点击链接会跳转应用市场下载详情页，引导用户安装应用；若无App Linking相匹配的应用，则继续尝试以浏览器打开链接的方式打开应用。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "安装目标方应用后，点击拉起方应用的跳转按钮，会直接打开应用。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faq",
      children: "FAQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用arkweb拉起目标应用当目标应用未安装时会直接跳转到应用市场下载详情页面吗",
      children: "使用ArkWeb拉起目标应用，当目标应用未安装时，会直接跳转到应用市场下载详情页面吗？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当开发者通过系统浏览器或ArkWeb拉起目标应用时，如果目标应用未安装，不会直接跳转应用市场，需要开发者根据自身业务自行实现跳转应用市场的能力。详细可参见“Web和应用的跳转与拉起”开发实践中的《", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-app-jump-and-pull-up#section37419543116",
        children: "ArkWeb页面指定应用跳转"
      }), "》章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "哪些服务支持接入app-linking-kit的直达应用市场能力",
      children: "哪些服务支持接入App Linking Kit的直达应用市场能力？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的服务如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为分享、碰一碰分享、短信、畅联以及其他支持openLink API的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持的服务如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "浏览器、扫码（规划中，上线后自动生效，无需适配）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "直达链接的路径pathpathstartwith或pathregex可以配置多少条",
      children: "直达链接的路径（path、pathStartWith或pathRegex）可以配置多少条？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个应用支持配置1条。"
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
382459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
481843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478805-318457bba4d5f3893bbd28f330695145.png");

},
136345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799156-3de71eff8c254fc3fb70b6082a2d2de9.png");

},
584096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
468672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438851-cc8c275ad50712dc4954e6899af774fa.png");

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