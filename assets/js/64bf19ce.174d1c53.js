"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["436916"], {
322347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_package_fundamentals_application_package_overview_application_package_overview_md_64b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-package-fundamentals-application-package-overview-application-package-overview-md-64b.json
var site_docs_development_fundamentals_application_package_fundamentals_application_package_overview_application_package_overview_md_64b_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-package-fundamentals/application-package-overview/application-package-overview","title":"应用程序包概述","description":"在基于Stage模型开发应用之前，开发者需要了解应用的设计机制、应用程序包结构等基础知识。","source":"@site/docs/development-fundamentals/application-package-fundamentals/application-package-overview/application-package-overview.md","sourceDirName":"development-fundamentals/application-package-fundamentals/application-package-overview","slug":"/development-fundamentals/application-package-fundamentals/application-package-overview/","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用程序包概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-overview","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"构建第一个HarmonyOS应用（ArkTS）","permalink":"/harmonyos-docs-site/quick-start/start-with-ets-stage/"},"next":{"title":"Stage模型应用程序包结构","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-structure/application-package-structure-stage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-package-fundamentals/application-package-overview/application-package-overview.md


const frontMatter = {
	title: '应用程序包概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-overview',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '应用程序包概述';

const assets = {

};



const toc = [{
  "value": "应用与应用程序包",
  "id": "应用与应用程序包",
  "level": 2
}, {
  "value": "应用的多Module设计机制",
  "id": "应用的多module设计机制",
  "level": 2
}, {
  "value": "Module类型",
  "id": "module类型",
  "level": 2
}, {
  "value": "选择合适的包类型",
  "id": "选择合适的包类型",
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
        id: "应用程序包概述",
        children: "应用程序包概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/application-configuration-file-overview-stage",
        children: "Stage模型"
      }), "开发应用之前，开发者需要了解应用的设计机制、应用程序包结构等基础知识。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用与应用程序包",
      children: "应用与应用程序包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户应用程序是指运行在设备操作系统之上，为用户提供特定服务的程序，简称“应用”。一个应用所对应的软件包文件，称为“应用程序包”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供了应用程序包开发、安装、查询、更新、卸载的管理机制，便于开发者开发和管理应用。此外，系统还屏蔽了不同的芯片平台的差异（包括x86/ARM，32位/64位等），保证应用程序包在不同的芯片平台都能够安装运行，使得开发者可以聚焦于应用的功能实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用的多module设计机制",
      children: "应用的多Module设计机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "支持模块化开发："
          })
        }), " 一个应用通常包含多种功能，将不同的功能特性按模块来划分和管理是一种良好的设计方式。在开发过程中，开发者可以将每个功能模块作为一个独立的Module进行开发，Module中可以包含源代码、资源文件、三方库、配置文件等，每一个Module可以独立编译，实现特定的功能。这种模块化、松耦合的应用管理方式有利于应用的开发、维护与扩展。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "支持多设备适配："
          })
        }), " 一个应用往往需要适配多种设备类型，在采用多Module设计的应用中，每个Module都会标注所支持的设备类型。Module支持的设备类型不同，有的支持全部类型，有的仅支持特定类型（例如平板）。在应用市场分发应用包时，可以根据设备类型进行精准筛选和匹配，从而合理组合和部署不同的包到对应的设备上。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "module类型",
      children: "Module类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Module按照使用场景可以分为两种类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ability类型的Module："
            })
          }), " 用于实现应用的功能和特性。每一个Ability类型的Module编译后，会生成一个以.hap为后缀的文件，称为HAP（Harmony Ability Package）包。HAP包可以独立安装和运行，是应用安装的基本单位，一个应用可以包含一个或多个HAP包，包含的HAP包分为以下两种类型。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "entry类型的Module：应用的主模块，包含应用的入口界面、入口图标和主功能特性，编译后生成entry类型的HAP。每一个应用分发到同一类型的设备上的应用程序包，只能包含唯一一个entry类型的HAP，也可以不包含。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "feature类型的Module：应用的动态特性模块，编译后生成feature类型的HAP。一个应用中可以包含一个或多个feature类型的HAP，也可以不包含。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Library类型的Module："
            })
          }), " 用于实现代码和资源的共享。同一个Library类型的Module可以被其他的Module多次引用，合理地使用该类型的Module，能够降低开发和维护成本。Library类型的Module分为Static和Shared两种类型，编译后生成共享包。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Static Library：静态共享库。编译后生成一个以.har为后缀的文件，即静态共享包HAR（Harmony Archive）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shared Library：动态共享库。编译后生成一个以.hsp为后缀的文件，即动态共享包HSP（Harmony Shared Package）。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(264811)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实际上，Shared Library编译后除了会生成一个.hsp文件，还会生成一个.har文件。这个.har文件中包含了HSP对外导出的接口，应用中的其他模块需要通过.har文件来引用HSP的功能。为了表述方便，通常认为编译Shared Library后会生成HSP。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HAR与HSP两种共享包的主要区别体现在："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "共享包类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "编译和运行方式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "发布和引用方式"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HAR"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["HAR中的代码和资源跟随使用方编译，如果有多个使用方，它们的编译产物中会存在多份相同拷贝。  注意：", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package#%E6%9E%84%E5%BB%BA",
                  children: "构建HAR"
                }), "时，建议开启混淆能力，保护代码资产。"]
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["HAR除了支持应用内引用，还可以独立打包发布到", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://ohpm.openharmony.cn/#/cn/home",
                  children: "OHPM中心仓"
                }), "或者", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo",
                  children: "OHPM私仓"
                }), "，供其他应用引用。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HSP"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HSP中的代码和资源可以独立编译，运行时在一个进程中代码也只会存在一份。"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["HSP一般随应用进行打包，当前支持应用内和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/development-fundamentals/application-typical-scenarios/integrated-hsp",
                  children: "集成态HSP"
                }), "。应用内HSP只支持应用内引用，集成态HSP支持发布到OHPM私仓和跨应用引用。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明："
                  })
                }), "  集成态HSP只是应用内HSP的中间形态，只能参与编译构建过程，无法单独安装。在构建和发布OHPM私仓的过程中，集成态HSP不与特定的应用包名耦合。使用时，工具链支持自动将集成态HSP的包名替换成宿主应用包名，并且会重新签名生成一个新的HSP包，作为宿主应用的安装包，这个新的HSP也属于宿主应用HAP的应用内HSP。"]
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " HAR和HSP在APP包中的形态示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(841820)/* ["default"] */.A) + "",
            width: "867",
            height: "291"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择合适的包类型",
      children: "选择合适的包类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP、HAR、HSP三者的功能和使用场景总结对比如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Module类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "包类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
              children: "HAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的功能模块，可以独立安装和运行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static Library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
              children: "HAR"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["静态共享包，编译态复用。  - 支持应用内共享，也可以作为二方库（SDK）、三方库（SDK）发布后供其他应用使用。  - 作为二方库（SDK），发布到", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo",
              children: "OHPM私仓"
            }), "，供公司内部其他应用使用。  - 作为三方库（SDK），发布到", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://ohpm.openharmony.cn/#/cn/home",
              children: "OHPM中心仓"
            }), "，供其他应用使用。  - 多包（HAP/HSP）同时引用相同的HAR时，会造成多包间代码和资源的重复拷贝，从而导致应用包增大。  - 注意：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package#%E6%9E%84%E5%BB%BA",
              children: "构建HAR"
            }), "时，建议开启混淆能力，保护代码资产。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared Library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
              children: "HSP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态共享包，运行时复用。  - 当多包（HAP/HSP）同时依赖同一个共享包时，使用HSP替代HAR，可以避免HAR造成的多包间代码和资源的重复拷贝，从而减小应用包大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP、HSP、HAR支持的规格对比如下，其中“√”表示是，“×”表示否。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以根据具体的应用需求，选择相应类型的包进行开发。在后续的章节中还会针对如何使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "HAP"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
        children: "HAR"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
        children: "HSP"
      }), "分别展开详细介绍。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HAP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HAR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HSP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview",
              children: "UIAbility"
            }), "组件"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
              children: "ExtensionAbility"
            }), "组件"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#pages%E6%A0%87%E7%AD%BE",
              children: "pages"
            }), "页面"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持包含资源文件与.so文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持依赖其他HAR文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持依赖其他HSP文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持在设备上独立安装运行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(274737)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果HAR支持声明pages页面，那么当HAR被打包到HAP或HSP中时，其内部声明的pages页面可能会与HAP/HSP中的pages页面存在相对路径上的重复，这将导致无法根据相对路径识别特定的路由页面。因此，HAR不支持在配置文件中声明pages页面，但可以包含pages页面，并通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-jump#%E8%B7%AF%E7%94%B1%E6%93%8D%E4%BD%9C",
          children: "Navigation跳转"
        }), "的方式进行跳转。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于HSP仅支持应用内共享，如果HAR依赖了HSP，则该HAR文件仅支持应用内共享，不支持发布到二方仓或三方仓供其他应用使用，否则会导致编译失败。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HAR和HSP均不支持循环依赖，也不支持依赖传递，详情说明可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package#%E7%BA%A6%E6%9D%9F%E9%99%90%E5%88%B6",
          children: "HAR"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp#%E7%BA%A6%E6%9D%9F%E9%99%90%E5%88%B6",
          children: "HSP"
        }), "中约束限制说明。"]
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
841820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437519-bfbe17dbf03eb1cacff44367f723c102.png");

},
264811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
274737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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