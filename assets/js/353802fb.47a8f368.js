"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["864673"], {
223098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_app_permissions_permissions_for_mdm_apps_permissions_for_mdm_apps_md_353_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-app-permissions-permissions-for-mdm-apps-permissions-for-mdm-apps-md-353.json
var site_docs_system_security_access_control_app_permission_mgmt_app_permissions_permissions_for_mdm_apps_permissions_for_mdm_apps_md_353_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-mdm-apps/permissions-for-mdm-apps","title":"仅MDM应用可用权限","description":"以下权限仅对MDM（Mobile Device Management）设备管理应用开放。MDM应用的详细介绍，请参考MDM Kit简介。","source":"@site/docs/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-mdm-apps/permissions-for-mdm-apps.md","sourceDirName":"system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-mdm-apps","slug":"/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-mdm-apps/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-mdm-apps/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"仅MDM应用可用权限","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-mdm-apps","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"企业类应用可用权限","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-enterprise-apps/"},"next":{"title":"应用权限组列表","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permission-group-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-mdm-apps/permissions-for-mdm-apps.md


const frontMatter = {
	title: '仅MDM应用可用权限',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-mdm-apps',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '仅MDM应用可用权限';

const assets = {

};



const toc = [{
  "value": "ohos.permission.ENTERPRISE_GET_DEVICE_INFO",
  "id": "ohospermissionenterprise_get_device_info",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_GET_NETWORK_INFO",
  "id": "ohospermissionenterprise_get_network_info",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_INSTALL_BUNDLE",
  "id": "ohospermissionenterprise_install_bundle",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY",
  "id": "ohospermissionenterprise_manage_set_app_running_policy",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_RESET_DEVICE",
  "id": "ohospermissionenterprise_reset_device",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY",
  "id": "ohospermissionenterprise_set_account_policy",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY",
  "id": "ohospermissionenterprise_set_bundle_install_policy",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_DATETIME",
  "id": "ohospermissionenterprise_set_datetime",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_NETWORK",
  "id": "ohospermissionenterprise_set_network",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_WIFI",
  "id": "ohospermissionenterprise_set_wifi",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT",
  "id": "ohospermissionenterprise_subscribe_managed_event",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_RESTRICT_POLICY",
  "id": "ohospermissionenterprise_restrict_policy",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME",
  "id": "ohospermissionenterprise_set_screenoff_time",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_USB",
  "id": "ohospermissionenterprise_manage_usb",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_NETWORK",
  "id": "ohospermissionenterprise_manage_network",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE",
  "id": "ohospermissionenterprise_manage_certificate",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_GET_SETTINGS",
  "id": "ohospermissionenterprise_get_settings",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_BROWSER_POLICY",
  "id": "ohospermissionenterprise_set_browser_policy",
  "level": 2
}, {
  "value": "ohos.permission.SET_ENTERPRISE_INFO",
  "id": "ohospermissionset_enterprise_info",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_SECURITY",
  "id": "ohospermissionenterprise_manage_security",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH",
  "id": "ohospermissionenterprise_manage_bluetooth",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_SYSTEM",
  "id": "ohospermissionenterprise_manage_system",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_WIFI",
  "id": "ohospermissionenterprise_manage_wifi",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS",
  "id": "ohospermissionenterprise_manage_restrictions",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_APPLICATION",
  "id": "ohospermissionenterprise_manage_application",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_LOCATION",
  "id": "ohospermissionenterprise_manage_location",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_REBOOT",
  "id": "ohospermissionenterprise_reboot",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_LOCK_DEVICE",
  "id": "ohospermissionenterprise_lock_device",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_SETTINGS",
  "id": "ohospermissionenterprise_manage_settings",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_OPERATE_DEVICE",
  "id": "ohospermissionenterprise_operate_device",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_ADMIN_MANAGE",
  "id": "ohospermissionenterprise_admin_manage",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_RECOVERY_KEY",
  "id": "ohospermissionenterprise_recovery_key",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY",
  "id": "ohospermissionenterprise_manage_delegated_policy",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO",
  "id": "ohospermissionenterprise_get_all_bundle_info",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_USER_RESTRICTION",
  "id": "ohospermissionenterprise_set_user_restriction",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_APN",
  "id": "ohospermissionenterprise_manage_apn",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_TELEPHONY",
  "id": "ohospermissionenterprise_manage_telephony",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_KIOSK",
  "id": "ohospermissionenterprise_set_kiosk",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES",
  "id": "ohospermissionenterprise_manage_local_publicspaces",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_FILE_TRANSFER_AUDIT_POLICY_MANAGEMENT",
  "id": "ohospermissionenterprise_file_transfer_audit_policy_management",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_SET_WALLPAPER",
  "id": "ohospermissionenterprise_set_wallpaper",
  "level": 2
}, {
  "value": "ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS",
  "id": "ohospermissionmanage_preinstalled_antivirus",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_USER_GRANT_PERMISSION",
  "id": "ohospermissionenterprise_manage_user_grant_permission",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_DATA_IDENTIFY_FILE",
  "id": "ohospermissionenterprise_data_identify_file",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_ACCESS_DLP_FILE",
  "id": "ohospermissionenterprise_access_dlp_file",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN",
  "id": "ohospermissionenterprise_manage_device_admin",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_START_ABILITIES",
  "id": "ohospermissionenterprise_start_abilities",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_READ_LOG",
  "id": "ohospermissionenterprise_read_log",
  "level": 2
}, {
  "value": "ohos.permission.ENTERPRISE_DEACTIVATE_DEVICE_ADMIN",
  "id": "ohospermissionenterprise_deactivate_device_admin",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "仅mdm应用可用权限",
        children: "仅MDM应用可用权限"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下权限仅对MDM（Mobile Device Management）设备管理应用开放。MDM应用的详细介绍，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-intro",
        children: "MDM Kit简介"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(891760)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下权限不支持自动签名，因此在调试和发布阶段，均需参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "的步骤，完成手动签名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_get_device_info",
      children: "ohos.permission.ENTERPRISE_GET_DEVICE_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用激活设备管理应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包括读取设备ID、读取设备硬盘序列号，读取OS版本、读取机器名。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_get_network_info",
      children: "ohos.permission.ENTERPRISE_GET_NETWORK_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用查询网络信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包括查询网卡设置、IP地址、MAC地址，网卡启用状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_install_bundle",
      children: "ohos.permission.ENTERPRISE_INSTALL_BUNDLE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用安装和卸载包。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_set_app_running_policy",
      children: "ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置应用运行管理策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_reset_device",
      children: "ohos.permission.ENTERPRISE_RESET_DEVICE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用恢复设备出厂设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_account_policy",
      children: "ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置账户管理策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如新增账号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_bundle_install_policy",
      children: "ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置包安装管理策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如设置包安装白名单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_datetime",
      children: "ohos.permission.ENTERPRISE_SET_DATETIME"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置系统时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包括设置系统时间值，禁止用户修改系统时间策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_network",
      children: "ohos.permission.ENTERPRISE_SET_NETWORK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置网络信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包括禁用、开启网卡。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_wifi",
      children: "ohos.permission.ENTERPRISE_SET_WIFI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置和查询WiFi信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可设置和查询WiFi禁用，设置WiFi连接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_subscribe_managed_event",
      children: "ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用订阅管理事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如应用安装事件、应用卸载事件和系统更新事件等。订阅成功后，事件触发时会通知MDM应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_restrict_policy",
      children: "ohos.permission.ENTERPRISE_RESTRICT_POLICY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理员下发和获取限制类策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如禁用HDC，禁用直连打印服务等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_screenoff_time",
      children: "ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理员设置系统休眠时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_usb",
      children: "ohos.permission.ENTERPRISE_MANAGE_USB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理员管理USB。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_network",
      children: "ohos.permission.ENTERPRISE_MANAGE_NETWORK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理员管理网络。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_certificate",
      children: "ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理员管理证书。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_get_settings",
      children: "ohos.permission.ENTERPRISE_GET_SETTINGS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理员查询“设置”应用数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_browser_policy",
      children: "ohos.permission.ENTERPRISE_SET_BROWSER_POLICY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备设置/取消浏览器策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionset_enterprise_info",
      children: "ohos.permission.SET_ENTERPRISE_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置企业信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "企业设备管理器激活后可设置企业组织信息，包括企业名称和描述信息，用于system UI展示设备被所属管理信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_security",
      children: "ohos.permission.ENTERPRISE_MANAGE_SECURITY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备设置安全管理策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_bluetooth",
      children: "ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置和查询蓝牙信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_system",
      children: "ohos.permission.ENTERPRISE_MANAGE_SYSTEM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理系统设置参数策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_wifi",
      children: "ohos.permission.ENTERPRISE_MANAGE_WIFI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置和查询WIFI信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_restrictions",
      children: "ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用管理限制策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_application",
      children: "ohos.permission.ENTERPRISE_MANAGE_APPLICATION"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用管理应用策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_location",
      children: "ohos.permission.ENTERPRISE_MANAGE_LOCATION"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置和查询位置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_reboot",
      children: "ohos.permission.ENTERPRISE_REBOOT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用进行关机重启操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_lock_device",
      children: "ohos.permission.ENTERPRISE_LOCK_DEVICE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用锁定设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_settings",
      children: "ohos.permission.ENTERPRISE_MANAGE_SETTINGS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用管理设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_operate_device",
      children: "ohos.permission.ENTERPRISE_OPERATE_DEVICE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用操作设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_admin_manage",
      children: "ohos.permission.ENTERPRISE_ADMIN_MANAGE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用管理设备管理应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_recovery_key",
      children: "ohos.permission.ENTERPRISE_RECOVERY_KEY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用管理企业级恢复密钥。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_delegated_policy",
      children: "ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用委托其他应用设置设备管控策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_get_all_bundle_info",
      children: "ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用获取设备所有应用信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_user_restriction",
      children: "ohos.permission.ENTERPRISE_SET_USER_RESTRICTION"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用限制用户修改系统设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_apn",
      children: "ohos.permission.ENTERPRISE_MANAGE_APN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用管理设备APN策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_telephony",
      children: "ohos.permission.ENTERPRISE_MANAGE_TELEPHONY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用管理设备通话策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_kiosk",
      children: "ohos.permission.ENTERPRISE_SET_KIOSK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置Kiosk模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_local_publicspaces",
      children: "ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许企业应用启用、创建、删除工作空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取此权限后，应用可以设置空间切换免密登录时间、用户照片、不允许删除的空间列表等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：PC/2in1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_file_transfer_audit_policy_management",
      children: "ohos.permission.ENTERPRISE_FILE_TRANSFER_AUDIT_POLICY_MANAGEMENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许MDM应用管理文件传输的策略和审计信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：PC/2in1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_set_wallpaper",
      children: "ohos.permission.ENTERPRISE_SET_WALLPAPER"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用设置壁纸。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionmanage_preinstalled_antivirus",
      children: "ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许MDM应用管理系统预装的防病毒软件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：PC/2in1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_user_grant_permission",
      children: "ohos.permission.ENTERPRISE_MANAGE_USER_GRANT_PERMISSION"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用（MDM）设置user_grant类权限策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取该权限后，MDM应用可设置被管理应用user_grant类权限策略，策略支持静默授予，拒绝授予以及默认（即不影响应用申请）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_data_identify_file",
      children: "ohos.permission.ENTERPRISE_DATA_IDENTIFY_FILE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许MDM应用识别文件敏感内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：PC/2in1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_access_dlp_file",
      children: "ohos.permission.ENTERPRISE_ACCESS_DLP_FILE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用（MDM）生成、解密DLP文件，查询DLP文件策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：PC/2in1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：在API20，该权限面向系统应用开放；从API 21开始，面向MDM应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_manage_device_admin",
      children: "ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用管理其他设备管理应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取该权限后，超级设备管理应用可管理其他设备管理应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_start_abilities",
      children: "ohos.permission.ENTERPRISE_START_ABILITIES"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用访问其他组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_read_log",
      children: "ohos.permission.ENTERPRISE_READ_LOG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许MDM应用收集系统日志。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionenterprise_deactivate_device_admin",
      children: "ohos.permission.ENTERPRISE_DEACTIVATE_DEVICE_ADMIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许已激活的MDM应用解除自身的激活状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), "：系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：23"]
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
891760(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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