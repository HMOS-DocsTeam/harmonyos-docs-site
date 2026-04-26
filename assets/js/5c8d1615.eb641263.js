"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["993569"], {
199607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_service_servicecollaboration_dev_guides_servicecollaboration_dev_guides_md_5c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-service-collaboration-kit-guide-servicecollaboration-service-servicecollaboration-dev-guides-servicecollaboration-dev-guides-md-5c8.json
var site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_service_servicecollaboration_dev_guides_servicecollaboration_dev_guides_md_5c8_namespaceObject = JSON.parse('{"id":"system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-dev-guides/servicecollaboration-dev-guides","title":"跨设备互通开发指导","description":"跨设备互通提供相机、扫描以及图库（图片和视频）的跨设备调用能力，例如：平板或2in1设备可以调用手机的相机、扫描、图库等功能。从API 6.1.0(23)开始，TV、手机、平板或2in1设备可调用具备如下能力的远程设备：支持拍照、扫描及图库（图片与视频）能力的手机和平板，支持图库（图片与视频）能力的2in1设备。","source":"@site/docs/system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-dev-guides/servicecollaboration-dev-guides.md","sourceDirName":"system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-dev-guides","slug":"/system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-dev-guides/","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-dev-guides/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"跨设备互通开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-dev-guides","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨设备互通特性简介","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-service-overview/"},"next":{"title":"跨设备互通NDK特性概述","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-description/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-dev-guides/servicecollaboration-dev-guides.md


const frontMatter = {
	title: '跨设备互通开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-dev-guides',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '跨设备互通开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
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
  "value": "跨设备互通完整示例",
  "id": "跨设备互通完整示例",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "跨设备互通开发指导",
        children: "跨设备互通开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨设备互通提供相机、扫描以及图库（图片和视频）的跨设备调用能力，例如：平板或2in1设备可以调用手机的相机、扫描、图库等功能。从API 6.1.0(23)开始，TV、手机、平板或2in1设备可调用具备如下能力的远程设备：支持拍照、扫描及图库（图片与视频）能力的手机和平板，支持图库（图片与视频）能力的2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您通过此能力实现跨设备交互，可以使用其他设备的相机、扫描和图库功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需同时满足以下条件，才能使用该功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设备限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "本端设备：HarmonyOS版本为HarmonyOS NEXT及以上的平板或2in1设备。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "远端设备：HarmonyOS版本为HarmonyOS NEXT及以上、具有相机能力的手机或平板设备。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "双端设备需要登录同一华为账号。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "跨设备互通API支持根据特定调用策略调用设备。调用策略：2in1设备可以调用平板和手机，平板可以调用手机，并且在6.1.0(23)之后支持TV、手机、平板或2in1设备调用支持拍照、扫描、选择图库中图片与视频能力的手机，支持拍照、扫描、选择图库中图片与视频能力的平板，以及支持选择图库中图片与视频能力的2in1设备。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "本端和远端设备需要打开WLAN和蓝牙开关。条件允许时，推荐本端和远端设备接入同一个局域网，可提升唤醒相机的速度。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若在跨设备调用视频选择器时遇到资源加载异常，建议在调用前确认本端和远端的设备调用能力是否匹配、系统状态是否正常，并在稳定环境下重试操作。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发具体功能前，请先查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice",
        children: "参考文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#createcollaborationservicemenuitems",
              children: "createCollaborationServiceMenuItems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备列表选择器，用于获取组网内具有对应跨设备互通能力的设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#collaborationservicestatedialog",
              children: "CollaborationServiceStateDialog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹窗组件，用于提示对端业务状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { createCollaborationServiceMenuItems, CollaborationServiceStateDialog, CollaborationServiceFilter } from '@kit.ServiceCollaborationKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#createcollaborationservicemenuitems",
            children: "createCollaborationServiceMenuItems"
          }), "是设备列表菜单项模块，传入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#collaborationservicefilter",
            children: "CollaborationServiceFilter"
          }), "的能力枚举值；", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#collaborationservicestatedialog",
            children: "CollaborationServiceStateDialog"
          }), "是状态提示框模块。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Menu中调用createCollaborationServiceMenuItems添加设备列表选择器，在菜单项内显示设备列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(508607)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#createcollaborationservicemenuitems",
            children: "createCollaborationServiceMenuItems"
          }), "前，需了解："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["该方法需要在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
              children: "Menu"
            }), "组件内调用。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["该方法是自定义构建函数，您在使用前需要先了解", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
              children: "@Builder"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["传入Array类型的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#collaborationservicefilter",
            children: "CollaborationServiceFilter"
          }), "枚举值即可使用对应能力，目前支持ALL、TAKE_PHOTO、SCAN_DOCUMENT、IMAGE_PICKER、VIDEO_PICKER和IMAGE_VIDEO_PICKER。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ALL为预留值，匹配跨端拍照、文档扫描和图库选择器，功能将在后续拓展，TAKE_PHOTO匹配跨设备拍照能力，SCAN_DOCUMENT匹配跨设备扫描能力，IMAGE_PICKER匹配跨设备图库能力，VIDEO_PICKER匹配视频选择器，IMAGE_VIDEO_PICKER匹配图片和视频选择器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\nMyTestMenu() {\n  Menu() {\n    createCollaborationServiceMenuItems([CollaborationServiceFilter.ALL])\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在build方法中添加弹窗组件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#collaborationservicestatedialog",
            children: "CollaborationServiceStateDialog"
          }), "，用于提示远端相机拍摄状态和回传数据，需要实现其中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#onstate",
            children: "onState"
          }), "方法。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#collaborationservicestatedialog",
            children: "CollaborationServiceStateDialog"
          }), "是全局的提示框，不会对原有布局产生影响。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为弹窗组件绑定和实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#onstate",
            children: "onState"
          }), "方法，用于接收和处理照片数据。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["回调函数的传入参数stateCode是完成状态，buffer是回传的数据内容，可通过状态和数据内容结合自身的业务逻辑实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#onstate",
            children: "onState"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CollaborationServiceStateDialog({\n  onState: (stateCode: number, bufferType: string, buffer: ArrayBuffer):void => this.doInsertPicture(stateCode, bufferType, buffer)\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨设备互通完整示例",
      children: "跨设备互通完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过以下示例，您可以完成一次调用对端相机拍摄的操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  createCollaborationServiceMenuItems,\n  CollaborationServiceStateDialog,\n  CollaborationServiceFilter\n} from '@kit.ServiceCollaborationKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State picture: PixelMap | undefined = undefined;\n\n  @Builder\n  MyTestMenu() {\n    Menu() {\n      createCollaborationServiceMenuItems([CollaborationServiceFilter.ALL])\n    }\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      CollaborationServiceStateDialog({\n        onState: (stateCode: number, bufferType: string, buffer: ArrayBuffer): void => this.doInsertPicture(stateCode, bufferType, buffer)\n      })\n      Button('使用远端设备进行拍照')\n        .type(ButtonType.Normal)\n        .borderRadius(10)\n        .bindMenu(this.MyTestMenu)\n\n      if (this.picture) {\n        Image(this.picture)\n          .borderStyle(BorderStyle.Dotted)\n          .borderWidth(1)\n          .objectFit(ImageFit.Contain)\n          .height('80%')\n          .onComplete((event) => {\n            if (event != undefined) {\n              hilog.info(0, \"MEMOMOCK\", \"onComplete \" + event.loadingStatus)\n            }\n          })\n      }\n    }\n    .padding(20)\n    .width('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n\n  doInsertPicture(stateCode: number, bufferType: string, buffer: ArrayBuffer): void {\n    if (stateCode != 0) {\n      return\n    }\n    if (bufferType == \"general.image\") {\n      let imageSource = image.createImageSource(buffer)\n      imageSource.createPixelMap().then((pixelMap) => {\n        this.picture = pixelMap;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/service-collaboration-kit-sample-code-arkts",
        children: "跨设备互通"
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
508607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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