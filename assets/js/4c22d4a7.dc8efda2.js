"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["105857"], {
47265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_photoeditorextensionability_photoeditorextensionability_md_4c2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-specified-type-app-redirection-photoeditorextensionability-photoeditorextensionability-md-4c2.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_photoeditorextensionability_photoeditorextensionability_md_4c2_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/photoeditorextensionability/photoeditorextensionability","title":"拉起图片编辑类应用（startAbilityByType）","description":"使用场景","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/photoeditorextensionability/photoeditorextensionability.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/photoeditorextensionability","slug":"/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/photoeditorextensionability/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/photoeditorextensionability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"拉起图片编辑类应用（startAbilityByType）","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoeditorextensionability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起快递类应用（startAbilityByType）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-express-apps/"},"next":{"title":"拉起文件处理类应用（startAbility）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/photoeditorextensionability/photoeditorextensionability.md


const frontMatter = {
	title: '拉起图片编辑类应用（startAbilityByType）',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoeditorextensionability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起图片编辑类应用（startAbilityByType）';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "图片编辑类应用实现图片编辑页面",
  "id": "图片编辑类应用实现图片编辑页面",
  "level": 2
}, {
  "value": "调用方拉起图片编辑类应用编辑图片",
  "id": "调用方拉起图片编辑类应用编辑图片",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "拉起图片编辑类应用startabilitybytype",
        children: "拉起图片编辑类应用（startAbilityByType）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用自身不具备图片编辑能力、但存在图片编辑的场景时，可以通过startAbilityByType拉起图片编辑类应用扩展面板，由对应的应用完成图片编辑操作。图片编辑类应用可以通过PhotoEditorExtensionAbility实现图片编辑页面，并将该页面注册到图片编辑面板，从而将图片编辑能力开放给其他应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962760)/* ["default"] */.A) + "",
        width: "1045",
        height: "224"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：用户在图库App中选择编辑图片时，图库App可以通过startAbilityByType拉起图片编辑类应用扩展面板。用户可以从已实现PhotoEditorExtensionAbility应用中选择一款，并进行图片编辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability/js-apis-app-ability-photoeditorextensionability",
        children: "PhotoEditorExtensionAbility"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-app-ability-photoeditorextensioncontext/js-apis-app-ability-photoeditorextensioncontext",
        children: "PhotoEditorExtensionContext"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "接口名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onStartContentEditing(uri: string, want:Want, session: UIExtensionContentSession):void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以执行读取原始图片、加载页面等操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "saveEditedContentWithImage(pixeMap: image.PixelMap, option: image.PackingOption): Promise<AbilityResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入编辑过的图片的PixelMap对象并保存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图片编辑类应用实现图片编辑页面",
      children: "图片编辑类应用实现图片编辑页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio工程中手动新建一个PhotoEditorExtensionAbility。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在工程Module对应的ets目录下，右键选择“New > Directory”，新建一个目录，如PhotoEditorExtensionAbility。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在PhotoEditorExtensionAbility目录中，右键选择“New > File”，新建一个.ets文件，如ExamplePhotoEditorAbility.ets。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ExamplePhotoEditorAbility.ets中重写onCreate、onForeground、onBackground、onDestroy和onStartContentEditing的生命周期回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，需要在onStartContentEditing中加载入口页面文件pages/Index.ets，并将session、uri、实例对象等保存在LocalStorage中传递给页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PhotoEditorExtensionAbility,UIExtensionContentSession,Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[ExamplePhotoEditorAbility]';\nexport default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {\n  onCreate() {\n    hilog.info(0x0000, TAG, 'onCreate');\n  }\n\n  // 获取图片，加载页面并将需要的参数传递给页面\n  onStartContentEditing(uri: string, want: Want, session: UIExtensionContentSession): void {\n    hilog.info(0x0000, TAG, `onStartContentEditing want: ${JSON.stringify(want)}, uri: ${uri}`);\n\n    const storage: LocalStorage = new LocalStorage({\n      \"session\": session,\n      \"uri\": uri\n    } as Record<string, Object>);\n\n    session.loadContent('pages/Index', storage);\n  }\n\n  onForeground() {\n    hilog.info(0x0000, TAG, 'onForeground');\n  }\n\n  onBackground() {\n    hilog.info(0x0000, TAG, 'onBackground');\n  }\n\n  onDestroy() {\n    hilog.info(0x0000, TAG, 'onDestroy');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在page中实现图片编辑功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片编辑完成后调用saveEditedContentWithImage保存图片，并将回调结果通过terminateSelfWithResult返回给调用方。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { UIExtensionContentSession, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { image } from '@kit.ImageKit';\n\nconst TAG = '[ExamplePhotoEditorAbility]';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'editImg';\n  @State originalImage: PixelMap | null = null;\n  @State editedImage: PixelMap | null = null;\n  private newWant ?: Want;\n  private storage = this.getUIContext().getSharedLocalStorage();\n\n  aboutToAppear(): void {\n    let originalImageUri = this.storage?.get<string>(\"uri\") ?? \"\";\n    hilog.info(0x0000, TAG, `OriginalImageUri: ${originalImageUri}.`);\n\n    this.readImageByUri(originalImageUri).then(imagePixMap => {\n      this.originalImage = imagePixMap;\n    })\n  }\n\n  // 根据uri读取图片内容\n  async readImageByUri(uri: string): Promise < PixelMap | null > {\n    hilog.info(0x0000, TAG, \"uri: \" + uri);\n    let file: fileIo.File | undefined;\n    try {\n      file = await fileIo.open(uri, fileIo.OpenMode.READ_ONLY);\n      hilog.info(0x0000, TAG, \"Original image file id: \" + file.fd);\n\n      let imageSourceApi: image.ImageSource = image.createImageSource(file.fd);\n      if(!imageSourceApi) {\n        hilog.info(0x0000, TAG, \"ImageSourceApi failed\");\n        return null;\n      }\n      let pixmap: image.PixelMap = await imageSourceApi.createPixelMap();\n      if(!pixmap) {\n        hilog.info(0x0000, TAG, \"createPixelMap failed\");\n        return null;\n      }\n      this.originalImage = pixmap;\n      return pixmap;\n    } catch(e) {\n      hilog.error(0x0000, TAG, `ReadImage failed:${e}`);\n    } finally {\n      fileIo.close(file);\n    }\n    return null;\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n\n        Button(\"RotateAndSaveImg\").onClick(event => {\n          hilog.info(0x0000, TAG, `Start to edit image and save.`);\n          // 编辑图片功能实现\n          this.originalImage?.rotate(90).then(() => {\n            let packOpts: image.PackingOption = { format: \"image/jpeg\", quality: 98 };\n            try {\n              // 调用saveEditedContentWithImage保存图片\n              (this.getUIContext().getHostContext() as common.PhotoEditorExtensionContext).saveEditedContentWithImage(this.originalImage as image.PixelMap,\n                packOpts).then(data => {\n                if (data.resultCode == 0) {\n                  hilog.info(0x0000, TAG, `Save succeed.`);\n                }\n                hilog.info(0x0000, TAG,\n                    `saveContentEditingWithImage result: ${JSON.stringify(data)}`);\n                this.newWant = data.want;\n                // data.want.uri存有编辑过图片的uri\n                this.readImageByUri(this.newWant?.uri ?? \"\").then(imagePixMap => {\n                  this.editedImage = imagePixMap;\n                })\n              })\n            } catch (e) {\n              hilog.error(0x0000, TAG, `saveContentEditingWithImage failed:${e}`);\n              return;\n            }\n          })\n        }).margin({ top: 10 })\n\n        Button(\"terminateSelfWithResult\").onClick((event => {\n          hilog.info(0x0000, TAG, `Finish the current editing.`);\n\n          let session = this.storage?.get('session') as UIExtensionContentSession;\n          // 关闭并回传修改结果给调用方\n          session?.terminateSelfWithResult({ resultCode: 0, want: this.newWant });\n\n        })).margin({ top: 10 })\n\n        Image(this.originalImage).width(\"100%\").height(200).margin({ top: 10 }).objectFit(ImageFit.Contain)\n\n        Image(this.editedImage).width(\"100%\").height(200).margin({ top: 10 }).objectFit(ImageFit.Contain)\n      }\n      .width('100%')\n    }\n    .height('100%')\n    .backgroundColor(Color.Pink)\n    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程Module对应的module.json5配置文件中注册PhotoEditorExtensionAbility。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "type标签需要配置为\"photoEditor\"，srcEntry需要配置为PhotoEditorExtensionAbility组件所对应的代码路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"extensionAbilities\": [\n      {\n        \"name\": \"ExamplePhotoEditorAbility\",\n        \"icon\": \"$media:icon\",\n        \"description\": \"ExamplePhotoEditorAbility\",\n        \"type\": \"photoEditor\",\n        \"exported\": true,\n        \"srcEntry\": \"./ets/PhotoEditorExtensionAbility/ExamplePhotoEditorAbility.ets\",\n        \"label\": \"$string:EntryAbility_label\",\n        \"extensionProcessMode\": \"bundle\"\n      },\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用方拉起图片编辑类应用编辑图片",
      children: "调用方拉起图片编辑类应用编辑图片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以在UIAbility或者UIExtensionAbility的页面中通过接口startAbilityByType拉起图片编辑类应用扩展面板，系统将自动查找并在面板上展示基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability/js-apis-app-ability-photoeditorextensionability",
        children: "PhotoEditorExtensionAbility"
      }), "实现的图片编辑应用，由用户选择某个应用来完成图片编辑的功能，最终将编辑的结果返回给到调用方，具体步骤如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, wantConstant } from '@kit.AbilityKit';\nimport { fileUri, picker } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）实现从图库中选取图片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async photoPickerGetUri(): Promise < string > {\n  try {\n    let PhotoSelectOptions = new picker.PhotoSelectOptions();\n    PhotoSelectOptions.MIMEType = picker.PhotoViewMIMETypes.IMAGE_TYPE;\n    PhotoSelectOptions.maxSelectNumber = 1;\n    let photoPicker = new picker.PhotoViewPicker();\n    let photoSelectResult: picker.PhotoSelectResult = await photoPicker.select(PhotoSelectOptions);\n    return photoSelectResult.photoUris[0];\n  } catch(error) {\n    let err: BusinessError = error as BusinessError;\n    hilog.error(0x0000, TAG, 'PhotoViewPicker failed with err: ' + JSON.stringify(err));\n  }\n  return \"\";\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将图片拷贝到本地沙箱路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n let file: fileIo.File | undefined;\n try {\n   file = fileIo.openSync(uri, fileIo.OpenMode.READ_ONLY);\n   hilog.info(0x0000, TAG, \"file: \" + file.fd);\n\n   let timeStamp = Date.now();\n   // 将用户图片拷贝到应用沙箱路径\n   fileIo.copyFileSync(file.fd, context.filesDir + `/original-${timeStamp}.jpg`);\n\n   this.filePath = context.filesDir + `/original-${timeStamp}.jpg`;\n   this.originalImage = fileUri.getUriFromPath(this.filePath);\n } catch (e) {\n   hilog.error(0x0000, TAG, `readImage failed:${e}`);\n } finally {\n   fileIo.close(file);\n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在startAbilityByType回调函数中，通过want.uri获取编辑后的图片uri，并做对应的处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  let abilityStartCallback: common.AbilityStartCallback = {\n    onError: (code, name, message) => {\n      const tip: string = `code:` + code + ` name:` + name + ` message:` + message;\n      hilog.error(0x0000, TAG, \"startAbilityByType:\", tip);\n    },\n    onResult: (result) => {\n      // 获取到回调结果中编辑后的图片uri并做对应的处理\n      let uri = result.want?.uri ?? \"\";\n      hilog.info(0x0000, TAG, \"PhotoEditorCaller result: \" + JSON.stringify(result));\n      this.readImage(uri).then(imagePixMap => {\n        this.editedImage = imagePixMap;\n      });\n    }\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将图片转换为图片uri，并调用startAbilityByType拉起图片编辑应用面板。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " let uri = fileUri.getUriFromPath(this.filePath);\n context.startAbilityByType(\"photoEditor\", {\n   \"ability.params.stream\": [uri], // 原始图片的uri,只支持传入一个uri\n   \"ability.want.params.uriPermissionFlag\": wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION // 至少需要分享读权限给到图片编辑面板\n } as Record<string, Object>, abilityStartCallback, (err) => {\n   let tip: string;\n   if (err) {\n     tip = `Start error: ${JSON.stringify(err)}`;\n     hilog.error(0x0000, TAG, `startAbilityByType: fail, err: ${JSON.stringify(err)}`);\n   } else {\n     tip = `Start success`;\n     hilog.info(0x0000, TAG, \"startAbilityByType: \", `success`);\n   }\n });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, wantConstant } from '@kit.AbilityKit';\nimport { fileUri, picker } from '@kit.CoreFileKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { JSON } from '@kit.ArkTS';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nconst TAG = 'PhotoEditorCaller';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'selectImg';\n  @State originalImage: ResourceStr = \"\";\n  @State editedImage: PixelMap | null = null;\n  private filePath: string = \"\";\n\n  // 根据uri读取图片内容\n  async readImage(uri: string): Promise < PixelMap | null > {\n    hilog.info(0x0000, TAG, \"image uri: \" + uri);\n    let file: fileIo.File | undefined;\n    try {\n      file = await fileIo.open(uri, fileIo.OpenMode.READ_ONLY);\n      hilog.info(0x0000, TAG, \"file: \" + file.fd);\n\n      let imageSourceApi: image.ImageSource = image.createImageSource(file.fd);\n      if(!imageSourceApi) {\n        hilog.info(0x0000, TAG, \"imageSourceApi failed\");\n        return null;\n      }\n      let pixmap: image.PixelMap = await imageSourceApi.createPixelMap();\n      if(!pixmap) {\n        hilog.info(0x0000, TAG, \"createPixelMap failed\");\n        return null;\n      }\n      this.editedImage = pixmap;\n      return pixmap;\n    } catch(e) {\n      hilog.error(0x0000, TAG, `readImage failed:${e}`);\n    } finally {\n      fileIo.close(file);\n    }\n    return null;\n  }\n\n  // 图库中选取图片\n  async photoPickerGetUri(): Promise<string> {\n    try {\n        let textInfo: photoAccessHelper.TextContextInfo = {\n            text: 'photo'\n        }\n        let recommendOptions: photoAccessHelper.RecommendationOptions = {\n            textContextInfo: textInfo\n        }\n        let options: photoAccessHelper.PhotoSelectOptions = {\n            MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE,\n            maxSelectNumber: 1,\n            recommendationOptions: recommendOptions\n        }\n        let photoPicker = new photoAccessHelper.PhotoViewPicker();\n        let photoSelectResult: photoAccessHelper.PhotoSelectResult = await photoPicker.select(options);\n        return photoSelectResult.photoUris[0];\n    } catch (error) {\n        let err: BusinessError = error as BusinessError;\n        hilog.error(0x0000, TAG, 'PhotoViewPicker failed with err: ' + JSON.stringify(err));\n    }\n    return \"\";\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n\n        Button(\"selectImg\").onClick(event => {\n          // 图库中选取图片\n          this.photoPickerGetUri().then(uri => {\n            hilog.info(0x0000, TAG, \"uri: \" + uri);\n\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            let file: fileIo.File | undefined;\n            try {\n              file = fileIo.openSync(uri, fileIo.OpenMode.READ_ONLY);\n              hilog.info(0x0000, TAG, \"file: \" + file.fd);\n\n              let timeStamp = Date.now();\n              // 将用户图片拷贝到应用沙箱路径\n              fileIo.copyFileSync(file.fd, context.filesDir + `/original-${timeStamp}.jpg`);\n\n              this.filePath = context.filesDir + `/original-${timeStamp}.jpg`;\n              this.originalImage = fileUri.getUriFromPath(this.filePath);\n            } catch (e) {\n              hilog.info(0x0000, TAG, `readImage failed:${e}`);\n            } finally {\n              fileIo.close(file);\n            }\n          })\n\n        }).width('200').margin({ top: 20 })\n\n        Button(\"editImg\").onClick(event => {\n          let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n          let abilityStartCallback: common.AbilityStartCallback = {\n            onError: (code, name, message) => {\n              const tip: string = `code:` + code + ` name:` + name + ` message:` + message;\n              hilog.error(0x0000, TAG, \"startAbilityByType:\", tip);\n            },\n            onResult: (result) => {\n              // 获取到回调结果中编辑后的图片uri并做对应的处理\n              let uri = result.want?.uri ?? \"\";\n              hilog.info(0x0000, TAG, \"PhotoEditorCaller result: \" + JSON.stringify(result));\n              this.readImage(uri).then(imagePixMap => {\n                this.editedImage = imagePixMap;\n              });\n            }\n          }\n          // 将图片转换为图片uri，并调用startAbilityByType拉起图片编辑应用面板\n          let uri = fileUri.getUriFromPath(this.filePath);\n          context.startAbilityByType(\"photoEditor\", {\n            \"ability.params.stream\": [uri], // 原始图片的uri,只支持传入一个uri\n            \"ability.want.params.uriPermissionFlag\": wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION // 至少需要分享读权限给到图片编辑面板\n          } as Record<string, Object>, abilityStartCallback, (err) => {\n            let tip: string;\n            if (err) {\n              tip = `Start error: ${JSON.stringify(err)}`;\n              hilog.error(0x0000, TAG, `startAbilityByType: fail, err: ${JSON.stringify(err)}`);\n            } else {\n              tip = `Start success`;\n              hilog.info(0x0000, TAG, \"startAbilityByType: \", `success`);\n            }\n          });\n\n        }).width('200').margin({ top: 20 })\n\n        Image(this.originalImage).width(\"100%\").height(200).margin({ top: 20 }).objectFit(ImageFit.Contain)\n\n        Image(this.editedImage).width(\"100%\").height(200).margin({ top: 20 }).objectFit(ImageFit.Contain)\n      }\n      .width('100%')\n    }\n    .height('100%')\n    .backgroundColor(Color.Orange)\n    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])\n  }\n}\n"
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
962760(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477509-c9eb80726fa72e5548b4ecf9b6fcd0bb.png");

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