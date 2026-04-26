"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["643070"], {
116171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_displaysync_displaysync_xcomponent_displaysync_xcomponent_md_5dd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-displaysync-displaysync-xcomponent-displaysync-xcomponent-md-5dd.json
var site_docs_arkgraphics_2_d_displaysync_displaysync_xcomponent_displaysync_xcomponent_md_5dd_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/displaysync/displaysync-xcomponent/displaysync-xcomponent","title":"请求自绘制内容绘制帧率","description":"对于基于XComponent进行Native开发的业务，可以请求独立的绘制帧率进行内容开发，如游戏、自绘制UI框架对接等场景。","source":"@site/docs/arkgraphics-2d/displaysync/displaysync-xcomponent/displaysync-xcomponent.md","sourceDirName":"arkgraphics-2d/displaysync/displaysync-xcomponent","slug":"/arkgraphics-2d/displaysync/displaysync-xcomponent/","permalink":"/harmonyos-docs-site/arkgraphics-2d/displaysync/displaysync-xcomponent/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"请求自绘制内容绘制帧率","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaysync-xcomponent","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"请求UI绘制帧率","permalink":"/harmonyos-docs-site/arkgraphics-2d/displaysync/displaysync-ui/"},"next":{"title":"NativeDisplaySoloist开发指导 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/displaysync/displaysoloist-native-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/displaysync/displaysync-xcomponent/displaysync-xcomponent.md


const frontMatter = {
	title: '请求自绘制内容绘制帧率',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaysync-xcomponent',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '请求自绘制内容绘制帧率';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "请求自绘制内容绘制帧率",
        children: "请求自绘制内容绘制帧率"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
        children: "XComponent"
      }), "进行Native开发的业务，可以请求独立的绘制帧率进行内容开发，如游戏、自绘制UI框架对接等场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_SetExpectedFrameRateRange (OH_NativeXComponent *component, OH_NativeXComponent_ExpectedRateRange *range)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置帧期望的帧率范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_RegisterOnFrameCallback (OH_NativeXComponent *component, OH_NativeXComponent_OnFrameCallback *callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置每帧回调函数，同时启动每帧回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_UnregisterOnFrameCallback (OH_NativeXComponent *component)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册的每帧回调函数，同时停止调用回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent",
        children: "OH_NativeXComponent Native XComponent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756393)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本范例是通过Drawing在Native侧实现图形的绘制，并将其呈现在NativeWindow上，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview",
        children: "使用Drawing实现图形绘制与显示"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加开发依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt中添加以下lib。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libace_napi.z.so libnative_drawing.so libnative_window.so libace_ndk.z.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <ace/xcomponent/native_interface_xcomponent.h>\n#include <arpa/nameser.h>\n#include <bits/alltypes.h>\n#include <native_window/external_window.h>\n#include <native_drawing/drawing_bitmap.h>\n#include <native_drawing/drawing_color.h>\n#include <native_drawing/drawing_canvas.h>\n#include <native_drawing/drawing_pen.h>\n#include <native_drawing/drawing_brush.h>\n#include <native_drawing/drawing_path.h>\n#include <cstdint>\n#include <map>\n#include <sys/mman.h>\n#include <string>\n#include \"napi/native_api.h\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <native_drawing/drawing_text_typography.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义ArkTS接口文件XComponentContext.ts，用来对接Native层。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default interface XComponentContext {\n  register(): void;\n\n  unregister(): void;\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义演示页面，包含两个XComponent组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import XComponentContext from '../interface/XComponentContext';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  private xComponentContext1: XComponentContext | undefined = undefined;\n  private xComponentContext2: XComponentContext | undefined = undefined;\n\n  build() {\n    Column() {\n      Row() {\n        // ...\n\n        XComponent({\n          id: 'xcomponentId_30',\n          type: XComponentType.SURFACE,\n          libraryname: 'entry'\n        })\n          .onLoad((xComponentContext) => {\n            this.xComponentContext1 = xComponentContext as XComponentContext;\n          }).width('640px')\n          // ...\n      }.height('40%')\n\n      Row() {\n        // ...\n\n        XComponent({\n          id: 'xcomponentId_120',\n          type: XComponentType.SURFACE,\n          libraryname: 'entry'\n        })\n          .onLoad((xComponentContext) => {\n            this.xComponentContext2 = xComponentContext as XComponentContext;\n          }).width('640px')\n          // ...\n      }.height('40%')\n\n      // ...\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native层配置帧率和注册回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void TestCallback(OH_NativeXComponent *component, uint64_t timestamp, uint64_t targetTimestamp)\n{\n    // ...\n    \n    int32_t xSize = OH_NativeXComponent_GetXComponentSize(component, nativeWindow, &width, &height);\n    if ((xSize == OH_NATIVEXCOMPONENT_RESULT_SUCCESS) && (render != nullptr)) {\n        render->Prepare();\n        render->Create();\n        if (id == \"xcomponentId_30\") {\n            int offset = 16;\n            render->ConstructPath(offset, offset, render->defaultOffsetY);\n        }\n        if (id == \"xcomponentId_120\") {\n            int offset = 4;\n            render->ConstructPath(offset, offset, render->defaultOffsetY);\n        }\n        // ...\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(875051)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Callback回调函数运行于UI主线程，故涉及UI线程的耗时操作不应运行于回调函数中，以免影响性能。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "实例在调用OH_NativeXComponent_RegisterOnFrameCallback后，在不需要进行帧率控制时，应进行OH_NativeXComponent_UnregisterOnFrameCallback操作，避免内存泄漏及性能功耗影响。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "API version 18之前，应用调用OH_NativeXComponent_RegisterOnFrameCallback接口设置回调函数，如果没有取消注册，在XComponent实例存在期间，能一直收到期望回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "从API version 18开始，应用调用OH_NativeXComponent_RegisterOnFrameCallback接口设置回调函数，如果没有取消注册，只在XComponent上树期间，能收到期望回调。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void SampleXComponent::RegisterOnFrameCallback(OH_NativeXComponent *nativeXComponent)\n{\n    // ...\n    OH_NativeXComponent_RegisterOnFrameCallback(nativeXComponent, TestCallback);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value SampleXComponent::NapiRegister(napi_env env, napi_callback_info info)\n{\n    // ...\n        render->RegisterOnFrameCallback(nativeXComponent);\n        // ...\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value SampleXComponent::NapiUnregister(napi_env env, napi_callback_info info)\n{\n    // ...\n        OH_NativeXComponent_UnregisterOnFrameCallback(nativeXComponent);\n        // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TS层注册和取消注册每帧回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Row() {\n  Button('Start')\n    .id('Start')\n    .fontSize(14)\n    .fontWeight(500)\n    .margin({ bottom: 20, right: 6, left: 6 })\n    .onClick(() => {\n      if (this.xComponentContext1) {\n        this.xComponentContext1.register();\n      }\n      if (this.xComponentContext2) {\n        this.xComponentContext2.register();\n      }\n    })\n    .width('30%')\n    .height(40)\n    .shadow(ShadowStyle.OUTER_DEFAULT_LG)\n\n  Button('Stop')\n    .id('Stop')\n    .fontSize(14)\n    .fontWeight(500)\n    .margin({ bottom: 20, left: 6 })\n    .onClick(() => {\n      if (this.xComponentContext1) {\n        this.xComponentContext1.unregister();\n      }\n      if (this.xComponentContext2) {\n        this.xComponentContext2.unregister();\n      }\n    })\n    .width('30%')\n    .height(40)\n    .shadow(ShadowStyle.OUTER_DEFAULT_LG)\n\n  // ...\n}\n"
          })
        }), "\n"]
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
756393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
875051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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