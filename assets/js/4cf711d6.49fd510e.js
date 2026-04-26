"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["169754"], {
983475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avsession_kit_avsession_overview_avsession_overview_md_4cf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avsession-kit-avsession-overview-avsession-overview-md-4cf.json
var site_docs_avsession_kit_avsession_overview_avsession_overview_md_4cf_namespaceObject = JSON.parse('{"id":"avsession-kit/avsession-overview/avsession-overview","title":"AVSession Kit简介","description":"AVSession Kit（Audio & Video Session Kit，音视频播控服务）是系统提供的音视频管控服务，用于统一管理系统中所有音视频行为，帮助开发者快速构建音视频统一展示和控制能力。","source":"@site/docs/avsession-kit/avsession-overview/avsession-overview.md","sourceDirName":"avsession-kit/avsession-overview","slug":"/avsession-kit/avsession-overview/","permalink":"/harmonyos-docs-site/avsession-kit/avsession-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"AVSession Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-overview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"媒体数据解析","permalink":"/harmonyos-docs-site/avcodec-kit/file-muxing-demuxing/audio-video-demuxer/"},"next":{"title":"本地媒体会话概述","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/local-avsession-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avsession-kit/avsession-overview/avsession-overview.md


const frontMatter = {
	title: 'AVSession Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-overview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'AVSession Kit简介';

const assets = {

};



const toc = [{
  "value": "能力范围",
  "id": "能力范围",
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
  "value": "媒体会话交互过程",
  "id": "媒体会话交互过程",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "avsession-kit简介",
        children: "AVSession Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVSession Kit（Audio & Video Session Kit，音视频播控服务）是系统提供的音视频管控服务，用于统一管理系统中所有音视频行为，帮助开发者快速构建音视频统一展示和控制能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供音视频统一管控能力，音视频类应用接入AVSession后，可以发送应用的数据（比如正在播放的歌曲、歌曲的播放状态等），用户可以通过系统播控中心、语音助手等应用切换多个应用、多个设备播放。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供音频后台约束能力，音频接入AVSession后，可以进行后台音频播放。此功能需要同时申请", (0,jsx_runtime.jsx)(_components.a, {
          href: "/background-task-kit/continuous-task",
          children: "长时任务"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "投播体验一致"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供音视频统一管控能力，音视频类应用接入AVSession后，可以发送应用的数据（比如正在播放的歌曲、歌曲的播放状态等）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户可以通过系统播控中心、语音助手等应用切换多个应用、多个设备播放。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "规范后台播放管理"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过播控中心，应用后台播放可见可控，音视频应用可统一控制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统针对后台播放进行强制管控，当未接入AVSession的应用退到后台时，或接入AVSession的应用退到后台但无有效的AVSession实例时，将会被强制暂停音频播放。解决应用在后台恶意播放，用户无法找到对应应用进行关闭的问题。"
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
          children: "媒体会话（AVSession）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话的一端连接被控的音视频应用，另一端连接音视频应用的控制端（如播控中心、语音助手等）。媒体会话提供了音视频应用和音视频应用控制端之间进行信息交换的通道。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话提供方"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话提供方指接入媒体会话的音视频应用。音视频应用接入媒体会话后，需要向媒体会话提供播放的媒体信息，例如播放曲目名称、播放状态等。同时，音视频应用需要通过媒体会话接收控制端发出的控制命令并进行正确响应。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话控制方"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话控制方指接入媒体会话并具有全局管控音视频行为功能的应用，例如系统播控中心、语音助手等。为便于开发者理解，下文将多处使用系统应用播控中心，作为媒体会话控制方举例。播控中心等系统应用接入媒体会话后，可以通过监听媒体会话获取最新的媒体信息，也可以通过媒体会话向音视频应用发出控制命令。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话控制器（AVSessionController）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话控制器的持有者，一般指媒体会话控制方，可以控制媒体会话提供方的应用播放行为，也可以获取应用的播放信息，还可以监听音视频应用播放状态的变化，用于确保媒体会话信息在音视频应用和播控中心之间的同步。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话管理器（AVSessionManager）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话管理器提供了管理媒体会话的能力，可以创建媒体会话、创建媒体会话控制器、发送系统控制事件，也支持对媒体会话的状态进行监听。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体会话交互过程",
      children: "媒体会话交互过程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体会话分为本地和分布式两种场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605106)/* ["default"] */.A) + "",
        width: "2230",
        height: "877"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本地媒体会话"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本地媒体会话在本地设备中的媒体会话提供方和媒体会话控制方之间建立连接，实现系统中音视频应用统一的媒体播放控制和媒体信息显示。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分布式媒体会话"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分布式媒体会话在跨设备场景中的媒体会话提供方和媒体会话控制方之间建立连接，实现音视频应用跨设备的媒体播放控制和媒体信息显示。例如，将设备A中播放的内容投播到设备B，并在设备B中进行播放控制。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所有需要进行后台播放的音视频应用，都需要同时接入AVSession和后台任务管理，未接入的应用在退到后台时，将会被强制暂停音频播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用实现后台播放时，需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/background-task-overview",
        children: "Background Tasks Kit"
      }), "（后台任务管理）的能力，申请对应的长时任务，避免进入挂起（Suspend）状态。"]
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
605106(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798904-569be7a9808ef6db0ec9020952fdbf07.png");

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