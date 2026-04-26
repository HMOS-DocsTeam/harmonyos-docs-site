"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["495301"], {
496476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_arkts_dev_image_decoding_arts_image_picture_decoding_image_picture_decoding_md_a05_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-arkts-dev-image-decoding-arts-image-picture-decoding-image-picture-decoding-md-a05.json
var site_docs_image_kit_image_arkts_dev_image_decoding_arts_image_picture_decoding_image_picture_decoding_md_a05_namespaceObject = JSON.parse('{"id":"image-kit/image-arkts-dev/image-decoding-arts/image-picture-decoding/image-picture-decoding","title":"使用ImageSource完成多图对象解码","description":"将所支持格式的图片文件解码成Picture。当前支持的图片文件格式包括JPEG、HEIF。","source":"@site/docs/image-kit/image-arkts-dev/image-decoding-arts/image-picture-decoding/image-picture-decoding.md","sourceDirName":"image-kit/image-arkts-dev/image-decoding-arts/image-picture-decoding","slug":"/image-kit/image-arkts-dev/image-decoding-arts/image-picture-decoding/","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-decoding-arts/image-picture-decoding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用ImageSource完成多图对象解码","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-picture-decoding","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用ImageSource完成图片解码","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-decoding-arts/image-decoding/"},"next":{"title":"图片解码内存优化(ArkTS)","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-arkts-dev/image-decoding-arts/image-picture-decoding/image-picture-decoding.md


const frontMatter = {
	title: '使用ImageSource完成多图对象解码',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-picture-decoding',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用ImageSource完成多图对象解码';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用imagesource完成多图对象解码",
        children: "使用ImageSource完成多图对象解码"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将所支持格式的图片文件解码成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-overview#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "Picture"
      }), "。当前支持的图片文件格式包括JPEG、HEIF。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图片解码相关API的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagesource/arkts-apis-image-imagesource",
        children: "ImageSource"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全局导入Image模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入相关模块包。\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取图片。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["方法一：通过沙箱路径直接获取。该方法仅适用于应用沙箱中的图片。更多细节请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
                children: "获取应用文件路径"
              }), "。应用沙箱的介绍及如何向应用沙箱推送文件，请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/core-file-kit/app-file/app-sandbox-directory",
                children: "文件管理"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "function getFilePath(context: Context, fileName: string): string {\n  const filePath: string = context.cacheDir + '/' + fileName;\n  return filePath;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["方法二：通过沙箱路径获取图片的文件描述符。具体请参考文档", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
                children: "@ohos.file.fs (文件管理)"
              }), "。该方法需要导入@kit.CoreFileKit模块。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "function getFileFd(context: Context, fileName: string): number | undefined {\n  try {\n    const filePath: string = context.cacheDir + '/' + fileName;\n    const file: fs.File = fs.openSync(filePath, fs.OpenMode.READ_ONLY);\n    const fd: number = file?.fd;\n    return fd;\n  } catch (err) {\n    console.error(`Failed to get the fileFd with error: ${err}.`);\n    return undefined;\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["方法三：通过资源管理器获取资源文件的ArrayBuffer。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getrawfilecontent9-1",
                children: "资源管理器API参考文档"
              }), "。该方法需要导入@kit.LocalizationKit模块。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "async function getFileBuffer(context: Context, fileName: string): Promise<ArrayBuffer | undefined> {\n  try {\n    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n    // 获取资源文件内容，返回Uint8Array。\n    const fileData: Uint8Array = await resourceMgr.getRawFileContent(fileName);\n    console.info('Successfully get the RawFileContent.');\n    // 转为ArrayBuffer并返回。\n    const buffer: ArrayBuffer = fileData.buffer.slice(0);\n    return buffer;\n  } catch (error) {\n    console.error(`Failed to get the RawFileContent with error: ${error}.`);\n    return undefined;\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["方法四：通过资源管理器获取资源文件的RawFileDescriptor。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getrawfd9-1",
                children: "资源管理器API参考文档"
              }), "。该方法需要导入@kit.LocalizationKit模块。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "async function getRawFd(context: Context, fileName: string): Promise<resourceManager.RawFileDescriptor | undefined> {\n  try {\n    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n    const rawFileDescriptor: resourceManager.RawFileDescriptor = await resourceMgr.getRawFd(fileName);\n    console.info('Successfully get the RawFileDescriptor.');\n    return rawFileDescriptor;\n  } catch (error) {\n    console.error(`Failed to get the RawFileDescriptor with error: ${error}.`);\n    return undefined;\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ImageSource实例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方法一：通过沙箱路径创建ImageSource。沙箱路径可以通过步骤2的方法一获取。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// path为已获得的沙箱路径。\nconst imageSource : image.ImageSource = image.createImageSource(filePath);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方法二：通过文件描述符fd创建ImageSource。文件描述符可以通过步骤2的方法二获取。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// fd为已获得的文件描述符。\nconst imageSource: image.ImageSource = image.createImageSource(fd);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方法三：通过缓冲区数组创建ImageSource。缓冲区数组可以通过步骤2的方法三获取。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "const imageSource: image.ImageSource = image.createImageSource(buffer);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方法四：通过资源文件的RawFileDescriptor创建ImageSource。RawFileDescriptor可以通过步骤2的方法四获取。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "const imageSource: image.ImageSource = image.createImageSource(rawFileDescriptor);\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置解码参数DecodingOptions，解码获取picture多图对象。并对picture进行操作，如获取辅助图等。对于picture和辅助图的具体操作请参考文档", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-picture/arkts-apis-image-picture",
            children: "Picture"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置解码选项参数进行解码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async createPicture(imageSource : image.ImageSource | undefined, isReturnAux: Boolean)\n  : Promise<image.PixelMap | undefined | image.Picture> {\n  // 配置解码选项参数。\n  let options: image.DecodingOptionsForPicture = {\n    desiredAuxiliaryPictures: [image.AuxiliaryPictureType.GAINMAP] // GAINMAP为需要解码的辅助图类型。\n  };\n  let returnPixelMap: image.PixelMap | undefined = undefined;\n  // 创建picture。\n  try {\n    let picture = await imageSource?.createPicture(options);\n    if (picture) {\n      // 返回解码后获取到的辅助图\n      if (isReturnAux) {\n        // type为解码参数中包含的辅助图类型\n        let type: image.AuxiliaryPictureType = image.AuxiliaryPictureType.GAINMAP;\n        let auxPicture: image.AuxiliaryPicture | null = picture.getAuxiliaryPicture(type);\n        // 获取辅助图信息。\n        if (auxPicture != null) {\n          let auxInfo: image.AuxiliaryPictureInfo = auxPicture.getAuxiliaryPictureInfo();\n          console.info('GetAuxiliaryPictureInfo type: ' + auxInfo.auxiliaryPictureType +\n            ' height: ' + auxInfo.size.height + ' width: ' + auxInfo.size.width +\n            ' rowStride: ' + auxInfo.rowStride + ' pixelFormat: ' + auxInfo.pixelFormat +\n            ' colorSpace: ' + auxInfo.colorSpace);\n          // 将辅助图数据读到ArrayBuffer。\n          try {\n            let pixelsBuffer = await auxPicture.readPixelsToBuffer();\n            let opts: image.InitializationOptions = { size: auxInfo.size };\n            try {\n              returnPixelMap = image.createPixelMapSync(pixelsBuffer, opts) as image.PixelMap;\n              console.info(`Create PixelMap with buffer successfully.`);\n            } catch (error) {\n              console.error(`Create PixelMap failed with ${error}.`);\n            }\n          } catch (error) {\n            console.error(`Read pixels to buffer failed, error.code: ${error.code},\n              error.message: ${error.message}`);\n          }\n          auxPicture.release();\n        }\n        return returnPixelMap;\n      } else {\n        return picture; // 返回解码后获取到的picture\n      }\n    }\n    return returnPixelMap;\n  } catch (error) {\n    console.error(`Create picture failed: ${error}.`);\n  }\n  return returnPixelMap;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放picture。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确认picture的异步方法已经执行完成，不再使用该变量后，可按需手动调用下面方法释放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async release(picture: image.Picture) {\n  picture?.release();\n}\n"
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