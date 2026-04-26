"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["631673"], {
445178(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_class_use_napi_about_class_md_aa6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-class-use-napi-about-class-md-aa6.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_class_use_napi_about_class_md_aa6_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-class/use-napi-about-class","title":"使用Node-API进行class相关开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-class/use-napi-about-class.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-class","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-class/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-class/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用Node-API进行class相关开发","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-class","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口创建基本数据类型","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-basic-data-types/"},"next":{"title":"使用Node-API接口注册和使用环境清理钩子","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-cleanuphook/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-class/use-napi-about-class.md


const frontMatter = {
	title: '使用Node-API进行class相关开发',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-class',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API进行class相关开发';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "场景和功能介绍",
  "id": "场景和功能介绍",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "napi_new_instance",
  "id": "napi_new_instance",
  "level": 3
}, {
  "value": "napi_get_new_target",
  "id": "napi_get_new_target",
  "level": 3
}, {
  "value": "napi_define_class",
  "id": "napi_define_class",
  "level": 3
}, {
  "value": "napi_wrap",
  "id": "napi_wrap",
  "level": 3
}, {
  "value": "napi_unwrap",
  "id": "napi_unwrap",
  "level": 3
}, {
  "value": "napi_remove_wrap",
  "id": "napi_remove_wrap",
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
    img: "img",
    li: "li",
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
        id: "使用node-api进行class相关开发",
        children: "使用Node-API进行class相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口进行class相关开发，处理ArkTS中的类，例如定义类、构造实例等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用Node-API接口进行class相关开发时，需要理解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "类"
          })
        }), "：类是用于创建对象的模板。它提供了一种封装数据和行为的方式，以便于对数据进行处理和操作。类在ArkTS中是建立在原型（prototype）的基础上的，并且还引入了一些类独有的语法和语义。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "实例"
          })
        }), "：实例是通过类创建具体的对象。类定义了对象的结构和行为，而实例则是类的具体表现。通过实例化类，我们可以访问类中定义的属性和方法，并且每个实例都具有自己的属性值。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "原型"
          })
        }), "：ArkTS也采用Class的概念来实现类型之间的继承，早期EcmaScript规范定义了原型的概念，对象通过原型链的方式来实现继承的。原型的概念可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://262.ecma-international.org/#sec-terms-and-definitions-prototype",
          children: "EcmaScript的社区规范"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API接口主要用于处理class。他们的使用场景如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_new_instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过给定的构造函数构建一个实例时，可以使用这个函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_new_target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用此函数获取构造函数调用的new.target。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Node-API模块定义与ArkTS类相对应的类。这个函数允许将Node-API模块类绑定到ArkTS类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个Node-API模块对象实例。这个函数通常在将Node-API模块对象与ArkTS对象进行绑定时使用，以便在ArkTS中使用本地对象的方法和属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS对象上获取之前绑定的Node-API模块对象实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS对象上获取之前绑定的Node-API模块对象实例，并解除绑定。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，本文仅对接口对应C++及ArkTS相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_new_instance",
      children: "napi_new_instance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过给定的构造函数实例化一个对象，将这个对象返回ArkTS侧使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(572084)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数constructor不是function类型则返回napi_function_expected。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_new_instance\nstatic napi_value NewInstance(napi_env env, napi_callback_info info)\n{\n    // 传入并解析参数，第一个参数为传入的构造函数，第二个参数为需要传入构造函数的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 调用napi_new_instance接口，实例化一个对象，将这个对象返回\n    napi_value result = nullptr;\n    napi_new_instance(env, args[0], 1, &args[1], &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const newInstance: (obj: Object, param: string) => Object; // napi_new_instance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Fruit {\n  name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_new_instance\n// 调用函数，用变量obj接收函数返回的实例化对象\nlet obj = testNapi.newInstance(Fruit, 'test');\n// 打印实例化对象obj的信息\nhilog.info(0x0000, 'Node-API', 'napi_new_instance %{public}s', JSON.stringify(obj));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_new_target",
      children: "napi_get_new_target"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取构造函数的new.target值。在ArkTS中，new.target是一个特殊的元属性，用于在构造函数中判断是否通过new关键字调用了该构造函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码可以参考链接："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-object-wrap",
        children: "Native与ArkTS对象绑定"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_define_class",
      children: "napi_define_class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于定义一个ArkTS类。该函数允许在Node-API模块中创建一个ArkTS类，并将类的方法和属性与相应的Node-API模块关联起来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码可以参考链接："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-object-wrap",
        children: "Native与ArkTS对象绑定"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_wrap",
      children: "napi_wrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS object上绑定一个native对象实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(934119)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数js_object不为object类型或function类型时返回napi_object_expected。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_unwrap",
      children: "napi_unwrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从一个被包装的对象中获取与之关联的数据指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(65864)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数js_object不为object类型或function类型时返回napi_object_expected。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_remove_wrap",
      children: "napi_remove_wrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ArkTS object上获取先前绑定的native对象实例，并解除绑定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859046)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数js_object不为object类型或function类型时返回napi_object_expected。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct Object {\n    std::string name;\n    int32_t age;\n};\n\nstatic void DerefItem(napi_env env, void *data, void *hint)\n{\n    // 可选的原生回调，用于在ArkTS对象被垃圾回收时释放原生实例\n    OH_LOG_INFO(LOG_APP, \"Node-API DerefItem\");\n    Object *obj = reinterpret_cast<Object *>(data);\n    if (obj != nullptr) {\n        delete obj;\n    }\n}\n\n// napi_wrap\nstatic napi_value Wrap(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"Node-API wrap\");\n    // 初始化Node-API模块的object\n    struct Object *obj = new struct Object();\n    obj->name = \"liLei\";\n    obj->age = INT_ARG_18;\n    size_t argc = 1;\n    napi_value toWrap;\n    // 调用napi_wrap将Node-API模块的object绑定到ArkTS object上\n    napi_status status_cb = napi_get_cb_info(env, info, &argc, &toWrap, NULL, NULL);\n    if (status_cb != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_get_cb_info failed\");\n        delete obj;\n        return nullptr;\n    }\n    napi_status status = napi_wrap(env, toWrap, reinterpret_cast<void *>(obj), DerefItem, NULL, NULL);\n    if (status != napi_ok) {\n        // 主动释放内存\n        delete obj;\n    }\n\n    return toWrap;\n}\n\n// napi_remove_wrap\nstatic napi_value RemoveWrap(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"Node-API removeWrap\");\n    size_t argc = 1;\n    napi_value wrapped = nullptr;\n    void *data = nullptr;\n    // 调用napi_remove_wrap从一个被包装的对象中解除包装\n    napi_get_cb_info(env, info, &argc, &wrapped, nullptr, nullptr);\n    napi_status status = napi_remove_wrap(env, wrapped, &data);\n    if (status != napi_ok || data == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"Node-API napi_remove_wrap failed or data is nullptr\");\n        return nullptr;\n    }\n\n    return nullptr;\n}\n\n// napi_unwrap\nstatic napi_value UnWrap(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"Node-API unWrap\");\n    size_t argc = 1;\n    napi_value wrapped = nullptr;\n    napi_get_cb_info(env, info, &argc, &wrapped, nullptr, nullptr);\n    // 调用napi_unwrap取出绑定在ArkTS object中的数据并打印\n    struct Object *data = nullptr;\n    napi_status status = napi_unwrap(env, wrapped, reinterpret_cast<void **>(&data));\n    if (status != napi_ok || data == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"Node-API napi_unwrap failed or data is nullptr\");\n        return nullptr;\n    }\n    OH_LOG_INFO(LOG_APP, \"Node-API name: %{public}s\", data->name.c_str());\n    OH_LOG_INFO(LOG_APP, \"Node-API age: %{public}d\", data->age);\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const wrap: (obj: Object) => Object; // napi_wrap\n\nexport const unWrap: (obj: Object) => void; // napi_unwrap\n\nexport const removeWrap: (obj: Object) => void; // napi_remove_wrap\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  class Obj {\n  }\n\n  let obj: Obj = {};\n  testNapi.wrap(obj); // napi_wrap\n  testNapi.unWrap(obj); // napi_unwrap\n  testNapi.removeWrap(obj); // napi_remove_wrap\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API error: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上代码如果要在native cpp中打印日志，需在CMakeLists.txt文件中添加以下配置信息（并添加头文件：#include \"hilog/log.h\"）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CMakeLists.txt\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
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
65864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
572084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
934119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
859046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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