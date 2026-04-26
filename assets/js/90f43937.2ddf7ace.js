"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["758157"], {
680543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_opengtx_graphics_accelerate_opengtx_md_90f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-rendering-graphics-accelerate-opengtx-graphics-accelerate-opengtx-md-90f.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_opengtx_graphics_accelerate_opengtx_md_90f_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-opengtx/graphics-accelerate-opengtx","title":"OpenGTX功能开发","description":"概述","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-opengtx/graphics-accelerate-opengtx.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-opengtx","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-opengtx/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-opengtx/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"OpenGTX功能开发","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-opengtx","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ABR功能开发","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr/"},"next":{"title":"业务概述","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-opengtx/graphics-accelerate-opengtx.md


const frontMatter = {
	title: 'OpenGTX功能开发',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-opengtx',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'OpenGTX功能开发';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "设置项目配置项",
  "id": "设置项目配置项",
  "level": 3
}, {
  "value": "头文件引用",
  "id": "头文件引用",
  "level": 3
}, {
  "value": "编写CMakeLists.txt",
  "id": "编写cmakeliststxt",
  "level": 3
}, {
  "value": "OpenGTX初始化",
  "id": "opengtx初始化",
  "level": 3
}, {
  "value": "OpenGTX关键信息更新",
  "id": "opengtx关键信息更新",
  "level": 3
}, {
  "value": "销毁OpenGTX实例",
  "id": "销毁opengtx实例",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "opengtx功能开发",
        children: "OpenGTX功能开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenGTX是GPU Turbo X的开放式入口，根据游戏开发者主动提供的游戏过程中的关键信息，使能LTPO（动态帧率/刷新率）等游戏加速方案，助力游戏开发者打造高画质、高流畅、低功耗极致体验。LTPO通过动态感知游戏渲染状态、游戏场景、设备状态等关键信息，动态调整游戏的帧率/刷新率以及设备的SOC/DDR频率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(344252)/* ["default"] */.A) + "",
        width: "641",
        height: "501"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LTPO的主要业务流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(263537)/* ["default"] */.A) + "",
        width: "965",
        height: "955"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户进入游戏。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_createcontext",
          children: "HMS_OpenGTX_CreateContext"
        }), "接口创建OpenGTX上下文实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_setconfiguration",
          children: "HMS_OpenGTX_SetConfiguration"
        }), "接口初始化配置实例属性，包含LTPO模式、目标帧率、包名、游戏类型、分辨率、游戏关键线程等属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_activate",
          children: "HMS_OpenGTX_Activate"
        }), "接口激活OpenGTX上下文实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏切换不同游戏场景后调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchgamesceneinfo",
          children: "HMS_OpenGTX_DispatchGameSceneInfo"
        }), "接口发送游戏场景信息，包含场景类型、指定帧率、调度帧率范围、当前分辨率等信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用在每帧渲染前调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchframerenderinfo",
          children: "HMS_OpenGTX_DispatchFrameRenderInfo"
        }), "接口发送游戏帧渲染信息，包含游戏主相机的位置和欧拉角。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用在每帧渲染前如遇到网络时延档位变化，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchnetworkinfo",
          children: "HMS_OpenGTX_DispatchNetworkInfo"
        }), "接口发送游戏网络信息，包含服务器IP地址、网络时延等信息。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏应用正常绘制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一帧送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每帧结束，将帧尾决策帧率、决策设备频率通知到设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户退出游戏。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_destroycontext",
          children: "HMS_OpenGTX_DestroyContext"
        }), "接口销毁OpenGTX上下文实例并释放内存资源。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节介绍OpenGTX的开发接入，从流程上分别阐述每个步骤的实现和调用。详细代码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/open-gtx-samplecode-clientdemo-cpp",
        children: "OpenGTX Sample"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置项目配置项",
      children: "设置项目配置项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“src/main/module.json5”的module层级中添加以下配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"metadata\": [\n  {\n    \"name\": \"GraphicsAccelerateKit_LTPO\",\n    \"value\": \"true\"\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "头文件引用",
      children: "头文件引用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引用Graphics Accelerate Kit OpenGTX头文件：opengtx_base.h。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 引用OpenGTX头文件 opengtx_base.h\n#include <graphics_game_sdk/opengtx_base.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编写cmakeliststxt",
      children: "编写CMakeLists.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "find_library(\n    # Sets the name of the path variable.\n    opengtx-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    libopengtx.so\n)\nfind_library(\n    # Sets the name of the path variable.\n    GLES-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    GLESv3\n)\nfind_library(\n    # Sets the name of the path variable.\n    hilog-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    hilog_ndk.z\n)\n\ntarget_link_libraries(entry PUBLIC\n    ${opengtx-lib} ${GLES-lib} ${hilog-lib}\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx初始化",
      children: "OpenGTX初始化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在surface创建后，会触发其事件回调函数Core::OnSurfaceCreated()，在该函数中完成OpenGTX上下文实例创建、OpenGTX属性配置和功能激活。其中OpenGTX上下文实例负责管理OpenGTX整个生命周期。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_createcontext",
            children: "HMS_OpenGTX_CreateContext"
          }), "接口创建OpenGTX上下文实例。如果返回nullptr，则说明OpenGTX上下文实例创建失败，或当前硬件设备不支持开启OpenGTX。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建OpenGTX上下文实例\nOpenGTX_Context *context_ = HMS_OpenGTX_CreateContext(nullptr);\nif (context_ == nullptr) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_setconfiguration",
            children: "HMS_OpenGTX_SetConfiguration"
          }), "接口属性配置，包含LTPO模式、目标帧率、包名、游戏类型、分辨率、游戏关键线程等属性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化OpenGTX接口调用错误码\nOpenGTX_ErrorCode errorCode = OPENGTX_SUCCESS;\n// OpenGTX属性配置结构体\nOpenGTX_ConfigDescription config;\n// LTPO调度模式\nconfig.mode = ADAPTIVE_MODE;\n// 游戏设置目标帧率\nconfig.targetFPS = 120;\n// 游戏包名\nconfig.packageName = (char*)\"OpenGTX\";\n// 游戏版本\nconfig.appVersion = (char*)\"1.1.0\";\n// 引擎类型\nconfig.engineType = UNREAL;\n// 引擎版本\nconfig.engineVersion = (char*)\"4.26.2\";\n// 游戏类别\nconfig.gameType = RPG;\n// 游戏最高画质等级\nconfig.pictureQualityMaxLevel = HD;\n// 游戏设置最大分辨率\nconfig.resolutionMaxValue = OpenGTX_ResolutionValue { 1280, 720};\n// 游戏逻辑线程\nconfig.gameMainThreadId = 11;\n// 游戏渲染线程\nconfig.gameRenderThreadId = 11;\n// 游戏运行其他关键线程\nconfig.gameKeyThreadIds[0] = 0;\nconfig.gameKeyThreadIds[1] = 0;\nconfig.gameKeyThreadIds[2] = 0;\nconfig.gameKeyThreadIds[3] = 0;\nconfig.gameKeyThreadIds[4] = 0;\n// 游戏图形API是否为Vulkan\nconfig.vulkanSupport = false;\n// 初始化OpenGTX实例，配置OpenGTX属性\nerrorCode = HMS_OpenGTX_SetConfiguration(context_, &config);\nif (errorCode != OPENGTX_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_activate",
            children: "HMS_OpenGTX_Activate"
          }), "接口激活OpenGTX上下文实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 激活OpenGTX上下文实例\nerrorCode = HMS_OpenGTX_Activate(context_);\nif (errorCode != OPENGTX_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_deactivate",
            children: "HMS_OpenGTX_Deactivate"
          }), "接口去激活OpenGTX上下文实例。（在需要关闭OpenGTX功能时调用此接口。去激活后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchgamesceneinfo",
            children: "HMS_OpenGTX_DispatchGameSceneInfo"
          }), "等接口将不会生效）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 去激活OpenGTX上下文实例\nerrorCode = HMS_OpenGTX_Deactivate(context_);\nif (errorCode != OPENGTX_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx关键信息更新",
      children: "OpenGTX关键信息更新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏切换不同游戏场景后调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchgamesceneinfo",
            children: "HMS_OpenGTX_DispatchGameSceneInfo"
          }), "接口发送游戏场景信息，包含场景类型、指定帧率、调度帧率范围、当前分辨率等信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// OpenGTX游戏场景信息结构体\nOpenGTX_GameSceneInfo gameSceneInfo;\n// 游戏场景类型ID\ngameSceneInfo.sceneID = OTHERS_SCENE;\n// 游戏场景描述\ngameSceneInfo.description = (char*)\"其他场景\";\n// 游戏场景推荐帧率\ngameSceneInfo.recommendFPS = 60;\n// 游戏场景最小帧率\ngameSceneInfo.minFPS = 30;\n// 游戏场景最大帧率\ngameSceneInfo.maxFPS = 90;\n// 屏幕分辨率 高度\ngameSceneInfo.resolutionCurValue.height = 360;\n// 屏幕分辨率 宽度\ngameSceneInfo.resolutionCurValue.width = 1920;\n// OpenGTX接收游戏场景信息\nerrorCode = HMS_OpenGTX_DispatchGameSceneInfo(context_, &gameSceneInfo);\nif (errorCode != OPENGTX_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["每帧渲染前调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchframerenderinfo",
            children: "HMS_OpenGTX_DispatchFrameRenderInfo"
          }), "接口发送游戏帧渲染信息，包含游戏主相机的位置和欧拉角。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// OpenGTX游戏渲染信息结构体\nOpenGTX_FrameRenderInfo frameRenderInfo;\n// 主相机位置\nframeRenderInfo.mainCameraPosition = { 0.0f, 0.0f, 0.0f };\n// 主相机欧拉角\nframeRenderInfo.mainCameraRotate = { 0.0f, 0.0f, 0.0f };\n// OpenGTX接收游戏渲染信息\nerrorCode = HMS_OpenGTX_DispatchFrameRenderInfo(context_, &frameRenderInfo);\nif (errorCode != OPENGTX_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["每帧渲染前如遇到网络时延档位变化，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchnetworkinfo",
            children: "HMS_OpenGTX_DispatchNetworkInfo"
          }), "接口发送游戏网络信息。包含服务器IP地址、网络时延等信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// OpenGTX游戏网络信息结构体\nOpenGTX_NetworkInfo networkInfo;\n// OpenGTX游戏网络时延结构体\nOpenGTX_NetworkLatency networkLatency;\n// 网络总时延\nnetworkLatency.total = 50;\n// 网络上行时延\nnetworkLatency.up = 10;\n// 网络下行时延\nnetworkLatency.down = 40;\n// 游戏网络时延\nnetworkInfo.networkLatency = networkLatency;\n// 游戏服务器IP地址\nnetworkInfo.networkServerIP = (char*)\"10.10.10.10\";\n// OpenGTX接收游戏网络信息\nerrorCode = HMS_OpenGTX_DispatchNetworkInfo(context_, &networkInfo);\nif (errorCode != OPENGTX_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "销毁opengtx实例",
      children: "销毁OpenGTX实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在surface销毁时，会触发其事件回调函数Core::OnSurfaceDestroyed()，在该函数中完成OpenGTX实例的销毁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_destroycontext",
        children: "HMS_OpenGTX_DestroyContext"
      }), "接口销毁OpenGTX实例，释放内存资源。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 销毁OpenGTX上下文实例并释放内存资源\nerrorCode = HMS_OpenGTX_DestroyContext(&context_);\nif (errorCode != OPENGTX_SUCCESS) {\n    return false;\n}\n"
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
263537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958714-fd3827a3471a06811b3b72850b8126b8.png");

},
344252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438759-f84d1919d0889ab4bb82d19c1a7de2b5.png");

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