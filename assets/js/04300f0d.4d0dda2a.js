"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["453605"], {
386931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_ohpm_repo_storageplugin_ide_ohpm_repo_template_file_ide_ohpm_repo_template_file_md_043_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-appendix-ide-ohpm-repo-storageplugin-ide-ohpm-repo-template-file-ide-ohpm-repo-template-file-md-043.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_ohpm_repo_storageplugin_ide_ohpm_repo_template_file_ide_ohpm_repo_template_file_md_043_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-storageplugin/ide-ohpm-repo-template-file/ide-ohpm-repo-template-file","title":"模板文件","description":"模板文件中包含自定义storage插件需要的两个文件：CustomStorage.ts和tsconfig.json。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-storageplugin/ide-ohpm-repo-template-file/ide-ohpm-repo-template-file.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-storageplugin/ide-ohpm-repo-template-file","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-storageplugin/ide-ohpm-repo-template-file/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-storageplugin/ide-ohpm-repo-template-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"模板文件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-template-file","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"自定义存储插件配置","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-storageplugin/ide-ohpm-repo-plugin-configuration/"},"next":{"title":"自定义认证插件配置","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-auth-plugin/ide-custom-auth-plugin-configuration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-storageplugin/ide-ohpm-repo-template-file/ide-ohpm-repo-template-file.md


const frontMatter = {
	title: '模板文件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-template-file',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '模板文件';

const assets = {

};



const toc = [{
  "value": "插件模板CustomStorage.ts",
  "id": "插件模板customstoragets",
  "level": 2
}, {
  "value": "ts编译的配置文件tsconfig.json",
  "id": "ts编译的配置文件tsconfigjson",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模板文件",
        children: "模板文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模板文件中包含自定义storage插件需要的两个文件：CustomStorage.ts和tsconfig.json。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "插件模板customstoragets",
      children: "插件模板CustomStorage.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {StoragePlugin} from '../libs/plugins/storage/customStorage/StoragePlugin';  // 插件文件CustomStorage.ts存储在默认位置（ohpm-repo解压根目录的plugins文件夹内），StoragePlugin接口类的默认引用地址\nimport {getStorageConfigInfo} from '../libs/common/getStorageConfigInfo';           // 插件文件CustomStorage.ts存储在默认位置（ohpm-repo解压根目录的plugins文件夹内），getStorageConfigInfo方法的默认引用地址\nexport class CustomStorage implements StoragePlugin {\n  async init(): Promise<void>{\n    // 配置文件中 store 项格式参考\n    // store:\n    //   type: custom    // store 存储类型为 custom，即用户自定义\n    //   config:         // 配置信息：export_name和plugin_path 是必选配置项\n    //     export_name: ExampleDemo          // 插件类的名字：例如 ExampleDemo\n    //     plugin_path: ../plugins/storage/customStorage/ExampleDemo.js    // 插件文件的存放位置\n    //     configInfo1: \"info1\";             // 自定义配置信息（可选项）\n    //     configInfo2: \"info2\";             // 自定义配置信息（可选项）\n    //     ...\n    // 通过函数 getStorageConfigInfo() 可以获取到配置文件config.yaml中store.config处自定义配置的信息\n    const configStorageInfo = await getStorageConfigInfo();\n    //举例说明：当配置文件 store.config处定义 configInfo1和 configInfo2信息，可读取\n    const configInfo1 = configStorageInfo.configInfo1 as string; //获取到configInfo1的值为 \"info1\"\n    const configInfo2 = configStorageInfo.configInfo2 as string; //获取到configInfo2的值为: \"info2\"\n  };\n\n  /**\n   * 通过文件的本地路径，把数据保存到指定的 storage 内\n   * @param srcPath： 上传文件的本地路径\n   * @param packageInfo: 可选参数，待上传包的详细信息，包含包名（含组织名）和包版本号两部分，包名：packageInfo.packageName，包版本：packageInfo.version.\n   * @returns 上传文件 save 后的返回信息： 能够标识文件，方便文件删除和读取\n   */\n  async save(srcPath: string, packageInfo: any): Promise<string>{\n    let savedResponse: string;\n    return savedResponse;\n  };\n\n  /** 通过上传文件获得的返回信息，定位文件，进行文件的删除，返回删除结果\n   * @param savedResponse： 上传文件 save 后的返回信息\n   * @returns 删除的结果：true 表示删除成功\n   */\n  async delete(savedResponse: string): Promise<boolean>{\n    let isDeleteSuccess: boolean;\n    return isDeleteSuccess;\n  };\n\n  /**\n   * 通过上传文件获得的返回信息，定位文件，进行获取文件内容，数据格式为 Buffer\n   * @param savedResponse 上传文件 save 后的返回信息\n   * @returns 获取文件的内容，数据格式为 Buffer\n   */\n  async download(savedResponse: string): Promise<Buffer>{\n    let fileContent: Buffer;\n    return fileContent;\n  };\n\n /**\n   * 根据保存文件生成的结果字符串，获取文件下载url\n   * @param savedResponse 保存文件的结果字符串\n   */\n  async getDownloadUrl(savedResponse: string): Promise<string>{\n    let fileDownloadUrl: string;\n    return fileDownloadUrl;\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ts编译的配置文件tsconfigjson",
      children: "ts编译的配置文件tsconfig.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// tsconfig.json 文件指定了编译项目所需的根目录下的文件以及编译选项，编译自定义插件文件 .ts 为 .js文件。\n{\n  \"include\": [\n    \"plugins/*\" // 插件文件的位置\n  ],\n  \"compilerOptions\": {\n    \"target\": \"es2016\",\n    \"experimentalDecorators\": true,\n    \"emitDecoratorMetadata\": true,\n    \"module\": \"commonjs\",\n    \"rootDirs\": [\n      \"./src\",\n      \"./test\"\n    ],\n    \"typeRoots\": [\n      \"./node_modules/@types\"\n    ],\n    \"types\": [\n      \"node\",\n    ],\n    \"resolveJsonModule\": true,\n    \"outDir\": \"./plugins/outDir\",   // 编译后文件输出的位置\n    \"esModuleInterop\": true,\n    \"forceConsistentCasingInFileNames\": true,\n    \"alwaysStrict\": true,\n    \"noImplicitReturns\": true,\n    \"skipLibCheck\": true\n  }\n}\n"
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