"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["932735"], {
64336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_camera_api_camera_c_camera_headerfile_capi_camera_h_capi_camera_h_md_ed1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-camera-api-camera-c-camera-headerfile-capi-camera-h-capi-camera-h-md-ed1.json
var site_docs_ref_camera_api_camera_c_camera_headerfile_capi_camera_h_capi_camera_h_md_ed1_namespaceObject = JSON.parse('{"id":"camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h","title":"camera.h","description":"概述","source":"@site/docs-ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h.md","sourceDirName":"camera-api/camera-c/camera-headerfile/capi-camera-h","slug":"/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h","permalink":"/harmonyos-docs-site/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"camera.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-camera-h"},"sidebar":"ref","previous":{"title":"OH_Camera","permalink":"/harmonyos-docs-site/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera"},"next":{"title":"camera_device.h","permalink":"/harmonyos-docs-site/ref/camera-api/camera-c/camera-headerfile/capi-camera-device-h/capi-camera-device-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h.md


const frontMatter = {
	title: 'camera.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-camera-h'
};
const contentTitle = 'camera.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Camera_ErrorCode",
  "id": "camera_errorcode",
  "level": 3
}, {
  "value": "Camera_Status",
  "id": "camera_status",
  "level": 3
}, {
  "value": "Camera_SceneMode",
  "id": "camera_scenemode",
  "level": 3
}, {
  "value": "Camera_Position",
  "id": "camera_position",
  "level": 3
}, {
  "value": "Camera_Type",
  "id": "camera_type",
  "level": 3
}, {
  "value": "Camera_Connection",
  "id": "camera_connection",
  "level": 3
}, {
  "value": "Camera_Format",
  "id": "camera_format",
  "level": 3
}, {
  "value": "Camera_FlashMode",
  "id": "camera_flashmode",
  "level": 3
}, {
  "value": "Camera_ExposureMode",
  "id": "camera_exposuremode",
  "level": 3
}, {
  "value": "Camera_FocusMode",
  "id": "camera_focusmode",
  "level": 3
}, {
  "value": "Camera_FocusState",
  "id": "camera_focusstate",
  "level": 3
}, {
  "value": "Camera_VideoStabilizationMode",
  "id": "camera_videostabilizationmode",
  "level": 3
}, {
  "value": "Camera_ImageRotation",
  "id": "camera_imagerotation",
  "level": 3
}, {
  "value": "Camera_QualityLevel",
  "id": "camera_qualitylevel",
  "level": 3
}, {
  "value": "Camera_MetadataObjectType",
  "id": "camera_metadataobjecttype",
  "level": 3
}, {
  "value": "Camera_TorchMode",
  "id": "camera_torchmode",
  "level": 3
}, {
  "value": "Camera_SmoothZoomMode",
  "id": "camera_smoothzoommode",
  "level": 3
}, {
  "value": "Camera_SystemPressureLevel",
  "id": "camera_systempressurelevel",
  "level": 3
}, {
  "value": "Camera_PreconfigType",
  "id": "camera_preconfigtype",
  "level": 3
}, {
  "value": "Camera_PreconfigRatio",
  "id": "camera_preconfigratio",
  "level": 3
}, {
  "value": "Camera_HostDeviceType",
  "id": "camera_hostdevicetype",
  "level": 3
}, {
  "value": "Camera_FoldStatus",
  "id": "camera_foldstatus",
  "level": 3
}, {
  "value": "Camera_QualityPrioritization",
  "id": "camera_qualityprioritization",
  "level": 3
}, {
  "value": "Camera_ConcurrentType",
  "id": "camera_concurrenttype",
  "level": 3
}, {
  "value": "Camera_WhiteBalanceMode",
  "id": "camera_whitebalancemode",
  "level": 3
}, {
  "value": "Camera_ControlCenterEffectType",
  "id": "camera_controlcentereffecttype",
  "level": 3
}, {
  "value": "Camera_PhotoQualityPrioritization",
  "id": "camera_photoqualityprioritization",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Camera_GetCameraManager()",
  "id": "oh_camera_getcameramanager",
  "level": 3
}, {
  "value": "OH_Camera_DeleteCameraManager()",
  "id": "oh_camera_deletecameramanager",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "camerah",
        children: "camera.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义相机的基本接口和功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ohcamera/camera.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohcamera.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Camera.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera",
        children: "OH_Camera"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-devicequeryinfo/capi-oh-camera-camera-devicequeryinfo",
              children: "Camera_DeviceQueryInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_DeviceQueryInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机设备的查询信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-size/capi-oh-camera-camera-size",
              children: "Camera_Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大小参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-profile/capi-oh-camera-camera-profile",
              children: "Camera_Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机流的配置文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-frameraterange/capi-oh-camera-camera-frameraterange",
              children: "Camera_FrameRateRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_FrameRateRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帧速率范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-videoprofile/capi-oh-camera-camera-videoprofile",
              children: "Camera_VideoProfile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_VideoProfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录像配置文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-outputcapability/capi-oh-camera-camera-outputcapability",
              children: "Camera_OutputCapability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_OutputCapability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机输出能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-device/capi-oh-camera-camera-device",
              children: "Camera_Device"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机设备对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-statusinfo/capi-oh-camera-camera-statusinfo",
              children: "Camera_StatusInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_StatusInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-point/capi-oh-camera-camera-point",
              children: "Camera_Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-location/capi-oh-camera-camera-location",
              children: "Camera_Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-photocapturesetting/capi-oh-camera-camera-photocapturesetting",
              children: "Camera_PhotoCaptureSetting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_PhotoCaptureSetting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置的拍照捕获选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-frameshutterinfo/capi-oh-camera-camera-frameshutterinfo",
              children: "Camera_FrameShutterInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_FrameShutterInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帧快门回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-captureendinfo/capi-oh-camera-camera-captureendinfo",
              children: "Camera_CaptureEndInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_CaptureEndInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "捕获结束信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-rect/capi-oh-camera-camera-rect",
              children: "Camera_Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Rect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形定义。  检测点应在0-1坐标系内，该坐标系左上角为(0，0)，右下角为(1，1)。  此坐标系以设备充电口在右侧时的横向设备方向为基准。  例如应用的预览界面布局以设备充电口在下侧时的竖向方向为基准，布局宽高为(w，h)， 返回点为(x，y)，则转换后的坐标点为(1-y，x)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataobject/capi-oh-camera-camera-metadataobject",
              children: "Camera_MetadataObject"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_MetadataObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据对象基础。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-torchstatusinfo/capi-oh-camera-camera-torchstatusinfo",
              children: "Camera_TorchStatusInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_TorchStatusInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手电筒状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-smoothzoominfo/capi-oh-camera-camera-smoothzoominfo",
              children: "Camera_SmoothZoomInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_SmoothZoomInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平滑变焦参数信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-capturestartinfo/capi-oh-camera-camera-capturestartinfo",
              children: "Camera_CaptureStartInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_CaptureStartInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照开始信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-frameshutterendinfo/capi-oh-camera-camera-frameshutterendinfo",
              children: "Camera_FrameShutterEndInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_FrameShutterEndInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照曝光结束信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-foldstatusinfo/capi-oh-camera-camera-foldstatusinfo",
              children: "Camera_FoldStatusInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_FoldStatusInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "折叠状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-autodeviceswitchstatusinfo/capi-oh-camera-camera-autodeviceswitchstatusinfo",
              children: "Camera_AutoDeviceSwitchStatusInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_AutoDeviceSwitchStatusInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动设备切换状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-concurrentinfo/capi-oh-camera-camera-concurrentinfo",
              children: "Camera_ConcurrentInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_ConcurrentInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机并发能力信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-controlcenterstatusinfo/capi-oh-camera-camera-controlcenterstatusinfo",
              children: "Camera_ControlCenterStatusInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_ControlCenterStatusInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制器效果激活状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-occlusiondetectionresult/capi-oh-camera-camera-occlusiondetectionresult",
              children: "Camera_OcclusionDetectionResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_OcclusionDetectionResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机镜头遮挡、脏污检测结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-manager/capi-oh-camera-camera-manager",
              children: "Camera_Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Manager"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相机管理器对象。  可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_camera_getcameramanager",
              children: "OH_Camera_GetCameraManager"
            }), "方法创建指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机错误代码的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_status",
              children: "Camera_Status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机状态的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_scenemode",
              children: "Camera_SceneMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_SceneMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机模式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_position",
              children: "Camera_Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机位置的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_type",
              children: "Camera_Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_connection",
              children: "Camera_Connection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机连接类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_format",
              children: "Camera_Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机格式类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_flashmode",
              children: "Camera_FlashMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_FlashMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "闪光模式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_exposuremode",
              children: "Camera_ExposureMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_ExposureMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "曝光模式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_focusmode",
              children: "Camera_FocusMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_FocusMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "聚焦模式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_focusstate",
              children: "Camera_FocusState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_FocusState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点状态的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_videostabilizationmode",
              children: "Camera_VideoStabilizationMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_VideoStabilizationMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录像防抖模式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_imagerotation",
              children: "Camera_ImageRotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_ImageRotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像旋转角度的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_qualitylevel",
              children: "Camera_QualityLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_QualityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像质量等级的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_metadataobjecttype",
              children: "Camera_MetadataObjectType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_MetadataObjectType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据对象类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_torchmode",
              children: "Camera_TorchMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_TorchMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手电筒模式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_smoothzoommode",
              children: "Camera_SmoothZoomMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_SmoothZoomMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平滑变焦模式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_systempressurelevel",
              children: "Camera_SystemPressureLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_SystemPressureLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统压力等级的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_preconfigtype",
              children: "Camera_PreconfigType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_PreconfigType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预配置照片分辨率的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_preconfigratio",
              children: "Camera_PreconfigRatio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_PreconfigRatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预配置照片比例的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_hostdevicetype",
              children: "Camera_HostDeviceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_HostDeviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远程设备类型枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_foldstatus",
              children: "Camera_FoldStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_FoldStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "折叠状态枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_qualityprioritization",
              children: "Camera_QualityPrioritization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_QualityPrioritization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录像质量优先级的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_concurrenttype",
              children: "Camera_ConcurrentType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_ConcurrentType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机并发状态的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_whitebalancemode",
              children: "Camera_WhiteBalanceMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_WhiteBalanceMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白平衡模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_controlcentereffecttype",
              children: "Camera_ControlCenterEffectType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_ControlCenterEffectType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制器效果类型枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#camera_photoqualityprioritization",
              children: "Camera_PhotoQualityPrioritization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_PhotoQualityPrioritization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照画质优先策略枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_camera_getcameramanager",
              children: "Camera_ErrorCode OH_Camera_GetCameraManager(Camera_Manager** cameraManager)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建CameraManager实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_camera_deletecameramanager",
              children: "Camera_ErrorCode OH_Camera_DeleteCameraManager(Camera_Manager* cameraManager)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除CameraManager实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_errorcode",
      children: "Camera_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机错误代码的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机结果正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_INVALID_ARGUMENT = 7400101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数丢失或参数类型不正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OPERATION_NOT_ALLOWED = 7400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_SESSION_NOT_CONFIG = 7400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话未配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_SESSION_NOT_RUNNING = 7400104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话未运行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_SESSION_CONFIG_LOCKED = 7400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话配置已锁定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_DEVICE_SETTING_LOCKED = 7400106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备设置已锁定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_CONFLICT_CAMERA = 7400107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "因冲突而无法使用相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_DEVICE_DISABLED = 7400108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于安全原因，相机已禁用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_DEVICE_PREEMPTED = 7400109"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "因被抢占而无法使用相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_UNRESOLVED_CONFLICTS_WITH_CURRENT_CONFIGURATIONS = 7400110"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["与当前配置存在冲突。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_SERVICE_FATAL_ERROR = 7400201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机服务异常。  比如没有相机权限、相机服务重启、跨进程调用异常等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_status",
      children: "Camera_Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_Status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机状态的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_STATUS_APPEAR = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_STATUS_DISAPPEAR = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消失状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_STATUS_AVAILABLE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可用状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_STATUS_UNAVAILABLE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可用状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_scenemode",
      children: "Camera_SceneMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_SceneMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORMAL_PHOTO = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通相机模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORMAL_VIDEO = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通视频模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURE_PHOTO = 12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["安全相机模式，主要为银行等有活体检测等安全诉求的应用提供。安全相机的使用需要加密算法框架及可信应用服务，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/device-certificate-kit/device-certificate-kit-intro",
              children: "Device Certificate Kit简介"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_position",
      children: "Camera_Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_Position\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机位置的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_POSITION_UNSPECIFIED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对于设备屏幕没有固定的朝向的相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_POSITION_BACK = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_POSITION_FRONT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_type",
      children: "Camera_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_TYPE_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认相机类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_TYPE_WIDE_ANGLE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "广角相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_TYPE_ULTRA_WIDE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超广角相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_TYPE_TELEPHOTO = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长焦相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_TYPE_TRUE_DEPTH = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "景深相机。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_connection",
      children: "Camera_Connection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_Connection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机连接类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_CONNECTION_BUILT_IN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内置相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_CONNECTION_USB_PLUGIN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用USB连接的相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_CONNECTION_REMOTE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远程相机。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_format",
      children: "Camera_Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_Format\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机格式类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FORMAT_RGBA_8888 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBA 8888格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FORMAT_YUV_420_SP = 1003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV 420格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FORMAT_JPEG = 2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FORMAT_YCBCR_P010 = 2001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCBCR P010 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FORMAT_YCRCB_P010 = 2002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCRCB P010 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FORMAT_HEIC = 2003"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HEIC格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_flashmode",
      children: "Camera_FlashMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_FlashMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "闪光模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLASH_MODE_CLOSE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLASH_MODE_OPEN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLASH_MODE_AUTO = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLASH_MODE_ALWAYS_OPEN = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "始终打开模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_exposuremode",
      children: "Camera_ExposureMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_ExposureMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "曝光模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXPOSURE_MODE_LOCKED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "锁定曝光模式。 不支持曝光区域中心点设置。  设置该模式后，每次拍照时曝光都会默认锁定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXPOSURE_MODE_AUTO = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自动曝光模式。支持曝光区域中心点设置，可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_setmeteringpoint",
              children: "OH_CaptureSession_SetMeteringPoint"
            }), "接口设置曝光区域中心点。  设置该模式后，仅设置后的首次拍照生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXPOSURE_MODE_CONTINUOUS_AUTO = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连续自动曝光。  设置该模式后，拍照系统会根据每次的环境变化自动调整曝光。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_focusmode",
      children: "Camera_FocusMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_FocusMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "聚焦模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOCUS_MODE_MANUAL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手动模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOCUS_MODE_CONTINUOUS_AUTO = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连续自动模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOCUS_MODE_AUTO = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOCUS_MODE_LOCKED = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "锁定模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_focusstate",
      children: "Camera_FocusState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_FocusState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "焦点状态的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOCUS_STATE_SCAN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扫描状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOCUS_STATE_FOCUSED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "聚焦状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOCUS_STATE_UNFOCUSED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非聚焦状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_videostabilizationmode",
      children: "Camera_VideoStabilizationMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_VideoStabilizationMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录像防抖模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STABILIZATION_MODE_OFF = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭录像防抖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STABILIZATION_MODE_LOW = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOW模式，提供基本的防抖效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STABILIZATION_MODE_MIDDLE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE模式，表示通过算法可以获得比LOW模式更好的效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STABILIZATION_MODE_HIGH = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH模式，表示通过算法可以获得比MIDDLE模式更好的效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STABILIZATION_MODE_AUTO = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动选择模式，HDF相机可用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_imagerotation",
      children: "Camera_ImageRotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_ImageRotation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像旋转角度的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAMGE_ROTATION_0 = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获图像旋转0度。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_imagerotation",
              children: "CAMERA_IMAGE_ROTATION_0"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_IMAGE_ROTATION_0 = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获图像旋转0度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAMGE_ROTATION_90 = 90"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获图像旋转90度。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_imagerotation",
              children: "CAMERA_IMAGE_ROTATION_90"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_IMAGE_ROTATION_90 = 90"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获图像旋转90度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAMGE_ROTATION_180 = 180"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获图像旋转180度。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_imagerotation",
              children: "CAMERA_IMAGE_ROTATION_180"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_IMAGE_ROTATION_180 = 180"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获图像旋转180度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAMGE_ROTATION_270 = 270"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获图像旋转270度。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_imagerotation",
              children: "CAMERA_IMAGE_ROTATION_270"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_IMAGE_ROTATION_270 = 270"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获图像旋转270度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_qualitylevel",
      children: "Camera_QualityLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_QualityLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像质量等级的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QUALITY_LEVEL_HIGH = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高图像质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QUALITY_LEVEL_MEDIUM = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中等图像质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QUALITY_LEVEL_LOW = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低图像质量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_metadataobjecttype",
      children: "Camera_MetadataObjectType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_MetadataObjectType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "元数据对象类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FACE_DETECTION = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["元数据的对象类型，用于人脸检测。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_metadataobjecttype",
              children: "CAMERA_METADATA_OBJECT_TYPE_FACE_DETECTION"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_METADATA_OBJECT_TYPE_FACE_DETECTION = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["元数据的对象类型，用于人脸检测。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_METADATA_OBJECT_TYPE_HUMAN_BODY = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["元数据的对象类型，用于人体检测。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_torchmode",
      children: "Camera_TorchMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_TorchMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手电筒模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFF = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备手电筒常关。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_torchmode",
              children: "CAMERA_TORCH_MODE_OFF"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_TORCH_MODE_OFF = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备手电筒常关。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备手电筒常开。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_torchmode",
              children: "CAMERA_TORCH_MODE_ON"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_TORCH_MODE_ON = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备手电筒常开。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备手电筒自动模式，将根据环境光照水平打开手电筒。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_torchmode",
              children: "CAMERA_TORCH_MODE_AUTO"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_TORCH_MODE_AUTO = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备手电筒自动模式，将根据环境光照水平打开手电筒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_smoothzoommode",
      children: "Camera_SmoothZoomMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_SmoothZoomMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "平滑变焦模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORMAL = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["贝塞尔曲线模式。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_smoothzoommode",
              children: "CAMERA_SMOOTH_ZOOM_MODE_NORMAL"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_SMOOTH_ZOOM_MODE_NORMAL = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["贝塞尔曲线模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_systempressurelevel",
      children: "Camera_SystemPressureLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_SystemPressureLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统压力等级的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_PRESSURE_NORMAL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统压力正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_PRESSURE_MILD = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统压力升高，但是系统不会主动管控。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_PRESSURE_SEVERE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统压力可能对图像总质量、性能产生影响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_PRESSURE_CRITICAL = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统图像质量、性能产生显著影响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_PRESSURE_SHUTDOWN = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统压力过高，停止工作。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_preconfigtype",
      children: "Camera_PreconfigType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_PreconfigType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预配置照片分辨率的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRECONFIG_720P = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预配置照片分辨率为720P。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRECONFIG_1080P = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预配置照片分辨率为1080P。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRECONFIG_4K = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预配置照片分辨率为4K。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRECONFIG_HIGH_QUALITY = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预配置照片为高质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRECONFIG_HIGH_QUALITY_PHOTOSESSION_BT2020 = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["预配置支持预览高动态范围显示和HDR动图拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本:"
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_preconfigratio",
      children: "Camera_PreconfigRatio"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_PreconfigRatio\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预配置照片比例的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRECONFIG_RATIO_1_1 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预配置照片比例为1:1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRECONFIG_RATIO_4_3 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预配置照片比例为4:3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRECONFIG_RATIO_16_9 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预配置照片比例为16:9。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_hostdevicetype",
      children: "Camera_HostDeviceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_HostDeviceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "远程设备类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HOST_DEVICE_TYPE_UNKNOWN_TYPE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HOST_DEVICE_TYPE_PHONE = 0x0E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HOST_DEVICE_TYPE_TABLET = 0x11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平板设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_foldstatus",
      children: "Camera_FoldStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_FoldStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "折叠状态枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NON_FOLDABLE = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不可折叠状态。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_foldstatus",
              children: "CAMERA_FOLD_STATUS_NON_FOLDABLE"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FOLD_STATUS_NON_FOLDABLE = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不可折叠状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXPANDED = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["展开状态。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_foldstatus",
              children: "CAMERA_FOLD_STATUS_EXPANDED"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FOLD_STATUS_EXPANDED = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["展开状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOLDED = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["折叠状态。  从API version 23开始，推荐使用新枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_foldstatus",
              children: "CAMERA_FOLD_STATUS_FOLDED"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FOLD_STATUS_FOLDED = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["折叠状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_qualityprioritization",
      children: "Camera_QualityPrioritization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_QualityPrioritization\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录像质量优先级的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH_QUALITY = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高录像质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POWER_BALANCE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功耗平衡录像质量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_concurrenttype",
      children: "Camera_ConcurrentType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_ConcurrentType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机并发状态的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_CONCURRENT_TYPE_LIMITED_CAPABILITY = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机限制并发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_CONCURRENT_TYPE_FULL_CAPABILITY = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机全量并发。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_whitebalancemode",
      children: "Camera_WhiteBalanceMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_WhiteBalanceMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "白平衡模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_WHITE_BALANCE_MODE_AUTO = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白平衡模式：自动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_WHITE_BALANCE_MODE_CLOUDY = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白平衡模式：阴天。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_WHITE_BALANCE_MODE_INCANDESCENT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白平衡模式：白炽灯。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_WHITE_BALANCE_MODE_FLUORESCENT = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白平衡模式：荧光。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_WHITE_BALANCE_MODE_DAYLIGHT = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白平衡模式：晴天。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_WHITE_BALANCE_MODE_MANUAL = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白平衡模式：手动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_WHITE_BALANCE_MODE_LOCKED = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白平衡模式：锁定。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_controlcentereffecttype",
      children: "Camera_ControlCenterEffectType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_ControlCenterEffectType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制器效果类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTROL_CENTER_EFFECT_TYPE_BEAUTY = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制器效果类型：美颜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTROL_CENTER_EFFECT_TYPE_PORTRAIT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制器效果类型：人像虚化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera_photoqualityprioritization",
      children: "Camera_PhotoQualityPrioritization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Camera_PhotoQualityPrioritization\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拍照画质优先策略枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_PHOTO_QUALITY_PRIORITIZATION_HIGH_QUALITY = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画质优先，拍照需要较长的时间，以输出高画质的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_PHOTO_QUALITY_PRIORITIZATION_SPEED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能优先，会降低画质来提升拍照的速度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_camera_getcameramanager",
      children: "OH_Camera_GetCameraManager()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode OH_Camera_GetCameraManager(Camera_Manager** cameraManager)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建CameraManager实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-manager/capi-oh-camera-camera-manager",
              children: "Camera_Manager"
            }), "** cameraManager"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果方法调用成功，将创建Camera_Manager实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK：方法调用成功。  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_camera_deletecameramanager",
      children: "OH_Camera_DeleteCameraManager()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode OH_Camera_DeleteCameraManager(Camera_Manager* cameraManager)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除CameraManager实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-manager/capi-oh-camera-camera-manager",
              children: "Camera_Manager"
            }), "* cameraManager"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要删除的Camera_Manager实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK：方法调用成功。  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。"
          })]
        })
      })]
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