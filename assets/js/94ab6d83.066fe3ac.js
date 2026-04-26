"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["86641"], {
814721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_system_app_startup_system_app_startup_md_94a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-system-app-startup-system-app-startup-md-94a.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_system_app_startup_system_app_startup_md_94a_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/system-app-startup/system-app-startup","title":"拉起系统应用","description":"本章节介绍拉起系统应用的方式，以及支持跳转系统应用的能力清单。","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/system-app-startup/system-app-startup.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/system-app-startup","slug":"/ability-kit/stage-model-development/inter-app-redirection/system-app-startup/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/system-app-startup/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"拉起系统应用","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/system-app-startup","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起文件处理类应用（startAbility）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup/"},"next":{"title":"进程模型","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/process-model-stage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/system-app-startup/system-app-startup.md


const frontMatter = {
	title: '拉起系统应用',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/system-app-startup',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起系统应用';

const assets = {

};



const toc = [{
  "value": "拉起系统应用的方式",
  "id": "拉起系统应用的方式",
  "level": 2
}, {
  "value": "支持跳转系统应用的能力清单",
  "id": "支持跳转系统应用的能力清单",
  "level": 2
}, {
  "value": "设置",
  "id": "设置",
  "level": 3
}, {
  "value": "应用市场",
  "id": "应用市场",
  "level": 3
}, {
  "value": "钱包",
  "id": "钱包",
  "level": 3
}, {
  "value": "电话",
  "id": "电话",
  "level": 3
}, {
  "value": "日历",
  "id": "日历",
  "level": 3
}, {
  "value": "联系人",
  "id": "联系人",
  "level": 3
}, {
  "value": "地图",
  "id": "地图",
  "level": 3
}, {
  "value": "相机",
  "id": "相机",
  "level": 3
}, {
  "value": "文件管理",
  "id": "文件管理",
  "level": 3
}, {
  "value": "图库（媒体库）",
  "id": "图库媒体库",
  "level": 3
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "拉起系统应用",
        children: "拉起系统应用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍拉起系统应用的方式，以及支持跳转系统应用的能力清单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拉起系统应用的方式",
      children: "拉起系统应用的方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拉起系统应用除了使用前面章节介绍的方式（比如使用openLink拉起指定应用、使用startAbilityByType指定类型的应用），还可以采用如下方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用系统Picker组件"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相机、文件管理、联系人等系统应用提供了系统Picker组件，支持开发者无需申请权限、即可使用系统应用的一些常用功能，比如访问用户的资源文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用拉起系统Picker组件（文件选择器、照片选择器、联系人选择器等）后，由用户在Picker上选择对应的文件、照片、联系人等资源，应用即可获取到Picker的返回结果。例如，一个音频播放器应用可以通过AudioViewPicker让用户选择音频文件，然后获取所选的音频文件路径进行播放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(595793)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于系统Picker已经获取了对应权限的预授权，开发者使用系统Picker时，无需再次申请权限也可临时受限访问对应的资源。例如，当应用需要读取用户图片时，可通过使用照片Picker，在用户选择所需要的图片资源后，直接返回该图片资源，而不需要授予应用读取图片文件的权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统Picker由系统独立进程实现。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用特定接口"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置、电话、日历等应用提供了一些接口，通过这些接口可以直接跳转系统应用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持跳转系统应用的能力清单",
      children: "支持跳转系统应用的能力清单"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置",
      children: "设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持直接拉起设置应用中如下功能界面，未列出的暂不支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "权限设置："
            })
          }), " 当应用通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "接口拉起权限申请弹框时，如果用户拒绝授权，将无法使用该接口再次拉起弹框，需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissiononsetting12",
            children: "requestPermissionOnSetting"
          }), "接口拉起权限设置弹窗。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second",
            children: "二次向用户申请授权"
          }), "介绍了如何拉起权限设置弹窗。该文档中的示例代码同样适用于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permission-group-list",
            children: "应用权限组列表"
          }), "中的所有权限，只需将对应的权限名进行替换即可。以下为开发者经常用到的一些场景。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "拉起位置权限设置弹窗"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "拉起相机权限设置弹窗"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "拉起图片与视频权限设置弹窗"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "拉起音乐和音频权限设置弹窗"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "拉起通讯录权限设置弹窗"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "拉起日历权限设置弹窗"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "通知管理："
            })
          }), " 当应用通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagerrequestenablenotification10",
            children: "requestEnableNotification()"
          }), "接口拉起通知授权弹框时，如果用户拒绝授权，将无法使用该接口再次拉起弹框，需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanageropennotificationsettings13",
            children: "openNotificationSettings()"
          }), "接口，支持拉起通知管理弹窗。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "网络管理："
            })
          }), " 当应用需要通过WLAN连接网络时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-settings/js-apis-settings#settingsopennetworkmanagersettings18",
            children: "openNetworkManagerSettings()"
          }), "接口拉起WLAN设置弹窗。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用市场",
      children: "应用市场"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-introduction",
        children: "AppGallery Kit"
      }), "支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#section144826162913",
        children: "loadProduct()"
      }), "接口、App Linking等多种方式拉起应用详情页。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-productview#section729012543213",
        children: "应用详情页展示"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "钱包",
      children: "钱包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-introduction",
        children: "Payment Kit"
      }), "提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
        children: "requestPayment"
      }), "接口，可以实现单次支付、支付并签约。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "电话",
      children: "电话"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/telephony-kit/telephony-overview",
        children: "Telephony Kit"
      }), "提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#callmakecall7",
        children: "makeCall()"
      }), "接口，支持跳转到拨号界面，并显示待拨出的号码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日历",
      children: "日历"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/calendar-kit/calendarmanager-overview",
        children: "Calendar Kit"
      }), "提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#addevent",
        children: "addEvent"
      }), "接口，用于创建日程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "联系人",
      children: "联系人"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/contacts-kit/contacts-intro",
        children: "Contacts Kit"
      }), "提供联系人Picker（Contacts Picker），用于拉起联系人应用，读取联系人数据。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/contacts-kit/contacts-intro#%E4%BD%BF%E7%94%A8picker%E9%80%89%E6%8B%A9%E8%81%94%E7%B3%BB%E4%BA%BA",
        children: "选择联系人"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "地图",
      children: "地图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-introduction",
        children: "Map Kit"
      }), "提供了地图Picker，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-advanced-controls/map-location-details",
        children: "地点详情展示"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-advanced-controls/map-location-selecting",
        children: "地点选取"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-advanced-controls/map-location-division",
        children: "区划选择"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "相机",
      children: "相机"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-picker",
          children: "拍照录像"
        }), "：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-overview",
          children: "Camera Kit"
        }), "提供了相机Picker，用于拍照、录像。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/scan-kit-guide/scan-scanbarcode",
          children: "扫码"
        }), " ：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/scan-kit-guide/scan-introduction",
          children: "Scan Kit"
        }), "提供了扫码Picker，支持调用相机，实现默认界面扫码。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/vision-kit-guide/vision-cardrecognition",
          children: "卡证识别"
        }), "：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/vision-kit-guide/vision-introduction",
          children: "Vision Kit"
        }), "提供了卡证识别Picker，支持调用相机，识别各类证件并提取卡证信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/vision-kit-guide/vision-documentscanner",
          children: "文档扫描"
        }), " ：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/vision-kit-guide/vision-introduction",
          children: "Vision Kit"
        }), "提供了文档扫描Picker，支持调用相机，拍摄文档并转化为高清扫描件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件管理",
      children: "文件管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/core-file-kit-intro",
        children: "Core File Kit"
      }), "提供了文件Picker和音频Picker。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["文件Picker（DocumentViewPicker）：用于访问、保存公共目录中文档类文件。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/select-save-user-file/select-user-file#%E9%80%89%E6%8B%A9%E6%96%87%E6%A1%A3%E7%B1%BB%E6%96%87%E4%BB%B6",
          children: "选择文档类文件"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/select-save-user-file/save-user-file#%E4%BF%9D%E5%AD%98%E6%96%87%E6%A1%A3%E7%B1%BB%E6%96%87%E4%BB%B6",
          children: "保存文档类文件"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["音频Picker（AudioViewPicker）：用于访问、保存公共目录的音频文件。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/select-save-user-file/select-user-file#%E9%80%89%E6%8B%A9%E9%9F%B3%E9%A2%91%E7%B1%BB%E6%96%87%E4%BB%B6",
          children: "选择音频类文件"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/select-save-user-file/save-user-file#%E4%BF%9D%E5%AD%98%E9%9F%B3%E9%A2%91%E7%B1%BB%E6%96%87%E4%BB%B6",
          children: "保存音频类文件"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图库媒体库",
      children: "图库（媒体库）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-overview",
        children: "Media Library Kit"
      }), "提供了照片Picker（PhotoViewPicker），用于访问、保存公共目录的图片或视频文件。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-photoviewpicker",
        children: "选择媒体库资源"
      }), " 、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-savebutton",
        children: "创建媒体资源"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/camera-picker",
          children: "拉起系统相机"
        })
      }), "\n"]
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
595793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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