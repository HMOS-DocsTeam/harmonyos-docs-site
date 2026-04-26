"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["312890"], {
856149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_stability_arkts_stability_freeze_issues_arkts_stability_freeze_issues_md_02c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-stability-arkts-stability-freeze-issues-arkts-stability-freeze-issues-md-02c.json
var site_docs_arkui_ui_debug_optimize_ui_stability_arkts_stability_freeze_issues_arkts_stability_freeze_issues_md_02c_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-stability/arkts-stability-freeze-issues/arkts-stability-freeze-issues","title":"UI相关应用无响应常见问题","description":"本文档收集整理了一些常见的会导致应用无响应的ArkUI API错误用法，旨在帮助开发者了解这些错误用法，从而避免在实际应用开发过程中犯类似错误。","source":"@site/docs/arkui/ui-debug-optimize/ui-stability/arkts-stability-freeze-issues/arkts-stability-freeze-issues.md","sourceDirName":"arkui/ui-debug-optimize/ui-stability/arkts-stability-freeze-issues","slug":"/arkui/ui-debug-optimize/ui-stability/arkts-stability-freeze-issues/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-stability/arkts-stability-freeze-issues/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"UI相关应用无响应常见问题","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-stability-freeze-issues","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI相关应用崩溃常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues/"},"next":{"title":"UI显示异常调试","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/arkts-layout-debug/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-stability/arkts-stability-freeze-issues/arkts-stability-freeze-issues.md


const frontMatter = {
	title: 'UI相关应用无响应常见问题',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-stability-freeze-issues',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI相关应用无响应常见问题';

const assets = {

};



const toc = [{
  "value": "网络图片使用syncLoad同步下载",
  "id": "网络图片使用syncload同步下载",
  "level": 2
}, {
  "value": "在UI主线程执行耗时任务",
  "id": "在ui主线程执行耗时任务",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ui相关应用无响应常见问题",
        children: "UI相关应用无响应常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档收集整理了一些常见的会导致应用无响应的ArkUI API错误用法，旨在帮助开发者了解这些错误用法，从而避免在实际应用开发过程中犯类似错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络图片使用syncload同步下载",
      children: "网络图片使用syncLoad同步下载"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用无响应，系统生成相应的AppFreeze问题日志，日志中有如下主线程调用栈："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#00 pc 00000000001b5904 /system/lib/ld-musl-aarch64.so.1(__timedwait_cp+192)\n#01 pc 00000000001b7908 /system/lib/ld-musl-aarch64.so.1(__pthread_cond_timedwait+188)\n#02 pc 00000000000c11c0 /system/lib64/libc++.so(std::__h::condition_variable::__do_timed_wait(std::__h::unique_lock<std::__h::mutex>&, std::__h::chrono::time_point<std::__h::chrono::system_clock, std::__h::chrono::duration<long long, std::__h::ratio<1l, 1000000000l>>>)+108)\n#03 pc 0000000000019ed0 /system/lib64/platformsdk/libace_network.z.so(std::__h::cv_status std::__h::condition_variable::wait_for<long long, std::__h::ratio<1l, 1000000000l>>(std::__h::unique_lock<std::__h::mutex>&, std::__h::chrono::duration<long long, std::__h::ratio<1l, 1000000000l>> const&)+92)\n#04 pc 0000000000019e5c /system/lib64/platformsdk/libace_network.z.so\n#05 pc 000000000001bc10 /system/lib64/platformsdk/libace_network.z.so(OHOS::Ace::DownloadManagerImpl::HandleDownloadResult(bool, OHOS::Ace::DownloadCallback&&, std::__h::shared_ptr<OHOS::Ace::DownloadCondition> const&, int, std::__h::basic_string<char, std::__h::char_traits<char>, std::__h::allocator<char>> const&)+248)\n#06 pc 0000000000018564 /system/lib64/platformsdk/libace_network.z.so(OHOS::Ace::DownloadManagerImpl::DownloadSync(OHOS::Ace::DownloadCallback&&, std::__h::basic_string<char, std::__h::char_traits<char>, std::__h::allocator<char>> const&, int, int)+1096)\n#07 pc 000000000096f4a8 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::NG::ImageLoadingContext::PerformDownload()+448)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用设置的syncLoad接口用于同步下载网络图片，系统将在主线程中加载图片。在网络条件不佳时，可能会导致任务阻塞。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络图片加载不应设置syncLoad=true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考链接"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关接口详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#syncload8",
        children: "syncLoad"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在ui主线程执行耗时任务",
      children: "在UI主线程执行耗时任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用无响应，系统生成相应的AppFreeze日志，日志中有如下非主线程调用栈："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#00 pc 00000000001b9a7c /system/lib/ld-musl-aarch64.so.1(__timedwait_cp+148)\n#01 pc 00000000001bbacc /system/lib/ld-musl-aarch64.so.1(pthread_cond_timedwait+168)\n#02 pc 00000000000c115c /system/lib64/libc++.so(std::__h::condition_variable::wait(std::__h::unique_lock<std::__h::mutex>&)+20)\n#03 pc 00000000000c1d1c /system/lib64/libc++.so(std::__h::__assoc_sub_state::__sub_wait(std::__h::unique_lock<std::__h::mutex>&)+48)\n#04 pc 0000000000baf2e4 /system/lib64/platformsdk/libace_compatible.z.so(std::__h::__assoc_state<int>::copy()+64)\n#05 pc 0000000000baf0e0 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::CancelableCallback<void ()>::WaitUntilComplete(std::__h::chrono::duration<long long, std::__h::ratio<1l, 1000l>>)+120)\n#06 pc 0000000000baed68 /system/lib64/platformsdk/libace_compatible.z.so\n#07 pc 0000000000bae640 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::TaskExecutor::PostSyncTask(std::__h::function<void ()>&&, OHOS::Ace::TaskExecutor::TaskType, std::__h::basic_string<char, std::__h::char_traits<char>, std::__h::allocator<char>> const&, OHOS::Ace::PriorityType) const+220)\n#08 pc 000000000107d9d0 /system/lib64/platformsdk/libace_compatible.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该现象表示正在向主线程抛出同步任务。需要等待主线程执行完该任务后，才能继续执行后续逻辑。通常，这种情况是由于主线程正在执行一个大粒度的任务，与当前堆栈无关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该堆栈常见于多个进程的IPC互锁过程中，此处仅为互锁环的一部分，且无法直接打破。需要从其他角度解决互锁问题，比如分析等待的目标线程在处理什么任务，是否耗时任务，或是其它同步等待任务。"
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