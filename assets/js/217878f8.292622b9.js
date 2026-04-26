"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["450243"], {
539552(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_development_intro_api_development_intro_api_md_217_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-development-intro-api-development-intro-api-md-217.json
var site_docs_ref_development_intro_api_development_intro_api_md_217_namespaceObject = JSON.parse('{"id":"development-intro-api/development-intro-api","title":"开发说明","description":"API参考主要用于开发者查阅应用开发相关的各类API说明。为了方便开发者使用API文档，对文档描述中的常用字段进行说明。","source":"@site/docs-ref/development-intro-api/development-intro-api.md","sourceDirName":"development-intro-api","slug":"/development-intro-api/development-intro-api","permalink":"/harmonyos-docs-site/ref/development-intro-api/development-intro-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开发说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/development-intro-api","kit":"API参考概述","last_updated":"2026-04-22","slug":"development-intro-api"},"sidebar":"ref","next":{"title":"系统能力SystemCapability使用指南","permalink":"/harmonyos-docs-site/ref/syscap/syscap"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/development-intro-api/development-intro-api.md


const frontMatter = {
	title: '开发说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/development-intro-api',
	kit: 'API参考概述',
	last_updated: '2026-04-22',
	slug: 'development-intro-api'
};
const contentTitle = '开发说明';

const assets = {

};



const toc = [{
  "value": "版本说明",
  "id": "版本说明",
  "level": 2
}, {
  "value": "系统能力说明",
  "id": "系统能力说明",
  "level": 2
}, {
  "value": "接口使用说明",
  "id": "接口使用说明",
  "level": 2
}, {
  "value": "元服务能力说明",
  "id": "元服务能力说明",
  "level": 2
}, {
  "value": "服务卡片说明",
  "id": "服务卡片说明",
  "level": 2
}, {
  "value": "权限说明",
  "id": "权限说明",
  "level": 2
}, {
  "value": "错误码使用说明",
  "id": "错误码使用说明",
  "level": 2
}, {
  "value": "应用模型说明",
  "id": "应用模型说明",
  "level": 2
}, {
  "value": "废弃接口说明",
  "id": "废弃接口说明",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发说明",
        children: "开发说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API参考主要用于开发者查阅应用开发相关的各类API说明。为了方便开发者使用API文档，对文档描述中的常用字段进行说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "版本说明",
      children: "版本说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API参考采用两种方式标记组件或接口开始支持的版本号："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于新增组件或接口，会在章节开头进行说明，如：本模块首批接口从API version 7开始支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于某个已有组件或接口的新增特性，会在对应特性后进行标注，如：“uid8+”表示从API Version 8开始支持属性uid。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统能力说明",
      children: "系统能力说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统能力（SystemCapability，简称SysCap），指操作系统中每一个相对独立的特性。不同的设备对应不同的系统能力集，每个系统能力对应多个接口。开发者可根据系统能力来判断是否可以使用某接口。具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/syscap/syscap",
        children: "系统能力SystemCapability使用指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文档在每一个接口描述中说明了接口的系统能力，如：", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.xxx.xxx"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统提供了canIUse接口，可", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/syscap/syscap#%E4%BD%BF%E7%94%A8caniuse%E5%88%A4%E6%96%ADsyscap%E6%98%AF%E5%90%A6%E5%8F%AF%E8%B0%83%E7%94%A8",
          children: "使用canIUse判断SysCap是否可调用"
        }), "；"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["相同的系统能力，在不同的设备下，也会有能力的差异。开发者可以进行", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/syscap/syscap#%E5%A4%9A%E8%AE%BE%E5%A4%87%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%9C%BA%E6%99%AF%E4%B8%8B%E7%9A%84%E9%80%82%E9%85%8D%E5%BC%80%E5%8F%91",
          children: "多设备应用开发场景下的适配开发"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口使用说明",
      children: "接口使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS SDK提供的开放能力（接口）需要在导入声明后使用。SDK对同一个Kit下的接口模块进行了封装，开发者在示例代码中可通过导入Kit的方式来使用Kit所包含的接口能力。其中，Kit封装的接口模块可查看SDK目录下Kit子目录中各Kit的定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["导入Kit的方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/introduction-to-arkts#%E5%AF%BC%E5%85%A5",
        children: "导入-导入HarmonyOS SDK的开放能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "元服务能力说明",
      children: "元服务能力说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service",
        children: "元服务"
      }), "是HarmonyOS提供的一种轻量应用程序形态，具备服务直达、跨设备等特征。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "元服务可独立上架、分发、运行，独立实现业务闭环，可大幅提升信息与服务的获取效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "元服务基于HarmonyOS SDK（只能使用“元服务API集”）开发，支持运行在HarmonyOS设备上，供用户在合适的场景、合适的设备上便捷使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持在元服务中使用的接口，将会添加“", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "”的标记，如：从API version 12开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果接口不支持在元服务中使用，则不做特殊说明。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "服务卡片说明",
      children: "服务卡片说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将应用/元服务的重要信息或操作前置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/formkit-overview",
        children: "服务卡片"
      }), "（简称“卡片”），可达到服务直达、减少跳转层级的体验效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于支持在ArkTS卡片UI界面中使用的接口，将会添加“", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "卡片能力"
          })
        }), "”的标记，如：从API version 12开始，该接口支持在ArkTS卡片UI界面中使用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果接口不支持在ArkTS卡片UI界面中使用，则不做特殊说明。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "权限说明",
      children: "权限说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认情况下，应用只能访问有限的系统资源。但某些情况下，应用为了扩展功能的诉求，需要访问额外的系统或其他应用的数据（包括用户个人数据）、功能。具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview",
        children: "访问控制开发概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当调用接口访问这些资源时，需要申请对应的权限。申请方式可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode",
        children: "访问控制开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果应用需要具备某个权限才能调用该接口，会在具体的接口描述中说明：", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "需要权限"
          })
        }), "：ohos.permission.xxxx"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用不需要任何权限即可调用该接口，则不做特殊说明。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "错误码使用说明",
      children: "错误码使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS API在使用过程中，可能会遇到错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在可能出现错误的各个接口处，开发者可参考文档中提供的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "部分，了解对应接口可能出现的错误码ID及错误信息，并根据需要进行处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前ArkTS API分为异步接口和同步接口，以下为对应的错误处理方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对同步接口，错误统一通过异常形式抛出，开发者需要通过try-catch的方式处理可能抛出的异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对异步接口，错误可能包括异常和rejection，开发者若使用await/async方式，需要通过try-catch的方式处理可能抛出的异常和rejection。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对异步接口，错误可能包括异常和rejection，开发者若使用Promise方式，需要通过try-catch的方式处理同步抛出的异常（一般为401异常），并通过Promise的catch()方法或then()方法中的onrejected回调函数处理rejection。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对callback形式的异步接口（不推荐使用），错误可能包括异常和回调返回的错误，开发者若使用callback方式，需要通过try-catch的方式处理同步抛出的异常（一般为401异常），并处理通过回调参数呈现的错误（即BusinessError对象）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用模型说明",
      children: "应用模型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着系统的演进发展，先后提供了两种应用模型，FA模型和Stage模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果某个模块的接口仅支持其中一种模型，会在文档开头说明：本模块接口仅可在FA模型/Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果某个接口仅支持其中一种模型，会在具体的接口描述中说明：此接口仅可在FA模型/Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如两种框架模型均支持，则不做特殊说明。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "废弃接口说明",
      children: "废弃接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "废弃接口会使用上标“deprecated”标注，表示该接口不再推荐使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "废弃接口均会标注废弃起始版本，HarmonyOS未来可能移除已废弃接口，但在移除前会提前通知开发者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于已标注替代接口的情况，建议开发者查阅新接口的文档，尽早完成适配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于没有替代接口的情况，建议开发者参考废弃说明和变更说明（changelog），调整实现方式。"
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