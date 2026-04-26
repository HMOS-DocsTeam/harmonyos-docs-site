"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["336540"], {
666206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_questions_use_napi_faqs_use_napi_faqs_md_7af_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-questions-use-napi-faqs-use-napi-faqs-md-7af.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_questions_use_napi_faqs_use_napi_faqs_md_7af_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-questions/use-napi-faqs/use-napi-faqs","title":"Node-API常见问题","description":"稳定性","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-questions/use-napi-faqs/use-napi-faqs.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-questions/use-napi-faqs","slug":"/coding/using-napi-interaction-with-cpp/napi-questions/use-napi-faqs/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/use-napi-faqs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Node-API常见问题","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-faqs","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用扩展的Node-API接口创建对ArkTS对象的Sendable强引用","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-sendable-reference/"},"next":{"title":"稳定性相关问题汇总","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-questions/use-napi-faqs/use-napi-faqs.md


const frontMatter = {
	title: 'Node-API常见问题',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-faqs',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'Node-API常见问题';

const assets = {

};



const toc = [{
  "value": "稳定性",
  "id": "稳定性",
  "level": 2
}, {
  "value": "内存泄漏",
  "id": "内存泄漏",
  "level": 2
}, {
  "value": "常见基本功能问题",
  "id": "常见基本功能问题",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "node-api常见问题",
        children: "Node-API常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "稳定性",
      children: "稳定性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability#%E5%BA%94%E7%94%A8%E8%BF%90%E8%A1%8C%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%87%BA%E7%8E%B0%E9%AB%98%E6%A6%82%E7%8E%87%E9%97%AA%E9%80%80%E6%80%8E%E4%B9%88%E8%BF%9B%E8%A1%8C%E5%AE%9A%E4%BD%8D%E8%A7%A3%E5%86%B3",
          children: "应用运行过程中出现高概率闪退，出现cppcrash栈，栈顶为系统库libark_jsruntime.so，崩溃栈前几帧也有libace_napi.z.so，怎么进行定位解决"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability#%E7%BA%BF%E7%A8%8B%E6%B1%A0%E4%B8%AD%E5%B9%B6%E5%8F%91%E8%B0%83%E7%94%A8arkts%E6%96%B9%E6%B3%95%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98",
          children: "c++线程池中并发调用ArkTS方法（c++多线程调用ArkTS方法），如何处理线程安全问题？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability#napi_value%E5%86%85%E5%AE%B9%E4%BA%A7%E7%94%9F%E5%8F%98%E5%8C%96",
          children: "napi_value非预期，napi_value创建时类型是napi_function，保存一段时间后napi_value类型发生变化"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability#%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%E8%8E%B7%E5%8F%96%E6%9C%80%E6%96%B0napi_env%E7%9A%84%E6%96%B9%E6%B3%95",
          children: "是否存在获取最新napi_env的方法？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability#napi_add_env_cleanup_hook%E8%B0%83%E7%94%A8%E6%8A%A5%E9%94%99%E8%AF%A5%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86",
          children: "napi_add_env_cleanup_hook/napi_remove_env_cleanup_hook调用报错，该如何处理？"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内存泄漏",
      children: "内存泄漏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak#%E5%BD%93%E5%89%8D%E6%98%AF%E5%90%A6%E6%9C%89%E6%9C%BA%E5%88%B6%E6%9D%A5%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E6%9C%89%E6%B3%84%E6%BC%8F%E7%9A%84napi_ref",
          children: "napi_create_reference可以创建对js对象的引用，保持js对象不释放，正常来说使用完需要使用napi_delete_reference进行释放，但怕漏delete导致js对象内存泄漏，当前是否有机制来检查/测试是否有泄漏的napi_reference？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak#napi%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B%E4%B8%AD%E9%81%87%E8%A7%81%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E9%97%AE%E9%A2%98%E8%A6%81%E6%80%8E%E4%B9%88%E5%AE%9A%E4%BD%8D%E8%A7%A3%E5%86%B3",
          children: "Node-API开发过程中，遇见内存泄漏问题，要怎么定位解决？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle",
          children: "参数泄漏问题参考napi_open_handle_scope、napi_close_handle_scope"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak#napi_threadsafe_function%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E5%BA%94%E8%AF%A5%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86",
          children: "napi_threadsafe_function内存泄漏，应该如何处理？"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见基本功能问题",
      children: "常见基本功能问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic",
          children: "模块加载失败，Error message: is not callable NativeModule调用报错？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#%E5%9C%A8%E5%A4%A7%E9%87%8F%E9%9C%80%E8%A6%81%E8%B0%83%E7%94%A8arkts%E6%96%B9%E6%B3%95%E8%BF%9B%E8%A1%8C%E9%80%9A%E4%BF%A1%E7%9A%84%E5%9C%BA%E6%99%AF%E4%B8%AD%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E7%9A%84%E6%9C%89%E5%BA%8F%E6%80%A7",
          children: "是否有保序的线程通信推荐写法？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%E4%BE%BF%E6%8D%B7%E7%9A%84%E5%9B%9E%E8%B0%83arkts%E7%9A%84%E6%96%B9%E5%BC%8F",
          children: "是否存在便捷的NAPI回调ArkTS的方式？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-26",
          children: "如何在C++调用从ArkTS传递过来的function？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#%E5%A6%82%E4%BD%95%E7%A1%AE%E4%BF%9D%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%98%A0%E5%B0%84%E4%B8%8E%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E7%9A%84%E5%AE%89%E5%85%A8%E6%80%A7",
          children: "如何在遵循 Node-API 单一返回值约束的前提下，安全、高效地将多个返回值（包括结构化数据和指针信息）传递给 ArkTS 运行时环境，并确保数据类型的正确映射与内存管理的安全性？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-dynamic-link-library",
          children: "Node-API调用三方so"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#napi_get_uv_event_loop%E6%8E%A5%E5%8F%A3%E9%94%99%E8%AF%AF%E7%A0%81%E8%AF%B4%E6%98%8E",
          children: "napi_get_uv_event_loop接口错误码说明"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#native%E5%B1%82%E8%B0%83%E7%94%A8arkts%E5%B1%82%E5%AF%B9%E8%B1%A1%E6%96%B9%E6%B3%95%E5%BF%85%E9%A1%BB%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AAfunction%E7%BB%99native%E5%B1%82%E5%90%97",
          children: "Node-API中，native层调用ArkTS层对象方法，必须传入一个function给native层吗？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#%E6%98%AF%E5%90%A6%E8%83%BD%E8%B0%83%E7%94%A8arkts%E7%9A%84%E6%96%B9%E6%B3%95%E5%B9%B6%E8%8E%B7%E5%8F%96%E5%88%B0%E7%BB%93%E6%9E%9C",
          children: "在c++通过pthread或std::thread创建的线程，是否能调用ArkTS的方法并获取到结果？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#%E6%98%AF%E5%90%A6%E6%9C%89%E4%B8%8D%E6%8B%B7%E8%B4%9D%E7%9A%84napi_get_value_string_utf8%E6%8E%A5%E5%8F%A3%E6%88%96%E8%80%85%E8%83%BD%E5%8A%9B",
          children: "当前napi的napi_get_value_string_utf8每次调用的时候都要进行拷贝，是否有nocopy、不拷贝的napi_get_value_string_utf8接口或者能力？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%B8%8Bnapi_env%E7%9A%84%E4%BD%BF%E7%94%A8%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
          children: "多线程下napi_env的使用注意事项是什么？是否存在napi_env切换导致的异常问题？是否必须在主线程?"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#napi_call_threadsafe_function%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F%E4%B8%8D%E7%AC%A6%E5%90%88%E9%A2%84%E6%9C%9F",
          children: "napi_call_threadsafe_function执行顺序是怎样的？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#arkts%E4%BE%A7%E6%8A%A5%E9%94%99%E6%98%BE%E7%A4%BAundefined",
          children: "ArkTS侧import xxx from libxxx.so后，使用xxx报错显示undefined/not callable或明确的Error message"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#%E6%8E%A5%E5%8F%A3%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%E9%9D%9E%E9%A2%84%E6%9C%9F",
          children: "接口执行结果非预期，日志显示occur exception need return"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#napi_value%E5%92%8Cnapi_ref%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%9C%89%E4%BD%95%E5%8C%BA%E5%88%AB",
          children: "napi_value和napi_ref的生命周期有何区别"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#node-api%E6%8E%A5%E5%8F%A3%E8%BF%94%E5%9B%9E%E5%80%BC%E4%B8%8D%E6%98%AFnapi_ok%E6%97%B6%E5%A6%82%E4%BD%95%E6%8E%92%E6%9F%A5%E5%AE%9A%E4%BD%8D",
          children: "Node-API接口返回值不是napi_ok时，如何排查定位"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#napi_wrap%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E8%A2%ABwrap%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%8C%89%E6%9C%9F%E6%9C%9B%E9%A1%BA%E5%BA%8F%E6%9E%90%E6%9E%84",
          children: "napi_wrap如何保证被wrap的对象按期望顺序析构？"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#napi_call_threadsafe_function%E5%9B%9E%E8%B0%83%E4%BB%BB%E5%8A%A1%E4%B8%8D%E6%89%A7%E8%A1%8C",
          children: "napi_call_threadsafe_function回调任务不执行"
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