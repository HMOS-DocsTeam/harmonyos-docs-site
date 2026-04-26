"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["590138"], {
424439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_telephony_kit_telephony_sms_telephony_sms_md_8ab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-telephony-kit-telephony-sms-telephony-sms-md-8ab.json
var site_docs_system_network_telephony_kit_telephony_sms_telephony_sms_md_8ab_namespaceObject = JSON.parse('{"id":"system-network/telephony-kit/telephony-sms/telephony-sms","title":"短信服务","description":"场景介绍","source":"@site/docs/system-network/telephony-kit/telephony-sms/telephony-sms.md","sourceDirName":"system-network/telephony-kit/telephony-sms","slug":"/system-network/telephony-kit/telephony-sms/","permalink":"/harmonyos-docs-site/system-network/telephony-kit/telephony-sms/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"短信服务","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/telephony-sms","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拨打电话","permalink":"/harmonyos-docs-site/system-network/telephony-kit/telephony-call/"},"next":{"title":"使用网络领航员进行网络模拟","permalink":"/harmonyos-docs-site/system-network/network-debug-optimize/network-navigator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/telephony-kit/telephony-sms/telephony-sms.md


const frontMatter = {
	title: '短信服务',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/telephony-sms',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '短信服务';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "应用内跳转到短信编辑界面",
  "id": "应用内跳转到短信编辑界面",
  "level": 2
}, {
  "value": "sms方式跳转到短信编辑界面",
  "id": "sms方式跳转到短信编辑界面",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 3
}, {
  "value": "sms协议格式",
  "id": "sms协议格式",
  "level": 3
}, {
  "value": "拉起方开发步骤",
  "id": "拉起方开发步骤",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "短信服务",
        children: "短信服务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "短信服务模块提供了管理短信的一些基础能力，包括创建/发送短信、获取/设置发送短信的默认SIM卡槽ID、获取/设置短信服务中心地址，以及检查当前设备是否具备短信发送和接收能力等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的应用场景举例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从网页拉起：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "用户在网页上浏览，看到“发送短信”按钮，点击后会拉起短信应用，预先填写收件人号码、发送内容。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从应用拉起：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "移动应用中，用户点击“发送短信”按钮时，应用调用系统功能，拉起短信应用，预先填写收件人号码、发送内容。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "短信服务"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "即SMS（Short Messaging Service），是一种存储和转发服务。用户的移动电话可以通过它进行相互收发短信，内容以文本、数字或二进制非文本数据为主。发送方的信息通过短信服务中心进行储存并转发给接收方。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "短信服务中心"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "即SMSC（Short Message Service Center），负责在基站和移动设备间中继、储存或转发短消息。移动设备到短信服务中心的协议能传输来自移动设备或朝向移动设备的短消息，协议内容遵从GSM 03.40协议。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "协议数据单元"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "即PDU（Protocol Data Unit），PDU模式收发短信可以使用3种编码：7-bit、8-bit和UCS-2编码。7-bit编码用于发送普通的ASCII字符，8-bit编码通常用于发送数据短信，UCS-2编码用于发送Unicode字符。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持在标准系统上运行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需授予发送短信权限且插入SIM卡才可成功发送短信。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(240007)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了保证应用的运行效率，大部分API调用都是异步的，对于异步调用的API均提供了callback和Promise两种方式，以下示例采用callback回调方式，其他调用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sms/js-apis-sms",
        children: "API"
      }), "文档。"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendShortMessage(options: SendMessageOptions, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送文本或数据SMS消息。需要配置ohos.permission.SEND_MESSAGES权限，该权限仅系统应用可申请。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createMessage(pdu: Array<number>, specification: string, callback: AsyncCallback<ShortMessage>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于协议数据单元（PDU）和指定的SMS协议创建SMS消息实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDefaultSmsSlotId(callback: AsyncCallback<number>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取用于发送短信的默认SIM卡。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用内跳转到短信编辑界面",
      children: "应用内跳转到短信编辑界面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送短信的接口需要系统权限才可调用，三方应用如果有发送短信需求，需要在应用内实现跳转到短信编辑的功能，并且需要携带编辑内容和收件人号码，可以通过调用元能力startAbility接口指定号码并跳转到发送短信页面的方式实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 示例代码\nimport { common, Want } from '@kit.AbilityKit';\n\nconst MMS_BUNDLE_NAME = \"com.ohos.mms\";\nconst MMS_ABILITY_NAME = \"com.ohos.mms.MainAbility\";\nconst MMS_ENTITIES = \"entity.system.home\";\n\nexport class Contact {\n    contactsName: string;\n    telephone: number;\n\n    constructor(contactsName: string, telephone: number) {\n        this.contactsName = contactsName;\n        this.telephone = telephone;\n    }\n}\n\n@Entry\n@Component\nstruct JumpMessage {\n    private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n    startMMSAbilityExplicit() {\n        // 这里完善联系人和号码；姓名主要是通过手机号来查询实际联系人名称，因此这种方式还是以手机号码为主。\n        let params: Array<Object> = [new Contact(\"张三\", 133XXXXXXXX)];\n\n        let want: Want = {\n            bundleName: \"com.ohos.mms\",\n            abilityName: \"com.ohos.mms.MainAbility\",\n            parameters: {\n                contactObjects: JSON.stringify(params),\n                pageFlag: \"conversation\",\n                // 这里填写短信内容。\n                content: \"我是短信具体内容\"\n            }\n        };\n\n        this.context.startAbilityForResult(want).then((data) => {\n            console.info(\"Success\" + JSON.stringify(data));\n        }).catch(() => {\n            console.error(\"error\");\n        });\n    }\n\n    build() {\n        Row() {\n            Column() {\n                Button('发送短信')\n                  .onClick(() => {\n                      this.startMMSAbilityExplicit();\n                  })\n            }\n            .width('100%')\n        }\n        .height('100%')\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sms方式跳转到短信编辑界面",
      children: "sms方式跳转到短信编辑界面"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过sms短信协议，可以创建指向短信收件人的超链接，方便用户通过网页或应用中的超链接直接跳转到短信应用。同时，支持在sms:的相关字段中定义短信的收件人、发送内容等，节省用户编辑短信的时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sms协议格式",
      children: "sms协议格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sms协议标准格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sms:106XXXXXXXXXX?body=发送短信内容\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sms:：sms scheme，必填。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "106XXXXXXXXXX：收件人号码，选填。如果存在多个地址，用英文逗号分隔。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "?：短信内容声明开始符号。如果带短信内容参数，则必填。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "body-value：发送内容参数，选填。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拉起方开发步骤",
      children: "拉起方开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "从网页拉起"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页中的超链接需要满足sms协议。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<a href=\"sms:106XXXXXXXXXX?body=%E5%8F%91%E9%80%81%E7%9F%AD%E4%BF%A1%E5%86%85%E5%AE%B9\">发送短信</a>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实际开发时，需要将收件人号码替换为真实的号码，短信内容可以根据需要进行配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "从应用拉起"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保证sms字符串传入uri参数即可，在应用中page页面可通过 this.getUIContext().getHostContext() 获取context，在ability中可通过this.context获取context。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 示例代码\nimport { common, Want } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n\n  build() {\n    Column() {\n      Button('发送短信')\n        .onClick(() => {\n          let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n          let exampleUrl = \"sms:106XXXXXXXXXX?body=%E5%8F%91%E9%80%81%E7%9F%AD%E4%BF%A1%E5%86%85%E5%AE%B9\";\n        \n          let want: Want = {\n              bundleName: 'com.ohos.mms',\n              action: 'ohos.want.action.viewData',\n              uri:exampleUrl,\n            }\n        \n          context.startAbility(want).then((data) => {\n              console.info(\"Success\" + JSON.stringify(data));\n          }).catch(() => {\n              console.error(\"error\");\n          });\n\n        })\n    }\n  }\n}\n"
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
240007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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