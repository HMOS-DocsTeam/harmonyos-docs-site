"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["856050"], {
142237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_debug_optimize_network_navigator_network_navigator_md_e77_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-debug-optimize-network-navigator-network-navigator-md-e77.json
var site_docs_system_network_network_debug_optimize_network_navigator_network_navigator_md_e77_namespaceObject = JSON.parse('{"id":"system-network/network-debug-optimize/network-navigator/network-navigator","title":"使用网络领航员进行网络模拟","description":"网络领航员功能简介","source":"@site/docs/system-network/network-debug-optimize/network-navigator/network-navigator.md","sourceDirName":"system-network/network-debug-optimize/network-navigator","slug":"/system-network/network-debug-optimize/network-navigator/","permalink":"/harmonyos-docs-site/system-network/network-debug-optimize/network-navigator/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用网络领航员进行网络模拟","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/network-navigator","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"短信服务","permalink":"/harmonyos-docs-site/system-network/telephony-kit/telephony-sms/"},"next":{"title":"Basic Services Kit简介","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/basic-services-kit-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-debug-optimize/network-navigator/network-navigator.md


const frontMatter = {
	title: '使用网络领航员进行网络模拟',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/network-navigator',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '使用网络领航员进行网络模拟';

const assets = {

};



const toc = [{
  "value": "网络领航员功能简介",
  "id": "网络领航员功能简介",
  "level": 2
}, {
  "value": "预置网络模拟使用简介",
  "id": "预置网络模拟使用简介",
  "level": 2
}, {
  "value": "自定义网络模拟场景配置",
  "id": "自定义网络模拟场景配置",
  "level": 2
}, {
  "value": "网络优化建议",
  "id": "网络优化建议",
  "level": 2
}, {
  "value": "网络领航员代码优化建议",
  "id": "网络领航员代码优化建议",
  "level": 2
}, {
  "value": "信息收集说明",
  "id": "信息收集说明",
  "level": 2
}, {
  "value": "附录",
  "id": "附录",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "使用网络领航员进行网络模拟",
        children: "使用网络领航员进行网络模拟"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络领航员功能简介",
      children: "网络领航员功能简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(11742)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络领航员功能从API version 20开始支持，目前只支持手机和平板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "App上线之前需要优化和验证App在各种网络场景的体验，例如，App针对乘坐地铁时刷短视频进行优化后，卡顿情况是否有所改善，但需要在真实场景下验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络领航员提供了网络模拟的能力，帮助开发者快速验证App在各种典型场景中的使用体验，提升App体验的测试验证效率，降低测试验证成本。例如，不需要真的乘坐高铁去验证高铁场景优化效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同时，网络领航员还提供这些网络场景下的数据传输优化建议，App接入华为", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/network-boost-kit-guide",
        children: "Network Boost Kit"
      }), "，实现应用和OS跨层协同，提升应用的上网流畅度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，在进出电梯发生WLAN到移动数据切换时，App快速感知网络接口变化，及时将高优先级数据请求调度到新链路，实现WLAN和数据网络切换时不卡顿；在网络变弱时，Network boost kit上报QoS（Quality of Service）状态，帮助App做好传输调度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预置网络模拟使用简介",
      children: "预置网络模拟使用简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络领航员提供了两种使用入口，分别是设置界面和HDC命令行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面介绍通过设置界面使用网络领航员的方法，通过HDC命令行的使用方法见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/command-line-utilities/network-netcopilot",
        children: "netcopilot工具"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当您首次使用该功能时，可根据 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-debug-app/ide-developer-mode#section530763213432",
            children: "开启开发者选项"
          })
        })
      }), " 指引先开启设备的开发者模式，然后点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设置"
        })
      }), " -> ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统"
        })
      }), " -> ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发者选项"
        })
      }), " -> ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "网络领航员"
        })
      }), "即可进入网络领航员页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(925877)/* ["default"] */.A) + "",
        width: "293",
        height: "142"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络领航员已预置如下常用网络模拟场景，您可以直接使用预置的网络模拟场景快速进行App使用体验测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(101737)/* ["default"] */.A) + "",
        width: "292",
        height: "652"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "如何启用一个网络模拟场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可用的网络模拟场景"
        })
      }), "中点击任意一个您需要模拟的场景即可启用网络模拟。例如，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "进出电梯"
        })
      }), "后，即可启用该模拟场景，并可查看", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "已生效的网络模拟场景。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(648221)/* ["default"] */.A) + "",
        width: "295",
        height: "670"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时您可在设备实况窗中查看到网络模拟内容（以进出电梯为例）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251738)/* ["default"] */.A) + "",
        width: "357",
        height: "91"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "如何停止一个网络模拟场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果您需要停止网络模拟场景，可点击右侧的", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(518510)/* ["default"] */.A) + "",
        width: "34",
        height: "31"
      }), "，然后点击退出该网络模拟场景即可退出模拟。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(406124)/* ["default"] */.A) + "",
        width: "367",
        height: "122"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(199084)/* ["default"] */.A) + "",
        width: "368",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预置的网络模拟场景使用前置条件及模拟场景阶段说明如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "网络模拟场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用前置条件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景介绍及场景阶段说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "进出电梯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接 WLAN 并开启移动网络开关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟用户进出电梯，WLAN和移动网络间来回切换。此场景共6个阶段，总时长5分钟，循环执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "离家断开WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接 WLAN 并开启移动网络开关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟用户从家里到户外，WLAN断开，切换到移动网络。此场景共4个阶段，总时长3分钟，循环执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "到家连接WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接 WLAN 并开启移动网络开关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟用户从户外回到室内，连接WLAN，断开移动网络。此场景共3个阶段，总时长3分钟，循环执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "拥挤的食堂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接 WLAN 或移动网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟网络接入设备多，空口竞争大，带宽小，时延大。此场景共3个阶段，总时长5分钟，循环执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接 WLAN 或移动网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟网络覆盖不佳，信号弱，带宽小，时延大。此场景共3个阶段，总时长5分钟，循环执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "乘坐地铁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接 WLAN 或移动网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟网络波动大，站台上的网络强，站台间的网络弱。此场景共5个阶段，总时长5分钟，循环执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "乘坐高铁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插入双SIM卡并开启移动网络开关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟网络波动大，频繁切换基站，间歇出现不可用。此场景共5个阶段，总时长10分钟，循环执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "高速公路自驾"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接 WLAN 或移动网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟网络波动大，城区网络强，隧道区域网络弱。此场景共5个阶段，总时长5分钟，循环执行。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["预置的网络模拟场景包含的具体阶段及网络情况详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%99%84%E5%BD%95",
        children: "附录"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义网络模拟场景配置",
      children: "自定义网络模拟场景配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当上述预置网络模拟场景无法满足您的开发需要时，您也可以在网络领航员页面通过点击底部的 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加自定义网络场景"
        })
      }), " 来新增所需网络配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(512880)/* ["default"] */.A) + "",
        width: "265",
        height: "521"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数的取值范围参考如下，输入参数取值后会自动添加单位。自定义场景的参数配置将应用于启动时的默认网络，建议在网络环境稳定时使用。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数取值范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "单位"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "上行带宽"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 - 500000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "下行带宽"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 - 2000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "上行丢包率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0 - 20.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "下行丢包率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0 - 20.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "上行延迟"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 - 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "下行延迟"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 - 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义场景暂未接入Network Boost Kit，若开发者想模拟网络场景的注册回调，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A2%84%E7%BD%AE%E7%BD%91%E7%BB%9C%E6%A8%A1%E6%8B%9F%E4%BD%BF%E7%94%A8%E7%AE%80%E4%BB%8B",
        children: "预置的网络模拟场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络优化建议",
      children: "网络优化建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当您使用网络领航员能力时，可以通过实况窗实时了解网络变化，同时您也可以点击实况窗查看该场景的详细介绍，点击蓝色字体可", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看详细的网络参数"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "网络开发代码开发最佳实践"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(526208)/* ["default"] */.A) + "",
        width: "269",
        height: "64"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(306666)/* ["default"] */.A) + "",
        width: "255",
        height: "569"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络领航员代码优化建议",
      children: "网络领航员代码优化建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"网络领航员\"功能在激活指定场景时，可智能模拟该场景下的网络QoS（服务质量）变化，帮助开发者快速构建目标网络环境。通过此功能，开发者能够前瞻性发现应用在不同网络环境中的兼容性问题，并基于本节的最佳实践指南进行针对性优化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码优化建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持8大类典型场景模拟（详见\"", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%99%84%E5%BD%95",
        children: "附录"
      }), "\"章节），其网络特征可归纳为三类：网络切换、网络波动、网络质量差。如下为对应场景特征及代码开发建议。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "网络切换场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特征：设备在网络制式间切换（如WLAN与蜂窝网络互切）或多SIM卡切换时，会导致IP地址变更、TCP连接强制中断（触发RST复位），并伴随DNS重解析和新连接握手延迟。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "典型场景：进出电梯、离家断开WLAN、高铁行驶（多SIM卡切换）"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最佳实践：应用需及时识别网络切换并重建连接，解析DNS，重新发起未完成的请求，也可直接使用Network Kit的HTTP数据请求模块发起网络请求。Network Kit集成了通途协议栈的智能多网切换功能，能够在网络切换时自动将待发和进行中的请求切换至已激活的网络，有效避免网络切换环境下请求失败或业务响应延迟的问题。Network Kit HTTP请求示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 引入包名\nimport { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// 每一个httpRequest对应一个HTTP请求任务，不可复用\n let httpRequest = http.createHttp();\n httpRequest.request(\n  // 填写HTTP请求的URL地址，可以带参数也可以不带参数。URL地址需要开发者自定义。请求的参数可以在extraData中指定\n  \"EXAMPLE_URL\", (err: BusinessError, data: http.HttpResponse) => {\n  if (!err) {\n    // data.result为HTTP响应内容，可根据业务需要进行解析\n    console.info('Result:' + JSON.stringify(data.result));\n    // 当该请求使用完毕时，调用destroy方法主动销毁\n    httpRequest.destroy();\n  } else {\n    console.error('error:' + JSON.stringify(err));\n    // 当该请求使用完毕时，调用destroy方法主动销毁\n    httpRequest.destroy();\n  }\n}\n);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "网络波动场景"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "特征：因信号强度快速变化（如移动穿行或高速运动），网络表现为带宽骤降（50Mbps→1Mbps）、时延剧烈抖动（RTT波动超300%）、短时丢包（0%~5%）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "典型场景：乘坐地铁、高速公路自驾。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "最佳实践："
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅Network Boost Kit的netQuality事件，实时感知网络质量，并进行针对性处理。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 引入包名\nimport { netQuality } from '@kit.NetworkBoostKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\ntry {\n  netQuality.on('netQosChange', (list: Array<netQuality.NetworkQos>) => {\n    if (list.length > 0) {\n      list.forEach((qos) => {\n        // 回调信息处理\n        console.info(`该数据链路类型的上行带宽: ${JSON.stringify(qos.linkUpBandwidth)}.` );\n        console.info(`该数据链路类型的下行带宽: ${JSON.stringify(qos.linkDownBandwidth)}.` );\n        // 应用可根据上下行带宽等信息实时感知网络质量，调整请求策略\n      });\n    }\n  });\n } catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在网络质量好时进行请求预取，提前发送后续可能产生的请求，并缓存获取的资源。后续产生对应请求时直接加载缓存的资源，提高响应速度，避免卡顿。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 引入包名\nimport { rcp } from '@kit.RemoteCommunicationKit';\nimport { HashMap } from \"@kit.ArkTS\";\nexport class PrefetchingRcp {\n  private session = rcp.createSession();\n  private responsePrefetched: HashMap<string, rcp.Response> = new HashMap<string, rcp.Response>();\n  public async prefetch(url: string) {\n    const request = new rcp.Request(url);\n    try {\n      // 发送预取请求\n      let response: rcp.Response = await this.session.fetch(request);\n      // 缓存预取结果\n      this.responsePrefetched.set(url, response);\n      return Promise.resolve();\n     } catch (reason) {\n       console.error(`Rcp prefetch failed: ${reason.code}`);\n       return Promise.reject();\n    }\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在网络质量差时降低请求频率/请求数据量，避免加剧网络拥塞。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "网络质量差场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特征：在信号屏蔽区（如地下停车场）或高密度接入环境（如拥挤食堂），网络呈现持续低带宽（<1Mbps）、高延迟（>100ms）和高丢包率。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "典型场景：拥挤的食堂、停车场。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最佳实践：在拥塞场景及时降低请求频率、请求数据量等，网络恢复时恢复请求。除通过netQosChange判断网络质量外，还可通过订阅网络场景识别事件，直接检测网络拥塞或网络信号差。检测到时及时减少请求，避免反复请求加剧网络拥塞。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 引入包名\nimport { netQuality } from '@kit.NetworkBoostKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\ntry {\n  netQuality.on('netSceneChange', (list: Array<netQuality.NetworkScene>) => {\n    if (list.length > 0) {\n      list.forEach((sceneInfo) => {\n        // 网络场景识别回调信息处理\n        if (sceneInfo.scene == 'congestion') {\n          // 检测到当前为网络拥塞场景，应用处理\n        }\n        if (sceneInfo.scene == 'normal') {\n          // 检测到网络不再拥塞，应用处理\n        }\n        if (sceneInfo.weakSignalPrediction) {\n          // 弱信号场景预测，感知到网络质量即将变差，应用提前应对\n        }\n      });\n    }\n  });\n } catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "信息收集说明",
      children: "信息收集说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当您使用网络领航员能力时，App的使用记录会被收集，并可能会通过您的华为账号对应的联系方式与您进行取得联系进行使用回访，以便我们进一步优化提升该能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当您使用该能力时，以下数据会被收集，请悉知："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "您使用网络领航员时需要先关联您的华为账号，且当您选择打开关联体验改进计划的开关时，则默认表示同意上传使用日志；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "您使用该能力时的App对应的bundle name以及版本号；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "您使用该能力时的App使用的网络模拟场景以及对应的时间。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "附录",
      children: "附录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不同网络场景的QoS情况"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "进出电梯"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景一共5分钟，循环执行。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "子阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "持续时间（分:秒）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包分布"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "等待电梯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-30s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-140Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.01%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "进入电梯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-90s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90-50Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearDecrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-8Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearDecrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.21%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "电梯关门"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90-100s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-0Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-0Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "电梯关门"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-110s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-0Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearDecrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-0Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearDecrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-1000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-8.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "电梯关门"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110-120s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-50Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-15Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "电梯上行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120-180s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-50Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-15Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-30ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01%-0.20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "电梯开门"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "180-210s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-50Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-0ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearDecrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01%-0.10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "走出电梯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "210-240s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-300Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.01%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "走出电梯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "240-300s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-140Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.01%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "离家断开WLAN"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景一共3分钟，循环执行。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "子阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "持续时间（分:秒）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包分布"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "在家中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-60s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-140Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-15ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "在门口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-90s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-50Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearDecrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40-10Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearDecrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-15ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "越走越远"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90-110s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-0Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-0Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "越走越远"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110-120s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-0Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearDecrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-0Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearDecrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-1000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-8.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linearIncrease"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "越走越远"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120-150s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-400Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-70Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-35ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "在路上"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150-180s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "到家连接WLAN"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景一共3分钟，循环执行。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "子阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "持续时间（分:秒）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包分布"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "在走廊"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-60s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "在门口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-90s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-400Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-70Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-35ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "在门口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90-120s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-50Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-30Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-40ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "进入家中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120-180s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-140Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "拥挤的食堂"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景一共5分钟，循环执行。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "子阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "持续时间（分:秒）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包分布"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "进入食堂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-60s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-140Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "排队取餐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-120s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-5Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-5Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-2.4%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "就坐用餐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120-240s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-60Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-20Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-55ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.2%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "离开食堂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "240-300s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-140Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "信号弱的地库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景一共5分钟，循环执行。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "子阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "持续时间（分:秒）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包分布"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "前往停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-60s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "在停车场中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-240s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-10Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-10Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "走出停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "240-300s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-35ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "乘坐地铁"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景一共5分钟，循环执行。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "子阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "持续时间（分:秒）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包分布"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "地铁站台候车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-30s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列车行驶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-150s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-10Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-10Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-35ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列车到站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150-180s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-35ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列车行驶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "180-270s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-10Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-10Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-35ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列车到站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "270-300s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "乘坐高铁"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景一共10分钟，循环执行。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "子阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "持续时间（分:秒）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包分布"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "高铁站台候车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-60s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝（卡1）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列车在市郊行驶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-120s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝（卡1）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-250Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-50Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-35ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列车在山区行驶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120-240s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝（卡1）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-8Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-8Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-2000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-5.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列车在山区行驶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "240-360s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝（卡2）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-50Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-30Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-2000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-5.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列车在市郊到站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "360-480s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝（卡1）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-400Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-70Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-35ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "下车出站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "480-600s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝（卡1）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "高速公路自驾"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景一共5分钟，循环执行。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "子阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "持续时间"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "下行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上行带宽分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "时延分布"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "丢包分布"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "汽车在市区行驶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-60S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "汽车进出隧道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-120s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-2Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-2Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-2000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-5.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "汽车在市区行驶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120-180s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "汽车在高架行驶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "180-240s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-10Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-10Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-35ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "汽车在市区行驶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "240-300s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-100Mbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-25ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00%-0.00%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          })]
        })]
      })]
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
306666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438491-73b9eb9ca99c4a2b14add6484f5cc1f3.png");

},
11742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
526208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798796-c9cddcae1da11b440c41abb755c8bcdb.png");

},
648221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958442-04597e3c70a5ce5ac3bda55205d32ea6.png");

},
406124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438489-6e9aa1b4ecd6d75871f1a00ff7ca2953.png");

},
518510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAfCAYAAACCox+xAAADNUlEQVRYCc2XeU8yMRDG/f6fABSNighqNAbRRAWveMQriIBHxCiJ8dZ4xFuZN78mNezS7XZ5/3GSZtnyzMzTznQ62yF/RDr+CA+JTOTh4UFOT09lenpahoaGZHh4WHZ2dqRUKsnT01Pb63Ii8vr6Ktvb2zI2Nibd3d0Sj8cDx/j4uBwdHQmEo4iVSKPRkOvra7VynPf29srCwoIUi0W5u7uTj48PeX9/l9vbW+UcEoODg4rkyMiI3NzcCDZcxErk4ODgd+Xz8/Py9fUVahPHlUrlV291dTVUB0AgkeXlZWUsk8nI2dmZk7Fm0PHxsaTTaWVjbW2t+S/jbyORWq2mDIyOjlp3geQkPEFC2FgIYT05ObGGqYXI29ubJJNJ6ezsDLKv5glBX1+f9Pf3y/f3dyCWHOvq6lL5ZQttCxFiygrID5vs7u4qHNh6vW6DytbWlsRiMZmbmwvEeYhwTFEg412kUCgII0ywy+5BOqjWeIiUy2UFdkkuv/OwY6ptB+2ehwjVsqenR56fn/1+jO/UFCqqi1BTyLuNjQ0j3ENkampKJRUJ6yK6yrpgX15eVNJms1kj3EMklUqpE2PL7mYrxJzhIhzzRCKhaosJ7yHC1g0MDJhwxrkoRDBg20EPEYoP2f35+Wl07J+MQoTixo5MTEz4zah3D5GZmZlIyRqFyOPjo8qR2dnZcCIrKyuKtesVHoUI9xX49fX1cCLn5+cKnM/njWD/ZBQiVFXwFxcXfjPq3RMa4qgr4NXVlVGhedKVCJUVLB1dkHiIAOL6Rsl2L2hjrkTo7MBubm5q1ZZnC5Gfnx/Vj6JIe2iTw8ND1a/aMOSEXpjtGmghglEuJloByj29STtCCYAoR5ZCybURmQiOLy8vlRFWw9m39RyaqHZEFeWYoksR454JE+OOaKX7+3vhbsAgxa5arXq6c+1YP0nKxcXF34SfnJz04LVd09NKRCvQFtCj0KtAKpfLydLSkmp4SECc832jTxxhDaoX2qb/6UREK+3t7anPBRwyuJtoA9l+nPM5sb+/b+1ztS3/MxIRlMkV2gTCQAVmkIgkJyeuXYlMpNmRzo3muXZ//xeRdp2a9P4BjdOpz+Feei8AAAAASUVORK5CYII=");

},
512880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478445-e22e136f201919dd91559f8581ce6cd6.png");

},
925877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798792-b0dbbd4acf105a89a7f806dc85f09574.png");

},
199084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958444-75139548f4e16a76d7877fbd02ae5a3a.png");

},
101737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438487-d52bedf636d203112766b4094fc2ecd2.png");

},
251738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478443-b73b81e5c0469e1d8728b0dd37962b17.png");

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