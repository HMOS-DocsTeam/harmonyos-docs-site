"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["25185"], {
825303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mindspore_lite_kit_mindspore_lite_converter_guidelines_mindspore_lite_converter_guidelines_md_2fd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mindspore-lite-kit-mindspore-lite-converter-guidelines-mindspore-lite-converter-guidelines-md-2fd.json
var site_docs_mindspore_lite_kit_mindspore_lite_converter_guidelines_mindspore_lite_converter_guidelines_md_2fd_namespaceObject = JSON.parse('{"id":"mindspore-lite-kit/mindspore-lite-converter-guidelines/mindspore-lite-converter-guidelines","title":"使用MindSpore Lite进行模型转换","description":"场景介绍","source":"@site/docs/mindspore-lite-kit/mindspore-lite-converter-guidelines/mindspore-lite-converter-guidelines.md","sourceDirName":"mindspore-lite-kit/mindspore-lite-converter-guidelines","slug":"/mindspore-lite-kit/mindspore-lite-converter-guidelines/","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-lite-converter-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用MindSpore Lite进行模型转换","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-lite-converter-guidelines","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"MindSpore Lite Kit简介","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-lite-kit-introduction/"},"next":{"title":"使用MindSpore Lite进行模型推理 (C/C++)","permalink":"/harmonyos-docs-site/mindspore-lite-kit/deployment/mindspore-lite-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/mindspore-lite-kit/mindspore-lite-converter-guidelines/mindspore-lite-converter-guidelines.md


const frontMatter = {
	title: '使用MindSpore Lite进行模型转换',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-lite-converter-guidelines',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '使用MindSpore Lite进行模型转换';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "获取模型转换工具",
  "id": "获取模型转换工具",
  "level": 2
}, {
  "value": "通过下载获取",
  "id": "通过下载获取",
  "level": 3
}, {
  "value": "通过源码编译",
  "id": "通过源码编译",
  "level": 3
}, {
  "value": "配置环境变量",
  "id": "配置环境变量",
  "level": 2
}, {
  "value": "参数说明",
  "id": "参数说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "离线模型转换（可选）",
  "id": "离线模型转换可选",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "扩展配置文件说明",
  "id": "扩展配置文件说明",
  "level": 3
}, {
  "value": "附录",
  "id": "附录",
  "level": 2
}, {
  "value": "关闭指定算子融合",
  "id": "关闭指定算子融合",
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
        id: "使用mindspore-lite进行模型转换",
        children: "使用MindSpore Lite进行模型转换"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore Lite AI模型部署流程是："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者首先将原始模型（如：ONNX、CAFFE等）用MindSpore Lite模型转换工具，生成后缀为.ms的模型文件。MindSpore Lite Kit所支持的ONNX算子，可查询", (0,jsx_runtime.jsx)(_components.a, {
          href: "/mindspore-lite-kit/mindspore-lite-appendix/mindspore-lite-supported-operators",
          children: "MindSpore Lite Kit算子支持列表"
        }), "，以确保模型转换成功。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["然后在代码中调用MindSpore Lite推理引擎接口，执行", (0,jsx_runtime.jsx)(_components.a, {
          href: "/mindspore-lite-kit/deployment/mindspore-lite-guidelines",
          children: "模型推理"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取模型转换工具",
      children: "获取模型转换工具"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于MindSpore Lite模型转换工具，有以下两种方式可以获取："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过下载获取",
      children: "通过下载获取"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "硬件平台"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "操作系统"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "链接"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SHA-256"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "端侧推理和训练benchmark工具、converter工具、cropper工具"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux-x86_64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://ms-release.obs.cn-north-4.myhuaweicloud.com/2.7.0/MindSporeLite/lite/release/linux/x86_64/mindspore-lite-2.7.0-linux-x64.tar.gz",
              children: "mindspore-lite-2.7.0-linux-x64.tar.gz"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8bb1097100c9fec12675670ba2d4264a2cd6da3a9be093eb56631d00fc0c455b"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过源码编译",
      children: "通过源码编译"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(274173)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于支持转换PyTorch模型的编译选项默认关闭，因此下载的安装包不支持转换PyTorch模型，只能通过源码编译方式获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模型中有transpose与convolution算子融合，需要通过源码编译方式获取。否则可能会发生类似警告：node infer shape failed, node is Default/Conv2DFusion-xxx。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当指定NPU后端进行推理时，需要自定义", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%85%B3%E9%97%AD%E6%8C%87%E5%AE%9A%E7%AE%97%E5%AD%90%E8%9E%8D%E5%90%88",
          children: "关闭clip算子融合"
        }), "，模型转换工具需要通过源码编译方式获取。否则可能会发生类似报错：BuildKirinNPUModel# Create full model kernel failed。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译环境要求如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统环境：Linux x86_64，推荐使用Ubuntu 18.04.02LTS。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["C++编译依赖：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "GCC >= 7.3.0"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "CMake >= 3.18.3"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Git >= 2.28.0"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["取", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/third_party_mindspore",
            children: "MindSpore Lite源码"
          }), "。MindSpore Lite完整源码位于：mindspore-src/source/。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行编译。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如要获取支持转换PyTorch模型的转换工具，编译前需要先export MSLITE_ENABLE_CONVERT_PYTORCH_MODEL=on && export LIB_TORCH_PATH=\"/home/user/libtorch\"。转换前加入libtorch的环境变量：export LD_LIBRARY_PATH=\"/home/user/libtorch/lib:${LD_LIBRARY_PATH}\"。用户可以下载CPU版本libtorch后解压到/home/user/libtorch的目录下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cd mindspore-src/source/\nbash build.sh -I x86_64 -j 8\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译完成后，可从源码根目录的output/子目录取得MindSpore Lite发布件。解压后，转换工具位于tools/converter/converter/。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置环境变量",
      children: "配置环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取到模型转换工具之后，还需要将转换工具需要的动态链接库加入环境变量LD_LIBRARY_PATH。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export LD_LIBRARY_PATH=${PACKAGE_PATH}/tools/converter/lib:${LD_LIBRARY_PATH}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，${PACKAGE_PATH}对应为编译或下载得到的MindSpore Lite发布件解压后的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore Lite模型转换工具提供了多种参数设置，用户可根据需要来选择使用。此外，用户可输入./converter_lite --help获取实时帮助信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面提供详细的参数说明。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值范围"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印全部帮助信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--fmk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入模型的原始格式。只有在MS模型转换为Micro代码场景时，才支持设置为MSLITE。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MINDIR、CAFFE、TFLITE、TF、ONNX、PYTORCH、MSLITE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--modelFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入模型的路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--outputFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出模型的路径，不需加后缀，可自动生成.ms后缀。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--weightFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转换CAFFE模型时必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入模型权重文件的路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--configFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1）可作为训练后量化配置文件路径；2）可作为扩展功能配置文件路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--fp16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定在模型序列化时是否需要将float32数据格式的权重存储为float16数据格式。  默认值为off。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on、off"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--inputShape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定模型输入的维度，输入维度的顺序和原始模型保持一致。对某些特定的模型可以进一步优化模型结构，但是转化后的模型将可能失去动态shape的特性。输入名和shape之间用:分割，多个输入用;分割，同时加上双引号\"\"。例如配置为\"inTensorName_1: 1,32,32,4;inTensorName_2:1,64,64,4;\"。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--inputDataFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定导出模型的输入format，只对四维输入有效。  默认值为NHWC。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NHWC、NCHW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--inputDataType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定量化模型输入tensor的数据类型。仅当模型输入tensor的量化参数（scale和zero point）配置时有效。默认与原始模型输入tensor的数据类型保持一致。  默认值为DEFAULT。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT32、INT8、UINT8、DEFAULT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--outputDataType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定量化模型输出tensor的数据类型。仅当模型输出tensor的量化参数（scale和zero point）配置时有效。默认与原始模型输出tensor的数据类型保持一致。  默认值为DEFAULT。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT32、INT8、UINT8、DEFAULT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--outputDataFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定导出模型的输出format，只对四维输出有效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NHWC、NCHW"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567626)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数名和参数值之间用等号连接，中间不能有空格。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAFFE模型一般分为两个文件：*.prototxt模型结构，对应--modelFile参数；*.caffemodel模型权值，对应--weightFile参数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以CAFFE模型LeNet为例，执行转换命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./converter_lite --fmk=CAFFE --modelFile=lenet.prototxt --weightFile=lenet.caffemodel --outputFile=lenet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本例中，因为采用了CAFFE模型，所以需要模型结构、模型权值两个输入文件。再加上其他必需的fmk类型和输出路径两个参数，即可成功执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果显示为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CONVERT RESULT SUCCESS:0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这表示已经成功将CAFFE模型转化为MindSpore Lite模型，获得新文件lenet.ms。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "离线模型转换可选",
      children: "离线模型转换（可选）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当部署场景对加载时延要求严格时，开发者希望进一步降低加载时延，可采用另一种部署方案，即基于离线模型的推理。离线模型是使用硬件厂商的离线模型转换工具转换得到的模型，由硬件厂商负责解析和推理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行推理时，MindSpore Lite会直接将离线模型传给接入NNRt的 AI 硬件，无需在线构图即可加载，大幅降低模型加载时延，并且可携带额外的硬件特定信息，协助AI硬件推理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "离线模型仅支持在NNRt后端推理，硬件厂商需接入NNRt且支持离线模型推理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "离线模型转换工具仅支持通过源码编译方式获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "离线模型在转换时fmk必须指定为THIRDPARTY。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "离线模型本身作为黑盒，转换工具无法直接解析它得到模型输入输出张量信息，因此需要用户在转换工具的扩展配置文件中手动配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扩展配置文件说明",
      children: "扩展配置文件说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展配置样例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首行[third_party_model]为固定关键词，表明此节为离线模型配置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "下方依次是模型输入输出张量的名称、数据类型、形状、内存格式等信息，每个字段独占一行，先后顺序不限，采用键值对格式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "除数据类型和形状必选外，其它为可选配置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最后，还提供扩展参数字段，可将离线模型所需的自定义配置用键值对的形式一同封装到.ms文件，在推理时由NNRt传递给AI硬件使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[third_party_model]\ninput_names=in_0;in_1\ninput_dtypes=float32;float32\ninput_shapes=8,256,256;8,256,256,3\ninput_formats=NCHW;NCHW\noutput_names=out_0\noutput_dtypes=float32\noutput_shapes=8,64\noutput_formats=NCHW\nextended_parameters=key_foo:value_foo;key_bar:value_bar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字段说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "input_names：[可选]模型输入名称，格式：字符串，多个输入用;间隔。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "input_dtypes：[必选]模型输入数据类型，格式：类型，多个输入用;间隔。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "input_shapes：[必选]模型输入形状，格式：整数数组，多个输入用;间隔。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "input_formats：[可选]模型输入内存布局，格式：字符串，多个输入用;间隔，默认值NHWC。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "output_names：[可选]模型输入名称，格式：字符串，多个输入用;间隔。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "output_dtypes：[必选]模型输出数据类型，格式：类型，多个输出用;间隔。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "output_shapes：[必选]模型输出形状，格式：整数数组，多个输出用;间隔。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "output_formats：[可选]模型输出内存布局，格式：字符串，多个输入用;间隔，默认值NHWC。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "extended_parameters：[可选]推理硬件自定义配置，字符串键值对格式，会通过NNRt后端传给硬件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "附录",
      children: "附录"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关闭指定算子融合",
      children: "关闭指定算子融合"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果用户需要关闭指定算子融合功能，可新建配置文件，如converter.cfg，配置文件内容如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[registry]\n# 当参数disable_fusion=off时，可通过配置fusion_blacklists关闭指定融合；当参数disable_fusion=on时，关闭所有融合，参数fusion_blacklists不生效。默认值为off。\ndisable_fusion=off\n# 关闭多个算子融合时，用逗号分隔。\nfusion_blacklists=ConvActivationFusion,MatMulActivationFusion,clip_convert_activation_pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在执行converter时，指定参数--configFile=converter.cfg即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持关闭的融合算子如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AddConcatActivationFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SqueezeFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TransposeFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReshapeReshapeFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConvBiasaddFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConvBatchNormFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConvScaleFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GroupNormFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TfNormFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OnnxLayerNormFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OnnxLayerNormFusion2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BatchMatMulFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BatchNormToScaleFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SigmoidMulFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ActivationFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConvActivationFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConvTupleGetItemFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConvTupleActivationFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TfliteLstmCellFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TfLstmCellFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TfBidirectionGruFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TfGeLUFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OnnxGeLUFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TfliteRelPosMultiHeadAttentionFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GLUFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConstFoldPass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AffineFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AffineActivationFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConvConvFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConvPadFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MatMulAddFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MatMulMulFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TransposeMatMulFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MulAddFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ScaleActivationFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ScaleScaleFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FullConnectedFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FullconnectedAddFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TensorDotFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MatMulActivationFusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "clip_convert_activation_pass"
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
567626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
274173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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