"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["782367"], {
405821(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_protection_kit_dlp_dlp_adapting_encrypted_sharing_dlp_adapting_encrypted_sharing_md_18a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-protection-kit-dlp-dlp-adapting-encrypted-sharing-dlp-adapting-encrypted-sharing-md-18a.json
var site_docs_system_security_data_protection_kit_dlp_dlp_adapting_encrypted_sharing_dlp_adapting_encrypted_sharing_md_18a_namespaceObject = JSON.parse('{"id":"system-security/data-protection-kit/dlp/dlp-adapting-encrypted-sharing/dlp-adapting-encrypted-sharing","title":"适配加密分享","description":"介绍","source":"@site/docs/system-security/data-protection-kit/dlp/dlp-adapting-encrypted-sharing/dlp-adapting-encrypted-sharing.md","sourceDirName":"system-security/data-protection-kit/dlp/dlp-adapting-encrypted-sharing","slug":"/system-security/data-protection-kit/dlp/dlp-adapting-encrypted-sharing/","permalink":"/harmonyos-docs-site/system-security/data-protection-kit/dlp/dlp-adapting-encrypted-sharing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"适配加密分享","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dlp-adapting-encrypted-sharing","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据防泄漏服务开发指导","permalink":"/harmonyos-docs-site/system-security/data-protection-kit/dlp/dlp-guidelines/"},"next":{"title":"Device Certificate Kit简介","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/device-certificate-kit-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-protection-kit/dlp/dlp-adapting-encrypted-sharing/dlp-adapting-encrypted-sharing.md


const frontMatter = {
	title: '适配加密分享',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dlp-adapting-encrypted-sharing',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '适配加密分享';

const assets = {

};



const toc = [{
  "value": "介绍",
  "id": "介绍",
  "level": 2
}, {
  "value": "发送加密文件",
  "id": "发送加密文件",
  "level": 2
}, {
  "value": "选择文件加密分享到应用",
  "id": "选择文件加密分享到应用",
  "level": 3
}, {
  "value": "应用内使用文件Picker进行文件加密分享",
  "id": "应用内使用文件picker进行文件加密分享",
  "level": 3
}, {
  "value": "查看加密文件",
  "id": "查看加密文件",
  "level": 2
}, {
  "value": "应用内使用文件预览查看DLP文件",
  "id": "应用内使用文件预览查看dlp文件",
  "level": 3
}, {
  "value": "将DLP文件保存到本地文件管理中查看",
  "id": "将dlp文件保存到本地文件管理中查看",
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
        id: "适配加密分享",
        children: "适配加密分享"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "介绍",
      children: "介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DLP加密分享是基于系统级数据防泄漏框架构建的数据安全功能，用户在分享文件时可以使用该功能对文件进行加密保护，加密后的文件仅指定的华为账号用户可以查看，从而实现防止转发的安全效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加密后的文件作为HarmonyOS操作系统中的一类新的标准文件格式（.dlp后缀文件），在接收方设备上，需要通过系统服务进行账号身份认证和权限管控才能操作对应文件。因此，通信、聊天类等应用需要在处理加密文件时，可以调用HarmonyOS系统能力进行对应处理，以确保无缝的用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要在两个关键环节适配加密分享功能，确保DLP文件可以被正确发送和查看："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%8F%91%E9%80%81%E5%8A%A0%E5%AF%86%E6%96%87%E4%BB%B6",
          children: "发送流程"
        }), "：适配后，应用可以调用系统能力生成和接收DLP文件，用户可以在系统应用和三方应用间无缝发送DLP文件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%9F%A5%E7%9C%8B%E5%8A%A0%E5%AF%86%E6%96%87%E4%BB%B6",
          children: "查看流程"
        }), "：适配后，应用可以直接调用文件预览查看DLP文件，极大缩短用户查看DLP文件的操作流程，无需用户手动跳转至文件预览查看。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "发送加密文件",
      children: "发送加密文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户加密分享文件主要有两种方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式一：以文件为起点，用户直接选择文件，加密分享到应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式二：以应用为起点，用户在应用内通过文件Picker的方式，选择文件并设置加密分享。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "选择文件加密分享到应用",
      children: "选择文件加密分享到应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户直接选择文件，加密分享到应用。用户在设备上的操作流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在文件管理、图库等系统应用中，选择需要加密分享的文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击分享并选中底部功能区的“加密分享”功能，进入加密分享授权界面，添加访问方的华为账号，来指定可查看文件的用户。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过系统分享加密后的文件到三方应用，如分享到聊天类应用后，再发送给他人。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了支撑用户顺利完成上述流程，应用应满足以下要求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持从系统分享并发送.dlp后缀的加密文件到应用，应用不对.dlp文件进行过滤。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保DLP文件内容不被损坏，并保持.dlp文件后缀不变。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用内使用文件picker进行文件加密分享",
      children: "应用内使用文件Picker进行文件加密分享"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在应用内通过文件Picker的方式，选择文件并设置加密分享。用户在设备上的操作流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在应用内通过文件Picker选择文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击文件Picker底部的“加密分享”按钮进入加密分享授权界面，添加访问方的华为账号，来指定可查看文件的用户。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "添加完毕后，直接在应用内将加密文件发送给他人。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了支撑用户顺利完成上述流程，应用需进行以下适配："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentselectoptions",
            children: "DocumentSelectOptions"
          }), "参数，在文件Picker底部显示“加密分享”按钮。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentviewpicker",
            children: "DocumentViewPicker"
          }), "获取文件URI。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用获取文件URI后即可发送DLP文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import common from '@ohos.app.ability.common';\nimport picker from '@ohos.file.picker';\n\n@Component\nstruct Index {\n  async callFilePicker(): Promise<void> {\n    try {\n      let context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\n      let documentSelectOptions = new picker.DocumentSelectOptions();\n      documentSelectOptions.isEncryptionSupported = true; // 显示加密分享按钮。\n      let documentPicker = new picker.DocumentViewPicker(context);\n      const documentSelectResult: Array<string> = await documentPicker.select(documentSelectOptions); // 获取文件URI。\n    } catch (err) {\n      console.error('CallFilePickerSelectFile failed');\n    }\n  }\n\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看加密文件",
      children: "查看加密文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户查看加密文件有两种方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式一：在应用内通过文件预览查看DLP文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式二：将应用内的DLP文件保存到本地系统文件管理中查看。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用内使用文件预览查看dlp文件",
      children: "应用内使用文件预览查看DLP文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在设备上的操作流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在应用内点击要查看的DLP文件，应用直接拉起文件预览查看文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了支撑用户顺利完成上述流程，应用需进行以下适配："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开DLP文件时，需要先获取待打开DLP文件的URI。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
            children: "want"
          }), "参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability-2",
            children: "startAbility"
          }), "将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
            children: "want"
          }), "参数传入，使用系统统一打开能力进行打开。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import Want from '@ohos.app.ability.Want';\nimport { common, wantConstant } from '@kit.AbilityKit';\n\n@Component\nstruct Index {\n  viewDlp(dlpUri: string) {\n    let context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\n    let want: Want = {\n      \"action\": \"ohos.want.action.viewData\",\n      \"uri\": dlpUri, // 打开DLP文件时，需要先获取待打开DLP文件的URI。\n      \"flags\": wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION, // 为打开的DLP文件进行uri授权，默认只读。\n    }\n    try {\n      // 通过startAbility将want信息传入，调用系统统一打开能力。\n      context.startAbility(want);\n    } catch (err) {\n      console.error('startAbility failed');\n    }\n  }\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将dlp文件保存到本地文件管理中查看",
      children: "将DLP文件保存到本地文件管理中查看"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在设备上的操作流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在应用内选择DLP文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将文件保存到本地系统文件管理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在系统文件管理中点击DLP文件通过系统文件预览查看。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了支撑用户顺利完成上述流程，应用应满足以下要求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用支持下载或保存加密文件到系统文件管理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "下载或保存加密文件时不改变.dlp文件后缀。"
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