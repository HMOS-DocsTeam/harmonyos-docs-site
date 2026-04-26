"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["628050"], {
75747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_uicontext_component_snapshot_arkts_uicontext_component_snapshot_md_d82_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-system-scenarization-capability-arkts-uicontext-component-snapshot-arkts-uicontext-component-snapshot-md-d82.json
var site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_uicontext_component_snapshot_arkts_uicontext_component_snapshot_md_d82_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-uicontext-component-snapshot/arkts-uicontext-component-snapshot","title":"使用组件截图（ComponentSnapshot）","description":"能力介绍","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-uicontext-component-snapshot/arkts-uicontext-component-snapshot.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-uicontext-component-snapshot","slug":"/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-uicontext-component-snapshot/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-uicontext-component-snapshot/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用组件截图（ComponentSnapshot）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-uicontext-component-snapshot","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用UI上下文接口操作界面（UIContext）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface/"},"next":{"title":"感知组件可见性","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-uicontext-component-snapshot/arkts-uicontext-component-snapshot.md


const frontMatter = {
	title: '使用组件截图（ComponentSnapshot）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-uicontext-component-snapshot',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用组件截图（ComponentSnapshot）';

const assets = {

};



const toc = [{
  "value": "能力介绍",
  "id": "能力介绍",
  "level": 2
}, {
  "value": "对挂树组件截图",
  "id": "对挂树组件截图",
  "level": 3
}, {
  "value": "对离线组件截图",
  "id": "对离线组件截图",
  "level": 3
}, {
  "value": "典型使用场景",
  "id": "典型使用场景",
  "level": 2
}, {
  "value": "截取长内容（滚动截图）",
  "id": "截取长内容滚动截图",
  "level": 3
}, {
  "value": "封装全局截图接口",
  "id": "封装全局截图接口",
  "level": 3
}, {
  "value": "组件截图最佳实践",
  "id": "组件截图最佳实践",
  "level": 2
}, {
  "value": "合理控制截图时机",
  "id": "合理控制截图时机",
  "level": 3
}, {
  "value": "及时保存和释放位图对象",
  "id": "及时保存和释放位图对象",
  "level": 3
}, {
  "value": "合理控制采样精度",
  "id": "合理控制采样精度",
  "level": 3
}, {
  "value": "使用其他能力对自渲染场景实现截图",
  "id": "使用其他能力对自渲染场景实现截图",
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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用组件截图componentsnapshot",
        children: "使用组件截图（ComponentSnapshot）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力介绍",
      children: "能力介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件截图是将应用内一个组件节点树的渲染结果生成位图（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "）的能力，支持两种方式：一种是对已挂树显示的组件进行截图，另一种是对通过Builder或ComponentContent实现的离线组件进行截图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(427202)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件截图依赖UI上下文，需要在具备明确上下文的环境中调用，因此请优先使用UIContext的getComponentSnapshot接口返回的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentsnapshot/arkts-apis-uicontext-componentsnapshot",
        children: "ComponentSnapshot"
      }), "对象的接口，不建议直接使用从@kit.ArkUI导入的componentSnapshot接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对挂树组件截图",
      children: "对挂树组件截图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对已明确挂树的组件进行截图，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentsnapshot/arkts-apis-uicontext-componentsnapshot#get12-1",
        children: "get"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentsnapshot/arkts-apis-uicontext-componentsnapshot#getsync12",
        children: "getSync"
      }), "实现，传入组件标识（需提前通过.id通用属性配置）以指定组件根节点。系统在通过指定的ID查找待截图组件时，仅遍历已挂树的组件，不对cache或离屏组件进行查找。系统以首个查找到的结果为准，故应用需", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "确保组件标识ID的唯一性"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 15开始，在已知组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuniqueid12",
        children: "getUniqueId"
      }), "的情况下，也可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentsnapshot/arkts-apis-uicontext-componentsnapshot#getwithuniqueid15",
        children: "getWithUniqueId"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentsnapshot/arkts-apis-uicontext-componentsnapshot#getsyncwithuniqueid15",
        children: "getSyncWithUniqueId"
      }), "接口来实现截图，这可以省去查找组件的过程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "截图仅能获取最近一帧的绘制内容。若在组件触发更新的同时调用截图，更新的渲染内容不会被截取，截图将返回前一帧的绘制内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(603446)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尽量避免在使用截图时触发待截图组件的刷新，防止对截图内容的干扰。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对离线组件截图",
      children: "对离线组件截图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["离线组件是指通过Builder或ComponentContent封装的、尚未挂载到树上的组件，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentsnapshot/arkts-apis-uicontext-componentsnapshot#createfrombuilder12-1",
        children: "createFromBuilder"
      }), "来实现。从API version 18开始，也可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentsnapshot/arkts-apis-uicontext-componentsnapshot#createfromcomponent18",
        children: "createFromComponent"
      }), "实现离线组件截图。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这些组件不参与真实渲染，因此对其截图需要更长的时间，因为系统必须先进行离线构建、布局及资源加载等操作，在这些操作完成前执行的截图所获位图不符合预期。因此，通常需要通过设置delay参数指定足够的时间，确保系统能够完成这些操作。对于图片资源的加载，建议将图片组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#syncload8",
        children: "syncLoad"
      }), "属性设为 true，以强制同步加载，确保离线组件构建时图片已加载、下载及解码完成，从而确保截图过程中能够正确呈现图片像素。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型使用场景",
      children: "典型使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下通过几个典型场景来说明组件截图能力的常见使用方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "截取长内容滚动截图",
      children: "截取长内容（滚动截图）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "较长内容通常使用滚动类容器组件实现。截图时，仅能捕获容器内可见内容，超出边界部分无法截取。若使用LazyForEach或Repeat，超出显示范围内容亦不会被系统构建及截取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可利用滚动类容器接口，模拟用户滑动逐页截图，之后按偏移量拼接各页PixelMap位图，以生成完整长图。关键点在于模拟滑动、维护位移与位图关系及实现PixelMap位图读写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "步骤1：添加滚动控制器及事件监听"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了能够模拟滚动，以及监听组件滚动的具体offset，需要为List（此处以列表为例）组件添加滚动控制器以及滚动监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/view/ScrollSnapshot.ets\n@Component\nexport struct ScrollSnapshot {\n  private scroller: Scroller = new Scroller();\n  private listComponentWidth: number = 0; // 组件宽度，默认值为0\n  private listComponentHeight: number = 0; // 组件高度，默认值为0\n  // list组件的当前偏移量\n  private curYOffset: number = 0;\n  // 每次滚动距离\n  private scrollHeight: number = 0;\n\n  // ...\n  build() {\n    // ...\n        Stack() {\n          // ...\n          // 1.1 绑定滚动控制器，并通过`.id`配置组件唯一标识。\n          List({ space: 12, scroller: this.scroller }) {\n              LazyForEach(this.dataSource, (item: number) => {\n              ListItem() {\n                NewsItem({ index: item })\n              }\n            }, (item: number) => item.toString())\n          }\n          // ...\n          .id(LIST_ID)\n          // 1.2 通过回调获取滚动偏移量。\n          .onDidScroll(() => {\n            this.curYOffset = this.scroller.currentOffset().yOffset;\n          })\n          .onAreaChange((oldValue, newValue) => {\n            // 1.3 获取组件的宽高。\n            this.listComponentWidth = newValue.width as number;\n            this.listComponentHeight = newValue.height as number;\n            this.scrollHeight = this.listComponentHeight;\n          })\n          // ...\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "步骤2：循环滚动截图并缓存"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过实现一个递归方法滚动循环截图，并在滚动过程配合一些动效实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * 递归滚动截图，直到滚动到底，最后合并所有截图\n */\nasync scrollSnapAndMerge() {\n  try {\n    // 记录滚动偏移\n    this.scrollYOffsets.push(this.curYOffset - this.yOffsetBefore);\n    // 调用组件截图接口，获取list组件的截图\n    const pixelMap = await this.getUIContext().getComponentSnapshot().get(LIST_ID);\n    // 获取位图像素字节，并保存在数组中\n    let area: image.PositionArea =\n      await ImageUtils.getSnapshotArea(pixelMap, this.scrollYOffsets, this.listComponentWidth,\n        this.listComponentHeight)\n    this.areaArray.push(area);\n\n    // 判断是否滚动到底以及用户是否已经强制停止\n    if (!this.scroller.isAtEnd() && !this.isClickStop) {\n      // 如果没有到底或被停止，则播放一个滚动动效，延迟一段时间后，继续递归截图\n      CommonUtils.scrollAnimation(this.scroller, 1000, this.scrollHeight);\n      await CommonUtils.sleep(1500);\n      await this.scrollSnapAndMerge();\n    } else {\n      // 当滚动到底时，调用`mergeImage`将所有保存的位图数据进行拼接，返回长截图位图对象\n      this.mergedImage =\n        await ImageUtils.mergeImage(this.areaArray, this.scrollYOffsets[this.scrollYOffsets.length - 1],\n          this.listComponentWidth, this.listComponentHeight);\n    }\n  } catch (err) {\n    let error = err as BusinessError;\n    Logger.error(TAG, `scrollSnapAndMerge err, errCode: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/common/CommonUtils.ets\nstatic scrollAnimation(scroller: Scroller, duration: number, scrollHeight: number): void {\n  scroller.scrollTo({\n    xOffset: 0,\n    yOffset: (scroller.currentOffset().yOffset + scrollHeight),\n    animation: {\n      duration: duration,\n      curve: Curve.Smooth,\n      canOverScroll: false\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "步骤3：拼接长截图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用image.createPixelMapSync()方法创建长截图longPixelMap，并遍历之前保存的图像片段数据（this.areaArray），构建image.PositionArea对象area，然后调用longPixelMap.writePixelsSync(area)方法将这些片段逐个写入到正确的位置，从而拼接成一个完整的长截图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static async mergeImage(areaArray: image.PositionArea[], lastOffsetY: number, listWidth: number,\n  listHeight: number): Promise<PixelMap> {\n  // 创建一个长截图位图对象\n  let opts: image.InitializationOptions = {\n    editable: true,\n    pixelFormat: 4,\n    size: {\n      width: uiContext?.vp2px(listWidth) || 0,\n      height: uiContext?.vp2px(lastOffsetY + listHeight) || 0\n    }\n  };\n  let longPixelMap = image.createPixelMapSync(opts);\n  let imgPosition: number = 0;\n\n  for (let i = 0; i < areaArray.length; i++) {\n    let readArea = areaArray[i];\n    let area: image.PositionArea = {\n      pixels: readArea.pixels,\n      offset: 0,\n      stride: readArea.stride,\n      region: {\n        size: {\n          width: readArea.region.size.width,\n          height: readArea.region.size.height\n        },\n        x: 0,\n        y: imgPosition\n      }\n    }\n    imgPosition += readArea.region.size.height;\n    try {\n      longPixelMap.writePixelsSync(area);\n    } catch (err) {\n      let error = err as BusinessError;\n      Logger.error(TAG, `writePixelsSync err, code: ${error.code}, message: ${error.message}`);\n    }\n  }\n  return longPixelMap;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "步骤4：保存截图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用安全控件SaveButton实现截图保存到相册。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/view/SnapshotPreview.ets\nSaveButton({\n  icon: SaveIconStyle.FULL_FILLED,\n  text: SaveDescription.SAVE_IMAGE,\n  buttonType: ButtonType.Capsule\n})\n  // ···\n  .onClick((event, result) => {\n    this.saveSnapshot(result);\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async saveSnapshot(result: SaveButtonOnClickResult): Promise<void> {\n  try {\n    if (result === SaveButtonOnClickResult.SUCCESS) {\n      const helper = photoAccessHelper.getPhotoAccessHelper(this.context);\n      const uri = await helper.createAsset(photoAccessHelper.PhotoType.IMAGE, 'png');\n      const file = await fileIo.open(uri, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n      const imagePackerApi: image.ImagePacker = image.createImagePacker();\n      const packOpts: image.PackingOption = {\n        format: 'image/png',\n        quality: 100,\n      };\n      imagePackerApi.packToData(this.mergedImage, packOpts).then((data) => {\n        fileIo.writeSync(file.fd, data);\n        fileIo.closeSync(file.fd);\n        Logger.info(TAG, `Succeeded in packToFile`);\n        this.getUIContext().getPromptAction().showToast({\n          // 请将$r('app.string.save_album_success')替换为实际资源文件，在本示例中该资源文件的value值为\"Saved to album\"\n          message: $r('app.string.save_album_success'),\n          duration: 1800\n        })\n      }).catch((error: BusinessError) => {\n        Logger.error(TAG, `Failed to packToFile. Error code is ${error.code}, message is ${error.message}`);\n      });\n    }\n    // ...\n  } catch (err) {\n    let error = err as BusinessError;\n    Logger.error(TAG, `saveSnapshot err, errCode: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "步骤5：保存完成后释放位图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当位图对象不再使用时，应及时将其赋值为空，例如：this.mergedImage = undefined;。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "closeSnapPopup(): void {\n  // 关闭弹窗\n  this.isShowPreview = false;\n  // 释放位图对象\n  this.mergedImage = undefined;\n  // 重置相关参数\n  this.snapPopupWidth = 100;\n  this.snapPopupHeight = 200;\n  this.snapPopupPosition =\n    PopupUtils.calcPopupCenter(this.screenWidth, this.screenHeight, this.snapPopupWidth, this.snapPopupHeight);\n  this.isLargePreview = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "封装全局截图接口",
      children: "封装全局截图接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如前文所述，截图接口必须在UI上下文明确的位置使用。然而，应用有时希望对不同模块封装统一的全局截图方法。例如，在下述示例中，awardBuilder构建的组件是固定结构的。GlobalStaticSnapshot提供了一个getAwardSnapshot全局方法，能够满足不同模块的需求，对同一固定模式的组件进行截图，从而实现全局截图接口的封装。本示例从API version 18开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\nimport { ComponentContent } from '@kit.ArkUI';\n\nexport class Params {\n  public text: string | undefined | null = '';\n\n  constructor(text: string | undefined | null) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction awardBuilder(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(90)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n      .width('100%')\n      .height('100%')\n  }.backgroundColor('#FFF0F0F0')\n}\n\nexport class GlobalStaticSnapshot {\n  /**\n   * 一个可以获取固定对象截图的静态方法\n   */\n  static async getAwardSnapshot(uiContext: UIContext, textParam: Params): Promise<image.PixelMap | undefined> {\n    let resultPixmap: image.PixelMap | undefined = undefined\n    let contentNode = new ComponentContent(uiContext, wrapBuilder(awardBuilder), textParam);\n    await uiContext.getComponentSnapshot()\n      .createFromComponent(contentNode, 320, true, { scale: 1, waitUntilRenderFinished: true })\n      .then((pixmap: image.PixelMap) => {\n        resultPixmap = pixmap;\n      })\n      .catch((err: Error) => {\n        console.error(`error: ${err}`);\n      })\n    return resultPixmap;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-long-snapshot-practice#section1566681910427",
        children: "长截图"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件截图最佳实践",
      children: "组件截图最佳实践"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "合理控制截图时机",
      children: "合理控制截图时机"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实现截图功能时，需注意组件的渲染过程非一次性完成。系统在构建与显示组件时，将经过测量、布局、提交指令等多个复杂步骤，最终在一次硬件刷新时呈现于屏幕上。因此，在特定情况下，若在组件刷新后立即调用截图，可能无法获取预期内容或出现截图失败报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了确保截图结果准确，建议在组件完全渲染后再执行截图操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "了解组件的绘制状态"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了确保截图内容符合预期，应该了解代码对界面状态的修改时机，并注意给系统预留处理时间，这通常可以通过增加一定延时来实现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["尽管可以通过inspector上的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-inspector/js-apis-arkui-inspector#componentobserver",
        children: "ComponentObserver"
      }), "感知应用组件绘制（draw）送显通知，但需要注意的是，ComponentObserver的组件绘制通知并不意味着系统已经真正将绘制指令执行，这取决于图形系统服务的负载情况。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "明确等待绘制完成"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["影响截图预期的主要因素是截图时机与系统服务执行绘制指令的时间差。在发起截图调用时，应用侧之前提交的所有绘制指令可能尚未被图形服务真正执行。为此，可以通过指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-componentsnapshot/js-apis-arkui-componentsnapshot#snapshotoptions12",
        children: "SnapshotOptions"
      }), "参数中的waitUntilRenderFinished为true，来确保系统在执行截图请求时等待所有之前的绘制指令均执行完毕，从而截取到更完整的内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67168)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议始终开启waitUntilRenderFinished参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "了解资源加载对截图的影响"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "影响截图预期的另一个常见原因，是图片资源的加载。图片组件支持在线资源链接，也可指定本地资源，且绝大多数图片资源为PNG、JPEG等压缩格式。这些资源需要系统解码为可提交绘制的位图格式，此过程默认在异步IO线程上进行，因此可能由于该过程耗时的不确定性而导致截图不符合预期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可通过以下几种方式进行优化："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自行提前解析图片为PixelMap格式，将PixelMap配置给图片组件；建议优先以此方法进行优化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置所使用的图片组件的syncLoad属性为true来强制同步加载，这样组件被构建时，即可确保资源可以直接被提交；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过指定延迟时长以及checkImageStatus设置为true，尝试截图，当返回160001错误后，重新加大时长进行截图；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "及时保存和释放位图对象",
      children: "及时保存和释放位图对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了及时释放资源，当截图接口返回的PixelMap对象不再使用时，应将其赋值为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "合理控制采样精度",
      children: "合理控制采样精度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请不要截取过大尺寸的图片，截图不建议超过屏幕尺寸大小。当要截取的图片目标长宽超过底层限制时，截图会返回失败，不同设备的底层限制并不相同。可以通过控制SnapshotOptions中的scale参数，减小采样精度，这可以在很大程度上节省内存，并大幅度提高截图的效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用其他能力对自渲染场景实现截图",
      children: "使用其他能力对自渲染场景实现截图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["尽管截图只需传入一个组件根节点即可实现对其下所有组件进行截图，但当子组件中存在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video",
        children: "Video"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "Web"
      }), "组件时，这并不是推荐的截图方式。建议直接使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagecreatepixelmapfromsurface11",
        children: "image.createPixelMapFromSurface"
      }), "接口来实现。"]
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
427202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
67168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
603446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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