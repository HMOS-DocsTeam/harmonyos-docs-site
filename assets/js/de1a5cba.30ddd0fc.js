"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["489728"], {
826145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_camera_preconfig_native_camera_preconfig_native_md_de1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-camera-preconfig-native-camera-preconfig-native-md-de1.json
var site_docs_camera_kit_camera_dev_native_camera_preconfig_native_camera_preconfig_native_md_de1_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/camera-preconfig-native/camera-preconfig-native","title":"使用相机预配置(C/C++)","description":"相机预配置（Preconfig），对常用的场景和分辨率进行了预配置集成，可简化开发相机应用流程，提高应用的开发效率。","source":"@site/docs/camera-kit/camera-dev-native/camera-preconfig-native/camera-preconfig-native.md","sourceDirName":"camera-kit/camera-dev-native/camera-preconfig-native","slug":"/camera-kit/camera-dev-native/camera-preconfig-native/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-preconfig-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"使用相机预配置(C/C++)","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preconfig-native","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动态调整预览帧率(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-setframerate-native/"},"next":{"title":"DRM Kit 简介","permalink":"/harmonyos-docs-site/drm-kit/drm-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/camera-preconfig-native/camera-preconfig-native.md


const frontMatter = {
	title: '使用相机预配置(C/C++)',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preconfig-native',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用相机预配置(C/C++)';

const assets = {

};



const toc = [{
  "value": "规格说明",
  "id": "规格说明",
  "level": 2
}, {
  "value": "开发示例",
  "id": "开发示例",
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
        id: "使用相机预配置cc",
        children: "使用相机预配置(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机预配置（Preconfig），对常用的场景和分辨率进行了预配置集成，可简化开发相机应用流程，提高应用的开发效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在开发相机应用时，在获取到CameraDevice之后，如果遵循通用流程开发，步骤较为繁琐。需要先查询当前相机在指定模式下所支持的各类输出的配置信息，拿到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-outputcapability/capi-oh-camera-camera-outputcapability",
        children: "Camera_OutputCapability"
      }), "之后，应用开发者还需要对里面的各类数据进行解析，筛选，找到自己需要的配置数据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-profile/capi-oh-camera-camera-profile",
        children: "Camera_Profile"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-videoprofile/capi-oh-camera-camera-videoprofile",
        children: "Camera_VideoProfile"
      }), "。最后使用对应的Profile以及VideoProfile创建对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-previewoutput/capi-oh-camera-camera-previewoutput",
        children: "Camera_PreviewOutput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-photooutput/capi-oh-camera-camera-photooutput",
        children: "Camera_PhotoOutput"
      }), "以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-videooutput/capi-oh-camera-camera-videooutput",
        children: "Camera_VideoOutput"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了解决上述问题，优化应用开发流程，系统针对拍照、录像两类场景（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_scenemode",
        children: "Camera_SceneMode"
      }), "为NORMAL_PHOTO或NORMAL_VIDEO），提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createpreviewoutputusedinpreconfig",
        children: "OH_CameraManager_CreatePreviewOutputUsedInPreconfig"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createphotooutputusedinpreconfig",
        children: "OH_CameraManager_CreatePhotoOutputUsedInPreconfig"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createvideooutputusedinpreconfig",
        children: "OH_CameraManager_CreateVideoOutputUsedInPreconfig"
      }), "接口帮助开发者快速完成相机参数配置。推荐仅需要自定义拍照界面的无需开发专业相机应用的开发者，使用相机预配置功能快速开发应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格说明",
      children: "规格说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统提供了4种预配置类型（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_preconfigtype",
        children: "Camera_PreconfigType"
      }), "），分别为PRECONFIG_720P、PRECONFIG_1080P、PRECONFIG_4K、PRECONFIG_HIGH_QUALITY。以及3种画幅比例规格（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_preconfigratio",
        children: "Camera_PreconfigRatio"
      }), "），1:1画幅（PRECONFIG_RATIO_1_1）、4:3画幅（PRECONFIG_RATIO_4_3）、16:9画幅（PRECONFIG_RATIO_16_9）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(255195)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于不同的设备所支持的能力不同。使用相机预配置（preconfig）功能时，需要先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_canpreconfig",
        children: "OH_CaptureSession_CanPreconfig"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_canpreconfigwithratio",
        children: "OH_CaptureSession_CanPreconfigWithRatio"
      }), "检查对应的PreconfigType和PreconfigRatio的组合在当前设备上是否支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在不同的画幅比例下，其分辨率规格不同，详见下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通拍照模式下的预览输出"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "预配置类型PreconfigType"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_1_1"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_4_3"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_16_9"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_720P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "720x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "960x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1280x720"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_1080P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1080x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1440x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1080"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_4K"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1080x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1440x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1080"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_HIGH_QUALITY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1440x1440"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1440"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2560x1440"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通拍照模式下的拍照输出"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "预配置类型PreconfigType"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_1_1"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_4_3"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_16_9"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_720P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "720x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "960x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1280x720"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_1080P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1080x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1440x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1080"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_4K"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2160x2160"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2880x2160"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3840x2160"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_HIGH_QUALITY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通录像模式下的预览输出"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "预配置类型PreconfigType"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_1_1"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_4_3"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_16_9"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_720P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "720x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "960x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1280x720"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_1080P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1080x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1440x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1080"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_4K"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1080x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1440x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1080"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_HIGH_QUALITY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1080x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1440x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1080"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通录像模式下的录像输出"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "预配置类型PreconfigType"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_1_1"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_4_3"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_16_9"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_720P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "720x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "960x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1280x720"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_1080P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1080x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1440x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1080"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_4K"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2160x2160"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2880x2160"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3840x2160"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_HIGH_QUALITY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2160x2160"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2880x2160"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3840x2160"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通录像模式下的拍照输出"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "预配置类型PreconfigType"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_1_1"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_4_3"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "PRECONFIG_RATIO_16_9"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_720P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_1080P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_4K"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_HIGH_QUALITY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor最大能力"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libohcamera.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cpp侧导入NDK接口，并根据传入的SurfaceId进行拍照。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"ohcamera/camera_manager.h\"\nclass NDKCamera {\npublic:\n    NDKCamera(char *previewId, char *photoId);\n};\n\nvoid CaptureSessionOnFocusStateChange(Camera_CaptureSession *session, Camera_FocusState focusState) {\n    OH_LOG_INFO(LOG_APP, \"CaptureSessionOnFocusStateChange\");\n}\n\nvoid CaptureSessionOnError(Camera_CaptureSession *session, Camera_ErrorCode errorCode) {\n    OH_LOG_INFO(LOG_APP, \"CaptureSessionOnError = %{public}d\", errorCode);\n}\n\nCaptureSession_Callbacks *GetCaptureSessionRegister(void) {\n    static CaptureSession_Callbacks captureSessionCallbacks = {.onFocusStateChange = CaptureSessionOnFocusStateChange,\n                                                               .onError = CaptureSessionOnError};\n    return &captureSessionCallbacks;\n}\n\nvoid PreviewOutputOnFrameStart(Camera_PreviewOutput *previewOutput) {\n    OH_LOG_INFO(LOG_APP, \"PreviewOutputOnFrameStart\");\n}\n\nvoid PreviewOutputOnFrameEnd(Camera_PreviewOutput *previewOutput, int32_t frameCount) {\n    OH_LOG_INFO(LOG_APP, \"PreviewOutputOnFrameEnd = %{public}d\", frameCount);\n}\n\nvoid PreviewOutputOnError(Camera_PreviewOutput *previewOutput, Camera_ErrorCode errorCode) {\n    OH_LOG_INFO(LOG_APP, \"PreviewOutputOnError = %{public}d\", errorCode);\n}\n\nPreviewOutput_Callbacks *GetPreviewOutputListener(void) {\n    static PreviewOutput_Callbacks previewOutputListener = {.onFrameStart = PreviewOutputOnFrameStart,\n                                                            .onFrameEnd = PreviewOutputOnFrameEnd,\n                                                            .onError = PreviewOutputOnError};\n    return &previewOutputListener;\n}\n\nvoid OnCameraInputError(const Camera_Input *cameraInput, Camera_ErrorCode errorCode) {\n    OH_LOG_INFO(LOG_APP, \"OnCameraInput errorCode = %{public}d\", errorCode);\n}\n\nCameraInput_Callbacks *GetCameraInputListener(void) {\n    static CameraInput_Callbacks cameraInputCallbacks = {.onError = OnCameraInputError};\n    return &cameraInputCallbacks;\n}\n\nvoid CameraManagerStatusCallback(Camera_Manager *cameraManager, Camera_StatusInfo *status) {\n    OH_LOG_INFO(LOG_APP, \"CameraManagerStatusCallback is called\");\n}\n\nCameraManager_Callbacks *GetCameraManagerListener() {\n    static CameraManager_Callbacks cameraManagerListener = {.onCameraStatus = CameraManagerStatusCallback};\n    return &cameraManagerListener;\n}\n\nNDKCamera::NDKCamera(char *previewId, char *photoId) {\n    Camera_Manager *cameraManager = nullptr;\n    Camera_Device *cameras = nullptr;\n    Camera_CaptureSession *captureSession = nullptr;\n    Camera_PreviewOutput *previewOutput = nullptr;\n    Camera_PhotoOutput *photoOutput = nullptr;\n    Camera_Input *cameraInput = nullptr;\n    uint32_t size = 0;\n    uint32_t cameraDeviceIndex = 0;\n    char *previewSurfaceId = previewId;\n    char *photoSurfaceId = photoId;\n    // 创建CameraManager对象\n    Camera_ErrorCode ret = OH_Camera_GetCameraManager(&cameraManager);\n    if (cameraManager == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_Camera_GetCameraMananger failed.\");\n    }\n    // 监听相机状态变化\n    ret = OH_CameraManager_RegisterCallback(cameraManager, GetCameraManagerListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_RegisterCallback failed.\");\n    }\n\n    // 获取相机列表\n    ret = OH_CameraManager_GetSupportedCameras(cameraManager, &cameras, &size);\n    if (cameras == nullptr || size < 0 || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedCameras failed.\");\n    }\n\n    // 创建相机输入流\n    ret = OH_CameraManager_CreateCameraInput(cameraManager, &cameras[cameraDeviceIndex], &cameraInput);\n    if (cameraInput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCameraInput failed.\");\n    }\n\n    // 监听cameraInput错误信息\n    ret = OH_CameraInput_RegisterCallback(cameraInput, GetCameraInputListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_RegisterCallback failed.\");\n    }\n\n    // 打开相机\n    ret = OH_CameraInput_Open(cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_Open failed.\");\n    }\n\n    // 创建会话\n    ret = OH_CameraManager_CreateCaptureSession(cameraManager, &captureSession);\n    if (captureSession == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCaptureSession failed.\");\n    }\n\n    // 监听session错误信息\n    ret = OH_CaptureSession_RegisterCallback(captureSession, GetCaptureSessionRegister());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_RegisterCallback failed.\");\n    }\n\n    // 查询Preconfig能力\n    bool canPreconfigResult = false;\n    ret = OH_CaptureSession_CanPreconfig(captureSession, PRECONFIG_1080P, &canPreconfigResult);\n    if (ret != CAMERA_OK || !canPreconfigResult) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_CanPreconfig failed.\");\n    }\n\n    // 配置Preconfig\n    ret = OH_CaptureSession_Preconfig(captureSession, PRECONFIG_1080P);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Preconfig failed.\");\n    }\n\n    // 创建预览输出流,其中参数 previewSurfaceId 参考上文 XComponent 组件，预览流为XComponent组件提供的surface\n    ret = OH_CameraManager_CreatePreviewOutputUsedInPreconfig(cameraManager, previewSurfaceId, &previewOutput);\n    if (previewOutput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreatePreviewOutput failed.\");\n    }\n\n    // 监听预览输出错误信息\n    ret = OH_PreviewOutput_RegisterCallback(previewOutput, GetPreviewOutputListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_PreviewOutput_RegisterCallback failed.\");\n    }\n\n    // 创建拍照输出流，其中参数 photoSurfaceId 参考上文 ImageReceiver获取的surface\n    ret = OH_CameraManager_CreatePhotoOutputUsedInPreconfig(cameraManager, photoSurfaceId, &photoOutput);\n    if (photoOutput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreatePhotoOutput failed.\");\n    }\n\n    // 开始配置会话\n    ret = OH_CaptureSession_BeginConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_BeginConfig failed.\");\n    }\n\n    // 向会话中添加相机输入流\n    ret = OH_CaptureSession_AddInput(captureSession, cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddInput failed.\");\n    }\n\n    // 向会话中添加预览输出流\n    ret = OH_CaptureSession_AddPreviewOutput(captureSession, previewOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPreviewOutput failed.\");\n    }\n\n    // 向会话中添加拍照输出流\n    ret = OH_CaptureSession_AddPhotoOutput(captureSession, photoOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPhotoOutput failed.\");\n    }\n\n    // 提交会话配置\n    ret = OH_CaptureSession_CommitConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_CommitConfig failed.\");\n    }\n\n    // 启动会话\n    ret = OH_CaptureSession_Start(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Start failed.\");\n    }\n\n    // 判断设备是否支持闪光灯\n    Camera_FlashMode flashMode = FLASH_MODE_AUTO;\n    bool hasFlash = false;\n    ret = OH_CaptureSession_HasFlash(captureSession, &hasFlash);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_HasFlash failed.\");\n    }\n    if (hasFlash) {\n        OH_LOG_INFO(LOG_APP, \"hasFlash success\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"hasFlash fail\");\n    }\n    // 检测闪光灯模式是否支持\n    bool isSupported = false;\n    ret = OH_CaptureSession_IsFlashModeSupported(captureSession, flashMode, &isSupported);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_IsFlashModeSupported failed.\");\n    }\n    if (isSupported) {\n        OH_LOG_INFO(LOG_APP, \"isFlashModeSupported success\");\n        // 设置闪光灯模式\n        ret = OH_CaptureSession_SetFlashMode(captureSession, flashMode);\n        if (ret == CAMERA_OK) {\n            OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_SetFlashMode success.\");\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetFlashMode failed. %{public}d \", ret);\n        }\n        // 获取当前设备的闪光灯模式\n        ret = OH_CaptureSession_GetFlashMode(captureSession, &flashMode);\n        if (ret == CAMERA_OK) {\n            OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetFlashMode success. flashMode：%{public}d \", flashMode);\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetFlashMode failed. %d \", ret);\n        }\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"isFlashModeSupported fail\");\n    }\n\n    // 判断是否支持连续自动变焦模式\n    Camera_FocusMode focusMode = FOCUS_MODE_CONTINUOUS_AUTO;\n    bool isFocusModeSupported = false;\n    ret = OH_CaptureSession_IsFocusModeSupported(captureSession, focusMode, &isFocusModeSupported);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_IsFocusModeSupported failed.\");\n    }\n    if (isFocusModeSupported) {\n        OH_LOG_INFO(LOG_APP, \"isFocusModeSupported success\");\n        ret = OH_CaptureSession_SetFocusMode(captureSession, focusMode);\n        if (ret != CAMERA_OK) {\n            OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetFocusMode failed. %{public}d \", ret);\n        }\n        ret = OH_CaptureSession_GetFocusMode(captureSession, &focusMode);\n        if (ret == CAMERA_OK) {\n            OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetFocusMode success. focusMode%{public}d \", focusMode);\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetFocusMode failed. %d \", ret);\n        }\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"isFocusModeSupported fail\");\n    }\n\n    // 获取相机支持的可变焦距比范围\n    float minZoom;\n    float maxZoom;\n    ret = OH_CaptureSession_GetZoomRatioRange(captureSession, &minZoom, &maxZoom);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetZoomRatioRange failed.\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetZoomRatioRange success. minZoom: %{public}f, maxZoom:%{public}f\",\n                    minZoom, maxZoom);\n    }\n    // 设置变焦\n    ret = OH_CaptureSession_SetZoomRatio(captureSession, maxZoom);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_SetZoomRatio success.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetZoomRatio failed. %{public}d \", ret);\n    }\n    // 获取当前设备的变焦值\n    ret = OH_CaptureSession_GetZoomRatio(captureSession, &maxZoom);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetZoomRatio success. zoom：%{public}f \", maxZoom);\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetZoomRatio failed. %{public}d \", ret);\n    }\n\n    // 无拍照设置进行拍照\n    ret = OH_PhotoOutput_Capture(photoOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PhotoOutput_Capture success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_Capture failed. %d \", ret);\n    }\n\n    // 停止当前会话\n    ret = OH_CaptureSession_Stop(captureSession);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_Stop success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Stop failed. %d \", ret);\n    }\n\n    // 释放相机输入流\n    ret = OH_CameraInput_Close(cameraInput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CameraInput_Close success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_Close failed. %d \", ret);\n    }\n\n    // 释放预览输出流\n    ret = OH_PreviewOutput_Release(previewOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PreviewOutput_Release success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_PreviewOutput_Release failed. %d \", ret);\n    }\n\n    // 释放拍照输出流\n    ret = OH_PhotoOutput_Release(photoOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PhotoOutput_Release success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_Release failed. %d \", ret);\n    }\n\n    // 释放会话\n    ret = OH_CaptureSession_Release(captureSession);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_Release success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Release failed. %d \", ret);\n    }\n\n    // 资源释放\n    ret = OH_CameraManager_DeleteSupportedCameras(cameraManager, cameras, size);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Delete Cameras failed.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_DeleteSupportedCameras. ok\");\n    }\n\n    ret = OH_Camera_DeleteCameraManager(cameraManager);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Delete Cameras failed.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_Camera_DeleteCameraManager. ok\");\n    }\n}\n"
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
255195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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