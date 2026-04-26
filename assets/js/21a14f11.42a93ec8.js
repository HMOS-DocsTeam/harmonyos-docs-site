"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["425131"], {
934156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_open_permission_on_setting_open_permission_on_setting_md_21a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-request-app-permissions-open-permission-on-setting-open-permission-on-setting-md-21a.json
var site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_open_permission_on_setting_open_permission_on_setting_md_21a_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/request-app-permissions/open-permission-on-setting/open-permission-on-setting","title":"手动设置授权","description":"当应用需要访问用户的隐私信息或使用敏感系统能力时，如拦截键盘输入事件，应向用户申请授权。这些权限属于manual\\\\settings权限。","source":"@site/docs/system-security/access-control/app-permission-mgmt/request-app-permissions/open-permission-on-setting/open-permission-on-setting.md","sourceDirName":"system-security/access-control/app-permission-mgmt/request-app-permissions/open-permission-on-setting","slug":"/system-security/access-control/app-permission-mgmt/request-app-permissions/open-permission-on-setting/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/open-permission-on-setting/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"手动设置授权","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/open-permission-on-setting","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"向用户申请单次授权","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization/"},"next":{"title":"申请受限权限","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/request-app-permissions/open-permission-on-setting/open-permission-on-setting.md


const frontMatter = {
	title: '手动设置授权',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/open-permission-on-setting',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '手动设置授权';

const assets = {

};



const toc = [{
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
        id: "手动设置授权",
        children: "手动设置授权"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要访问用户的隐私信息或使用敏感系统能力时，如拦截键盘输入事件，应向用户申请授权。这些权限属于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#manual_settings%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE%E6%8E%88%E6%9D%83",
        children: "manual_settings"
      }), "权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用申请manual_settings权限时，需完成以下步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在应用市场（AGC）侧申请Profile文件并在Profile内添加ACL权限。申请Profile的操作需在应用市场（AGC）完成，详细步骤请参阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
          children: "申请发布Profile"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在module.json5配置文件中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
          children: "声明权限"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "运行应用时，用户触发访问目标对象时应检查用户的授权结果，若未授权，引导用户跳转到系统应用“设置”中进行授权。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查用户的授权结果，确认用户已授权后，再进行下一步操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将详细介绍如何完成步骤3和4。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以申请拦截键盘输入事件权限为例进行说明，目前该权限仅在PC/2in1设备上生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请ohos.permission.HOOK_KEY_EVENT权限，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
            children: "申请发布Profile"
          }), "与", (0,jsx_runtime.jsx)(_components.a, {
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
          }), "方法来校验当前是否已经授权。如果已经授权，则可以直接访问目标操作，否则需要进行下一步操作，即引导用户跳转到系统应用“设置”中进行授权。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { abilityAccessCtrl, bundleManager, Permissions } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function checkPermissionGrant(permission: Permissions): Promise<abilityAccessCtrl.GrantStatus> {\n  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n  let grantStatus: abilityAccessCtrl.GrantStatus = abilityAccessCtrl.GrantStatus.PERMISSION_DENIED;\n\n  // 获取应用程序的accessTokenID\n  let tokenId: number = 0;\n  try {\n    let bundleInfo: bundleManager.BundleInfo =\n      await bundleManager.getBundleInfoForSelf(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);\n    let appInfo: bundleManager.ApplicationInfo = bundleInfo.appInfo;\n    tokenId = appInfo.accessTokenId;\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed to get bundle info for self, code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 校验应用是否被授予权限\n  try {\n    grantStatus = await atManager.checkAccessToken(tokenId, permission);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed to check access token, code: ${err.code}, message: ${err.message}`);\n  }\n\n  return grantStatus;\n}\n\nasync function checkPermissions(): Promise<void> {\n  let grantStatus: boolean = await checkPermissionGrant('ohos.permission.HOOK_KEY_EVENT') === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED;// 获取拦截键盘输入事件权限状态。\n  if (grantStatus) {\n    // 已经授权，可以继续访问目标操作\n    console.info(`permission is granted.`);\n  } else {\n    // 未授权，引导用户跳转到系统应用“设置”中进行授权\n    console.info(`permission is not granted.`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引导用户跳转到系统应用“设置”中进行授权。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若用户未授权，则需要提示用户必须授权才能访问当前页面的功能，并引导用户到系统应用“设置”中打开相应的权限；或通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#openpermissiononsetting22",
            children: "openPermissionOnSetting()"
          }), "方法拉起弹窗，引导用户授权。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“设置”中的路径如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "路径一：设置 > 隐私和安全 > 权限类型（如键盘输入辅助） > 某个应用"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(717430)/* ["default"] */.A) + "",
            width: "707",
            height: "650"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "路径二：设置 > 应用和元服务 > 某个应用 > 权限类型（如键盘输入辅助）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(184487)/* ["default"] */.A) + "",
            width: "709",
            height: "649"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用在UIAbility的onWindowStageCreate()回调中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#openpermissiononsetting22",
            children: "openPermissionOnSetting()"
          }), "方法引导用户跳转到“设置”，或根据业务需要在UI中引导用户跳转到“设置”。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用在onWindowStageCreate()回调中申请授权时，需要等待异步接口loadContent()/setUIContent()执行结束后或在loadContent()/setUIContent()回调中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#openpermissiononsetting22",
            children: "openPermissionOnSetting()"
          }), "，否则在Content加载完成前，openPermissionOnSetting会调用失败。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "效果展示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(106330)/* ["default"] */.A) + "",
            width: "927",
            height: "623"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在UIAbility中引导用户跳转到系统应用“设置”中的对应路径。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { abilityAccessCtrl, common, Permissions, UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction openPermOnSetting(permission: Permissions, context: common.UIAbilityContext): void {\n  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n  // openPermissionOnSetting会判断权限的授权状态来决定是否唤起弹窗\n  atManager.openPermissionOnSetting(context, permission).then((data) => {\n    if (data === abilityAccessCtrl.SelectedResult.REJECTED) {\n      // 用户不允许跳转到“设置”\n      console.info(`user not allowed.`);\n    } else if (data === abilityAccessCtrl.SelectedResult.OPENED) {\n      // 用户选择跳转到“设置”\n      console.info(`user allowed to setting.`);\n    } else {\n      // 权限已授权，无需弹窗\n      console.info(`permission is granted.`);\n    }\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to openPermissionOnSetting, code: ${err.code}, message: ${err.message}`);\n  })\n}\n\nexport default class OpenPermAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // ···\n    windowStage.loadContent('openpermpages/Index', (err) => {\n      openPermOnSetting('ohos.permission.HOOK_KEY_EVENT', this.context);\n    // ···\n    });\n  }\n// ···\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在UI中引导用户跳转到系统应用“设置”中的对应路径。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { abilityAccessCtrl, common, Permissions } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction openPermOnSetting(permission: Permissions, context: common.UIAbilityContext): void {\n  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n  // openPermissionOnSetting会判断权限的授权状态来决定是否唤起弹窗\n  atManager.openPermissionOnSetting(context, permission).then((data) => {\n    if (data === abilityAccessCtrl.SelectedResult.REJECTED) {\n      // 用户不允许跳转到“设置”\n      console.info(`user not allowed.`);\n    } else if (data === abilityAccessCtrl.SelectedResult.OPENED) {\n      // 用户选择跳转到“设置”\n      console.info(`user allowed to setting.`);\n    } else {\n      // 权限已授权，无需弹窗\n      console.info(`permission is granted.`);\n    }\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to openPermissionOnSetting, code: ${err.code}, message: ${err.message}`);\n  })\n}\n\n@Entry\n@Component\nstruct Index {\n  aboutToAppear() {\n    const context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    openPermOnSetting('ohos.permission.HOOK_KEY_EVENT', context);\n  }\n\n  build() {\n    // ···\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理授权结果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#openpermissiononsetting22",
            children: "openPermissionOnSetting()"
          }), "方法后，应用程序需重新校验是否已经授权。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果用户授权，则可以继续访问目标操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果用户拒绝授权，则需要提示用户必须授权才能访问当前页面的功能，重新引导用户跳转到系统应用“设置”中的对应路径打开权限。"
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
717430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478357-5f98e477773c2c37735330707b5a81f3.png");

},
106330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438403-b9a270ccd7888a8b3aa916298f36ec9c.png");

},
184487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798708-c25a6f89a60a0c0b1c76f322d2975c30.png");

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