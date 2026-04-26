"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["433068"], {
710660(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_commissioning_tools_cannkit_commissioning_tools_md_6af_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-usage-of-the-commissioning-tool-cannkit-commissioning-tools-cannkit-commissioning-tools-md-6af.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_commissioning_tools_cannkit_commissioning_tools_md_6af_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools/cannkit-commissioning-tools","title":"算子调试概述","description":"工具介绍","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools/cannkit-commissioning-tools.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"算子调试概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-commissioning-tools","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"算子包安装","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-package-deployment/"},"next":{"title":"输入数据和标杆数据准备","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-preparing-input-data-and-benchmark/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools/cannkit-commissioning-tools.md


const frontMatter = {
	title: '算子调试概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-commissioning-tools',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '算子调试概述';

const assets = {

};



const toc = [{
  "value": "工具介绍",
  "id": "工具介绍",
  "level": 2
}, {
  "value": "使用说明",
  "id": "使用说明",
  "level": 3
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 3
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "运行流程",
  "id": "运行流程",
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
        id: "算子调试概述",
        children: "算子调试概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工具介绍",
      children: "工具介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "介绍AscendC算子调测工具的调测流程和调测功能等，并提供命令行方式，以指导开发者在不同场景下对AscendC算子发起Tiling、精度、性能调测。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 工具指引"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "操作指引"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AscendC算子调测工具是什么"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-tiling-tuning",
              children: "调测工具简介"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阐述了工具的基本概念、关键调测功能、调测方式和流程等，帮助开发者快速了解和使用工具。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "算子调测过程中涉及哪些配置和调测功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-preparing-input-data-and-benchmark",
              children: "数据准备与配置说明"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["阐述命令行方式下算子调测需要的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "输入/标杆数据"
              })
            }), "、", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "算子信息json文件配置"
              })
            }), "等。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "算子调测过程中涉及哪些配置和调测功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-tiling-tuning",
              children: "Tiling调测功能"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阐述了命令行方式下算子如何进行Tiling计算，并介绍相应产物说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "算子调测过程中涉及哪些配置和调测功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-cpu-twin-debugging",
              children: "CPU孪生调试功能"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阐述了命令行方式下算子如何在CPU侧编译运行，并介绍精度比对结果，帮助开发者快速定位代码问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "算子调测过程中涉及哪些配置和调测功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-simulator-performance-simulation",
              children: "Simulator性能仿真功能"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阐述了命令行方式下算子如何在CPU侧通过仿真器进行编译运行，并介绍精度比对结果和性能仿真数据，帮助验证实际算子精度是否正常，性能是否达标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "算子调测过程中涉及哪些配置和调测功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-printf",
              children: "更多功能"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阐述了命令行方式下算子调测过程中支持的调试功能，包括printf/PRINTF、DumpTensor、assert等打印功能与gdb功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "想了解更多调测相关的命令行参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters",
              children: "ascendebug调测工具参数说明"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "针对命令行方式，本章根据调测功能提供了对应的全量参数说明，帮助开发者快速掌握命令行参数含义和功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用工具调试调优算子时，遇到问题怎么办"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-faqs-operator-development",
              children: "算子开发常见问题"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具调测过程中难免会出现异常或报错场景。本章罗列了一些高频问题，给出了具体的原因分析和处理措施。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅支持对静态Shape算子调测，暂不支持动态Shape算子调测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 基本概念"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "概念"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "标准自定义算子工程场景(customize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该场景下，开发者需按照“工程创建->算子实现->编译部署>算子调用”的流程完成算子开发和调用。基于工程代码框架完成算子核函数的开发和Tiling实现，通过工程编译脚本完成算子编译部署。Tiling开发基于CANN提供的编程框架进行，后续更易于借助框架功能实现单算子API调用、图模式算子调用等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "输入数据和标杆数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用AscendC调测工具时，需要提供算子输入数据及标杆数据（Golden数据）。  - 输入数据：固定shape算子运行时的输入数据，bin格式。  - 标杆数据：根据输入数据计算出来的真值数据，用于与输出数据进行精度比对，bin格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "算子json配置文件"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于描述算子的输入、输出及属性信息，以json格式存储。该文件中的参数个数、顺序、数据类型等信息，必须与算子原型相匹配。  工具支持以下配置格式：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-json-configuration",
              children: "固定输入/输出顺序的算子json配置"
            }), "：其输入/输出参数信息单独在inputs、outputs、attrs配置项中设置，不支持输入/输出参数交叉设置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述Kirin AI处理器上算子的输入/输出数据切分、分块计算、多核并行等策略，主要是为了满足片上存储限制和计算pipeline的需求，最大化计算并行性和数据局部性（data locality 或 data reuse），从而发挥硬件的极致性能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAModel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAModel(Cycle Accurate Model)仿真器主要用于生成算子性能仿真流水数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CCEC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CCEC(Cube-based Computing Engine Compiler)工具基于毕昇编译器，通过自动拼接编译选项构建的一种编译方式。其中，毕昇编译器是一款专为达芬奇SOC设计的编译器，支持异构编程扩展，可将开发者编写的昇腾算子代码编译成二进制可执行文件和动态库等形式，详细介绍请参考《", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.hiascend.com/document/detail/zh/canncommercial/82RC1/index/index.html",
              children: "毕昇编译器使用指南"
            }), "》。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CCEprint/Intrilog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "intrilog：落盘算子运行中的CCE指令流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "原地算子(in-place op)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一般指原地更新操作类算子，即算子的输入和输出为同一地址，算子在计算完成后，把原有的输出结果直接覆盖在输入的地址上，以减少不必要的内存占用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入数据和标杆数据可通过numpy生成，样例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import numpy as np\ndef gen_data_simple():\n    input_x = np.random.uniform(-100, 100, [8, 2048]).astype(np.float16)\n    input_y = np.random.uniform(-100, 100, [8, 2048]).astype(np.float16)\n    golden = (input_x + input_y).astype(np.float16)\n    input_x.tofile(\"./input/input_x.bin\")     # 通过numpy生成的随机输入数据x\n    input_y.tofile(\"./input/input_y.bin\")     # 通过numpy生成的随机输入数据y\n    golden.tofile(\"./output/golden.bin\")      # 根据输入计算出来的真值数据，即标杆数据\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行流程",
      children: "运行流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若采用工具命令行方式对单算子调测，其运行流程如图1所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 基于命令行的工具运行流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(595478)/* ["default"] */.A) + "",
        width: "460",
        height: "425"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["准备环境：使用本工具进行算子调测前，请先完成基础环境搭建，详细操作参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-environment-preparation",
            children: "环境准备"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备数据：准备好bin格式的输入数据和标杆数据文件，该数据是调测工具的必要输入。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置json文件：根据工具提供的算子信息json配置样例配置待测算子信息，该文件是调测工具的必要输入。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过命令行方式发起算子调测。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目前工具支持的算子调测能力如下，请按需选择："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tiling调测：对Tiling函数调测，生成Tiling结果，验证Tiling函数功能。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "精度调试：通过CPU仿真或者simulator仿真进行核函数精度调试，支持自动精度比对、printf/PRINTF/DumpTensor/assert打印等功能。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "性能调优：通过simulator仿真获取算子执行circle数，评估算子性能。"
          }), "\n"]
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
595478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799600-dae27ec542f852146b537875c2a8bce2.png");

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