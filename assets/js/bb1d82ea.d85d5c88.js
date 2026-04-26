"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["331665"], {
651130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avsession_kit_distributed_avsession_distributed_playback_distributed_playback_overview_distributed_playback_overview_md_bb1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avsession-kit-distributed-avsession-distributed-playback-distributed-playback-overview-distributed-playback-overview-md-bb1.json
var site_docs_avsession_kit_distributed_avsession_distributed_playback_distributed_playback_overview_distributed_playback_overview_md_bb1_namespaceObject = JSON.parse('{"id":"avsession-kit/distributed-avsession/distributed-playback/distributed-playback-overview/distributed-playback-overview","title":"播控特性简介","description":"使用媒体播控，可以简单高效地将音视频投放到其他HarmonyOS设备上播放，如在手机上播放的音视频，可以投到2in1设备上继续播放。","source":"@site/docs/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-overview/distributed-playback-overview.md","sourceDirName":"avsession-kit/distributed-avsession/distributed-playback/distributed-playback-overview","slug":"/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-overview/","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"播控特性简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/distributed-playback-overview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用通话设备切换组件","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/using-switch-call-devices/"},"next":{"title":"投播组件开发指导","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-overview/distributed-playback-overview.md


const frontMatter = {
	title: '播控特性简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/distributed-playback-overview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '播控特性简介';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
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
        id: "播控特性简介",
        children: "播控特性简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用媒体播控，可以简单高效地将音视频投放到其他HarmonyOS设备上播放，如在手机上播放的音视频，可以投到2in1设备上继续播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS提供了统一的应用内音视频投播功能设计，通过使用系统提供的投播组件和接口，应用只需要设置对应的资源信息、监听投播中的相关状态，以及应用主动控制的行为（如：播放、暂停）。其他动作包括图标切换、设备的发现、连接、认证等，均由系统完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["媒体会话（", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-avsession/arkts-apis-avsession-avsession",
                children: "AVSession"
              }), "）"]
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音视频管控服务，用于对系统中所有音视频行为进行统一的管理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["本地播放时，应用需要向媒体会话提供播放的媒体信息（如正在播放的歌曲、歌曲的播放状态等），并接收和响应播控中心发出的控制命令（如暂停、下一首等）。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avsession-kit/local-avsession/local-avsession-overview",
            children: "本地媒体会话"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "投播时，通过AVSession，应用可以进行投播能力的设置和查询，并创建投播控制器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以在启动内容显示（比如：视频播放）时，获取支持投播的扩展屏设备并注册监听，当存在扩展屏时，可在扩展屏上全屏绘制要投播的内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["投播组件（", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/avsession-api/avsession-comp/ohos-multimedia-avcastpicker/ohos-multimedia-avcastpicker",
                children: "AVCastPicker"
              }), "）"]
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统级的投播组件，可嵌入应用界面的UI组件。当用户点击该组件后，系统将进行设备发现、连接、认证等流程，应用仅需要通过接口获取投播中相关的回调信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["投播控制器（", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-avcastcontroller/arkts-apis-avsession-avcastcontroller",
                children: "AVCastController"
              }), "）"]
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在投播后，由应用发起的用于控制远端播放的接口，包括播放、暂停、调节音量、设置播放模式、设置播放速度等能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "后台长时任务"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用实现后台播放，需申请后台长时任务，避免应用在投播后被系统后台清理或冻结。具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/background-task-kit/continuous-task",
            children: "长时任务"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(921907)/* ["default"] */.A) + "",
        width: "943",
        height: "431"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "发现和连接设备"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户在应用界面上点击AVCastPicker组件，触发系统发现可用于投播的设备。用户在设备列表中选择对应设备后，系统连接对应设备。应用无需关注设备的发现连接过程，仅需关注设备在远端是否可用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用需要接入AVSession，才可以使用系统提供的统一投播能力，由系统进行设备发现和管理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "进入远端投播"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用通过AVSession监听设备的连接情况，监听到设备已连接后，可通过AVSession获取一个AVCastController对象用于发送控制命令（如播放、暂停、下一首等）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在进入远端投播时，应停止本地的播放器，避免本端和远端设备同时播放的情况。同时，建议应用重新绘制应用界面，比如界面变更为一个遥控器，来控制远端播放。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "在本端控制播放"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在本端（包括应用内和播控中心）控制播放时，控制命令将通过AVCastController发送，系统将完成数据传输和信息同步，然后更新远端系统预置播放器的状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "在远端控制播放"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户同样可以在远端直接控制播放，会直接修改远端播放器的状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "远端播放器状态回调"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当远端播放器状态变更后，会触发回调，将状态信息返回到本端。应用可以通过AVCastController监听到远端播放器的状态变化。"
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
921907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958554-e10061d7767e402974c53f9c15ad1f21.png");

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