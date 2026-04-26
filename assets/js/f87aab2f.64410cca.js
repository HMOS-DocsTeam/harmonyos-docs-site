"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["884281"], {
328941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_call_kit_guide_callservice_enterprise_contact_display_callservice_enterprise_contact_display_md_f87_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-call-kit-guide-callservice-enterprise-contact-display-callservice-enterprise-contact-display-md-f87.json
var site_docs_call_kit_guide_callservice_enterprise_contact_display_callservice_enterprise_contact_display_md_f87_namespaceObject = JSON.parse('{"id":"call-kit-guide/callservice-enterprise-contact-display/callservice-enterprise-contact-display","title":"企业联系人信息来去电页面显示","description":"本功能仅供企业应用开发者接入。","source":"@site/docs/call-kit-guide/callservice-enterprise-contact-display/callservice-enterprise-contact-display.md","sourceDirName":"call-kit-guide/callservice-enterprise-contact-display","slug":"/call-kit-guide/callservice-enterprise-contact-display/","permalink":"/harmonyos-docs-site/call-kit-guide/callservice-enterprise-contact-display/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"企业联系人信息来去电页面显示","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/callservice-enterprise-contact-display","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"去电场景","permalink":"/harmonyos-docs-site/call-kit-guide/outgoing-calls/"},"next":{"title":"来电横幅无法拉起","permalink":"/harmonyos-docs-site/call-kit-guide/call-faq/call-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/call-kit-guide/callservice-enterprise-contact-display/callservice-enterprise-contact-display.md


const frontMatter = {
	title: '企业联系人信息来去电页面显示',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/callservice-enterprise-contact-display',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '企业联系人信息来去电页面显示';

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
  "value": "申请接入",
  "id": "申请接入",
  "level": 2
}, {
  "value": "替换调试Profile",
  "id": "替换调试profile",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "应用跳转陌生号码和信息识别页面",
  "id": "应用跳转陌生号码和信息识别页面",
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
        id: "企业联系人信息来去电页面显示",
        children: "企业联系人信息来去电页面显示"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本功能仅供企业应用开发者接入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "来去电时，页面显示已安装企业应用的联系人信息，方便用户识别来去电人信息，快速回应，增强企业内部沟通效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(83204)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "来去电页面或横幅仅展示一个联系人信息，对于多个应用里存在相同联系人的情况，按照应用包名的字典序排序，展示首个查询结果。"
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
              href: "/ref/call-api/call-arkts/callservicekit-callerinfoquery-extension-ability/callservicekit-callerinfoquery-extension-ability#onquerycallerinfo",
              children: "onQueryCallerInfo"
            }), "(phoneNumber: string)：Promise<CallerInfo>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询联系人信息接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/call-api/call-arkts/callservicekit-numberldentify/callservicekit-numberldentify#querynumberidentifyswitchstate",
              children: "queryNumberIdentifySwitchState"
            }), " (context: Context):SwitchState"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询陌生号码与信息识别总开关状态以及调用该接口的应用号码识别开关状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/call-api/call-arkts/callservicekit-numberldentify/callservicekit-numberldentify#issupportenterprisenumberidentify",
              children: "isSupportEnterpriseNumberIdentify"
            }), "(context: Context): Promise<boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否已开通企业来电显示权限。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请接入",
      children: "申请接入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "企业来电显示能力使用受限，如需接入，需要在AGC网站申请对应权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.登录", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/",
        children: "AGC网站"
      }), "，选择“开发与服务”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.在项目列表选择项目，并在应用列表下选择需要申请企业来电显示的应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.进入“项目设置 > 开放能力管理”页面，点击“企业来电显示”对应的“申请”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(481168)/* ["default"] */.A) + "",
        width: "2455",
        height: "545"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.请根据实际业务需求在弹框中填写对应信息，完成后，点击右上角“提交”，提交后将在3个工作日内回复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(806219)/* ["default"] */.A) + "",
        width: "2137",
        height: "801"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "替换调试profile",
      children: "替换调试Profile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当企业来电显示能力申请成功后，需要重新", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugprofile-0000001914423102",
        children: "申请调试Profile"
      }), "。并且在DevEco Studio中替换新申请的调试Profile。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程内创建一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
            children: "ExtensionAbility"
          }), "类型的自定义组件并继承", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/callservicekit-callerinfoquery-extension-ability/callservicekit-callerinfoquery-extension-ability#callerinfoqueryextensionability",
            children: "CallerInfoQueryExtensionAbility"
          }), "，完成onQueryCallerInfo方法的复写。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于调用onQueryCallerInfo方法时，系统先创建应用的AbilityStage实例，请勿在AbilityStage中添加过于复杂耗时的逻辑，避免调用超时。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { CallerInfoQueryExtensionAbility, CallerInfo } from '@kit.CallServiceKit';\n\nexport default class EntryCallerInfoQueryExtAbility extends CallerInfoQueryExtensionAbility {\n // 来去电时由系统通话应用主动调用该接口查询企业联系人信息\n  onQueryCallerInfo(phoneNumber: string): Promise<CallerInfo> {\n    return new Promise<CallerInfo>((resolve, reject) => {\n      let isSuccess = true;\n      // 在此处实现根据号码查询企业联系人的业务逻辑\n      if (isSuccess) {\n        // 查询成功，返回结果\n        resolve({\n          contactName:\"xxxx\",\n          employeeId:\"xxxx\",\n          department:\"xxxx\",\n          position:\"xxxx\"\n        });\n      } else {\n        // 查询失败，返回错误原因\n        reject(\"error reason\");\n      }\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用配置文件module.json5中注册extensionAbilities，具体详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置文件示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"extensionAbilities\": [\n      {\n        \"name\": \"EntryCallerInfoQueryExtAbility\",\n        \"srcEntry\": \"./ets/callerinfoquery/EntryCallerInfoQueryExtAbility.ets\",\n        \"type\": \"callerInfoQuery\"\n      }\n    ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "type标签需设为\"callerInfoQuery\"，表示该拓展类型为CallerInfoQueryExtensionAbility。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "srcEntry标签表示上述ExtensionAbility组件所对应的代码路径。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在调试设备上，前往“电话”，点击右上角的“更多”图标，前往“设置”>“陌生号码和信息识别”，打开对应企业应用的号码识别功能开关，进行调试。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用跳转陌生号码和信息识别页面",
      children: "应用跳转陌生号码和信息识别页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.1.0(23)版本开始，新增支持从应用直接跳转到“电话 > 更多 > 设置 > 陌生号码和信息识别”。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup",
        children: "Deep Linking"
      }), "方式应用可以直接跳转“陌生号码和信息识别”页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以使用openLink实现应用跳转举例，在openLink接口的link字段中传入目标应用的URL信息，并将options字段中的appLinkingOnly配置为false、跳转的URL固定为\"callsetting://number_identity\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他跳转方式参考使用Deep Linking实现应用间跳转", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup#%E6%8B%89%E8%B5%B7%E6%96%B9%E5%BA%94%E7%94%A8%E5%AE%9E%E7%8E%B0%E5%BA%94%E7%94%A8%E8%B7%B3%E8%BD%AC",
        children: "拉起方应用实现应用跳转"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, OpenLinkOptions } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('start link', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        let link: string = \"callsetting://number_identity\";\n        let openLinkOptions: OpenLinkOptions = {\n          appLinkingOnly: false\n        };\n       try {\n          context.openLink(link, openLinkOptions)\n            .then(() => {\n              hilog.info(0, 'TAG', 'Successed in opening link.');\n            }).catch((err: BusinessError) => {\n              hilog.error(0, 'TAG',`Failed to open link. Code is ${err.code}, message is ${err.message}`);\n            });\n        } catch (paramError) {\n          hilog.error(0, 'TAG',`Failed to start link. Code is ${paramError.code}, message is ${paramError.message}`);\n        }\n      })\n  }\n}\n"
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
481168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958836-0f5e54a6cacb0c7127ab330adc42795f.png");

},
806219(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478837-ba683eb811cdfe64719c0cf7f139ceca.png");

},
83204(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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