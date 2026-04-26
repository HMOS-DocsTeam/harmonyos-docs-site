"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["531962"], {
675894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_test_ide_code_test_ide_instrument_test_ide_instrument_test_md_92f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-test-ide-code-test-ide-instrument-test-ide-instrument-test-md-92f.json
var site_docs_ide_app_test_ide_test_ide_code_test_ide_instrument_test_ide_instrument_test_md_92f_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-test/ide-code-test/ide-instrument-test/ide-instrument-test","title":"Instrument Test","description":"创建ArkTS测试用例","source":"@site/docs/ide-app-test/ide-test/ide-code-test/ide-instrument-test/ide-instrument-test.md","sourceDirName":"ide-app-test/ide-test/ide-code-test/ide-instrument-test","slug":"/ide-app-test/ide-test/ide-code-test/ide-instrument-test/","permalink":"/harmonyos-docs-site/ide-app-test/ide-test/ide-code-test/ide-instrument-test/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Instrument Test","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-instrument-test","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"方舟运行时检测","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check/"},"next":{"title":"Local Test","permalink":"/harmonyos-docs-site/ide-app-test/ide-test/ide-code-test/ide-local-test/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-test/ide-code-test/ide-instrument-test/ide-instrument-test.md


const frontMatter = {
	title: 'Instrument Test',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-instrument-test',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'Instrument Test';

const assets = {

};



const toc = [{
  "value": "创建ArkTS测试用例",
  "id": "创建arkts测试用例",
  "level": 2
}, {
  "value": "创建默认测试用例",
  "id": "创建默认测试用例",
  "level": 3
}, {
  "value": "自定义Ability和Resources",
  "id": "自定义ability和resources",
  "level": 3
}, {
  "value": "运行测试用例",
  "id": "运行测试用例",
  "level": 2
}, {
  "value": "运行模式",
  "id": "运行模式",
  "level": 3
}, {
  "value": "调试模式",
  "id": "调试模式",
  "level": 3
}, {
  "value": "覆盖率统计模式",
  "id": "覆盖率统计模式",
  "level": 3
}, {
  "value": "（可选）自定义测试用例运行任务",
  "id": "可选自定义测试用例运行任务",
  "level": 2
}, {
  "value": "使用过滤条件筛选待运行的测试用例",
  "id": "使用过滤条件筛选待运行的测试用例",
  "level": 3
}, {
  "value": "设置调试代码类型",
  "id": "设置调试代码类型",
  "level": 3
}, {
  "value": "ASan检测",
  "id": "asan检测",
  "level": 3
}, {
  "value": "测试C++代码",
  "id": "测试c代码",
  "level": 2
}, {
  "value": "运行C++测试代码",
  "id": "运行c测试代码",
  "level": 3
}, {
  "value": "收集代码覆盖率",
  "id": "收集代码覆盖率",
  "level": 3
}, {
  "value": "使用命令行执行测试Instrument Test",
  "id": "使用命令行执行测试instrument-test",
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
        id: "instrument-test",
        children: "Instrument Test"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建arkts测试用例",
      children: "创建ArkTS测试用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建默认测试用例",
      children: "创建默认测试用例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程目录下打开待测试模块（支持HAP、HAR、HSP模块）下的ets文件，将光标置于代码中任意位置，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "右键 > Show Context Actions"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "> Create Instrument Test"
            })
          }), "或快捷键", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alt+Enter"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "（macOS为Option+Enter）> Create Instrument Test"
            })
          }), "创建测试类。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(119343)/* ["default"] */.A) + "",
            width: "760",
            height: "93"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹出的Create Instrument Test窗口，输入或选择如下参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Testing library"
              })
            }), "：测试类型，默认为DECC-ArkTSUnit，JS语言默认为DECC-JSUnit。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ArkTS name"
              })
            }), "：创建的测试文件名称，测试文件中包含了测试用例。测试文件名称要求在工程目录范围内具有唯一性，仅支持字母、数字、下划线（_）和点（.）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Destination package"
              })
            }), "：测试文件存放的位置，建议存放在待测试模块的test目录下。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(25971)/* ["default"] */.A) + "",
            width: "789",
            height: "180"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DevEco Studio在ohosTest/ets/test目录下自动生成对应的测试类。在测试类中，DevEco Studio会生成对应方法的用例模板，具体测试代码需要开发者根据业务逻辑进行开发，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkxtest-guidelines",
            children: "自动化测试框架使用指导"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(721699)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["您也可以手动在ohosTest > ets > test文件夹下创建测试用例，手动创建后，需要在List.test.ets文件中添加创建的用例类。手动创建的工程或历史工程，ohosTest > ets > test文件夹下所有文件的文件名必须以.test.ets结尾，否则将在运行时弹窗提示“Error: Test files must end with '.test.ets'.”请点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fix"
              })
            }), "按钮，DevEco Studio将自动对ohosTest > ets > test目录下的文件名进行修改。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "首次在HarmonyOS设备上运行UI测试框架需要使用命令“hdc -n shell param set persist.ace.testmode.enabled 1”使能UiTest测试能力。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义ability和resources",
      children: "自定义Ability和Resources"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.3.403版本开始，新创建的工程/模块的ohosTest目录下默认不创建testability、testrunner和resources目录，历史工程仍保留这些目录，如果新工程需要使用ability或resources能力，需要开发者自行创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(33370)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要使用ability能力，需要同时创建testrunner目录及OpenHarmonyTestRunner.ets文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "新旧版本ohosTest目录对比"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "新版本"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "历史版本"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建以下目录或文件，文件内容示例可在", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section1574003717165",
            children: "运行Instrument Test测试用例"
          }), "后，在对应模块的.test/{productName}/intermediates/src/ohosTest（DevEco Studio 6.1.0 Beta1及以上版本）或build/{productName}/intermediates/src/ohosTest（DevEco Studio 6.1.0 Beta1以下版本）下查看，其中productName是当前生效的product，可以通过点击DevEco Studio右上方", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(444472)/* ["default"] */.A) + "",
            width: "15",
            height: "14"
          }), "图标进行查看。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "testability目录 > TestAbility.ets文件"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "testability目录 > pages目录 > Index.ets文件"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "testrunner目录 > OpenHarmonyTestRunner.ets文件"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "resources目录 > base目录 > element目录 > color.json文件"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "resources目录 > base目录 > element目录 > string.json文件"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "resources目录 > base目录 > profile目录 > test_pages.json文件"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在module.json5文件中补充ability配置字段mainElement、pages、abilities，关于字段的具体说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"name\": \"entry_test\",\n    \"type\": \"feature\",\n    \"description\": \"$string:module_test_desc\",\n    \"mainElement\": \"TestAbility\",                                   // 对应下方abilities中的ability name。\n    \"deviceTypes\": [\n      \"phone\",\n      \"tablet\",\n      \"2in1\"\n    ],\n    \"deliveryWithInstall\": true,\n    \"installationFree\": false,\n    \"pages\": \"$profile:test_pages\",                                 // 对应resources目录 > base目录 > profile目录 > test_pages.json文件。\n    \"abilities\": [                                                  // 添加的ability的配置信息。\n      {\n        \"name\": \"TestAbility\",\n        \"srcEntry\": \"./ets/testability/TestAbility.ets\",\n        \"description\": \"$string:TestAbility_desc\",\n        \"icon\": \"$media:icon\",    // 确保引用的资源都存在\n        \"label\": \"$string:TestAbility_label\",\n        \"exported\": true,\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:start_window_background\"\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行测试用例",
      children: "运行测试用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运行模式",
      children: "运行模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用DevEco Studio运行测试用例前，需要将设备与电脑进行连接，将工程编译成带签名信息的HAP，再安装到真机设备或模拟器上运行，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-device",
        children: "使用本地真机运行应用"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
        children: "使用模拟器运行应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以采用运行工程目录（test）、测试文件（如Ability.test.ets）、测试套件（describe）、测试方法（it）的方式来运行测试用例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程目录中，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "右键 > Run'测试文件名称'"
            })
          }), "，执行测试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(754326)/* ["default"] */.A) + "",
            width: "409",
            height: "442"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开测试文件，单击测试套件左侧按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(458566)/* ["default"] */.A) + "",
            width: "337",
            height: "217"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果要根据自定义的配置执行Instrument Test，在", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section65264166107",
            children: "创建测试用例运行任务"
          }), "后，通过如下方式的其中之一，执行Instrument Test："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在工具栏主菜单单击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Run > Run'测试名称'"
                })
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在DevEco Studio的右上角，选择测试任务，然后单击右侧的", (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(704356)/* ["default"] */.A) + "",
                width: "15",
                height: "16"
              }), "按钮，执行Instrument Test。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(805855)/* ["default"] */.A) + "",
                width: "341",
                height: "29"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行完测试任务后，查看测试结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(665946)/* ["default"] */.A) + "",
        width: "1744",
        height: "304"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调试模式",
      children: "调试模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试模式相比运行模式增加了断点管理功能。在断点命中时，可以选择单步执行、步入步出、进入下个断点等方式进行调试，另外可以使用线程堆栈可视化、变量和表达式可视化功能，快速定位问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以文件级别为例，在添加断点之后，在工程目录中，选中文件，单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "右键 > Debug'测试文件名称'"
        })
      }), "，以调试模式执行测试任务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(979413)/* ["default"] */.A) + "",
        width: "419",
        height: "453"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在断点命中时，下方将出现Debug窗口。开发者可在该窗口中进行断点管理与基础调试能力的可视化操作，在断点命中时可查看当前线程的变量和堆栈信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(269288)/* ["default"] */.A) + "",
        width: "1009",
        height: "718"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "断点命中时，在代码编辑器窗口单击右键，在弹出的菜单中将出现调试模式特有功能，如计算表达式、添加变量监视等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(272801)/* ["default"] */.A) + "",
        width: "871",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在跳出所有断点后，测试结束，与运行模式相同，在测试窗口查看测试结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(899858)/* ["default"] */.A) + "",
        width: "1549",
        height: "817"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(469867)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio支持设置调试代码类型，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section0164586312",
        children: "设置调试代码类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "覆盖率统计模式",
      children: "覆盖率统计模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Instrument Test运行的基础上支持代码覆盖率统计。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以自定义需要参与覆盖率测试的文件，具体配置方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-test/ide-ui-test#section13756446154",
        children: "配置覆盖率过滤文件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以采用运行工程目录（test）、测试文件（如Ability.test.ets）、测试套件（describe）、测试方法（it）的方式来启动代码覆盖率的统计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以文件级别为例，有两种方式启动测试："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方式一：在工程目录中，选中文件，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "右键 > Run '测试文件名称' with Coverage"
            })
          }), "，执行测试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(377928)/* ["default"] */.A) + "",
            width: "420",
            height: "476"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方式二：在DevEco Studio的右上角，选择测试任务，然后单击右侧的", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(31957)/* ["default"] */.A) + "",
            width: "20",
            height: "21"
          }), "按钮，执行测试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(154940)/* ["default"] */.A) + "",
            width: "487",
            height: "30"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动测试后，进行编译构建，底部将出现Cover窗口，构建结束后自动拉起Cover窗口，测试任务结束后，窗口中会打印测试报告的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(809040)/* ["default"] */.A) + "",
        width: "1456",
        height: "324"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击链接可打开报告，查看ArkTS代码覆盖率详情，关于覆盖率的计算方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-test/ide-ui-test#section10394362109",
        children: "查看覆盖率报告"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(693816)/* ["default"] */.A) + "",
        width: "1777",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Cover窗口中，单击rerun按钮可以按照之前的设置，重新执行覆盖率用例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(783533)/* ["default"] */.A) + "",
        width: "397",
        height: "179"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可选自定义测试用例运行任务",
      children: "（可选）自定义测试用例运行任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，测试用例可直接运行，如果需要自定义测试用例运行任务，可通过如下方法进行设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工具栏主菜单单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edit Configurations"
            })
          }), "进入Run/Debug Configurations界面。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run/Debug Configurations"
            })
          }), "界面，单击+按钮，在弹出的下拉菜单中，单击Instrument Test。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(680886)/* ["default"] */.A) + "",
            width: "206",
            height: "182"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据实际情况，配置Instrument Test的运行参数。然后单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), "，完成配置。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果模块依赖共享包，请提前设置HAP安装方式，勾选“", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Keep Application Data"
              })
            }), "”，则表示采用覆盖安装方式，保留应用/元服务缓存数据。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果工程中HAP/HSP模块直接依赖其他HSP模块（如entry模块依赖HSP模块）或间接依赖其他模块（如entry模块依赖HAR模块，HAR又依赖HSP模块）时，在测试阶段需要同时安装模块包及其所有依赖模块的包到设备中。此时，可以勾选“", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Auto Dependencies"
              })
            }), "”，测试时会自动将所有依赖的模块都安装到设备上。该选项默认勾选。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果不涉及UI测试，勾选“", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Only OhosTest Package"
              })
            }), "”，则只会推送OhosTest测试包到设备上，不会推送HAP/HSP包，可以缩短推包时间。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(577633)/* ["default"] */.A) + "",
            width: "894",
            height: "731"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用过滤条件筛选待运行的测试用例",
      children: "使用过滤条件筛选待运行的测试用例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在用例编写时，通过配置it的第二个入参，为每个用例添加过滤参数。此参数用于为测试用例添加标注，不添加则参数默认为0表示未被标注。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(450687)/* ["default"] */.A) + "",
            width: "1024",
            height: "470"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run/Debug Configurations"
            })
          }), "窗口，点击Test Args", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(84924)/* ["default"] */.A) + "",
            width: "12",
            height: "13"
          }), "，打开", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test Args"
            })
          }), "界面，添加命令行参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(692446)/* ["default"] */.A) + "",
            width: "892",
            height: "534"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如将测试参数配置为level=1, size=medium"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(143358)/* ["default"] */.A) + "",
            width: "893",
            height: "533"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表2"
            })
          }), " 参数规则参考"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Key"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "含义说明"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Value取值范围"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "level"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用例级别"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\"0\",\"1\",\"2\",\"3\",\"4\", 例如：-s level 1"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "size"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用例粒度"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\"small\",\"medium\",\"large\", 例如：-s size small"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "testType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用例测试类型"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\"function\",\"performance\",\"power\",\"reliability\",\"security\",\"global\",\"compatibility\",\"user\",\"standard\",\"safety\",\"resilience\", 例如：-s testType function"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成以上配置后，在运行此项配置对应的测试任务时，只运行过滤后的测试用例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(681031)/* ["default"] */.A) + "",
            width: "1732",
            height: "963"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置调试代码类型",
      children: "设置调试代码类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Run > Edit Configurations"
        })
      }), "，打开", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Run/Debug Configurations"
        })
      }), "窗口，选择Instrument Test，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Debugger"
        })
      }), "页签，设置Debug type。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(354155)/* ["default"] */.A) + "",
        width: "892",
        height: "568"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试类型Debug type默认为Detect Automatically，关于各调试类型的说明如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "调试类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "调试代码"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detect Automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动检测。根据工程模块及其依赖的模块涉及的编程语言，自动启动对应的调试器。  如果检测到是Native模块，出现两个调试窗口（PandaDebugger、Native）；如果不是Native模块，只出现PandaDebugger调试窗口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS/JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只调试ArkTS/JS，只出现PandaDebugger调试窗口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单独调试C++，只出现Native调试窗口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dual(ArkTS/JS + Native)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持ArkTS/JS和C++混合调试，出现两个调试窗口（PandaDebugger、Native）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(635767)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调试C++代码时，当前模块及所有依赖的HSP模块的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section8352185341915",
        children: "Address Sanitizer配置"
      }), "要保持一致，若不一致，可能无法进入C++代码的断点处。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asan检测",
      children: "ASan检测"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instrument Test针对C/C++方法提供ASan检测能力，关于ASan的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-asan",
        children: "ASan检测"
      }), "，当前不支持JS语言。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在运行/调试配置窗口，选择对应的Instrument Test，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diagnostics"
            })
          }), "页签，勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address Sanitizer"
            })
          }), "选项，勾选后，测试包和源码包均开启ASan能力。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(826390)/* ["default"] */.A) + "",
            width: "859",
            height: "190"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果有引用本地library，需在library模块的build-profile.json5文件中，配置arguments字段值为“-DOHOS_ENABLE_ASAN=ON”，表示以ASan模式编译so文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(68958)/* ["default"] */.A) + "",
            width: "774",
            height: "553"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行测试用例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当程序出现内存错误时，弹出ASan log信息，点击信息中的链接即可跳转至引起内存错误的代码处。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(65923)/* ["default"] */.A) + "",
            width: "1449",
            height: "758"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试c代码",
      children: "测试C++代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta5版本开始，支持对C++代码进行测试，包括运行/调试C++测试代码、对C++代码进行覆盖率统计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于C++的测试so无法直接在设备上运行，需要通过Node-API的方式拉起，即通过ArkTS/JS语言拉起C/C++测试用例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运行c测试代码",
      children: "运行C++测试代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建cpp测试目录，鼠标右键单击ohosTest目录，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New > C/C++ File(Napi)"
            })
          }), "，在ohosTest下生成cpp测试目录，以entry模块为例，目录结构如下。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > ohosTest > cpp > types"
              })
            }), "：用于存放C++的API接口描述文件。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > ohosTest > cpp > types"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "> libentry_test > index.d.ts"
              })
            }), "：描述C++ API接口行为，如接口名、入参、返回参数等。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > ohosTest > cpp > types"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "> libentry_test > oh-package.json5"
              })
            }), "：配置.so三方包声明文件的入口及包名。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src > ohosTest > cpp > CMakeLists.txt"
              })
            }), "：CMake配置文件，提供CMake构建脚本。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["src > ohosTest > cpp > napi_init.cpp：", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "定义C++ API接口的文件"
                  })
                }), "。"]
              })
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(568901)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio生成的cpp测试目录中不包含C++测试框架，需要开发者自行选择开源测试框架使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(745847)/* ["default"] */.A) + "",
            width: "673",
            height: "361"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ArkTS测试用例拉起C++测试，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkTS测试文件Ability.test.ets\nimport entryTest from 'libentry_test.so';\nexport default function abilityTest() {\n  describe('ActsAbilityTest', () => {\n    ...\n    it('testNative', 0, () => {\n      hilog.info(0x0000, 'testTag', '%{public}s', 'testNative it begin');\n      let result = entryTest.runNativeTest();\n      hilog.info(0x0000, 'testTag', '%{public}s', result)\n      expect(result).assertContain(\"ended\");\n    })\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行testNative测试用例，查看测试结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(312108)/* ["default"] */.A) + "",
            width: "657",
            height: "161"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "收集代码覆盖率",
      children: "收集代码覆盖率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio默认不收集C++代码覆盖率，需要通过以下方式开启。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在测试目录下的CMakeLists.txt中添加以下代码，开启覆盖率编译插桩能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// DevEco Studio 6.0.2 Beta1之前版本\nset(CMAKE_CXX_FLAGS \"${CMAKE_CXX_FLAGS} -fprofile-instr-generate -fcoverage-mapping\")\nset(CMAKE_C_FLAGS \"${CMAKE_C_FLAGS} -fprofile-instr-generate -fcoverage-mapping\")\n\n// DevEco Studio 6.0.2 Beta1及以上版本，OHOS_TEST_COVERAGE在覆盖率模式下为true，在调试/运行模式下为false\nif(OHOS_TEST_COVERAGE)\n  set(CMAKE_CXX_FLAGS \"${CMAKE_CXX_FLAGS} -fprofile-instr-generate -fcoverage-mapping\")\n  set(CMAKE_C_FLAGS \"${CMAKE_C_FLAGS} -fprofile-instr-generate -fcoverage-mapping\")\nendif()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在napi_init.cpp文件的RunNativeTest方法中，调用__llvm_profile_write_file方法，将覆盖率数据保存到设备的/data/storage/el2/base路径下的c++_coverage.profraw文件中，该路径和文件名不可修改，示例代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "extern \"C\" {\n    void __llvm_profile_set_filename(char *);\n    int __llvm_profile_write_file(void);\n}\n\nstatic napi_value RunNativeTest(napi_env env, napi_callback_info info)\n{\n    char filename[256];\n    snprintf(filename, sizeof(filename), \"/data/storage/el2/base/c++_coverage.profraw\"); // 覆盖率报告文件路径和文件名，不可修改\n    __llvm_profile_set_filename(filename);\n    // 开启测试\n    ...\n    // 结束测试，保存数据\n     __llvm_profile_write_file();\n    ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["运行覆盖率测试，选中ArkTS测试文件，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "右键 >"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run '测试文件名称' with Coverage"
            })
          }), "，执行测试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(657276)/* ["default"] */.A) + "",
            width: "480",
            height: "539"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动测试后，进行编译构建，底部将出现Cover窗口，构建结束后自动拉起Cover窗口，测试任务结束后，窗口中会打印测试报告的路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(267113)/* ["default"] */.A) + "",
            width: "1821",
            height: "489"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击链接可打开报告，查看C++代码覆盖率详情。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(683566)/* ["default"] */.A) + "",
            width: "1315",
            height: "412"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用命令行执行测试instrument-test",
      children: "使用命令行执行测试Instrument Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过命令行方式执行Instrument Test，在工程根目录下执行命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigorw onDeviceTest -p module={moduleName} -p coverage={true|false} -p scope={suiteName}#{methodName} -p ohos-debug-asan={true|false}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "module：执行测试的模块，缺省默认是执行所有模块的用例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["coverage：是否生成覆盖率报告，缺省默认是true，在<module-path>/.test/default/outputs/ohosTest/reports路径下生成两份报告，一份是html格式（index.html），一份是json格式（coverageReport.json），具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-app-test/ide-test/ide-ui-test#section10394362109",
            children: "查看覆盖率报告"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果开启了C++代码覆盖率测试，会生成C++代码的覆盖率报告，路径：<module-path>/.test/default/outputs/ohosTest/cpp_reports/index.html"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "scope：格式为{suiteName}#{methodName}或{suiteName}，分别表示测试用例级别或测试套件级别的测试，缺省默认是执行当前模块的所有用例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohos-debug-asan：是否启用ASan检测，缺省默认是false。从DevEco Studio 5.1.1 Beta1版本开始支持。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ASan日志路径：<module-path>/.test/default/intermediates/ohosTest/coverage_data"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(651601)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过命令行执行测试时，不支持配置product，默认为default。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多个module和scope之间用逗号隔开。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试结果文件：<module-path>/.test/default/intermediates/ohosTest/coverage_data/test_result.txt"
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
826390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753267-a882c4a9c1dfcd50f95e5098d28e5001.png");

},
979413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753298-df082fa0e1e868bec234578bea8ebcb4.png");

},
444472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAABCUlEQVQ4jaWSodaDMAyFv3JmmMSmr8AszzA5bO0slofAYmexWCqx4z1isZOd+M96VrYfs6gmTXJzb2JCCIGN3e93AKqq2n4ldtgGVJVlWQCw1iIi/xabF7KqMgwDqpokiAjOua9NTAghqCpd1+2O2LbtRwMTQghd10XEy+XC6XQC/rh77+MEbdumnFU1KbTW0vc9AM45ALz3vPLe0bNxHKNTVRXDMLCuK+u6crvdEsWnaYqbAMi23B6PR3zneb6rQ1bXdXTmeeZ6vVIUBUVR4JxLkM7nczLJQUQQEVQV7z3GGJqmAWBZlkSwr2r/tCr44UjeA6rKNE2R4955fty2iFCWJcfjcbcQ4AmlCJEReZ6DlAAAAABJRU5ErkJggg==");

},
783533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913260-71463cbc6e9c983620dc3ada9af27f27.png");

},
681031(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753314-d0832e4795cf398faa58047467beae5f.png");

},
754326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753243-a340de9b4f97683051dda48d0c1536bf.png");

},
693816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833207-280d24aadd3359f17d845ad1afdaf34e.png");

},
721699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
119343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753237-ef1d9bc3fb018e89e27dcf9d44be59d8.png");

},
704356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAAo0lEQVQ4jWP89OnTfwYyARO5GqmveeqZBQxvvr0jSjMLusClV9cZrr+9w+CuZM/goeTAwMrMSrzNDAwMDL///mbYcnsPQ8PhPobLr66TphkG3nx7xzDlzAKcXsFwNjaAyytEhzY2r1AUVUQ5m4GBgYGVmRXD2URp1hPTZAjX8mMQ4RIi3mYRLiGGCC0/Bl0xTazyWDVjcyJRmnE5ERtgpCRLAgDJVz3PbG1UrgAAAABJRU5ErkJggg==");

},
267113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753290-029ba5afd7525adce8cf4fa8e395cb81.png");

},
68958(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913320-733795065e091fd117c020d556acde42.png");

},
84924(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAAQElEQVQoFWPYuf/Qf2Lxp0+f/jPAFIM4uDCyGso0wExCpkG2wviUOwlmEjI91GygbTwghwwuNko84FKELA7SAADxGyBL0KdtOAAAAABJRU5ErkJggg==");

},
745847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753213-606efe6db5eef9d8aac4256dc36a9fb3.png");

},
657276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753310-dd5f192349698e072b637347b45e4c05.png");

},
354155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913318-7cbb54c7ba214e13073d583ce0bbe696.png");

},
568901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
577633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753275-84d1d1a3090d6444d10403229e927b17.png");

},
469867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
450687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833199-2195ab647312c47f22948d9a5e9e0673.png");

},
635767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
665946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913296-a5e266079a84f39cd330e9bd84170a1d.png");

},
809040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913262-23fca128e40df4a83deccbb21d3de3b3.png");

},
312108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753304-c81f6533f30972df68f40d131c285b3b.png");

},
458566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833189-b353f2e82e9ec0e17b3c77427cf04cd0.png");

},
269288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833191-5fe9a7a7ae4db68d49cc3c1feee6e33e.png");

},
33370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
31957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAABAklEQVQ4Ee3SsQ6CMBAAUH/TycTNpYGZxdkwIqMrJjiQmMigg4skMLk4FhMUYlxUfuDMNSkplsYijA6Xa1ru0fY6KMsS+oxBnxhaf7B7g6Q7zPMckiSBIAjAdV2wLIsFjnEO1/AbVTMlkBACOtEJLIqi2jX/WSdQLO4dFPGmsdYdioWz/Rwu96t+UwzDkJoigsPlBMYrEzanXSMq7dC27a8gohjTrQ30dq7BEhhFUSOYZRkr5BjPI5+Af1zD4/Vk6xKIx/M8r4bGccweN65x6DM7h4UaxMIwDME0zQrGcROotUMsxEjTFBzHYUEplUCtO+SYKuNRW3VZBfH51u+QF/6a33KFuGYXZuGdAAAAAElFTkSuQmCC");

},
65923(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753273-bd90acdac6826870bc51dc9356290528.png");

},
143358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913276-60e58892c5db2f3b1fafb9428c0ae3a2.png");

},
805855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
377928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833187-d38d44a8b9a7fff59b8a115758c8513e.png");

},
154940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
25971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833197-25e5fd6e61044c6a336408793232f1c2.png");

},
899858(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833251-302c14b4c625de89511076f23312d460.png");

},
680886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
272801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753322-e7afe678db88b047801182113eba51a3.png");

},
683566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833213-a75a499ea1bb1e9fd8920d431d18c68b.png");

},
692446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753288-021837930bcf713eca55104794076d99.png");

},
651601(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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