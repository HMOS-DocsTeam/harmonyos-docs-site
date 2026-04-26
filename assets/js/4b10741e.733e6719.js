"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["281022"], {
483875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_other_operations_huks_obtain_key_properties_huks_obtain_key_properties_arkts_huks_obtain_key_properties_arkts_md_4b1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-other-operations-huks-obtain-key-properties-huks-obtain-key-properties-arkts-huks-obtain-key-properties-arkts-md-4b1.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_other_operations_huks_obtain_key_properties_huks_obtain_key_properties_arkts_huks_obtain_key_properties_arkts_md_4b1_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-arkts/huks-obtain-key-properties-arkts","title":"获取密钥属性(ArkTS)","description":"HUKS提供了接口供业务获取指定密钥的相关属性。在获取指定密钥属性前，需要确保已在HUKS中生成或导入持久化存储的密钥。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-arkts/huks-obtain-key-properties-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"获取密钥属性(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-obtain-key-properties-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询密钥是否存在(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-ndk/"},"next":{"title":"获取密钥属性(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-arkts/huks-obtain-key-properties-arkts.md


const frontMatter = {
	title: '获取密钥属性(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-obtain-key-properties-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '获取密钥属性(ArkTS)';

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
        id: "获取密钥属性arkts",
        children: "获取密钥属性(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HUKS提供了接口供业务获取指定密钥的相关属性。在获取指定密钥属性前，需要确保已在HUKS中生成或导入持久化存储的密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(750934)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "轻量级智能穿戴不支持获取密钥属性功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定待查询的密钥别名keyAlias，密钥别名最大长度为128字节。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksgetkeyitemproperties9",
          children: "getKeyItemProperties"
        }), "，传入参数keyAlias和options。options为预留参数，当前可传入空。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["返回值为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksreturnresult9",
          children: "HuksReturnResult"
        }), "类型对象，获取的属性集在properties字段中。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huks } from '@kit.UniversalKeystoreKit';\n\n/* 1. 设置密钥别名 */\nlet keyAlias = 'keyAlias';\n/* option对象传空 */\nlet emptyOptions: huks.HuksOptions = {\n  properties: []\n};\nlet properties1: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_DH\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_DH_KEY_SIZE_2048\n  }\n];\n\nlet huksOptions: huks.HuksOptions = {\n  properties: properties1,\n  inData: new Uint8Array([])\n}\n\n/* 3.生成密钥 */\nfunction generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicGenKeyFunc(keyAlias: string, huksOptions: huks.HuksOptions): Promise<string> {\n  console.info(`enter promise generateKeyItem`);\n  try {\n    await generateKeyItem(keyAlias, huksOptions)\n      .then((data) => {\n        console.info(`promise: generateKeyItem success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        console.error(`promise: generateKeyItem failed, ${JSON.stringify(error)}`);\n      });\n    return 'Success';\n  } catch (error) {\n    console.error(`promise: generateKeyItem input arg invalid, ${JSON.stringify(error)}`);\n    return 'Failed';\n  }\n}\n\nasync function testGenKey(): Promise<string> {\n  let ret = await publicGenKeyFunc(keyAlias, huksOptions);\n  return ret;\n}\n\nfunction check(): string {\n  try {\n    /* 1. 生成密钥 */\n    testGenKey();\n    /* 2. 获取密钥属性 */\n    huks.getKeyItemProperties(keyAlias, emptyOptions, (error, data) => {\n      if (error) {\n        console.error(`callback: getKeyItemProperties failed, ${JSON.stringify(error)}`);\n      } else {\n        console.info(`callback: getKeyItemProperties success, data = ${JSON.stringify(data)}`);\n      }\n    });\n    return 'Success';\n  } catch (error) {\n    console.error(`callback: getKeyItemProperties input arg invalid, ${JSON.stringify(error)}`);\n    return 'Failed';\n  }\n}\n"
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
750934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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