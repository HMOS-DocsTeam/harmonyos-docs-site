"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["444928"], {
445344(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_preconfig_camera_preconfig_md_575_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-preconfig-camera-preconfig-md-575.json
var site_docs_camera_kit_camera_dev_arkts_camera_preconfig_camera_preconfig_md_575_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-preconfig/camera-preconfig","title":"使用相机预配置(ArkTS)","description":"相机预配置（Preconfig），对常用的场景和分辨率进行了预配置集成，可简化开发相机应用流程，提高应用的开发效率。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-preconfig/camera-preconfig.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-preconfig","slug":"/camera-kit/camera-dev-arkts/camera-preconfig/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-preconfig/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{"title":"使用相机预配置(ArkTS)","sidebar_position":27,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preconfig","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动态调整预览帧率(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-framerate/"},"next":{"title":"HDR Vivid相机拍照(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-hdr-shooting/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-preconfig/camera-preconfig.md


const frontMatter = {
	title: '使用相机预配置(ArkTS)',
	sidebar_position: 27,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preconfig',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用相机预配置(ArkTS)';

const assets = {

};



const toc = [{
  "value": "规格说明",
  "id": "规格说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
        id: "使用相机预配置arkts",
        children: "使用相机预配置(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机预配置（Preconfig），对常用的场景和分辨率进行了预配置集成，可简化开发相机应用流程，提高应用的开发效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在开发相机应用时，在获取到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#cameradevice",
        children: "CameraDevice"
      }), "之后，如果遵循通用流程开发，步骤较为繁琐。需要先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager",
        children: "CameraManager"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedoutputcapability11",
        children: "getSupportedOutputCapability"
      }), "来查询当前相机在指定模式下所支持的各类输出的配置信息，拿到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#cameraoutputcapability",
        children: "CameraOutputCapability"
      }), "之后，应用开发者还需要对里面的各类数据进行解析，筛选，找到自己需要的配置数据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#profile",
        children: "Profile"
      }), "以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#videoprofile",
        children: "VideoProfile"
      }), "。最后使用对应的Profile以及VideoProfile创建对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput",
        children: "PreviewOutput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput",
        children: "PhotoOutput"
      }), "以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videooutput/arkts-apis-camera-videooutput",
        children: "VideoOutput"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了解决上述问题，优化应用开发流程，系统针对拍照（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photosession/arkts-apis-camera-photosession",
        children: "PhotoSession"
      }), "）、录像（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videosession/arkts-apis-camera-videosession",
        children: "VideoSession"
      }), "）两类场景，提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photosession/arkts-apis-camera-photosession#preconfig12",
        children: "preconfig"
      }), "接口帮助开发者快速完成相机参数配置。推荐仅需要自定义拍照界面的无需开发专业相机应用的开发者，使用相机预配置功能快速开发应用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。以拍照（PhotoSession）为例，相机预配置（Preconfig）开发流程与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-shooting-case",
        children: "通用流程"
      }), "开发，存在以下差异："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(47284)/* ["default"] */.A) + "",
        width: "1074",
        height: "1477"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他相关能力："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-picker",
          children: "CameraPicker"
        }), "：无需开发相机功能，拉起系统相机获取照片或视频。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-overview",
          children: "调用全量相机接口开发"
        }), "：可开发自定义界面、分辨率、图像效果的专业相机应用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格说明",
      children: "规格说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统提供了4种预配置类型（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#preconfigtype12",
        children: "PreconfigType"
      }), "），分别为PRECONFIG_720P、PRECONFIG_1080P、PRECONFIG_4K、PRECONFIG_HIGH_QUALITY。以及3种画幅比例规格（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#preconfigratio12",
        children: "PreconfigRatio"
      }), "），1:1画幅（PRECONFIG_RATIO_1_1）、4:3画幅（PRECONFIG_RATIO_4_3）、16:9画幅（PRECONFIG_RATIO_16_9）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(640234)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于不同的设备所支持的能力不同。使用相机预配置（Preconfig）功能时，需要先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photosession/arkts-apis-camera-photosession#canpreconfig12",
        children: "canPreconfig"
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
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
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
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_1080P"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_4K"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PRECONFIG_HIGH_QUALITY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跟随Sensor（镜头）最大能力"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/js-apis-camera",
        children: "Camera API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建输出流Output。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此处以创建预览流和拍照流为例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建预览输出流时，涉及参数surfaceId。XComponent组件为预览流提供Surface（获取surfaceId请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#getxcomponentsurfaceid9",
            children: "getXcomponentSurfaceId"
          }), "方法），而XComponent的能力由UI提供，相关介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
            children: "XComponent组件参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建cameraManager对象的方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-f/arkts-apis-camera-f#cameragetcameramanager",
            children: "getCameraManager"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Context获取方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
            children: "获取UIAbility的上下文信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function createCameraOutput(context: common.BaseContext, surfaceId: string) : void {\n  // 创建预览输出流\n  let previewOutput: camera.PreviewOutput | undefined = undefined;\n  let cameraManager = camera.getCameraManager(context);\n  try {\n    previewOutput = cameraManager.createPreviewOutput(surfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the PreviewOutput instance. error code: ${err.code}`);\n  }\n  if (previewOutput === undefined) {\n    return;\n  }\n\n  // 创建拍照输出流\n  let photoOutput: camera.PhotoOutput | undefined = undefined;\n  try {\n    photoOutput = cameraManager.createPhotoOutput();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to createPhotoOutput errorCode = ' + err.code);\n  }\n  if (photoOutput === undefined) {\n    return;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager",
            children: "CameraManager"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createcamerainput",
            children: "createCameraInput"
          }), "方法，创建输入流Input。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function createAndOpenCameraInput(cameraManager: camera.CameraManager) : Promise<void> {\n  // 获取相机列表\n  let cameraArray: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();\n  if (cameraArray.length <= 0) {\n    console.error(\"cameraManager.getSupportedCameras error\");\n    return;\n  }\n  let cameraInput: camera.CameraInput | undefined = undefined;\n  try {\n    cameraInput = cameraManager.createCameraInput(cameraArray[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to createCameraInput errorCode = ' + err.code);\n  }\n  if (cameraInput === undefined) {\n    return;\n  }\n  // 打开相机\n  await cameraInput.open();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createsession11",
            children: "createSession"
          }), "创建会话（Session）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(826242)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SceneMode需要指定为NORMAL_PHOTO或NORMAL_VIDEO，对应拍照场景", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photosession/arkts-apis-camera-photosession",
            children: "PhotoSession"
          }), "和录像场景", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videosession/arkts-apis-camera-videosession",
            children: "VideoSession"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function createCameraSession(cameraManager: camera.CameraManager) : void {\n  // 创建会话\n  let photoSession: camera.PhotoSession | undefined = undefined;\n  try {\n    photoSession = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO) as camera.PhotoSession;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to create the session instance. errorCode = ' + err.code);\n  }\n  if (photoSession === undefined) {\n    return;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photosession/arkts-apis-camera-photosession#canpreconfig12",
            children: "canPreconfig"
          }), "检查对应的PreconfigType和PreconfigRatio的组合在当前设备上是否支持。确认支持后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photosession/arkts-apis-camera-photosession#preconfig12",
            children: "preconfig"
          }), "启用Preconfig配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function GetPreconfig(photoSession: camera.PhotoSession) : void {\n  // 查询Preconfig能力\n  try {\n    let isPreconfigSupport = photoSession.canPreconfig(camera.PreconfigType.PRECONFIG_1080P);\n    if (!isPreconfigSupport) {\n      console.error('PhotoSession canPreconfig check fail.');\n      return;\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to call canPreconfig. errorCode = ' + err.code);\n    return;\n  }\n\n  // 配置Preconfig\n  try {\n    photoSession.preconfig(camera.PreconfigType.PRECONFIG_1080P);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to call preconfig. errorCode = ' + err.code);\n    return;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(103150)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若当前模式为普通录像模式，且", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#preconfigtype12",
            children: "PreconfigType"
          }), "使用PRECONFIG_HIGH_QUALITY类型时，为避免录制失败，请务必将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avrecorderprofile9",
            children: "AVRecorderProfile"
          }), "配置文件中videoCodec参数必须配置为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-e/arkts-apis-media-e#codecmimetype8",
            children: "VIDEO_HEVC"
          }), "，isHdr参数配置为true。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Session添加Input和Output。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(868138)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Session调用preconfig接口成功之后，Session内部会将预置数据准备好，如果向Session中进行添加未配置Profile的Output，Session则会对相应的Output进行配置对应Profile。如果向Session中添加已配置Profile的Output，则Session的预配置数据不生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function initCamera(photoSession: camera.PhotoSession, cameraInput: camera.CameraInput,\n  previewOutput: camera.PreviewOutput, photoOutput: camera.PhotoOutput) : Promise<void> {\n  // 开始配置会话\n  try {\n    photoSession.beginConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to beginConfig. errorCode = ' + err.code);\n  }\n\n  // 向会话中添加相机输入流\n  try {\n    photoSession.addInput(cameraInput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addInput. errorCode = ' + err.code);\n  }\n\n  // 向会话中添加预览输出流\n  try {\n    photoSession.addOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addOutput(previewOutput). errorCode = ' + err.code);\n  }\n\n  // 向会话中添加拍照输出流\n  try {\n    photoSession.addOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addOutput(photoOutput). errorCode = ' + err.code);\n  }\n  // 提交会话配置\n  await photoSession.commitConfig();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动Session。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function startCamera(photoSession: camera.PhotoSession) : Promise<void> {\n  // 启动会话\n  await photoSession.start().then(() => {\n    console.info('Promise returned to indicate the session start success.');\n  });\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Context获取方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function savePicture(buffer: ArrayBuffer, img: image.Image, context: Context): Promise<void> {\n  let accessHelper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n  let options: photoAccessHelper.CreateOptions = {\n    title: Date.now().toString()\n  };\n  let photoUri: string = await accessHelper.createAsset(photoAccessHelper.PhotoType.IMAGE, 'jpg', options);\n  let file: fileIo.File = fileIo.openSync(photoUri, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n  fileIo.writeSync(file.fd, buffer);\n  fileIo.closeSync(file);\n  await img.release();\n}\n\nfunction setPhotoOutputCb(photoOutput: camera.PhotoOutput, context: Context): void {\n  // 设置回调之后，调用photoOutput的capture方法，就会将拍照的buffer回传到回调中\n  photoOutput.on('photoAvailable', (errCode: BusinessError, photo: camera.Photo): void => {\n    console.info('getPhoto start');\n    console.info(`err: ${JSON.stringify(errCode)}`);\n    if (errCode || photo === undefined) {\n      console.error('getPhoto failed');\n      return;\n    }\n    let imageObj = photo.main;\n    imageObj.getComponent(image.ComponentType.JPEG, (errCode: BusinessError, component: image.Component): void => {\n      console.info('getComponent start');\n      if (errCode || component === undefined) {\n        console.error('getComponent failed');\n        return;\n      }\n      let buffer: ArrayBuffer;\n      if (component.byteBuffer) {\n        buffer = component.byteBuffer;\n      } else {\n        console.error('byteBuffer is null');\n        return;\n      }\n      savePicture(buffer, imageObj, context);\n    });\n  });\n}\n\nasync function cameraShootingCase(context: Context, surfaceId: string): Promise<void> {\n  // 创建CameraManager对象\n  let cameraManager: camera.CameraManager = camera.getCameraManager(context);\n  if (!cameraManager) {\n    console.error(\"camera.getCameraManager error\");\n    return;\n  }\n  // 监听相机状态变化\n  cameraManager.on('cameraStatus', (err: BusinessError, cameraStatusInfo: camera.CameraStatusInfo) => {\n    if (err !== undefined && err.code !== 0) {\n      console.error('cameraStatus with errorCode = ' + err.code);\n      return;\n    }\n    console.info(`camera : ${cameraStatusInfo.camera.cameraId}`);\n    console.info(`status: ${cameraStatusInfo.status}`);\n  });\n\n  // 获取相机列表\n  let cameraArray: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();\n  if (cameraArray.length <= 0) {\n    console.error(\"cameraManager.getSupportedCameras error\");\n    return;\n  }\n\n  for (let index = 0; index < cameraArray.length; index++) {\n    console.info('cameraId : ' + cameraArray[index].cameraId); // 获取相机ID\n    console.info('cameraPosition : ' + cameraArray[index].cameraPosition); // 获取相机位置\n    console.info('cameraType : ' + cameraArray[index].cameraType); // 获取相机类型\n    console.info('connectionType : ' + cameraArray[index].connectionType); // 获取相机连接类型\n  }\n\n  // 创建相机输入流\n  let cameraInput: camera.CameraInput | undefined = undefined;\n  try {\n    cameraInput = cameraManager.createCameraInput(cameraArray[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to createCameraInput errorCode = ' + err.code);\n  }\n  if (cameraInput === undefined) {\n    return;\n  }\n\n  // 监听cameraInput错误信息\n  let cameraDevice: camera.CameraDevice = cameraArray[0];\n  cameraInput.on('error', cameraDevice, (error: BusinessError) => {\n    console.error(`Camera input error code: ${error.code}`);\n  })\n\n  // 打开相机\n  await cameraInput.open();\n\n  // 获取支持的模式类型\n  let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(cameraArray[0]);\n  let isSupportPhotoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_PHOTO) >= 0;\n  if (!isSupportPhotoMode) {\n    console.error('photo mode not support');\n    return;\n  }\n\n  // 创建会话\n  let photoSession: camera.PhotoSession | undefined = undefined;\n  try {\n    photoSession = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO) as camera.PhotoSession;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to create the session instance. errorCode = ' + err.code);\n  }\n  if (photoSession === undefined) {\n    return;\n  }\n\n  // 监听session错误信息\n  photoSession.on('error', (error: BusinessError) => {\n    console.error(`Capture session error code: ${error.code}`);\n  });\n\n  // 查询Preconfig能力\n  try {\n    let isPreconfigSupport = photoSession.canPreconfig(camera.PreconfigType.PRECONFIG_1080P);\n    if (!isPreconfigSupport) {\n      console.error('PhotoSession canPreconfig check fail.');\n      return;\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to call canPreconfig. errorCode = ' + err.code);\n    return;\n  }\n\n  // 配置Preconfig\n  try {\n    photoSession.preconfig(camera.PreconfigType.PRECONFIG_1080P);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to call preconfig. errorCode = ' + err.code);\n    return;\n  }\n\n  // 创建预览输出流,其中参数 surfaceId 参考上文 XComponent 组件，预览流为XComponent组件提供的surface\n  let previewOutput: camera.PreviewOutput | undefined = undefined;\n  try {\n    previewOutput = cameraManager.createPreviewOutput(surfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the PreviewOutput instance. error code: ${err.code}`);\n  }\n  if (previewOutput === undefined) {\n    return;\n  }\n  // 监听预览输出错误信息\n  previewOutput.on('error', (error: BusinessError) => {\n    console.error(`Preview output error code: ${error.code}`);\n  });\n\n  // 创建拍照输出流\n  let photoOutput: camera.PhotoOutput | undefined = undefined;\n  try {\n    photoOutput = cameraManager.createPhotoOutput();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to createPhotoOutput errorCode = ' + err.code);\n  }\n  if (photoOutput === undefined) {\n    return;\n  }\n\n  // 调用上面的回调函数来保存图片\n  setPhotoOutputCb(photoOutput, context);\n\n  // 开始配置会话\n  try {\n    photoSession.beginConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to beginConfig. errorCode = ' + err.code);\n  }\n\n  // 向会话中添加相机输入流\n  try {\n    photoSession.addInput(cameraInput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addInput. errorCode = ' + err.code);\n  }\n\n  // 向会话中添加预览输出流\n  try {\n    photoSession.addOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addOutput(previewOutput). errorCode = ' + err.code);\n  }\n\n  // 向会话中添加拍照输出流\n  try {\n    photoSession.addOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addOutput(photoOutput). errorCode = ' + err.code);\n  }\n\n  // 提交会话配置\n  await photoSession.commitConfig();\n\n  // 启动会话\n  await photoSession.start().then(() => {\n    console.info('Promise returned to indicate the session start success.');\n  });\n  // 判断设备是否支持闪光灯\n  let flashStatus: boolean = false;\n  try {\n    flashStatus = photoSession.hasFlash();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to hasFlash. errorCode = ' + err.code);\n  }\n  console.info('Returned with the flash light support status:' + flashStatus);\n\n  if (flashStatus) {\n    // 判断是否支持自动闪光灯模式\n    let flashModeStatus: boolean = false;\n    try {\n      let status: boolean = photoSession.isFlashModeSupported(camera.FlashMode.FLASH_MODE_AUTO);\n      flashModeStatus = status;\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error('Failed to check whether the flash mode is supported. errorCode = ' + err.code);\n    }\n    if(flashModeStatus) {\n      // 设置自动闪光灯模式\n      try {\n        photoSession.setFlashMode(camera.FlashMode.FLASH_MODE_AUTO);\n      } catch (error) {\n        let err = error as BusinessError;\n        console.error('Failed to set the flash mode. errorCode = ' + err.code);\n      }\n    }\n  }\n\n  // 判断是否支持连续自动变焦模式\n  let focusModeStatus: boolean = false;\n  try {\n    let status: boolean = photoSession.isFocusModeSupported(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);\n    focusModeStatus = status;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to check whether the focus mode is supported. errorCode = ' + err.code);\n  }\n\n  if (focusModeStatus) {\n    // 设置连续自动变焦模式\n    try {\n      photoSession.setFocusMode(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error('Failed to set the focus mode. errorCode = ' + err.code);\n    }\n  }\n\n  // 获取相机支持的可变焦距比范围\n  let zoomRatioRange: Array<number> = [];\n  try {\n    zoomRatioRange = photoSession.getZoomRatioRange();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to get the zoom ratio range. errorCode = ' + err.code);\n  }\n  if (zoomRatioRange.length <= 0) {\n    return;\n  }\n  // 设置可变焦距比\n  try {\n    photoSession.setZoomRatio(zoomRatioRange[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to set the zoom ratio value. errorCode = ' + err.code);\n  }\n  let photoCaptureSetting: camera.PhotoCaptureSetting = {\n    quality: camera.QualityLevel.QUALITY_LEVEL_HIGH, // 设置图片质量高\n    rotation: camera.ImageRotation.ROTATION_0 // 设置图片旋转角度0\n  }\n  // 使用当前拍照设置进行拍照，需要在拍照时主动调用该接口拍摄图片。\n  photoOutput.capture(photoCaptureSetting, (err: BusinessError) => {\n    if (err) {\n      console.error(`Failed to capture the photo ${err.message}`);\n      return;\n    }\n    console.info('Callback invoked to indicate the photo capture request success.');\n  });\n\n  // 需要在拍照结束之后调用以下关闭摄像头和释放会话流程，避免拍照未结束就将会话释放。\n  // 停止当前会话\n  await photoSession.stop();\n\n  // 释放相机输入流\n  await cameraInput.close();\n\n  // 释放预览输出流\n  await previewOutput.release();\n\n  // 释放拍照输出流\n  await photoOutput.release();\n\n  // 释放会话\n  await photoSession.release();\n\n  // 会话置空\n  photoSession = undefined;\n}\n"
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
826242(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
868138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
47284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958582-86e95f3aaccf68df1010e3d8e8139dc2.png");

},
103150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
640234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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