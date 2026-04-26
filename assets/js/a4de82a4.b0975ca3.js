"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["270301"], {
822228(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_file_ide_hvigor_set_options_ide_hvigor_set_options_md_a4d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-file-ide-hvigor-set-options-ide-hvigor-set-options-md-a4d.json
var site_docs_ide_hvigor_configuration_file_ide_hvigor_set_options_ide_hvigor_set_options_md_a4d_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration-file/ide-hvigor-set-options/ide-hvigor-set-options","title":"hvigor-config.json5文件","description":"配置文件结构","source":"@site/docs/ide-hvigor-configuration-file/ide-hvigor-set-options/ide-hvigor-set-options.md","sourceDirName":"ide-hvigor-configuration-file/ide-hvigor-set-options","slug":"/ide-hvigor-configuration-file/ide-hvigor-set-options/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-set-options/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"hvigor-config.json5文件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-set-options","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"配置文件概述","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-configuration-file-overview/"},"next":{"title":"工程级build-profile.json5文件","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-build-profile-app/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration-file/ide-hvigor-set-options/ide-hvigor-set-options.md


const frontMatter = {
	title: 'hvigor-config.json5文件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-set-options',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = 'hvigor-config.json5文件';

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
  "value": "execution",
  "id": "execution",
  "level": 2
}, {
  "value": "logging",
  "id": "logging",
  "level": 2
}, {
  "value": "debugging",
  "id": "debugging",
  "level": 2
}, {
  "value": "nodeOptions",
  "id": "nodeoptions",
  "level": 2
}, {
  "value": "javaOptions",
  "id": "javaoptions",
  "level": 2
}, {
  "value": "properties",
  "id": "properties",
  "level": 2
}, {
  "value": "parameterFile",
  "id": "parameterfile",
  "level": 2
}, {
  "value": "配置说明",
  "id": "配置说明",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
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
        id: "hvigor-configjson5文件",
        children: "hvigor-config.json5文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件结构",
      children: "配置文件结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hvigor-config.json5文件整体的结构如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "modelVersion\ndependencies\nexecution\n└── analyze\n└── daemon\n└── incremental\n└── parallel\n└── typeCheck\n└── optimizationStrategy\nlogging\n└── level\ndebugging\n└── stacktrace\nnodeOptions\n└── maxOldSpaceSize\n└── maxSemiSpaceSize\n└── exposeGC\njavaOptions\n└── Xmx\nproperties\n└── hvigor.cacheDir\n└── ohos.buildDir\n└── enableSignTask\n└── ohos.arkCompile.maxSize\n└── hvigor.pool.cache.capacity\n└── hvigor.pool.maxSize\n└── ohos.pack.compressLevel\n└── hvigor.analyzeHtml\n└── hvigor.dependency.useNpm\n└── ohos.compile.lib.entryfile\n└── ohos.align.target\n└── ohos.fallback.target\n└── ohos.arkCompile.sourceMapDir\n└── ohos.collect.debugSymbol\n└── hvigor.enableMemoryCache\n└── hvigor.memoryThreshold\n└── ohos.nativeResolver\n└── ohos.arkCompile.noEmitJs\n└── ohos.arkCompile.singleFileEmit\n└── ohos.sign.har\n└── hvigor.keepDependency\n└── ohos.arkCompile.emptyBundleName\n└── ohos.uiTransform.Optimization\n└── ohos.har.excludeHspDependencies\n└── ohos.processLib.optimization\n└── ohos.obfuscationRules.optimization\n└── hvigor.incremental.optimization\n└── hvigor.task.schedule.optimization\n└── ohos.byteCodeHar.integratedOptimization\n└── ohos.rollupCache.usePathPlaceholder\n└── ohos.rollupCache.useSourceHash\n└── ohos.arkCompile.writeRollupCache\n└── ohos.align.deviceTypes\n└── ohos.dependencies.types.enable\n└── ohos.defaults.release.cmakebuildtype\n└── ohos.defaults.autoLazyImport\nparameterFile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件字段说明",
      children: "配置文件字段说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hvigor-config.json5配置文件包含以下字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " hvigor-config.json5文件字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "modelVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发态版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前工程执行构建任务时，依赖的构建插件及版本，为npm源组件。  说明：  修改dependencies后，请根据界面提示，点击编辑器右上角", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sync Now"
              })
            }), "安装依赖。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section6901191119219",
              children: "execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行构建的相关配置参数，仅在命令行场景下生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section85176471028",
              children: "logging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志相关配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section76575554217",
              children: "debugging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调测相关配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section74431812314",
              children: "nodeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node相关配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section7929682318",
              children: "javaOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "java相关配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section260315160319",
              children: "properties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "额外配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section24539147532",
              children: "parameterFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义的参数化配置文件路径。  从DevEco Studio 6.0.2 Beta1版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "execution",
      children: "execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["execution是执行构建的相关配置参数，除了optimizationStrategy字段外，其他字段仅在命令行构建场景下生效，如果通过DevEco Studio菜单栏构建，需要在", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), "中设置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " execution字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "analyze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串/布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建分析模式。   - normal（默认值）：普通模式，通过简单打点数据进行分析。原default模式已废弃。 - advanced：进阶模式，通过更加详细的打点数据进行分析。如果需要更详细的任务耗时数据，请选择该模式。原verbose模式已废弃。 - ultrafine：超精细化模式，与advanced模式相比，在ArkTS编译阶段记录更详细的打点数据，但开启后可能导致编译构建时间更长。从DevEco Studio 6.0.0 Beta1版本开始支持。 - false：不启用构建分析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "daemon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用守护进程编译。   - true（缺省默认值）：启用。 - false：不启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "incremental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用增量编译。   - true（缺省默认值）：启用。 - false：不启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用并行编译。   - true（缺省默认值）：启用。 - false：不启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typeCheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用构建脚本hvigorfile.ts文件的类型检查，启用后构建效率可能会有所降低。   - true：启用。 - false（缺省默认值）：不启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "optimizationStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定构建模式。从DevEco Studio 5.1.1 Release版本开始支持。   - performance：性能优先模式，可加快构建速度，但会占用更多内存。 - memory（缺省默认值）：内存优先模式，可以减少编译内存占用。   说明：  更改模式后，首次编译会执行全量编译。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "execution字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"execution\": {\n    \"analyze\": \"normal\",\n    \"daemon\": true,\n    \"incremental\": true,\n    \"parallel\": true,\n    \"typeCheck\": false,\n    \"optimizationStrategy\": \"performance\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "logging",
      children: "logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "logging是日志相关配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " logging字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建时打印日志的级别。   - debug：调测日志。 - info（缺省默认值）：基本信息日志。 - warn：告警日志。 - error：错误日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "logging字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"logging\": {\n    \"level\": \"debug\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging",
      children: "debugging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "debugging是调测相关配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " debugging字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stacktrace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用堆栈跟踪。   - true：启用。 - false（缺省默认值）：不启用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "debugging字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"debugging\": {\n    \"stacktrace\": true\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nodeoptions",
      children: "nodeOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nodeOptions是Node相关配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " nodeOptions字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxOldSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用守护进程编译时，为守护进程设置最大的老生代内存大小，单位为MB，默认为8192MB。当工程代码量较大出现JS内存溢出时，可以调整该参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxSemiSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用守护进程编译时，为守护进程设置新生代内存最大的半空间大小，单位为MB，默认为16MB。增加半空间大小可能会提高Node.js的吞吐量，但会消耗更多内存。  该字段从DevEco Studio 5.1.0 Release版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exposeGC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用GC（Garbage Collection，内存回收），启用后会优化编译过程的峰值内存。   - true（缺省默认值）：启用。 - false：不启用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nodeOptions字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"nodeOptions\": {\n    \"maxOldSpaceSize\": 8192,\n    \"maxSemiSpaceSize\": 16,\n    \"exposeGC\": true,\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "javaoptions",
      children: "javaOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "javaOptions是java相关配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      }), " javaOptions字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Xmx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置JVM最大堆内存，单位为MB，默认为512MB。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "javaOptions字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"javaOptions\": {\n    \"Xmx\": 512\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "properties",
      children: "properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["properties是额外配置参数。除了在hvigor-config.json5中配置properties外，还可以通过命令行参数-c或--config指定properties，命令行优先级比hvigor-config.json5更高，命令行配置方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-commandline#section92386011817",
        children: "命令行构建工具（hvigorw）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表7"
        })
      }), " properties字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.cacheDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定项目根目录下的.hvigor缓存文件夹的存放路径。  说明：  同名的不同工程不可指定相同的存放位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.buildDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定项目的构建产物目录（build目录）存放位置。  说明：  同名的不同工程不可指定相同的存放位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableSignTask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用HAP或HSP签名任务。   - true（缺省默认值）：启用。 - false：不启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.arkCompile.maxSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定编译ArkTS线程的数量，默认为5。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.pool.cache.capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义内存中缓存数据的容量，默认为4，数值越小，内存中缓存数据越少。配置为0，表示不启用内存缓存配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.pool.maxSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定编译过程中的线程数量，相比ohos.arkCompile.maxSize增加签名、打包等任务的线程。默认值为“工程的模块数”和“电脑虚拟核数-1”两者的较小值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.pack.compressLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置打包hap（压缩so）或app（压缩hap）时的压缩率等级。压缩率越高，压缩速度越慢。   - fast（缺省默认值）：最低等级的压缩率，压缩速度最快。 - standard：适中等级的压缩率，压缩速度适中。 - ultimate：最高等级的压缩率，压缩速度最慢。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.analyzeHtml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否生成构建可视化html文件。   - true：生成构建可视化html文件。生成的html文件存放在工程的.hvigor/report目录下，该文件可直接在浏览器中打开。 - false（缺省默认值）：不生成构建可视化html文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.dependency.useNpm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定是否使用npm下载hvigor依赖。  若未配置该字段，当Node.js版本 ≥ 16时，默认使用pnpm下载依赖。在某些特定场景，可以通过配置该字段指定使用npm下载依赖。   - true：对于任意Node版本，都使用npm下载依赖。 - false（缺省默认值）：Node.js版本 ≥ 16时，使用pnpm下载依赖；Node.js版本 ＜ 16时，使用npm下载依赖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.compile.lib.entryfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定是否从入口文件开始编译：   - true：表示从模块的入口文件开始编译，将编译入口文件及被引用的文件，没被引用的文件不会参与编译流程。 - false（缺省默认值）：表示将src/main/ets下的ets和ts文件进行全量编译，涉及到以下场景：   1. 构建HSP时，存在于src/main/ets下的ets和ts文件都会被编译到产物中。   2. release模式对HAR混淆或构建字节码HAR时，存在于src/main/ets下的ets和ts文件都会被编译到产物中。   3. 构建HAP/HSP时，存在于动态依赖的HAR模块src/main/ets下的ets和ts文件都会被编译到产物中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.align.target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定本次构建任务所有涉及到的模块及其依赖的模块的target。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides#section7121513141619",
              children: "多产物构建target"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.fallback.target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定本次构建任务所有涉及到的模块及其依赖模块的fallback target，fallback target是一个特定优先级的target，各target的优先级顺序：align target > 命令行指定target > 被依赖的父模块target > fallback target > default target。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides#section7121513141619",
              children: "多产物构建target"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.arkCompile.sourceMapDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定sourceMap文件的生成路径，方便开发者进行堆栈的回栈与错误信息的定位，当前仅支持Stage模型。若没有指定路径，默认生成在build/{productName}/outputs/{targetName}/mapping下。  说明：  从API 12开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.collect.debugSymbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle#section666114451518",
              children: "sourceMap"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle#section19215122372720",
              children: "nameCache"
            }), "和带调试信息的so文件归档到产物路径下，根据选择的构建模式，如果是构建HAP/HSP/HAR，会归档到模块的build/{productName}/outputs/{targetName}/symbol的release或debug目录下；如果是构建APP，会将HAP/HSP模块的文件归档到工程的build/outputs/{productName}/symbol的release或debug目录下。   - true：归档。 - false：不归档。   说明：  - 如果不配置，release模式时默认值为true，debug模式时默认值为false。 - 仅支持Stage模型。 - nameCache文件仅在release模式下且开启混淆后才会生成，release模式下不开启混淆以及debug模式下均不生成这个文件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.enableMemoryCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启缓存，开启缓存会加快增量编译速度，关闭缓存能够节省内存占用，但是会增加增量编译时间。   - true（缺省默认值）：开启。 - false：不开启。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.memoryThreshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存管理阈值，单位为MB，当编译构建占用内存超过此阈值时，新加入的编译任务会等待，直到正在进行的编译任务结束，新的编译任务才能开始，此配置将导致编译时间延长。  说明：  - 配置该字段后，即使hvigor.enableMemoryCache配置为true，也不进行缓存。 - 该字段配置为很小的值时，构建任务会串行执行，等效于配置ohos.arkCompile.maxSize:1；配置为很大的值时，与不配置没有差异。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.nativeResolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS编译过程中是否使用高性能插件进行依赖寻址，使用高性能插件可以降低编译过程的峰值内存，加快编译速度。   - true（缺省默认值）：使用。 - false：不使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.arkCompile.noEmitJs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ArkTS编译过程中是否生成js中间产物，具体方案及开启后的影响请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-optimized/ide-hvigor-experimental-properties#section11117155101617",
              children: "优化编译中间产物生成"
            }), "。   - true：不生成。 - false（缺省默认值）：生成。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.arkCompile.singleFileEmit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否开启单文件解析完成后写入磁盘的能力，具体方案及开启后的影响请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-optimized/ide-hvigor-experimental-properties#section1131619813214",
              children: "文件写入磁盘"
            }), "。   - true：开启。 - false（缺省默认值）：不开启。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.sign.har"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否启用HAR签名任务。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section116791730173713",
              children: "构建签名HAR"
            }), "。   - true：启用。 - false（缺省默认值）：不启用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.keepDependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否保持hsp中的所有依赖。如果保持则不对依赖进行处理，如果不保持，则只会保留hsp模块中的hsp相关依赖。   - true（缺省默认值）：保持。 - false：不保持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.arkCompile.emptyBundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS编译转换后的产物，bundleName字段是否为空值。   - true：bundleName字段的值是空值。 - false（缺省默认值）：bundleName字段是应用实际的包名。   说明：  - 仅支持在EntryAbility中使用loadContentByName加载首页，同时使用Navigation导航进行页面跳转时设置为true，否则会导致应用闪退。 - 预览时暂不支持配置该字段，字段默认取值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.uiTransform.Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否对ArkTS编译转换后的产物中的bundleName字段开启优化。   - true：开启，bundleName字段的值是变量。 - false（缺省默认值）：不开启，bundleName字段是应用实际的包名。   该字段从DevEco Studio 5.0.5 Beta1版本开始支持。  说明：  - 该字段对字节码HAR不生效，字节码HAR产物的bundleName字段的值默认是变量。 - 预览时暂不支持配置该字段，字段默认取值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.har.excludeHspDependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建har包时，产物module.json中是否排除依赖的hsp，排除后，module.json中不包含dependencies字段。   - true：排除。 - false（缺省默认值）：不排除。   该字段从DevEco Studio 5.1.0 Release版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.processLib.optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否启用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor/ide-hvigor-task-process#li671313965913",
              children: "ProcessLibs任务"
            }), "性能优化，启用后可以减少ProcessLibs任务中so增量判定的耗时。   - true：启用。 - false（缺省默认值）：不启用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.obfuscationRules.optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "release模式开启混淆时，是否优化三方依赖中混淆配置文件的收集方式，优化后可以减少收集耗时，加快编译速度。   - true：优化。 - false（缺省默认值）：不优化。   该字段从DevEco Studio 5.1.0 Release版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.incremental.optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否开启任务增量判断优化，优化方案及开启后的影响请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-optimized/ide-hvigor-experimental-properties#section95571022144613",
              children: "任务增量判断优化"
            }), "。   - true：开启。 - false（缺省默认值）：不开启。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor.task.schedule.optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否开启任务调度优化，优化方案及开启后的影响请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-optimized/ide-hvigor-experimental-properties#section09371546164610",
              children: "任务调度优化"
            }), "。   - true：开启。 - false（缺省默认值）：不开启。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.byteCodeHar.integratedOptimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否开启字节码HAR集成行为优化，开启后，字节码HAR使用的依赖支持配置在工程级oh-package.json5的dependencies或dynamicDependencies中，同时会优化部分依赖收集行为，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-dependencies#section957371853712",
              children: "编译行为差异说明"
            }), "。   - true：开启。 - false（缺省默认值）：不开启。   从DevEco Studio 5.1.1 Beta1版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.rollupCache.usePathPlaceholder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否将build目录下rollup缓存中的绝对路径替换为占位符。该功能是实验特性，开启后会造成读写缓存性能降低。   - true：是，即缓存中是占位符。 - false（缺省默认值）：否，即缓存中是绝对路径。   从DevEco Studio 6.0.0 Beta1版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.rollupCache.useSourceHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否将build目录下rollup缓存中的源码替换为对应的hash内容，减少缓存大小。该功能是实验特性，可以提升缓存对比和读写性能。   - true：是，即缓存源码hash。 - false（缺省默认值）：否，即缓存源码内容。   从DevEco Studio 6.0.0 Beta1版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.arkCompile.writeRollupCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "build目录下是否写入rollup缓存。   - true（缺省默认值）：写缓存。 - false：不写缓存。   从DevEco Studio 6.0.0 Beta2版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.align.deviceTypes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定归一的设备类型，构建APP时，当HAP/HSP的module.json5中的设备类型是ohos.align.deviceTypes的超集时，模块才会被打包到APP中，同时打包后产物中的设备类型会被设置为ohos.align.deviceTypes的值。  从DevEco Studio 6.0.0 Beta2版本开始支持。  说明：  仅支持Stage模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.dependencies.types.enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编译时是否收集依赖的HAR模块/", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration/ide-hvigor-build-har#section197792874110",
              children: "源码HAR包"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkoptions-guide#types",
              children: "类型声明文件"
            }), "参与语法校验。如果HAR中配置了类型声明文件，建议开启。   - true：收集。 - false（缺省默认值）：不收集。   从DevEco Studio 6.0.0 Beta3版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.defaults.release.cmakebuildtype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在release模式下构建时，指定cmake构建类型，对所有模块生效。   - Debug：不优化代码，附加调试信息。 - Release（缺省默认值）：最大化优化代码，但不包含调试信息。 - RelWithDebInfo：近似于Release模式，既进行了代码优化，同时保留部分调试信息。   从DevEco Studio 6.0.1 Beta1版本开始支持。  说明：  - 模块级build-profile.json5文件中也可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle#section147714466283",
              children: "arguments字段"
            }), "指定cmake构建类型，例如\"arguments\": \"-DCMAKE_BUILD_TYPE=RelWithDebInfo\"。arguments字段的优先级比ohos.defaults.release.cmakebuildtype更高。 - 在debug模式下构建时，该字段配置无效，默认使用Debug构建类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.defaults.autoLazyImport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编译时是否自动将符合lazy-import语法规范的import语句添加\"lazy\"关键字。仅支持在源码中添加\"lazy\"关键字，不包含依赖的字节码HAR包或HSP。关于lazy-import的介绍及相关影响请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import",
              children: "延迟加载（lazy import）"
            }), "。   - true：添加。 - false（缺省默认值）：不添加。   从DevEco Studio 6.0.2 Beta1版本开始支持。  说明：  - 如果配置为true，编译时不会做场景识别，即源码中任何符合语法规范的import语句都会被添加\"lazy\"。 - 仅支持Stage模型。 - build-profile.json5文件中也可以通过autoLazyImport字段实现该能力，autoLazyImport的优先级比ohos.defaults.autoLazyImport更高。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "properties字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"properties\": {\n    \"hvigor.cacheDir\": \"D://tmp\",\n    \"ohos.buildDir\": \"D://tmp\",\n    \"enableSignTask\": true,\n    \"ohos.arkCompile.maxSize\": 6,\n    \"hvigor.pool.cache.capacity\": 2,\n    \"hvigor.pool.maxSize\": 8,\n    \"ohos.pack.compressLevel\": \"standard\",\n    \"hvigor.analyzeHtml\": true,\n    \"hvigor.dependency.useNpm\": false,\n    \"ohos.compile.lib.entryfile\": true,\n    \"ohos.align.target\": \"target1\",\n    \"ohos.fallback.target\": [\"target1\", \"target2\"],\n    \"ohos.arkCompile.sourceMapDir\": \"D://MyProject\",\n    \"ohos.collect.debugSymbol\": false,\n    \"hvigor.enableMemoryCache\": true,\n    \"hvigor.memoryThreshold\": 1000,\n    \"ohos.nativeResolver\": true,\n    \"ohos.arkCompile.noEmitJs\": true,\n    \"ohos.arkCompile.singleFileEmit\": true,\n    \"ohos.sign.har\": true,\n    \"hvigor.keepDependency\": false,\n    \"ohos.arkCompile.emptyBundleName\": true,\n    \"ohos.align.deviceTypes\": [\"phone\", \"tablet\"],\n    \"ohos.defaults.release.cmakebuildtype\": \"RelWithDebInfo\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parameterfile",
      children: "parameterFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1版本开始，编译构建新增参数化配置功能。开发者可添加一个参数化文件（json5格式文件），在该文件中维护构建配置文件build-profile.json5中部分字段的值，工程级或者各模块的build-profile.json5将根据该文件中的键值对进行配置，满足不同构建场景下，开发者快速切换构建配置的需要。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置说明",
      children: "配置说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hvigor-config.json5文件中添加parameterFile配置，并指定parameterFile文件路径。配置规则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parameterFile文件配置相对路径，并以工程下hvigor-config.json5文件为起点，如：\"parameterFile\": \"./parameterFile.json5\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parameterFile文件内容采用json5格式，支持多层json对象嵌套。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parameterFile文件中的参数化key支持自定义，参数化value类型及配置要求和对应要替换的字段保持一致，具体可查看build-profile.json5文件中对应的字段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "build-profile.json5中支持参数化的字段有：source.sourceRoots，resource.directories，buildProfileFields，其他字段均不支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在build-profile.json5中以“@param:key”的形式引用parameterFile文件中对应的自定义字段，示例如下。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持在hvigorfile.ts脚本中使用参数化配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hvigor-config.json5的parameterFile字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"nodeOptions\": {\n    ...\n  },\n  \"parameterFile\": \"./parameterFile.json5\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "parameterFile所指向文件的配置示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"source\": {\n    \"customizedSourceRoot1\": \"./src/default1\",\n    \"customizedSourceRoot2\": \"./src/default2\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块级build-profile.json5示例，以多个har模块为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// har1模块build-profile.json5\n\"targets\": [\n  {\n    \"name\": \"default\",\n    \"source\": {\n      \"sourceRoots\": [\"@param:source.customizedSourceRoot1\"]   // 使用时必须以'@param:'开头，构建时sourceRoots会被替换为'./src/default1'\n    }\n  }\n]\n// har2模块build-profile.json5\n\"targets\": [\n  {\n    \"name\": \"default\",\n    \"source\": {\n      \"sourceRoots\": [\"@param:source.customizedSourceRoot2\"]\n    }\n  }\n]\n"
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