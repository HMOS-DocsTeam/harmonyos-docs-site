"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["296268"], {
40294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_optimized_ide_hvigor_experimental_properties_ide_hvigor_experimental_properties_md_b1e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-optimized-ide-hvigor-experimental-properties-ide-hvigor-experimental-properties-md-b1e.json
var site_docs_ide_build_optimized_ide_hvigor_experimental_properties_ide_hvigor_experimental_properties_md_b1e_namespaceObject = JSON.parse('{"id":"ide-build-optimized/ide-hvigor-experimental-properties/ide-hvigor-experimental-properties","title":"性能优化实验特性","description":"为了打造更敏捷流畅的使用体验，新版本的Hvigor带来了一系列的编译构建性能优化实验特性，这些优化特性将显著提高工程的编译速度，降低峰值内存占用等。由于部分优化方案仍处于试验性阶段，您可能在这些特性中体验到效率的提升，也可能在特定场景中遇到待完善的问题，因此，这些特性提供了开关，用户可以根据业务需求开启后使用。","source":"@site/docs/ide-build-optimized/ide-hvigor-experimental-properties/ide-hvigor-experimental-properties.md","sourceDirName":"ide-build-optimized/ide-hvigor-experimental-properties","slug":"/ide-build-optimized/ide-hvigor-experimental-properties/","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-experimental-properties/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"性能优化实验特性","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-experimental-properties","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"增量构建","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-incremental-build/"},"next":{"title":"模块化编译","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-esmodule-compile/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-optimized/ide-hvigor-experimental-properties/ide-hvigor-experimental-properties.md


const frontMatter = {
	title: '性能优化实验特性',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-experimental-properties',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '性能优化实验特性';

const assets = {

};



const toc = [{
  "value": "优化任务增量判断",
  "id": "优化任务增量判断",
  "level": 2
}, {
  "value": "优化任务调度",
  "id": "优化任务调度",
  "level": 2
}, {
  "value": "文件写入磁盘",
  "id": "文件写入磁盘",
  "level": 2
}, {
  "value": "优化编译中间产物生成",
  "id": "优化编译中间产物生成",
  "level": 2
}, {
  "value": "增量判断模块级跳过",
  "id": "增量判断模块级跳过",
  "level": 2
}, {
  "value": "通过Hvigor执行ohpm install",
  "id": "通过hvigor执行ohpm-install",
  "level": 2
}, {
  "value": "通过IClang提升C++增量编译效率",
  "id": "通过iclang提升c增量编译效率",
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
        id: "性能优化实验特性",
        children: "性能优化实验特性"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了打造更敏捷流畅的使用体验，新版本的Hvigor带来了一系列的编译构建性能优化实验特性，这些优化特性将显著提高工程的编译速度，降低峰值内存占用等。由于部分优化方案仍处于试验性阶段，您可能在这些特性中体验到效率的提升，也可能在特定场景中遇到待完善的问题，因此，这些特性提供了开关，用户可以根据业务需求开启后使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "优化任务增量判断",
      children: "优化任务增量判断"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化前：在执行增量任务时，需要多次调用任务的输入输出方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化后：执行增量任务时，会缓存输入输出方法的结果，后续再次调用时会直接读取缓存结果，减少多次调用的开销。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****优化结果：****减少编译时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****开启方式：****在hvigor-config.json5中添加以下字段，开启任务增量判断优化。从DevEco Studio 5.1.1 Beta1版本开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"properties\": {\n  \"hvigor.incremental.optimization\": true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****可能影响：****如果用户在自定义任务的增量输入/输出判断中引用了全局变量，在任务执行时这些变量可能会改变，如果改变，会导致下一次构建时，相关任务增量判断失效，任务重新执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "优化任务调度",
      children: "优化任务调度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化前：任务调度时，待执行队列中的任务依次执行，增量构建的执行时间受到CompileArkTs任务开始执行时间的影响，CompileArkTs任务越晚执行，构建时间可能越长。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化后：通过优先执行CompileArkTs及其依赖的任务，能够尽早启动编译任务CompileArkTs，从而减少构建时间。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****优化结果：****减少编译时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****开启方式：****在hvigor-config.json5中添加以下字段，开启任务调度优化。从DevEco Studio 5.1.1 Beta1版本开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"properties\": {\n  \"hvigor.task.schedule.optimization\": true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****可能影响：****无影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件写入磁盘",
      children: "文件写入磁盘"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化前：ArkTS代码编译时，单文件解析完成后会缓存在内存中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化后：ArkTS代码编译时，在单文件解析完成后会写入磁盘，可以降低编译过程的峰值内存。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****优化结果：****减少内存占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****开启方式：****在hvigor-config.json5中添加以下字段开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"properties\": {\n  \"ohos.arkCompile.singleFileEmit\": true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****可能影响：****单文件解析后写入磁盘的时序被提前，可能导致用户自定义源码插桩插件在文件写入磁盘后执行，无法生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(325371)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅在debug模式下生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当进行代码覆盖率编译时，该字段不生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "优化编译中间产物生成",
      children: "优化编译中间产物生成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化前：ArkTS代码编译时，会把ets/ts代码编译成中间态的js代码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化后：ArkTS代码编译时，不会再生成中间态的js代码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****优化结果：****减少编译时间和内存占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****开启方式：****在hvigor-config.json5中添加以下字段开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"properties\": {\n  \"ohos.arkCompile.noEmitJs\": true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****可能影响：****无影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(441997)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下场景均不支持该字段，配置后也会生成中间态的js代码："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FA模型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "覆盖率测试。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-hvigor-configuration/ide-hvigor-build-har#section19788284410",
          children: "在release模式下，开启混淆构建包含js中间码的HAR"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiteWearable设备对应的工程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "增量判断模块级跳过",
      children: "增量判断模块级跳过"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta3版本开始，如果有频繁修改代码进行增量构建的需求，可开启开关优化增量编译速度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用约束"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启开关前，需要进行一次全量构建，确保构建产物build目录存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启开关后，仅支持修改模块src目录下的内容，如果修改src目录以外的其他内容，可能导致修改不生效或编译问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持预览和Local Test。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化前：各模块所有任务都需要进行增量判断。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化后：开启开关后，修改模块src目录下的内容，构建时，未修改的模块不会进行增量判断。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****优化结果：****减少增量构建编译时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["开启方式：", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "点击"
            })
          }), "File >"]
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings"
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio > Preferences/Settings"
        })
      }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Build, Execution, Deployment > Build Tools > Hvigor"
        })
      }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable module level incremental skip for incremental build"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****可能影响：****不满足使用约束条件的，可能会导致开关失效或者编译问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过hvigor执行ohpm-install",
      children: "通过Hvigor执行ohpm install"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.0.0 Beta3版本开始，Settings中增加一个开关", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable ohpm execution by hvigor"
        })
      }), "，该开关有两个使用场景，具体如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["开启方式：", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "点击"
            })
          }), "File >"]
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings"
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio > Preferences/Settings"
        })
      }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Build, Execution, Deployment > Build Tools > Hvigor"
        })
      }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable ohpm execution by hvigor"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用场景"
        })
      }), "一"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启开关后，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api#section14183309272",
        children: "excludeNodeByName方法"
      }), "排除一个不存在的模块。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照以上方式开启开关", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enable ohpm execution by hvigor"
            })
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程级build-profile.json5的module字段下，添加工程中不存在的模块，如testModule。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(577124)/* ["default"] */.A) + "",
            width: "893",
            height: "416"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用excludeNodeByName方法，排除不存在的模块testModule。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(600468)/* ["default"] */.A) + "",
            width: "1026",
            height: "353"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行构建成功。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用场景二"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context#section18789410129",
        children: "setDependenciesOpt"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context#section469812496459",
        children: "setOverrides"
      }), "等方法动态修改oh-package.json5中的依赖信息后，执行sync或build等操作时，DevEco Studio会执行两次ohpm install操作，开启开关后，Hvigor仅执行一次ohpm install，可提升构建的效率。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(627801)/* ["default"] */.A) + "",
        width: "1112",
        height: "231"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过iclang提升c增量编译效率",
      children: "通过IClang提升C++增量编译效率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.0.1 Beta1版本开始，如果需要频繁修改某个cpp源文件，可开启IClang相关的开关，提升C++增量编译效率。IClang是一项C++函数级增量编译优化技术，详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/build-with-ndk/bisheng-compiler#%E4%B8%BB%E8%A6%81%E7%BC%96%E8%AF%91%E4%BC%98%E5%8C%96%E7%89%B9%E6%80%A7",
        children: "毕昇编译器"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用约束"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持在debug编译模式下使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要使用毕昇编译器进行编译，即工程级build-profile.json5的nativeCompiler配置为BiSheng。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首次修改cpp文件时，IClang会将该文件识别为频繁修改的目标文件，并为其生成缓存。因此，当第二次修改cpp文件并进行增量编译时，才会提升编译效率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改头文件的内容或头文件的导入语句，包括顺序、语句间的空行或任何格式上的调整，都会导致缓存失效，无法提升编译效率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开启方式："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方式一：点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File >"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            })
          }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DevEco Studio > Preferences/Settings"
            })
          }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "> Build, Execution, Deployment > Build Tools > Hvigor"
            })
          }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enable C++ function level incremental compilation"
            })
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二：模块级build-profile.json5的cppFlags、cFlags配置\"-iclang\"参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"externalNativeOptions\": {\n    \"cppFlags\": \"-iclang\",\n    \"cFlags\": \"-iclang\",\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****可能影响：****build-profile.json5文件会纳入项目版本管理，在该文件中增加-iclang参数后，项目其他开发人员会被动开启该实验特性。因此请在充分验证功能正确性后，再通过配置文件上传到代码仓。"
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
325371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
441997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
600468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753032-da03c1603eeebe65ab7a361412666f5c.png");

},
627801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832949-e31ad6affe6935d79d3844f3ef485e05.png");

},
577124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752967-17f32967aff6d2944b8beb7b193577a0.png");

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