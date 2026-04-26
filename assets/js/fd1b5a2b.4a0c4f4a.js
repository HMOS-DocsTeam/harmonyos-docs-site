"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["741879"], {
562555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_ffrt_no_use_std_ide_hp_ffrt_no_use_std_md_fd1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-ffrt-no-use-std-ide-hp-ffrt-no-use-std-md-fd1.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_ffrt_no_use_std_ide_hp_ffrt_no_use_std_md_fd1_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-ffrt-no-use-std/ide-hp-ffrt-no-use-std","title":"@performance/hp-ffrt-no-use-std","description":"禁止在FFRT worker中使用std::xxx等同步接口。该规则仅对C/C++文件进行检查。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-ffrt-no-use-std/ide-hp-ffrt-no-use-std.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-ffrt-no-use-std","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-ffrt-no-use-std/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-ffrt-no-use-std/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":47,"frontMatter":{"title":"@performance/hp-ffrt-no-use-std","sidebar_position":47,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-ffrt-no-use-std","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/high-frequency-log-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-high-frequency-log-check/"},"next":{"title":"@performance/hp-performance-no-closures","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-performance-no-closures/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-ffrt-no-use-std/ide-hp-ffrt-no-use-std.md


const frontMatter = {
	title: '@performance/hp-ffrt-no-use-std',
	sidebar_position: 47,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-ffrt-no-use-std',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-ffrt-no-use-std';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performancehp-ffrt-no-use-std",
        children: "@performance/hp-ffrt-no-use-std"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁止在FFRT worker中使用std::xxx等同步接口。该规则仅对C/C++文件进行检查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并行化场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-ffrt-no-use-std\": \"suggestion\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\n#include <algorithm>\n#include <mutex>\n#include <condition_variable>\n#include <unistd.h>\n// ffrt头文件\n#include \"ffrt/ffrt.h\"\nusing namespace std;\nint N = 100;\nint M = 100;\n\n// ffrt::submit中使用了std::mutex\n    void PositiveCase1(int temp) {\n    ffrt::mutex lock;\n    int acc = 0;\n    for (int i = 0; i < N; ++i) {\n        ffrt::submit(\n            [&]() {\n                for (int j = 0; j < M; ++j) {\n                    lock.lock();\n                    acc++;\n                    lock.unlock();\n                }\n            },\n            {}, {});\n    }\n}\n// ffrt::submit中使用了std::condition_variable\n    void PositiveCase2(int temp) {\n    ffrt::condition_variable cond;\n    int a = 0;\n    ffrt::mutex lock_;\n    ffrt::submit(\n        [&]() {\n            std::unique_lock<ffrt::mutex> lck(lock_);\n            cond.wait(lck, [&] { return a == 1; });\n        },\n        {}, {});\n    ffrt::submit(\n        [&]() {\n            std::unique_lock<ffrt::mutex> lck(lock_);\n            a = 1;\n            cond.notify_one();\n        },\n        {}, {});\n    ffrt::wait();\n}\n// ffrt::submit中使用了std::usleep\n    void PositiveCase3(int temp) {\n    ffrt::submit(\n        [&]() {\n        ffrt_usleep(100);\n        printf(\"test\");\n        ffrt_yield();      \n    }, {}, {});\n}\n// ffrt::submit中使用了pthread_rwlock_wrlock或pthread_rwlock_rdlock\n    void PositiveCase4(int temp) {\n    int a = 0;\n    ffrt_rwlock_t mtx;\n    ffrt::submit(\n        [&]() {\n        int ret = ffrt_rwlock_wrlock(&mtx);\n        if (ret != ffrt_success) {\n            printf(\"error\\n\");\n        }\n        a++;\n        ret = ffrt_rwlock_unlock(&mtx);\n        if (ret != ffrt_success) {\n            printf(\"error\\n\");\n        }\n    }, {}, {});\n    ffrt::submit(\n        [&]() {\n        int ret = ffrt_rwlock_rdlock(&mtx);\n        if (ret != ffrt_success) {\n            printf(\"error\\n\");\n        }\n        printf(\"sum is %d\\n\", a);\n        ret = ffrt_rwlock_unlock(&mtx);\n        if (ret != ffrt_success) {\n            printf(\"error\\n\");\n        }\n    }, {}, {});\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\n#include <algorithm>\n#include <mutex>\n#include <condition_variable>\n#include <unistd.h>\n// ffrt头文件 \n#include \"ffrt/ffrt.h\" \nusing namespace std;\nint N = 100;\nint M = 100;\n// ffrt::submit中使用了std::mutex\n    void NegativeCase1(int temp) {\n    std::mutex lock;\n    int acc = 0;\n    for (int i = 0; i < N; ++i) {\n        ffrt::submit(\n            [&]() {\n                for (int j = 0; j < M; ++j) {\n                    lock.lock();\n                    acc++;\n                    lock.unlock();\n                }\n            },\n            {}, {});\n    }\n}\n// ffrt::submit中使用了std::condition_variable\n    void NegativeCase2(int temp) {\n    std::condition_variable cond;\n    int a = 0;\n    std::mutex lock_;\n    ffrt::submit(\n        [&]() {\n            std::unique_lock<std::mutex> lck(lock_);\n            cond.wait(lck, [&] { return a == 1; });\n        },\n        {}, {});\n    ffrt::submit(\n        [&]() {\n            std::unique_lock<std::mutex> lck(lock_);\n            a = 1;\n            cond.notify_one();\n        },\n        {}, {});\n    ffrt::wait();\n}\n// ffrt::submit中使用了std::usleep\n    void NegativeCase3(int temp) {\n    ffrt::submit(\n        [&]() {\n        usleep(100);\n        printf(\"test\");\n        ffrt_yield();\n    }, {}, {});\n}\n// ffrt::submit中使用了pthread_rwlock_wrlock或pthread_rwlock_rdlock\n    void NegativeCase4(int temp) {\n    int a = 0;\n    pthread_rwlock_t mtx;\n    ffrt::submit(\n        [&]() {\n        int ret = pthread_rwlock_wrlock(&mtx);\n        if (ret != 0) {\n            printf(\"error\\n\");\n        }\n        a++;\n        ret = pthread_rwlock_unlock(&mtx);\n        if (ret != 0) {\n            printf(\"error\\n\");\n        }\n    }, {}, {});\n    ffrt::submit(\n        [&]() {\n        int ret = pthread_rwlock_rdlock(&mtx);\n        if (ret != 0) {\n            printf(\"error\\n\");\n        }\n        printf(\"sum is %d\\n\", a);\n        ret = pthread_rwlock_unlock(&mtx);\n        if (ret != 0) {\n            printf(\"error\\n\");\n        }\n    }, {}, {});\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/recommended\nplugin:@performance/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
      }), "。"]
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