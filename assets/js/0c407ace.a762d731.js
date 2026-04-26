"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["432033"], {
968697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_kit_introduction_push_kit_introduction_md_0c4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-kit-introduction-push-kit-introduction-md-0c4.json
var site_docs_push_kit_guide_push_kit_introduction_push_kit_introduction_md_0c4_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-kit-introduction/push-kit-introduction","title":"Push Kit简介","description":"Push Kit（推送服务）是华为提供的消息推送平台，建立了从云端到终端的消息推送通道。所有HarmonyOS应用可通过集成Push Kit，实现向应用实时推送消息，使消息易见，构筑良好的用户关系，提升用户的感知度和活跃度。","source":"@site/docs/push-kit-guide/push-kit-introduction/push-kit-introduction.md","sourceDirName":"push-kit-guide/push-kit-introduction","slug":"/push-kit-guide/push-kit-introduction/","permalink":"/harmonyos-docs-site/push-kit-guide/push-kit-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Push Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-kit-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用DocumentViewPicker拿到的uri通过openPreview打开显示预览失败","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-faq/preview-faq-2/"},"next":{"title":"使用入门","permalink":"/harmonyos-docs-site/push-kit-guide/push-gettingstart/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-kit-introduction/push-kit-introduction.md


const frontMatter = {
	title: 'Push Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-kit-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Push Kit简介';

const assets = {

};



const toc = [{
  "value": "快速入门",
  "id": "快速入门",
  "level": 2
}, {
  "value": "产品优势",
  "id": "产品优势",
  "level": 2
}, {
  "value": "推送消息提示场景",
  "id": "推送消息提示场景",
  "level": 2
}, {
  "value": "推送消息类型",
  "id": "推送消息类型",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "影响送达率的因素说明",
  "id": "影响送达率的因素说明",
  "level": 3
}, {
  "value": "推送消息的及时性",
  "id": "推送消息的及时性",
  "level": 3
}, {
  "value": "推送消息长度与数量限制",
  "id": "推送消息长度与数量限制",
  "level": 3
}, {
  "value": "网络受限说明",
  "id": "网络受限说明",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "云真机说明",
  "id": "云真机说明",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
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
        id: "push-kit简介",
        children: "Push Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push Kit（推送服务）是华为提供的消息推送平台，建立了从云端到终端的消息推送通道。所有HarmonyOS应用可通过集成Push Kit，实现向应用实时推送消息，使消息易见，构筑良好的用户关系，提升用户的感知度和活跃度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快速入门",
      children: "快速入门"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-gettingstart",
        children: "使用入门"
      }), "章节快速了解接入Push Kit（推送服务）的必要步骤。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "产品优势",
      children: "产品优势"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "稳定的消息发送通道"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Push Kit通过提供系统级长连接，实现即使应用进程不存在，也能实时推送消息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "丰富的消息呈现样式"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持文本样式、通知大图标样式、多行文本样式、角标样式等多种消息展示方式，满足您多样化、个性化的消息发送需求。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "灵活的场景化消息"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以根据实际场景灵活接入场景化消息。如通过应用内通话消息实现音视频通话，通过语音播报消息实现语音播报业务处理，通过后台消息实现配置更新等。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "推送消息提示场景",
      children: "推送消息提示场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推送消息指的是应用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通过Push Kit发送的"
        })
      }), "，在华为终端设备上显示的通知消息。显示场景主要包括通知中心、锁屏、横幅、桌面图标角标与通知图标。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(715526)/* ["default"] */.A) + "",
        width: "2020",
        height: "892"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["有关各场景的详细说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-notification-0000001793074217#section162699204401",
        children: "通知提示场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "推送消息类型",
      children: "推送消息类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push Kit支持以下消息类型："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "消息类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert",
              children: "通知消息"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知消息由Push Kit直接下发，在终端设备的通知中心、锁屏、横幅等展示，用户点击后拉起应用。  您可以", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E8%AE%BE%E7%BD%AE%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E6%A0%B7%E5%BC%8F",
              children: "设置通知消息样式"
            }), "来吸引用户。  常见场景：行程提醒、账号动态等。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-extend-noti/push-send-extend-noti#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
              children: "语音播报消息"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户终端收到您发送的语音播报消息后，Push Kit会拉起应用的子进程，您可以在子进程中自行处理业务。  常见场景：语音播报。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-form-update",
              children: "卡片刷新消息"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过卡片刷新服务，在合适场景向用户即时推送卡片内容，提升用户的感知度和活跃度。  常见场景：打车出行、快递动态等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-background",
              children: "后台消息"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终端设备接收到后台消息后，如果应用进程在前台则将消息内容传给应用；如果应用进程不在前台则缓存消息，等待应用启动后再传给应用。  常见场景：用于告知应用更新配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-update-liveview",
              children: "实况窗消息"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用服务端向Push Kit服务端发送创建或更新实况窗的请求，创建实况窗，或更新实况窗内容。  常见场景：赛事比分更新，出行打车状态更新等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-voip",
              children: "应用内通话消息"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持应用实现网络音视频通话的能力。  常见场景：网络音视频通话。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(659469)/* ["default"] */.A) + "",
        width: "1280",
        height: "720"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Push Kit的主要业务流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用调用Push Kit，获取Push Token。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用成功获取Token后，建议及时上报Token等信息至应用服务端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用服务端向华为Push Kit服务端（Push Cloud）发送推送消息请求。应用的通知开关默认关闭，发送请求前，请先请求通知授权，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/notification-kit/notification-enable",
          children: "请求通知授权"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push Kit服务端下发消息到Push Kit。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push Kit进行消息处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "影响送达率的因素说明",
      children: "影响送达率的因素说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push Kit致力于提供安全可靠的系统级消息发送通道，保障消息成功送达。影响消息送达率的因素如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端设备是否在线。如果设备离线，Push Kit会缓存消息，待设备上线后，再将消息推送给设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端设备上应用是否被卸载。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端设备的网络状况是否稳定。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端设备的安全控制策略。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "推送消息的及时性",
      children: "推送消息的及时性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在终端设备网络条件良好且不拥堵情况下，Push Kit将使用智能推送策略以减少推送消息的时延。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(169282)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为降低对用户的打扰，系统会学习用户的行为习惯，预测用户的睡眠时间，在用户睡眠期间实施消息管控。在此期间推送服务将暂时缓存该时间段内收到的消息（应用内通话或category=VoIP的消息除外）。用户结束睡眠后，推送服务会将消息重新投递到对应设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "推送消息长度与数量限制",
      children: "推送消息长度与数量限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["消息体最大不能超过4096Bytes（不包括Token），若超过请求会返回错误码", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response#section80300008-%E6%B6%88%E6%81%AF%E4%BD%93%E5%A4%A7%E5%B0%8F%E8%B6%85%E8%BF%874096bytes%E4%B8%8D%E5%8C%85%E6%8B%ACpush-token",
          children: "80300008"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["每个项目每日全网最多可推送1000条测试消息，正式消息区分场景有不同的配额，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control",
          children: "消息频控"
        }), "说明。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "网络受限说明",
      children: "网络受限说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果终端设备连接的网络配置了防火墙或处于受限的网络下，将会影响消息的送达率，请检查以下端口号是否被禁用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "端口号："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5223"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "443"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(971435)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "终端设备连接的推送服务器的IP是动态分配的，无法通过配置IP白名单方式放行。建议连接不受限的网络或放通以上端口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Push Kit当前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%94%AF%E6%8C%81%E7%9A%84%E8%AE%BE%E5%A4%87",
        children: "支持的设备"
      }), "中Wearable设备支持的国家请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-appendix/push-country",
        children: "支持的国家/地区"
      }), "，其他设备仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送服务能力支持Phone、Tablet、PC/2in1、Wearable、TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "云真机说明",
      children: "云真机说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push Kit不支持云真机调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push Kit支持模拟器，但与真机存在部分能力差异，具体差异如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见“", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "”。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器不支持推送语音播报消息、推送实况窗消息、推送应用内通话消息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Push Kit建立了从云端到终端的消息推送通道，支持开发者从云侧实时推送消息。如果开发者希望从本地推送通知，可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/notification-kit/notification-overview",
          children: "Notification Kit（用户通知服务）"
        }), "创建本地通知。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-scenes/push-form-update",
          children: "推送卡片刷新消息"
        }), "时，需要通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/form-kit/formkit-overview",
          children: "Form Kit（卡片开发服务）"
        }), "提前创建应用的服务卡片。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-scenes/push-update-liveview",
          children: "推送实况窗更新消息"
        }), "时，需要通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/live-view-kit-guide/liveview-introduction",
          children: "Live View Kit（实况窗服务）"
        }), "提前创建本地实况窗。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-scenes/push-voip",
          children: "推送应用内通话消息"
        }), "时，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/call-kit-guide/call-introduction",
          children: "Call Service Kit（通话服务）"
        }), "管理应用通话能力。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Push Kit（推送服务）示例代码，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/push-kit-sample-code-clientdemo-arkts",
        children: "示例代码"
      }), "。"]
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
715526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959106-1380fce847f97f2614217fa33fcda232.jpg");

},
659469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479107-b4f21e50763e6d27bd59550fd4efbe02.png");

},
169282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
971435(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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