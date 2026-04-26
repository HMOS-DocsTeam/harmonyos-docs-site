"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["671797"], {
131988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_app_linking_kit_guide_applinking_cross_platform_applinking_cross_platform_md_f0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-linking-kit-guide-applinking-cross-platform-applinking-cross-platform-md-f0e.json
var site_docs_app_linking_kit_guide_applinking_cross_platform_applinking_cross_platform_md_f0e_namespaceObject = JSON.parse('{"id":"app-linking-kit-guide/applinking-cross-platform/applinking-cross-platform","title":"通过聚合链接按指定方式跳转至应用","description":"场景介绍","source":"@site/docs/app-linking-kit-guide/applinking-cross-platform/applinking-cross-platform.md","sourceDirName":"app-linking-kit-guide/applinking-cross-platform","slug":"/app-linking-kit-guide/applinking-cross-platform/","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-cross-platform/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"通过聚合链接按指定方式跳转至应用","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/applinking-cross-platform","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过延迟链接跳转至应用详情页","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-deferredlink/"},"next":{"title":"Call Service Kit简介","permalink":"/harmonyos-docs-site/call-kit-guide/call-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/app-linking-kit-guide/applinking-cross-platform/applinking-cross-platform.md


const frontMatter = {
	title: '通过聚合链接按指定方式跳转至应用',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/applinking-cross-platform',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过聚合链接按指定方式跳转至应用';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "配置聚合链接能力",
  "id": "配置聚合链接能力",
  "level": 2
}, {
  "value": "申请链接前缀",
  "id": "申请链接前缀",
  "level": 3
}, {
  "value": "添加网址允许清单",
  "id": "添加网址允许清单",
  "level": 3
}, {
  "value": "创建聚合链接",
  "id": "创建聚合链接",
  "level": 3
}, {
  "value": "（可选）归档聚合链接",
  "id": "可选归档聚合链接",
  "level": 3
}, {
  "value": "在module.json5中配置聚合链接",
  "id": "在modulejson5中配置聚合链接",
  "level": 3
}, {
  "value": "处理拉起方应用传入的链接",
  "id": "处理拉起方应用传入的链接",
  "level": 3
}, {
  "value": "验证应用被拉起效果",
  "id": "验证应用被拉起效果",
  "level": 2
}, {
  "value": "通过openLink接口拉起",
  "id": "通过openlink接口拉起",
  "level": 3
}, {
  "value": "通过系统浏览器或ArkWeb拉起",
  "id": "通过系统浏览器或arkweb拉起",
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
        id: "通过聚合链接按指定方式跳转至应用",
        children: "通过聚合链接按指定方式跳转至应用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)版本开始，新增支持聚合链接能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可用于实现在HarmonyOS系统的设备上点击链接后，按照指定的方式进行跳转。当用户打开链接时，聚合链接会引导用户跳转到HarmonyOS平台预览页、应用市场详情页、自定义网址、深度链接地址等页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "聚合链接主要用于直接向用户发送应用推广信息，例如通过短信/邮件/社交分享链接发送产品优惠活动或应用推广活动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已", (0,jsx_runtime.jsx)(_components.a, {
        href: "/app-linking-kit-guide/applinking-preparations/applinking-enable-applinking",
        children: "开通App Linking服务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "角色"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "操作步骤"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "云端开发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/app-linking-kit-guide/applinking-preparations/applinking-enable-applinking",
              children: "开通App Linking服务"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "云端开发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["先在AGC", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%94%B3%E8%AF%B7%E9%93%BE%E6%8E%A5%E5%89%8D%E7%BC%80",
              children: "申请链接前缀"
            }), "并", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%B7%BB%E5%8A%A0%E7%BD%91%E5%9D%80%E5%85%81%E8%AE%B8%E6%B8%85%E5%8D%95",
              children: "添加网址允许清单"
            }), "，然后", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E8%81%9A%E5%90%88%E9%93%BE%E6%8E%A5",
              children: "创建聚合链接"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "客户端开发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%9C%A8modulejson5%E4%B8%AD%E9%85%8D%E7%BD%AE%E8%81%9A%E5%90%88%E9%93%BE%E6%8E%A5",
              children: "在module.json5中配置聚合链接"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "客户端开发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%A4%84%E7%90%86%E6%8B%89%E8%B5%B7%E6%96%B9%E5%BA%94%E7%94%A8%E4%BC%A0%E5%85%A5%E7%9A%84%E9%93%BE%E6%8E%A5",
              children: "处理拉起方应用传入的链接"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "客户端开发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%AA%8C%E8%AF%81%E5%BA%94%E7%94%A8%E8%A2%AB%E6%8B%89%E8%B5%B7%E6%95%88%E6%9E%9C",
              children: "验证应用被拉起效果"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置聚合链接能力",
      children: "配置聚合链接能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请链接前缀",
      children: "申请链接前缀"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["链接前缀是指聚合链接地址中包含的网址，其格式为", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://域名。创建聚合链接前，需要申请链接前缀"
      }), "。"]
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
          children: "在项目列表中点击HarmonyOS应用所在的项目（请确保所有平台的应用在同一项目下）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在左侧导航栏中选择“增长 > App Linking > 聚合链接”，选择“链接前缀”页签，点击“添加链接前缀”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(572270)/* ["default"] */.A) + "",
            width: "1330",
            height: "226"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在AGC提供的免费域名（例如中国站点的域名：drcn.agconnect.link）前再设置一个前缀字符串，前缀字符串仅支持小写字母和数字，且必须确保此前缀唯一。设置完成后点击“下一步”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(346341)/* ["default"] */.A) + "",
            width: "1347",
            height: "580"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "等待域名地址验证通过后，页面将显示完整域名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(406326)/* ["default"] */.A) + "",
            width: "1369",
            height: "449"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加网址允许清单",
      children: "添加网址允许清单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建聚合链接前，需要添加网址允许清单来指定深度链接地址和自定义网址中允许使用的网址格式。设置后，聚合链接仅允许重定向到符合允许清单规则的网址，从而防止网站诱骗。"
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
          children: "在项目列表中点击HarmonyOS应用所在的项目（请确保所有平台的应用在同一项目下）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在左侧导航栏中选择“增长 > App Linking > 聚合链接”，选择“网址允许清单”页签，点击“添加允许清单规则”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(128907)/* ["default"] */.A) + "",
            width: "1350",
            height: "275"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用正则表达式设置允许清单规则，设置完成后点击右上角的“发布”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(181355)/* ["default"] */.A) + "",
            width: "1351",
            height: "318"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建聚合链接",
      children: "创建聚合链接"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置聚合链接，按照指定的方式进行跳转。"
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
          children: "在项目列表中点击HarmonyOS应用所在的项目（请确保所有平台的应用在同一项目下）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在左侧导航栏中选择“增长 > App Linking > 聚合链接”，选择“聚合链接”页签，点击“创建聚合链接”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(760657)/* ["default"] */.A) + "",
            width: "1403",
            height: "189"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置短链接，完成后点击“下一步”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(708271)/* ["default"] */.A) + "",
            width: "1451",
            height: "683"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "链接前缀"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["聚合链接的前缀。如果还未申请链接前缀，请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E7%94%B3%E8%AF%B7%E9%93%BE%E6%8E%A5%E5%89%8D%E7%BC%80",
                  children: "申请链接前缀"
                }), "。  “链接前缀”下方的文本框中可设置聚合链接的短链接后缀字符串，默认由AGC自动生成。如果需要自行定义，请确保该字符串唯一。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "链接预览"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "聚合链接向用户发送的短链接地址。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置深度链接，完成后点击“下一步”。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "深度链接地址中使用的域名需满足“网址允许清单”要求。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "深度链接地址不允许设置为可执行文件格式。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(13611)/* ["default"] */.A) + "",
            width: "1129",
            height: "542"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "链接名称"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "配置聚合链接的自定义名称。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "深度链接地址（默认）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用将打开的深度链接地址。  如果未设置HarmonyOS深度链接地址(api>=12)，则会默认打开此链接。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "（可选）HarmonyOS深度链接地址(api>=12)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果设置了HarmonyOS深度链接地址(api>=12)，则在HarmonyOS平台优先打开此链接。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置聚合链接在HarmonyOS系统的链接行为，完成后点击“下一步”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(519533)/* ["default"] */.A) + "",
            width: "1103",
            height: "238"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "设置在HarmonyOS系统的链接行为(api>=12)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1. 选择“在HarmonyOS应用中打开”，表示用户点击链接会跳转到HarmonyOS应用中的深度链接地址。  2. 选择或添加需要配置深度链接地址的HarmonyOS应用。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "未安装应用时，则重定向到"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["如果用户未安装HarmonyOS应用，可通过此选项将用户引导到“华为应用市场页面详情页”或“自定义网址”。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明："
                  })
                }), " 如果选择“自定义网址”，链接不允许设置为可执行文件格式。"]
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在“设置跟踪参数”页面，设置广告跟踪参数，可用于广告、流量跟踪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(376005)/* ["default"] */.A) + "",
            width: "792",
            height: "292"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "广告系列来源"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告渠道，如Huawei，也可自定义。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "广告系列媒介"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告媒介的标识，如pic 、email。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "广告系列名称"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "特定的推广活动描述，如“双11推广”。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置社交分享标识，可用于社交软件之间的分享，设置完成后点击“下一步”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(521748)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置了社交分享标识参数后，可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-applinking-socialdescription-0000001055261926",
            children: "社交分享标识说明"
          }), "了解设置效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(388209)/* ["default"] */.A) + "",
            width: "1571",
            height: "635"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "标题"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "聚合链接在社交平台上分享时展示的标题名称。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "图片URL"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "聚合链接在社交平台上分享时展示的图片地址。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "描述说明"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "聚合链接在社交平台上分享时展示的说明信息。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置预览页，可以将用户引导至合适的目标位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(647751)/* ["default"] */.A) + "",
            width: "945",
            height: "851"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "显示预览页"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["应用未安装，点击聚合链接时，预览页的显示情况。  - 勾选：在点击聚合链接时，应用如果未安装，则在重定向到应用市场详情页前优先显示预览页。  - 不勾选（默认）：在点击时，应用如果未安装，则会根据浏览器的类型，尽可能地优先拉起应用市场详情页。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明："
                  })
                }), " 目前仅支持华为浏览器。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "预览页信息来源"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "勾选“显示预览页”后，可以选择预览页信息展示的内容。  - “分享标识内容”：采用分享标识信息构建预览页。  - “应用市场应用信息”：采用AGC中配置的应用信息构建预览页。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全部设置完成后，点击右上角的“发布”，页签中将展示已发布的聚合链接列表。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击网址中的二维码图标，或对应操作栏下方的“二维码下载”，可以下载该聚合链接的二维码图片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(191342)/* ["default"] */.A) + "",
            width: "1416",
            height: "221"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击对应操作栏下方的“链接详情”，可以查看该聚合链接的详情，包括深度链接地址、HarmonyOS应用包名、短链接地址等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(257612)/* ["default"] */.A) + "",
            width: "1147",
            height: "519"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选归档聚合链接",
      children: "（可选）归档聚合链接"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建聚合链接后，如果不想继续管理该链接，而又不希望影响用户较长一段时间内的使用，可以选择归档聚合链接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "归档7天后的聚合链接将被隐藏，开发者无法通过AGC查看或撤销归档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "归档后的聚合链接默认从归档时起1年内有效，请谨慎操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "操作步骤如下："
        })
      })
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
          children: "在项目列表中点击HarmonyOS应用所在的项目。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在左侧导航栏中选择“增长 > App Linking > 聚合链接”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择“聚合链接”页签，对已创建的聚合链接进行归档。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "单条归档：在聚合链接列表，选择待归档聚合链接对应“操作”列下方的“归档”。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(344163)/* ["default"] */.A) + "",
                width: "1410",
                height: "382"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "批量归档：在列表，勾选多条待归档，选择右上角“批量操作”的下拉选项中的“归档”。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(376412)/* ["default"] */.A) + "",
                width: "1414",
                height: "279"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(814521)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过时间筛选，选择查看“7天内已归档”的聚合链接。还可以点击“操作”列下方的“撤销归档”，将已归档的聚合链接恢复原状。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在modulejson5中配置聚合链接",
      children: "在module.json5中配置聚合链接"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在HarmonyOS应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5文件"
      }), "中进行如下配置，用于接收聚合链接，以获取聚合链接中传递的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"entities\"列表中必须包含\"entity.system.browsable\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"actions\"列表中必须包含\"ohos.want.action.viewData\"。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\"uris\"列表中必须包含\"scheme\"为\"https\"且\"host\"为域名地址的元素，可选属性包含\"path\"、\"pathStartWith\"和\"pathRegex\"，具体请参见“", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config#uris%E6%A0%87%E7%AD%BE%E8%AF%B4%E6%98%8E",
          children: "uris标签说明"
        }), "”。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"domainVerify\"设置为true，表示开启域名校验开关。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(96979)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "skills标签下默认包含一个skill对象，用于标识应用入口。应用跳转链接不能在该skill对象中配置，需要创建独立的skill对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果存在多个跳转场景，需要在skills标签下创建不同的skill对象，否则会导致配置无法生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，聚合链接的域名是example.drcn.agconnect.link，则需进行如下配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n        \"icon\": \"$media:icon\",\n        \"label\": \"$string:EntryAbility_label\",\n        // 请将exported配置为true；如果exported为false，仅具有权限的系统应用能够拉起该应用，否则无法拉起应用\n        \"exported\": true,\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\"\n            ]\n          },\n          {\n            \"entities\": [\n              // entities必须包含\"entity.system.browsable\"\n              \"entity.system.browsable\"\n            ],\n            \"actions\": [\n              // actions必须包含\"ohos.want.action.viewData\"\n              \"ohos.want.action.viewData\"\n            ],\n            \"uris\": [\n              {\n                // scheme须配置为https\n                \"scheme\": \"https\",\n                // host须配置为聚合链接的域名\n                \"host\": \"example.drcn.agconnect.link\",\n                // path可选，表示聚合链接的短链接后缀字符串，例如example.drcn.agconnect.link/AIYx中的AIYx\n                // 如果应用只能处理部分特定的path，则此处应该配置应用所支持的path，避免出现应用不能处理的path链接也被引流到应用中的问题\n                \"path\": \"AIYx\"\n              }\n            ],\n            // domainVerify须设置为true\n           \"domainVerify\": true\n          }\n          // 若有其他跳转能力，如推送消息跳转、NFC跳转，可新增一个skill对象，防止与App Linking业务冲突\n        ]\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理拉起方应用传入的链接",
      children: "处理拉起方应用传入的链接"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在HarmonyOS应用的Ability（如EntryAbility）的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
        children: "onCreate()"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
        children: "onNewWant()"
      }), "生命周期回调中添加如下代码，以处理传入的链接。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { url } from '@kit.ArkTS';\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 从want中获取传入的链接信息。\n    // 如传入的url为：`https://example.drcn.agconnect.link/AIYx，开发者可根据自己的业务需求进行后续的处理`。\n    let uri = want?.uri;\n    if (uri) {\n      try {\n        let urlObject = url.URL.parseURL(want?.uri);\n        if (urlObject.toString() === \"https://example.drcn.agconnect.link/AIYx\"){\n          // ...\n        }\n        // ...\n      } catch (error) {\n        hilog.error(0x0000, 'testTag', `Failed to parse url.`);\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若要根据链接参数启动UIAbility的指定页面组件，请参考“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction#%E5%90%AF%E5%8A%A8uiability%E7%9A%84%E6%8C%87%E5%AE%9A%E9%A1%B5%E9%9D%A2",
        children: "启动UIAbility的指定页面"
      }), "”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "验证应用被拉起效果",
      children: "验证应用被拉起效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["方式一：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%80%9A%E8%BF%87openlink%E6%8E%A5%E5%8F%A3%E6%8B%89%E8%B5%B7",
          children: "通过openLink接口拉起"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["方式二：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%80%9A%E8%BF%87%E7%B3%BB%E7%BB%9F%E6%B5%8F%E8%A7%88%E5%99%A8%E6%88%96arkweb%E6%8B%89%E8%B5%B7",
          children: "通过系统浏览器或ArkWeb拉起"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过openlink接口拉起",
      children: "通过openLink接口拉起"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拉起方应用可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
        children: "UIAbilityContext.openLink()"
      }), "接口，并将appLinkingOnly参数设为false或者不传，以App Linking优先的方式打开应用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“entry/src/main/ets/common”目录下添加GlobalContext.ets文件，开发初始化和获取应用上下文的接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\n\nexport class GlobalContext {\n  private static context: common.UIAbilityContext;\n\n  public static initContext(context: common.UIAbilityContext): void {\n    GlobalContext.context = context;\n  }\n\n  public static getContext(): common.UIAbilityContext {\n    return GlobalContext.context;\n  }\n}\n"
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
          }), "接口配置聚合链接。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { GlobalContext } from '../common/GlobalContext';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('start link', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context = GlobalContext.getContext();\n        // 如下link请填写开发者实际跳转的url\n        let link: string = \"https://example.drcn.agconnect.link/AIYx\";\n        context.openLink(link, { appLinkingOnly: false })\n          .then(() => {\n            hilog.info(0x0000, 'testTag', `Succeeded in opening link.`);\n          })\n          .catch((error: BusinessError) => {\n            hilog.error(0x0000, 'testTag', `Failed to open link, code: ${error.code}, message: ${error.message}`);\n          })\n      })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装拉起方应用，点击拉起方应用中的跳转按钮。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此时目标方应用未安装，若有聚合链接匹配的应用，点击链接会按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BA%E8%81%9A%E5%90%88%E9%93%BE%E6%8E%A5",
            children: "创建聚合链接"
          }), "时指定的方式进行跳转，例如跳转到HarmonyOS平台预览页、应用市场下载详情页、自定义网址等；若无聚合链接匹配的应用，则继续尝试以浏览器打开链接的方式打开应用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装目标方应用后，首次启动时会跳转到深度链接指定的内容详情页面。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过系统浏览器或arkweb拉起",
      children: "通过系统浏览器或ArkWeb拉起"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb深度集成了App Linking的能力，当用户在系统浏览器或者集成ArkWeb的应用网页上点击某个链接时，若有聚合链接匹配的应用，会通过App Linking能力优先拉起目标方应用。此机制有如下限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该聚合链接配置了在HarmonyOS系统的链接行为，会跳转到HarmonyOS平台预览页，引导用户打开或下载应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该聚合链接仅配置了深度链接，会跳转到深度链接指定的内容详情页面。"
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
13611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958810-345745f516c67009f35f57cec14e2606.png");

},
760657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799160-bdd05ca7161e59cb076123b1d7f0b257.png");

},
191342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478813-87193d21b70bf5524d7a0afcd3640e92.png");

},
521748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
647751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958812-ad30c8217e941ae4a43b81b8024d49a3.png");

},
814521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
388209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438857-e49f76eddd5c21840c9188b6813bc9a4.png");

},
181355(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478809-83416c1e0196f71bc76b55b79807cd6b.png");

},
376005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799162-07e6a65c6849be056720873940681e0b.png");

},
346341(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799158-c74f38c052e33ae0dedafa406b5a69b4.png");

},
406326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438853-dc0a79e64443e3cb8dbb440f3f4dc758.png");

},
376412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958814-00c69887e5906b16ece53a25e708d09f.png");

},
96979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
128907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958808-4bd6b51faa1c063d7ab4513aefe6cd35.png");

},
257612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799164-a48d54f9dbea2c6d0f8be0b3ec649492.png");

},
708271(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438855-34332671ea99a9be20fa4371c2cf2466.png");

},
344163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438859-36d64049cdda2086e26105b189ce6f3d.png");

},
519533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478811-4738e45aa51ca521893c5e6890a76e4d.png");

},
572270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478807-5a4b3408ab91b7a01e5cb3d92e2b88cf.png");

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