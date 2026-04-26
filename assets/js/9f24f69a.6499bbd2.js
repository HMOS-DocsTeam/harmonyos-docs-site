"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["910011"], {
315328(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_config_m_window_config_m_md_9f2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-config-m-window-config-m-md-9f2.json
var site_docs_arkui_window_manager_window_config_m_window_config_m_md_9f2_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-config-m/window-config-m","title":"窗口元数据配置","description":"metadata标签","source":"@site/docs/arkui/window-manager/window-config-m/window-config-m.md","sourceDirName":"arkui/window-manager/window-config-m","slug":"/arkui/window-manager/window-config-m/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-config-m/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"窗口元数据配置","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-config-m","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"窗口旋转","permalink":"/harmonyos-docs-site/arkui/window-manager/window-rotation/"},"next":{"title":"使用WindowManager管理多模输入事件（C/C++）","permalink":"/harmonyos-docs-site/arkui/window-manager/native-window-event-filter/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-config-m/window-config-m.md


const frontMatter = {
	title: '窗口元数据配置',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-config-m',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '窗口元数据配置';

const assets = {

};



const toc = [{
  "value": "metadata标签",
  "id": "metadata标签",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "窗口元数据配置",
        children: "窗口元数据配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metadata标签",
      children: "metadata标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签标识HAP的自定义元信息，标签值为数组类型，包含name、value、resource三个子标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " metadata标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识数据项的名称，取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识数据项的值，取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识了用户自定义数据，取值为长度不超过255字节的字符串，内容为该数据的资源索引，例如配置成$profile:shortcuts_config，表示指向了/resources/base/profile/shortcuts_config.json配置文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面给出几种metadata标签的使用场景及示例，开发者也可以根据实际需求自定义设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用metadata标签配置主窗口的默认大小和位置（单位为vp）。其中name取值及对应含义如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "name取值为ohos.ability.window.height表示主窗口的默认高度，value表示高度大小。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "name取值为ohos.ability.window.width表示主窗口的默认宽度，value表示宽度大小。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "name取值为ohos.ability.window.left表示主窗口默认左边的位置。value表示配置格式，取值：对齐方式 +/- 偏移量。对齐方式包括center、left和right，默认值为left；当偏移量为0时可以省略。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "name取值为ohos.ability.window.top表示主窗口顶部的位置。value表示配置格式，取值：对齐方式 +/- 偏移量。对齐方式包括center、top和bottom，默认值为top。如果对齐方式和偏移量同时省略，则按照系统默认的层叠规格处理。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用metadata标签配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#removestartingwindow14",
            children: "removeStartingWindow"
          }), "接口的启用状态。配置项为：name取值enable.remove.starting.window，value取值true或false。true表示启用，false表示不启用。未配置时，默认为false。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用metadata标签配置主窗口启动时是否以最大化状态显示。配置项为：name为ohos.ability.window.isMaximize，value取值为true或false，取值为true表示最大化启动、取值为false表示不以最大化状态启动，未配置时默认为false。主窗口最大化显示配置存在如下约束与限制："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该配置项仅在PC/2in1设备上生效。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions",
              children: "startOptions"
            }), "的supportWindowModes属性，需要配置FULL_SCREEN选项，此时使用metadata标签配置主窗口最大化启动生效，否则不生效。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
              children: "module.json5"
            }), "的supportWindowMode属性，需要配置fullscreen选项，此时使用metadata标签配置主窗口最大化启动生效，否则不生效。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["主窗显示设置优先级排序为：全屏显示 > 使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions",
              children: "startOptions"
            }), "接口指定大小和位置 > 使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#setwindowrectautosave14",
              children: "setWindowRectAutoSave()"
            }), "方法开启窗口尺寸记忆 > 使用metadata标签配置最大化 > 使用metadata标签配置大小和位置。全屏显示配置方法包括如下三种：\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions",
                  children: "startOptions"
                }), "的windowMode属性并将其配置为WINDOW_MODE_FULLSCREEN。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions",
                  children: "startOptions"
                }), "的supportWindowModes属性，且只配置FULL_SCREEN选项。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
                  children: "module.json5"
                }), "的supportWindowMode属性，且只配置fullscreen选项。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用metadata配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/design-guides/pad-0000001823654157#section1768267204717",
            children: "自由多窗"
          }), "下的可支持窗口模式。配置项为：name为ohos.ability.window.supportWindowModeInFreeMultiWindow，value取值为：fullscreen（表示全屏模式）、split（表示分屏模式）、floating（表示悬浮窗模式）。value取值为字符串，可以配置多种模式，每个模式之间用逗号分隔开，不区分顺序，不添加空格，例如：fullscreen,split。仅在支持并处于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
            children: "自由窗口"
          }), "状态的设备上生效；在支持但不处于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
            children: "自由窗口"
          }), "状态的设备及不支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
            children: "自由窗口"
          }), "状态的设备上配置不生效也不报错。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["自由多窗下的可支持窗口模式可以采用多种方法进行配置，配置优先级为：通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#setsupportedwindowmodes15",
            children: "SetSupportedWindowModes"
          }), "接口配置 > 通过StartAbility配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions#startoptions",
            children: "StartOption"
          }), "中的SupportWindowMode > 使用metadata配置 > 配置module.json5中", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
            children: "abilities"
          }), "标签下的SupportWindowMode属性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非自由多窗模式下只能通过配置module.json5中abilities标签下的SupportWindowMode属性配置窗口支持模式，其他配置方式均不生效。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"abilities\": [{\n      \"metadata\": [{\n        \"name\": \"ability_metadata\",\n        \"value\": \"a test demo for ability\",\n        \"resource\": \"$profile:config_file\"\n      },\n      {\n        \"name\": \"ability_metadata_2\",\n        \"value\": \"a string test\",\n        \"resource\": \"$profile:config_file\"\n      },\n      {\n        \"name\": \"ohos.ability.window.height\",\n        \"value\": \"987\"\n      },\n      {\n        \"name\": \"ohos.ability.window.width\",\n        \"value\": \"1300\"\n      },\n      {\n        \"name\": \"ohos.ability.window.left\",\n        \"value\": \"right-50\"\n      },\n      {\n        \"name\": \"ohos.ability.window.top\",\n        \"value\": \"center+50\"\n      },\n      {\n        \"name\": \"ohos.ability.window.isMaximize\",\n        \"value\": \"true\"\n      },\n      {\n        \"name\": \"enable.remove.starting.window\",\n        \"value\": \"true\"\n      }\n      {\n        \"name\": \"ohos.ability.window.supportWindowModeInFreeMultiWindow\",\n        \"value\": \"fullscreen,split,floating\",\n      }],\n    }],\n\n    \"extensionAbilities\": [{\n      \"metadata\": [{\n        \"name\": \"extensionAbility_metadata\",\n        \"value\": \"a test for extensionAbility\",\n        \"resource\": \"$profile:config_file\"\n      },\n      {\n        \"name\": \"extensionAbility_metadata_2\",\n        \"value\": \"a string test\",\n        \"resource\": \"$profile:config_file\"\n      }],\n    }]\n  }\n}\n"
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