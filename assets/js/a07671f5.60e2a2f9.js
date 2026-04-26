"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["620421"], {
679313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_files_devicesecurity_capi_security_audit_8_h_devicesecurity_capi_security_audit_8_h_md_a07_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-security-api-devicesecurity-c-devicesecurity-capi-files-devicesecurity-capi-security-audit-8-h-devicesecurity-capi-security-audit-8-h-md-a07.json
var site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_files_devicesecurity_capi_security_audit_8_h_devicesecurity_capi_security_audit_8_h_md_a07_namespaceObject = JSON.parse('{"id":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h","title":"security_audit.h","description":"概述","source":"@site/docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h.md","sourceDirName":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h","slug":"/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"security_audit.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-security-audit-8h","kit":"系统","last_updated":"2026-04-22","slug":"devicesecurity-capi-security-audit-8h"},"sidebar":"ref","previous":{"title":"device_security_mode.h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-device-security-mode-8h/devicesecurity-capi-device-security-mode-8h"},"next":{"title":"security_antivirus.h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-antivirus-8h/devicesecurity-capi-security-antivirus-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h.md


const frontMatter = {
	title: 'security_audit.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-security-audit-8h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'devicesecurity-capi-security-audit-8h'
};
const contentTitle = 'security_audit.h';

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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "security_audith",
        children: "security_audit.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件中定义了与安全审计相关的函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <DeviceSecurityKit/security_audit.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libsecurityaudit_ndk.z.so"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit",
        children: "SecurityAudit"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_handler",
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义阻断事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct SecurityAudit_Client_Impl ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_client",
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_notify_event",
              children: "SecurityAudit_Notify_Event"
            }), " {  SECURITY_AUDIT_NOTIFY_EVENT_PASTEBOARD = 0x27000000, SECURITY_AUDIT_NOTIFY_EVENT_FILE = 0x1C000007, SECURITY_AUDIT_NOTIFY_EVENT_FILE_INTERCEPTED = 0x1C001100, SECURITY_AUDIT_NOTIFY_EVENT_ACCOUNT = 0x10000100,  SECURITY_AUDIT_NOTIFY_EVENT_WINDOW = 0x07000000, SECURITY_AUDIT_NOTIFY_EVENT_VOLUME = 0x0F000000, SECURITY_AUDIT_NOTIFY_EVENT_PRINTER = 0x2E000000, SECURITY_AUDIT_NOTIFY_EVENT_PROCESS = 0x1C000008,  SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_TRAFFIC = 0x1C00000E, SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_CONN = 0x1C00000F, SECURITY_AUDIT_NOTIFY_EVENT_CAMERA = 0x2D000000, SECURITY_AUDIT_NOTIFY_EVENT_APP = 0x10000000,  SECURITY_AUDIT_NOTIFY_EVENT_EDM = 0x11000000, SECURITY_AUDIT_NOTIFY_EVENT_CERT = 0x12003000, SECURITY_AUDIT_NOTIFY_EVENT_KIA_CREATE = 0x1C00000B, SECURITY_AUDIT_NOTIFY_EVENT_KIA_READ = 0x1C000012,  SECURITY_AUDIT_NOTIFY_EVENT_KIA_VARIANT = 0x1C00000C, SECURITY_AUDIT_NOTIFY_EVENT_KIA_INTERCEPT = 0x1C00000A, SECURITY_AUDIT_NOTIFY_EVENT_PERMISSION = 0x0B000000, SECURITY_AUDIT_NOTIFY_EVENT_DNS = 0x03000001,  SECURITY_AUDIT_NOTIFY_EVENT_APP_INSTALL_INTERCEPTED = 0x18000100, SECURITY_AUDIT_NOTIFY_EVENT_APP_UNINSTALL_INTERCEPTED = 0x18000101, SECURITY_AUDIT_NOTIFY_EVENT_APP_UPDATE_INTERCEPTED = 0x18000102, SECURITY_AUDIT_NOTIFY_EVENT_APP_RECOVER_INTERCEPTED = 0x18000103,  SECURITY_AUDIT_NOTIFY_EVENT_APP_START_INTERCEPTED = 0x18000104, SECURITY_AUDIT_NOTIFY_EVENT_USB_ACCESS_INTERCEPTED = 0x30000000,  SECURITY_AUDIT_NOTIFY_EVENT_SMB_FILE_SEND = 0x0F000001,  SECURITY_AUDIT_NOTIFY_EVENT_KIA_PRE_OPEN = 0x1C000014,  SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG = 0x27000100,  SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG_INTERCEPTED = 0x27000101,  SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER = 0x2F000000,  SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER_POLICY = 0x2F000001,  SECURITY_AUDIT_NOTIFY_EVENT_SERIAL_PORT_ACCESS = 0x30000100,  SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_INTERCEPTED = 0x03000002,  SECURITY_AUDIT_NOTIFY_EVENT_WIFI_INTERCEPTED = 0x03000100,  SECURITY_AUDIT_NOTIFY_EVENT_PRINT_INTERCEPTED = 0x2E000001  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义通知事件的事件ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_auth_event",
              children: "SecurityAudit_Auth_Event"
            }), " {  SECURITY_AUDIT_AUTH_EVENT_FILE_CREATE = 0x1C801100, SECURITY_AUDIT_AUTH_EVENT_FILE_OPEN = 0x1C801101, SECURITY_AUDIT_AUTH_EVENT_FILE_RENAME = 0x1C801102, SECURITY_AUDIT_AUTH_EVENT_FILE_DELETE = 0x1C801103,  SECURITY_AUDIT_AUTH_EVENT_FILE_SETEXTATTR = 0x1C801104, SECURITY_AUDIT_AUTH_EVENT_FILE_DELETEEXTATTR = 0x1C801105  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义阻断事件的事件ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_filtertype",
              children: "SecurityAudit_FilterType"
            }), " {  EVENT_TYPE_EQUAL = 0x00000100, EVENT_SUBTYPE_EQUAL = 0x00000200, FILE_PATH_EQUAL = 0x00010000, FILE_PATH_PREFIX = 0x00010001,  FILE_PATH_SUFFIX = 0x00010002, PROCESS_UID_EQUAL = 0x00020000, PROCESS_PID_EQUAL = 0x00020100, PROCESS_NAME_EQUAL = 0x00020200,  PROCESS_NAME_PREFIX = 0x00020201, PROCESS_NAME_SUFFIX = 0x00020202  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义过滤器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authresult",
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_newclient",
              children: "HMS_SecurityAudit_NewClient"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " **client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_handler",
              children: "SecurityAudit_Handler"
            }), " handler)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的通知事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_deleteclient",
              children: "HMS_SecurityAudit_DeleteClient"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除通知客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_subscribe",
              children: "HMS_SecurityAudit_Subscribe"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_notify_event",
              children: "SecurityAudit_Notify_Event"
            }), " *events, uint64_t count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅通知事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_unsubscribe",
              children: "HMS_SecurityAudit_Unsubscribe"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_notify_event",
              children: "SecurityAudit_Notify_Event"
            }), " *events, uint64_t count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅通知事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_addfilter",
              children: "HMS_SecurityAudit_AddFilter"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_notify_event",
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_removefilter",
              children: "HMS_SecurityAudit_RemoveFilter"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_client",
              children: "SecurityAudit_Client"
            }), " *client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_notify_event",
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_newauthclient",
              children: "HMS_SecurityAudit_NewAuthClient"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " **client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_handler",
              children: "SecurityAudit_Handler"
            }), " handler)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的阻断类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_deleteauthclient",
              children: "HMS_SecurityAudit_DeleteAuthClient"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除阻断类事件客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_subscribeauthevent",
              children: "HMS_SecurityAudit_SubscribeAuthEvent"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_auth_event",
              children: "SecurityAudit_Auth_Event"
            }), " *events, uint64_t count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅阻断类事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_unsubscribeauthevent",
              children: "HMS_SecurityAudit_UnsubscribeAuthEvent"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_auth_event",
              children: "SecurityAudit_Auth_Event"
            }), " *events, uint64_t count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅阻断类事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_addautheventfilter",
              children: "HMS_SecurityAudit_AddAuthEventFilter"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_auth_event",
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_removeautheventfilter",
              children: "HMS_SecurityAudit_RemoveAuthEventFilter"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_auth_event",
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_auth",
              children: "HMS_SecurityAudit_Auth"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authclient",
              children: "SecurityAudit_AuthClient"
            }), " *client, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event",
              children: "SecurityAudit_Event"
            }), " *event, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_authresult",
              children: "SecurityAudit_AuthResult"
            }), " authResult)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置审计事件的阻断结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_queryallprocesses",
              children: "HMS_SecurityAudit_QueryAllProcesses"
            }), " (char** result)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有的应用进程信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#hms_securityaudit_queryprocesses",
              children: "HMS_SecurityAudit_QueryProcesses"
            }), " (uint64_t* pids, uint64_t count, char** result)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入的pid的应用进程信息。"
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