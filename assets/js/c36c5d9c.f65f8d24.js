"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["842020"], {
582904(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_configuration_file_stage_module_configuration_file_module_configuration_file_md_c36_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-configuration-file-stage-module-configuration-file-module-configuration-file-md-c36.json
var site_docs_development_fundamentals_application_configuration_file_stage_module_configuration_file_module_configuration_file_md_c36_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-configuration-file-stage/module-configuration-file/module-configuration-file","title":"module.json5配置文件","description":"模块级配置文件，包含模块的基本配置信息、UIAbility组件和ExtensionAbility组件信息，以及应用运行过程中需要的权限信息，用于向编译工具、操作系统和应用市场提供应用的基本信息。每个模块下必须包括一个module.json5配置文件，文件所在目录为工程名称/模块名称（例如entry）/src/main/module.json5。","source":"@site/docs/development-fundamentals/application-configuration-file-stage/module-configuration-file/module-configuration-file.md","sourceDirName":"development-fundamentals/application-configuration-file-stage/module-configuration-file","slug":"/development-fundamentals/application-configuration-file-stage/module-configuration-file/","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-stage/module-configuration-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"module.json5配置文件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"app.json5配置文件","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-stage/app-configuration-file/"},"next":{"title":"应用配置文件概述（FA模型）","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-configuration-file-stage/module-configuration-file/module-configuration-file.md


const frontMatter = {
	title: 'module.json5配置文件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'module.json5配置文件';

const assets = {

};



const toc = [{
  "value": "配置文件示例",
  "id": "配置文件示例",
  "level": 2
}, {
  "value": "配置文件标签",
  "id": "配置文件标签",
  "level": 2
}, {
  "value": "deviceTypes标签",
  "id": "devicetypes标签",
  "level": 2
}, {
  "value": "pages标签",
  "id": "pages标签",
  "level": 2
}, {
  "value": "metadata标签",
  "id": "metadata标签",
  "level": 2
}, {
  "value": "abilities标签",
  "id": "abilities标签",
  "level": 2
}, {
  "value": "skills标签",
  "id": "skills标签",
  "level": 2
}, {
  "value": "extensionAbilities标签",
  "id": "extensionabilities标签",
  "level": 2
}, {
  "value": "shortcuts标签",
  "id": "shortcuts标签",
  "level": 2
}, {
  "value": "wants标签",
  "id": "wants标签",
  "level": 3
}, {
  "value": "distributionFilter标签",
  "id": "distributionfilter标签",
  "level": 2
}, {
  "value": "screenShape标签",
  "id": "screenshape标签",
  "level": 3
}, {
  "value": "screenWindow标签",
  "id": "screenwindow标签",
  "level": 3
}, {
  "value": "screenDensity标签",
  "id": "screendensity标签",
  "level": 3
}, {
  "value": "countryCode标签",
  "id": "countrycode标签",
  "level": 3
}, {
  "value": "testRunner标签",
  "id": "testrunner标签",
  "level": 2
}, {
  "value": "atomicService标签",
  "id": "atomicservice标签",
  "level": 2
}, {
  "value": "dependencies标签",
  "id": "dependencies标签",
  "level": 2
}, {
  "value": "proxyData标签",
  "id": "proxydata标签",
  "level": 2
}, {
  "value": "routerMap标签",
  "id": "routermap标签",
  "level": 2
}, {
  "value": "data标签",
  "id": "data标签",
  "level": 3
}, {
  "value": "customData标签",
  "id": "customdata标签",
  "level": 3
}, {
  "value": "appEnvironments标签",
  "id": "appenvironments标签",
  "level": 2
}, {
  "value": "hnpPackages标签",
  "id": "hnppackages标签",
  "level": 2
}, {
  "value": "fileContextMenu标签",
  "id": "filecontextmenu标签",
  "level": 2
}, {
  "value": "startWindow标签",
  "id": "startwindow标签",
  "level": 2
}, {
  "value": "systemTheme标签",
  "id": "systemtheme标签",
  "level": 2
}, {
  "value": "requiredDeviceFeatures标签",
  "id": "requireddevicefeatures标签",
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
    img: "img",
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
        id: "modulejson5配置文件",
        children: "module.json5配置文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块级配置文件，包含模块的基本配置信息、UIAbility组件和ExtensionAbility组件信息，以及应用运行过程中需要的权限信息，用于向编译工具、操作系统和应用市场提供应用的基本信息。每个模块下必须包括一个module.json5配置文件，文件所在目录为工程名称/模块名称（例如entry）/src/main/module.json5。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(720338)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置文件中的示例代码直接拷贝到工程中可能编译不通过，请开发者根据需求进行配置。例如：通过$符号引用的资源文件如果工程中不存在，需要开发者手动添加或替换为实际的资源文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置文件中，字段可以重复，以最后一个配置为准。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件示例",
      children: "配置文件示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过一个示例，整体了解module.json5配置文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"name\": \"entry\",\n    \"type\": \"entry\",\n    \"description\": \"$string:module_desc\",\n    \"mainElement\": \"EntryAbility\",\n    \"deviceTypes\": [\n      \"tv\",\n      \"tablet\"\n    ],\n    \"deliveryWithInstall\": true,\n    \"pages\": \"$profile:main_pages\", // 资源配置，指向profile下面定义的配置文件main_pages.json\n    \"appStartup\": \"$profile:app_startup_config\",\n    \"metadata\": [\n      {\n        \"name\": \"string\",\n        \"value\": \"string\",\n        \"resource\": \"$profile:distributionFilter_config\"\n      },\n      // ...\n    ],\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n        \"description\": \"$string:EntryAbility_desc\",\n        \"icon\": \"$media:layered_image\",\n        \"label\": \"$string:EntryAbility_label\",\n        \"startWindow\": \"$profile:start_window\",\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"exported\": true,\n        \"skills\": [\n          // ...\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\"\n            ]\n          }\n        ],\n        // ...\n        \"continueType\": [\n          \"continueType1\"\n        ],\n        \"continueBundleName\": [\n          \"com.example.myapplication1\",\n          \"com.example.myapplication2\"\n        ],\n      }\n    ],\n    \"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.ACCESS_BLUETOOTH\",\n        \"reason\": \"$string:reason\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"EntryAbility\"\n          ],\n          \"when\": \"inuse\"\n        }\n      }\n    ],\n    \"querySchemes\": [\n      \"app1Scheme\",\n      \"app2Scheme\"\n    ],\n    \"routerMap\": \"$profile:router_map\",\n    \"appEnvironments\": [\n      {\n        \"name\": \"name1\",\n        \"value\": \"value1\"\n      }\n    ],\n    \"fileContextMenu\": \"$profile:menu\", // 资源配置，指向profile下面定义的配置文件menu.json\n    \"crossAppSharedConfig\": \"$profile:shared_config\",\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件标签",
      children: "配置文件标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json5配置文件包含以下标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " module.json5配置文件标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module的名称，确保该名称在整个应用中唯一。命名规则如下 ：  - 由字母、数字和下划线组成，且必须以字母开头。  - 最大长度128字节。  应用升级时允许修改该名称，但需要应用适配Module相关数据目录的迁移，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
              children: "@ohos.file.fs (文件管理)"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  DevEco Studio新建模块时，限制模块名称的长度不能超过31。如果长度无法满足开发者需求，可以在配置文件修改该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module的类型。支持的取值如下：  - entry：应用的主模块。  - feature：应用的动态特性模块。  - har：静态共享包模块。  - shared：动态共享包模块。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcEntry"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识AbilityStage组件的代码路径，详情参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/abilitystage",
              children: "AbilityStage组件容器"
            }), "，取值为长度不超过127字节的字符串。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module的描述信息，开发者可以通过该标签描述当前模块的功能与作用，取值为长度不超过255字节的字符串，可以采用字符串资源索引格式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mainElement"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module的入口UIAbility名称，取值为长度不超过255字节的字符串，详情请参考配置应用图标和名称中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-typical-scenarios/layered-image#%E9%85%8D%E7%BD%AE%E4%BC%98%E5%85%88%E7%BA%A7%E5%92%8C%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5",
              children: "配置优先级和生成策略"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#devicetypes%E6%A0%87%E7%AD%BE",
              children: "deviceTypes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module可以运行在哪类设备上。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当存在多个模块时，各模块的配置可以不同，但都必须包含将要安装的设备类型，以确保正常运行。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deliveryWithInstall"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module是否在用户主动安装的时候安装，即该Module对应的HAP/HSP是否跟随应用一起安装。  - true：跟随应用一起安装。  - false：不跟随应用一起安装。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-moduleinstall/store-moduleinstall_arkts",
              children: "按需分发"
            }), "的方式安装。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Module类型为HAP或HSP时，该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "installationFree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module是否支持免安装特性。  - true：表示支持免安装特性，且符合免安装约束。  - false：表示不支持免安装特性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该标签可缺省。该标签在编译构建时自动生成，手动配置不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "bundleType"
            }), "为元服务时，该标签自动配置为true。反之，该标签自动配置为false。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "virtualMachine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module运行的目标虚拟机类型，供云端分发使用，如应用市场和分发中心。如果目标虚拟机类型为ArkTS引擎，则其值为“ark+版本号”。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，手动配置不生效，由编译构建时自动生成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pages%E6%A0%87%E7%AD%BE",
              children: "pages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module的profile资源，用于列举每个页面信息，取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata%E6%A0%87%E7%AD%BE",
              children: "metadata"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module的自定义元信息，可通过资源引用的方式配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#distributionfilter%E6%A0%87%E7%AD%BE",
              children: "distributionFilter"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#shortcuts%E6%A0%87%E7%AD%BE",
              children: "shortcuts"
            }), "等信息。只对当前Module、UIAbility、ExtensionAbility生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#abilities%E6%A0%87%E7%AD%BE",
              children: "abilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module中UIAbility的配置信息，只对当前UIAbility生效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#extensionabilities%E6%A0%87%E7%AD%BE",
              children: "extensionAbilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module中ExtensionAbility的配置信息，只对当前ExtensionAbility生效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
              children: "requestPermissions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用运行时需向系统申请的权限集合。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#testrunner%E6%A0%87%E7%AD%BE",
              children: "testRunner"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识用于测试当前Module的测试框架的配置。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/aa-tool#%E5%90%AF%E5%8A%A8%E6%B5%8B%E8%AF%95%E6%A1%86%E6%9E%B6%E5%91%BD%E4%BB%A4test",
              children: "启动测试框架命令"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#atomicservice%E6%A0%87%E7%AD%BE",
              children: "atomicService"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用是元服务时，有关元服务的相关配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dependencies%E6%A0%87%E7%AD%BE",
              children: "dependencies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前模块运行时依赖的共享库列表。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。手动配置不生效，由编译构建时自动生成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetModuleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前包所指定的目标Module。取值为长度不超过128字节的字符串，不支持中文。配置该标签的Module具有overlay特性。仅在动态共享包（HSP）中适用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetPriority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module的优先级，取值范围为1~100。配置targetModuleName标签之后，才需要配置该标签。仅在动态共享包（HSP）中适用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#proxydata%E6%A0%87%E7%AD%BE",
              children: "proxyData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module提供的数据代理列表。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isolationMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module的多进程配置项。支持的取值如下：  - nonisolationFirst：优先在非独立进程中运行。  - isolationFirst：优先在独立进程中运行。  - isolationOnly：只在独立进程中运行。  - nonisolationOnly：只在非独立进程中运行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.仅2in1和tablet设备支持将当前Module设置为独立进程。  2.该标签仅对HAP生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为nonisolationFirst。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "generateBuildHash"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前HAP/HSP是否由打包工具生成哈希值。当配置为true时，如果系统OTA升级时应用versionCode保持不变，可根据哈希值判断应用是否需要升级。  该标签仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
              children: "app.json5文件"
            }), "中的generateBuildHash标签为false时使能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该标签仅对预置应用生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compressNativeLibs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在打包hap时，该标签标识libs库是否以压缩存储的方式打包到HAP。  - true：libs库以压缩方式存储。  - false：libs库以不压缩方式存储。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，在打包hap时缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extractNativeLibs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用安装时，libs库是否解压到应用安装目录。当compressNativeLibs和extractNativeLibs都配置为false时，应用以不解压libs库的方式进行安装；其他场景，应用以解压libs库的方式进行安装。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 20开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "libIsolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在libs目录下是否生成模块名称目录存储so，用于区分同一应用中不同HAP的.so文件，以防止.so文件冲突。  - true：当前HAP的.so文件会储存在libs目录中以Module名命名的路径下。  - false：当前HAP的.so文件会直接储存在libs目录中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#filecontextmenu%E6%A0%87%E7%AD%BE",
              children: "fileContextMenu"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前HAP的右键菜单配置项，是一个profile文件资源。取值为长度不超过255字节的字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅在PC/2in1设备上生效。  仅允许在entry类型模块中配置。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "querySchemes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识允许当前应用进行跳转查询的URL schemes，只允许entry类型模块配置，每个字符串取值不超过128字节。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 21开始，最多允许配置200个URL scheme。API version 20及之前的版本，最多允许配置50个URL scheme。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#routermap%E6%A0%87%E7%AD%BE",
              children: "routerMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前模块配置的路由表路径。取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#appenvironments%E6%A0%87%E7%AD%BE",
              children: "appEnvironments"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前模块配置的应用环境变量，只允许entry和feature模块配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appStartup"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/app-startup",
              children: "启动框架"
            }), "配置路径，只允许entry类型模块配置。  从API version 18开始，新增支持在HSP、HAR中配置。  从API version 20开始，新增支持在feature类型的Module中配置。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hnppackages%E6%A0%87%E7%AD%BE",
              children: "hnpPackages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用包含的Native软件包信息。只允许entry类型模块配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#systemtheme%E6%A0%87%E7%AD%BE",
              children: "systemTheme"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前使用的系统主题配置项。只允许entry类型模块配置。取值为不超过255字节的字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 20开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilitySrcEntryDelegator"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module需要重定向到的UIAbility的名称，与abilityStageSrcEntryDelegator标签组合使用，共同指定重定向的目标对象。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.从API version 17开始，支持该标签。  2.当UIAbility是通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybycall",
              children: "startAbilityByCall"
            }), "接口启动时，该标签不生效。  3.不支持在HAR的配置文件中配置该标签，也不支持重定向到HAR的UIAbility。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityStageSrcEntryDelegator"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module需要重定向到的UIAbility对应的Module名称（不可为当前Module名称），与abilitySrcEntryDelegator标签组合使用，共同指定重定向的目标对象。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.从API version 17开始，支持该标签。  2.当UIAbility是通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybycall",
              children: "startAbilityByCall"
            }), "接口启动时，该标签不生效。  3.不支持在HAR的配置文件中配置该标签，也不支持重定向到HAR的UIAbility。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "crossAppSharedConfig"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用间共享配置的配置文件名。取值为不超过255字节的字符串。用于发布配置给其他应用读取，在应用安装时生效，应用卸载时失效。详细使用方式见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/cross-app-data-share/one-to-many-data-share/share-config#%E9%85%8D%E7%BD%AE%E5%8F%91%E5%B8%83%E6%96%B9",
              children: "共享配置使用"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 20开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formWidgetModule"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget-creation#%E6%96%B9%E5%BC%8F%E4%BA%8C%E7%8B%AC%E7%AB%8B%E5%8C%85%E6%96%B9%E5%BC%8F%E5%88%9B%E5%BB%BA%E5%8D%A1%E7%89%87",
              children: "独立卡片包"
            }), "中，应用包需要配置该标签，用来关联卡片包。取值为卡片包的模块名称，对应卡片包module.json5中的name标签。具体使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#formextensionability%E9%85%8D%E7%BD%AE",
              children: "FormExtensionAbility配置"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 从API version 20开始，支持该标签。  2. 仅在独立卡片包的应用包中，该标签配置生效，且要求对应的卡片包模块必须配置formExtensionModule标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formExtensionModule"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget-creation#%E6%96%B9%E5%BC%8F%E4%BA%8C%E7%8B%AC%E7%AB%8B%E5%8C%85%E6%96%B9%E5%BC%8F%E5%88%9B%E5%BB%BA%E5%8D%A1%E7%89%87",
              children: "独立卡片包"
            }), "中，卡片包需要配置该标签，用来关联应用包。取值为应用包的模块名称，对应应用包module.json5中的name标签。具体使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E7%8B%AC%E7%AB%8B%E5%8D%A1%E7%89%87%E5%8C%85%E9%85%8D%E7%BD%AE",
              children: "独立卡片包配置"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 从API version 20开始，支持该标签。  2. 仅在独立卡片包的卡片包中，该标签配置生效，且要求对应的应用包模块必须配置formWidgetModule标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shareFiles"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用沙箱中分享目录的配置文件路径，用于为应用文件提供有安全保障的开放范围，保护应用资产。只允许entry类型模块配置，取值为长度不超过255字节的字符串。具体使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-app-file-configuration",
              children: "应用共享目录配置"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 23开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uiSyntax(deprecated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module syntax定义该JS Component的语法类型。  - hml：标识该JS Component使用hml/css/js进行开发。  - ets：标识该JS Component使用ArkTS声明式语法进行开发。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该标签从API version 9开始废弃。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为hml。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcEntrance(deprecated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module所对应的代码路径，标签值为字符串（最长为127字节）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该标签从API version 9开始废弃，请使用srcEntry字段替代。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#requireddevicefeatures%E6%A0%87%E7%AD%BE",
              children: "requiredDeviceFeatures"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前Module运行所需要的特定的设备特性，应用市场可以根据此配置，将应用分发给支持该特性的设备。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.从API version 19开始，支持该字段。  2.不支持插件应用配置。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "easyGo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识系统提供的一种兼容配置模式的配置文件路径，以满足不同产品的定制能力，当前仅支持平行视界分栏能力。只允许entry类型模块配置，取值为长度不超过255字节的字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 23开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicetypes标签",
      children: "deviceTypes标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " deviceTypes标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "phone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "平板"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tablet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即PC设备，主要交互方式以多窗口、多任务及键盘鼠标操作为主，充分发挥设备的生产力属性。在HarmonyOS文档中，所有“2in1”均代表“PC/2in1”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "智慧屏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "智能手表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wearable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统能力较丰富的手表，具备电话功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "车机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "默认设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置为default类型的应用，虽然可以正常编译构建，但是不支持发布上架。建议使用phone替代。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deviceTypes示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"name\": \"myHapName\",\n    \"type\": \"feature\",\n    \"deviceTypes\": [\n      \"tv\",\n      \"tablet\"\n    ],\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pages标签",
      children: "pages标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签是一个profile文件资源，用于指定描述页面信息的配置文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"pages\": \"$profile:main_pages\", // 资源配置，指向profile下面定义的配置文件main_pages.json\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发视图的resources/base/profile下面定义配置文件main_pages.json，其中文件名\"main_pages\"可自定义，需要和pages标签指定的信息对应。配置文件中列举了当前应用组件中的页面信息，包含页面的路由信息和显示窗口相关的配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " pages标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Module中所有页面的路由信息，包括页面路径和页面名称。其中，页面路径是以当前Module的src/main/ets为基准。该标签取值为一个字符串数组，其中每个元素表示一个页面。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识用于定义与显示窗口相关的配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " window标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "designWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识页面设计基准宽度。以此为基准，根据实际设备宽度来缩放元素大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为720px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "autoDesignWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识页面设计基准宽度是否自动计算。当配置为true时，designWidth将会被忽略，设计基准宽度由设备宽度与屏幕密度计算得出。当配置为false时，设计基准宽度为designWidth。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"src\": [\n    \"pages/Index\"\n  ],\n  \"window\": {\n    \"designWidth\": 720,\n    \"autoDesignWidth\": false\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metadata标签",
      children: "metadata标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签标识HAP的自定义元信息，标签值为数组类型，包含name、value、resource三个子标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"metadata\": [\n      // ...\n      {\n        \"name\": \"pageConfig\",\n        \"value\": \"main page config of application\",\n        \"resource\": \"$profile:main_pages\" // 资源配置，指向profile下面定义的配置文件main_pages.json\n      }\n    ],\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilities标签",
      children: "abilities标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "abilities标签描述UIAbility组件的配置信息，标签值为数组类型，该标签下的配置只对当前UIAbility生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      }), " abilities标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "标识当前UIAbility组件的名称，确保该名称在整个应用中唯一。取值为长度不超过127字节的字符串，以字母开头，可包含字母、数字、下划线（_）或点号（.）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcEntry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility的代码路径，取值为长度不超过127字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type",
              children: "launchType"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件的启动模式，支持的取值如下：  - multiton：多实例模式，每次启动创建一个新实例。  - singleton：单实例模式，仅第一次启动创建新实例。  - specified：指定实例模式，运行时由开发者决定是否创建新实例。  - standard：multiton的曾用名，效果与多实例模式一致。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  元服务启动模式需要设置为单例模式，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/atomic-specifications",
              children: "元服务规格"
            }), "要求。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，该标签缺省为“singleton”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件的描述信息，开发者可以通过该标签描述当前组件的功能与作用，取值为长度不超过255字节的字符串。建议采用描述信息的资源索引，以支持多语言。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-typical-scenarios/layered-image",
              children: "图标"
            }), "，取值为图标资源文件的索引。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件对用户显示的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-typical-scenarios/layered-image",
              children: "名称"
            }), "，取值为字符串资源的索引，以支持多语言，长度不超过255字节的字符串。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "permissions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件的权限信息。其他应用访问该UIAbility时，需要申请相应的权限。  一个数组元素为一个权限名称，不超过255字节，取值请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions",
              children: "应用权限列表"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata%E6%A0%87%E7%AD%BE",
              children: "metadata"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件的元信息，典型使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/window-manager/window-config-m#metadata%E6%A0%87%E7%AD%BE",
              children: "窗口元数据配置中的metadata标签"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件是否可以被其他应用拉起。  - true：表示可以被其他应用拉起（入口UIAbility建议配置为true）。  - false：只能由同应用或者具有ohos.permission.START_INVISIBLE_ABILITY权限（该权限仅系统应用支持申请）的应用拉起。  例如，配置为false时，桌面具备该权限，桌面图标、快捷方式或push通知消息可以拉起当前UIAbility组件，但aa命令行工具没有权限无法拉起。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continuable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件是否支持跨端迁移。  - true：表示支持迁移。  - false：表示不支持迁移。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#skills%E6%A0%87%E7%AD%BE",
              children: "skills"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件能够接收的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/want/want-overview",
              children: "Want"
            }), "特征集，为数组格式。  配置规则：  - 对于Entry类型的HAP，应用可以配置多个具有入口能力的skills标签（即配置了ohos.want.action.home和entity.system.home）。  - 对于Feature类型的HAP，只有应用可以配置具有入口能力的skills标签，服务不允许配置。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundModes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件的长时任务集合，指定用于满足特定类型的长时任务。  长时任务类型详情参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/background-task-kit/continuous-task",
              children: "长时任务类型表"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#startwindow%E6%A0%87%E7%AD%BE",
              children: "startWindow"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件启动页面profile资源，取值为长度不超过255字节的字符串，如果配置了该标签，startWindowIcon和startWindowBackground标签均不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 19开始，支持使用该字段配置增强启动页。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件启动页面图标资源文件的索引，取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowBackground"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件启动页面背景颜色资源文件的索引，取值为长度不超过255字节的字符串。  取值示例：$color:red。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeMissionAfterTerminate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件销毁后，是否从任务列表中移除任务。  - true表示销毁后移除任务。  - false表示销毁后不移除任务。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  2in1设备和平板设备的自由多窗模式下配置不生效，默认移除任务。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allowSelfRedirect"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用是否允许通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup",
              children: "App Linking"
            }), "跳转自己。  - true表示允许通过App Linking跳转自己。  - false表示不允许通过App Linking跳转自己。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 23开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "orientation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件启动时的方向，支持配置枚举，或启动方向资源索引。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "启动方向枚举支持的取值如下："
              })
            }), "  - unspecified：未指定方向，由系统自动判断显示方向。  - landscape：横屏。  - portrait：竖屏。  - follow_recent：跟随背景窗口的旋转模式。  - landscape_inverted：反向横屏。  - portrait_inverted：反向竖屏。  - auto_rotation：随传感器旋转。  - auto_rotation_landscape：传感器横屏旋转，包括横屏和反向横屏。  - auto_rotation_portrait：传感器竖屏旋转，包括竖屏和反向竖屏。  - auto_rotation_restricted：传感器开关打开，方向可随传感器旋转。  - auto_rotation_landscape_restricted：传感器开关打开，方向可随传感器旋转为横屏，包括横屏和反向横屏。  - auto_rotation_portrait_restricted：传感器开关打开，方向可随传感器旋转为竖屏，包括竖屏和反向竖屏。  - locked：传感器开关关闭，方向锁定。  - auto_rotation_unspecified：受开关控制和由系统判定的自动旋转模式。  - follow_desktop：跟随桌面的旋转模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "配置启动方向的资源索引时"
              })
            }), "，取值为长度不超过255字节的字符串，配置示例：$string:orientation。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 从API version 14开始，支持配置启动方向资源索引。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为unspecified。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportWindowMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件所支持的窗口模式。支持的取值如下：  - fullscreen：全屏模式。  - split：分屏模式。  - floating：悬浮窗模式。  在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
              children: "自由窗口"
            }), "状态下同时配置fullscreen和split时，如果应用的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "targetAPIVersion"
            }), "小于15，窗口将以悬浮窗模式启动；如果应用的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "targetAPIVersion"
            }), "大于等于15，窗口将以全屏模式启动。  此外，还可以通过metadata配置窗口模式，具体的配置规则和优先级请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata%E6%A0%87%E7%AD%BE",
              children: "metadata"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为  [\"fullscreen\", \"split\", \"floating\"]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxWindowRatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件支持的最大的宽高比。该标签最小取值为0。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为平台支持的最大的宽高比。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minWindowRatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件支持的最小的宽高比。该标签最小取值为0。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为平台支持的最小的宽高比。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxWindowWidth"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件支持的最大的窗口宽度，宽度单位为vp。  最小取值为minWindowWidth，最大取值为平台支持的最大窗口宽度。窗口尺寸可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/window-manager/window-overview#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
              children: "窗口大小限制"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为平台支持的最大的窗口宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minWindowWidth"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件支持的最小的窗口宽度， 宽度单位为vp。  最小取值为平台支持的最小窗口宽度，最大取值为maxWindowWidth。窗口尺寸可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/window-manager/window-overview#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
              children: "窗口大小限制"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为平台支持的最小的窗口宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxWindowHeight"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件支持的最大的窗口高度， 高度单位为vp。  最小取值为minWindowHeight，最大取值为平台支持的最大窗口高度。 窗口尺寸可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/window-manager/window-overview#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
              children: "窗口大小限制"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为平台支持的最大的窗口高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minWindowHeight"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件支持的最小的窗口高度， 高度单位为vp。  最小取值为平台支持的最小窗口高度，最大取值为maxWindowHeight。窗口尺寸可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/window-manager/window-overview#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
              children: "窗口大小限制"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为平台支持的最小的窗口高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludeFromMissions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件是否在最近任务列表中显示。  - true：表示不在任务列表中显示。  - false：表示在任务列表中显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  三方应用的配置不生效，当前配置仅在系统应用中有效，若要使系统应用配置生效，需申请应用特权，特权申请不对三方应用开放。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recoverable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件是否支持在检测到应用故障后，恢复到应用原界面。  - true：支持检测到出现故障后，恢复到原界面。  - false：不支持检测到出现故障后，恢复到原界面。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isolationProcess"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识组件能否运行在独立的进程中。  - true：表示能运行在独立的进程中。  - false：表示不能运行在独立的进程中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅2in1和tablet设备支持将UIAbility设置为独立进程。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludeFromDock"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件是否支持从dock区域隐藏图标。  - true：表示在dock区域隐藏。  - false：表示不能在dock区域隐藏。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该标签配置不生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preferMultiWindowOrientation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件多窗布局方向：  - default：缺省值，参数不配置默认值，建议其他应用类配置。  - portrait：多窗布局方向为竖向，建议竖向游戏类应用配置。  - landscape：多窗布局方向为横向，配置后支持横屏悬浮窗和上下分屏，建议横向游戏类应用配置。  - landscape_auto：多窗布局动态可变为横向，需要配合API enableLandScapeMultiWindow/disableLandScapeMultiWindow使用，建议视频类应用配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为default。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continueType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件的跨端迁移类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为当前组件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continueBundleName"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前应用支持跨端迁移的其它应用名称列表。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不能配置为本应用包名，仅为了做异包名迁移使用。  从API version 13开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识组件的进程名称。具体使用方式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/process-model-stage#%E5%85%B6%E4%BB%96%E8%BF%9B%E7%A8%8B%E7%B1%BB%E5%9E%8B",
              children: "进程模型定义"
            }), "中的\"静态指定进程\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
              children: "PC/2in1"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
              children: "Tablet"
            }), "设备上生效。  2. UIAbility组件和type为embeddedUI的ExtensionAbility组件标签一致时运行在同一个进程中。  3. 从API version 14开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "abilities示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // ...\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n        \"launchType\": \"singleton\",\n        \"description\": \"$string:description_main_ability\",\n        \"icon\": \"$media:layered_image\",\n        \"label\": \"$string:EntryAbility_label\",\n        \"permissions\": [],\n        \"metadata\": [],\n        \"exported\": true,\n        \"continuable\": true,\n        \"skills\": [\n          {\n            \"actions\": [\n              \"ohos.want.action.home\"\n            ],\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"uris\": []\n          }\n        ],\n        \"backgroundModes\": [\n          \"dataTransfer\"\n        ],\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:red\",\n        \"removeMissionAfterTerminate\": true,\n        \"allowSelfRedirect\": true,  // 从API version 23开始，支持该标签\n        \"orientation\": \"$string:orientation\",\n        \"supportWindowMode\": [\n          \"fullscreen\",\n          \"split\",\n          \"floating\"\n        ],\n        \"maxWindowRatio\": 3.5,\n        \"minWindowRatio\": 0.5,\n        \"maxWindowWidth\": 2560,\n        \"minWindowWidth\": 1400,\n        \"maxWindowHeight\": 300,\n        \"minWindowHeight\": 200,\n        \"excludeFromMissions\": false,\n        \"preferMultiWindowOrientation\": \"default\",\n        \"isolationProcess\": false,\n        \"continueType\": [\n          \"continueType1\",\n          \"continueType2\"\n        ],\n        \"continueBundleName\": [\n          \"com.example.myapplication1\",\n          \"com.example.myapplication2\"\n        ],\n        \"process\": \":processTag\"\n      }\n    ],\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skills标签",
      children: "skills标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该标签标识UIAbility组件或者ExtensionAbility组件能够接收的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/want/want-overview",
        children: "Want"
      }), "的特征。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如：在浏览器中下载PDF文件时，可以通过配置skills标签选择并打开该PDF文件。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup",
        children: "拉起文件处理类应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表7"
        })
      }), " skills标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "actions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识能够接收的Action值集合，取值通常为系统预定义的action值，也允许自定义。  一个skill中不建议配置多个action，否则可能导致无法匹配预期场景。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/want/actions-entities",
              children: "常见action与entities"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entities"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识能够接收的Entity值的集合。  一个skill中不建议配置多个entity，否则可能导致无法匹配预期场景。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/want/actions-entities",
              children: "常见action与entities"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uris"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识与Want中URI（Uniform Resource Identifier）相匹配的集合。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "permissions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility或ExtensionAbility组件的权限信息。其他应用访问该组件时，需要申请相应的权限。  一个数组元素为一个权限名称，不超过255字节，取值请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions",
              children: "应用权限列表"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domainVerify"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识是否开启", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup#section4452103365213",
              children: "域名校验"
            }), "。  - true：表示开启域名校验。  - false：表示不开启域名校验。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表8"
        })
      }), " uris标签说明"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303238)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下字符串类型的标签不支持使用资源索引的方式（$string）配置。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "scheme"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识URI的协议名部分，常见的有http、https、file、ftp等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API 18开始，该标签在参与隐式Want匹配时不区分大小写。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uris中仅配置type时可以缺省，缺省值为空，否则不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "host"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识URI的主机地址部分，该标签只有当scheme配置时才生效。常见的方式：  - 域名方式，如example.com。  - IP地址方式，如10.10.10.1。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API 18开始，该标签在参与隐式Want匹配时不区分大小写。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识URI的端口部分。如http默认端口为80，https默认端口是443，ftp默认端口是21。该标签只有当scheme和host都配置时才生效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pathStartWith"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pathRegex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识URI的路径部分，path、pathStartWith和pathRegex配置时三选一。path标识URI与want中的路径部分全匹配，pathStartWith标识URI与want中的路径部分允许前缀匹配，pathRegex标识URI与want中的路径部分允许正则匹配。该标签只有当scheme和host都配置时才生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识与Want相匹配的数据类型，使用MIME（Multipurpose Internet Mail Extensions）类型规范和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor#uniformdatatype",
              children: "UniformDataType"
            }), "类型规范。可以与scheme同时配置，也可以单独配置。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "utd"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识与Want相匹配的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor",
              children: "标准化数据类型"
            }), "，适用于分享等场景。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFileSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于指定类型的文件，标识一次能接收或打开的最大数量，适用于分享等场景，需要与utd配合使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "linkFeature"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识URI提供的功能类型（如文件打开、分享、导航等），用于实现应用间跳转。取值为长度不超过127字节的字符串，不支持中文。同一Bundle中声明的linkFeature数量不能超过150个。详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config#linkfeature%E6%A0%87%E7%AD%BE%E8%AF%B4%E6%98%8E",
              children: "linkFeature标签说明"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "skills示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(790481)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如下示例为通用配置，部分组件和模块在实际配置时存在差异，例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#section697519219136",
        children: "点击消息进入应用首页"
      }), "的限制，具体请参考对应文档说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // ...\n    \"abilities\": [\n      {\n        // ...\n        \"skills\": [\n          {\n            \"actions\": [\n              \"ohos.want.action.home\"\n            ],\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"uris\": [\n              {\n                \"scheme\":\"http\",\n                \"host\":\"example.com\",\n                \"port\":\"80\",\n                \"path\":\"path\",\n                \"type\": \"text/*\",\n                \"linkFeature\": \"Login\"\n              }\n            ],\n            \"permissions\": [],\n            \"domainVerify\": false\n          },\n          // ...\n        ],\n        // ...\n      }\n    ],\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extensionabilities标签",
      children: "extensionAbilities标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述extensionAbilities的配置信息，标签值为数组类型，该标签下的配置只对当前extensionAbilities生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表9"
        })
      }), " extensionAbilities标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "标识当前ExtensionAbility组件的名称，确保该名称在整个应用中唯一，取值为长度不超过127字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcEntry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前ExtensionAbility组件所对应的代码路径，取值为长度不超过127字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前ExtensionAbility组件的描述，开发者可以通过该标签描述当前组件的功能与作用，取值为长度不超过255字节的字符串，可以是对描述内容的资源索引，用于支持多语言。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前ExtensionAbility组件的图标，取值为资源文件的索引。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前ExtensionAbility组件对用户显示的名称，取值为该名称的资源索引，以支持多语言，字符串长度不超过255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前ExtensionAbility组件的类型，支持的取值如下：  - form：卡片的ExtensionAbility。  - workScheduler：延时任务的ExtensionAbility。  - inputMethod：输入法的ExtensionAbility。  - share：提供内容分享处理功能的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-shareextensionability/js-apis-app-ability-shareextensionability",
              children: "ShareExtensionAbility"
            }), "。  - service：后台运行的service组件，三方配置无法安装应用，需要申请特权，特权申请不对三方应用开放。  - accessibility：辅助能力的ExtensionAbility。  - fileAccess：公共数据访问的ExtensionAbility，允许应用程序提供文件和文件夹给文件管理类应用展示，三方应用配置不生效，当前配置仅在系统应用中有效。  - dataShare：数据共享的ExtensionAbility，三方配置无法安装应用，需要申请特权，特权申请不对三方应用开放。  - staticSubscriber：静态广播的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - fileShare：文件共享的ExtensionAbility。  - vpn：为开发者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-vpnextensionability/js-apis-vpnextensionability",
              children: "提供VPN能力"
            }), "的ExtensionAbility。  - wallpaper：壁纸的ExtensionAbility。  - backup：数据备份的ExtensionAbility。  - enterpriseAdmin：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/mdm-kit/mdm-kit-admin",
              children: "企业设备管理"
            }), "的ExtensionAbility。企业设备管理应用必须拥有此类型的ExtensionAbility。  - window：该ExtensionAbility会在启动过程中创建一个window，为开发者提供界面开发。开发者开发出来的界面将通过UIExtensionComponent控件组合到其他应用的窗口中，三方应用配置不生效，当前配置仅在系统应用中有效。  - thumbnail：获取文件缩略图的ExtensionAbility，开发者可以对自定义文件类型的文件提供缩略。  - preview：该ExtensionAbility会将文件解析后在一个窗口中显示，开发者可以通过将此窗口组合到其他应用窗口中。  - print：打印框架的ExtensionAbility。  - push：推送的ExtensionAbility。  - driver：驱动框架的ExtensionAbility。应用配置了driver类型的ExtensionAbility后会被视为驱动应用，驱动应用在安装、卸载和恢复时不会区分用户，且创建新用户时也会安装设备上已有的驱动应用。例如，创建子用户时会默认安装主用户已有的驱动应用，在子用户上卸载驱动应用时，主用户上对应的驱动应用也会同时被卸载。  - remoteNotification：远程通知的ExtensionAbility。  - remoteLocation：远程定位的ExtensionAbility。  - voip：网络音视频通话的ExtensionAbility。  - action：自定义操作业务模板的ExtensionAbility，为开发者提供基于UIExtension的自定义操作业务模板。  - adsService：广告业务的ExtensionAbility，提供广告业务框架，三方应用配置不生效，当前配置仅在系统应用中有效。  - embeddedCashier：支付业务的ExtensionAbility，与CashierComponent控件组合使用，将支付页面展示到其他应用中。从API version 23开始，支持该标签。三方应用配置不生效，当前配置仅在系统应用中有效，仅支持TV设备使用，其他设备配置不生效。  - embeddedUI：嵌入式UI扩展能力，提供跨进程界面嵌入的能力。  - insightIntentUI：为开发者提供能被小艺意图调用，以窗口形态呈现内容的扩展能力。  - ads：广告业务的ExtensionAbility，与AdComponent控件组合使用，将广告页面展示到其他应用中。仅支持设备厂商使用。  - photoEditor：图片编辑业务的ExtensionAbility，为开发者提供基于UIExtension的图片编辑业务模版。  - appAccountAuthorization：应用账号授权扩展能力的ExtensionAbility，用于处理账号授权请求，比如账号登录授权。  - autoFill/password：用于账号和密码自动填充业务的ExtensionAbility，支持数据的保存、填充能力。  - hms/account：应用账号管理能力的ExtensionAbility。  - sysDialog/atomicServicePanel：提供构建元服务服务面板的基础能力的ExtensionAbility，使用时基于UIExtensionAbility实现，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysDialog/userAuth：本地用户鉴权的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysDialog/common：通用弹窗的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysDialog/power：关机重启弹窗的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysDialog/print：打印模态弹窗的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysDialog/meetimeCall：畅连通话的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysDialog/meetimeContact：畅连联系人的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysDialog/meetimeMessage：畅连消息的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/meetimeContact：畅连联系人列表的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/meetimeCallLog：畅连通话记录列表的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/share：系统分享的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/mediaControl：投播组件的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/photoPicker：三方应用通过对应的UIExtensionType拉起图库picker界面，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/filePicker：文件下载弹窗的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/audioPicker：音频管理弹窗的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/photoEditor：图片编辑弹窗的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sys/commonUI：非通用的ExtensionAbility，提供业务属性强相关的嵌入式显示或弹框，三方应用配置不生效，当前配置仅在系统应用中有效。  - autoFill/smart：用于情景化场景自动填充业务的ExtensionAbility，支持数据的保存、填充能力。  - uiService：弹窗服务组件，在启动过程中会创建window，并支持双向通信，三方应用配置不生效，当前配置仅在系统应用中有效。  - statusBarView：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-introduction",
              children: "状态栏开放服务"
            }), "的ExtensionAbility。  - liveViewLockScreen：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-lock-screen-ability/liveview-lock-screen-ability",
              children: "实况窗锁屏沉浸态"
            }), "的ExtensionAbility。  - accountLogout：华为账号登出能力的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/navigation：拉起系统导航类应用面板的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sysPicker/appSelector：拉起系统应用选择弹框的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - sys/visualExtension : 原生智能图片类控件视觉搜索的ExtensionAbility，三方应用配置不生效，当前配置仅在系统应用中有效。  - screenTimeGuard：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-timeguardextensionability/screentimeguard-timeguardextensionability",
              children: "屏幕时间守护开放服务"
            }), "的ExtensionAbility。 从API version 20开始，支持该配置。  - recentPhoto：最近照片推荐的ExtensionAbility。  - fence：地理围栏的ExtensionAbility。  - callerInfoQuery：企业联系人查询的ExtensionAbility。  - assetAcceleration：资源预下载的ExtensionAbility。  - formEdit：卡片编辑的ExtensionAbility。  - distributed：分布式扩展的ExtensionAbility。  - liveForm：互动卡片的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/js-apis-app-form-liveformextensionability/js-apis-app-form-liveformextensionability",
              children: "ExtensionAbility"
            }), "。从API version 20开始，支持该标签。  - appService：为应用提供后台服务相关扩展能力", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability",
              children: "AppServiceExtensionAbility"
            }), "，包括后台服务的创建、销毁、连接、断开等生命周期回调。从API version 20开始，支持该标签。  - webNativeMessaging：为开发者提供Web原生消息通信能力的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionability/arkts-apis-web-webnativemessagingextensionability",
              children: "ExtensionAbility"
            }), "。从API version 21开始，支持该标签。  - faultLog：故障延迟通知的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability",
              children: "ExtensionAbility"
            }), "。从API version 21开始，支持该标签。  - notificationSubscriber：提供通知订阅相关功能的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability",
              children: "ExtensionAbility"
            }), "。从API version 22开始，支持该标签。  - crypto：外部密钥管理扩展的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev",
              children: "ExtensionAbility"
            }), "。从API version 22开始，支持该标签。  - partnerAgent：基于蓝牙通信技术，提供设备发现与设备下线的通知功能的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability",
              children: "ExtensionAbility"
            }), "。从API version 23开始，支持该标签。  - contentEmbed：对象插入编辑框架的ExtensionAbility。从API version 23 开始，支持该标签。  - selection：划词扩展的ExtensionAbility。从API version 20开始，仅支持系统应用配置，三方应用配置不生效。  - awc/webpage：通用网页浏览的ExtensionAbility。  - awc/newsfeed：信息流资讯业务的ExtensionAbility。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "permissions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前ExtensionAbility组件的权限信息。当其他应用访问该ExtensionAbility时，需要申请相应的权限。  一个数组元素为一个权限名称。不超过255字节，取值请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions",
              children: "应用权限列表"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appIdentifierAllowList"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识允许启动此ExtensionAbility的应用程序列表。  一个数组元素为一个应用程序的appIdentifier，appIdentifier信息可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/common-problem-of-application#%E4%BB%80%E4%B9%88%E6%98%AFappidentifier",
              children: "什么是appIdentifier"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅当ExtensionAbility组件的type为appService时支持配置该标签。  从API version 20开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readPermission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识读取当前ExtensionAbility组件数据所需的权限，取值为长度不超过255字节的字符串。仅当预置的系统应用ExtensionAbility的type配置为dataShare时，该标签生效。dataShare类型仅支持系统应用支持配置，三方应用配置不生效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "writePermission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识向当前ExtensionAbility组件写数据所需的权限，取值为长度不超过255字节的字符串。仅当预置的系统应用ExtensionAbility的type配置为dataShare时，该标签生效。dataShare类型仅支持系统应用支持配置，三方应用配置不生效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前ExtensionAbility组件提供的数据URI，取值为长度不超过255字节的字符数组，用反向域名的格式表示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该标签在type为dataShare类型的ExtensionAbility时，不可缺省。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skills"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前ExtensionAbility组件能够接收的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/want/want-overview",
              children: "Want"
            }), "的特征集。  配置规则：entry包可以配置多个具有入口能力的skills标签（配置了ohos.want.action.home和entity.system.home）的ExtensionAbility，其中第一个配置了skills标签的ExtensionAbility中的label和icon作为服务或应用的label和icon。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  服务的Feature包不支持配置具有入口能力的skills标签。  应用的Feature包支持配置具有入口能力的skills标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata%E6%A0%87%E7%AD%BE",
              children: "metadata"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前ExtensionAbility组件的元信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该标签在type为form时，不可缺省，且必须存在一个name为ohos.extension.form的对象值，其对应的resource值不能缺省，为服务卡片的二级资源引用。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前ExtensionAbility组件是否可以被其他应用调用。  - true：表示可以被其他应用调用。  - false：表示不可以被其他应用调用，包括无法被aa工具命令拉起应用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extensionProcessMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前ExtensionAbility组件的多进程实例模型,当前只对UIExtensionAbility以及从UIExtensionAbility扩展的ExtensionAbility生效。  - instance：表示该ExtensionAbility每个实例一个进程。  - type：表示该ExtensionAbility实例都运行在同一个进程里，与其他ExtensionAbility分离进程。  - bundle：表示该ExtensionAbility实例都运行在应用统一进程里，与其他配置了bundle模型的ExtensionAbility共进程。  - runWithMainProcess：表示该ExtensionAbility和应用主进程共进程，只有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-introduction",
              children: "状态栏开放服务"
            }), "的ExtensionAbility可以配置runWithMainProcess。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataGroupIds"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前ExtensionAbility组件的dataGroupId集合。如果当前ExtensionAbility组件所在的应用在应用市场申请的证书里groupIds也申请了某个dataGroupId，那么当前ExtensionAbility组件可以和应用共享这一个dataGroupId生成的目录，所以ExtensionAbility组件的dataGroupId需要是应用的签名证书中groupIds标签里配置的才能生效。 且该标签仅在当前ExtensionAbility组件存在独立的沙箱目录时生效。详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ime-kit/ime-kit-security#section4219152220459",
              children: "dataGroupId申请流程"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识组件的进程名称，只有type为embeddedUI时可以配置该标签。具体使用方式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/process-model-stage#%E5%85%B6%E4%BB%96%E8%BF%9B%E7%A8%8B%E7%B1%BB%E5%9E%8B",
              children: "进程模型定义"
            }), "中的\"静态指定进程\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
              children: "PC/2in1"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
              children: "Tablet"
            }), "设备上生效。  2. UIAbility组件和ExtensionAbility组件标签一致时运行在同一个进程中。  3. 从API version 14开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isolationProcess"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识ExtensionAbility组件能否运行在独立的进程中。  - true：表示能运行在独立的进程中。  - false：表示不能运行在独立的进程中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅当ExtensionAbility组件的type为\"sys/commonUI\"时该标签配置生效，且仅支持由系统应用配置type为\"sys/commonUI\"。  从API version 20开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "extensionAbilities示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // ...\n    \"extensionAbilities\": [\n      {\n        \"name\": \"FormName\",\n        \"srcEntry\": \"./ets/form/MyForm.ets\",\n        \"icon\": \"$media:icon\",\n        \"label\" : \"$string:extension_name\",\n        \"description\": \"$string:form_description\",\n        \"type\": \"form\",\n        \"permissions\": [\"ohos.permission.ACCESS_BLUETOOTH\"],\n        \"exported\": true,\n        \"uri\":\"scheme://authority/path/query\",\n        \"skills\": [{\n          \"actions\": [],\n          \"entities\": [],\n          \"uris\": [],\n          \"permissions\": []\n        }],\n        \"metadata\": [\n          {\n            \"name\": \"ohos.extension.form\",\n            \"resource\": \"$profile:form_config\",\n          }\n        ],\n        \"extensionProcessMode\": \"instance\",\n        \"dataGroupIds\": [\n          \"testGroupId1\"\n        ]\n      }\n    ],\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shortcuts标签",
      children: "shortcuts标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shortcuts标识应用的快捷方式信息。标签值为数组，包含四个子标签shortcutId、label、icon、wants。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#metadata%E6%A0%87%E7%AD%BE",
        children: "metadata"
      }), "中指定shortcut信息，其中："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "name：指定shortcuts的名称，使用ohos.ability.shortcuts作为shortcuts信息的标识。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "resource：指定shortcuts信息的资源位置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(156530)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "桌面展示快捷方式的数量有上限要求，最多展示4个。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表10"
        })
      }), " shortcuts标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shortcutId"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识快捷方式的ID，取值为长度不超过63字节的字符串。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "不支持通过资源索引的方式（$string）配置该标签。"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识快捷方式的标签信息，即快捷方式对外显示的文字描述信息。取值为长度不超过255字节的字符串，可以是描述性内容，也可以是标识label的资源索引。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识快捷方式的图标，取值为资源文件的索引。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  图标分为单层图标和分层图标，单层图标包含一个图片，分层图标包含前景图和背景图，推荐使用如下配置的分层图标：  1.前景图：图标显示大小为450*450px，资源大小为1024*1024px的透明图层。  2.背景图：大小为1024*1024px。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "visible"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识快捷方式是否显示，取值为true时显示快捷方式，取值为false时不显示快捷方式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.从API version 20开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wants%E6%A0%87%E7%AD%BE",
              children: "wants"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识快捷方式内定义的目标wants信息集合，在调用launcherBundleManager的startShortcut接口时，会拉起wants标签里的第一个目标组件，推荐只配置一个wants元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在/resources/base/profile/目录下配置shortcuts_config.json配置文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"shortcuts\": [\n    {\n      \"shortcutId\": \"id_test1\",\n      \"label\": \"$string:shortcut\",\n      \"icon\": \"$media:aa_icon\",\n      \"visible\": true,\n      \"wants\": [\n        {\n          \"bundleName\": \"com.ohos.hello\",\n          \"moduleName\": \"entry\",\n          \"abilityName\": \"EntryAbility\",\n          \"parameters\": {\n            \"testKey\": \"testValue\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5配置文件的abilities标签中，针对需要添加快捷方式的UIAbility进行配置metadata标签，使shortcut配置文件对该UIAbility生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    // ...\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n        // ...\n        \"skills\": [\n          // ...\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\"\n            ]\n          }\n        ],\n        \"metadata\": [\n          {\n            \"name\": \"ohos.ability.shortcuts\",\n            \"resource\": \"$profile:shortcuts_config\"\n          }\n        ],\n        // ...\n      }\n    ],\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wants标签",
      children: "wants标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签用于标识快捷方式内定义的目标wants信息集合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表11"
        })
      }), " wants标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示快捷方式的目标包名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示快捷方式的目标模块名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示快捷方式的目标组件名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示拉起快捷方式时的自定义数据，仅支持配置字符串类型的数据。其中键值均最大支持1024长度的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "wants标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"wants\": [\n    {\n      \"bundleName\": \"com.ohos.hello\",\n      \"moduleName\": \"entry\",\n      \"abilityName\": \"EntryAbility\",\n      \"parameters\": {\n        \"testKey\": \"testValue\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "distributionfilter标签",
      children: "distributionFilter标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签用于定义HAP对应的细分设备规格的分发策略，以便在应用市场进行云端分发应用包时做精准匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625532)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签从API version 10及以后版本开始生效，API version 9及以前版本使用distroFilter标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "适用场景："
            })
          }), " 当一个工程中存在多个Entry，且多个Entry配置的deviceTypes存在交集时，则需要通过该标签进行区分。比如下面的两个Entry都支持tablet类型，就需要通过该标签进行区分。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry1支持的设备类型\n{\n  \"module\": {\n    \"name\": \"entry1\",\n    \"type\": \"entry\",\n    \"deviceTypes\": [\n      \"tv\",\n      \"tablet\"\n    ],\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry2支持的设备类型\n{\n  \"module\": {\n    \"name\": \"entry2\",\n    \"type\": \"entry\",\n    \"deviceTypes\": [\n      \"tv\",\n      \"tablet\"\n    ],\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "配置规则："
            })
          }), " 该标签支持配置四个属性，包括屏幕形状(", (0,jsx_runtime.jsx)(_components.a, {
            href: "#screenshape%E6%A0%87%E7%AD%BE",
            children: "screenShape"
          }), ")、窗口分辨率(", (0,jsx_runtime.jsx)(_components.a, {
            href: "#screenwindow%E6%A0%87%E7%AD%BE",
            children: "screenWindow"
          }), ")、屏幕像素密度(", (0,jsx_runtime.jsx)(_components.a, {
            href: "#screendensity%E6%A0%87%E7%AD%BE",
            children: "screenDensity"
          }), " )、设备所在国家与地区(", (0,jsx_runtime.jsx)(_components.a, {
            href: "#countrycode%E6%A0%87%E7%AD%BE",
            children: "countryCode"
          }), ")。详见下表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在分发应用包时，通过deviceTypes与这四个属性的匹配关系，唯一确定一个用于分发到设备的HAP。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果需要配置该标签，则至少包含一个属性。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果一个Entry中配置了任意一个或多个属性，则其他Entry也必须包含相同的属性。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "screenShape和screenWindow属性仅适用于轻量级智能穿戴设备。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "配置方式："
            })
          }), " 该标签需要配置在/resources/base/profile资源目录下，并在metadata的resource标签中引用。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表12"
        })
      }), " distributionFilter标签配置说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#screenshape%E6%A0%87%E7%AD%BE",
              children: "screenShape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识屏幕形状的支持策略。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#screenwindow%E6%A0%87%E7%AD%BE",
              children: "screenWindow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用运行时的窗口分辨率的支持策略。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#screendensity%E6%A0%87%E7%AD%BE",
              children: "screenDensity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识屏幕的像素密度（dpi：Dot Per Inch）的支持策略。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#countrycode%E6%A0%87%E7%AD%BE",
              children: "countryCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识国家与地区的支持策略，取值参考ISO-3166-1标准。支持多个国家和地区枚举定义。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "screenshape标签",
      children: "screenShape标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表13"
        })
      }), " screenShape标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识条件属性的过滤规则。  - exclude：表示需要排除的value属性。  - include：表示需要包含的value属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持的取值为circle（圆形）、rect（矩形）。例如，针对智能穿戴设备，可为圆形表盘和矩形表盘分别提供不同的HAP。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "screenwindow标签",
      children: "screenWindow标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表14"
        })
      }), " screenWindow标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识条件属性的过滤规则。当前取值仅支持“include”。  - include：表示需要包含的value属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个字符串的取值格式为“宽 * 高”，取值为整数像素值，例如“454 * 454”。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "screendensity标签",
      children: "screenDensity标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表15"
        })
      }), " screenDensity标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识条件属性的过滤规则。  - exclude：表示需要排除的value属性。  - include：表示需要包含的value属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识屏幕的像素密度（dpi :Dot Per Inch）。支持的取值如下：  - sdpi：表示小规模的屏幕密度（Small-scale Dots per Inch），适用于dpi取值为(0,120]的设备。  - mdpi：表示中规模的屏幕密度（Medium-scale Dots Per Inch），适用于dpi取值为(120,160]的设备。  - ldpi：表示大规模的屏幕密度（Large-scale Dots Per Inch），适用于dpi取值为(160,240]的设备。  - xldpi：表示大规模的屏幕密度（Extra Large-scale Dots Per Inch），适用于dpi取值为(240,320]的设备。  - xxldpi：表示大规模的屏幕密度（Extra Extra Large-scale Dots Per Inch），适用于dpi取值为(320，480]的设备。  - xxxldpi：表示大规模的屏幕密度（Extra Extra Extra Large-scale Dots Per Inch），适用于dpi取值为(480, 640]的设备。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "countrycode标签",
      children: "countryCode标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表16"
        })
      }), " countryCode标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识条件属性的过滤规则。  - exclude：表示需要排除的value属性。  - include：表示需要包含的value属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用需要分发的国家地区码。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在开发视图的resources/base/profile下定义配置文件，文件名为distributionFilter_config.json，文件名可以自定义。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"distributionFilter\": {\n    \"screenShape\": {\n      \"policy\": \"include\",\n      \"value\": [\n        \"circle\",\n        \"rect\"\n      ]\n    },\n    \"screenWindow\": {\n      \"policy\": \"include\",\n      \"value\": [\n        \"454*454\",\n        \"466*466\"\n      ]\n    },\n    \"screenDensity\": {\n      \"policy\": \"exclude\",\n      \"value\": [\n        \"ldpi\",\n        \"xldpi\"\n      ]\n    },\n    \"countryCode\": {\n      \"policy\": \"include\",\n      \"value\": [\n        \"CN\"\n      ]\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5配置文件的module标签中定义metadata信息。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"metadata\": [\n      {\n        \"name\": \"ohos.module.distribution\",\n        \"resource\": \"$profile:distributionFilter_config\"\n      }\n    ],\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testrunner标签",
      children: "testRunner标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签用于支持对测试框架的配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表17"
        })
      }), " testRunner标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "标识测试框架对象名称，取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识测试框架代码路径，取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "testRunner标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"testRunner\": {\n      \"name\": \"myTestRunnerName\",\n      \"srcPath\": \"etc/test/TestRunner.ts\"\n    },\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "atomicservice标签",
      children: "atomicService标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签用于支持对元服务的配置。此标签仅在app.json5中将bundleType设置为atomicService时生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表18"
        })
      }), " atomicService标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "preloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识元服务中预加载列表。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resizeable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识元服务是否支持自适应窗口大小显示。当标签配置成true时，平板横屏模式切换或者折叠屏展开关闭，会自适应屏幕窗口的宽高，使得屏幕显示正常。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.从API version 20开始，支持该标签。  2.如果已经适配了平板横屏及折叠屏展开态显示，建议将该标签设置为true。  - true：表示元服务可以自适应窗口大小。  - false：表示元服务不可以自适应窗口大小。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表19"
        })
      }), " preloads标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识元服务中当前模块被加载时，需预加载的模块名。不能配置自身modulename，且必须有对应的模块，取值为长度不超过31字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "atomicService标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"atomicService\": {\n      \"preloads\":[\n        {\n          \"moduleName\":\"feature\"\n        }\n      ],\n      \"resizeable\": true\n    },\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies标签",
      children: "dependencies标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识模块运行时依赖的共享库列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表20"
        })
      }), " dependencies标签说明"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前模块依赖的共享包包名。取值为长度7~128字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前模块依赖的共享包模块名。取值为长度不超过31字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前模块依赖的共享包的版本号。取值范围为0~2147483647。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dependencies标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"dependencies\": [\n      {\n        \"bundleName\":\"com.share.library\",\n        \"moduleName\": \"library\",\n        \"versionCode\": 10001\n      }\n    ],\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proxydata标签",
      children: "proxyData标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识模块提供的数据代理列表，仅限entry和feature配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表21"
        })
      }), " proxyData标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识用于访问该数据代理的URI，不同的数据代理配置的URI不可重复，且需要满足datashareproxy://当前应用包名/xxx的格式。取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requiredReadPermission"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识从该数据代理中读取数据所需要的权限。若不配置，则其他应用无法使用该代理。非系统应用配置的权限的等级需为system_basic或system_core，系统应用配置的权限的等级没有限制。权限等级可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions",
              children: "权限列表"
            }), "。取值为长度不超过255字节的字符串。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requiredWritePermission"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识向该数据代理中写入数据所需要的权限。若不配置，则其他应用无法使用该代理。非系统应用配置的权限的等级需为system_basic或system_core，系统应用配置的权限的等级没有限制。权限等级可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions",
              children: "权限列表"
            }), "。取值为长度不超过255字节的字符串。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata%E6%A0%87%E7%AD%BE",
              children: "metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识该数据代理的元信息，只支持配置name和resource标签。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "proxyData标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"proxyData\": [\n      {\n        \"uri\":\"datashareproxy://ohos.app.hap.myapplication/event/Meeting\",\n        \"requiredReadPermission\": \"ohos.permission.SYSTEM_FLOAT_WINDOW\",\n        \"requiredWritePermission\": \"ohos.permission.SYSTEM_FLOAT_WINDOW\",\n        \"metadata\": {\n          \"name\": \"datashare_metadata\",\n          \"resource\": \"$profile:datashare\"\n        }\n      }\n    ],\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "routermap标签",
      children: "routerMap标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识模块配置的路由表的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "routerMap配置文件描述模块的路由表信息，routerMap标签的值为数组类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表22"
        })
      }), " routerMap标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "标识跳转页面的名称。取值为长度不超过1023字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pageSourceFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识页面在模块内的路径。取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识被@Builder修饰的函数，该函数描述页面的UI。取值为长度不超过1023字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#data%E6%A0%87%E7%AD%BE",
              children: "data"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识字符串类型的自定义数据，开发者自行扩展能力，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-hapmoduleinfo/js-apis-bundlemanager-hapmoduleinfo",
              children: "HapModuleInfo对象"
            }), "中routerMap集合对象下的data获取标签内容，该标签已由系统解析，无需开发者自行解析。 每个自定义数据字符串取值不超过128字节。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#customdata%E6%A0%87%E7%AD%BE",
              children: "customData"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识任意类型的自定义数据，开发者自行扩展能力，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-hapmoduleinfo/js-apis-bundlemanager-hapmoduleinfo",
              children: "HapModuleInfo对象"
            }), "中routerMap集合对象下的customData获取标签内容，开发者需要调用JSON.parse函数解析出具体内容。总长度不超过4096字节。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在开发视图的resources/base/profile下面定义配置文件，文件名可以自定义，例如：router_map.json。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"DynamicPage1\",\n      \"pageSourceFile\": \"src/main/ets/pages/pageOne.ets\",\n      \"buildFunction\": \"myFunction\",\n      \"customData\": {\n        \"stringKey\": \"data1\",\n        \"numberKey\": 123,\n        \"booleanKey\": true,\n        \"objectKey\": {\n          \"name\": \"test\"\n        },\n        \"arrayKey\": [\n          {\n            \"id\": 123\n          }\n        ]\n      }\n    },\n    {\n      \"name\": \"DynamicPage2\",\n      \"pageSourceFile\": \"src/main/ets/pages/pageTwo.ets\",\n      \"buildFunction\": \"myBuilder\",\n      \"data\": {\n        \"key1\": \"data1\",\n        \"key2\": \"data2\"\n      }\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5配置文件的module标签中定义routerMap标签，指向定义的路由表配置文件，例如：\"routerMap\": \"$profile:router_map\"。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data标签",
      children: "data标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签用于支持在路由表中配置自定义的字符串数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "data标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"DynamicPage\",\n      \"pageSourceFile\": \"src/main/ets/pages/pageOne.ets\",\n      \"buildFunction\": \"myBuilder\",\n      \"data\": {\n        \"key1\": \"data1\",\n        \"key2\": \"data2\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "customdata标签",
      children: "customData标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签用于支持在路由表中配置自定义数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "customData对象内部，可以配置任意类型的自定义数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "customData标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"DynamicPage\",\n      \"pageSourceFile\": \"src/main/ets/pages/pageOne.ets\",\n      \"buildFunction\": \"myBuilder\",\n      \"customData\": {\n        \"stringKey\": \"data1\",\n        \"numberKey\": 123,\n        \"booleanKey\": true,\n        \"objectKey\": {\n          \"name\": \"test\"\n        },\n        \"arrayKey\": [\n          {\n            \"id\": 123\n          }\n        ]\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appenvironments标签",
      children: "appEnvironments标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识模块配置的应用环境变量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表23"
        })
      }), " appEnvironments标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "标识环境变量的变量名称。取值为长度不超过4096字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识环境变量的值。取值为长度不超过4096字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "appEnvironments标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"appEnvironments\": [\n      {\n        \"name\": \"name1\",\n        \"value\": \"value1\"\n      }\n    ],\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hnppackages标签",
      children: "hnpPackages标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签标识应用包含的Native软件包信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表24"
        })
      }), " hnpPackages标签说明"]
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
            children: "package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Native软件包名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Native软件包类型。支持的取值如下：  - public：公有类型。  - private：私有类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "independentSign"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识Native软件包是否支持独立签名。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 23开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hnpPackages示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"hnpPackages\": [\n      {\n        \"package\": \"hnpsample.hnp\",\n        \"type\": \"public\",\n        \"independentSign\": true\n      }\n    ],\n    // ...\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filecontextmenu标签",
      children: "fileContextMenu标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签标识当前HAP的右键菜单配置项，是一个profile文件资源，用于指定描述应用注册右键菜单配置文件。仅在PC/2in1设备上生效。仅允许在entry类型模块中配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fileContextMenu标签示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"fileContextMenu\": \"$profile:menu\", // 资源配置，指向profile下面定义的配置文件menu.json\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发视图的resources/base/profile下面定义配置文件menu.json，其中文件名“menu.json”可自定义，需要和fileContextMenu标签指定的信息对应。配置文件中描述了当前应用注册的右键菜单的项目和响应行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置文件根节点名称为fileContextMenu，为对象数组，标识当前module注册右键菜单的数量。（单模块和单应用注册数量不能超过5个，配置超过数量当前只解析随机5个）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表25"
        })
      }), " fileContextMenu标签配置说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当前右键菜单对应的需要拉起的ability名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右键菜单显示的信息。命名建议：  原则一：[动作]+[应用名]，中文示例：用{App}打开、用{App} ({Plugin}插件) 打开；英文示例：Open with {App}、Open with {App} ({Plugin})。  原则二：[动作]+[目的]，示例：压缩为{文件名}、压缩至{路径}、用{App}转换为{格式}。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个ability可以创建多个右键菜单， 该标签与右键菜单显示项一一对应，用于区分用户拉起的不同右键菜单项。开发者可自定义该标签取值，确保该标签在整个ability中唯一。在用户点击右键菜单拉起应用时，会作为参数传递给应用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义展示该菜单项需要的上下文，可以支持多种情况，类型为数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表26"
        })
      }), " menuContext标签配置说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "menuKind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示单击如下类型时会触发右键菜单。取值范围如下：  - 0：空白处  - 1：文件  - 2：文件夹  - 3：文件和文件夹"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuRule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示采用什么方式选择文件或文件夹时，会触发右键菜单。取值范围如下：  - single：单选  - multi：多选  - both：单选或多选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅当menuKind为1或2时，才会读取该标签，此时不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fileSupportType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当选中的文件列表里包含指定的文件类型时，显示右键菜单。  当该标签取值为[\"*\"]时，将会读取fileNotSupportType标签。  当该标签取值为[]时，将不做任何处理。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅当menuKind为1时，才会读取该标签，此时不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fileNotSupportType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当选中的文件列表里包含这些文件类型时，不显示该右键菜单。  仅当menuKind为1、且fileSupportType为[\"*\"]时，才会读取该标签。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resources/base/profile路径下的menu.json资源文件示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"fileContextMenu\": [\n    {\n      \"abilityName\": \"EntryAbility\",\n      \"menuItem\": \"$string:module_desc\",\n      \"menuHandler\": \"openCompress\",\n      \"menuContext\": [\n        {\n          \"menuKind\": 0\n        },\n        {\n          \"menuKind\": 1,\n          \"menuRule\": \"both\",\n          \"fileSupportType\": [\n            \".rar\",\n            \".zip\"\n          ],\n          \"fileNotSupportType\": [\n            \"\"\n          ]\n        },\n        {\n          \"menuKind\": 2,\n          \"menuRule\": \"single\"\n        },\n        {\n          \"menuKind\": 3\n        }\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "响应行为"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用进行右键扩展菜单注册后，在文件管理器通过右键操作拉起菜单，该菜单中会有“更多”选项。单击“更多”选项后，会出现注册后的menuItem列表，单击任意一个选项后，文件管理器默认通过startAbility的方式拉起三方应用，除了指定三方应用的包名和ability名之外，want中的parameter中，也会传入如下标签："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表27"
        })
      }), " want中parameter标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应注册配置文件中menuHandler的值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uriList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户在具体文件上触发右键的uri值，如果空白处响应，此值为空，单个文件响应，数组长度1，多个文件响应则传入对应所有文件的uri值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "startwindow标签",
      children: "startWindow标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签指向一个profile文件资源，用于指定UIAbility组件启动页面的配置文件，在开发视图的resources/base/profile下面定义配置文件start_window.json，如果配置了该标签，startWindowIcon和startWindowBackground标签将不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，支持使用该字段配置增强启动页。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表28"
        })
      }), " startWindow标签配置说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "startWindowType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前UIAbility组件是否隐藏启动页。  当前仅支持在2in1设备或平板设备的自由多窗模式下使用。  不同取值含义如下：  - \"REQUIRED_SHOW\"：强制显示启动页。不受", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions#startoptions",
              children: "Ability管理服务（即StartOptions中hideStartWindow标签）"
            }), "的影响。  - \"REQUIRED_HIDE\"：强制隐藏启动页。不受", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions#startoptions",
              children: "Ability管理服务（即StartOptions中hideStartWindow标签）"
            }), "的影响。  - \"OPTIONAL_SHOW\"：可选显示，默认行为为显示启动页，如果", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions#startoptions",
              children: "Ability管理服务（即StartOptions中hideStartWindow标签）"
            }), "设置隐藏启动页，则隐藏启动页。  - 如未配置该标签，默认取值为\"REQUIRED_SHOW\"，即强制显示启动页。  从API version 20开始支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为REQUIRED_SHOW。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowAppIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件启动页面图标资源文件的索引，取值为长度不超过255字节的字符串。  从API version 19开始支持该字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowIllustration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件启动页面插画资源文件的索引，取值为长度不超过255字节的字符串。  从API version 19开始支持该字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowBrandingImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件启动页面品牌标识资源文件的索引，取值为长度不超过255字节的字符串。  从API version 19开始支持该字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowBackgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件启动页面背景颜色资源文件的索引，取值为长度不超过255字节的字符串。  从API version 19开始支持该字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowBackgroundImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件启动页面背景图片资源文件的索引，取值为长度不超过255字节的字符串。  从API version 19开始支持该字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowBackgroundImageFit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件启动页面背景图像适应方式，支持的取值如下：  - Contain：按照宽高比进行缩小或放大，图片完全显示在显示边界内。  - Cover：按照宽高比进行缩小或放大，图片两边都大于或等于显示边界。  - Auto：自适应显示。  - Fill：不按照宽高比进行放大或缩小，图片充满显示边界。  - ScaleDown：按照宽高比显示，图片缩小或保持不变。  - None：保持原有尺寸显示。  从API version 19开始支持该字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为Cover。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowColorModeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件启动页深浅色模式，仅作用于同进程间拉起场景。  不同取值含义如下：  - \"FOLLOW_SYSTEM\"：启动页颜色模式跟随系统深浅色。  - \"FOLLOW_APPLICATION\"：启动页颜色模式跟随应用深浅色。  - 如未配置该字段，默认取值为\"FOLLOW_SYSTEM\"，即启动页颜色模式跟随系统深浅色。  从API version 20开始支持该字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为FOLLOW_SYSTEM。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resources/base/profile路径下的start_window.json资源文件示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"startWindowType\": \"REQUIRED_SHOW\",\n  \"startWindowColorModeType\": \"FOLLOW_SYSTEM\",\n  \"startWindowAppIcon\": \"$media:start_window_app_icon\",\n  \"startWindowIllustration\": \"$media:start_window_illustration\",\n  \"startWindowBrandingImage\": \"$media:start_window_branding_image\",\n  \"startWindowBackgroundColor\": \"$color:start_window_back_ground_color\",\n  \"startWindowBackgroundImage\": \"$media:start_window_back_ground_image\",\n  \"startWindowBackgroundImageFit\": \"Cover\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "systemtheme标签",
      children: "systemTheme标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签指向一个profile文件资源，用于指定当前应用使用的系统主题配置文件。从API version 20开始，支持该标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "systemTheme标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"systemTheme\": \"$profile:theme_config\", // 资源配置，指向profile下面定义的配置文件theme_config.json\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发视图的resources/base/profile下面定义配置文件theme_config.json，其中文件名“theme_config.json”可自定义为“theme_config”开头文件名，例如\"theme_config\"、\"theme_config_1\"。需要和systemTheme标签指定的信息对应。配置文件中标识当前应用使用的系统主题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表29"
        })
      }), " theme_config.json配置说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "systemTheme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用使用的系统主题，取值为引用系统主题名称的枚举。枚举支持的取值如下：  - $ohos:theme:ohos_theme 系统默认的主题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resources/base/profile路径下的theme_config.json资源文件示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"systemTheme\": \"$ohos:theme:ohos_theme\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requireddevicefeatures标签",
      children: "requiredDeviceFeatures标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表30"
        })
      }), " requiredDeviceFeatures标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "phone"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手机设备需要支持的设备特性，当前支持取值如下：  - large_screen：表示设备需要支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-screen-layout#section6493354468",
              children: "大屏横屏"
            }), "。  - paint：表示设备屏幕需要支持手写笔绘画能力。从API version 23开始，支持使用该字段配置。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1设备需要支持的设备特性，当前支持取值如下：  - paint：表示设备屏幕需要支持手写笔绘画能力。从API version 23开始，支持使用该字段配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requiredDeviceFeatures示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"requiredDeviceFeatures\": {\n      \"phone\": [\n        \"large_screen\"\n      ],\n      \"2in1\": [\n        \"paint\"\n      ]\n    },\n  }\n}\n"
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
720338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
625532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
156530(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
790481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
303238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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