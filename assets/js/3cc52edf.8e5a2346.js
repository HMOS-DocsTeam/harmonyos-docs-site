"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["258873"], {
134488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_profiler_network_ide_profiler_network_md_3cc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-profiler-network-ide-profiler-network-md-3cc.json
var site_docs_ide_profiler_network_ide_profiler_network_md_3cc_namespaceObject = JSON.parse('{"id":"ide-profiler-network/ide-profiler-network","title":"网络诊断：Network分析","description":"DevEco Profiler提供Network模板，帮助用户在应用运行过程中查看http协议栈网络信息和网络流量信息，http协议栈包括请求分段耗时以及请求具体内容，方便对网络问题进行调优。请求耗时按照以下五种阶段进行划分：DNS 解析、TCP连接、TLS连接、请求等待、接收响应，分别展示在各阶段的耗时，可以针对性的优化时延问题。同时，详情信息将展示每个请求中携带的信息，包含request、response侧及其携带的header、body、cookie信息，方便网络问题定位。","source":"@site/docs/ide-profiler-network/ide-profiler-network.md","sourceDirName":"ide-profiler-network","slug":"/ide-profiler-network/","permalink":"/harmonyos-docs-site/ide-profiler-network/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"网络诊断：Network分析","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-network","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"加载丢帧：ArkWeb分析","permalink":"/harmonyos-docs-site/ide-profiler-arkweb/"},"next":{"title":"并行并发：Concurrency分析","permalink":"/harmonyos-docs-site/ide-parallel-concurrency-analysis/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-profiler-network/ide-profiler-network.md


const frontMatter = {
	title: '网络诊断：Network分析',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-network',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '网络诊断：Network分析';

const assets = {

};



const toc = [{
  "value": "查看网络流量消耗信息",
  "id": "查看网络流量消耗信息",
  "level": 2
}, {
  "value": "查看网络请求各阶段耗时",
  "id": "查看网络请求各阶段耗时",
  "level": 2
}, {
  "value": "分析启动过程网络问题",
  "id": "分析启动过程网络问题",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "网络诊断network分析",
        children: "网络诊断：Network分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Profiler提供Network模板，帮助用户在应用运行过程中查看http协议栈网络信息和网络流量信息，http协议栈包括请求分段耗时以及请求具体内容，方便对网络问题进行调优。请求耗时按照以下五种阶段进行划分：DNS 解析、TCP连接、TLS连接、请求等待、接收响应，分别展示在各阶段的耗时，可以针对性的优化时延问题。同时，详情信息将展示每个请求中携带的信息，包含request、response侧及其携带的header、body、cookie信息，方便网络问题定位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(569133)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前Network模板任务仅支持对Network kit接口中request 类型接口进行录制和调优。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于隐私安全政策，已上架应用市场的应用不支持录制Network分析模板。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看网络流量消耗信息",
      children: "查看网络流量消耗信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击Network Traffic泳道，可在下方数据区查看录制过程中发生的网络流量消耗情况。Summary区域可以查看按照网络接口(Network Interfaces)维度统计每个类型的流量消耗，展示信息包含平均下行流量、下行总流量、下行数据包数、平均上行流量、上行总流量、上行数据包数。", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(806907)/* ["default"] */.A) + "",
          title: "点击放大",
          width: "1546",
          height: "627"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Details区域将展示按时间戳排序的周期上报的网络数据，每个网络数据包含上报时间戳、持续时间、下行流量、下行流量包数、网络数据类型、上行流量、上行流量包数。", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(579604)/* ["default"] */.A) + "",
          title: "点击放大",
          width: "1541",
          height: "632"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看网络请求各阶段耗时",
      children: "查看网络请求各阶段耗时"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Network模板任务并录制相关数据，操作方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-profiler-introduction/deep-recording",
            children: "性能问题定位：深度录制"
          }), "，或在会话区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open File"
            })
          }), "，导入历史数据。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "录制结束等待处理数据完成。点击Network Request泳道，可在下方数据区查看录制过程中发生的网络请求数量变化。Summary区域可查看按照域名(Domain)维度统计展示网络请求耗时，展示信息包含Domain、线程名称、数量、平均耗时、最大耗时、DNS解析/TCP连接/TLS连接/等待响应/接收数据平均耗时、DNS解析/TCP连接/TLS连接/等待响应/接收数据最大耗时。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(362857)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1546",
            height: "608"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择任意Domain，Details区域将展示请求该Domain的所有网络请求耗时，展示信息包含请求ID、线程名称、请求url、重定向url、IP地址、总耗时、DNS 解析耗时、TCP连接耗时、TLS连接耗时、请求等待耗时、接收响应耗时、请求类型、状态码、使用的版本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(215460)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1541",
            height: "658"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择Details中某条数据，泳道区域将以虚线框选展示其耗时方块。同时，右侧More区域展示该请求的Request Headers、Response Headers、Response Body。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(913821)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1542",
            height: "669"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定位到可能造成网络卡顿的网络请求，点选其耗时方块，可以看见该请求各阶段耗时。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(166294)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1542",
            height: "627"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分析启动过程网络问题",
      children: "分析启动过程网络问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Profiler的Network分析任务，提供了启动过程网络问题分析能力，协助开发者解决启动过程的网络问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对调测应用的当前运行情况，DevEco Profiler对其做如下处理："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如选择的是已安装但未启动的应用，在启动该分析任务时，会自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如选择的是正在运行的应用，在启动该分析任务时，会先将应用关停，再自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体操作方法为：在任务列表中单击Network任务后的", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(541857)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "15",
        height: "17"
      }), "按钮。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在分析结束后，呈现出的数据类型以及相应的处理方法，与非启动过程的分析相同。"
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
541857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAYAAAACCvahAAABHUlEQVQ4EaWSza1GUBCGlaADOqADOmBrRQc6oAQLBSjBxp4dOyWICpQwN88kc/LlJN+9NzHJyfmZed75IZAXFrxg5d/wdV2ybZscx+Hy/QlP0yRpmkqSJFIUhWRZJsMwqMBX+HkeyfNcg8lqtq6rvnF38HmeGhxFkbDCMBSytm0rZVkKfszeHEyWOI7VoREiQjayUG7f91LXtboofZ5nPWtm1MxpGfAiShUIAyDI3UxhlJum0cEEQaCQBZgIO8OyrNwVRpFyrB+EfKN3q858bmA84BzHUXdfAB/in+ZgnCy+6bIs7mwArbE+zcFd1ylYVZXu+77rpA32+0XEwdbTfd86FP4i5sA8aAHYNwf7DiAAll+uxX6FLeC3/RX8A1gpYbfFqdsPAAAAAElFTkSuQmCC");

},
215460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912806-8a1981a8ef233dccebe45e6977ee55d1.png");

},
569133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
579604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832721-63d952ca9703f6640cfcddf752d3e7b5.png");

},
806907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912802-c4009789c135eca0dbc884e3bb8102d3.png");

},
166294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752743-1a8493907d476636ec52b53fe0a55f3e.png");

},
913821(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912804-13195432a9d66dd9f4218d9ffeff3285.png");

},
362857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752755-dc15acba33955dc1adeec69e2804ad32.png");

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