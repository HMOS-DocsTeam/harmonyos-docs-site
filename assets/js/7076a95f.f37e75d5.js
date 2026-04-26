"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["915803"], {
743445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_upload_download_web_download_web_download_md_707_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-upload-download-web-download-web-download-md-707.json
var site_docs_arkweb_web_manage_upload_download_web_download_web_download_md_707_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-upload-download/web-download/web-download","title":"使用Web组件的下载能力","description":"当需要通过Web页面进行文件下载时，可以通过此方式调用Web接口。","source":"@site/docs/arkweb/web-manage-upload-download/web-download/web-download.md","sourceDirName":"arkweb/web-manage-upload-download/web-download","slug":"/arkweb/web-manage-upload-download/web-download/","permalink":"/harmonyos-docs-site/arkweb/web-manage-upload-download/web-download/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用Web组件的下载能力","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-download","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件上传文件","permalink":"/harmonyos-docs-site/arkweb/web-manage-upload-download/web-file-upload/"},"next":{"title":"在Web中打开摄像头和麦克风","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/web-rtc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-upload-download/web-download/web-download.md


const frontMatter = {
	title: '使用Web组件的下载能力',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-download',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件的下载能力';

const assets = {

};



const toc = [{
  "value": "监听页面触发的下载",
  "id": "监听页面触发的下载",
  "level": 2
}, {
  "value": "使用Web组件发起一个下载任务",
  "id": "使用web组件发起一个下载任务",
  "level": 2
}, {
  "value": "使用Web组件恢复进程退出时未下载完成的任务",
  "id": "使用web组件恢复进程退出时未下载完成的任务",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用web组件的下载能力",
        children: "使用Web组件的下载能力"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要通过Web页面进行文件下载时，可以通过此方式调用Web接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听页面触发的下载",
      children: "监听页面触发的下载"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setdownloaddelegate11",
        children: "setDownloadDelegate()"
      }), "向Web组件注册一个DownloadDelegate来监听页面触发的下载任务。资源由Web组件来下载，Web组件会通过DownloadDelegate将下载的进度通知给应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的示例中，在应用的rawfile中创建index.html。应用启动后会创建一个Web组件并加载index.html，点击setDownloadDelegate按钮向Web组件注册一个DownloadDelegate，点击页面里的下载按钮的时候会触发一个下载任务，在DownloadDelegate中可以监听到下载的进度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认路径在应用沙箱的web目录内，用户无法查看。如果希望用户能够查看，需要将下载路径修改到有访问权限的目录，比如Download目录，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8web%E7%BB%84%E4%BB%B6%E5%8F%91%E8%B5%B7%E4%B8%80%E4%B8%AA%E4%B8%8B%E8%BD%BD%E4%BB%BB%E5%8A%A1",
        children: "使用Web组件发起一个下载任务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n  @State myText: string = 'download';\n\n  build() {\n    Column() {\n      Text(this.myText)\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info('will start a download.');\n              // 传入一个下载路径，并开始下载。\n              // 如果传入一个不存在的路径，则会下载到默认/data/storage/el2/base/cache/web/目录。\n              webDownloadItem.start('/data/storage/el2/base/cache/web/' + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              // 下载任务的唯一标识。\n              console.info('download update guid: ' + webDownloadItem.getGuid());\n              // 下载的进度。\n              console.info('download update percent complete: ' + webDownloadItem.getPercentComplete());\n              // 当前的下载速度。\n              console.info('download update speed: ' + webDownloadItem.getCurrentSpeed());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error('download failed guid: ' + webDownloadItem.getGuid());\n              // 下载任务失败的错误码。\n              console.error('download failed last error code: ' + webDownloadItem.getLastErrorCode());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info('download finish guid: ' + webDownloadItem.getGuid());\n              this.myText = 'download finish';\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<!-- 点击视频右下方菜单的下载按钮会触发下载任务。-->\n<video controls=\"controls\" width=\"800px\" height=\"580px\"\n       src=\"http://vjs.zencdn.net/v/oceans.mp4\"\n       type=\"video/mp4\">\n</video>\n<a href='data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E' download='download.html'>下载download.html</a>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用web组件发起一个下载任务",
      children: "使用Web组件发起一个下载任务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#startdownload11",
        children: "startDownload()"
      }), "接口发起一个下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件发起的下载会根据当前显示的url以及Web组件默认的Referrer Policy来计算referrer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，先点击setDownloadDelegate按钮向Web注册一个监听类，然后点击startDownload主动发起了一个下载，该下载任务也会通过设置的DownloadDelegate来通知app下载的进度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n  @State myText: string = 'download';\n\n  build() {\n    Column() {\n      Text(this.myText)\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info('will start a download.');\n              // 传入一个下载路径，并开始下载。\n              // 如果传入一个不存在的路径，则会下载到默认/data/storage/el2/base/cache/web/目录。\n              webDownloadItem.start('/data/storage/el2/base/cache/web/' + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info('download update guid: ' + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error('download failed guid: ' + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info('download finish guid: ' + webDownloadItem.getGuid());\n              this.myText = 'download finish';\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            // 这里指定下载地址为 `https://www.example.com/，Web组件会发起一个下载任务将该页面下载下来`。\n            // 开发者需要替换为自己想要下载的内容的地址。\n            this.controller.startDownload('https://www.example.com/');\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentviewpicker",
        children: "DocumentViewPicker()"
      }), "获取当前示例的默认下载目录，将该目录设置为下载目录。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { picker, fileUri } from  '@kit.CoreFileKit';\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 使用DocumentViewPicker()获取当前示例的默认下载目录，将该目录设置为下载目录\n              getDownloadPathFromPicker().then((downloadPath) => {\n                webDownloadItem.start(downloadPath + '/' + webDownloadItem.getSuggestedFileName());\n              });\n\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              // 下载任务的唯一标识。\n              console.info(\"download update guid: \" + webDownloadItem.getGuid());\n              // 下载的进度。\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n              // 当前的下载速度。\n              console.info(\"download update speed: \" + webDownloadItem.getCurrentSpeed())\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n              // 下载任务失败的错误码。\n              console.error(\"download failed last error code: \" + webDownloadItem.getLastErrorCode());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n    }\n  }\n\n}\nfunction getDownloadPathFromPicker(): Promise<string> {\n  return new Promise<string>(resolve => {\n    try {\n      const documentSaveOptions = new picker.DocumentSaveOptions();\n      documentSaveOptions.pickerMode = picker.DocumentPickerMode.DOWNLOAD\n      const documentPicker = new picker.DocumentViewPicker();\n      documentPicker.save(documentSaveOptions).then(async (documentSaveResult: Array<string>) => {\n        if (documentSaveResult.length <= 0) {\n          resolve('');\n          return;\n        }\n        const uriString = documentSaveResult[0];\n        if (!uriString) {\n          resolve('');\n          return;\n        }\n        const uri = new fileUri.FileUri(uriString);\n        resolve(uri.path);\n      }).catch((err: BusinessError) => {\n        console.error(`ErrorCode: ${err.code},  Message: ${err.message}`);\n        resolve('');\n      });\n    } catch (error) {\n      resolve('');\n    }\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(907393)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件的下载功能要求应用通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem/arkts-apis-webview-webdownloaditem#start11",
        children: "WebDownloadItem.start"
      }), "来指定下载文件的保存路径。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["值得注意的是，WebDownloadItem.start并非启动下载，下载过程实际上在用户点击页面链接时即已开始。WebDownloadItem.start的作用是将已经下载到临时文件的部分移动到指定目标路径，后续未完成的下载的内容将直接保存到指定目标路径，临时目录位于/data/storage/el2/base/cache/web/Temp/。如果决定取消当前下载，应调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem/arkts-apis-webview-webdownloaditem#cancel11",
        children: "WebDownloadItem.cancel"
      }), "，此时临时文件将被删除。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果不希望在WebDownloadItem.start之前将文件下载到临时目录，可以通过WebDownloadItem.cancel中断下载，后续可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloadmanager/arkts-apis-webview-webdownloadmanager#resumedownload11",
        children: "WebDownloadManager.resumeDownload"
      }), "恢复中断的下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用web组件恢复进程退出时未下载完成的任务",
      children: "使用Web组件恢复进程退出时未下载完成的任务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Web组件启动时，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloadmanager/arkts-apis-webview-webdownloadmanager#resumedownload11",
        children: "resumeDownload()"
      }), "接口恢复未完成的下载任务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例中，通过“record”按钮将当前下载任务保存至持久化文件中，应用重启后，可借助“recovery”按钮恢复持久化的下载任务。示例代码实现了将当前下载任务持久化保存至文件的功能，若需保存多个下载任务，应用可根据需求调整持久化的时机与方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { DownloadUtil, fileName, filePath } from './downloadUtil'; // downloadUtil.ets 见下文\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n  download: webview.WebDownloadItem = new webview.WebDownloadItem();\n  // 用于记录失败的下载任务。\n  failedData: Uint8Array = new Uint8Array();\n\n  aboutToAppear(): void {\n    DownloadUtil.init(this.getUIContext());\n  }\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info('will start a download.');\n              // 传入一个下载路径，并开始下载。\n              // 如果传入一个不存在的路径，则会下载到默认/data/storage/el2/base/cache/web/目录。\n              webDownloadItem.start('/data/storage/el2/base/cache/web/' + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info('download update percent complete: ' + webDownloadItem.getPercentComplete());\n              this.download = webDownloadItem;\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error('download failed guid: ' + webDownloadItem.getGuid());\n              // 序列化失败的下载任务到一个字节数组。\n              this.failedData = webDownloadItem.serialize();\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info('download finish guid: ' + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n            webview.WebDownloadManager.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            // 这里指定下载地址为 `https://www.example.com/，Web组件会发起一个下载任务将该页面下载下来`。\n            // 开发者需要替换为自己想要下载的内容的地址。\n            this.controller.startDownload('https://www.example.com/');\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      // 将当前的下载任务信息序列化保存，用于后续恢复下载任务。\n      // 当前用例仅展示下载一个任务的场景，多任务场景请按需扩展。\n      Button('record')\n        .onClick(() => {\n          try {\n            // 保存当前下载数据到持久化文档中。\n            DownloadUtil.saveDownloadInfo(DownloadUtil.uint8ArrayToStr(this.download.serialize()));\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      // 从序列化的下载任务信息中，恢复下载任务。\n      // 按钮触发时必须保证WebDownloadManager.setDownloadDelegate设置完成。\n      Button('recovery')\n        .onClick(() => {\n          try {\n            // 当前默认持久化文件存在，用户根据实际情况增加判断。\n            let webDownloadItem =\n              webview.WebDownloadItem.deserialize(\n                DownloadUtil.strToUint8Array(DownloadUtil.readFileSync(filePath, fileName)));\n            webview.WebDownloadManager.resumeDownload(webDownloadItem);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载任务信息持久化工具类文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { util } from '@kit.ArkTS';\nimport { fileIo } from '@kit.CoreFileKit';\n\nconst helper = new util.Base64Helper();\n\nexport let filePath : string;\nexport const fileName = 'demoFile.txt';\nexport namespace  DownloadUtil {\n  \n  export function init(context: UIContext): void {\n    filePath = context.getHostContext()!.filesDir;\n  }\n\n  export function uint8ArrayToStr(uint8Array: Uint8Array): string {\n    return helper.encodeToStringSync(uint8Array);\n  }\n\n  export function strToUint8Array(str: string): Uint8Array {\n    return helper.decodeSync(str);\n  }\n\n  export function saveDownloadInfo(downloadInfo: string): void {\n    if (!fileExists(filePath)) {\n      mkDirectorySync(filePath);\n    }\n\n    writeToFileSync(filePath, fileName, downloadInfo);\n  }\n\n  export function fileExists(filePath: string): boolean {\n    try {\n      return fileIo.accessSync(filePath);\n    } catch (error) {\n      return false;\n    }\n  }\n\n  export function mkDirectorySync(directoryPath: string, recursion?: boolean): void {\n    try {\n      fileIo.mkdirSync(directoryPath, recursion ?? false);\n    } catch (error) {\n      console.error(`mk dir error. err message: ${error.message}, err code: ${error.code}`);\n    }\n  }\n\n  export function writeToFileSync(dir: string, fileName: string, msg: string): void {\n    let file = fileIo.openSync(dir + '/' + fileName, fileIo.OpenMode.WRITE_ONLY | fileIo.OpenMode.CREATE);\n    fileIo.writeSync(file.fd, msg);\n  }\n\n  export function readFileSync(dir: string, fileName: string): string {\n    return fileIo.readTextSync(dir + '/' + fileName);\n  }\n\n}\n"
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
907393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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