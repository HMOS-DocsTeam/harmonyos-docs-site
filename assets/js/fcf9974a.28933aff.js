"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["303405"], {
392655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_add_permissions_health_add_permissions_md_fcf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-health-service-kit-guide-health-harmonyos-health-app-dev-health-add-permissions-health-add-permissions-md-fcf.json
var site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_add_permissions_health_add_permissions_md_fcf_namespaceObject = JSON.parse('{"id":"health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions/health-add-permissions","title":"管理用户授权","description":"场景介绍","source":"@site/docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions/health-add-permissions.md","sourceDirName":"health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions","slug":"/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions/","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"管理用户授权","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-add-permissions","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起运动健康App隐私授权","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-privacy-authorization/"},"next":{"title":"管理数据源","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions/health-add-permissions.md


const frontMatter = {
	title: '管理用户授权',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-add-permissions',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '管理用户授权';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发前检查",
  "id": "开发前检查",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "用户授权",
  "id": "用户授权",
  "level": 3
}, {
  "value": "查询权限",
  "id": "查询权限",
  "level": 3
}, {
  "value": "取消授权",
  "id": "取消授权",
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
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "管理用户授权",
        children: "管理用户授权"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用拉起华为账号登录和授权界面，由用户授权相应的数据访问权限。用户可以自主选择授权的数据类型，可以只授权部分数据权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用所能操作的用户数据，是用户授权和运动健康服务审批通过的数据权限的交集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(593820)/* ["default"] */.A) + "",
        width: "731",
        height: "626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorerequestauthorizations",
              children: "requestAuthorizations"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1",
              children: "common.UIAbilityContext"
            }), ", request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#authorizationrequest",
              children: "AuthorizationRequest"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#authorizationresponse",
              children: "AuthorizationResponse"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户授权，入参为UIAbility上下文和授权参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#authorizationrequest",
              children: "AuthorizationRequest"
            }), "，添加需要读写的数据类型，拉起账号授权页面，引导用户完成授权，返回结果中的数据类型列表，其对应权限在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/health-service-kit-guide/health-harmonyos/health-preparations/health-apply",
              children: "应用申请权限"
            }), "和用户授权权限的交集中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoregetauthorizations",
              children: "getAuthorizations"
            }), "(request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#authorizationrequest",
              children: "AuthorizationRequest"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#authorizationresponse",
              children: "AuthorizationResponse"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询用户权限，入参为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#authorizationrequest",
              children: "AuthorizationRequest"
            }), "，添加需要查询的数据类型，查询传入类型是否有权限，返回结果中的数据类型列表，其对应权限在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/health-service-kit-guide/health-harmonyos/health-preparations/health-apply",
              children: "应用申请权限"
            }), "和用户授权权限的交集中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorecancelauthorizations",
              children: "cancelAuthorizations"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消用户所有授权。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前检查",
      children: "开发前检查"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/health-service-kit-guide/health-harmonyos/health-preparations/health-apply",
          children: "申请运动健康服务"
        }), "与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id",
          children: "配置Client ID"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["接口需在页面或自定义组件生命周期内调用。接口首次调用前，需先使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreinit",
          children: "init"
        }), "方法进行初始化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/errorcode-healthservice/errorcode-healthservice",
          children: "ArkTS API错误码"
        }), "，常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-faqs",
          children: "Health Service Kit常见问题"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用户授权",
      children: "用户授权"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.导入运动健康功能模块及相关公共模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.创建授权请求，确保授权参数中的权限已在申请运动健康服务时勾选，权限说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/health-service-kit-guide/health-harmonyos/health-data-type/health-permission-description",
        children: "权限说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let authorizationParameter: healthStore.AuthorizationRequest = {\n  readDataTypes: [healthStore.exerciseSequenceHelper.DATA_TYPE, healthStore.samplePointHelper.heartRate.DATA_TYPE],\n  writeDataTypes: [healthStore.exerciseSequenceHelper.DATA_TYPE, healthStore.samplePointHelper.heartRate.DATA_TYPE]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorerequestauthorizations",
        children: "requestAuthorizations"
      }), "方法执行登录授权请求，并处理返回结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n  let authorizationResponse = await healthStore.requestAuthorizations(this.getUIContext().getHostContext() as common.UIAbilityContext, authorizationParameter);\n  hilog.info(0x0000, 'testTag', 'Succeeded in requesting authorization.');\n  authorizationResponse.writeDataTypes.forEach(dataType => {\n    hilog.info(0x0000, 'testTag', `grantedWriteDataType is : ${dataType.name}`);\n  });\n  authorizationResponse.readDataTypes.forEach(dataType => {\n    hilog.info(0x0000, 'testTag', `grantedReadDataTypes is : ${dataType.name}`);\n  });\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to request authorization. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询权限",
      children: "查询权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.导入运动健康服务功能模块及相关公共模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.创建查询权限请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let queryAuthorizationRequest: healthStore.AuthorizationRequest = {\n  readDataTypes: [healthStore.exerciseSequenceHelper.DATA_TYPE, healthStore.samplePointHelper.heartRate.DATA_TYPE],\n  writeDataTypes: [healthStore.exerciseSequenceHelper.DATA_TYPE, healthStore.samplePointHelper.heartRate.DATA_TYPE]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoregetauthorizations",
        children: "getAuthorizations"
      }), "方法执行查询权限请求，并处理返回结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  let queryAuthorizationResponse = await healthStore.getAuthorizations(queryAuthorizationRequest);\n  hilog.info(0x0000, 'testTag', 'Succeeded in getting authorization.');\n  queryAuthorizationResponse.writeDataTypes.forEach(dataType => {\n    hilog.info(0x0000, 'testTag', `grantedWriteDataType is : ${dataType.name}`);\n  });\n  queryAuthorizationResponse.readDataTypes.forEach(dataType => {\n    hilog.info(0x0000, 'testTag', `grantedReadDataTypes is : ${dataType.name}`);\n  });\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to get authorization. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "取消授权",
      children: "取消授权"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.导入运动健康服务功能模块及相关公共模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorecancelauthorizations",
        children: "cancelAuthorizations"
      }), "方法执行取消授权，并处理返回结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  await healthStore.cancelAuthorizations();\n  hilog.info(0x0000, 'testTag', 'Succeeded in canceling authorization.');\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to cancel authorization. Code: ${err.code}, message: ${err.message}`);\n}\n"
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
593820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438959-30f38a7d8b2aa3c65fdf79babd500397.png");

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