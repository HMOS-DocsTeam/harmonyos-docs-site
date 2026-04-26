"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["695168"], {
742882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_faqs_operator_development_cannkit_faqs_operator_development_md_5e0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-faqs-operator-development-cannkit-faqs-operator-development-md-5e0.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_faqs_operator_development_cannkit_faqs_operator_development_md_5e0_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-faqs-operator-development/cannkit-faqs-operator-development","title":"算子开发常见问题","description":"核函数运行验证时算子存在精度问题","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-faqs-operator-development/cannkit-faqs-operator-development.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-faqs-operator-development","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-faqs-operator-development/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-faqs-operator-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"算子开发常见问题","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-faqs-operator-development","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ascendebug调测工具参数说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters/"},"next":{"title":"AscendC API列表","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-ascend-c-apis/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-faqs-operator-development/cannkit-faqs-operator-development.md


const frontMatter = {
	title: '算子开发常见问题',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-faqs-operator-development',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '算子开发常见问题';

const assets = {

};



const toc = [{
  "value": "核函数运行验证时算子存在精度问题",
  "id": "核函数运行验证时算子存在精度问题",
  "level": 2
}, {
  "value": "现象描述",
  "id": "现象描述",
  "level": 3
}, {
  "value": "问题根因",
  "id": "问题根因",
  "level": 3
}, {
  "value": "定位步骤",
  "id": "定位步骤",
  "level": 3
}, {
  "value": "kernel侧获取Tiling信息不正确",
  "id": "kernel侧获取tiling信息不正确",
  "level": 2
}, {
  "value": "现象描述",
  "id": "现象描述-1",
  "level": 3
}, {
  "value": "问题根因",
  "id": "问题根因-1",
  "level": 3
}, {
  "value": "处理步骤",
  "id": "处理步骤",
  "level": 3
}, {
  "value": "Kernel编译时报错“error: out of jump/jumpc imm range”",
  "id": "kernel编译时报错error-out-of-jumpjumpc-imm-range",
  "level": 2
}, {
  "value": "现象描述",
  "id": "现象描述-2",
  "level": 3
}, {
  "value": "问题根因",
  "id": "问题根因-2",
  "level": 3
}, {
  "value": "处理步骤",
  "id": "处理步骤-1",
  "level": 3
}, {
  "value": "有可选输入的情况下，算子编译失败，报找不到DTYPE_XX",
  "id": "有可选输入的情况下算子编译失败报找不到dtype_xx",
  "level": 2
}, {
  "value": "现象描述",
  "id": "现象描述-3",
  "level": 3
}, {
  "value": "问题根因",
  "id": "问题根因-3",
  "level": 3
}, {
  "value": "处理步骤",
  "id": "处理步骤-2",
  "level": 3
}, {
  "value": "如何通过gdb启动算子调测工具脚本",
  "id": "如何通过gdb启动算子调测工具脚本",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案",
  "level": 3
}, {
  "value": "环境变量报错提示there are multiple xxx env variable",
  "id": "环境变量报错提示there-are-multiple-xxx-env-variable",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述-1",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因-1",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案-1",
  "level": 3
}, {
  "value": "NPU编译失败提示RuntimeError: Cannot find compile result file",
  "id": "npu编译失败提示runtimeerror-cannot-find-compile-result-file",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述-2",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因-2",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案-2",
  "level": 3
}, {
  "value": "NPU编译失败提示RuntimeError: Cannot get compiling bash file! Maybe template json does not match",
  "id": "npu编译失败提示runtimeerror-cannot-get-compiling-bash-file-maybe-template-json-does-not-match",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述-3",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因-3",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案-3",
  "level": 3
}, {
  "value": "调测失败提示RuntimeError: run output data xxx not found",
  "id": "调测失败提示runtimeerror-run-output-data-xxx-not-found",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述-4",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因-4",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案-4",
  "level": 3
}, {
  "value": "使能打印功能后提示block info is not valid, skip this block",
  "id": "使能打印功能后提示block-info-is-not-valid-skip-this-block",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述-5",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因-5",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案-5",
  "level": 3
}, {
  "value": "调试Kernel代码时打印错误或者无打印信息",
  "id": "调试kernel代码时打印错误或者无打印信息",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述-6",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因-6",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案-6",
  "level": 3
}, {
  "value": "CPU/Simulator调测的精度比对结果部分为0",
  "id": "cpusimulator调测的精度比对结果部分为0",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述-7",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因-7",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案-7",
  "level": 3
}, {
  "value": "如何通过查看Tiling日志定位问题",
  "id": "如何通过查看tiling日志定位问题",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述-8",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因-8",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案-8",
  "level": 3
}, {
  "value": "CAModel仿真过慢导致运行失败",
  "id": "camodel仿真过慢导致运行失败",
  "level": 2
}, {
  "value": "问题描述",
  "id": "问题描述-9",
  "level": 3
}, {
  "value": "可能的原因",
  "id": "可能的原因-9",
  "level": 3
}, {
  "value": "处理方案",
  "id": "处理方案-9",
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
        id: "算子开发常见问题",
        children: "算子开发常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "核函数运行验证时算子存在精度问题",
      children: "核函数运行验证时算子存在精度问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "现象描述",
      children: "现象描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行算子NPU域的运行验证时，通过md5sum等方式进行算子精度比对，实际数据和真值数据不一致，算子存在精度问题。本示例中通过md5sum来进行精度比对，打印出的真值数据和实际输出数据的md5值不一致，具体打印信息如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "md5sum:\n45e17ee4c068a655be2af4d8c3a1f191  output/golden.bin\n6a99e41a84b14dd04f32730ceb9a3988  output/output_y.bin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题根因",
      children: "问题根因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算子出现精度问题，一般是由于算子的实现逻辑有误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定位步骤",
      children: "定位步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AscendC提供孪生调试的功能，通过CPU域的功能验证、gdb单步调试、printf数值打印来定位算子的实现逻辑问题。本样例仅展示了可能会出现的场景，便于演示定位步骤。实际使用过程中，请根据代码情况进行调试。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进行CPU域的功能验证，观察是否有日志报错。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-overview-of-engineering-operator",
            children: "工程化算子开发"
          }), "章节，编写CPU侧的运行验证代码，并进行运行验证。得到CPU域的精度比对结果如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "md5sum:\n45e17ee4c068a655be2af4d8c3a1f191  output/golden.bin\n5d6e1aec686b28bd3839dbcd5caaa8b2  output/output_y.bin\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以看出CPU域的精度比对也存在不一致的问题，然后观察是否有打屏日志报错，可搜索关键词\"failed\"。比如，下图的报错示例指示，错误出现在代码中调用LeakyRelu接口的地方。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "leakyrelu_custom_cpu: /home/workdir/AscendC/ddk/tikcpp/tikcfw/interface/kernel_operator_vec_binary_scalar_intf.h:447: void AscendC::LeakyRelu(const AscendC::LocalTensor<T>&, const AscendC::LocalTensor<T>&, const T&, const int32_t&) [with T = float16::Fp16T; int32_t = int]: Assertion `false && \"check vlrelu instr failed\"' failed\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过上述报错日志，一般只能定位到报错的代码行，无法明确具体错误，接下来需要通过gdb调试的方式或者printf打印的方式进一步精确定位。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["gdb调试。下面的样例展示了拉起leakyrelu算子CPU侧运行程序的样例，该样例程序会直接抛出异常，直接gdb运行，查看调用栈信息分析定位即可。其他场景下开发者可以使用gdb打断点等基本操作进行调试。使用gdb调试AscendC程序的详细内容请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-gdb",
            children: "gdb调试"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用gdb拉起待调试程序，进入gdb界面进行debug。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "gdb leakyrelu_custom_cpu\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "单独调试一个子进程。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "(gdb) set follow-fork-mode child\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "运行程序。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "(gdb) r\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过bt查看程序调用栈。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "(gdb) bt\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "查看具体层的堆栈信息，打印具体变量的值。本示例中，打印了tileLength为1024，该程序中表示需要处理1024个half类型的数，大小为1024*sizeof(half)=2048字节；输入Tensor xLocal的值，其中dataLen表示LocalTensor的size大小为1024字节，只能计算1024字节的数据。可以看出两者的长度不匹配，由此可以定位问题。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "(gdb) f 5\n #5  0x000055555555d364 in KernelLeakyRelu::Compute (this=0x7fffffffd7d0, progress=0) at /root/AscendC_DemoCode-master/precision-error/vector/leakyrelu_custom.cpp:59\n 59              LeakyRelu(yLocal, xLocal, scalar, tileLength);\n (gdb) p tileLength\n $1 = 1024\n (gdb) p xLocal\n $1 = {<AscendC::BaseTensor<float16::Fp16T>> = {<No data fields>}, address_ = {logicPos = 9 '\\t', bufferHandle = 0x7fffffffd930 \"\\003\\005\\377\\377\", dataLen = 1024,bufferAddr = 0,absAddr = ...}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "printf打印。在合适的位置增加变量打印。样例代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "printf(\"xLocal size: %d\\n\", xLocal.GetSize());\nprintf(\"tileLength: %d\\n\", tileLength);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以看到有如下打屏日志输出，打印了tileLength为1024，该程序中表示需要处理1024个half类型的数；输入Tensor xLocal的size大小，为512，表示只能计算512个half类型的数。可以看出两者的长度不匹配，由此可以定位问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "xLocal size: 512\ntileLength: 1024\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kernel侧获取tiling信息不正确",
      children: "kernel侧获取Tiling信息不正确"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "现象描述-1",
      children: "现象描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过算子在kernel侧实现代码中添加PRINTF打印发现kernel侧获取的Tiling信息不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如下文样例，增加的打印代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PRINTF(\"tiling_data.totalLength: %d tiling_data.tileNum: %d.\\n\", tiling_data.totalLength, tiling_data.tileNum);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印的Tiling数据如下，全为0："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tiling_data.totalLength: 0 tiling_data.tileNum: 0.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题根因-1",
      children: "问题根因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "kernel侧获取Tiling信息不正确的原因一般有以下两种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "host侧计算Tiling的逻辑不正确"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kernel侧核函数的参数未按照正确顺序填写"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理步骤",
      children: "处理步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考如下示例，打印TilingData的数据，确认host侧序列化保存的TilingData是否正确。如果此时打印值有误，说明Tiling的计算逻辑可能不正确，需要进一步检查host侧Tiling实现代码，排查计算逻辑是否有误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 按照实际数据类型打印TilingData第一个参数值，如需确认其他值，取值指针向后偏移即可\nstd::out<<*reinterpret_cast<uint32_t *>(context->GetRawTilingData()->GetData())<<std::endl;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果上一步骤中打印的TilingData正确，需要排查kernel侧核函数的参数是否按照正确顺序填写。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用msOpGen工具创建算子工程，并基于工程进行kernel侧算子开发时，核函数的定义模板已通过msOpGen工具自动生成，样例如下所示 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "。"
            })
          }), " 参数按照 “输入、输出、workspace、tiling”的顺序排布。请检查是否调整过参数顺序导致和正确顺序不一致。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"kernel_operator.h\"\nextern \"C\" __global__ __aicore__ void add_custom(GM_ADDR x, GM_ADDR y, GM_ADDR z, GM_ADDR workspace, GM_ADDR tiling) {\n    GET_TILING_DATA(tiling_data, tiling);// 获取Tiling参数\n    // TODO: user kernel impl\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kernel编译时报错error-out-of-jumpjumpc-imm-range",
      children: "Kernel编译时报错“error: out of jump/jumpc imm range”"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "现象描述-2",
      children: "现象描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用工程化算子开发方式，基于自定义算子工程进行算子开发。编译算子时失败，报如下错误："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[ERROR] [ascendxxxx] PowerCustom_88a695f03edfbc0af76b9eaae9e4556c error: out of jump/jumpc imm range\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题根因-2",
      children: "问题根因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该编译错误的原因是算子kernel代码过大，导致在编译时跳转指令跳转的偏移值超过了限定的大小（int16_t的数据范围），可通过添加编译选项“-mllvm -cce-aicore-jump-expand=true”通过间接跳转的方式来避免该问题，让编译器能够正常编译。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理步骤-1",
      children: "处理步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在kernel侧的CMakeLists中通过add_ops_compile_options针对报错算子添加编译选项“-mllvm -cce-aicore-jump-expand=true”，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "add_ops_compile_options(PowerCustom OPTIONS -mllvm -cce-aicore-jump-expand=true)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["add_ops_compile_options的具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation#%E6%94%AF%E6%8C%81%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9",
            children: "支持自定义编译选项"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重新编译该算子。正常编译无报错。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "有可选输入的情况下算子编译失败报找不到dtype_xx",
      children: "有可选输入的情况下，算子编译失败，报找不到DTYPE_XX"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "现象描述-3",
      children: "现象描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用tilingkey设置代码分支时，无法生成对应omc文件。例如onnx模型为2个输入，算子有4个输入x、y、m、n，2个为required和2个optional，tiling key设置为2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class KernelAddCustom_omc2 {\n// ... ...\n};\n\nclass KernelAddCustom_omc3 {\n// ... ...\n};\n\nclass KernelAddCustom_omc4 {\npublic:\n    __aicore__ inline KernelAddCustom_omc4() {}\n    __aicore__ inline void Init4(GM_ADDR x, GM_ADDR y, GM_ADDR m, GM_ADDR n, GM_ADDR z, uint32_t totalLength, uint32_t tileNum)\n    {\n        ASSERT(GetBlockNum() != 0 && \"block dim can not be zero!\");\n        this->blockLength = totalLength / GetBlockNum();\n        this->tileNum = tileNum;\n        ASSERT(tileNum != 0 && \"tile num can not be zero!\");\n        this->tileLength = this->blockLength / tileNum / BUFFER_NUM;\n\n        xGm.SetGlobalBuffer((__gm__ DTYPE_X*)x + this->blockLength * GetBlockIdx(), this->blockLength);\n        yGm.SetGlobalBuffer((__gm__ DTYPE_Y*)y + this->blockLength * GetBlockIdx(), this->blockLength);\n        mGm.SetGlobalBuffer((__gm__ DTYPE_M*)m + this->blockLength * GetBlockIdx(), this->blockLength);\n        nGm.SetGlobalBuffer((__gm__ DTYPE_N*)n + this->blockLength * GetBlockIdx(), this->blockLength);\n        zGm.SetGlobalBuffer((__gm__ DTYPE_Z*)z + this->blockLength * GetBlockIdx(), this->blockLength);\n        pipe.InitBuffer(inQueueX, BUFFER_NUM, this->tileLength * sizeof(DTYPE_X));\n        pipe.InitBuffer(inQueueY, BUFFER_NUM, this->tileLength * sizeof(DTYPE_Y));\n        pipe.InitBuffer(inQueueM, BUFFER_NUM, this->tileLength * sizeof(DTYPE_M));\n        pipe.InitBuffer(inQueueN, BUFFER_NUM, this->tileLength * sizeof(DTYPE_N));\n        pipe.InitBuffer(outQueueZ, BUFFER_NUM, this->tileLength * sizeof(DTYPE_Z));\n    }\n// ... ...\nprivate:\n    TPipe pipe;\n    TQue<QuePosition::VECIN, BUFFER_NUM> inQueueX, inQueueY, inQueueM, inQueueN;\n    TQue<QuePosition::VECOUT, BUFFER_NUM> outQueueZ;\n    GlobalTensor<DTYPE_X> xGm;\n    GlobalTensor<DTYPE_Y> yGm;\n    GlobalTensor<DTYPE_M> mGm;\n    GlobalTensor<DTYPE_N> nGm;\n    GlobalTensor<DTYPE_Z> zGm;\n    uint32_t blockLength;\n    uint32_t tileNum;\n    uint32_t tileLength;\n};\n\n\nextern \"C\" __global__ __aicore__ void add_custom_omc(GM_ADDR x, GM_ADDR y, GM_ADDR m, GM_ADDR n, GM_ADDR z, GM_ADDR workspace, GM_ADDR tiling) {\n    GET_TILING_DATA(tiling_data, tiling);\n    if (TILING_KEY_IS(2)){\n        KernelAddCustom_omc2 op;\n        op.Init2(x, y, z, tiling_data.size, 4);\n        op.Process2();\n    } else if (TILING_KEY_IS(3)){\n        KernelAddCustom_omc3 op;\n        op.Init3(x, y, m, z, tiling_data.size, 4);\n        op.Process3();\n    }else if (TILING_KEY_IS(4)){\n        KernelAddCustom_omc4 op;\n        op.Init4(x, y, m, n, z, tiling_data.size, 4);\n        op.Process4();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "omg模型转换失败，报错如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ddk/ascendc/ops/impl/custom/add_custom_omc.cpp:165:37: error: unknown type name 'DTYPE_N'\n        nGm.SetGlobalBuffer((__gm__ DTYPE_N*)n + this->blockLength * GetBlockIdx(), this->blockLength);\n                                    ^\nddk/ascendc/ops/impl/custom/add_custom_omc.cpp:169:73: error: use of undeclared identifier 'DTYPE_M'\n        pipe.InitBuffer(inQueueM, BUFFER_NUM, this->tileLength * sizeof(DTYPE_M));\n                                                                        ^\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题根因-3",
      children: "问题根因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模型仅有2个输入x、y的情况下，仅会生成对应的宏DTYPE_X、DTYPE_Y，不会生成DTYPE_M，DTYPE_N。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理步骤-2",
      children: "处理步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过编译宏隔离："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#if defined (DTYPE_M) && defined (DTYPE_N)\nclass KernelAddCustom_omc4 {\n// ... ...\n};\n#endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何通过gdb启动算子调测工具脚本",
      children: "如何通过gdb启动算子调测工具脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Linux环境下，开发者需要通过gdb方式开启对算子调测（ascendebug）工具的调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令，获取工具安装路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "which ascendebug\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(377998)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般情况下，ascendebug工具路径缺省为“{INSTALL_DIR}/tools/tools_ascendc/package/ascendebug”，其中${INSTALL_DIR}请替换为DDK软件安装后文件存储路径。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开ascendebug工具启动脚本（以缺省路径为例）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "vim ${INSTALL_DIR}/tools/tools_ascendc/package/ascendebug\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在启动脚本中添加gdb调试命令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "main() {\n    check_env $LD_LIBRARY_PATH\n    ret1=$?\n    check_env $PATH\n    ret2=$?\n    check_env $TOOLCHAIN_HOME\n    ret3=$?\n    if [ $ret1 -eq 1 ] || [ $ret2 -eq 1 ] || [ $ret3 -eq 1 ]; then\n        echo \"Please make sure source the correct cann package setenv.bash only. you can open a new window,and restart\"\n        exit 0\n    fi\n    export _ASCENDC_DEBUG_TOOL_INSTALL_PATH=${DIR%%latest*}\n    gdb --ex r --args python3 -m ascendebug.cmd $@\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境变量报错提示there-are-multiple-xxx-env-variable",
      children: "环境变量报错提示there are multiple xxx env variable"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述-1",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用本工具进行算子功能调测时失败，提示的报错信息如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "error: User specified two different cann Installation package path: {PATH_A} and {PATH_B}\nerror: User specified two different cann Installation package path: {PATH_A} and {PATH_B}\nerror: User specified two different cann Installation package path: {PATH_A} and {PATH_B}\nPlease make sure source the correct cann package setenv.bash only. you can open a new window,and restart\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因-1",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复设置了环境变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案-1",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查当前运行环境中的环境变量（缺省路径为${INSTALL_DIR}/ddk/tools/tools_ascendc/set_ascendc_env.sh）是否有重复设置。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果有重复，重新打开一个终端窗口，按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-environment-preparation",
          children: "环境准备"
        }), "章节设置环境变量。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "npu编译失败提示runtimeerror-cannot-find-compile-result-file",
      children: "NPU编译失败提示RuntimeError: Cannot find compile result file"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述-2",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "opc编译方式下，kernel编译报错，如图1所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 报错样例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(80794)/* ["default"] */.A) + "",
        width: "1462",
        height: "509"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因-2",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kernel代码实现有误，导致编译失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案-2",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置环境变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在任意终端窗口打开ascendc环境变量文件，缺省路径为“${INSTALL_DIR}/tools/tools_ascendc/set_ascendc_env.sh”，设置如下变量，放开日志打印等级："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export ASCEND_GLOBAL_LOG_LEVEL=3         # 设置日志级别为ERROR\nexport ASCEND_SLOG_PRINT_TO_STDOUT=1     # 开启日志打屏，日志将不会保存在log文件中\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取日志文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过命令行方式，日志落盘地址由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters#simulator%E4%BB%BF%E7%9C%9F%E5%8F%82%E6%95%B0",
            children: "Simulator仿真参数"
          }), "接口指定，缺省为当前操作路径的debug_op.log。请根据实际路径打开日志文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "截取调测命令，重新执行后再分析。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在debug_op.log中找到“opc npu compile start”关键字。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "手动拷贝opc npu compile start后的命令，如图2所示，并在终端窗口执行，通过打屏或者落盘的日志文件进一步分析问题。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "图2"
                })
              }), " NPU编译命令"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(154758)/* ["default"] */.A) + "",
                width: "973",
                height: "137"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "npu编译失败提示runtimeerror-cannot-get-compiling-bash-file-maybe-template-json-does-not-match",
      children: "NPU编译失败提示RuntimeError: Cannot get compiling bash file! Maybe template json does not match"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述-3",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "opc编译方式下，kernel编译报错，如图3所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 报错样例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(526930)/* ["default"] */.A) + "",
        width: "1349",
        height: "419"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因-3",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者输入的算子json配置文件与自定义算子工程的算子json模板配置不一致（如输入/输出的dtype不一样）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案-3",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若调试的算子json模板可变更："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改开发者输入的算子json配置文件，使其与自定义算子工程的算子json模板配置保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如图3 报错样例中，将json中的padding_mask改为模板对应的pse_shift。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调测失败提示runtimeerror-run-output-data-xxx-not-found",
      children: "调测失败提示RuntimeError: run output data xxx not found"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述-4",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行Kernel显示结束，但最后报错提示没有找到output输出文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因-4",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU/Simulator的Kernel执行失败，导致输出路径下无输出文件生成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案-4",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置环境变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在任意终端窗口打开ascendc环境变量文件，缺省路径为“${INSTALL_DIR}/tools/tools_ascendc/set_ascendc_env.sh”，设置如下变量，放开日志打印等级："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export ASCEND_GLOBAL_LOG_LEVEL=3         # 设置日志级别为ERROR\nexport ASCEND_SLOG_PRINT_TO_STDOUT=1     # 开启日志打屏，日志将不会保存在log文件中\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取日志文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过命令行方式，日志落盘地址由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters#npu%E8%B0%83%E6%B5%8B%E5%8F%82%E6%95%B0",
            children: "NPU调测参数"
          }), "接口指定，缺省为当前操作路径的debug_op.log。请根据实际路径打开日志文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "截取CPU/Simulator调测命令，重新执行后再分析。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在debug_op.log中找到“cpu kernel run start”或“npu kernel run start”关键字。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "手动拷贝关键字后的所有命令，在终端窗口分别执行，通过打屏或者落盘的日志文件信息进一步分析问题。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "[CONSOLE] ascendc_debug_tool [3626213] 2024-05-21 19:15:35,513 ==================== cpu kernel run start ====================\n[CONSOLE] ascendc_debug_tool [3626213] 2024-05-21 19:15:35,513 execute_cmd: bash -c \"cd /home/ascendebug_smoking_test/op_contrib/api_opcontrib_case/ForeachSigmoid/cpu/build && ./foreach_sigmoid_cpu | tee -a /home/ascendebug_smoking_test/op_contrib/api_opcontrib_case.log && cd -\"\ncpu run start\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "[CONSOLE] ascendc_debug_tool [3626213] 2024-05-21 19:15:36,046 ==================== npu kernel run start ====================\n[CONSOLE] ascendc_debug_tool [3626213] 2024-05-21 19:15:36,046 /home/run_pkg/latest/toolkit/tools/ascendc_tools/npu_kernel_launch/npu_kernel_launch --kernel /home/ascendebug_smoking_test/op_contrib/data/op-contrib/build_out/binary/${chip_version}/bin/foreach_sigmoid/ForeachSigmoid_0885a6586f8e7f8dc8d03c4dabc73ef4_high_performance.o --name ForeachSigmoid --json_file /home/ascendebug_smoking_test/op_contrib/api_opcontrib_case/ForeachSigmoid/data/ForeachSigmoid.json --input_path /home/ascendebug_smoking_test/op_contrib/api_opcontrib_case/ForeachSigmoid/data --output_path /home/ascendebug_smoking_test/op_contrib/api_opcontrib_case/ForeachSigmoid/npu/output --tiling_data /home/ascendebug_smoking_test/op_contrib/api_opcontrib_case/ForeachSigmoid/tiling/tiling_data_tiling_key_1_block_dim_1_workspace_33554432.bin --tiling_key 1 --workspace 33554432 --block_dim 1 --timeout 600 --device 0 --core_type VectorCore --arg_lib /home/ascendebug_smoking_test/op_contrib/api_opcontrib_case/ForeachSigmoid/npu/build/launch_args.so\nkernel name: ForeachSigmoid\nkernel file: /home/ascendebug_smoking_test/op_contrib/data/op-contrib/build_out/binary/${chip_version}/bin/foreach_sigmoid/ForeachSigmoid_0885a6586f8e7f8dc8d03c4dabc73ef4_high_performance.o\njson file: /home/ascendebug_smoking_test/op_contrib/api_opcontrib_case/ForeachSigmoid/data/ForeachSigmoid.json\n// ...\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使能打印功能后提示block-info-is-not-valid-skip-this-block",
      children: "使能打印功能后提示block info is not valid, skip this block"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述-5",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启printf/PRINTF/DumpTensor/DumpAccChkPoint/assert打印功能后，代码执行出现block info is not valid, skip this block，无打印信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因-5",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印DumpTensor的代码未在报错核中执行 （以CPU调测为例，如图4所示，block32~70 的核没有执行Dump和Print操作），后续解析对应.bin时无法获取该核对应的数据，因此该block的数据无效，打印跳过。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 报错样例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(314569)/* ["default"] */.A) + "",
        width: "927",
        height: "412"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案-5",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请自行检查算子实现代码，确保printf/PRINTF/DumpTensor/DumpAccChkPoint/assert已执行到该核中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调试kernel代码时打印错误或者无打印信息",
      children: "调试Kernel代码时打印错误或者无打印信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述-6",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试Kernel代码时虽开启了打印功能，但无论如何修改代码，总是打印错误甚至无打印。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因-6",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "算子Kernel代码执行过程中异常退出，无打印信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上一次执行日志未清理，真值比对和Dump解析模块按照其路径读取了残留文件，输出了错误的值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案-6",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "先清理系统中残留的日志文。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请根据实际情况清理上一次生成的调测结果目录（由--work-dir参数指定），包括落盘的日志文件（缺省为当前操作路径的debug_op.log）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重新进行CPU/Simulator调测。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看最新生成的日志文件，根据提示的warning、error日志进一步分析问题。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cpusimulator调测的精度比对结果部分为0",
      children: "CPU/Simulator调测的精度比对结果部分为0"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述-7",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU/Simulator调测生成的精度比对结果文件出现“Failed”，部分输出为0，结果如图5所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 精度比对结果文件"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(661062)/* ["default"] */.A) + "",
        width: "710",
        height: "585"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因-7",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算子指定的block num没有跑满，导致部分输出为0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案-7",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查Tiling文件中设置的block num或者检查--block-num参数配置是否合理，请保证该值满足算子计算业务的需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何通过查看tiling日志定位问题",
      children: "如何通过查看Tiling日志定位问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述-8",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiling调测过程中提示报错，需要通过日志进一步定位问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因-8",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiling函数代码实现有误或者输入配置有误（如数据、算子json配置文件等）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案-8",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取日志文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过命令行方式，日志落盘地址由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters#npu%E8%B0%83%E6%B5%8B%E5%8F%82%E6%95%B0",
            children: "NPU调测参数"
          }), "接口指定，缺省为当前操作路径的debug_op.log。请根据实际路径打开日志文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "截取Tiling调测命令，重新执行，根据提示进一步定位Tiling代码问题。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在debug_op.log中找到“gen_tiling_data_cmd”关键字。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "手动拷贝gen_tiling_data_cmd后的所有命令，在终端窗口执行，通过打屏或者落盘的日志文件进一步分析问题。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(151916)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["执行命令之前，请确保当前终端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-environment-preparation",
            children: "环境准备"
          }), "设置并生效。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "[CONSOLE] ascendc_debug_tool [4149480] 2024-06-03 15:57:42,364 ==================== generate tiling data start ====================\n [CONSOLE] ascendc_debug_tool [4149480] 2024-06-03 15:57:42,364 gen_tiling_data_cmd:\n /home/install_daily/latest/toolkit/tools/ascendc_tools/ascendc_tiling_tool /home/install_daily/latest/opp/built-in/op_impl/ai_core/tbe/op_tiling/lib/linux/aarch64/liboptiling.so FlashAttentionScore ${chip_version} /home/ascendebug_smoking_test/ops_adv/adt_biprof/FlashAttentionScore/tiling/tiling_data.bin /home/ascendebug_smoking_test/ops_adv/adt_biprof/FlashAttentionScore/tiling/tiling_run_info.bin /home/ascendebug_smoking_test/ops_adv/adt_biprof/FlashAttentionScore/tiling/inputs.json /home/ascendebug_smoking_test/ops_adv/adt_biprof/FlashAttentionScore/tiling/outputs.json /home/ascendebug_smoking_test/ops_adv/adt_biprof/FlashAttentionScore/tiling/attrs.json\n [CONSOLE] ascendc_debug_tool [4149480] 2024-06-03 15:57:42,917 ==================== generate tiling data end, takes 552974.0(us) ====================\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "camodel仿真过慢导致运行失败",
      children: "CAModel仿真过慢导致运行失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题描述-9",
      children: "问题描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用CAModel进行算子性能仿真时，发现运行时间较长，直至调测失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可能的原因-9",
      children: "可能的原因"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "硬件资源有限，多任务抢占资源，导致CAModel运行缓慢。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "硬件性能不足以支撑算子仿真计算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "算子的输入/输出Shape过大，导致CAModel仿真耗时激增。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAModel仿真参数设置不合理，如block num取值过大。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理方案-9",
      children: "处理方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议1：尽可能避免多个任务同时抢占硬件资源，保障CAModel主任务运行效果。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议2：提高硬件性能，尽量满足如下要求："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "服务器：X86物理服务器或者计算云（暂支持x86）"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CPU核数：建议大于16核"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "内存：建议大于64GB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "硬盘：建议大于2T"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议3：适当调小算子的输入/输出Shape，降低仿真数据量。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["建议4：请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters#simulator%E4%BB%BF%E7%9C%9F%E5%8F%82%E6%95%B0",
            children: "Simulator仿真参数"
          }), "设置CAModel仿真参数，如block num建议设置为1。"]
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
154758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439301-733bd3e6b5956d9583157642c7be9375.png");

},
80794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799606-180eb1968ac245961c04340711df6186.png");

},
661062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799608-8380eb4b08c4682cf0544881c7a5efcf.png");

},
314569(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479257-377493a65accd41bddfe16fccb742bd0.png");

},
377998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
151916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
526930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959256-b68d1f91c877f458bf9da99ac6464f93.png");

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