"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["386282"], {
165063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_ohpm_dockerfile_ide_ohpm_dockerfile_md_d62_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-appendix-ide-ohpm-dockerfile-ide-ohpm-dockerfile-md-d62.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_ohpm_dockerfile_ide_ohpm_dockerfile_md_d62_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-dockerfile/ide-ohpm-dockerfile","title":"基于Dockerfile部署ohpm-repo私仓","description":"Dockerfile是构建Docker镜像的文本文件，其中包含了构建镜像的命令和说明，可以实现如下功能：","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-dockerfile/ide-ohpm-dockerfile.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-dockerfile","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-dockerfile/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-dockerfile/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"基于Dockerfile部署ohpm-repo私仓","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-dockerfile","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"模板文件","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file/"},"next":{"title":"在模块中添加Ability","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-add-new-ability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-dockerfile/ide-ohpm-dockerfile.md


const frontMatter = {
	title: '基于Dockerfile部署ohpm-repo私仓',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-dockerfile',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '基于Dockerfile部署ohpm-repo私仓';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "基于dockerfile部署ohpm-repo私仓",
        children: "基于Dockerfile部署ohpm-repo私仓"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dockerfile是构建Docker镜像的文本文件，其中包含了构建镜像的命令和说明，可以实现如下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定基础镜像。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建项目目录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改config.yaml配置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置环境变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建用户，设置文件权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "运行install命令，更新环境变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "运行start命令，启动私仓服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档介绍在Linux系统中如何使用Docker命令搭建ohpm-repo私仓。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "环境准备"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.docker.com/",
            children: "Docker镜像"
          }), "，并进行环境搭建。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["下载ohpm-repo工具包，将下载的工具包重命名为ohpm-repo.zip，", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/download/ohpm-repo",
            children: "点击链接获取"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将Dockerfile文件和ohpm-repo.zip放在同一目录下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dockerfile文件模板如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 使用官方 Node.js 18 镜像\nFROM node:18\nCOPY ./ohpm-repo.zip /tmp/ohpm-repo.zip\nRUN mkdir -p /opt/ohpm-repo && \\\n    unzip /tmp/ohpm-repo.zip -d /opt/ohpm-repo && \\\n    rm -f /tmp/ohpm-repo.zip\n# 修改conf/config.yaml的listen配置，不能用localhost和127.0.0.1，必须使用0.0.0.0\nRUN if [ -f /opt/ohpm-repo/conf/config.yaml ]; then \\\n      sed -i 's/listen: [^ ]*/listen: 0.0.0.0:8088/g' /opt/ohpm-repo/conf/config.yaml; \\\n    fi\nENV OHPM_REPO_BIN_DIR=\"/opt/ohpm-repo/bin\"\nENV PATH=\"${OHPM_REPO_BIN_DIR}:${PATH}\"\n# 创建用户，不允许使用root用户来运行ohpm-repo install和ohpm-repo start命令\nRUN useradd -m myuser && \\\n    chown -R myuser:myuser /opt/ohpm-repo && \\ \n    chmod -R 755 /opt/ohpm-repo\nUSER myuser\nRUN ohpm-repo install\nENV OHPM_REPO_DEPLOY_ROOT=\"/home/myuser/ohpm-repo\"\nCMD [\"ohpm-repo\", \"start\"]\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "搭建私仓服务"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前Dockerfile文件目录下，构建镜像。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docker build -t ohpm-repo .\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动服务，包括前台运行命令、后台运行命令两种形式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 前台运行命令\ndocker run -it -p 8088:8088 ohpm-repo\n# 后台运行命令\ndocker run -d --restart=unless-stopped --name ohpm-repo -p 8088:8088 ohpm-repo\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "浏览器访问IP地址8088，使用私仓服务。"
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