"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["444875"], {
268399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_gameplayer_dev_gameservice_gameplayer_gamelogin_gameservice_gameplayer_network_gameservice_gameplayer_huawei_gameservice_gameplayer_huawei_md_c88_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-gameplayer-dev-gameservice-gameplayer-gamelogin-gameservice-gameplayer-network-gameservice-gameplayer-huawei-gameservice-gameplayer-huawei-md-c88.json
var site_docs_game_service_kit_guide_gameservice_gameplayer_dev_gameservice_gameplayer_gamelogin_gameservice_gameplayer_network_gameservice_gameplayer_huawei_gameservice_gameplayer_huawei_md_c88_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-huawei/gameservice-gameplayer-huawei","title":"使用华为账号登录（必选）","description":"接入后，华为平台会将HarmonyOS 4及以下游戏的玩家标识playerId/openId赋值给HarmonyOS 5.0及以上游戏的玩家标识gamePlayerId，为新老系统游戏的账号资产（角色、区服信息、游戏进度等）实现互通。互通前后，华为账号ID不会发生变化，也不涉及开发者服务器和数据库层面的变动。","source":"@site/docs/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-huawei/gameservice-gameplayer-huawei.md","sourceDirName":"game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-huawei","slug":"/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-huawei/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-huawei/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用华为账号登录（必选）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameplayer-huawei","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"网络游戏登录概述","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-network-introduction/"},"next":{"title":"使用游戏官方账号登录","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-official/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-huawei/gameservice-gameplayer-huawei.md


const frontMatter = {
	title: '使用华为账号登录（必选）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameplayer-huawei',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用华为账号登录（必选）';

const assets = {

};



const toc = [{
  "value": "接入策略",
  "id": "接入策略",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "创建游戏",
  "id": "创建游戏",
  "level": 3
}, {
  "value": "申请版署实名认证",
  "id": "申请版署实名认证",
  "level": 3
}, {
  "value": "申请备案",
  "id": "申请备案",
  "level": 3
}, {
  "value": "生成签名证书",
  "id": "生成签名证书",
  "level": 3
}, {
  "value": "配置签名证书指纹",
  "id": "配置签名证书指纹",
  "level": 3
}, {
  "value": "配置APP ID和Client ID",
  "id": "配置app-id和client-id",
  "level": 3
}, {
  "value": "配置APP ID映射关系",
  "id": "配置app-id映射关系",
  "level": 3
}, {
  "value": "业务流程",
  "id": "业务流程",
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
  "value": "接口调用流程图",
  "id": "接口调用流程图",
  "level": 3
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "初始化",
  "id": "初始化",
  "level": 3
}, {
  "value": "注册事件监听",
  "id": "注册事件监听",
  "level": 3
}, {
  "value": "展示联合登录面板",
  "id": "展示联合登录面板",
  "level": 3
}, {
  "value": "异步步骤：核验玩家信息",
  "id": "异步步骤核验玩家信息",
  "level": 3
}, {
  "value": "合规校验",
  "id": "合规校验",
  "level": 3
}, {
  "value": "提交玩家角色信息",
  "id": "提交玩家角色信息",
  "level": 3
}, {
  "value": "欢迎横幅管理游戏账号",
  "id": "欢迎横幅管理游戏账号",
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
        id: "使用华为账号登录必选",
        children: "使用华为账号登录（必选）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入后，华为平台会将HarmonyOS 4及以下游戏的玩家标识playerId/openId赋值给HarmonyOS 5.0及以上游戏的玩家标识gamePlayerId，为新老系统游戏的账号资产（角色、区服信息、游戏进度等）实现互通。互通前后，华为账号ID不会发生变化，也不涉及开发者服务器和数据库层面的变动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用华为账号登录的网络游戏，华为账号的实名认证、未成年人防沉迷由基础游戏服务实现，华为账号的支付合规控制（例如未成年人支付限额）由IAP Kit（应用内支付服务）实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入策略",
      children: "接入策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游戏必须接入华为账号登录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建游戏",
      children: "创建游戏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在华为应用市场发布游戏，要求前往AppGallery Connect创建游戏类应用，具体操作请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506",
        children: "创建HarmonyOS应用"
      }), "。其中："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“应用类型”：选择“HarmonyOS应用”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“应用分类”：选择“游戏”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(724239)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于正式上架的游戏包名建议不要包含test、dev等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请版署实名认证",
      children: "申请版署实名认证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按照版署《关于开展网络游戏防沉迷实名认证系统接口对接工作的通知》，各游戏出版运营企业均要求在2021年6月1日前完成接入", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://wlc.nppa.gov.cn/fcm_company/index.html#/login?redirect=/",
        children: "网络游戏防沉迷实名认证系统"
      }), "，并获取“bizID（游戏备案识别码）”，再将bizID配置到AppGallery Connect，华为将为游戏自动对接国家新闻出版署的实名认证系统并开启强制实名认证，开发者无需进行额外的开发。具体操作请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/games-guides/game-center-identification-applyfor-0000002392353221",
        children: "版署实名认证申请"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请备案",
      children: "申请备案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/App/50130",
        children: "APP备案FAQ"
      }), "完成游戏备案。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211432)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS 4及以下游戏与HarmonyOS 5.0及以上游戏要求分别申请备案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成签名证书",
      children: "生成签名证书"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字证书和Profile文件等签名信息可以确保游戏的完整性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调试阶段：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section297715173233",
          children: "手动签名"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-cert-0000002283256797",
          children: "申请调试证书"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
          children: "申请调试Profile"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["发布阶段：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section297715173233",
          children: "手动签名"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-cert-0000002283336729",
          children: "申请发布证书"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
          children: "申请发布Profile"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置签名证书指纹",
      children: "配置签名证书指纹"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppGallery Connect会自动生成证书对应的公钥信息，并计算出对应的SHA256指纹。开发者前往AppGallery Connect获取并配置SHA256指纹，且每个游戏至多添加4个签名证书指纹，配置签名证书指纹的具体操作请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-cert-fingerprint-0000002278002933",
        children: "配置公钥指纹"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(678021)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请在调试阶段添加调试证书对应的指纹，在发布阶段添加发布证书对应的指纹。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置app-id和client-id",
      children: "配置APP ID和Client ID"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "，在“开发与服务”下选择项目及项目下的游戏，获取“应用”下的APP ID和Client ID。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(38071)/* ["default"] */.A) + "",
            width: "1304",
            height: "544"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程的entry模块module.json5文件中，新增metadata并配置client_id和app_id，同时新增requestPermissions以配置网络权限。如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"module\": {\n  \"name\": \"entry\",\n  \"type\": \"xxx\",\n  \"description\": \"xxxx\",\n  \"mainElement\": \"xxxx\",\n  \"deviceTypes\": [],\n  \"pages\": \"xxxx\",\n  \"abilities\": [],\n  \"metadata\": [ // 配置如下信息\n    {\n      \"name\": \"client_id\",\n      \"value\": \"xxxxxx\" // 配置为前面步骤中获取的Client ID\n    },\n    {\n      \"name\": \"app_id\",\n      \"value\": \"xxxxxx\" // 配置为前面步骤中获取的APP ID\n    }\n  ],\n  \"requestPermissions\": [ // 配置网络权限\n    {\n      \"name\": \"ohos.permission.INTERNET\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置app-id映射关系",
      children: "配置APP ID映射关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于要求实现HarmonyOS 5.0及以上系统和HarmonyOS 4及以下系统上游戏内资产互通，用户登录新系统游戏时需要找到对应的老系统游戏，以及用户在该游戏下的账号ID，所以要求开发者在上架游戏时配置游戏在新老系统下的APP ID映射关系，并配置游戏在老系统游戏上接入的账号ID类型（playerId/openId）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "，在“开发与服务”下选择项目及项目下的游戏，左侧菜单选择“构建 > 游戏服务”，在右侧点击“新增配置”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(944717)/* ["default"] */.A) + "",
            width: "1234",
            height: "424"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹出的“新增配置信息”窗口中选择HAP游戏和APK游戏，完成后点击“下一步”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(628931)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请正确配置HAP游戏与APK游戏的映射关系。若开发者配置错误类型的游戏，将有提示框提示重新选择游戏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(873345)/* ["default"] */.A) + "",
            width: "602",
            height: "374"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "信息项"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HarmonyOS 5.0及以上游戏"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "请选择待上架的HAP游戏。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HarmonyOS 4及以下游戏"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "请选择已上架或待上架的APK游戏。  若无待上架的游戏，请先创建草稿状态的APK游戏。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹出的窗口中继续填写信息，完成后点击“下一步”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(939249)/* ["default"] */.A) + "",
            width: "524",
            height: "354"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "信息项"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "支持数据继承的玩家标识类型"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["请选择HarmonyOS 4及以下游戏的玩家标识类型：  - ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "playerId"
                  })
                }), "：老系统游戏确认使用", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "playerId"
                  })
                }), "作为玩家标识，请选择“", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "playerId"
                  })
                }), "”。选择后，新系统游戏的玩家标识gamePlayerId=playerId。  - ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "openId"
                  })
                }), "：如下情况请选择“", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "openId"
                  })
                }), "”  - 情况一：老系统游戏确认使用", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "openId"
                  })
                }), "作为玩家标识。  - 情况二：老系统游戏确认使用", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "unionId"
                  })
                }), "作为玩家标识。此时，请同时勾选“使用了unionId”，并通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/game-service-api/gameservice-rest/gameservice-convertid/gameservice-convertid",
                  children: "转换ID"
                }), "用gamePlayerId（openId）换取unionId，若unionId未在游戏侧找到玩家记录，则当前玩家为新系统游戏的新用户。  - 情况三：部分游戏由于处于playerId替换为openId方案的过渡期，导致老系统游戏的玩家标识存在", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "playerId与openId混用"
                  })
                }), "的情况，例如A玩家使用openId，B玩家使用playerId。此时，若无法通过gamePlayerId在游戏侧找到玩家记录，可通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/game-service-api/gameservice-rest/gameservice-convertid/gameservice-convertid",
                  children: "转换ID"
                }), "接口用gamePlayerId（openId）换取playerId，若playerId能在游戏侧找到玩家记录，表明该玩家是使用playerId作为玩家标识的老用户，否则该玩家为新系统游戏的新用户。  - 情况四：HarmonyOS 4及以下游戏未上架时。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "接入unionId的HarmonyOS 4及以下游戏实现数据继承需要进行转换处理"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["若老系统的游戏确认使用", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "unionId"
                  })
                }), "作为玩家标识，请勾选“使用了unionId”。"]
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(858037)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "玩家标识严格区分大小写，例如gamePlayerId=xxx和gamePlayerId=XXX表示两个不同的玩家。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）填写开发者服务器的回调地址，回调地址要求支持HTTPS协议，且具有合法商用证书，完成后点击“确定”提交APP ID映射关系的审批申请。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(789477)/* ["default"] */.A) + "",
            width: "594",
            height: "244"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若用户注销华为账号，华为游戏服务器向开发者服务器发送事件通知，通知游戏自行清理账号数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若出现异常情况，将在如下提示框以红字提醒。建议点击“取消”并重新配置映射关系，若忽略异常情况点击“确定”继续提交申请，可能会造成映射关系审批不通过。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(587716)/* ["default"] */.A) + "",
            width: "714",
            height: "461"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提交申请后，华为工作人员完成审核需要1-3个工作日，请耐心等待。APP ID映射关系生效后如需重新配置，请先提交映射关系的删除申请。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(655455)/* ["default"] */.A) + "",
            width: "1084",
            height: "264"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置/删除APP ID映射关系的审核结果将通过互动中心或邮件进行通知。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(516892)/* ["default"] */.A) + "",
            width: "1114",
            height: "805"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(205217)/* ["default"] */.A) + "",
        width: "1375",
        height: "826"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "玩家启动游戏。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerinit-1",
            children: "init"
          }), "接口初始化Game Service Kit。初始化后，弹出华为隐私协议窗口，玩家确认同意后，则继续往下执行。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeronplayerchanged",
            children: "on"
          }), "接口注册事件监听。若监听到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#playerchangedevent",
            children: "PlayerChangedEvent"
          }), "事件，先清除本地缓存信息，再重新调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
            children: "unionLogin"
          }), "登录逻辑，showLoginDialog设置为true，重新拉起联合登录面板。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
            children: "unionLogin"
          }), "接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(256858)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["建议使用session缓存登录状态，玩家下次登录进入游戏无需再调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
            children: "unionLogin"
          }), "接口，但仍需调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerverifylocalplayer",
            children: "verifyLocalPlayer"
          }), "接口。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向玩家展示联合登录面板。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "玩家选择“华为账号登录”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏顶部弹出欢迎横幅，并向游戏返回accountName（选择华为账号登录返回值为hw_account）、accountIdentifier（选择华为账号登录返回值为hw_account）、gamePlayerId等信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["【", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "异步流程"
            })
          }), "】玩家信息核验。建议在服务端校验玩家信息，若没有服务器，无需校验一致性。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#createloginwithhuaweiidrequest",
                children: "createLoginWithHuaweiIDRequest"
              }), "接口，获取用于服务器校验的Authorization Code。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(162109)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Authorization Code只有5分钟有效期，且仅能使用一次，不可复用。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "游戏向开发者服务器上传Authorization Code、gamePlayerId等信息。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["开发者服务器携带Authorization Code，请求", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-user-token/account-api-obtain-user-token",
                children: "获取用户级凭证"
              }), "接口，获取Access Token。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["开发者服务器携带Access Token，请求", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/game-service-api/gameservice-rest/gameservice-getplayerinfo/gameservice-getplayerinfo",
                children: "获取玩家标识"
              }), "接口，获取gamePlayerId。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "开发者服务器把从华为游戏服务器获取的gamePlayerId与客户端获取的gamePlayerId进行一致性核验。若核验不通过，已通过合规校验进入游戏的玩家也需强制退出游戏。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerverifylocalplayer",
            children: "verifyLocalPlayer"
          }), "接口，校验当前用户设备登录华为账号的实名认证、未成年人防沉迷信息。校验通过后，玩家进入游戏。若校验未通过请根据返回的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-error-code/gameservice-error-code",
            children: "错误码"
          }), "进行相应处理。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若玩家在游戏内创建角色，建议游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayersaveplayerrole",
            children: "savePlayerRole"
          }), "上报角色信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(163598)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若游戏无区服角色，或限制为1个区服角色，此时，建议游戏允许玩家直接进入游戏，而无需玩家点击“进入游戏”或者选择区服角色才能进入游戏。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明请详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer",
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
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerinit-1",
              children: "init"
            }), "(context: common.UIAbilityContext, callback: AsyncCallback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏初始化接口，使用默认的上下文信息，使用callback回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeronplayerchanged",
              children: "on"
            }), "(type: 'playerChanged', callback: Callback<PlayerChangedResult>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "玩家变化事件监听接口，通过Callback回调获取玩家变化结果信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
              children: "unionLogin"
            }), "(context: common.UIAbilityContext, loginParam: UnionLoginParam): Promise<UnionLoginResult>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号和游戏官方账号联合登录接口，通过Promise对象获取返回值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerverifylocalplayer",
              children: "verifyLocalPlayer"
            }), "(context: common.UIAbilityContext, thirdUserInfo: ThirdUserInfo): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合规校验接口，校验当前设备登录的华为账号的实名认证、游戏防沉迷信息，通过Promise对象获取返回值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayersaveplayerrole",
              children: "savePlayerRole"
            }), "(context: common.UIAbilityContext, request: GSKPlayerRole): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存角色信息到华为游戏服务器，使用默认的上下文信息，通过Promise对象获取返回值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口调用流程图",
      children: "接口调用流程图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入华为账号登录的接口调用流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545056)/* ["default"] */.A) + "",
        width: "1058",
        height: "616"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入Account Kit模块、Game Service Kit模块及相关公共模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { authentication } from '@kit.AccountKit';\nimport { gamePlayer } from '@kit.GameServiceKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { Callback, BusinessError } from '@kit.BasicServicesKit';\nimport { window } from '@kit.ArkUI';\nimport { util } from '@kit.ArkTS';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化",
      children: "初始化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerinit-1",
        children: "init"
      }), "接口初始化Game Service Kit。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251208)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用接口时严格要求继承UIAbility，并且获取上下文的时机是onWindowStageCreate生命周期中页面加载成功后。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["要求游戏先成功调用初始化", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerinit-1",
          children: "init"
        }), "接口后再调用其他接口，否则将导致审核被驳回。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onWindowStageCreate(windowStage: window.WindowStage) {\n  windowStage.loadContent(\"pages/index\", (err, data) => {\n    try {\n      gamePlayer.init(this.context,()=>{\n        hilog.info(0x0000, 'testTag', `Succeeded in initializing.`);\n      });\n    } catch (error) {\n      let err = error as BusinessError;\n      hilog.error(0x0000, 'testTag', `Failed to init. Code: ${err.code}, message: ${err.message}`);\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化后，游戏弹出华为隐私协议窗口，用户同意签署协议，则继续往下执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672555)/* ["default"] */.A) + "",
        width: "525",
        height: "239"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若当前华为账号同意过游戏服务隐私协议，后续使用该华为账号登录的游戏将不会再弹出隐私协议窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注册事件监听",
      children: "注册事件监听"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeronplayerchanged",
        children: "on"
      }), "接口注册", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#playerchangedevent",
        children: "PlayerChangedEvent"
      }), "事件监听，及时感知游戏过程中账号的变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private onPlayerChangedEventCallback(result: gamePlayer.PlayerChangedResult) {\n  if (result.event === gamePlayer.PlayerChangedEvent.SWITCH_GAME_ACCOUNT) {\n     // ...\n    // 游戏号已切换，完成本地缓存清理工作后，再次调用unionLogin接口等\n  }\n}\n// ...\n// 调用on接口注册playerChanged事件监听\ntry {\n  gamePlayer.on('playerChanged', this.onPlayerChangedEventCallback);\n  hilog.info(0x0000, 'testTag', `Succeeded in registering.`);\n} catch (error) {\n  let err = error as BusinessError;\n  hilog.error(0x0000, 'testTag', `Failed to register. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前有如下两个场景可以监听到账号变化："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "能监听到账号切换的场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "监听到账号切换后的措施"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "场景一"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["玩家点击“欢迎横幅->管理->切换”或者点击“欢迎横幅->管理->X”。  详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%AC%A2%E8%BF%8E%E6%A8%AA%E5%B9%85%E7%AE%A1%E7%90%86%E6%B8%B8%E6%88%8F%E8%B4%A6%E5%8F%B7",
              children: "欢迎横幅管理游戏账号"
            }), "。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若监听到账号变化，游戏应先清除本地缓存信息（session或其他用户缓存），再重新调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
              children: "unionLogin"
            }), "接口（showLoginDialog设置为true），重新拉起联合登录面板。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "场景二"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户在设备上切换华为账号后，游戏重启但没有调用unionLogin，直接调用verifyLocalPlayer。此时，verifyLocalPlayer接口会返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-error-code/gameservice-error-code#section1002000015-%E5%BD%93%E5%89%8D%E7%8E%A9%E5%AE%B6%E4%BF%A1%E6%81%AF%E6%97%A0%E6%95%88",
              children: "1002000015"
            }), "错误码，同时触发on回调。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若监听到账号变化，游戏应先清除本地缓存信息（session或其他用户缓存），再重新调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
              children: "unionLogin"
            }), "接口（showLoginDialog设置为true），重新拉起联合登录面板。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "展示联合登录面板",
      children: "展示联合登录面板"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
        children: "unionLogin"
      }), "接口，向玩家展示联合登录面板。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\nlet thirdAccountInfo1: gamePlayer.ThirdAccountInfo = {\n  'accountName': 'testName1', // 游戏官方账号在联合登录面板上的显示名称。建议传入具体的“xx游账号登录”、“xx通行证登录”等，例如“游友账号登录”，不建议使用“官方账号登录”等容易有歧义的账号名称。若游戏存在多语言版本，需要开发者自行判断语种并传入当前语种对应的账号名称\n  'accountIcon': $r('app.media.icon'), // 游戏官方账号图标资源信息，图标大小总和不能超过35KB\n  'accountIdentifier': 'testIdentifier1', // 当前账号的唯一标识符，此标识符用来标识账号并在登录结果处理中用于判断识别玩家选择的账号\n  'isOnTop': true // 当前账号是否置顶显示，且仅会置顶第一个传入true的账号\n};\nlet request: gamePlayer.UnionLoginParam = {\n  showLoginDialog: false, // 是否弹出联合登录面板。true表示强制弹出面板，false表示优先使用玩家上一次的登录选择，不弹出联合登录面板，若玩家首次登录或卸载重装，则正常弹出\n  thirdAccountInfos: [\n    thirdAccountInfo1 // 若游戏无官包或无官方账号体系，请传空数组\n  ]\n};\ntry {\n  gamePlayer.unionLogin(context, request).then((result: gamePlayer.UnionLoginResult) => {\n    hilog.info(0x0000, 'testTag', `Succeeded in logging in: ${result?.accountName}`);\n  }).catch((error: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `Failed to login. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (error) {\n  let err = error as BusinessError;\n  hilog.error(0x0000, 'testTag', `Failed to login. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "联合登录面板为官方统一样式，不支持开发者自定义联合登录面板样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(791962)/* ["default"] */.A) + "",
        width: "525",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户完成登录流程后，游戏顶部弹出欢迎横幅，并向游戏返回accountName（选择华为账号登录返回值为hw_account）、accountIdentifier（选择华为账号登录返回值为hw_account）、gamePlayerId等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(738175)/* ["default"] */.A) + "",
        width: "525",
        height: "239"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游戏获取到的gamePlayerId（HarmonyOS 5.0及以上系统）与openId/playerId（HarmonyOS 4及以下系统）数值相等。开发者可以根据gamePlayerId实现HarmonyOS 5.0及以上游戏和HarmonyOS 4及以下游戏的账号资产互通。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若在开发者服务器找到玩家记录，表明该玩家是老用户。若未找到玩家记录，表明该玩家为新用户，开发者可以为该玩家在HarmonyOS 5.0及以上系统创建新的游戏号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异步步骤核验玩家信息",
      children: "异步步骤：核验玩家信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
        children: "unionLogin"
      }), "接口返回的gamePlayerId存在被篡改的风险，建议在开发者服务端核验玩家信息，即从开发者服务器获取gamePlayerId与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
        children: "unionLogin"
      }), "接口返回的gamePlayerId做比对，确保玩家信息一致性。若无服务器，无需校验一致性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(458813)/* ["default"] */.A) + "",
        width: "1096",
        height: "425"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#createloginwithhuaweiidrequest",
            children: "createLoginWithHuaweiIDRequest"
          }), "创建认证请求并设置参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建认证请求，并设置参数\nlet loginRequest = new authentication.HuaweiIDProvider().createLoginWithHuaweiIDRequest();\nloginRequest.state = util.generateRandomUUID();\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authenticationcontroller",
            children: "AuthenticationController"
          }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#executerequest",
            children: "executeRequest"
          }), "方法执行认证请求，并在Callback中处理认证结果，获取到Authorization Code。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(362996)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Authorization Code有效时间为5分钟，且仅能使用一次，不可复用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 执行认证请求\ntry {\n  let controller = new authentication.AuthenticationController(this.getUIContext()?.getHostContext());\n  controller.executeRequest(loginRequest, (err, data) => {\n    if (err) {\n      hilog.error(0x0000, 'testTag', `Failed to login. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    let loginWithHuaweiIDResponse = data as authentication.LoginWithHuaweiIDResponse;\n    let state = loginWithHuaweiIDResponse.state;\n    if (state != undefined && loginRequest.state != state) {\n      hilog.error(0x0000, 'testTag', `Failed to login. State is different.`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', `Succeeded in logging in.`);\n    let loginWithHuaweiIDCredential = loginWithHuaweiIDResponse.data!;\n    let authorizationCode = loginWithHuaweiIDCredential.authorizationCode;\n    // 开发者处理authorizationCode\n  });\n} catch (error) {\n  let err = error as BusinessError;\n  hilog.error(0x0000, 'testTag', `Failed to login. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏向开发者服务器上传", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
            children: "unionLogin"
          }), "接口返回的gamePlayerId。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["携带Authorization Code，请求", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-user-token/account-api-obtain-user-token",
            children: "获取用户级凭证"
          }), "接口，获取Access Token。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(454381)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于Access Token的有效期仅为60分钟，当Access Token失效或者即将失效时（可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-get-token-info/account-api-get-token-info#%E9%94%99%E8%AF%AF%E7%A0%81",
            children: "NSP_STATUS错误码"
          }), "判断），可以使用Refresh Token（有效期180天）通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-user-token/account-api-obtain-user-token",
            children: "获取用户级凭证"
          }), "向华为账号服务器请求获取新的Access Token。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["携带Access Token，请求", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-rest/gameservice-getplayerinfo/gameservice-getplayerinfo",
            children: "获取玩家标识"
          }), "接口，获取华为服务器侧的玩家标识gamePlayerId。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将华为服务器返回的玩家标识gamePlayerId与步骤", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), "传入的玩家标识gamePlayerId进行玩家信息核验。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若gamePlayerId一致，表示玩家标识gamePlayerId核验通过，允许玩家进入游戏。若核验不通过，已通过合规校验进入游戏的玩家也需强制退出游戏。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "合规校验",
      children: "合规校验"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerverifylocalplayer",
        children: "verifyLocalPlayer"
      }), "接口对用户设备登录华为账号的实名认证和未成年人防沉迷进行合规校验，校验通过后，玩家进入游戏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\n// ThirdUserInfo是使用游戏官方账号登录游戏的玩家合规信息，接入华为账号登录时无需传入该信息，但在接入游戏官方账号登录时要求传入相关信息\nlet request: gamePlayer.ThirdUserInfo = {\n  thirdOpenId: '123xxxx', // 游戏官方账号ID，接入华为账号登录时传空\n  isRealName: true // 玩家是否实名，该值为true时表示已实名，为false时表示未实名，接入华为账号登录时不传该字段\n};\ntry {\n  gamePlayer.verifyLocalPlayer(context, request).then(() => {\n    hilog.info(0x0000, 'testTag', `Succeeded in verifying.`);\n  }).catch((error: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `Failed to verify. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (error) {\n  let err = error as BusinessError;\n  hilog.error(0x0000, 'testTag', `Failed to verify. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用华为账号登录的网络游戏，华为账号的实名认证、未成年人防沉迷由基础游戏服务实现，华为账号的支付合规控制（例如未成年人支付限额）由IAP Kit（应用内支付服务）实现。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "合规校验"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "校验项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "国家政策"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解决方案"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号实名认证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验用户设备登录的华为账号是否已实名认证。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据相关法律法规要求，所有网络游戏玩家必须使用真实有效身份信息注册并登录网络游戏。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若玩家使用未实名认证的华为账号登录游戏时，基础游戏服务向玩家弹出实名认证窗口，要求玩家进行实名认证。若玩家取消实名认证，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-error-code/gameservice-error-code#section1002000004-%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81%E8%BF%94%E5%9B%9E%E5%BC%BA%E5%88%B6%E5%AE%9E%E5%90%8D%E4%BD%86%E7%94%A8%E6%88%B7%E5%8F%96%E6%B6%88%E6%88%96%E9%9C%80%E8%A6%81%E5%BC%BA%E5%88%B6%E5%AE%9E%E5%90%8D%E4%BD%86%E6%B2%A1%E6%9C%89%E5%AE%9E%E5%90%8D",
              children: "1002000004"
            }), "错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "未成年人防沉迷"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验已实名认证为未成年人的华为账号是否在规定时间内登录游戏。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据国家新闻出版署的最新规定，所有网络游戏企业仅可在周五、周六、周日和法定节假日每日20时至21时向未成年人提供1小时网络游戏服务，其他时间均不得以任何形式向未成年人提供网络游戏服务。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 已实名认证为未成年人的华为账号在规定时间内登录游戏，当游戏进行到晚上21时，基础游戏服务会弹窗提示玩家已到游戏时间，强制玩家退出游戏并返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-error-code/gameservice-error-code#section1002000006-%E7%8E%A9%E5%AE%B6%E6%9C%AA%E6%88%90%E5%B9%B4%E5%B9%B6%E4%B8%94%E5%BD%93%E5%89%8D%E4%B8%8D%E5%9C%A8%E5%8F%AF%E6%B8%B8%E6%88%8F%E6%97%B6%E9%97%B4",
              children: "1002000006"
            }), "错误码。  - 已实名认证为未成年人的华为账号在非规定游戏时间内登录游戏，基础游戏服务会弹框提示玩家不允许游戏，强制玩家退出游戏并返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-error-code/gameservice-error-code#section1002000006-%E7%8E%A9%E5%AE%B6%E6%9C%AA%E6%88%90%E5%B9%B4%E5%B9%B6%E4%B8%94%E5%BD%93%E5%89%8D%E4%B8%8D%E5%9C%A8%E5%8F%AF%E6%B8%B8%E6%88%8F%E6%97%B6%E9%97%B4",
              children: "1002000006"
            }), "错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "未成年人支付限额"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验已实名认证为未成年人的华为账号是否限额付费。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据国家新闻出版署的最新规定，网络游戏企业不得为未满8周岁的用户提供游戏付费服务。同一网络游戏企业所提供的游戏付费服务，8周岁以上未满16周岁的用户，单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币；16周岁以上未满18周岁的用户，单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已实名认证为未成年人的华为账号在游戏内超额付费，IAP Kit会弹窗提示消费金额超出限制。  用户在使用华为应用内支付时，华为会自动根据国家新闻出版署的要求进行支付限额控制，开发者无需处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(598225)/* ["default"] */.A) + "",
        width: "1440",
        height: "234"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "提交玩家角色信息",
      children: "提交玩家角色信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐接入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "玩家成功登录游戏并选择角色、区服后，游戏将角色信息提交到华为游戏服务器，可用于后续基于角色维度的联运活动规划，为玩家提供更好的体验和更丰富的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayersaveplayerrole",
        children: "savePlayerRole"
      }), "接口，将角色信息上报至华为游戏服务器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(666694)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若游戏没有角色系统，“roleId”请传入“0”，“roleName”请传入“default”，请勿传\"\"和null。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\nlet request: gamePlayer.GSKPlayerRole = {\n  roleId: '123', // 玩家角色ID，如游戏没有角色系统，请传入“0”，务必不要传\"\"和null\n  roleName: 'Jason', // 玩家角色名，如游戏没有角色系统，请传入“default”，务必不要传\"\"和null\n  serverId: '456',\n  serverName: 'Zhangshan',\n  gamePlayerId: '789', // 请根据实际获取到的gamePlayerId传值\n  thirdOpenId: '123' // 接入华为账号登录时不传该字段。接入游戏官方账号登录时，请根据实际获取到的thirdOpenId传值\n};\ntry {\n  gamePlayer.savePlayerRole(context, request).then(() => {\n    hilog.info(0x0000, 'testTag', `Succeeded in saving.`);\n  });\n} catch (error) {\n  let err = error as BusinessError;\n  hilog.error(0x0000, 'testTag', `Failed to save. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "欢迎横幅管理游戏账号",
      children: "欢迎横幅管理游戏账号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不涉及角色交易、或不存在多个游戏号的游戏可忽略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入角色交易、或存在多个游戏号的游戏，玩家成功登录后会在顶部欢迎横幅出现“管理”按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若玩家在“顶部欢迎横幅 > 管理 > 管理游戏号”中切换/删除游戏号时，开发者的实现逻辑如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeronplayerchanged",
          children: "on"
        }), "接口回调中清理游戏的登录缓存。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeronplayerchanged",
          children: "on"
        }), "接口回调中重新调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
          children: "unionLogin"
        }), "接口，将", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "showLoginDialog"
          })
        }), "参数设置为", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "true"
          })
        }), "，即可强制拉起联合登录面板，允许玩家重新选择华为账号登录或游戏官方账号登录。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(379935)/* ["default"] */.A) + "",
        width: "525",
        height: "547"
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
724239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
38071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799236-09457589282c9bb2d35a32d77670bd16.png");

},
598225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438937-2efc27c02d6399e076f59a815b3c54d8.png");

},
516892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478889-6a58d654ffc4153d1f3b578894834f61.png");

},
666694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
379935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958892-fcd5e77a7492ba264e1df81990d4edb1.png");

},
939249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478887-39354a2d705140784791d24b09ffde69.png");

},
256858(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
458813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799242-7c0ad7b12a223017826b8566c6a58d0b.png");

},
163598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
738175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478891-6feb56b3185000fd34c634a3e9f5c9d8.png");

},
655455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958888-5d43216cc120fe6abb50dc5fdb5102c2.png");

},
205217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799240-653e7618d4a8dff1c5bc6bad1b482795.png");

},
672555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958890-b0012b2c27de769233f78fcb6271cf71.png");

},
162109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
545056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438935-d4d329c70d1b861b82e1b06111abab0f.png");

},
791962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958884-0bb1c9381e61465b291be08f32aa85b3.png");

},
678021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
251208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
789477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799238-88e55b47634577390f4e32d38f158c2e.png");

},
873345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958886-b475f9c5314ef01aae0b116d9c0fdbaf.png");

},
587716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438933-6a0e921e199d065036387b2d85b2752c.png");

},
944717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438931-03d96eed5a254a2edb6d06f4a375eb73.png");

},
362996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
858037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
211432(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
628931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
454381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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