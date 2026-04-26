"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["50810"], {
587671(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_upload_download_app_file_upload_download_app_file_upload_download_md_8b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-upload-download-app-file-upload-download-app-file-upload-download-md-8b6.json
var site_docs_system_basicfun_basic_services_kit_upload_download_app_file_upload_download_app_file_upload_download_md_8b6_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/upload-download/app-file-upload-download/app-file-upload-download","title":"应用文件上传下载","description":"应用支持将文件上传到网络服务器，也支持从网络服务器下载资源文件到本地目录。","source":"@site/docs/system-basicfun/basic-services-kit/upload-download/app-file-upload-download/app-file-upload-download.md","sourceDirName":"system-basicfun/basic-services-kit/upload-download/app-file-upload-download","slug":"/system-basicfun/basic-services-kit/upload-download/app-file-upload-download/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/upload-download/app-file-upload-download/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用文件上传下载","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-upload-download","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用剪贴板进行延迟复制粘贴","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/pasteboard-time-lapse-copy-and-paste/"},"next":{"title":"压缩与解压","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/compress/deflate-and-inflate/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/upload-download/app-file-upload-download/app-file-upload-download.md


const frontMatter = {
	title: '应用文件上传下载',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-upload-download',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '应用文件上传下载';

const assets = {

};



const toc = [{
  "value": "上传应用文件",
  "id": "上传应用文件",
  "level": 2
}, {
  "value": "下载网络资源文件至应用文件目录",
  "id": "下载网络资源文件至应用文件目录",
  "level": 2
}, {
  "value": "下载网络资源文件至用户文件",
  "id": "下载网络资源文件至用户文件",
  "level": 2
}, {
  "value": "下载文档类文件",
  "id": "下载文档类文件",
  "level": 3
}, {
  "value": "下载音频类文件",
  "id": "下载音频类文件",
  "level": 3
}, {
  "value": "下载图片或视频类文件",
  "id": "下载图片或视频类文件",
  "level": 3
}, {
  "value": "添加任务速度限制与超时限制",
  "id": "添加任务速度限制与超时限制",
  "level": 2
}, {
  "value": "添加网络配置",
  "id": "添加网络配置",
  "level": 2
}, {
  "value": "HTTP拦截",
  "id": "http拦截",
  "level": 3
}, {
  "value": "使用WantAgent实现通知栏跳转功能",
  "id": "使用wantagent实现通知栏跳转功能",
  "level": 2
}, {
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 3
}, {
  "value": "配置说明",
  "id": "配置说明",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用文件上传下载",
        children: "应用文件上传下载"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用支持将文件上传到网络服务器，也支持从网络服务器下载资源文件到本地目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "上传应用文件",
      children: "上传应用文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用上传下载模块（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request",
        children: "ohos.request"
      }), "）的上传接口将本地文件上传。文件上传过程通过系统服务代理完成。在API version 12中，request.agent.create接口增加了设置代理地址的参数，支持设置自定义代理地址。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711544)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "· 当前上传应用文件功能，request.uploadFile方式仅支持上传应用缓存文件路径（cacheDir）下的文件，request.agent方式支持上传用户公共文件和应用缓存文件路径下的文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["· 使用上传下载模块，需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "：ohos.permission.INTERNET。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "· 上传下载模块不支持Charles、Fiddler等代理抓包工具。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["· 上传下载模块接口目前暂不支持子线程调用场景，如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction",
        children: "TaskPool"
      }), "等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码展示了两种将缓存文件上传至服务器的方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async requestUploadFile(fileName: string, callback: (progress: number, isSuccess: boolean) => void,\n  context: common.UIAbilityContext) {\n  // 获取应用文件路径\n  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n  let url = await urlUtils.getUrl(context);\n  let cacheDir = context.cacheDir;\n\n  // 新建一个本地应用文件\n  try {\n    let file = fs.openSync(cacheDir + '/test.txt', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n    fs.writeSync(file.fd, 'upload file test');\n    fs.closeSync(file);\n  } catch (error) {\n    let err: BusinessError = error as BusinessError;\n    logger.error(TAG, `Invoke uploadFile failed, code=${err.code}, message=${err.message}`);\n  }\n\n  // 上传任务配置项\n  let files: request.File[] = [\n  //uri前缀internal://cache 对应cacheDir目录\n    {\n      filename: fileName,\n      name: 'test',\n      uri: 'internal://cache/' + fileName,\n      type: 'txt'\n    }\n  ]\n  let data: request.RequestData[] = [{ name: 'name', value: 'value' }];\n  let uploadConfig: request.UploadConfig = {\n    url: url,\n    header: {\n      'key1': 'value1',\n      'key2': 'value2'\n    },\n    method: 'POST',\n    files: files,\n    data: data\n  }\n\n  // 将本地应用文件上传至网络服务器\n  try {\n    request.uploadFile(context, uploadConfig)\n      .then((uploadTask: request.UploadTask) => {\n        uploadTask.on('complete', (taskStates: Array<request.TaskState>) => {\n          for (let i = 0; i < taskStates.length; i++) {\n            logger.info(TAG, `upload complete taskState: ${JSON.stringify(taskStates[i])}`);\n          }\n          callback(100, true);\n        });\n      })\n      .catch((err: BusinessError) => {\n        logger.error(TAG, `Invoke uploadFile failed, code=${err.code}, message=${err.message}`);\n      })\n  } catch (error) {\n    let err: BusinessError = error as BusinessError;\n    logger.error(TAG, `Invoke uploadFile failed, code=${err.code}, message=${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async requestAgentUpload(fileName: string, callback: (progress: number, isSucceed: boolean) => void,\n  context: common.UIAbilityContext) {\n  // 获取应用文件路径\n  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n  let url = await urlUtils.getUrl(context);\n  let cacheDir = context.cacheDir;\n\n  let attachments: request.agent.FormItem[] = [{\n    name: 'test',\n    value: [\n      {\n        filename: fileName,\n        path: cacheDir + '/' + fileName,\n      },\n    ]\n  }];\n  let config: request.agent.Config = {\n    action: request.agent.Action.UPLOAD,\n    url: url,\n    mode: request.agent.Mode.FOREGROUND,\n    overwrite: true,\n    method: 'POST',\n    headers: {\n      'key1': 'value1',\n      'key2': 'value2'\n    },\n    data: attachments\n  };\n  request.agent.create(context, config).then((task: request.agent.Task) => {\n    task.start((err: BusinessError) => {\n      if (err) {\n        logger.error(TAG, `Failed to start the upload task, code=${err.code}, message=${err.message}`);\n        return;\n      }\n    });\n    task.on('progress', async (progress) => {\n      logger.info(TAG, `Request upload status ${progress.state}, uploaded ${progress.processed}`);\n    })\n    task.on('completed', async () => {\n      logger.info(TAG, `Request upload completed`);\n      callback(100, true);\n      // 该方法需用户管理任务生命周期，任务结束后调用remove释放task对象\n      request.agent.remove(task.tid);\n    })\n  }).catch((err: BusinessError) => {\n    logger.error(TAG, `Failed to start the upload task, code=${err.code}, message=${err.message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "下载网络资源文件至应用文件目录",
      children: "下载网络资源文件至应用文件目录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用上传下载模块（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request",
        children: "ohos.request"
      }), "）的下载接口将网络资源文件下载到应用文件目录。对已下载的网络资源应用文件，开发者可以使用基础文件IO接口（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
        children: "ohos.file.fs"
      }), "）对其进行访问，使用方式与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
        children: "应用文件访问"
      }), "一致。文件下载过程使用系统服务代理完成，在api12中request.agent.create接口增加了设置代理地址参数，支持用户设置自定义代理地址。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(359)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前网络资源文件仅支持下载至应用文件目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用上传下载模块，需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "：ohos.permission.INTERNET。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码展示了将网络资源文件下载到应用内部文件目录的两种方法（示例requestDownloadFile中的clearExistFile方法可点击代码块右下角链接查看）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async requestDownloadFile(url: string, fileName: string, callback: (progress: number, isSuccess: boolean) => void,\n  context: common.UIAbilityContext) {\n  // 获取应用文件路径\n  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n  let filesDir = context.cacheDir;\n  let filePath = filesDir + '/' + fileName;\n  this.clearExistFile(filePath);\n  try {\n    await request.downloadFile(context, {\n      url: url,\n      filePath: filePath,\n    }).then((downloadTask: request.DownloadTask) => {\n      downloadTask.on('complete', () => {\n        // 获取文件状态信息，其中包含大小\n        let fileStat = fileIo.statSync(filePath);\n        let fileSize = fileStat.size;\n        logger.info(TAG, `download complete, file= ${url}, size=${fileSize}, progress = 100%`);\n        callback(100, true);\n      })\n    }).catch((err: BusinessError) => {\n      logger.error(TAG, `downloadFile error, code=${err.code}, message=${err.message}`);\n    });\n  } catch (error) {\n    let err: BusinessError = error as BusinessError;\n    logger.error(TAG, `downloadFile catch error, code=${err.code}, message=${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async requestAgentDownload(url: string, fileName: string, callback: (progress: number, isSuccess: boolean) => void,\n  context: common.UIAbilityContext) {\n  // 获取应用文件路径\n  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n  let filesDir = context.cacheDir;\n\n  let config: request.agent.Config = {\n    action: request.agent.Action.DOWNLOAD,\n    url: url,\n    saveas: fileName,\n    gauge: true,\n    overwrite: true,\n    network: request.agent.Network.WIFI,\n  };\n  await request.agent.create(context, config).then((task: request.agent.Task) => {\n    task.start((error: BusinessError) => {\n      if (error) {\n        logger.error(TAG, `start agent download task error, code=${error.code}, message=${error.message}`);\n        return;\n      }\n    });\n    task.on('progress', async (progress) => {\n      logger.info(TAG, `Request download status ${progress.state}, downloaded ${progress.processed}`);\n    })\n    task.on('completed', async () => {\n      logger.info(TAG, `Request download completed`);\n      let filePath = filesDir + '/' + fileName;\n      // 获取文件状态信息，其中包含大小\n      let fileStat = fileIo.statSync(filePath);\n      let fileSize = fileStat.size;\n      logger.info(TAG, `download complete, file= ${url}, size=${fileSize}, progress = 100%`);\n      callback(100, true);\n      request.agent.remove(task.tid);\n    })\n  }).catch((err: BusinessError) => {\n    logger.error(TAG, `download agent task catch error, code=${err.code}, message=${err.message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "下载网络资源文件至用户文件",
      children: "下载网络资源文件至用户文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request",
        children: "ohos.request"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request#requestagentcreate10",
        children: "request.agent"
      }), "接口下载网络资源文件到指定的用户文件目录。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193986)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始支持下载网络资源文件至用户文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "下载文档类文件",
      children: "下载文档类文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentviewpicker",
        children: "DocumentViewPicker"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#save",
        children: "save()"
      }), "接口保存文件并获得用户文件的uri，将此uri作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request#requestagentconfig10",
        children: "Config"
      }), "的saveas字段值进行下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async docFileAgentTask(url: string, fileName: string, callback: (progress: number, isSuccess: boolean) => void,\n  context: common.UIAbilityContext) {\n  // 创建文件管理器选项实例。\n  try {\n    const documentSaveOptions = new picker.DocumentSaveOptions();\n    // 保存文件名（可选）。 默认为空。\n    documentSaveOptions.newFileNames = [fileName];\n    // 保存文件类型['后缀类型描述|后缀类型']，选择所有文件：'所有文件(*.*)|.*'（可选），如果选择项存在多个后缀（最大限制100个过滤后缀），默认选择第一个。如果不传该参数，默认无过滤后缀。\n    documentSaveOptions.fileSuffixChoices = ['文档|.txt', '.pdf'];\n    let uri: string = '';\n    // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n    const documentViewPicker = new picker.DocumentViewPicker(context);\n    await documentViewPicker.save(documentSaveOptions).then((documentSaveResult: Array<string>) => {\n      uri = documentSaveResult[0];\n      logger.info(TAG, `DocumentViewPicker.save to file succeed and uri is ${uri}`);\n    }).catch((err: BusinessError) => {\n      logger.error(TAG, `documentViewPicker.save error, code=${err.code}, message=${err.message}`);\n    })\n    if (uri != '') {\n      let config: request.agent.Config = {\n        action: request.agent.Action.DOWNLOAD,\n        url: url,\n        // saveas字段是DocumentViewPicker保存的文件的uri\n        saveas: uri,\n        gauge: true,\n        // overwrite字段必须为true\n        overwrite: true,\n        network: request.agent.Network.WIFI,\n        // mode字段必须为request.agent.Mode.FOREGROUND\n        mode: request.agent.Mode.FOREGROUND,\n      };\n      try {\n        await request.agent.create(context, config).then((task: request.agent.Task) => {\n          task.start((err: BusinessError) => {\n            if (err) {\n              logger.error(TAG, `start download task error, code=${err.code}, message=${err.message}`);\n              return;\n            }\n          });\n          task.on('progress', async (progress) => {\n            logger.info(TAG, `download status ${progress.state}, downloaded ${progress.processed}`);\n          })\n          task.on('completed', async (progress) => {\n            logger.info(TAG, `download completed ${JSON.stringify(progress)}`);\n            callback(100, true);\n            // 该方法需用户管理任务生命周期，任务结束后调用remove释放task对象\n            request.agent.remove(task.tid);\n          })\n        }).catch((err: BusinessError) => {\n          logger.error(TAG, `Failed to operate a download task, Code: ${err.code}, message: ${err.message}`);\n        });\n      } catch (error) {\n        let err: BusinessError = error as BusinessError;\n        logger.error(TAG, `Failed to create a download task, code=${err.code}, message=${err.message}`);\n      }\n    }\n  } catch (error) {\n    let err: BusinessError = error as BusinessError;\n    logger.error(TAG, `Failed to create a documentSaveOptions, code=${err.code}, message=${err.message}`);\n    return;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "下载音频类文件",
      children: "下载音频类文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#audioviewpicker",
        children: "AudioViewPicker"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#save-3",
        children: "save()"
      }), "接口保存文件并获得用户文件的uri，将此uri作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request#requestagentconfig10",
        children: "Config"
      }), "的saveas字段值进行下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async audioFileAgentTask(url: string, fileName: string, callback: (progress: number, isSuccess: boolean) => void,\n  context: common.UIAbilityContext) {\n  // 创建文件管理器选项实例。\n  const audioSaveOptions = new picker.AudioSaveOptions();\n  // 保存文件名（可选）。 默认为空。\n  audioSaveOptions.newFileNames = [fileName];\n\n  let uri: string = '';\n  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n  const audioViewPicker = new picker.AudioViewPicker(context);\n  await audioViewPicker.save(audioSaveOptions).then((audioSelectResult: Array<string>) => {\n    uri = audioSelectResult[0];\n    logger.info(TAG, `AudioViewPicker.save to file succeed and uri is ${uri}`);\n  }).catch((err: BusinessError) => {\n    logger.error(TAG, `Invoke audioViewPicker.save failed, code is ${err.code}, message is ${err.message}`);\n  })\n  if (uri != '') {\n    let config: request.agent.Config = {\n      action: request.agent.Action.DOWNLOAD,\n      url: url,\n      // saveas字段是AudioViewPicker保存的文件的uri\n      saveas: uri,\n      gauge: true,\n      // overwrite字段必须为true\n      overwrite: true,\n      network: request.agent.Network.WIFI,\n      // mode字段必须为request.agent.Mode.FOREGROUND\n      mode: request.agent.Mode.FOREGROUND,\n    };\n    try {\n      request.agent.create(context, config).then((task: request.agent.Task) => {\n        task.start((err: BusinessError) => {\n          if (err) {\n            logger.error(TAG, `Failed to start the download task, Code: ${err.code}  message: ${err.message}`);\n            return;\n          }\n        });\n        task.on('progress', async (progress) => {\n          logger.info(TAG, `Request download status ${progress.state}, downloaded ${progress.processed}`);\n        })\n        task.on('completed', async (progress) => {\n          logger.info(TAG, `Request download completed, ${JSON.stringify(progress)}`);\n          callback(100, true);\n          // 该方法需用户管理任务生命周期，任务结束后调用remove释放task对象.\n          request.agent.remove(task.tid);\n        })\n      }).catch((err: BusinessError) => {\n        logger.error(TAG, `Failed to create a download task, code=${err.code}, message=${err.message}`);\n      });\n    } catch (error) {\n      let err: BusinessError = error as BusinessError;\n      logger.error(TAG, `Failed to create a audio download task, code=${err.code}, message=${err.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "下载图片或视频类文件",
      children: "下载图片或视频类文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过调用PhotoAccessHelper", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper/arkts-apis-photoaccesshelper",
        children: "模块描述"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#createasset-2",
        children: "createAsset()"
      }), "接口创建媒体文件并获取用户文件的URI，将其作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request#requestagentconfig10",
        children: "Config"
      }), "的saveas字段值进行下载。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要权限：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionwrite_imagevideo",
        children: "ohos.permission.WRITE_IMAGEVIDEO"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["权限", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionwrite_imagevideo",
        children: "ohos.permission.WRITE_IMAGEVIDEO"
      }), "是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E6%9C%BA%E5%88%B6%E4%B8%AD%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
        children: "权限机制中的基本概念"
      }), "中system_basic(系统基础服务)级别的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
        children: "受限开放权限"
      }), "，normal等级的应用需要将自身的APL等级声明为system_basic及以上。授权方式为user_grant，需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请授权"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async mediaFileAgentTask(url: string, callback: (progress: number, isSuccess: boolean) => void,\n  context: common.UIAbilityContext) {\n  let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION |\n  bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_METADATA;\n  // 获取应用程序的accessTokenID。\n  let tokenID = -1;\n  try {\n    await bundleManager.getBundleInfoForSelf(bundleFlags).then((data) => {\n      logger.info(TAG, `Request getBundleInfoForSelf successfully. Data: ${JSON.stringify(data)}`);\n      tokenID = data.appInfo.accessTokenId;\n    }).catch((err: BusinessError) => {\n      logger.error(TAG, `GetBundleInfoForSelf failed, code=${err.code}, message=${err.message}`);\n    });\n  } catch (err) {\n    let message = (err as BusinessError).message;\n    logger.error(`GetBundleInfoForSelf failed: ${message}`);\n  }\n\n  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n  let grant = true;\n  // 校验应用是否授予权限。使用Promise异步回调。\n  await atManager.checkAccessToken(tokenID, 'ohos.permission.WRITE_IMAGEVIDEO')\n    .then((data: abilityAccessCtrl.GrantStatus) => {\n      logger.info(TAG, `Request checkAccessToken success, data->${JSON.stringify(data)}`);\n      if (data != abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED) {\n        grant = false;\n      }\n    })\n    .catch((err: BusinessError) => {\n      logger.error(TAG, `CheckAccessToken fail, code=${err.code}, message=${err.message}`);\n    });\n\n  if (!grant) {\n    // 用于UIAbility拉起弹框请求用户授权。使用callback异步回调。\n    await atManager.requestPermissionsFromUser(context, ['ohos.permission.WRITE_IMAGEVIDEO'])\n      .then((data: PermissionRequestResult) => {\n        logger.info(TAG, `Request grant: ${JSON.stringify(data)}`);\n        logger.info(TAG, `Request grant permissions: ${data.permissions}`);\n        logger.info(TAG, `Request grant authResults: ${data.authResults}`);\n        logger.info(TAG, `Request grant dialogShownResults: ${data.dialogShownResults}`);\n      }).catch((err: BusinessError) => {\n        logger.error(TAG, `Grant error, code=${err.code}, message=${err.message}`);\n      });\n  }\n\n  try {\n    let photoType: photoAccessHelper.PhotoType = photoAccessHelper.PhotoType.IMAGE;\n    let extension: string = 'jpg';\n    let options: photoAccessHelper.CreateOptions = {\n      title: 'media'\n    }\n    // 获取相册管理模块的实例，用于访问和修改相册中的媒体文件。\n    let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n    // 指定文件类型、后缀和创建选项，创建图片或视频资源，以Promise方式返回结果。\n    let uri: string = await phAccessHelper.createAsset(photoType, extension, options);\n    logger.info(TAG, `Request createAsset uri ${uri}`);\n\n    let config: request.agent.Config = {\n      action: request.agent.Action.DOWNLOAD,\n      url: url,\n      // saveas字段是PhotoAccessHelper保存的文件的uri\n      saveas: uri,\n      gauge: true,\n      // overwrite字段必须为true\n      overwrite: true,\n      network: request.agent.Network.WIFI,\n      // mode字段必须为request.agent.Mode.FOREGROUND\n      mode: request.agent.Mode.FOREGROUND,\n    };\n    request.agent.create(context, config).then((task: request.agent.Task) => {\n      task.start((err: BusinessError) => {\n        if (err) {\n          logger.error(TAG, `Failed to start the download task, Code: ${err.code}  message: ${err.message}`);\n          return;\n        }\n      });\n      task.on('progress', async (progress) => {\n        logger.info(TAG, `Request download status ${progress.state}, downloaded ${progress.processed}`);\n      })\n      task.on('completed', async (progress) => {\n        logger.info(TAG, `Request download completed, ${JSON.stringify(progress)}`);\n        callback(100, true);\n        // 该方法需用户管理任务生命周期，任务结束后调用remove释放task对象\n        request.agent.remove(task.tid);\n      })\n    }).catch((err: BusinessError) => {\n      logger.error(TAG, `Failed to operate a download task, Code: ${err.code}, message: ${err.message}`);\n    });\n  } catch (error) {\n    let err: BusinessError = error as BusinessError;\n    logger.error(TAG, `Failed to create a media download task, code=${err.code}, message=${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加任务速度限制与超时限制",
      children: "添加任务速度限制与超时限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request",
        children: "ohos.request (上传下载)"
      }), "模块中的接口上传本地文件或下载网络资源文件。为方便对任务速度及时长进行限制，分别在API version 18中增加了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request#setmaxspeed18",
        children: "setMaxSpeed"
      }), "接口，支持用户设置任务的最高速度限制；在API version 20的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request#requestagentcreate10-1",
        children: "request.agent.create"
      }), "接口中增加了最低限速及超时参数，支持用户自定义最低速度限制以及超时时间。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是对下载任务进行速度限制与超时限制的方式的示例代码演示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async speedLimitDownload(url: string, fileName: string, callback: (progress: number, isSuccess: boolean) => void,\n  context: common.UIAbilityContext) {\n  // 获取应用文件路径\n  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n  let filesDir = context.cacheDir;\n\n  let config: request.agent.Config = {\n    action: request.agent.Action.DOWNLOAD,\n    url: url,\n    saveas: fileName,\n    gauge: true,\n    overwrite: true,\n    network: request.agent.Network.WIFI,\n    // 最低速度限制规则：\n    // 1. 若任务速度持续低于设定值（如：16 * 1024 B/s）达到指定时长（如：10s），则任务失败\n    // 2. 重置计时条件：\n    // - 任一秒速度超过最低限速\n    // - 任务暂停后恢复\n    // - 任务停止后重启\n    minSpeed: {\n      speed: 16 * 1024,\n      duration: 10\n    },\n    // 超时控制规则：\n    // 1. 连接超时（connectionTimeout）：\n    // - 单次连接建立耗时超过设定值（如：60s）则任务失败\n    // - 多次连接时各次独立计时（不累积）\n    // 2. 总超时（totalTimeout）：\n    // - 任务总耗时（含连接+传输时间）超过设定值（如：120s）则失败\n    // - 暂停期间不计时，恢复后累积计时\n    // 3. 重置计时条件：任务失败或停止时重置计时\n    timeout: {\n      connectionTimeout: 60,\n      totalTimeout: 120,\n    }\n  };\n  request.agent.create(context, config).then((task: request.agent.Task) => {\n    // 设置任务速度上限\n    task.setMaxSpeed(10 * 1024 * 1024).then(() => {\n      logger.info(TAG, `Succeeded in setting the max speed of the task. result: ${task.tid}`);\n    }).catch((err: BusinessError) => {\n      logger.error(TAG, `Failed to set the max speed of the task, code=${err.code}, message=${err.message}`);\n    });\n    task.start((err: BusinessError) => {\n      if (err) {\n        logger.error(TAG, `Failed to start the download task, code=${err.code}, message=${err.message}`);\n        return;\n      }\n    });\n    task.on('progress', async (progress) => {\n      logger.info(TAG, `Request download status ${progress.state}, downloaded ${progress.processed}`);\n    })\n    task.on('completed', async () => {\n      logger.info(TAG, `Request download completed`);\n      // 获取文件状态信息，其中包含大小\n      let filePath = filesDir + '/' + fileName;\n      // 获取文件状态信息，其中包含大小\n      let fileStat = fileIo.statSync(filePath);\n      let fileSize = fileStat.size;\n      logger.info(TAG, `download complete, file= ${url}, size=${fileSize}, progress = 100%`);\n      callback(100, true);\n      request.agent.remove(task.tid);\n    })\n  }).catch((err: BusinessError) => {\n    logger.error(TAG, `Failed to create a download task, Code: ${err.code}, message: ${err.message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加网络配置",
      children: "添加网络配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http拦截",
      children: "HTTP拦截"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过设置配置文件实现HTTP拦截功能。上传下载模块在应用配置文件中禁用HTTP后，无法创建明文HTTP传输的上传下载任务。配置文件在APP中的路径是：src/main/resources/base/profile/network_config.json。请参考网络管理模块配置文件", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-network-ca-security#section5454123841911",
        children: "网络连接安全配置"
      }), "，了解需要配置的具体参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置文件如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"network-security-config\": {\n    \"base-config\": {\n      \"cleartextTrafficPermitted\": true,\n      \"trust-anchors\": [\n        {\n          \"certificates\": \"/etc/security/certificates\"\n        }\n      ]\n    },\n    \"domain-config\": [\n      {\n        \"cleartextTrafficPermitted\": true,\n        \"domains\": [\n          {\n            \"include-subdomains\": true,\n            \"name\": \"*.example.com\"\n          }\n        ],\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用wantagent实现通知栏跳转功能",
      children: "使用WantAgent实现通知栏跳转功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
        children: "wantAgent"
      }), "接口与上传下载模块结合，实现点击任务通知后跳转至应用指定页面的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过在下载任务的配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request#requestagentnotification15",
        children: "request.agent.Notification"
      }), "中设置wantAgent参数，开发者可以指定用户点击通知后要跳转的应用页面及相关参数。当用户点击正在进行或已完成的下载任务通知时，系统会根据wantAgent参数启动指定的应用能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码展示了如何创建一个带有wantAgent功能的下载任务："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async wantAgentDownload(url: string, fileName: string, callback: (progress: number, isSuccess: boolean) => void,\n  context: common.UIAbilityContext) {\n  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n\n  // 创建wantAgentInfo对象，用于定义点击通知后要执行的操作\n  let wantAgentInfo: wantAgent.WantAgentInfo = {\n    wants: [\n      {\n        deviceId: '',\n        bundleName: 'com.samples.uploaddownloadguide', // 替换为实际应用的包名\n        abilityName: 'EntryAbility', // 替换为实际的ability名称\n        action: '',\n        entities: [],\n        uri: '',\n        parameters: {} // 可以传递自定义参数\n      }\n    ],\n    actionType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags: [wantAgent.WantAgentFlags.CONSTANT_FLAG]\n  };\n\n  // 获取WantAgent实例\n  let wantAgentInstance: WantAgent;\n  try {\n    wantAgentInstance = await wantAgent.getWantAgent(wantAgentInfo);\n  } catch (error) {\n    logger.error(TAG, `Failed to get WantAgent, Code: ${error.code}  message: ${error.message}`);\n    return;\n  }\n\n  let filesDir = context.cacheDir;\n  // 创建下载任务配置，包含wantAgent参数\n  let config: request.agent.Config = {\n    action: request.agent.Action.DOWNLOAD,\n    url: url, // 替换为实际的下载地址\n    title: '下载任务通知标题',\n    description: '下载任务通知描述',\n    mode: request.agent.Mode.BACKGROUND,\n    overwrite: true,\n    method: 'GET',\n    saveas: fileName,\n    network: request.agent.Network.ANY,\n    gauge: true,\n    notification: {\n      visibility: request.agent.VISIBILITY_COMPLETION | request.agent.VISIBILITY_PROGRESS,\n      wantAgent: wantAgentInstance,\n    }\n  };\n\n  // 创建并启动下载任务\n  try {\n    request.agent.create(context, config).then((task: request.agent.Task) => {\n      task.start((err: BusinessError) => {\n        if (err) {\n          logger.error(TAG, `Failed to start the download task, Code: ${err.code}  message: ${err.message}`);\n          return;\n        }\n      });\n      task.on('progress', async (progress) => {\n        logger.error(TAG, `Request download status ${progress.state}, downloaded ${progress.processed}`);\n      })\n      task.on('completed', async (progress) => {\n        console.warn('Request download completed, ' + JSON.stringify(progress));\n        logger.error(TAG, `Request download completed, ${JSON.stringify(progress)}`);\n        // 获取文件状态信息，其中包含大小\n        let filePath = filesDir + '/' + fileName;\n        // 获取文件状态信息，其中包含大小\n        let fileStat = fileIo.statSync(filePath);\n        let fileSize = fileStat.size;\n        logger.info(TAG, `download complete, file= ${url}, size=${fileSize}, progress = 100%`);\n        callback(100, true);\n        // 该方法需用户管理任务生命周期，任务结束后调用remove释放task对象\n        request.agent.remove(task.tid);\n      })\n    }).catch((err: BusinessError) => {\n      logger.error(TAG, `Failed to operate a download task, Code: ${err.code}, message: ${err.message}`);\n    });\n  } catch (error) {\n    let err: BusinessError = error as BusinessError;\n    logger.error(TAG, `Failed to operate a download task, Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置说明",
      children: "配置说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例代码中，我们主要通过以下几个步骤实现了通知栏跳转功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "创建WantAgentInfo对象"
          })
        }), "：定义点击通知后要执行的操作，包括目标应用的包名、ability名称和需要传递的具体参数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "获取WantAgent实例"
          })
        }), "：通过wantAgent.getWantAgent()方法获取WantAgent实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "配置下载任务"
          })
        }), "：在request.agent.Config中设置notification属性，并将wantAgent参数设置为前面获取的WantAgent实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设置通知可见性"
          })
        }), "：通过visibility参数可以控制通知显示的内容，例如进度、完成状态等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此功能仅支持API version 22及以上版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保在配置wantAgentInfo时，填写正确的应用包名和ability名称。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wantAgent参数需要与notification参数配合使用，才能在通知中显示跳转功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在实际应用中，建议根据业务需求调整通知的标题、描述、可见性以及其他相关参数。"
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
711544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
193986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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