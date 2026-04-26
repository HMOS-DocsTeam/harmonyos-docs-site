"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["852646"], {
111931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_profiler_arkweb_ide_profiler_arkweb_md_869_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-profiler-arkweb-ide-profiler-arkweb-md-869.json
var site_docs_ide_profiler_arkweb_ide_profiler_arkweb_md_869_namespaceObject = JSON.parse('{"id":"ide-profiler-arkweb/ide-profiler-arkweb","title":"加载丢帧：ArkWeb分析","description":"应用开发过程中，会通过在APP中嵌入WebView以提高开发效率，可能面临ArkWeb加载和丢帧等问题。DevEco Profiler提供ArkWeb分析模板，可以结合ArkWeb执行流程的关键trace点来定位问题发生的阶段。如果问题发生在渲染阶段，可以结合H:RosenWeb数据，线程运行状态以及帧渲染流程打点数据，进一步分析丢帧问题。","source":"@site/docs/ide-profiler-arkweb/ide-profiler-arkweb.md","sourceDirName":"ide-profiler-arkweb","slug":"/ide-profiler-arkweb/","permalink":"/harmonyos-docs-site/ide-profiler-arkweb/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"加载丢帧：ArkWeb分析","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-arkweb","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"能耗诊断：Energy分析","permalink":"/harmonyos-docs-site/ide-profiler-energy/"},"next":{"title":"网络诊断：Network分析","permalink":"/harmonyos-docs-site/ide-profiler-network/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-profiler-arkweb/ide-profiler-arkweb.md


const frontMatter = {
	title: '加载丢帧：ArkWeb分析',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-arkweb',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '加载丢帧：ArkWeb分析';

const assets = {

};



const toc = [{
  "value": "ArkWeb加载问题分析",
  "id": "arkweb加载问题分析",
  "level": 2
}, {
  "value": "ArkWeb丢帧问题分析",
  "id": "arkweb丢帧问题分析",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "加载丢帧arkweb分析",
        children: "加载丢帧：ArkWeb分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发过程中，会通过在APP中嵌入WebView以提高开发效率，可能面临ArkWeb加载和丢帧等问题。DevEco Profiler提供ArkWeb分析模板，可以结合ArkWeb执行流程的关键trace点来定位问题发生的阶段。如果问题发生在渲染阶段，可以结合H:RosenWeb数据，线程运行状态以及帧渲染流程打点数据，进一步分析丢帧问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkweb加载问题分析",
      children: "ArkWeb加载问题分析"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ArkWeb模板，完成一次录制，录制期间触发Web相关场景。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定界Web问题发生的阶段，分析Web加载问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据Web页面加载过程中的关键trace点，划分了五个阶段，分别是：点击事件（Click Event）， 组件初始化（Component Initialization），主资源下载（Primary Resource Download），子资源下载（Sub-resource Download），渲染输出（Render And Output）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(5653)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1548",
            height: "556"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "详情区可以跳转关键trace所在泳道，进一步分析加载问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "框选可以查看泳道的耗时阶段划分的关键trace点，并可以根据trace信息，关联到所在线程信息。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkweb丢帧问题分析",
      children: "ArkWeb丢帧问题分析"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkWeb子泳道聚合了Web相关线程的trace信息，通过分析Web渲染过程的关键函数的trace点，可以分析出每一帧的执行流程。聚合的Web线程信息如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "H:RosenWeb：用于记录准备提交给Render Service进行统一渲染的数据量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compositor：合成线程，负责图层CPU指令合成，承载动态效果。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CompositorGpuTh：用于从GPU获取渲染结果和将合成的buffer送至图形子系统执行渲染。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Chrome_InProcGpu：光栅化。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "VsyncGenerator：图形侧vsync信号，用于定时生成vsync信号，通知渲染线程或动画线程准备下一帧的渲染。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "VSync-webview：用于接收图形侧发送的vsync信号，并根据信号触发WebView页面的渲染或重绘。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "VizCompositorTh：绘制信号监听线程，向图形请求Web本身的vsync信号，触发系统Web相关绘制或执行。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Web应用Render线程：以 :render 结尾的线程，主要用于图形渲染任务，包括html、css解析，进行分层布局绘制。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(638672)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1871",
            height: "677"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般结合H:RosenWeb泳道和Present Fence泳道来分析是否存在丢帧。H:RosenWeb上标识有待提交给渲染服务的数据量。正常情况下，每个数据量都会提交给硬件进行上屏，即Present Fence泳道上的H:Waiting for Present Fence trace点。如果某个数据量在Present Fence泳道上没有该trace点，那么很可能是存在丢帧问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(186125)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1544",
            height: "526"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 ArkWeb 的子泳道中，Web应用Render线程提供了分析子资源加载各阶段具体耗时的能力。切换到 \"Sub Resource\" 页签，可查看详细信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "包括统一资源定位符、缓存类型、是否为本地资源替换、请求资源时间（ns）、队列时间（ns）、停滞时间（ms）、dns解析时间（ms）、连接耗时（ms）、ssl连接时间（ms）、服务器响应耗时（ms）、下载耗时（ms）、传输时间（ms）、请求方法、状态码、编码前资源大小、编码后资源大小以及HTTP版本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(629863)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1554",
            height: "583"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点选某一行，可以查看该URL对应的缓存信息。包括缓存存在时长、最后修改时刻、过期时刻、缓存指令、资源的唯一标识符以及资源是否过期。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(739169)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1909",
            height: "289"
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
186125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833793-ddfa06e0b4592b05b6cca9cf364b2e57.png");

},
739169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753817-3cf1e87ded0f4b282ee051768011099e.png");

},
638672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753813-234670da0498e4fd4b613d6ff72e967c.png");

},
629863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753876-c9977528d5bd8f7e57d9bbf5a825707f.png");

},
5653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913870-76d3b46d541547a1ad0df8b7002f1b8b.png");

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