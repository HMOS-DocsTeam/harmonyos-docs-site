"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["892833"], {
213535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_storage_service_cloudfoundation_storage_setmetadata_cloudfoundation_storage_setmetadata_md_fe8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-storage-service-cloudfoundation-storage-setmetadata-cloudfoundation-storage-setmetadata-md-fe8.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_storage_service_cloudfoundation_storage_setmetadata_cloudfoundation_storage_setmetadata_md_fe8_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-setmetadata/cloudfoundation-storage-setmetadata","title":"设置云侧文件的元数据","description":"文件元数据包含云侧文件名、文件大小、文件类型等常用属性，也包括用户自定义的文件属性。","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-setmetadata/cloudfoundation-storage-setmetadata.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-setmetadata","slug":"/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-setmetadata/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-setmetadata/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"设置云侧文件的元数据","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-storage-setmetadata","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取云侧文件的元数据","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-getmetadata/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-setmetadata/cloudfoundation-storage-setmetadata.md


const frontMatter = {
	title: '设置云侧文件的元数据',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-storage-setmetadata',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '设置云侧文件的元数据';

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
        id: "设置云侧文件的元数据",
        children: "设置云侧文件的元数据"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件元数据包含云侧文件名、文件大小、文件类型等常用属性，也包括用户自定义的文件属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件保存至云侧后，开发者可以设置文件的自定义属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["已", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-initialize-bucket",
          children: "初始化存储实例"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["已", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-upload-file",
          children: "上传指定文件至云侧"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-cloudstorage/cloudfoundation-cloudstorage#setmetadata",
        children: "StorageBucket.setMetadata"
      }), "可以设置云侧文档的元数据信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cloudStorage } from '@kit.CloudFoundationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nlet storageBucket: cloudStorage.StorageBucket = cloudStorage.bucket();\n\n@Component\nexport struct testPage {\n  build() {\n  }\n\n  // 设置元数据\n  setMetaData() {\n    // 设置云存储默认实例中screenshot/screenshot_20250115_155321.jpg文件的元数据信息\n    storageBucket.setMetadata('screenshot/screenshot_20250115_155321.jpg', {\n      customMetadata: {\n        key1: \"value1\",\n        key2: \"value2\"\n      }\n    }).then((metadata: cloudStorage.Metadata) => {\n      hilog.info(0x0000, 'testTag', `Succeeded in setting metadata: ${JSON.stringify(metadata)}`);\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', `Failed to set metadata, code: ${err.code}, message: ${err.message}`);\n    })\n  }\n}\n"
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