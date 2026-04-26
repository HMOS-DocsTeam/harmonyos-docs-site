"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["164532"], {
407157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_build_on_multi_thread_ndk_build_on_multi_thread_md_b84_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-build-on-multi-thread-ndk-build-on-multi-thread-md-b84.json
var site_docs_arkui_arkts_use_ndk_ndk_build_on_multi_thread_ndk_build_on_multi_thread_md_b84_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-build-on-multi-thread/ndk-build-on-multi-thread","title":"使用多线程NDK接口并行化构建UI页面","description":"概述","source":"@site/docs/arkui/arkts-use-ndk/ndk-build-on-multi-thread/ndk-build-on-multi-thread.md","sourceDirName":"arkui/arkts-use-ndk/ndk-build-on-multi-thread","slug":"/arkui/arkts-use-ndk/ndk-build-on-multi-thread/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-on-multi-thread/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"使用多线程NDK接口并行化构建UI页面","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-build-on-multi-thread","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"在NDK中保证多实例场景功能正常","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-scope-task/"},"next":{"title":"UI开发 (兼容JS的类Web开发范式)概述","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-build-on-multi-thread/ndk-build-on-multi-thread.md


const frontMatter = {
	title: '使用多线程NDK接口并行化构建UI页面',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-build-on-multi-thread',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用多线程NDK接口并行化构建UI页面';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "多线程NDK接口使用方式",
  "id": "多线程ndk接口使用方式",
  "level": 2
}, {
  "value": "多线程NDK接口适配说明",
  "id": "多线程ndk接口适配说明",
  "level": 2
}, {
  "value": "多线程NDK接口调用规范",
  "id": "多线程ndk接口调用规范",
  "level": 2
}, {
  "value": "多线程NDK接口的错误与异常",
  "id": "多线程ndk接口的错误与异常",
  "level": 2
}, {
  "value": "多线程NDK接口集合规格",
  "id": "多线程ndk接口集合规格",
  "level": 2
}, {
  "value": "组件创建销毁",
  "id": "组件创建销毁",
  "level": 3
}, {
  "value": "组件属性读写",
  "id": "组件属性读写",
  "level": 3
}, {
  "value": "组件事件注册解注册",
  "id": "组件事件注册解注册",
  "level": 3
}, {
  "value": "组件树操作",
  "id": "组件树操作",
  "level": 3
}, {
  "value": "组件自定义数据读写",
  "id": "组件自定义数据读写",
  "level": 3
}, {
  "value": "全局事件注册解注册",
  "id": "全局事件注册解注册",
  "level": 3
}, {
  "value": "组件测算布局",
  "id": "组件测算布局",
  "level": 3
}, {
  "value": "多线程NDK接口使用示例",
  "id": "多线程ndk接口使用示例",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "使用多线程ndk接口并行化构建ui页面",
        children: "使用多线程NDK接口并行化构建UI页面"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 22之前，UI组件的创建与属性设置等操作必须在应用的UI线程中执行。这导致开发者在使用NDK接口时，需将组件创建与属性设置等操作通过任务队列提交至UI线程执行，限制了组件创建过程的灵活性及应用的性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着应用程序功能的日益复杂，应用页面内需要动态创建大量UI组件，这些组件的创建任务堆积在单一的UI线程中执行，会导致应用启动缓慢、动画丢帧及页面卡顿，直接影响用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对这些问题，在API version 22，NDK接口引入了多线程支持能力，为开发者带来了以下提升："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "简化调用流程："
          })
        }), " 开发者无需通过任务队列将组件创建任务提交至UI线程执行，可以在任意线程中直接调用组件创建和属性设置等接口，减少线程上下文切换次数，简化UI框架与应用间的交互逻辑。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "性能与体验显著优化："
          })
        }), " 组件创建和属性设置等接口支持多线程并发调用，能够充分利用设备的多核CPU，降低页面创建阶段的总体耗时。UI线程专注于动画渲染与用户输入，确保界面流畅及交互及时。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "为后续功能扩展提供更好的灵活性："
          })
        }), " 组件创建和属性设置等接口支持多线程调用，不仅能够解决应用当前的性能瓶颈问题，还为未来开发更复杂、高负载的UI页面提供扩展空间，帮助开发者在设计时拥有更多的灵活性，为持续提升用户体验创造条件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "综上所述，在复杂业务场景中，多线程NDK接口将为开发者带来高性能的UI页面创建体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程ndk接口使用方式",
      children: "多线程NDK接口使用方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在使用多线程NDK接口前，建议开发者先阅读", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/ndk-build-ui-overview",
            children: "NDK接口概述"
          }), "，掌握使用NDK接口必备的基本概念和基础知识。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为降低开发者适配多线程NDK接口的成本，多线程NDK接口的获取和使用方式与现有NDK接口保持一致。只需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#oh_arkui_getmoduleinterface",
            children: "OH_ArkUI_GetModuleInterface"
          }), "接口，入参传入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#arkui_nativeapivariantkind",
            children: "ARKUI_MULTI_THREAD_NATIVE_NODE"
          }), "即可获取多线程NDK接口集合。例如："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NativeNodeAPI_1 *multiThreadNodeAPI = nullptr;\n// 获取多线程NDK接口集合。\nOH_ArkUI_GetModuleInterface(ARKUI_MULTI_THREAD_NATIVE_NODE, ArkUI_NativeNodeAPI_1, multiThreadNodeAPI);\n\nif (!multiThreadNodeAPI) {\n  return;\n}\n// 调用集合中支持多线程的createNode接口创建UI组件。\nauto node = multiThreadNodeAPI->createNode(ARKUI_NODE_COLUMN);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持多线程调用的全量NDK接口请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A4%9A%E7%BA%BF%E7%A8%8Bndk%E6%8E%A5%E5%8F%A3%E9%9B%86%E5%90%88%E8%A7%84%E6%A0%BC",
        children: "多线程NDK接口集合规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用多线程NDK接口在任意线程创建UI组件并设置属性，但是必须在UI线程中，把UI组件挂载到UI主树上。可以通过如下接口完成多线程UI组件创建任务的分发和执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于可以在非UI线程执行的任务（如组件创建、属性设置等），可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_postasyncuitask",
          children: "OH_ArkUI_PostAsyncUITask"
        }), "接口，将组件创建和属性设置等任务调度到系统线程池中执行，之后将组件挂载到主树的任务提交到UI线程执行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当开发者需要在自己创建的非UI线程中创建UI组件时，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_postuitask",
          children: "OH_ArkUI_PostUITask"
        }), "接口将组件挂载到主树的任务提交到UI线程执行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者在多线程创建UI组件的过程中需要执行只支持UI线程的任务时，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_postuitaskandwait",
          children: "OH_ArkUI_PostUITaskAndWait"
        }), "接口将任务提交到UI线程执行，调用此接口的非UI线程等待函数执行完成后继续创建组件。当UI线程负载很高时，调用此接口的非UI线程可能长时间阻塞，会影响多线程创建UI组件的性能收益，不建议频繁使用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程ndk接口适配说明",
      children: "多线程NDK接口适配说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多线程NDK接口适用于页面跳转和列表滑动等高负载且性能敏感的场景，此类场景下UI线程需要执行耗时从几ms到几十ms的组件创建任务，开发者可以将组件创建任务拆分成多个子任务，分派给多个线程并发执行，以降低UI线程负载，提高页面启动与更新流畅度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当开发者在自己创建的线程中创建UI组件时，基于设备CPU核数等客观条件，建议并行的线程数量不要超过4个，以避免线程调度带来的性能开销。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者可以在非UI线程预创建常用组件树，为性能敏感场景提供更好的用户体验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程ndk接口调用规范",
      children: "多线程NDK接口调用规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "框架将UI组件划分为Free（游离）和Attached（已挂载）两种状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用多线程", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#createnode",
        children: "createNode"
      }), "接口创建的UI组件初始为Free状态，且可以在Free和Attached两种状态间进行转换，使用其他方式创建的UI组件初始为Attached状态且状态不可转换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520175)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以在任意线程使用多线程NDK接口操作处于Free状态的组件，为保证应用功能正常和线程安全，需遵守如下使用约束："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "禁止多线程同时操作同一个处于Free状态的组件或组件树，处于Free状态的组件内部是无锁的，多线程同时访问会出现稳定性问题。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["禁止使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%A4%9A%E7%BA%BF%E7%A8%8Bndk%E6%8E%A5%E5%8F%A3%E9%9B%86%E5%90%88%E8%A7%84%E6%A0%BC",
              children: "多线程NDK接口集合"
            }), "外的其他NDK接口操作处于Free状态的组件，需先将组件转换为Attach状态后才可以在UI线程使用其他NDK接口，否则接口功能会出现异常。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为兼顾性能，上述约束框架侧无运行时校验，需要开发者自行保证。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为保证接口多线程安全，处于Free状态的组件的一部分属性通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setattribute",
            children: "setAttribute"
          }), "设置后，无法立即通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getattribute",
            children: "getAttribute"
          }), "接口读取到，需要将组件转换为Attached状态后才能读取到正确的属性值。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者进行如下操作后，UI组件状态从Free转换为Attached："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用多线程", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#markdirty",
          children: "markDirty"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#measurenode",
          children: "measureNode"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#layoutnode",
          children: "layoutNode"
        }), "接口对Free组件进行标脏、测量或布局后，此组件所在组件树内所有处于Free状态的组件转换为Attached状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用多线程", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%BB%84%E4%BB%B6%E6%A0%91%E6%93%8D%E4%BD%9C",
          children: "组件树操作"
        }), "接口将处于Free状态的组件挂载为Attached组件的子组件，此组件所在组件树内所有处于Free状态的组件转换为Attached状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用多线程", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%BB%84%E4%BB%B6%E6%A0%91%E6%93%8D%E4%BD%9C",
          children: "组件树操作"
        }), "接口把Attached组件挂载为处于Free状态的组件的子组件，此组件所在组件树内所有处于Free状态的组件转换为Attached状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于状态可转换的Attached组件，当开发者进行如下操作后，UI组件状态从Attached转换为Free："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用多线程", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%BB%84%E4%BB%B6%E6%A0%91%E6%93%8D%E4%BD%9C",
          children: "组件树操作"
        }), "接口将组件从组件树上移除，且移除后的组件所在组件树不包含不可转换的Attached组件，此组件所在组件树内所有组件转换为Free状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上述状态转换规则，每个UI组件树内所有组件都处于相同状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程ndk接口的错误与异常",
      children: "多线程NDK接口的错误与异常"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多线程NDK接口调用规范请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A4%9A%E7%BA%BF%E7%A8%8Bndk%E6%8E%A5%E5%8F%A3%E9%9B%86%E5%90%88%E8%A7%84%E6%A0%BC",
        children: "多线程NDK接口集合规格"
      }), "。调用多线程NDK接口时必须检查接口返回值，如下两种情况接口会返回错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
        children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在非UI线程中调用集合中不支持多线程的接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在非UI线程调用多线程NDK接口操作处于Attached状态的组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多线程NDK适配过程中遇到的更多问题可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-development-faq/multi-thread-ui-build-faq",
        children: "UI并行化常见问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程ndk接口集合规格",
      children: "多线程NDK接口集合规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["集合中支持多线程调用的接口包括：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E5%88%9B%E5%BB%BA%E9%94%80%E6%AF%81",
        children: "组件创建销毁"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E8%AF%BB%E5%86%99",
        children: "组件属性读写"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6%E6%B3%A8%E5%86%8C%E8%A7%A3%E6%B3%A8%E5%86%8C",
        children: "组件事件注册解注册"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E6%A0%91%E6%93%8D%E4%BD%9C",
        children: "组件树操作"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E8%AF%BB%E5%86%99",
        children: "组件自定义数据读写"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["集合中仅支持UI线程调用的接口包括：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6%E6%B3%A8%E5%86%8C%E8%A7%A3%E6%B3%A8%E5%86%8C",
        children: "全局事件注册解注册"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E6%B5%8B%E7%AE%97%E5%B8%83%E5%B1%80",
        children: "组件测算布局"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件创建销毁",
      children: "组件创建销毁"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非UI线程调用"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "多线程规格"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#createnode",
              children: "createNode"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
              children: "ArkUI_NodeType"
            }), " type)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["基于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
              children: "ArkUI_NodeType"
            }), "生成对应的Free节点并返回Free节点对象指针。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持在任意线程调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#disposenode",
              children: "disposeNode"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁节点指针指向的节点对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口调用无效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件属性读写",
      children: "组件属性读写"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非UI线程调用"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "多线程规格"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setattribute",
              children: "setAttribute"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype",
              children: "ArkUI_NodeAttributeType"
            }), " attribute, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-attributeitem/capi-arkui-nativemodule-arkui-attributeitem",
              children: "ArkUI_AttributeItem"
            }), " *item)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置node节点的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-attributeitem/capi-arkui-nativemodule-arkui-attributeitem",
              children: "ArkUI_AttributeItem"
            }), " *(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getattribute",
              children: "getAttribute"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype",
              children: "ArkUI_NodeAttributeType"
            }), " attribute)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#resetattribute",
              children: "resetAttribute"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype",
              children: "ArkUI_NodeAttributeType"
            }), " attribute)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置node节点的属性为默认值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setlengthmetricunit",
              children: "setLengthMetricUnit"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_lengthmetricunit",
              children: "ArkUI_LengthMetricUnit"
            }), " unit)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定node节点的单位。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件事件注册解注册",
      children: "组件事件注册解注册"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非UI线程调用"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "多线程规格"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent",
              children: "registerNodeEvent"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
              children: "ArkUI_NodeEventType"
            }), " eventType, int32_t targetId, void *userData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向node节点注册事件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#unregisternodeevent",
              children: "unregisterNodeEvent"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
              children: "ArkUI_NodeEventType"
            }), " eventType)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node节点解注册事件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口调用无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodecustomevent",
              children: "registerNodeCustomEvent"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodecustomeventtype",
              children: "ArkUI_NodeCustomEventType"
            }), " eventType, int32_t targetId, void *userData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向node节点注册自定义事件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#unregisternodecustomevent",
              children: "unregisterNodeCustomEvent"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodecustomeventtype",
              children: "ArkUI_NodeCustomEventType"
            }), " eventType)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node节点解注册自定义事件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口调用不生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodeeventreceiver",
              children: "addNodeEventReceiver"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, void(*eventReceiver)(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nodeevent/capi-arkui-nativemodule-arkui-nodeevent",
              children: "ArkUI_NodeEvent"
            }), " *event))"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向node节点注册事件回调函数，用于接收该组件产生的组件事件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#removenodeeventreceiver",
              children: "removeNodeEventReceiver"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, void(*eventReceiver)(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nodeevent/capi-arkui-nativemodule-arkui-nodeevent",
              children: "ArkUI_NodeEvent"
            }), " *event))"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除node节点上注册的事件回调函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodecustomeventreceiver",
              children: "addNodeCustomEventReceiver"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, void(*eventReceiver)(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nodecustomevent/capi-arkui-nativemodule-arkui-nodecustomevent",
              children: "ArkUI_NodeCustomEvent"
            }), " *event))"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向node节点注册自定义事件回调函数，用于接收该组件产生的自定义事件（如布局事件，绘制事件）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#removenodecustomeventreceiver",
              children: "removeNodeCustomEventReceiver"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, void(*eventReceiver)(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nodecustomevent/capi-arkui-nativemodule-arkui-nodecustomevent",
              children: "ArkUI_NodeCustomEvent"
            }), " *event))"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除node节点上注册的自定义事件回调函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件树操作",
      children: "组件树操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非UI线程调用"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "多线程规格"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addchild",
              children: "addChild"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " parent, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " child)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将child节点挂载到parent节点的子节点列表中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#removechild",
              children: "removeChild"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " parent, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " child)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将child节点从parent节点的子节点列表中移除。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#insertchildafter",
              children: "insertChildAfter"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " parent, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " child, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " sibling)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将child节点挂载到parent节点的子节点列表中，挂载位置在sibling节点之后。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#insertchildbefore",
              children: "insertChildBefore"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " parent, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " child, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " sibling)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将child节点挂载到parent节点的子节点列表中，挂载位置在sibling节点之前。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#insertchildat",
              children: "insertChildAt"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " parent, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " child, int32_t position)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将child节点挂载到parent节点的子节点列表中，挂载位置由position指定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getparent",
              children: "getParent"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点的父节点。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#removeallchildren",
              children: "removeAllChildren"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " parent)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除node节点的所有子节点。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#gettotalchildcount",
              children: "getTotalChildCount"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点的子节点个数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口返回0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getchildat",
              children: "getChildAt"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, int32_t position)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点的子节点指针，位置由position指定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getfirstchild",
              children: "getFirstChild"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点的第一个子节点指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getlastchild",
              children: "getLastChild"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点的最后一个子节点指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getprevioussibling",
              children: "getPreviousSibling"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点的上一个兄弟节点指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getnextsibling",
              children: "getNextSibling"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点的下一个兄弟节点指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口返回空指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件自定义数据读写",
      children: "组件自定义数据读写"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非UI线程调用"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "多线程规格"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setuserdata",
              children: "setUserData"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, void *userData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在node节点上保存自定义数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在非UI线程调用函数操作Attached节点时，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void *(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getuserdata",
              children: "getUserData"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点上保存的自定义数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在非UI线程调用函数操作Attached节点时，接口返回空指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "全局事件注册解注册",
      children: "全局事件注册解注册"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非UI线程调用"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "多线程规格"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeeventreceiver",
              children: "registerNodeEventReceiver"
            }), " )(void(*eventReceiver)(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nodeevent/capi-arkui-nativemodule-arkui-nodeevent",
              children: "ArkUI_NodeEvent"
            }), " *event))"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册节点事件回调统一入口函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持UI线程调用，在非UI线程调用接口不生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#unregisternodeeventreceiver",
              children: "unregisterNodeEventReceiver"
            }), " )()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解注册节点事件回调统一入口函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持UI线程调用，在非UI线程调用接口不生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodecustomeventreceiver",
              children: "registerNodeCustomEventReceiver"
            }), " )(void(*eventReceiver)(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nodecustomevent/capi-arkui-nativemodule-arkui-nodecustomevent",
              children: "ArkUI_NodeCustomEvent"
            }), " *event))"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册节点自定义事件回调统一入口函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持UI线程调用，在非UI线程调用接口不生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#unregisternodecustomeventreceiver",
              children: "unregisterNodeCustomEventReceiver"
            }), " )()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解注册节点自定义事件回调统一入口函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持UI线程调用，在非UI线程调用接口不生效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件测算布局",
      children: "组件测算布局"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非UI线程调用"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "多线程规格"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setmeasuredsize",
              children: "setMeasuredSize"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, int32_t width, int32_t height)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在测算回调函数中设置组件测算完成后的宽和高。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["只支持UI线程调用，在非UI线程调用接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setlayoutposition",
              children: "setLayoutPosition"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, int32_t positionX, int32_t positionY)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在布局回调函数中设置组件的位置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["只支持UI线程调用，在非UI线程调用接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-intsize/capi-arkui-nativemodule-arkui-intsize",
              children: "ArkUI_IntSize"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getmeasuredsize",
              children: "getMeasuredSize"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点测算完成后的宽高尺寸。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持UI线程调用，在非UI线程调用接口返回默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-intoffset/capi-arkui-nativemodule-arkui-intoffset",
              children: "ArkUI_IntOffset"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#getlayoutposition",
              children: "getLayoutPosition"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node节点布局完成后的位置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持UI线程调用，在非UI线程调用接口返回默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#measurenode",
              children: "measureNode"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-layoutconstraint/capi-arkui-nativemodule-arkui-layoutconstraint",
              children: "ArkUI_LayoutConstraint"
            }), " *Constraint)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对node节点进行测算，可以通过getMeasuredSize获取测算后的大小。节点所在组件树内所有Free节点的状态转换为Attached。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["只支持UI线程调用，在非UI线程调用接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#layoutnode",
              children: "layoutNode"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, int32_t positionX, int32_t positionY)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对node节点进行布局并传递该组件相对父组件的期望位置。节点所在组件树内所有Free节点的状态转换为Attached。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["只支持UI线程调用，在非UI线程调用接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#markdirty",
              children: "markDirty"
            }), " )(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodedirtyflag",
              children: "ArkUI_NodeDirtyFlag"
            }), " dirtyFlag)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制标记node节点重新执行测量、布局或者绘制的区域。节点所在组件树内所有Free节点的状态转换为Attached。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持UI线程调用，在非UI线程调用接口调用不生效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程ndk接口使用示例",
      children: "多线程NDK接口使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此示例构造了一个多线程创建UI组件的场景，页面显示的Button组件在非UI线程被并行创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击CreateNodeTree按钮触发在多个非UI线程并行创建Button组件，之后在UI线程将创建完成的Button组件挂载到UI主树上，使组件显示在页面上。点击DisposeNodeTree按钮将已创建的组件从UI主树上卸载并销毁，清空页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(304445)/* ["default"] */.A) + "",
        width: "294",
        height: "490"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例主要展示了如何获取和使用多线程NDK接口，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_postasyncuitask",
        children: "OH_ArkUI_PostAsyncUITask"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_postuitask",
        children: "OH_ArkUI_PostUITask"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_postuitaskandwait",
        children: "OH_ArkUI_PostUITaskAndWait"
      }), "等接口将组件创建和属性设置等任务分发到多线程并行执行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为简化编程和工程管理，在开始编写并行化组件创建代码前，请先参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "指导文档，在Native侧使用面向对象的方式将ArkUI_NodeHandle封装为ArkUINode对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.ets\nimport { NodeContent } from '@kit.ArkUI';\nimport entry from 'libentry.so';\n\n@Component\nstruct CAPIComponent {\n  private rootSlot = new NodeContent();\n\n  aboutToAppear(): void {\n    // 页面显示前多线程创建Native组件。\n    entry.createNodeTreeOnMultiThread(this.rootSlot, this.getUIContext());\n  }\n\n  aboutToDisappear(): void {\n    // 页面销毁前释放已创建的Native组件。\n    entry.disposeNodeTreeOnMultiThread(this.rootSlot);\n  }\n\n  build() {\n    Column() {\n      // Native组件挂载点。\n      ContentSlot(this.rootSlot)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State isShow: boolean = false;\n  @State message: string = \"CreateNodeTree\";\n\n  build() {\n    Flex() {\n      Column() {\n        Text('CreateNodeTreeOnMultiThread')\n          .fontSize(18)\n          .fontWeight(FontWeight.Bold)\n        Button(this.message)\n          .onClick(() => {\n            this.isShow = !this.isShow;\n            if (this.isShow) {\n              this.message = \"DisposeNodeTree\"\n            } else {\n              this.message = \"CreateNodeTree\"\n            }\n          })\n        if (this.isShow) {\n          CAPIComponent()\n        }\n      }.width('100%')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\n// entry/src/main/cpp/types/libentry/Index.d.ts\nexport const createNativeRoot: (content: Object) => void;\nexport const destroyNativeRoot: () => void;\nexport const createNodeTreeOnMultiThread: (content1: Object, content2: Object) => void;\nexport const disposeNodeTreeOnMultiThread: (content1: Object) => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# CMakeLists.txt\n# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(ndk_build_on_multi_thread)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp NativeEntry.cpp NativeModule.h ArkUIBaseNode.h ArkUINode.h ArkUIListNode.h ArkUIListItemNode.h ArkUITextNode.h NormalTextListExample.h CreateNode.h CreateNode.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libace_ndk.z.so libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// NativeModule.h\n#ifndef MYAPPLICATION_NATIVEMODULE_H\n#define MYAPPLICATION_NATIVEMODULE_H\n\n#include <arkui/native_node.h>\n#include <arkui/native_interface.h>\n#include <cassert>\n\nnamespace NativeModule {\n\nclass NativeModuleInstance {\npublic:\n    static NativeModuleInstance *GetInstance() {\n        static NativeModuleInstance instance;\n        return &instance;\n    }\n\n    NativeModuleInstance() {\n        // 获取多线程NDK接口的函数指针结构体对象，用于后续操作。\n        OH_ArkUI_GetModuleInterface(ARKUI_MULTI_THREAD_NATIVE_NODE, ArkUI_NativeNodeAPI_1, arkUINativeNodeApi_);\n        assert(arkUINativeNodeApi_);\n    }\n    // 暴露给其他模块使用。\n    ArkUI_NativeNodeAPI_1 *GetNativeNodeAPI() { return arkUINativeNodeApi_; }\n\nprivate:\n    ArkUI_NativeNodeAPI_1 *arkUINativeNodeApi_ = nullptr;\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_NATIVEMODULE_H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CreateNode.h\n#ifndef MYAPPLICATION_CREATENODE_H\n#define MYAPPLICATION_CREATENODE_H\n\n#include \"ArkUINode.h\"\n\n#include <js_native_api.h>\n\nnamespace NativeModule {\n// 封装Button组件。\nclass ArkUIButtonNode: public ArkUINode {\npublic:\n    ArkUIButtonNode() :\n        ArkUINode(NativeModuleInstance::GetInstance()->GetNativeNodeAPI()->createNode(ARKUI_NODE_BUTTON)) {}\n    int32_t SetLabel(ArkUI_AttributeItem& label_item) {\n        return nativeModule_->setAttribute(handle_, NODE_BUTTON_LABEL, &label_item);\n    }\n    int32_t SetMargin(ArkUI_AttributeItem& item) {\n        return nativeModule_->setAttribute(handle_, NODE_MARGIN, &item);\n    }\n};\n\n// 封装Row组件。\nclass ArkUIRowNode: public ArkUINode {\npublic:\n    ArkUIRowNode() :\n        ArkUINode(NativeModuleInstance::GetInstance()->GetNativeNodeAPI()->createNode(ARKUI_NODE_ROW)) {}\n};\n\n// 封装Scroll组件。\nclass ArkUIScrollNode: public ArkUINode {\npublic:\n    ArkUIScrollNode() :\n        ArkUINode(NativeModuleInstance::GetInstance()->GetNativeNodeAPI()->createNode(ARKUI_NODE_SCROLL)) {}\n};\n\n// 封装Column组件。\nclass ArkUIColumnNode: public ArkUINode {\npublic:\n    ArkUIColumnNode() :\n        ArkUINode(NativeModuleInstance::GetInstance()->GetNativeNodeAPI()->createNode(ARKUI_NODE_COLUMN)) {}\n};\n\n// 多线程创建组件。\nnapi_value CreateNodeTreeOnMultiThread(napi_env env, napi_callback_info info);\n// 释放多线程创建的组件。\nnapi_value DisposeNodeTreeOnMultiThread(napi_env env, napi_callback_info info);\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_CREATENODE_H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CreateNode.cpp\n#include \"CreateNode.h\"\n\n#include <cstdint>\n#include <hilog/log.h>\n#include <map>\n#include <thread>\n#include <napi/native_api.h>\n#include <arkui/native_node_napi.h>\n\nnamespace NativeModule {\n#define FRAMEWORK_NODE_TREE_NUMBER 4 // 在框架线程创建组件树的数量。\n#define USER_NODE_TREE_NUMBER 3 // 在开发者线程创建组件树的数量。\nstruct AsyncData {\n    napi_env env;\n    std::shared_ptr<ArkUINode> parent = nullptr;\n    std::shared_ptr<ArkUINode> child = nullptr;\n    std::string label = \"\";\n};\n\n// 保存ArkTs侧NodeContent指针与Native侧节点树根节点的对应关系。\nstd::map<ArkUI_NodeContentHandle, std::shared_ptr<ArkUIBaseNode>> g_nodeMap;\nArkUI_ContextHandle g_contextHandle = nullptr;\n\n// 创建组件树。\nvoid CreateNodeTree(void *asyncUITaskData) {\n    auto asyncData = static_cast<AsyncData*>(asyncUITaskData);\n    if (!asyncData) {\n        return;\n    }\n    // 创建组件树根节点。\n    auto rowNode = std::make_shared<ArkUIRowNode>();\n    asyncData->child = rowNode;\n    \n    // 创建button组件。\n    auto buttonNode1 = std::make_shared<ArkUIButtonNode>();\n    ArkUI_AttributeItem label_item = { .string = asyncData->label.c_str() };\n    // 设置button组件的label属性。\n    int32_t result = buttonNode1->SetLabel(label_item);\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"Button SetLabel Failed %{public}d\", result);\n    }\n    ArkUI_NumberValue value[] = {{.f32 = 5}, {.f32 = 5}, {.f32 = 5}, {.f32 = 5}};\n    ArkUI_AttributeItem item = {value, 4};\n    // 设置button组件的margin属性。\n    result = buttonNode1->SetMargin(item);\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"Button SetMargin Failed %{public}d\", result);\n    }\n    // 设置button组件的width属性。\n    buttonNode1->SetWidth(150);\n   \n   // 创建button组件。\n    auto buttonNode2 = std::make_shared<ArkUIButtonNode>();\n    ArkUI_AttributeItem label_item2 = { .string = asyncData->label.c_str() };\n    // 设置button组件的label属性。\n    result = buttonNode2->SetLabel(label_item2);\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"Button SetLabel Failed %{public}d\", result);\n    }\n    ArkUI_NumberValue value2[] = {{.f32 = 5}, {.f32 = 5}, {.f32 = 5}, {.f32 = 5}};\n    ArkUI_AttributeItem item2 = {value2, 4};\n    // 设置button组件的margin属性。\n    result = buttonNode1->SetMargin(item2);\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"Button SetMargin Failed %{public}d\", result);\n    }\n    // 设置button组件的width属性。\n    buttonNode2->SetWidth(150);\n\n    // 把组件挂载到组件树上。\n    rowNode->AddChild(buttonNode1);\n    rowNode->AddChild(buttonNode2);\n}\n\n// 把组件树挂载到UI组件主树上。\nvoid MountNodeTree(void *asyncUITaskData) {\n    auto asyncData = static_cast<AsyncData*>(asyncUITaskData);\n    if (!asyncData) {\n        return;\n    }\n    auto parent = asyncData->parent;\n    auto child = asyncData->child;\n    // 把组件树挂载到UI组件主树上。\n    parent->AddChild(child);\n    delete asyncData;\n}\n\nvoid CreateNodeOnFrameworkThread(ArkUI_ContextHandle contextHandle, std::shared_ptr<ArkUIColumnNode> parent) {\n    for (int i = 0; i < FRAMEWORK_NODE_TREE_NUMBER; i++) {\n        // UI线程创建子树根节点，保证scroll的子节点顺序。\n        auto columnItem = std::make_shared<ArkUIColumnNode>();\n        parent->AddChild(columnItem);\n        AsyncData* asyncData = new AsyncData();\n        asyncData->parent = columnItem;\n        asyncData->label = \"OnFwkThread\";\n        // 使用框架提供的非UI线程创建组件树，创建完成后回到UI线程挂载到主树上。\n        int32_t result = OH_ArkUI_PostAsyncUITask(contextHandle, asyncData, CreateNodeTree, MountNodeTree);\n        if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n            OH_LOG_ERROR(LOG_APP, \"OH_ArkUI_PostAsyncUITask Failed %{public}d\", result);\n            delete asyncData;\n        }\n    }\n}\n\nvoid CreateNodeOnUserThread(ArkUI_ContextHandle contextHandle, std::shared_ptr<ArkUIColumnNode> parent) {\n    auto columnItem = std::make_shared<ArkUIColumnNode>();\n    parent->AddChild(columnItem);\n    // 在开发者创建的非UI线程上创建组件树。\n    std::thread userThread([columnItem, contextHandle]() {\n        for (int i = 0; i < USER_NODE_TREE_NUMBER; i++) {\n            AsyncData* asyncData = new AsyncData();\n            asyncData->parent = columnItem;\n            asyncData->label = \"OnUserThread1\";\n            CreateNodeTree(asyncData);\n            // 组件树创建完成后回到UI线程挂载到主树上。\n            int32_t result = OH_ArkUI_PostUITask(contextHandle, asyncData, MountNodeTree);\n            if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n                OH_LOG_ERROR(LOG_APP, \"OH_ArkUI_PostUITask Failed %{public}d\", result);\n                delete asyncData;\n            }\n        }\n    });\n    userThread.detach();\n}\n\nvoid CreateNodeOnUserThreadAndWait(ArkUI_ContextHandle contextHandle, std::shared_ptr<ArkUIColumnNode> parent) {\n    auto columnItem = std::make_shared<ArkUIColumnNode>();\n    parent->AddChild(columnItem);\n    // 在开发者创建的非UI线程上创建组件树。\n    std::thread userThread([columnItem, contextHandle]() {\n        for (int i = 0; i < USER_NODE_TREE_NUMBER; i++) {\n            AsyncData* asyncData = new AsyncData();\n            asyncData->parent = columnItem;\n            asyncData->label = \"OnUserThread2\";\n            CreateNodeTree(asyncData);\n            // 组件树创建完成后回到UI线程挂载到主树上，等待挂载完成后继续创建剩余组件。\n            int32_t result = OH_ArkUI_PostUITaskAndWait(contextHandle, asyncData, MountNodeTree);\n            if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n                OH_LOG_ERROR(LOG_APP, \"OH_ArkUI_PostUITask Failed %{public}d\", result);\n                delete asyncData;\n            }\n        }\n    });\n    userThread.detach();\n}\n\nnapi_value CreateNodeTreeOnMultiThread(napi_env env, napi_callback_info info) {\n    size_t argc = 2;\n    napi_value args[2] = { nullptr, nullptr };\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取ArkTs侧组件挂载点。\n    ArkUI_NodeContentHandle contentHandle;\n    int32_t result = OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ArkUI_GetNodeContentFromNapiValue Failed %{public}d\", result);\n        return nullptr;\n    }\n    \n    // 获取上下文对象指针。\n    if (!g_contextHandle) {\n        result = OH_ArkUI_GetContextFromNapiValue(env, args[1], &g_contextHandle);\n        if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n            OH_LOG_ERROR(LOG_APP, \"OH_ArkUI_GetContextFromNapiValue Failed %{public}d\", result);\n            delete g_contextHandle;\n            g_contextHandle = nullptr;\n            return nullptr;\n        }\n    }\n    \n    // 创建Native侧组件树根节点。\n    auto scrollNode = std::make_shared<ArkUIScrollNode>();\n    // 将Native侧组件树根节点挂载到UI主树上。\n    result = OH_ArkUI_NodeContent_AddNode(contentHandle, scrollNode->GetHandle());\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ArkUI_NodeContent_AddNode Failed %{public}d\", result);\n        return nullptr;\n    }\n    // 保存Native侧组件树。\n    g_nodeMap[contentHandle] = scrollNode;\n    \n    auto columnNode = std::make_shared<ArkUIColumnNode>();\n    scrollNode->AddChild(columnNode);\n    // 在框架提供的线程池中创建组件。\n    CreateNodeOnFrameworkThread(g_contextHandle,columnNode);\n    // 在开发者创建的非UI线程中创建组件。\n    CreateNodeOnUserThread(g_contextHandle,columnNode);\n    CreateNodeOnUserThreadAndWait(g_contextHandle,columnNode);\n    return nullptr;\n}\n\nnapi_value DisposeNodeTreeOnMultiThread(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = { nullptr };\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取ArkTs侧组件挂载点。\n    ArkUI_NodeContentHandle contentHandle;\n    int32_t result = OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ArkUI_GetNodeContentFromNapiValue Failed %{public}d\", result);\n        return nullptr;\n    }\n    \n    auto it = g_nodeMap.find(contentHandle);\n    if (it == g_nodeMap.end()) {\n        return nullptr;\n    }\n    auto rootNode = it->second;\n    // 将Native侧组件树根节点从UI主树上卸载。\n    result = OH_ArkUI_NodeContent_RemoveNode(contentHandle, rootNode->GetHandle());\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ArkUI_NodeContent_RemoveNode Failed %{public}d\", result);\n        return nullptr;\n    }\n    // 释放Native侧组件树。\n    g_nodeMap.erase(contentHandle);\n    return nullptr;\n}\n} // namespace NativeModule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_init.cpp\n#include \"napi/native_api.h\"\n#include \"NativeEntry.h\"\n#include \"CreateNode.h\"\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    // 绑定Native侧的创建组件和销毁组件。\n    napi_property_descriptor desc[] = {\n        {\"createNativeRoot\", nullptr,\n        NativeModule::CreateNativeRoot, nullptr, nullptr,\n        nullptr, napi_default, nullptr},\n        \n        {\"destroyNativeRoot\", nullptr,\n        NativeModule::DestroyNativeRoot, nullptr, nullptr,\n        nullptr, napi_default, nullptr},\n        \n        {\"createNodeTreeOnMultiThread\", nullptr,\n        NativeModule::CreateNodeTreeOnMultiThread, nullptr, nullptr,\n        nullptr, napi_default, nullptr},\n        \n        {\"disposeNodeTreeOnMultiThread\", nullptr,\n        NativeModule::DisposeNodeTreeOnMultiThread, nullptr, nullptr,\n        nullptr, napi_default, nullptr}\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下实例展示了在高负载组件创建场景下如何使用多线程NDK接口，将组件创建任务拆分成多个子任务，分派给多个线程并发执行来优化页面跳转场景的响应时延和完成时延。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NdkBuildOnMultiThread",
        children: "使用NDK多线程创建UI组件"
      })
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
304445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438119-8da24be3a5ab5533b1da7ca82c3cfd14.gif");

},
520175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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