"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["747922"], {
544371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_guide_arengine_image_track_arengine_image_track_md_c2c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-guide-arengine-image-track-arengine-image-track-md-c2c.json
var site_docs_ar_engine_kit_guide_arengine_guide_arengine_image_track_arengine_image_track_md_c2c_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-guide/arengine-image-track/arengine-image-track","title":"图像跟踪（ArkTS）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-guide/arengine-image-track/arengine-image-track.md","sourceDirName":"ar-engine-kit-guide/arengine-guide/arengine-image-track","slug":"/ar-engine-kit-guide/arengine-guide/arengine-image-track/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-image-track/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"图像跟踪（ArkTS）","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-image-track","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取网格扫描信息（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-mesh/"},"next":{"title":"物体摆放（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-arworld/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-guide/arengine-image-track/arengine-image-track.md


const frontMatter = {
	title: '图像跟踪（ArkTS）',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-image-track',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '图像跟踪（ArkTS）';

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
  "value": "创建UI页面",
  "id": "创建ui页面",
  "level": 3
}, {
  "value": "ARImage页面",
  "id": "arimage页面",
  "level": 3
}, {
  "value": "ARImageByAdd页面",
  "id": "arimagebyadd页面",
  "level": 3
}, {
  "value": "ARImageByDatabase页面",
  "id": "arimagebydatabase页面",
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
        id: "图像跟踪arkts",
        children: "图像跟踪（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节给出了关键开发步骤，完整代码可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/arengine_samplecode_clientdemo_arkts",
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
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arfeaturetype",
        children: "ARENGINE_FEATURE_TYPE_IMAGE"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图像识别主要依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabase",
        children: "ARAugmentedImageDatabase"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arimage",
        children: "ARImage"
      }), "，以下接口为图像识别相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine",
        children: "AR Engine API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arenginecreatearaugmentedimagedatabase",
              children: "arEngine.createARAugmentedImageDatabase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个增强型图像数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabasedeserialize",
              children: "ARAugmentedImageDatabase.deserialize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将增强图像数据库缓冲区反序列化为一个新的增强图像数据库对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabaseserialize",
              children: "ARAugmentedImageDatabase.serialize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将增强图像数据库序列化为一个缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabaseaddimage",
              children: "ARAugmentedImageDatabase.addImage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将图像添加到图像数据库，并输出对应图像的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabasegetimagecount",
              children: "ARAugmentedImageDatabase.getImageCount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像数据库中图像的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabasegetcapacity",
              children: "ARAugmentedImageDatabase.getCapacity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以添加的最大图像数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabasegetimageaddmode",
              children: "ARAugmentedImageDatabase.getImageAddMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片添加模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabasesetimageaddmode",
              children: "ARAugmentedImageDatabase.setImageAddMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片添加模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabaserelease",
              children: "ARAugmentedImageDatabase.release"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放增强图像数据库对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimagedatabase",
              children: "ARAugmentedImageDatabase"
            }), "占用的内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arimagerelease",
              children: "ARImage.release"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放相机视频流帧对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arimage",
              children: "ARImage"
            }), "占用的内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#araugmentedimage",
              children: "ARAugmentedImage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示可被追踪的增强图像对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AR Engine仅输出识别到的平面数据。为便于用户观察，可使用AGP（Ark Graphics Platform）渲染引擎或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "绘制识别的平面。关于AGP的介绍可以查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-3d/arkgraphics3d-overview",
        children: "ArkGraphics 3D简介"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/graphic_graphic_3d",
        children: "AGP引擎"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于使用ArkTS的任何AR应用，首先需要创建一个AR会话", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontext",
        children: "ARViewContext"
      }), "，用于管理AR Engine的系统状态。AR会话", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontext",
        children: "ARViewContext"
      }), "的创建可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-arsession",
        children: "管理AR会话"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建ui页面",
      children: "创建UI页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先创建一个初始UI页面“ARImage.ets”，设置两个按钮，用于实现“添加本地图片”和“读取本地数据库”两个功能，分别命名“ARImageByAdd.ets”和“ARImageByDatabase.ets”。并配置路由进行页面间跳转，页面路由配置详细可查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation",
        children: "组件导航(Navigation) (推荐)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arimage页面",
      children: "ARImage页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ARImage.ets\n// 导入图片模块\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n@Builder\nexport function ARImageBuilder(): void {\n  ARImage();\n}\n\n@Component\nstruct ARImage {\n  pageInfo: NavPathStack = new NavPathStack();\n\n  // UI配置\n  build(): void {\n    NavDestination() {\n      Column() {\n        Button('选择本地图片', { type: ButtonType.Normal, stateEffect: true })\n          .borderRadius(8)\n          .width('50%')\n          .height('5%')\n          .onClick(async () => {\n            await this.chooseImageToTrack();\n          })\n\n        Button('加载本地数据库', { type: ButtonType.Normal, stateEffect: true })\n          .borderRadius(8)\n          .width('50%')\n          .height('5%')\n          .onClick(() => {\n            this.loadDatabaseToTrack();\n          })\n      }\n      .justifyContent(FlexAlign.SpaceEvenly)\n      .width('100%')\n      .height('100%')\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  // 选择本地图片模式\n  private async chooseImageToTrack(): Promise<void> {\n    try {\n      let photoOption: photoAccessHelper.PhotoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n      photoOption.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n      photoOption.maxSelectNumber = 50; // Default\n      photoOption.isEditSupported = false;\n      let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n\n      await photoPicker.select(photoOption).then((photoResult) => {\n        if (photoResult.photoUris.length > 0 && photoResult.photoUris[0].length > 0) {\n          this.pageInfo.pushDestinationByName('ARImageByAdd', photoResult.photoUris).catch((error: BusinessError) => {\n            console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);\n          });\n        }\n      }).catch((error: BusinessError) => {\n        // ...\n      })\n    } catch (error) {\n      console.error(`Failed to select by photoPicker. Code: ${error.code}.`);\n    }\n  }\n\n  // 加载本地数据库模式\n  private loadDatabaseToTrack(): void {\n    this.pageInfo.pushDestinationByName('ARImageByDatabase', null).catch((error: BusinessError) => {\n      console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arimagebyadd页面",
      children: "ARImageByAdd页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载本地图片模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择本地图片进行图像识别能力所需要导入的模块如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByAdd.ets\n\nimport { arEngine, ARView, arViewController } from '@kit.AREngine';\nimport { Node, Scene } from '@kit.ArkGraphics3D';\nimport { collections } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { image } from '@kit.ImageKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置页面路由信息，定义数据库dataBase。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByAdd.ets\n\n// 页面路由\n@Builder\nexport function ARImageByAddBuilder(): void {\n  ARImageByAdd();\n}\n\nlet dataBase: arEngine.ARAugmentedImageDatabase;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备界面上显示图片添加情况，无可用图片则弹窗提示，加载AR场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByAdd.ets\n\n@Component\nstruct ARImageByAdd {\n  pageInfo: NavPathStack = new NavPathStack();\n  private imagePathArray: string[] = [];\n  private isProgramExits: boolean = false;\n  private isSaveDatabase: boolean = false;\n  @State arContext?: arViewController.ARViewContext = undefined;\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n  @State totalImageCounts: number = this.imagePathArray.length;\n  @State addFailedImageCounts: number = 0;\n  @State succeedImageCounts: number = 0;\n  @State addFailedMessage: string[] = [];\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        Column() {\n          Text(`添加图片进度：${this.succeedImageCounts + this.addFailedImageCounts} / ${this.totalImageCounts}`)\n          Text(`添加成功数量：${this.succeedImageCounts}`)\n          Text(`添加失败数量：${this.addFailedImageCounts}`)\n\n          if (this.addFailedMessage) {\n            ForEach(this.addFailedMessage, (item: string) => {\n              Text(`${item}`)\n                .fontColor(Color.Red)\n            })\n          }\n        }\n        .visibility(this.addFailedImageCounts + this.succeedImageCounts < this.totalImageCounts ? Visibility.Visible :\n        Visibility.None)\n        .foregroundColor(Color.Red)\n        .zIndex(1)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n\n        if (this.arContext) {\n          ARView({ context: this.arContext })\n            .height('100%')\n            .width('100%')\n            .alignRules({\n              center: { anchor: '__container__', align: VerticalAlign.Center },\n              middle: { anchor: '__container__', align: HorizontalAlign.Center }\n            })\n        }\n      }\n    }\n    // 创建数据库，加载本地缓存，初始化AR场景，创建AR会话\n    .onAppear(async () => {\n      await arEngine.createARAugmentedImageDatabase()\n        .then(async (arDataBase) => {\n          dataBase = arDataBase;\n\n          await this.addImage(dataBase).then(() => {\n            if (this.addFailedImageCounts === this.totalImageCounts) {\n              this.ShowDialog('请添加有效图片。');\n            }\n            this.initARView();\n          })\n        })\n        .catch((error: BusinessError) => {\n          console.error(`Failed to create AR Augmented Database.Code is ${error.code}, message is ${error.message}`);\n        });\n    })\n    .onWillDisappear(async () => {\n      await this.stopARView();\n    })\n    .onShown(() => {\n      this.resumeARView();\n    })\n    .onHidden(() => {\n      this.pauseARView();\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n      this.imagePathArray = context.pathInfo.param as string[];\n      this.totalImageCounts = this.imagePathArray.length;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  // 初始化AR场景，创建AR会话\n  private initARView(): void {\n    Scene.load().then((scene: Scene) => {\n      let viewContext: arViewController.ARViewContext = new arViewController.ARViewContext();\n      viewContext.scene = scene;\n      viewContext.callback = new ARViewCallbackImpl();\n      viewContext.config = {\n        type: arEngine.ARType.IMAGE,  // 使用图像跟踪模式\n        planeFindingMode: arEngine.ARPlaneFindingMode.HORIZONTAL_AND_VERTICAL,\n        powerMode: arEngine.ARPowerMode.NORMAL,\n        semanticMode: arEngine.ARSemanticMode.NONE,\n        poseMode: arEngine.ARPoseMode.GRAVITY,\n        depthMode: arEngine.ARDepthMode.AUTOMATIC,\n        meshMode: arEngine.ARMeshMode.DISABLED,\n        focusMode: arEngine.ARFocusMode.AUTO\n      }\n      viewContext.init().then(() => {\n        this.arContext = viewContext;\n        console.info('Succeeded in initializing ARView.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to init ARView. Code is ${err.code}, message is ${err.message}.`);\n      })\n    })\n  }\n\n  private async stopARView(): Promise<void> {\n    if (!this.arContext) {\n      return;\n    }\n    try {\n      this.isProgramExits = true;\n      if (this.isSaveDatabase) {\n        SaveBufferToLocal(dataBase, this.context);\n      }\n\n      await dataBase.release();\n      await this.arContext?.destroy();\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to stop context. Code is ${err.code}, message is ${err.message}`);\n    }\n  }\n\n  private resumeARView(): void {\n    // ...\n  }\n  private pauseARView(): void {\n    // ...\n  }\n\n  // 异步执行添加图片的任务\n  async addImage(dataBase: arEngine.ARAugmentedImageDatabase): Promise<void> {\n    for (let index = 0; index < this.totalImageCounts; index++) {\n      const imagePath: string = this.imagePathArray[index];\n      let file: fileIo.File;\n      try {\n          file = fileIo.openSync(imagePath, fileIo.OpenMode.READ_ONLY);\n      } catch (error) {\n        const err: BusinessError = error as BusinessError;\n        console.error(`Failed to open image. Code is ${err.code}, message is ${err.message}`);\n        this.addFailedImageCounts += 1;\n        continue\n      }\n      let imageName: string = file.name;\n      const imageSourceApi: image.ImageSource = image.createImageSource(file.fd);\n      try {\n        fileIo.closeSync(file);\n      } catch (error) {\n        const err: BusinessError = error as BusinessError;\n        console.error(`Failed to closeSync. Code: ${err.code}.`);\n        this.addFailedImageCounts += 1;\n        continue;\n      }\n      const imageInfo: image.ImageInfo = imageSourceApi.getImageInfoSync(0);\n      if (!imageInfo) {\n        console.error('Failed to obtain the image pixel map information.');\n        this.addFailedImageCounts += 1;\n        continue;\n      }\n      const opts: image.DecodingOptions = {\n        editable: true,\n        desiredPixelFormat: image.PixelMapFormat.RGBA_8888,\n        desiredSize: { width: imageInfo.size.width, height: imageInfo.size.height }\n      }\n      let pixelMap: image.PixelMap = imageSourceApi.createPixelMapSync(opts);\n\n      if (this.isProgramExits) {\n        break;\n      }\n\n      await dataBase.addImage(imageName, pixelMap, 10).then((result: arEngine.ARAddAugmentedImageResult) => {\n        console.info(`The imageResult: ${result.index} ${result.stateReason}.`);\n        if (result.stateReason !== arEngine.ARAddAugmentedImageReason.NONE) {\n          this.addFailedImageCounts += 1;\n          this.addFailedMessage.push('失败图片名：' + imageName + '失败原因：' + errcode.get(result.stateReason) + ' ');\n        } else {\n          this.succeedImageCounts += 1;\n        }\n      }).catch(() => {\n        this.addFailedImageCounts += 1;\n      })\n\n      await imageSourceApi.release();\n      await pixelMap.release();\n    }\n  }\n\n  // 自定义的弹窗提示\n  ShowDialog(msg: string): void {\n    this.getUIContext().showAlertDialog(\n      {\n        title: '警告',\n        message: msg,\n        autoCancel: true,\n        alignment: DialogAlignment.Center,\n        offset: { dx: 0, dy: -20 },\n        gridCount: 3,\n        transition: TransitionEffect\n          .asymmetric(TransitionEffect.OPACITY\n            .animation({ duration: 1000, curve: Curve.Sharp })\n            .combine(TransitionEffect\n              .scale({ x: 1.5, y: 1.5 })\n              .animation({ duration: 1000, curve: Curve.Sharp })\n            ),\n          TransitionEffect.OPACITY\n            .animation({ duration: 100, curve: Curve.Smooth })\n            .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })\n              .animation({ duration: 100, curve: Curve.Smooth })\n            )\n          ),\n        buttons: [{\n          enabled: true,\n          defaultFocus: true,\n          style: DialogButtonStyle.HIGHLIGHT,\n          value: '退出',\n          action: () => {\n            console.info('Callback when the second button is clicked.');\n            this.pageInfo.pop();\n            return;\n          }\n        }]\n      })\n    }\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出应用时，缓存图片特征到本地。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByAdd.ets\n\nasync function SaveBufferToLocal(dataBase: arEngine.ARAugmentedImageDatabase, context: Context): Promise<void> {\n  let filesDir: string = context.filesDir;\n  let file: fileIo.File;\n  try {\n    file = fileIo.openSync(filesDir + '/test.bin', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);\n  } catch (e) {\n      // ...\n  }\n  let buf: ArrayBuffer;\n  try {\n    buf = await dataBase.serialize()\n  } catch (error) {\n    // ...\n    return;\n  }\n  let writeLen: number = fileIo.writeSync(file.fd, buf);\n  console.info(`The length of buffer is: ${writeLen}`);\n  try {\n    fileIo.closeSync(file);\n  } catch (error) {\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallback",
            children: "ARViewCallback"
          }), "，使用其中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallbackonframeupdate",
            children: "onFrameUpdate"
          }), "方法进行帧数据更新，识别到目标图像则打印日志。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByAdd.ets\n\nclass ARViewCallbackImpl extends arViewController.ARViewCallback {\n  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): void {\n    if (!ctx.session || !dataBase) {\n      return;\n    }\n\n    let session: arEngine.ARSession = ctx.session; // 获取AR会话\n\n    try {\n      let imageNumber: number = dataBase.getImageCount();\n      console.info(`The number of images in the database is ${imageNumber}.`);\n\n      let imageCapacity: number = dataBase.getCapacity();\n      console.info(`The dataBase image capacity is: ${imageCapacity}.`);\n\n      let trackable: arEngine.ARTrackable[] = session.getAllTrackables(arEngine.ARTrackableType.AUGMENTED_IMAGE);\n\n      console.info(`The image trackable size: ${trackable.length}.`);\n      for (let i = 0; i < trackable.length; ++i) {\n        if (trackable[i].type === arEngine.ARTrackableType.AUGMENTED_IMAGE) {\n          let arimage: arEngine.ARAugmentedImage = trackable[i] as arEngine.ARAugmentedImage;\n          if (arEngine.ARTrackingState.TRACKING !== arimage.state) {\n            continue;\n          }\n          let centerPose: arEngine.ARPose = arimage.getPose();\n          console.info(`The image width: ${arimage.extendX}, height: ${arimage.extendZ}, pose: ${centerPose.getMatrix()}.`);  // 打印目标图像的信息\n        }\n      }\n\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to got image count. Code is ${err.code}, message is ${err.message}`);\n    }\n  }\n}\n\n// 图像添加失败原因\nconst errcode: collections.Map<number, string> = new collections.Map<number, string>([\n  [0, 'success'],\n  [1, 'size not match'],\n  [2, 'too bright or too dark'],\n  [3, 'image color is relatively single'],\n  [4, 'other error']\n])\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arimagebydatabase页面",
      children: "ARImageByDatabase页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载本地数据库模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择本地数据库进行图像识别能力所需要导入的模块如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByDatabase.ets\n\nimport { arEngine, ARView, arViewController } from '@kit.AREngine';\nimport { Node, Scene } from '@kit.ArkGraphics3D';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo, ReadOptions } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置页面路由信息，定义数据库dataBase。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByDatabase.ets\n\n// 页面路由\n@Builder\nexport function ARImageByDatabaseBuilder(): void {\n  ARImageByDatabase();\n}\n\nlet dataBase: arEngine.ARAugmentedImageDatabase;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载AR场景，加载图像数据库，无可用数据库则弹窗提示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByDatabase.ets\n\n@Component\nstruct ARImageByDatabase {\n  pageInfo: NavPathStack = new NavPathStack();\n  @State arContext?: arViewController.ARViewContext = undefined;\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n\n  build() {\n    NavDestination() {\n      RelativeContainer() {\n        if (this.arContext) {\n          ARView({ context: this.arContext })\n            .height('100%')\n            .width('100%')\n            .alignRules({\n              center: { anchor: '__container__', align: VerticalAlign.Center },\n              middle: { anchor: '__container__', align: HorizontalAlign.Center }\n            })\n        }\n      }\n    }\n    // 创建数据库，加载本地缓存，初始化AR场景，创建AR会话\n    .onAppear(() => {\n      arEngine.createARAugmentedImageDatabase()\n        .then((arDataBase) => {\n          dataBase = arDataBase;\n\n          try {\n            let databaseBuffer: ArrayBuffer = ReadBuffer(this.context);\n            dataBase.deserialize(databaseBuffer).then(() => {\n              this.initARView();\n            })\n          } catch (error) {\n            const err: BusinessError = error as BusinessError;\n            console.error(`Failed to init context. Code is ${err.code}, message is ${err.message}.`);\n            this.ShowDialog('请添加有效图片。');\n          }\n        })\n        .catch((error: BusinessError) => {\n          console.error(`Failed to create AR Augmented Database.Code is ${error.code}, message is ${error.message}`);\n        });\n    })\n    .onWillDisappear(async () => {\n      await this.stopARView();\n    })\n    .onShown(() => {\n      this.resumeARView();\n    })\n    .onHidden(() => {\n      this.pauseARView();\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  // 初始化AR场景，创建AR会话\n  private initARView(): void {\n    Scene.load().then((scene: Scene) => {\n      let context: arViewController.ARViewContext = new arViewController.ARViewContext();\n      context.scene = scene;\n      context.callback = new ARViewCallbackImpl();\n      context.config = {\n        type: arEngine.ARType.IMAGE,  // 使用图像跟踪模式\n        planeFindingMode: arEngine.ARPlaneFindingMode.HORIZONTAL_AND_VERTICAL,\n        powerMode: arEngine.ARPowerMode.NORMAL,\n        semanticMode: arEngine.ARSemanticMode.NONE,\n        poseMode: arEngine.ARPoseMode.GRAVITY,\n        depthMode: arEngine.ARDepthMode.AUTOMATIC,\n        meshMode: arEngine.ARMeshMode.ENABLE\n      }\n      context.init().then(() => {\n        this.arContext = context;\n        console.info('Succeeded in initializing ARView.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to init context. Code is ${err.code}, message is ${err.message}.`);\n      })\n    })\n  }\n\n  private async stopARView(): Promise<void> {\n    if (!this.arContext) {\n      return;\n    }\n    try {\n      await dataBase.release();\n      await this.arContext?.destroy();\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to stop context. Code is ${err.code}, message is ${err.message}`);\n    }\n  }\n\n  private resumeARView(): void {\n    // ...\n  }\n  private pauseARView(): void {\n    // ...\n  }\n\n  // 自定义的弹窗提示\n  ShowDialog(msg: string): void {\n    this.getUIContext().showAlertDialog(\n      {\n        title: '警告',\n        message: msg,\n        autoCancel: true,\n        alignment: DialogAlignment.Center,\n        offset: { dx: 0, dy: -20 },\n        gridCount: 3,\n        transition: TransitionEffect\n          .asymmetric(TransitionEffect.OPACITY\n            .animation({ duration: 1000, curve: Curve.Sharp })\n            .combine(TransitionEffect\n              .scale({ x: 1.5, y: 1.5 })\n              .animation({ duration: 1000, curve: Curve.Sharp })\n            ),\n          TransitionEffect.OPACITY\n            .animation({ duration: 100, curve: Curve.Smooth })\n            .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })\n              .animation({ duration: 100, curve: Curve.Smooth })\n            )\n          ),\n        buttons: [{\n          enabled: true,\n          defaultFocus: true,\n          style: DialogButtonStyle.HIGHLIGHT,\n          value: '退出',\n          action: () => {\n            console.info('Callback when the second button is clicked.');\n            this.pageInfo.pop();\n            return;\n          }\n        }]\n      })\n    }\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "读取本地数据库缓存文件的方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByDatabase.ets\n\nfunction ReadBuffer(context: Context): ArrayBuffer {\n  let filesDir: string = context.filesDir;\n  let srcFile: fileIo.File;\n  try {\n    srcFile = fileIo.openSync(filesDir + '/test.bin', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n    const fileStat: fileIo.Stat = fileIo.statSync(srcFile.fd);\n    // 读取源文件的内容并写入目标文件\n    let readSize: number = 0;\n    let buf: ArrayBuffer = new ArrayBuffer(fileStat.size);\n    let readOptions: ReadOptions = {\n      offset: readSize,\n      length: fileStat.size\n    }\n    let readLen: number = fileIo.readSync(srcFile.fd, buf, readOptions);\n    console.info(`The length of buffer is: ${readLen}.`);\n    fileIo.closeSync(srcFile);\n    return buf;\n  } catch (e) {\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallback",
            children: "ARViewCallback"
          }), "，使用其中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallbackonframeupdate",
            children: "onFrameUpdate"
          }), "方法进行帧数据更新，识别到目标图像则打印日志。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ARImageByDatabase.ets\n\nclass ARViewCallbackImpl extends arViewController.ARViewCallback {\n  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): void {\n    if (!ctx.session || !dataBase) {\n      return;\n    }\n\n    let session: arEngine.ARSession = ctx.session;\n\n    try {\n      let imageNumber: number = dataBase.getImageCount();\n      console.info(`The number of images in the database is ${imageNumber}.`);\n\n      let imageCapacity: number = dataBase.getCapacity();\n      console.info(`The dataBase image capacity = ${imageCapacity}.`);\n\n      let trackable: arEngine.ARTrackable[] = session.getAllTrackables(arEngine.ARTrackableType.AUGMENTED_IMAGE);\n\n      console.info(`The image trackable size: ${trackable.length}.`);\n      for (let i = 0; i < trackable.length; ++i) {\n        if (trackable[i].type === arEngine.ARTrackableType.AUGMENTED_IMAGE) {\n          let arimage: arEngine.ARAugmentedImage = trackable[i] as arEngine.ARAugmentedImage;\n          if (arEngine.ARTrackingState.TRACKING !== arimage.state) {\n            continue;\n          }\n          let centerPose: arEngine.ARPose = arimage.getPose();\n          console.info(`The image width: ${arimage.extendX}, height: ${arimage.extendZ}, pose: ${centerPose.getMatrix()}.`);  // 打印目标图像的信息\n        }\n      }\n\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to got image count. Code is ${err.code}, message is ${err.message}.`);\n    }\n  }\n}\n"
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