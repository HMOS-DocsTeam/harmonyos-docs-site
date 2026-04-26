"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["139908"], {
948855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_user_files_user_file_overview_user_file_overview_md_516_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-user-files-user-file-overview-user-file-overview-md-516.json
var site_docs_core_file_kit_user_files_user_file_overview_user_file_overview_md_516_namespaceObject = JSON.parse('{"id":"core-file-kit/user-files/user-file-overview/user-file-overview","title":"用户文件概述","description":"用户文件：登录到该终端设备的用户所拥有的文件，包括用户私有的图片、视频、音频、文档等。","source":"@site/docs/core-file-kit/user-files/user-file-overview/user-file-overview.md","sourceDirName":"core-file-kit/user-files/user-file-overview","slug":"/core-file-kit/user-files/user-file-overview/","permalink":"/harmonyos-docs-site/core-file-kit/user-files/user-file-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"用户文件概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-file-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用升级过程代码开发注意事项","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/code-precautions/"},"next":{"title":"用户文件URI介绍","permalink":"/harmonyos-docs-site/core-file-kit/user-files/user-file-uri-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/user-files/user-file-overview/user-file-overview.md


const frontMatter = {
	title: '用户文件概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-file-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '用户文件概述';

const assets = {

};



const toc = [{
  "value": "用户文件存储位置",
  "id": "用户文件存储位置",
  "level": 2
}, {
  "value": "内置存储",
  "id": "内置存储",
  "level": 3
}, {
  "value": "外置存储",
  "id": "外置存储",
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
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "用户文件概述",
        children: "用户文件概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户文件：登录到该终端设备的用户所拥有的文件，包括用户私有的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-overview",
        children: "图片、视频"
      }), "、音频、文档等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户文件存放在用户目录下，归属于该设备上登录的用户。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["用户文件存储位置主要分为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%86%85%E7%BD%AE%E5%AD%98%E5%82%A8",
          children: "内置存储"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%A4%96%E7%BD%AE%E5%AD%98%E5%82%A8",
          children: "外置存储"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用对用户文件的创建、访问、删除等行为，需要提前获取用户授权，或由用户操作完成。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户文件存储位置",
      children: "用户文件存储位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内置存储",
      children: "内置存储"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内置存储，是指用户文件存储在终端设备的内部存储设备（空间）上。内置存储设备无法被移除。内置存储的用户文件主要有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户特有的文件：这部分文件归属于登录该设备的用户，不同用户登录后，仅可看到该用户自己的文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照这些文件的特征/属性，以及用户/应用的使用习惯，可分为："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "图片/视频类媒体文件"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "所具有的特征包括拍摄时间、地点、旋转角度、文件宽高等信息，以媒体文件的形式存储在系统中，通常是以所有文件、相册的形式对外呈现，不会展示其在系统中存储的具体位置。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "音频类媒体文件"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "所具有的特征包括所属专辑、音频创作者、持续时间等信息，以媒体文件的形式存储在系统中，通常会以所有文件、专辑、作家等形式对外部呈现，不会展示其在系统中存储的具体位置。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "其他文件（统称为文档类文件）"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "以普通文件的形式存储在系统中，该类文件既包括普通的文本文件、压缩文件等，又包括以普通文件形式存储的图片/视频、音频文件，该类文件通常是以目录树的形式对外展示。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "外置存储",
      children: "外置存储"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外置存储，是指用户文件存储在外置可插拔设备上（如SD卡、U盘等）。外置存储设备上的文件，可以被所有登录到系统中的用户看到。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外置存储设备具备可插拔属性，因此系统提供了设备插拔事件的监听及挂载功能，用于管理外置存储设备，该部分功能仅对系统应用开放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外置存储设备上的文件，全部以普通文件的形式呈现，和内置存储设备上的文档类文件一样，采用目录树的形式对外展示。"
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