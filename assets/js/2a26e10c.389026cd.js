"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["777682"], {
374187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_photoaccesshelper_photoviewpicker_photoaccesshelper_photoviewpicker_md_2a2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-photoaccesshelper-photoviewpicker-photoaccesshelper-photoviewpicker-md-2a2.json
var site_docs_medialibrary_kit_photoaccesshelper_photoviewpicker_photoaccesshelper_photoviewpicker_md_2a2_namespaceObject = JSON.parse('{"id":"medialibrary-kit/photoaccesshelper-photoviewpicker/photoaccesshelper-photoviewpicker","title":"使用Picker选择媒体库资源","description":"当用户需要分享图片、视频等文件时，开发者可以通过特定接口拉起系统图库，让用户自行选择待分享的资源，完成分享。此接口本身无需申请权限，目前适用于界面UIAbility，使用窗口组件触发。具体使用方式如下：","source":"@site/docs/medialibrary-kit/photoaccesshelper-photoviewpicker/photoaccesshelper-photoviewpicker.md","sourceDirName":"medialibrary-kit/photoaccesshelper-photoviewpicker","slug":"/medialibrary-kit/photoaccesshelper-photoviewpicker/","permalink":"/harmonyos-docs-site/medialibrary-kit/photoaccesshelper-photoviewpicker/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用Picker选择媒体库资源","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-photoviewpicker","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Media Library Kit 简介","permalink":"/harmonyos-docs-site/medialibrary-kit/photoaccesshelper-overview/"},"next":{"title":"保存媒体库资源","permalink":"/harmonyos-docs-site/medialibrary-kit/photoaccesshelper-savebutton/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/photoaccesshelper-photoviewpicker/photoaccesshelper-photoviewpicker.md


const frontMatter = {
	title: '使用Picker选择媒体库资源',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-photoviewpicker',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Picker选择媒体库资源';

const assets = {

};



const toc = [{
  "value": "指定URI读取文件数据",
  "id": "指定uri读取文件数据",
  "level": 2
}, {
  "value": "指定URI获取图片或视频资源",
  "id": "指定uri获取图片或视频资源",
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
        id: "使用picker选择媒体库资源",
        children: "使用Picker选择媒体库资源"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户需要分享图片、视频等文件时，开发者可以通过特定接口拉起系统图库，让用户自行选择待分享的资源，完成分享。此接口本身无需申请权限，目前适用于界面UIAbility，使用窗口组件触发。具体使用方式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(539913)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Media Library Kit提供图片和视频的管理能力，当需要读取和保存音频文件时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#audioviewpicker",
        children: "AudioViewPicker（音频选择器对象）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入选择器模块和文件管理模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建图片-音频类型文件选择选项实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置可选的媒体文件类型和媒体文件的最大数目。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例以图片选择为例，媒体文件类型请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#photoviewmimetypes",
        children: "PhotoViewMIMETypes"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "photoSelectOptions.maxSelectNumber = 5;\nphotoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;\nphotoSelectOptions.isPhotoTakingSupported = true;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建图库选择器实例，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoviewpicker/arkts-apis-photoaccesshelper-photoviewpicker#select",
            children: "PhotoViewPicker.select"
          }), "接口拉起图库界面进行文件选择。文件选择成功后，返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-class/arkts-apis-photoaccesshelper-class#photoselectresult",
            children: "PhotoSelectResult"
          }), "结果集。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const result = await photoViewPicker.select(photoSelectOptions);\n            \n// 文件选择成功后，返回PhotoSelectResult结果集\nconsole.info('选择成功，返回结果: ' + JSON.stringify(result));\nconsole.info('选择的文件数量: ' + result.photoUris.length);\n      \n// 更新选中的URI列表\nthis.selectedUris = result.photoUris;\n// 设置默认选中第一个URI用于读取操作\nif (this.selectedUris.length > 0) {\n  this.selectedUriForRead = this.selectedUris[0];\n}\n      \n// 调用工具类处理结果\nthis.processedItems = MediaLibraryPickerUtils.handleSelectResult(this.selectedUris);\nconsole.info('处理后的结果数量: ' + this.processedItems.length);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["select返回的uri权限是只读权限，可以根据结果集中uri进行读取文件数据操作。注意不能在picker的回调里直接使用此uri进行打开文件操作，需要定义一个全局变量保存uri，类似使用一个按钮去触发打开文件。可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%8C%87%E5%AE%9Auri%E8%AF%BB%E5%8F%96%E6%96%87%E4%BB%B6%E6%95%B0%E6%8D%AE",
            children: "指定URI读取文件数据"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["也可以通过返回的uri", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%8C%87%E5%AE%9Auri%E8%8E%B7%E5%8F%96%E5%9B%BE%E7%89%87%E6%88%96%E8%A7%86%E9%A2%91%E8%B5%84%E6%BA%90",
            children: "获取图片或视频资源"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如有获取元数据需求，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
            children: "文件管理接口"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fileuri/js-apis-file-fileuri",
            children: "文件URI"
          }), "根据uri获取部分文件属性信息，比如文件大小、访问时间、修改时间、文件名、文件路径等。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定uri读取文件数据",
      children: "指定URI读取文件数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["待界面从图库返回后，再通过一个类似按钮的组件去调用其他函数，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopensync",
            children: "fileIo.openSync"
          }), "接口，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/user-files/user-file-uri-intro#%E5%AA%92%E4%BD%93%E6%96%87%E4%BB%B6uri",
            children: "媒体文件uri"
          }), "打开这个文件得到fd。这里需要注意接口权限参数是fileIo.OpenMode.READ_ONLY。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const file = fileIo.openSync(uri, fileIo.OpenMode.READ_ONLY);\n  console.info('file fd: ' + file.fd);\n  return { fd: file.fd, file: file };\n} catch (error) {\n  console.error('openSync failed with err: ' + error);\n  return null;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过fd使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#readsync",
            children: "fileIo.readSync"
          }), "接口读取这个文件内的数据，读取完成后关闭fd。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const buffer = new ArrayBuffer(bufferSize);\n  const readLen = fileIo.readSync(fileObj.fd, buffer);\n  console.info('readSync data to file succeed and buffer size is:' + readLen);\n  return { data: buffer, length: readLen };\n} catch (error) {\n  console.error('readSync failed with err: ' + error);\n  return null;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定uri获取图片或视频资源",
      children: "指定URI获取图片或视频资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["媒体库支持Picker选择", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/user-files/user-file-uri-intro#%E5%AA%92%E4%BD%93%E6%96%87%E4%BB%B6uri",
        children: "媒体文件"
      }), "URI后，根据指定URI获取图片或视频资源，下面以查询指定URI为'file://media/Photo/1/IMG_datetime_0001/displayName.jpg'为例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定义媒体资源处理器", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-mediaassetdatahandler/arkts-apis-photoaccesshelper-mediaassetdatahandler",
            children: "MediaAssetDataHandler"
          }), "，系统在资源准备就绪时向应用回调onDataPrepared。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export class MediaAssetDataHandler implements photoAccessHelper.MediaAssetDataHandler<ArrayBuffer> {\n  private callback?: MediaDataHandlerCallback;\n  \n  constructor(callback?: MediaDataHandlerCallback) {\n    this.callback = callback;\n  }\n\n  // 使用箭头函数确保this引用不会丢失\n  onDataPrepared = (data: ArrayBuffer) => {\n    if (data === undefined) {\n      console.error('Error occurred when preparing data');\n      return;\n    }\n    console.info('on image data prepared');\n    // 现在this始终指向MediaAssetDataHandler实例\n    if (this.callback) {\n      this.callback(data);\n    }\n  };\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getassets-1",
            children: "getAssets"
          }), "接口获取要访问的资产，并通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-mediaassetmanager/arkts-apis-photoaccesshelper-mediaassetmanager#requestimagedata11",
            children: "requestImageData"
          }), "获取对应资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(139916)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["出于对用户隐私安全的保护，对媒体资源EXIF中的地理位置和拍摄参数信息做了去隐私化处理。如果需要获取被去隐私化的EXIF信息，需要", (0,jsx_runtime.jsx)(_components.a, {
            href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation#%E7%94%B3%E8%AF%B7%E7%9B%B8%E5%86%8C%E7%AE%A1%E7%90%86%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E7%9B%B8%E5%85%B3%E6%9D%83%E9%99%90",
            children: "申请相册管理模块权限"
          }), "'ohos.permission.MEDIA_LOCATION'。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static async getMediaResourceByUri(uri: string, context: common.Context, callback?: MediaDataHandlerCallback)\n: Promise<void> {\n  try {\n    // 创建PhotoAccessHelper实例\n    const phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n      \n    // 创建查询条件\n    const predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n    predicates.equalTo(photoAccessHelper.PhotoKeys.URI, uri);\n      \n    // 设置查询选项\n    const fetchOptions: photoAccessHelper.FetchOptions = {\n      fetchColumns: [photoAccessHelper.PhotoKeys.TITLE],\n      predicates: predicates\n    };\n\n    // 查询资产\n    const fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n      \n    const photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    if (photoAsset) {\n      console.info('getAssets photoAsset.uri : ' + photoAsset.uri);\n      // 获取标题属性\n      console.info('title : ' + photoAsset.get(photoAccessHelper.PhotoKeys.TITLE));\n        \n      // 设置请求选项\n      const requestOptions: photoAccessHelper.RequestOptions = {\n        deliveryMode: photoAccessHelper.DeliveryMode.HIGH_QUALITY_MODE,\n      };\n        \n      // 请求图片数据\n      await photoAccessHelper.MediaAssetManager.requestImageData(\n        context, photoAsset, requestOptions, new MediaAssetDataHandler(callback));\n        \n      console.info('requestImageData successfully');\n    } else {\n      console.error('No asset found for URI: ' + uri);\n    }\n      \n    // 关闭查询结果\n    fetchResult.close();\n  } catch (err) {\n    console.error('getMediaResourceByUri failed with err: ' + err);\n  }\n}\n"
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
539913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
139916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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