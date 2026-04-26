"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["461952"], {
21552(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_app_file_app_file_backup_restore_app_data_migration_guidelines_code_precautions_code_precautions_md_7b4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-app-file-app-file-backup-restore-app-data-migration-guidelines-code-precautions-code-precautions-md-7b4.json
var site_docs_core_file_kit_app_file_app_file_backup_restore_app_data_migration_guidelines_code_precautions_code_precautions_md_7b4_namespaceObject = JSON.parse('{"id":"core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/code-precautions/code-precautions","title":"应用升级过程代码开发注意事项","description":"区分升级场景和克隆场景","source":"@site/docs/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/code-precautions/code-precautions.md","sourceDirName":"core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/code-precautions","slug":"/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/code-precautions/","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/code-precautions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"应用升级过程代码开发注意事项","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/code-precautions","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"常见问题与异常处理","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-faqs/"},"next":{"title":"用户文件概述","permalink":"/harmonyos-docs-site/core-file-kit/user-files/user-file-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/code-precautions/code-precautions.md


const frontMatter = {
	title: '应用升级过程代码开发注意事项',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/code-precautions',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用升级过程代码开发注意事项';

const assets = {

};



const toc = [{
  "value": "区分升级场景和克隆场景",
  "id": "区分升级场景和克隆场景",
  "level": 2
}, {
  "value": "公共目录文件URI继承",
  "id": "公共目录文件uri继承",
  "level": 2
}, {
  "value": "场景说明",
  "id": "场景说明",
  "level": 3
}, {
  "value": "代码实现",
  "id": "代码实现",
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
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用升级过程代码开发注意事项",
        children: "应用升级过程代码开发注意事项"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "区分升级场景和克隆场景",
      children: "区分升级场景和克隆场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要区分升级场景和克隆场景时，可以重写BackupExtensionAbility中的onRestoreEx方法，通过restoreInfo预留字段进行场景区分。onRestoreEx方法详细使用指导请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-application-backupextensionability/js-apis-application-backupextensionability#backupextensionability",
        children: "BackupExtensionAbility API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BackupExtensionAbility, BundleVersion } from '@kit.CoreFileKit';\n\nconst TAG = `BackupExtensionAbility`;\n\ninterface ErrorInfo {\n  type: string,\n  errorCode: number,\n  errorInfo: string\n}\n\ninterface DetailInfo {\n  type: string,\n  detail: string\n}\n\nexport default class EntryBackupAbility extends BackupExtensionAbility {\n  async onBackup() {\n    console.info(TAG, 'onBackup ok');\n  }\n\n  async onRestoreEx(bundleVersion: BundleVersion, restoreInfo: string): Promise<string> {\n    console.info(TAG, `onRestoreEx ok ${JSON.stringify(bundleVersion)}`);\n    let errorInfo: ErrorInfo = {\n      type: \"ErrorInfo\",\n      errorCode: 0,\n      errorInfo: \"app diy error info\"\n    }\n    if (bundleVersion.name.startsWith(\"0.0.0.0\")){\n      // 在此处实现终端设备从HarmonyOS 4.x到HarmonyOS NEXT的应用数据处理。\n      // 涉及异步操作请进行同步等待\n      console.info(TAG, `HarmonyOS to HarmonyOS NEXT scenario`);\n\n      // 如果升级场景与克隆场景没有差异化数据处理诉求，此处可以忽略。\n      if (this.IsOtaScenario(restoreInfo)) {\n        // 在此处实现终端设备从HarmonyOS 4.x到HarmonyOS NEXT升级场景的特有数据处理。无特殊要求，此处可以忽略。\n        console.info(TAG, `Ota Scenario`)\n      } else {\n        // 在此处实现终端设备从HarmonyOS 4.x到HarmonyOS NEXT克隆场景的特有数据处理。无特殊要求，此处可以忽略。\n        console.info(TAG, `Clone Scenario`)\n      }\n    } else {\n      // 在此处实现从HarmonyOS NEXT设备迁移到HarmonyOS NEXT设备后，应用数据的处理。无特殊要求，可以空实现。\n      // 涉及异步操作请进行同步等待\n      console.info(TAG, `Other scenario`);\n    }\n    return JSON.stringify(errorInfo);\n  }\n\n  /**\n   * 判断是否是升级场景\n   * @param restoreInfo 预留字段，应用恢复过程中需要的扩展参数\n   * @returns 升级场景返回true，否则返回false\n   */\n  IsOtaScenario(restoreInfo: string): boolean {\n    let details:Array<DetailInfo> = JSON.parse(restoreInfo);\n    return details.some((detailInfo) => {\n      //设备从HarmonyOS 4.x升级到HarmonyOS NEXT/5.0.x场景判断条件\n      return detailInfo.type == 'isSameDevice' && detailInfo.detail == 'true';\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "公共目录文件uri继承",
      children: "公共目录文件URI继承"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景说明",
      children: "场景说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在HarmonyOS 3.1 Release API 9及更低版本运行时，开发者可通过记录公共媒体库中文件的URI或者路径，用于后续的文件访问。 当终端设备从HarmonyOS升级到HarmonyOS NEXT后，公共媒体库中的文件会由系统整体搬迁至新位置，直接继承。导致应用记录的旧有URI或者路径不可使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为解决该问题，系统提供数据迁移公共目录文件继承方案，支持应用将记录的HarmonyOS公共媒体库文件URI或者路径转换为对应的HarmonyOS NEXT公共媒体库文件URI或者路径，并且返回对应文件类型。当应用需要在HarmonyOS NEXT中访问公共媒体库中的文件时，可以使用转换后的HarmonyOS NEXT公共媒体库文件URI或者路径，通过HarmonyOS NEXT提供的公共媒体库API进行授权访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(252644)/* ["default"] */.A) + "",
        width: "712",
        height: "491"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码实现",
      children: "代码实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以调用Scenario Fusion Kit的接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-fileuriresult/scenario-fusion-fileuriresult#section1272664195920",
        children: "convertFileUris()"
      }), "，将记录的HarmonyOS公共媒体库文件URI或者路径转换为HarmonyOS NEXT可访问的URI或者路径，并获取到对应文件类型。其中媒体文件类型请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/medialibrary-request-photouris-permission",
        children: "继承媒体文件访问权限"
      }), "，其他类型文件可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
        children: "基础文件接口"
      }), "进行操作。convertFileUris()接口详细使用指导请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scenario-fusion-guide/scenario-fusion-api-path-conversion",
        children: "基于融合场景服务实现文件路径转换参考指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(586880)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以在数据迁移的过程中，通过该接口将HarmonyOS公共媒体库文件URI或者路径转换为对应的HarmonyOS NEXT公共媒体库文件URI或者路径，并重新保存，便于后续使用。"
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
252644(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478279-c2ed4a7d90c8412a28c844686d4c3681.png");

},
586880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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