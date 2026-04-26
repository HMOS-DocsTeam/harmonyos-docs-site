"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["348518"], {
549907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_custom_auth_plugin_ide_custom_auth_plugin_template_ide_custom_auth_plugin_template_md_0da_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-appendix-ide-custom-auth-plugin-ide-custom-auth-plugin-template-ide-custom-auth-plugin-template-md-0da.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_custom_auth_plugin_ide_custom_auth_plugin_template_ide_custom_auth_plugin_template_md_0da_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-auth-plugin/ide-custom-auth-plugin-template/ide-custom-auth-plugin-template","title":"模板文件","description":"模板文件中包含自定义auth插件需要的两个文件：CustomAuth.ts和tsconfig.json。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-auth-plugin/ide-custom-auth-plugin-template/ide-custom-auth-plugin-template.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-auth-plugin/ide-custom-auth-plugin-template","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-auth-plugin/ide-custom-auth-plugin-template/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-auth-plugin/ide-custom-auth-plugin-template/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"模板文件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-auth-plugin-template","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"自定义认证插件配置","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-auth-plugin/ide-custom-auth-plugin-configuration/"},"next":{"title":"数据备份","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-data-backup/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-auth-plugin/ide-custom-auth-plugin-template/ide-custom-auth-plugin-template.md


const frontMatter = {
	title: '模板文件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-auth-plugin-template',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '模板文件';

const assets = {

};



const toc = [{
  "value": "插件模板CustomAuth.ts",
  "id": "插件模板customauthts",
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
      children: "模板文件中包含自定义auth插件需要的两个文件：CustomAuth.ts和tsconfig.json。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "插件模板customauthts",
      children: "插件模板CustomAuth.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {AuthPlugin} from '../libs/plugins/auth/AuthPlugin';  // 插件文件CustomAuth.ts存储在默认位置（ohpm-repo解压根目录的plugins文件夹内），默认引用地址\nexport class CustomAuth implements AuthPlugin {\n  /**\n   * 用户认证:根据accessToken的值，返回用户的数据:用户的id，用户的名字，用户所属的组织，用户所创建的组织\n   * @param accessToken 用户的accessToken\n   */\n  async auth(accessToken: string): Promise<{\n    id: string;                         // 用户的id，保证唯一性\n    name: string;                       // 用户的名字，保证唯一性\n    belongGroupList: Array<string>;     // 用户所在的组织，具有发布指定组织包的权限\n    groupAdminList: Array<string>;      // 用户所管理的组织，具有删除指定组织内包的权限\n  }> {\n    let id: string, name: string, belongGroupList: Array<string>, groupAdminList: Array<string>;\n    return {id, name, belongGroupList, groupAdminList};\n  }\n\n  /**\n   * 用户信息获取:根据只读accessToken的值，返回用户的数据:用户id，用户名字，用户所属的组织，用户所创建的组织\n   * @param accessToken 用户的只读accessToken\n   */\n  async authWithReadOnly(accessToken: string): Promise<{\n    id: string;                         // 用户的id，保证唯一性\n    name: string;                       // 用户的名字，保证唯一性\n    belongGroupList: Array<string>;     // 用户所在的组织，具有发指定组织包的权限\n    groupAdminList: Array<string>;      // 用户所管理的组织，具有删除指定组织内包的权限\n  }> {\n    let id: string, name: string, belongGroupList: Array<string>, groupAdminList: Array<string>;\n    return {id, name, belongGroupList, groupAdminList};\n  }\n\n  /**\n   * 根据用户id,返回用户的名字\n   * @param id 用户的id值\n   */\n  async getUserInfo(id: string): Promise<string> {\n    let name: string;\n    return name;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ts编译的配置文件tsconfigjson",
      children: "ts编译的配置文件tsconfig.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// tsconfig.json 文件指定了编译项目所需的根目录下的文件以及编译选项，编译自定义插件文件.ts为.js文件。\n{\n  \"include\": [\n    \"plugins/*\" // 插件文件的位置\n  ],\n  \"compilerOptions\": {\n    \"target\": \"es2016\",\n    \"experimentalDecorators\": true,\n    \"emitDecoratorMetadata\": true,\n    \"module\": \"commonjs\",\n    \"rootDirs\": [\n      \"./src\",\n      \"./test\"\n    ],\n    \"typeRoots\": [\n      \"./node_modules/@types\"\n    ],\n    \"types\": [\n      \"node\",\n    ],\n    \"resolveJsonModule\": true,\n    \"outDir\": \"./plugins/outDir\",   // 编译后文件输出的位置\n    \"esModuleInterop\": true,\n    \"forceConsistentCasingInFileNames\": true,\n    \"alwaysStrict\": true,\n    \"noImplicitReturns\": true,\n    \"skipLibCheck\": true\n  }\n}\n"
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