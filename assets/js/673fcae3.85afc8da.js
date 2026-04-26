"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["273726"], {
848837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_use_napi_process_use_napi_process_md_673_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-use-napi-process-use-napi-process-md-673.json
var site_docs_coding_using_napi_interaction_with_cpp_use_napi_process_use_napi_process_md_673_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/use-napi-process/use-napi-process","title":"使用Node-API实现跨语言交互开发流程","description":"使用Node-API实现跨语言交互，首先需要按照Node-API的机制实现模块的注册和加载等相关动作。","source":"@site/docs/coding/using-napi-interaction-with-cpp/use-napi-process/use-napi-process.md","sourceDirName":"coding/using-napi-interaction-with-cpp/use-napi-process","slug":"/coding/using-napi-interaction-with-cpp/use-napi-process/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/use-napi-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用Node-API实现跨语言交互开发流程","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-process","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Node-API开发规范","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-guidelines/"},"next":{"title":"使用Node-API进行扩展能力功能开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/use-napi-process/use-napi-process.md


const frontMatter = {
	title: '使用Node-API实现跨语言交互开发流程',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-process',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API实现跨语言交互开发流程';

const assets = {

};



const toc = [{
  "value": "创建Native C++工程",
  "id": "创建native-c工程",
  "level": 2
}, {
  "value": "Native侧方法的实现",
  "id": "native侧方法的实现",
  "level": 2
}, {
  "value": "ArkTS侧调用C/C++方法实现",
  "id": "arkts侧调用cc方法实现",
  "level": 2
}, {
  "value": "Node-API的约束限制",
  "id": "node-api的约束限制",
  "level": 2
}, {
  "value": "SO命名规则",
  "id": "so命名规则",
  "level": 3
}, {
  "value": "注册建议",
  "id": "注册建议",
  "level": 3
}, {
  "value": "多线程限制",
  "id": "多线程限制",
  "level": 3
}, {
  "value": "代码调试设备选择",
  "id": "代码调试设备选择",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用node-api实现跨语言交互开发流程",
        children: "使用Node-API实现跨语言交互开发流程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API实现跨语言交互，首先需要按照Node-API的机制实现模块的注册和加载等相关动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ArkTS/JS侧"
          })
        }), "：实现C++方法的调用，通过import所需的so库后，可以调用C++方法。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Native侧"
          })
        }), "：.cpp文件，实现模块的注册。需要提供注册lib库的名称，并在注册回调方法中定义接口的映射关系，即Native方法及对应的JS/ArkTS接口名称等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以在ArkTS/JS侧调用callNative()接口、在Native侧实现加法操作的CallNative()接口，从而实现跨语言交互为例，呈现使用Node-API进行跨语言交互的流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建native-c工程",
      children: "创建Native C++工程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在DevEco Studio中", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "New > Create Project"
          })
        }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Native C++", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模板，点击"
              })
            }), "Next"]
          })
        }), "，选择API版本，设置好工程名称，点击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finish"
          })
        }), "，创建得到新工程。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建工程后工程结构可以分两部分，cpp部分和ets部分，工程结构具体介绍可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-project-structure",
          children: "C++工程目录结构"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "native侧方法的实现",
      children: "Native侧方法的实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置模块注册信息"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧import native模块时，会加载其对应的so。加载so时，首先会调用napi_module_register方法，将模块注册到系统中，并调用模块初始化函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "napi_module有两个关键属性：一个是.nm_register_func，定义模块初始化函数；另一个是.nm_modname，定义模块的名称，也就是ArkTS侧引入的so库的名称，模块系统会根据此名称来区分不同的so。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/napi_init.cpp\n\n// 准备模块加载相关信息，将上述Init函数与本模块名等信息记录下来。\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = {0},\n};\n\n// 加载so时，该函数会自动被调用，将上述demoModule模块注册到系统中。\nextern \"C\" __attribute__((constructor)) void RegisterDemoModule() {\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注：以上代码无须复制，创建Native C++工程以后在napi_init.cpp代码中已配置好。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块初始化"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现ArkTS接口与C++接口的绑定和映射。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/napi_init.cpp\nEXTERN_C_START\n// 模块初始化\nstatic napi_value Init(napi_env env, napi_value exports) {\n    // ArkTS接口与C++接口的绑定和映射\n    napi_property_descriptor desc[] = {\n        // 注：仅需复制以下两行代码，Init在完成创建Native C++工程以后在napi_init.cpp中已配置好。\n        {\"callNative\", nullptr, CallNative, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"nativeCallArkTS\", nullptr, NativeCallArkTS, nullptr, nullptr, nullptr, napi_default, nullptr}\n    };\n    // 在exports对象上挂载CallNative/NativeCallArkTS两个Native方法\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在index.d.ts文件中，提供JS侧的接口方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/types/libentry/index.d.ts\nexport const callNative: (a: number, b: number) => number;\nexport const nativeCallArkTS: (cb: (a: number) => number) => number;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在oh-package.json5文件中将index.d.ts与cpp文件关联起来。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/types/libentry/oh-package.json5\n{\n  \"name\": \"libentry.so\",\n  \"types\": \"./index.d.ts\",\n  \"version\": \"\",\n  \"description\": \"Please describe the basic information.\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMakeLists.txt文件中配置CMake打包参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# entry/src/main/cpp/CMakeLists.txt\ncmake_minimum_required(VERSION 3.4.1)\nproject(MyApplication2)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\n# 添加名为entry的库\nadd_library(entry SHARED napi_init.cpp)\n# 构建此可执行文件需要链接的库\ntarget_link_libraries(entry PUBLIC libace_napi.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现Native侧的CallNative以及NativeCallArkTS接口。具体代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/napi_init.cpp\nstatic napi_value CallNative(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    // 声明参数数组\n    napi_value args[2] = {nullptr};\n\n    // 获取传入的参数并依次放入参数数组中\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 依次获取参数\n    double value0;\n    napi_get_value_double(env, args[0], &value0);\n    double value1;\n    napi_get_value_double(env, args[1], &value1);\n\n    // 返回两数相加的结果\n    napi_value sum;\n    napi_create_double(env, value0 + value1, &sum);\n    return sum;\n}\n\nstatic napi_value NativeCallArkTS(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    // 声明参数数组\n    napi_value args[1] = {nullptr};\n\n    // 获取传入的参数并依次放入参数数组中\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 创建一个int，作为ArkTS的入参\n    napi_value argv = nullptr;\n    napi_create_int32(env, 2, &argv);\n\n    // 调用传入的callback，并将其结果返回\n    napi_value result = nullptr;\n    napi_call_function(env, nullptr, args[0], 1, &argv, &result);\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts侧调用cc方法实现",
      children: "ArkTS侧调用C/C++方法实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧通过import引入Native侧包含处理逻辑的so来使用C/C++的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entry/src/main/ets/pages/Index.ets\n// 通过import的方式，引入Native能力。\nimport nativeModule from 'libentry.so'\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Test Node-API callNative result: ';\n  @State message2: string = 'Test Node-API nativeCallArkTS result: ';\n  build() {\n    Row() {\n      Column() {\n        // 第一个按钮，调用callNative方法，对应到Native侧的CallNative方法，进行两数相加。\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.message += nativeModule.callNative(2, 3);\n            })\n        // 第二个按钮，调用nativeCallArkTS方法，对应到Native的NativeCallArkTS，在Native调用ArkTS function。\n        Text(this.message2)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.message2 += nativeModule.nativeCallArkTS((a: number)=> {\n                return a * 2;\n            });\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "node-api的约束限制",
      children: "Node-API的约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "so命名规则",
      children: "SO命名规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入使用的模块名和注册时的模块名大小写保持一致，如模块名为entry，则so的名字为libentry.so，napi_module中nm_modname字段应为entry，ArkTS侧使用时写作：import xxx from 'libentry.so'。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注册建议",
      children: "注册建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nm_register_func对应的函数（如上述Init函数）需要加上static，防止与其他so里的符号冲突。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块注册的入口，即使用__attribute__((constructor))修饰的函数的函数名（如上述RegisterDemoModule函数）需要确保不与其它模块重复。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多线程限制",
      children: "多线程限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个引擎实例对应一个ArkTS线程，实例上的对象不能跨线程操作，否则会引起应用crash。使用时需要遵循如下原则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node-API接口只能在ArkTS线程使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native接口入参env与特定ArkTS线程绑定，只能在创建该env的线程使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Node-API接口创建的数据需在env完全销毁前进行释放，避免内存泄漏。此外，在napi_env销毁后访问/使用这些数据，可能会导致进程崩溃。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码调试设备选择",
      children: "代码调试设备选择"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议开发者优先使用真机进行代码调试，若无真机或者真机无权限则可使用模拟器进行调试，模拟器调试中遇到的问题详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/bm-tool#bm%E5%B7%A5%E5%85%B7%E9%94%99%E8%AF%AF%E7%A0%81",
        children: "bm工具"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者不要使用预览器进行功能调试，预览器的主要功能是调试界面组件，若用于功能调试可能会出现如下报错："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeError: undefined is not callable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["部分常见错误用法已增加维测手段覆盖，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-crash",
        children: "使用Node-API接口产生的异常日志/崩溃分析"
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