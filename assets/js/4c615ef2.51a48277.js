"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["921702"], {
317876(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_security_api_devicesecurity_arktsapi_devicesecurity_deviceverify_api_devicesecurity_deviceverify_api_md_4c6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-security-api-devicesecurity-arktsapi-devicesecurity-deviceverify-api-devicesecurity-deviceverify-api-md-4c6.json
var site_docs_ref_system_security_api_device_security_api_devicesecurity_arktsapi_devicesecurity_deviceverify_api_devicesecurity_deviceverify_api_md_4c6_namespaceObject = JSON.parse('{"id":"system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-deviceverify-api/devicesecurity-deviceverify-api","title":"DeviceVerify（应用设备状态检测）","description":"本模块提供应用设备状态检测能力，对应用在某台设备上的使用状态进行管理和检测，用于判断应用是否在该设备上首次安装，或在该设备上用户是否已获取了优惠券等的状态检测，以支撑业务进行新用户营销活动。","source":"@site/docs-ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-deviceverify-api/devicesecurity-deviceverify-api.md","sourceDirName":"system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-deviceverify-api","slug":"/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-deviceverify-api/devicesecurity-deviceverify-api","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-deviceverify-api/devicesecurity-deviceverify-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"DeviceVerify（应用设备状态检测）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-deviceverify-api","kit":"系统","last_updated":"2026-04-22","slug":"devicesecurity-deviceverify-api"},"sidebar":"ref","previous":{"title":"DLP服务错误码","permalink":"/harmonyos-docs-site/ref/system-security-api/data-protection-api/data-protection-arkts-errcode/errorcode-dlp/errorcode-dlp"},"next":{"title":"SafetyDetect（安全检测）","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-safetydetectenhanced-api/devicesecurity-safetydetectenhanced-api"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-deviceverify-api/devicesecurity-deviceverify-api.md


const frontMatter = {
	title: 'DeviceVerify（应用设备状态检测）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-deviceverify-api',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'devicesecurity-deviceverify-api'
};
const contentTitle = 'DeviceVerify（应用设备状态检测）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "getDeviceToken",
  "id": "getdevicetoken",
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
        id: "deviceverify应用设备状态检测",
        children: "DeviceVerify（应用设备状态检测）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供应用设备状态检测能力，对应用在某台设备上的使用状态进行管理和检测，用于判断应用是否在该设备上首次安装，或在该设备上用户是否已获取了优惠券等的状态检测，以支撑业务进行新用户营销活动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { deviceCertificate } from '@kit.DeviceSecurityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdevicetoken",
      children: "getDeviceToken"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDeviceToken(): Promise<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本设备的DeviceToken。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.2(14)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.DeviceCertificate"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回本设备的DeviceToken。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/devicesecurity-arktsapi-errcode-deviceverify/devicesecurity-arktsapi-errcode-deviceverify",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/devicesecurity-arktsapi-errcode-deviceverify/devicesecurity-arktsapi-errcode-deviceverify#section201-%E6%9D%83%E9%99%90%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "201"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "has no permission."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/devicesecurity-arktsapi-errcode-deviceverify/devicesecurity-arktsapi-errcode-deviceverify#section1003300005-%E5%86%85%E9%83%A8%E5%BC%82%E5%B8%B8",
              children: "1003300005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/devicesecurity-arktsapi-errcode-deviceverify/devicesecurity-arktsapi-errcode-deviceverify#section1003300006-%E8%AE%BF%E9%97%AE%E4%BA%91%E7%AB%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BC%82%E5%B8%B8",
              children: "1003300006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "access cloud server fail."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { deviceCertificate } from '@kit.DeviceSecurityKit';\nimport { BusinessError} from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = \"DeviceCertificateJsTest\";\n\n// 请求deviceToken，并处理结果\ntry {\n  deviceCertificate.getDeviceToken().then((token) => {\n      hilog.info(0x0000, TAG, 'Succeeded in executing getDeviceToken');\n      // 开发者处理deviceToken\n  }).catch((err: BusinessError) => {\n      hilog.error(0x0000, TAG, 'getDeviceToken failed!  %{public}d %{public}s', err.code, err.message);\n  });\n} catch (err) {\n  let error: BusinessError = err as BusinessError;\n  hilog.error(0x0000, TAG, 'getDeviceToken failed!  %{public}d %{public}s', error.code, error.message);\n}\n"
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