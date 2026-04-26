"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["85841"], {
362289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_customization_ide_hvigor_config_ohos_ide_hvigor_config_ohos_sample_ide_hvigor_config_ohos_sample_md_dc0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-customization-ide-hvigor-config-ohos-ide-hvigor-config-ohos-sample-ide-hvigor-config-ohos-sample-md-dc0.json
var site_docs_ide_build_customization_ide_hvigor_config_ohos_ide_hvigor_config_ohos_sample_ide_hvigor_config_ohos_sample_md_dc0_namespaceObject = JSON.parse('{"id":"ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample/ide-hvigor-config-ohos-sample","title":"实践说明","description":"通过hook以及插件上下文动态配置构建配置(推荐使用)","source":"@site/docs/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample/ide-hvigor-config-ohos-sample.md","sourceDirName":"ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample","slug":"/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample/","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"实践说明","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-config-ohos-sample","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"能力说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-guide/"},"next":{"title":"分析构建过程","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-build-analyzer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample/ide-hvigor-config-ohos-sample.md


const frontMatter = {
	title: '实践说明',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-config-ohos-sample',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '实践说明';

const assets = {

};



const toc = [{
  "value": "通过hook以及插件上下文动态配置构建配置(推荐使用)",
  "id": "通过hook以及插件上下文动态配置构建配置推荐使用",
  "level": 2
}, {
  "value": "修改每个hvigorNode中的build-profile.json5",
  "id": "修改每个hvigornode中的build-profilejson5",
  "level": 3
}, {
  "value": "修改module.json5中的配置信息",
  "id": "修改modulejson5中的配置信息",
  "level": 3
}, {
  "value": "修改app.json5中的配置信息",
  "id": "修改appjson5中的配置信息",
  "level": 3
}, {
  "value": "修改oh-package.json5中的依赖",
  "id": "修改oh-packagejson5中的依赖",
  "level": 3
}, {
  "value": "通过overrides动态配置签名材料和版本信息(不推荐使用)",
  "id": "通过overrides动态配置签名材料和版本信息不推荐使用",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "实践说明",
        children: "实践说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过hook以及插件上下文动态配置构建配置推荐使用",
      children: "通过hook以及插件上下文动态配置构建配置(推荐使用)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改每个hvigornode中的build-profilejson5",
      children: "修改每个hvigorNode中的build-profile.json5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处只举例为单个node注册hook并修改build-profile.json5的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如需要修改根目录下的build-profile.json5的签名信息，则在项目根目录下的hvigorfile.ts中添加如下内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor,getNode } from '@ohos/hvigor'\n\n// 获取根节点\nconst rootNode = getNode(__filename);\n// 为根节点添加一个afterNodeEvaluate hook 在hook中修改根目录下的build-profile.json5的内容并使能\nrootNode.afterNodeEvaluate(node => {\n    // 获取app插件的上下文对象\n    const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    // 通过上下文对象获取从根目录build-profile.json5文件中读出来的obj对象\n    const buildProfileOpt = appContext.getBuildProfileOpt();\n    // 修改obj对象为想要的，此处举例修改app中的signingConfigs\n    buildProfileOpt['app']['signingConfigs'] = [\n        {\n            \"name\": \"default\",\n            \"type\": \"HarmonyOS\",\n            \"material\": {\n                \"certpath\": \"D:\\\\SigningConfig\\\\debug_hos.cer\",\n                \"storePassword\": \"******\",\n                \"keyAlias\": \"debugKey\",\n                \"keyPassword\": \"******\",\n                \"profile\": \"D:\\\\SigningConfig\\\\debug_hos.p7b\",\n                \"signAlg\": \"SHA256withECDSA\",\n                \"storeFile\": \"D:\\\\SigningConfig\\\\debug_hos.p12\"\n            }\n        }\n    ];\n    // 将obj对象设置回上下文对象以使能到构建的过程与结果中\n    appContext.setBuildProfileOpt(buildProfileOpt);\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改modulejson5中的配置信息",
      children: "修改module.json5中的配置信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过hvigor对象的hook能力快捷为所有的node创建hook，此处先举例为单一的node创建一个hook并修改其中的module.json5的配置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如此处需要修改entry下的module.json5配置，则在entry下的hvigorfile.ts中添加如下内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hapTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { getNode } from '@ohos/hvigor'\n\nconst entryNode = getNode(__filename);\n// 为此节点添加一个afterNodeEvaluate hook 在hook中修改module.json5的内容并使能\nentryNode.afterNodeEvaluate(node => {\n    // 获取此节点使用插件的上下文对象 此时为hap插件 获取hap插件上下文对象\n    const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n    // 通过上下文对象获取从module.json5文件中读出来的obj对象\n    const moduleJsonOpt = hapContext.getModuleJsonOpt();\n    // 修改obj对象为想要的，此处举例修改module中的deviceTypes\n    moduleJsonOpt['module']['deviceTypes'] = [\"phone\", \"tablet\", \"2in1\", \"car\"];\n    // 将obj对象设置回上下文对象以使能到构建的过程与结果中\n    hapContext.setModuleJsonOpt(moduleJsonOpt);\n})\nexport default {\n    system: hapTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改appjson5中的配置信息",
      children: "修改app.json5中的配置信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在项目的根目录下的hvigorfile.ts中添加如下代码内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor'\n\n// 为根节点添加一个afterNodeEvaluate hook 在hook中修改app.json5的内容并使能\nhvigor.getRootNode().afterNodeEvaluate(rootNode => {\n    // 获取app插件的上下文对象\n    const appContext = rootNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    // 通过上下文对象获取从app.json5文件中读出来的obj对象\n    const appJsonOpt = appContext.getAppJsonOpt();\n    // 修改obj对象为想要的，此处举例修改app中的versionCode\n    appJsonOpt['app']['versionCode'] = 1000001;\n    // 将obj对象设置回上下文对象以使能到构建的过程与结果中\n    appContext.setAppJsonOpt(appJsonOpt);\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改oh-packagejson5中的依赖",
      children: "修改oh-package.json5中的依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过hvigorfile.ts自定义插件修改工程级、模块级的oh-package.json5的依赖，例如在工程级hvigorfile.ts或模块级hvigorfile.ts分别添加以下内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts\nimport { appTasks, OhosAppContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';\nimport { HvigorNode, HvigorPlugin, TaskInput, TaskOutput } from '@ohos/hvigor';\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const appContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n            const dependency = appContext.getDependenciesOpt();  // 获取dependency依赖\n            dependency[\"library\"]=\"file:library.har\"    // 确保har包存在\n            console.log(dependency);\n            appContext.setDependenciesOpt(dependency );  // 修改dependency依赖，需要确保oh-package.json5中dependencies字段存在\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n\n// 模块级hvigorfile.ts\nimport {hapTasks,OhosHapContext,OhosPluginId,Target} from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin} from '@ohos/hvigor';\nimport * as fs from 'fs';\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const hapContext = currentNode.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n            const dependency = hapContext.getDependenciesOpt();    // 获取dependency依赖\n            dependency[\"library\"]=\"file:library.har\"    // 确保har包存在\n            hapContext.setDependenciesOpt(dependency);}   // 需要确保oh-package.json5中dependencies字段存在\n        }\n    };\nexport default {\n    system: hapTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过overrides动态配置签名材料和版本信息不推荐使用",
      children: "通过overrides动态配置签名材料和版本信息(不推荐使用)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过在hvigorfile.ts里使用函数方法，动态配置签名材料和版本号、版本名等信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//工程级别hvigorfile.ts\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nexport default {\n  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins: [],       /* Custom plugin to extend the functionality of Hvigor. */\n  config: {\n    ohos: {\n      overrides:{\n        signingConfig: getSigningConfig(), //签名配置对象 \n        appOpt: {\n          versionCode: getVersionCode(),\n          versionName: getVersionName(),\n        } //app.json中的内容 \n      }\n    }\n  }\n}\n\nfunction getSigningConfig() {\n  return {\n    type: \"HarmonyOS\",\n    material: {\n      certpath: \"D:\\\\SigningConfig\\\\debug_hos.cer\",\n      storePassword: \"******\",\n      keyAlias: \"debugKey\",\n      keyPassword: \"******\",\n      profile: \"D:\\\\SigningConfig\\\\debug_hos.p7b\",\n      signAlg: \"SHA256withECDSA\",\n      storeFile: \"D:\\\\SigningConfig\\\\debug_hos.p12\"\n    }\n  }\n}\n\nfunction getVersionCode() {\n  return 100000+new Date().getFullYear();\n}\n\nfunction getVersionName() {\n  return `1.0.0${new Date().getTime()}`;\n}\n"
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