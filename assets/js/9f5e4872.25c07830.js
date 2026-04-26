"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["612908"], {
428065(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_image_track_arengine_c_image_track_md_9f5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-c-guide-arengine-c-image-track-arengine-c-image-track-md-9f5.json
var site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_image_track_arengine_c_image_track_md_9f5_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-c-guide/arengine-c-image-track/arengine-c-image-track","title":"图像跟踪（C/C++）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-image-track/arengine-c-image-track.md","sourceDirName":"ar-engine-kit-guide/arengine-c-guide/arengine-c-image-track","slug":"/ar-engine-kit-guide/arengine-c-guide/arengine-c-image-track/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-image-track/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"图像跟踪（C/C++）","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-image-track","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取网格扫描信息（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-mesh/"},"next":{"title":"物体摆放（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-image-track/arengine-c-image-track.md


const frontMatter = {
	title: '图像跟踪（C/C++）',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-image-track',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '图像跟踪（C/C++）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
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
  "value": "声明Native接口",
  "id": "声明native接口",
  "level": 3
}, {
  "value": "创建UI界面",
  "id": "创建ui界面",
  "level": 3
}, {
  "value": "引入AR Engine",
  "id": "引入ar-engine",
  "level": 3
}, {
  "value": "创建AR会话",
  "id": "创建ar会话",
  "level": 3
}, {
  "value": "创建跟踪图像数据库并添加图像",
  "id": "创建跟踪图像数据库并添加图像",
  "level": 3
}, {
  "value": "识别环境中的可跟踪图像",
  "id": "识别环境中的可跟踪图像",
  "level": 3
}, {
  "value": "获取环境中的可跟踪图像数量",
  "id": "获取环境中的可跟踪图像数量",
  "level": 3
}, {
  "value": "获取跟踪图像示例",
  "id": "获取跟踪图像示例",
  "level": 3
}, {
  "value": "获取跟踪图像中心点在世界坐标系中的位姿信息",
  "id": "获取跟踪图像中心点在世界坐标系中的位姿信息",
  "level": 3
}, {
  "value": "获取跟踪图像的宽度",
  "id": "获取跟踪图像的宽度",
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
        id: "图像跟踪cc",
        children: "图像跟踪（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节给出了关键开发步骤，完整代码可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/arengine_-sample-code_-clientdemo_cpp",
        children: "示例代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图像跟踪能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
        children: "ARENGINE_FEATURE_TYPE_IMAGE"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为AR图像跟踪相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine",
        children: "AR Engine API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_create",
              children: "HMS_AREngine_ARSession_Create"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "会话。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_update",
              children: "HMS_AREngine_ARSession_Update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新AR Engine的计算结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_configure",
              children: "HMS_AREngine_ARSession_Configure"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "会话。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_create",
              children: "HMS_AREngine_ARFrame_Create"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), "对象，将指针存储到中*outFrame。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_setdisplaygeometry",
              children: "HMS_AREngine_ARSession_SetDisplayGeometry"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置显示的高和宽（以Pixel为单位）。该高度和宽度是显示视图的高度和宽度，如果不一致，会导致显示相机预览出错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_setcameragltexture",
              children: "HMS_AREngine_ARSession_SetCameraGLTexture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置可用于存储相机预览流数据的openGL纹理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getalltrackables",
              children: "HMS_AREngine_ARSession_GetAllTrackables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有指定类型的可跟踪对象集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_acquireitem",
              children: "HMS_AREngine_ARTrackableList_AcquireItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从可跟踪列表中获取指定index的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getcenterpose",
              children: "HMS_AREngine_ARPlane_GetCenterPose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取从平面的局部坐标系到世界坐标系转换的位姿信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirecamera",
              children: "HMS_AREngine_ARFrame_AcquireCamera"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的相机参数对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpose_create",
              children: "HMS_AREngine_ARPose_Create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配并初始化一个新的位姿对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getpose",
              children: "HMS_AREngine_ARCamera_GetPose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前相机对象在AR世界空间中的位姿。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_create",
              children: "HMS_AREngine_ARAugmentedImageDatabase_Create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个空的跟踪图像数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_addimage",
              children: "HMS_AREngine_ARAugmentedImageDatabase_AddImage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将图像添加到图像数据库并输出对应图像的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getalltrackables",
              children: "HMS_AREngine_ARSession_GetAllTrackables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有指定类型的可跟踪对象集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_getsize",
              children: "HMS_AREngine_ARTrackableList_GetSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取此列表中的可跟踪对象的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getcenterpose",
              children: "HMS_AREngine_ARAugmentedImage_GetCenterPose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取跟踪图像中心点在世界坐标系中的位姿信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendx",
              children: "HMS_AREngine_ARAugmentedImage_GetExtendX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像的中心点为坐标原点，物理图像的宽度（单位为米），得到X轴上的估计值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendz",
              children: "HMS_AREngine_ARAugmentedImage_GetExtendZ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像的中心点为坐标原点，物理图像的宽度（单位为米），得到Z轴上的估计值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_serialize",
              children: "HMS_AREngine_ARAugmentedImageDatabase_Serialize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "序列化特征数据库，在添加完图片后，可以将特征库序列化为buffer，用户可以保存此buffer以供下次使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_deserialize",
              children: "HMS_AREngine_ARAugmentedImageDatabase_Deserialize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "反序列化特征数据库，用户可以将上次生成的或者保存的buffer数据反序列化为特征数据库后直接使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "声明native接口",
      children: "声明Native接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考AR物体摆放章节的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld#%E5%A3%B0%E6%98%8Enative%E6%8E%A5%E5%8F%A3",
        children: "声明Native接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建ui界面",
      children: "创建UI界面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先创建一个起始UI页面“ARImage.ets”，设置两个按钮，用于实现“添加本地图片”和“读取本地数据库”两个功能，分别命名“ARImageByAdd.ets”和“ARImageByDatabase.ets”。配置路由进行页面间跳转，页面路由配置详细可查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation",
        children: "组件导航(Navigation) (推荐)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARImage.ets。\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Builder\nexport function ARImageBuilder() {\n  ARImage();\n}\n\n@Component\nstruct ARImage {\n  pageInfo: NavPathStack = new NavPathStack();\n  private imagePathArray: string[] = [];\n\n  build(): void {\n    NavDestination() {\n      Column() {\n        Button('选择本地图片', { type: ButtonType.Normal, stateEffect: true })\n          .borderRadius(8)\n          .width('50%')\n          .height('5%')\n          .onClick(async () => {\n\n            try {\n              let photoOption: photoAccessHelper.PhotoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n              photoOption.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n              photoOption.maxSelectNumber = 50;\n              photoOption.isEditSupported = false;\n              let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n\n              let photoResult: photoAccessHelper.PhotoSelectResult = await photoPicker.select(photoOption);\n              if (photoResult.photoUris.length > 0 && photoResult.photoUris[0].length > 0) {\n                this.imagePathArray = photoResult.photoUris;\n                this.pageInfo.pushDestinationByName('ARImageByAdd', this.imagePathArray).catch((error: BusinessError) => {\n                  console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);\n                });\n              }\n            } catch (error) {\n              const err: BusinessError = error as BusinessError;\n              console.error(`Failed to select by photoPicker. Code: ${err.code}, message is ${err.message}.`);\n            }\n          })\n\n        Button('加载本地数据库', { type: ButtonType.Normal, stateEffect: true })\n          .borderRadius(8)\n          .width('50%')\n          .height('5%')\n          .onClick(() => {\n            this.pageInfo.pushDestinationByName('ARImageByDatabase', null).catch((error: BusinessError) => {\n              console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);\n            });\n          })\n      }\n      .justifyContent(FlexAlign.SpaceEvenly)\n      .width('100%')\n      .height('100%')\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个ARImageByAdd.ets，用于选择图片，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件加载相机预览画面，并定时触发每一帧绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARImageByAdd.ets。\nimport { taskpool } from '@kit.ArkTS';\nimport { BusinessError, deviceInfo, emitter } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport arEngineDemo from 'libentry.so';\n\n@Builder\nexport function ARImageByAddBuilder() {\n  ARImageByAdd();\n}\n\n@Component\nstruct ARImageByAdd {\n  pageInfo: NavPathStack = new NavPathStack();\n  private imageAddFailedNumbers: number = 0;\n  private imageAddNumbers: number = 0;\n  private imagePathList: string[] = [];\n  private isSurfaceDestroy: boolean = false;\n  private interval: number = -1;\n  private isUpdate: boolean = false;\n  private xComponentId = 'ARImage';\n  @State addImageLog: string = '';\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;\n  @State imageTotalNumbers: number = 0;\n  @State private isImageAddComplete: boolean = false;\n  @State rotation: number = deviceInfo.deviceType === 'tablet' ? 3 : 0;\n  @State showPage: boolean = true;\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })\n          .width('100%')\n          .height('100%')\n          .visibility(this.showPage ? Visibility.Visible : Visibility.None)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onLoad(() => {\n            console.info(`XComponent onLoad ${this.xComponentId}.`);\n            this.interval = setInterval(() => {\n              if (!this.isUpdate || !this.isImageAddComplete || this.imageAddNumbers === 0) {\n                return;\n              }\n              arEngineDemo.update(this.xComponentId);\n            }, 33) // 将帧率设置为30fps（每33ms 刷新一次帧）。\n          })\n          .onDestroy(() => {\n            console.info(`XComponent onDestroy ${this.xComponentId}.`);\n            this.isSurfaceDestroy = true;\n            clearInterval(this.interval);\n          })\n\n        Text('添加图片进度：' +\n        this.imageTotalNumbers.toString() + '/' + this.imagePathList.length.toString() + '\\n ' +\n        '添加成功数量：' +\n        this.imageAddNumbers + ' \\n' +\n        '添加失败数量：' +\n        this.imageAddFailedNumbers + '\\n' + this.addImageLog)\n          .width(300)\n          .textAlign(TextAlign.Center)\n          .fontColor(Color.Red)\n          .visibility(!this.isImageAddComplete ? Visibility.Visible : Visibility.None)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n      }\n    }\n    .onBackPressed(() => {\n      console.error('Failed to onBackPressed.');\n      return false;\n    })\n    .onAppear(() => {\n      arEngineDemo.init(this.resMgr);\n      let config: Int32Array = new Int32Array([1, this.rotation]);\n      arEngineDemo.start(this.xComponentId, config);\n\n      try {\n        console.info(`Image path length: ${this.imagePathList.length}.`);\n        this.RegisterAddImageCallback();\n        taskpool.execute(addImage, this.xComponentId, this.imagePathList, errcode).then(() => {\n          console.info('Add image task complete.');\n          emitter.emit('checkAddImageResult');\n        })\n      } catch (error) {\n        const err: BusinessError = error as BusinessError;\n        console.error(`Failed to promise options error. Code: ${err.code}, message is ${err.message}.`);\n      }\n    })\n    .onWillDisappear(() => {\n      if (this.imageAddNumbers > 0) {\n        arEngineDemo.saveImageDataBaseToLocal(this.xComponentId, this.context.filesDir);\n      }\n      arEngineDemo.stop(this.xComponentId);\n    })\n    .onShown(() => {\n      this.isUpdate = true;\n      arEngineDemo.show(this.xComponentId);\n    })\n    .onHidden(() => {\n      this.isUpdate = false;\n      if (!this.isSurfaceDestroy) {\n        arEngineDemo.hide(this.xComponentId);\n      }\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n      this.imagePathList = context.pathInfo.param as string[];\n    })\n    .hideTitleBar(true)\n    .hideBackButton(false)\n    .hideToolBar(true)\n  }\n\n  private ShowDialog(msg: string): void {\n    this.getUIContext().showAlertDialog({\n      title: '警告',\n      message: msg,\n      autoCancel: true,\n      alignment: DialogAlignment.Center,\n      offset: { dx: 0, dy: -20 },\n      gridCount: 3,\n      transition: TransitionEffect\n        .asymmetric(TransitionEffect.OPACITY\n          .animation({ duration: 1000, curve: Curve.Sharp })\n          .combine(TransitionEffect\n            .scale({ x: 1.5, y: 1.5 })\n            .animation({ duration: 1000, curve: Curve.Sharp })\n          ),\n          TransitionEffect.OPACITY\n            .animation({ duration: 100, curve: Curve.Smooth })\n            .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })\n              .animation({ duration: 100, curve: Curve.Smooth })\n            )\n        ),\n      buttons: [{\n        enabled: true,\n        defaultFocus: true,\n        style: DialogButtonStyle.HIGHLIGHT,\n        value: '退出',\n        action: () => {\n          console.info('Callback when the second button is clicked')\n          this.pageInfo.pop();\n        }\n      }]\n    })\n  }\n\n  private RegisterAddImageCallback(): void {\n    emitter.on('addImage', (data: emitter.EventData) => {\n      if (data.data?.addImageReason === 0) {\n        this.imageAddNumbers++;\n        console.info(`Succeeded in adding image, image numbers: ${this.imageAddNumbers}.`);\n      } else {\n        this.imageAddFailedNumbers++;\n        this.addImageLog += '失败图片名：' +\n          data.data?.imageName + '\\n' +\n          '失败原因：' +\n          errcode.get(data.data?.addImageReason) + '\\n';\n        console.error(`Failed to add image, image numbers: ${this.imageAddFailedNumbers}.`);\n      }\n      this.imageTotalNumbers++;\n    })\n\n    emitter.on('checkAddImageResult', () => {\n      if (this.imageAddNumbers === 0 && this.isUpdate) {\n        this.showPage = false;\n        this.ShowDialog('请添加有效图片');\n      }\n      emitter.off('addImage');\n      this.isImageAddComplete = true;\n      emitter.off('checkAddImageResult');\n    })\n  }\n}\n\nlet errcode: Map<number, string> = new Map<number, string>([[0, 'success'], [1, 'size not match'],\n  [2, 'too bright or too dark'], [3, 'image color is relatively single'], [4, 'other error']]);\n\n// 异步执行添加图片任务。\n@Concurrent\nasync function addImage(componentId: string, imagePathList: string[],\n  errcode: Map<number, string>): Promise<void> {\n  for (let index = 0; index < imagePathList.length; index++) {\n    const imagePath: string = imagePathList[index];\n    let file: fileIo.File;\n    try {\n      file = fileIo.openSync(imagePath, fileIo.OpenMode.READ_ONLY);\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to open image. Code is ${err.code}, message is ${err.message}`);\n      this.addFailedImageCounts += 1;\n      continue\n    }\n    let imageName: string = file.name;\n    const imageSourceApi: image.ImageSource = image.createImageSource(file.fd);\n    try {\n      fileIo.closeSync(file);\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to closeSync. Code is ${err.code}, message is ${err.message}.`);\n      imageSourceApi.release();\n      continue;\n    }\n    const imageInfo: image.ImageInfo = imageSourceApi.getImageInfoSync();\n    if (!imageInfo) {\n      console.error(`Failed to obtain the image pixel map information.`);\n      imageSourceApi.release();\n      continue;\n    }\n    const opts: image.DecodingOptions = {\n      editable: true,\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888,\n      desiredSize: { width: imageInfo.size.width, height: imageInfo.size.height }\n    }\n    const pixelMap: image.PixelMap = imageSourceApi.createPixelMapSync(opts);\n    if (!pixelMap) {\n      console.error('Failed to create pixelMap.');\n      imageSourceApi.release();\n      continue;\n    }\n    const readBuffer: ArrayBuffer = new ArrayBuffer(pixelMap.getPixelBytesNumber());\n    await pixelMap.readPixelsToBuffer(readBuffer);\n    await pixelMap.release();\n\n    let result: number = arEngineDemo.initImage(componentId, imageInfo.size.width, imageInfo.size.height, readBuffer);\n    if (errcode.has(result) === false) {\n      console.error('Failed to add image, break.');\n      imageSourceApi.release();\n      break;\n    }\n    if (result !== 0) {\n      console.error(`Failed to Add image, reason is: ${errcode.get(result)}, imageName is: ${imageName}.`);\n    }\n    let eventData: emitter.EventData = {\n      data: {\n        'addImageReason': result,\n        'imageName': imageName,\n      }\n    }\n    emitter.emit('addImage', eventData);\n    imageSourceApi.release();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个ARImageByDatabase.ets，用于加载本地数据库，加载相机预览画面，并定时触发每一帧绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARImageByDatabase.ets。\nimport { deviceInfo } from '@kit.BasicServicesKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport arEngineDemo from 'libentry.so';\n\n@Builder\nexport function ARImageByDatabaseBuilder() {\n  ARImageByDatabase();\n}\n\n@Component\nstruct ARImageByDatabase {\n  pageInfo: NavPathStack = new NavPathStack();\n  private isSurfaceDestroy: boolean = false;\n  private interval: number = -1;\n  private isUpdate: boolean = false;\n  private xComponentId = 'ARImage';\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;\n  @State rotation: number = deviceInfo.deviceType === 'tablet' ? 3 : 0;\n  @State showPage: boolean = true;\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })\n          .width('100%')\n          .height('100%')\n          .visibility(this.showPage ? Visibility.Visible : Visibility.None)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onLoad(() => {\n            console.info(`XComponent onLoad ${this.xComponentId}.`);\n            this.interval = setInterval(() => {\n              if (this.isUpdate) {\n                arEngineDemo.update(this.xComponentId);\n              }\n            }, 33) // 将帧率设置为30fps（每33毫秒刷新一次帧）。\n          })\n          .onDestroy(() => {\n            console.info(`XComponent onDestroy ${this.xComponentId}.`);\n            this.isSurfaceDestroy = true;\n            clearInterval(this.interval);\n          })\n      }\n    }\n    .onAppear(() => {\n      arEngineDemo.init(this.resMgr);\n      let config: Int32Array = new Int32Array([1, this.rotation]);\n      arEngineDemo.start(this.xComponentId, config);\n\n      arEngineDemo.setPath(this.xComponentId, this.context.filesDir);\n\n      let imageCountInDatabase: number = arEngineDemo.getImageCount(this.xComponentId);\n      console.info(`ImageCountInDatabase: ${imageCountInDatabase}.`);\n      if (imageCountInDatabase <= 0) {\n        this.ShowDialog('请添加有效图片');\n      }\n    })\n    .onWillDisappear(() => {\n      arEngineDemo.stop(this.xComponentId);\n    })\n    .onShown(() => {\n      this.isUpdate = true;\n      arEngineDemo.show(this.xComponentId);\n    })\n    .onHidden(() => {\n      this.isUpdate = false;\n      if (!this.isSurfaceDestroy) {\n        arEngineDemo.hide(this.xComponentId);\n      }\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  ShowDialog(msg: string): void {\n    this.getUIContext().showAlertDialog({\n      title: '警告',\n      message: msg,\n      autoCancel: true,\n      alignment: DialogAlignment.Center,\n      offset: { dx: 0, dy: -20 },\n      gridCount: 3,\n      transition: TransitionEffect\n        .asymmetric(TransitionEffect.OPACITY\n          .animation({ duration: 1000, curve: Curve.Sharp })\n          .combine(TransitionEffect\n            .scale({ x: 1.5, y: 1.5 })\n            .animation({ duration: 1000, curve: Curve.Sharp })\n          ),\n          TransitionEffect.OPACITY.animation({ duration: 100, curve: Curve.Smooth })\n            .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })\n              .animation({ duration: 100, curve: Curve.Smooth })\n            )\n        ),\n      buttons: [{\n        enabled: true,\n        defaultFocus: true,\n        style: DialogButtonStyle.HIGHLIGHT,\n        value: '退出',\n        action: () => {\n          console.info('Callback when the second button is clicked.');\n          this.pageInfo.pop();\n        }\n      }]\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置路由进行页面间跳转，页面路由配置详细可查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation",
        children: "组件导航(Navigation) (推荐)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引入ar-engine",
      children: "引入AR Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考AR物体摆放章节的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld#%E5%BC%95%E5%85%A5ar-engine",
        children: "引入AR Engine"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建ar会话",
      children: "创建AR会话"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建AR会话并配置ARType为图像跟踪。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARSession *arSession = nullptr;\n// 创建AR会话。\nHMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);\nAREngine_ARConfig *arConfig = nullptr;\n// 创建AR会话配置器。\nHMS_AREngine_ARConfig_Create(arSession, &arConfig);\n// 设置ARType为ARENGINE_TYPE_IMAGE\nHMS_AREngine_ARConfig_SetARType(arSession, arConfig, ARENGINE_TYPE_IMAGE);\n// 配置器设置给AR会话。\nHMS_AREngine_ARSession_Configure(arSession, arConfig);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建跟踪图像数据库并添加图像",
      children: "创建跟踪图像数据库并添加图像"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_create",
        children: "HMS_AREngine_ARAugmentedImageDatabase_Create"
      }), "函数，创建跟踪图像数据库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建跟踪图像数据库\nAREngine_ARAugmentedImageDatabase *mDataBase = nullptr;\nHMS_AREngine_ARAugmentedImageDatabase_Create(&mDataBase);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_addimage",
        children: "HMS_AREngine_ARAugmentedImageDatabase_AddImage"
      }), "函数，添加图像到数据库，将添加失败的结果保存在reason中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 添加图像到数据库\nAREngine_ARAddAugmentedImageReason reason = ARENGINE_ADD_AUGMENTED_IMAGE_REASON_NONE;\nAREngine_ARAugmentedImageSource image;\nuint32_t outputIndex = 0;\n// 通过输入的图片构造image,具体可参考示例代码\nauto addRet = HMS_AREngine_ARAugmentedImageDatabase_AddImage(mDataBase, &image, &outputIndex, &reason);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "识别环境中的可跟踪图像",
      children: "识别环境中的可跟踪图像"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getalltrackables",
        children: "HMS_AREngine_ARSession_GetAllTrackables"
      }), "函数，检测当前环境中的所有跟踪图像，并将结果存放在augmentList中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARTrackableList *augmentList = nullptr;\nHMS_AREngine_ARTrackableList_Create(arSession, &augmentList);\nHMS_AREngine_ARSession_GetAllTrackables(arSession, ARENGINE_TRACKABLE_AUGMENTED_IMAGE, augmentList);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取环境中的可跟踪图像数量",
      children: "获取环境中的可跟踪图像数量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_getsize",
        children: "HMS_AREngine_ARTrackableList_GetSize"
      }), "函数获取平面数量，结果存放在augmentSize中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t augmentSize = 0;\nHMS_AREngine_ARTrackableList_GetSize(arSession, augmentList, &augmentSize);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用环境中，可能存在0个、1个或多个可跟踪图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当augmentSize等于0时，表示当前环境中不存在可跟踪图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当augmentSize等于1时，表示当前环境中仅存在1个可跟踪图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当augmentSize大于1时，表示当前环境中存在多个可跟踪图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取跟踪图像示例",
      children: "获取跟踪图像示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当存在1个或多个跟踪图像时，可以依次遍历augmentList获取所有跟踪图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (int i = 0; i < augmentSize; ++i) {\n    // 遍历所有可跟踪对象，根据应用进行处理。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于第i个跟踪图像，创建并获取跟踪对象，并将其转化为跟踪图像对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimage",
        children: "AREngine_ARAugmentedImage"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARTrackable *augment = nullptr;\nHMS_AREngine_ARTrackableList_AcquireItem(arSession, augmentList, i, &augment);\nAREngine_ARAugmentedImage *arImage = reinterpret_cast<AREngine_ARAugmentedImage*>(augment);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取跟踪图像中心点在世界坐标系中的位姿信息",
      children: "获取跟踪图像中心点在世界坐标系中的位姿信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getcenterpose",
        children: "HMS_AREngine_ARAugmentedImage_GetCenterPose"
      }), "函数，获取跟踪图像中心点的位姿信息，位姿信息可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-pose",
        children: "获取设备位姿"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARPose *imagePose = nullptr;\nHMS_AREngine_ARPose_Create(arSession, nullptr, 0, &imagePose);\nHMS_AREngine_ARAugmentedImage_GetCenterPose(arSession, arImage, imagePose);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取跟踪图像的宽度",
      children: "获取跟踪图像的宽度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendx",
        children: "HMS_AREngine_ARAugmentedImage_GetExtendX"
      }), "函数，获取图像的中心点为坐标原点，物理图像的宽度（单位为米），得到X轴上的估计值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float extent_x;\nHMS_AREngine_ARAugmentedImage_GetExtendX(arSession, arImage, &extent_x);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendz",
        children: "HMS_AREngine_ARAugmentedImage_GetExtendZ"
      }), "函数，获取图像的中心点为坐标原点，物理图像的宽度（单位为米），得到Z轴上的估计值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float extent_z;\nHMS_AREngine_ARAugmentedImage_GetExtendZ(arSession, arImage, &extent_z);\n"
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