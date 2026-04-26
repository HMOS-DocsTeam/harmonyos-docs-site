"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["442744"], {
94015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_file_ide_hvigor_build_profile_app_ide_hvigor_build_profile_app_md_503_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-file-ide-hvigor-build-profile-app-ide-hvigor-build-profile-app-md-503.json
var site_docs_ide_hvigor_configuration_file_ide_hvigor_build_profile_app_ide_hvigor_build_profile_app_md_503_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration-file/ide-hvigor-build-profile-app/ide-hvigor-build-profile-app","title":"工程级build-profile.json5文件","description":"配置文件结构","source":"@site/docs/ide-hvigor-configuration-file/ide-hvigor-build-profile-app/ide-hvigor-build-profile-app.md","sourceDirName":"ide-hvigor-configuration-file/ide-hvigor-build-profile-app","slug":"/ide-hvigor-configuration-file/ide-hvigor-build-profile-app/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-build-profile-app/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"工程级build-profile.json5文件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"hvigor-config.json5文件","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-set-options/"},"next":{"title":"模块级build-profile.json5文件","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-build-profile/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration-file/ide-hvigor-build-profile-app/ide-hvigor-build-profile-app.md


const frontMatter = {
	title: '工程级build-profile.json5文件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '工程级build-profile.json5文件';

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
  "value": "app",
  "id": "app",
  "level": 2
}, {
  "value": "modules",
  "id": "modules",
  "level": 2
}, {
  "value": "signingConfigs",
  "id": "signingconfigs",
  "level": 2
}, {
  "value": "products",
  "id": "products",
  "level": 2
}, {
  "value": "buildModeSet",
  "id": "buildmodeset",
  "level": 2
}, {
  "value": "capabilities",
  "id": "capabilities",
  "level": 2
}, {
  "value": "config",
  "id": "config",
  "level": 3
}, {
  "value": "buildOption",
  "id": "buildoption",
  "level": 2
}, {
  "value": "packOptions",
  "id": "packoptions",
  "level": 3
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
  "value": "strictMode",
  "id": "strictmode",
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
        id: "工程级build-profilejson5文件",
        children: "工程级build-profile.json5文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件结构",
      children: "配置文件结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工程级build-profile.json5文件整体的结构如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "app\n└── signingConfigs\n    └── name\n    └── material\n        └── storePassword\n        └── certpath\n        └── keyAlias\n        └── keyPassword\n        └── profile\n        └── signAlg\n        └── storeFile\n    └── type\n└── products\n    └── name\n    └── signingConfig\n    └── bundleName\n    └── buildOption\n        └── packOptions\n            └── buildAppSkipSignHap\n            └── fastBuildApp\n            └── enableSourceCodeCheck\n            └── deduplicateHar\n            └── appWithSignedPkg\n            └── enableIncrementalSoCompress\n        └── debuggable\n        └── generateSharedTgz\n        └── resOptions\n            └── compression\n                └── media\n                    └── enable\n                └── filters\n                    └── method\n                        └── type\n                        └── blocks\n                    └── files\n                        └── path\n                        └── size\n                        └── resolution\n                    └── exclude\n                        └── path\n                        └── size\n                        └── resolution\n            └── resCompileThreads\n            └── copyCodeResource\n                └── enable\n                └── includes\n                └── excludes\n            └── ignoreResourcePattern\n            └── excludeHarRes\n            └── includeAppScopeRes\n            └── idDefinedFilePath\n        └── externalNativeOptions\n            └── path\n            └── abiFilters\n            └── arguments\n            └── cppFlags\n        └── sourceOption\n            └── workers\n        └── nativeLib\n            └── filter\n                └── excludes\n                └── pickFirsts\n                └── pickLasts\n                └── enableOverride\n                └── select\n                    └── package\n                    └── version\n                    └── includePattern\n                    └── excludePattern\n                    └── include\n                    └── exclude\n            └── debugSymbol\n                └── strip\n                └── exclude\n            └── headerPath\n            └── collectAllLibs\n            └── excludeFromHar\n            └── excludeSoFromInterfaceHar\n            └── excludeSoFromBinXO\n        └── napiLibFilterOption\n            └── excludes\n            └── pickFirsts\n            └── pickLasts\n            └── enableOverride\n        └── arkOptions\n            └── buildProfileFields\n            └── types\n            └── tscConfig\n                └── targetESVersion\n                └── maxFlowDepth\n            └── autoLazyImport\n            └── autoLazyFilter\n                └── include\n                └── exclude\n            └── reExportCheckMode\n            └── branchElimination\n            └── skipOhModulesLint\n            └── expandImportPath\n                └── enable\n                └── exclude\n            └── apPath\n            └── hostPGO\n        └── strictMode\n            └── noExternalImportByPath\n            └── useNormalizedOHMUrl\n            └── caseSensitiveCheck\n            └── duplicateDependencyCheck\n            └── harLocalDependencyCheck\n            └── enableStrictCheckOHModule\n            └── disableSendableCheckRules\n        └── nativeCompiler\n        └── removePermissions\n            └── name\n        └── preloadSystemSo\n    └── runtimeOS\n    └── arkTSVersion\n    └── compileSdkVersion\n    └── compatibleSdkVersion\n    └── targetSdkVersion\n    └── compatibleSdkVersionStage\n    └── bundleType\n    └── label\n    └── icon\n    └── versionCode\n    └── versionName\n    └── buildVersion\n    └── resource\n        └── directories\n    └── output\n        └── artifactName\n    └── vendor\n└── buildModeSet\n    └── name\n    └── buildOption\n└── multiProjects\n└── capabilities\n    └── bundleName\n    └── config\n        └── name\n        └── capability\n        └── subCapabilities\n            └── name\n            └── capability\nmodules\n└── name\n└── srcPath\n└── targets\n    └── name\n    └── applyToProducts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件字段说明",
      children: "配置文件字段说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工程级build-profile.json5文件包含以下字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 工程级build-profile.json5文件字段说明"]
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
              href: "#section1140014592111",
              children: "app"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1961794812219",
              children: "modules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工程中包含的所有模块的信息，数组长度至少为1。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "app",
      children: "app"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "app是工程级的编译配置，包含签名、product等信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " app"]
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
              href: "#section153288223224",
              children: "signingConfigs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名方案信息，可配置多个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section45865492619",
              children: "products"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["产品品类，可配置多个。如需配置多个，相关说明请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products",
              children: "配置多目标产物"
            }), "章节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section137297344398",
              children: "buildModeSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建模式集合，可配置多个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multiProjects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前工程是否支持多工程构建：   - true：支持。 - false（缺省默认值）：不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1526318211219",
              children: "capabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用开通的开放能力，具体开通方式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-signing#section20943184413328",
              children: "关联注册应用进行签名"
            }), "。  从DevEco Studio 6.0.0 Beta5版本开始支持。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modules",
      children: "modules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "modules是一个对象数组，用于描述工程中包含的所有模块，数组长度至少为1。模块配置包括名称、路径和target-product关联配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " modules"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模块的名称。该名称需与module.json5文件中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "module.name"
            }), "保持一致。  在FA模型中，对应的文件为config.json。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模块的源码路径，为模块根目录相对工程根目录的相对路径，允许模块根目录不在当前工程下，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-project/ide-module-management/ide-add-new-module#section1295434814255",
              children: "导入/引用模块"
            }), "。  说明：  当前支持引用其他工程下的HAR和HSP模块。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table1433185416814",
              children: "targets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模块的target信息，用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products",
              children: "定制多目标构建产物"
            }), "时，配置模块target和应用product之间的关联关系。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " targets"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target名称，在各个模块级build-profile.json5中的targets字段定义。HAR模块无需配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "applyToProducts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target关联的product。HAR模块无需配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "modules字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"modules\": [\n    {\n      \"name\": \"entry\",\n      \"srcPath\": \"./entry\",\n      \"targets\": [\n        {\n          \"name\": \"default\",\n          \"applyToProducts\": [  \n            \"default\"    // 表示将该模块下的\"default\" Target打包到\"default\" Product中\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "signingconfigs",
      children: "signingConfigs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "signingConfigs是一个对象数组，用于配置签名方案，可配置多个。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " signingConfigs"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名方案的名称，仅支持数字和字母，长度为1~64个字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table1269413811158",
              children: "material"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["签名方案相关材料，如密码、证书等。  通过", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "File > Project Structure... > Project > Signing Configs"
              })
            }), "界面，进行自动签名后，material节点中的各配置项会自动填充。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名类型：   - HarmonyOS - OpenHarmony"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      }), " material"]
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
            children: "storePassword"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥库密码，以密文形式呈现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certpath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调试或发布证书文件地址，文件后缀为.cer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyAlias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥别名信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyPassword"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥密码，以密文形式呈现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调试或发布证书Profile文件地址，文件后缀为.p7b。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signAlg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥库signAlg参数。当前可配置值SHA256withECDSA。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "storeFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥库文件地址，文件后缀为.p12。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "signingConfigs字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": { \n    \"signingConfigs\": [\n      {\n        \"name\": \"default\",\n        \"type\": \"HarmonyOS\",\n        \"material\": {  \n          \"certpath\": \"D:\\\\SigningConfig\\\\debug_hos.cer\",\n          \"storePassword\": \"******\",\n          \"keyAlias\": \"debugKey\",\n          \"keyPassword\": \"******\",\n          \"profile\": \"D:\\\\SigningConfig\\\\debug_hos.p7b\", \n          \"signAlg\": \"SHA256withECDSA\",\n          \"storeFile\": \"D:\\\\SigningConfig\\\\debug_hos.p12\"\n        }\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "products",
      children: "products"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["products是一个对象数组，用于配置产品品类信息，可配置多个，如通用默认版、付费版、免费版等。如需配置多个，相关说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products",
        children: "配置多目标产物"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表7"
        })
      }), " products"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "产品的名称，必须存在name为\"default\"的product。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signingConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前产品品类的签名方案名称，需要在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section153288223224",
              children: "signingConfigs.name"
            }), "中定义。如果没有配置，默认不签名。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compatibleSdkVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串/数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用/元服务运行所需兼容的最低SDK版本，应用/元服务不能安装在低于该版本的设备。当前支持的版本参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-allversion",
              children: "所有HarmonyOS版本"
            }), "。相关字段与应用兼容性关系参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility",
              children: "应用兼容性说明"
            }), "。   - 运行环境是HarmonyOS时，字段类型是字符串，配置示例：\"compatibleSdkVersion\": \"6.1.0(23)\"。 - 运行环境是OpenHarmony时，字段类型是数值，配置示例：\"compatibleSdkVersion\": 23。   说明：  构建APP包时，打包工具会对HSP和HAP的compatibleSdkVersion字段进行校验，满足条件的才能打包，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool",
              children: "打包工具"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetSdkVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串/数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识应用/元服务运行所需目标SDK版本，是系统提供的前向兼容手段。如果新SDK版本中API行为发生变更，将应用/元服务安装到新系统后，可通过该字段提供向前兼容手段，在新系统版本保持老的API行为。  如未配置，默认与compileSdkVersion保持一致。当前支持的版本参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-allversion",
              children: "所有HarmonyOS版本"
            }), "。相关标签与应用兼容性关系参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility",
              children: "应用兼容性说明"
            }), "。   - 运行环境是HarmonyOS时，字段类型是字符串，配置示例：\"targetSdkVersion\": \"6.1.0(23)\"。 - 运行环境是OpenHarmony时，字段类型是数值，配置示例：\"targetSdkVersion\": 23。   说明：  - 建议配置该字段。 - 构建APP包时，打包工具会对HSP和HAP的targetSdkVersion字段进行校验，满足条件的才能打包，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool",
              children: "打包工具"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compileSdkVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串/数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识编译应用/元服务所使用的SDK版本。当前支持的版本参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-allversion",
              children: "所有HarmonyOS版本"
            }), "。相关标签与应用兼容性关系参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/app-compatibility",
              children: "应用兼容性说明"
            }), "。   - 运行环境是HarmonyOS时，字段类型是字符串，配置示例：\"compileSdkVersion\": \"6.1.0(23)\"。 - 运行环境是OpenHarmony时，字段类型是数值，配置示例：\"compileSdkVersion\": 23。   说明：  - 运行环境是HarmonyOS时，该字段不需要显性配置，编译时默认使用DevEco Studio内置的SDK版本。如果配置，只能配置为当前DevEco Studio配套的SDK版本，不允许配置为其他SDK版本。 - 运行环境是OpenHarmony时，必须配置该字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compatibleSdkVersionStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当compatibleSdkVersion为API 12时，用于控制不同beta版本的兼容，默认值为beta1，应用/元服务不能安装在低于该版本的设备。  当compatibleSdkVersion高于API 12时，该字段无效，无需配置。  说明：  配置betaX就能生成在对应betaX版本镜像上运行的应用，但是无法使用高于betaX版本的特性，例如在API 12中beta3版本提供的sendable function和lazy import两个特性在配置beta2或beta1时无法正常使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "产品的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14222051575",
              children: "buildOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "产品的编译构建配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "runtimeOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "产品的运行环境：   - HarmonyOS - OpenHarmony"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arkTSVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS语法检查工具的版本号：1.0，1.1。  默认为当前ArkTS语法检查工具支持的最新版本。  仅API 11及以上版本工程支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包的类型：   - app：应用 - atomicService：元服务 - shared：共享包"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的名称。  说明：  配置products中的label、icon、versionCode、versionName、resource字段后，编译构建时将根据此处的配置替换app.json5中的相关配置，常用于应用和元服务可分可合构建打包场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的版本名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的构建版本号。  从DevEco Studio 6.1.0 Beta2版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table49010413236",
              children: "resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "名称和图标对应的资源所在目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table41925113333",
              children: "output"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定制产品生成的应用包的配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vendor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "供应商。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表8"
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
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源地址路径。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表9"
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
      children: "products字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"products\": [\n    {\n      \"name\": \"default\",\n      \"signingConfig\": \"default\",\n      \"bundleName\": \"com.example.myapplication\",\n      \"compatibleSdkVersion\": \"6.1.0(23)\",\n      \"targetSdkVersion\": \"6.1.0(23)\",\n      \"runtimeOS\": \"HarmonyOS\",\n      \"arkTSVersion\": \"1.1\",\n      \"bundleType\": \"app\",\n      \"label\": \"$string:app_name\",\n      \"icon\": \"$media:app_background\",\n      \"versionCode\": 1000000,\n      \"versionName\": \"1.0.0\",\n      \"buildVersion\": \"1\",\n      \"resource\": {\n        \"directories\": [\n          \"./AppScope/resources\"\n        ]\n      },\n      \"output\": {\n        \"artifactName\": \"customizedTargetOutputName-1.0.0\"\n      },\n      \"vendor\": \"customizedProductVendorName\",\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildmodeset",
      children: "buildModeSet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "buildModeSet是一个对象数组，表示构建模式集合，可配置多个构建模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表10"
        })
      }), " buildModeSet"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建模式名称。默认生成debug，release和test三种模式，支持开发者自定义，其中test模式虽然没有出现在配置文件中，但是利用测试框架开启测试时会自动使用test编译模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14222051575",
              children: "buildOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建模式使用的具体配置信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capabilities",
      children: "capabilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["capabilities是应用开通的开放能力，具体开通方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section20943184413328",
        children: "关联注册应用进行签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表11"
        })
      }), " capabilities"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前开放能力归属的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section746298142519",
              children: "config"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "具体的开放能力配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "config",
      children: "config"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表12"
        })
      }), " config"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开放能力名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开放能力的唯一标识符。如果subCapabilities不存在，则该值必填。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#table98912388270",
              children: "subCapabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "具体的子开放能力。如果存在子开放能力，则该值必填。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表13"
        })
      }), " subCapabilities"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子开放能力名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子开放能力的唯一标识符。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildoption",
      children: "buildOption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["buildOption是构建使用的具体配置信息，buildModeSet和products下均支持配置buildOption。此外，模块级build-profile.json5中也支持配置buildOption。工程级别buildOption配置会与模块级别的buildOption进行合并，具体合并规则和优先级请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section1727865610255",
        children: "合并编译选项规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表14"
        })
      }), " buildOption"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#section03812484215",
              children: "packOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包相关配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "debuggable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前编译产物是否为可调试模式：   - true：可调试。构建的产物包的ets目录下存在sourceMaps.map文件，此文件包含源码映射等信息。 - false：不可调试。   如果未配置debuggable字段，使用release的编译模式时，默认值为false，使用其他编译模式时，默认值为true。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section5494153192911",
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
              href: "#section15753419515",
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
              href: "#section1488712919295",
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
              href: "#section111543473013",
              children: "arkOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS 编译配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section13181758123312",
              children: "strictMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "严格模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nativeCompiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定Native编译时使用的编译器，包括：   - Original（缺省默认值）：原有的OpenHarmony Native编译器。 - BiSheng：使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/build-with-ndk/bisheng-compiler",
              children: "毕昇编译器"
            }), "进行Native编译。   说明：  升级到DevEco Studio 5.1.1 Release版本后，新建Native C++工程默认使用毕昇编译器，打开历史工程会弹窗提示，点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "立即体验"
              })
            }), "可以切换使用毕昇编译器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section99591415322",
              children: "removePermissions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译HAP/HSP模块时，指定需要删除的依赖包中的冗余权限，模块本身的权限不会被删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preloadSystemSo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否收集应用入口所使用的系统so，收集的系统so会在应用冷启动时进行预加载，优化应用的冷启动性能。   - true：收集。 - false（缺省默认值）：不收集。   从DevEco Studio 6.0.0 Beta3版本开始支持。  说明：  - 应用入口：在module.json5的module下配置的srcEntry标签，或者在module.json5的abilities中配置了具有入口能力的skills标签（即配置了entity.system.home和ohos.want.action.home）。 - 仅支持HAP和字节码HAR，编译HAP时，被应用入口import的文件或者源码HAR，如果存在系统so，也会被收集；字节码HAR在被集成时，系统so会被合并到HAP中。 - 变量动态import不支持收集。 - preloadSystemSo和hvigor-config.json5文件的ohos.arkCompile.singleFileEmit字段互斥，不支持同时设置为true。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "packoptions",
      children: "packOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "packOptions是打包相关配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表15"
        })
      }), " packOptions"]
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
            children: "buildAppSkipSignHap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建APP时，是否跳过生成签名HAP：   - true：跳过，即不生成签名HAP。 - false（缺省默认值）：不跳过，即生成签名HAP。   编译构建APP时，无需生成签名HAP，可将此参数修改为true，从而提升编译构建性能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fastBuildApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建APP时，是否在模块下生成HAP/HSP产物。   - true：不生成HAP/HSP产物，直接生成APP产物，可加快构建速度。 - false（缺省默认值）：生成HAP/HSP产物，同时生成APP产物。   说明：  - 当fastBuildApp配置为true时，无论buildAppSkipSignHap配置为true还是false，都不会生成HAP产物。 - 当fastBuildApp配置为false时，是否生成HAP产物，以buildAppSkipSignHap配置为准。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableSourceCodeCheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否检查HAP/HSP/HAR包（不包括未开启混淆的源码HAR）产物中的源码文件，如果检查，当产物中存在源码文件时，编译时会进行Warning提示。   - true（缺省默认值）：检查。 - false：不检查。   从DevEco Studio 6.0.0 Beta3版本开始支持。  说明：  - 源码文件是指包含以下后缀的文件：['.c', '.h', '.cpp', '.cs', '.java', '.rs', '.py', '.go', '.ets', '.js', '.ts']。 - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section19788284410",
              children: "release模式编译的混淆源码har包"
            }), "中的'.js', '.ts'和'.d.ets'文件不会被检查。 - resources目录下的'.js'文件不会被检查。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deduplicateHar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["构建APP/HAP/HSP时，当HAP/HSP依赖相同的HAR时（包括HAP和HSP依赖相同的HAR，多个HSP依赖相同的HAR），是否去除HSP中重复的HAR，减少包体积。   - true：去除，HAR仅会打包到HAP中，同时需要配置以下字段。   - 工程级build-profile.json5中配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section5494153192911",
              children: "idDefinedFilePath"
            }), "。   - 工程级build-profile.json5的useNormalizedOHMUrl配置为true。   - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
              children: "module.json5"
            }), "的libIsolation配置为false。 - false（缺省默认值）：不去除，HAR会打包到每个HAP/HSP中。   说明：  - 从DevEco Studio 6.0.1 Beta1版本开始支持，并且设备系统需要升级到6.0.1(21)，工程级build-profile.json5的compatibleSdkVersion需要配置为6.0.1(21)。 - 多个HSP依赖相同的HAR时，依赖HSP的HAP需要显式配置依赖该HAR。 - 仅支持本地HSP模块，不支持已打包的HSP包。 - 不支持去除重复HAR的场景：   - 一个应用包含多个HAP时   - 单独运行或调试HSP   - 仪器测试和本地单元测试   - 预览场景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appWithSignedPkg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建APP时，除了默认的app包之外，是否额外生成产物名称带all的app包（xxx-all-unsigned.app和xxx-all-signed.app），app包里的hap和hsp都是签名的包。   - true：除了默认的app包之外，额外生成产物名称带all的app包，包里的hap和hsp都是签名的包。 - false（缺省默认值）：只生成默认的app包，包里的hap和hsp都是未签名的包。   从DevEco Studio 6.0.2 Beta1版本开始支持。  说明：  要生成xxx-all-unsigned.app和xxx-all-signed.app，除了appWithSignedPkg配置为true之外，需要确保已配置签名材料，并且hvigor-config.json5中的enableSignTask未配置为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableIncrementalSoCompress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建HAP/HSP时，如果工程中包含大量so并开启了压缩so体积的配置开关（module.json5的compressNativeLibs或hvigor-config.json5的ohos.pack.compressLevel），可以开启此开关复用上一次构建已经压缩好的so，加快打包速度。   - true：开启增量压缩，如果so包内容未改变，HAP/HSP将会复用已经压缩好的so包。 - false（缺省默认值）：不开启增量压缩，每次构建对所有so重新进行压缩。   从DevEco Studio 6.1.0 Beta1版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"packOptions\": {\n    \"buildAppSkipSignHap\": true,\n    \"fastBuildApp\": false,\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resoptions",
      children: "resOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resOptions是资源编译配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表16"
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
              href: "#table263894423012",
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
            children: "编译HAP/HSP模块时，指定不参与资源编译的三方HAR包的包名，配置后，依赖HAR包中的资源不会被打包到产物中，支持直接依赖和间接依赖。  从DevEco Studio 6.0.0 Beta2版本开始支持。  说明：  该字段仅对编译HAP/HSP生效。"
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
            children: "idDefinedFilePath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用HAR包去重能力时（即工程级build-profile.json5的deduplicateHar配置为true），指定用户自定义的json5文件路径，用于固定资源id，支持绝对/相对路径，文件示例如下。  去除重复的HAR包后，HAR仅会打包到HAP中，因此HSP需要通过这些固定的id，跨包访问HAP中的资源。  从DevEco Studio 6.0.1 Beta1版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "idDefinedFilePath指定的固定资源id的json5文件示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// id-config.json5\n{\n  \"record\": [{\n    \"type\": \"string\",        // 资源类型，推荐应用内所有的资源都固定id\n    \"name\": \"app_name\",      // 资源名称\n    \"id\": \"0x01000000\"       // 用户自定义的资源id，仅支持十六进制，支持的id范围是[0x01000000, 0x06FFFFFF]，[0x08000000, 0xFFFFFFFF]\n  }, {\n    \"type\": \"float\",\n    \"name\": \"float1\",\n    \"id\": \"0x01000001\"\n  }, {\n    \"type\": \"media\",\n    \"name\": \"background\",\n    \"id\": \"0x01000002\"\n  }, {\n    \"type\": \"profile\",\n    \"name\": \"profile1\",\n    \"id\": \"0x01000003\"\n  }]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表17"
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
            children: "是否将src/main/ets目录下的资源文件（.ets/.ts/.js以外的其他文件）打包到产物中。   - true（缺省默认值）：打包。 - false：不打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "includes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 当enable为true时，用于指定打包的资源文件，其他资源文件均不会打包到产物中，支持glob语法，以\"**/\"开头。 - 当enable为false时，includes不生效。   从DevEco Studio 6.0.0 Beta2版本开始支持。  说明：  includes和excludes互斥，只能配置一个。"
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
        src: (__webpack_require__(181134)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块的src/main/ets目录下，编译时仅处理.ets/.ts/.js文件，其他文件会被当作资源文件打包进产物中，不会进行混淆或加密，如需过滤请配置excludes字段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请勿将源码等文件放在以.开头的系统隐藏目录中，可能会导致过滤规则失效，会将src/main/ets目录下的所有文件作为资源文件打包进产物中，不会进行混淆或加密。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resOptions字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"resOptions\": {\n    \"resCompileThreads\": 2,\n    \"copyCodeResource\": {\n      \"enable\": true,\n      \"excludes\": ['**/entry/src/main/ets/component/big_picture.png', '**/*.yml', '**/subDir/**'],   // includes字段配置方式相同\n    },\n    \"ignoreResourcePattern\": ['*.png' ,'abc.json'],\n    \"excludeHarRes\": ['har'],\n    \"idDefinedFilePath\": \"./id-config.json5\",    // 支持绝对路径和相对路径\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sourceoption",
      children: "sourceOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sourceOption是源码相关配置，使用不同的标签对源代码进行分类，以便在构建过程中对不同的源代码进行不同的处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表18"
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
          children: "表19"
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
          children: "表20"
        })
      }), " arkOptions"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-get-build-profile-para",
              children: "buildProfileFields"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于ArkTS的构建配置。自定义类型，key可由数字、英文、下划线、中划线组成，value类型仅支持string、number、boolean。"
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
              href: "#table1714014154115",
              children: "tscConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与编译TS语法相关的配置选项。"
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
            children: "自定义添加\"lazy\"关键字的模块，仅当build-profile.json5中的autoLazyImport或hvigor-config.json5中的ohos.defaults.autoLazyImport配置为true时生效。  从DevEco Studio 6.0.1 Beta1版本开始支持。"
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
            children: "branchElimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否启用代码分支裁剪，减少编译产物大小，开启后，在release编译模式下，不会被执行到的代码分支会被裁剪掉，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#li12224142193612",
              children: "branchElimination示例"
            }), "。   - true：启用（将导致使用\"ApplyChanges\"功能时，对const声明的常量的值进行的修改可能不生效）。 - false（缺省默认值）：不启用。   说明：  - 仅支持API 11及以上的Stage模型。 - HAR模块仅字节码HAR配置生效，非字节码HAR配置不生效。 - 仅支持const声明的bool类型常量和const声明的string/number类型常量的判断表达式。 - 不支持间接导入，例如A文件中定义const变量A1，B文件导入A1，导出B1，ets导入B1进行判断，无法进行裁剪。"]
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
            children: "import路径展开相关配置选项。  从DevEco Studio 6.0.0 Beta3版本开始支持。"
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
            children: "是否启用配置文件引导优化功能：   - true：启用。 - false（缺省默认值）：不启用。   从API 10开始废弃，由于partial模式可能存在兼容性问题，请使用Target AOT能力，不建议使用Host AOT。"
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
          children: "表21"
        })
      }), " tscConfig"]
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
            children: "targetESVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定TS语法编译产物的目标运行时EcmaScript版本，包括：   - ES2017 - ES2021（缺省默认值）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFlowDepth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置最大控制流递归深度，范围为[2000,65535]，默认为2000。  该字段从DevEco Studio 5.1.0 Release版本开始支持。  说明：  maxFlowDepth不支持动态修改，即在hvigorfile.ts/hvigorconfig.ts文件中，不支持通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context#section16692151412211",
              children: "setBuildProfileOpt"
            }), "方法设置maxFlowDepth。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表22"
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
            }), "。   - true：启用。 - false（缺省默认值）：不启用。   说明：  - import XXX from 'A'，A必须为本地HAR模块，并且仅当A为包名时支持进行展开，A为相对路径或包名+路径都不支持展开。 - HAR模块单独编译时不生效。"]
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
          children: "表23"
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
            children: "- 当autoLazyImport或ohos.defaults.autoLazyImport为true时，指定自动添加\"lazy\"关键字的包名（即oh-package.json5中的name），其他包不会添加\"lazy\"关键字，支持正则语法。 - 当autoLazyImport为false时，include不生效。   说明：  - include和exclude互斥，只能配置一个。 - include不支持配置空数组或空字符串，至少配置一个包名，并且包名不能重复。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exclude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 当autoLazyImport或ohos.defaults.autoLazyImport为true时，指定不添加\"lazy\"关键字的包名，其他包都会添加\"lazy\"关键字，支持正则语法。 - 当autoLazyImport为false时，exclude不生效。   说明：  - include和exclude互斥，只能配置一个。 - exclude不支持配置空数组或空字符串，至少配置一个包名，并且包名不能重复。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arkOptions字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"arkOptions\": {\n    \"buildProfileFields\": {\n      \"targetData\": \"TargetData\",\n      \"data\": \"DataTargetDefault\"\n    },\n    \"tscConfig\": {\n      \"targetESVersion\": \"ES2021\",\n      \"maxFlowDepth\": 3000,\n    },\n    \"autoLazyImport\": true,\n    \"autoLazyFilter\": {\n      \"include\": ['entry']\n    },\n    \"reExportCheckMode\": \"compatible\",\n    \"branchElimination\": true,\n    \"expandImportPath\": {\n      \"enable\": true,\n      \"exclude\": ['localhar']\n    },\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strictmode",
      children: "strictMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strictMode用于定义严格模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表24"
        })
      }), " strictMode"]
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
            children: "noExternalImportByPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否严格检查绝对路径导入方式和相对路径跨模块导入方式。   - true：严格检查。 - false：不严格检查。   说明：  从DevEco Studio NEXT Beta1（5.0.3.800）版本开始，当工程级build-profile.json5中useNormalizedOHMUrl配置为true时，noExternalImportByPath缺省默认值为true；当useNormalizedOHMUrl配置为false时，noExternalImportByPath缺省默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useNormalizedOHMUrl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否使用标准化的OHMUrl（OHMUrl的定义参考以下说明）格式，标准化的OHMUrl统一了原有OHMUrl的格式。使用集成态HSP和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section16598338112415",
              children: "字节码HAR"
            }), "需使用标准化的OHMUrl格式。   - true：使用标准化的OHMUrl格式。 - false（缺省默认值）：不使用标准化的OHMUrl格式。   说明：  - 从API 12开始支持。 - 一个ets文件在编译后会成为安装包的一部分，这个ets文件对应的字节码称为一个字节码段，OHMUrl是用来定位一个字节码段的标识。 - 若工程引用了HAR/HSP，需确保工程的useNormalizedOHMUrl配置和HAR/HSP的useNormalizedOHMUrl配置保持一致，同时配置为true或false。 - useNormalizedOHMUrl设置为true时，可能对本地源码HAR的混淆产生影响，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-practice#%E6%9C%AC%E5%9C%B0%E6%BA%90%E7%A0%81har%E5%8C%85",
              children: "本地源码HAR包"
            }), "。 - 从DevEco Studio NEXT Beta1（5.0.3.800）版本开始，当useNormalizedOHMUrl设置为true时，不允许通过相对路径跨模块或绝对路径导入文件，oh-package.json5中依赖的包使用的别名需要和依赖包的oh-package.json5的name保持一致，具体的适配指导请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/ide-changelog-500-release#section1130320228353",
              children: "变更说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "caseSensitiveCheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入文件是否严格校验大小写，支持相对路径和软链接。   - true：严格校验。 - false（缺省默认值）：不严格校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "duplicateDependencyCheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否校验本地HSP模块有无依赖相同的HAR。仅在Build App(s)起效。   - true：如果本地HSP模块依赖了相同的HAR（包括本地/远程、直接/间接），则编译报错。（注意：当依赖链中存在远程HSP，则该远程HSP及其依赖链不参与校验）。 - false（默认缺省值）：不启用校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "harLocalDependencyCheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否对HAR产物启用本地依赖校验。   - true：如果oh-package.json5中的dependencies、dynamicDependencies存在本地依赖，则编译报错。 - false（默认缺省值）：不启用校验。   说明：  除HAR模块外，HSP模块编译时也会生成HAR产物，该配置同样生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableStrictCheckOHModule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用远程HAR/HSP包中的方法时，是否严格校验传入参数的类型。   - true：严格校验，如果参数类型是undefined/null，报Error错误。 - false（默认缺省值）：不严格校验，如果参数类型是undefined/null，报Warning告警。   从DevEco Studio 6.0.1 Beta1版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disableSendableCheckRules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定需要关闭校验的Sendable规则，当前仅支持配置\"arkts-sendable-class-decorator\"，表示支持在Sendable class上使用自定义装饰器。具体检查规则请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints#sendable%E7%B1%BB%E5%92%8Csendable%E5%87%BD%E6%95%B0%E7%A6%81%E6%AD%A2%E4%BD%BF%E7%94%A8%E9%99%A4sendable%E5%A4%96%E7%9A%84%E8%A3%85%E9%A5%B0%E5%99%A8",
              children: "Sendable类和Sendable函数禁止使用除@Sendable外的装饰器"
            }), "。  从DevEco Studio 6.0.2 Beta1版本开始支持。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strictMode字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"strictMode\": {\n    \"useNormalizedOHMUrl\": true,\n    \"caseSensitiveCheck\": true,\n    \"disableSendableCheckRules\": [\"arkts-sendable-class-decorator\"],\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removepermissions",
      children: "removePermissions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removePermissions是一个对象数组，用于编译HAP/HSP模块时，指定需要删除的依赖包中的冗余权限，模块本身的权限不会被删除。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表25"
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
          children: "表26"
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
          children: "表27"
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
          children: "表28"
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
          children: "表29"
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
          children: "表30"
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
              children: "resolution:[   [     { width:32, height:32 },  // 最小宽高     { width:64, height:64 },  // 最大宽高   ],  // 分辨率在32*32到64*64之间的图片   [     { width:200, height:200 }, // 最小宽高     // 此处第2个不填表示最大宽高是无限大   ],  // 分辨率大于200*200的图片 ]"
            }), "  - width和height只能是数字。 - 最大宽高可以省略，表示无限大。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表31"
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
181134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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