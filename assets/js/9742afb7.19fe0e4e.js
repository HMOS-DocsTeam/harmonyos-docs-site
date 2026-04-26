"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["903518"], {
677648(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_arkts_dev_image_editing_arkts_image_processing_arkts_image_processing_arkts_md_974_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-arkts-dev-image-editing-arkts-image-processing-arkts-image-processing-arkts-md-974.json
var site_docs_image_kit_image_arkts_dev_image_editing_arkts_image_processing_arkts_image_processing_arkts_md_974_namespaceObject = JSON.parse('{"id":"image-kit/image-arkts-dev/image-editing-arkts/image-processing-arkts/image-processing-arkts","title":"使用VideoProcessingEngine完成图片超分","description":"本模块提供图片细节增强的ArkTS接口，通过调用本模块，可以实现图片内容的清晰度增强及缩放功能，处理后的数据可以用于送显和输出。","source":"@site/docs/image-kit/image-arkts-dev/image-editing-arkts/image-processing-arkts/image-processing-arkts.md","sourceDirName":"image-kit/image-arkts-dev/image-editing-arkts/image-processing-arkts","slug":"/image-kit/image-arkts-dev/image-editing-arkts/image-processing-arkts/","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-editing-arkts/image-processing-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用VideoProcessingEngine完成图片超分","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-processing-arkts","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用PixelMap完成位图操作","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-editing-arkts/image-pixelmap-operation/"},"next":{"title":"编辑图片Exif信息","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-editing-arkts/image-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-arkts-dev/image-editing-arkts/image-processing-arkts/image-processing-arkts.md


const frontMatter = {
	title: '使用VideoProcessingEngine完成图片超分',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-processing-arkts',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用VideoProcessingEngine完成图片超分';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
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
        id: "使用videoprocessingengine完成图片超分",
        children: "使用VideoProcessingEngine完成图片超分"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供图片细节增强的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-videoprocessingengine/js-apis-videoprocessingengine",
        children: "ArkTS接口"
      }), "，通过调用本模块，可以实现图片内容的清晰度增强及缩放功能，处理后的数据可以用于送显和输出。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型应用场景如：从URL获取图片源 > 图片细节增强 > 显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前仅支持处理同时满足以下条件的图片："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "图片为SDR（Standard dynamic range）图片。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "图片的像素格式为RGBA、BGRA、NV12、NV21，输出格式与输入格式一致。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["处理的PixelMap对象需为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "DMA内存"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本模块提供4个质量档位的算法，处理效果逐渐变优，但性能也会逐渐下降。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "质量档位"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "输入分辨率要求  （单位：像素）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "输出分辨率要求  （单位：像素）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅适用于缩放场景，支持改变宽高比例，无清晰度增强效果。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "LOW"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅适用于缩放场景，支持改变宽高比例。  缩放时会对图像进行低质量的清晰度增强，处理效率较高。  此质量档位为默认设置。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MEDIUM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅适用于缩放场景，支持改变宽高比例。  缩放时会对图像进行中等质量的清晰度增强，处理效率适中。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HIGH"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[512,2000]  高：[512,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[512,2000]  高：[512,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于缩放及清晰度增强场景，支持改变宽高比例。  缩放时会对图像进行高质量的清晰度增强，处理效率相对较低。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加引用文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image, videoProcessingEngine } from '@kit.ImageKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化环境。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let promise: Promise<void> = videoProcessingEngine.initializeEnvironment();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）配置输入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let scale: number = 0.5;\nlet width: number = 512; // 示例代码，配置宽为512。\nlet height: number = 512;// 示例代码，配置高为512。\nconst color: ArrayBuffer = new ArrayBuffer(width * height * 4); // width * height * 4为需要创建的像素buffer大小。\nlet opts: image.InitializationOptions = { editable: true, pixelFormat: image.PixelMapFormat.RGBA_8888, size: { height, width } }\nlet sourceImage : image.PixelMap = image.createPixelMapSync(color, opts);\nlet level : videoProcessingEngine.QualityLevel = videoProcessingEngine.QualityLevel.LOW;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建图像处理模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预期返回值：videoProcessingEngine.ImageProcessor，图片处理模块实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建图片细节增强模块实例\nlet imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动细节增强处理。当输入图片srcImage和输出图片dstImage分辨率不一致时，进行缩放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "sourceImage：PixelMap类型的输入图像，必填。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "width：目标宽度（单位px），当没有配置目标缩放比例时必填。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "height：目标高度（单位px），当没有配置目标缩放比例时必填。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "scale：目标缩放比例，当没有配置目标分辨率时必填。目标分辨率即宽*高。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["level：", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
            children: "质量算法档位"
          }), "，默认为LOW。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式一：指定原图、目标分辨率。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 同步方法\nlet enhancedPixelmap: image.PixelMap = imageProcessor.enhanceDetailSync(\nsourceImage, width, height, level);\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 异步方法\nlet enhancedPixelmap: Promise<image.PixelMap> = imageProcessor.enhanceDetail(sourceImage, width, height, level);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式二：指定原图、缩放比例。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 同步方法\nlet enhancedPixelmap: image.PixelMap = imageProcessor.enhanceDetailSync(\nsourceImage, scale, level);\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 异步方法\nlet enhancedPixelmap: Promise<image.PixelMap> = imageProcessor.enhanceDetail(\nsourceImage, scale, level);\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放处理资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "videoProcessingEngine.deinitializeEnvironment();\n"
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