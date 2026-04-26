"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["627312"], {
418364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_preparations_arengine_preparations_md_e06_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-preparations-arengine-preparations-md-e06.json
var site_docs_ar_engine_kit_guide_arengine_preparations_arengine_preparations_md_e06_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-preparations/arengine-preparations","title":"开发准备","description":"硬件要求","source":"@site/docs/ar-engine-kit-guide/arengine-preparations/arengine-preparations.md","sourceDirName":"ar-engine-kit-guide/arengine-preparations","slug":"/ar-engine-kit-guide/arengine-preparations/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"坐标系说明","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-introduction/arengine-coordinate/"},"next":{"title":"管理AR会话（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-arsession/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-preparations/arengine-preparations.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "硬件要求",
  "id": "硬件要求",
  "level": 2
}, {
  "value": "环境搭建",
  "id": "环境搭建",
  "level": 2
}, {
  "value": "申请权限",
  "id": "申请权限",
  "level": 2
}, {
  "value": "前置准备",
  "id": "前置准备",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "硬件要求",
      children: "硬件要求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可根据实际的开发语言，选择对应接口判断当前设备是否支持AR Engine。接口的调用参考如下方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontrollerisartypesupported",
        children: "arViewController.isARTypeSupported"
      }), "）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { arEngine, arViewController } from '@kit.AREngine';\n\nlet ret: boolean = arViewController.isARTypeSupported(arEngine.ARFeatureType.ARENGINE_FEATURE_TYPE_FACE);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C/C++（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_checksupported",
        children: "HMS_AREngine_CheckSupported"
      }), "）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ar/ar_engine_core.h\"\n\nauto ret = HMS_AREngine_CheckSupported(ARENGINE_FEATURE_TYPE_FACE);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若对应接口返回错误码为801或ARENGINE_ERROR_DEVICE_NOT_SUPPORTED，则表示AR Engine不支持当前设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境搭建",
      children: "环境搭建"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/application-dev-overview",
        children: "应用开发准备"
      }), "完成基本准备工作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请权限",
      children: "申请权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发AR应用时，需要先申请相机相关权限，确保应用拥有访问相机硬件及其他功能的权限，需要的权限如下表。在申请权限前，请保证符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
        children: "权限使用的基本原则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用相机拍摄前，需要申请", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ohos.permission.CAMERA"
          })
        }), "相机权限。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要使用加速计感知设备运动状态时，需要申请", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ohos.permission.ACCELEROMETER"
          })
        }), "加速计权限。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要陀螺仪感知设备位姿信息时，需要申请", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ohos.permission.GYROSCOPE"
          })
        }), "陀螺仪权限。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前置准备",
      children: "前置准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation",
        children: "组件导航(Navigation) (推荐)"
      }), "作为页面路由，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation#%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",
        children: "页面生命周期"
      }), "所示方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需先创建首页，通过首页选择进入AR Engine场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { abilityAccessCtrl, PermissionRequestResult } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建一个基础的页面，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation",
            children: "组件导航(Navigation) (推荐)"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Selector {\n  pageInfo: NavPathStack = new NavPathStack();\n\n  build(): void {\n    Navigation(this.pageInfo) {\n\n    }\n    .mode(NavigationMode.Stack)\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建sampleButton，封装Button及权限校验功能，使用@Builder装饰，并配置routerMap进行页面跳转。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Selector {\n  pageInfo: NavPathStack = new NavPathStack();\n  private hasPermission: boolean = false;\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n\n  build(): void {\n    // ...\n  }\n\n  @Builder\n  sampleButton(sampleName: string): void {\n    Button(sampleName, { type: ButtonType.Normal, stateEffect: true })\n      .borderRadius(8)\n      .width('50%')\n      .height('5%')\n      .onClick(async () => {\n        if (!this.hasPermission) {\n          this.hasPermission = await requestPermissionOnSetting(this.context);\n          if (!this.hasPermission) {\n            return;\n          }\n        }\n        this.pageInfo.clear();\n        this.pageInfo.pushDestinationByName(sampleName, null).catch((error: BusinessError) => {\n          console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);\n        });\n      })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建requestPermissionOnSetting方法用于校验在进入AR场景时是否已经获取相机权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct Selector {\n  // ...\n}\n\nasync function requestPermissionOnSetting(context: Context): Promise<boolean> {\n  let requestResult: boolean = false;\n  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n  await atManager.requestPermissionOnSetting(context, ['ohos.permission.CAMERA'])\n    .then((data: abilityAccessCtrl.GrantStatus[]) => {\n      console.info('data:' + JSON.stringify(data));\n      if (data[0] === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED) {\n        requestResult = true;\n      }\n    })\n    .catch((err: BusinessError) => {\n      console.error('data:' + JSON.stringify(err));\n    })\n  return requestResult;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面上创建按钮，用于进入AR场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "build(): void {\n  Navigation(this.pageInfo) {\n    Column() {\n      this.sampleButton('ARWorld'); // 进入ARWorld场景\n    }\n    .justifyContent(FlexAlign.SpaceEvenly)\n    .width('100%')\n    .height('100%')\n  }\n  .mode(NavigationMode.Stack)\n  .hideTitleBar(true)\n  .hideBackButton(true)\n  .hideToolBar(true)\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在onAppear中配置应用首次启动时的权限校验方法requestPermissionOnFirstStartup。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct Selector {\n  // ...\n  build(): void {\n    Navigation(this.pageInfo) {\n      Column() {\n        this.sampleButton('ARWorld');\n      }\n      .justifyContent(FlexAlign.SpaceEvenly)\n      .width('100%')\n      .height('100%')\n    }\n    .onAppear(() => {\n      this.requestPermissionOnFirstStartup();\n    })\n    .mode(NavigationMode.Stack)\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  @Builder\n  sampleButton(sampleName: string): void {\n    // ...\n  }\n\n  private requestPermissionOnFirstStartup(): void {\n    abilityAccessCtrl.createAtManager()\n      .requestPermissionsFromUser(this.context, ['ohos.permission.CAMERA'])\n      .then((data: PermissionRequestResult) => {\n        let grantStatus: number[] = data.authResults;\n        if (grantStatus[0] === 0) {\n          this.hasPermission = true;\n          console.info('Succeeded in getting requestPermission.');\n        } else {\n          this.hasPermission = false;\n          console.error('Failed to get requestPermission, user rejected.');\n        }\n      })\n      .catch((err: BusinessError) => {\n        console.error(`Failed to request permissions from user. Code is ${err.code}, message is ${err.message}.`);\n      })\n  }\n}\n"
          })
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