"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["6652"], {
515070(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_arkts_js_apis_image_arkts_apis_image_arkts_apis_image_md_12c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-arkts-js-apis-image-arkts-apis-image-arkts-apis-image-md-12c.json
var site_docs_ref_image_api_image_arkts_js_apis_image_arkts_apis_image_arkts_apis_image_md_12c_namespaceObject = JSON.parse('{"id":"image-api/image-arkts/js-apis-image/arkts-apis-image/arkts-apis-image","title":"模块描述","description":"本模块提供图片的解码、编码、编辑、元数据处理和图片接收等能力。","source":"@site/docs-ref/image-api/image-arkts/js-apis-image/arkts-apis-image/arkts-apis-image.md","sourceDirName":"image-api/image-arkts/js-apis-image/arkts-apis-image","slug":"/image-api/image-arkts/js-apis-image/arkts-apis-image/arkts-apis-image","permalink":"/harmonyos-docs-site/ref/image-api/image-arkts/js-apis-image/arkts-apis-image/arkts-apis-image","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"模块描述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image","kit":"媒体","last_updated":"2026-04-22","slug":"arkts-apis-image"},"sidebar":"ref","previous":{"title":"DRM错误码","permalink":"/harmonyos-docs-site/ref/drm-api/drm-arkts-errcode/errorcode-drm/errorcode-drm"},"next":{"title":"Functions","permalink":"/harmonyos-docs-site/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-arkts/js-apis-image/arkts-apis-image/arkts-apis-image.md


const frontMatter = {
	title: '模块描述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-image'
};
const contentTitle = '模块描述';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模块描述",
        children: "模块描述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供图片的解码、编码、编辑、元数据处理和图片接收等能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块包含以下基础类："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagesource/arkts-apis-image-imagesource",
          children: "ImageSource"
        }), "类，提供获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-i/arkts-apis-image-i#imageinfo",
          children: "图片信息"
        }), "、将图片解码为PixelMap或Picture、读取和修改", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#propertykey7",
          children: "图片属性"
        }), "的能力。", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagesource/arkts-apis-image-imagesource#%E5%B1%9E%E6%80%A7",
          children: "支持解码的图片格式"
        }), "包括png、jpeg、bmp、gif、webp、dng、heic12+、wbmp23+、heifs23+、tiff23+。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagepacker/arkts-apis-image-imagepacker",
          children: "ImagePacker"
        }), "类，提供将图片编码为压缩后的数据流或文件的能力。编码前需获取图片的ImageSource、PixelMap或Picture作为输入。", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagepacker/arkts-apis-image-imagepacker#%E5%B1%9E%E6%80%A7",
          children: "支持编码的图片格式"
        }), "包括jpeg、webp、png、heic12+、gif18+。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
          children: "PixelMap"
        }), "类，位图对象，包含像素数据以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-i/arkts-apis-image-i#imageinfo",
          children: "图片信息"
        }), "。可用于读取或写入像素数据，进行裁剪、缩放、平移、旋转、镜像等操作，并可直接传给", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
          children: "Image组件"
        }), "用于显示。还提供了获取和设置图片色域、HDR元数据的方法。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-picture/arkts-apis-image-picture",
          children: "Picture"
        }), "类，多图对象，由主图、辅助图和元数据组成。其中，主图包含了主要图像信息；辅助图用于存储与主图相关的附加信息；元数据用于存储与图片相关的其他信息。Picture提供获取主图、合成HDR图、获取辅助图、设置辅助图、获取元数据、设置元数据等方法。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-auxiliarypicture/arkts-apis-image-auxiliarypicture",
          children: "AuxiliaryPicture"
        }), "类，辅助图一般用于辅助主图进行特殊信息的展示，使图像包含更丰富的信息。目前支持的辅助图的类型可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#auxiliarypicturetype13",
          children: "AuxiliaryPictureType"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-metadata/arkts-apis-image-metadata",
          children: "Metadata"
        }), "类，以Key-Value的形式存储图像的元数据。目前支持的元数据类型可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#metadatatype13",
          children: "MetadataType"
        }), "，包含Exif元数据、水印裁剪图元数据和HEIF序列图像元数据。Exif元数据的Key可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#propertykey7",
          children: "PropertyKey"
        }), "；水印裁剪图元数据的Key可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#fragmentmappropertykey13",
          children: "FragmentMapPropertyKey"
        }), "；HEIF序列图像元数据的Key可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#heifspropertykey23",
          children: "HeifsPropertyKey"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-exifmetadata/arkts-apis-image-exifmetadata",
          children: "ExifMetadata"
        }), "类，以Key-Value的形式存储图像的Exif元数据。Exif元数据的Key可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#propertykey7",
          children: "PropertyKey"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-makernotehuaweimetadata/arkts-apis-image-makernotehuaweimetadata",
          children: "MakerNoteHuaweiMetadata"
        }), "类，以Key-Value的形式存储图像Huawei相机定义的照片元数据。Huawei相机定义的照片元数据的Key可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#propertykey7",
          children: "PropertyKey"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-heifsmetadata/arkts-apis-image-heifsmetadata",
          children: "HeifsMetadata"
        }), "类，以Key-Value的形式存储图像的HEIF序列图像元数据。HEIF序列图像元数据的Key可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#heifspropertykey23",
          children: "HeifsPropertyKey"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver",
          children: "ImageReceiver"
        }), "类，作为图片的消费者，用于从Surface中接收、读取图片。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagecreator/arkts-apis-image-imagecreator",
          children: "ImageCreator"
        }), "类，作为图片的生产者，用于将图片写入到Surface中。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image",
          children: "Image"
        }), "类，供ImageReceiver和ImageCreator使用，用于传输图片对象，其实际内容由生产者决定。如相机预览流提供的Image对象存储了YUV数据、相机拍照提供的Image对象存储了JPEG文件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(429777)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\n"
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
429777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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