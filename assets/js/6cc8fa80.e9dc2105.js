"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["849185"], {
688269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_incremental_debugging_ide_incremental_debugging_md_6cc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-incremental-debugging-ide-incremental-debugging-md-6cc.json
var site_docs_ide_debug_app_ide_code_debugging_ide_incremental_debugging_ide_incremental_debugging_md_6cc_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-incremental-debugging/ide-incremental-debugging","title":"增量调试","description":"对于大型应用来说，每次修改代码后需要重新构建、推包、安装，整个流程耗时较长。针对该场景，在DevEco Studio和命令行场景中分别提供增量运行调试功能，支持开发者在真机上调试应用时，修改代码后，会识别出代码差异，构建增量包，增量运行调试时只推送增量包，减少大型应用调试推包时间。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-incremental-debugging/ide-incremental-debugging.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-incremental-debugging","slug":"/ide-debug-app/ide-code-debugging/ide-incremental-debugging/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-incremental-debugging/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"增量调试","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-incremental-debugging","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"三方库源码调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-source-code-debugging/"},"next":{"title":"Hot Reload","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-hot-reload/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-incremental-debugging/ide-incremental-debugging.md


const frontMatter = {
	title: '增量调试',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-incremental-debugging',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '增量调试';

const assets = {

};



const toc = [{
  "value": "使用DevEco Studio增量调试",
  "id": "使用deveco-studio增量调试",
  "level": 2
}, {
  "value": "调试C++代码",
  "id": "调试c代码",
  "level": 3
}, {
  "value": "调试rawfile/resfile资源",
  "id": "调试rawfileresfile资源",
  "level": 3
}, {
  "value": "使用命令行增量调试",
  "id": "使用命令行增量调试",
  "level": 2
}, {
  "value": "通过hvigorw构建hqf包",
  "id": "通过hvigorw构建hqf包",
  "level": 3
}, {
  "value": "通过SDK工具构建hqf包",
  "id": "通过sdk工具构建hqf包",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "在其他的开发工具中修改打包so库文件，无法使用DevEco Studio的增量调试功能",
  "id": "在其他的开发工具中修改打包so库文件无法使用deveco-studio的增量调试功能",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "增量调试",
        children: "增量调试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于大型应用来说，每次修改代码后需要重新构建、推包、安装，整个流程耗时较长。针对该场景，在DevEco Studio和命令行场景中分别提供增量运行调试功能，支持开发者在真机上调试应用时，修改代码后，会识别出代码差异，构建增量包，增量运行调试时只推送增量包，减少大型应用调试推包时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(506190)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++代码增量调试支持API Version 11及以上版本Stage模型的工程；ArkTS代码增量调试仅支持API Version 12及以上版本Stage模型工程的资源文件修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用deveco-studio增量调试",
      children: "使用DevEco Studio增量调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调试c代码",
      children: "调试C++代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工具栏中，选择调试的设备，并单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(625898)/* ["default"] */.A) + "",
            width: "20",
            height: "18"
          }), "或", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debug"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(979380)/* ["default"] */.A) + "",
            width: "16",
            height: "18"
          }), "启动工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在修改完代码后，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apply Changes"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(717957)/* ["default"] */.A) + "",
            width: "19",
            height: "18"
          }), "推送增量包安装至设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击Apply Changes按钮后，DevEco Studio启动构建的增量构建任务，构建出增量包hqf。增量包构建完成后，将推送安装至设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(249854)/* ["default"] */.A) + "",
            width: "250",
            height: "139"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(615044)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前增量运行Apply Changes功能，不支持新建和删除代码文件，不支持修改装饰器相关的代码，不支持在代码中使用import新增引用文件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调试rawfileresfile资源",
      children: "调试rawfile/resfile资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 5.1.0 Release版本开始支持增量调试rawfile资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工具栏中，选择调试的设备，并单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(859927)/* ["default"] */.A) + "",
            width: "20",
            height: "18"
          }), "或", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debug"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(831713)/* ["default"] */.A) + "",
            width: "16",
            height: "18"
          }), "启动工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程的资源resources文件目录下的resfile或rawfile目录下，新增或者修改资源文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(223493)/* ["default"] */.A) + "",
            width: "243",
            height: "185"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(294045)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前对rawfile/resfile资源的增量调试，仅支持代码中直接调用的资源文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apply Changes"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(855758)/* ["default"] */.A) + "",
            width: "19",
            height: "18"
          }), "推送增量包安装至设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击Apply Changes按钮后，DevEco Studio启动构建的增量构建任务，构建出增量包hqf。增量包构建完成后，将推送安装至设备。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用命令行增量调试",
      children: "使用命令行增量调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过hvigorw构建hqf包",
      children: "通过hvigorw构建hqf包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查待运行模块和依赖模块下是否存在build/config/buildConfig.json文件，如果不存在，先通过DevEco Studio全量运行工程，生成该文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(108163)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果已执行步骤1，则步骤2和3无需再执行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据运行所需的模块，及模块的product、target，编写命令行执行HAP/HSP编译任务，如entry模块依赖HSP模块library："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw --mode module -p module=entry@default,library@default -p product=default assembleHap assembleHsp --info --no-daemon\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["关于命令行的使用指导请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-commandline",
            children: "hvigorw"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["执行hdc命令安装HAP、HSP，关于hdc工具的使用指导请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hdc",
            children: "hdc"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hdc shell mkdir data/local/tmp/99c24fdc44694c05be12491d0a48e139\n$ hdc file send library-default-signed.hsp \"data/local/tmp/99c24fdc44694c05be12491d0a48e139\"\n$ hdc file send entry-default-signed.hap \"data/local/tmp/99c24fdc44694c05be12491d0a48e139\"\n$ hdc shell bm install -p \"data/local/tmp/99c24fdc44694c05be12491d0a48e139\"\n$ hdc shell rm -rf data/local/tmp/99c24fdc44694c05be12491d0a48e139\n$ hdc shell aa start -a {abilityName} -b {bundleName}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "abilityName：应用的ability名称。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "bundleName：应用包名。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果修改了HAP/HSP模块的rawfile或resfile目录下的资源文件，则需要在对应模块的build/default/intermediates/patch/default目录下新建changedFileList.json并写入修改的文件；如果修改了HAR模块的资源文件，则需要在依赖该HAR的模块下写入修改的文件，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"resources\": {\n    \"resFile\": [\n      {\n        \"filePath\": \"D:\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\\\\resfile\\\\test.txt\",\n        \"resourcePath\": \"D:\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\"\n      }\n    ],\n    \"rawFile\": [\n      {\n        \"filePath\": \"D:\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\\\\rawfile\\\\test.txt\",\n        \"resourcePath\": \"D:\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\"\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改C++代码后，执行hqf打包命令，执行完成后可在entry和library模块的输出目录build/default/outputs/default中，找到对应的产物entry-default-signed.hqf和library-default-signed.hqf。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw --mode module -p module=entry@default,library@default -p product=default assembleDevHqf --info --no-daemon\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行hdc命令安装hqf。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hdc shell mkdir data/local/tmp/3b7d97cdf4de41c4aecc465ff5069708\n$ hdc file send library-default-signed.hqf \"data/local/tmp/3b7d97cdf4de41c4aecc465ff5069708\"\n$ hdc file send entry-default-signed.hqf \"data/local/tmp/3b7d97cdf4de41c4aecc465ff5069708\"\n$ hdc shell bm quickfix -a -f \"data/local/tmp/3b7d97cdf4de41c4aecc465ff5069708\" -d -o\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过sdk工具构建hqf包",
      children: "通过SDK工具构建hqf包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(205907)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1840",
        height: "600"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全量编译应用并安装到设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc bm install {hap_path} // 安装包在电脑上，使用该命令，hap_path是安装包路径\nhdc shell bm install -p {hap_path}  // 安装包在设备上，使用该命令\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者通过独立的构建流程，识别出希望构建增量hqf包的so，根据ABI编译环境（可查看build-profile.json5的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration/ide-hvigor-cpp#section0721057575",
            children: "abiFilters"
          }), "字段），汇总到某一目录下，例如汇总在change_test目录下，编译环境是arm64-v8a，示例如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(279116)/* ["default"] */.A) + "",
            width: "350",
            height: "225"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）进行资源文件修改。如果修改了HAP/HSP模块的rawfile或resfile目录下的资源文件，则需要在对应模块的build/default/intermediates/patch/default目录下新建changedFileList.json并写入修改的文件；如果修改了HAR模块的资源文件，则需要在依赖该HAR的模块下写入修改的文件，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"resources\": {\n    \"resFile\": [\n      {\n        \"filePath\": \"D:\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\\\\resfile\\\\test.txt\",\n        \"resourcePath\": \"D:\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\"\n      }\n    ],\n    \"rawFile\": [\n      {\n        \"filePath\": \"D:\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\\\\rawfile\\\\test.txt\",\n        \"resourcePath\": \"D:\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\"\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提前准备与已安装应用一致的签名文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以从工程的build-profile.json5文件中获取到对应的签名文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备patch.json文件，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"app\" : {\n        \"bundleName\" : \"com.ohos.quickfix\",\n        \"versionCode\" : 1000000, // 应用版本号\n        \"versionName\" : \"1.0.0\",\n        \"patchVersionCode\" : 1000000, // 补丁版本号，在每次进行增量调试前，将版本号+1，确保此次增量调试补丁包版本号大于上次增量调试补丁包版本号\n        \"patchVersionName\" : \"1000000\"  // 与补丁版本号保持一致\n    },\n    \"module\" : {\n        \"name\" : \"entry\",\n        \"type\" : \"patch\",\n        \"deviceTypes\" : [\n            \"phone\",\n            \"tablet\"\n        ],\n        \"originalModuleHash\" : \"\" // 待修复HAP包的sha256值，置空即可\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在hqf", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool#hqf%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
            children: "打包工具"
          }), "目录下（默认在DevEco Studio安装目录\\sdk\\default\\openharmony\\toolchains\\lib下），执行命令打包，示例如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java -jar app_packing_tool.jar --mode hqf --json-path D:\\MyApplication\\entry\\patch.json --lib-path D:\\MyApplication\\entry\\change_test --resources-path D:\\MyApplication\\entry\\src\\main\\resources --out-path entry-default-unsigned.hqf --force true\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关于该命令中需要修改的参数说明如下，其余参数不需要修改："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "json-path"
              })
            }), "：指定增量包信息patch.json路径，必选，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#li13802124619204",
              children: "步骤5"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "lib-path"
              })
            }), "：指定希望构建打包的so路径，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#li13802194642015",
              children: "步骤2"
            }), "，注意路径不能带上ABI编译环境。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "resources-path"
              })
            }), "：指定希望构建打包的resources资源目录，包含rawfile和resfile目录。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "out-path"
              })
            }), "：指定输出hqf包路径。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在签名工具目录下（默认在DevEco Studio安装目录\\sdk\\default\\openharmony\\toolchains\\lib下），进行签名，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java -jar hap-sign-tool.jar sign-app -keyAlias \"OpenHarmony Application Release\" -signAlg \"SHA256withECDSA\" -mode \"localSign\" -appCertFile \"OpenHarmonyApplication.cer\" -profileFile \"ohos_provision_release.p7b\" -inFile \"entry-default-unsigned.hqf\" -keystoreFile \"OpenHarmony.p12\" -outFile \"entry-default-signed.hqf\" -keyPwd \"123456Abc\" -keystorePwd \"123456Abc\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关于该命令中需要修改的参数说明如下，其余参数不需要修改："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keyAlias"
              })
            }), "：密钥别名。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "appCertFile"
              })
            }), "：申请的调试证书文件，格式为.cer。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "profileFile"
              })
            }), "：申请的调试Profile文件，格式为.p7b。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "inFile"
              })
            }), "：通过打包工具生成的未携带签名信息的hqf。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keystoreFile"
              })
            }), "：密钥库文件，格式为.p12。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "outFile"
              })
            }), "：经过签名后生成的携带签名信息的hqf。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keyPwd"
              })
            }), "：密钥密码。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keystorePwd"
              })
            }), "：密钥库密码。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装增量hqf包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hdc shell mkdir data/local/tmp/3b7d97cdf4de41c4aecc465ff5069708\n$ hdc file send entry-default-signed.hqf \"data/local/tmp/3b7d97cdf4de41c4aecc465ff5069708\"\n$ hdc shell bm quickfix -a -f \"data/local/tmp/3b7d97cdf4de41c4aecc465ff5069708\" -d -o\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在其他的开发工具中修改打包so库文件无法使用deveco-studio的增量调试功能",
      children: "在其他的开发工具中修改打包so库文件，无法使用DevEco Studio的增量调试功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者在其他的开发工具中修改打包so库文件，在使用DevEco Studio 4.1 Canary2版本的增量调试功能时，出现无法使用增量调试功能的现象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导致这个问题的原因是在DevEco Studio 4.1 Canary2版本上，对于超过16KB的Native文件，在命中其中的断点后，LLDB调试器会默认持有文件句柄，导致调试过程中无法修改保存该文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可通过以下两种方式处理："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式一：使用以下LLDB命令关闭LLDB调试器源码缓存机制。执行如下命令后，LLDB调试器将不再持有文件句柄。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "settings set use-source-cache false\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二：建议开发者升级至DevEco Studio 5.1.0 Beta1版本。"
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
506190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
615044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
625898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEa8AABGvAff9S4QAAADESURBVDhPY/j06dN/dPzw5eP/V5/cwBAnBmM18NLja/+jV2b/n3Vi8f+X715hyOPDOA2MXJEJxmnrS//vvLb//8dPHzHUYcMEDYThmp0dRAUD0QaCMDHBQJKBMIwvGMgyEIaxBQNFBoIwKBj23DgI10uRgVkbKv7vvXEIRS9ZBsasyvk//9Ty/6/fv8bQS7KBDbt7/t98dgdDDwwTbSA272HDBA3E5z1sGK+BhLyHDWM18M7ze0R5DxvGaiAleLAb+Ok/AJEs6YKYL+SJAAAAAElFTkSuQmCC");

},
279116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753326-d443d3b077228c35464c66e8f6a6a3c6.png");

},
205907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913312-707919691159c7626db371566afd25a5.png");

},
831713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABmklEQVQ4jaWUO4gTURSGvzxIViSJwS1EJQElKdbCQvABglUshAQrCysL0U7BxsLaYmHZYrZR2UFstBAEERSxE0HCFIEgmIcxMpBdTTKTZBITJpnHNmZgmImr5JTn3vPx/ZfDDWiaZrNEBZcZ9gXo5hRBEqmrTadXV5sIkohuTvcHqJM+8qCFIIlUlQY19TuCJCIPWqiTvgcQ8HuDb70fbHx+RDgYAmBmGdw9e5O11cy/GYilF9jYzCyDmWUAsF16jqztLDbYLD4BoDNWfFUBYpGDHI0dAeDeuVsAhOeH3bGKYRkM9KHvMMBw+pvW8CfRUMRrAPClU2FLegrAg4t3SMWPASBrLR5+EgC4fuoql9IXHIBj8Kb+gV+jjnPwUS6SiMYAXFbl9le06Yh8Juc2uP32/kJ1v3p8Zd0NUCY9qkqDZ+WXf41QyOQ4f/wMhw8k3RG6YxXTMveNYP+5OwcsHcExuHH6GgC6ofOq8s6z96FAkEL2MomVuKvvu8q7ozava++pKg1My+JkMkU+m+PEobTHxBfwP7X0f7AH2+vOyhjvf3AAAAAASUVORK5CYII=");

},
979380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABmklEQVQ4jaWUO4gTURSGvzxIViSJwS1EJQElKdbCQvABglUshAQrCysL0U7BxsLaYmHZYrZR2UFstBAEERSxE0HCFIEgmIcxMpBdTTKTZBITJpnHNmZgmImr5JTn3vPx/ZfDDWiaZrNEBZcZ9gXo5hRBEqmrTadXV5sIkohuTvcHqJM+8qCFIIlUlQY19TuCJCIPWqiTvgcQ8HuDb70fbHx+RDgYAmBmGdw9e5O11cy/GYilF9jYzCyDmWUAsF16jqztLDbYLD4BoDNWfFUBYpGDHI0dAeDeuVsAhOeH3bGKYRkM9KHvMMBw+pvW8CfRUMRrAPClU2FLegrAg4t3SMWPASBrLR5+EgC4fuoql9IXHIBj8Kb+gV+jjnPwUS6SiMYAXFbl9le06Yh8Juc2uP32/kJ1v3p8Zd0NUCY9qkqDZ+WXf41QyOQ4f/wMhw8k3RG6YxXTMveNYP+5OwcsHcExuHH6GgC6ofOq8s6z96FAkEL2MomVuKvvu8q7ozava++pKg1My+JkMkU+m+PEobTHxBfwP7X0f7AH2+vOyhjvf3AAAAAASUVORK5CYII=");

},
108163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
294045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
717957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAABkUlEQVQ4Ea3TTUsCQRgHcD9Px4jOFR06BRHUNTpELyBhxIJEtN08hBWBUNAHcNUVViQryqJuQYFdfCk1F2vV9e0L/OMZmGVfRcrDMDs7M795nn1mff1+H6NqvlFB5AyNNbs6th5PUGx8eWYyNNbotDAmrWI8sY7Ttzj0btuBOrB2t4PL9zSWbw4xKW8ygBB7m0sLuC2/WEAL9tGoYSGz79hoh2g8m9qFUnp2xyhsDk0pAUj5e5RM36fe1ow0j19jaA1Kk1KjEwmq6d+WE6lSqv6D7aczFLWqY47fCCPNpWuRYfFC1nMx3+TVG9hEYoNh1Vb9/xiVnNIsN1VXLJlMwu/3O1qv1zPWG5EtZg4Ylig8GJP2dGRZHg47zykMm1F2QJWzQzRWVRWCIFhA18io1PNXewycVgKI5bP4NKVMkCiKDAoGgwboitHJVHYO8ou6chdiEXEoFApB0zRIksRAT4xAivAilwJdFfqd1rJHCIfDbCOH+CeIRqMYiPGF5r5SqSASibCIzO/tz0Y17RN/Gf8CVRecttU7wvYAAAAASUVORK5CYII=");

},
223493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
249854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
855758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAABkUlEQVQ4Ea3TTUsCQRgHcD9Px4jOFR06BRHUNTpELyBhxIJEtN08hBWBUNAHcNUVViQryqJuQYFdfCk1F2vV9e0L/OMZmGVfRcrDMDs7M795nn1mff1+H6NqvlFB5AyNNbs6th5PUGx8eWYyNNbotDAmrWI8sY7Ttzj0btuBOrB2t4PL9zSWbw4xKW8ygBB7m0sLuC2/WEAL9tGoYSGz79hoh2g8m9qFUnp2xyhsDk0pAUj5e5RM36fe1ow0j19jaA1Kk1KjEwmq6d+WE6lSqv6D7aczFLWqY47fCCPNpWuRYfFC1nMx3+TVG9hEYoNh1Vb9/xiVnNIsN1VXLJlMwu/3O1qv1zPWG5EtZg4Ylig8GJP2dGRZHg47zykMm1F2QJWzQzRWVRWCIFhA18io1PNXewycVgKI5bP4NKVMkCiKDAoGgwboitHJVHYO8ou6chdiEXEoFApB0zRIksRAT4xAivAilwJdFfqd1rJHCIfDbCOH+CeIRqMYiPGF5r5SqSASibCIzO/tz0Y17RN/Gf8CVRecttU7wvYAAAAASUVORK5CYII=");

},
859927(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEa8AABGvAff9S4QAAADESURBVDhPY/j06dN/dPzw5eP/V5/cwBAnBmM18NLja/+jV2b/n3Vi8f+X715hyOPDOA2MXJEJxmnrS//vvLb//8dPHzHUYcMEDYThmp0dRAUD0QaCMDHBQJKBMIwvGMgyEIaxBQNFBoIwKBj23DgI10uRgVkbKv7vvXEIRS9ZBsasyvk//9Ty/6/fv8bQS7KBDbt7/t98dgdDDwwTbSA272HDBA3E5z1sGK+BhLyHDWM18M7ze0R5DxvGaiAleLAb+Ok/AJEs6YKYL+SJAAAAAElFTkSuQmCC");

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