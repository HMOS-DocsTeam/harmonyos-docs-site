"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["170560"], {
31155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_arkts_dev_image_decoding_arts_image_decoding_image_decoding_md_30d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-arkts-dev-image-decoding-arts-image-decoding-image-decoding-md-30d.json
var site_docs_image_kit_image_arkts_dev_image_decoding_arts_image_decoding_image_decoding_md_30d_namespaceObject = JSON.parse('{"id":"image-kit/image-arkts-dev/image-decoding-arts/image-decoding/image-decoding","title":"使用ImageSource完成图片解码","description":"将所支持格式的图片文件解码成PixelMap，以便在应用或系统中显示或处理图片。当前支持的图片文件格式包括JPEG、PNG、GIF、WebP、BMP、SVG、ICO、DNG、HEIC、TIFF23+、HEIFS23+、WBMP23+。部分格式的解码能力依赖于具体的设备硬件，建议在调用前使用image.getImageSourceSupportedFormats20+接口，动态查询当前设备上的解码能力。","source":"@site/docs/image-kit/image-arkts-dev/image-decoding-arts/image-decoding/image-decoding.md","sourceDirName":"image-kit/image-arkts-dev/image-decoding-arts/image-decoding","slug":"/image-kit/image-arkts-dev/image-decoding-arts/image-decoding/","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-decoding-arts/image-decoding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用ImageSource完成图片解码","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-decoding","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Image Kit简介","permalink":"/harmonyos-docs-site/image-kit/image-overview/"},"next":{"title":"使用ImageSource完成多图对象解码","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-decoding-arts/image-picture-decoding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-arkts-dev/image-decoding-arts/image-decoding/image-decoding.md


const frontMatter = {
	title: '使用ImageSource完成图片解码',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-decoding',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用ImageSource完成图片解码';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用imagesource完成图片解码",
        children: "使用ImageSource完成图片解码"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将所支持格式的图片文件解码成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "，以便在应用或系统中显示或处理图片。当前支持的图片文件格式包括JPEG、PNG、GIF、WebP、BMP、SVG、ICO、DNG、HEIC、TIFF23+、HEIFS23+、WBMP23+。部分格式的解码能力依赖于具体的设备硬件，建议在调用前使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagegetimagesourcesupportedformats20",
        children: "image.getImageSourceSupportedFormats20+"
      }), "接口，动态查询当前设备上的解码能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，支持对专业相机拍摄的CR2、CR3、ARW、NEF、RAF、NRW、ORF、RW2、PEF、SRW格式图片内嵌的预览图（通常为JPEG格式）进行解码。该解码能力不受运行设备类型限制。"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置解码参数DecodingOptions，解码获取pixelMap图片对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置解码选项参数进行解码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async createPixelMap(imageSource: image.ImageSource | undefined): Promise<image.PixelMap | undefined> {\n  if (!imageSource) {\n    console.error('imageSource is undefined.');\n    return undefined;\n  }\n  // 配置解码选项参数。\n  let decodingOptions: image.DecodingOptions = {\n    editable: true,\n    desiredPixelFormat: image.PixelMapFormat.RGBA_8888,\n    // 设置为AUTO会根据图片资源格式和设备支持情况进行解码，如果图片资源为HDR资源且设备支持HDR解码则会解码为HDR的pixelMap。\n    desiredDynamicRange: image.DecodingDynamicRange.HDR,\n  };\n\n  try {\n    // 生成 pixelMap 并返回\n    const pixelMap = await imageSource.createPixelMap(decodingOptions);\n    if (pixelMap) {\n      console.info('Create PixelMap successfully.');\n      // 判断pixelMap是否为hdr内容。\n      let imageInfo = await pixelMap.getImageInfo();\n      console.info(`Create PixelMap successfully with imageInfo.isHdr: ${imageInfo.isHdr}.`);\n      return pixelMap;\n    } else {\n      console.info('Create PixelMap failed.');\n      return undefined;\n    }\n  } catch (error) {\n    console.error(`Failed to create PixelMap: ${error}.`);\n    return undefined;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["解码完成，获取到pixelMap对象后，可以进行后续", (0,jsx_runtime.jsx)(_components.a, {
            href: "/image-kit/image-arkts-dev/image-editing-arkts/image-transformation",
            children: "图片处理"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放pixelMap和imageSource。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确认pixelMap和imageSource的异步方法已经执行完成，不再使用该变量后，可按需手动调用下面方法释放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async release(pixelMap: image.PixelMap | undefined, imageSource: image.ImageSource | undefined) {\n  pixelMap?.release();\n  pixelMap = undefined;\n  imageSource?.release();\n  imageSource = undefined;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(343638)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "释放imageSource的合适时机：createPixelMap执行完成，成功获取pixelMap后，如果确定不再使用imageSource的其他方法，可以手动释放imageSource。由于解码得到的pixelMap是一个独立的实例，imageSource的释放不会导致pixelMap不可用。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["释放pixelMap的合适时机：如果使用系统的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
              children: "Image组件"
            }), "进行图片显示，无需手动释放，Image组件会自动管理传递给它的pixelMap；如果应用自行处理pixelMap，则推荐在页面切换、应用退后台等场景下手动释放老页面pixelMap；在内存资源紧张的场景，推荐释放除当前页面外其他不可见页面的PixelMap。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/ImageGetAndSave",
          children: "实现图片获取与保存功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/watermark",
          children: "水印添加能力"
        })
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
343638(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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