"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["453044"], {
343506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_customize_bytecode_during_compilation_customize_bytecode_during_compilation_md_6c7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-bytecode-customize-bytecode-during-compilation-customize-bytecode-during-compilation-md-6c7.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_customize_bytecode_during_compilation_customize_bytecode_during_compilation_md_6c7_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation/customize-bytecode-during-compilation","title":"编译期自定义修改方舟字节码","description":"如果开发者希望自定义修改方舟字节码文件的内容，可以使用ArkTS编译工具链提供的方法自定义修改方舟字节码文件。","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation/customize-bytecode-during-compilation.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation","slug":"/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"编译期自定义修改方舟字节码","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/customize-bytecode-during-compilation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"方舟字节码函数命名规则","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-function-name/"},"next":{"title":"方舟字节码生成常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/es2abc-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation/customize-bytecode-during-compilation.md


const frontMatter = {
	title: '编译期自定义修改方舟字节码',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/customize-bytecode-during-compilation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '编译期自定义修改方舟字节码';

const assets = {

};



const toc = [{
  "value": "能力配置说明",
  "id": "能力配置说明",
  "level": 2
}, {
  "value": "能力执行机制",
  "id": "能力执行机制",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "编译期自定义修改方舟字节码",
        children: "编译期自定义修改方舟字节码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者希望自定义修改方舟字节码文件的内容，可以使用ArkTS编译工具链提供的方法自定义修改方舟字节码文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力配置说明",
      children: "能力配置说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["准备一个操作方舟字节码文件的动态库文件，在工程的配置文件build-profile.json5中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkoptions-guide#transformlib",
        children: "配置编译选项transformLib"
      }), "，选项值为这个动态库的路径，编译器会在指定时机加载该动态库，并执行其中指定的Transform方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力执行机制",
      children: "能力执行机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果配置了transformLib且对应的动态库文件能正确加载，编译器将先生成方舟字节码文件到默认目标位置，然后调用动态库中的Transform方法，并将方舟字节码文件的路径作为参数传入。Transform方法包含开发者自定义的修改逻辑，用于重新生成方舟字节码文件，同时更新字节码文件的落盘操作是由用户执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下提供动态库模板，开发者可根据需求实现Transform逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建自定义修改动态库的源码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "example.cpp："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * @brief 方舟字节码文件修改的入口方法\n * @param abc_path 待处理的方舟字节码文件的存储路径\n */\nextern \"C\" int Transform(const char *abc_path)\n{\n    // 开发者可以在这里读取abc_path对应的方舟字节码文件，然后根据方舟字节码格式修改相关数据，然后再重新生成方舟字节码文件\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用C语言编译工具（这里使用g++）编译动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Windows平台："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "g++ --shared -o example.dll example.cpp\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linux平台："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "g++ --shared -o example.so example.cpp\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mac平台："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "g++ --shared -o example.so example.cpp\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中配置build-profile.json5的transformLib选项（以Windows环境为例）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选项中配置的路径为步骤2生成的链接库文件在项目中的路径（这里是dll目录下）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(192416)/* ["default"] */.A) + "",
            width: "1819",
            height: "1104"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重新编译项目，即可完成自定义修改方舟字节码。"
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
192416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477545-a20ea58b96d7235893ec6b325934a1d5.png");

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