"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["622623"], {
208991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_index_devicesecurity_capi_securityaudit_devicesecurity_capi_securityaudit_md_265_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-security-api-devicesecurity-c-devicesecurity-capi-index-devicesecurity-capi-securityaudit-devicesecurity-capi-securityaudit-md-265.json
var site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_index_devicesecurity_capi_securityaudit_devicesecurity_capi_securityaudit_md_265_namespaceObject = JSON.parse('{"id":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit","title":"SecurityAudit","description":"概述","source":"@site/docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit.md","sourceDirName":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit","slug":"/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"SecurityAudit","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityaudit","kit":"系统","last_updated":"2026-04-22","slug":"devicesecurity-capi-securityaudit"},"sidebar":"ref","previous":{"title":"DeviceSecurityMode","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode"},"next":{"title":"SecurityAntivirus","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus/devicesecurity-capi-securityantivirus"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit.md


const frontMatter = {
	title: 'SecurityAudit',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityaudit',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'devicesecurity-capi-securityaudit'
};
const contentTitle = 'SecurityAudit';

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
  "value": "类型定义",
  "id": "类型定义",
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
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "SecurityAudit_AuthClient",
  "id": "securityaudit_authclient",
  "level": 3
}, {
  "value": "SecurityAudit_Client",
  "id": "securityaudit_client",
  "level": 3
}, {
  "value": "SecurityAudit_Handler",
  "id": "securityaudit_handler",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "SecurityAudit_Auth_Event",
  "id": "securityaudit_auth_event",
  "level": 3
}, {
  "value": "SecurityAudit_AuthResult",
  "id": "securityaudit_authresult",
  "level": 3
}, {
  "value": "SecurityAudit_FilterType",
  "id": "securityaudit_filtertype",
  "level": 3
}, {
  "value": "SecurityAudit_Notify_Event",
  "id": "securityaudit_notify_event",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_SecurityAudit_AddAuthEventFilter()",
  "id": "hms_securityaudit_addautheventfilter",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_AddFilter()",
  "id": "hms_securityaudit_addfilter",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_Auth()",
  "id": "hms_securityaudit_auth",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_DeleteAuthClient()",
  "id": "hms_securityaudit_deleteauthclient",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_DeleteClient()",
  "id": "hms_securityaudit_deleteclient",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_NewAuthClient()",
  "id": "hms_securityaudit_newauthclient",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_NewClient()",
  "id": "hms_securityaudit_newclient",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_RemoveAuthEventFilter()",
  "id": "hms_securityaudit_removeautheventfilter",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_RemoveFilter()",
  "id": "hms_securityaudit_removefilter",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_Subscribe()",
  "id": "hms_securityaudit_subscribe",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_SubscribeAuthEvent()",
  "id": "hms_securityaudit_subscribeauthevent",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_Unsubscribe()",
  "id": "hms_securityaudit_unsubscribe",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_UnsubscribeAuthEvent()",
  "id": "hms_securityaudit_unsubscribeauthevent",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_QueryAllProcesses()",
  "id": "hms_securityaudit_queryallprocesses",
  "level": 3
}, {
  "value": "HMS_SecurityAudit_QueryProcesses()",
  "id": "hms_securityaudit_queryprocesses",
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
        id: "securityaudit",
        children: "SecurityAudit"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供安全审计的API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.SecurityAudit"]
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h",
              children: "security_audit.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与安全审计相关的函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event",
              children: "SecurityAudit_Event"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义审计事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter",
              children: "SecurityAudit_Filter"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供过滤条件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_handler",
              children: "SecurityAudit_Handler"
            }), ") (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event",
              children: "SecurityAudit_Event"
            }), " *events, uint64_t count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义事件处理函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct SecurityAudit_AuthClient_Impl ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义阻断事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct SecurityAudit_Client_Impl ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_client",
              children: "SecurityAudit_Client"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义通知事件客户端。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_notify_event",
              children: "SecurityAudit_Notify_Event"
            }), " {  SECURITY_AUDIT_NOTIFY_EVENT_PASTEBOARD = 0x27000000, SECURITY_AUDIT_NOTIFY_EVENT_FILE = 0x1C000007, SECURITY_AUDIT_NOTIFY_EVENT_FILE_INTERCEPTED = 0x2700003C, SECURITY_AUDIT_NOTIFY_EVENT_ACCOUNT = 0x10000100,  SECURITY_AUDIT_NOTIFY_EVENT_WINDOW = 0x07000000, SECURITY_AUDIT_NOTIFY_EVENT_VOLUME = 0x0F000000, SECURITY_AUDIT_NOTIFY_EVENT_PRINTER = 0x2E000000, SECURITY_AUDIT_NOTIFY_EVENT_PROCESS = 0x1C000008,  SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_TRAFFIC = 0x1C00000E, SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_CONN = 0x1C00000F, SECURITY_AUDIT_NOTIFY_EVENT_CAMERA = 0x2D000000, SECURITY_AUDIT_NOTIFY_EVENT_APP = 0x10000000,  SECURITY_AUDIT_NOTIFY_EVENT_EDM = 0x11000000, SECURITY_AUDIT_NOTIFY_EVENT_CERT = 0x12003000, SECURITY_AUDIT_NOTIFY_EVENT_KIA_CREATE = 0x1C00000B, SECURITY_AUDIT_NOTIFY_EVENT_KIA_READ = 0x1C000012,  SECURITY_AUDIT_NOTIFY_EVENT_KIA_VARIANT = 0x1C00000C, SECURITY_AUDIT_NOTIFY_EVENT_KIA_INTERCEPT = 0x1C00000A, SECURITY_AUDIT_NOTIFY_EVENT_PERMISSION = 0x0B000000, SECURITY_AUDIT_NOTIFY_EVENT_DNS = 0x03000001,  SECURITY_AUDIT_NOTIFY_EVENT_APP_INSTALL_INTERCEPTED = 0x18000100, SECURITY_AUDIT_NOTIFY_EVENT_APP_UNINSTALL_INTERCEPTED = 0x18000101, SECURITY_AUDIT_NOTIFY_EVENT_APP_UPDATE_INTERCEPTED = 0x18000102, SECURITY_AUDIT_NOTIFY_EVENT_APP_RECOVER_INTERCEPTED = 0x18000103,  SECURITY_AUDIT_NOTIFY_EVENT_APP_START_INTERCEPTED = 0x18000104, SECURITY_AUDIT_NOTIFY_EVENT_USB_ACCESS_INTERCEPTED = 0x30000000,  SECURITY_AUDIT_NOTIFY_EVENT_SMB_FILE_SEND = 0x0F000001,  SECURITY_AUDIT_NOTIFY_EVENT_KIA_PRE_OPEN = 0x1C000014,  SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG = 0x27000100,  SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG_INTERCEPTED = 0x27000101,  SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER = 0x2F000000,  SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER_POLICY = 0x2F000001,  SECURITY_AUDIT_NOTIFY_EVENT_SERIAL_PORT_ACCESS = 0x30000100,  SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_INTERCEPTED = 0x03000002,  SECURITY_AUDIT_NOTIFY_EVENT_WIFI_INTERCEPTED = 0x03000100,  SECURITY_AUDIT_NOTIFY_EVENT_PRINT_INTERCEPTED = 0x2E000001  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义通知事件的事件ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_auth_event",
              children: "SecurityAudit_Auth_Event"
            }), " {  SECURITY_AUDIT_AUTH_EVENT_FILE_CREATE = 0x1C801100, SECURITY_AUDIT_AUTH_EVENT_FILE_OPEN = 0x1C801101, SECURITY_AUDIT_AUTH_EVENT_FILE_RENAME = 0x1C801102, SECURITY_AUDIT_AUTH_EVENT_FILE_DELETE = 0x1C801103,  SECURITY_AUDIT_AUTH_EVENT_FILE_SETEXTATTR = 0x1C801104, SECURITY_AUDIT_AUTH_EVENT_FILE_DELETEEXTATTR = 0x1C801105  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义阻断类事件的事件ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_filtertype",
              children: "SecurityAudit_FilterType"
            }), " {  EVENT_TYPE_EQUAL = 0x00000100, EVENT_SUBTYPE_EQUAL = 0x00000200, FILE_PATH_EQUAL = 0x00010000, FILE_PATH_PREFIX = 0x00010001,  FILE_PATH_SUFFIX = 0x00010002, PROCESS_UID_EQUAL = 0x00020000, PROCESS_PID_EQUAL = 0x00020100, PROCESS_NAME_EQUAL = 0x00020200,  PROCESS_NAME_PREFIX = 0x00020201, PROCESS_NAME_SUFFIX = 0x00020202  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义过滤器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authresult",
              children: "SecurityAudit_AuthResult"
            }), " { SECURITY_AUDIT_AUTH_RESULT_ALLOW = 0, SECURITY_AUDIT_AUTH_RESULT_DENY = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义阻断结果的类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_newclient",
              children: "HMS_SecurityAudit_NewClient"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " **client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_handler",
              children: "SecurityAudit_Handler"
            }), " handler)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的通知事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_deleteclient",
              children: "HMS_SecurityAudit_DeleteClient"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除通知客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_subscribe",
              children: "HMS_SecurityAudit_Subscribe"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_notify_event",
              children: "SecurityAudit_Notify_Event"
            }), " *events, uint64_t count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅通知事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_unsubscribe",
              children: "HMS_SecurityAudit_Unsubscribe"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_notify_event",
              children: "SecurityAudit_Notify_Event"
            }), " *events, uint64_t count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅通知事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_addfilter",
              children: "HMS_SecurityAudit_AddFilter"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_notify_event",
              children: "SecurityAudit_Notify_Event"
            }), " event, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter",
              children: "SecurityAudit_Filter"
            }), " *filter)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为通知事件添加过滤条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_removefilter",
              children: "HMS_SecurityAudit_RemoveFilter"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_notify_event",
              children: "SecurityAudit_Notify_Event"
            }), " event, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter",
              children: "SecurityAudit_Filter"
            }), " *filter)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除通知事件的过滤条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_newauthclient",
              children: "HMS_SecurityAudit_NewAuthClient"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " **client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_handler",
              children: "SecurityAudit_Handler"
            }), " handler)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的阻断类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_deleteauthclient",
              children: "HMS_SecurityAudit_DeleteAuthClient"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除阻断类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_subscribeauthevent",
              children: "HMS_SecurityAudit_SubscribeAuthEvent"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_auth_event",
              children: "SecurityAudit_Auth_Event"
            }), " *events, uint64_t count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅阻断类事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_unsubscribeauthevent",
              children: "HMS_SecurityAudit_UnsubscribeAuthEvent"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_auth_event",
              children: "SecurityAudit_Auth_Event"
            }), " *events, uint64_t count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅阻断类事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_addautheventfilter",
              children: "HMS_SecurityAudit_AddAuthEventFilter"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_auth_event",
              children: "SecurityAudit_Auth_Event"
            }), " event, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter",
              children: "SecurityAudit_Filter"
            }), " *filter)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为阻断类事件添加过滤条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_removeautheventfilter",
              children: "HMS_SecurityAudit_RemoveAuthEventFilter"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_auth_event",
              children: "SecurityAudit_Auth_Event"
            }), " event, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter",
              children: "SecurityAudit_Filter"
            }), " *filter)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除阻断类事件的过滤条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_auth",
              children: "HMS_SecurityAudit_Auth"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event",
              children: "SecurityAudit_Event"
            }), " *event, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#securityaudit_authresult",
              children: "SecurityAudit_AuthResult"
            }), " authResult)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置审计事件的阻断结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_queryallprocesses",
              children: "HMS_SecurityAudit_QueryAllProcesses"
            }), "(char** result)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有的应用进程信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_securityaudit_queryprocesses",
              children: "HMS_SecurityAudit_QueryProcesses"
            }), "(uint64_t* pids, uint64_t count, char** result)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入的pid的应用进程信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "securityaudit_authclient",
      children: "SecurityAudit_AuthClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct SecurityAudit_AuthClient_Impl SecurityAudit_AuthClient\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义阻断事件客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "securityaudit_client",
      children: "SecurityAudit_Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct SecurityAudit_Client_Impl SecurityAudit_Client\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义通知事件客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "securityaudit_handler",
      children: "SecurityAudit_Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* SecurityAudit_Handler) (const SecurityAudit_Event *events, uint64_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义事件处理函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
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
            children: "events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向审计事件信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组中的事件数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "securityaudit_auth_event",
      children: "SecurityAudit_Auth_Event"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum SecurityAudit_Auth_Event\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义阻断事件的事件ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.SecurityAudit"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_AUTH_EVENT_FILE_CREATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件创建阻断事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_AUTH_EVENT_FILE_OPEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件打开阻断事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_AUTH_EVENT_FILE_RENAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件重命名阻断事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_AUTH_EVENT_FILE_DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件删除阻断事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_AUTH_EVENT_FILE_SETEXTATTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件设置扩展属性的阻断事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_AUTH_EVENT_FILE_DELETEEXTATTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件删除扩展属性的阻断事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "securityaudit_authresult",
      children: "SecurityAudit_AuthResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum SecurityAudit_AuthResult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义阻断结果的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_AUTH_RESULT_ALLOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许的阻断事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_AUTH_RESULT_DENY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拒绝的阻断事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "securityaudit_filtertype",
      children: "SecurityAudit_FilterType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum SecurityAudit_FilterType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义过滤器类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.SecurityAudit"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_TYPE_EQUAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件类型的过滤器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_SUBTYPE_EQUAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件子类型的过滤器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_PATH_EQUAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件路径类型的过滤器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_PATH_PREFIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件路径前缀类型的过滤器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_PATH_SUFFIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件路径后缀类型的过滤器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROCESS_UID_EQUAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过滤进程的 UID 类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROCESS_PID_EQUAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过滤进程 ID 类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROCESS_NAME_EQUAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "筛选进程名称类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROCESS_NAME_PREFIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程名称前缀的过滤类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROCESS_NAME_SUFFIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程名称后缀的过滤类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "securityaudit_notify_event",
      children: "SecurityAudit_Notify_Event"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum SecurityAudit_Notify_Event\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义通知事件的事件ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.SecurityAudit"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_PASTEBOARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "剪贴板复制和粘贴事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_FILE_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件访问规则违规事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_ACCOUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "账户登录和注销事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_WINDOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口截图、屏幕录制、屏幕投影事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_VOLUME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可移动存储设备的插入和移除事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_PRINTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印机事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_PROCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程创建退出事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_TRAFFIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络流量事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_CONN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络连接事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_CAMERA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_APP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_EDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_CERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书操作事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_KIA_CREATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KIA文件创建事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_KIA_READ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KIA文件读取事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_KIA_VARIANT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KIA文件变体事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_KIA_INTERCEPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KIA文件拦截事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_PERMISSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序权限更改事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS审计事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_APP_INSTALL_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序安装拦截事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_APP_UNINSTALL_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序卸载拦截事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_APP_UPDATE_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序更新拦截事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_APP_RECOVER_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序恢复拦截事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_APP_START_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序开始拦截事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_USB_ACCESS_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB访问拦截事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_SMB_FILE_SEND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMB(Samba)外发事件  起始版本：6.1.0(23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_KIA_PRE_OPEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KIA文件秒开事件  起始版本：6.1.0(23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDC(HarmonyOS Device Connector)调测文件事件  起始版本：6.1.0(23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDC(HarmonyOS Device Connector)调测拦截事件  起始版本：6.1.0(23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多用户空间数据互传事件  起始版本：6.1.0(23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER_POLICY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多用户空间互换审核策略事件  起始版本：6.1.0(23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_SERIAL_PORT_ACCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "串口访问审计事件  起始版本：6.1.0(23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络拦截事件  起始版本：6.1.0(23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_WIFI_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WI-FI拦截事件  起始版本：6.1.0(23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_AUDIT_NOTIFY_EVENT_PRINT_INTERCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印拦截事件  起始版本：6.1.0(23)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_addautheventfilter",
      children: "HMS_SecurityAudit_AddAuthEventFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_AddAuthEventFilter (const SecurityAudit_AuthClient * client, SecurityAudit_Auth_Event event, const SecurityAudit_Filter * filter )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为阻断类事件添加过滤条件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户已创建的阻断类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加过滤条件的阻断类事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻断类事件的过滤器描述。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.kernel.AUTH_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果过滤器数量超过上限，则返回1012000004。 如果事件不支持过滤条件，则返回1012000005。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_addfilter",
      children: "HMS_SecurityAudit_AddFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_AddFilter (const SecurityAudit_Client * client, SecurityAudit_Notify_Event event, const SecurityAudit_Filter * filter )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为通知事件添加过滤条件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户已创建的通知类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知要添加过滤条件的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知事件的过滤器描述。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.QUERY_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果过滤器数量超过上限，则返回1012000004。 如果事件不支持过滤条件，则返回1012000005。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_auth",
      children: "HMS_SecurityAudit_Auth()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_Auth (const SecurityAudit_AuthClient * client, const SecurityAudit_Event * event, SecurityAudit_AuthResult authResult )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置审计事件的阻断结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户已创建的阻断类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "审计阻断类事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "authResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻断结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.kernel.AUTH_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_deleteauthclient",
      children: "HMS_SecurityAudit_DeleteAuthClient()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_DeleteAuthClient (SecurityAudit_AuthClient * client)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除阻断类事件客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要删除的阻断类事件客户端实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.kernel.AUTH_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_deleteclient",
      children: "HMS_SecurityAudit_DeleteClient()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_DeleteClient (SecurityAudit_Client * client)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除通知客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要删除的客户端实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.QUERY_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_newauthclient",
      children: "HMS_SecurityAudit_NewAuthClient()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_NewAuthClient (SecurityAudit_AuthClient ** client, SecurityAudit_Handler handler )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个新的阻断类客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向新阻断类事件客户端实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理发送到此客户端的所有消息的处理器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.kernel.AUTH_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果客户端数量超过总上限，返回1012000002。 如果客户端数量超过当前进程的上限，则返回1012000003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_newclient",
      children: "HMS_SecurityAudit_NewClient()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_NewClient (SecurityAudit_Client ** client, SecurityAudit_Handler handler )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个新的通知事件客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向新客户端实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理发送到此客户端的所有消息的处理器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.QUERY_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果客户端数量超过总上限，返回1012000002。 如果客户端数量超过当前进程的上限，则返回1012000003。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_removeautheventfilter",
      children: "HMS_SecurityAudit_RemoveAuthEventFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_RemoveAuthEventFilter (const SecurityAudit_AuthClient * client, SecurityAudit_Auth_Event event, const SecurityAudit_Filter * filter )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除阻断类事件的过滤条件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户已创建的阻断类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要删除过滤条件的阻断类事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻断类事件的过滤器描述。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.kernel.AUTH_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果事件不支持过滤条件，则返回1012000005。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_removefilter",
      children: "HMS_SecurityAudit_RemoveFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_RemoveFilter (const SecurityAudit_Client * client, SecurityAudit_Notify_Event event, const SecurityAudit_Filter * filter )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除通知事件的过滤条件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户已创建的通知类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知要删除过滤条件的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知事件的过滤器描述。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.QUERY_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果事件不支持过滤条件，则返回1012000005。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_subscribe",
      children: "HMS_SecurityAudit_Subscribe()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_Subscribe (const SecurityAudit_Client * client, const SecurityAudit_Notify_Event * events, uint64_t count )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅通知事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅通知事件的客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要订阅的通知事件数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组中的通知事件数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.QUERY_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_subscribeauthevent",
      children: "HMS_SecurityAudit_SubscribeAuthEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_SubscribeAuthEvent (const SecurityAudit_AuthClient * client, const SecurityAudit_Auth_Event * events, uint64_t count )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅阻断类事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户已创建的阻断类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要订阅的阻断类事件数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组中的阻断类事件数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.kernel.AUTH_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_unsubscribe",
      children: "HMS_SecurityAudit_Unsubscribe()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_Unsubscribe (const SecurityAudit_Client * client, const SecurityAudit_Notify_Event * events, uint64_t count )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅通知事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅通知事件的客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消订阅的通知事件数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组中的通知事件数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.QUERY_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_unsubscribeauthevent",
      children: "HMS_SecurityAudit_UnsubscribeAuthEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_UnsubscribeAuthEvent (const SecurityAudit_AuthClient * client, const SecurityAudit_Auth_Event * events, uint64_t count )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅阻断类事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户已创建的阻断类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消订阅的阻断类事件数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组中的阻断类事件数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.kernel.AUTH_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_queryallprocesses",
      children: "HMS_SecurityAudit_QueryAllProcesses()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_QueryAllProcesses(char** result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询获取所有的应用进程信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
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
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询获取到的应用进程信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.QUERY_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_securityaudit_queryprocesses",
      children: "HMS_SecurityAudit_QueryProcesses()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_SecurityAudit_QueryProcesses(uint64_t* pids, uint64_t count, char** result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询获取输入的pid的应用进程信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "pids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用要查询的pid数组名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用要查询的pid数组元素个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询获取到的应用进程信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.QUERY_AUDIT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。如果要查询的pid数组元素个数超过限制，则返回1012000006。"
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