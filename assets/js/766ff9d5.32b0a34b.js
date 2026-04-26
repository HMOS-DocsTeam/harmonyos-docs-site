"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["942187"], {
287590(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_index_devicesecurity_capi_securityantivirus_devicesecurity_capi_securityantivirus_md_766_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-security-api-devicesecurity-c-devicesecurity-capi-index-devicesecurity-capi-securityantivirus-devicesecurity-capi-securityantivirus-md-766.json
var site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_index_devicesecurity_capi_securityantivirus_devicesecurity_capi_securityantivirus_md_766_namespaceObject = JSON.parse('{"id":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus/devicesecurity-capi-securityantivirus","title":"SecurityAntivirus","description":"概述","source":"@site/docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus/devicesecurity-capi-securityantivirus.md","sourceDirName":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus","slug":"/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus/devicesecurity-capi-securityantivirus","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus/devicesecurity-capi-securityantivirus","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"SecurityAntivirus","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus","kit":"系统","last_updated":"2026-04-22","slug":"devicesecurity-capi-securityantivirus"},"sidebar":"ref","previous":{"title":"SecurityAudit","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit"},"next":{"title":"device_security_mode.h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-device-security-mode-8h/devicesecurity-capi-device-security-mode-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus/devicesecurity-capi-securityantivirus.md


const frontMatter = {
	title: 'SecurityAntivirus',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'devicesecurity-capi-securityantivirus'
};
const contentTitle = 'SecurityAntivirus';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "文件",
  "id": "文件",
  "level": 3
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "SecurityAntivirus_ErrCode",
  "id": "securityantivirus_errcode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_SecurityAntivirus_RegisterAntivirus()",
  "id": "hms_securityantivirus_registerantivirus",
  "level": 3
}, {
  "value": "HMS_SecurityAntivirus_UnregisterAntivirus()",
  "id": "hms_securityantivirus_unregisterantivirus",
  "level": 3
}, {
  "value": "HMS_SecurityAntivirus_UpdateAntivirus()",
  "id": "hms_securityantivirus_updateantivirus",
  "level": 3
}, {
  "value": "HMS_SecurityAntivirus_QueryAntivirus()",
  "id": "hms_securityantivirus_queryantivirus",
  "level": 3
}, {
  "value": "HMS_SecurityAntivirus_QueryPreinstalledAntivirus()",
  "id": "hms_securityantivirus_querypreinstalledantivirus",
  "level": 3
}, {
  "value": "HMS_SecurityAntivirus_EnablePreinstalledAntivirus()",
  "id": "hms_securityantivirus_enablepreinstalledantivirus",
  "level": 3
}, {
  "value": "HMS_SecurityAntivirus_DisablePreinstalledAntivirus()",
  "id": "hms_securityantivirus_disablepreinstalledantivirus",
  "level": 3
}, {
  "value": "HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount()",
  "id": "hms_securityantivirus_enablepreinstalledantivirusbyaccount",
  "level": 3
}, {
  "value": "HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount()",
  "id": "hms_securityantivirus_disablepreinstalledantivirusbyaccount",
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
        id: "securityantivirus",
        children: "SecurityAntivirus"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SecurityAntivirus模块用于管理三方病毒防护服务应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.SecurityAntivirus"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-antivirus-8h/devicesecurity-capi-security-antivirus-8h",
              children: "security_antivirus.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义病毒防护服务应用调用的API接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityantivirus/devicesecurity-capi-structs-securityantivirus",
              children: "SecurityAntivirus_Antivirus"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义病毒防护服务应用信息，包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#securityantivirus_errcode",
              children: "SecurityAntivirus_ErrCode"
            }), "{  SECURITY_ANTIVIRUS_SUCCESS = 0,  SECURITY_ANTIVIRUS_PERMISSION_NOT_GRANTED = 201,  SECURITY_ANTIVIRUS_PARAM_INVALID = 1019900001,  SECURITY_ANTIVIRUS_NO_REGISTER = 1019900002,  SECURITY_ANTIVIRUS_INNER_ERROR = 1019900003  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义病毒防护服务管理错误码。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SecurityAntivirus_ErrCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityantivirus_registerantivirus",
              children: "HMS_SecurityAntivirus_RegisterAntivirus"
            }), "(const char* bundleName)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR（Endpoint Detection and Response）应用向HarmonyOS安全防护服务注册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SecurityAntivirus_ErrCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityantivirus_unregisterantivirus",
              children: "HMS_SecurityAntivirus_UnregisterAntivirus"
            }), "(const char* bundleName)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR应用从HarmonyOS安全防护服务注销。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SecurityAntivirus_ErrCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityantivirus_updateantivirus",
              children: "HMS_SecurityAntivirus_UpdateAntivirus"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityantivirus/devicesecurity-capi-structs-securityantivirus",
              children: "SecurityAntivirus_Antivirus"
            }), "* antivirus)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR应用向HarmonyOS安全防护服务更新自身应用信息，包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SecurityAntivirus_ErrCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityantivirus_queryantivirus",
              children: "HMS_SecurityAntivirus_QueryAntivirus"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityantivirus/devicesecurity-capi-structs-securityantivirus",
              children: "SecurityAntivirus_Antivirus"
            }), "** list, uint32_t* length)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "零信任应用向HarmonyOS安全防护服务查询所有三方EDR注册信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SecurityAntivirus_ErrCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityantivirus_querypreinstalledantivirus",
              children: "HMS_SecurityAntivirus_QueryPreinstalledAntivirus"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityantivirus/devicesecurity-capi-structs-securityantivirus",
              children: "SecurityAntivirus_Antivirus"
            }), "** list, uint32_t* length)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM（Mobile Device Management）应用向HarmonyOS安全防护服务查询所有用户的防病毒功能状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SecurityAntivirus_ErrCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityantivirus_enablepreinstalledantivirus",
              children: "HMS_SecurityAntivirus_EnablePreinstalledAntivirus"
            }), "(void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM应用启用HarmonyOS安全防护服务所有用户的防病毒功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SecurityAntivirus_ErrCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityantivirus_disablepreinstalledantivirus",
              children: "HMS_SecurityAntivirus_DisablePreinstalledAntivirus"
            }), "(void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM应用禁用HarmonyOS安全防护服务所有用户的防病毒功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SecurityAntivirus_ErrCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityantivirus_enablepreinstalledantivirusbyaccount",
              children: "HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount"
            }), "(int32_t accountId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM应用启用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SecurityAntivirus_ErrCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityantivirus_disablepreinstalledantivirusbyaccount",
              children: "HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount"
            }), "(int32_t accountId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM应用禁用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "securityantivirus_errcode",
      children: "SecurityAntivirus_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum SecurityAntivirus_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义病毒防护服务管理错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.SecurityAntivirus"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_ANTIVIRUS_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_ANTIVIRUS_PERMISSION_NOT_GRANTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用权限校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_ANTIVIRUS_PARAM_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口入参校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_ANTIVIRUS_NO_REGISTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全防病毒应用未注册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_ANTIVIRUS_INNER_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS安全防护服务出现内部错误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityantivirus_registerantivirus",
      children: "HMS_SecurityAntivirus_RegisterAntivirus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_RegisterAntivirus(const char* bundleName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "三方EDR应用向HarmonyOS安全防护服务注册。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR包名。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.REGISTER_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityantivirus_unregisterantivirus",
      children: "HMS_SecurityAntivirus_UnregisterAntivirus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_UnregisterAntivirus(const char* bundleName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "三方EDR应用从HarmonyOS安全防护服务注销。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR包名。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.REGISTER_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityantivirus_updateantivirus",
      children: "HMS_SecurityAntivirus_UpdateAntivirus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_UpdateAntivirus(const SecurityAntivirus_Antivirus* antivirus)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "三方EDR应用向HarmonyOS安全防护服务更新信息，包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const SecurityAntivirus_Antivirus* antivirus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR更新信息（包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.REGISTER_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果当前应用未在病毒防护系统注册，则返回1019900002。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityantivirus_queryantivirus",
      children: "HMS_SecurityAntivirus_QueryAntivirus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_QueryAntivirus(SecurityAntivirus_Antivirus** list, uint32_t* length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "零信任应用向HarmonyOS安全防护服务查询当前所有三方EDR注册信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_Antivirus** list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR注册信息列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t* length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR注册信息数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.MANAGE_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityantivirus_querypreinstalledantivirus",
      children: "HMS_SecurityAntivirus_QueryPreinstalledAntivirus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_QueryPreinstalledAntivirus(SecurityAntivirus_Antivirus** list, uint32_t* length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MDM应用向HarmonyOS安全防护服务查询所有用户系统防病毒功能状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_Antivirus** list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS安全防护服务所有用户的防病毒功能状态信息列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t* length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS安全防护服务所有用户的防病毒功能状态信息数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityantivirus_enablepreinstalledantivirus",
      children: "HMS_SecurityAntivirus_EnablePreinstalledAntivirus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_EnablePreinstalledAntivirus(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MDM应用启用HarmonyOS安全防护服务所有用户的防病毒功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityantivirus_disablepreinstalledantivirus",
      children: "HMS_SecurityAntivirus_DisablePreinstalledAntivirus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_DisablePreinstalledAntivirus(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MDM应用禁用HarmonyOS安全防护服务所有用户的防病毒功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityantivirus_enablepreinstalledantivirusbyaccount",
      children: "HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount(int32_t accountId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MDM应用启用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t accountId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityantivirus_disablepreinstalledantivirusbyaccount",
      children: "HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount(int32_t accountId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MDM应用禁用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t accountId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。"
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