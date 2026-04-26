"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["367858"], {
169882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_taas_dev_devicesecurity_taas_securecamera_devicesecurity_taas_securecamera_md_5e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-taas-dev-devicesecurity-taas-securecamera-devicesecurity-taas-securecamera-md-5e2.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_taas_dev_devicesecurity_taas_securecamera_devicesecurity_taas_securecamera_md_5e2_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera/devicesecurity-taas-securecamera","title":"安全摄像头场景","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera/devicesecurity-taas-securecamera.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera","slug":"/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"安全摄像头场景","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-taas-securecamera","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"系统完整性增强检测","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-safetydetect-develop/devicesecurity-sysintegrityenhanced-check/"},"next":{"title":"安全地理位置场景","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securelocation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera/devicesecurity-taas-securecamera.md


const frontMatter = {
	title: '安全摄像头场景',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-taas-securecamera',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '安全摄像头场景';

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
        id: "安全摄像头场景",
        children: "安全摄像头场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在安全摄像头场景中，通过创建证明密钥、打开证明会话的方式，对安全摄像头捕捉到的图像数据进行签名，确保图像数据的真实性和完整性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该特性需要设备支持安全摄像头功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedscenemodes11",
        children: "getSupportedSceneModes"
      }), "方法，当返回值为camera.SceneMode.SECURE_PHOTO，当前设备支持安全摄像头，返回其他值表示当前设备不支持安全摄像头。具体判断方法参考如下示例："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// 获得安全摄像头\nfunction getSecureCameraDevice(cameraManager: camera.CameraManager): camera.CameraDevice {\n    // 获得设备支持的摄像头列表\n    const cameraDevices = cameraManager.getSupportedCameras();\n    if (cameraDevices.length < 1) {\n      throw new Error('no camera devices');\n    }\n    // 获取前置镜头对象。当前安全摄像头仅支持前置镜头。\n    const frontCamera: camera.CameraDevice | undefined = cameraDevices.find((profile: camera.CameraDevice) => {\n      return profile.cameraPosition != camera.CameraPosition.CAMERA_POSITION_BACK;\n    });\n    if (frontCamera === undefined) {\n      throw new Error('no front cameras');\n    }\n    // 检查前置摄像头设备是否支持安全模式；若支持，即可使用该前置摄像头做后续安全摄像头操作。\n    const modes = cameraManager.getSupportedSceneModes(frontCamera);\n    if (modes.indexOf(camera.SceneMode.SECURE_PHOTO) === -1) {\n      throw new Error('current device not support secure camera');\n    }\n    return frontCamera;\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(130762)/* ["default"] */.A) + "",
        width: "995",
        height: "993"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#createattestkey",
              children: "createAttestKey"
            }), "(options: AttestOptions): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建证明密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#initializeattestcontext",
              children: "initializeAttestContext"
            }), "(userData: string, options: AttestOptions): Promise<AttestReturnResult>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化证明会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#finalizeattestcontext",
              children: "finalizeAttestContext"
            }), "(options: AttestOptions): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束证明会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#destroyattestkey",
              children: "destroyAttestKey"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁证明密钥。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入camera模块、trustedAppService模块和相关依赖模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { trustedAppService } from '@kit.DeviceSecurityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-secure-photo",
            children: "安全相机开发指导"
          }), "，初始化安全相机。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者需要完成："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择支持安全相机的设备。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "查询相机设备在安全模式下支持的输出能力。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建设备输入输出。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "打开安全设备（安全摄像头），并获取安全设备序列号。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建证明密钥和初始化证明会话。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(183871)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "只有创建证明密钥成功后，才能初始化证明会话。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "证明密钥的有效期为7天，为了避免反复创建证明密钥，建议先调用初始化证明会话，如果初始化失败，再去销毁、创建证明密钥，然后重新初始化证明密钥。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "每次打开安全摄像头都需要获取设备序列号，只有初始化安全相机证明会话时需要传入有效值，其他场景传“0”即可。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "调用initializeAttestContext初始化证明会话时，userData的长度必须在16到127 Bytes之间。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建证明密钥的参数\nconst createProperties: Array<trustedAppService.AttestParam> = [\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_ALGORITHM,\n    value: trustedAppService.AttestKeyAlg.ATTEST_ALG_ECC\n  },\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_KEY_SIZE,\n    value: trustedAppService.AttestKeySize.ATTEST_ECC_KEY_SIZE_256\n  }\n];\nconst createOptions: trustedAppService.AttestOptions = {\n  properties: createProperties\n};\n// 初始化证明会话的参数\nconst userData = \"trusted_app_service_demo\"; // 示例值，实际值请自行生成，长度在16到127Bytes之间\nconst deviceId = 7483679320805398131; // 示例值，实际值请通过Camera Kit获取\nconst initProperties: Array<trustedAppService.AttestParam> = [\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_TYPE,\n    value: trustedAppService.AttestType.ATTEST_TYPE_CAMERA\n  },\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_ID,\n    value: BigInt(deviceId)\n  }\n];\nconst initOptions: trustedAppService.AttestOptions = {\n  properties: initProperties\n};\n// 创建证明密钥并打开证明会话\nlet certChainList: Array<string>;\ntry {\n  await trustedAppService.createAttestKey(createOptions);\n  const result = await trustedAppService.initializeAttestContext(userData, initOptions);\n  certChainList = result.certChains;\n} catch (err) {\n  const error = err as BusinessError;\n  console.error(`Failed to initialize attest context, message:${error.message}, code:${error.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-secure-photo",
            children: "安全相机开发指导"
          }), "，完成安全相机会话的创建，配置输入、输出流，启动预览流和安全数据流。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束证明会话。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 结束证明会话的参数\nconst finalProperties: Array<trustedAppService.AttestParam> = [\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_TYPE,\n    value: trustedAppService.AttestType.ATTEST_TYPE_CAMERA\n  }\n];\nconst finalOptions: trustedAppService.AttestOptions = {\n  properties: finalProperties,\n};\n// 结束证明会话\ntry {\n  await trustedAppService.finalizeAttestContext(finalOptions);\n} catch (err) {\n  const error = err as BusinessError;\n  console.error(`Failed to finalize attest context, message:${error.message}, code:${error.code}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果需要销毁证明密钥，请在结束证明会话后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#destroyattestkey",
            children: "destroyAttestKey"
          }), "接口。由于安全摄像头、安全地理位置和安全图像压缩、裁剪共用同一个证明密钥，销毁前需要保证安全地理位置功能未在使用该证明密钥。"]
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
183871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
130762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798738-174dccf1997f581f53d923d9c7d116e7.jpg");

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