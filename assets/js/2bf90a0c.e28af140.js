"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["162343"], {
305223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_app_uri_config_app_uri_config_md_2bf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-directional-redirection-app-uri-config-app-uri-config-md-2bf.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_app_uri_config_app_uri_config_md_2bf_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config/app-uri-config","title":"应用链接说明","description":"uris标签说明","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config/app-uri-config.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config","slug":"/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"应用链接说明","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-uri-config","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"显式Want跳转切换应用链接跳转适配指导","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust/"},"next":{"title":"拉起指定类型的应用概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config/app-uri-config.md


const frontMatter = {
	title: '应用链接说明',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-uri-config',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用链接说明';

const assets = {

};



const toc = [{
  "value": "uris标签说明",
  "id": "uris标签说明",
  "level": 2
}, {
  "value": "URL的基本格式",
  "id": "url的基本格式",
  "level": 3
}, {
  "value": "linkFeature标签说明",
  "id": "linkfeature标签说明",
  "level": 3
}, {
  "value": "配置示例",
  "id": "配置示例",
  "level": 2
}, {
  "value": "清理应用沙箱缓存数据场景",
  "id": "清理应用沙箱缓存数据场景",
  "level": 3
}, {
  "value": "指定类型的应用被拉起时免跳转弹框",
  "id": "指定类型的应用被拉起时免跳转弹框",
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
        id: "应用链接说明",
        children: "应用链接说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uris标签说明",
      children: "uris标签说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "文件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
        children: "skills字段"
      }), "中声明uris时，主要包含如下字段。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "scheme：协议名称。常见的取值有http、https、file、ftp等，也可以自定义。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "host：域名或IP地址。例如域名developer.huawei.com或IP地址127.0.0.1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "port：端口号。例如developer.huawei.com:80后面的80即为端口号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "path：路径，表示域名服务器上的目录或文件路径，该字段在scheme存在时才有意义。path字段不支持通配符，如果需要使用通配符，可以采用pathRegex字段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pathStartWith：路径前缀，该字段在scheme存在时才有意义，表示域名服务器上的目录或文件路径的前缀，用于前缀匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pathRegex：路径正则，该字段在scheme存在时才有意义，表示域名服务器上的目录或文件路径的正则表达式，用于正则匹配。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#linkfeature%E6%A0%87%E7%AD%BE%E8%AF%B4%E6%98%8E",
          children: "linkFeature"
        }), "：应用的功能类型（如文件打开、分享、导航等）。取值为长度不超过127字节的字符串，不支持中文。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(709004)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过浏览器拉起应用页面时，浏览器会将uri中scheme和host中的大写字母自动转化为小写字母，导致无法正确匹配应用。因此建议scheme和host中不要包含大写字母。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["path、pathStartWith、pathRegex的取值前后均不需要加斜杠/。例如对于应用链接", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://developer.huawei.com/consumer/cn/support，path字段应配置为consumer/cn/support，pathStartWith字段可配置为consumer/cn，pathRegex字段可配置为^consumer/cn/support$"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "url的基本格式",
      children: "URL的基本格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照配置的字段不同，uris可以拼接为不同的URL表达式。其中，scheme为必选字段，其他字段仅当scheme存在时才有意义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "只配置scheme：scheme://"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "只配置scheme和host：scheme://host"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "只配置scheme、host和port：scheme://host:port"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当配置了path、pathStartWith或pathRegex字段时，组成的表达式如下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "全路径表达式"
              })
            }), "：scheme://host:port/path"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "路径前缀表达式"
              })
            }), "：scheme://host:port/pathStartWith"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "路径正则表达式"
              })
            }), "：scheme://host:port/pathRegex"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(826494)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方应用组件配置的scheme不能与系统应用重复，否则会导致无法通过该uri拉起三方应用组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果多个应用的URL配置相同，应用跳转时匹配到同多个应用，则会拉起应用选择框。为了更好的用户体验，开发者可以通过链接的path字段去区分同一域名下的不同应用，如链接", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://www.example.com/path1拉起目标应用1，链接https://www.example.com/path2拉起目标应用2"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linkfeature标签说明",
      children: "linkFeature标签说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(827564)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同一Bundle中声明的linkFeature数量不能超过150个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目标应用在linkFeature字段中声明功能类型，并通过应用市场上架审核后，可以提升应用跳转体验。主要用于以下两种场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持系统识别同类应用：当调用方拉起垂类应用（例如导航类应用）时，系统会根据linkFeature字段识别到匹配的应用，并在应用面板中展现。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AppStorageMgmt"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示清理应用沙箱目录中缓存数据的功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E6%B8%85%E7%90%86%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1%E7%BC%93%E5%AD%98%E6%95%B0%E6%8D%AE%E5%9C%BA%E6%99%AF",
                  children: "清理应用沙箱缓存数据场景"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FileOpen"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示打开处理文件的功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup",
                  children: "拉起文件处理类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Navigation"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示导航功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps",
                  children: "拉起导航类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RoutePlan"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示路线规划功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps",
                  children: "拉起导航类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PlaceSearch"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示地点搜索功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps",
                  children: "拉起导航类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Transfer"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示转账汇款功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-finance-apps",
                  children: "拉起金融类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CreditCardRepayment"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示信用卡还款功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-finance-apps",
                  children: "拉起金融类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ComposeMail"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示撰写邮件功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps",
                  children: "拉起邮件类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "QueryByFlightNo"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示按航班号查询航班功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-flight-apps",
                  children: "拉起航班类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "QueryByLocation"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示按起降地查询航班功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-flight-apps",
                  children: "拉起航班类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "QueryExpress"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示快递查询功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-express-apps",
                  children: "拉起快递类应用"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AppNotificationMgmt"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指示应用内通知设置的功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/notification-kit/notification-shortcut-settings",
                  children: "应用内通知设置快捷入口"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PrimaryContactMgmt"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["从API version 23开始，新增支持该字段。指示社交通讯类应用“重要联系人列表”的设置功能。使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/priority-notification-permission-guidelines",
                  children: "优先通知权益申请"
                }), "。"]
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定类型的应用被拉起时免跳转弹框：正常情况下，拉起指定类型的应用时，都会弹出确认是否打开应用的弹窗。如果您的应用有向其他应用提供登录/分享/支付的功能，可以在应用中声明对应的LinkFeature（取值参见下表）。应用通过上架审核后，当其他应用拉起您的应用时将不再弹窗提示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(933323)/* ["default"] */.A) + "",
            width: "397",
            height: "125"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Login"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "指示登录、授权登录等功能。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Pay"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "指示支付页面、收银台等功能。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Share"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "指示分享功能。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置示例",
      children: "配置示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "清理应用沙箱缓存数据场景",
      children: "清理应用沙箱缓存数据场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过“设置 > 存储”可以选择进入某个应用的应用详情页，该页面默认会包含“清空缓存”选项，用于清除当前应用的所有缓存数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者实现了自定义数据清理页面，并希望能够在应用详情页提供跳转入口，可以通过配置linkFeature字段进行接入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中，对实现了数据清理功能的Ability添加如下skills配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，linkFeature字段必须配置为AppStorageMgmt，其他字段取值请根据实际情况修改为实际值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"ClearAbility\",\n  \"srcEntry\": \"./ets/clearability/ClearAbility.ets\",\n  \"description\": \"$string:ClearAbility_desc\",\n  \"icon\": \"$media:layered_image\",\n  \"label\": \"$string:ClearAbility_label\",\n  // ···\n  \"skills\": [\n    {\n      \"uris\": [\n        {\n          \"scheme\": \"storage\",\n          \"host\": \"developer.huawei.com\",\n          \"path\": \"clearcache\",\n          \"linkFeature\": \"AppStorageMgmt\"\n        }\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "功能验证。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在手机的“设置 > 存储”页面，选择当前应用，进入应用详情页。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击“前往xx清理数据”的选项，即可跳转至对应的缓存数据清理页面。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973019)/* ["default"] */.A) + "",
        width: "504",
        height: "1071"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指定类型的应用被拉起时免跳转弹框",
      children: "指定类型的应用被拉起时免跳转弹框"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以登录场景为例，介绍指定类型的应用被拉起时如何实现免跳转弹框。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置linkFeature属性以声明当前应用支持的特性功能，从而系统可以从设备已安装应用中找到当前支持该特性的应用，登录场景LinkFeature固定为Login。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置scheme、host、port、path/pathStartWith属性，与want中uri相匹配，以便区分不同功能，linkFeature设置为Login。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"uris\": [\n  {\n    \"scheme\": \"https\",\n    \"host\": \"developer.huawei.com\",\n    \"path\": \"consumer\",\n    \"linkFeature\": \"Login\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解析参数并做对应处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "    UIAbility.onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在参数want.uri中会携带目标方配置的linkFeature对应的uri。"
        }), "\n"]
      }), "\n"]
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
709004(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
933323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797854-49e6de8234899de4b4cb89a15a79433a.png");

},
973019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437549-16eac219567ed376fafca5dce9a1fd0f.png");

},
827564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
826494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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