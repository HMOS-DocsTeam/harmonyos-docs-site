"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["793630"], {
989137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_real_name_service_payment_real_name_face_verification_payment_real_name_face_verification_md_92d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-real-name-service-payment-real-name-face-verification-payment-real-name-face-verification-md-92d.json
var site_docs_payment_kit_guide_payment_real_name_service_payment_real_name_face_verification_payment_real_name_face_verification_md_92d_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-real-name-service/payment-real-name-face-verification/payment-real-name-face-verification","title":"人脸核身实人验证场景","description":"场景介绍","source":"@site/docs/payment-kit-guide/payment-real-name-service/payment-real-name-face-verification/payment-real-name-face-verification.md","sourceDirName":"payment-kit-guide/payment-real-name-service/payment-real-name-face-verification","slug":"/payment-kit-guide/payment-real-name-service/payment-real-name-face-verification/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-real-name-service/payment-real-name-face-verification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"人脸核身实人验证场景","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-real-name-face-verification","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"实名信息验证/授权场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-real-name-service/payment-real-name-verification/"},"next":{"title":"身份验证服务调用记录查看","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-real-name-service/payment-real-name-service-req-query/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-real-name-service/payment-real-name-face-verification/payment-real-name-face-verification.md


const frontMatter = {
	title: '人脸核身实人验证场景',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-real-name-face-verification',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '人脸核身实人验证场景';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接入流程",
  "id": "接入流程",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "发起人脸核身预验证（服务器开发）",
  "id": "发起人脸核身预验证服务器开发",
  "level": 3
}, {
  "value": "拉起人脸核身实人验证（端侧开发）",
  "id": "拉起人脸核身实人验证端侧开发",
  "level": 3
}, {
  "value": "查询人脸核身实人验证结果（服务器开发）",
  "id": "查询人脸核身实人验证结果服务器开发",
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
    ol: "ol",
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
        id: "人脸核身实人验证场景",
        children: "人脸核身实人验证场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.1(19)版本开始，新增支持人脸核身实人验证场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要验证当前应用/元服务操作的用户的信息且验证是否为用户本人操作时，可接入人脸核身实人验证能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持商户模型：不涉及"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "人脸核身实人验证页面展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(464773)/* ["default"] */.A) + "",
        width: "533",
        height: "487"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为确保人脸识别的准确性，必须在全屏模式下调用人脸核身实人验证功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下场景均不支持："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "特殊显示模式：半模态、上下分屏、左右分屏、单手模式、分栏、悬浮窗、智慧多窗、自由多窗等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备模式：PC模式、直板机横屏模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "折叠设备：上下折叠手机外屏、折叠电脑全展开状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入流程",
      children: "接入流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付人脸核身实人验证接入流程如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开发准备"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请先完成开发准备后再进行下面的开发接入。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-preparations/payment-config-app-identity-info",
              children: "端侧应用配置"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-preparations/payment-real-name-preparations",
              children: "用户身份验证服务接入准备"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "接入人脸核身实人验证"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据人脸核身实人验证场景", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
              children: "开发步骤"
            }), "完成接入。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过接入人脸核身实人验证能力，可以简便快捷的实现用户信息验证及本人操作的验证。具体接入流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(680193)/* ["default"] */.A) + "",
        width: "960",
        height: "498"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者客户端收集用户实名信息加密后请求开发者服务端发起人脸核身实人预验证。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者服务端请求Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-face-verifactaion/payment-api-common-face-verifactaion-preverify/payment-api-common-face-verifactaion-preverify",
          children: "人脸核身实人预验证"
        }), "接口获取预验证ID（preVerifyId）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端解密并获取请求传入的用户实名信息进行验证处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端验证用户实名信息通过后，返回预验证ID给开发者服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者服务端返回预验证信息给开发者客户端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者客户端使用预验证ID调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-realnameservice/payment-realnameservice#realnameservicestartfaceverification",
          children: "startFaceVerification"
        }), "接口拉起人脸核身实人验证页面。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示验证信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户同意并完成人脸验证，Payment Kit客户端请求Payment Kit服务端处理验证。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端完成人脸验证处理并返回验证结果给Payment Kit客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端将验证结果展示给用户。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端同步返回身份信息验证ID给开发者客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者客户端使用身份信息验证Id请求开发者服务端查询身份信息验证结果。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者服务端请求Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-face-verifactaion/payment-api-common-face-verifactaion-result/payment-api-common-face-verifactaion-result",
          children: "人脸核身实人验证"
        }), "接口查询验证结果。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端返回人脸核身实人验证结果给开发者服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者服务端将人脸核身实人验证结果返回给开发者客户端，开发者客户端根据验证结果进行下一步业务处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拉起用户人脸核身实人验证页面的接口。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-realnameservice/payment-realnameservice#realnameservicestartfaceverification",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startFaceVerification(context: common.UIAbilityContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "common.UIExtensionContext, preVerifyId: string): Promise<string>;"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发起人脸核身预验证服务器开发",
      children: "发起人脸核身预验证（服务器开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-face-verifactaion/payment-api-common-face-verifactaion-preverify/payment-api-common-face-verifactaion-preverify",
        children: "人脸核身实人预验证"
      }), "接口获取预验证ID后返回给端侧拉起人脸核身实人验证页面。服务器开发步骤可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-real-name-service/payment-real-name-verification#%E5%AE%9E%E5%90%8D%E4%BF%A1%E6%81%AF%E9%AA%8C%E8%AF%81",
        children: "实名信息验证/授权场景"
      }), "服务器开发实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拉起人脸核身实人验证端侧开发",
      children: "拉起人脸核身实人验证（端侧开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者客户端使用后端服务返回的预验证ID作为参数调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-realnameservice/payment-realnameservice#realnameservicestartfaceverification",
        children: "startFaceVerification"
      }), "接口拉起用户人脸核身实人验证页面。当接口通过.then()方法返回时，则表示当前接口请求成功，通过.catch()方法返回表示接口请求失败。当此次请求有异常时，可通过", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "error.code"
        })
      }), "获取错误码，错误码相关信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-error-code/payment-error-code",
        children: "错误码"
      }), "。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { realNameService } from '@kit.PaymentKit';\nimport { common } from '@kit.AbilityKit';\n \n@Entry\n@Component\nstruct Index {\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  requestStartFaceVerificationPromise() {\n    // use your own preVerifyId\n    let preVerifyId = '后端服务获取有效的预验证ID';\n    realNameService.startFaceVerification(this.context, preVerifyId)\n      .then((verifyResultId: string ) => {\n        // face verification success\n        console.info(`succeeded in face verifying, verifyResultId: ${verifyResultId}`);\n      })\n      .catch((error: BusinessError) => {\n        // failed to face verification\n        console.error(`failed to face verification, error.code: ${error.code}, error.message: ${error.message}`);\n      });\n  }\n \n  build() {\n    Column() {\n      Button('requestStartFaceVerificationPromise')\n        .type(ButtonType.Capsule)\n        .width('50%')\n        .margin(20)\n        .onClick(() => {\n          this.requestStartFaceVerificationPromise();\n        })\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询人脸核身实人验证结果服务器开发",
      children: "查询人脸核身实人验证结果（服务器开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-face-verifactaion/payment-api-common-face-verifactaion-result/payment-api-common-face-verifactaion-result",
        children: "人脸核身实人验证"
      }), "接口查询验证结果。"]
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
464773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479095-8fbd7bbdd4576111912ae4b64d58a9c3.png");

},
680193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799446-5baeea4c8a2b87680cb0e5bf0bdb906a.png");

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