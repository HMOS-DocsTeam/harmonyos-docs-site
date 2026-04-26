"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["738491"], {
175162(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_quick_start_start_with_ets_stage_start_with_ets_stage_md_3d6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-quick-start-start-with-ets-stage-start-with-ets-stage-md-3d6.json
var site_docs_quick_start_start_with_ets_stage_start_with_ets_stage_md_3d6_namespaceObject = JSON.parse('{"id":"quick-start/start-with-ets-stage/start-with-ets-stage","title":"构建第一个HarmonyOS应用（ArkTS）","description":"为确保运行效果，本文以使用DevEco Studio 6.1.0 Release版本为例。","source":"@site/docs/quick-start/start-with-ets-stage/start-with-ets-stage.md","sourceDirName":"quick-start/start-with-ets-stage","slug":"/quick-start/start-with-ets-stage/","permalink":"/harmonyos-docs-site/quick-start/start-with-ets-stage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"构建第一个HarmonyOS应用（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-with-ets-stage","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/quick-start/start-overview/"},"next":{"title":"应用程序包概述","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/quick-start/start-with-ets-stage/start-with-ets-stage.md


const frontMatter = {
	title: '构建第一个HarmonyOS应用（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-with-ets-stage',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '构建第一个HarmonyOS应用（ArkTS）';

const assets = {

};



const toc = [{
  "value": "创建ArkTS工程",
  "id": "创建arkts工程",
  "level": 2
}, {
  "value": "ArkTS工程目录结构（Stage模型）",
  "id": "arkts工程目录结构stage模型",
  "level": 2
}, {
  "value": "构建第一个页面",
  "id": "构建第一个页面",
  "level": 2
}, {
  "value": "构建第二个页面",
  "id": "构建第二个页面",
  "level": 2
}, {
  "value": "实现页面间的跳转",
  "id": "实现页面间的跳转",
  "level": 2
}, {
  "value": "使用真机运行应用",
  "id": "使用真机运行应用",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "构建第一个harmonyos应用arkts",
        children: "构建第一个HarmonyOS应用（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(793917)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为确保运行效果，本文以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/",
        children: "DevEco Studio 6.1.0 Release版本"
      }), "为例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建arkts工程",
      children: "创建ArkTS工程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若首次打开", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DevEco Studio"
            })
          }), "，请单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create Project"
            })
          }), "创建工程。如果已经打开了一个工程，请在菜单栏选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create Project"
            })
          }), "来创建一个新工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Application"
            })
          }), "应用开发（本文以应用开发为例，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/glossary#section10825114113817",
            children: "Atomic Service"
          }), "对应为元服务开发），选择模板", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty Ability"
            })
          }), "，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "进行下一步配置。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若开发者需要进行Native相关工程的开发，请选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Native C++"
            })
          }), " 模板，更多模板的使用和说明请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-template",
            children: "工程模板介绍"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(823472)/* ["default"] */.A) + "",
            width: "982",
            height: "656"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["进入配置工程界面，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compatible SDK"
            })
          }), "表示兼容的最低API Version，此处以选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6.1.0(23)"
            })
          }), " 为例，其他参数保持默认设置即可。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(381492)/* ["default"] */.A) + "",
            width: "868",
            height: "656"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "，工具会自动生成示例代码和相关资源，等待工程创建完成。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts工程目录结构stage模型",
      children: "ArkTS工程目录结构（Stage模型）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(21353)/* ["default"] */.A) + "",
        width: "349",
        height: "576"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AppScope > app.json5"
            })
          }), "：应用的全局配置信息，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
            children: "app.json5配置文件"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "entry"
            })
          }), "：HarmonyOS工程模块，编译构建生成一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-glossary#hap",
            children: "HAP"
          }), "包。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > main > ets"
              })
            }), "：用于存放ArkTS源码。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > main > ets > entryability"
              })
            }), "：应用/服务的入口。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > main > ets > entrybackupability"
              })
            }), "：应用提供扩展的备份恢复能力。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > main > ets > pages"
              })
            }), "：应用/服务包含的页面。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > main > resources"
              })
            }), "：用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/resource-categories-and-access",
              children: "资源分类与访问"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > main > module.json5"
              })
            }), "：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-glossary#module",
              children: "模块"
            }), "配置文件。主要包含HAP包的配置信息、应用/服务在具体设备上的配置信息以及应用/服务的全局配置信息。具体的配置文件说明，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
              children: "module.json5配置文件"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "build-profile.json5"
              })
            }), "：当前的模块信息 、编译信息配置项，包括buildOption、targets配置等。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "hvigorfile.ts"
              })
            }), "：模块级编译构建任务脚本。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "obfuscation-rules.txt"
              })
            }), "：混淆规则文件。混淆开启后，在使用Release模式进行编译时，会对代码进行编译、混淆及压缩处理，保护代码资产。详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-obfuscation",
              children: "开启代码混淆"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "oh-package.json5"
              })
            }), "：用来描述包名、版本、入口文件（类型声明文件）和依赖项等信息。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "oh_modules"
            })
          }), "：用于存放三方库依赖信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "build-profile.json5"
            })
          }), "：工程级配置信息，包括签名signingConfigs、产品配置products等。其中products中可配置当前运行环境，默认为HarmonyOS。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hvigorfile.ts"
            })
          }), "：工程级编译构建任务脚本。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "oh-package.json5"
            })
          }), "：主要用来描述全局配置，如：依赖覆盖（overrides）、依赖关系重写（overrideDependencyMap）和参数化配置（parameterFile）等。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构建第一个页面",
      children: "构建第一个页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用文本组件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["工程同步完成后，在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Project"
            })
          }), "窗口，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "entry > src > main > ets > pages"
            })
          }), "，打开", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index.ets"
            })
          }), "文件，将页面从RelativeContainer相对布局修改成Row/Column线性布局。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["针对本文中使用文本/按钮来实现页面跳转/返回的应用场景，页面均使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
            children: "Row"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
            children: "Column"
          }), "组件来组建布局。对于更多复杂元素对齐的场景，可选择使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
            children: "RelativeContainer"
          }), "组件进行布局。更多关于UI布局的选择和使用，可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview#%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E5%B8%83%E5%B1%80",
            children: "如何选择布局"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index.ets"
            })
          }), "文件的示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加按钮。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在默认页面基础上，我们添加一个Button组件，作为按钮响应用户onClick事件，从而实现跳转到另一个页面。", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index.ets"
            })
          }), "文件的示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        // 添加按钮，以响应用户onClick事件\n        Button() {\n          Text('Next')\n            .fontSize(30)\n            .fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({\n          top: 20\n        })\n        .backgroundColor('#0D9FFB')\n        .width('40%')\n        .height('5%')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在编辑窗口", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "右上角"
            })
          }), "的侧边工具栏，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Previewer"
            })
          }), "，打开预览器。第一个页面效果如下图所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(541043)/* ["default"] */.A) + "",
            width: "311",
            height: "676"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构建第二个页面",
      children: "构建第二个页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建第二个页面。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["新建第二个页面文件。在", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Project"
                })
              }), "窗口，打开", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "entry > src > main > ets"
                })
              }), "，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "pages"
                })
              }), "文件夹，选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "New > ArkTS File"
                })
              }), "，命名为", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Second"
                })
              }), "，单击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "回车键"
                })
              }), "。可以看到文件目录结构如下："]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(389913)/* ["default"] */.A) + "",
                width: "336",
                height: "329"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(505883)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["开发者也可以在右键单击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "pages"
                })
              }), "文件夹时，选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "New > Page"
                })
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "> Empty Page"
                })
              }), "，命名为", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Second"
                })
              }), "，单击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Finish"
                })
              }), "完成第二个页面的创建。使用此种方式则无需再进行下文中第二个页面路由的手动配置。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["配置第二个页面的路由。在", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Project"
                })
              }), "窗口，打开", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "entry > src > main > resources > base > profile"
                })
              }), "，在main_pages.json文件中的\"src\"下配置第二个页面的路由\"pages/Second\"。示例如下："]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"src\": [\n    \"pages/Index\",\n    \"pages/Second\"\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加文本及按钮。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参照第一个页面，在第二个页面添加Text组件、Button组件等，并设置其样式。", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Second.ets"
            })
          }), "文件的示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Second.ets\n@Entry\n@Component\nstruct Second {\n  @State message: string = 'Hi there';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button() {\n          Text('Back')\n            .fontSize(30)\n            .fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({\n          top: 20\n        })\n        .backgroundColor('#0D9FFB')\n        .width('40%')\n        .height('5%')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现页面间的跳转",
      children: "实现页面间的跳转"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面间的导航可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router",
        children: "页面路由router"
      }), "来实现。页面路由router根据页面url找到目标页面，从而实现跳转。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要实现更好的转场动效，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation",
        children: "Navigation"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "第一个页面跳转到第二个页面。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在第一个页面中，跳转按钮绑定onClick事件，单击按钮时跳转到第二页。", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index.ets"
            })
          }), "文件的示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        // 添加按钮，以响应用户onClick事件\n        Button() {\n          Text('Next')\n            .fontSize(30)\n            .fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({\n          top: 20\n        })\n        .backgroundColor('#0D9FFB')\n        .width('40%')\n        .height('5%')\n        // 跳转按钮绑定onClick事件，单击时跳转到第二页\n        .onClick(() => {\n          console.info(`Succeeded in clicking the 'Next' button.`)\n          // 获取UIContext\n          let uiContext: UIContext = this.getUIContext();\n          let router = uiContext.getRouter();\n          // 跳转到第二页\n          router.pushUrl({ url: 'pages/Second' }).then(() => {\n            console.info('Succeeded in jumping to the second page.')\n\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to jump to the second page. Code is ${err.code}, message is ${err.message}`)\n          })\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "第二个页面返回到第一个页面。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在第二个页面中，返回按钮绑定onClick事件，单击按钮时返回到第一页。", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Second.ets"
            })
          }), "文件的示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Second.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Second {\n  @State message: string = 'Hi there';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button() {\n          Text('Back')\n            .fontSize(30)\n            .fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({\n          top: 20\n        })\n        .backgroundColor('#0D9FFB')\n        .width('40%')\n        .height('5%')\n        // 返回按钮绑定onClick事件，单击按钮时返回到第一页\n        .onClick(() => {\n          console.info(`Succeeded in clicking the 'Back' button.`)\n          // 获取UIContext\n          let uiContext: UIContext = this.getUIContext();\n          let router = uiContext.getRouter();\n          try {\n            // 返回第一页\n            router.back()\n            console.info('Succeeded in returning to the first page.')\n          } catch (err) {\n            let code = (err as BusinessError).code;\n            let message = (err as BusinessError).message;\n            console.error(`Failed to return to the first page. Code is ${code}, message is ${message}`)\n          }\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index.ets"
            })
          }), "文件，单击预览器中的", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(254819)/* ["default"] */.A) + "",
            width: "23",
            height: "23"
          }), "按钮进行刷新。效果如下图所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(716158)/* ["default"] */.A) + "",
            width: "518",
            height: "481"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用真机运行应用",
      children: "使用真机运行应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将搭载HarmonyOS系统的真机与电脑连接。具体指导及要求，可查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device",
            children: "使用本地真机运行应用/服务"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["进入", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > Project Structure... > Project > Signing Configs"
            })
          }), "界面，勾选“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatically generate signature"
            })
          }), "”，即可完成签名。如果未登录，请先单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sign In"
            })
          }), "进行登录，然后自动完成签名。具体请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-signing#section151231211105010",
            children: "配置调试签名"
          }), "。如下图所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(607430)/* ["default"] */.A) + "",
            width: "833",
            height: "539"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在编辑窗口右上角的工具栏，单击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(505720)/* ["default"] */.A) + "",
            width: "22",
            height: "22"
          }), "按钮运行。效果如下图所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(326836)/* ["default"] */.A) + "",
            width: "633",
            height: "587"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恭喜您已经基于ArkTS语言构建完成第一个HarmonyOS应用，快来探索更多的HarmonyOS功能吧。"
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
793917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
505720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAq0lEQVRIiWP89OnTfwYaACZaGDpq8HA2eOqZBQxvvr0jy2AWfJKXXl1nuP72DoO7kj2Dh5IDAyszK9EGEwyK339/M2y5vYeh4XAfw+VX16lnMAy8+faOYcqZBUQHD96gwAaIDR6yUgUxwUOz5EZyUDAwMDCwMrMSDAqSDdYT02QI1/JjEOESwquOaINFuIQYIrT8GHTFNIlST9BgYrxNssHEehsbYBytmmAAALOWPdvrFzuiAAAAAElFTkSuQmCC");

},
254819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABqElEQVRIie2Uv6riUBCHv9zYiX8aU2hjCsUgovgCqWwNWPgEvoEv4pOIwcJGME8gBFTUFBEFUbBJ0EJIOFutkGt0d1kuy4Wd7sww38z5nZkjXa9XwRfZx1eB/8P/DTzx2SGEYLfboaoqYRhi2zbr9ZrL5QJAoVCgVCpRq9WQJOktXPo8ikIIBoMBrVaL+XzO+XwGIJ1OA+D7/qOIYRgkk8nf7xwgCAImkwkAlUoFXdcfcM/zsCyL7XbLeDym2+3y8RGv7lvNJUmiWq0+wACZTIZ2u025XOZwOLBYLF7mv4ULITBNE9d1n4rquo4kSWw2m9fNxa3/fr+PnBOJBPl8/ik5DENut1vkZpG8OKcsy6RSqdik4/FIEAQR3x/BZ7MZp9OJXq9HNpuNxO73O6PRKFKg3+/HPmqs5pqmIYTAsiyEiKqmqiqGYfxyxl/CG40GuVwOx3EwTRPP8x4x3/dZLpdPRePspeadTofhcIjjODiO87REiqLQbDaZTqcv4bHT8tOCIMC2bVar1WP9FUVB0zTq9TqyLOO6LsViMVamt/C/te/75X5f+A8U5a6ssm7I0AAAAABJRU5ErkJggg==");

},
716158(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437517-43cb96834dac71b8d620ffb6a6f1bfd4.png");

},
326836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797824-c8e0725ccf7400749e42d0b9b5552809.png");

},
607430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957472-5cb7ff24684e692aa778d03a5db5d3d5.png");

},
21353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437515-c7009a4c99ba8d2e65d88cfd880cbaef.png");

},
541043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957470-b794e8d4bc3800603c12fce5e2b7254f.png");

},
823472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477469-d2ed5133a6811aaedb438e3f2c7f56b5.png");

},
389913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477471-2fbb78e07d3c44d88916225b4840c46d.png");

},
505883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
381492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797820-dc4e701f77bcea449cd9d292f9f6c6f1.png");

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