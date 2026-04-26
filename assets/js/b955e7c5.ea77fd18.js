"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["658807"], {
706101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_questions_napi_faq_about_stability_napi_faq_about_stability_md_b95_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-questions-napi-faq-about-stability-napi-faq-about-stability-md-b95.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_questions_napi_faq_about_stability_napi_faq_about_stability_md_b95_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability/napi-faq-about-stability","title":"稳定性相关问题汇总","description":"应用运行过程中出现高概率闪退怎么进行定位解决","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability/napi-faq-about-stability.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability","slug":"/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"稳定性相关问题汇总","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-stability","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Node-API常见问题","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/use-napi-faqs/"},"next":{"title":"内存泄漏相关问题汇总","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability/napi-faq-about-stability.md


const frontMatter = {
	title: '稳定性相关问题汇总',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-stability',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '稳定性相关问题汇总';

const assets = {

};



const toc = [{
  "value": "应用运行过程中出现高概率闪退怎么进行定位解决",
  "id": "应用运行过程中出现高概率闪退怎么进行定位解决",
  "level": 2
}, {
  "value": "线程池中并发调用ArkTS方法如何处理线程安全问题",
  "id": "线程池中并发调用arkts方法如何处理线程安全问题",
  "level": 2
}, {
  "value": "napi_value内容产生变化",
  "id": "napi_value内容产生变化",
  "level": 2
}, {
  "value": "是否存在获取最新napi_env的方法",
  "id": "是否存在获取最新napi_env的方法",
  "level": 2
}, {
  "value": "napi_add_env_cleanup_hook调用报错该如何处理",
  "id": "napi_add_env_cleanup_hook调用报错该如何处理",
  "level": 2
}, {
  "value": "napi_open_handle_scope与napi_close_handle_scope进行生命周期相关开发典型错误场景",
  "id": "napi_open_handle_scope与napi_close_handle_scope进行生命周期相关开发典型错误场景",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "稳定性相关问题汇总",
        children: "稳定性相关问题汇总"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用运行过程中出现高概率闪退怎么进行定位解决",
      children: "应用运行过程中出现高概率闪退怎么进行定位解决"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题：在使用Node-API开发过程中，应用运行过程中出现高概率闪退，出现cpp crash栈，栈顶为系统库libark_jsruntime.so，崩溃栈前几帧也有libace_napi.z.so，怎么进行定位解决？"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复现概率高，每次崩溃栈略有区别，但是共性都是：崩溃栈顶是系统库的libark_jsruntime.so或者libace_napi.z.so。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "崩溃信息如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Reason:Signal:SIGSEGV(SEGV_MAPERR)@0x00000136 probably caus\nFault thread info:\nTid:15894, Name:e.myapplication\n#00 pc 002b8dd4 /system/lib/platformsdk/libark_jsruntime.so\n#01 pc 0024d3e1 /system/lib/platformsdk/libark_jsruntime.so\n#02 pc 0024d0d9 /system/lib/platformsdk/libark_jsruntime.so\n#03 pc 002eac5d /system/lib/platformsdk/libark_jsruntime.so\n#04 pc 00428d0f /system/lib/platformsdk/libark_jsruntime.so\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定位问题："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API时如果出现高概率闪退，崩溃栈顶在系统库libark_jsruntime.so，一般是开发者Node-API接口使用不当导致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以下定位问题的思路，可作为参考："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排查是否存在多线程安全问题（概率较大）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio中提供了相关开关，开启开关后，重新编译打包并运行，看看崩溃栈是不是符合下面这个文档的描述，如果是，那就是在使用Node-API时，存在多线程安全问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ark-runtime-detection#section19357830121120",
            children: "常见多线程安全问题"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio开关："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(624576)/* ["default"] */.A) + "",
            width: "689",
            height: "257"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Node-API接口时入参非法导致。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "这种情况一般是崩溃栈上的so会很浅，so调用了某个具体的Node-API接口，比如调用了napi_call_function之类的接口，然后Node-API又调到了libark_jsruntime的so，然后直接崩溃在libark_jsruntime里面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例栈结构如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#01 /system/lib/platformsdk/libark_jsruntime.so\n#02 /system/lib/platformsdk/libark_jsruntime.so\n#03 /system/lib/platformsdk/libace_napi.z.so(napi_set_named_property+170) -- Node-API的so，该位置显示具体调用报错的接口\n#04 /data/storage/el1/bundle/libs/arm/libentry.so -- 你的so\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果是入参问题，一般so在崩溃栈上的位置比较浅（不会跑到#10这种离栈顶很远的位置），不过也可以按照这个思路进行排查。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查思路参考："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a. 排查有没有napi_value未初始化，还没赋值成功，直接作为非法入参传递给接口了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "b. 排查有没有在这个易错API列表里面找到相应的篇章。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可参考文档："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-coding-standard-api#section1219614634615",
        children: "方舟运行时API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "线程池中并发调用arkts方法如何处理线程安全问题",
      children: "线程池中并发调用ArkTS方法如何处理线程安全问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "现有个场景，ArkTS中有个类方法，对这个方法创建了napi_ref引用，现想在C++线程池中并发地调用ArkTS方法，有以下几个问题："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以在C++创建的线程池中调用napi_ref缓存的ArkTS类方法吗？"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "回调到ArkTS要怎么确保线程安全？"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于问题一："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只能在C++线程中将ArkTS任务抛回ArkTS线程，这时候并不是同步调用，而是一个抛任务的动作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，这个ArkTS方法真正的执行动作只能在ArkTS线程中完成，即，只能方法运行在对应的ArkTS线程上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于问题二："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上面提到，C++线程都是抛任务到ArkTS线程，进而执行ArkTS方法。关于线程安全，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety",
        children: "使用Node-API接口进行线程安全开发"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["另外，开发过程中也可以打开", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ark-runtime-detection#section75786272088",
        children: "方舟多线程检测"
      }), "开关，这个开关可以拦截多线程安全问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_value内容产生变化",
      children: "napi_value内容产生变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体描述：在一个程序初始化的时候，保存了env和一个method（napi_value），这个method在刚刚创建的时候有进行check，napi_typeof的结果是napi_function，符合预期。程序运行一段时间后，使用保存的env和method再去调用，发现method check不过了，此时不是一个napi_function了，保存与使用时均处于同一主线程，要如何解决？"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查建议："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确认是否napi_value出了scope还在使用，导致use-after-scope问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可参考文档："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-coding-standard-api#section1219614634615",
            children: "方舟运行时API"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "保存时建议使用napi_ref，而不是直接保存napi_value。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "是否存在获取最新napi_env的方法",
      children: "是否存在获取最新napi_env的方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体描述：Native 层在较深的调用层级中需调用 ArkTS 方法，无法逐层传递 napi_env，直接缓存会导致崩溃。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#00 /system/lib/platformsdk/libark_jsruntime.so(panda::JSValueRef::IsFunction)\n#01 /system/lib/platformsdk/libace_napi.z.so(napi_call_function)\n#02 /data/storage/el1/bundle/libs/arm/libentry.so\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参考方案："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关于保存napi_env："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API没有提供直接获取napi_env的能力，只能通过逐层函数调用传递。一般不推荐保存napi_env，有两个原因："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其一，napi_env退出时候如果没有被使用方感知到，很容易出现use-after-free问题；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其二，napi_env和ArkTS线程是强绑定的，如果napi_env放在其它ArkTS线程使用，就会有多线程安全问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可参考文档："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-73",
            children: "napi_env禁止缓存的原因是什么"
          }), " 。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该问题的关键在于："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果要强行保存env，必须感知env是否退出，可以使用napi_add_env_cleanup_hook的回调进行感知。同时，在开发过程中打开多线程检测开关，避免出现多线程安全问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可参考文档："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ark-runtime-detection#section19357830121120",
            children: "常见多线程安全问题"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于崩溃问题本身，该崩溃可能发生在调用napi_call_function时，入参 func 有问题，即非法入参，开发者可排查napi_value是否被缓存。这种情况可能是napi_value被缓存后，napi_value超出napi_handle_scope作用域导致失效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果有类似逻辑，需使用napi_ref进行存储，napi_ref可以延长生命周期。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可参考文档："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle",
            children: "napi_create_reference、napi_delete_reference"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-coding-standard-api#section1219614634615",
            children: "方舟运行时API"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_add_env_cleanup_hook调用报错该如何处理",
      children: "napi_add_env_cleanup_hook调用报错该如何处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题：napi_add_env_cleanup_hook/napi_remove_env_cleanup_hook调用报错，该如何处理？"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_add_env_cleanup_hook 和 napi_remove_env_cleanup_hook 调用报错，常见原因和特征日志如下，均为接口使用不当导致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在env所在的ArkTS线程外使用上述两个接口，导致多线程安全问题。特征报错日志current napi interface cannot run in multi-thread。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用napi_add_env_cleanup_hook时，重复使用同一个args注册不同的回调函数，导致后续注册失败问题。该接口第三个入参args是作为接口内部map的key值，当重复注册同一个args的回调时，后续注册动作将会失败，仅第一次注册才会成功。注册失败可能导致后续业务功能异常或崩溃。特征报错日志AddCleanupHook Failed。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用napi_remove_env_cleanup_hook时，尝试通过一个不存在（或已被删除）的args删除回调函数，该接口调用失败，出现特征报错日志RemoveCleanupHook Failed。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见错误场景示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void AddEnvCleanupHook(napi_env env)\n{\n    napi_add_env_cleanup_hook(env, [](void* args) -> void {\n        // cleanup function回调\n    }, env); // env是个通用的数据，即使此处没有重复注册，可能会被其它地方所提前注册，导致该处注册失败。\n}\n\nstatic napi_value Test(napi_env env, napi_callback_info info)\n{\n    //第一次注册\n    AddEnvCleanupHook(env);\n    //第二次重复注册\n    AddEnvCleanupHook(env);\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修复建议："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于多线程安全问题，需确保调用接口的线程在env所在的ArkTS线程上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于注册失败的问题，需由使用者明确待注册的函数。需要保证key值（也就是napi_add_env_cleanup_hook的第三个入参）是唯一的即可。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于删除失败的问题，需要使用者确保args已注册过且未被删除。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相关参考资料链接："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-cleanuphook",
        children: "使用Node-API接口注册和使用环境清理钩子"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-coding-standard-api#section1219614634615",
        children: "方舟运行时API"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_open_handle_scope与napi_close_handle_scope进行生命周期相关开发典型错误场景",
      children: "napi_open_handle_scope与napi_close_handle_scope进行生命周期相关开发典型错误场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题：使用napi_open_handle_scope与napi_close_handle_scope接口管理ArkTS对象时出现稳定性问题，该如何处理？"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_open_handle_scope 和 napi_close_handle_scope 调用出现稳定性问题，常见原因如下，均为接口使用不当导致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未配对使用napi_open_handle_scope 和 napi_close_handle_scope，只打开了一个scope而没有关闭，会导致内存泄漏，且可能触发程序崩溃。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未按照与打开scope顺序相反的顺序关闭scope，可能引发踩内存问题。在例如open_scope1，open_scope2，close_scope1，close_scope2这种场景下，close_scope1之后指针返回，极有可能覆写scope2中的内存造成踩内存问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在native方法中创建的scope未在该方法返回之前被关闭，导致函数重入时scope配对混乱，发生稳定性问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见错误场景示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include <hilog/log.h>\n\n// 1. 全局Scope\nstatic napi_handle_scope g_globalScope = nullptr;\n\nstatic napi_value CallFunction(napi_env env, napi_callback_info info) {\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    \n    napi_valuetype type = napi_undefined;\n    if (argv[0] == nullptr || napi_typeof(env, argv[0], &type) != napi_ok || type != napi_function) {\n        OH_LOG_INFO(LOG_APP, \"JS函数参数非法\");\n        napi_value errRet = nullptr;\n        napi_create_int32(env, -1, &errRet);\n        return errRet;\n    }\n\n    if (!g_globalScope) {\n        OH_LOG_INFO(LOG_APP, \"【首次调用】全局Scope为空，执行open\");\n        napi_open_handle_scope(env, &g_globalScope);\n        // 首次调用：执行JS函数\n        napi_value global = nullptr;\n        napi_get_global(env, &global);\n        napi_value result = nullptr;\n        napi_call_function(env, global, argv[0], argc, argv, &result);\n        return result; // 首次调用直接返回，不执行后续close逻辑\n    } else {\n        // 重入调用：直接返回固定值 + 关闭Scope\n        napi_value result = nullptr;\n        napi_create_int32(env, 10, &result);\n        OH_LOG_INFO(LOG_APP, \"【重入调用】全局Scope非空，执行close\");\n        napi_close_handle_scope(env, g_globalScope);\n        g_globalScope = nullptr;\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const callFunction : (func : Function) => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nfunction reenterFunc(count = 1) : void{\n  hilog.info(0x0000, 'testTag', `【JS侧】递归`);\n  if (count <= 0) {\n    return;\n  }\n  testNapi.callFunction(() => reenterFunc(count - 1));\n  hilog.info(0x0000, 'testTag', `【JS侧】重入调用`);\n  return;\n}\n\ntry {\n  testNapi.callFunction(reenterFunc);\n  hilog.info(0x0000, 'testTag', '【执行完成】');\n} catch (error) {\n  hilog.error(0x0000, 'testTag', `调用错误：${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cmake_minimum_required(VERSION 3.5.0)\nproject(Test)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp)\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修复建议："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_open_handle_scope和napi_close_handle_scope必须配对使用，开发者应当自查。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "所有的scope必须按照与打开顺序相反的顺序关闭。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在native方法中创建的所有scope必须在该方法返回之前被关闭。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相关参考资料链接："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle#napi_open_handle_scopenapi_close_handle_scope",
        children: "使用Node-API接口进行生命周期相关开发"
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
624576(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799724-21e352b5904c15787780b9426ee7b54e.png");

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