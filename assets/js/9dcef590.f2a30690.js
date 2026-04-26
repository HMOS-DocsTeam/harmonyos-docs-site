"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["436265"], {
374468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_customization_ide_hvigor_get_build_profile_para_ide_hvigor_get_build_profile_para_guide_ide_hvigor_get_build_profile_para_guide_md_9dc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-customization-ide-hvigor-get-build-profile-para-ide-hvigor-get-build-profile-para-guide-ide-hvigor-get-build-profile-para-guide-md-9dc.json
var site_docs_ide_build_customization_ide_hvigor_get_build_profile_para_ide_hvigor_get_build_profile_para_guide_ide_hvigor_get_build_profile_para_guide_md_9dc_namespaceObject = JSON.parse('{"id":"ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-guide/ide-hvigor-get-build-profile-para-guide","title":"能力说明","description":"在编译构建时，Hvigor会生成BuildProfile类，开发者可以通过该类在运行时获取编译构建参数，也可以在build-profile.json5中通过buildProfileFields增加自定义字段，从而在运行时获取自定义的参数。","source":"@site/docs/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-guide/ide-hvigor-get-build-profile-para-guide.md","sourceDirName":"ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-guide","slug":"/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-guide/","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"能力说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-get-build-profile-para-guide","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"实践说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-sample/"},"next":{"title":"实践说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-sample/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-guide/ide-hvigor-get-build-profile-para-guide.md


const frontMatter = {
	title: '能力说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-get-build-profile-para-guide',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '能力说明';

const assets = {

};



const toc = [{
  "value": "使用说明",
  "id": "使用说明",
  "level": 2
}, {
  "value": "HAP/HSP运行时获取编译构建参数",
  "id": "haphsp运行时获取编译构建参数",
  "level": 2
}, {
  "value": "生成BuildProfile类文件",
  "id": "生成buildprofile类文件",
  "level": 3
}, {
  "value": "在代码中获取构建参数",
  "id": "在代码中获取构建参数",
  "level": 3
}, {
  "value": "默认参数",
  "id": "默认参数",
  "level": 3
}, {
  "value": "自定义参数",
  "id": "自定义参数",
  "level": 3
}, {
  "value": "HAR运行时获取编译构建参数",
  "id": "har运行时获取编译构建参数",
  "level": 2
}, {
  "value": "生成BuildProfile类文件",
  "id": "生成buildprofile类文件-1",
  "level": 3
}, {
  "value": "在代码中获取构建参数",
  "id": "在代码中获取构建参数-1",
  "level": 3
}, {
  "value": "默认参数",
  "id": "默认参数-1",
  "level": 3
}, {
  "value": "自定义参数",
  "id": "自定义参数-1",
  "level": 3
}, {
  "value": "工程级配置自定义构建参数",
  "id": "工程级配置自定义构建参数",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "能力说明",
        children: "能力说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在编译构建时，Hvigor会生成BuildProfile类，开发者可以通过该类在运行时获取编译构建参数，也可以在build-profile.json5中通过buildProfileFields增加自定义字段，从而在运行时获取自定义的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "buildProfileFields的优先级：模块级target > 模块级buildOptionSet > 模块级buildOption > 工程级product > 工程级buildModeSet"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "haphsp运行时获取编译构建参数",
      children: "HAP/HSP运行时获取编译构建参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成buildprofile类文件",
      children: "生成BuildProfile类文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前有以下几种方式可以生成BuildProfile类文件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选中需要编译的模块，在菜单栏选择“Build > Generate Build Profile ${moduleName}”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在菜单栏选择“Build > Build Hap(s)/APP(s) > Build Hap(s)”或“Build > Build Hap(s)/APP(s) > Build APP(s)”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Terminal中执行如下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw GenerateBuildProfile\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行完上述操作后，将在“${moduleName} / build / ${productName} / generated / profile / ${targetName} ”目录下生成BuildProfile.ets文件。示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(861297)/* ["default"] */.A) + "",
        width: "1243",
        height: "576"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在代码中获取构建参数",
      children: "在代码中获取构建参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成BuildProfile类文件后，在代码中可以通过如下方式引入该文件，其中packageName是模块级oh-package.json5文件中name字段对应的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import BuildProfile from '${packageName}/BuildProfile';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(954801)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HSP中使用import BuildProfile from 'BuildProfile'在跨包集成HSP的时候可能会产生编译错误，推荐使用import BuildProfile from '${packageName}/BuildProfile'。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过如下方式获取到构建参数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@State message: string = BuildProfile.BUNDLE_NAME;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "默认参数",
      children: "默认参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成BuildProfile类文件时，Hvigor会根据当前工程构建的配置信息生成一部分默认参数，开发者可以在代码中直接使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 默认参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUNDLE_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的Bundle名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUNDLE_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的Bundle类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VERSION_CODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VERSION_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用版本号的文字描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TARGET_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRODUCT_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUILD_MODE_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用是否可调试。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义参数",
      children: "自定义参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以在模块级的build-profile.json5文件中增加自定义参数，在生成BuildProfile类文件后，在代码中使用自定义参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义参数可以在buildOption、buildOptionSet、targets节点下的arkOptions子节点中通过增加buildProfileFields字段实现，自定义参数通过key-value键值对的方式配置，其中value取值仅支持number、string、boolean类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"apiType\": \"stageMode\",\n  \"buildOption\": {\n    \"arkOptions\": {\n      \"buildProfileFields\": {\n        \"data\": \"Data\",\n      }\n    }\n  },\n  \"buildOptionSet\": [\n    {\n      \"name\": \"release\",\n      \"arkOptions\": {\n        \"buildProfileFields\": {\n          \"buildOptionSetData\": \"BuildOptionSetDataRelease\",\n          \"data\": \"DataRelease\"\n        }\n      }\n    },\n    {\n      \"name\": \"debug\",\n      \"arkOptions\": {\n        \"buildProfileFields\": {\n          \"buildOptionSetData\": \"BuildOptionSetDataDebug\",\n          \"data\": \"DataDebug\"\n        }\n      }\n    }\n  ],\n  \"targets\": [\n    {\n      \"name\": \"default\",\n      \"config\": {\n        \"buildOption\": {\n          \"arkOptions\": {\n            \"buildProfileFields\": {\n              \"targetData\": \"TargetData\",\n              \"data\": \"DataTargetDefault\"\n            }\n          }\n        }\n      }\n    },\n    {\n      \"name\": \"default1\",\n      \"config\": {\n        \"buildOption\": {\n          \"arkOptions\": {\n            \"buildProfileFields\": {\n              \"targetData\": \"TargetData1\",\n              \"data\": \"DataTargetDefault1\"\n            }\n          }\n        }\n      }\n    },\n    {\n      \"name\": \"ohosTest\",\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "har运行时获取编译构建参数",
      children: "HAR运行时获取编译构建参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成buildprofile类文件-1",
      children: "生成BuildProfile类文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前有以下几种方式可以生成BuildProfile类文件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选中需要编译的模块，在菜单栏选择“Build > Generate Build Profile ${moduleName}”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选中需要编译的模块，在菜单栏选择“Build > Make Module ${moduleName}”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Terminal中执行如下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw GenerateBuildProfile\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行完上述操作后，将在模块根目录下生成BuildProfile.ets文件（该文件可放置在.gitignore文件中进行忽略）。示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(576327)/* ["default"] */.A) + "",
        width: "1245",
        height: "411"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在代码中获取构建参数-1",
      children: "在代码中获取构建参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成BuildProfile类文件后，在代码中可以通过相对路径引入该文件，如在HAR模块的Index.ets文件中使用该文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import BuildProfile from './BuildProfile';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过如下方式获取到构建参数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const HAR_VERSION: string = BuildProfile.HAR_VERSION;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(255823)/* ["default"] */.A) + "",
        width: "930",
        height: "202"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "默认参数-1",
      children: "默认参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成BuildProfile类文件时，Hvigor会根据当前工程构建的配置信息生成一部分默认参数，开发者可以在代码中直接使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 默认参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAR_VERSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAR版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUILD_MODE_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用是否可调试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TARGET_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义参数-1",
      children: "自定义参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以在模块级的build-profile.json5文件中增加自定义参数，在生成BuildProfile类文件后，在代码中使用自定义参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义参数可以在buildOption、buildOptionSet节点下的arkOptions子节点中通过增加buildProfileFields字段实现，自定义参数通过key-value键值对的方式配置，其中value取值仅支持number、string、boolean类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"apiType\": \"stageMode\",\n  \"buildOption\": {\n    \"arkOptions\": {\n      \"buildProfileFields\": {\n        \"data\": \"Data\",\n      }\n    }\n  },\n  \"buildOptionSet\": [\n    {\n      \"name\": \"release\",\n      \"arkOptions\": {\n        \"buildProfileFields\": {\n          \"buildOptionSetData\": \"BuildOptionSetDataRelease\",\n          \"data\": \"DataRelease\"\n        }\n      }\n    },\n    {\n      \"name\": \"debug\",\n      \"arkOptions\": {\n        \"buildProfileFields\": {\n          \"buildOptionSetData\": \"BuildOptionSetDataDebug\",\n          \"data\": \"DataDebug\"\n        }\n      }\n    }\n  ],\n  \"targets\": [\n    {\n      \"name\": \"default\",\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工程级配置自定义构建参数",
      children: "工程级配置自定义构建参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以在工程级的build-profile.json5文件中增加自定义参数，该自定义参数会生成到所有模块的BuildProfile类文件，在代码中使用自定义参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义参数可以在工程级products、buildModeSet中的buildOption节点下的arkOptions子节点中通过增加buildProfileFields字段实现，自定义参数通过key-value键值对的方式配置，其中value取值仅支持number、string、boolean类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    \"signingConfigs\": [],\n    \"products\": [\n      {\n        \"name\": \"default\",\n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\",\n        \"runtimeOS\": \"HarmonyOS\",\n        \"buildOption\": {\n          \"arkOptions\": {\n            \"buildProfileFields\": {\n              \"productValue\": \"defaultValue\"\n            }\n          }\n        }\n      }\n    ],\n    \"buildModeSet\": [\n      {\n        \"name\": \"debug\",\n        \"buildOption\": {\n          \"arkOptions\": {\n            \"buildProfileFields\": {\n              \"productBuildModeValue\": \"debugValue\"\n            }\n          }\n        }\n      },\n      {\n        \"name\": \"release\"\n      }\n    ]\n  },\n  \"modules\": [\n    {\n      \"name\": \"entry\",\n      \"srcPath\": \"./entry\",\n      \"targets\": [\n        {\n          \"name\": \"default\",\n          \"applyToProducts\": [\n            \"default\"\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
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
861297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753361-68f525cda86df59c4531e14f2abfcbd7.png");

},
576327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833337-b6f2d08c4484f3dd4293be809c1db0ea.png");

},
954801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
255823(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753418-d32b3d38e9dcfad2221a41e23ca47aec.png");

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