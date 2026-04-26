"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["351737"], {
920321(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_ide_hvigor_cpp_ide_hvigor_cpp_md_347_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-ide-hvigor-cpp-ide-hvigor-cpp-md-347.json
var site_docs_ide_hvigor_configuration_ide_hvigor_cpp_ide_hvigor_cpp_md_347_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration/ide-hvigor-cpp/ide-hvigor-cpp","title":"配置CPP","description":"Hvigor集成CMake、Ninja为cpp代码的构建工具。在初始状态下，无需额外配置，您也可以添加以下自定义配置，定制cpp代码编译。","source":"@site/docs/ide-hvigor-configuration/ide-hvigor-cpp/ide-hvigor-cpp.md","sourceDirName":"ide-hvigor-configuration/ide-hvigor-cpp","slug":"/ide-hvigor-configuration/ide-hvigor-cpp/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-cpp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"配置CPP","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-cpp","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"构建HAR","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-build-har/"},"next":{"title":"预构建库快速链接","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-so/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration/ide-hvigor-cpp/ide-hvigor-cpp.md


const frontMatter = {
	title: '配置CPP',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-cpp',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '配置CPP';

const assets = {

};



const toc = [{
  "value": "externalNativeOptions",
  "id": "externalnativeoptions",
  "level": 2
}, {
  "value": "nativeLib",
  "id": "nativelib",
  "level": 2
}, {
  "value": "filter",
  "id": "filter",
  "level": 3
}, {
  "value": "debugSymbol",
  "id": "debugsymbol",
  "level": 3
}, {
  "value": "librariesInfo",
  "id": "librariesinfo",
  "level": 3
}, {
  "value": "配置字段示例",
  "id": "配置字段示例",
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
        id: "配置cpp",
        children: "配置CPP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor集成CMake、Ninja为cpp代码的构建工具。在初始状态下，无需额外配置，您也可以添加以下自定义配置，定制cpp代码编译。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CPP配置包含externalNativeOptions和nativeLib，除特殊说明外，在工程级和模块级build-profile.json5文件中均支持配置，工程级配置会与模块级配置进行合并，模块级配置优先，具体合并规则和优先级请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section1727865610255",
        children: "合并编译选项规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "externalnativeoptions",
      children: "externalNativeOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "externalNativeOptions是Native编译配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " externalNativeOptions字段说明"]
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
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMake构建脚本地址，即CMakeLists.txt文件地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abiFilters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS当前支持的ABI编译环境，包括：   - arm64-v8a - x86_64   如不配置该参数，编译时默认为arm64-v8a。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串/字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMake编译参数。  Hvigor将会把此处的自定义参数传递给CMake构建工具，您可通过CMake官方文档查找您所需的编译参数，同时它也将覆盖默认同名参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cppFlags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C++编译器参数。  从DevEco Studio 6.0.1 Beta1版本开始，新增\"-iclang\"参数，提升编译效率，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-optimized/ide-hvigor-experimental-properties#section324586847",
              children: "通过IClang提升C++增量编译效率"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cFlags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C编译参数。仅模块级build-profile.json5文件支持配置。  从DevEco Studio 6.0.1 Beta1版本开始，新增\"-iclang\"参数，提升编译效率，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-optimized/ide-hvigor-experimental-properties#section324586847",
              children: "通过IClang提升C++增量编译效率"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定hvigor应构建的CMake项目中的库和可执行目标。仅模块级build-profile.json5文件支持配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nativelib",
      children: "nativeLib"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nativeLib是Native库（.so）相关配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " nativeLib字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#section17675528161517",
              children: "filter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Native 库（.so）文件的筛选选项。配置后优先级高于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section1488712919295",
              children: "napiLibFilterOption"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section2182144382320",
              children: "debugSymbol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除.so文件中的符号表、调试信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "headerPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串/字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要导出的头文件路径。  注意：  请勿将源码等文件放置在该路径下，可能会被打包到产物中，请谨慎配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "collectAllLibs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对libs目录收集打包时，是否收集所有后缀的文件。   - true：不限制后缀，即收集所有文件（包括无后缀文件）。 - false（缺省默认值）：限制后缀为.so，即只收集后缀为.so的文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludeFromHar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建HAR时，是否排除依赖HAR模块中的.so文件，排除时，依赖HAR模块的.so文件不会被打包到产物中。   - true（缺省默认值）：排除。 - false：不排除。   说明：  仅针对HAR模块生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludeSoFromInterfaceHar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-project/ide-module-management/ide-creating-har-api9/ide-hsp#section67683213597",
              children: "编译HSP模块"
            }), "时，打包的HAR产物是否排除.so文件，减少.tgz包体积大小。   - true：排除。HAR产物不包含.so文件，HSP产物包含.so文件。 - false（缺省默认值）：不排除。HAR产物和HSP产物都包含.so文件。   说明：  - 仅针对HSP模块生效。 - 当HSP模块的工程级或模块级build-profile.json5文件中配置headerPath字段时，excludeSoFromInterfaceHar字段不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludeSoFromBinXO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开启BinXO检测时，指定不需要进行二进制插桩的无源码so文件，支持正则匹配，具体使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan",
              children: "使用HWASan检测内存错误"
            }), "。  从DevEco Studio 6.1.0 Beta1版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section969845819510",
              children: "librariesInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明so的透传依赖信息。仅模块级build-profile.json5文件支持配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filter",
      children: "filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["filter是Native 库（.so）文件的筛选选项。配置后优先级高于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section1488712919295",
        children: "napiLibFilterOption"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " filter字段说明"]
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
            children: "excludes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据正则表达式排除匹配到的.so文件，匹配到的so文件将不会被打包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pickFirsts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照.so文件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#li143214241919",
              children: "优先级顺序"
            }), "，打包最高优先级的.so文件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pickLasts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照.so文件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#li143214241919",
              children: "优先级顺序"
            }), "，打包最低优先级的.so文件。"]
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#li1737916541996",
              children: "select"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "select提供native产物的精准选择能力，根据包名、版本、产物名称等，选择打包或排除native产物到HAP/HSP/HAR产物。  select的优先级高于excludes、pickFirsts等配置项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "库文件so的优先级"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "库文件so的优先级顺序，可以通过pickFirsts，pickLasts选项来选择，其中pickFirsts选择高优先级的库文件，pickLasts选择低优先级的库文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这个优先级是由本模块的依赖模块或三方包的收集顺序决定的，本模块的依赖在oh-package.json5文件的dependencies配置中声明，优先级顺序如下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "三方包（包括远程三方包及本地har包）的优先级高于本地依赖模块的优先级。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "按照广度优先的遍历方式来收集依赖，如下图，优先级顺序为current > library0 > library1 > library5 > library2 > library3 > library4。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(554919)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "2769",
                height: "2638"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "select"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表4"
            })
          }), " select字段说明"]
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
                children: "package"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "包名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "version"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "包版本。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "includePattern"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当依赖的多个包中存在重名的native产物时，指定需要打包的native产物，支持glob语法。  从DevEco Studio 6.0.0 Beta2版本开始支持。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "excludePattern"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "指定排除的native产物，默认打包所有产物，支持glob语法。excludePattern优先级比includePattern高。  从DevEco Studio 6.0.0 Beta2版本开始支持。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "include"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当依赖的多个包中存在重名的native产物时，指定需要打包的native产物。  从DevEco Studio 6.0.0 Beta2版本开始，字段标记为废弃，推荐使用includePattern字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "exclude"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "指定排除的native产物，默认打包所有产物。  从DevEco Studio 6.0.0 Beta2版本开始，字段标记为废弃，推荐使用excludePattern字段。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(99525)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "includePattern/excludePattern字段和include/exclude字段不能同时配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "****示例一：****entry模块依赖har包@ohos/curl和har1包@ohos/curl1，har包和har1包中的.so文件如下，两个包中存在重名的libcurl.so，可通过includePattern选择需要打包的libcurl.so，同时通过excludePattern排除不需要的产物。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// har包@ohos/curl的目录结构\n└── har\n    └── libs\n        └── x86_64\n            └── libcurl.so\n            └── libcurl1.so\n        └── arm64-v8a\n            └── libcurl2.so\n            └── libcurl3.so\n            └── libcurl4.so\n// har1包@ohos/curl1的目录结构\n└── har1\n    └── libs\n        └── x86_64\n            └── libcurl.so\n// build-profile.json5\n{\n  buildOption: {\n    nativeLib: {\n      filter: {\n        select: [ // select的优先级高于excludes、pickFirsts等配置项\n          {\n            package: \"@ohos/curl\", // 包名\n            version: \"1.3.5\", // 包版本\n            excludePattern: ['**/arm64-v8a/**'],    // 排除har包arm64-v8a目录下的所有.so文件\n           },\n          {\n            package: \"@ohos/curl1\", // 包名\n            version: \"1.3.5\", // 包版本\n            includePattern: ['**/x86_64/libcurl.so'],  // 针对重名的libcurl.so，指定打包har1包中的libcurl.so\n            // include: [\"libcurl.so\"]  // 针对重名的libcurl.so，指定打包har1包中的libcurl.so\n           },\n        ]\n      }\n    }\n  }\n}\n// 打包后hap包的目录结构\n└── entry-default.hap\n    └── libs\n        └── x86_64\n            └── libcurl.so    // 来自har1包\n            └── libcurl1.so   // 来自har包\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "****示例二：****har包中存在多个.so文件，需要打包其中的libcurl1.so和libcurl2.so。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// har包@ohos/curl的目录结构\n└── libs\n    └── arm64-v8a\n        └── libcurl.so\n        └── libcurl1.so\n        └── libcurl2.so\n// build-profile.json5\n{\n  buildOption: {\n    nativeLib: {\n      filter: {\n        select: [  // select的优先级高于excludes、pickFirsts等配置项\n          {\n            package: \"@ohos/curl\", // 包名\n            version: \"1.3.5\", // 包版本\n            includePattern: [],\n            excludePattern: ['**/arm64-v8a/!(*(libcurl1|libcurl2).so*)'], // 打包arm64-v8a目录下的libcurl1.so和libcurl2.so\n            // include: [],\n            // exclude: [\"libcurl.so\"] // 打包arm64-v8a目录下的libcurl1.so和libcurl2.so\n           }\n        ]\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debugsymbol",
      children: "debugSymbol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "debugSymbol用于移除.so文件中的符号表、调试信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " debugSymbol字段说明"]
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
            children: "strip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否移除.so文件中的符号表、调试信息。   - true（缺省默认值）：移除。 - false：不移除。   说明：  从DevEco Studio NEXT Developer Beta2（5.0.3.502）版本开始，缺省默认值由false改为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exclude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要排除的.so文件，支持正则表达式写法。   - 如果strip配置为true，匹配的.so文件将不会执行strip。 - 如果strip配置为false，只有匹配的.so文件会执行strip。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "librariesinfo",
      children: "librariesInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "librariesInfo用于声明so的透传依赖信息。仅模块级build-profile.json5文件支持配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      })
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
            children: "本模块so库的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "linkLibraries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "so库的依赖信息，格式为\"依赖包名::依赖so名称\"。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要声明库之间的依赖关系，例如entry依赖curl，可在模块内build-profile.json5中配置librariesInfo。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"nativeLib\": {\n    \"librariesInfo\": [\n      {\n        \"name\": \"libentry.so\",\n        \"linkLibraries\": [\"curl::curl\"]\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当其他模块依赖声明了依赖透传的模块并使用libentry.so时，libentry.so会将依赖curl::curl添加到参数INTERFACE_LINK_LIBRARIES，开发者无需关注它的依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add_library(library::library SHARED IMPORTED)\nset_target_properties(library::library PROPERTIES\n    IMPORTED_LOCATION \"/path/to/file\"\n    INTERFACE_LINK_LIBRARIES \"curl::curl\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置字段示例",
      children: "配置字段示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以模块级build-profile.json5为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  ...\n  \"buildOptionSet\": [\n    {\n      \"name\": \"release\",\n      \"arkOptions\": {\n        \"obfuscation\": {\n          \"ruleOptions\": {\n            \"enable\": true,\n            \"files\": [\n              \"./obfuscation-rules.txt\"\n            ]\n          }\n        }\n      },\n      \"externalNativeOptions\": {\n        \"path\": \"./src/main/cpp/CMakeLists.txt\", // 自定义CMake配置脚本CMakeLists.txt的位置，它是以模块根目录为起始位置的相对路径\n        \"arguments\": [\"-DCMAKE_BUILD_TYPE=Debug\"], // Hvigor将会把此处的自定义参数传递给CMake构建工具，您可通过CMake官方文档查找您所需的编译参数，同时它也将覆盖默认同名参数\n        \"cppFlags\": \"-g\", // 自定义cpp flags参数\n        \"abiFilters\": [\"arm64-v8a\"] // 自定义cpp编译架构，默认编译架构为arm64-v8a\n      },\n      \"nativeLib\": {\n        \"debugSymbol\": { // 可通过此配置对cpp编译产物so执行strip，移除so中的调试信息与符号表等\n          \"strip\": true, // 执行strip\n          \"exclude\": [] //执行strip的过滤正则表达式规则\n        },\n        \"filter\": { // 可通过此选项自定义此cpp产物so是否打包到应用包中\n          \"excludes\": [ // 根据正则表达式排除匹配到的.so文件，匹配到的so文件将不会被打包，可用于打包时缩小包体积\n            \"**/3.so\", // 排除所有名称为“3”的so文件\n            \"**/x86_64/*.so\" // 排除所有x86_64架构的so文件\n          ], \n          \"pickFirsts\": [\"**/1.so\"], // 按照.so文件的优先级顺序，打包最高优先级的.so文件\n          \"pickLasts\": [\"**/2.so\"], // 按照.so文件的优先级顺序，打包最低优先级的.so文件\n          \"enableOverride\": true, // 当.so重名冲突时，使用高优先级的.so文件覆盖低优先级的.so文件\n        },\n        \"headerPath\": \"./src/main/cpp/include\", // 声明模块打包共享的c/cpp接口\n        \"librariesInfo\":[\n          {\n             \"name\": \"libentry.so\",\n             \"linkLibraries\": [\"curl::curl\"]\n          }\n        ]\n      },\n    },\n  ],\n  ...\n}\n"
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
99525(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
554919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752999-49ef2a901c934520b3cf184baca3f713.png");

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