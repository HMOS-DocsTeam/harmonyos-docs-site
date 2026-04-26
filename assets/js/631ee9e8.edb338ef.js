"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["850846"], {
613471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_assetdownload_graphics_accelerate_assetdownload_service_graphics_accelerate_assetdownload_introduction_graphics_accelerate_assetdownload_introduction_md_631_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-assetdownload-graphics-accelerate-assetdownload-service-graphics-accelerate-assetdownload-introduction-graphics-accelerate-assetdownload-introduction-md-631.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_assetdownload_graphics_accelerate_assetdownload_service_graphics_accelerate_assetdownload_introduction_graphics_accelerate_assetdownload_introduction_md_631_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-introduction/graphics-accelerate-assetdownload-introduction","title":"业务概述","description":"从5.1.0(18)版本开始，新增资源包后台下载。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-introduction/graphics-accelerate-assetdownload-introduction.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-introduction","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-introduction/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"业务概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-introduction","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"OpenGTX功能开发","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-opengtx/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-prepare/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-introduction/graphics-accelerate-assetdownload-introduction.md


const frontMatter = {
	title: '业务概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-introduction',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '业务概述';

const assets = {

};



const toc = [{
  "value": "主要功能",
  "id": "主要功能",
  "level": 2
}, {
  "value": "系统后台下载资源包",
  "id": "系统后台下载资源包",
  "level": 3
}, {
  "value": "系统后台切应用前台接续下载资源包",
  "id": "系统后台切应用前台接续下载资源包",
  "level": 3
}, {
  "value": "应用前台下载资源包",
  "id": "应用前台下载资源包",
  "level": 3
}, {
  "value": "应用前台切应用后台下载资源包",
  "id": "应用前台切应用后台下载资源包",
  "level": 3
}, {
  "value": "实现流程",
  "id": "实现流程",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "业务概述",
        children: "业务概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)版本开始，新增资源包后台下载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源包后台下载是将资源文件（例如关卡包、3D角色模型、纹理等）静默下载到用户设备中，减少游戏启动后等待资源包下载的时间，解决游戏启动慢的问题，为用户提供即开即玩的游戏体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主要功能",
      children: "主要功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统后台下载资源包",
      children: "系统后台下载资源包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景一"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户在应用市场安装游戏后、或在应用市场更新游戏后，在游戏未启动状态下，若检测到该游戏有资源包需要更新，将自动触发资源包下载。用户下拉通知栏，实时查看资源包下载进度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(238294)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1400",
            height: "1400"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景二"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "待用户设备满足闲时条件时，在游戏未启动状态下，若检测到上次更新资源包未完成，或该游戏有新的资源包需要更新，将自动触发资源包下载。用户下拉通知栏，实时查看资源包下载进度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(718430)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1400",
            height: "1400"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统后台切应用前台接续下载资源包",
      children: "系统后台切应用前台接续下载资源包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在应用市场安装游戏后、或在应用市场更新游戏后，在游戏未启动状态下，若检测到该游戏有资源包需要更新，将自动触发资源包下载。用户下拉通知栏，实时查看资源包下载进度。在下载过程中点击游戏App，游戏接管未完成的下载任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(166019)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1400",
        height: "1400"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用前台下载资源包",
      children: "应用前台下载资源包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户点击游戏App，若检测到上次更新资源包未完成，或该游戏有新的资源包需要更新，游戏将接续执行未完成的下载任务或提交新的下载任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(219745)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1400",
        height: "1400"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用前台切应用后台下载资源包",
      children: "应用前台切应用后台下载资源包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(727280)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/continuous-task",
        children: "dataTransfer类型的长时任务"
      }), "协同使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用前台下载资源包的过程中，将游戏切至后台，资源包下载任务不中断。用户下拉通知栏，实时查看资源包下载进度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(224573)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1290",
        height: "1290"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现流程",
      children: "实现流程"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-prepare",
              children: "开发准备"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者需提前做好相关准备工作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发资源包后台下载功能：  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-system",
              children: "系统后台下载资源包"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-fore",
              children: "应用前台下载资源包"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back-fore",
              children: "系统后台切应用前台接续下载资源包"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者可以在游戏工程中接入资源包系统后台下载、应用前台下载、系统后台切应用前台接续下载功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发布资源包下载任务：  1. ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-release#%E8%BF%9B%E5%85%A5%E7%94%B3%E8%AF%B7%E9%A1%B5%E9%9D%A2",
              children: "进入申请页面"
            }), "  2. ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-release#%E5%88%9B%E5%BB%BA%E4%B8%8B%E8%BD%BD%E4%BB%BB%E5%8A%A1",
              children: "创建下载任务"
            }), "  3. ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-release#%E6%8F%90%E4%BA%A4%E4%B8%8B%E8%BD%BD%E4%BB%BB%E5%8A%A1",
              children: "提交下载任务"
            }), "  4. ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-release#%E6%B5%8B%E8%AF%95%E4%B8%8B%E8%BD%BD%E5%8A%9F%E8%83%BD",
              children: "测试下载功能"
            }), "  5. ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-release#%E5%8F%91%E5%B8%83%E4%B8%8B%E8%BD%BD%E4%BB%BB%E5%8A%A1",
              children: "发布下载任务"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者需前往AppGallery Connect创建并发布下载资源包任务。建议开发者在正式发布资源包下载任务前，先在本地测试是否可以成功下载资源包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-data",
              children: "查看资源包分发数据"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源包下载任务正式发布后，开发者可以前往AppGallery Connect查看资源包分发情况。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "概念"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容分发网络（Content Delivery Network），是一种通过网络中分布资源服务器，用以提高网站访问速度的技术。当前资源包后台下载功能支持游戏在AppGallery Connect配置华为CDN或三方CDN的资源包下载配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "资源加速ExtensionAbility"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability",
              children: "ExtensionAbility"
            }), "组件是基于特定场景（例如服务卡片、输入法）提供的应用组件，以便满足更多的使用场景。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability",
              children: "资源加速ExtensionAbility"
            }), "是为资源包后台下载框架，为资源包后台下载提供关键的生命周期函数。在后台下载任务成功/失败/结束后支持调用相应的回调函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "系统后台下载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏应用进程未加载时，系统能力自动开启资源包下载任务。"
          })]
        })]
      })]
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
727280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
219745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958716-42088d904a927acc721760ee9834ffb5.gif");

},
166019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438761-9b486428d33cedddec2f94e0a2e1d31e.gif");

},
224573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478717-ffa5ca4de574d13d5720821d45b9d81c.gif");

},
718430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799066-0a308653e38e2ecada7f2b78ce2f1996.gif");

},
238294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478715-5f3d0abe258f8019f10953ec187d1412.gif");

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