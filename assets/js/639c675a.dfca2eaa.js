"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["306502"], {
961250(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_security_api_devicesecurity_arktsapi_devicesecurity_superprivacymode_api_devicesecurity_superprivacymode_api_md_639_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-security-api-devicesecurity-arktsapi-devicesecurity-superprivacymode-api-devicesecurity-superprivacymode-api-md-639.json
var site_docs_ref_system_security_api_device_security_api_devicesecurity_arktsapi_devicesecurity_superprivacymode_api_devicesecurity_superprivacymode_api_md_639_namespaceObject = JSON.parse('{"id":"system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-superprivacymode-api/devicesecurity-superprivacymode-api","title":"SuperPrivacyMode（超级隐私模式）","description":"本模块提供超级隐私模式相关接口，应用可根据当前的超级隐私模式的状态进行相应业务处理。","source":"@site/docs-ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-superprivacymode-api/devicesecurity-superprivacymode-api.md","sourceDirName":"system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-superprivacymode-api","slug":"/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-superprivacymode-api/devicesecurity-superprivacymode-api","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-superprivacymode-api/devicesecurity-superprivacymode-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"SuperPrivacyMode（超级隐私模式）","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-superprivacymode-api","kit":"系统","last_updated":"2026-04-22","slug":"devicesecurity-superprivacymode-api"},"sidebar":"ref","previous":{"title":"DlpAntiPeep（防窥保护）","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-dlpantipeep-api/devicesecurity-dlpantipeep-api"},"next":{"title":"DeviceVerify（应用设备状态检测）","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/devicesecurity-arktsapi-errcode-deviceverify/devicesecurity-arktsapi-errcode-deviceverify"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-superprivacymode-api/devicesecurity-superprivacymode-api.md


const frontMatter = {
	title: 'SuperPrivacyMode（超级隐私模式）',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-superprivacymode-api',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'devicesecurity-superprivacymode-api'
};
const contentTitle = 'SuperPrivacyMode（超级隐私模式）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "SuperPrivacyMode",
  "id": "superprivacymode",
  "level": 2
}, {
  "value": "getSuperPrivacyMode",
  "id": "getsuperprivacymode",
  "level": 2
}, {
  "value": "on(&#39;superPrivacyModeChange&#39;)",
  "id": "onsuperprivacymodechange",
  "level": 2
}, {
  "value": "off(&#39;superPrivacyModeChange&#39;)",
  "id": "offsuperprivacymodechange",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "superprivacymode超级隐私模式",
        children: "SuperPrivacyMode（超级隐私模式）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供超级隐私模式相关接口，应用可根据当前的超级隐私模式的状态进行相应业务处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { superPrivacyMode } from '@kit.DeviceSecurityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "superprivacymode",
      children: "SuperPrivacyMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示超级隐私模式状态的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Security.SecurityPrivacyServer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该枚举在Wearable、TV中无效果，使用时请遵循", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-security-kit-guide/devicesecurity-superprivacymode/devicesecurity-getsuperprivacymode#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "约束与限制"
      }), "部分的相关说明。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当前超级隐私模式状态为关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON_WHEN_FOLDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当前超级隐私模式状态为仅折叠保护（展开时超级隐私不生效，折叠时生效）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_ON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当前超级隐私模式状态为始终保护。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getsuperprivacymode",
      children: "getSuperPrivacyMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSuperPrivacyMode(): Promise<SuperPrivacyMode>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前超级隐私模式状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Security.SecurityPrivacyServer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 在存在超级隐私模式选项的Phone、PC/2in1、Tablet中可正常调用，在不存在超级隐私模式选项的Phone、PC/2in1、Tablet中返回1006200005错误码，开发者使用时请遵循", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-security-kit-guide/devicesecurity-superprivacymode/devicesecurity-getsuperprivacymode#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "约束与限制"
      }), "部分的相关说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#superprivacymode",
              children: "SuperPrivacyMode"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回当前的超级隐私模式状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/errcode-devicesecurity-superprivacy/errcode-devicesecurity-superprivacy",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1006200002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1006200005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This device is not support SuperPrivacy."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { superPrivacyMode } from '@kit.DeviceSecurityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG = \"SuperPrivacyModeTest\";\n\nlet mode: superPrivacyMode.SuperPrivacyMode = superPrivacyMode.SuperPrivacyMode.OFF;\ntry {\n  mode = await superPrivacyMode.getSuperPrivacyMode();\n  hilog.info(DOMAIN, TAG, `Super privacy mode = ${mode}`);\n} catch (err) {\n  hilog.error(DOMAIN, TAG, `call getSuperPrivacyMode interface failed, errCode:${err?.code}, errMessage:${err?.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onsuperprivacymodechange",
      children: "on('superPrivacyModeChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'superPrivacyModeChange', callback: Callback<SuperPrivacyMode>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅超级隐私模式状态变化事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Security.SecurityPrivacyServer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 在存在超级隐私模式选项的Phone、PC/2in1、Tablet中可正常调用，在不存在超级隐私模式选项的Phone、PC/2in1、Tablet中返回1006200005错误码，开发者使用时请遵循", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-security-kit-guide/devicesecurity-superprivacymode/devicesecurity-getsuperprivacymode#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "约束与限制"
      }), "部分的相关说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入固定字符串'superPrivacyModeChange'，表示需要订阅'superPrivacyModeChange'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#superprivacymode",
              children: "SuperPrivacyMode"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回调用结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/errcode-devicesecurity-superprivacy/errcode-devicesecurity-superprivacy",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1006200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1006200002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1006200005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This device is not support SuperPrivacy."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { superPrivacyMode } from '@kit.DeviceSecurityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG = \"SuperPrivacyModeTest\";\n\nconst superPrivacyChangedCallback = (superPrivacyMode: superPrivacyMode.SuperPrivacyMode): void => {\n  hilog.info(DOMAIN, TAG, `super privacy mode changed, mode = ${superPrivacyMode}`);\n}\n\nhilog.info(DOMAIN, TAG, 'start register super privacy mode changed listener');\ntry {\n  superPrivacyMode.on('superPrivacyModeChange', superPrivacyChangedCallback);\n  hilog.info(DOMAIN, TAG, 'register super privacy mode change listener success');\n} catch (err) {\n  hilog.error(DOMAIN, TAG, `register super privacy changed listener failed, errCode:${err?.code}, errMessage:${err?.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offsuperprivacymodechange",
      children: "off('superPrivacyModeChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'superPrivacyModeChange', callback?: Callback<SuperPrivacyMode>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅超级隐私模式状态变化事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Security.SecurityPrivacyServer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 在存在超级隐私模式选项的Phone、PC/2in1、Tablet中可正常调用，在不存在超级隐私模式选项的Phone、PC/2in1、Tablet中返回1006200005错误码，开发者使用时请遵循", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-security-kit-guide/devicesecurity-superprivacymode/devicesecurity-getsuperprivacymode#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "约束与限制"
      }), "部分的相关说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入固定字符串'superPrivacyModeChange'，表示需要订阅的事件为'superPrivacyModeChange'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#superprivacymode",
              children: "SuperPrivacyMode"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回调用结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/errcode-devicesecurity-superprivacy/errcode-devicesecurity-superprivacy",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1006200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1006200002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1006200005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This device is not support SuperPrivacy."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { superPrivacyMode } from '@kit.DeviceSecurityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG = \"SuperPrivacyModeTest\";\n\nconst superPrivacyChangedCallback = (superPrivacyMode: superPrivacyMode.SuperPrivacyMode): void => {\n  hilog.info(DOMAIN, TAG, `super privacy mode changed, mode = ${superPrivacyMode}`);\n}\n\nhilog.info(DOMAIN, TAG, 'start unregister super privacy mode changed listener');\ntry {\n  superPrivacyMode.off('superPrivacyModeChange', superPrivacyChangedCallback);\n} catch (err) {\n  hilog.error(DOMAIN, TAG, `unregister super privacy changed listener failed, errCode:${err?.code}, errMessage:${err?.message}`);\n}\n"
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