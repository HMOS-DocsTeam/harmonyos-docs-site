"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["14211"], {
72076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_configuration_file_stage_app_configuration_file_app_configuration_file_md_9c0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-configuration-file-stage-app-configuration-file-app-configuration-file-md-9c0.json
var site_docs_development_fundamentals_application_configuration_file_stage_app_configuration_file_app_configuration_file_md_9c0_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-configuration-file-stage/app-configuration-file/app-configuration-file","title":"app.json5配置文件","description":"应用级配置文件，包含应用的全局配置信息和特定设备类型的配置信息，用于向编译工具、操作系统和应用市场提供应用的基本信息。每个工程下必须包含一个app.json5配置文件，文件所在目录为工程名称/AppScope/app.json5。","source":"@site/docs/development-fundamentals/application-configuration-file-stage/app-configuration-file/app-configuration-file.md","sourceDirName":"development-fundamentals/application-configuration-file-stage/app-configuration-file","slug":"/development-fundamentals/application-configuration-file-stage/app-configuration-file/","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-stage/app-configuration-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"app.json5配置文件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用配置文件概述（Stage模型）","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-stage/application-configuration-file-overview-stage/"},"next":{"title":"module.json5配置文件","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-stage/module-configuration-file/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-configuration-file-stage/app-configuration-file/app-configuration-file.md


const frontMatter = {
	title: 'app.json5配置文件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'app.json5配置文件';

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
  "value": "appEnvironments标签",
  "id": "appenvironments标签",
  "level": 2
}, {
  "value": "multiAppMode标签",
  "id": "multiappmode标签",
  "level": 2
}, {
  "value": "configuration标签",
  "id": "configuration标签",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "appjson5配置文件",
        children: "app.json5配置文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用级配置文件，包含应用的全局配置信息和特定设备类型的配置信息，用于向编译工具、操作系统和应用市场提供应用的基本信息。每个工程下必须包含一个app.json5配置文件，文件所在目录为工程名称/AppScope/app.json5。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(285258)/* ["default"] */.A) + "",
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
      children: "先通过一个示例，了解app.json5配置文件的结构和内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    \"bundleName\": \"com.application.myapplication\",\n    \"vendor\": \"example\",\n    \"versionCode\": 1000000,\n    \"versionName\": \"1.0.0\",\n    \"icon\": \"$media:layered_image\",\n    \"label\": \"$string:app_name\",\n    \"description\": \"$string:description_application\",\n    \"minAPIVersion\": 9,\n    \"targetAPIVersion\": 9,\n    \"debug\": false,\n    \"car\": {\n      \"minAPIVersion\": 8\n    },\n    \"appEnvironments\": [\n      {\n        \"name\":\"name1\",\n        \"value\": \"value1\"\n      }\n    ],\n    \"maxChildProcess\": 5,\n    \"multiAppMode\": {\n      \"multiAppModeType\": \"appClone\",\n      \"maxCount\": 5\n    },\n    \"hwasanEnabled\": false,\n    \"ubsanEnabled\": false,\n    \"cloudFileSyncEnabled\": false,\n    \"cloudStructuredDataSyncEnabled\": false,\n    \"configuration\": \"$profile:configuration\",\n    \"assetAccessGroups\": [\n      \"com.ohos.photos\",\n      \"com.ohos.screenshot\",\n      \"com.ohos.note\"\n    ],\n    \"startMode\": \"mainTask\",\n    \"buildVersion\": \"1.0.0\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件标签",
      children: "配置文件标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "app.json5配置文件包含以下标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " app.json5配置文件标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "标识应用的Bundle名称，用于标识应用的唯一性。命名规则如下 ：  - 必须为以点号（.）分隔的字符串，且至少包含三段，每段中仅允许使用英文字母、数字、下划线（_）。  - 首段以英文字母开头，非首段以数字或英文字母开头，每一段以数字或者英文字母结尾。  - 不允许多个点号（.）连续出现。  - 字符串最小长度为7字节，最大长度128字节。  - 推荐采用反域名形式命名（如“com.example.demo”，建议第一级为域名后缀com，第二级为厂商/个人名，第三级为应用名，也可以多级）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的Bundle类型。支持的取值如下：  - app：当前Bundle为应用。  - atomicService：当前Bundle为元服务。  - shared：当前Bundle为共享库应用，仅支持系统应用配置，三方应用配置后应用无法安装。  - appService：当前Bundle为系统级共享库应用，仅系统应用生效。  - appPlugin：当前Bundle为应用的插件包。从API version 19开始，支持该标签。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为app。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用是否可调试。  - true：可调试，一般用于开发阶段。  - false：不可调试，一般用于发布阶段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由DevEco Studio编译构建时生成。该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用的图标，取值为图标资源文件的索引。支持配置单层图标和分层图标，配置规则和示例请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-typical-scenarios/layered-image",
              children: "配置应用图标和名称"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用的名称，取值为字符串资源的索引，以支持多语言，字符串长度不超过63字节，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-typical-scenarios/layered-image",
              children: "配置应用图标和名称"
            }), " 。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的描述信息，取值为长度不超过255字节的字符串，内容为描述信息的字符串或者字符串资源索引。该标签可用于应用信息展示，如在应用的关于页面，取该标签展示应用描述信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vendor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对应用开发厂商的描述，取值为长度不超过255字节的字符串。该标签可用于展示开发厂商信息，如在应用的关于页面，取该标签展示开发厂商信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的版本号，取值范围为0~2147483647。此数字仅用于确定某个版本是否比另一个版本新，数值越大表示版本越新。  开发者可以将该值设置为任何正整数，但是必须确保应用的新版本都使用比旧版本更大的值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识向用户展示的应用版本号。  取值为长度不超过127字节的字符串：  1. 仅由数字和点构成，推荐采用“A.B.C.D”四段式的形式。四段式推荐的含义如下所示。  第一段：主版本号/Major，重大修改的版本，如实现新的大功能或重大变化。  第二段：次版本号/Minor，表示实现较突出的特点，如新功能添加或大问题修复。  第三段：特性版本号/Feature，标识规划的新版本特性。  第四段：修订版本号/Patch，表示维护版本，如修复bug。  2. 包含花括号{}的字符串，且字符串只能包含数字、字母、下划线、点号、花括号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minCompatibleVersionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用能够兼容的最低历史版本号，用于应用多设备之间协同、数据迁移、跨设备兼容性判断，该标签为预留字段，暂未使用。取值范围为0~2147483647。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值等于versionCode标签值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用运行所需的最小SDK API版本。取值范围为0~2147483647。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该标签在应用编译构建时自动生成，手动配置无效，对应", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section45865492619",
              children: "工程级build-profile.json5文件"
            }), "中的compatibleSdkVersion标签。相关标签与应用兼容性关系参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility",
              children: "应用兼容性说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用运行需要的API目标版本。取值范围为0~2147483647。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该标签在应用编译构建时自动生成，手动配置无效，对应", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section45865492619",
              children: "工程级build-profile.json5文件"
            }), "中的targetSdkVersion标签，如果未配置targetSdkVersion标签，则由工程级build-profile.json5文件中的compileSdkVersion自动生成。相关标签与应用兼容性关系参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility",
              children: "应用兼容性说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "apiReleaseType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用运行需要的API目标版本的类型，采用字符串类型表示。取值为“CanaryN”、“BetaN”或者“ReleaseN”，其中，N代表大于零的整数。  - Canary：受限发布的版本。  - Beta：公开发布的Beta版本。  - Release：公开发布的正式版本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用编译构建时根据当前使用的SDK的版本类型自动生成。手动配置无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用是否能访问应用的安装目录，仅预置的系统应用配置生效，三方应用配置不生效。  - true：当前应用可以访问应用的安装目录。  - false：当前应用不可以访问应用的安装目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multiProjects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前工程是否支持多个工程的联合开发。  - true：当前工程支持多个工程的联合开发。多工程开发可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-multi-projects",
              children: "多工程构建"
            }), "。  - false：当前工程不支持多个工程的联合开发。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该标签在应用编译构建时自动生成，手动配置无效，对应", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
              children: "工程级build-profile.json5文件"
            }), "中的multiProjects标签。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "asanEnabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用程序是否开启", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-asan",
              children: "asan检测"
            }), "，用于辅助定位buffer越界造成的crash问题。  - true：当前工程开启asan检测。  - false：当前工程不开启asan检测。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tablet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对tablet设备做的特殊配置，可以配置的属性标签有上文提到的：minAPIVersion。  如果使用该属性对tablet设备做了特殊配置，则应用在tablet设备中会采用此处配置的属性值，并忽略在app.json5公共区域的属性值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省时tablet设备使用app.json5公共区域的属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对tv设备做的特殊配置，可以配置的属性标签有上文提到的：minAPIVersion。  如果使用该属性对tv设备做了特殊配置，则应用在tv设备中会采用此处配置的属性值，并忽略在app.json5公共区域的属性值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省时tv设备使用app.json5公共区域的属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wearable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对wearable设备做的特殊配置，可以配置的属性标签有上文提到的：minAPIVersion。  如果使用该属性对wearable设备做了特殊配置，则应用在wearable设备中会采用此处配置的属性值，并忽略在app.json5公共区域的属性值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省时wearable设备使用app.json5公共区域的属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对car设备做的特殊配置，可以配置的属性标签有上文提到的：minAPIVersion。  如果使用该属性对car设备做了特殊配置，则应用在car设备中会采用此处配置的属性值，并忽略在app.json5公共区域的属性值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省时car设备使用app.json5公共区域的属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对default设备做的特殊配置，可以配置的属性标签有上文提到的：minAPIVersion。  如果使用该属性对default设备做了特殊配置，则应用在default设备中会采用此处配置的属性值，并忽略在app.json5公共区域的属性值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省时default设备使用app.json5公共区域的属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetBundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前包所指定的目标应用，标签值的取值规则和范围与bundleName标签一致。配置该标签的应用为具有overlay特征的应用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetPriority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用的优先级，取值范围为1~100。配置targetBundleName标签之后，才支持配置该标签。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "generateBuildHash"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前应用的所有HAP和HSP是否由打包工具生成哈希值。  该标签配置为true时，该应用下的所有HAP和HSP都会由打包工具生成对应的哈希值。系统OTA升级时，若应用的versionCode保持不变，可根据哈希值判断应用是否需要升级。  - true：当前应用下所有HAP和HSP都会由打包工具生成对应的哈希值。  - false：当前应用下所有HAP和HSP都不会由打包工具生成对应的哈希值。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对PC/2in1设备做的特殊配置，可以配置的属性标签为minAPIVersion。  如果使用该属性对PC/2in1设备做了特殊配置，则应用在PC/2in1设备中会采用此处配置的属性值，并忽略在app.json5公共区域配置的属性值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省时PC/2in1设备使用app.json5公共区域配置的属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GWPAsanEnabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用程序是否开启", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-gwpasan-detection#section2735718353",
              children: "GWP-asan"
            }), "堆内存检测工具，用于对内存越界、内存释放后使用等内存破坏问题进行分析。  - true：应用程序开启GWP-asan检测。  - false：应用程序不开启GWP-asan检测。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#appenvironments%E6%A0%87%E7%AD%BE",
              children: "appEnvironments"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用配置的应用环境变量。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxChildProcess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用自身可创建的子进程的最大个数，取值范围为0到512，0表示不限制，当应用有多个模块时，以entry模块的配置为准。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省时使用系统配置的默认值512。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#multiappmode%E6%A0%87%E7%AD%BE",
              children: "multiAppMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用配置的多开模式。仅bundleType为app的应用的entry或feature模块配置有效，存在多个模块时，以entry模块的配置为准。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hwasanEnabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用程序是否开启", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan",
              children: "HWAsan检测"
            }), "。HWAsan(HardWare-assisted AddressSanitizer)是利用Top-Byte-Ignore特性实现的增强版Asan，与Asan相比HWAsan的内存开销更低，检测到的内存错误范围更大。  - true：当前工程开启HWAsan检测。  - false：当前工程不开启HWAsan检测。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 14开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tsanEnabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用程序是否开启使用TSan检测线程错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-tsan-detection",
              children: "TSan（ThreadSanitizer）"
            }), "是一个检测数据竞争的工具。  - true：当前工程开启TSan检测。  - false：当前工程不开启TSan检测。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ubsanEnabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用程序是否", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-ubsan",
              children: "使用UBSan检测未定义行为"
            }), "。  UBsan(Undefined Behavior Sanitizer)是一个用于运行时检测程序中未定义行为的工具，旨在帮助开发人员发现代码中潜在的错误和漏洞。  - true：当前工程开启UBsan检测。  - false：当前工程不开启UBsan检测。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 14开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cloudFileSyncEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用是否启用端云文件同步能力。  - true：当前应用启用端云文件同步能力。  - false：当前应用不启用端云文件同步能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cloudStructuredDataSyncEnabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识当前应用是否启用端云结构化数据同步能力。  - true：当前应用启用端云结构化数据同步能力。  - false：当前应用不启用端云结构化数据同步能力。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 20开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#configuration%E6%A0%87%E7%AD%BE",
              children: "configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前应用字体大小跟随系统配置的能力。  该标签是一个profile文件资源，用于指定描述应用字体大小跟随系统变更的配置文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省时configuration使用不跟随系统默认设定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assetAccessGroups"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置应用的Group ID，它和Developer ID一起组成群组信息。  打包HAP时，DevEco使用开发者证书对群组信息签名，其中群组信息由Developer ID（由应用市场分配）+ Group ID（开发者配置）组成。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该标签仅在应用主模块（即module.json5中的type字段配置为entry）下生效。  从API version 18开始，支持该标签。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appPreloadPhase"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/preload-application",
              children: "应用预加载"
            }), "到不同阶段。支持的取值如下：  -processCreated：预加载到进程创建完成阶段。  -abilityStageCreated：预加载到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage",
              children: "AbilityStage"
            }), "创建完成阶段。  -windowStageCreated：预加载到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "WindowStage"
            }), "创建完成阶段。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 20开始，支持该标签。  仅在PC/2in1设备上生效。  仅在应用的entry模块配置有效。  该标签仅表示应用自身是否为预加载到所配置阶段做好了准备，最终能否预加载还需要由系统根据用户习惯等信息来决策。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省时不进行预加载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage#%E5%BA%94%E7%94%A8%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F%E9%85%8D%E7%BD%AE",
              children: "startMode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置应用的启动模式，支持的取值如下：  - mainTask：主任务模式，表示图标启动后打开主UIAbility。  - recentTask：最近任务模式，表示图标启动后打开最近使用的UIAbility。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 20开始，支持该标签。  仅在launchType为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type#singleton%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F",
              children: "单实例模式"
            }), "时生效。  该标签仅支持phone和tablet设备(不包含自由多窗)。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为mainTask。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildVersion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用的构建版本号，建议采用“A.B.C”三段式。三段式建议的含义如下：  第一段：主版本号/Major，用于标识重大修改的版本，例如实现新的重大特性或重大变化。  第二段：次版本号/Minor，用于表示实现较突出的特性，例如新特性添加或大问题修复。  第三段：特性版本号/Feature，用于标识规划的新版本特性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 23开始，支持该标签。  字符串格式要求如下：  - 字符串最小长度为1字节，最大长度18字节。  - 字符串由数字和'.'组成。  - '.'的数量限制0到2个，不能以'.'开头和结尾，也不能相邻。  - 数字段可以为0，但不能以0开头，如\"02\"，\"0123\"。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributedNotificationEnabled(deprecated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用是否开启分布式通知，当开启分布式通知时，同一分布式组网下的两个设备（A和B），当设备A收到一条消息时，设备B会收到一条分布式消息用于设备B的使用者去查看设备A的消息。  - true：开启。  - false：不开启。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 9开始废弃。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entityType(deprecated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用的类别，包括：  - game：游戏类。  - media：影音类。  - communication：社交通信类。  - news：新闻类。  - travel：出行类。  - utility：工具类。  - shopping：购物类。  - education：教育类。  - kids：少儿类。  - business：商务类。  - photography：拍摄类。  - unspecified：其他，不属于上述类。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 9开始废弃。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省为unspecified。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keepAlive(deprecated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用程序是否保持活动状态。此属性仅在使用系统应用或特权应用时生效，不对三方应用开放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 9开始废弃。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removable(deprecated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用是否可移除。此属性仅在系统应用或特权应用使用时生效，不对三方应用开放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 9开始废弃。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleton(deprecated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用程序是否为单例模式。此属性仅在使用系统应用或特权应用时生效，不对三方应用开放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 9开始废弃。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "userDataClearable(deprecated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识是否允许应用程序清除用户数据。此属性仅在使用系统应用或特权应用时生效，不对三方应用开放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 9开始废弃。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为true。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appenvironments标签",
      children: "appEnvironments标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此标签标识应用配置的环境变量。应用运行时有时会依赖一些三方库，这些三方库会使用到一些自定义的环境变量，为了不修改三方库的实现逻辑，可以在工程的配置文件中设置自定义的环境变量，以供运行时使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
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
        children: "{\n  \"app\": {\n    // ...\n    \"appEnvironments\": [\n      {\n        \"name\":\"name1\",\n        \"value\": \"value1\"\n      }\n    ],\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multiappmode标签",
      children: "multiAppMode标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用多开模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " multiAppMode标签说明"]
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
            children: "multiAppModeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用多开模式类型，支持的取值如下：  - multiInstance：多实例模式。该标签仅支持2in1设备，常驻进程不支持该标签。  - appClone：应用分身模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxCount"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识最大允许的应用多开个数，支持的取值如下：  - multiInstance模式：取值范围1", (0,jsx_runtime.jsx)(_components.del, {
              children: "10。  - appClone模式：取值范围1"
            }), "5。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "multiAppMode标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    // ...\n    \"multiAppMode\": {\n      \"multiAppModeType\": \"appClone\",\n      \"maxCount\": 5\n    },\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration标签",
      children: "configuration标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该标签对应一个profile文件资源，对应文件用于配置应用字体大小是否跟随系统变更。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "configuration标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    // ...\n    \"configuration\": \"$profile:configuration\",\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发视图的AppScope/resources/base/profile下面定义配置文件configuration.json，其中文件名\"configuration\"可自定义，需要和configuration标签指定的文件资源对应。配置文件中列举了设置当前应用字体大小跟随系统变化所需要的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " configuration标签说明"]
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
            children: "fontSizeScale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用字体大小是否跟随系统，支持的取值如下：  - followSystem：跟随系统。  - nonFollowSystem：不跟随系统。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为nonFollowSystem。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSizeMaxScale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用字体大小选择跟随系统后，配置的应用字体最大放大倍数，支持的取值为：1、1.15、1.3、1.45、1.75、2、3.2。  例如配置应用字体最大放大倍数为1.75，系统字体标准大小为10fp。  （1）如果设置中调整系统字体放大倍数为1.5倍，应用会跟随系统一起调整为15fp。  （2）如果设置中调整系统字体放大倍数为2倍，此时系统的字体大小为20fp，但由于应用配置的最大放大倍数为1.75，所以此时应用的字体大小为17.5fp。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "  fontSizeScale为nonFollowSystem时，该项不生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为3.2。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "configuration标签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"configuration\": {\n    \"fontSizeScale\": \"followSystem\",\n    \"fontSizeMaxScale\": \"3.2\"\n  }\n}\n"
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
285258(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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