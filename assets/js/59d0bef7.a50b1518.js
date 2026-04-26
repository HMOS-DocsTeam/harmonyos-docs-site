"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["992780"], {
97232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_app_permissions_restricted_permissions_restricted_permissions_md_59d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-app-permissions-restricted-permissions-restricted-permissions-md-59d.json
var site_docs_system_security_access_control_app_permission_mgmt_app_permissions_restricted_permissions_restricted_permissions_md_59d_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions/restricted-permissions","title":"受限开放权限","description":"申请方式","source":"@site/docs/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions/restricted-permissions.md","sourceDirName":"system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions","slug":"/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"受限开放权限","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开放权限（用户授权）","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user/"},"next":{"title":"企业类应用可用权限","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-enterprise-apps/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions/restricted-permissions.md


const frontMatter = {
	title: '受限开放权限',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '受限开放权限';

const assets = {

};



const toc = [{
  "value": "申请方式",
  "id": "申请方式",
  "level": 2
}, {
  "value": "ohos.permission.SYSTEM_FLOAT_WINDOW",
  "id": "ohospermissionsystem_float_window",
  "level": 2
}, {
  "value": "ohos.permission.READ_CONTACTS",
  "id": "ohospermissionread_contacts",
  "level": 2
}, {
  "value": "ohos.permission.WRITE_CONTACTS",
  "id": "ohospermissionwrite_contacts",
  "level": 2
}, {
  "value": "ohos.permission.READ_AUDIO",
  "id": "ohospermissionread_audio",
  "level": 2
}, {
  "value": "ohos.permission.WRITE_AUDIO",
  "id": "ohospermissionwrite_audio",
  "level": 2
}, {
  "value": "ohos.permission.READ_IMAGEVIDEO",
  "id": "ohospermissionread_imagevideo",
  "level": 2
}, {
  "value": "ohos.permission.WRITE_IMAGEVIDEO",
  "id": "ohospermissionwrite_imagevideo",
  "level": 2
}, {
  "value": "ohos.permission.READ_WRITE_DESKTOP_DIRECTORY",
  "id": "ohospermissionread_write_desktop_directory",
  "level": 2
}, {
  "value": "ohos.permission.ACCESS_DDK_USB",
  "id": "ohospermissionaccess_ddk_usb",
  "level": 2
}, {
  "value": "ohos.permission.ACCESS_DDK_HID",
  "id": "ohospermissionaccess_ddk_hid",
  "level": 2
}, {
  "value": "ohos.permission.READ_PASTEBOARD",
  "id": "ohospermissionread_pasteboard",
  "level": 2
}, {
  "value": "ohos.permission.FILE_ACCESS_PERSIST",
  "id": "ohospermissionfile_access_persist",
  "level": 2
}, {
  "value": "ohos.permission.INTERCEPT_INPUT_EVENT",
  "id": "ohospermissionintercept_input_event",
  "level": 2
}, {
  "value": "ohos.permission.INPUT_MONITORING",
  "id": "ohospermissioninput_monitoring",
  "level": 2
}, {
  "value": "ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO",
  "id": "ohospermissionshort_term_write_imagevideo",
  "level": 2
}, {
  "value": "ohos.permission.READ_WRITE_USER_FILE",
  "id": "ohospermissionread_write_user_file",
  "level": 2
}, {
  "value": "ohos.permission.READ_WRITE_USB_DEV",
  "id": "ohospermissionread_write_usb_dev",
  "level": 2
}, {
  "value": "ohos.permission.GET_WIFI_PEERS_MAC",
  "id": "ohospermissionget_wifi_peers_mac",
  "level": 2
}, {
  "value": "ohos.permission.SET_TELEPHONY_ESIM_STATE_OPEN",
  "id": "ohospermissionset_telephony_esim_state_open",
  "level": 2
}, {
  "value": "ohos.permission.kernel.DISABLE_CODE_MEMORY_PROTECTION",
  "id": "ohospermissionkerneldisable_code_memory_protection",
  "level": 2
}, {
  "value": "ohos.permission.kernel.ALLOW_WRITABLE_CODE_MEMORY",
  "id": "ohospermissionkernelallow_writable_code_memory",
  "level": 2
}, {
  "value": "ohos.permission.kernel.ALLOW_EXECUTABLE_FORT_MEMORY",
  "id": "ohospermissionkernelallow_executable_fort_memory",
  "level": 2
}, {
  "value": "ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION",
  "id": "ohospermissionmanage_pasteboard_app_share_option",
  "level": 2
}, {
  "value": "ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION",
  "id": "ohospermissionmanage_udmf_app_share_option",
  "level": 2
}, {
  "value": "ohos.permission.ACCESS_DISK_PHY_INFO",
  "id": "ohospermissionaccess_disk_phy_info",
  "level": 2
}, {
  "value": "ohos.permission.PRELOAD_FILE",
  "id": "ohospermissionpreload_file",
  "level": 2
}, {
  "value": "ohos.permission.SET_PAC_URL",
  "id": "ohospermissionset_pac_url",
  "level": 2
}, {
  "value": "ohos.permission.PERSONAL_MANAGE_RESTRICTIONS",
  "id": "ohospermissionpersonal_manage_restrictions",
  "level": 2
}, {
  "value": "ohos.permission.START_PROVISIONING_MESSAGE",
  "id": "ohospermissionstart_provisioning_message",
  "level": 2
}, {
  "value": "ohos.permission.USE_FRAUD_CALL_LOG_PICKER",
  "id": "ohospermissionuse_fraud_call_log_picker",
  "level": 2
}, {
  "value": "ohos.permission.USE_FRAUD_MESSAGES_PICKER",
  "id": "ohospermissionuse_fraud_messages_picker",
  "level": 2
}, {
  "value": "ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC",
  "id": "ohospermissionpersistent_bluetooth_peers_mac",
  "level": 2
}, {
  "value": "ohos.permission.ACCESS_VIRTUAL_SCREEN",
  "id": "ohospermissionaccess_virtual_screen",
  "level": 2
}, {
  "value": "ohos.permission.MANAGE_APN_SETTING",
  "id": "ohospermissionmanage_apn_setting",
  "level": 2
}, {
  "value": "ohos.permission.GET_WIFI_LOCAL_MAC",
  "id": "ohospermissionget_wifi_local_mac",
  "level": 2
}, {
  "value": "ohos.permission.kernel.ALLOW_USE_JITFORT_INTERFACE",
  "id": "ohospermissionkernelallow_use_jitfort_interface",
  "level": 2
}, {
  "value": "ohos.permission.GET_ETHERNET_LOCAL_MAC",
  "id": "ohospermissionget_ethernet_local_mac",
  "level": 2
}, {
  "value": "ohos.permission.kernel.DISABLE_GOTPLT_RO_PROTECTION",
  "id": "ohospermissionkerneldisable_gotplt_ro_protection",
  "level": 2
}, {
  "value": "ohos.permission.USE_FRAUD_APP_PICKER",
  "id": "ohospermissionuse_fraud_app_picker",
  "level": 2
}, {
  "value": "ohos.permission.ACCESS_DDK_DRIVERS",
  "id": "ohospermissionaccess_ddk_drivers",
  "level": 2
}, {
  "value": "ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL",
  "id": "ohospermissionaccess_ddk_scsi_peripheral",
  "level": 2
}, {
  "value": "ohos.permission.kernel.SUPPORT_PLUGIN",
  "id": "ohospermissionkernelsupport_plugin",
  "level": 2
}, {
  "value": "ohos.permission.CUSTOM_SANDBOX",
  "id": "ohospermissioncustom_sandbox",
  "level": 2
}, {
  "value": "ohos.permission.MANAGE_SCREEN_TIME_GUARD",
  "id": "ohospermissionmanage_screen_time_guard",
  "level": 2
}, {
  "value": "ohos.permission.CUSTOMIZE_SAVE_BUTTON",
  "id": "ohospermissioncustomize_save_button",
  "level": 2
}, {
  "value": "ohos.permission.GET_ABILITY_INFO",
  "id": "ohospermissionget_ability_info",
  "level": 2
}, {
  "value": "ohos.permission.ACCESS_FIDO2_ONLINEAUTH",
  "id": "ohospermissionaccess_fido2_onlineauth",
  "level": 2
}, {
  "value": "ohos.permission.USE_FLOAT_BALL",
  "id": "ohospermissionuse_float_ball",
  "level": 2
}, {
  "value": "ohos.permission.DLP_GET_HIDE_STATUS",
  "id": "ohospermissiondlp_get_hide_status",
  "level": 2
}, {
  "value": "ohos.permission.READ_LOCAL_DEVICE_NAME",
  "id": "ohospermissionread_local_device_name",
  "level": 2
}, {
  "value": "ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM",
  "id": "ohospermissionkeep_background_running_system",
  "level": 2
}, {
  "value": "ohos.permission.LINKTURBO",
  "id": "ohospermissionlinkturbo",
  "level": 2
}, {
  "value": "ohos.permission.ACCESS_NET_TRACE_INFO",
  "id": "ohospermissionaccess_net_trace_info",
  "level": 2
}, {
  "value": "ohos.permission.READ_WHOLE_CALENDAR",
  "id": "ohospermissionread_whole_calendar",
  "level": 2
}, {
  "value": "ohos.permission.WRITE_WHOLE_CALENDAR",
  "id": "ohospermissionwrite_whole_calendar",
  "level": 2
}, {
  "value": "ohos.permission.SET_SYSTEMSHARE_APPLAUNCHTRUSTLIST",
  "id": "ohospermissionset_systemshare_applaunchtrustlist",
  "level": 2
}, {
  "value": "ohos.permission.HOOK_KEY_EVENT",
  "id": "ohospermissionhook_key_event",
  "level": 2
}, {
  "value": "ohos.permission.WEB_NATIVE_MESSAGING",
  "id": "ohospermissionweb_native_messaging",
  "level": 2
}, {
  "value": "ohos.permission.SUBSCRIBE_NOTIFICATION",
  "id": "ohospermissionsubscribe_notification",
  "level": 2
}, {
  "value": "ohos.permission.CUSTOM_SCREEN_RECORDING",
  "id": "ohospermissioncustom_screen_recording",
  "level": 2
}, {
  "value": "ohos.permission.ALLOW_EXTERNAL_NATIVE_CODE",
  "id": "ohospermissionallow_external_native_code",
  "level": 2
}, {
  "value": "ohos.permission.GET_IP_MAC_INFO",
  "id": "ohospermissionget_ip_mac_info",
  "level": 2
}, {
  "value": "ohos.permission.atomicService.MANAGE_AGING",
  "id": "ohospermissionatomicservicemanage_aging",
  "level": 2
}, {
  "value": "ohos.permission.ACCESS_USER_FULL_DISK",
  "id": "ohospermissionaccess_user_full_disk",
  "level": 2
}, {
  "value": "ohos.permission.kernel.LOAD_INDEPENDENT_LIBRARY",
  "id": "ohospermissionkernelload_independent_library",
  "level": 2
}, {
  "value": "ohos.permission.CRYPTO_EXTENSION_REGISTER",
  "id": "ohospermissioncrypto_extension_register",
  "level": 2
}, {
  "value": "ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC",
  "id": "ohospermissionmanage_media_resources_for_public",
  "level": 2
}, {
  "value": "ohos.permission.MANAGE_CALL_FOR_DEVICES",
  "id": "ohospermissionmanage_call_for_devices",
  "level": 2
}, {
  "value": "ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME",
  "id": "ohospermissionmanage_bluetooth_advertiser_name",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "受限开放权限",
        children: "受限开放权限"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请方式",
      children: "申请方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅少量符合特殊场景的应用可在通过审批后，使用受限权限，其申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请使用受限权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(726706)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果应用涉及获取受限权限，在应用发布上架时，应用市场（AGC，AppGallery Connect）将根据应用的使用场景审核是否可以使用对应的受限权限。如不符合，应用的上架申请将被驳回，审核方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-0000002271695230",
        children: "发布HarmonyOS应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionsystem_float_window",
      children: "ohos.permission.SYSTEM_FLOAT_WINDOW"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用悬浮窗的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多人视频通话"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "屏幕共享"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅PC/2in1设备应用可申请此权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(384772)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用基于悬浮窗提供的窗口界面，必须向用户提供退出窗口的方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他场景下的使用方案："
        })
      }), " 在其他设备或场景下，使用“画中画”功能，使用方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-pipwindow",
        children: "画中画开发指导"
      }), "。"]
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
      }), "：7"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionread_contacts",
      children: "ohos.permission.READ_CONTACTS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用读取联系人数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要克隆、备份或同步联系人信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要批量读取本机通讯录数据，并同步到云端服务器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要批量读取通讯录数据，在设备间进行同步或者克隆操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他场景下的使用方案："
        })
      }), " 使用“联系人Picker”访问联系人数据，使用方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/contacts-kit/contacts-intro#%E4%BD%BF%E7%94%A8picker%E9%80%89%E6%8B%A9%E8%81%94%E7%B3%BB%E4%BA%BA",
        children: "使用Picker选择联系人"
      }), "。"]
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionwrite_contacts",
      children: "ohos.permission.WRITE_CONTACTS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用添加、移除或更改联系人数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要克隆、备份或同步联系人信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要把从云端服务器读取的通讯录数据批量写入到本地通讯录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要把从其他设备同步过来的通讯录数据批量写入通讯录。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他场景下的使用方案："
        })
      }), " 除以上特殊场景外，应用不能修改联系人数据，应引导用户到“联系人”应用中修改联系人数据。"]
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionread_audio",
      children: "ohos.permission.READ_AUDIO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许读取用户公共目录的音频文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要克隆、备份或同步音频类文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要批量读取公共目录下的音频文件，并同步到云端服务器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要批量读取公共目录下的音频文件，在设备间进行同步或者克隆操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他场景下的使用方案："
        })
      }), " 使用“AudioPicker”访问用户音频文件，使用方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/user-files/select-save-user-file/select-user-file#%E9%80%89%E6%8B%A9%E9%9F%B3%E9%A2%91%E7%B1%BB%E6%96%87%E4%BB%B6",
        children: "选择音频类文件（FilePicker）"
      }), "。"]
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionwrite_audio",
      children: "ohos.permission.WRITE_AUDIO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许修改用户公共目录的音频文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要克隆、备份或同步音频类文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要把从云端服务器读取的音频文件批量保存到本地公共目录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要把从其他设备同步过来的音频文件批量保存到本地公共目录。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他场景下的使用方案："
        })
      }), " 使用“AudioPicker”保存用户音频文件，使用方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/user-files/select-save-user-file/save-user-file#%E4%BF%9D%E5%AD%98%E9%9F%B3%E9%A2%91%E7%B1%BB%E6%96%87%E4%BB%B6",
        children: "保存音频类文件（FilePicker）"
      }), "。"]
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionread_imagevideo",
      children: "ohos.permission.READ_IMAGEVIDEO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许读取用户公共目录的图片或视频文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要克隆、备份或同步图片/视频类文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要批量读取媒体库的文件（图片、视频），并同步到云端服务器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要批量读取媒体库的文件（图片、视频），在设备间进行同步或者克隆操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他场景下的使用方案："
        })
      }), " 使用“PhotoViewPicker”访问用户图片或视频，使用方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-photoviewpicker",
        children: "使用Picker选择媒体库资源"
      }), "。"]
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionwrite_imagevideo",
      children: "ohos.permission.WRITE_IMAGEVIDEO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许修改用户公共目录的图片或视频文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要克隆、备份或同步图片/视频类文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用内包含拍照和录制场景，且应用属于典型的拍照应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无法使用安全控件或授权弹窗保存图片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要把从云端服务器读取的图片、视频文件批量保存到本地媒体库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要把从其他设备同步过来的图片、视频文件批量保存到本地媒体库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用作为典型拍照类应用，在拍照或录制视频后，需要将照片、视频直接存入本地媒体库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用采用了如RN框架、QT框架等开源框架，无法使用安全控件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他场景下的使用方案："
        })
      }), " 使用安全控件或授权弹窗的方式，将用户指定的媒体资源保存到图库中，使用方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-savebutton",
        children: "保存媒体库资源"
      }), "。"]
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionread_write_desktop_directory",
      children: "ohos.permission.READ_WRITE_DESKTOP_DIRECTORY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用访问公共目录下Desktop目录及子目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅2in1设备和平板上的应用可申请此权限。"
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionaccess_ddk_usb",
      children: "ohos.permission.ACCESS_DDK_USB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许扩展外设驱动访问USB DDK接口开发USB总线扩展外设驱动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "外接设备总线类型为USB总线，用于支持外接设备实现相应的功能，如外接指纹采集、打印机、身份证、指纹识别等外接设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅PC/2in1设备应用可申请此权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除上述场景外，应用不需要使用此权限保护的系统能力，不涉及申请此权限。"
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
      id: "ohospermissionaccess_ddk_hid",
      children: "ohos.permission.ACCESS_DDK_HID"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许扩展外设驱动访问HID DDK接口开发HID类扩展外设驱动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "外接设备为人机交互外设（ HID外设），可支持外接设备与主机实现人机交互功能，如外接手写板、游戏手柄、键鼠等HID输入外设。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅PC/2in1设备应用可申请此权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除上述场景外，应用不需要使用此权限保护的系统能力，不涉及申请此权限。"
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
      id: "ohospermissionread_pasteboard",
      children: "ohos.permission.READ_PASTEBOARD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用读取剪贴板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PC/2in1设备上的应用均可申请。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(300056)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在PC/2in1设备上，应用首次申请剪贴板权限时，不会向用户弹窗申请，系统将默认授予“允许”。但用户可以在“设置 > 隐私与安全”的页面中修改授权方式。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "同时，用户在PC/2in1设备的“设置”界面中，仅可选择“允许”或“禁止”两种授权选项；其他设备有“始终允许”、“每次使用询问”、“禁止”三种授权选项。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他设备只有符合以下场景可申请："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "银行卡号复制：银行类应用需要读取剪贴板中的银行卡号自动生成卡片。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "口令复制：应用需要读取剪贴板中特定格式口令，自动打开应用内对应页面。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "文档编辑类应用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "输入法：系统级输入法需要读取剪贴板信息实现自动填充。应用内置输入法不能申请此权限。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用中使用了开源框架：由于不能使用粘贴控件，允许申请剪贴板权限。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，手机设备上运行的应用："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "某银行类应用，当用户复制银行卡号到剪贴板上时，用户打开该应用后，该应用需要读取剪贴板，判断是否是银行卡号后提醒用户是否需要进行转账等操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开应用后，应用需要读取剪贴板上数据，判断是否是应用内的特定口令数据，并自动打开相关页面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "作为典型的文档编辑类应用，需在手机上使用该应用进行文档编辑操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "作为系统级输入法应用，需要读取剪切板上数据（如验证码），实现自动填充功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他场景下的使用方案："
        })
      }), " 使用“粘贴控件”读取剪贴板数据，使用方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/security-components/pastebutton",
        children: "使用粘贴控件"
      }), "。"]
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionfile_access_persist",
      children: "ohos.permission.FILE_ACCESS_PERSIST"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用支持持久化访问文件Uri。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(768529)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限级别发生变更，API 12后仍需采用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "受限权限申请方式"
      }), "申请使用该权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), "：normal"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息："
        })
      }), " 在API 11，权限等级为system_basic；从API 12开始，权限等级变更为normal，向普通应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionintercept_input_event",
      children: "ohos.permission.INTERCEPT_INPUT_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用拦截输入事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用为云桌面或是远程登录客户端，需要在本地设备显示远端服务端的云电脑，或是显示远程电脑的画面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅PC/2in1设备应用可申请此权限。"
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：API 11，权限等级为system_core；从API 12开始，权限等级变更为system_basic，向普通应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissioninput_monitoring",
      children: "ohos.permission.INPUT_MONITORING"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用监听输入事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要录屏，且录屏过程中有显示键盘按键事件，或是显示鼠标指针效果/触摸效果的功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要共享桌面。"
      }), "\n"]
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
      }), "：7"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：API 7-11，权限等级为system_core；从API 12开始，权限等级变更为system_basic，向普通应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionshort_term_write_imagevideo",
      children: "ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用保存图片、视频到用户公共目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用获取此权限后，最长可获得30分钟的短时授权，来保存图片/视频。如果超过30分钟，将再次弹窗，需要用户再次确认。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用无法使用安全保存控件，例如H5网页应用等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "存在连续多次保存图片/视频的场景，无法使用保存确认弹框，一次保存多个图片/视频。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他场景下的使用方案："
        })
      }), " 使用安全控件或授权弹窗的方式，将用户指定的媒体资源保存到图库中，使用方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-savebutton",
        children: "保存媒体库资源"
      }), "。"]
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionread_write_user_file",
      children: "ohos.permission.READ_WRITE_USER_FILE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用访问并修改用户目录下的文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用为IDE或其他开发调测工具，需要读写PC/2in1设备上的用户目录，如创建软链接，或通过命令行工具操作用户目录文件等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅PC/2in1设备应用可申请此权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅面向受邀应用开放，非受邀应用在应用市场（AGC）上无法申请该权限。"
      }), "\n"]
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
      }), "：13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionread_write_usb_dev",
      children: "ohos.permission.READ_WRITE_USB_DEV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用连接设备，并通过USB调试读写该设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用为IDE或其他开发调测工具，需要连接HarmonyOS设备进行开发调试，如查看该设备上的应用日志、进行性能分析等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅PC/2in1设备应用可申请此权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅面向受邀应用开放，非受邀应用在应用市场（AGC）上无法申请该权限。"
      }), "\n"]
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
      }), "：13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionget_wifi_peers_mac",
      children: "ohos.permission.GET_WIFI_PEERS_MAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用获取对端Wi-Fi设备的MAC地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在获取Wi-Fi扫描结果时，如果需要获取对端设备的MAC地址，则需要申请该权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用于智能家居设备、智能穿戴设备等IOT智能设备联网时，可申请此权限。"
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
      }), "：8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：API 8-13，权限等级为system_core；从API 14开始，权限等级变更为system_basic，向普通应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionset_telephony_esim_state_open",
      children: "ohos.permission.SET_TELEPHONY_ESIM_STATE_OPEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许运营商应用添加eSIM配置文件。"
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
      }), "：13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：在API 13，权限等级为normal；从API 14开始，权限等级变更为system_basic。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionkerneldisable_code_memory_protection",
      children: "ohos.permission.kernel.DISABLE_CODE_MEMORY_PROTECTION"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用禁用本应用的代码运行时完整性保护。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要在运行时修改指令内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅平板、PC/2in1设备应用可申请此权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅面向受邀应用开放，非受邀应用在应用市场（AGC）上无法申请该权限。"
      }), "\n"]
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
      id: "ohospermissionkernelallow_writable_code_memory",
      children: "ohos.permission.kernel.ALLOW_WRITABLE_CODE_MEMORY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用申请可写可执行匿名内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅提供给应用开启自带引擎的即时编译能力，不允许用于热更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "申请该权限的应用需要主动适配坚盾模式，在该模式下无闪退。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅平板、PC/2in1设备应用可申请此权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅面向受邀应用开放，非受邀应用在应用市场（AGC）上无法申请该权限。"
      }), "\n"]
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
      id: "ohospermissionkernelallow_executable_fort_memory",
      children: "ohos.permission.kernel.ALLOW_EXECUTABLE_FORT_MEMORY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许系统JS引擎申请带MAP_FORT标识的匿名可执行内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用申请此权限后，系统引擎可申请带MAP_FORT的匿名可执行内存，做即时编译，提高与形式执行效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅对游戏应用需要使用系统引擎实现高效游戏脚本解析的场景授予此权限。"
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
      id: "ohospermissionmanage_pasteboard_app_share_option",
      children: "ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用设置或移除剪贴板数据的可粘贴范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要自行设置或移除剪贴板数据的可粘贴范围时可申请。"
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
      id: "ohospermissionmanage_udmf_app_share_option",
      children: "ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用设置或移除其使用UDMF支持的数据分享范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要自行设置或移除其使用UDMF支持的数据分享范围时可申请。"
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
      id: "ohospermissionaccess_disk_phy_info",
      children: "ohos.permission.ACCESS_DISK_PHY_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用获取硬盘的硬件信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅提供给金融证券类应用使用，用于证券、股票交易。"
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
      }), "：15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionpreload_file",
      children: "ohos.permission.PRELOAD_FILE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用预加载文件以提升文件打开速度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅当应用为文档编辑类应用可申请此权限。"
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
      }), "：15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionset_pac_url",
      children: "ohos.permission.SET_PAC_URL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用设置代理自动配置脚本地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用完成脚本地址配置后，其他应用可读取此脚本并进行解析，根据解析结果决定是否使用代理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "企业应用需要设置内网代理管理企业流量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "党政及国家机关、事业单位及其受信任的企业应用需要设置国密代理访问安全类网站。"
      }), "\n"]
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
      }), "：15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionpersonal_manage_restrictions",
      children: "ohos.permission.PERSONAL_MANAGE_RESTRICTIONS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许设备管理应用管理个人设备限制策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅当应用为UAD（User as Developer）应用可申请此权限。"
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
      }), "：15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionstart_provisioning_message",
      children: "ohos.permission.START_PROVISIONING_MESSAGE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用启动设备管理业务部署流程，将该应用激活为个人设备管理应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅当应用为UAD（User as Developer）应用可申请此权限。"
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
      }), "：15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionuse_fraud_call_log_picker",
      children: "ohos.permission.USE_FRAUD_CALL_LOG_PICKER"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用诈骗通话记录选择器，获取通话记录内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅提供给反诈类应用使用。"
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
      }), "：15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionuse_fraud_messages_picker",
      children: "ohos.permission.USE_FRAUD_MESSAGES_PICKER"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用诈骗短信选择器，获取短信内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅提供给反诈类应用使用。"
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
      }), "：15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionpersistent_bluetooth_peers_mac",
      children: "ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用固化对端蓝牙设备MAC对应的虚拟地址。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过BLE扫描、BR扫描或连接监听获取到对端蓝牙设备MAC对应的虚拟地址，申请该权限且调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-access/js-apis-bluetooth-access#accessaddpersistentdeviceid16",
        children: "access.addPersistentDeviceId"
      }), "方法后，可保持该虚拟地址长时间存储，即使是开/关/重启蓝牙也不发生变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用通过蓝牙扫描功能连接智能家居、智能穿戴、智能出行等设备，以绑定用户使用的设备，用于显示设备的状态信息或控制设备时可申请此权限。"
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
      }), "：16"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionaccess_virtual_screen",
      children: "ohos.permission.ACCESS_VIRTUAL_SCREEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用管控虚拟屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获得该权限的应用可以调用虚拟屏相关接口管理虚拟屏，包括创建虚拟屏，使虚拟屏，销毁虚拟屏等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用连接车机，用于播放视频、使用地图导航等功能时可申请此权限。"
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
      }), "：16"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionmanage_apn_setting",
      children: "ohos.permission.MANAGE_APN_SETTING"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用读取或设置APN信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要连接移动数据专网进行办公时可申请此权限。"
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
      }), "：16"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionget_wifi_local_mac",
      children: "ohos.permission.GET_WIFI_LOCAL_MAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用获取本机的Wi-Fi设备的MAC地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证券交易：应用内进行证券交易，如股票、期货、债券交易等。适用设备：PC/2in1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网银交易及身份认证：应用内提供网上银行服务（如账户查询、转账汇款等），或为网银用户提供身份认证及签名验签工具。适用设备：PC/2in1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频类应用，适用设备：TV。"
      }), "\n"]
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
      }), "：8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：API 8-15该权限仅向系统应用开放；从API 16开始，在PC/2in1设备上面向普通应用开放，在其余设备上仍仅面向系统应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionkernelallow_use_jitfort_interface",
      children: "ohos.permission.kernel.ALLOW_USE_JITFORT_INTERFACE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用调用JITFort接口更新MAP_FORT内存的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用使用自己的脚本引擎，且需要开启即时编译优化性能。"
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
      }), "：16"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionget_ethernet_local_mac",
      children: "ohos.permission.GET_ETHERNET_LOCAL_MAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用查询以太网当前MAC地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证券交易：应用内进行证券交易，如股票、期货、债券交易等。适用设备：PC/2in1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网银交易及身份认证：应用内提供网上银行服务（如账户查询、转账汇款等），或为网银用户提供身份认证及签名验签工具。适用设备：PC/2in1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频类应用，适用设备：TV。"
      }), "\n"]
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
      }), "：13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：API 13，该权限仅面向MDM应用开放；从API 14开始，开放范围从MDM应用变为更为企业普通应用；从API 16开始，在PC/2in1设备上面向普通应用开放，在其余设备上仍仅面向系统应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionkerneldisable_gotplt_ro_protection",
      children: "ohos.permission.kernel.DISABLE_GOTPLT_RO_PROTECTION"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用关闭进程内.got.plt段的只读保护。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用功能所依赖的基础能力系统尚不支持，必须通过修改.got.plt表方式实现。在申请权限时需要明确说明系统不满足原因。"
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
      }), "：17"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionuse_fraud_app_picker",
      children: "ohos.permission.USE_FRAUD_APP_PICKER"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用诈骗应用选择器，获取应用信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅提供给反诈类应用使用。"
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
      }), "：18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionaccess_ddk_drivers",
      children: "ohos.permission.ACCESS_DDK_DRIVERS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许扩展外设驱动客户端绑定到扩展外设驱动服务端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该权限针对扩展外设客户端绑定到扩展外设服务端权限校验，具体规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "外设扩展驱动客户端权限声明中的value字段中描述的目标扩展驱动服务端已上架或一并上架。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "被申请目标扩展驱动服务端对外提供能力与扩展外设驱动客户端业务诉求一致。"
      }), "\n"]
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
          children: "携带额外数据"
        })
      }), "：是，配置方法请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/driver-development-kit/development-of-basic-drivers/externaldevice-guidelines#%E5%BA%94%E7%94%A8%E7%AD%BE%E5%90%8D",
        children: "Driver Development Kit开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionaccess_ddk_scsi_peripheral",
      children: "ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许扩展外设驱动访问SCSI DDK接口开发SCSI Peripheral扩展外设驱动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持以下类型的外设扩展驱动开发："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外设以USB总线接入主机，且满足："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "外设InterfaceClass为Mass Storage(0x08)、InterfaceSubClass为SCSI透明命令集(0x06)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "外设能够以对操作系统透明的方式来模拟SCSI设备。"
      }), "\n"]
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
      }), "：18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionkernelsupport_plugin",
      children: "ohos.permission.kernel.SUPPORT_PLUGIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许主体应用安装插件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应当有对应的插件机制，确保可以使用对应的插件，并符合插件市场的管理规定。"
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
      }), "：19"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissioncustom_sandbox",
      children: "ohos.permission.CUSTOM_SANDBOX"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用将沙箱类型改为动态沙箱。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "面向华为内部开发工具应用开放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅面向受邀应用开放，非受邀应用在应用市场（AGC）上无法申请该权限。"
      }), "\n"]
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
      }), "：18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionmanage_screen_time_guard",
      children: "ohos.permission.MANAGE_SCREEN_TIME_GUARD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用调用屏幕时间守护相关接口，进行屏幕使用限制、应用访问控制、管控使用时间等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "个人用机时间管理：以专注、习惯养成、自律为目的，用于用户管理自己的设备、应用使用情况，限制应用和屏幕访问。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "他人用机时间管理：以守护、看护、关怀为目的，用于学校/家长/企业管理学生/孩子/员工的设备、应用使用情况，限制应用和屏幕访问。"
      }), "\n"]
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
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissioncustomize_save_button",
      children: "ohos.permission.CUSTOMIZE_SAVE_BUTTON"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用自定义保存控件的图标和文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用保存控件提供的默认样式无法满足业务场景，应用需要自定义保存控件的图标和文本。"
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
      }), "：General"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionget_ability_info",
      children: "ohos.permission.GET_ABILITY_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用根据URI或者FileType查询Ability信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅PC/2in1上的浏览器类应用可申请此权限。"
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
      }), ": PC/2in1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionaccess_fido2_onlineauth",
      children: "ohos.permission.ACCESS_FIDO2_ONLINEAUTH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用通行密钥服务的NDK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要通过通行密钥服务完成网页免密认证。"
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
      id: "ohospermissionuse_float_ball",
      children: "ohos.permission.USE_FLOAT_BALL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用全局闪控球的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取该权限后，应用可实现跨应用交互，一步直达业务内以处理用户任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "申请条件："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用内需具备开启全局闪控球功能的独立开关，开关需默认关闭，需由用户主动开启。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "闪控球内呈现的内容及功能需与应用内实际功能匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "闪控球展示的内容不可用于营销、广告、引导付费等场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "须符合以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "题目搜索"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "账单记录"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商品比价"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "抢单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "翻译"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "金融类应用的实时盯盘"
      }), "\n"]
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
      }), "：Phone | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissiondlp_get_hide_status",
      children: "ohos.permission.DLP_GET_HIDE_STATUS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用信息隐藏接口，获取信息隐藏状态的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取此权限后，应用可以获取当前屏幕窥视状态，即当前是机主一人注视屏幕，还是有他人偷窥机主屏幕。"
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
      }), ": Phone"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：18"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：在API18-19，该权限面向系统应用开放；从API20开始，面向普通应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionread_local_device_name",
      children: "ohos.permission.READ_LOCAL_DEVICE_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用获取本机的设备显示名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取此权限后，应用可获取设置中“关于本机”页面的设备名称，否则只能获取设备出厂时的默认名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅当用户通过扫码跨设备登录时，可申请此权限用于应用内显示登录设备。"
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
      }), ": 系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), ": Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), ": 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionkeep_background_running_system",
      children: "ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用申请特殊类型长时任务，如在手机上申请计算任务类型的长时任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "商家版应用实现自动接单功能。"
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
      }), "：General"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionlinkturbo",
      children: "ohos.permission.LINKTURBO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用多网并发等网络加速能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取该权限后，应用可发起多网激活、监听、释放等相关操作，以实现多路径的传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音视频通话和会议、游戏、在线教育、长短视频、直播等在弱网环境下多网络分流或冗余传输，增强网络抗抖动性，提升传输可靠性，让业务更流畅。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "其他支持场景，如应用和服务器支持多网并发，可使用多IP并发传输时可申请。"
      }), "\n"]
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
      id: "ohospermissionaccess_net_trace_info",
      children: "ohos.permission.ACCESS_NET_TRACE_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用网络探测和获取TraceRoute信息的维测能力，用于检测网络时延较大的可能故障原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对网络时延敏感的音视频通话和会议、游戏、在线教育、直播等网络应用场景，提供网络维测能力，用于检测网络链路质量或故障。"
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
      }), "：General"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionread_whole_calendar",
      children: "ohos.permission.READ_WHOLE_CALENDAR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用读取所有的日历信息。"
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：在API 9-19，该权限面向系统应用开放；从API 20开始，面向普通应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionwrite_whole_calendar",
      children: "ohos.permission.WRITE_WHOLE_CALENDAR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用添加、移除或更改所有的日历活动。"
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
      }), "：用户授权（user_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：在API 9-19，该权限面向系统应用开放；从API 20开始，面向普通应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionset_systemshare_applaunchtrustlist",
      children: "ohos.permission.SET_SYSTEMSHARE_APPLAUNCHTRUSTLIST"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用配置系统分享的目标应用名单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取该权限后，应用可控制系统分享的目标应用范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "企业应用：限制内部数据分享到企业集团信任的应用。"
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
      }), "：21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionhook_key_event",
      children: "ohos.permission.HOOK_KEY_EVENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用拦截键盘输入事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取该权限后，应用可以在按键事件分发到应用窗口前，将自定义的按键处理过程添加到系统的按键处理过程中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证券登录或交易：应用内进行证券登录或交易，如股票、期货、债券交易等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网银交易或身份认证：应用内提供网上银行服务（如网银登陆、转账汇款等），或为网银用户提供身份认证的密码控件工具。"
      }), "\n"]
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
      }), "：手动设置授权（manual_settings）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), "：PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionweb_native_messaging",
      children: "ohos.permission.WEB_NATIVE_MESSAGING"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用Web本地通信能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用获取此权限后，可以使用web本地通信能力，使浏览器扩展与本地应用进行通信。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用为浏览器类应用，用户需要通过输入网址访问网页、浏览互联网资源。"
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
      }), "：21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionsubscribe_notification",
      children: "ohos.permission.SUBSCRIBE_NOTIFICATION"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用读取系统或者已安装应用发布的通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持展示通知的智能手表使用的穿戴应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取该权限后，可以读取系统或已安装应用发布的通知，然后通过蓝牙等短距离通信协议将这些通知转发至对应的手表，以展示通知消息。"
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
      }), "：Phone | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissioncustom_screen_recording",
      children: "ohos.permission.CUSTOM_SCREEN_RECORDING"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用无需弹窗录制屏幕。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取该权限后，应用在录制屏幕时不再每次弹出隐私告警弹窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用具有录屏功能，界面上有触发录屏的UI组件，触发后可录制系统画面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用具有远程登录功能，可以在本地设备上显示远程设备的画面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用具有共享桌面功能，共享时可将本设备画面共享给其他设备端显示。"
      }), "\n"]
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
      }), "：手动设置授权（manual_settings）"]
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
      }), "：22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionallow_external_native_code",
      children: "ohos.permission.ALLOW_EXTERNAL_NATIVE_CODE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用使用外部native程序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包括加载外部动态链接库(so)、二进制文件(bin)等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用为运行在PC/2in1上的工具类应用，如IDE、命令行工具等。"
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
      }), "：23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionget_ip_mac_info",
      children: "ohos.permission.GET_IP_MAC_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用获取网络设备的IP和MAC地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用获取网络设备的IP和MAC地址，用于网络连接或者识别，不支持用于设备定位。"
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
      }), "：General"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionatomicservicemanage_aging",
      children: "ohos.permission.atomicService.MANAGE_AGING"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许元服务申请差异化的老化策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当HarmonyOS小游戏需要延迟老化时，可申请此权限。如HarmonyOS小游戏是单机小游戏，游戏数据需要缓存在本地。"
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
      }), ": 系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), ": Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), ": 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionaccess_user_full_disk",
      children: "ohos.permission.ACCESS_USER_FULL_DISK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用无需弹窗访问用户公共路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取该权限后，应用在用户授权后访问用户公共路径，每次访问不再额外弹窗提示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "远程登录客户端类应用：可在本地设备上显示远程设备的画面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "杀毒类应用：需要全盘扫描以查杀病毒。"
      }), "\n"]
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
      }), "：手动设置授权（manual_settings）"]
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
      }), "：22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionkernelload_independent_library",
      children: "ohos.permission.kernel.LOAD_INDEPENDENT_LIBRARY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用加载二进制证书签名的共享库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "面向华为生态开发工具应用开放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "风险说明："
        })
      }), " 由于该权限允许加载未经审核的代码，可能会影响应用自身的安全，需开发者谨慎使用。"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变更信息"
        })
      }), "：在API 20-21，该权限面向系统应用开放；从API 22开始，面向普通应用开放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissioncrypto_extension_register",
      children: "ohos.permission.CRYPTO_EXTENSION_REGISTER"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用注册和注销crypto扩展。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKey厂商开发者。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具有Ukey厂商合作资质证明的银行金融类应用。"
      }), "\n"]
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
      }), ": 系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), ": PC/2in1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), ": 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionmanage_media_resources_for_public",
      children: "ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用获取和管理当前设备正在播放的媒体资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用为手表、IoT等外部设备配套的控制应用。"
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
      }), ": 系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), ": Phone | PC/2in1 | Tablet | TV | Car"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), ": 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionmanage_call_for_devices",
      children: "ohos.permission.MANAGE_CALL_FOR_DEVICES"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用管理通话状态。如获取来电号码、接听、拒接、挂断等."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "申请当前权限的hap为三方穿戴类设备的配套应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该hap应用有明确的获取通话状态、控制通话的应用场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限级别"
        })
      }), ": system_basic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "授权方式"
        })
      }), ": 系统授权（system_grant）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持设备"
        })
      }), ": Phone | PC/2in1 | Tablet"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), ": 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionmanage_bluetooth_advertiser_name",
      children: "ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许应用自定义BLE广播名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可申请此权限的特殊场景与功能："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要发送携带自定义广播名称的BLE广播与周围设备进行通信。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用发送携带自定义名称的BLE广播，周围设备扫描到该广播后，通过名称识别到是需要的设备，进而向该设备发起连接。"
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
      }), "：General"]
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
768529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
384772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
300056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
726706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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