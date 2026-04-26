"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["323361"], {
775363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_class_use_jsvm_about_class_md_0de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-class-use-jsvm-about-class-md-0de.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_class_use_jsvm_about_class_md_0de_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-class/use-jsvm-about-class","title":"使用JSVM-API接口进行class相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-class/use-jsvm-about-class.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-class","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-class/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-class/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"使用JSVM-API接口进行class相关开发","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-class","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口操作bigint类型值","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-bigint/"},"next":{"title":"使用JSVM-API接口进行Date相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-date/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-class/use-jsvm-about-class.md


const frontMatter = {
	title: '使用JSVM-API接口进行class相关开发',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-class',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行class相关开发';

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
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "OH_JSVM_NewInstance",
  "id": "oh_jsvm_newinstance",
  "level": 3
}, {
  "value": "OH_JSVM_GetNewTarget",
  "id": "oh_jsvm_getnewtarget",
  "level": 3
}, {
  "value": "OH_JSVM_DefineClass",
  "id": "oh_jsvm_defineclass",
  "level": 3
}, {
  "value": "OH_JSVM_Wrap",
  "id": "oh_jsvm_wrap",
  "level": 3
}, {
  "value": "OH_JSVM_Unwrap",
  "id": "oh_jsvm_unwrap",
  "level": 3
}, {
  "value": "OH_JSVM_RemoveWrap",
  "id": "oh_jsvm_removewrap",
  "level": 3
}, {
  "value": "OH_JSVM_DefineClassWithOptions",
  "id": "oh_jsvm_defineclasswithoptions",
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
        id: "使用jsvm-api接口进行class相关开发",
        children: "使用JSVM-API接口进行class相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API接口进行class相关开发，处理JavaScript中的类，例如定义类、构造实例等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用JSVM-API接口进行class相关开发时，需要理解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "类"
          })
        }), "：类是用于创建对象的模板。它提供了一种封装数据和行为的方式，以便于对数据进行处理和操作。类在JavaScript中是建立在原型（prototype）的基础上的，并且还引入了一些类独有的语法和语义。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "实例"
          })
        }), "：实例是通过类创建具体的对象。类定义了对象的结构和行为，而实例则是类的具体表现。通过实例化类，我们可以访问类中定义的属性和方法，并且每个实例都具有自己的属性值。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_NewInstance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，创建一个实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetNewTarget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取函数的元属性new.target。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DefineClass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在JavaScript中定义一个类，并与对应的C类进行封装和交互。它提供了创建类的构造函数、定义属性和方法的能力，支持C和JavaScript之间的数据交互。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在JavaScript对象中封装原生实例。稍后可以使用OH_JSVM_Unwrap()解包原生实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解包先前封装在JavaScript对象中的原生实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_RemoveWrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解包先前封装在JavaScript对象中的原生实例，并释放封装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DefineClassWithOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个具有给定类名、构造函数、属性和回调处理程序、父类的JavaScript类，并根据传入了DefineClassOptions来决定是否需要为所定义的Class设置属性代理、预留internal-field槽位、为class作为函数进行调用时设置函数回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅对接口对应C++相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_newinstance",
      children: "OH_JSVM_NewInstance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过给定的构造函数，构建一个实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include <string.h>\n#include <fstream>\n\nstd::string ToString(JSVM_Env env, JSVM_Value val) {\n    JSVM_Value jsonString = nullptr;\n    JSVM_CALL(OH_JSVM_JsonStringify(env, val, &jsonString));\n    size_t totalLen = 0;\n    JSVM_CALL(OH_JSVM_GetValueStringUtf8(env, jsonString, nullptr, 0, &totalLen));\n    size_t needLen = totalLen + 1;\n    char* buff = new char[needLen];\n    std::memset(buff, 0, needLen);\n    JSVM_CALL(OH_JSVM_GetValueStringUtf8(env, jsonString, buff, needLen, &totalLen));\n    std::string str(buff);\n    delete[] buff;\n    return str;\n}\n\n// OH_JSVM_NewInstance的样例方法\nstatic JSVM_Value NewInstance(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 获取js侧传入的两个参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr));\n    JSVM_Value result = nullptr;\n    // 调用OH_JSVM_NewInstance接口，实例化一个对象，将这个对象返回\n    JSVM_CALL(OH_JSVM_NewInstance(env, args[0], 1, &args[1], &result));\n    std::string str = ToString(env, result);\n    OH_LOG_INFO(LOG_APP, \"NewInstance:%{public}s\", str.c_str());\n    return nullptr;\n}\n\n// 通过给定的构造函数，构建一个实例。\n// NewInstance注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = NewInstance},\n};\n\nstatic JSVM_CallbackStruct *method = param;\n\n// NewInstance方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"newInstance\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例JS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(\n   function Fruit(name) {\n       this.name = name;\n   }\n   newInstance(Fruit, \"apple\");\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出下面的结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NewInstance:{\"name\":\"apple\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getnewtarget",
      children: "OH_JSVM_GetNewTarget"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取函数的元属性new.target值。在JavaScript中，new.target是一个特殊的元属性，用于检测函数或构造函数是否是通过 'new' 运算符被调用的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_defineclass",
      children: "OH_JSVM_DefineClass"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在JavaScript中定义一个类，并与对应的C类进行封装和交互。它提供了创建类的构造函数、定义属性和方法的能力，以及在C和JavaScript之间进行数据交互的支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include <string>\n\nJSVM_Value CreateInstance(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_Value newTarget;\n    // 获取构造函数的new.target值\n    JSVM_CALL(OH_JSVM_GetNewTarget(env, info, &newTarget));\n    OH_LOG_INFO(LOG_APP, \"Create Instance\");\n    OH_LOG_INFO(LOG_APP, \"NAPI MyObject::New %{public}s\", newTarget != nullptr ? \"newTarget != nullptr\" : \"newTarget == nullptr\");\n    JSVM_Value jsObject = nullptr;\n    JSVM_CALL(OH_JSVM_CreateObject(env, &jsObject));\n    JSVM_Value jsName = nullptr;\n    JSVM_CALL(OH_JSVM_CreateStringUtf8(env, \"name\", JSVM_AUTO_LENGTH, &jsName));\n    JSVM_Value jsValue = nullptr;\n    JSVM_CALL(OH_JSVM_CreateStringUtf8(env, \"lilei\", JSVM_AUTO_LENGTH, &jsValue));\n    JSVM_CALL(OH_JSVM_SetProperty(env, jsObject, jsName, jsValue));\n    return jsObject;\n}\n\nstd::string ToString(JSVM_Env env, JSVM_Value val) {\n    JSVM_Value jsonString = nullptr;\n    JSVM_CALL(OH_JSVM_JsonStringify(env, val, &jsonString));\n    size_t totalLen = 0;\n    JSVM_CALL(OH_JSVM_GetValueStringUtf8(env, jsonString, nullptr, 0, &totalLen));\n    size_t needLen = totalLen + 1;\n    char* buff = new char[needLen];\n    std::memset(buff, 0, needLen);\n    JSVM_CALL(OH_JSVM_GetValueStringUtf8(env, jsonString, buff, needLen, &totalLen));\n    std::string str(buff);\n    delete[] buff;\n    return str;\n}\n\n// 封装c++中的自定义数据结构\nJSVM_Value DefineClass(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_CallbackStruct param;\n    param.data = nullptr;\n    param.callback = CreateInstance;\n    JSVM_Value cons;\n    // 用于在JavaScript中定义一个类\n    JSVM_CALL(OH_JSVM_DefineClass(env, \"MyObject\", JSVM_AUTO_LENGTH, &param, 0, nullptr, &cons));\n    JSVM_Value instanceValue = nullptr;\n    // 作为class的构造函数调用\n    JSVM_CALL(OH_JSVM_NewInstance(env, cons, 0, nullptr, &instanceValue));\n    std::string str = ToString(env, instanceValue);\n    OH_LOG_INFO(LOG_APP, \"NewInstance:%{public}s\", str.c_str());\n    \n    // 作为普通的函数调用\n    JSVM_Value global = nullptr;\n    JSVM_CALL(OH_JSVM_GetGlobal(env, &global));\n    JSVM_Value key;\n    JSVM_CALL(OH_JSVM_CreateStringUtf8(env, \"Constructor\", JSVM_AUTO_LENGTH, &key));\n    JSVM_CALL(OH_JSVM_SetProperty(env, global, key, cons));\n    JSVM_Value result = nullptr;\n    JSVM_CALL(OH_JSVM_CallFunction(env, global, cons, 0, nullptr, &result));\n    std::string buf = ToString(env, result);\n    OH_LOG_INFO(LOG_APP, \"NewInstance:%{public}s\", buf.c_str());\n    return nullptr;\n}\n\n// 注册DefineClass的方法\nJSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = DefineClass},\n};\n\nstatic JSVM_CallbackStruct *method = param;\n\n// DefineClass方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"defineClass\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例JS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(\n    defineClass();\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出下面的结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Create Instance\n\nNAPI MyObject::New newTarget != nullptr\n\nNewInstance:{\"name\":\"lilei\"}\n\nCreate Instance\n\nNAPI MyObject::New newTarget == nullptr\n\nNewInstance:{\"name\":\"lilei\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_wrap",
      children: "OH_JSVM_Wrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JavaScript对象中封装原生实例。稍后可以使用OH_JSVM_Unwrap()解包原生实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_unwrap",
      children: "OH_JSVM_Unwrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解包JavaScript对象中先前封装的原生实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_removewrap",
      children: "OH_JSVM_RemoveWrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解包先前封装在JavaScript对象中的原生实例并释放封装"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include <string>\n\n// OH_JSVM_GetNewTarget、OH_JSVM_DefineClass、OH_JSVM_Wrap、OH_JSVM_Unwrap、OH_JSVM_RemoveWrap的样例方法\n\n// 自定义类结构体Object\nstruct Object {\n    std::string name;\n    int32_t age;\n};\n\n// 定义一个回调函数\nstatic void DerefItem(JSVM_Env env, void *data, void *hint) {\n    OH_LOG_INFO(LOG_APP, \"JSVM deref_item\");\n    (void)hint;\n}\n\nstatic JSVM_Value WrapObject(JSVM_Env env, JSVM_CallbackInfo info) {\n    OH_LOG_INFO(LOG_APP, \"JSVM wrap\");\n    Object obj;\n    // 设置Object属性\n    obj.name = \"lilei\";\n    obj.age = 18;\n    Object *objPointer = &obj;\n    // 获取回调信息中的参数数量和将要被封装的值\n    size_t argc = 1;\n    JSVM_Value toWrap = nullptr;\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, &toWrap, nullptr, nullptr));\n    // OH_JSVM_Wrap将自定义结构Object进行封装\n    JSVM_CALL(OH_JSVM_Wrap(env, toWrap, reinterpret_cast<void *>(objPointer), DerefItem, NULL, NULL));\n    Object *data;\n    // OH_JSVM_UnWrap解包先前封装在JavaScript对象中的原生实例\n    JSVM_CALL(OH_JSVM_Unwrap(env, toWrap, reinterpret_cast<void **>(&data)));\n    OH_LOG_INFO(LOG_APP, \"JSVM name: %{public}s\", data->name.c_str());\n    OH_LOG_INFO(LOG_APP, \"JSVM age: %{public}d\", data->age);\n    return nullptr;\n}\n\nstatic JSVM_Value RemoveWrap(JSVM_Env env, JSVM_CallbackInfo info) {\n    OH_LOG_INFO(LOG_APP, \"JSVM removeWrap\");\n    Object obj;\n    // 设置Object属性\n    obj.name = \"lilei\";\n    obj.age = 18;\n    Object *objPointer = &obj;\n    // 获取回调信息中的参数数量和将要被封装的值\n    size_t argc = 1;\n    JSVM_Value toWrap = nullptr;\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, &toWrap, nullptr, nullptr));\n    // 将自定义结构Object封装\n    JSVM_CALL(OH_JSVM_Wrap(env, toWrap, reinterpret_cast<void *>(objPointer), DerefItem, NULL, NULL));\n    Object *data;\n    // 解包先前封装的object，并移除封装\n    JSVM_CALL(OH_JSVM_RemoveWrap(env, toWrap, reinterpret_cast<void **>(&objPointer)));\n    // 检查是否已被移除\n    JSVM_Status status = OH_JSVM_Unwrap(env, toWrap, reinterpret_cast<void **>(&data));\n    if (status != JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_RemoveWrap success\");\n    }\n    return nullptr;\n}\n\n// WrapObject、RemoveWrap注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = WrapObject},\n    {.data = nullptr, .callback = RemoveWrap},\n};\nstatic JSVM_CallbackStruct *method = param;\n// WrapObject、RemoveWrap方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"wrapObject\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n    {\"removeWrap\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例JS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(\n    class Obj {};\n    wrapObject(new Obj());\n    removeWrap(new Obj());\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出下面的结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM wrap\n\nJSVM name: lilei\n\nJSVM age: 18\n\nJSVM removeWrap\n\nJSVM OH_JSVM_RemoveWrap success\n\nJSVM deref_item\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_defineclasswithoptions",
      children: "OH_JSVM_DefineClassWithOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的父类class必须是通过OH_JSVM_DefineClass系列接口创建出来的，否则被视为无效参数，返回JSVM_INVALID_ARG错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持以下的DefineClassOptions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_DEFINE_CLASS_NORMAL: 按正常模式创建Class。默认缺省状态为JSVM_DEFINE_CLASS_NORMAL状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_DEFINE_CLASS_WITH_COUNT: 为所创建的Class预留interfield槽位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_DEFINE_CLASS_WITH_PROPERTY_HANDLER: 为所创建的Class设置监听拦截属性以及设置作为函数调用时回调函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <string>\n#include <memory>\nstatic JSVM_PropertyHandlerConfigurationStruct propertyCfg{\n  nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr\n};\n\nstatic bool g_call_as_function_flag = false;\nstatic bool g_set_named_property_flag = false;\nstatic bool g_call_as_constructor_flag = false;\nstatic bool g_properties_flag = false;\n\nstatic JSVM_Value SetNamedPropertyCbInfo2(JSVM_Env env, JSVM_Value name, JSVM_Value property, JSVM_Value thisArg,\n    JSVM_Value data)\n{\n    g_set_named_property_flag = true;\n    return property;\n}\n\nstatic JSVM_Value Add(JSVM_Env env, JSVM_CallbackInfo info) {\n    g_properties_flag = true;\n    size_t argc = 2;\n    JSVM_Value args[2];\n    OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL);\n    double num1 = 0;\n    double num2 = 0;\n    OH_JSVM_GetValueDouble(env, args[0], &num1);\n    OH_JSVM_GetValueDouble(env, args[1], &num2);\n    JSVM_Value sum = nullptr;\n    OH_JSVM_CreateDouble(env, num1 + num2, &sum);\n    return sum;\n}\n\nstd::string ToString(JSVM_Env jsvm_env, JSVM_Value val)\n{\n    JSVM_Value js_string;\n    OH_JSVM_CoerceToString(jsvm_env, val, &js_string);\n    size_t length = 0;\n    OH_JSVM_GetValueStringUtf8(jsvm_env, js_string, NULL, 0, &length);\n    size_t capacity = length + 1;\n    auto buffer = std::make_unique<char[]>(capacity);\n    size_t copy_length = 0;\n    OH_JSVM_GetValueStringUtf8(jsvm_env, js_string, buffer.get(), capacity, &copy_length);\n    std::string str(buffer.get());\n    return str;\n}\n\nJSVM_Value Run(JSVM_Env env, const char *s)\n{\n    // 1. 将const char*转换成JS_String。\n    JSVM_Value str;\n    JSVM_CALL(OH_JSVM_CreateStringUtf8(env, s, JSVM_AUTO_LENGTH, &str));\n    // 2. 将JS_String转换成JS_Script。\n    JSVM_Script script;\n    OH_JSVM_CompileScript(env, str, nullptr, JSVM_AUTO_LENGTH,   false, nullptr, &script);\n    // 3. 执行JS_Script。\n    JSVM_Value result = nullptr;\n    OH_JSVM_RunScript(env, script, &result);\n    return result;\n}\n\nstatic JSVM_Value TestDefineClassWithOptions(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    g_call_as_function_flag = false;\n    g_set_named_property_flag = false;\n    g_call_as_constructor_flag = false;\n    g_properties_flag = false;\n    // 1. Define parent-class.\n    JSVM_Value parentClass = nullptr;\n    JSVM_CallbackStruct parentClassConstructor;\n    parentClassConstructor.data = nullptr;\n    parentClassConstructor.callback = [](JSVM_Env env, JSVM_CallbackInfo info) -> JSVM_Value {\n        JSVM_Value thisVar = nullptr;\n        OH_JSVM_GetCbInfo(env, info, nullptr, nullptr, &thisVar, nullptr);\n        return thisVar;\n    };\n    JSVM_Value fooVal;\n    OH_JSVM_CreateStringUtf8(env, \"bar\", JSVM_AUTO_LENGTH, &fooVal);\n    JSVM_PropertyDescriptor des[2];\n    des[0] = {\n        .utf8name = \"foo\",\n        .value = fooVal,\n    };\n    JSVM_CallbackStruct parentProperties[] = {\n        {.callback = Add, .data = nullptr},\n    };\n    des[1] = {\n        .utf8name = \"add\",\n        .method = &parentProperties[0],\n    };\n    JSVM_DefineClassOptions options[1];\n    options[0].id = JSVM_DEFINE_CLASS_WITH_COUNT;\n    options[0].content.num = 3;\n    JSVM_CALL(OH_JSVM_DefineClassWithOptions(env, \"parentClass\", JSVM_AUTO_LENGTH, &parentClassConstructor, 2, des,\n        nullptr, 1, options, &parentClass));\n  \n    // 2. Define sub-class.\n    JSVM_Value subClass = nullptr;\n    JSVM_CallbackStruct subClassConstructor;\n    subClassConstructor.data = nullptr;\n    subClassConstructor.callback = [](JSVM_Env env, JSVM_CallbackInfo info) -> JSVM_Value {\n        JSVM_Value thisVar = nullptr;\n        g_call_as_constructor_flag = true;\n        OH_JSVM_GetCbInfo(env, info, nullptr, nullptr, &thisVar, nullptr);\n        return thisVar;\n    };\n    JSVM_DefineClassOptions subOptions[2];\n    JSVM_CallbackStruct callAsFuncParam;\n    callAsFuncParam.data = nullptr;\n    callAsFuncParam.callback = [](JSVM_Env env, JSVM_CallbackInfo info) -> JSVM_Value {\n        JSVM_Value thisVar = nullptr;\n        g_call_as_function_flag = true;\n        OH_JSVM_GetCbInfo(env, info, nullptr, nullptr, &thisVar, nullptr);\n        return thisVar;\n    };\n    propertyCfg.genericNamedPropertySetterCallback = SetNamedPropertyCbInfo2;\n    JSVM_PropertyHandler propertyHandler = {\n        .propertyHandlerCfg = &propertyCfg,\n        .callAsFunctionCallback = &callAsFuncParam,\n    };\n    subOptions[0].id = JSVM_DEFINE_CLASS_WITH_COUNT;\n    subOptions[0].content.num = 4;\n    subOptions[1].id = JSVM_DEFINE_CLASS_WITH_PROPERTY_HANDLER;\n    subOptions[1].content.ptr = &propertyHandler;\n    JSVM_CALL(OH_JSVM_DefineClassWithOptions(env, \"subClass\", JSVM_AUTO_LENGTH, &subClassConstructor, 0, nullptr,\n        parentClass, 2, subOptions, &subClass));\n    // 3. Verify the validity of 'constructor'.\n    JSVM_Value subInstance;\n    JSVM_CALL(OH_JSVM_NewInstance(env, subClass, 0, nullptr, &subInstance));\n\n    JSVM_Value globalVal;\n    OH_JSVM_GetGlobal(env, &globalVal);\n    OH_JSVM_SetNamedProperty(env, globalVal, \"obj\", subInstance);\n\n    // 4. Verify the validity of 'parentClass'.\n    JSVM_Value subRes = nullptr;\n    JSVM_CALL(OH_JSVM_GetNamedProperty(env, subInstance, \"foo\", &subRes));\n    if (ToString(env, subRes).compare(\"bar\") != 0) {\n        OH_LOG_ERROR(LOG_APP, \"Run OH_JSVM_DefineClassWithOptions: Failed\");\n    }\n    // 5. Verify the validity of 'properties'.\n    Run(env, \"obj.add(3, 4);\");\n    // 6. Verify the validity of 'options'.\n    Run(env, \"obj()\");\n    Run(env, \"obj.x = 123;\");\n    if (g_call_as_function_flag &&\n    g_set_named_property_flag &&\n    g_call_as_constructor_flag &&\n    g_properties_flag) {\n        OH_LOG_INFO(LOG_APP, \"Run OH_JSVM_DefineClassWithOptions: Success\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"Run OH_JSVM_DefineClassWithOptions: Failed\");\n    }\n    JSVM_Value checked;\n    OH_JSVM_GetBoolean(env, true, &checked);\n    return checked;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = TestDefineClassWithOptions},\n};\nstatic JSVM_CallbackStruct *method = param;\n\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"testDefineClassWithOptions\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例JS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(testDefineClassWithOptions();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出下面的结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Run OH_JSVM_DefineClassWithOptions: Success\n"
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