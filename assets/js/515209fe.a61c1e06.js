"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["910895"], {
432430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_image_editing_c_image_effect_guidelines_image_effect_guidelines_md_515_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-image-editing-c-image-effect-guidelines-image-effect-guidelines-md-515.json
var site_docs_image_kit_image_native_image_editing_c_image_effect_guidelines_image_effect_guidelines_md_515_namespaceObject = JSON.parse('{"id":"image-kit/image-native/image-editing-c/image-effect-guidelines/image-effect-guidelines","title":"使用ImageEffect编辑图片","description":"场景介绍","source":"@site/docs/image-kit/image-native/image-editing-c/image-effect-guidelines/image-effect-guidelines.md","sourceDirName":"image-kit/image-native/image-editing-c/image-effect-guidelines","slug":"/image-kit/image-native/image-editing-c/image-effect-guidelines/","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-effect-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用ImageEffect编辑图片","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-effect-guidelines","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Image_NativeModule完成位图操作","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/pixelmap-c/"},"next":{"title":"图片缩放","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-processing/image-scaling/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native/image-editing-c/image-effect-guidelines/image-effect-guidelines.md


const frontMatter = {
	title: '使用ImageEffect编辑图片',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-effect-guidelines',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用ImageEffect编辑图片';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "通过ImageEffect提供的接口生效图像效果",
  "id": "通过imageeffect提供的接口生效图像效果",
  "level": 3
}, {
  "value": "自定义滤镜",
  "id": "自定义滤镜",
  "level": 3
}, {
  "value": "EffectFilter快速实现单个滤镜的处理效果",
  "id": "effectfilter快速实现单个滤镜的处理效果",
  "level": 3
}, {
  "value": "查询能力",
  "id": "查询能力",
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
    ol: "ol",
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
        id: "使用imageeffect编辑图片",
        children: "使用ImageEffect编辑图片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ImageEffect提供了一系列接口用于图像的编辑。开发者可以通过ImageEffect接口处理不同图像输入类型Pixelmap、NativeWindow、NativeBuffer或Uri，获得滤镜处理效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对ImageEffect，常见的开发场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过ImageEffect提供的Native API接口添加滤镜或滤镜链，设置输入图像，最终生效滤镜效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过注册自定义滤镜，实现开发者的定制化滤镜效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过EffectFilter提供的Native API接口快速实现单个滤镜的处理效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-imageeffect/capi-imageeffect",
        children: "ImageEffect"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC\n    libace_ndk.z.so\n    libimage_effect.so\n    libpixelmap.so\n    libnative_window.so\n    libnative_buffer.so\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据处理的图像类型添加对应动态链接库：Pixelmap(libpixelmap.so)、NativeWindow(libnative_window.so)、NativeBuffer(libnative_buffer.so)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n#include <multimedia/image_effect/image_effect.h>\n#include <multimedia/image_effect/image_effect_filter.h>\n#include <multimedia/image_effect/image_effect_errors.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过imageeffect提供的接口生效图像效果",
      children: "通过ImageEffect提供的接口生效图像效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ImageEffect实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建imageEffect实例，“ImageEdit”是imageEffect实例别名。\nOH_ImageEffect *imageEffect = OH_ImageEffect_Create(\"ImageEdit\");\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加EffectFilter滤镜。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 添加滤镜，获取OH_EffectFilter实例。多次调用该接口可以添加多个滤镜，组成滤镜链。\nOH_EffectFilter *filter = OH_ImageEffect_AddFilter(imageEffect, OH_EFFECT_BRIGHTNESS_FILTER);\nif (filter == nullptr) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_AddFilter fail!\");\n    return;\n}\n// 设置滤镜参数, 例如：滤镜强度设置为50。\nImageEffect_Any value = { .dataType = ImageEffect_DataType::EFFECT_DATA_TYPE_FLOAT, .dataValue.floatValue = 50.f };\nImageEffect_ErrorCode errorCode = OH_EffectFilter_SetValue(filter, OH_EFFECT_FILTER_INTENSITY_KEY, &value);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置处理数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景一：设置OH_PixelmapNative输入类型。"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OH_PixelmapNative的具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/image-kit/image-native-js-objects/image-pixelmap-operation-native",
            children: "Pixelmap开发指导"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置输入的Pixelmap。\nerrorCode = OH_ImageEffect_SetInputPixelmap(imageEffect, inputPixelmap);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_SetInputPixelmap fail!\");\n    return;\n}\n\n// 设置输出的Pixelmap（可选），不调用该接口时会在输入Pixelmap上直接生效滤镜效果。\nerrorCode = OH_ImageEffect_SetOutputPixelmap(imageEffect, outputPixelmap);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_SetOutputPixelmap fail!\");\n    return;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景二：设置OH_NativeBuffer输入类型。"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OH_NativeBuffer的具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/native-surface/native-buffer-guidelines",
            children: "NativeBuffer开发指导"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置输入的NativeBuffer。\nerrorCode = OH_ImageEffect_SetInputNativeBuffer(imageEffect, inputNativeBuffer);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_SetInputNativeBuffer fail!\");\n    return;\n}\n\n// 设置输出的NativeBuffer（可选），不调用该接口时会在输入NativeBuffer上直接生效滤镜效果。\nerrorCode = OH_ImageEffect_SetOutputNativeBuffer(imageEffect, outputNativeBuffer);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_SetOutputNativeBuffer fail!\");\n    return;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景三：设置URI输入类型。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置输入的URI。\nerrorCode = OH_ImageEffect_SetInputUri(imageEffect, inputUri);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_SetInputUri fail!\");\n    return;\n}\n// 设置输出的URI（可选），不调用该接口时会在输入URI上直接生效滤镜效果。\nerrorCode = OH_ImageEffect_SetOutputUri(imageEffect, outputUri);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_SetOutputUri fail!\");\n    return;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景四：设置纹理输入类型。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "纹理输入场景是使用硬件GPU渲染的高性能场景，此场景下，应用需要提供合法的OpenGL上下文环境，并在正确的环境下，设置参数以及进行渲染操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置输入的纹理ID。\nerrorCode = OH_ImageEffect_SetInputTextureId(imageEffect, inputTex, ColorSpaceName::SRGB);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_SetInputTextureId fail!\");\n    return;\n}\n\n// 设置输出的纹理ID, 注意不能与输入是同一块纹理，否则可能产生渲染异常。\nerrorCode = OH_ImageEffect_SetOutputTextureId(imageEffect, outputTex);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_SetOutputTextureId fail!\");\n    return;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景五：设置OHNativeWindow输入类型。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以相机预览场景为例来说明OHNativeWindow输入场景。XComponent组件为相机预览流提供的SurfaceId，可在native c++层将SurfaceId转换成OHNativeWindow，下面提供一份代码示例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["XComponent模块的具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
            children: "XComponent组件参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["NativeWindow模块的具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativewindow/capi-nativewindow",
            children: "OHNativeWindow"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Camera的具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/native-camera-preview",
            children: "Camera预览参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 在xxx.ets中添加一个XComponent组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XComponent({\n   id: 'xcomponentId',\n   type: 'surface',\n   controller: this.mXComponentController,\n   libraryname: 'entry'\n})\n.onLoad(() => {\n   // 获取XComponent的SurfaceId。\n   this.mSurfaceId = this.mXComponentController.getXComponentSurfaceId()\n\n   // 调用native接口获取输入SurfaceId。\n   this.mSurfaceId = imageEffect.getSurfaceId(this.mSurfaceId)\n\n   // 调用相机接口启动预览，将获取到的输入SurfaceId传递给相机框架。\n   // ...\n})\n.width('100%')\n.height('100%')\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) imageEffect.getSurfaceId的native c++层具体实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 根据SurfaceId创建NativeWindow，注意创建出来的NativeWindow在使用结束后需要主动调用OH_NativeWindow_DestroyNativeWindow进行释放。\nuint64_t outputSurfaceId;\nstd::istrstream iss(outputSurfaceIdStr);\nissue >> outputSurfaceId;\nOHNativeWindow *outputNativeWindow = nullptr;\nint32_t res = OH_NativeWindow_CreateNativeWindowFromSurfaceId(outputSurfaceId, &outputNativeWindow);\nif (res != 0) {\n    OH_LOG_ERROR(LOG_APP, \"OH_NativeWindow_CreateNativeWindowFromSurfaceId fail!\");\n    return;\n}\n\n// 设置输出显示的Surface。\nImageEffect_ErrorCode errorCode = OH_ImageEffect_SetOutputSurface(imageEffect, outputNativeWindow);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_SetOutputSurface fail!\");\n    return;\n}\n// 获取输入的Surface。注意获取的inputNativeWindow在使用结束后需要主动调用OH_NativeWindow_DestroyNativeWindow进行释放。\nOHNativeWindow *inputNativeWindow = nullptr;\nerrorCode = OH_ImageEffect_GetInputSurface(imageEffect, &inputNativeWindow);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_GetInputSurface fail!\");\n    return;\n}\n\n// 从获取到输入的NativeWindow中获取SurfaceId。\nuint64_t inputSurfaceId = 0;\nres = OH_NativeWindow_GetSurfaceId(inputNativeWindow, &inputSurfaceId);\nif (res != 0) {\n    OH_LOG_ERROR(LOG_APP, \"OH_NativeWindow_GetSurfaceId fail!\");\n    return;\n}\n\n// 将SurfaceId转成字符串进行返回。\nstd::string inputSurfaceIdStr = std::to_string(inputSurfaceId);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动效果器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 执行生效滤镜效果。\nerrorCode = OH_ImageEffect_Start(imageEffect);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_Start fail!\");\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止生效效果（可选，仅在输入Surface场景下才有效）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 停止生效滤镜效果。\nerrorCode = OH_ImageEffect_Stop(imageEffect);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_Stop fail!\");\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "序列化效果器（可选）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "char *info = nullptr;\nerrorCode = OH_ImageEffect_Save(imageEffect, &info);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_Save fail!\");\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁效果器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放imageEffect实例资源。\nerrorCode = OH_ImageEffect_Release(imageEffect);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_ImageEffect_Release fail!\");\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义滤镜",
      children: "自定义滤镜"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤描述了如何实现并注册自定义滤镜接口："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义 ImageEffect_FilterDelegate。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 图像信息结构体。\nstruct EffectBufferInfo {\n    void *addr = nullptr;\n    int32_t width = 0;\n    int32_t height = 0;\n    int32_t rowSize = 0;\n    ImageEffect_Format format = ImageEffect_Format::EFFECT_PIXEL_FORMAT_UNKNOWN;\n};\n\n// 自定义滤镜具体实现。\nImageEffect_FilterDelegate filterDelegate = {\n    .setValue = [](OH_EffectFilter *filter, const char *key, const ImageEffect_Any *value) {\n        // 参数校验，校验成功时返回true，否则返回false。\n        // ...\n        return true;\n    },\n    .render = [](OH_EffectFilter *filter, OH_EffectBufferInfo *info, OH_EffectFilterDelegate_PushData pushData) {\n        return Render(filter, info, pushData);\n    },\n    .save = [](OH_EffectFilter *filter, char **info) {\n        // 获取自定义所设置的滤镜参数，其中\"Brightness\"为自定义滤镜的Key，由开发者自己任意指定。\n        ImageEffect_Any value;\n        ImageEffect_ErrorCode errorCode = OH_EffectFilter_GetValue(filter, \"Brightness\", &value);\n        if (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_EffectFilter_GetValue fail!\");\n        return false;\n        }\n         \n        // 生成键值对信息。\n        json values;\n        values[\"Brightness\"] = value.dataValue.floatValue;\n        json root;\n        root[\"name\"] = \"CustomBrightness\";\n        root[\"values\"] = values;\n\n        // 将json对象转成字符串infoStr。\n        // ...\n\n        // 对*info赋值序列化字符串地址。\n        *info = infoStr;\n        return true;\n    },\n    .restore = [](const char *info) {\n        // 创建OH_EffectFilter实例，其中\"CustomBrightness\"为自定义滤镜的滤镜名。\n        OH_EffectFilter *filter = OH_EffectFilter_Create(\"CustomBrightness\");\n        // 解析json字符串info获取key和value。\n        // ...\n\n        // 设置滤镜参数, value为info中按json解析出来的参数。\n        ImageEffect_ErrorCode errorCode = OH_EffectFilter_SetValue(filter, \"Brightness\", &value);\n\n        // ...\n        return filter;\n    }\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中Render接口的实现分两种场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景一：自定义算法可以直接修改info中的像素数据（比如：亮度调节滤镜）。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool Render(OH_EffectFilter *filter, OH_EffectBufferInfo *info, OH_EffectFilterDelegate_PushData pushData)\n{\n    // 获取图像信息具体参数。\n    EffectBufferInfo inputBufferInfo;\n    OH_EffectBufferInfo_GetAddr(info, &inputBufferInfo.addr);\n    OH_EffectBufferInfo_GetWidth(info, &inputBufferInfo.width);\n    OH_EffectBufferInfo_GetHeight(info, &inputBufferInfo.height);\n    OH_EffectBufferInfo_GetRowSize(info, &inputBufferInfo.rowSize);\n    OH_EffectBufferInfo_GetEffectFormat(info, &inputBufferInfo.format);\n\n    // 调用自定义滤镜算法。\n    ApplyCustomAlgo(inputBufferInfo);\n\n    // 编辑完成后调用pushData直接传递原图。\n    pushData(filter, info);\n    return true;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景二：自定义算法不能直接修改info中的像素数据（比如：裁剪滤镜）。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool Render(OH_EffectFilter *filter, OH_EffectBufferInfo *info, OH_EffectFilterDelegate_PushData pushData)\n{\n    // 获取图像信息具体参数。\n    EffectBufferInfo inputBufferInfo;\n    OH_EffectBufferInfo_GetAddr(info, &inputBufferInfo.addr);\n    OH_EffectBufferInfo_GetWidth(info, &inputBufferInfo.width);\n    OH_EffectBufferInfo_GetHeight(info, &inputBufferInfo.height);\n    OH_EffectBufferInfo_GetRowSize(info, &inputBufferInfo.rowSize);\n    OH_EffectBufferInfo_GetEffectFormat(info, &inputBufferInfo.format);\n\n    // 创建输出像素信息。\n    EffectBufferInfo outputBufferInfo = CreateOutputBufferInfo(inputBufferInfo);\n\n    // 调用自定义滤镜算法。\n    ApplyCustomAlgo(inputBufferInfo, outputBufferInfo);\n\n    // 生成outputOhInfo。\n    OH_EffectBufferInfo *outputOhInfo = OH_EffectBufferInfo_Create();\n    OH_EffectBufferInfo_SetAddr(outputOhInfo, outputBufferInfo.addr);\n    OH_EffectBufferInfo_SetWidth(outputOhInfo, outputBufferInfo.width);\n    OH_EffectBufferInfo_SetHeight(outputOhInfo, outputBufferInfo.height);\n    OH_EffectBufferInfo_SetRowSize(outputOhInfo, outputBufferInfo.rowSize);\n    OH_EffectBufferInfo_SetEffectFormat(outputOhInfo, outputBufferInfo.format);\n\n    // 编辑完成后调用pushData传递outputOhInfo。\n    pushData(filter, outputOhInfo);\n\n    // 释放资源。\n    OH_EffectBufferInfo_Release(outputOhInfo);\n    ReleaseOutputBuffer(outputBufferInfo.addr);\n\n    return true;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成自定义滤镜信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建OH_EffectFilterInfo实例。\nOH_EffectFilterInfo *customFilterInfo = OH_EffectFilterInfo_Create();\nif (customFilterInfo ==nullptr) {\n    OH_LOG_ERROR(LOG_APP, \"OH_EffectFilter_GetValue fail!\");\n    return;\n}\n\n// 设置自定义滤镜滤镜名。\nOH_EffectFilterInfo_SetFilterName(customFilterInfo, \"CustomBrightness\");\n\n// 设置自定义滤镜所支持的内存类型。\nImageEffect_BufferType bufferTypeArray[] = { ImageEffect_BufferType::EFFECT_BUFFER_TYPE_PIXEL };\nOH_EffectFilterInfo_SetSupportedBufferTypes(customFilterInfo, sizeof(bufferTypeArray) / sizeof(ImageEffect_BufferType), bufferTypeArray);\n\n// 设置自定义滤镜所支持的像素格式。\nImageEffect_Format formatArray[] = { ImageEffect_Format::EFFECT_PIXEL_FORMAT_RGBA8888 };\nOH_EffectFilterInfo_SetSupportedFormats(customFilterInfo, sizeof(formatArray) / sizeof(ImageEffect_Format), formatArray);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将 ImageEffect_FilterDelegate 注册到效果器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注册自定义滤镜。\nImageEffect_ErrorCode errorCode = OH_EffectFilter_Register(customFilterInfo, &filterDelegate);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_EffectFilter_Register fail!\");\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "effectfilter快速实现单个滤镜的处理效果",
      children: "EffectFilter快速实现单个滤镜的处理效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建滤镜。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建滤镜。比如：创建对比度效果器。\nOH_EffectFilter *filter = OH_EffectFilter_Create(OH_EFFECT_CONTRAST_FILTER);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置滤镜参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置滤镜参数, 滤镜强度设置为50。\nImageEffect_Any value = {.dataType = ImageEffect_DataType::EFFECT_DATA_TYPE_FLOAT, .dataValue.floatValue = 50.f};\nImageEffect_ErrorCode errorCode = OH_EffectFilter_SetValue(filter, OH_EFFECT_FILTER_INTENSITY_KEY, &value);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_EffectFilter_SetValue fail!\");\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生效滤镜。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 生效滤镜效果。\nerrorCode = OH_EffectFilter_Render(filter, inputPixelmap, outputPixelmap);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁滤镜实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁滤镜实例。\nerrorCode = OH_EffectFilter_Release(filter);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询能力",
      children: "查询能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据滤镜名查询滤镜信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建OH_EffectFilterInfo实例。\nOH_EffectFilterInfo *filterInfo = OH_EffectFilterInfo_Create();\nif (filterInfo == nullptr) {\n    OH_LOG_ERROR(LOG_APP, \"OH_EffectFilterInfo_Create fail!\");\n    return;\n}\n\n// 根据滤镜名查询滤镜能力信息。\nImageEffect_ErrorCode errorCode = OH_EffectFilter_LookupFilterInfo(OH_EFFECT_BRIGHTNESS_FILTER, filterInfo);\nif (errorCode != ImageEffect_ErrorCode::EFFECT_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_EffectFilter_LookupFilterInfo fail!\");\n    return;\n}\n\n// 从滤镜能力信息中获取滤镜名。\nchar *name = nullptr;\nOH_EffectFilterInfo_GetFilterName(filterInfo, &name);\n\n// 获取支持的内存类型。\nuint32_t supportedBufferTypesCnt = 0;\nImageEffect_BufferType *bufferTypeArray = nullptr;\nOH_EffectFilterInfo_GetSupportedBufferTypes(filterInfo, &supportedBufferTypesCnt, &bufferTypeArray);\n\n// 获取支持的像素类型信息。\nuint32_t supportedFormatsCnt = 0;\nImageEffect_Format *formatArray = nullptr;\nOH_EffectFilterInfo_GetSupportedFormats(filterInfo, supportedFormatsCnt, &formatArray);\n\n// 销毁OH_EffectFilterInfo实例。\nOH_EffectFilterInfo_Release(filterInfo);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据条件查询满足条件的滤镜。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询所有的Filter，需要主动进行资源释放。\nImageEffect_FilterNames *filterNames = OH_EffectFilter_LookupFilters(\"Default\");\n\n// ...\n\n// 释放FilterNames虚拟内存资源。\nOH_EffectFilter_ReleaseFilterNames();\n"
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