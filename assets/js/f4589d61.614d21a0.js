"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["119375"], {
706044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_introduction_scan_introduction_md_f45_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-introduction-scan-introduction-md-f45.json
var site_docs_scan_kit_guide_scan_introduction_scan_introduction_md_f45_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-introduction/scan-introduction","title":"Scan Kit简介","description":"Scan Kit（统一扫码服务）作为软硬协同的系统级扫码服务，创新性地推出了更简单的“扫码直达”接入能力。只需少量的接入工作，无需在应用中开发专门的扫码模块，即可通过系统级扫码入口实现扫码到应用的跳转。同时还为开发者提供了面向各种场景的码图识别和生成能力。","source":"@site/docs/scan-kit-guide/scan-introduction/scan-introduction.md","sourceDirName":"scan-kit-guide/scan-introduction","slug":"/scan-kit-guide/scan-introduction/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Scan Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-introduction","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置铃声","permalink":"/harmonyos-docs-site/ringtone-kit-guide/ringtone-preparations/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-config-agc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-introduction/scan-introduction.md


const frontMatter = {
	title: 'Scan Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-introduction',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Scan Kit简介';

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
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "功能使用限制",
  "id": "功能使用限制",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "scan-kit简介",
        children: "Scan Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scan Kit（统一扫码服务）作为软硬协同的系统级扫码服务，创新性地推出了更简单的“扫码直达”接入能力。只需少量的接入工作，无需在应用中开发专门的扫码模块，即可通过系统级扫码入口实现扫码到应用的跳转。同时还为开发者提供了面向各种场景的码图识别和生成能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scan Kit应用了多项计算机视觉技术和AI算法技术，不仅实现了远距离自动扫码，同时还针对多种复杂扫码场景（如暗光、污损、模糊、小角度、曲面码等）做了识别优化，提升扫码成功率与用户体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便开发者接入，我们提供了详细的样例工程供参考，推荐参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/scankit-samplecode-clientdemo-arkts",
        children: "示例工程"
      }), "接入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scan Kit提供了系统“扫码直达”、开发者应用内扫码等多种能力。优先接入“扫码直达”能力，通过少量的接入工作即可实现开发者应用服务的一步直达。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "扫码直达（推荐）：用户可通过控制中心等系统级的常驻入口，扫描开发者应用的二维码、条形码并跳转到开发者应用对应服务页，实现一步直达的体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认界面扫码：提供系统级体验一致的扫码界面，包含相机预览流，相册扫码入口，暗光环境闪光灯开启提示，具备相机预授权，集成简单，适用于通用扫码场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义界面扫码：提供扫码能力并支持在指定控件上渲染相机预览流，需要开发者实现扫码界面，申请相机权限，适用于对扫码界面有个性化定制的场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图像识码：对图库中的码图或图像数据进行扫描识别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "码图生成：通过文本或字节数组生成码图。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(250142)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scan Kit支持十三种全球主流的码制式的识别和生成以及MULTIFUNCTIONAL CODE的识别。目前已支持的码制式包括QR Code、Data Matrix、PDF417、Aztec、EAN-8、EAN-13、UPC-A、UPC-E、Codabar、Code 39、Code 93、Code 128、 ITF-14。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "扫码直达能力仅支持Phone、Tablet。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["默认界面扫码能力和自定义界面扫码能力仅支持Phone、Tablet、Wearable（从6.1.0(23)版本开始支持带后置相机的Wearable，可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedcameras",
          children: "cameraManager.getSupportedCameras"
        }), "接口查询是否带后置相机）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图像识码能力仅支持Phone、Tablet、Wearable（从6.1.0(23)版本开始支持Wearable）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "码图生成能力支持Phone、Tablet、Wearable、2in1、TV（从5.1.0(18)版本开始支持Wearable、从5.1.1(19)版本开始支持2in1、TV）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能使用限制",
      children: "功能使用限制"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "限制条件"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "扫码直达能力"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1. 当前只支持开发者配置HTTPS架构的网页链接接入扫码直达。其他方式接入如HTTP配置可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "工单"
            }), "联系我们。  2. 当前仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）接入使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "默认界面扫码能力"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从6.1.0(23)版本开始，标题支持根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanoptions",
              children: "ScanOptions"
            }), "的scanTypes进行动态显示；从6.0.0(20)版本开始，支持悬浮屏、分屏场景；相册扫码只支持单码识别；不支持界面UX添加自定义设置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义界面扫码能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要授权使用相机权限；需要开发者自行实现扫码的人机交互界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "码图生成能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过字节数组生成码图时，若Scan Kit识别某码图内容显示内容为乱码，则该码图的字节数组需要通过专门的解码器解析，例如地铁闸机。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器开发，但与真机存在部分能力差异，具体差异如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通用差异：请参见“", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
            children: "模拟器与真机的差异"
          }), "”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从6.0.0(20)版本开始，模拟器支持默认界面扫码能力开发，模拟器中默认界面扫码的相机流存在镜像问题，且由于仅支持固定分辨率比例，画面会出现上下黑边。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模拟器部分支持自定义界面扫码能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["从6.0.0(20)版本开始，模拟器支持部分自定义界面扫码接口开发（支持的接口包括", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscaninit",
              children: "init"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstart",
              children: "start"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstop",
              children: "stop"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrelease",
              children: "release"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrescan",
              children: "rescan"
            }), "），可实现自定义界面扫码能力的基本功能验证。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "模拟器自定义界面扫码能力仅支持1280*720分辨率，开发者传入其他分辨率会统一转换成1280*720。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模拟器不支持图像数据识别能力、码图生成能力。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Scan Kit提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/scankit-samplecode-clientdemo-arkts",
        children: "示例工程"
      }), "体现了Scan Kit的默认界面扫码、自定义界面扫码、图像识码、码图生成等特性，可参考该工程进行应用的相关内容开发。"]
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
250142(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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