"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["636028"], {
129919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_app_linking_kit_guide_app_linking_startupapp_app_linking_startupapp_md_a49_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-linking-kit-guide-app-linking-startupapp-app-linking-startupapp-md-a49.json
var site_docs_app_linking_kit_guide_app_linking_startupapp_app_linking_startupapp_md_a49_namespaceObject = JSON.parse('{"id":"app-linking-kit-guide/app-linking-startupapp/app-linking-startupapp","title":"通过App Linking应用链接拉起指定应用","description":"场景介绍","source":"@site/docs/app-linking-kit-guide/app-linking-startupapp/app-linking-startupapp.md","sourceDirName":"app-linking-kit-guide/app-linking-startupapp","slug":"/app-linking-kit-guide/app-linking-startupapp/","permalink":"/harmonyos-docs-site/app-linking-kit-guide/app-linking-startupapp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"通过App Linking应用链接拉起指定应用","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-linking-startupapp","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开通App Linking服务","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-preparations/applinking-enable-applinking/"},"next":{"title":"通过直达应用市场能力跳转至应用市场下载详情页","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-direct-to-ag/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/app-linking-kit-guide/app-linking-startupapp/app-linking-startupapp.md


const frontMatter = {
	title: '通过App Linking应用链接拉起指定应用',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-linking-startupapp',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过App Linking应用链接拉起指定应用';

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
  "value": "约束与限制",
  "id": "约束与限制",
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
  "value": "配置应用链接能力",
  "id": "配置应用链接能力",
  "level": 2
}, {
  "value": "建立域名与应用关联关系",
  "id": "建立域名与应用关联关系",
  "level": 3
}, {
  "value": "在AGC为应用创建关联的网址域名",
  "id": "在agc为应用创建关联的网址域名",
  "level": 3
}, {
  "value": "在module.json5中配置关联的网址域名",
  "id": "在modulejson5中配置关联的网址域名",
  "level": 3
}, {
  "value": "处理传入的链接",
  "id": "处理传入的链接",
  "level": 3
}, {
  "value": "验证应用被拉起效果",
  "id": "验证应用被拉起效果",
  "level": 2
}, {
  "value": "点击链接验证",
  "id": "点击链接验证",
  "level": 3
}, {
  "value": "通过openLink接口拉起",
  "id": "通过openlink接口拉起",
  "level": 3
}, {
  "value": "通过系统浏览器或ArkWeb拉起",
  "id": "通过系统浏览器或arkweb拉起",
  "level": 3
}, {
  "value": "通过系统级扫码入口拉起",
  "id": "通过系统级扫码入口拉起",
  "level": 3
}, {
  "value": "FAQ",
  "id": "faq",
  "level": 2
}, {
  "value": "应用的module.json5文件skills设置不正确，如何处理？",
  "id": "应用的modulejson5文件skills设置不正确如何处理",
  "level": 3
}, {
  "value": "开发者网站服务器配置不正确，如何处理？",
  "id": "开发者网站服务器配置不正确如何处理",
  "level": 3
}, {
  "value": "系统尚未完成域名校验，如何处理？",
  "id": "系统尚未完成域名校验如何处理",
  "level": 3
}, {
  "value": "如何确认域名校验是否成功？",
  "id": "如何确认域名校验是否成功",
  "level": 3
}, {
  "value": "设备首次启动，若无法通过App Linking拉起系统预装应用，如何处理？",
  "id": "设备首次启动若无法通过app-linking拉起系统预装应用如何处理",
  "level": 3
}, {
  "value": "访问CDN（Content Delivery Network，内容分发网络）时发现内容未及时更新，如何处理？",
  "id": "访问cdncontent-delivery-network内容分发网络时发现内容未及时更新如何处理",
  "level": 3
}, {
  "value": "应用和域名的对应关系如何？",
  "id": "应用和域名的对应关系如何",
  "level": 3
}, {
  "value": "如果同一域名关联了多个应用，那么该域名的链接将拉起哪个应用？",
  "id": "如果同一域名关联了多个应用那么该域名的链接将拉起哪个应用",
  "level": 3
}, {
  "value": "配置App Linking应用链接时提示“下载源JSON文件被拒，请确认安全策略是否符合要求”，如何处理？",
  "id": "配置app-linking应用链接时提示下载源json文件被拒请确认安全策略是否符合要求如何处理",
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
        id: "通过app-linking应用链接拉起指定应用",
        children: "通过App Linking应用链接拉起指定应用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用App Linking应用链接进行跳转时，系统会根据接口传入的uri信息（HTTPS链接）将用户引导至目标应用中的特定内容，无论应用是否已安装，用户都可以访问到链接对应的内容，跳转体验相比Deep Linking方式更加顺畅。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：当开发者使用App Linking应用链接接入“扫码直达”服务后，用户可通过控制中心扫一扫这类系统级扫码入口，扫描应用的二维码、条形码并跳转到应用对应服务页，实现一步直达的体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(806647)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该能力目前仅适用于5.0.0(12)及以上版本的HarmonyOS应用，如果开发的是元服务，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-applinking",
        children: "使用元服务链接跳转元服务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "原理机制",
      children: "原理机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App Linking在Deep Linking基础上增加了域名校验环节，通过域名校验，可帮助用户消除歧义，识别合法归属于域名的应用，使链接更加安全可靠。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App Linking对于同一HTTPS网址，有应用和网页两种内容的呈现方式。当应用安装时则优先打开应用去呈现内容；当应用未安装时，则打开浏览器呈现Web版的内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、PC/2in1、Tablet设备。并且从5.1.1(19)版本开始，新增支持TV设备。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%BB%BA%E7%AB%8B%E5%9F%9F%E5%90%8D%E4%B8%8E%E5%BA%94%E7%94%A8%E5%85%B3%E8%81%94%E5%85%B3%E7%B3%BB",
              children: "建立域名与应用关联关系"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "云端开发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%9C%A8agc%E4%B8%BA%E5%BA%94%E7%94%A8%E5%88%9B%E5%BB%BA%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
              children: "在AGC为应用创建关联的网址域名"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "客户端开发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%9C%A8modulejson5%E4%B8%AD%E9%85%8D%E7%BD%AE%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
              children: "在module.json5中配置关联的网址域名"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "客户端开发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%A4%84%E7%90%86%E4%BC%A0%E5%85%A5%E7%9A%84%E9%93%BE%E6%8E%A5",
              children: "处理传入的链接"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "前端开发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发链接对应的H5网页，应用未安装时呈现Web版内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 本指南侧重于HarmonyOS应用相关的开发指导，网页的开发请开发者依据业务需求自行实现。"]
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
      id: "配置应用链接能力",
      children: "配置应用链接能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建立域名与应用关联关系",
      children: "建立域名与应用关联关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发者的网站域名服务器上做如下配置。后续", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9C%A8agc%E4%B8%BA%E5%BA%94%E7%94%A8%E5%88%9B%E5%BB%BA%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
        children: "在AGC为应用创建关联的网址域名"
      }), "时，AGC会通过此文件确认哪些应用才是合法归属于此域名的，使链接更加安全可靠。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建域名配置文件applinking.json，内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n \"applinking\": {\n   \"apps\": [\n     {\n       \"appIdentifier\": \"1234567\",\n       \"index\": 1\n     },\n     {\n       \"appIdentifier\": \"7654321\",\n       \"index\": 2\n     }\n   ]\n }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(822476)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一个网站域名可以关联多个应用，只需要在\"apps\"列表里放置多个\"appIdentifier\"元素即可，其中每个\"appIdentifier\"元素对应每个应用。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必选(M)/可选(O)"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "appIdentifier"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["填写创建应用时生成的APP ID，获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
                  children: "查看应用信息"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "index"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Integer"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["当App Linking匹配到多个应用时，若希望直接拉起某个指定应用，可以使用index来设置应用跳转的优先级。  index取值范围为[-100,100]，可以重复，不可以为空值，值越大表示优先级越高。  - 如果App Linking匹配到多个应用，但是都未配置index字段，系统会拉起所有匹配的应用，并弹出对话框询问用户选择拉起哪个应用。  - 如果App Linking匹配到多个应用，并且部分或全部配置了index字段，系统会拉起index值最大的应用。当有多个应用的index值最大时，系统会同时拉起这些应用，并弹出对话框询问用户选择拉起哪个应用。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "起始版本："
                  })
                }), " 6.1.0(23)"]
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将applinking.json配置文件放在域名服务器的固定目录下：", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://domain.name/.well-known/applinking.json。例如：开发者的服务器域名为www.example.com，则必须将applinking.json文件放在如下位置"
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com/.well-known/applinking.json"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在agc为应用创建关联的网址域名",
      children: "在AGC为应用创建关联的网址域名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于HarmonyOS应用链接能力，需要为HarmonyOS应用创建关联的网址域名。"
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
          children: "在左侧导航栏中选择“增长 > App Linking > 应用链接”，点击“创建”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(544086)/* ["default"] */.A) + "",
            width: "1441",
            height: "301"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["填写", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%BB%BA%E7%AB%8B%E5%9F%9F%E5%90%8D%E4%B8%8E%E5%BA%94%E7%94%A8%E5%85%B3%E8%81%94%E5%85%B3%E7%B3%BB",
            children: "建立域名与应用关联关系"
          }), "的网址域名，例如：", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com。必须输入精确的域名，不可输入包含特殊字符的模糊网址"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(820106)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不可以在域名后面添加/，即不支持", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com/形式"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(813149)/* ["default"] */.A) + "",
            width: "1235",
            height: "348"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置完成后点击“发布”，AGC会对该网站域名的配置文件所包含的应用与本项目内的应用列表进行交集校验。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(967616)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用链接发布完成后，如果距离上次更新超过24小时，系统会去域名服务器上重新获取配置文件进行交集校验。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如：开发者在4月7日17:21创建了应用链接，系统会在4月8日17:30去域名服务器上重新获取配置文件，然后进行交集校验，更新发布状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(359768)/* ["default"] */.A) + "",
            width: "1452",
            height: "383"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果域名的配置文件中存在本项目中的应用，则发布成功，点击“查看”可显示该域名关联的应用信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(373441)/* ["default"] */.A) + "",
                width: "1039",
                height: "735"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果还在校验中，则状态为“发布中”。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果配置文件中没有包含任何本项目中的应用，则发布失败，点击“查看”可显示发布失败原因。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(235100)/* ["default"] */.A) + "",
                width: "613",
                height: "248"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在modulejson5中配置关联的网址域名",
      children: "在module.json5中配置关联的网址域名"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5文件"
      }), "中进行如下配置，以声明应用关联的域名地址，并开启域名校验开关。当URL符合module.json5中配置的host和路径规则时，可拉起开发者的App。"]
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
        src: (__webpack_require__(325456)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "skills标签下默认包含一个skill对象，用于标识应用入口。应用跳转链接不能在该skill对象中配置，需要创建独立的skill对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果存在多个跳转场景，需要在skills标签下创建不同的skill对象，否则会导致配置无法生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，声明应用关联的域名是www.example.com，则需进行如下配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n        \"icon\": \"$media:icon\",\n        \"label\": \"$string:EntryAbility_label\",\n        // 请将exported配置为true；如果exported为false，仅具有权限的系统应用能够拉起该应用，否则无法拉起应用\n        \"exported\": true,\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              // 从5.1.1(19)开始，须配置为\"ohos.want.action.home\"。对于5.1.0(18)及之前版本，请配置为\"action.system.home\"。\n              \"ohos.want.action.home\"\n            ]\n          },\n          {\n            \"entities\": [\n              // entities必须包含\"entity.system.browsable\"\n              \"entity.system.browsable\"\n            ],\n            \"actions\": [\n              // actions必须包含\"ohos.want.action.viewData\"\n              \"ohos.want.action.viewData\"\n            ],\n            \"uris\": [\n              {\n                // scheme须配置为https\n                \"scheme\": \"https\",\n                // host须配置为关联的网址域名\n                \"host\": \"www.example.com\",\n                // path可选，表示域名服务器上的目录或文件路径，例如www.example.com/path1中的path1\n                // 如果应用只能处理部分特定的path，则此处应该配置应用所支持的path，避免出现应用不能处理的path链接也被引流到应用中的问题\n                \"path\": \"path1\"\n              }\n            ],\n            // domainVerify须设置为true\n           \"domainVerify\": true\n          }\n          // 若有其他跳转能力，如推送消息跳转、NFC跳转，可新增一个skill对象，防止与App Linking业务冲突\n        ]\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理传入的链接",
      children: "处理传入的链接"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用的Ability（如EntryAbility）的onCreate()或者onNewWant()生命周期回调中添加如下代码，以处理传入的链接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { url } from '@kit.ArkTS';\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 从want中获取传入的链接信息。\n    // 如传入的url为：https://www.example.com/programs?action=showall\n    let uri = want?.uri;\n    if (uri) {\n      // 从链接中解析query参数，拿到参数后，开发者可根据自己的业务需求进行后续的处理。\n      try {\n        let urlObject = url.URL.parseURL(want?.uri);\n        let action = urlObject.params.get('action');\n        // 例如，当action为showall时，展示所有的节目。\n        if (action === \"showall\"){\n          // ...\n        }\n        // ...\n      } catch (error) {\n        hilog.error(0x0000, 'testTag', `Failed to parse url.`);\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若要根据链接参数启动UIAbility的指定页面组件，请参考“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction#%E5%90%AF%E5%8A%A8uiability%E7%9A%84%E6%8C%87%E5%AE%9A%E9%A1%B5%E9%9D%A2",
        children: "启动UIAbility的指定页面"
      }), "”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "验证应用被拉起效果",
      children: "验证应用被拉起效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对应用进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-signing#section297715173233",
            children: "手动签名"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不能使用DevEco Studio的自动签名功能，必须使用手动签名，否则无法拉起应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译打包，并安装应用至调试设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "验证App Linking应用链接拉起效果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["方式一：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%82%B9%E5%87%BB%E9%93%BE%E6%8E%A5%E9%AA%8C%E8%AF%81",
              children: "点击链接验证"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["方式二：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%80%9A%E8%BF%87openlink%E6%8E%A5%E5%8F%A3%E6%8B%89%E8%B5%B7",
              children: "通过openLink接口拉起"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["方式三：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%80%9A%E8%BF%87%E7%B3%BB%E7%BB%9F%E6%B5%8F%E8%A7%88%E5%99%A8%E6%88%96arkweb%E6%8B%89%E8%B5%B7",
              children: "通过系统浏览器或ArkWeb拉起"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["方式四：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%80%9A%E8%BF%87%E7%B3%BB%E7%BB%9F%E7%BA%A7%E6%89%AB%E7%A0%81%E5%85%A5%E5%8F%A3%E6%8B%89%E8%B5%B7",
              children: "通过系统级扫码入口拉起"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "点击链接验证",
      children: "点击链接验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将App Linking应用链接地址存入备忘录中，并点击验证该链接是否可以拉起应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过openlink接口拉起",
      children: "通过openLink接口拉起"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拉起方应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
        children: "UIAbilityContext.openLink()"
      }), "接口，传入目标应用的链接，拉起目标应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "openLink接口提供了两种拉起目标应用的方式，开发者可根据业务需求进行选择。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式一： 仅以App Linking的方式打开应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将appLinkingOnly参数设为true，若有App Linking匹配的应用，则直接打开目标应用。若无App Linking匹配的应用，则抛异常给开发者进行处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用于无法打开目标应用时，开发者做了相应的异常处理。例如：拉起方应用集成了ArkWeb，当目标应用不存在时，可通过ArkWeb打开链接。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二： 以App Linking优先的方式打开应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将appLinkingOnly参数设为false或者不传，若有App Linking匹配的应用，则直接打开目标应用。若无App Linking匹配的应用，则尝试以浏览器打开链接的方式打开应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用于无法打开目标应用时，开发者未做任何处理。此时目标应用不存在时，会通过系统浏览器打开链接。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文为了方便验证App Linking的配置是否正确，选择方式一，示例如下。"
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
          }), "接口打开应用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { GlobalContext } from '../common/GlobalContext';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('start link', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context = GlobalContext.getContext();\n        let link: string = \"https://www.example.com/programs?action=showall\";\n        // 仅以App Linking的方式打开应用\n        context.openLink(link, { appLinkingOnly: true })\n          .then(() => {\n            hilog.info(0x0000, 'testTag', `Succeeded in opening link.`);\n          })\n          .catch((error: BusinessError) => {\n            hilog.error(0x0000, 'testTag', `Failed to open link, code: ${error.code}, message: ${error.message}`);\n          })\n      })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过系统浏览器或arkweb拉起",
      children: "通过系统浏览器或ArkWeb拉起"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb深度集成了App Linking的能力，当用户在系统浏览器或者集成ArkWeb的应用的网页上点击某个链接时，若有链接匹配的应用，系统则会通过App Linking能力优先拉起目标应用，并在应用内展示相应的内容。此机制有如下限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果用户当前浏览的网页的域名与点击的App Linking链接的域名完全一致，则系统会继续在系统浏览器或ArkWeb中打开该链接，以维持连贯的用户浏览体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果域名不完全一致（例如example.com和app.example.com），则系统会通过App Linking能力优先拉起目标应用，并在应用内展示相应的内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过系统级扫码入口拉起",
      children: "通过系统级扫码入口拉起"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过系统级扫码入口扫描App Linking应用链接对应的二维码，然后查看跳转效果。以“扫码直达”服务的美团单车场景为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(110030)/* ["default"] */.A) + "",
        width: "267",
        height: "552"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faq",
      children: "FAQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用的modulejson5文件skills设置不正确如何处理",
      children: "应用的module.json5文件skills设置不正确，如何处理？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查\"host\"字段中应用所对应的域名是否与AGC创建的网址域名一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发者网站服务器配置不正确如何处理",
      children: "开发者网站服务器配置不正确，如何处理？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照以下步骤排查："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查服务器的JSON配置，并确保appIdentifier的值正确无误。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查applinking.json是否放置在正确的目录（.well-known）下，通过浏览器等方式访问该json文件的地址：", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://your.domain.name/.well-known/applinking.json，确保能正常访问"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统尚未完成域名校验如何处理",
      children: "系统尚未完成域名校验，如何处理？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照以下步骤排查："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在设备上安装应用，需等待至少20秒，以确保系统完成域名校验的流程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统进行域名校验时，如存在断网、弱网等情况，可能导致域名校验失败，域名校验失败后，系统将在24小时内重新进行域名校验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何确认域名校验是否成功",
      children: "如何确认域名校验是否成功？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如需查看应用域名验证结果，请在DevEco Studio中打开终端，并使用以下命令查询验证结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "hdc shell hidumper -s AppDomainVerifyManager"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行hidumper命令后，即可在控制台上看到success消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleName:\n  appIdentifier:123456789\n   domain verify status:\n    https://www.example.com:success\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果存在client-error消息，请按照以下步骤排查："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "检查消息中的appIdentifier是否与AGC中的APP ID一致。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "检查在AGC配置的域名发布是否成功。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果存在http_unknown消息，请确保设备可以访问网络，并重新安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果存在其他消息，请联系", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/support",
            children: "技术支持"
          }), "获取帮助。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备首次启动若无法通过app-linking拉起系统预装应用如何处理",
      children: "设备首次启动，若无法通过App Linking拉起系统预装应用，如何处理？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备首次启动后，系统将在20分钟内尝试对预装应用进行域名校验，若在20分钟内设备一直无法访问网络，则可能导致预装应用域名校验失败。若出现此类问题，请重启手机，或者等待24小时后重试。系统将在下次开机或24小时后对预装应用重新尝试进行域名校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "访问cdncontent-delivery-network内容分发网络时发现内容未及时更新如何处理",
      children: "访问CDN（Content Delivery Network，内容分发网络）时发现内容未及时更新，如何处理？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CDN缓存时间为10分钟，请耐心等待一段时间后再次访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用和域名的对应关系如何",
      children: "应用和域名的对应关系如何？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用和域名的关系是多对多的关系：一个应用可以关联多个不同的域名，同样地，一个域名也可以关联多个不同的应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如果同一域名关联了多个应用那么该域名的链接将拉起哪个应用",
      children: "如果同一域名关联了多个应用，那么该域名的链接将拉起哪个应用？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过配置applinking.json以关联多个应用。如果每个应用的module.json5的uris字段配置的都是一样的，那么系统将弹出列表框供用户选择要拉起的目标应用。 为了更好的体验，开发者也可以通过链接的path去区分拉起的目标应用，如链接", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://www.example.com/path1拉起目标应用1，链接https://www.example.com/path2拉起目标应用2"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置app-linking应用链接时提示下载源json文件被拒请确认安全策略是否符合要求如何处理",
      children: "配置App Linking应用链接时提示“下载源JSON文件被拒，请确认安全策略是否符合要求”，如何处理？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置文件需要放在域名服务器的固定目录下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://domain.name/.well-known/applinking.json"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：开发者的服务器域名为www.example.com，则必须将applinking.json文件放在如下位置："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://www.example.com/.well-known/applinking.json"
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
235100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
544086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478801-2ed753a7343847c83fd8e8f53e901a5d.png");

},
110030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799154-c37604aa76025bc7cb4b44a117b8df3b.gif");

},
373441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958802-0a1340a490cf74af2fb1cdd8db4d3848.png");

},
967616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
359768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438847-3f23ddeca42f9a05b5cf85d74dc4d9e9.png");

},
806647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
820106(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
822476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
813149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799152-6d5ca171449439711d0a2c2f7d57791c.png");

},
325456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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