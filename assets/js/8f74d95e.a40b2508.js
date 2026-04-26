"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["113800"], {
216311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_drm_kit_drm_avplayer_arkts_integration_drm_avplayer_arkts_integration_md_8f7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-drm-kit-drm-avplayer-arkts-integration-drm-avplayer-arkts-integration-md-8f7.json
var site_docs_drm_kit_drm_avplayer_arkts_integration_drm_avplayer_arkts_integration_md_8f7_namespaceObject = JSON.parse('{"id":"drm-kit/drm-avplayer-arkts-integration/drm-avplayer-arkts-integration","title":"基于AVPlayer播放DRM节目(ArkTS)","description":"开发者可以调用DRM Kit和Media Kit的ArkTS接口实现AVPlayer播放器，完成DRM节目播放。","source":"@site/docs/drm-kit/drm-avplayer-arkts-integration/drm-avplayer-arkts-integration.md","sourceDirName":"drm-kit/drm-avplayer-arkts-integration","slug":"/drm-kit/drm-avplayer-arkts-integration/","permalink":"/harmonyos-docs-site/drm-kit/drm-avplayer-arkts-integration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"基于AVPlayer播放DRM节目(ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-avplayer-arkts-integration","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数字版权保护(C/C++)","permalink":"/harmonyos-docs-site/drm-kit/drm-c-dev-guide/"},"next":{"title":"基于AVCodec播放DRM节目(C/C++)","permalink":"/harmonyos-docs-site/drm-kit/drm-avcodec-integration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/drm-kit/drm-avplayer-arkts-integration/drm-avplayer-arkts-integration.md


const frontMatter = {
	title: '基于AVPlayer播放DRM节目(ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-avplayer-arkts-integration',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '基于AVPlayer播放DRM节目(ArkTS)';

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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "基于avplayer播放drm节目arkts",
        children: "基于AVPlayer播放DRM节目(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用DRM Kit和Media Kit的ArkTS接口实现AVPlayer播放器，完成DRM节目播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入DRM Kit和Media Kit接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { drm } from '@kit.DrmKit'\nimport { media } from '@kit.MediaKit'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入BusinessError模块抛出Drm Kit接口的错误码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-f/arkts-apis-media-f#mediacreateavplayer9",
            children: "createAVPlayer"
          }), "，创建AVPlayer实例并设置DRM信息监听事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let playerHandle: media.AVPlayer;\nasync function initPlayer() {\nplayerHandle = await media.createAVPlayer();\nplayerHandle.on('mediaKeySystemInfoUpdate', async (mediaKeySystemInfo: drm.MediaKeySystemInfo[]) => {\nconsole.info('player has received drmInfo signal: ' + JSON.stringify(mediaKeySystemInfo))\n// 处理DRM信息。\n// 设置解密session。\n})\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-f/arkts-apis-drm-f#drmcreatemediakeysystem",
            children: "createMediaKeySystem"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysystem/arkts-apis-drm-mediakeysystem#createmediakeysession",
            children: "createMediaKeySession"
          }), "根据DRM信息中的uuid创建MediaKeySystem和MediaKeySession实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let mediaKeySystem: drm.MediaKeySystem\nlet mediaKeySession: drm.MediaKeySession\nlet drmInfoArr: drm.MediaKeySystemInfo[] = mediaKeySystemInfo\nfor (let i = 0; i < drmInfoArr.length; i++) {\n  console.info('drmInfoArr - uuid: ' + drmInfoArr[i].uuid)\n  console.info('drmInfoArr - pssh: ' + drmInfoArr[i].pssh)\n  let description: drm.MediaKeySystemDescription[] = drm.getMediaKeySystems();\n  let solutionName: string = \"com.wiseplay.drm\"\n  for (let item of description) {\n    if (drmInfoArr[i].uuid == item.uuid) {\n      solutionName = item.name\n      }\n    }\n    let isSupported: boolean = drm.isMediaKeySystemSupported(solutionName, \"video/mp4\");\n    if (isSupported) {\n      mediaKeySystem = drm.createMediaKeySystem(solutionName);\n      mediaKeySession = mediaKeySystem.createMediaKeySession();\n  }\n  // 媒体密钥请求与处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#generatemediakeyrequest",
            children: "generateMediaKeyRequest"
          }), "生成媒体密钥请求，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#processmediakeyresponse",
            children: "processMediaKeyResponse"
          }), "处理媒体密钥响应。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let initData: Uint8Array = new Uint8Array(drmInfoArr[i].pssh);\nconst optionsData: drm.OptionsData[] = [{\n  name: \"optionalDataName\",\n  value: \"optionalDataValue\"\n}]\nmediaKeySession.generateMediaKeyRequest(\"video/mp4\", initData, drm.MediaKeyType.MEDIA_KEY_TYPE_ONLINE, optionsData).then(async (licenseRequest) => {\n  console.info(\"generateMediaKeyRequest success\", licenseRequest.mediaKeyRequestType, licenseRequest.data, licenseRequest.defaultURL);\n  // 将媒体密钥请求返回的licenseRequest.data通过网络请求发送给DRM服务获取媒体密钥响应，并处理。\n  let licenseResponse = new Uint8Array([0x00, 0x00, 0x00, 0x00]);\n  mediaKeySession.processMediaKeyResponse(licenseResponse).then((mediaKeyId: Uint8Array) => {\n    console.info(\"processMediaKeyResponse success\");\n  }).catch((err:BusinessError) =>{\n    console.error(\"processMediaKeyResponse err end\", err.code);\n  });\n}).catch((err:BusinessError) =>{\n  console.error(\"generateMediaKeyRequest err end\", err.code);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#requiresecuredecodermodule",
            children: "requireSecureDecoderModule"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#setdecryptionconfig11",
            children: "setDecryptionConfig"
          }), "，在处理媒体密钥响应成功后设置解密session。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let svp: boolean = mediaKeySession.requireSecureDecoderModule('video/avc');\nplayerHandle.setDecryptionConfig(mediaKeySession, svp)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁AVPlayer实例并根据released事件监听销毁MediaKeySession和MediaKeySystem实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "playerHandle.on('stateChange', async (state: string, reason: media.StateChangeReason) => {\n   if (state == 'released') {\n      mediaKeySession.destroy();\n      mediaKeySystem.destroy();\n   } else if (state == 'releasing') {\n      await playerHandle.release();\n   }\n})\n"
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