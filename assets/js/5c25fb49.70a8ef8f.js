"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["763130"], {
407434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ringtone_kit_guide_ringtone_preparations_ringtone_preparations_md_5c2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ringtone-kit-guide-ringtone-preparations-ringtone-preparations-md-5c2.json
var site_docs_ringtone_kit_guide_ringtone_preparations_ringtone_preparations_md_5c2_namespaceObject = JSON.parse('{"id":"ringtone-kit-guide/ringtone-preparations/ringtone-preparations","title":"设置铃声","description":"1. 导入ringtone模块和相关公共模块。","source":"@site/docs/ringtone-kit-guide/ringtone-preparations/ringtone-preparations.md","sourceDirName":"ringtone-kit-guide/ringtone-preparations","slug":"/ringtone-kit-guide/ringtone-preparations/","permalink":"/harmonyos-docs-site/ringtone-kit-guide/ringtone-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设置铃声","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ringtone-preparations","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Ringtone Kit简介","permalink":"/harmonyos-docs-site/ringtone-kit-guide/ringtone-introduction/"},"next":{"title":"Scan Kit简介","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ringtone-kit-guide/ringtone-preparations/ringtone-preparations.md


const frontMatter = {
	title: '设置铃声',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ringtone-preparations',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '设置铃声';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "设置铃声",
        children: "设置铃声"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入ringtone模块和相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { ringtone } from '@kit.RingtoneKit'\nimport { uniformTypeDescriptor } from '@kit.ArkData';\nimport { JSON } from '@kit.ArkTS';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst APP_TAG = \"Msc_Demo\"\nconst DOMAIN = 0x0001\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ringtone-api/ringtone-arkts/ringtone-ringtone/ringtone-ringtone#ringtonegetsupportedringtonetypes",
            children: "ringtone.getSupportedRingtoneTypes"
          }), "接口，查询支持设置的铃声类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let ringtoneTypeList: Array<ringtone.RingtoneType> = ringtone.getSupportedRingtoneTypes();\nhilog.info(DOMAIN, APP_TAG,'getSupportedRingtoneTypes : ' + JSON.stringify(ringtoneTypeList));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ringtone-api/ringtone-arkts/ringtone-ringtone/ringtone-ringtone#ringtonegetsupporteddatatypes",
            children: "ringtone.getSupportedDataTypes"
          }), "接口，查询支持的数据类型。当前支持格式：MP3，OGG，FLAC，AAC，MP2，M4A。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 其中 ringtone.RingtoneType.NOTIFICATION 为通知铃声\nlet dataTypeList: Array<uniformTypeDescriptor.UniformDataType> = ringtone.getSupportedDataTypes(ringtone.RingtoneType.NOTIFICATION);\nhilog.info(DOMAIN, APP_TAG,'getSupportedDataTypes: ' + JSON.stringify(dataTypeList));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ringtone-api/ringtone-arkts/ringtone-ringtone/ringtone-ringtone#ringtonestartringtonesetting",
            children: "ringtone.startRingtoneSetting"
          }), "接口拉起设置弹窗，用户设置铃声后返回设置的铃声类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过promise异步方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 详细代码参考API参考\nlet prefixUri: string = '';\nlet audioPath: string = prefixUri + '/' + this.buttonText;\nlet fileName: string = audioPath.substring(audioPath.lastIndexOf('/') + 1, audioPath.lastIndexOf('.'));\nawait ringtone.startRingtoneSetting(this.context, audioPath, fileName).then(res => {\n  hilog.info(DOMAIN, APP_TAG,'setFlag :' + res);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过callback异步方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 详细代码参考API参考\nlet prefixUri: string = '';\nlet audioPath: string = prefixUri + '/' + this.buttonText;\nlet fileName: string = audioPath.substring(audioPath.lastIndexOf('/') + 1, audioPath.lastIndexOf('.'));\nringtone.startRingtoneSetting(this.context, audioPath, fileName, (err, data) => {\n  hilog.info(DOMAIN, APP_TAG,'setFlag :' + data);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ringtone-api/ringtone-arkts/ringtone-ringtone/ringtone-ringtone#ringtonegetsupportedmaxduration",
            children: "ringtone.getSupportedMaxDuration"
          }), "接口，获取当前铃声支持的最大时长。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 其中 ringtone.RingtoneType.MESSAGE 为短信铃声\nlet maxDuration: number =\n  ringtone.getSupportedMaxDuration(ringtone.RingtoneType.MESSAGE, uniformTypeDescriptor.UniformDataType.MP3)\nhilog.info(DOMAIN, APP_TAG,'getSupportedMaxDuration: ' + maxDuration);\n"
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