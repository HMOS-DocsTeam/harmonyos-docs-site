"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["278673"], {
903953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_custom_metadata_rule_validation_ide_rule_verification_template_file_ide_rule_verification_template_file_md_bbf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-appendix-ide-custom-metadata-rule-validation-ide-rule-verification-template-file-ide-rule-verification-template-file-md-bbf.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_custom_metadata_rule_validation_ide_rule_verification_template_file_ide_rule_verification_template_file_md_bbf_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file/ide-rule-verification-template-file","title":"模板文件","description":"模板文件中包含自定义元数据规则校验插件需要的三个文件：自定义规则校验函数模板文件checkField.ts，自定义规则校验配置模板文件CustomExtensionValidationConfig.json和ts编译为js的配置模板文件tsconfig.json。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file/ide-rule-verification-template-file.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"模板文件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-rule-verification-template-file","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"自定义元数据规则校验插件配置","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-custom-metadata-rule-validation-config/"},"next":{"title":"基于Dockerfile部署ohpm-repo私仓","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-dockerfile/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file/ide-rule-verification-template-file.md


const frontMatter = {
	title: '模板文件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-rule-verification-template-file',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '模板文件';

const assets = {

};



const toc = [{
  "value": "自定义规则校验函数模板文件checkField.ts",
  "id": "自定义规则校验函数模板文件checkfieldts",
  "level": 2
}, {
  "value": "自定义规则校验配置模板文件CustomExtensionValidationConfig.json",
  "id": "自定义规则校验配置模板文件customextensionvalidationconfigjson",
  "level": 2
}, {
  "value": "ts编译为js的配置模板文件tsconfig.json",
  "id": "ts编译为js的配置模板文件tsconfigjson",
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
      children: "模板文件中包含自定义元数据规则校验插件需要的三个文件：自定义规则校验函数模板文件checkField.ts，自定义规则校验配置模板文件CustomExtensionValidationConfig.json和ts编译为js的配置模板文件tsconfig.json。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请创建指定名称的文件，并把下方源码拷贝到文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义规则校验函数模板文件checkfieldts",
      children: "自定义规则校验函数模板文件checkField.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//如果自定义校验规则文件checkField.ts存储在默认位置（ohpm-repo解压根目录的plugins/fieldCheckPlugin文件夹内），插件文件checkField.ts中默认工具类引用地址如下\nimport {\n  FieldDataType,\n  ValidationExtensionRule\n} from '../../libs/service/validator/validationExtensionRule/ValidationExtensionRule';      \nimport {UserBasicInfo} from '../../libs/service/validator/validationExtensionRule/type';\nimport {CustomValidateError} from '../../libs/service/validator/CustomValidateError';\nimport {OhpmLazyLogger as log} from '../../libs/packages/log';\n/**\n * 自定义规则校验\n * @param fieldData 字段的取值\n * @param userInfo 发布三方包用户的信息，包含userName和userRole两部分\n *    userInfo.userName：发布三方包账户的用户名称\n *    userInfo.userRole：发布三方包账户的用户角色，1表示为管理员账户，0表示为普通用户\n */\nexport const checkField: ValidationExtensionRule = (fieldData: FieldDataType, userInfo: UserBasicInfo): void => {\n  const name: string = <string>fieldData;      // 待校验字段的值，以name为例\n  const userName: string = userInfo.userName;  // 发布三方包账户的用户名称\n  const userRole: number = userInfo.userRole;  // 发布三方包账户的用户角色，1表示为管理员账户，0表示为普通用户\n  // 错误抛出分为两部分：CustomValidateError第一个参数内容将打印在ohpm-repo运行日志中（命令行和ohpm-repo管理界面发布三方包均会打印），第二个参数内容将打印在ohpm-repo管理界面弹窗（仅限ohpm-repo管理界面发布三方包）\n  if (name === 'package') {\n    throw new CustomValidateError('Cannot publish package named \"package\"',\n      '不能发布包名为package的包');\n  }\n  // 成功日志打印，日志级别打印可以为：log.trace，log.debug，log.info，log.warn和log.error\n  log.info('校验成功');  // log.debug('校验成功');\n };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义规则校验配置模板文件customextensionvalidationconfigjson",
      children: "自定义规则校验配置模板文件CustomExtensionValidationConfig.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[\n  {\n    \"attrName\": \"<被校验字段的名称1>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"规则的类型，不配置默认为CustomFunction\",\n        \"description\": \"<规则的功能描述>\",\n        \"ruleContent\": \"<规则的内容>\"\n      },\n      {\n        \"ruleType\": \"规则的类型，不配置默认为CustomFunction\",\n        \"description\": \"<规则的功能描述>\",\n        \"ruleContent\": \"<规则的内容>\"\n      }\n    ]\n  },\n  {\n    \"attrName\": \"<被校验字段的名称2>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"规则的类型，不配置默认为CustomFunction\",\n        \"description\": \"<规则的功能描述>\",\n        \"ruleContent\": \"<规则的内容>\"\n      },\n      {\n        \"ruleType\": \"规则的类型，不配置默认为CustomFunction\",\n        \"description\": \"<规则的功能描述>\",\n        \"ruleContent\": \"<规则的内容>\"\n      }\n    ]\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ts编译为js的配置模板文件tsconfigjson",
      children: "ts编译为js的配置模板文件tsconfig.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// tsconfig.json 文件指定了编译项目所需的根目录下的文件以及编译选项，编译自定义插件文件 .ts 为 .js文件。\n{\n  \"include\": [\n    \"plugins/fieldCheckPlugin/*\" // 插件文件的位置\n  ],\n  \"compilerOptions\": {\n    \"target\": \"es2016\",\n    \"experimentalDecorators\": true,\n    \"emitDecoratorMetadata\": true,\n    \"module\": \"commonjs\",\n    \"rootDirs\": [\n      \"./src\",\n      \"./test\"\n    ],\n    \"typeRoots\": [\n      \"./node_modules/@types\"\n    ],\n    \"types\": [\n      \"node\",\n    ],\n    \"resolveJsonModule\": true,\n    \"outDir\": \"./plugins/outDir\",   // 编译后文件输出的位置\n    \"esModuleInterop\": true,\n    \"forceConsistentCasingInFileNames\": true,\n    \"alwaysStrict\": true,\n    \"noImplicitReturns\": true,\n    \"skipLibCheck\": true\n  }\n}\n"
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