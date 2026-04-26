"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["282165"], {
704465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_commissioning_functions_cannkit_cpu_twin_debugging_cannkit_cpu_twin_debugging_md_fea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-usage-of-the-commissioning-tool-cannkit-commissioning-functions-cannkit-cpu-twin-debugging-cannkit-cpu-twin-debugging-md-fea.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_commissioning_functions_cannkit_cpu_twin_debugging_cannkit_cpu_twin_debugging_md_fea_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-cpu-twin-debugging/cannkit-cpu-twin-debugging","title":"CPU孪生调试功能","description":"功能介绍","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-cpu-twin-debugging/cannkit-cpu-twin-debugging.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-cpu-twin-debugging","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-cpu-twin-debugging/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-cpu-twin-debugging/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CPU孪生调试功能","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-cpu-twin-debugging","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Tiling调测功能","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-tiling-tuning/"},"next":{"title":"Simulator性能仿真功能","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-simulator-performance-simulation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-cpu-twin-debugging/cannkit-cpu-twin-debugging.md


const frontMatter = {
	title: 'CPU孪生调试功能',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-cpu-twin-debugging',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'CPU孪生调试功能';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "使用方法（命令行）",
  "id": "使用方法命令行",
  "level": 2
}, {
  "value": "产物说明",
  "id": "产物说明",
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
        id: "cpu孪生调试功能",
        children: "CPU孪生调试功能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(634366)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当开发者需要快速进行代码逻辑调试，可优先选择算子CPU调测。使用通用的打印、gdb调测手段，快速定位代码问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在NPU板端上板运行之前，可优先选择算子CPU调测初步定位算子精度问题，提高算子NPU上板成功率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU孪生调试主要基于开发者输入生成编译所需的二进制bin文件，然后自动执行算子编译和运行，该阶段支持的调测项如表1所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " CPU调测功能列表"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自动精度比对"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若开发者配置了标杆数据（golden数据），工具会自动将实际调测运行结果与标杆数据进行精度比对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "printf/PRINTF功能"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持屏显打印Scalar数据，如常量、字符串等信息，具体参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-printf",
              children: "printf/PRINTF功能"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DumpTensor功能"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持dump Tensor数据，功能和产物与NPU上板dump功能类似，具体参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumptensor",
              children: "DumpTensor功能"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DumpAccChkPoint功能"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持dump偏移位置的Tensor数据，具体参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumpaccchkpoint",
              children: "DumpAccChkPoint功能"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assert功能"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持屏显打印断言，具体参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-assert",
              children: "assert功能"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CCE指令流打印"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认开启，CCE指令流文件参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BA%A7%E7%89%A9%E8%AF%B4%E6%98%8E",
              children: "产物说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gdb调试"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可使用gdb单步调试算子计算精度。具体参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-gdb",
              children: "gdb调试"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方法命令行",
      children: "使用方法（命令行）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过命令行进行CPU调测的关键步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成环境搭建，并准备好输入/标杆数据文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["执行如下命令进行CPU调测，这里仅提供关键参数项示例，其他参数请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters#cpu%E8%B0%83%E6%B5%8B%E5%8F%82%E6%95%B0",
            children: "CPU调测参数"
          }), "按需设置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ascendebug kernel --backend cpu --chip-version ${chip_version} --repo-type customize --json-file ${op_config_json_file} --core-type ${core_type} --work-dir ${work_dir} ... {其他参数}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CPU调测涉及的所有参数可通过", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ascendebug kernel -h"
            })
          }), "或", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ascendebug kernel --help"
            })
          }), "查看。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["查看结果文件，详细说明参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BA%A7%E7%89%A9%E8%AF%B4%E6%98%8E",
            children: "产物说明"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "产物说明",
      children: "产物说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU调测结果存放在${root}/${work_dir}/cpu路径下，其中${root}表示当前操作路径，${work_dir}表示调测工作空间，默认为/debug_workspace/${op_type}目录，${op_type}为算子名。目录结构示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "├ ${op_type}                    // 算子名\n├── cpu\n│   ├── build               // 存放CPU编译生成的中间文件\n│   │   ├── cceprint      // 存放cce 指令流输出文件的目录\n│   │   │   └── auto_gen_add_custom_kernel_0_0_mix.cce // cce指令流文件\n│       ├── xxx_cpu         // CPU编译生成的算子可执行程序\n│   ├── output              // 存放CPU编译运行的输出文件及精度比对结果\n│       ├── y.bin           // 运行输出原始数据\n│       ├── y.txt           // 精度比对结果文件\n│   ├── src                 // 存放CPU编译生成的临时代码文件\n│       ├── CMakeLists.txt\n│       ├── data_definition.txt\n│       ├── add_custom_main.cpp\n│       ├── add_custom_tiling.h\n│       ├── _gen_kernel_${op_type}.cpp\n│   ├── dump               // dump文件落盘目录\n│       ├── PARSER_${timestamp}\n│           ├── dump_data\n│               ├──0                     // core number\n│                   ├──index_1           // index是dump接口的desc唯一标识值\n│                       ├──core_0_index_1_loop_0.bin\n│                       ├──core_0_index_1_loop_0.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "查看精度比对结果"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在output目录下，查看是否生成输出文件(bin)和精度比对文件(txt)。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "根据精度比对文件(txt)，确认算子精度比对结果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "精度比对结果输出样例如下，主要展示两份数据的均值、部分误差对比以及成功/失败的最终比对结论。若结果是失败，会将最大误差的部分数据展示出来。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "data_cmp mean is -1.41e-05 data_gd mean is -1.41e-05\n split_count:2359296.0; max_diff_hd:0.1;\n ---------------------------------------------------------------------------------------\n   Loop           ExpectOut        RealOut         FpDiff         RateDiff\n ---------------------------------------------------------------------------------------\n 00000001         0.0395813       0.0395813       0.0000000       0.0000000\n 00000002         0.0160980       0.0160980       0.0000000       0.0000000\n 00000003         -0.0443420      -0.0443420      0.0000000       0.0000000\n 00000004         -0.0847778      -0.0847778      0.0000000       0.0000000\n 00000005         -0.0066605      -0.0066605      0.0000000       0.0000000\n 00000006         0.0880737       0.0880737       0.0000000       0.0000000\n 00000007         0.0848389       0.0848389       0.0000000       0.0000000\n 00000008         0.1083374       0.1083374       0.0000000       0.0000000\n 00000009         0.0838623       0.0838623       0.0000000       0.0000000\n 00000010         0.0887451       0.0887451       0.0000000       0.0000000\n 00000011         0.0572205       0.0572205       0.0000000       0.0000000\n 00000012         0.0741577       0.0741577       0.0000000       0.0000000\n 00000013         -0.0762329      -0.0762329      0.0000000       0.0000000\n 00000014         -0.0957642      -0.0957642      0.0000000       0.0000000\n 00000015         0.0102234       0.0102234       0.0000000       0.0000000\n   ...               ...             ...             ...             ...\n ---------------------------------------------------------------------------------------\n DiffThd           PctThd          PctRlt          Result\n ---------------------------------------------------------------------------------------\n 0.0050            99.50%          100.000000%     Pass\n Success Success Success Success Success\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "表2"
                })
              }), " 精度比对结果说明"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "信息项"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "data_cmp mean"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "运行输出数据的均值信息。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "data_gd mean"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "标杆数据的均值信息。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "split_count"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "统计输出数据的个数。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "max_diff_hd"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "输出数据和golden数据的最大误差值阈值。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "详细对比数据展示（部分）"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Loop（数据位置）、ExpectOut（期望输出值）、RealOut（实际输出值）、FpDiff （绝对误差值）、RateDiff（相对误差值）。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "整体对比结果展示"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "DiffThd（相对误差值阈值）、PctThd （精度达标数据占比阈值）、PctRlt（实际精度达标数据占比）、Result（对比结果）。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "Error Line展示项"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "若精度比对结果为Failed，会追加展示部分误差较大的数据的详细信息，信息格式与精度比对结果一致。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "（可选）查看dump结果"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若开启", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumptensor",
            children: "DumpTensor功能"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumpaccchkpoint",
            children: "DumpAccChkPoint功能"
          }), "，结果文件存放在dump目录下，结果目录具体介绍参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumptensor#%E4%BA%A7%E7%89%A9%E8%AF%B4%E6%98%8E",
            children: "产物说明"
          }), "。"]
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
634366(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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