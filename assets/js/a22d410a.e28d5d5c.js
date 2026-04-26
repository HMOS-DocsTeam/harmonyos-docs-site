"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["272993"], {
635417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_knock_share_knock_share_between_phones_knock_share_between_phones_content_knock_share_between_phones_content_md_a22_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-knock-share-knock-share-between-phones-knock-share-between-phones-content-knock-share-between-phones-content-md-a22.json
var site_docs_share_kit_guide_knock_share_knock_share_between_phones_knock_share_between_phones_content_knock_share_between_phones_content_md_a22_namespaceObject = JSON.parse('{"id":"share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content/knock-share-between-phones-content","title":"内容分享","description":"注册碰一碰事件","source":"@site/docs/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content/knock-share-between-phones-content.md","sourceDirName":"share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content","slug":"/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content/","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"内容分享","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-between-phones-content","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-overview/"},"next":{"title":"邀请组队","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-group/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content/knock-share-between-phones-content.md


const frontMatter = {
	title: '内容分享',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-between-phones-content',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '内容分享';

const assets = {

};



const toc = [{
  "value": "注册碰一碰事件",
  "id": "注册碰一碰事件",
  "level": 2
}, {
  "value": "设置分享预览",
  "id": "设置分享预览",
  "level": 2
}, {
  "value": "设置配套的卡片样式",
  "id": "设置配套的卡片样式",
  "level": 3
}, {
  "value": "设置合适的预览图",
  "id": "设置合适的预览图",
  "level": 3
}, {
  "value": "使用预览图更新能力",
  "id": "使用预览图更新能力",
  "level": 3
}, {
  "value": "安全策略",
  "id": "安全策略",
  "level": 3
}, {
  "value": "发送分享数据",
  "id": "发送分享数据",
  "level": 2
}, {
  "value": "App Linking",
  "id": "app-linking",
  "level": 3
}, {
  "value": "Deep Linking",
  "id": "deep-linking",
  "level": 3
}, {
  "value": "异常场景需终止分享",
  "id": "异常场景需终止分享",
  "level": 2
}, {
  "value": "当前界面无可分享内容",
  "id": "当前界面无可分享内容",
  "level": 3
}, {
  "value": "分享内容下载失败等其他异常场景",
  "id": "分享内容下载失败等其他异常场景",
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
        id: "内容分享",
        children: "内容分享"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册碰一碰事件",
      children: "注册碰一碰事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户进入支持碰一碰分享的界面或场景时，给出适当的引导和提示，可有效提升用户分享意愿。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引导方式参考以下效果图："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["文本提示", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "可碰一碰分享至 HarmonyOS 5 及以上版本手机"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(674137)/* ["default"] */.A) + "",
            width: "320",
            height: "681"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["动图提示", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "可碰一碰分享"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(676954)/* ["default"] */.A) + "",
            width: "320",
            height: "681"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Share Kit提供统一的动图资源文件以方便应用接入。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["下载地址：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/harmonyos_samples/share-kit_-sample-code_-clientdemo_-arkts/tree/master/entry/src/main/resources/rawfile",
              children: "碰一碰引导资源"
            }), "，请完整下载knock_share_guide目录所有文件，并放置于应用entry/src/main/resources/rawfile目录下。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["示例代码：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/harmonyos_samples/share-kit_-sample-code_-clientdemo_-arkts/blob/master/entry/src/main/ets/components/subpages/KnockShareTips.ets",
              children: "碰一碰引导示例代码"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置分享预览",
      children: "设置分享预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接入碰一碰分享时，需根据不同的分享数据类型，适配相应的卡片模板。详细参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/onehop-0000002354602581",
        children: "碰一碰分享设计指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置配套的卡片样式",
      children: "设置配套的卡片样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保证碰一碰分享用户体验，Share Kit支持三种卡片模板供手机发起碰一碰分享时选择。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "卡片模板类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "效果图"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "纯图片布局"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["纯图片布局只包括预览图。  当分享数据为文件、图片等无需添加标题及描述的场景，推荐使用此卡片模板。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用方法"
              })
            }), "  构造分享数据时，仅传递预览图（thumbnailUri）字段，即可生成此卡片模板。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "布局要求"
              })
            }), "  预览图：支持最小宽高比1:4，超出部分将被裁剪。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "沉浸式大卡布局"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["沉浸式大卡布局包括预览图、标题、描述、应用图标。  当分享数据为链接类型时，需要向用户传递链接的内容，推荐使用此卡片模板。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用方法"
              })
            }), "  需同时满足以下2个条件：  1. 构造分享数据时，需同时传入标题（title）、描述（description）字段和预览图（thumbnailUri）字段。  2. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "预览图宽高比小于1:1"
              })
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "布局要求"
              })
            }), "  1. 预览图：支持最小宽高比1:4，超出部分将被裁剪。  2. 标题：最大可显示2行，当文本超过2行时，未能正常在屏幕显示的文本用省略号代替。如果标题末尾有重要信息显示，需应用自行控制字数约20个中文左右。  3. 描述：仅可显示1行，文本超过1行时，未能正常在屏幕上显示的文本用省略号代替。  4. 应用图标：无需配置，系统将默认获取应用图标用于显示在卡片底部。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "白卡上下布局"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["白卡上下布局包括预览图、标题、描述、应用图标。当分享数据为链接类型时，需要向用户传递链接的内容，推荐使用此卡片模板。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用方法"
              })
            }), "  需同时满足以下2个条件：  1. 构造分享数据时，需同时传入标题(title)、描述(description)字段和预览图(thumbnailUri)字段。  2. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "预览图宽高比大于1:1"
              })
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "布局要求"
              })
            }), "  1. 预览图：仅显示在卡片上方，不会铺满整个卡片。  2. 标题：最大可显示2行，当文本超过2行时，未能正常在屏幕显示的文本用省略号代替。如果标题末尾有重要信息显示，需应用自行控制字数约20个中文左右。  3. 描述：仅可显示1行，文本超过1行时，未能正常在屏幕上显示的文本用省略号代替。  4. 应用图标：无需配置，系统将默认获取应用图标用于显示在卡片底部。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置合适的预览图",
      children: "设置合适的预览图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预览图的质量直接影响碰一碰卡片的显示效果。预览图太大或太小，会导致加载较慢或显示模糊等体验问题，建议开发者按照下表的推荐比例和分辨率设置合适的预览图。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "预览图来源"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐比例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐分辨率（单位：px）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用创作的海报"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3:4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小分辨率：600*800  最大分辨率：3000*4000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "用户上传的图片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小分辨率：不限制  最大分辨率：3000*4000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用预览图更新能力",
      children: "使用预览图更新能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用使用云端存储的图片作为预览图时，碰一碰分享的回调触发时，可能存在无法及时下载到本地，而导致超时失败的情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对以上场景，Share Kit提供预览图延迟更新的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者在接到碰一碰事件触发的回调时，可仅发送分享的核心数据内容，建立连接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share Kit会提供默认的预览图用于卡片展示。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["待云端存储的图片下载完成时，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/share-api/share-arkts/share-harmony-share/share-harmony-share#updatesharedata",
          children: "sharableTarget.updateShareData"
        }), "接口更新预览图信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { systemShare, harmonyShare } from '@kit.ShareKit';\nimport { fileUri } from '@kit.CoreFileKit';\n\n@Component\nexport default struct Index {\n  aboutToAppear(): void {\n    let capabilityRegistry: harmonyShare.SendCapabilityRegistry = {\n      windowId: 999, // 此值仅为示例 实际使用时请替换正确的windowId\n    }\n    harmonyShare.on('knockShare', capabilityRegistry, (sharableTarget: harmonyShare.SharableTarget) => {\n      let shareData: systemShare.SharedData = new systemShare.SharedData({\n        utd: utd.UniformDataType.HYPERLINK,\n        content: 'https://sharekitdemo.drcn.agconnect.link/ZB3p',\n        // 根据title,description,thumbnailUri会生成不同的卡片模板，具体可参考设置配套的卡片样式。\n        title: '碰一碰分享卡片标题',\n        description: '碰一碰分享卡片描述'\n      });\n      // 若云端预览图无法及时下载 可先发送数据\n      sharableTarget.share(shareData);\n\n      setTimeout(() => {\n        // 待预览图下载完成后 补充更新预览图\n        let uiContext: UIContext = this.getUIContext();\n        let contextFaker: Context = uiContext.getHostContext() as Context;\n        let filePath = contextFaker.filesDir + '/exampleKnock1.jpg'; // 仅为示例 请替换正确的文件路径\n        sharableTarget.updateShareData({\n          thumbnailUri: fileUri.getUriFromPath(filePath)\n        });\n      }, 5000);\n    });\n  }\n\n  aboutToDisappear(): void {\n    let capabilityRegistry: harmonyShare.SendCapabilityRegistry = {\n      windowId: 999, // 此值仅为示例 实际使用时请替换正确的windowId\n    }\n    // 解除碰一碰分享'knockShare'监听事件\n    harmonyShare.off('knockShare', capabilityRegistry);\n  }\n\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安全策略",
      children: "安全策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鉴于保护碰一碰发送端/接收端的信息安全考虑，在HarmonyOS NEXT 5.0.0.123 SP16及以上版本，碰一碰分享增加了对端华为账号或设备标识，帮助用户识别分享发送端/接收端的身份。具体规则如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对端已登录华为账号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对端未登录华为账号"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "碰一碰发送端"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若对端已登录华为账号，将展示接收端华为账号昵称和头像。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若对端未登录华为账号，将展示接收端设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "碰一碰接收端"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若对端已登录华为账号，将展示发送端华为账号昵称和头像。  **说明：**若发送端为HarmonyOS NEXT 5.0.0.123 SP16之前的版本，则不会展示任何信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若对端未登录华为账号，将展示发送端设备信息。  **说明：**若发送端为HarmonyOS NEXT 5.0.0.123 SP16之前的版本，则不会展示任何信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "发送分享数据",
      children: "发送分享数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过链接形式指定应用跳转，通常有2种方式：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup",
        children: "使用App Linking实现应用间跳转"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup",
        children: "使用Deep Linking实现应用间跳转"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定应用跳转时，utd类型需配置为\"general.hyperlink\"，确保Share Kit以正确的方式处理链接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "app-linking",
      children: "App Linking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用App Linking进行跳转时，无论应用是否已安装，用户都可以访问到链接对应的内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/app-linking-kit-guide/applinking-introduction",
        children: "App Linking Kit（应用链接服务）"
      }), "能力，在指定应用未安装时，可实现直达应用市场等能力，进一步提升用户体验。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当应用已安装时，App Linking可直接拉起应用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当应用未安装时，App Linking的默认行为是通过系统浏览器打开链接对应的网页。通过App Linking Kit的直达应用市场能力，可以实现在应用未安装时直接跳转应用市场。详情参见：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/app-linking-kit-guide/applinking-direct-to-ag",
          children: "直达应用市场能力"
        }), "。配合", (0,jsx_runtime.jsx)(_components.a, {
          href: "/app-linking-kit-guide/applinking-deferredlink",
          children: "延迟链接能力"
        }), "，即便触发碰一碰分享时应用未安装，待下载启动后仍能获取之前分享的链接，提升了用户体验，也提升了链接转换率。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { harmonyShare, systemShare } from '@kit.ShareKit';\nimport { fileUri } from '@kit.CoreFileKit';\n\n@Component\nexport struct HarmonyShareScenes {\n  // Entry Component 代码片段\n  onPageHide(): void {\n    let uiContext: UIContext = this.getUIContext();\n    let context: Context = uiContext.getHostContext() as Context;\n    context.eventHub.emit('onBackGround');\n  }\n\n  aboutToAppear(): void {\n    this.immersiveListening();\n    let uiContext: UIContext = this.getUIContext();\n    let context: Context = uiContext.getHostContext() as Context;\n    context.eventHub.on('onBackGround', this.onBackGround);\n  }\n\n  aboutToDisappear(): void {\n    this.immersiveDisablingListening();\n    let uiContext: UIContext = this.getUIContext();\n    let context: Context = uiContext.getHostContext() as Context;\n    context.eventHub.off('onBackGround', this.onBackGround);\n  }\n\n  build() {\n  }\n\n  private onBackGround = () => {\n    this.immersiveDisablingListening();\n  }\n\n  private immersiveCallback = (sharableTarget: harmonyShare.SharableTarget) => {\n    let uiContext: UIContext = this.getUIContext();\n    let contextFaker: Context = uiContext.getHostContext() as Context;\n    let filePath = contextFaker.filesDir + '/exampleKnock1.jpg'; // 仅为示例 请替换正确的文件路径\n    let shareData: systemShare.SharedData = new systemShare.SharedData({\n      utd: utd.UniformDataType.HYPERLINK,\n      content: 'https://sharekitdemo.drcn.agconnect.link/ZB3p',\n      // 根据title,description,thumbnailUri会生成不同的卡片模板，具体可参考设置配套的卡片样式。\n      thumbnailUri: fileUri.getUriFromPath(filePath),\n      title: '碰一碰分享卡片标题',\n      description: '碰一碰分享卡片描述'\n    });\n    sharableTarget.share(shareData);\n  }\n\n  private immersiveListening() {\n    harmonyShare.on('knockShare', this.immersiveCallback);\n  }\n\n  private immersiveDisablingListening() {\n    harmonyShare.off('knockShare', this.immersiveCallback);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-linking",
      children: "Deep Linking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Deep Linking进行跳转时，系统仅会在本地已安装的应用中寻找到符合条件的应用。未找到时将弹出提示", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "暂无可用打开方式"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异常场景需终止分享",
      children: "异常场景需终止分享"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进入需要分享的页面，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/share-api/share-arkts/share-harmony-share/share-harmony-share#onknockshare",
        children: "harmonyShare.on('knockShare')"
      }), "注册碰一碰分享事件，当宿主应用接收到系统发出的碰一碰事件回调时，可能由于某些原因无法发起分享，此时为保证用户体验，需及时终止分享，避免用户的长时间等待。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据应用的实际场景，参考以下方式处理："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "当前界面无可分享内容",
      children: "当前界面无可分享内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从6.0.2(22)版本开始，当前界面的内容不支持碰一碰分享时，开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/share-api/share-arkts/share-harmony-share/share-harmony-share#clarifynonshare",
        children: "sharableTarget.clarifyNonShare()"
      }), "终止本次分享，并引导用户前往可分享界面再次尝试。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711265)/* ["default"] */.A) + "",
        width: "320",
        height: "680"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { harmonyShare } from '@kit.ShareKit';\n\naboutToAppear(): void {\n  harmonyShare.on('knockShare', (sharableTarget: harmonyShare.SharableTarget) => {\n    sharableTarget.clarifyNonShare({ message: '请在支持碰一碰分享的界面再试' });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分享内容下载失败等其他异常场景",
      children: "分享内容下载失败等其他异常场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从5.0.3(15)版本开始，由于网络或者业务原因无法发起分享时，开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/share-api/share-arkts/share-harmony-share/share-harmony-share#reject",
        children: "sharableTarget.reject()"
      }), "终止本次分享，并提示用户终止的原因。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { harmonyShare } from '@kit.ShareKit';\n\naboutToAppear(): void {\n  harmonyShare.on('knockShare', (sharableTarget: harmonyShare.SharableTarget) => {\n    sharableTarget.reject(harmonyShare.SharableErrorCode.DOWNLOAD_ERROR);\n  });\n}\n"
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
711265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439233-ee0bf5549fceae3690f488d511cbcfd5.png");

},
674137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799534-e1adf96ee3f9cadcc824dcc51dfc76b9.png");

},
676954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439229-5a0d115682d2e8ca22d9c20bfe75a462.png");

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