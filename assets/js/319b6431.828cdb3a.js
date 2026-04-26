"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["833709"], {
321629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_application_component_configuration_fa_application_component_configuration_fa_md_319_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-application-component-configuration-fa-application-component-configuration-fa-md-319.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_application_component_configuration_fa_application_component_configuration_fa_md_319_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/application-component-configuration-fa/application-component-configuration-fa","title":"应用/组件级配置","description":"开发者在开发应用时，需要配置应用的一些标签，例如应用的Bundle名称、图标等标识特征的属性。这一章节描述了开发者在开发应用时需要配置的一些关键标签。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/application-component-configuration-fa/application-component-configuration-fa.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/application-component-configuration-fa","slug":"/ability-kit/fa-model-development/fa-model-application-components/application-component-configuration-fa/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/application-component-configuration-fa/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用/组件级配置","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-component-configuration-fa","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"FA模型开发概述","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-development-overview/"},"next":{"title":"PageAbility组件概述","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/application-component-configuration-fa/application-component-configuration-fa.md


const frontMatter = {
	title: '应用/组件级配置',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-component-configuration-fa',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用/组件级配置';

const assets = {

};



const toc = [{
  "value": "应用包名配置",
  "id": "应用包名配置",
  "level": 2
}, {
  "value": "图标和标签配置",
  "id": "图标和标签配置",
  "level": 2
}, {
  "value": "应用图标和标签配置",
  "id": "应用图标和标签配置",
  "level": 3
}, {
  "value": "入口图标和标签配置",
  "id": "入口图标和标签配置",
  "level": 3
}, {
  "value": "应用版本声明配置",
  "id": "应用版本声明配置",
  "level": 2
}, {
  "value": "Module支持的设备类型配置",
  "id": "module支持的设备类型配置",
  "level": 2
}, {
  "value": "组件权限申请配置",
  "id": "组件权限申请配置",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用组件级配置",
        children: "应用/组件级配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在开发应用时，需要配置应用的一些标签，例如应用的Bundle名称、图标等标识特征的属性。这一章节描述了开发者在开发应用时需要配置的一些关键标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用包名配置",
      children: "应用包名配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用包名需在config.json文件中app标签下配置bundleName字段，该字段用于指定应用的包名，需保证唯一性。包名是由字母、数字、下划线（_）和点号（.）组成的字符串，必须以字母开头。支持的字符串长度为7~127字节。包名通常采用反向域名形式表示（例如，\"com.example.myapplication\"）。建议第一级为域名后缀\"com\"，第二级为厂商/个人名，也可以采用多级。应用名称配置可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/app-structure",
        children: "app标签说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图标和标签配置",
      children: "图标和标签配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图标和标签通常一起配置，可以分为应用图标、应用标签和入口图标、入口标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用图标和标签通常用于标识整个应用，可以在应用的界面使用该类型图标和标签。比如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置应用中，需要展示应用列表时"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在隐私管理中，需要展示应用申请的权限时"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在状态栏显示通知消息时"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入口图标和标签是应用安装完成后可以在设备桌面上显示出来的。入口图标是以Page类型的Ability为粒度，支持同一个应用存在一个入口图标和入口标签（存在多个入口Ability时，仅entry类型HAP中的mainAbility会生效），点击后进入对应的Ability界面。比如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "桌面上需要显示图标时"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最近任务列表中显示时"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用图标和标签配置",
      children: "应用图标和标签配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/ability-terminology#fa%E6%A8%A1%E5%9E%8B",
        children: "FA模型"
      }), "不支持直接配置应用图标和标签，会以符合规则的PageAbility的图标和标签作为应用图标和标签。存在多个时，则取位置靠前的Ability的icon和label作为应用的icon和label。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "入口图标和标签配置",
      children: "入口图标和标签配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.入口图标和标签配置方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FA模型的入口图标和标签是Page类型的Ability配置的icon和label。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PageAbility的图标和标签配置请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-configuration",
        children: "PageAbility组件配置"
      }), "。需在config.json文件的abilities标签下做如下配置："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置icon字段，标签值为资源文件的索引。图标需要在配置DevEco Studio的资源文件中，路径为/resources/base/media。取值示例：$media:ability_icon。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置label字段，标签值为资源文件的索引，标识Ability对用户显示的名称。取值可以是Ability名称，也可以是对该名称的资源索引，以支持多语言。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果在该PageAbility的skills属性中，actions的取值包含 \"action.system.home\"，entities取值中包含\"entity.system.home\"，则该Ability的icon和label将同时作为应用的icon和label。如果存在多个符合条件的Ability，则取位置靠前的Ability的icon和label作为应用的icon和label。图标和标签配置可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/module-structure",
        children: "abilities标签说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"abilities\": [\n      {\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"action.system.home\"\n            ]\n          }\n        ],\n        \"orientation\": \"unspecified\",\n        \"formsEnabled\": false,\n        \"name\": \".MainAbility\",\n        \"srcLanguage\": \"ets\",\n        \"srcPath\": \"MainAbility\",\n        \"icon\": \"$media:icon\",\n        \"description\": \"$string:MainAbility_desc\",\n        \"label\": \"$string:MainAbility_label\",\n        \"type\": \"page\",\n        \"visible\": true,\n        \"launchType\": \"singleton\"\n      },\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.入口图标和标签管控规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统对无图标应用实施严格管控，防止一些恶意应用故意配置无入口图标，导致用户找不到软件所在的位置，无法操作卸载应用，在一定程度上保证用户终端设备的安全。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用确需隐藏入口图标，需要配置AllowAppDesktopIconHide应用特权。详细的入口图标及入口标签的显示规则如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HAP中包含PageAbility"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在config.json配置文件的abilities标签中设置了入口图标\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["该应用没有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "系统将使用该PageAbility配置的icon作为入口图标，并显示在桌面上。用户点击该图标，页面跳转到该PageAbility首页。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "系统将使用该PageAbility配置的label作为入口标签，并显示在桌面上，如果没有配置label，系统将使用应用的bundleName作为入口标签，并显示在桌面上。"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["该应用具有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "桌面应用查询时不返回应用信息，不会在桌面上显示对应的入口图标和标签。"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在config.json配置文件的abilities标签中未设置入口图标\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["该应用没有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "系统将使用系统资源中的icon作为入口图标，并显示在桌面上。用户点击该图标，页面跳转到应用管理中对应的应用详情页面。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "系统将使用该PageAbility配置的label作为入口标签，并显示在桌面上，如果没有配置label，系统将使用应用的bundleName作为入口标签，并显示在桌面上。"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["该应用具有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "桌面应用查询时不返回应用信息，不会在桌面上显示对应的入口图标和标签。"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HAP中不包含PageAbility"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["该应用没有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "系统将使用系统资源中的icon作为入口图标，并显示在桌面上。用户点击该图标，页面跳转到应用管理中对应的应用详情页面。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "系统将使用应用的bundleName作为入口标签，并显示在桌面上。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["该应用具有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "桌面应用查询时不返回应用信息，不会在桌面上显示对应的入口图标和标签。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用版本声明配置",
      children: "应用版本声明配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用版本声明配置需在config.json中的app标签下配置version字段，以说明应用当前的版本号和版本名称以及应用能够兼容的最低历史版本号。应用版本配置说明可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/app-structure#version%E5%AF%B9%E8%B1%A1%E5%86%85%E9%83%A8%E7%BB%93%E6%9E%84",
        children: "version对象内部结构"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "module支持的设备类型配置",
      children: "Module支持的设备类型配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Module支持的设备类型需要在config.json文件中配置deviceType字段，如果deviceType标签中添加了某种设备，则表明当前的module支持在该设备上运行。具体的deviceType配置规则可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/module-structure#devicetype%E6%A0%87%E7%AD%BE",
        children: "deviceType标签"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件权限申请配置",
      children: "组件权限申请配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件权限申请配置需在config.json中的module标签下配置reqPermissions字段。来声明需要申请权限的名称，申请权限的原因以及权限使用的场景。组件权限申请可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/module-structure#reqpermissions%E6%9D%83%E9%99%90%E7%94%B3%E8%AF%B7",
        children: "reqPermissions权限申请"
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