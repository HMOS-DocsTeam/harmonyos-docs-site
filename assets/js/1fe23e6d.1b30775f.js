"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["86162"], {
281128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_project_structure_ide_project_structure_md_1fe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-project-structure-ide-project-structure-md-1fe.json
var site_docs_ide_project_ide_project_structure_ide_project_structure_md_1fe_namespaceObject = JSON.parse('{"id":"ide-project/ide-project-structure/ide-project-structure","title":"工程目录结构","description":"ArkTS工程目录结构（Stage模型）","source":"@site/docs/ide-project/ide-project-structure/ide-project-structure.md","sourceDirName":"ide-project/ide-project-structure","slug":"/ide-project/ide-project-structure/","permalink":"/harmonyos-docs-site/ide-project/ide-project-structure/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"工程目录结构","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-project-structure","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"工程介绍","permalink":"/harmonyos-docs-site/ide-project/ide-project-overview/"},"next":{"title":"工程模板介绍","permalink":"/harmonyos-docs-site/ide-project/ide-template/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-project-structure/ide-project-structure.md


const frontMatter = {
	title: '工程目录结构',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-project-structure',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '工程目录结构';

const assets = {

};



const toc = [{
  "value": "ArkTS工程目录结构（Stage模型）",
  "id": "arkts工程目录结构stage模型",
  "level": 2
}, {
  "value": "C++工程目录结构（Stage模型）",
  "id": "c工程目录结构stage模型",
  "level": 2
}, {
  "value": "JS工程目录结构（FA模型）",
  "id": "js工程目录结构fa模型",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "工程目录结构",
        children: "工程目录结构"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts工程目录结构stage模型",
      children: "ArkTS工程目录结构（Stage模型）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS Stage模型支持API Version 10及以上版本，其工程目录结构如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(423531)/* ["default"] */.A) + "",
        width: "241",
        height: "620"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "AppScope > app.json5"
          })
        }), "：应用的全局配置信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["****entry：****应用/元服务模块，编译构建生成一个HAP。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > ets"
                })
              }), "：用于存放ArkTS源码。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > ets > entryability"
                })
              }), "：应用/元服务的入口。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > ets > entrybackupability"
                })
              }), "：用于提供扩展", (0,jsx_runtime.jsx)(_components.a, {
                href: "/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension",
                children: "备份恢复"
              }), "能力。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > ets > pages"
                })
              }), "：应用/元服务包含的页面。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["****src > main > resources：****用于存放应用/元服务模块所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/resource-categories-and-access",
                children: "资源分类与访问"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "资源目录"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "资源文件说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "base>element"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "包括字符串、整型数、颜色、样式等资源的json文件。每个资源均由json格式进行定义，例如：  - boolean.json：布尔型 - color.json：颜色 - float.json：浮点型 - intarray.json：整型数组 - integer.json：整型 - pattern.json：样式 - plural.json：复数形式 - strarray.json：字符串数组 - string.json：字符串值"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "base>media"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["多媒体文件，如图形、视频、音频等文件，支持的文件格式包括：", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".png"
                      })
                    }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".gif"
                      })
                    }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".mp3"
                      })
                    }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".mp4"
                      })
                    }), "等。"]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "rawfile"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "用于存储任意格式的原始资源文件。rawfile不会根据设备的状态去匹配不同的资源，需要指定文件路径和文件名进行引用。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > module.json5"
                })
              }), "：Stage模型模块配置文件，主要包含HAP的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
                children: "module.json5配置文件"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > mock"
                })
              }), "****：****配置测试框架的Mock能力。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-app-test/ide-test/ide-test-mock",
                children: "Mock能力"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["****src > ohosTest：****存放Instrument Test测试类。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-app-test/ide-test/ide-code-test/ide-instrument-test",
                children: "Instrument Test"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["****src > test：****存放Local Test创建测试类。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-app-test/ide-test/ide-code-test/ide-local-test",
                children: "Local Test"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****build-profile.json5：****当前的模块信息、编译信息配置项，包括buildOption、targets配置等。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "hvigorfile.ts"
                })
              }), "：模块级编译构建任务脚本。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "obfuscation-rules.txt"
                })
              }), "：混淆规则文件。混淆开启后，在使用Release模式进行编译时，会对代码进行编译、混淆及压缩处理，保护代码资产。详见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-build-obfuscation",
                children: "混淆加固"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "oh-package.json5"
                })
              }), "：描述三方包的包名、版本、入口文件（类型声明文件）和依赖项等信息。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "oh_modules"
          })
        }), "：用于存放三方库依赖信息，包含应用/元服务所依赖的第三方库文件。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****build-profile.json5：****应用级配置信息，包括签名、产品配置等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****code-linter.json5：****配置代码检查规则，包括代码检查范围、生效的规则等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****hvigorfile.ts：****应用级编译构建任务脚本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****oh-package.json5：****描述全局配置，如：依赖覆盖（overrides）、依赖关系重写（overrideDependencyMap）和参数化配置（parameterFile）等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****oh-package-lock.json5：****用于锁定应用级依赖的版本，以及缓存依赖的元数据信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c工程目录结构stage模型",
      children: "C++工程目录结构（Stage模型）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++ Stage模型支持API Version 10以上版本，支持使用ArkTS和C++进行开发，其工程目录结构如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(410182)/* ["default"] */.A) + "",
        width: "289",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "entry"
          })
        }), "：应用模块，编译构建生成一个HAP。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > cpp > types"
                })
              }), "：用于存放C++的API接口描述文件"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > cpp > types"
                })
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "> libentry > index.d.ts"
                })
              }), "：描述C++ API接口行为，如接口名、入参、返回参数等。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > cpp > types"
                })
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "> libentry> oh-package.json5"
                })
              }), "：配置.so三方包声明文件的入口及包名。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > cpp > CMakeLists.txt"
                })
              }), "：CMake配置文件，提供CMake构建脚本。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsxs)(_components.strong, {
                  children: ["src > main > cpp > napi_init.cpp：", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "定义C++ API接口的文件"
                    })
                  }), "。"]
                })
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****src > main > ets：****用于存放ArkTS源码。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["****src > main > resources：****用于存放应用所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/resource-categories-and-access",
                children: "资源分类与访问"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "资源目录"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "资源文件说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "base>element"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "包括字符串、整型数、颜色、样式等资源的json文件。每个资源均由json格式进行定义，例如：  - boolean.json：布尔型 - color.json：颜色 - float.json：浮点型 - intarray.json：整型数组 - integer.json：整型 - pattern.json：样式 - plural.json：复数形式 - strarray.json：字符串数组 - string.json：字符串值。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "base>media"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["多媒体文件，如图形、视频、音频等文件，支持的文件格式包括：", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".png"
                      })
                    }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".gif"
                      })
                    }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".mp3"
                      })
                    }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".mp4"
                      })
                    }), "等。"]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "rawfile"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "用于存储任意格式的原始资源文件。rawfile不会根据设备的状态去匹配不同的资源，需要指定文件路径和文件名进行引用。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["****src > main > module.json5：****Stage模块配置文件，主要包含HAP的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
                children: "module.json5配置文件"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****build-profile.json5：****当前的模块信息、编译信息配置项，包括buildOption、targets配置等。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****hvigorfile.ts：****模块级编译构建任务脚本。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "obfuscation-rules.txt"
                })
              }), "：混淆规则文件。混淆开启后，在使用Release模式进行编译时，会对代码进行编译、混淆及压缩处理，保护代码资产。详见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-build-obfuscation",
                children: "混淆加固"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "oh-package.json5"
                })
              }), "：描述三方包的包名、版本、入口文件（类型声明文件）和依赖项等信息。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****oh-package-lock.json5：****用于锁定当前模块依赖的版本，以及缓存依赖的元数据信息。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "oh_modules"
          })
        }), "：用于存放三方库依赖信息，包含应用/元服务所依赖的第三方库文件。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****build-profile.json5：****应用级配置信息，包括签名、产品配置等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****code-linter.json5：****配置代码检查规则，包括代码检查范围、生效的规则等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****hvigorfile.ts：****应用级编译构建任务脚本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****oh-package.json5：****描述全局配置，如：依赖覆盖（overrides）、依赖关系重写（overrideDependencyMap）和参数化配置（parameterFile）等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****oh-package-lock.json5：****用于锁定应用级依赖的版本，以及缓存依赖的元数据信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "js工程目录结构fa模型",
      children: "JS工程目录结构（FA模型）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS工程只支持FA模型，其工程目录结构如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(571544)/* ["default"] */.A) + "",
        width: "260",
        height: "500"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["****entry：****应用/元服务模块，编译构建生成一个HAP。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > js"
                })
              }), "：用于存放js源码。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > js > MainAbility"
                })
              }), "：应用/元服务的入口。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > js > MainAbility > i18n"
                })
              }), "：用于配置不同语言场景资源内容，比如应用文本词条、图片路径等资源。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > js > MainAbility > pages"
                })
              }), "：MainAbility包含的页面。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > js > MainAbility > app.js"
                })
              }), "：承载Ability生命周期。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["****src > main > resources：****用于存放应用/元服务所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/resource-categories-and-access",
                children: "资源分类与访问"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "资源目录"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "资源文件说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "base>element"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "包括字符串、整型数、颜色、样式等资源的json文件。每个资源均由json格式进行定义，例如：  - boolean.json：布尔型 - color.json：颜色 - float.json：浮点型 - intarray.json：整型数组 - integer.json：整型 - pattern.json：样式 - plural.json：复数形式 - strarray.json：字符串数组 - string.json：字符串值"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "base>media"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["多媒体文件，如图形、视频、音频等文件，支持的文件格式包括：", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".png"
                      })
                    }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".gif"
                      })
                    }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".mp3"
                      })
                    }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: ".mp4"
                      })
                    }), "等。"]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "rawfile"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "用于存储任意格式的原始资源文件。rawfile不会根据设备的状态去匹配不同的资源，需要指定文件路径和文件名进行引用。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "src > main > config.json"
                })
              }), "：模块配置文件，主要包含HAP的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****build-profile.json5：****当前的模块信息、编译信息配置项，包括buildOption、targets配置等。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "hvigorfile.ts"
                })
              }), "：模块级编译构建任务脚本。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "oh-package.json5"
                })
              }), "：配置三方包声明文件的入口及包名。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****build-profile.json5：****应用级配置信息，包括签名、产品配置等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****hvigorfile.ts：****应用级编译构建任务脚本。"
      }), "\n"]
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
571544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832761-6220c9afd4b3cf5fce3adb9b15961532.png");

},
410182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832763-0a0f596f8bf8c8ecae31e1e7f338c40b.png");

},
423531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583649849-2c2a73b6d3343b340efcedf37399a08e.png");

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