"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["998441"], {
671543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_camera_setframerate_native_camera_setframerate_native_md_5c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-camera-setframerate-native-camera-setframerate-native-md-5c8.json
var site_docs_camera_kit_camera_dev_native_camera_setframerate_native_camera_setframerate_native_md_5c8_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/camera-setframerate-native/camera-setframerate-native","title":"动态调整预览帧率(C/C++)","description":"动态调整帧率是直播、视频等场景下控制预览效果的重要能力之一。应用可通过此能力，显式地控制流输出帧率，以适应不同帧率下的业务目标。","source":"@site/docs/camera-kit/camera-dev-native/camera-setframerate-native/camera-setframerate-native.md","sourceDirName":"camera-kit/camera-dev-native/camera-setframerate-native","slug":"/camera-kit/camera-dev-native/camera-setframerate-native/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-setframerate-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"动态调整预览帧率(C/C++)","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-setframerate-native","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"相机旋转角度的术语","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native/"},"next":{"title":"使用相机预配置(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-preconfig-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/camera-setframerate-native/camera-setframerate-native.md


const frontMatter = {
	title: '动态调整预览帧率(C/C++)',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-setframerate-native',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '动态调整预览帧率(C/C++)';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "创建Session会话并指定模式",
  "id": "创建session会话并指定模式",
  "level": 2
}, {
  "value": "动态调整帧率",
  "id": "动态调整帧率",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "动态调整预览帧率cc",
        children: "动态调整预览帧率(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态调整帧率是直播、视频等场景下控制预览效果的重要能力之一。应用可通过此能力，显式地控制流输出帧率，以适应不同帧率下的业务目标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某些场景下降低帧率可在相机设备启用时降低功耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的帧率范围及帧率的设置依赖于硬件能力的实现，不同的硬件平台可能拥有不同的默认帧率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机使用预览功能前，均需要创建相机会话。完成会话配置后，应用提交和开启会话，才可以开始调用相机相关功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710083)/* ["default"] */.A) + "",
        width: "1016",
        height: "1124"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与普通的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-preview",
        children: "预览"
      }), "流程相比，动态调整预览帧率的注意点如图上标识："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createcapturesession",
            children: "OH_CameraManager_CreateCaptureSession"
          }), "创建会话（Session）时，需要指定模式为NORMAL_PHOTO或NORMAL_VIDEO。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["仅当Session处于NORMAL_PHOTO或NORMAL_VIDEO模式时，支持调整预览流帧率。调整帧率的创建会话方式见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BAsession%E4%BC%9A%E8%AF%9D%E5%B9%B6%E6%8C%87%E5%AE%9A%E6%A8%A1%E5%BC%8F",
            children: "创建Session会话并指定模式"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%8A%A8%E6%80%81%E8%B0%83%E6%95%B4%E5%B8%A7%E7%8E%87",
            children: "动态调整帧率"
          }), "的操作，可在启动预览前后任意时刻调用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%8A%A8%E6%80%81%E8%B0%83%E6%95%B4%E5%B8%A7%E7%8E%87",
            children: "动态调整帧率"
          }), "在预览里属于可选操作，可以完成："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "查询当前支持调整的帧率范围"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设置当前帧率"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "获取当前生效的帧率设置"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如何配置会话（Session）、释放资源，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management",
        children: "会话管理"
      }), " > ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-preview",
        children: "预览"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入NDK接口，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入NDK接口头文件\n#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"ohcamera/camera_manager.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libohcamera.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建session会话并指定模式",
      children: "创建Session会话并指定模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相机使用预览等功能前，均需创建相机会话，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createcapturesession",
        children: "OH_CameraManager_CreateCaptureSession"
      }), "创建一个会话。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建会话时调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_setsessionmode",
        children: "OH_CaptureSession_SetSessionMode"
      }), "指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_scenemode",
        children: "Camera_SceneMode"
      }), "为NORMAL_PHOTO或NORMAL_VIDEO，创建出的Session处于拍照或录像模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以创建Session会话并指定为NORMAL_PHOTO模式为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode CreateCaptureSession(Camera_Manager *cameraManager, Camera_CaptureSession *captureSession) {\n   Camera_ErrorCode ret = OH_CameraManager_CreateCaptureSession(cameraManager, &captureSession);\n    if (captureSession == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCaptureSession failed.\");\n    }\n    // 设置会话模式为拍照或录像模式，此处以拍照模式为例\n    ret = OH_CaptureSession_SetSessionMode(captureSession, Camera_SceneMode::NORMAL_PHOTO);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动态调整帧率",
      children: "动态调整帧率"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_getsupportedframerates",
            children: "OH_PreviewOutput_GetSupportedFrameRates"
          }), "，查询当前previewOutput支持的帧率范围。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(744288)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "调用时机"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要在Session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig"
          }), "完成配流之后调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_PreviewOutput_GetSupportedFrameRates调用限制："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在调用OH_PreviewOutput_GetSupportedFrameRates接口设置非固定帧率后，不支持再次调用该接口重新设置动态帧率。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在调用OH_PreviewOutput_GetSupportedFrameRates接口设置固定帧率后，支持重新设置固定帧率，但必须保证新设置的帧率可以整除之前设置的帧率或者被之前设置的帧率整除。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode PreviewOutputGetSupportedFrameRates(Camera_PreviewOutput* previewOutput,\n    Camera_FrameRateRange** frameRateRange, uint32_t* size) {\n    Camera_ErrorCode ret = OH_PreviewOutput_GetSupportedFrameRates(previewOutput, frameRateRange, size);\n\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_PreviewOutput_GetSupportedFrameRates failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    for (uint32_t i = 0; i < *size; i++) {\n        OH_LOG_DEBUG(LOG_APP, \"PreviewOutputGetSupportedFrameRates: SupportedFrameRates min %{public}d\", (*frameRateRange)[i].min);\n        OH_LOG_DEBUG(LOG_APP, \"PreviewOutputGetSupportedFrameRates: SupportedFrameRates max %{public}d\", (*frameRateRange)[i].max);\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据实际开发需求，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_setframerate",
            children: "OH_PreviewOutput_SetFrameRate"
          }), "接口对帧率进行动态调整。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(288264)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["需要在Session调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
              children: "OH_CaptureSession_CommitConfig"
            }), "完成配流之后调用。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["可在Session调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_start",
              children: "OH_PreviewOutput_Start"
            }), "启动预览前后任意时刻调用。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode PreviewOutputSetFrameRate(Camera_PreviewOutput* previewOutput,\n    uint32_t minFps, uint32_t maxFps){\n    Camera_ErrorCode ret = OH_PreviewOutput_SetFrameRate(previewOutput, minFps, maxFps);\n    if (ret != CAMERA_OK) {\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_getactiveframerate",
            children: "OH_PreviewOutput_GetActiveFrameRate"
          }), "接口查询已设置过并生效的帧率。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["仅通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_setframerate",
            children: "OH_PreviewOutput_SetFrameRate"
          }), "接口显式设置过帧率才可查询当前生效帧率信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode PreviewOutputGetActiveFrameRate(Camera_PreviewOutput* previewOutput,\n    Camera_FrameRateRange* frameRateRange){\n    Camera_ErrorCode ret = OH_PreviewOutput_GetActiveFrameRate(previewOutput, frameRateRange);\n    if (ret != CAMERA_OK) {\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    OH_LOG_DEBUG(LOG_APP, \"PreviewOutputGetActiveFrameRate: ActiveFrameRate frameRateRange_ min %{public}d\", (*frameRateRange).min);\n    OH_LOG_DEBUG(LOG_APP, \"PreviewOutputGetActiveFrameRate: ActiveFrameRate frameRateRange_ max %{public}d\", (*frameRateRange).max);\n    return ret;\n}\n"
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
288264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
710083(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438629-9dc71fbe3ae4f7c619a691d1b5f11ea0.png");

},
744288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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