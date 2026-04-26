"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["789474"], {
849556(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_stability_arkts_stability_crash_issues_arkts_stability_crash_issues_md_d27_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-stability-arkts-stability-crash-issues-arkts-stability-crash-issues-md-d27.json
var site_docs_arkui_ui_debug_optimize_ui_stability_arkts_stability_crash_issues_arkts_stability_crash_issues_md_d27_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues/arkts-stability-crash-issues","title":"UI相关应用崩溃常见问题","description":"本文档收集整理了一些常见的会导致应用崩溃的ArkUI API错误用法，旨在帮助开发者了解这些会导致应用崩溃问题的错误用法，从而避免在实际应用开发过程中犯类似错误。","source":"@site/docs/arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues/arkts-stability-crash-issues.md","sourceDirName":"arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues","slug":"/arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"UI相关应用崩溃常见问题","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-stability-crash-issues","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI稳定性故障分析概述","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-stability/arkts-stability-guide/"},"next":{"title":"UI相关应用无响应常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-stability/arkts-stability-freeze-issues/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues/arkts-stability-crash-issues.md


const frontMatter = {
	title: 'UI相关应用崩溃常见问题',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-stability-crash-issues',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI相关应用崩溃常见问题';

const assets = {

};



const toc = [{
  "value": "OH_NativeXComponent注册的回调函数对象被提前释放",
  "id": "oh_nativexcomponent注册的回调函数对象被提前释放",
  "level": 2
}, {
  "value": "OH_NativeXComponent对象被提前释放",
  "id": "oh_nativexcomponent对象被提前释放",
  "level": 2
}, {
  "value": "@Consume缺少匹配的@Provide",
  "id": "consume缺少匹配的provide",
  "level": 2
}, {
  "value": "@Link数据源类型错误",
  "id": "link数据源类型错误",
  "level": 2
}, {
  "value": "@Provide缺少重写声明",
  "id": "provide缺少重写声明",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ui相关应用崩溃常见问题",
        children: "UI相关应用崩溃常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档收集整理了一些常见的会导致应用崩溃的ArkUI API错误用法，旨在帮助开发者了解这些会导致应用崩溃问题的错误用法，从而避免在实际应用开发过程中犯类似错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oh_nativexcomponent注册的回调函数对象被提前释放",
      children: "OH_NativeXComponent注册的回调函数对象被提前释放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用闪退并生成如下cppcrash崩溃栈："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Reason:Signal:SIGSEGV(SEGV_ACCERR)@0x0000005c5f09a280\n\n#00 pc 0000000000ac9280 [anon:native_heap:jemalloc]\n#01 pc 0000000002615120 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::NG::XComponentPattern::OnSurfaceDestroyed()+468)\n#02 pc 0000000002614b18 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::NG::XComponentPattern::OnDetachFromFrameNode(OHOS::Ace::NG::FrameNode*)+88)\n#03 pc 0000000000875294 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::NG::FrameNode::~FrameNode()+264)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中libace_compatible.z.so栈的最后一个调用帧为XComponentPattern类的OnSurfaceCreated、OnSurfaceChanged、OnSurfaceDestroyed、DispatchTouchEvent方法之一，且#00帧的pc是一个异常地址，通常其最后几位与Reason后面的地址内容一致，这表明某个函数指针存在问题，导致执行时跳转到异常地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_nativexcomponent_registercallback",
        children: "OH_NativeXComponent_RegisterCallback"
      }), "接口注册的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback",
        children: "OH_NativeXComponent_Callback"
      }), "回调函数对象以裸指针形式保存在XComponentPattern对象中。这些回调的生命周期由应用控制。如果应用提前销毁了OH_NativeXComponent_Callback回调函数对象，将导致裸指针指向非法内存，引发Use-After-Free问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(86998)/* ["default"] */.A) + "",
        width: "983",
        height: "562"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSurfaceDestroy回调是XComponentPattern销毁时调用的最后一个回调，该回调执行完表示组件已经销毁。因此，应用必须确保在onSurfaceDestroy回调执行前，这些回调是有效的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考链接"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关接口详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent",
        children: "OH_NativeXComponent Native XComponent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oh_nativexcomponent对象被提前释放",
      children: "OH_NativeXComponent对象被提前释放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用闪退并生成如下cppcrash崩溃栈："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#00 pc 00000000000c8b3c /system/lib64/libc++.so(std::__h::basic_string<char, std::__h::char_traits<char>, std::__h::allocator<char>>::basic_string(std::__h::basic_string<char, std::__h::char_traits<char>, std::__h::allocator<char>> const&)+16)\n#01 pc 0000000000034f64 /system/lib64/libace_ndk.z.so(OH_NativeXComponent::GetXComponentId(char*, unsigned long*)+76)\n#02 pc 00000000000867c0 /data/storage/el1/bundle/libs/arm64/librenderer.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中栈顶附近内容为libace_ndk.z.so(OH_NativeXComponent::XXX...)，且下一帧是应用so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeXComponent使用裸指针管理。应用侧持有其裸指针。如果在其生命周期结束后仍然调用相关接口，会导致Use-After-Free问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统通过onSurfaceDestroy回调通知应用OH_NativeXComponent已销毁。应用必须确保在onSurfaceDestroy回调执行完毕后不再调用OH_NativeXComponent相关接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考链接"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关接口详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent",
        children: "OH_NativeXComponent Native XComponent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consume缺少匹配的provide",
      children: "@Consume缺少匹配的@Provide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用闪退并生成如下jscrash崩溃栈："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(35585)/* ["default"] */.A) + "",
        width: "765",
        height: "344"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报错发生在@Consume初始化阶段，原因是@Consume初始化时仅通过key匹配对应的@Provide变量。如果未找到对应的@Provide，就会出现报错（missing @Provide）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284236)/* ["default"] */.A) + "",
        width: "985",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查组件树时，确保@Provide装饰的变量在祖先组件中定义，这些变量被视为提供给后代的状态变量。@Consume装饰的变量在后代组件中使用，用于绑定祖先组件提供的变量。如果@Consume绑定的key在祖先组件中未定义，会导致报错。请从用法角度进行排查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考链接"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
        children: "跨组件层级双向同步"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "link数据源类型错误",
      children: "@Link数据源类型错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用闪退并生成如下jscrash崩溃栈："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(990543)/* ["default"] */.A) + "",
        width: "820",
        height: "392"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，添加对@Link数据源错误的校验，运行时错误变为编译期报错："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(611722)/* ["default"] */.A) + "",
        width: "1275",
        height: "808"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报错发生在@Link初始化阶段，原因是@Link初始化时会注册到父组件并调用父组件的addSubscriber方法。如果此时数据源的类型与@Link不完全一致，或者使用常量初始化@Link，会导致该方法无法调用，从而引发“is not callable”错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(73779)/* ["default"] */.A) + "",
        width: "1258",
        height: "368"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查@Link的数据源，确认其是否为状态变量，并确保数据源的类型与@Link的类型一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考链接"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
        children: "父子双向同步"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "provide缺少重写声明",
      children: "@Provide缺少重写声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用闪退并生成如下jscrash崩溃栈："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(757903)/* ["default"] */.A) + "",
        width: "1467",
        height: "324"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报错发生在@Provide初始化阶段，原因是@Provide重写需要声明allowOverride。声明后，别名和属性名都可以被覆盖。如果未声明且存在重复的别名或属性名，将导致错误（duplicate @Provide property with name xxxxx）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(657632)/* ["default"] */.A) + "",
        width: "1828",
        height: "151"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要检查@Provide是否使用了allowOverride声明。如果没有使用allowOverride，则这样使用是不合规的。只有在声明了allowOverride之后，才会允许重写，并且子组件的@Consume会根据别名或属性名找到并使用距离它最近的父节点上的@Provide值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考链接"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
        children: "跨组件层级双向同步"
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
86998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958152-89899cf89eaa2d86dee46b8737462df2.png");

},
35585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478153-4232c4eb68afed7d7d2f748dffb2d1cc.png");

},
284236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798504-175f6dac4a4c318cb474fa8c79c14453.png");

},
990543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438199-ae1bf769009738b4688cd47a536da72e.png");

},
73779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478155-b51f48d9a6cc6fc8568cccfe7dfa608b.png");

},
757903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798506-3d0cf4ffb32d645cdad8cecd8247dc2b.png");

},
611722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958154-d430b772e85b94e5d847ff16566a038e.png");

},
657632(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438201-651f98ed1c32b8887aa4a9aa313df722.png");

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