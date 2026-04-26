"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["460311"], {
41042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_overview_image_overview_md_dca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-overview-image-overview-md-dca.json
var site_docs_image_kit_image_overview_image_overview_md_dca_namespaceObject = JSON.parse('{"id":"image-kit/image-overview/image-overview","title":"Image Kit简介","description":"开发者通过调用Image Kit（图片处理服务）提供的接口，可以实现图片的解码、编码、编辑、元数据处理和图片接收等功能。","source":"@site/docs/image-kit/image-overview/image-overview.md","sourceDirName":"image-kit/image-overview","slug":"/image-kit/image-overview/","permalink":"/harmonyos-docs-site/image-kit/image-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Image Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-overview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于AVCodec播放DRM节目(C/C++)","permalink":"/harmonyos-docs-site/drm-kit/drm-avcodec-integration/"},"next":{"title":"使用ImageSource完成图片解码","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-decoding-arts/image-decoding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-overview/image-overview.md


const frontMatter = {
	title: 'Image Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-overview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Image Kit简介';

const assets = {

};



const toc = [{
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "基础概念",
  "id": "基础概念",
  "level": 2
}, {
  "value": "使用方式",
  "id": "使用方式",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "image-kit简介",
        children: "Image Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过调用Image Kit（图片处理服务）提供的接口，可以实现图片的解码、编码、编辑、元数据处理和图片接收等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编解码支持HEIF、JPEG、PNG、WebP等主流图片格式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持HDR图片编解码，给用户带来更高质量的色彩体验，还可以使用AI能力将SDR图片转换成HDR图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供丰富的图片编辑和处理的能力，包括：图像变换、位图操作、滤镜效果等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "采用了高效的算法和优化策略，提高了图片处理的速度和效率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础概念",
      children: "基础概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发前，需要了解以下基础概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["位图对象。可用于读取或写入像素数据，可以进行裁剪、缩放、平移、旋转、镜像等操作，并可直接传给", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display",
            children: "Image组件"
          }), "用于显示。还提供了获取图片信息、获取和设置图片色域、HDR元数据的方法。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-picture/arkts-apis-image-picture",
            children: "Picture"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多图对象。包含主图、辅助图和元数据。其中，主图包含了主要图像信息；辅助图用于存储与主图相关的附加信息；元数据用于存储与图片相关的其他信息。Picture提供获取主图、合成HDR图、获取辅助图、设置辅助图、获取元数据、设置元数据等方法。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片解码"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将所支持格式的图片文件解码成PixelMap或Picture，以便在应用或系统中进行图片显示或图片处理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片编辑和处理"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对PixelMap进行相关的操作，如旋转、缩放、设置透明度、获取图片信息、读写像素数据等，操作时坐标系原点为左上角。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片编码"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将PixelMap（或Picture）编码成不同格式的图片文件，用于后续处理，如保存、传输等。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方式",
      children: "使用方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image Kit提供了丰富的图片处理能力，开发者可按需灵活使用。既可以完整调用图片解码、编辑处理、编码的全流程；也可以图片解码后不做处理，直接将解码得到的PixelMap传给", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display",
        children: "Image组件"
      }), "显示。解码、编码过程中均提供了丰富的选项参数，可以满足各种实际开发场景的需求。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image Kit支持对解码得到的PixelMap进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-arkts-dev/image-editing-arkts/image-pixelmap-operation",
        children: "位图操作"
      }), "，对目标图片中的部分区域进行处理；实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-arkts-dev/image-editing-arkts/image-transformation",
        children: "图像变换"
      }), "，可以对图片做裁剪、缩放、偏移、旋转、翻转、设置透明度等变换。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image Kit支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-native/image-editing-c/image-effect-guidelines",
        children: "ImageEffect"
      }), "为图片添加滤镜效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image Kit还提供了读取和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-arkts-dev/image-editing-arkts/image-tool",
        children: "编辑图片EXIF信息"
      }), "的能力，可以获取和配置图片文件中的附加属性，如：宽、高、旋转方向等图片基本信息，光圈、焦距等图片拍照参数，经度、纬度等图片GPS信息等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片解码和图片编码的流程如图1和图2所示。图片解码得到的PixelMap可以直接用于图片显示、图片编辑和处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 图片解码流程示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(451932)/* ["default"] */.A) + "",
        width: "1180",
        height: "720"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 图片编码流程示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(572586)/* ["default"] */.A) + "",
        width: "1180",
        height: "720"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "读写权限限制："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在图片处理中，可能需要使用用户图片，应用需要向用户申请对应的读写操作权限才能保证功能的正常运行，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
            children: "向用户申请授权"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "选择合适的C API接口："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Image Kit当前提供了两套C API接口，分别为依赖于JS对象的C API（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-c/image-module/capi-image/capi-image",
            children: "Image"
          }), "）和不依赖于JS对象的C API（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule",
            children: "Image_NativeModule"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "依赖于JS对象的C接口"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["这类接口可以完成图片编解码，图片接收器，处理图像数据等功能，相关示例代码可以参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/image-kit/image-native-js-objects/image-decoding-native",
                children: "图片开发指导(依赖JS对象)(C/C++)"
              }), "节点下的内容。开发者可查看", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/image-api/image-c/image-module/capi-image/capi-image",
                children: "Image"
              }), "模块下的C API，确认API范围。这部分API在API version 11之前发布，在后续的版本不再增加新功能，", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "不再推荐使用"
                })
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "不依赖于JS对象的C接口"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["这类接口除了提供上述图片框架基础功能，还可以完成多图编解码等新特性，相关开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/image-kit/image-native/image-decoding-c/image-source-c",
                children: "图片开发指导(C/C++)"
              }), "节点下的内容。开发者可查看", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule",
                children: "Image_NativeModule"
              }), "模块下的C API，确认API范围。这部分API从API version 12开始支持，并将持续演进，", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "推荐开发者使用"
                })
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(708015)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "两套C API不建议同时使用，在部分场景下存在不兼容的问题。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image Kit提供图片编解码、图片接收、图片编辑和处理等能力，为Image组件、图库以及其他有图片相关需求的应用提供支撑。图片解码得到的PixelMap可以传给", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display",
        children: "Image组件"
      }), "显示。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver",
        children: "ImageReceiver"
      }), "（图片接收）可以实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-preview-imagereceiver",
        children: "相机预览流二次处理"
      }), "。"]
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
708015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
572586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798936-8610bb299a5b10b8dbd6dbacf84d7149.png");

},
451932(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478585-c7e9ec310889cd272c03978b185b4a01.png");

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