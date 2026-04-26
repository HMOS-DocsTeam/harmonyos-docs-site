"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["295463"], {
670399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_distributed_fs_set_security_label_set_security_label_md_754_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-distributed-fs-set-security-label-set-security-label-md-754.json
var site_docs_core_file_kit_distributed_fs_set_security_label_set_security_label_md_754_namespaceObject = JSON.parse('{"id":"core-file-kit/distributed-fs/set-security-label/set-security-label","title":"设置分布式文件数据等级","description":"不同设备本身的安全能力差异较大，一些小的嵌入式设备安全能力远弱于平板等设备类型。用户或者应用不同的文件数据有不同安全诉求，例如个人的健康信息和银行卡信息等不期望被弱设备读取。因此，HarmonyOS提供一套完整的数据分级、设备分级标准，并针对不同设备制定不同的数据流转策略，具体规则请参见数据、设备安全分级。","source":"@site/docs/core-file-kit/distributed-fs/set-security-label/set-security-label.md","sourceDirName":"core-file-kit/distributed-fs/set-security-label","slug":"/core-file-kit/distributed-fs/set-security-label/","permalink":"/harmonyos-docs-site/core-file-kit/distributed-fs/set-security-label/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设置分布式文件数据等级","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/set-security-label","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分布式文件系统概述","permalink":"/harmonyos-docs-site/core-file-kit/distributed-fs/distributed-fs-overview/"},"next":{"title":"跨设备文件共享和访问","permalink":"/harmonyos-docs-site/core-file-kit/distributed-fs/file-access-across-devices/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/distributed-fs/set-security-label/set-security-label.md


const frontMatter = {
	title: '设置分布式文件数据等级',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/set-security-label',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置分布式文件数据等级';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发示例",
  "id": "开发示例",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置分布式文件数据等级",
        children: "设置分布式文件数据等级"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不同设备本身的安全能力差异较大，一些小的嵌入式设备安全能力远弱于平板等设备类型。用户或者应用不同的文件数据有不同安全诉求，例如个人的健康信息和银行卡信息等不期望被弱设备读取。因此，HarmonyOS提供一套完整的数据分级、设备分级标准，并针对不同设备制定不同的数据流转策略，具体规则请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/access-control-by-device-and-data-level",
        children: "数据、设备安全分级"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-securitylabel/js-apis-file-securitylabel",
        children: "ohos.file.securityLabel"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 设置文件数据等级，其中“√”表示支持。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持同步"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持异步"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setSecurityLabel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文件安全标签。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getSecurityLabel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取文件安全标签。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(378309)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于不满足安全等级的文件，跨设备仍然可以看到该文件，但是无权限打开访问该文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分布式文件系统的数据等级默认为S3，应用可以主动设置文件的安全等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取通用文件沙箱路径，并设置数据等级标签。示例中的context的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { securityLabel } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { fileIo } from '@kit.CoreFileKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 获取需要设备数据等级的文件沙箱路径，请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet pathDir = context.filesDir;\nlet filePath = pathDir + '/test.txt';\n\n// 打开文件\nlet file: fileIo.File | null = null;\ntry {\n  file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n  // 设置文件的数据等级为s0\n  securityLabel.setSecurityLabel(filePath, 's0').then(() => {\n    console.info('Succeeded in setting security label.');\n    fileIo.closeSync(file);\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to set security label. Code: ${err.code}, message: ${err.message}`);\n    if (file) {\n      try {\n        fileIo.closeSync(file);\n      } catch (closeErr) {\n        console.error(`Failed to close file`);\n      }\n    }\n  });\n} catch (err) {\n  console.error(`Failed to open file. Code: ${err.code}, message: ${err.message}`);\n  if (file) {\n    try {\n      fileIo.closeSync(file);\n    } catch (closeErr) {\n      console.error(`Failed to close file`);\n    }\n  }\n}\n"
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
378309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

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