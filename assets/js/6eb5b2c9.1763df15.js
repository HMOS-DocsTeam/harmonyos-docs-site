"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["821184"], {
566665(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_completion_ide_code_completion_md_6eb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-completion-ide-code-completion-md-6eb.json
var site_docs_ide_code_edit_ide_code_completion_ide_code_completion_md_6eb_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-completion/ide-code-completion","title":"代码生成/补全","description":"代码自动补全","source":"@site/docs/ide-code-edit/ide-code-completion/ide-code-completion.md","sourceDirName":"ide-code-edit/ide-code-completion","slug":"/ide-code-edit/ide-code-completion/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-completion/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"代码生成/补全","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-completion","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"代码阅读","permalink":"/harmonyos-docs-site/ide-code-edit/ide-editer-overview/"},"next":{"title":"代码实时检查及快速修复","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-realtime-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-completion/ide-code-completion.md


const frontMatter = {
	title: '代码生成/补全',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-completion',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '代码生成/补全';

const assets = {

};



const toc = [{
  "value": "代码自动补全",
  "id": "代码自动补全",
  "level": 2
}, {
  "value": "快速覆写父类",
  "id": "快速覆写父类",
  "level": 2
}, {
  "value": "快速生成构造器",
  "id": "快速生成构造器",
  "level": 2
}, {
  "value": "快速生成get/set方法",
  "id": "快速生成getset方法",
  "level": 2
}, {
  "value": "快速生成声明信息到Index文件",
  "id": "快速生成声明信息到index文件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "代码生成补全",
        children: "代码生成/补全"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "代码自动补全",
      children: "代码自动补全"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供代码的自动补全能力，编辑器工具会分析上下文，并根据输入的内容，提示可补全的类、方法、字段和关键字的名称等，支持模糊匹配。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自动补全功能默认按最短路径进行排序，如仅需按照最近使用过的类、方法、字段和关键字等名称提供补全内容排序，可以在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File > Settings"
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio > Preferences/Settings"
        })
      }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Editor > General > Code Completion"
        })
      }), " 中勾选“Sort suggestions by recently used”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(157337)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若已勾选代码补全按最近使用排序但未生效，请检查", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Completion"
        })
      }), "页面，确保“Sort suggestions alphabetically”已取消勾选。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900848)/* ["default"] */.A) + "",
        width: "970",
        height: "692"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10928)/* ["default"] */.A) + "",
        width: "903",
        height: "519"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快速覆写父类",
      children: "快速覆写父类"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio提供Override Methods，辅助开发者根据父类模板快速生成子类方法，提升开发效率。将光标放于子类定义位置，使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "快捷键Ctrl+O"
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Control+O"
        })
      }), "），或右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate"
        })
      }), "...，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Override Methods"
        })
      }), "，指定需要覆写的对象（方法、变量等），点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        })
      }), "将自动生成该对象的覆写代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(394949)/* ["default"] */.A) + "",
        width: "1206",
        height: "801"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快速生成构造器",
      children: "快速生成构造器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器支持为类快速生成一个对应的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在类中使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "快捷键Alt+Insert"
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Command+N"
        })
      }), "），或单击鼠标右键选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate"
        })
      }), "...，在弹窗中选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Constructor"
        })
      }), "，选择一个或多个需要生成构造函数的参数，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        })
      }), "。若选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Select None"
        })
      }), "，则生成不带参数的构造器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(407567)/* ["default"] */.A) + "",
        width: "737",
        height: "566"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快速生成getset方法",
      children: "快速生成get/set方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器支持为类成员变量或对象属性快速生成get和set方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将光标放置在当前类中，单击右键选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate...>Getter and Setter"
        })
      }), "，或者使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Alt+Insert"
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Command+N"
        })
      }), "），在菜单中选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Getter and Setter"
        })
      }), "，完成方法快速生成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(600823)/* ["default"] */.A) + "",
        width: "833",
        height: "496"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快速生成声明信息到index文件",
      children: "快速生成声明信息到Index文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编辑器支持将HSP和HAR模块中变量、方法、接口、类等需要对外暴露的信息，通过", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate...>Declarations"
        })
      }), "功能，批量在Index.ets文件中进行声明，便于其他模块调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在HSP或HAR模块内的文件编辑界面，单击右键选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Generate...>", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Declarations"
                })
              }), "，或者使用快捷键"]
            })
          }), "Alt+Insert"]
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Command+N"
            })
          })
        })
      }), "），在菜单中选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Declarations"
        })
      }), "，按住快捷键Ctrl并选择需要声明的变量名、方法名、接口名、类名等，即可在模块的Index.ets文件中批量生成相应的声明信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(2245)/* ["default"] */.A) + "",
        width: "1194",
        height: "595"
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
2245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833627-fb2885ecb7d0b02bbaaa4ed3dd03f7d1.gif");

},
407567(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913698-c3c628c312657d084e65642e67bbb28b.gif");

},
157337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
900848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833633-02ba8f203b9427c011028271fe58fe75.png");

},
600823(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833629-7255499debdd19a94f45c38ecfcc6c99.gif");

},
10928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753706-4c490a3fccd279c9ba5d71a91d5bcdd5.gif");

},
394949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833631-bbb5ed428e6b2c1011909d82dcb3e8ac.gif");

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