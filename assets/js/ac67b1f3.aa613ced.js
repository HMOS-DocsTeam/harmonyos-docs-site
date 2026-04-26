"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["696669"], {
894870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_request_user_authorization_request_user_authorization_md_ac6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-request-app-permissions-request-user-authorization-request-user-authorization-md-ac6.json
var site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_request_user_authorization_request_user_authorization_md_ac6_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization/request-user-authorization","title":"向用户申请授权","description":"当应用需要访问用户的隐私信息或使用系统能力时，如获取位置信息、访问日历、使用相机拍摄照片或录制视频等，应向用户申请授权。这些权限属于user\\\\_grant权限。","source":"@site/docs/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization/request-user-authorization.md","sourceDirName":"system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization","slug":"/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"向用户申请授权","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"声明权限","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions/"},"next":{"title":"再次向用户申请授权","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization/request-user-authorization.md


const frontMatter = {
	title: '向用户申请授权',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '向用户申请授权';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "向用户申请授权",
        children: "向用户申请授权"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要访问用户的隐私信息或使用系统能力时，如获取位置信息、访问日历、使用相机拍摄照片或录制视频等，应向用户申请授权。这些权限属于user_grant权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用申请user_grant权限时，需完成以下步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在配置文件中，声明应用需要请求的权限。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将应用中需要申请权限的目标对象与对应权限关联，确保用户明确哪些操作需授予应用指定权限。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以上两步请参考章节", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "完成。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行应用时，用户触发访问目标对象时应调用接口，精准触发动态授权弹框。接口内部会检查当前用户是否已授权所需权限，若未授权，将拉起动态授权弹框请求用户授权。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查用户的授权结果，确认用户已授权后，再进行下一步操作。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将详细介绍如何完成步骤3和4。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "user_grant权限授权要基于用户可知可控的原则，需要应用在运行时主动调用系统动态申请权限的接口，系统弹框由用户授权，用户结合应用运行场景的上下文，识别出应用申请相应敏感权限的合理性，从而做出正确的选择。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["系统不鼓励频繁弹窗打扰用户。如果用户拒绝授权，将无法再次弹窗，应用需引导用户在系统设置中手动授予权限。或是调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second",
            children: "requestPermissionOnSetting"
          }), "，拉起权限设置弹窗，引导用户授权。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统权限弹窗不可被遮挡。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统权限弹窗不可被其他组件或控件遮挡，弹窗信息需完整展示，便于用户识别并完成授权。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果系统权限弹窗与其他组件/控件同时在相同位置展示，系统权限弹窗将默认覆盖其他组件/控件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每次执行需要目标权限的操作时，应用都必须检查自己是否已经具有该权限。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如需检查用户是否已向您的应用授予特定权限，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#checkaccesstoken9",
            children: "checkAccessToken()"
          }), "函数。此方法会返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#grantstatus",
            children: "PERMISSION_GRANTED"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#grantstatus",
            children: "PERMISSION_DENIED"
          }), "。具体示例可参考下文。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["每次访问受目标权限保护的接口之前，都需要使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "接口请求相应的权限。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户可能在动态授予权限后通过系统设置来取消应用的权限，因此不能将之前授予的授权状态持久化。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用在onWindowStageCreate()回调中申请授权时，需要等待异步接口loadContent()/setUIContent()执行结束后或在loadContent()/setUIContent()回调中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用在UIExtensionAbility申请授权时，需要在onWindowStageCreate函数执行结束后或在onWindowStageCreate函数回调中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以申请使用位置权限为例进行说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(970380)/* ["default"] */.A) + "",
        width: "375",
        height: "497"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请ohos.permission.LOCATION、ohos.permission.APPROXIMATELY_LOCATION权限，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验当前是否已经授权。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在进行权限申请之前，需要先检查当前应用程序是否已经被授予权限。可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#checkaccesstoken9",
            children: "checkAccessToken()"
          }), "方法来校验当前是否已经授权。如果已经授权，则可以直接访问目标操作，否则需要进行下一步操作，即向用户申请授权。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { abilityAccessCtrl, bundleManager, Permissions } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function checkPermissionGrant(permission: Permissions): Promise<abilityAccessCtrl.GrantStatus> {\n  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n  let grantStatus: abilityAccessCtrl.GrantStatus = abilityAccessCtrl.GrantStatus.PERMISSION_DENIED;\n\n  // 获取应用程序的accessTokenID。\n  let tokenId: number = 0;\n  try {\n    let bundleInfo: bundleManager.BundleInfo =\n      await bundleManager.getBundleInfoForSelf(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);\n    let appInfo: bundleManager.ApplicationInfo = bundleInfo.appInfo;\n    tokenId = appInfo.accessTokenId;\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed to get bundle info for self, code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 校验应用是否被授予权限。\n  try {\n    grantStatus = await atManager.checkAccessToken(tokenId, permission);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed to check access token, code: ${err.code}, message: ${err.message}`);\n  }\n\n  return grantStatus;\n}\n\nasync function checkPermissions(): Promise<void> {\n  let grantStatus1: boolean = await checkPermissionGrant('ohos.permission.LOCATION') === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED;// 获取精确定位权限状态。\n  let grantStatus2: boolean = await checkPermissionGrant('ohos.permission.APPROXIMATELY_LOCATION') === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED;// 获取模糊定位权限状态。\n  // 精确定位权限只能跟模糊定位权限一起申请，或者已经有模糊定位权限才能申请精确定位权限。\n  if (grantStatus2 && !grantStatus1) {\n    // 申请精确定位权限。\n    // ···\n  } else if (!grantStatus1 && !grantStatus2) {\n    // 申请模糊定位权限与精确定位权限或单独申请模糊定位权限。\n    // ···\n  } else {\n    // 已经授权，可以继续访问目标操作。\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动态向用户申请授权。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["动态向用户申请权限是指在应用程序运行时向用户请求授权的过程。可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "方法来实现。该方法接收一个权限列表参数，例如位置、日历、相机、麦克风等。用户可以选择授予权限或者拒绝授权。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以在UIAbility的onWindowStageCreate()回调中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "方法动态请求授权，或根据业务需要在UI中请求授权。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用在onWindowStageCreate()回调中申请授权时，需要等待异步接口loadContent()/setUIContent()执行结束后或在loadContent()/setUIContent()回调中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "，否则在Content加载完成前，requestPermissionsFromUser会调用失败。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用在UIExtensionAbility申请授权时，需要在onWindowStageCreate函数执行结束后或在onWindowStageCreate函数回调中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在UIAbility中向用户申请授权。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { abilityAccessCtrl, common, Permissions, UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst permissions: Permissions[] = ['ohos.permission.LOCATION', 'ohos.permission.APPROXIMATELY_LOCATION'];\n\nfunction reqPermissionsFromUser(permissions: Array<Permissions>, context: common.UIAbilityContext): void {\n  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n  // requestPermissionsFromUser会判断权限的授权状态来决定是否唤起弹窗。\n  atManager.requestPermissionsFromUser(context, permissions).then((data) => {\n    let grantStatus: number[] = data.authResults;\n    let length: number = grantStatus.length;\n    for (let i = 0; i < length; i++) {\n      if (grantStatus[i] === 0) {\n        // 用户授权，可以继续访问目标操作。\n        console.info(`${permissions[i]} is granted by user.`);\n      } else {\n        // 用户拒绝授权，提示用户必须授权才能访问当前页面的功能，并引导用户到系统设置中打开相应的权限。\n        return;\n      }\n    }\n    // 授权成功。\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to request permissions from user, code: ${err.code}, message: ${err.message}`);\n  })\n}\n\nexport default class SecondAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // ...\n    windowStage.loadContent('secondpages/Index', (err) => {\n      reqPermissionsFromUser(permissions, this.context);\n      // ...\n    });\n  }\n  // ...\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在UI中向用户申请授权。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { abilityAccessCtrl, common, Permissions } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst permissions: Permissions[] = ['ohos.permission.LOCATION', 'ohos.permission.APPROXIMATELY_LOCATION'];\n\nfunction reqPermissionsFromUser(permissions: Array<Permissions>, context: common.UIAbilityContext): void {\n  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n  // requestPermissionsFromUser会判断权限的授权状态来决定是否唤起弹窗\n  atManager.requestPermissionsFromUser(context, permissions).then((data) => {\n    let grantStatus: number[] = data.authResults;\n    let length: number = grantStatus.length;\n    for (let i = 0; i < length; i++) {\n      if (grantStatus[i] === 0) {\n        // 用户授权，可以继续访问目标操作\n        console.info(`${permissions[i]} is granted by user.`);\n      } else {\n        // 用户拒绝授权，提示用户必须授权才能访问当前页面的功能，并引导用户到系统设置中打开相应的权限\n        return;\n      }\n    }\n    // 授权成功\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to request permissions from user, code: ${err.code}, message: ${err.message}`);\n  })\n}\n\n@Entry\n@Component\nstruct Index {\n  aboutToAppear() {\n    const context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    reqPermissionsFromUser(permissions, context);\n  }\n\n  build() {\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理授权结果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "方法后，应用程序将等待用户授权的结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果用户授权，则可以继续访问目标操作。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果用户拒绝授权，则需要提示用户必须授权才能访问当前页面的功能，并引导用户到系统应用“设置”中打开相应的权限；或是调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissiononsetting12",
            children: "requestPermissionOnSetting()"
          }), "，拉起权限设置弹框，引导用户授权。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "路径：设置 > 隐私与安全 > 权限类型（如位置信息） > 具体应用"
        }), "\n"]
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
970380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478355-52e21f92f677892c152ffd850b11d93e.png");

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