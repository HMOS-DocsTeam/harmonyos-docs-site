"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["901153"], {
861016(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_cross_app_data_share_data_share_overview_data_share_overview_md_bed_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-cross-app-data-share-data-share-overview-data-share-overview-md-bed.json
var site_docs_arkdata_cross_app_data_share_data_share_overview_data_share_overview_md_bed_namespaceObject = JSON.parse('{"id":"arkdata/cross-app-data-share/data-share-overview/data-share-overview","title":"跨应用数据共享概述","description":"功能简介","source":"@site/docs/arkdata/cross-app-data-share/data-share-overview/data-share-overview.md","sourceDirName":"arkdata/cross-app-data-share/data-share-overview","slug":"/arkdata/cross-app-data-share/data-share-overview/","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/data-share-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"跨应用数据共享概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-share-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"E类加密数据库的使用 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/encrypted-estore-guidelines/"},"next":{"title":"应用间配置共享 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/one-to-many-data-share/share-config/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/cross-app-data-share/data-share-overview/data-share-overview.md


const frontMatter = {
	title: '跨应用数据共享概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-share-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '跨应用数据共享概述';

const assets = {

};



const toc = [{
  "value": "功能简介",
  "id": "功能简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "一对多跨应用数据共享",
  "id": "一对多跨应用数据共享",
  "level": 2
}, {
  "value": "具体实现",
  "id": "具体实现",
  "level": 3
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 3
}, {
  "value": "多对多跨应用数据共享",
  "id": "多对多跨应用数据共享",
  "level": 2
}, {
  "value": "具体实现",
  "id": "具体实现-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "跨应用数据共享概述",
        children: "跨应用数据共享概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能简介",
      children: "功能简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨应用数据共享提供了向其他应用共享以及管理其数据的方法，支持不同应用之间的数据协同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在许多应用场景中都需要用到数据共享，比如将电话簿、短信、媒体库中的数据共享给其他应用等。当然，不是所有的数据都允许其他应用访问，比如账号、密码等；有些数据也只允许其他应用查询而不允许其删改，比如短信等。所以针对不同数据共享场景以及数据隐私保护，设计一个安全、便捷的跨应用数据共享机制是十分必要的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前，基于跨应用数据共享中涉及的数据提供方应用个数的不同情况，数据管理提供支持一对多跨应用数据共享和多对多跨应用数据共享的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行跨应用数据共享开发前，先了解以下相关概念。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数据提供方"
          })
        }), "：提供数据及实现相关业务的应用程序，也称为生产者或服务端。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数据访问方"
          })
        }), "：访问数据提供方所提供的数据或业务的应用程序，也称为消费者或客户端。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数据集"
          })
        }), "：用户要插入的数据集合，可以是一条或多条数据。数据集以键值对的形式存在，键为字符串类型，值支持数字、字符串、布尔值、无符号整型数组等多种数据类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "结果集"
          })
        }), "：用户查询之后的结果集合，其提供了灵活的数据访问方式，以便用户获取各项数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "谓词"
          })
        }), "：用户访问数据库中的数据所使用的筛选条件，经常被应用在更新数据、删除数据和查询数据等场景。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一对多跨应用数据共享",
      children: "一对多跨应用数据共享"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于跨应用一对多数据共享的场景，可通过DataShare实现。DataShare实现数据共享时，包括数据提供方和数据访问方，具体相关实现可见下文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "具体实现",
      children: "具体实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据提供方无需进行繁琐的封装，可直接使用DataShare向其他应用共享数据；对数据访问方来说，因DataShare的访问方式不会因数据提供的方式而不同，只需要学习和使用一套接口即可，大大减少了学习时间和开发难度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DataShare实现跨应用数据共享方式如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用DataShareExtensionAbility实现数据共享：目前仅对系统应用开放，暂不具体展开提供相关内容和指导。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过数据管理服务实现数据共享静默访问：目前仅对系统应用开放，暂不具体展开提供相关内容和指导。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkdata/cross-app-data-share/one-to-many-data-share/share-config",
            children: "应用间配置共享"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这种方式通过集中管理公共配置信息，在不同应用间共享配置，提升协作效率。适用于跨应用共享配置信息，适用于需要在不同应用间共享公共配置数据，没有特殊业务的情况。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅支持在Stage模型下，进行同设备跨应用数据共享相关能力的开发。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多对多跨应用数据共享",
      children: "多对多跨应用数据共享"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "区别于一对多数据共享只有一个数据提供方，当多个应用之间需要相互进行数据共享时，即多对多的跨应用数据共享场景下，对于数据的定义、流通和权限管理等是十分必要的。统一数据管理框架（Unified Data Management Framework, UDMF）即提供一种新的数据共享与交互方式，可以实现多对多跨应用数据共享，具体相关实现可见下文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "具体实现-1",
      children: "具体实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels",
        children: "通过标准化数据通路实现数据共享"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以根据UDMF标准化数据通路提供的数据接入与读取接口，将符合标准化数据定义的数据写入UDMF不同的数据共享通路，并提供多应用进行读取。写入UDMF中的数据依据应用定义的权限、数据通路定义的权限以及整个UDMF框架定义的权限管理逻辑进行管理，写入通路中的数据的生命周期的管理也遵循上述逻辑。这样离散在各个应用的碎片化数据可以在UDMF的不同通路中形成聚合效应，提升开发者跨应用数据协同的效率，同时提升用户的数据体验。"
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