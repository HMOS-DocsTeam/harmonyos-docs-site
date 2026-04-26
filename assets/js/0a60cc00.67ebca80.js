"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["285187"], {
428857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_file_ide_hvigor_build_profile_ide_hvigor_build_profile_md_0a6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-file-ide-hvigor-build-profile-ide-hvigor-build-profile-md-0a6.json
var site_docs_ide_hvigor_configuration_file_ide_hvigor_build_profile_ide_hvigor_build_profile_md_0a6_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration-file/ide-hvigor-build-profile/ide-hvigor-build-profile","title":"模块级build-profile.json5文件","description":"配置文件结构","source":"@site/docs/ide-hvigor-configuration-file/ide-hvigor-build-profile/ide-hvigor-build-profile.md","sourceDirName":"ide-hvigor-configuration-file/ide-hvigor-build-profile","slug":"/ide-hvigor-configuration-file/ide-hvigor-build-profile/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-build-profile/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"模块级build-profile.json5文件","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"工程级build-profile.json5文件","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-build-profile-app/"},"next":{"title":"多模块管理","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-multi-module/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration-file/ide-hvigor-build-profile/ide-hvigor-build-profile.md


const frontMatter = {
	title: '模块级build-profile.json5文件',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '模块级build-profile.json5文件';

const assets = {

};



const toc = [{
  "value": "配置文件结构",
  "id": "配置文件结构",
  "level": 2
}, {
  "value": "配置文件字段说明",
  "id": "配置文件字段说明",
  "level": 2
}, {
  "value": "targets",
  "id": "targets",
  "level": 2
}, {
  "value": "config",
  "id": "config",
  "level": 2
}, {
  "value": "source",
  "id": "source",
  "level": 2
}, {
  "value": "distroFilter/distributionFilter",
  "id": "distrofilterdistributionfilter",
  "level": 2
}, {
  "value": "apiVersion",
  "id": "apiversion",
  "level": 3
}, {
  "value": "screenShape",
  "id": "screenshape",
  "level": 3
}, {
  "value": "screenWindow",
  "id": "screenwindow",
  "level": 3
}, {
  "value": "screenDensity",
  "id": "screendensity",
  "level": 3
}, {
  "value": "countryCode",
  "id": "countrycode",
  "level": 3
}, {
  "value": "atomicService",
  "id": "atomicservice",
  "level": 2
}, {
  "value": "abilities",
  "id": "abilities",
  "level": 2
}, {
  "value": "buildOption",
  "id": "buildoption",
  "level": 2
}, {
  "value": "resOptions",
  "id": "resoptions",
  "level": 3
}, {
  "value": "sourceOption",
  "id": "sourceoption",
  "level": 3
}, {
  "value": "napiLibFilterOption",
  "id": "napilibfilteroption",
  "level": 3
}, {
  "value": "arkOptions",
  "id": "arkoptions",
  "level": 3
}, {
  "value": "packingOptions",
  "id": "packingoptions",
  "level": 3
}, {
  "value": "removePermissions",
  "id": "removepermissions",
  "level": 3
}, {
  "value": "compression",
  "id": "compression",
  "level": 2
}, {
  "value": "media",
  "id": "media",
  "level": 3
}, {
  "value": "filters",
  "id": "filters",
  "level": 3
}, {
  "value": "buildModeBinder",
  "id": "buildmodebinder",
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
        id: "模块级build-profilejson5文件",
        children: "模块级build-profile.json5文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件结构",
      children: "配置文件结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块级build-profile.json5文件整体的结构如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiType\ntargets\n└── name\n└── runtimeOS\n└── config\n    └── distroFilter / distributionFilter\n        └── apiVersion\n            └── policy\n            └── value\n        └── screenShape\n            └── policy\n            └── value\n        └── screenWindow\n            └── policy\n            └── value\n        └── screenDensity\n            └── policy\n            └── value\n        └── countryCode\n            └── policy\n            └── value\n    └── deviceType\n    └── buildOption\n    └── atomicService\n        └── preloads\n            └── moduleName\n└── source\n    └── abilities\n        └── name\n        └── pages\n        └── res\n        └── icon\n        └── label\n        └── launchType\n    └── pages\n    └── sourceRoots\n└── resource\n    └── directories\n└── output\n    └── artifactName\nshowInServiceCenter\nbuildOption\nbuildOptionSet\n└── name\n└── debuggable\n└── generateSharedTgz\n└── copyFrom\n└── resOptions\n    └── compression\n        └── media\n            └── enable\n        └── filters\n            └── method\n                └── type\n                └── blocks\n            └── files\n                └── path\n                └── size\n                └── resolution\n            └── exclude\n                └── path\n                └── size\n                └── resolution\n    └── resCompileThreads\n    └── copyCodeResource\n        └── enable\n        └── includes\n        └── excludes\n    └── ignoreResourcePattern\n    └── excludeHarRes\n    └── includeAppScopeRes\n    └── qualifiersConfig\n        └── Mcc&Mnc\n        └── Locale\n        └── Orientation\n        └── Device\n        └── ColorMode\n        └── Density\n└── externalNativeOptions\n    └── path\n    └── abiFilters\n    └── arguments\n    └── cppFlags\n    └── cFlags\n    └── targets\n└── sourceOption\n    └── workers\n└── nativeLib\n    └── filter\n        └── excludes\n        └── pickFirsts\n        └── pickLasts\n        └── enableOverride\n        └── select\n            └── package\n            └── version\n            └── includePattern\n            └── excludePattern\n            └── include\n            └── exclude\n    └── debugSymbol\n        └── strip\n        └── exclude\n    └── headerPath\n    └── collectAllLibs\n    └── excludeFromHar\n    └── excludeSoFromInterfaceHar\n    └── excludeSoFromBinXO\n    └── librariesInfo\n        └── name\n        └── linkLibraries\n└── napiLibFilterOption\n    └── excludes\n    └── pickFirsts\n    └── pickLasts\n    └── enableOverride\n└── arkOptions\n    └── runtimeOnly\n        └── sources\n        └── packages\n        └── excludePackages\n    └── types  \n    └── obfuscation\n        └── ruleOptions\n            └── enable\n            └── files\n        └── consumerFiles\n    └── buildProfileFields\n    └── integratedHsp\n    └── transformLib\n    └── branchElimination\n    └── byteCodeHar\n    └── bundledDependencies\n    └── packSourceMap\n    └── autoLazyImport\n    └── autoLazyFilter\n        └── include\n        └── exclude\n    └── reExportCheckMode\n    └── skipOhModulesLint\n    └── expandImportPath\n        └── enable\n        └── exclude\n    └── apPath\n    └── hostPGO\n└── packingOptions\n    └── asset\n        └── include\n        └── exclude\n    └── customizedOptions\n        └── basePackage\n└── removePermissions\n    └── name\nbuildModeBinder\n└── buildModeName\n└── mappings\n    └── targetName\n    └── buildOptionName\nentryModules\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件字段说明",
      children: "配置文件字段说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表为\"Ability\"类型的Module（HAP）对应的模块级build-profile.json5中配置项包含的字段，\"Library\"类型的Module（HAR和HSP）对应的模块级build-profile.json5中配置项为下表罗列范围的子集。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 模块级build-profile.json5文件字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "apiType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API模型类型：   - stageMode：Stage模型，后续长期演进的模型，推荐使用该模型。 - faMode：FA模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section517483765814",
              children: "targets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义的target，可配置多个；若配置，数组长度至少为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "showInServiceCenter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否显示在服务中心：   - true：显示。 - false（缺省默认值）：不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1010733210421",
              children: "buildOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块在构建过程中的相关配置。  其中不支持配置name、debuggable和copyFrom字段。  在FA模型中，arkOptions配置中仅支持配置types字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildOptionSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#table370712453588",
              children: "表16"
            }), "buildOption的集合，其中name字段必填，每个配置都是当前支持的编译过程中所有可用工具的通用配置选项集。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section642017215409",
              children: "buildModeBinder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建模式（debug、release 等）与构建配置（buildOption）的关联配置。通过该配置可以将不同的构建配置和target进行组合，并绑定到对应的构建模式上，其中构建模式需要在工程级别的构建模式列表中已定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entryModules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature类型模块所关联的入口模块，仅对FA模型工程生效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "targets",
      children: "targets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["targets用于给模块配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products",
        children: "多目标产物"
      }), "，可配置多个；若配置，数组长度至少为1。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " targets"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "runtimeOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target的目标运行环境：   - HarmonyOS - OpenHarmony"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1967714835919",
              children: "config"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target相关配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1838814817017",
              children: "source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target的源码范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table2065415762214",
              children: "resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target包含的资源目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table965613111225",
              children: "output"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定制产品生成的应用包的配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " resource"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "directories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源目录地址。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " output"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "artifactName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义产品生成的应用包名称，可由数字、英文字母、中划线、下划线和英文句号（.）组成，支持输入版本号。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "targets字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"targets\": [\n  {\n    \"name\": \"default\",\n    \"resource\": {\n      \"directories\": [\"./src/main/resources\"]\n    },\n    \"output\": {\n      \"artifactName\": \"customizedTargetOutputName-1.0.0\"\n    }\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "config",
      children: "config"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "config是target相关配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " config"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section113212281909",
              children: "distroFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用市场分发规则。在FA模型中使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section113212281909",
              children: "distributionFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用市场分发规则。在Stage模型中使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target支持的设备类型，必须在module.json5中已定义。  在FA模型中，对应的文件为config.json。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1010733210421",
              children: "buildOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块在构建过程中的相关配置。  其中不支持配置name、debuggable和copyFrom字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section106753237212",
              children: "atomicService"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元服务相关配置，仅支持在Stage模型中配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source",
      children: "source"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "source用于指定target的源码范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      }), " source"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1281869320",
              children: "abilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义target的能力范围。  在FA模型工程中支持对Ability源码目录下的page页面进行定制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides#section73018336472",
              children: "pages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stage模型工程中支持对pages源码目录的page页面进行定制，数组长度至少为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides#section18668905913",
              children: "sourceRoots"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stage模型工程中支持对差异化代码空间进行定制，数组长度至少为1。数组中的值有以下限制：   1. 必须唯一； 2. 必须为相对路径； 3. 类型必须为文件夹； 4. 文件夹必须真实存在； 5. 文件夹必须与src/main同级；   当数组中存在多个值时，寻址的优先级为数组中值的顺序。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "source字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"targets\": [\n  {\n    \"name\": \"default\",\n    \"source\": {\n       \"pages\": [         // Stage模型\n        \"pages/Index\"\n      ],\n      \"abilities\": [     // FA模型\n        {\n          \"name\": \".MainAbility\",\n          \"pages\": [\n            \"pages/index\"\n          ]\n        }\n      ],\n      \"sourceRoots\": [\n        \"./src/default\"\n      ]\n    }\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "distrofilterdistributionfilter",
      children: "distroFilter/distributionFilter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "distroFilter/distributionFilter用于指定应用市场分发规则，distroFilter在FA模型中使用，distributionFilter在Stage模型中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表7"
        })
      }), " distroFilter/distributionFilter"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section10176358110",
              children: "apiVersion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持的apiVersion范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1927031812114",
              children: "screenShape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕形状的支持策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section79432241314",
              children: "screenWindow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用运行时窗口的分辨率支持策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section99812302013",
              children: "screenDensity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕的像素密度支持策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section04873351417",
              children: "countryCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用需要分发的国家地区码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apiversion",
      children: "apiVersion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表8"
        })
      }), " apiVersion"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值规则：   - include：需要包含的value属性。 - exclude：需要排除的value属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持的取值为API Version存在的整数值，例如10。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "screenshape",
      children: "screenShape"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表9"
        })
      }), " screenShape"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值规则：   - include：需要包含的value属性。 - exclude：需要排除的value属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持的取值范围：   - circle：圆形 - rect：矩形"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "screenwindow",
      children: "screenWindow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表10"
        })
      }), " screenWindow"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前取值仅支持“include”。   - include：需要包含的value属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个字符串的取值格式为“宽*高”，取值为整数像素值，例如\"454*454\"。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "screendensity",
      children: "screenDensity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表11"
        })
      }), " screenDensity"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值规则：   - include：需要包含的value属性。 - exclude：需要排除的value属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围：   - sdpi：小规模的屏幕密度（Small-scale Dots per Inch），适用于dpi取值为(0,120]的设备。 - mdpi：中规模的屏幕密度（Medium-scale Dots Per Inch），适用于dpi取值为(120,160]的设备。 - ldpi：大规模的屏幕密度（Large-scale Dots Per Inch），适用于dpi取值为(160,240]的设备。 - xldpi：大规模的屏幕密度（Extra Large-scale Dots Per Inch），适用于dpi取值为(240,320]的设备。 - xxldpi：大规模的屏幕密度（Extra Extra Large-scale Dots Per Inch），适用于dpi取值为(320，480]的设备。 - xxxldpi：表示大规模的屏幕密度（Extra Extra Extra Large-scale Dots Per Inch），适用于dpi取值为(480, 640]的设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "countrycode",
      children: "countryCode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表12"
        })
      }), " countryCode"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值规则：   - include：需要包含的value属性。 - exclude：需要排除的value属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "国家地区码取值，具体值以ISO-3166-1标准为准。支持多个国家和地区枚举定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "distroFilter/distributionFilter字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"targets\": [\n  {\n    \"name\": \"default\",\n    \"config\": {\n      \"distributionFilter\": {\n        \"apiVersion\": {\n          \"policy\": \"include\",\n          \"value\": [12]\n        },\n        \"screenShape\": {\n          \"policy\": \"include\",\n          \"value\": [\n            \"circle\",\n            \"rect\"\n          ]\n        },\n        \"screenWindow\": {\n          \"policy\": \"include\",\n          \"value\": [\n            \"454*454\",\n            \"466*466\"\n          ]\n        },\n        \"screenDensity\": {\n          \"policy\": \"exclude\",\n          \"value\": [\n            \"ldpi\",\n            \"xldpi\"\n          ]\n        },\n        \"countryCode\": {\n          \"policy\": \"include\",\n          \"value\": [\n            \"CN\"\n          ]\n        }\n      }\n    },\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "atomicservice",
      children: "atomicService"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表13"
        })
      }), " atomicService"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides#section206461457101917",
              children: "preloads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义当前模块运行时预加载的模块。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表14"
        })
      }), " preloads"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预加载的模块名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "atomicService字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"targets\": [\n  {\n    \"name\": \"default\",\n    \"config\": {\n      \"atomicService\": {\n        \"preloads\": [\n          {\n            \"moduleName\": \"preloadSharedLibrary\"\n          }\n        ]\n      }\n    }\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilities",
      children: "abilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "abilities用于自定义target的能力范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表15"
        })
      }), " abilities"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定target选择的ability的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides#section73018336472",
              children: "pages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FA模型中，指定target选择的ability的page。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定资源目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定ability图标文件的索引，格式为\"$media:ability_icon\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定对用户可见的名称，要求采用该名称的资源索引，以支持多语言。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "launchType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定ability的启动模式：   - multiton：多实例模式，每次启动创建一个新实例。  - standard：同multiton，建议使用multiton替代。 - singleton（缺省默认值）：单实例模式，仅第一次启动创建新实例。 - specified：指定实例模式，运行时由开发者决定是否创建新实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "abilities字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"targets\": [\n  {\n    \"name\": \"default\",\n    \"source\": {\n      \"abilities\": [\n        {\n          \"name\": \"EntryAbility\",\n          \"icon\": \"$media:layered_image\",\n          \"label\": \"$string:EntryAbility_label\",\n          \"launchType\": \"singleton\"\n        }\n      ]\n    }\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildoption",
      children: "buildOption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["buildOption是模块在构建过程中的相关配置，buildOptionSet和targets中也支持配置buildOption。此外，工程级build-profile.json5中也支持配置buildOption。工程级别buildOption配置会与模块级别的buildOption进行合并，具体合并规则和优先级请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section1727865610255",
        children: "合并编译选项规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表16"
        })
      }), " buildOption"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建配置方案buildOption的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "debuggable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前编译产物是否为可调试模式(debug)：   - true：可调试。 - false：不可调试。   如果未配置debuggable字段，使用release的编译模式时，默认值为false，使用其他编译模式时，默认值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "generateSharedTgz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译HSP模块时是否生成tgz包。   - true：生成。 - false：不生成。   如果未配置generateSharedTgz，根据debuggable字段决定是否生成tgz包。debuggable为true时，不生成tgz包，debuggable为false时，生成tgz包。  从DevEco Studio 5.1.1 Beta1版本开始支持。  说明：  该字段配置后仅对HSP模块生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copyFrom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置已定义的buildOption的name，表示从本模块已有的buildOption复制配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section754823013348",
              children: "resOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源编译配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-cpp#section0721057575",
              children: "externalNativeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native编译配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section2611239115413",
              children: "sourceOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源码相关配置。使用不同的标签对源代码进行分类，以便在构建过程中对不同的源代码进行不同的处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-cpp#section15889929155720",
              children: "nativeLib"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native 库（.so）相关配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section08781111115517",
              children: "napiLibFilterOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["NAPI库（.so）文件的筛选选项。标记为废弃，不建议使用，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-cpp#section15889929155720",
              children: "nativeLib/filter"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section8368152412552",
              children: "arkOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS编译配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1744183710558",
              children: "packingOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包配置项，仅支持HAR模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section155111918175715",
              children: "removePermissions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定编译时需要删除的依赖包中的冗余权限，模块本身的权限不会被删除，仅HAP/HSP模块支持配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resoptions",
      children: "resOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resOptions是资源编译配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表17"
        })
      }), " resOptions"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section2095319147103",
              children: "compression"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对工程预置图片资源进行纹理压缩的编译配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resCompileThreads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源编译的线程数量 ，最小为1，最大为主机的CPU核数。  该字段从DevEco Studio 5.1.0 Release版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table1476161719356",
              children: "copyCodeResource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对模块的src/main/ets目录下的资源文件（非源码文件）拷贝的编译配置参数。  说明：  该字段对", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section197792874110",
              children: "不开启混淆的源码HAR"
            }), "不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ignoreResourcePattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据glob语法，对资源目录resources或开发者自定义的资源目录下的文件/文件夹名称进行过滤，匹配到的文件不会被打包到产物中。  从DevEco Studio 5.1.1 Beta1版本开始支持。  说明：  - 如果规则中带有路径（例如./src/main/a.png），该规则不生效。 - 如果未配置该字段，打包HAP/HSP时存在默认的过滤规则：默认不打包.git、.svn、.scc、.ds_store、desktop.ini、picasa.ini、cvs、thumbs.db以及以.开头的隐藏文件/目录和以~结尾的文件。 - 配置该字段后，会覆盖默认的过滤规则；如果字段配置为空数组，则不应用任何过滤规则，即全部资源都打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludeHarRes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译HAP/HSP模块时，指定不参与资源编译的三方HAR包的包名，配置后，依赖HAR包中的资源不会被打包到产物中，支持直接依赖和间接依赖。  从DevEco Studio 6.0.0 Beta2版本开始支持。  说明：  仅支持在HAP/HSP中配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "includeAppScopeRes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译HSP时，是否将AppScope目录下的资源打包到产物中。   - true（缺省默认值）：打包。 - false：不打包。   从DevEco Studio 6.0.0 Beta2版本开始支持。  说明：  - 该字段仅对HSP模块生效。 - 配置为false后，app.json5的icon和label字段不再对HSP模块生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qualifiersConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置HAP/HSP模块的限定词目录，编译时会进行过滤，匹配到的限定词目录会被打包到产物中。支持六类限定词，具体请查看", (0,jsx_runtime.jsx)(_components.a, {
              href: "#table913204942018",
              children: "表19"
            }), "，配置的目录要符合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/resource-categories-and-access#%E9%99%90%E5%AE%9A%E8%AF%8D%E7%9B%AE%E5%BD%95",
              children: "限定词目录取值要求"
            }), "。  如果某类限定词未配置过滤，则包含该类限定词的目录默认会打包。  从DevEco Studio 6.1.0 Beta1版本开始支持。  说明：  - qualifiersConfig不能为{}，至少配置一类限定词。 - 如果配置了限定词，取值不能为空数组[]，数组中的值不能为空字符串\"\"。 - 仅支持Stage模型。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表18"
        })
      }), " copyCodeResource"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否将src/main/ets目录下的资源文件（.ets/.ts/.js以外的其他文件）打包到产物中。  从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认配置enable字段并且值为false，即默认不打包ets目录下的资源文件。   - true（缺省默认值）：打包。 - false：不打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "includes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 当enable为true时，用于指定打包的资源文件，其他资源文件均不会打包到产物中，支持glob语法，以\"**/\"开头。 - 当enable为false时，includes不生效。   从DevEco Studio 6.0.0 Beta2版本开始支持。  说明：  excludes和includes互斥，只能配置一个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 当enable为true时，用于指定不打包的资源文件，其他资源文件均会打包到产物中，支持glob语法，以\"**/\"开头。 - 当enable为false时，excludes不生效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(808451)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块的src/main/ets目录下，编译时仅处理.ets/.ts/.js文件，其他文件会被当作资源文件打包进产物中，不会进行混淆或加密，如需过滤请配置excludes字段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请勿将源码等文件放在以.开头的系统隐藏目录中，可能会导致过滤规则失效，会将src/main/ets目录下的所有文件作为资源文件打包进产物中，不会进行混淆或加密。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表19"
        })
      }), " qualifiersConfig"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mcc&Mnc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置移动国家码（MCC）和移动网络码（MNC）限定词目录，匹配到的目录会被打包到产物中，如['mcc460']表示过滤其他国家码，打包包含mcc460的目录。  如果未配置，默认所有的MCC或MNC都会打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Locale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置语言、文字、国家或地区限定词目录，匹配到的目录会被打包到产物中，如['zh_CN']表示过滤其他语言，打包包含zh_CN的目录。  如果未配置，默认所有的语言都会打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orientation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置横竖屏限定词目录，匹配到的目录会被打包到产物中，如['vertical']表示过滤其他屏幕方向，打包包含vertical的目录。  如果未配置，默认所有的屏幕方向都会打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置设备类型限定词目录，匹配到的目录会被打包到产物中，如['phone']表示过滤其他设备，打包包含phone的目录。  如果未配置，默认所有的设备都会打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ColorMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置颜色模式限定词目录，匹配到的目录会被打包到产物中，如['dark']表示过滤其他模式，打包包含dark的目录。  如果未配置，默认所有的颜色模式都会打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置屏幕密度限定词目录，匹配到的目录会被打包到产物中，如['sdpi']表示过滤其他屏幕密度，打包包含sdpi的目录。  如果未配置，默认所有的屏幕密度都会打包。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果同时配置多类限定词，最终打包的目录要同时符合多类限定词的过滤条件，例如存在以下限定词目录："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "phone-dark-Vertical\nphone-dark-Horizontal\nphone-light-Horizontal\ncar-dark-Vertical\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"qualifiersConfig\":{\n  \"Device\":['phone'],\n  \"ColorMode\":['dark'],\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "过滤步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device限定词配置了phone，所以phone-dark-Vertical、phone-dark-Horizontal、phone-light-Horizontal符合，car-dark-Vertical不符合，会过滤掉。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ColorMode限定词配置了dark，所以phone-dark-Vertical、phone-dark-Horizontal符合，phone-light-Horizontal不符合，会过滤掉。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Orientation限定词未配置，所以不过滤限定词目录，phone-dark-Vertical、phone-dark-Horizontal都符合。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "综上所述，最终打包到产物中的是phone-dark-Vertical和phone-dark-Horizontal。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resOptions字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"resOptions\": {\n    \"resCompileThreads\": 2,\n    \"copyCodeResource\": {\n      \"enable\": true,\n      \"excludes\": ['**/entry/src/main/ets/component/big_picture.png', '**/*.yml', '**/subDir/**'],   // includes字段配置方式相同\n    },\n    \"ignoreResourcePattern\": ['*.png' ,'abc.json'],\n    \"excludeHarRes\": ['har'],\n    \"qualifiersConfig\":{\n      \"Mcc&Mnc\":['mcc460'],\n      \"Locale\":['zh_CN'],\n      \"Orientation\":['vertical'],\n      \"Device\":['phone','tv'],\n      \"ColorMode\":['dark'],\n      // \"Density\":['sdpi'],   不配置表示所有的屏幕密度都打包\n    },\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sourceoption",
      children: "sourceOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sourceOption是源码相关配置，使用不同的标签对源代码进行分类，以便在构建过程中对不同的源代码进行不同的处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表20"
        })
      }), " sourceOption"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定使用node.js工作器的JS/TS源代码，源代码在构建过程中单独处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sourceOption字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"sourceOption\": {\n    \"workers\": [\n      \"./src/main/ets/common/constants/CommonConstants.ets\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napilibfilteroption",
      children: "napiLibFilterOption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["napiLibFilterOption是NAPI库（.so）文件的筛选选项，字段已废弃，不建议使用，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration/ide-hvigor-cpp#section15889929155720",
        children: "nativeLib/filter"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表21"
        })
      }), " napiLibFilterOption"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "排除的.so文件。罗列的NAPI库将不会被打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pickFirsts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照.so文件的优先级顺序，打包最高优先级的.so文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pickLasts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照.so文件的优先级顺序，打包最低优先级的.so文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableOverride"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否允许当.so文件重名冲突时，使用高优先级的.so文件覆盖低优先级的.so文件：   - true：允许。 - false（缺省默认值）：不允许。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkoptions",
      children: "arkOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arkOptions是ArkTS编译配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表22"
        })
      }), " arkOptions"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table19892123422118",
              children: "runtimeOnly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置变量动态import的文件和依赖的包名，仅支持在Stage模型中配置。  runtimeOnly为非必选配置，当工程需要以变量方式动态import文件、目录的相对路径或三方包时，需要通过配置runtimeOnly来确保其加入编译流程。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import#%E5%8A%A8%E6%80%81import%E5%8F%98%E9%87%8F%E8%A1%A8%E8%BE%BE%E5%BC%8F",
              children: "动态import变量表达式"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkoptions-guide#types",
              children: "types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义类型，可配置包名或d.ts/d.ets文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-obfuscation",
              children: "obfuscation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代码混淆配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-get-build-profile-para",
              children: "buildProfileFields"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行时可获取的自定义构建参数，支持键值对配置，key可由数字、英文、下划线、中划线组成，value类型仅支持string、number、boolean。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "integratedHsp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-typical-scenarios/integrated-hsp",
              children: "集成态HSP"
            }), "。   - true：是。 - false（缺省默认值）：否。   说明：  - 从API 12开始支持。 - 需在工程级build-profile.json5中配置useNormalizedOHMUrl为true后使用。 - 该字段仅在HSP模块中配置后生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation",
              children: "transformLib"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字节码插桩插件配置，允许开发者在编译时对字节码进行插桩修改，仅支持Stage模型，格式为相对路径，不同系统要求的文件类型如下，文件内容需要在对应平台生成，不能拷贝修改后缀名混用。   - Windows：.dll文件。 - Linux/Mac：.so文件。   说明：  - Mac环境下添加配置后插桩未生效的问题请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-133",
              children: "FAQ"
            }), "。 - HAR模块仅字节码HAR配置生效，非字节码HAR配置不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "branchElimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否启用代码分支裁剪，减少编译产物大小，开启后，在release编译模式下，不会被执行到的代码分支会被裁剪掉，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#li71611425123512",
              children: "branchElimination示例"
            }), "。   - true：启用（将导致使用\"ApplyChanges\"功能时，对const声明的常量的值进行的修改可能不生效）。 - false（缺省默认值）：不启用。   说明：  - 仅支持API 11及以上的Stage模型。 - HAR模块仅字节码HAR配置生效，非字节码HAR配置不生效。 - 仅支持const声明的bool类型常量和const声明的string/number类型常量的判断表达式。 - 不支持间接导入，例如A文件中定义const变量A1，B文件导入A1，导出B1，ets导入B1进行判断，无法进行裁剪。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "byteCodeHar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否构建字节码HAR，仅在HAR模块中配置后生效。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section16598338112415",
              children: "构建字节码HAR"
            }), "。   - true：支持。 - false：不支持。   说明：  - 从API 12开始支持。 - 从DevEco Studio NEXT Beta1（5.0.3.800）版本开始，当工程级build-profile.json5中useNormalizedOHMUrl配置为true时，byteCodeHar缺省默认值为true；当useNormalizedOHMUrl配置为false时，byteCodeHar缺省默认值为false。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundledDependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否支持将多个源码HAR（本地+远程）打包成一个字节码HAR。字节码HAR、HSP、npm不会被打包进去，仅会合并源码HAR。   - true：支持。 - false（缺省默认值）：不支持。   说明：  - 仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section16598338112415",
              children: "字节码HAR"
            }), "配置该字段。 - 从API 12开始支持。 - 仅支持Stage模型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "packSourceMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编译", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section16598338112415",
              children: "字节码HAR"
            }), "时，是否将sourceMap文件打包到产物中。仅HAR模块支持配置，并且只对字节码HAR生效。   - true：打包。 - false：不打包。   该字段从DevEco Studio 5.1.0 Release版本开始支持。  说明：  - 如果不配置，debug模式默认值为true，release模式默认值为false。 - 将sourceMap打包到release的HAR包中，可能会导致HAR中的代码资产泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "autoLazyImport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编译时是否自动将符合lazy-import语法规范的import语句添加\"lazy\"关键字。仅支持在源码中添加\"lazy\"关键字，不包含依赖的字节码HAR包或HSP。关于lazy-import的介绍及相关影响请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import",
              children: "延迟加载（lazy import）"
            }), "。   - true：添加。 - false（缺省默认值）：不添加。   说明：  - 如果配置为true，编译时不会做场景识别，即源码中任何符合语法规范的import语句都会被添加\"lazy\"。 - 仅支持Stage模型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table1551310818378",
              children: "autoLazyFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义添加\"lazy\"关键字的模块，仅当autoLazyImport为true时生效。  从DevEco Studio 6.0.1 Beta1版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reExportCheckMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "针对以下场景，编译时是否进行拦截报错：使用lazy import导入的变量，在同文件中被再次导出。   - noCheck（缺省默认值）：不检查，不报错。 - compatible：兼容模式，报Warning。 - strict：严格模式，报Error。   该字段从DevEco Studio 5.0.5 Release版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skipOhModulesLint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否跳过工程中oh_modules目录的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide",
              children: "ArkTS规则检查"
            }), "。从DevEco Studio 6.0.0 Beta1版本开始支持。   - true：跳过。 - false（缺省默认值）：不跳过。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table1921576135914",
              children: "expandImportPath"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "import路径展开相关配置选项。  从DevEco Studio 6.0.0 Beta3版本开始支持。  说明：  HAR模块不支持配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "apPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "说明：  API 11及以上版本不再支持，即该字段配置后不再生效。  应用热点信息文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hostPGO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用配置文件引导优化功能：   - true：启用。 - false（缺省默认值）：不启用。   从API 10开始废弃。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "branchElimination字段配置为true时，代码分支的裁剪情况示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 编译生成的BuildProfile文件\nexport const DEBUG = false;\nexport const VERSION_CODE = 100;\n// 开发者自定义的ets文件\nimport { DEBUG } from 'BuildProfile';\nimport { VERSION_CODE } from 'BuildProfile';\nif (DEBUG)\n  {XXX} // 该分支会被裁剪掉\nelse\n  {XXX}\nif (VERSION_CODE){XXX} // 该语法发生了类型转换，不支持代码裁剪。\nif (VERSION_CODE === 100){XXX} // 若需要裁剪代码，使用该方式，显式指定判断条件为boolean类型。\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表23"
        })
      }), " runtimeOnly"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置变量动态import的文件/文件夹的相对路径。  配置的文件/文件夹必须在工程中真实存在，且文件的后缀只能为ets或ts。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "packages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置变量动态import依赖的包名。  该包名需要和工程级/模块级oh-package.json5的dependencies或dynamicDependencies中的名字保持一致。  从DevEco Studio 5.1.1 Beta1版本开始，packages中的三方包支持配置在dynamicDependencies中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludePackages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译HAP/HSP模块时，指定不参与变量动态import的源码HAR的包名，配置的源码HAR不会参与编译，支持直接/间接依赖。  仅支持在HAP/HSP模块中配置。  从DevEco Studio 6.0.0 Beta2版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表24"
        })
      }), " expandImportPath"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否启用import路径展开，启用后可以提升应用的运行时性能。关于import路径展开的原理及开启后的副作用请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects#%E9%80%9A%E8%BF%87import%E8%B7%AF%E5%BE%84%E5%B1%95%E5%BC%80%E4%BC%98%E5%8C%96%E6%80%A7%E8%83%BD",
              children: "通过import路径展开优化性能"
            }), "。   - true：启用。 - false（缺省默认值）：不启用。   说明：  import XXX from 'A'，A必须为本地HAR模块，并且仅当A为包名时支持进行展开，A为相对路径或包名+路径都不支持展开。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exclude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置oh-package.json5中的依赖别名，用于指定不展开import语句的依赖，仅支持本地HAR模块。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表25"
        })
      }), " autoLazyFilter"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "include"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 当autoLazyImport为true时，指定自动添加\"lazy\"关键字的包名（即oh-package.json5中的name），其他包不会添加\"lazy\"关键字，支持正则语法。 - 当autoLazyImport为false时，include不生效。   说明：  - include和exclude互斥，只能配置一个。 - include不支持配置空数组或空字符串，至少配置一个包名，并且包名不能重复。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exclude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 当autoLazyImport为true时，指定不添加\"lazy\"关键字的包名，其他包都会添加\"lazy\"关键字，支持正则语法。 - 当autoLazyImport为false时，exclude不生效。   说明：  - include和exclude互斥，只能配置一个。 - exclude不支持配置空数组或空字符串，至少配置一个包名，并且包名不能重复。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arkOptions字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"sources\": [\"./src/main/ets/utils/Calc.ets\"],\n      \"packages\": [\"myHar\"],\n      \"excludePackages\": [\"har1\",\"har2\"],  // myHar依赖har1、har2\n    },\n    \"buildProfileFields\": {\n      \"buildOptionSetData\": \"BuildOptionSetDataRelease\",\n      \"data\": \"DataRelease\"\n    },\n    \"transformLib\": \"./dll/example.dll\",\n    \"branchElimination\": true,\n    \"autoLazyImport\": true,\n    \"autoLazyFilter\": {\n      \"include\": ['entry']\n    },\n    \"reExportCheckMode\": \"compatible\",\n    \"expandImportPath\": {\n      \"enable\": true,\n      \"exclude\": ['localhar']\n    },\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "packingoptions",
      children: "packingOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "packingOptions是打包配置项，仅支持HAR模块。该字段从DevEco Studio 5.1.0 Release版本开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表26"
        })
      }), " packingOptions"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table14927147191119",
              children: "asset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包资产配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table3942836112513",
              children: "customizedOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAR模块的定制化选项。  从DevEco Studio 6.0.2 Beta1版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表27"
        })
      }), " asset"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "include"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置打包到HAR产物中的文件，遵循glob语法。  说明：  - 以下目录配置后不生效，即不会被打包到产物中：node_modules、oh_modules、.preview、build、.cxx、.test。  - 配置include字段后，构建源码HAR时，.gitignore和.ohpmignore文件不生效，详细请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section197792874110",
              children: "以debug模式构建"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exclude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置不打包到HAR产物中的文件，遵循glob语法。  说明：  - 以下文件配置后不生效，默认会打包：oh-package.json5。 - 配置exclude字段后，构建源码HAR时，.gitignore和.ohpmignore文件不生效，详细请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section197792874110",
              children: "以debug模式构建"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表28"
        })
      }), " customizedOptions"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "basePackage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定需要定制的字节码HAR的abc文件的相对路径。配置后，编译时支持替换掉abc中的同名文件，以实现对字节码HAR的定制修改，具体使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-192",
              children: "三方SDK定制修改部分源码"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "packingOptions字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"packingOptions\": {\n    \"asset\": {\n      \"include\": [\"./src/router.json5\", \"router.json5\"],\n      \"exclude\": [\"./config/*\"]\n    },\n    \"customizedOptions\": {\n      \"basePackage\": \"./basePackage/modules.abc\",\n    },\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removepermissions",
      children: "removePermissions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removePermissions是一个对象数组，用于编译HAP/HSP模块时，指定需要删除的依赖包中的冗余权限，模块本身的权限不会被删除。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表29"
        })
      }), " removePermissions"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待删除的权限名称，需要包含在依赖包的module.json的requestPermissions中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removePermissions字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"removePermissions\": [\n    {\n      \"name\": \"ohos.permission.ABILITY_BACKGROUND_COMMUNICATION\"\n    },\n    {\n      \"name\": \"ohos.permission.ACCELEROMETER\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compression",
      children: "compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "compression是对工程预置图片资源进行纹理压缩的编译配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表30"
        })
      }), " compression"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1915545641714",
              children: "media"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对资源目录下media目录的图片进行纹理压缩的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section185719543186",
              children: "filters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件过滤配置参数。  说明：  编译过程中会依次遍历图片文件，并与filters条件进行匹配，一旦匹配成功，则完成该图片的处理。当工程级和模块级同时配置时，先按照模块级的过滤条件匹配，一旦匹配成功，则忽略工程级的过滤条件；如果模块级的没有匹配成功，继续按工程级的条件进行匹配。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "media",
      children: "media"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "media是对资源目录下media目录的图片进行纹理压缩的配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表31"
        })
      }), " media"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否对media图片启用纹理压缩。   - true：启用。 - false（缺省默认值）：不启用。   说明：  - 在linux系统的构建场景下，请确认系统环境已", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-command-line-building-app#section1478651816216",
              children: "安装libGL1库"
            }), "。 - 对图片进行纹理压缩会改变文件名称和内容，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#layereddrawabledescriptor",
              children: "分层图标"
            }), "以及二次编辑的场景下会引起图片显示异常，请进一步使用filters排除掉这部分文件。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filters",
      children: "filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "filters是文件过滤配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表32"
        })
      }), " filters"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table1568916396220",
              children: "method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纹理压缩的方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table19762944112414",
              children: "files"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定用来参与压缩的文件，与exclude字段配合使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table6219104952519",
              children: "exclude"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从files中剔除掉不需要压缩的文件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表33"
        })
      }), " method"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转换类型。   - astc（Adaptive Scalable Texture Compression）：自适应可变纹理压缩，一种对GPU友好的纹理格式，可在设备侧更快地显示，有更少的内存占用。 - sut（SUper compression for Texture） ：纹理超压缩，可在设备侧更快地显示，有更少的内存占用，相比astc具备更大压缩率和更少ROM占用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "astc/sut转换类型的扩展参数，决定画质和压缩率，当前仅支持\"4x4\"。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表34"
        })
      }), " files"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定“按路径匹配”的过滤条件，符合glob规范，格式为相对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二维数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定“按大小匹配”的过滤条件，格式为[min,max]，闭区间，表示大小从min到max之间的文件。   - 每个数值可以填数字、字符串或字符串中带单位（大小写均可），如[0, '1k']。 - 单位K/k=1024，M/m=1024*1024，G/g=1024*1024*1024，T/t=1024*1024*1024*1024。 - 区间最大值可省略，表示无限大，如['3K']。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二维数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定“按分辨率匹配”的过滤条件，配置示例：   ", (0,jsx_runtime.jsx)(_components.code, {
              children: "resolution:[   [     { width:32, height:32 },  // 最小宽高     { width:64, height:64 },  // 最大宽高   ],  // 分辨率在32*32到64*64之间的图片   [     { width:200, height:200 },  // 最小宽高     // 此处第2个不填表示最大宽高是无限大   ],  // 分辨率大于200*200的图片 ]"
            }), "  - width和height只能是数字。 - 最大宽高可以省略，表示无限大。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表35"
        })
      }), " exclude"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同files/path。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二维数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同files/size。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二维数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同files/resolution。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "compression字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"resOptions\": {\n    \"compression\": {\n      \"media\": {\n        \"enable\": true // 是否对media图片启用纹理压缩\n      },\n      // 纹理压缩文件过滤，非必填，不填会压缩资源目录中的所有图片\n      \"filters\": [\n        {\n          \"method\": {\n            \"type\": \"sut\", // 转换类型\n            \"blocks\": \"4x4\" // 转换类型的扩展参数\n          },\n          // 指定用来参与压缩的文件，需要满足所有条件且不被exclude过滤的文件才会参与压缩\n          \"files\": {\n            \"path\": [\"./**/*\"], // 指定资源目录中的所有文件\n            \"size\": [[0, '10k']], // 指定大小10k以下的文件\n            // 指定分辨率小于2048*2048的图片\n            \"resolution\": [\n              [\n                { \"width\": 0, \"height\": 0 }, // 最小宽高\n                { \"width\": 2048, \"height\": 2048 } // 最大宽高\n              ]\n            ]\n          },\n          // 从files中剔除掉不需要压缩的文件，需要满足所有过滤条件的文件才会被剔除\n          \"exclude\": {\n            \"path\": [\"./**/*.jpg\"], // 过滤所有jpg文件\n            \"size\": [[0, '1k']], // 过滤大小1k以下的文件\n            // 过滤分辨率小于1024*1024的图片\n            \"resolution\": [\n              [\n                { \"width\": 0, \"height\": 0 }, // 最小宽高\n                { \"width\": 1024, \"height\": 1024 } // 最大宽高\n              ]\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildmodebinder",
      children: "buildModeBinder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["buildModeBinder是构建模式（debug、release 等）与构建配置（buildOption）的关联配置。通过该配置可以将不同的构建配置和target进行组合，并绑定到对应的构建模式上。如果没有配置buildModeBinder，默认的绑定策略请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section1727865610255",
        children: "合并编译选项规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表36"
        })
      }), " buildModeBinder"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildModeName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建模式名称，需要在工程级别的buildModeSet中定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table4672142011561",
              children: "mappings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target和buildOption之间的一对一映射关系。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表37"
        })
      }), " mappings"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildOptionName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建配置buildOption名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "buildModeBinder字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildModeBinder\": [\n  {\n    \"buildModeName\": \"debug\",\n    \"mappings\": [\n      {\n        \"targetName\": \"default\",\n        \"buildOptionName\": \"release\"\n      }\n    ]\n  }\n]\n"
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
808451(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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