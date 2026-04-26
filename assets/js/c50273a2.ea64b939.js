"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["980359"], {
365317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_upload_download_web_file_upload_web_file_upload_md_c50_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-upload-download-web-file-upload-web-file-upload-md-c50.json
var site_docs_arkweb_web_manage_upload_download_web_file_upload_web_file_upload_md_c50_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-upload-download/web-file-upload/web-file-upload","title":"使用Web组件上传文件","description":"Web组件支持前端页面选择文件上传功能，应用开发者可以使用onShowFileSelector()接口来处理前端页面文件上传的请求，如果应用开发者不做任何处理，ArkWeb会提供默认行为来处理前端页面文件上传的请求。应用开发者也可以通过获取到的前端数据，自定义拉起Picker。","source":"@site/docs/arkweb/web-manage-upload-download/web-file-upload/web-file-upload.md","sourceDirName":"arkweb/web-manage-upload-download/web-file-upload","slug":"/arkweb/web-manage-upload-download/web-file-upload/","permalink":"/harmonyos-docs-site/arkweb/web-manage-upload-download/web-file-upload/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用Web组件上传文件","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-file-upload","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web组件在不同的窗口间迁移","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-component-migrate/"},"next":{"title":"使用Web组件的下载能力","permalink":"/harmonyos-docs-site/arkweb/web-manage-upload-download/web-download/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-upload-download/web-file-upload/web-file-upload.md


const frontMatter = {
	title: '使用Web组件上传文件',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-file-upload',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件上传文件';

const assets = {

};



const toc = [{
  "value": "使用onShowFileSelector拉起文件管理器",
  "id": "使用onshowfileselector拉起文件管理器",
  "level": 2
}, {
  "value": "使用onShowFileSelector拉起图库",
  "id": "使用onshowfileselector拉起图库",
  "level": 2
}, {
  "value": "使用onShowFileSelector拉起相机",
  "id": "使用onshowfileselector拉起相机",
  "level": 2
}, {
  "value": "使用ArkWeb默认的方式处理文件上传请求",
  "id": "使用arkweb默认的方式处理文件上传请求",
  "level": 2
}, {
  "value": "自定义处理JS接口拉起的文件请求",
  "id": "自定义处理js接口拉起的文件请求",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "onShowFileSelector配合ArkWeb默认弹窗使用",
  "id": "onshowfileselector配合arkweb默认弹窗使用",
  "level": 3
}, {
  "value": "回调中getAcceptType和getMimeTypes的区别",
  "id": "回调中getaccepttype和getmimetypes的区别",
  "level": 3
}, {
  "value": "ArkWeb默认弹窗的说明",
  "id": "arkweb默认弹窗的说明",
  "level": 3
}, {
  "value": "handleFileList的使用说明",
  "id": "handlefilelist的使用说明",
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
        id: "使用web组件上传文件",
        children: "使用Web组件上传文件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件支持前端页面选择文件上传功能，应用开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onshowfileselector9",
        children: "onShowFileSelector()"
      }), "接口来处理前端页面文件上传的请求，如果应用开发者不做任何处理，ArkWeb会提供默认行为来处理前端页面文件上传的请求。应用开发者也可以通过获取到的前端数据，自定义拉起Picker。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用onshowfileselector拉起文件管理器",
      children: "使用onShowFileSelector拉起文件管理器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面的示例中，当用户在前端页面点击文件上传按钮，应用侧在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onshowfileselector9",
        children: "onShowFileSelector()"
      }), "接口中收到文件上传请求，在此接口中开发者将上传的本地文件路径设置给前端页面。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用侧代码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { picker } from '@kit.CoreFileKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('local.html'), controller: this.controller })\n        .onShowFileSelector((event) => {\n          console.info('MyFileUploader onShowFileSelector invoked');\n          const documentSelectOptions = new picker.DocumentSelectOptions();\n          let uri: string | null = null;\n          const documentViewPicker = new picker.DocumentViewPicker();\n          documentViewPicker.select(documentSelectOptions).then((documentSelectResult) => {\n            uri = documentSelectResult[0];\n            console.info('documentViewPicker.select to file succeed and uri is:' + uri);\n            if (event) {\n              event.result.handleFileList([uri]);\n            }\n          }).catch((err: BusinessError) => {\n            console.error(`Invoke documentViewPicker.select failed, code is ${err.code}, message is ${err.message}`);\n          })\n          return true;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "local.html页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <title>Document</title>\n</head>\n\n<body>\n<!-- 点击上传文件按钮 -->\n<input type=\"file\"><br>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(12754)/* ["default"] */.A) + "",
        width: "464",
        height: "971"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用onshowfileselector拉起图库",
      children: "使用onShowFileSelector拉起图库"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面的示例中，当用户在前端页面点击文件上传按钮，应用侧在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onshowfileselector9",
        children: "onShowFileSelector()"
      }), "接口中收到文件上传请求，在此接口中开发者将上传的本地图片路径设置给前端页面。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  async selectFile(result: FileSelectorResult): Promise<void> {\n    let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n    let photoPicker = new photoAccessHelper.PhotoViewPicker();\n    // 过滤选择媒体文件类型为IMAGE_VIDEO\n    photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;\n    // 设置最大选择数量\n    photoSelectOptions.maxSelectNumber = 5;\n    let chooseFile: photoAccessHelper.PhotoSelectResult = await photoPicker.select(photoSelectOptions);\n    // 获取选择的文件列表\n    result.handleFileList(chooseFile.photoUris);\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('local.html'), controller: this.controller })\n        .onShowFileSelector((event) => {\n          if (event) {\n            this.selectFile(event.result);\n          }\n          return true;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "local.html页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <title>Document</title>\n</head>\n\n<body>\n<!-- 点击上传文件按钮 -->\n<input type=\"file\"><br>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(407054)/* ["default"] */.A) + "",
        width: "464",
        height: "971"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用onshowfileselector拉起相机",
      children: "使用onShowFileSelector拉起相机"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件支持前端页面上传图片文件时调用相机即时拍照，应用开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onshowfileselector9",
        children: "onShowFileSelector()"
      }), "接口来处理前端页面文件上传的请求并自行拉起相机，如果应用开发者不做任何处理，Web会提供默认行为来处理前端页面调用相机的请求。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例中，应用侧通过监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onshowfileselector9",
        children: "onShowFileSelector"
      }), "事件并返回true拦截ArkWeb默认弹窗，并调用系统CameraPicker拉起相机。应用可以通过获取AcceptType对不同类型的目标文件做更精细的筛选。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { camera, cameraPicker } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\nasync function openCamera(callback: Callback<string>, uiContext: UIContext) {\n  let mContext = uiContext.getHostContext() as common.Context;\n  try {\n    let pickerProfile: cameraPicker.PickerProfile = {\n      cameraPosition: camera.CameraPosition.CAMERA_POSITION_BACK\n    };\n    let pickerResult: cameraPicker.PickerResult = await cameraPicker.pick(mContext,\n      [cameraPicker.PickerMediaType.PHOTO, cameraPicker.PickerMediaType.VIDEO], pickerProfile);\n    callback(pickerResult.resultUri);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`the pick call failed. error code: ${err.code}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"webCamera.html\"), controller: this.webviewController })\n        .onShowFileSelector((event) => {\n            //开发者可以通过event.fileSelector.getAcceptType()和event.fileSelector.isCapture()判断文件类型，并有选择地做出筛选以拉起不同的文件选择器\n            openCamera((result) => {\n                if (event) {\n                console.info('Title is ' + event.fileSelector.getTitle());\n                console.info('Mode is ' + event.fileSelector.getMode());\n                console.info('Accept types are ' + event.fileSelector.getAcceptType());\n                console.info('Capture is ' + event.fileSelector.isCapture());\n                event.result.handleFileList([result]);\n                }\n            }, this.getUIContext())\n            return true;\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTML页面代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>WebCamera</title>\n</head>\n<body>\n    <input type=\"file\" name=\"photo\" id=\"photo\"><br>\n    <img style=\"display: none;width:200px;\" id=\"img\">\n    <script>\n        let photo = document.getElementById(\"photo\");\n        photo.addEventListener(\"change\", preViewImg)\n\n        function preViewImg(event) {\n            let fileReader = new FileReader();\n            let img = document.getElementById(\"img\");\n            fileReader.addEventListener(\n                \"load\",\n                () => {\n                    // 将图像文件转换为 Base64 字符串\n                    img.src = fileReader.result;\n                    img.style.display = \"block\";\n                },\n                false\n            );\n            if (event.target.files && event.target.files[0]) {\n              fileReader.readAsDataURL(event.target.files[0]);\n            } else {\n              console.error(\"File not exist.\");\n            }\n        }\n    </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(122290)/* ["default"] */.A) + "",
        width: "553",
        height: "1150"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用arkweb默认的方式处理文件上传请求",
      children: "使用ArkWeb默认的方式处理文件上传请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "accept属性是一个字符串，它定义了文件input应该接受的文件类型。这个字符串是一个以逗号为分隔的唯一文件类型说明符列表。由于给定的文件类型可以用多种方式指定，因此当你需要给定格式的文件时，提供一组完整的类型指定符是非常有用的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "capture属性是一个字符串，如果accept属性指出了input是图片或者视频类型，则它指定了使用哪个摄像头去获取这些数据。值user表示应该使用前置摄像头和（或）麦克风。值environment表示应该使用后置摄像头和（或）麦克风。如果缺少此属性，则用户代理可以自由决定做什么。如果请求的前置模式不可用，则用户代理可能退回到其首选的默认模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当指定布尔类型属性multiple时，文件input允许用户选择多个文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例页面内有数个文件选择器，分别设置了不同的accept及capture属性，这两个属性对相机的影响如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "accept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "capture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "文件选择器行为"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "仅包含图片类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置为\"environment\"或\"user\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接拉起相机拍照模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "仅包含图片类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先拉起弹窗，用户选择拍照后拉起相机拍照模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "仅包含视频类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置为\"environment\"或\"user\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接拉起相机录像模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "仅包含视频类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先拉起弹窗，用户选择录像后拉起相机录像模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "包含图片和视频类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置为\"environment\"或\"user\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接拉起相机拍照模式，可录像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "包含图片和视频类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先拉起弹窗，用户选择拍照后拉起相机拍照模式，可录像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不设置图片或视频类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置为\"environment\"或\"user\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接拉起相机拍照模式，可录像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不设置图片或视频类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先拉起弹窗，用户选择拍照后拉起相机拍照模式，可录像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不包含图片或视频类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置为\"environment\"或\"user\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接拉起文件选择，不可拉起相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不包含图片或视频类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接拉起文件选择，不可拉起相机。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前ArkWeb识别的文件类型有"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图片：tif, xbm, tiff, pjp, jfif, bmp, avif, apng, ico, webp, svg, gif, svgz, jpg, jpeg, png, pjpeg"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频：mp4, mpg, mpeg, m4v, ogm, ogv, webm"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(648749)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkWeb默认仅拉起相机后置摄像头，值'user'不会被处理成拉起前置摄像头。如有需要，请在应用侧通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onshowfileselector9",
        children: "onShowFileSelector()"
      }), "接口另行处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTML页面代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>WebCamera</title>\n</head>\n<body>\n    <input type=\"file\" name=\"picture\" id=\"picture\" accept=\"image/*\"><br>\n    <img style=\"display: none;width:200px\" id=\"img\">\n    <script>\n        let picture = document.getElementById(\"picture\");\n        picture.addEventListener(\"change\", preViewImg)\n\n        function preViewImg(event) {\n            let fileReader = new FileReader();\n            let img = document.getElementById(\"img\");\n            fileReader.addEventListener(\n                \"load\",\n                () => {\n                    // 将图像文件转换为 Base64 字符串\n                    img.src = fileReader.result;\n                    img.style.display = \"block\";\n                },\n                false\n            );\n            if (event.target.files && event.target.files[0]) {\n              fileReader.readAsDataURL(event.target.files[0]);\n            } else {\n              console.error(\"File not exist.\");\n            }\n        }\n    </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用侧代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"webCamera.html\"), controller: this.webviewController })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(527242)/* ["default"] */.A) + "",
        width: "553",
        height: "1150"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义处理js接口拉起的文件请求",
      children: "自定义处理JS接口拉起的文件请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，在OnShowFileSelectorEvent的FileSelectorParam中新增接口getSuggestedName()、getDefaultPath()、getDescriptions()、isAcceptAllOptionExcluded()。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增接口对上传保存文件能力进行了增强，以对标W3C能力，用于支持用户获取到HTML前端通过showSaveFilePicker、showOpenFilePicker、showDirectoryPicker等方法传递的option参数(参考下方加载的html文件)里的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 23 新增支持如下option中的成员："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["suggestedName对应接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-fileselectorparam/arkts-basic-components-web-fileselectorparam#getsuggestedname23",
        children: "getSuggestedName"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["description对应接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-fileselectorparam/arkts-basic-components-web-fileselectorparam#getdescriptions23",
        children: "getDescriptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["excludeAcceptAllOption对应接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-fileselectorparam/arkts-basic-components-web-fileselectorparam#isacceptalloptionexcluded23",
        children: "isAcceptAllOptionExcluded"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["startIn对应接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-fileselectorparam/arkts-basic-components-web-fileselectorparam#getdefaultpath23",
        children: "getDefaultPath"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["types对应接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-fileselectorparam/arkts-basic-components-web-fileselectorparam#getacceptablefiletypes23",
        children: "getAcceptableFileTypes"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.html代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <title>文件保存测试</title>\n</head>\n<body>\n<button onclick=\"saveFile()\">保存文件</button>\n<div id=\"result\"></div>\n\n<script>\n    async function saveFile() {\n        const options = {\n            startIn: 'documents',\n            suggestedName: 'example.txt',\n            types: [\n                {\n                    description: '文本文件',\n                    accept: {'text/plain': ['.txt','.text','.doc','.docx'],\n                             'video/mp4': ['.mp4','.avi','.av1','.vp9']}\n                },\n                {\n                    description: '视频',\n                    accept: {'video/mp4': ['.mp4','.avi','.av1','.vp9']}\n                }\n            ],\n            excludeAcceptAllOption: true\n        };\n\n        try {\n            const fileHandle = await window.showSaveFilePicker(options);\n        } catch (error) {\n            if (error.name !== 'AbortError') {\n                document.getElementById('result').innerHTML =\n                    `错误: ${error.message}`;\n            }\n        }\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用侧代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { picker } from '@kit.CoreFileKit';\nlet defaultPublicPath = 'storage/Users/currentUser/';\nlet defaultBasePath = 'file://docs/';\nlet wellKnownDirectoryMap = new Map<string, string>([\n    ['desktop', defaultPublicPath + 'desktop'],\n    ['documents', defaultPublicPath + 'documents'],\n    ['downloads', defaultPublicPath + 'download'],\n    ['music', defaultPublicPath + 'music'],\n    ['pictures', defaultPublicPath + 'images'],\n    ['videos', defaultPublicPath + 'videos'],\n]);\n\nfunction getUri(path : string) {\n  let publicDir = wellKnownDirectoryMap.get(path);\n  if (publicDir !== undefined) {\n    path = publicDir;\n  }\n  return defaultBasePath + path;\n}\n\nfunction getFileName(name : string) {\n  let fileName = name;\n  let lastDotIndex = name.lastIndexOf('.');\n  if (lastDotIndex !== -1) {\n    fileName = name.substring(0, lastDotIndex);\n  }\n  return fileName;\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onShowFileSelector((event) => {\n          console.info('onShowFileSelector Suggested Name is ' + event.fileSelector.getSuggestedName());\n          console.info('onShowFileSelector Default Path is ' + event.fileSelector.getDefaultPath());\n          console.info('onShowFileSelector Descriptions are ' + event.fileSelector.getDescriptions());\n          console.info('onShowFileSelector AcceptAllOptionExcluded is ' + event.fileSelector.isAcceptAllOptionExcluded());\n          const documentSaveOptions = new picker.DocumentSaveOptions();\n          documentSaveOptions.newFileNames = new Array<string>();\n          documentSaveOptions.newFileNames.push(getFileName(event.fileSelector.getSuggestedName()));\n          documentSaveOptions.defaultFilePathUri = getUri(event.fileSelector.getDefaultPath());\n          let accepts : Array<Array<AcceptableFileType>> = event.fileSelector.getAcceptableFileTypes();\n          let descriptions : Array<string> = event.fileSelector.getDescriptions();\n          documentSaveOptions.fileSuffixChoices = new Array<string>();\n          let n = accepts.length;\n          for (let i = 0; i < n; i++) {\n            let m = accepts[i].length;\n            let extList = Array<string>();\n            for (let j = 0; j < m; j++) {\n              extList.push(accepts[i][j].acceptableType.join(','));\n            }\n            let ext = extList.join(',');\n            let desc = descriptions[i] + '(' + ext + ')' + '|';\n            documentSaveOptions.fileSuffixChoices.push(desc + ext);\n          }\n          if (!event.fileSelector.isAcceptAllOptionExcluded()) {\n            documentSaveOptions.fileSuffixChoices.push('所有文件(*.*)' + '|' + '*.*');\n          }\n          let uri: string | null = null;\n          const documentViewPicker = new picker.DocumentViewPicker();\n          documentViewPicker.save(documentSaveOptions).then((documentSelectResult) => {\n            uri = documentSelectResult[0];\n            console.info('documentViewPicker.save to file succeed and uri is:' + uri);\n            if (event) {\n              event.result.handleFileList([uri]);\n            }\n          }).catch((err: BusinessError) => {\n            console.error(`Invoke documentViewPicker.save failed, code is ${err.code}, message is ${err.message}`);\n          })\n          return true;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212063)/* ["default"] */.A) + "",
        width: "1186",
        height: "826"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "样例以HTML中的showSaveFilePicker()配合ArkTS中documentViewPicker.save()方法为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需注意："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTML中的showOpenFilePicker、showDirectoryPicker方法的入参option与showSaveFilePicker的入参option的成员存在差异。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ETS中如调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#select",
          children: "documentViewPicker.select()"
        }), "方法需配合", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentselectoptions",
          children: "picker.DocumentSelectOptions"
        }), "对象为Picker传参，而非", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentsaveoptions",
          children: "picker.DocumentSaveOptions"
        }), "对象，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker",
          children: "@ohos.file.picker (选择器)"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onshowfileselector配合arkweb默认弹窗使用",
      children: "onShowFileSelector配合ArkWeb默认弹窗使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户点击文件上传按钮后，程序优先执行onShowFileSelector中的回调进行逻辑处理，应用开发者可根据处理结果选择返回false以触发ArkWeb默认弹窗，此时应避免同时触发应用侧的其他Picker。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "回调中getaccepttype和getmimetypes的区别",
      children: "回调中getAcceptType和getMimeTypes的区别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAcceptType返回的是accept属性值全量转换为文件扩展名所组成的字符串数组，getMimeTypes返回的是accept属性值用逗号拆分后所组成的字符串数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如若accept属性值为video/mp4, .png，则getAcceptType返回.mp4, .m4v; .png，getMimeTypes返回video/mp4; .png。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb默认弹窗的说明",
      children: "ArkWeb默认弹窗的说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选项“图片”会拉起图库，根据accept属性值不同，用户可以选择上传图片或视频；选项“拍照”会拉起相机，根据accept属性值不同，用户可以选择拍照或录像；选项“文件”会拉起文件管理器，用户可以上传任意内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "handlefilelist的使用说明",
      children: "handleFileList的使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该函数将选择的文件路径提交给ArkWeb，入参主要有两种类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "file协议路径，目前只支持前缀为file://media/、file://docs/的公共路径和file://<packageName>/的应用包名路径，其他file协议路径无权限。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["沙箱目录，具体参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/app-file/app-sandbox-directory",
          children: "应用沙箱目录"
        }), "。"]
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
527242(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438275-205037096191ad008bf30ac9e0fb7f82.gif");

},
648749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
12754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958228-a155eb06c3c96c04274145e4633fe507.gif");

},
407054(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478229-057cf9ecda7a7cf23eae4af99ee52373.gif");

},
122290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798580-40befb6d78fcd78f9aa07f5afc79c358.gif");

},
212063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958230-449ff63f99f1a921dfc98daac7ad77f2.gif");

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