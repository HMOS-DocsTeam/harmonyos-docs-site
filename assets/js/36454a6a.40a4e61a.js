"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["808960"], {
24656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_introduction_cloudfoundation_introduction_md_364_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-introduction-cloudfoundation-introduction-md-364.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_introduction_cloudfoundation_introduction_md_364_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-introduction/cloudfoundation-introduction","title":"Cloud Foundation Kit简介","description":"Cloud Foundation Kit（云开发服务）可以按需为应用提供云函数、云数据库、云存储、预加载等云端服务。应用运行所需的服务器和环境均可由云端平台提供，开发者只需关注应用的业务逻辑，而无需关心基础设施（例如：服务器、操作系统、容器等）。","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-introduction/cloudfoundation-introduction.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-introduction","slug":"/cloud-foundation-kit-guide/cloudfoundation-introduction/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Cloud Foundation Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"来电横幅通知头像无法显示","permalink":"/harmonyos-docs-site/call-kit-guide/call-faq/call-faq-2/"},"next":{"title":"基本准备工作","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-preparations/cloudfoundation-basic-preparation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-introduction/cloudfoundation-introduction.md


const frontMatter = {
	title: 'Cloud Foundation Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Cloud Foundation Kit简介';

const assets = {

};



const toc = [{
  "value": "优势",
  "id": "优势",
  "level": 2
}, {
  "value": "典型场景",
  "id": "典型场景",
  "level": 2
}, {
  "value": "应用/元服务后端构建",
  "id": "应用元服务后端构建",
  "level": 3
}, {
  "value": "计算密集型任务",
  "id": "计算密集型任务",
  "level": 3
}, {
  "value": "协议适配和转换场景",
  "id": "协议适配和转换场景",
  "level": 3
}, {
  "value": "浪涌式访问场景",
  "id": "浪涌式访问场景",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的签名方式",
  "id": "支持的签名方式",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "计费说明",
  "id": "计费说明",
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
        id: "cloud-foundation-kit简介",
        children: "Cloud Foundation Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud Foundation Kit（云开发服务）可以按需为应用提供云函数、云数据库、云存储、预加载等云端服务。应用运行所需的服务器和环境均可由云端平台提供，开发者只需关注应用的业务逻辑，而无需关心基础设施（例如：服务器、操作系统、容器等）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio中还提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-overview",
        children: "端云一体化开发"
      }), "的开发体验，开发者可以基于统一的技术栈，高效、协同地完成端、云代码的编写、调试、编译和部署，极大提高构建HarmonyOS应用和元服务的效率。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "优势",
      children: "优势"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "低运维成本"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者无需构建和管理云端资源，Cloud Foundation Kit提供了包括函数计算、数据库、存储、预加载等一系列能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹性伸缩、按量计费"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "面对波峰波谷的业务场景，Cloud Foundation Kit可根据实际请求量弹性伸缩、按量计费，开发者无需为空闲资源买单，有效提升资源利用率，降低资源成本。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安全可靠"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持数据全密态加密，支持APP、用户和服务三重认证，提供基于角色的权限管理机制，全方位保障开发者和用户的数据安全。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "端云一体化开发"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中提供了端云一体化开发体验，支持开发者基于统一的技术栈进行端、云代码协同开发，前端开发人员轻松转换为全栈工程师，极大提高构建HarmonyOS应用和元服务的效率、降低开发成本。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型场景",
      children: "典型场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用元服务后端构建",
      children: "应用/元服务后端构建"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "便捷操作云函数、云数据库、云存储、预加载服务，简化应用/元服务开发与运维相关的事务，快速构建应用/元服务的后端服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(124678)/* ["default"] */.A) + "",
        width: "525",
        height: "303"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "计算密集型任务",
      children: "计算密集型任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用中出现计算密集型任务时，可在任务启动时自动分配足够的算力来支撑任务的执行，并在任务结束时自动释放资源，避免浪费。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以为云函数配置定时触发器，定时执行任务，也可以通过其他服务主动调用云函数来执行任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，通过Cloud Foundation Kit实现对数据的渲染、叠加等处理："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对原始数据进行封装，例如对报表数据的处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对数据的同步，例如数据的抽取、转化或者加载。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对视频或者图像的处理，例如生成不同分辨率的视频或者图片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(442315)/* ["default"] */.A) + "",
        width: "525",
        height: "256"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "协议适配和转换场景",
      children: "协议适配和转换场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可用于协议适配和转换，以及第三方平台场景的对接，轻量灵活、快速部署，让开发者的业务快人一步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：可以将数据存储、身份验证、消息队列、推送通知、定时任务等功能切片通过云服务实现胶水层的链接、转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(998955)/* ["default"] */.A) + "",
        width: "525",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "浪涌式访问场景",
      children: "浪涌式访问场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传统架构服务在某些特殊场景下，可能出现大量的访问。为保证业务高峰时，系统能稳定运行，一般需要购买高性能、昂贵的服务器，组建集群负载均衡。但是，当业务回落时，就导致了大量服务器的资源浪费。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud Foundation Kit能根据业务访问量快速自动扩容，规避业务高峰时系统异常的风险，度过业务流量高峰期，使应用从容应对诸如秒杀、节日活动等业务场景；并发量骤降时，弹性伸缩的特性亦支持自动缩容，释放闲置资源，避免浪费。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(532199)/* ["default"] */.A) + "",
        width: "525",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "云函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "云数据库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "云存储"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "预加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cloud-foundation-kit-guide/cloudfoundation-appendix/cloudfoundation-supported-regions",
        children: "支持的国家/地区"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的签名方式",
      children: "支持的签名方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section20943184413328",
        children: "关联注册应用进行自动签名"
      }), "（DevEco Studio 6.0.0 Beta5及以上版本）和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "两种方式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta5版本开始，本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["仅云函数、云数据库、云存储服务支持模拟器。关于如何使用模拟器调试，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cloud-foundation-kit-guide/cloudfoundation-emulator",
          children: "使用模拟器调试"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "计费说明",
      children: "计费说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud Foundation Kit包含云函数、云数据库、云存储、预加载服务，预加载服务支持通过云函数来实现资源加载，云函数、云数据库、云存储服务提供了免费额度以供试用，具体的配额明细请参考各服务的配额说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloud-function-price-0000001211271102",
          children: "云函数计费说明"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-clouddb-price-0000001256815629",
          children: "云数据库计费说明"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-price-0000001253665999",
          children: "云存储计费说明"
        })
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
442315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438883-4705f316911fb363fadb7475184159a9.jpg");

},
532199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478839-f480823bdcdc403a82c7093de720e6c8.jpg");

},
124678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799188-02dc50f6bdc1994c91316d6a637ebc99.jpg");

},
998955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958838-eef19d342686b7515540363fa9048f90.jpg");

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