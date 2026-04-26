"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["660119"], {
98067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_storage_service_cloudfoundation_storage_upload_file_cloudfoundation_storage_upload_file_md_0cf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-storage-service-cloudfoundation-storage-upload-file-cloudfoundation-storage-upload-file-md-0cf.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_storage_service_cloudfoundation_storage_upload_file_cloudfoundation_storage_upload_file_md_0cf_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-upload-file/cloudfoundation-storage-upload-file","title":"上传指定文件至云侧","description":"开发者可以快速将本地设备上的文件上传至云侧，上传完后，可以前往AppGallery Connect的“云存储”页面，查看上传的文档内容。","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-upload-file/cloudfoundation-storage-upload-file.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-upload-file","slug":"/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-upload-file/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-upload-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"上传指定文件至云侧","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-storage-upload-file","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"初始化存储实例","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-initialize-bucket/"},"next":{"title":"下载云侧文件至本地","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-download-file/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-upload-file/cloudfoundation-storage-upload-file.md


const frontMatter = {
	title: '上传指定文件至云侧',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-storage-upload-file',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '上传指定文件至云侧';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "上传指定文件至云侧",
        children: "上传指定文件至云侧"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以快速将本地设备上的文件上传至云侧，上传完后，可以前往AppGallery Connect的“云存储”页面，查看上传的文档内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-initialize-bucket",
        children: "初始化存储实例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择待上传的文件，下方示例代码中使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoviewpicker/arkts-apis-photoaccesshelper-photoviewpicker",
            children: "photoAccessHelper.PhotoViewPicker"
          }), "指定需要上传的文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将待上传的文件复制到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E5%B1%9E%E6%80%A7",
            children: "context.cacheDir"
          }), "目录下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(238364)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于StorageBucket.uploadFile接口传入参数localPath只能设置为context.cacheDir目录下的文件路径，所以上传前需要先将文件复制到context.cacheDir目录下。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-cloudstorage/cloudfoundation-cloudstorage#uploadfile",
            children: "StorageBucket.uploadFile"
          }), "接口创建上传任务，监听上传任务的progress、completed、failed等事件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动上传任务。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整的示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cloudStorage } from '@kit.CloudFoundationKit';\nimport { BusinessError, request } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { GlobalContext } from '../common/GlobalContext';\n\nlet storageBucket: cloudStorage.StorageBucket = cloudStorage.bucket();\n\n@Component\nexport struct testPage {\n  build() {\n  }\n\n  // 上传指定文件至云侧\n  upload() {\n    this.selectPhoto().then((photoSelectResult: photoAccessHelper.PhotoSelectResult) => {\n      let fileUri = photoSelectResult.photoUris[0];\n      hilog.info(0x0000, 'testTag', `pick file ${fileUri}`);\n      let fileName = fileUri.split('/').pop() as string;\n      hilog.info(0x0000, 'testTag', `file name ${fileName}`);\n      let cacheFile = GlobalContext.getContext().cacheDir + '/' + fileName;\n      hilog.info(0x0000, 'testTag', `cacheFile ${cacheFile}`);\n      // 将选中文件copy至cache目录下\n      this.copyFile(fileUri, cacheFile);\n      // 上传至云存储默认实例\n      this.uploadFile(cacheFile, `screenshot/${fileName}`);\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', `Failed to upload file, code: ${err.code}, message: ${err.message}`);\n    })\n  }\n\n  /**\n   * @throws photoViewPicker select throws\n   */\n  selectPhoto(): Promise<photoAccessHelper.PhotoSelectResult> {\n    // 使用photoAccessHelper选择指定的文件\n    let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n    photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE; // 过滤选择媒体文件类型为IMAGE\n    photoSelectOptions.maxSelectNumber = 1; // 选择媒体文件的最大数目\n    let photoViewPicker = new photoAccessHelper.PhotoViewPicker();\n    return photoViewPicker.select(photoSelectOptions);\n  }\n\n  copyFile(srcPath: string, dstPath: string) {\n    try {\n      let srcFile = fileIo.openSync(srcPath);\n      let dstFile = fileIo.openSync(dstPath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n      fileIo.copyFileSync(srcFile.fd, dstFile.fd);\n      fileIo.closeSync(srcFile);\n      fileIo.closeSync(dstFile);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `copy file failed ${e.message}`);\n      return;\n    }\n  }\n\n  uploadFile(localPath: string, cloudPath: string) {\n    storageBucket.uploadFile(GlobalContext.getContext(), {\n      localPath: localPath, // 本地文件路径（context.cacheDir目录下的文件路径）\n      cloudPath: cloudPath   // 云侧路径，支持传入“文件目录/文件名”（如“screenshot/demo.jpg”），或仅传入文件名。\n    }).then((task: request.agent.Task) => {\n      task.on('progress', (progress) => {\n        hilog.info(0x0000, 'testTag', `on progress ${JSON.stringify(progress)}`);\n      });\n      task.on('completed', (progress) => {\n        hilog.info(0x0000, 'testTag', `on completed ${JSON.stringify(progress)}`);\n        // 删除cache目录临时文件\n        fileIo.unlink(localPath).catch((err: BusinessError) => {\n          hilog.error(0x0000, 'testTag', `Failed to unlink, code: ${err.code}, message: ${err.message}.`);\n        });\n      });\n      task.on('failed', (progress) => {\n        hilog.info(0x0000, 'testTag', `on failed ${JSON.stringify(progress)}`);\n        // 删除cache目录临时文件\n        fileIo.unlink(localPath).catch((err: BusinessError) => {\n          hilog.error(0x0000, 'testTag', `Failed to unlink, code: ${err.code}, message: ${err.message}.`);\n        });\n      });\n      task.on('response', (response) => {\n        hilog.info(0x0000, 'testTag', `on response ${JSON.stringify(response)}`);\n      });\n\n      // start task\n      task.start((err: BusinessError) => {\n        if (err) {\n          hilog.error(0x0000, 'testTag',\n            `Failed to start a file upload task, code: ${err.code}, message: ${err.message}`);\n        } else {\n          hilog.info(0x0000, 'testTag', `Succeeded in starting a file upload task.`);\n        }\n      });\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', `Failed to upload file, code: ${err.code}, message: ${err.message}`);\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(39181)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上传完成，可以登录", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "，选择项目，进入“云存储”界面查看文件列表。"]
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
238364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
39181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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