"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["604954"], {
625998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_live_view_kit_guide_liveview_introduction_liveview_introduction_md_0d9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-live-view-kit-guide-liveview-introduction-liveview-introduction-md-0d9.json
var site_docs_live_view_kit_guide_liveview_introduction_liveview_introduction_md_0d9_namespaceObject = JSON.parse('{"id":"live-view-kit-guide/liveview-introduction/liveview-introduction","title":"Live View Kit简介","description":"Live View Kit（实况窗服务）支持应用将订单或者服务的实时状态信息变化在设备的关键界面展示，并对展示信息的生命周期、用户界面UI效果等进行管理。","source":"@site/docs/live-view-kit-guide/liveview-introduction/liveview-introduction.md","sourceDirName":"live-view-kit-guide/liveview-introduction","slug":"/live-view-kit-guide/liveview-introduction/","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Live View Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"华为IAP范围覆盖","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-appendix/iap-appendix-coverage/"},"next":{"title":"实况窗设计规范","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-design-formula/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/live-view-kit-guide/liveview-introduction/liveview-introduction.md


const frontMatter = {
	title: 'Live View Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Live View Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "时段性",
  "id": "时段性",
  "level": 3
}, {
  "value": "时效性",
  "id": "时效性",
  "level": 3
}, {
  "value": "变化性",
  "id": "变化性",
  "level": 3
}, {
  "value": "产品优势",
  "id": "产品优势",
  "level": 2
}, {
  "value": "支持的范围与场景",
  "id": "支持的范围与场景",
  "level": 2
}, {
  "value": "实况窗场景准入原则",
  "id": "实况窗场景准入原则",
  "level": 3
}, {
  "value": "实况窗支持对接的场景",
  "id": "实况窗支持对接的场景",
  "level": 3
}, {
  "value": "受限说明",
  "id": "受限说明",
  "level": 2
}, {
  "value": "使用入门",
  "id": "使用入门",
  "level": 2
}, {
  "value": "违规处罚",
  "id": "违规处罚",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
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
        id: "live-view-kit简介",
        children: "Live View Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Live View Kit（实况窗服务）支持应用将订单或者服务的实时状态信息变化在设备的关键界面展示，并对展示信息的生命周期、用户界面UI效果等进行管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况窗是一种帮助用户聚焦正在进行的任务，方便快速查看和即时处理的通知形态，具有时段性、时效性、变化性的特点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在展示形态上，实况窗支持在锁屏、通知中心、状态栏等位置展示，主要有两种展示形式：胶囊态和卡片态。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "通知中心"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "状态栏"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "锁屏"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时段性",
      children: "时段性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该事件或服务需要持续一段时间，有明确的开始和结束，而非单点的提醒或信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例：打车、外卖等从事件开始到结束需要经历一段时间，属于实况窗；天气提示、电影票等单点提醒，则不属于实况窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时效性",
      children: "时效性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内容为正在进行或即时发生的事件或服务的提醒，在特定时间段内，信息对用户有价值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例：打车行程中、外卖配送中等正在进行的用户活动；2天后的机票，在刚买时不提醒，而在出发前提示，具体提醒时间根据业务实际情况确定，属于实况窗。权限调用、功能待机等系统状态，不属于实况窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变化性",
      children: "变化性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况窗所展示的内容需要动态更新，以确保用户看到最新的状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "产品优势",
      children: "产品优势"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "面向HarmonyOS 5及以上的全量Phone、Tablet设备"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实况窗特性与设备硬件完全解耦，开发者接入后，可以覆盖到所有HarmonyOS 5及以上的全量Phone、Tablet设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "一步接入多触达点展示"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者一次接入，可以实现包括锁屏、通知中心、状态栏在内多触达点展示实况窗。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "不打断现有的操作，用户可及时关注服务进展"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "状态栏的实况胶囊支持点击交互，用户可以在任何界面查看实况胶囊或者点击实况胶囊展开卡片，查看详细进展。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实况窗点击后也可直接进入落地页，方便用户快速进入应用查看。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "服务全流程展示，提升业务履约效率"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户可以在多个触达点及时关注到服务的最新进展，帮助业务实现服务的快速、高效闭环，提升业务履约效率。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的范围与场景",
      children: "支持的范围与场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实况窗优先对满足场景准入原则和适用范围的应用开放申请。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["实况窗支持", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "HarmonyOS 5及以上"
          })
        }), "的操作系统版本。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["实况窗当前仅支持", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Phone"
          })
        }), "和", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tablet"
          })
        }), "机型。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实况窗当前仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实况窗场景准入原则",
      children: "实况窗场景准入原则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该活动场景是用户非常关注，且需要反复查看或快捷操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "活动有开始和结束时间，且活动总时长较短，最长不得超过8小时。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户对接收到该活动的实况窗通知有明确的预期，通常为用户主动行为触发实况窗通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要确保展示内容对用户有足够的价值，且不可用于营销、广告场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实况窗支持对接的场景",
      children: "实况窗支持对接的场景"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "场景类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "EVENT取值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "场景描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "适用范围"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "出行打车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAXI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户线上约车后，向用户展示司机接驾等待时间、行程中的剩余距离和时间等信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于网约车、出租车、拼车、顺风车等场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "即时配送"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELIVERY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指配送员将餐品、商品送达到用户指定地点的业务场景，通常在较短时间内完成配送环节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于外卖、生鲜配送、同城配送等场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "航班"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户主动关注某个航班时，向用户展示航班的关键变动，如航班开始登机、航班起飞、航班延误、航班取消、航班到达等关键场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于用户通过航班出行或者主动关注某个航班进展的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "高铁/火车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户通过高铁、火车出行，向用户展示检票口、座位号、车次信息及列车运行状态等信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于高铁出行、火车出行的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "排队"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUEUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过排队叫号的方式，按顺序为用户提供服务的业务场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于办事大厅、医院、银行、餐饮等排队叫号能力场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "取餐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PICK_UP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指的是用户完成餐品/商品下单后，自行取餐或者取件的场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于餐饮线下取餐提醒，包括餐品排队情况、制作进度、取餐提醒等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "赛事比分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCORE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示比赛双方成绩变化情况。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于游戏赛事、体育赛事等展示比分变化情况的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "共享租赁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户使用临时租赁服务时，向用户展示实时租赁时长和费用等租赁状态信息的场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于共享单车、共享充电宝、停车场临时停车、汽车快充充电场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "计时"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIMER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户在某个短时间段持续的正计时或任务前的倒计时场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于专注时刻、番茄时钟、抢票倒计时提醒场景，仅限于工具类应用申请（计时场景仅支持通过端侧创建与更新）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "订阅计时"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBSCRIBE_TIMER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户主动订阅了某个商品的开售提醒后，开售前向用户提醒开售倒计时抢购信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于用户主动订阅的单商品且单场次的开售倒计时抢购提醒场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "运动锻炼"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WORKOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运动过程中，向用户实时展示运动的时长和进度等信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于户外或室内的运动记录，如跑步、骑行等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "导航"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAVIGATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户使用导航服务时，展示将要发生的路线变化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于步行导航、骑行导航、车辆导航。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "打卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在上下班时间点，提醒用户打卡。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于上下班打卡场景"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "快递"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXPRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户存在待取件快递时，提醒用户取件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于快递取件场景"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "受限说明",
      children: "受限说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实况窗的推送受权益管控，应用接入时，需要根据文档的指导", (0,jsx_runtime.jsx)(_components.a, {
            href: "/live-view-kit-guide/liveview-preparations/liveview-push-service",
            children: "开通推送服务权益"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/live-view-kit-guide/liveview-preparations/liveview-rights",
            children: "开通实况窗服务权益"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在推送实况窗通知时，本地实况窗创建依赖应用进程运行，创建后支持本地更新和通过Push Kit更新两种方式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实况窗可以通过Push Kit进行更新，保证实况窗不依赖应用进程的存活。利用Push Kit的推送服务，实况窗能够实现生命周期内的正常更新和结束。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单个实况窗的生命周期最长不超过8小时，超过8小时后，系统会认为实况窗结束。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过Push Kit更新实况窗时，单个实况窗消息，出行打车与赛事比分场景每个设备每5分钟最多更新30次，每小时最多更新180次。其余场景每个设备每5分钟最多更新10次，每小时最多更新60次。超过频次部分将丢弃不下发。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了确保用户看到内容的时效性，请开发者及时更新实况窗内容。系统会在以下情况自动调整实况窗的展示："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "超过2小时未更新：状态栏胶囊和锁屏胶囊将被隐藏，仅保留在通知中心展示；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "超过4小时未更新：系统将判定实况窗已结束，并从所有展示入口清除该实况窗。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户可以在实况窗通知展示的任何时间点对某一实况窗通知进行删除，删除后，该实况窗通知的更新将不再展示。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-scenes/push-update-liveview",
            children: "通过Push Kit创建实况窗"
          }), "当前仅支持FLIGHT、TAXI、TRAIN场景。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实况窗创建和更新有流控机制："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统级流控（针对所有应用），实况通知创建每秒最多15次，实况通知更新每秒最多30次，超过频次部分被丢弃不下发。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用级流控（针对单个应用），实况通知创建每秒最多10次，实况通知更新每秒最多20次，超过频次部分被丢弃不下发。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从6.1.0(23)开始，支持基于地理位置的实况窗提醒功能，存在以下限制条件："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "基于地理位置的实况窗提醒次数限制：单设备单应用每日可最多添加5次。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "基于地理位置的实况窗提醒添加后，有效期为48小时，若超时未触发，系统将自动删除已过期的基于地理位置的实况窗提醒。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当满足地理位置条件，触发创建或结束实况窗后，该基于地理位置的实况窗提醒将不会再次触发。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "运动锻炼（WORKOUT）和导航（NAVIGATION）场景不支持添加基于地理位置的实况窗提醒。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "基于地理位置的实况窗提醒依赖GNSS芯片的地理围栏功能，仅在室外开阔区域才能准确识别用户进出围栏事件并触发创建或结束实况窗。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若“设置 > 通知和状态栏 > 实况窗”或“设置 > 应用和元服务”中的应用实况窗开关关闭，系统将自动删除该应用已添加但未触发的基于地理位置的实况窗提醒。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若“设置 > 通知和状态栏 > 实况窗”，点击页面右上方4个点标记，点击“个性化提醒”，页面中“基于地理位置的实况窗提醒”开关关闭，系统将自动删除所有已添加但未触发的基于地理位置的实况窗提醒。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用入门",
      children: "使用入门"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要按照如下流程完成实况窗的开发工作。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "开发步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["依据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/live-view-kit-guide/liveview-design-formula",
              children: "实况窗设计规范"
            }), "设计实况窗通知样式"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依据样式模板设计开发者的实况窗通知范本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/live-view-kit-guide/liveview-preparations/liveview-base",
              children: "开发准备"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "中申请实况窗权限。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/live-view-kit-guide/liveview-scenes/liveview-create-locally",
              children: "构建本地实况窗"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/live-view-kit-guide/liveview-design-formula",
              children: "实况窗设计规范"
            }), "完成本地实况窗的开发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-update-liveview",
              children: "通过Push Kit创建实况窗"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过Push Kit完成实况窗的创建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/live-view-kit-guide/liveview-scenes/liveview-update-by-push",
              children: "通过Push Kit更新实况窗"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过Push Kit完成实况窗的更新。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "违规处罚",
      children: "违规处罚"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用发送的实况窗通知需同时遵守", (0,jsx_runtime.jsx)(_components.a, {
        href: "/live-view-kit-guide/liveview-design-formula",
        children: "实况窗设计规范"
      }), "和Push Kit的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-appendix/push-detail-rules",
        children: "通知内容原则"
      }), "，如出现违反实况窗设计规范、通知内容原则等行为，将被视为违规。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["违规行为及相应的处理措施请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-appendix/push-punishment-standards#section1385731811412",
        children: "违规分类、违规行为及违规处罚标准"
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