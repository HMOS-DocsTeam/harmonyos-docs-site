"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["24026"], {
467094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_faqs_heif_adapter_faq_heif_adapter_faq_md_fdb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-faqs-heif-adapter-faq-heif-adapter-faq-md-fdb.json
var site_docs_image_kit_image_faqs_heif_adapter_faq_heif_adapter_faq_md_fdb_namespaceObject = JSON.parse('{"id":"image-kit/image-faqs/heif-adapter-faq/heif-adapter-faq","title":"如何处理HEIF图片","description":"HEIF图片介绍","source":"@site/docs/image-kit/image-faqs/heif-adapter-faq/heif-adapter-faq.md","sourceDirName":"image-kit/image-faqs/heif-adapter-faq","slug":"/image-kit/image-faqs/heif-adapter-faq/","permalink":"/harmonyos-docs-site/image-kit/image-faqs/heif-adapter-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"如何处理HEIF图片","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/heif-adapter-faq","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Image_NativeModule完成图片接收","permalink":"/harmonyos-docs-site/image-kit/image-native/image-receiving-c/image-receiver-c/"},"next":{"title":"如何获取图片的旋转角度信息","permalink":"/harmonyos-docs-site/image-kit/image-faqs/image-rotate-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-faqs/heif-adapter-faq/heif-adapter-faq.md


const frontMatter = {
	title: '如何处理HEIF图片',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/heif-adapter-faq',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '如何处理HEIF图片';

const assets = {

};



const toc = [{
  "value": "HEIF图片介绍",
  "id": "heif图片介绍",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "上传HEIF图片时提示：“不支持的格式”",
  "id": "上传heif图片时提示不支持的格式",
  "level": 3
}, {
  "value": "为什么选择的是HEIF图片，实际上获取到的却是JPEG图片？",
  "id": "为什么选择的是heif图片实际上获取到的却是jpeg图片",
  "level": 3
}, {
  "value": "担心使用HEIF格式图片存在兼容性问题，需使用JPEG或PNG格式的图片，如何操作",
  "id": "担心使用heif格式图片存在兼容性问题需使用jpeg或png格式的图片如何操作",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "如何处理heif图片",
        children: "如何处理HEIF图片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "heif图片介绍",
      children: "HEIF图片介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HEIF图片（High Efficiency Image File Format，HEIF，也称高效图像文件格式），是一个用于单张图像或图像序列的文件格式。它由动态影像专家小组（MPEG）开发，并在MPEG-H Part 12（ISO/IEC 23008-12）中定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前主流的HEIF图片均使用HEVC（H.265）编码，这也是系统当前支持的HEIF图片。HEIF图片在压缩效率上具有明显优势，能够在保证图像质量的同时显著减小文件体积，通常比JPEG节省约50%的存储空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统从API12开始支持HEIF图片的编解码与显示，如果应用基于系统Image Kit、ArkUI Image组件、ArkWeb等模块实现图片处理功能，则可以像处理JPEG、PNG等格式的图片一样，处理HEIF图片。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HEIF图片解码可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-arkts-dev/image-decoding-arts/image-decoding",
        children: "图片解码指南（ArkTS）"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-native/image-decoding-c/image-source-c",
        children: "图片解码指南（C/C++）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HEIF图片显示可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display",
        children: "ArkUI Image组件图片显示"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HEIF图片编码可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-arkts-dev/image-encoding-arts/image-encoding",
        children: "图片编码指南（ArkTS）"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-native/image-encoding-c/image-packer-c",
        children: "图片编码指南（C/C++）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkWeb图片上传可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-manage-upload-download/web-file-upload",
        children: "使用Web组件上传文件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上传heif图片时提示不支持的格式",
      children: "上传HEIF图片时提示：“不支持的格式”"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用ImageSource", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagesource/arkts-apis-image-imagesource#%E5%B1%9E%E6%80%A7",
        children: "属性"
      }), "中的supportedFormats和ImagePacker", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagepacker/arkts-apis-image-imagepacker#%E5%B1%9E%E6%80%A7",
        children: "属性"
      }), "中的supportedFormats，来查看系统支持编解码的图片格式。只要查询到的结果中包含\"image/heic\"，即代表该设备支持HEIF图片编解码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统侧不会拦截HEIF图片上传，若HEIF图片上传不成功，可能的原因是：应用对后缀名为.heic、.heif、.HEIC、.HEIF的图片文件做了过滤限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于使用系统图片处理能力的应用，只需要解除过滤限制，即可正常上传、显示HEIF图片。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果应用不希望使用HEIF图片，可以借助", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-overview",
        children: "Image Kit"
      }), "提供的图片编解码能力，自行", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8B%85%E5%BF%83%E4%BD%BF%E7%94%A8heif%E6%A0%BC%E5%BC%8F%E5%9B%BE%E7%89%87%E5%AD%98%E5%9C%A8%E5%85%BC%E5%AE%B9%E6%80%A7%E9%97%AE%E9%A2%98%E9%9C%80%E4%BD%BF%E7%94%A8jpeg%E6%88%96png%E6%A0%BC%E5%BC%8F%E7%9A%84%E5%9B%BE%E7%89%87%E5%A6%82%E4%BD%95%E6%93%8D%E4%BD%9C",
        children: "将HEIF图片转码为JPEG或PNG格式的图片"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用没有使用系统提供的图片处理能力，且自身无法处理HEIF图片时，还可以选择使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-overview",
        children: "Media Library Kit"
      }), "提供的媒体资源访问能力，这时系统会主动将HEIF图片转码为JPEG图片。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "为什么选择的是heif图片实际上获取到的却是jpeg图片",
      children: "为什么选择的是HEIF图片，实际上获取到的却是JPEG图片？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-overview",
        children: "媒体文件管理服务"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/core-file-kit-intro#%E4%BA%AE%E7%82%B9%E7%89%B9%E5%BE%81",
        children: "URI（Uniform Resource Identifier）"
      }), "访问HEIF图片时，系统会自动将HEIF图片转码为兼容性相对更好的JPEG图片，且保证转码前后图片携带的元数据信息一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果想直接获取最原始的HEIF图片，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/core-file-kit-intro",
        children: "文件基础服务"
      }), "获取HEIF图片的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/core-file-kit-intro#%E4%BA%AE%E7%82%B9%E7%89%B9%E5%BE%81",
        children: "文件描述符FD（File Descriptor）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "担心使用heif格式图片存在兼容性问题需使用jpeg或png格式的图片如何操作",
      children: "担心使用HEIF格式图片存在兼容性问题，需使用JPEG或PNG格式的图片，如何操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以借助Image Kit的图片编解码能力，将HEIF图片转码成JPEG或PNG格式的图片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转码的本质是将HEIF图片解码后，把解码的结果重新编码为JPEG或PNG格式的图片。通过配置编码参数，开发者可以更加灵活地控制最终获取到的图片文件格式、图片质量以及图片属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\nimport { image } from '@kit.ImageKit';\nimport { PromptAction } from '@kit.ArkUI';\n\nconst promptAction = new PromptAction();\n\nexport async function reEncoding(context : Context, fd : number | undefined) {\n  // 首先获取图片文件的fd，创建ImageSource。\n  const imageSource : image.ImageSource = image.createImageSource(fd);\n  // 创建ImagePacker，以便调用图片编码接口。\n  const imagePackerApi = image.createImagePacker();\n  // 配置图片编码选项：\n  // format应使用标准的mimetype格式，如：\"image/jpeg\"、\"image/png\"、\"image/heic\"；\n  // quality推荐设置为80，在保证较好的图片质量的同时，可以使编码后的图片文件体积更小；\n  // needsPackProperties参数，用于控制编码时是否保存图片属性信息。默认值为false，即不保存。\n  let packOpts : image.PackingOption = { format:'image/jpeg', quality:80, needsPackProperties:false };\n  // 指定图片编码文件的存放路径。\n  const filePath : string = context.cacheDir + '/result.jpg';\n  try {\n    let file = fs.openSync(filePath, fs.OpenMode.CREATE | fs.OpenMode.READ_WRITE);\n    imagePackerApi.packToFile(imageSource, file.fd, packOpts).then(() => {\n      promptAction.showToast({ message: `Succeed to pack the image.`});\n      console.info('Succeed to pack the image.');\n    }).catch((error : BusinessError) => {\n      promptAction.showToast({ message: 'Failed to pack the image. And the error is: ' + error});\n      console.error('Failed to pack the image. And the error is: ' + error);\n    }).finally(()=>{\n      fs.closeSync(file.fd);\n    })\n  } catch (error) {\n    console.error('Failed to pack the image. And the error is: ' + error);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需使用CAPI进行图片转码，应首先创建ImageSource和ImagePacker实例，然后指定编码参数，调用图片编码接口完成转码。详细示例代码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-native/image-encoding-c/image-packer-c",
        children: "使用Image_NativeModule完成图片编码"
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