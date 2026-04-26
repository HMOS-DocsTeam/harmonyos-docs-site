"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["937113"], {
800315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_arkts_dev_image_editing_arkts_image_tool_image_tool_md_5d1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-arkts-dev-image-editing-arkts-image-tool-image-tool-md-5d1.json
var site_docs_image_kit_image_arkts_dev_image_editing_arkts_image_tool_image_tool_md_5d1_namespaceObject = JSON.parse('{"id":"image-kit/image-arkts-dev/image-editing-arkts/image-tool/image-tool","title":"编辑图片Exif信息","description":"Image Kit提供图片Exif信息的读取与编辑能力。","source":"@site/docs/image-kit/image-arkts-dev/image-editing-arkts/image-tool/image-tool.md","sourceDirName":"image-kit/image-arkts-dev/image-editing-arkts/image-tool","slug":"/image-kit/image-arkts-dev/image-editing-arkts/image-tool/","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-editing-arkts/image-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"编辑图片Exif信息","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-tool","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用VideoProcessingEngine完成图片超分","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-editing-arkts/image-processing-arkts/"},"next":{"title":"使用ImageReceiver完成图片接收","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-receiving-arkts/image-receiver/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-arkts-dev/image-editing-arkts/image-tool/image-tool.md


const frontMatter = {
	title: '编辑图片Exif信息',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-tool',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '编辑图片Exif信息';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "编辑图片exif信息",
        children: "编辑图片Exif信息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image Kit提供图片Exif信息的读取与编辑能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exif（Exchangeable image file format）是专门为数码相机的照片设定的文件格式，可以记录数码照片的属性信息和拍摄数据。当前支持JPEG、PNG、HEIF、WEBP23+、DNG23+格式，且需要图片包含Exif信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在图库等应用中，需要查看或修改数码照片的Exif信息。当摄像机的手动镜头参数无法自动写入到Exif信息中，或者相机断电等原因会导致拍摄时间出错时，可手动修改错误的Exif数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统目前仅支持对部分Exif信息的查看和修改，具体支持的范围请参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#propertykey7",
        children: "Exif信息"
      }), "。需要注意的是，DNG格式图片仅支持读取Exif信息，不支持修改。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Exif信息的读取与编辑相关的API详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagesource/arkts-apis-image-imagesource#getimageproperty11",
        children: "getImageProperty"
      }), "等接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图片，创建ImageSource。读取、编辑Exif信息。示例代码如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入相关模块包。\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取指定key的Exif信息接口示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取指定key的Exif信息接口示例\nasync getExif(imageSourceApi: image.ImageSource | undefined, key: image.PropertyKey): Promise<string> {\n  let info: string = '';\n  if (imageSourceApi) {\n    console.info('getExif: The imageSourceApi is not undefined.');\n    // 根据传入的key获取其Exif信息\n    let options: image.ImagePropertyOptions = { index: 0, defaultValue: 'This key has no value!' };\n    try {\n      let data = await imageSourceApi.getImageProperty(key, options);\n      info = `Succeeded in getting the ${key}'s value: ${data}.`;\n      console.info(info);\n      return info; // 获取key值成功时返回获取到的key值\n    } catch (error) {\n      info =\n        `Failed to get the value of the ${key} with error: ${error}.`;\n      console.error(info);\n      return info; // 获取key值失败时返回错误信息\n    }\n  } else {\n    info = 'getExif: The imageSourceApi is undefined.';\n    console.info(info);\n    return info; // 如果 imageSourceApi 是 undefined，则直接返回信息\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改指定key的Exif信息的接口示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 修改指定key的Exif信息的接口示例\nasync modifyExif(imageSourceApi: image.ImageSource | undefined, key: image.PropertyKey, value: string)\n  : Promise<string> {\n  let info: string = '';\n  if (imageSourceApi) {\n    // 编辑EXIF信息\n    try {\n      await imageSourceApi.modifyImageProperty(key, value);\n      try {\n        let modifyValue = await imageSourceApi.getImageProperty(key)\n        info = `The ${key}'s value is modified to ${modifyValue}.`\n        console.info(info);\n        return info; // 获取key值成功时返回修改成功信息\n      } catch (error) {\n        console.error(`Failed to get the the ${key}'s value with ${error}`);\n        console.error(info);\n        return info; // 获取key值失败时返回错误信息\n      }\n    } catch (error) {\n      info = `Failed to modify the ${key}'s value with ${error}`;\n      console.error(info);\n      return info; // 修改key值失败时返回错误信息\n    }\n  } else {\n    info = 'modifyExif: The imageSourceApi is undefined.';\n    console.info(info);\n    return info; // 如果 imageSourceApi 是 undefined，直接返回信息\n  }\n}\n"
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