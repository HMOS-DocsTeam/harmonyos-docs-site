"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["145256"], {
905882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_test_ide_ui_test_ide_ui_test_md_8df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-test-ide-ui-test-ide-ui-test-md-8df.json
var site_docs_ide_app_test_ide_test_ide_ui_test_ide_ui_test_md_8df_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-test/ide-ui-test/ide-ui-test","title":"黑盒覆盖率测试","description":"DevEco Studio支持黑盒覆盖率测试，不需要开发测试用例，将编译插桩的HAP包推到设备上，然后对该应用/元服务模拟用户操作，测试完成后可生成覆盖率报告，当前仅支持Stage模型。","source":"@site/docs/ide-app-test/ide-test/ide-ui-test/ide-ui-test.md","sourceDirName":"ide-app-test/ide-test/ide-ui-test","slug":"/ide-app-test/ide-test/ide-ui-test/","permalink":"/harmonyos-docs-site/ide-app-test/ide-test/ide-ui-test/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"黑盒覆盖率测试","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ui-test","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"Mock能力","permalink":"/harmonyos-docs-site/ide-app-test/ide-test/ide-test-mock/"},"next":{"title":"仪器测试错误码","permalink":"/harmonyos-docs-site/ide-app-test/ide-test/ide-test-errorcode/ide-instrument-test-errorcode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-test/ide-ui-test/ide-ui-test.md


const frontMatter = {
	title: '黑盒覆盖率测试',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ui-test',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '黑盒覆盖率测试';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "前置操作",
  "id": "前置操作",
  "level": 2
}, {
  "value": "配置覆盖率过滤文件",
  "id": "配置覆盖率过滤文件",
  "level": 2
}, {
  "value": "执行覆盖率测试",
  "id": "执行覆盖率测试",
  "level": 2
}, {
  "value": "编译与安装",
  "id": "编译与安装",
  "level": 3
}, {
  "value": "进行测试",
  "id": "进行测试",
  "level": 3
}, {
  "value": "生成覆盖率报告",
  "id": "生成覆盖率报告",
  "level": 3
}, {
  "value": "查看覆盖率报告",
  "id": "查看覆盖率报告",
  "level": 2
}, {
  "value": "覆盖率报告解读",
  "id": "覆盖率报告解读",
  "level": 3
}, {
  "value": "覆盖率coverageReport.json文件",
  "id": "覆盖率coveragereportjson文件",
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
        id: "黑盒覆盖率测试",
        children: "黑盒覆盖率测试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio支持黑盒覆盖率测试，不需要开发测试用例，将编译插桩的HAP包推到设备上，然后对该应用/元服务模拟用户操作，测试完成后可生成覆盖率报告，当前仅支持Stage模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevEco Studio 6.0.1 Beta1版本前，仅支持对UIAbility进行覆盖率测试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从DevEco Studio 6.0.1 Beta1版本开始，当继承的ExtensionAbility中存在onDump或onDestroy方法时，支持获取覆盖率数据。如果两个方法都不存在，则无法进行覆盖率测试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "覆盖率测试不支持开启混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前置操作",
      children: "前置操作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将设备与电脑进行连接，并对应用/元服务签名，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-device",
        children: "使用本地真机运行应用"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing",
        children: "应用/元服务签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置覆盖率过滤文件",
      children: "配置覆盖率过滤文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者希望只针对部分文件进行覆盖率测试，可在工程目录下创建coverage-filter.json5文件，在文件中配置参与或不参与覆盖率统计的文件/文件夹。DevEco Studio编译插桩时将按照coverage-filter.json5文件中的配置进行过滤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该功能从DevEco Studio 5.1.0 Release版本开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(369693)/* ["default"] */.A) + "",
        width: "317",
        height: "321"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "coverage-filter.json5文件包含以下参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "include"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置参与覆盖率统计的文件或文件夹路径，仅支持模块名开头的绝对路径，暂不支持通配符。include的优先级比exclude高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exclude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置不参与覆盖率统计的文件或文件夹路径，仅支持模块名开头的绝对路径，暂不支持通配符。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"include\":[    // 配置参与覆盖率统计的文件或文件夹路径，仅支持模块名开头的绝对路径，暂不支持通配符\n    \"entry/src/main/ets/pages/aaa.ets\"\n  ],\n  \"exclude\":[    // 配置不参与覆盖率统计的文件或文件夹路径，仅支持模块名开头的绝对路径，暂不支持通配符\n    \"entry/src/main/ets/pages\"\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(833252)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改配置文件后不会触发增量编译，需要重新编译插桩再测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "执行覆盖率测试",
      children: "执行覆盖率测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编译与安装",
      children: "编译与安装"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有两种方式进行编译与安装，DevEco Studio方式和命令行方式，具体步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "方式一：通过DevEco Studio进行编译与安装，从DevEco Studio 6.0.2 Beta1版本开始支持。"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["点击菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Run"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Edit Configurations"
                })
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: ">"
                })
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Diagnostics"
                })
              }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Black Coverage"
                })
              }), "，开启黑盒覆盖率测试。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(917715)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "调试场景下，该配置不生效，运行的是未插桩的应用。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "attach调试和等待调试场景下，该配置会导致断点不准确，建议取消该配置。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(926875)/* ["default"] */.A) + "",
                width: "870",
                height: "314"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["点击工具栏", (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(753949)/* ["default"] */.A) + "",
                width: "14",
                height: "12"
              }), "，DevEco Studio会启动编译插桩，并推包安装到设备上。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "方式二：通过命令行进行编译与安装"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "执行hvigor插桩编译命令，编译后在{projectPath}/{moduleName}/.test/default/intermediates/ohosTest路径下会生成init_coverage.json文件，供后续生成覆盖率报告使用。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hvigorw --mode module -p module={moduleName@targetName} -p product={productName} -p buildMode=test -p ohos-test-coverage=true -p coverage-mode=black assembleHap --parallel --incremental --daemon\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "moduleName：执行测试的模块。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["targetName/productName：当前生效的target/product，可以通过点击DevEco Studio右上方", (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(20897)/* ["default"] */.A) + "",
                  width: "15",
                  height: "14"
                }), "图标进行查看。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(32243)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果HAP依赖HSP，需要单独编译HSP，将以上命令的assembleHap替换为assembleHsp即可。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果设备上已存在待测试的应用，先卸载应用，不存在则跳过此步骤，关于hdc工具的使用指导请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/system-debug-optimize/debugging-commands/hdc",
                children: "hdc"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc uninstall {bundleName}\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "bundleName：设备上已安装的应用包名。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将插桩编译生成的HAP包安装到设备上，如果依赖HSP，需要同时安装HSP。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc install {SignedHapPath}\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "SignedHapPath：已签名的HAP包路径，默认在模块的build\\{productName}\\outputs\\{targetName}目录下。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进行测试",
      children: "进行测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备上模拟用户操作，进行黑盒测试，测试完毕后，通过以下方式，生成覆盖率数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对UIAbility和存在onDump方法的ExtensionAbility，执行命令生成覆盖率数据。UIAbility从DevEco Studio 5.1.0 Release版本开始支持，ExtensionAbility从DevEco Studio 6.0.1 Beta1版本开始支持。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell aa dump -c -l\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["针对UIAbility，退出应用，触发", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle#ondestroy",
            children: "onDestroy()回调"
          }), "，生成覆盖率数据。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对存在onDestroy方法的ExtensionAbility，Ability销毁时，触发onDestroy()回调，生成覆盖率数据。从DevEco Studio 6.0.1 Beta1版本开始支持。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["针对UIAbility，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub",
            children: "EventHub接口"
          }), "通知UIAbility生成覆盖率数据。从DevEco Studio 6.0.2 Beta1版本开始支持。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const context = this.getUIContext().getHostContext() as common.UIAbilityContext;\ncontext.eventHub.emit('coverage');\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(645607)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 13开始，如果用户使用最近任务列表一键清理来关闭应用，将不会执行onDestroy()回调，导致获取不到覆盖率数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成覆盖率报告",
      children: "生成覆盖率报告"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从设备上取出覆盖率数据json文件存放到电脑本地，该命令会将cache目录下的所有文件都保存到LocalPath目录下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 如果是应用则执行该命令，其中LocalPath非必填，如果不填写，默认存放在当前执行命令的目录\nhdc file recv data/app/el2/100/base/{bundleName}/haps/{moduleName}/cache {LocalPath}\n// 如果是元服务则执行该命令，其中LocalPath必填\nhdc file recv -b {bundleName} ls ./data/storage/el2/base/haps/{moduleName}/cache {LocalPath}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "LocalPath：数据在电脑本地存放的路径。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(987446)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在多模块相互跳转的场景下，只需要取最后退出的模块下生成的覆盖率数据json文件，但特殊场景下如多模块无跳转关系，则需要取每个独立模块下生成的覆盖率数据json文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成覆盖率报告："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw collectCoverage -p projectPath={projectPath} -p reportPath={reportPath} -p coverageFile={projectPath}/{moduleName}/.test/default/intermediates/ohosTest/init_coverage.json#{LocalPath/bjc_cov_yyyyMMdd_HHmmss_SSS.json}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "projectPath：工程路径。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "reportPath：指定的覆盖率报告文件生成路径。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "bjc_cov_yyyyMMdd_HHmmss_SSS.json：指定上一个步骤LocalPath目录下的一份最新的json文件，格式以bjc_cov开头，yyyyMMdd_HHmmss_SSS表示年月日_时分秒_毫秒。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(75400)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在多模块相互跳转的场景下，需要取各模块的init_coverage.json文件路径，与bjc_cov_yyyyMMdd_HHmmss_SSS.json文件通过#拼接生成coverageFile参数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在本地找到报告文件路径并在浏览器中打开，查看代码覆盖率详情，关于覆盖率的计算方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section10394362109",
            children: "查看覆盖率报告"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(614108)/* ["default"] */.A) + "",
            width: "1777",
            height: "465"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看覆盖率报告",
      children: "查看覆盖率报告"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["执行覆盖率测试后，会生成两份报告，一份是html格式，用于可视化查看报告，一份是json格式，即coverageReport.json文件，记录了详细的覆盖率数据，文件中各字段的含义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section175644610218",
        children: "覆盖率coverageReport.json文件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "覆盖率报告解读",
      children: "覆盖率报告解读"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试覆盖率报告有三个测量维度，分别是："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "函数覆盖率（Functions）：每个函数是否都已调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分支覆盖率（Branches）：每个流程控制的各个分支是否都已执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "行覆盖率（Lines）：每个可执行代码行是否都已执行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(713546)/* ["default"] */.A) + "",
        width: "1777",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是关于三个测量维度的细节说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "流程控制"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "常见的流程控制语句有if、while、do...while、switch、for等等，以及三目运算符（condition ? exprIfTrue : exprIfFalse），需要确保流程控制的每个边界情况（即分支）都被执行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "行（Lines of Source Code） vs 可执行代码行（Lines of Executable Code）"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "“行覆盖率”中的行是指可执行代码行（Lines of Executable Code），而不是源文件中所有的行（含空行）（Lines of Source Code）。一般来说，包含语句的每一行都应被视为可执行行。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "对于DevEco Studio的覆盖率测试引擎来说，只会统计方法内的语句，方法外的语句都不会被统计覆盖率。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "方法内，如果某行存在可执行代码，则这一整行会被视为可执行代码行（+1）。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "方法内，如果某行只包含标点符号****{****，会被视为可执行行（+1）。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["方法内，如果某行只包含标点符号****}", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "、"
                  })
                }), "})**** 或****});**** ，会被视为非可执行行（+0）。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(623011)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "箭头函数在方法内时，可以正常统计覆盖率，如果作为参数声明，则无法统计该行覆盖率。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "示例如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { window } from '@kit.ArkUI';  // +0  方法外不统计\nlet filePath :string;               // +0  方法外不统计\nconst fileName = 'a.txt';          // +0  方法外不统计\n \nexport function doTheThing ()  // +1\n{                              // +1\n  let s1: string;              // +1\n  const str = 'aaa';           // +1\n  console.log(str);            // +1\n}                              // +0\n \nexport class Person {         // +0  方法外不统计\n  name: string = ''           // +0  方法外不统计\n  constructor (n:string) {    // +1 构造函数\n    this.name = n;            // +1\n  }                           // +0\n \n  static sayHello () {        // +1  类静态方法\n    console.log('hello');     // +1\n  }                           // +0\n \n  walk () {                   // +1  类实例方法\n    for (                     // +1              \n      let i=0;                // +1\n      i < 10;                 // +1\n      i++)                    // +1\n    {                         // +1\n    }                         // +0\n  }                           // +0\n}                             // +0\n\nfunction func ():object {    // +1\n  return Object({        // +1      一个语句被拆分为多行\n    a: 1,                // +1\n    b: 2,                // +1\n  })                     // +0\n}                        // +0\n \nfunc();                  // +0  方法外不统计\n \nfunction foo(n:number, m:number){}   // +1\n\nfunction bar():number {              // +1\n  return 1;                          // +1\n}\n\nfoo(1, bar());                       // +0  方法外不统计\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "测试覆盖率报告左侧的标识："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "灰色：不统计覆盖率。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "粉色：语句/函数未覆盖。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "绿色：语句/函数覆盖。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Nx：表示当前可执行代码行被执行了N次。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(666708)/* ["default"] */.A) + "",
                width: "560",
                height: "721"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "通过注释语法忽略指定代码"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码中的某些分支可能很难、甚至无法测试，DevEco Studio提供了instrument ignore * 语法来进行忽略，使得某些代码不计入覆盖率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(206071)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用时需先清除缓存，点击菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Build -> Clean Project"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****忽略文件：****在源文件中加入注释 // instrument ignore file或者 /* instrument ignore file */，加入注释后，该文件不再插桩，覆盖率报告也不会有该文件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****忽略代码块、class、function等：****在代码块前加入/* instrument ignore next */或者// instrument ignore next即可忽略。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****忽略if/else分支：****在条件表达式前加上// instrument ignore if或者/* instrument ignore if*/（忽略if），// instrument ignore else或者/* instrument ignore else*/（忽略else）。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import {testA} from './Index'\n// instrument ignore file       忽略整个文件\n\n// instrument ignore next       忽略代码块\nexport function sum(a:number,b:number){\n  return a+b;\n}\nsum(1,2);\n \nlet a = 1;\n// instrument ignore else       忽略else分支\nif (a!=1) {\n  // do something\n  console.log('BBB');\n}else {\n  console.log('AAA');\n}\n \n// instrument ignore if         忽略if分支\nif (a==1) {\n  // do something\n  console.log('BBB');\n}else {\n  console.log('AAA');\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "覆盖率coveragereportjson文件",
      children: "覆盖率coverageReport.json文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "覆盖率coverageReport.json文件记录了详细的覆盖率数据，文件中各字段的含义如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文前，请先查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section1485213972114",
        children: "覆盖率报告解读"
      }), "，了解行覆盖率、分支覆盖率和函数覆盖率的相关概念和统计方式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "summary字段记录了本次测试的覆盖率，包括行覆盖率、函数覆盖率和分支覆盖率，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"summary\": {\n    \"lines\": {         // 行数总览\n      \"total\": 43,     // 可执行行代码行数\n      \"covered\": 12,   // 覆盖数量\n      \"pct\": 27.91     // 行覆盖率\n    },\n    \"functions\": {     // 函数总览\n      \"total\": 17,     // 函数数量\n      \"covered\": 4,    // 覆盖数量\n      \"pct\": 23.53     // 函数覆盖率\n    },\n    \"branches\": {      // 分支总览\n      \"total\": 2,      // 分支数量\n      \"covered\": 0,    // 覆盖数量\n      \"pct\": 0         // 分支覆盖率 \n    }\n  },\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "files是个数组，记录了所有文件的详细覆盖率数据，数组中的每个元素对应一个文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以一个文件为例，各字段含义如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"files\": [\n    {\n      \"version\": \"bjc v1.0.0\",   // 覆盖率算法版本\n      \"versionCode\": 10000,      // 覆盖率算法版本代码\n      \"path\": \"D:/DevEcoStudioProjects/MyApplication36/application/src/main/ets/applicationability/ApplicationAbility.ets\",  // 文件路径\n      \"hash\": \"6828362e96a78934b93db4b980fa5ad83af85a111bf187e74da89ae0c0ec613a\",  // 文件内容hash值\n      \"lineCnt\": 44,     // 当前文件总行数\n      \"count\": 0,        // 执行次数\n      \"projectPath\": \"D:/DevEcoStudioProjects/MyApplication36\",     // 工程路径\n      \"functions\": [],   // 函数集合\n      \"exeLine\": {},     // 可执行代码行\n      \"summary\": {}      // 单个文件的覆盖率详情\n    },\n    ...\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "functions"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "functions是个数组，记录了文件中所有函数的详细覆盖率数据，数组中的每个元素对应一个函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"functions\": [\n  {\n    \"name\": \"ApplicationAbility.onCreate\",    // 函数名称，如果是匿名函数，name是anonymous_N\n    \"count\": 0,         // 函数执行次数\n    \"regions\": [],      // 对应代码区域\n    \"branches\": [],     // 分支\n    \"ignored\": 0,       // 函数忽略次数\n    \"index\": 0          // 函数在整个文件中的位置，从0开始排序\n  },\n  ...\n]\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "regions"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "regions是一个可执行行数组，数组可能有一个元素、两个元素或多个元素。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "第一个元素是该方法对应的代码区域，如果不止一个元素，后面的元素是方法内的可执行代码区域。元素中每个字段的含义如下。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "\"regions\": [\n  {\n    \"startLoc\": {   // 开始代码位置\n      \"line\": 8,    // 起始行号\n      \"col\": 3      // 起始列号\n    },\n    \"endLoc\": {     // 结束代码位置\n      \"line\": 10,   // 结束行号\n      \"col\": 4      // 结束列号\n    },\n    \"count\": 0,     // 执行次数\n    \"ignored\": 0    // 忽略次数\n  }\n]\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果方法内没有任何实现，是个空方法，则regions数组只有一个元素，即方法对应的代码区域，示例如下。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(750825)/* ["default"] */.A) + "",
                    width: "233",
                    height: "92"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "{\n  \"name\": \"dddd\",\n  \"count\": 1,\n  \"regions\": [\n    {\n      \"startLoc\": {\n        \"line\": 31,\n        \"col\": 1\n      },\n      \"endLoc\": {\n        \"line\": 33,\n        \"col\": 2\n      },\n      \"count\": 1,\n      \"ignored\": 0\n    }\n  ],\n},\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果方法内只有一个代码区域，则regions数组有两个元素，示例如下。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(500594)/* ["default"] */.A) + "",
                    width: "393",
                    height: "187"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "{\n  \"name\": \"aaaaa\",\n  \"count\": 2,\n  \"regions\": [\n    {    // 方法对应的代码区域\n      \"startLoc\": {\n        \"line\": 2,\n        \"col\": 1\n      },\n      \"endLoc\": {\n        \"line\": 9,\n        \"col\": 2\n      },\n      \"count\": 2,\n      \"ignored\": 0\n    },\n    {    // 可执行代码区域\n      \"startLoc\": {\n        \"line\": 4,\n        \"col\": 3\n      },\n      \"endLoc\": {\n        \"line\": 9,\n        \"col\": 2\n      },\n      \"count\": 2,\n      \"ignored\": 0\n    }\n  ],\n}\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果方法内存在多个代码区域，则每新增一个代码区域，regions数组就增加一个元素，示例如下。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(454113)/* ["default"] */.A) + "",
                    width: "458",
                    height: "163"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "{\n  \"name\": \"bbb\",\n  \"count\": 1,\n  \"regions\": [\n    {    // 方法对应的代码区域11-18行\n      \"startLoc\": {\n        \"line\": 11,\n        \"col\": 1\n      },\n      \"endLoc\": {\n        \"line\": 18,\n        \"col\": 2\n      },\n      \"count\": 1,\n      \"ignored\": 0\n    },\n    {    // 第一个可执行代码区域13-15行\n      \"startLoc\": {\n        \"line\": 13,\n        \"col\": 13\n      },\n      \"endLoc\": {\n        \"line\": 15,\n        \"col\": 4\n      },\n      \"count\": 0,    // 由于flag是false，代码未执行\n      \"ignored\": 0\n    },\n    {    // 第二个可执行代码区域15-17行\n      \"startLoc\": {\n        \"line\": 15,\n        \"col\": 10\n      },\n      \"endLoc\": {\n        \"line\": 17,\n        \"col\": 4\n      },\n      \"count\": 1,    // 代码被执行\n      \"ignored\": 0\n    }\n  ],\n}\n"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "branches"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "branches是个分支数组，会将if和switch case这种条件判断语句相关的代码块放入数组中，数组中每个元素的字段含义如下。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "\"branches\": [\n  {\n    \"startLoc\": {      // 开始代码位置\n      \"line\": 46,      // 起始行号\n      \"col\": 10        // 起始列号\n    },\n    \"endLoc\": {        // 结束代码位置\n      \"line\": 46,      // 结束行号\n      \"col\": 11        // 结束列号\n    },\n    \"trueCount\": 0,    // 该行满足条件的已执行次数，0表示未执行\n    \"falseCount\": 1,   // 该行不满足条件的已执行次数，0表示未执行\n    \"group\": [         // 分组，if语句不涉及分组，switch case涉及分组\n      0,               // group:[0,1]，表示branches数组的0号和1号元素属于一个switch case\n      1\n    ],\n    \"ignored\": 0       // 忽略次数\n  }\n]\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****示例一：****调用eeee(2)。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(21821)/* ["default"] */.A) + "",
                width: "433",
                height: "400"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"name\": \"eeee\",\n  \"count\": 1,\n  \"regions\": [\n    ...\n  ],\n  \"branches\": [\n    {\n      \"startLoc\": {\n        \"line\": 46,\n        \"col\": 10\n      },\n      \"endLoc\": {\n        \"line\": 46,\n        \"col\": 11\n      },\n      \"trueCount\": 0,     // 该行条件未执行\n      \"falseCount\": 1,    // 该行已执行，但不满足条件\n      \"group\": [          // 0和1号元素属于1个switch case，2和3号元素属于另一个switch case\n        0,\n        1\n      ],\n      \"ignored\": 0\n    },\n    {\n      \"startLoc\": {\n        \"line\": 49,\n        \"col\": 10\n      },\n      \"endLoc\": {\n        \"line\": 49,\n        \"col\": 11\n      },\n      \"trueCount\": 1,\n      \"falseCount\": 0,\n      \"group\": [\n        0,\n        1\n      ],\n      \"ignored\": 0\n    },\n    {\n      \"startLoc\": {\n        \"line\": 55,\n        \"col\": 10\n      },\n      \"endLoc\": {\n        \"line\": 55,\n        \"col\": 13\n      },\n      \"trueCount\": 0,\n      \"falseCount\": 1,\n      \"group\": [\n        2,\n        3\n      ],\n      \"ignored\": 0\n    },\n    {\n      \"startLoc\": {\n        \"line\": 58,\n        \"col\": 10\n      },\n      \"endLoc\": {\n        \"line\": 58,\n        \"col\": 13\n      },\n      \"trueCount\": 1,\n      \"falseCount\": 0,\n      \"group\": [\n        2,\n        3\n      ],\n      \"ignored\": 0\n    }\n  ],\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****示例二：****调用bbb(2)和bbb(-1)，该方法触发两次。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(517207)/* ["default"] */.A) + "",
                width: "436",
                height: "302"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "branches的0号元素，对应12行，trueCount和falseCount都为1，表示该行触发了两次，一次满足条件，一次不满条件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"name\": \"bbb\",\n  \"count\": 2,\n  \"regions\": [\n    ...\n  ],\n  \"branches\": [\n    {\n      \"startLoc\": {\n        \"line\": 12,\n        \"col\": 7\n      },\n      \"endLoc\": {\n        \"line\": 12,\n        \"col\": 12\n      },\n      \"trueCount\": 1,\n      \"falseCount\": 1,\n      \"group\": [],\n      \"ignored\": 0\n    },\n    {\n      \"startLoc\": {\n        \"line\": 14,\n        \"col\": 14\n      },\n      \"endLoc\": {\n        \"line\": 14,\n        \"col\": 20\n      },\n      \"trueCount\": 0,\n      \"falseCount\": 1,\n      \"group\": [],\n      \"ignored\": 0\n    },\n    {\n      \"startLoc\": {\n        \"line\": 22,\n        \"col\": 7\n      },\n      \"endLoc\": {\n        \"line\": 22,\n        \"col\": 13\n      },\n      \"trueCount\": 1,\n      \"falseCount\": 1,\n      \"group\": [],\n      \"ignored\": 0\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "exeLine"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "exeLine记录了所有可执行行的行号，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(310559)/* ["default"] */.A) + "",
            width: "393",
            height: "187"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成的exeLine为："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"exeLine\": {\n  \"0\": 2,\n  \"1\": 3,\n  \"2\": 4,\n  \"3\": 6,\n  \"4\": 7,\n  \"5\": 8,\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "summary"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "summary记录了单个文件的覆盖率详情。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"summary\": {\n  \"lines\": {           // 行数总览\n    \"total\": 10,       // 可执行代码行数\n    \"covered\": 5,      // 覆盖数量\n    \"pct\": 50,         // 行覆盖率\n    \"executedLineCount\": [     // 代码行执行次数，-1表示该行不被统计，0表示未执行，1-N表示执行1-N次\n      -1,\n      -1,\n      -1,\n      0,\n      -1,\n      1,\n      0,\n      2,\n      2,\n      -1,\n      1,\n      1,\n      0,\n      0,\n      0,\n      -1\n    ]\n  },\n  \"functions\": {    // 函数总览\n    \"total\": 6,     // 函数数量\n    \"covered\": 5,   // 覆盖数量\n    \"pct\": 83.33    // 函数覆盖率\n  },\n  \"branches\": {     // 分支总览\n    \"total\": 2,     // 分支数量\n    \"covered\": 1,   // 覆盖数量\n    \"pct\": 50       // 分支覆盖率\n  }\n}\n"
          })
        }), "\n"]
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
753949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAIAAADd4huNAAABJklEQVR4AVyQsUoDQRCGZzdeBEvRe4MgAWOVMum003dIr0XIA5hoYxcEtddn8LoEG1OmMqDCKdgJpwRyoKBncn6XuVxClp/hn39m/tldOxqFirO7i9f3tzBMUxWJKAor02OMPASPJ732rd/5m0SkU1mUxHGSWRKQUJFoHHl+t3XfHgRPiEB1It2pK8yIBSLy+T287F9f9W8+voboAJGxtJVkCYPg+bR37r10s/vYbCiWCTAzb/jv+MfzO3of2izOsnDoAAvCnCauTAAz81NCzOdW9wt7zUpje7MoQtkkP6LemR+k5G41q/WDwm5+xaEKUleGKBPBxtr6Ubl2WK5BSFkIIOkPaOLkHDYeV+olN9lIWXUs4fNn7bjFVrXBRgboUNChfSLyDwAA//+W8j3/AAAABklEQVQDAFkDmJBLtgZJAAAAAElFTkSuQmCC");

},
206071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
833252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
614108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752880-280d24aadd3359f17d845ad1afdaf34e.png");

},
987446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
75400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
713546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912884-280d24aadd3359f17d845ad1afdaf34e.png");

},
517207(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912866-a70c2f435821eccab21f365a909e6e2b.png");

},
369693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752874-77531a900715b92b0e9d386de16681a3.png");

},
623011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
32243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
926875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752878-922364a5a96d8bc9d6f1425ca41bc932.png");

},
666708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832805-a7ef4190b8a31cd6a475ad228639541c.png");

},
750825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
310559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752896-733ea48ff3e2288c29f3ee4be2b57bfd.png");

},
500594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752892-733ea48ff3e2288c29f3ee4be2b57bfd.png");

},
917715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
645607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
454113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832813-6dad9dd601695e961de359b723a5cea8.png");

},
21821(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752884-6efe6330f02edbb68e2bf458df35576f.png");

},
20897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAABCUlEQVQ4jaWSodaDMAyFv3JmmMSmr8AszzA5bO0slofAYmexWCqx4z1isZOd+M96VrYfs6gmTXJzb2JCCIGN3e93AKqq2n4ldtgGVJVlWQCw1iIi/xabF7KqMgwDqpokiAjOua9NTAghqCpd1+2O2LbtRwMTQghd10XEy+XC6XQC/rh77+MEbdumnFU1KbTW0vc9AM45ALz3vPLe0bNxHKNTVRXDMLCuK+u6crvdEsWnaYqbAMi23B6PR3zneb6rQ1bXdXTmeeZ6vVIUBUVR4JxLkM7nczLJQUQQEVQV7z3GGJqmAWBZlkSwr2r/tCr44UjeA6rKNE2R4955fty2iFCWJcfjcbcQ4AmlCJEReZ6DlAAAAABJRU5ErkJggg==");

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