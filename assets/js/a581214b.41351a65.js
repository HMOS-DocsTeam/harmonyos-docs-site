"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["440602"], {
968097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_drm_kit_drm_overview_drm_overview_md_a58_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-drm-kit-drm-overview-drm-overview-md-a58.json
var site_docs_drm_kit_drm_overview_drm_overview_md_a58_namespaceObject = JSON.parse('{"id":"drm-kit/drm-overview/drm-overview","title":"DRM Kit 简介","description":"DRM Kit（Digital Rights Management Kit，数字版权保护服务）提供了DRM加密节目授权解密的功能，包括DRM插件管理、DRM证书管理、DRM许可证管理、DRM节目授权、DRM节目解密等功能，可实现DRM解决方案的集成、DRM解决方案的证书下载、节目的授权及解密。","source":"@site/docs/drm-kit/drm-overview/drm-overview.md","sourceDirName":"drm-kit/drm-overview","slug":"/drm-kit/drm-overview/","permalink":"/harmonyos-docs-site/drm-kit/drm-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"DRM Kit 简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-overview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用相机预配置(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-preconfig-native/"},"next":{"title":"数字版权保护(ArkTS)","permalink":"/harmonyos-docs-site/drm-kit/drm-arkts-dev-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/drm-kit/drm-overview/drm-overview.md


const frontMatter = {
	title: 'DRM Kit 简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-overview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'DRM Kit 简介';

const assets = {

};



const toc = [{
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "基础概念",
  "id": "基础概念",
  "level": 2
}, {
  "value": "工作流程",
  "id": "工作流程",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "drm-kit-简介",
        children: "DRM Kit 简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DRM Kit（Digital Rights Management Kit，数字版权保护服务）提供了DRM加密节目授权解密的功能，包括DRM插件管理、DRM证书管理、DRM许可证管理、DRM节目授权、DRM节目解密等功能，可实现DRM解决方案的集成、DRM解决方案的证书下载、节目的授权及解密。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过DRM Kit，DRM解决方案集成方可以完成DRM解决方案的集成，应用开发者可以通过调用对应的DRM解决方案，实现DRM加密节目授权解密的功能，实现DRM节目的播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DRM插件管理: 通过实现DRM Kit提供的DRM HDI接口，实现对不同的DRM解决方案的支持，一般由DRM解决方案集成方实现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DRM证书管理：支持DRM解决方案的设备证书的请求、处理，实现对应DRM解决方案的证书下载（Provision）功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DRM许可证管理：支持离线许可证的请求、处理及删除等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DRM节目授权：支持在线许可证请求及处理、离线许可证的加载、媒体密钥状态查询，并支持按照DRM许可证的权限要求对DRM节目授权。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DRM节目解密：支持的媒体协议：HLS、DASH；封装格式：MP4、TS；视频编码格式：H264、H265<!--RP2End->"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "、H265<!--RP2End->"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。；音频编码格式：AAC。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(192861)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DRM证书管理、DRM许可证管理、DRM节目授权、DRM节目解密依赖对应的DRM解决方案的实现。应用开发者可以自行扩展支持的媒体协议、封装格式、视音频编码格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持许可证及解密会话管理"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持多MediaKeySession会话，并支持在会话中申请和设置许可证，将解密会话与许可证绑定。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持安全视频通路"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持安全视频通路，实现安全解密、安全解码、安全渲染、安全输出等。DRM Kit仅提供安全解密接口的调用以实现安全解密，安全解密、安全解码、安全渲染、安全输出等依赖DRM解决方案及操作系统的实现。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础概念",
      children: "基础概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发前，需要先了解以下基础概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM插件（DRM Plugin）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "集成于系统中，实现DRM HDI层接口的DRM解决方案驱动，实现DRM相关功能。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM解决方案"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文中将会使用com.wiseplay.drm作为样例。com.wiseplay.drm是DRM解决方案名称，对应的DRM解决方案 UUID为“3d5e6d359b9a41e8b843dd3c6e72c42c”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MediaKeySystem"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MediaKeySystem用于DRM证书管理及MediaKeySession管理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MediaKeySession"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MediaKeySession用于许可证管理及媒体节目解密，生命周期由MediaKeySystem管理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM信息（MediaKeySystemInfo）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM节目加密的描述信息，包括DRM解决方案UUID及pssh数据等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "pssh （Protection System Specific Header Box，内容保护系统专有头）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM解决方案用于描述DRM节目如何加密的数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM证书（DRM Certificate）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM解决方案需要DRM证书才能正常工作，不同的DRM解决方案有不同的DRM证书。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM证书下载（Provision）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM解决方案采用DRM证书下载流程下载证书，不同DRM解决方案的证书下载流程不一样。如需要下载DRM证书，请参考DRM解决方案的实现要求。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "许可证（License）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DRM解决方案使用许可证实现对设备的DRM授权，一般许可证支持的权限控制策略有安全级别、输出控制、起始播放时间、结束播放时间等，不同的DRM解决方案采用的DRM许可证的格式不一样，支持的权限控制策略也不同。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视音频数据帧加密信息（cencinfo）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视音频数据帧加密的描述信息，包括加密算法及模式、KeyId、IV、subsample信息等。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工作流程",
      children: "工作流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DRM插件管理功能一般由DRM解决方案集成方实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用集成DRM Kit工作流程如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(122800)/* ["default"] */.A) + "",
        width: "1952",
        height: "893"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工作流程主要包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建MediaKeySystem及MediaKeySession实例：应用获取节目的DRM信息，根据DRM信息中的解决方案UUID类型创建MediaKeySystem及MediaKeySession。应用可以通过业务提供的DRM描述得到节目的DRM信息，也可以根据Media Kit或AVCodec Kit抛出的mediaKeySystemInfoUpdate事件或MediaKeySystemInfo回调得到节目的DRM信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书下载：在创建MediaKeySession时，如无DRM证书或DRM证书异常，DRM Kit将抛出需下载DRM证书的事件（keySystemRequired），此时可以调用MediaKeySystem的证书下载相关接口完成证书下载。也可以根据DRM解决方案实现的要求，检查DRM证书状态，如无DRM证书或DRM证书异常，也可主动调用MediaKeySystem的证书下载相关接口完成证书下载。如DRM解决方案的证书正常或DRM解决方案无需应用下载证书，则跳过此步骤。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "许可证获取：应用根据DRM事件中的pssh数据调用MediaKeySession的许可证相关接口完成DRM许可证的请求、处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DRM节目解密：应用将MediaKeySession设置到Media Kit或AVCodec Kit，用于支持DRM节目解密。采用AVCodec Kit时，可以设置视音频数据帧的cencinfo，并设置到AVBuffer中，在调用PushInputBuffer的时候实现视音频数据帧的解密、解码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "许可证更新或过期：在节目播放过程中，在许可证需要更新的情况下，MediaKeySession将抛出许可证更新事件（keyRequired），此时需要重新请求DRM许可证。MediaKeySession如抛出许可证过期事件（keyExpired），则需要停止DRM节目播放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "、H265<!--RP2End->"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况-1",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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
122800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958584-4e0207e5dcc715367875c05ef6b51445.png");

},
192861(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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