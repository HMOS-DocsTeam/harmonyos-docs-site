"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["247986"], {
346566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_minorsprotection_account_overview_minorsprotection_account_overview_minorsprotection_md_b55_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-minorsprotection-account-overview-minorsprotection-account-overview-minorsprotection-md-b55.json
var site_docs_account_kit_guide_account_minorsprotection_account_overview_minorsprotection_account_overview_minorsprotection_md_b55_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-minorsprotection/account-overview-minorsprotection/account-overview-minorsprotection","title":"概述","description":"未成年人模式用于帮助应用与系统联动，提供未成年人网络保护。应用通过接入Account Kit提供的未成年人模式能力与系统联动，可快速实现自动切换未成年人模式状态，简化了家长用户的设置步骤，为未成年人提供安全、健康的网络环境。","source":"@site/docs/account-kit-guide/account-minorsprotection/account-overview-minorsprotection/account-overview-minorsprotection.md","sourceDirName":"account-kit-guide/account-minorsprotection/account-overview-minorsprotection","slug":"/account-kit-guide/account-minorsprotection/account-overview-minorsprotection/","permalink":"/harmonyos-docs-site/account-kit-guide/account-minorsprotection/account-overview-minorsprotection/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-overview-minorsprotection","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"华为账号其他方式登录获取用户风险等级","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition/"},"next":{"title":"应用与系统联动切换未成年人模式","permalink":"/harmonyos-docs-site/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-system-minorsprotection/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-minorsprotection/account-overview-minorsprotection/account-overview-minorsprotection.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-overview-minorsprotection',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "未成年人模式能力介绍",
  "id": "未成年人模式能力介绍",
  "level": 2
}, {
  "value": "场景分析",
  "id": "场景分析",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接入规范",
  "id": "接入规范",
  "level": 2
}, {
  "value": "用户体验设计",
  "id": "用户体验设计",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["未成年人模式用于帮助应用与系统联动，提供未成年人网络保护。应用通过接入Account Kit提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection",
        children: "未成年人模式能力"
      }), "与系统联动，可快速实现自动切换未成年人模式状态，简化了家长用户的设置步骤，为未成年人提供安全、健康的网络环境。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "未成年人"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本章节中所指未成年人，即中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）未满十八周岁的公民。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启系统未成年人模式后的限制项目"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用时长限制：针对16周岁及以上不满18周岁的未成年人使用者，默认每日可使用时长2小时，其他年龄的未成年人使用者，默认每日可使用时长为1小时。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用安装限制：默认仅允许安装适龄应用。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用打开限制：默认仅允许打开已", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%8E%A5%E5%85%A5%E8%A7%84%E8%8C%83",
              children: "接入未成年人模式"
            }), "且配置minors_mode值为\"1\"的应用（游戏类应用要求满足“适龄应用”条件），家长可对应用进行豁免，允许本次使用。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "内容访问限制：接入未成年人模式的应用默认随系统切换至未成年人模式，在应用内展示适龄内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "其他系统功能限制：部分系统功能将受限使用，包括部分应用的卸载更新，退出系统华为账号登录，USB调试功能等，更多限制请进入“设置 > 健康使用设备”查看。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适龄应用"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适龄应用指在华为应用市场中的应用分级小于或等于未成年使用者的年龄的应用。例如："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "某应用在华为应用市场的年龄分级为年满12周岁（12+），未成年使用者为13周岁，则该应用为适龄应用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "某应用在华为应用市场的年龄分级为年满18周岁（18+），未成年使用者为7周岁，则该应用为非适龄应用。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "远程守护"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可在“设置 > 华为账号 > 家人共享 > 远程守护”开启远程守护。开启远程守护后，未成年人的设备上的未成年人模式会自动退出。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "未成年人模式能力介绍",
      children: "未成年人模式能力介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供的未成年人模式能力如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#getminorsprotectioninfosync",
            children: "获取系统未成年人模式开启状态和年龄段信息"
          }), "：开发者可读取当前系统未成年人模式的开启和关闭状态，并根据此状态对应开启或退出应用的未成年人模式。开启系统未成年人模式时，家长会设置未成年人的年龄信息。在未成年人模式开启时，开发者可读取当前系统未成年人模式下未成年人的年龄段，并向未成年人提供符合该年龄段的内容和服务。当前可获取的年龄段划分如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不满3周岁；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "3周岁及以上不满8周岁；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "8周岁及以上不满12周岁；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "12周岁及以上不满16周岁；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "16周岁及以上不满18周岁。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#leadtoturnonminorsmode",
            children: "开启系统未成年人模式"
          }), "：开发者可以调用此接口拉起系统未成年人模式引导页，引导用户开启系统的未成年人模式。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#leadtoturnoffminorsmode",
            children: "关闭系统未成年人模式"
          }), "：开发者可以调用此接口拉起关闭系统未成年人模式页面，引导用户关闭系统的未成年人模式。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#verifyminorsprotectioncredential",
            children: "系统家长身份验证能力"
          }), "：开启系统未成年人模式时，家长会设置六位数字密码作为未成年人模式状态的指令依据。在未成年人模式开启时，开发者可按需调用系统家长身份验证接口，以验证家长身份。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景分析",
      children: "场景分析"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景介绍"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子场景名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "实现方案思路"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-system-minorsprotection",
              children: "应用与系统联动切换未成年人模式"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用与系统未成年人模式进行联动切换未成年人模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统未成年人模式开启状态。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#getminorsprotectioninfosync",
              children: "查询系统未成年人模式开启状态"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-system-minorsprotection#%E4%BA%8B%E4%BB%B6%E8%AF%B4%E6%98%8E",
              children: "订阅未成年人模式公共事件"
            }), "来获取系统未成年人模式开启状态，应用的未成年人模式状态需和系统未成年人模式的状态保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-app-turn-on-minorsprotection",
              children: "应用内开启未成年人模式"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在应用内开启系统未成年人模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "引导用户开启系统未成年人模式。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用系统未成年人模式的开启接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#leadtoturnonminorsmode",
              children: "leadToTurnOnMinorsMode"
            }), "，拉起系统未成年人模式开启流程。系统未成年人模式开启后，应用需跟随同步开启。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-app-turn-off-minorsprotection/account-appself-turn-off-minorsprotection",
              children: "关闭应用的未成年人模式"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用可单独关闭应用的未成年人模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户操作关闭应用的未成年人模式。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用家长身份验证接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#verifyminorsprotectioncredential",
              children: "verifyMinorsProtectionCredential"
            }), "，验证通过后，可关闭应用的未成年人模式，同时需要记录单独关闭的标记为true，表明当前用户操作单独关闭应用的未成年人模式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-app-turn-off-minorsprotection/account-appself-turn-off-minorsprotection",
              children: "关闭应用的未成年人模式（查询或订阅方式）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用可单独关闭应用的未成年人模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询或订阅到未成年人模式已开启/关闭。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当查询或订阅到未成年人模式已开启，如单独关闭的标记为true，则应用不开启未成年人模式，否则需要开启未成年人模式。  当查询或订阅到未成年人模式已关闭，需设置单独关闭的标记为false，且关闭应用的未成年人模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-app-turn-off-minorsprotection/account-system-turn-off-minorsprotection",
              children: "关闭系统的未成年人模式"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在应用内关闭系统未成年人模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "引导用户关闭系统未成年人模式。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用系统未成年人模式的关闭接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#leadtoturnoffminorsmode",
              children: "leadToTurnOffMinorsMode"
            }), "，拉起系统的未成年人模式关闭流程，系统未成年人模式关闭后，应用需跟随同步关闭。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-password-minorsprotection",
              children: "应用内调整未成年人模式设置"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户调整内容偏好、使用时长等设置，验证家长身份。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起验证未成年人模式密码页面，验证家长身份。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用家长身份验证接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#verifyminorsprotectioncredential",
              children: "verifyMinorsProtectionCredential"
            }), "，拉起验证未成年人模式密码页面。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议开发者组合使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-system-minorsprotection",
        children: "应用与系统联动切换未成年人模式"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-app-turn-on-minorsprotection",
        children: "应用内开启未成年人模式"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-app-turn-off-minorsprotection/account-appself-turn-off-minorsprotection",
        children: "关闭应用的未成年人模式"
      }), "章节，构建应用的未成年人模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["未成年人模式详细接入体验可参考Account Kit提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/accountkit-samplecode-clientdemo-arkts",
        children: "SampleCode示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(293044)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者可在“设置 > 健康使用设备”中点击“开启未成年人模式”按钮，进行开启未成年人模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据《中华人民共和国未成年人保护法》、《中华人民共和国网络安全法》、《中华人民共和国个人信息保护法》、《未成年人网络保护条例》、《移动互联网未成年人模式建设指南》等相关法规及文件，为强化未成年人网络保护，华为提供“未成年人模式”，为未成年人营造安全健康的网络环境。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["与系统联动后，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "建议应用将模式名称变更为“未成年人模式”"
          })
        }), "，便于用户理解。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "与系统联动后，如应用自动将未成年人模式开启状态同步至其它终端，可能导致用户无法在其它终端上关闭未成年人模式，应用需充分考虑该场景下的用户体验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "未成年人模式支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下场景暂不支持开启或关闭未成年人模式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统版本低于HarmonyOS NEXT/5.0.x版本。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统登录的账号是海外华为账号。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当系统切换至隐私空间。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(796250)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对上述场景，建议先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/syscap/syscap#%E5%88%A4%E6%96%AD-api-%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8",
        children: "canIUse"
      }), "接口和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#supportminorsmode",
        children: "supportMinorsMode"
      }), "接口来判断当前设备环境是否支持系统的未成年人模式，否则在不支持的设备环境上调用未成年人模式相关接口，可能会造成程序崩溃："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/syscap/syscap#%E5%88%A4%E6%96%AD-api-%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8",
          children: "canIUse"
        }), "接口和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#supportminorsmode",
          children: "supportMinorsMode"
        }), "接口返回均为true时，表明该设备支持系统的未成年人模式，应用可通过本章节描述的相关能力，与系统进行未成年人模式联动。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/syscap/syscap#%E5%88%A4%E6%96%AD-api-%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8",
          children: "canIUse"
        }), "接口或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection#supportminorsmode",
          children: "supportMinorsMode"
        }), "接口返回为false时，表明该设备暂未支持系统的未成年人模式以及相关联动能力，应用需构建自己的未成年人模式或关闭应用的未成年人模式入口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入规范",
      children: "接入规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在接入未成年人模式时，需要遵循以下规范："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当应用接入未成年人模式后，开发者需要在应用中声明已经支持未成年人模式："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过在工程中entry模块的module.json5文件中module属性下配置metadata字段并且配置minors_mode值为\"1\"，表示当前应用已接入未成年人模式，如果开发者没有配置相关字段，或配置值不为\"1\"，则表示该应用不支持未成年人模式，当系统开启未成年人模式时，不支持未成年人模式的应用会被默认禁用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "json \"module\": { \"name\": \"<name>\", \"type\": \"entry\", \"description\": \"<description>\", \"mainElement\": \"<mainElement>\", \"deviceTypes\": [], \"pages\": \"<pages>\", \"abilities\": [], \"metadata\": [ { \"name\": \"minors_mode\", \"value\": \"1\" } ], \"extensionAbilities\": [] }"
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意："
              })
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.blockquote, {
          children: "\n"
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "开发者如果声明应用支持未成年人模式，则建议接入系统提供的未成年人模式，跟随系统状态进行切换，并提供适龄内容。不能随同系统切换而切换的，应用责任自负。开发者需确保应用提供的未成年人模式内容符合相关法律法规及监管要求。因违反规定而导致的一切后果由开发者自行负责。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.blockquote, {
          children: "\n"
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.ol, {
            start: "2",
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "如果开发者修改过该应用在健康使用设备中的管控规则，则以修改过的最新规则为准。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用需主动跟随系统切换未成年人模式的状态。（用户操作关闭应用的未成年人模式场景除外）"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者需为未成年人提供分龄内容服务，并打造专属内容池，获取系统中未成年人的年龄段信息作为分级依据，推荐适龄内容，保障未成年人接触的信息内容适龄，同时应用也需屏蔽未成年人不可使用的功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例：应用A查询或订阅到了系统未成年人模式已开启，且未成年人模式的年龄段为3周岁及以上不满8周岁，则应用A自动切换至未成年人模式，并向未成年人用户推荐适合3周岁及以上不满8周岁年龄段的适龄内容，并屏蔽不适龄的功能。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户体验设计",
      children: "用户体验设计"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(345458)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "770",
        height: "1592"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用开启未成年人模式后，建议应用主页样式参考以上UX设计，保障用户体验的一致性。"
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
796250(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
345458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478759-a7f3b56459ebde86fff98bb48dfead2c.png");

},
293044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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