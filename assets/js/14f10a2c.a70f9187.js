"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["667676"], {
922936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_backupdata_devicesecurity_trustedauth_backupdata_md_14f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-trustedauth-service-devicesecurity-trustedauth-backupdata-devicesecurity-trustedauth-backupdata-md-14f.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_backupdata_devicesecurity_trustedauth_backupdata_md_14f_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-backupdata/devicesecurity-trustedauth-backupdata","title":"数字盾签名密钥备份与恢复","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-backupdata/devicesecurity-trustedauth-backupdata.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-backupdata","slug":"/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-backupdata/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-backupdata/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"数字盾签名密钥备份与恢复","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-backupdata","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"关闭指定生物类型认证能力","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-bio/devicesecurity-trustedauth-del-bio/"},"next":{"title":"单客户端订阅场景","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-audit/devicesecurity-audit-subscribe-arkts-suevent/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-backupdata/devicesecurity-trustedauth-backupdata.md


const frontMatter = {
	title: '数字盾签名密钥备份与恢复',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-backupdata',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '数字盾签名密钥备份与恢复';

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
        id: "数字盾签名密钥备份与恢复",
        children: "数字盾签名密钥备份与恢复"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在数字盾激活前，应用需向密钥管理服务提交密钥生成申请，指定所需密钥的技术参数（如算法、长度等），成功生成的密钥将存储于密钥管理服务侧，应用可申请使用对应密钥进行数字盾服务相关业务数据的签名/验签操作。若应用被卸载，密钥管理服务将自动删除对应的密钥数据，导致应用重新安装后，数字盾功能无法继续使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若您希望当应用在原设备上重新安装后仍能通过历史数据恢复数字盾功能，请在激活数字盾后，执行以下操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "向密钥管理服务发起导出密钥的加密密文（密钥密文）申请。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "向数字盾服务发起密钥备份申请，将密钥密文安全存入数字盾系统。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用卸载重新安装后，如果您期望继续使用应用卸载前使用的密钥管理服务生成的密钥数据，减少用户重新激活数字盾密码流程，直接恢复历史数字盾功能时，则需要执行以下操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "向数字盾服务发起密钥恢复申请，用户在数字盾密码认证通过后，将应用卸载前备份的密钥数据导出至应用侧。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将密钥数据发送至密钥管理服务，完成密钥恢复。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(408307)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一旦用户关闭了数字盾服务，数字盾服务侧将会自动清理对应的密码数据及密钥数据，当应用重新激活数字盾时，需要重新进行密钥数据备份。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从密钥导入到数字盾密码关闭之间，密钥导入不支持重复导入到数字盾服务侧。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本功能目前仅在手机设备支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(663828)/* ["default"] */.A) + "",
        width: "879",
        height: "621"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/devicesecurity-arktsapi-errcode-trusted-auth/devicesecurity-arktsapi-errcode-trusted-auth",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-trusted-auth-api/devicesecurity-trusted-auth-api#importdata",
              children: "importData"
            }), "(data: ArrayBuffer, authID: bigint): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入数据（即与HUKS签名验签时使用的加密密钥信息）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-trusted-auth-api/devicesecurity-trusted-auth-api#exportdata",
              children: "exportData"
            }), "(authID: bigint, label: TUILable): Promise<ArrayBuffer>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出数据（即与HUKS签名验签时使用的加密密钥信息）"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入huks trustedAuthentication 和相关依赖模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { resourceManager } from '@kit.LocalizationKit'\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { trustedAuthentication } from '@kit.DeviceSecurityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考密钥管理服务提供的wrapKeyItem方法，完成密钥导出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 密钥别名\nlet keyAlias = \"testWrapKey\";\n// 密钥属性集合\nlet properties: Array<huks.HuksParam> = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS7\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_GCM\n  },\n  /* 生成密钥时指定允许加密导出 */\n  {\n    tag: huks.HuksTag.HUKS_TAG_IS_ALLOWED_WRAP,\n    value: true\n  }\n];\n\nlet options: huks.HuksOptions = {\n  properties: properties,\n};\n\nlet wrapKeyProperties: Array<huks.HuksParam> = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_WRAP_TYPE,\n    value: huks.HuksKeyWrapType.HUKS_KEY_WRAP_TYPE_HUK_BASED\n  }\n];\n\nlet wrapKeyOptions: huks.HuksOptions = {\n  properties: wrapKeyProperties,\n};\n\nlet wrappedKey: Uint8Array | undefined = undefined;\n\n// 调用生成密钥接口\nawait huks.generateKeyItem(keyAlias, options).then(() => {\n  console.info(`promise: generateKeyItem success`);\n}).catch((error: Error) => {\n  console.error(`promise: generateKeyItem failed`);\n});\n\n// 从密钥管理服务导出生成密钥的密文数据\nawait huks.wrapKeyItem(keyAlias, wrapKeyOptions).then((data) => {\n  wrappedKey = data.outData as Uint8Array;\n  console.info(`promise: wrapKeyItem success, data = ${JSON.stringify(data)}`);\n}).catch((error: Error) => {\n  console.error(`promise: wrapKeyItem failed`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从服务器获取当前账号在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd",
            children: "设置数字盾密码"
          }), "时获取的authID并以authID为索引向数字盾服务发起数据导入请求。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  try {\n    const authID: bigint = 11842183505170721246n; //实际填充为从服务器获取到的账号对应的authID值\n    const buffer = new ArrayBuffer(8);\n    const bufferArray = new Uint8Array(buffer);\n    bufferArray.set([1, 2, 3, 4, 5, 6, 7, 8]);//实际使用时替换为从密钥管理服务获取的备份密钥信息\n    await trustedAuthentication.importData(buffer, authID);\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to importData, code:${err.code}, message:${err.message}`);\n    throw new Error('Import data failed:' + (err as BusinessError).message);\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当应用卸载重新安装后，应用侧可向数字盾服务器发起密钥恢复申请。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const authID: bigint = 11842183505170721246n; //实际填充为从服务器获取到的账号对应的authID值\n  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n  const fileData : Uint8Array = await resourceMgr.getRawFileContent('test_logo_rgba.png'); //实际使用时请替换为应用要在TUI界面展示的logo图片名称\n  const buffer = fileData.buffer;\n  const label:trustedAuthentication.TUILable = {\n    image: buffer as ArrayBuffer,\n    title: \"导出密钥信息\",\n  }\n  const data = await trustedAuthentication.exportData(authID, label);\n} catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to exportData, code:${err.code}, message:${err.message}`);\n    throw new Error('Export data failed:' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将从数字盾服务获取的密钥数据，发送至密钥管理服务进行密钥导入恢复。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在密钥管理服务侧进行密钥导入恢复，其中keyAlias、wrapKeyOptions、wrappedKey为步骤二定义参数\nawait huks.unwrapKeyItem(keyAlias, wrapKeyOptions, wrappedKey).then((data) => {\n  console.info(`promise: unwrapKeyItem success`);\n}).catch((error: Error) => {\n  console.error(`promise: unwrapKeyItem failed`);\n});\n"
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
408307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
663828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438443-88aab9d07bd08973dbd061b391973394.jpg");

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