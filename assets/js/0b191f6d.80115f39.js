"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["612289"], {
714957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_profiler_gpu_ide_profiler_gpu_md_0b1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-profiler-gpu-ide-profiler-gpu-md-0b1.json
var site_docs_ide_profiler_gpu_ide_profiler_gpu_md_0b1_namespaceObject = JSON.parse('{"id":"ide-profiler-gpu/ide-profiler-gpu","title":"GPU活动分析","description":"从DevEco Studio 6.0.0 Beta3版本开始，DevEco Profiler提供GPU模板展示不同GPU硬件模块利用率的详细信息，这些信息可用于识别GPU利用率低、执行图形和计算工作负载性能瓶颈的根本原因。","source":"@site/docs/ide-profiler-gpu/ide-profiler-gpu.md","sourceDirName":"ide-profiler-gpu","slug":"/ide-profiler-gpu/","permalink":"/harmonyos-docs-site/ide-profiler-gpu/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"GPU活动分析","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-gpu","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"并行并发：Concurrency分析","permalink":"/harmonyos-docs-site/ide-parallel-concurrency-analysis/"},"next":{"title":"基础耗时：Time分析","permalink":"/harmonyos-docs-site/ide-insight-session-time/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-profiler-gpu/ide-profiler-gpu.md


const frontMatter = {
	title: 'GPU活动分析',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-gpu',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = 'GPU活动分析';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
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
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "gpu活动分析",
        children: "GPU活动分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta3版本开始，DevEco Profiler提供GPU模板展示不同GPU硬件模块利用率的详细信息，这些信息可用于识别GPU利用率低、执行图形和计算工作负载性能瓶颈的根本原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该功能仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持Phone设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建GPU分析任务并录制相关数据，操作方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-profiler-introduction/deep-recording",
            children: "性能问题定位：深度录制"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["GPU分析任务支持在录制前单击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(526476)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "13",
            height: "16"
          }), "指定要录制的泳道。单击工具控制栏中的", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(419241)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "20",
            height: "21"
          }), "按钮，可以设置采样时间间隔（Sampling Interval），可设置范围为1ms~1000ms，默认为10ms。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["“Counters”泳道显示当前设备GPU的使用率，“ArkTS Callstack”、“Callstack”、“CPU Core”等泳道信息请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-insight-session-time",
            children: "基础耗时：Time分析"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-insight-session-cpu",
            children: "CPU活动分析"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(261160)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1546",
            height: "617"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将“Counters”泳道展开，子泳道显示GPU各项活动信息，包括counters_gather、GPU执行命令的频率、GPU执行命令的持续时间等。除counters_gather外，其他子泳道信息可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/Tools-Guides/gpu-counters-0000001886127538",
            children: "GPU Counters"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(207582)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1311",
            height: "750"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "counters_gather泳道显示线程对各CPU核心的占用情况。单击运行状态的时间片段，显示线程在该时间片段的起始时间、持续时长、运行状态、频率、线程优先级、所属进程、所属线程、上一运行状态、下一运行状态，并且支持跳转到上个或者下个线程运行状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(846381)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1167",
            height: "754"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "框选counters_gather泳道，可查看此时间段内的统计信息，包括线程状态统计信息、CPU单线程使用情况、线程中的中载重载数据统计。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(290395)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1453",
            height: "807"
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
419241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAACEElEQVQ4EaWT3U4aQRTHfSgShPlkpeEBlrXuzOqVpc3uAtcF3gSkUNO0Agt41domVsT9wlJrekXQJygihHDfwCYCyWJbm8zFJOf8zvmfOfPfGE+mTz4bTybHk+la+PRrq9e/6fVvTs9a6xr4w0eVKkQIwvlB+KhS8+VX4Lv78ceTz7bTEcU4wkSWGWMMYyLGJdvpfDr5MhiOlquswPlCMRaLURrBGHOueHmM87kKuBWNFopv/GHbvSSUQoj2XyQymWz36tq0XdN2r65/vs7kEi9fbUWfhcLAdi8f+EXnZCodDG7WjMZ4MrWcDmPcm5kxbjmd8WRaNerB4GYqlfaBGeMRQTAazcFwxBgHAKiqpqoaAIAxPhiO6o1jSgVRknzgUvkQE6rs7bVNC0CoarqXpKo6gLB9YXFlFxNysDT2Qnap/BZjqii75xersDaHTZtzhVJaKh/6dGazmFBvHP+6u5cZDwOg6bqm6wAAeS7baDQjgiBtP/eBk8l0IBCoGfXZg9muzDiACEAkM27Z7h8e7N37DxgThPFsVdlc9/sP03JMy+l862ayuf1EAiFMKHV8VzWeTPOFYigcxpgAiBjnnrzZzhDGhIRC4fxB8UGzjzEqVeO8bUrSNsJkR2Y7MsOEiGL8rNU26s1l0gf2wp4xAIAAQIjQXxljufDckre9/u0/W3K5yiP3xSd5JGld6L/g35K+vevoQ/eLAAAAAElFTkSuQmCC");

},
207582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913084-9e42d817acfa0de27bed612349db7192.png");

},
846381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833021-977360f25a1d0de8649749ace0de2f33.png");

},
261160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753088-6096b0686d81a9aebec88a539b21711b.png");

},
290395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753035-c3242dd91bf29ed941f402428fa52c56.png");

},
526476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAAyklEQVQ4EWP4+Pnrf1IxA6kaQOrJ03T23IX/rW3tROFrN26CvcKwYtXq/yD84tWb/yADcDkXpGb+wkUQTfcfPv5fVFzyf+26Df8zs7L/796zD0MjSAykBqQW7ieQLdU1tf+XLV8JppFtA2kAyYHUwMThAQHTiGwTNg1wm2AmgDQmJCbBTQQ5B9kGmDq4TTABZE0gf8DEkWm8mpANoJ2mI0ePg6MA2QYYG8N5oLgCpZCW1jZ4vMAUw2gMTaBUgRzsMIXINIYmZElcbAAl4uc2IBtrbQAAAABJRU5ErkJggg==");

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