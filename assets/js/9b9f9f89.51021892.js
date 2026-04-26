"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["882696"], {
348463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_process_model_stage_process_model_stage_md_9b9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-process-model-stage-process-model-stage-md-9b9.json
var site_docs_ability_kit_stage_model_development_process_model_stage_process_model_stage_md_9b9_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/process-model-stage/process-model-stage","title":"进程模型","description":"概述","source":"@site/docs/ability-kit/stage-model-development/process-model-stage/process-model-stage.md","sourceDirName":"ability-kit/stage-model-development/process-model-stage","slug":"/ability-kit/stage-model-development/process-model-stage/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/process-model-stage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"进程模型","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/process-model-stage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起系统应用","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/system-app-startup/"},"next":{"title":"线程模型","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/thread-model-stage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/process-model-stage/process-model-stage.md


const frontMatter = {
	title: '进程模型',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/process-model-stage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '进程模型';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "进程模型",
  "id": "进程模型-1",
  "level": 2
}, {
  "value": "基本进程类型",
  "id": "基本进程类型",
  "level": 3
}, {
  "value": "其他进程类型",
  "id": "其他进程类型",
  "level": 3
}, {
  "value": "线程模型",
  "id": "线程模型",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "进程模型",
        children: "进程模型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程是系统进行资源分配的基本单位，是操作系统结构的基础。下面从一个应用的全局视角来看下系统的进程模型和线程模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "进程模型-1",
      children: "进程模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本进程类型",
      children: "基本进程类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者开发一个复杂功能的应用，包含多个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "组件和多个ExtensionAbility组件，ExtensionAbility如图1中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability",
        children: "FormExtensionAbility"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-shareextensionability/js-apis-app-ability-shareextensionability",
        children: "ShareExtensionAbility"
      }), "。那么在应用运行态，可能存在的进程类型："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "主进程"
            })
          }), "：默认情况下，应用中（同一Bundle名称）的所有UIAbility均是运行在同一个独立进程（主进程）中，即图1中的“Main Process1”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ExtensionAbility进程"
            })
          }), "：应用中（同一Bundle名称）的所有同一类型ExtensionAbility均是运行在一个独立进程中，如图1中“FormExtensionAbility Process”、“其他类型ExtensionAbility Process”（其他类型的ExtensionAbility组件）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["特别地，对于继承自", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
            children: "UIExtensionAbility"
          }), "的ExtensionAbility，可以为每个实例配置独立进程。例如ShareExtensionAbility可以指定每个ShareExtensionAbility实例分别运行在一个独立进程，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
            children: "UIExtensionAbility"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Render进程"
            })
          }), "：应用中的Web组件运行时，系统会为之分配一个Render进程，用于渲染。如图1中的“Render Process”。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 基本进程类型"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(535609)/* ["default"] */.A) + "",
        width: "1117",
        height: "623"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251884)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["进程名称的命名无固定规则，而且与进程类型也不存在直接关联，不能用于业务逻辑的判断。例如，开发者开发了一款应用com.example.myapplication，其中有一个输入法组件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-extension-ability/js-apis-inputmethod-extension-ability",
          children: "InputMethodExtensionAbility"
        }), "，输入法组件是运行在独立进程中的，通常情况下其进程名是为“com.example.myapplication:input”。但这并不是固定的，该进程名对应的进程不一定是输入法进程，输入法进程也不一定是该进程名。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个进程可以包含多个AbilityStage，一个AbilityStage可以包含多个Ability。进程的生命周期与Ability生命周期息息相关，当进程内的所有Ability都退出后，进程才会走销毁流程。换句话说，如果想退出进程，需要先退出进程内的所有Ability。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他进程类型",
      children: "其他进程类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在2in1和Tablet设备上，针对UIAbility，还支持如下特殊进程类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "模块独立进程"
          })
        }), "：对于多HAP的应用，每个HAP的业务相对独立，如果开发者希望不同HAP的UIAbility运行在不同的进程，可以在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
          children: "module.json5配置文件"
        }), "中将isolationMode字段配置为isolationOnly（只在独立进程中运行）或者isolationFirst（优先在独立进程中运行），那么该HAP下的所有UIAbility将运行在统一的独立的进程中。如图2中UIAbilityC运行在“Main Process2”， 而不是“Main Process1”。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "动态指定进程"
          })
        }), "：当同一HAP中的UIAbility实例需要根据运行时状态（如每个进程最多支持5个实例）动态分配到不同进程时，开发者可以在module.json5配置文件中将该UIAbility的isolationProcess字段配置为true，如图2中的UIAbilityD。系统在启动UIAbilityD实例时，回调", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#masterprocess%E4%B8%BB%E6%8E%A7%E8%BF%9B%E7%A8%8B",
          children: "主控进程"
        }), "的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onnewprocessrequest11",
          children: "onNewProcessRequest"
        }), "，开发者在该回调中返回自定义的一个字符串，如果返回的字符串是开发者曾创建的，则复用该标识所在的进程，否则创建新的进程。如图2中的 “Main Processes3”和“Main Process4”则是UIAbilityD运行的多个进程。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "静态指定进程"
          })
        }), "：当同一应用中的UIAbility或EmbeddedUIExtensionAbility需要运行到不同进程时，开发者可以将module.json5配置文件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
          children: "abilities标签"
        }), "中的process字段或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
          children: "extensionAbilities标签"
        }), "中的process字段配置为不同的字符串。系统在启动UIAbility或EmbeddedUIExtensionAbility时，会根据这个字符串分配进程。如果同一应用的多个UIAbility和多个EmbeddedUIExtensionAbility的process字段都配置了相同的字符串，则这些UIAbility和EmbeddedUIExtensionAbility都会运行在同一个进程内。如图2中的 “Main Process5”。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "子进程"
          })
        }), "： 如果开发者希望开启多进程做一些后台业务，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-childprocessmanager/js-apis-app-ability-childprocessmanager",
          children: "childProcessManager"
        }), "中的接口创建子进程。子进程的生命周期跟随父进程，父进程消亡，子进程跟随消亡。如图2中的“ArkTS Child Process”和“Native Child Process”是主进程创建的子进程。子进程不支持再创建子进程。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 其他进程类型"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211531)/* ["default"] */.A) + "",
        width: "1347",
        height: "606"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "线程模型",
      children: "线程模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统创建应用进程启动后，会默认创建一个主线程并进入消息循环。应用组件均运行在主线程上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了主线程外，应用如果有复杂的耗时逻辑需要处理，开发者可以创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker",
        children: "worker"
      }), "线程处理、或者提交任务到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
        children: "taskpool"
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
535609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437555-c1d1b40498bf53557f93ad0912841add.png");

},
251884(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
211531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957510-3b200b743e4ebf10e83bc09e20a2c155.png");

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