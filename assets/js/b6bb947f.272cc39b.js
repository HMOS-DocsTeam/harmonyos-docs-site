"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["207415"], {
381010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_configuration_file_fa_module_structure_module_structure_md_b6b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-configuration-file-fa-module-structure-module-structure-md-b6b.json
var site_docs_development_fundamentals_application_configuration_file_fa_module_structure_module_structure_md_b6b_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-configuration-file-fa/module-structure/module-structure","title":"module对象内部结构","description":"module对象包含HAP的配置信息。","source":"@site/docs/development-fundamentals/application-configuration-file-fa/module-structure/module-structure.md","sourceDirName":"development-fundamentals/application-configuration-file-fa/module-structure","slug":"/development-fundamentals/application-configuration-file-fa/module-structure/","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/module-structure/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"module对象内部结构","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-structure","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"deviceConfig内部结构","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/deviceconfig-structure/"},"next":{"title":"创建应用静态快捷方式","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/typical-scenario-configuration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-configuration-file-fa/module-structure/module-structure.md


const frontMatter = {
	title: 'module对象内部结构',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-structure',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'module对象内部结构';

const assets = {

};



const toc = [{
  "value": "distro对象内部结构",
  "id": "distro对象内部结构",
  "level": 2
}, {
  "value": "metadata对象内部结构",
  "id": "metadata对象内部结构",
  "level": 2
}, {
  "value": "parameters对象内部结构",
  "id": "parameters对象内部结构",
  "level": 2
}, {
  "value": "results对象内部结构",
  "id": "results对象内部结构",
  "level": 2
}, {
  "value": "customizeData对象的内部结构",
  "id": "customizedata对象的内部结构",
  "level": 2
}, {
  "value": "deviceType标签",
  "id": "devicetype标签",
  "level": 2
}, {
  "value": "abilities对象的内部结构",
  "id": "abilities对象的内部结构",
  "level": 2
}, {
  "value": "uriPermission对象的内部结构",
  "id": "uripermission对象的内部结构",
  "level": 2
}, {
  "value": "skills对象的内部结构",
  "id": "skills对象的内部结构",
  "level": 2
}, {
  "value": "uris对象的内部结构",
  "id": "uris对象的内部结构",
  "level": 2
}, {
  "value": "reqPermissions权限申请",
  "id": "reqpermissions权限申请",
  "level": 2
}, {
  "value": "usedScene对象内部结构",
  "id": "usedscene对象内部结构",
  "level": 2
}, {
  "value": "js对象的内部结构",
  "id": "js对象的内部结构",
  "level": 2
}, {
  "value": "window对象的内部结构",
  "id": "window对象的内部结构",
  "level": 2
}, {
  "value": "mode对象的内部结构",
  "id": "mode对象的内部结构",
  "level": 2
}, {
  "value": "shortcuts对象的内部结构",
  "id": "shortcuts对象的内部结构",
  "level": 2
}, {
  "value": "intents对象的内部结构",
  "id": "intents对象的内部结构",
  "level": 2
}, {
  "value": "forms对象的内部结构",
  "id": "forms对象的内部结构",
  "level": 2
}, {
  "value": "customizeData对象内部结构",
  "id": "customizedata对象内部结构",
  "level": 2
}, {
  "value": "distroFilter对象的内部结构",
  "id": "distrofilter对象的内部结构",
  "level": 2
}, {
  "value": "apiVersion对象的内部结构",
  "id": "apiversion对象的内部结构",
  "level": 2
}, {
  "value": "screenShape对象的内部结构",
  "id": "screenshape对象的内部结构",
  "level": 2
}, {
  "value": "screenWindow对象的内部结构",
  "id": "screenwindow对象的内部结构",
  "level": 2
}, {
  "value": "screenDensity对象的内部结构",
  "id": "screendensity对象的内部结构",
  "level": 2
}, {
  "value": "countryCode对象的内部结构",
  "id": "countrycode对象的内部结构",
  "level": 2
}, {
  "value": "commonEvents对象的内部结构",
  "id": "commonevents对象的内部结构",
  "level": 2
}, {
  "value": "testRunner对象的内部结构",
  "id": "testrunner对象的内部结构",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    host: "host",
    img: "img",
    li: "li",
    p: "p",
    path: "path",
    pathregex: "pathregex",
    pathstartwith: "pathstartwith",
    port: "port",
    pre: "pre",
    scheme: "scheme",
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
        id: "module对象内部结构",
        children: "module对象内部结构"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module对象包含HAP的配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "module对象内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "mainAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务中心图标露出的Ability，常驻进程拉起时会启动mainAbility。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识HAP的包结构名称，在应用内保证唯一性。采用反向域名格式（建议与HAP的工程目录保持一致）。字符串长度为1-127个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识HAP的类名。采用反向域名方式标识，前缀要与同级的package标签指定的包名一致，也可采用\".\"开头的命名方式。字符串长度不超过255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识HAP的描述信息。字符串长度不超过255字节。如果字符串超出长度或者需要支持多语言，可以采用资源索引的方式添加描述内容。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportedModes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用支持的运行模式，当前只定义了驾驶模式（drive）。该标签只适用于车机。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识允许Ability运行的设备类型。系统预定义的设备类型包括：tablet(平板)、tv（智慧屏）、car(车机)、wearable(智能穿戴)、litewearable(运动表)等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识HAP发布的具体描述。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metaData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识HAP的元信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前模块内的所有Ability。采用对象数据格式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识基于ArkUI框架开发的JS模块集合，其中的每个元素代表一个JS模块的信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shortcuts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的快捷方式信息。采用对象数组格式，其中的每个元素表示一个快捷方式对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reqPermissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用运行时向系统申请的权限。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colorMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用自身的颜色模式，目前支持如下三种模式：  - dark：表示按照深色模式选取资源。  - light：表示按照浅色模式选取资源。  - auto：表示跟随系统的颜色模式值选取资源。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为\"auto\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distroFilter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签下的子标签均为可选字段，用于定义HAP对应的细分设备规格的分发策略，以便应用市场在云端分发HAP时做精准匹配。该标签需要配置在/resource/profile资源目录下；在进行分发时，通过deviceType与下表属性的匹配关系，唯一确定一个用于分发到设备的HAP。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。但当应用中包含多个entry模块时，必须配置该标签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commonEvents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义了公共事件静态订阅者的信息，该字段中需要声明静态订阅者的名称、权限要求及订阅事件列表信息，当订阅的公共事件发送时，该公共事件静态订阅者将被拉起。这里的静态订阅者区分于常用的动态订阅者，前者无需在业务代码中主动调用订阅事件的接口，在公共事件发布时可能未被拉起，而动态订阅者则在业务代码中主动调用公共事件订阅的相关API，因此需要应用处于活动状态。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entryTheme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此标签标识系统内部主题的关键字。将标记值设置为名称的资源索引。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "testRunner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此标签用于支持对测试框架的配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "generateBuildHash"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前HAP/HSP是否由打包工具生成哈希值。  该字段配置为true时，当前HAP/HSP会由打包工具生成对应的哈希值。系统OTA升级时，若应用的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-fa/app-structure#version%E5%AF%B9%E8%B1%A1%E5%86%85%E9%83%A8%E7%BB%93%E6%9E%84",
              children: "version下的code"
            }), "保持不变时，可根据哈希值判断应用是否需要升级。  - true：表示当前HAP/HSP是由打包工具生成对应的哈希值。  - false：表示当前HAP/HSP不会由打包工具生成对应的哈希值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该字段仅对预置应用生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "libIsolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于区分同应用不同hap下的so文件，以防止so冲突。  - true：当前hap的so会储存在libs目录中以Module名命名的路径下。  - false：当前hap的so会直接储存在libs目录中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省, 缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"mainAbility\": \".EntryAbility\",\n    \"deviceType\": [\n      \"default\",\n      \"tablet\"\n    ],\n    \"abilities\": [\n      {\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"action.system.home\"\n            ]\n          }\n        ],\n        \"orientation\": \"unspecified\",\n        \"visible\": true,\n        \"srcPath\": \"EntryAbility\",\n        \"name\": \".EntryAbility\",\n        \"srcLanguage\": \"ets\",\n        \"icon\": \"$media:icon\",\n        \"description\": \"$string:MainAbility_desc\",\n        \"formsEnabled\": false,\n        \"label\": \"$string:MainAbility_label\",\n        \"type\": \"page\",\n        \"launchType\": \"multiton\"\n      }\n    ],\n    \"distro\": {\n      \"moduleType\": \"entry\",\n      \"installationFree\": false,\n      \"deliveryWithInstall\": true,\n      \"moduleName\": \"entry\"\n    },\n    \"package\": \"com.example.entry\",\n    \"srcPath\": \"\",\n    \"name\": \".entry\",\n    \"js\": [\n      {\n        \"mode\": {\n          \"syntax\": \"ets\",\n          \"type\": \"pageAbility\"\n        },\n        \"pages\": [\n          \"pages/Index\"\n        ],\n        \"name\": \".EntryAbility\",\n        \"window\": {\n          \"designWidth\": 720,\n          \"autoDesignWidth\": false\n        }\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "distro对象内部结构",
      children: "distro对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "distro对象内部结构说明"
        })
      })]
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
            children: "moduleName"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前HAP的名称，最大长度为31个字节。 在应用升级时，该名称允许修改，但需要应用适配Module相关数据目录的迁移，可使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
              children: "@ohos.file.fs (文件管理)"
            }), "接口。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前HAP的类型，包括三种类型：entry、feature和har。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "installationFree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前HAP是否支持免安装特性。true：表示支持免安装特性，且符合免安装约束。false：表示不支持免安装特性。另外还需注意：当entry.hap该字段配置为true时，与该entry.hap相关的所有feature.hap该字段也需要配置为true。当entry.hap该字段配置为false时，与该entry.hap相关的各feature.hap该字段可按业务需求配置true或false。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deliveryWithInstall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前HAP是否在用户主动安装HAP所在应用的时候一起安装。true： 安装应用时当前HAP随应用一起下载安装。false：安装应用时当前HAP并不下载安装，后续使用是按需下载。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "distro示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"distro\": {\n  \"moduleName\": \"ohos_entry\",\n  \"moduleType\": \"entry\",\n  \"installationFree\": true,\n  \"deliveryWithInstall\": true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metadata对象内部结构",
      children: "metadata对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "metadata对象内部结构说明"
        })
      })]
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
            children: "parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识调用Ability时所有调用参数的元信息。每个调用参数的元信息由以下三个标签组成：description、name、type。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability返回值的元信息。每个返回值的元信息由以下三个标签组成：description、name、type。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "customizeData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签标识父级组件的自定义元信息，Parameters和results在application不可配。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parameters对象内部结构",
      children: "parameters对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "parameters对象内部结构说明"
        })
      })]
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
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对调用参数的描述，可以是表示描述内容的字符串，也可以是对描述内容的资源索引以支持多语言。该标签最大长度为255个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识调用参数的名称。该标签最大长度为255个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识调用参数的类型，如Integer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "results对象内部结构",
      children: "results对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "results对象内部结构说明"
        })
      })]
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
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对返回值的描述，可以是表示描述内容的字符串，也可以是对描述内容的资源索引以支持多语言。该标签最大长度为255个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识返回值的名字。该标签最大长度为255个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识返回值的类型，如Integer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizedata对象的内部结构",
      children: "customizeData对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "customizeData对象的内部结构说明"
        })
      })]
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
            children: "标识数据项的键名称，字符串类型（最大长度255字节）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识数据项的值名称，字符串类型（最大长度255字节）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识用户自定义数据格式，标签值为标识该数据的资源的索引值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "metadata对象示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"metaData\": {\n  \"parameters\" : [{\n    \"name\" : \"a test for metadata parameter\",\n    \"type\" : \"Float\",\n    \"description\" : \"$string:parameters_description\"\n  }],\n  \"results\" : [{\n    \"name\" : \"a test for metadata result\",\n    \"type\" : \"Float\",\n    \"description\" : \"$string:results_description\"\n  }],\n  \"customizeData\" : [{\n    \"name\" : \"a customizeData\",\n    \"value\" : \"string\",\n    \"extra\" : \"$string:customizeData_description\"\n  }]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicetype标签",
      children: "deviceType标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表7"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "deviceType标签配置说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "运动表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "liteWearable"
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "路由器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路由器设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "智慧视觉设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "smartVision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带摄像头的设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即PC设备，主要交互方式以多窗口、多任务及键盘鼠标操作为主，充分发挥设备的生产力属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilities对象的内部结构",
      children: "abilities对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表8"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "abilities对象的内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行应用程序或Ability的进程名称。如果在deviceConfig标记中配置了进程，则应用程序的所有能力都在此进程中运行。您还可以为特定能力设置流程属性，以便该能力可以在此流程中运行。如果此属性设置为与其他应用程序相同的进程名称，则所有这些应用程序可以在同一进程中运行，前提是他们具有相同的联合用户ID和相同的签名。该标签最大字节数为31个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability名称。取值可采用反向域名方式表示，由包名和类名组成，如\"com.example.myapplication.EntryAbility\"；也可采用\".\"开头的类名方式表示，如\".EntryAbility\"。  Ability的名称，需在一个应用的范围内保证唯一。说明：在使用DevEco Studio新建项目时，默认生成首个Ability的配置，即\"config.json\"中\"EntryAbility\"的配置。如使用其他DevEco Studio工具，可自定义名称。该标签最大长度为127个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对Ability的描述。取值可以是描述性内容，也可以是对描述性内容的资源索引，以支持多语言。该标签最大长度为255个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability图标资源文件的索引。取值示例：$media:ability_icon。如果在该Ability的skills属性中，actions的取值包含 \"action.system.home\"，entities取值中包含\"entity.system.home\"，则该Ability的icon将同时作为应用的icon。如果存在多个符合条件的Ability，则取位置靠前的Ability的icon作为应用的icon。  说明：应用的\"icon\"和\"label\"是用户可感知配置项，需要区别于当前所有已有的应用\"icon\"或\"label\"（至少有一个不同）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability对用户显示的名称。取值是对该名称的资源索引，支持多语言，例：$string:ability_label。如果在该Ability的skills属性中，actions的取值包含 \"action.system.home\"，entities取值中包含\"entity.system.home\"，则该Ability的label将同时作为应用的label。如果存在多个符合条件的Ability，则取位置靠前的Ability的label作为应用的label。  说明： 应用的\"icon\"和\"label\"是用户可感知配置项，需要区别于当前所有已有的应用\"icon\"或\"label\"（至少有一个不同）。该标签为资源文件中定义的字符串的引用，或以\"{}\"包括的字符串。该标签最大长度为255个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability的统一资源标识符。该标签最大长度为255个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，对于data类型的Ability不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "launchType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability的启动模式，支持\"multiton\"和\"singleton\"两种模式：  multiton：表示该Ability可以有多实例。该模式适用于大多数应用场景。  singleton：表示该Ability在所有任务栈中仅可以有一个实例。例如，具有全局唯一性的呼叫来电界面即采用\"singleton\"模式。该标签仅适用于默认设备、平板、智慧屏、车机、智能穿戴。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为\"singleton\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability是否可以被其他应用调用。  true：可以被其他应用调用。  false：不能被其他应用调用，包括无法被aa工具命令拉起应用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为\"false\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识其他应用的Ability调用此Ability时需要申请的权限集合，一个数组元素为一个权限名称。通常采用反向域名格式（最大255字节），取值为系统预定义的权限。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skills"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability能够接收的want的特征。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceCapability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability运行时要求设备具有的能力，采用字符串数组的格式表示。该标签为数组，支持最多配置512个元素，单个元素最大字节长度为64。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metaData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability的类型。取值范围如下：  page：表示基于Page模板开发的FA，用于提供与用户交互的能力。  service：表示基于Service模板开发的PA，用于提供后台运行任务的能力。  data：表示基于Data模板开发的PA，用于对外部提供统一的数据访问对象。  CA：表示支持其他应用以窗口方式调起该Ability。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "orientation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识该Ability的显示模式。该标签仅适用于page类型的Ability。取值范围如下：  unspecified：由系统自动判断显示方向。  landscape：横屏模式。  portrait：竖屏模式。  followRecent：跟随栈中最近的应用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为\"unspecified\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundModes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识后台服务的类型，可以为一个服务配置多个后台服务类型。该标签仅适用于service类型的Ability。取值范围如下：  dataTransfer：通过网络/对端设备进行数据下载、备份、分享、传输等。  audioPlayback：音频播放。  audioRecording：录音。  pictureInPicture：画中画、小窗口播放视频。  voip：音视频电话、VOIP。  location：定位、导航。  bluetoothInteraction：蓝牙扫描、连接、传输。  wifiInteraction：Wi-Fi扫描、连接、传输。  screenFetch：录屏、截屏。  multiDeviceConnection：多设备互联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "grantPermission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定是否可以向Ability内任何数据授予权限。  - true：表示可以向Ability内任何数据授予权限。  - false：表示不可以向Ability内任何数据授予权限。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readPermission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识读取Ability的数据所需的权限。该标签仅适用于data类型的Ability。取值为长度不超过255字节的字符串。该标签仅适用于默认设备、平板、智慧屏、车机、智能穿戴。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "writePermission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识向Ability写数据所需的权限。该标签仅适用于data类型的Ability。取值为长度不超过255字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "configChanges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability关注的环境变量集合。当已关注的环境变量更新后，Ability会收到onConfigurationUpdated回调。取值范围：  mcc：表示IMSI移动设备国家/地区代码（MCC）发生变更。典型场景：检测到SIM并更新MCC。  mnc：IMSI移动设备网络代码（MNC）发生变更。典型场景：检测到SIM并更新MNC。  locale：表示语言区域发生变更。典型场景：用户已为设备文本的文本显示选择新的语言类型。  layout：表示屏幕布局发生变更。典型场景：当前有不同的显示形态都处于活跃状态。  fontSize：表示字号发生变更。典型场景：用户已设置新的全局字号。  orientation：表示屏幕方向发生变更。典型场景：用户旋转设备。  density：表示显示密度发生变更。典型场景：用户可能指定不同的显示比例，或当前有不同的显示形态同时处于活跃状态。  size：显示窗口大小发生变更。  smallestSize：显示窗口较短边的边长发生变更。  colorMode：颜色模式发生变更。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability指定的任务栈。该标签仅适用于page类型的Ability。默认情况下应用中所有Ability同属一个任务栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为应用的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前Ability重用的目标Ability。该标签仅适用于page类型的Ability。如果配置了targetAbility属性，则当前Ability（即别名Ability）的属性中仅name、icon、label、visible、permissions、skills生效，其他属性均沿用targetAbility中的属性值。目标Ability必须与别名Ability在同一应用中，且在配置文件中目标Ability必须在别名之前进行声明。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。表示当前Ability不是一个别名Ability。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formsEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识Ability是否支持卡片（forms）功能。该标签仅适用于page类型的Ability。  true：支持卡片能力。  false：不支持卡片能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识服务卡片的属性。该标签仅当formsEnabled为\"true\"时，才能生效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcLanguage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability开发语言的类型，开发者创建工程时由开发者手动选择开发语言。取值如下：\"js\"、\"ets\"、\"java\"。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为\"js\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签标识Ability对应的JS组件代码路径，该标签最大长度为127字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uriPermission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识该Ability有权访问的应用程序数据。此属性由模式和路径子属性组成。此属性仅对类型提供者的能力有效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识该Ability启动页面图标资源文件的索引。该标签仅适用于page类型的Ability。取值示例：$media:icon。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowBackground"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识该Ability启动页面背景颜色资源文件的索引。该标签仅适用于page类型的Ability。取值示例：$color:red。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeMissionAfterTerminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签标识Ability销毁后是否从任务列表中移除任务。该标签仅适用于page类型的Ability。true表示销毁后移除任务， false表示销毁后不移除任务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不允许应用隐藏入口图标"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统对无图标应用实施严格管控，防止一些恶意应用故意配置无入口图标，导致用户找不到软件所在的位置，无法操作卸载应用，在一定程度上保证用户终端设备的安全。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "入口图标的设置:"
        })
      }), " 需要在配置文件（config.json）中abilities配置下设置icon，label以及skills，而且skills的配置下必须同时包含“action.system.home” 和 “entity.system.home”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\":{\n    \"abilities\": [{\n      \"icon\": \"$media:icon\",\n      \"label\": \"Login\",\n      \"skills\": [{\n        \"actions\": [\"action.system.home\"],\n        \"entities\": [\"entity.system.home\"],\n        \"uris\": []\n      }]\n    }],\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用确需隐藏入口图标，需要配置AllowAppDesktopIconHide应用特权。详细的入口图标及入口标签的显示规则如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HAP中包含Page类型的PageAbility\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["配置文件（config.json）中abilities配置中设置了入口图标\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["该应用没有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "系统将使用该PageAbility配置的icon作为入口图标，并显示在桌面上。用户点击该图标，页面跳转到该PageAbility首页。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "系统将使用该PageAbility配置的label作为入口标签，并显示在桌面上（如果没有配置label，返回包名）。"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["该应用具有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "桌面查询时不返回应用信息，不会在桌面上显示对应的入口图标和标签。"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["配置文件（config.json）中abilities配置中未设置入口图标\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["该应用没有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "系统将使用系统默认图标作为入口图标，并显示在桌面上。用户点击该图标，页面跳转到应用管理中对应的应用详情页面（参考图1）。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "系统将使用应用的包名作为入口标签，并显示在桌面上。"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["该应用具有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "桌面查询时不返回应用信息，不会在桌面上显示对应的入口图标和标签。"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HAP中不包含Page类型的PageAbility\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["该应用没有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "系统将使用系统默认图标作为入口图标，并显示在桌面上。用户点击该图标，页面跳转到应用管理中对应的应用详情页面（参考图1）。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "系统将使用应用的包名作为入口标签，并显示在桌面上。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["该应用具有隐藏图标的特权\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "桌面查询时不返回应用信息，不会在桌面上显示对应的入口图标和标签。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 应用的详情页示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721368)/* ["default"] */.A) + "",
        width: "360",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注：应用详情页面中显示的label可能与桌面上显示的不同。如果非Page类型的PageAbility配置了入口图标和label，那么详情页中显示的即为配置的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uripermission对象的内部结构",
      children: "uriPermission对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表9"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "uriPermission对象的内部结构说明"
        })
      })]
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
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uriPermission标识的路径，该标签最大字节长度为255个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uriPermission的匹配模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为default。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "abilities示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abilities\": [\n  {\n    \"name\": \".EntryAbility\",\n    \"description\": \"test main ability\",\n    \"icon\": \"$media:ic_launcher\",\n    \"label\": \"$string:example\",\n    \"launchType\": \"multiton\",\n    \"orientation\": \"unspecified\",\n    \"permissions\": [],\n    \"visible\": true,\n    \"skills\": [\n      {\n        \"actions\": [\n          \"action.system.home\"\n        ],\n        \"entities\": [\n          \"entity.system.home\"\n        ]\n      }\n    ],\n    \"configChanges\": [\n      \"locale\",\n      \"layout\",\n      \"fontSize\",\n      \"orientation\"\n    ],\n    \"type\": \"page\",\n    \"startWindowIcon\": \"$media:icon\",\n    \"startWindowBackground\": \"$color:red\",\n    \"removeMissionAfterTerminate\": true\n  },\n  {\n    \"name\": \".PlayService\",\n    \"description\": \"example play ability\",\n    \"icon\": \"$media:ic_launcher\",\n    \"label\": \"$string:example\",\n    \"launchType\": \"multiton\",\n    \"orientation\": \"unspecified\",\n    \"visible\": false,\n    \"skills\": [\n      {\n        \"actions\": [\n          \"action.play.music\",\n          \"action.stop.music\"\n        ],\n        \"entities\": [\n          \"entity.audio\"\n        ]\n      }\n    ],\n    \"type\": \"service\",\n    \"backgroundModes\": [\n      \"audioPlayback\"\n    ]\n  },\n  {\n    \"name\": \".UserADataAbility\",\n    \"type\": \"data\",\n    \"uri\": \"dataability://com.example.world.test.UserADataAbility\",\n    \"visible\": true\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skills对象的内部结构",
      children: "skills对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表10"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "skills对象的内部结构说明"
        })
      })]
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
            children: "actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识能够接收的want的action值，可以包含一个或多个action。取值通常为系统预定义的action值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识能够接收的want的Ability的类别（如视频、桌面应用等），可以包含一个或多个entity。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uris"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该标签标识向want过滤器添加数据规范集合。该规范可以是只有数据类型（mimeType属性），可以是只有URI，也可以是既有数据类型又有URI。  URI由其各个部分的单独属性指定：", (0,jsx_runtime.jsxs)(_components.scheme, {
              children: ["://", (0,jsx_runtime.jsxs)(_components.host, {
                children: [":", (0,jsx_runtime.jsxs)(_components.port, {
                  children: ["[", (0,jsx_runtime.jsx)(_components.path, {})]
                })]
              })]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.pathstartwith, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.pathregex, {
              children: "]。该标签可缺省，缺省值为空。  其中，scheme字段配置为uri时必配；当只设置数据类型（mimeType）时，则scheme字段为非必配项。"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uris对象的内部结构",
      children: "uris对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表11"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "uris对象的内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识uri的scheme值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识uri的host值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识uri的port值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pathStartWith"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识uri的pathStartWith值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识uri的path值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pathRegx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识uri的pathRegx值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识uri的type值。type为MIME-TYPE属性，为资源的媒体类型，常见的类型有\"audio/aac\"，\"text/css\"等。  注意：只支持*/*、mainType/*的通配符格式，不支持mainType/subType.*的通配符格式，mainType为标准媒体类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "skills示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"skills\": [\n  {\n    \"actions\": [\n      \"action.system.home\"\n    ],\n    \"entities\": [\n      \"entity.system.home\"\n    ],\n    \"uris\": [\n      {\n        \"scheme\": \"http\",\n        \"host\": \"www.example.com\",\n        \"port\": \"8080\",\n        \"path\": \"query/student/name\",\n        \"type\": \"text/*\"\n      }\n    ]\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reqpermissions权限申请",
      children: "reqPermissions权限申请"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表12"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "reqPermissions权限申请字段说明"
        })
      })]
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
            children: "需要使用的权限名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述申请权限的原因。需要做多语种适配。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分情况：当申请的权限为user_grant时，必须填写此字段，否则不允许在应用市场上架；其他权限可缺省，缺省为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usedScene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述权限使用的场景和时机。场景类型如下两种：  - ability：ability的名称，可配置多个。  - when：调用时机，可填的值有inuse（使用时）、always（始终）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。  when可缺省，缺省值为\"inuse\"。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usedscene对象内部结构",
      children: "usedScene对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表13"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "usedScene对象内部结构说明"
        })
      })]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识哪些Ability需要此权限，里面配置Ability的名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以缺省，缺省表示所有Ability都需要此权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "when"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识此权限的使用时间：  inuse: 使用时需要此权限。  always: 所有时间都需要此权限。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "js对象的内部结构",
      children: "js对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表14"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "js对象的内部结构说明"
        })
      })]
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
            children: "标识JS Component的名字。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识JS Component的页面用于列举JS Component中每个页面的路由信息，格式为“页面路径+页面名称”。其中，页面路径是以当前Ability的srcPath字段取值为基准，例如srcPath取值为EntryAbility，则JS Component页面路径需要从EntryAbility的下一层开始描述。该标签取值为数组，数组第一个元素代表JS FA首页。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于定义与显示窗口相关的配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值见表15。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识JS应用的类型。取值范围如下：  normal：标识该JS Component为应用实例。  form：标识该JS Component为卡片实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为\"normal\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义JS组件的开发模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "window对象的内部结构",
      children: "window对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表15"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "window对象的内部结构说明"
        })
      })]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mode对象的内部结构",
      children: "mode对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表16"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "mode对象的内部结构说明"
        })
      })]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义JS组件的功能类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串，取值为\"pageAbility\"、\"form\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为pageAbility。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义JS组件的语法类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串，取值为\"hml\"，\"ets\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，默认值为\"hml\"。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "js示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"js\": [\n  {\n    \"name\": \".EntryAbility\",\n    \"pages\": [\n      \"pages/index\",\n      \"pages/detail/detail\"\n    ],\n    \"window\": {\n      \"designWidth\": 720,\n      \"autoDesignWidth\": false\n    },\n    \"type\": \"form\",\n    \"mode\": {\n      \"syntax\": \"ets\",\n      \"type\": \"pageAbility\"\n    }\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shortcuts对象的内部结构",
      children: "shortcuts对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表17"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "shortcuts对象的内部结构说明"
        })
      })]
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
            children: "shortcutId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识快捷方式的ID。字符串的最大长度为63字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识快捷方式的标签信息，即快捷方式对外显示的文字描述信息。取值可以是描述性内容，也可以是标识label的资源索引。字符串最大长度为63字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识快捷方式的图标信息。取值为表示icon的资源索引。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "intents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识快捷方式内定义的目标intent信息集合，每个intent可配置两个子标签，targetClass, targetBundle。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intents对象的内部结构",
      children: "intents对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表18"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "intents对象的内部结构说明"
        })
      })]
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
            children: "targetClass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识快捷方式目标类名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetBundle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识快捷方式目标Ability所在应用的包名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shortcuts示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"shortcuts\": [\n  {\n    \"shortcutId\": \"id\",\n    \"label\": \"$string:shortcut\",\n    \"intents\": [\n      {\n        \"targetBundle\": \"com.example.world.test\",\n        \"targetClass\": \"com.example.world.test.entry.EntryAbility\"\n      }\n    ]\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "forms对象的内部结构",
      children: "forms对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表19"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "forms对象的内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "标识卡片的类名。字符串最大长度为127字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片的描述。取值可以是描述性内容，也可以是对描述性内容的资源索引，以支持多语言。字符串最大长度为255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isDefault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识该卡片是否为默认卡片，每个Ability有且只有一个默认卡片。  true：默认卡片。  false：非默认卡片。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片的类型。取值范围如下：  JS：JS卡片。  Java：Java卡片。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colorMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片的主题样式，取值范围如下：  auto：自适应。  dark：深色主题。  light：浅色主题。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为\"auto\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportDimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片支持的外观规格，取值范围：  1 * 2：表示1行2列的二宫格。  2 * 1：表示2行1列的二宫格。  2 * 2：表示2行2列的四宫格。  2 * 4：表示2行4列的八宫格。  4 * 4：表示4行4列的十六宫格。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultDimension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片的默认外观规格，取值必须在该卡片supportDimensions配置的列表中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片是否支持周期性刷新，取值范围：  true：表示支持周期性刷新，可以在定时刷新（updateDuration）和定点刷新（scheduledUpdateTime）两种方式任选其一，优先选择定时刷新。  false：表示不支持周期性刷新。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scheduledUpdateTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片的定点刷新的时刻，采用24小时制，精确到分钟。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为\"0:0\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片定时刷新的更新周期，单位为30分钟，取值为自然数。  当取值为0时，表示该参数不生效。  当取值为正整数N时，表示刷新周期为30*N分钟。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为\"0\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formConfigAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识用于调整卡片的设施或活动的名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jsComponentName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识JS卡片的Component名称。字符串最大长度为127字节。仅当卡片类型为JS卡片时，需要配置该标签。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metaData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识卡片的自定义信息，包含customizeData数组标签。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formVisibleNotify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识是否允许卡片使用卡片可见性通知。  true：允许。  false：不允许。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizedata对象内部结构",
      children: "customizeData对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表20"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "customizeData对象内部结构说明"
        })
      })]
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
            children: "标识数据项的键名称。字符串最大长度为255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识数据项的值。字符串最大长度为255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前custom数据的格式，取值为表示extra的资源值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "forms示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"forms\": [\n  {\n    \"name\": \"Form_Js1\",\n    \"description\": \"It's Js Form\",\n    \"type\": \"JS\",\n    \"jsComponentName\": \"card\",\n    \"colorMode\": \"auto\",\n    \"isDefault\": true,\n    \"updateEnabled\": true,\n    \"scheduledUpdateTime\": \"11:00\",\n    \"updateDuration\": 1,\n    \"defaultDimension\": \"2*2\",\n    \"supportDimensions\": [\n      \"2*2\",\n      \"2*4\",\n      \"4*4\"\n    ]\n  },\n  {\n    \"name\": \"Form_Js2\",\n    \"description\": \"It's JS Form\",\n    \"type\": \"JS\",\n    \"colorMode\": \"auto\",\n    \"isDefault\": false,\n    \"updateEnabled\": true,\n    \"scheduledUpdateTime\": \"21:05\",\n    \"updateDuration\": 1,\n    \"defaultDimension\": \"1*2\",\n    \"supportDimensions\": [\n      \"1*2\"\n    ],\n    \"landscapeLayouts\": [\n      \"$layout:ability_form\"\n    ],\n    \"portraitLayouts\": [\n      \"$layout:ability_form\"\n    ],\n    \"formConfigAbility\": \"ability://com.example.myapplication.fa/.EntryAbility\",\n    \"metaData\": {\n      \"customizeData\": [\n        {\n          \"name\": \"originWidgetName\",\n          \"value\": \"com.example.weather.testWidget\"\n        }\n      ]\n    }\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "distrofilter对象的内部结构",
      children: "distroFilter对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表21"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "distroFilter对象的内部结构说明"
        })
      })]
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
            children: "apiVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识支持的apiVersion范围。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "screenShape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识屏幕形状的支持策略。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "screenWindow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用运行时窗口的分辨率支持策略。该字段仅支持对轻量级智能穿戴设备进行配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "screenDensity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识屏幕的像素密度（dpi：Dots Per Inch）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "countryCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识分发应用时的国家码。具体值参考ISO-3166-1的标准，支持多个国家和地区的枚举定义。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apiversion对象的内部结构",
      children: "apiVersion对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表22"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "apiVersion对象的内部结构说明"
        })
      })]
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
            children: "标识该子属性取值规则。配置为“exclude”或“include”。  - exclude：表示需要排除的value属性。  - include：表示需要包含的value属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持的取值为API Version存在的整数值，例如4、5、6。场景示例：某应用，针对相同设备型号，同时在网的为使用API 5和API 6开发的两个软件版本，则允许上架2个entry类型的安装包，分别支持到对应设备侧软件版本的分发。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "screenshape对象的内部结构",
      children: "screenShape对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表23"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "screenShape对象的内部结构说明"
        })
      })]
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
            children: "标识该子属性取值规则。配置为“exclude”或“include”。  - exclude：表示需要排除的value属性。  - include：表示需要包含的value属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "形状说明。  取值为:  - circle：表示圆形。  - rect：表示矩形。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "screenwindow对象的内部结构",
      children: "screenWindow对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表24"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "screenWindow对象的内部结构说明"
        })
      })]
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
            children: "标识该子属性取值规则。配置为“exclude”或“include”。  - exclude：表示需要排除的value属性。  - include：表示需要包含的value属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用运行时窗口的分辨率大小，格式要求数字*数字，例如466*466。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "screendensity对象的内部结构",
      children: "screenDensity对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表25"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "screenDensity对象的内部结构说明"
        })
      })]
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
            children: "标识该子属性取值规则。配置为“exclude”或“include”。  - exclude：表示需要排除的value属性。  - include：表示需要包含的value属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围如下：  sdpi：表示小规模的屏幕密度（Small-scale Dots Per Inch），适用于dpi取值为（0,120]的设备。  mdpi：表示中规模的屏幕密度(Medium-scale Dots Per Inch)，适用于dpi取值为（120,160]的设备。  ldpi：表示大规模的屏幕密度(Large-scale Dots Per Inch)，适用于dpi取值为（160,240]的设备。  xldpi：表示特大规模的屏幕密度(Extra Large-scale Dots Per Inch)，适用于dpi取值为（240,320]的设备。  xxldpi：表示超大规模的屏幕密度(Extra Extra Large-scale Dots Per Inch)，适用于dpi取值为（320,480]的设备。  xxxldpi：表示超特大规模的屏幕密度(Extra Extra Extra Large-scale Dots Per Inch)，适用于dpi取值为（480,640]的设备。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "countrycode对象的内部结构",
      children: "countryCode对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表26"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "countryCode对象的内部结构说明"
        })
      })]
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
            children: "标识该子属性取值规则。配置为“exclude”或“include”。  - exclude：表示需要排除的value属性。  - include：表示需要包含的value属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签标识应用需要分发的国家码，标签为字符串数组，子串表示支持的国家或地区，由两个大写字母表示。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "distroFilter示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"distroFilter\":  {\n  \"apiVersion\": {\n    \"policy\": \"include\",\n    \"value\": [4,5]\n  },\n  \"screenShape\": {\n    \"policy\": \"include\",\n    \"value\": [\"circle\",\"rect\"]\n  },\n  \"screenWindow\": {\n    \"policy\": \"include\",\n    \"value\": [\"454*454\",\"466*466\"]\n  },\n  \"screenDensity\":{\n    \"policy\": \"exclude\",\n    \"value\": [\"ldpi\",\"xldpi\"]\n  },\n  \"countryCode\": {\n    \"policy\":\"include\",\n    \"value\":[\"CN\",\"HK\"]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "commonevents对象的内部结构",
      children: "commonEvents对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表27"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "commonEvents对象的内部结构说明"
        })
      })]
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
            children: "标识静态公共事件名称，该标签最大长度为127字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "permission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此标签标识实现静态公共事件所需要申请的权限，该标签最大长度为255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识配置当前静态公共事件要携带的附加数据数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签用于配置当前静态公共事件的分类数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此标签标识可接收的意图的一组事件值。一般由系统预定义，也可以自定义。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "commonEvents示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"commonEvents\": [\n  {\n    \"name\": \".EntryAbility\",\n    \"permission\": \"ohos.permission.GET_BUNDLE_INFO\",\n    \"data\": [\n      \"com.example.demo\",\n      \"100\"\n    ],\n    \"events\": [\n      \"install\",\n      \"update\"\n    ]\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testrunner对象的内部结构",
      children: "testRunner对象的内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表28"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "testRunner对象的内部结构说明"
        })
      })]
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
            children: "标识测试框架对象名称，该标签最大长度为255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识测试框架代码路径，该标签最大长度为255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"testRunner\": {\n  \"name\": \"myTestRunnerName\",\n  \"srcPath\": \"etc/test/TestRunner.ts\"\n}\n"
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
721368(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797828-7a7bf31af7289897beb07877cb93f510.jpg");

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