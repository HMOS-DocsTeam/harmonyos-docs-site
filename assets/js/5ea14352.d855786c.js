"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["40674"], {
117247(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_preparations_cannkit_preparations_md_5ea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-preparations-cannkit-preparations-md-5ea.json
var site_docs_cann_kit_guide_cannkit_preparations_cannkit_preparations_md_5ea_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-preparations/cannkit-preparations","title":"开发准备","description":"环境准备","source":"@site/docs/cann-kit-guide/cannkit-preparations/cannkit-preparations.md","sourceDirName":"cann-kit-guide/cannkit-preparations","slug":"/cann-kit-guide/cannkit-preparations/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-preparations","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CANN Kit简介","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-introduction/"},"next":{"title":"Model Zoo","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-preparations/cannkit-preparations.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-preparations',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "Tools下载",
  "id": "tools下载",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用Ubuntu 64位运行", (0,jsx_runtime.jsx)(_components.a, {
          href: "#tools%E4%B8%8B%E8%BD%BD",
          children: "Tools下载"
        }), "中的tools_omg模型转换工具。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["推荐使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://mirrors.ustc.edu.cn/ubuntu-releases/22.04/",
          children: "Ubuntu 22.04"
        }), "及以上版本、MacOS 10.14及以上版本、Windows 10及以上版本安装应用开发环境", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/deveco-studio/",
          children: "DevEco Studio"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["准备训练好的tools_omg模型转换工具生成的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
          children: "离线模型"
        }), "或者从", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo",
          children: "Model Zoo"
        }), "中选择合适的模型。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tools下载",
      children: "Tools下载"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tools名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools下载"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SHA256校验码"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "轻量化工具  包名：tools_dopt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对原始模型进行轻量化，以减少模型体积及加快模型推理速度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/4d/v3/ChvyTaVxR6CvAV1lVLB1-w/DDK-tools-next-6.0.1.0.zip?HW-CC-KV=V1&HW-CC-Date=20260123T095006Z&HW-CC-Expire=315360000&HW-CC-Sign=2CB6189092FA3B3FF22F538945D7DDB975C6DBCA41F753474B7B7A28E686AA6A",
              children: "DDK-tools-6.0.1.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1b2822fb9e5fe7443782915c6f34b4a2ce5c028207e7782514bd93970ff8e48a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OMG工具  包名：tools_omg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型转换工具。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/4d/v3/ChvyTaVxR6CvAV1lVLB1-w/DDK-tools-next-6.0.1.0.zip?HW-CC-KV=V1&HW-CC-Date=20260123T095006Z&HW-CC-Expire=315360000&HW-CC-Sign=2CB6189092FA3B3FF22F538945D7DDB975C6DBCA41F753474B7B7A28E686AA6A",
              children: "DDK-tools-6.0.1.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1b2822fb9e5fe7443782915c6f34b4a2ce5c028207e7782514bd93970ff8e48a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AscendC工具  包名：tools_ascendc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为AscendC算子开发提供的算子功能、性能调测集成工具。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/4d/v3/ChvyTaVxR6CvAV1lVLB1-w/DDK-tools-next-6.0.1.0.zip?HW-CC-KV=V1&HW-CC-Date=20260123T095006Z&HW-CC-Expire=315360000&HW-CC-Sign=2CB6189092FA3B3FF22F538945D7DDB975C6DBCA41F753474B7B7A28E686AA6A",
              children: "DDK-tools-6.0.1.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1b2822fb9e5fe7443782915c6f34b4a2ce5c028207e7782514bd93970ff8e48a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "平台插件包  包名：  kirin9020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AscendC工具提供不同平台的差异化能力，使用AscendC工具前需要将对应的平台安装到platform目录下。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/63/v3/RYFrodZqRG-vZ7LO5-gSuw/kirin9020-plugin-next-6.0.1.0.zip?HW-CC-KV=V1&HW-CC-Date=20251222T032701Z&HW-CC-Expire=315360000&HW-CC-Sign=D8C338777E255E82E3FE77C01F498AD8AB5390D06C6BA1580450490DB1F5D429",
              children: "kirin9020-plugin-6.0.1.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b0657b18d30d59fff6d6a64eb7af93e63668a921936e66a48e692ab943eb2687"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "平台插件包  包名：  kirinx90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AscendC工具提供不同平台的差异化能力，使用AscendC工具前需要将对应的平台安装到platform目录下。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/bd/v3/nHZXjj-MTF6FJv_-fw8q8w/kirinx90-plugin-next-6.0.1.0.zip?HW-CC-KV=V1&HW-CC-Date=20251222T032501Z&HW-CC-Expire=315360000&HW-CC-Sign=BA1EFF3526C3E49E2C52CBBFA9EE1431E802D35B7D4AA8E58620CA1715303B66",
              children: "kirinx90-plugin-6.0.1.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a3bd6872367ca370d20d392840ae5dd19c517206c48a459b531b96e0f18000a7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "平台插件包  包名：  kirin9030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AscendC工具提供不同平台的差异化能力，使用AscendC工具前需要将对应的平台安装到platform目录下。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/f0/v3/m4i1iJERRn6Ni6U-zH88Kw/kirin9030-plugin-next-6.0.1.0.zip?HW-CC-KV=V1&HW-CC-Date=20251222T032403Z&HW-CC-Expire=315360000&HW-CC-Sign=FC69A5B1E9B920477B07393B604A54A8C22F3A6F7F3E27EF2EF0B2026310A867",
              children: "kirin9030-plugin-6.0.1.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3b32effc5af9804628cb9287e88cc28ed381877adb15dd85bf8d66e3be805251"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开源软件声明：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260114154903.91891335463699164966704263846158:50001231000000:2800:F67C8F023C664AF504C606207B4DE0330B2711275C673CD791164985E68795F6.doc?needInitFileName=true",
        children: "CANN Kit 6.0.1.0 Open Source Software Notice.doc"
      }), "。"]
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