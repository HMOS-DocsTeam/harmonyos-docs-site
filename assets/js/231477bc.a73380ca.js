"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["193499"], {
853853(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_single_operator_application_cannkit_single_operator_application_md_231_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-single-operator-application-cannkit-single-operator-application-md-231.json
var site_docs_cann_kit_guide_cannkit_single_operator_application_cannkit_single_operator_application_md_231_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-single-operator-application/cannkit-single-operator-application","title":"单算子应用","description":"概述","source":"@site/docs/cann-kit-guide/cannkit-single-operator-application/cannkit-single-operator-application.md","sourceDirName":"cann-kit-guide/cannkit-single-operator-application","slug":"/cann-kit-guide/cannkit-single-operator-application/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-single-operator-application/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"单算子应用","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-single-operator-application","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"集成模型","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-integration-model/"},"next":{"title":"AscendC简介","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-introduction-to-ascend-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-single-operator-application/cannkit-single-operator-application.md


const frontMatter = {
	title: '单算子应用',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-single-operator-application',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '单算子应用';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例说明",
  "id": "示例说明",
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
        id: "单算子应用",
        children: "单算子应用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CANN Kit提供独立的算子创建和计算通路，三方框架可以在模型加载、推理过程中，将卷积、深度卷积等算子通过单算子对接的方式迁移至NPU，经过硬件平台的加速计算，与整网模式对比灵活度更高，相比于整网CPU计算性能更优。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533216)/* ["default"] */.A) + "",
        width: "7444",
        height: "4063"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下为单算子Tensor创建，单算子执行器创建、加载、执行接口，接口使用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
        children: "开发步骤"
      }), "。如要使用更丰富的设置和查询接口，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit",
        children: "API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 单算子接口及功能介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiAI_SingleOpTensorDesc * HMS_HiAISingleOpTensorDesc_Create (const int64_t *dims, size_t dimNum, HiAI_SingleOpDataType dataType, HiAI_SingleOpFormat format, bool isVirtual);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建HiAI_SingleOpTensorDesc对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void HMS_HiAISingleOpTensorDesc_Destroy (HiAI_SingleOpTensorDesc **tensorDesc);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放HiAI_SingleOpTensorDesc对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiAI_SingleOpBuffer * HMS_HiAISingleOpBuffer_Create (size_t dataSize);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照指定的内存大小创建HiAI_SingleOpBuffer对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t HMS_HiAISingleOpBuffer_GetSize (const HiAI_SingleOpBuffer *buffer);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询HiAI_SingleOpBuffer的字节大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void * HMS_HiAISingleOpBuffer_GetData (const HiAI_SingleOpBuffer *buffer);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询HiAI_SingleOpBuffer的内存地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAISingleOpBuffer_Destroy (HiAI_SingleOpBuffer **buffer);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放HiAI_SingleOpBuffer对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiAI_SingleOpTensor * HMS_HiAISingleOpTensor_CreateFromTensorDesc (const HiAI_SingleOpTensorDesc *desc);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据HiAI_SingleOpTensorDesc创建HiAI_SingleOpTensor对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiAI_SingleOpTensor * HMS_HiAISingleOpTensor_CreateFromConst (const HiAI_SingleOpTensorDesc *desc, void *data, size_t dataSize);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据HiAI_SingleOpTensorDesc、常量数据（如卷积权重、偏置等）的内存地址和数据大小创建HiAI_SingleOpTensor对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiAI_SingleOpTensorDesc * HMS_HiAISingleOpTensor_GetTensorDesc (const HiAI_SingleOpTensor *tensor);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取HiAI_SingleOpTensor的Tensor描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiAI_SingleOpBuffer * HMS_HiAISingleOpTensor_GetBuffer (const HiAI_SingleOpTensor *tensor);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取HiAI_SingleOpTensor的Buffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAISingleOpTensor_Destroy (HiAI_SingleOpTensor **tensor);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放HiAI_SingleOpTensor对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiAI_SingleOpOptions * HMS_HiAISingleOpOptions_Create (void);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建HiAI_SingleOpOptions对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void HMS_HiAISingleOpOptions_Destroy (HiAI_SingleOpOptions **options);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放HiAI_SingleOpOptions对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiAI_SingleOpDescriptor* HMS_HiAISingleOpDescriptor_CreateConvolution(HiAISingleOpDescriptor_ConvolutionParam param);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建卷积类（普通卷积、转置卷积、深度卷积）的描述符对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void HMS_HiAISingleOpDescriptor_Destroy (HiAI_SingleOpDescriptor **opDesc);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放HiAI_SingleOpDescriptor对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiAI_SingleOpExecutor* HMS_HiAISingleOpExecutor_CreateConvolution(HiAI_SingleOpExecutorConvolutionParam param);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建卷积类算子对应的HiAI_SingleOpExecutor对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t HMS_HiAISingleOpExecutor_GetWorkspaceSize (const HiAI_SingleOpExecutor *executor);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询HiAI_SingleOpExecutor所需的ION内存工作空间的字节大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAISingleOpExecutor_Init (HiAI_SingleOpExecutor *executor, void *workspace, size_t workspaceSize);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载HiAI_SingleOpExecutor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAISingleOpExecutor_Execute (HiAI_SingleOpExecutor *executor, HiAI_SingleOpTensor *input[], int32_t inputNum, HiAI_SingleOpTensor *output[], int32_t outputNum);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行同步运算推理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAISingleOpExecutor_Destroy (HiAI_SingleOpExecutor **executor);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁HiAI_SingleOpExecutor对象，释放执行器占用的内存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下开发步骤以卷积单算子为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建单算子执行器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopoptions_create",
                children: "HMS_HiAISingleOpOptions_Create"
              }), "，创建单算子配置对象。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopdescriptor_createconvolution",
                children: "HMS_HiAISingleOpDescriptor_CreateConvolution"
              }), "，创建卷积类算子描述符对象。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_createfromconst",
                children: "HMS_HiAISingleOpTensor_CreateFromConst"
              }), "，分别创建卷积算子的权重、偏置单算子Tensor。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_create",
                children: "HMS_HiAISingleOpTensorDesc_Create"
              }), "，分别创建单算子输入Tensor、输出Tensor的描述对象。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createconvolution",
                children: "HMS_HiAISingleOpExecutor_CreateConvolution"
              }), "，将上述创建好的卷积类算子描述符对象、卷积算子的权重Tensor、卷积算子的偏置Tensor、输入Tensor描述、输出Tensor描述作为输入，创建单算子执行器；"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果需要创建卷积算子与激活算子的融合算子执行器，还需要调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopdescriptor_createactivation",
                children: "HMS_HiAISingleOpDescriptor_CreateActivation"
              }), "，创建激活类算子描述符对象，然后调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
                children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
              }), "创建融合算子执行器。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["创建成功后，调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopdescriptor_destroy",
                children: "HMS_HiAISingleOpDescriptor_Destroy"
              }), "释放算子描述符对象，调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopoptions_destroy",
                children: "HMS_HiAISingleOpOptions_Destroy"
              }), "释放单算子创建配置对象。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建输入/输出Tensor。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_createfromtensordesc",
              children: "HMS_HiAISingleOpTensor_CreateFromTensorDesc"
            }), "，分别创建单算子输入Tensor、输出Tensor。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["创建成功后，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_destroy",
              children: "HMS_HiAISingleOpTensorDesc_Destroy"
            }), "释放Tensor描述符对象。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_getbuffer",
              children: "HMS_HiAISingleOpTensor_GetBuffer"
            }), "，获取输入/输出Tensor内部的Buffer对象。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopbuffer_getdata",
              children: "HMS_HiAISingleOpBuffer_GetData"
            }), "，获取申请好的输入/输出ION内存地址，可用于该单算子在模型整网推理中的输入写入、输出读取。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载单算子执行器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_getworkspacesize",
              children: "HMS_HiAISingleOpExecutor_GetWorkspaceSize"
            }), "，获取已创建的单算子执行器在执行推理计算时需要的ION内存工作空间大小。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopbuffer_create",
              children: "HMS_HiAISingleOpBuffer_Create"
            }), "，根据单算子执行器所需的ION内存工作空间大小创建足够的工作空间。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopbuffer_getdata",
              children: "HMS_HiAISingleOpBuffer_GetData"
            }), "，获取申请好的ION内存工作空间的地址。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_init",
              children: "HMS_HiAISingleOpExecutor_Init"
            }), "，使用工作空间内存地址、工作空间大小，加载创建好的单算子执行器。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行推理运算。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_execute",
            children: "HMS_HiAISingleOpExecutor_Execute"
          }), "，执行同步运算推理。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "卸载单算子执行器，释放资源。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_destroy",
              children: "HMS_HiAISingleOpTensor_Destroy"
            }), "，释放输入、输出Tensor对象"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopbuffer_destroy",
              children: "HMS_HiAISingleOpBuffer_Destroy"
            }), "，释放工作空间。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_destroy",
              children: "HMS_HiAISingleOpExecutor_Destroy"
            }), "，释放执行器对象。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例说明",
      children: "示例说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假定现在有一个深度卷积算子，输入维度为1x8x224x224，输入NCHW格式排布的float32类型数据，准备好NCHW排布的权重与偏置数据，调用单算子接口推理运算获得NCHW格式float32类型的输出可以参考如下示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CANNKit/hiai_single_op.h\"\n#include <cstdio>\n#include <cstdlib>\n#include <cstring>\n// 示例算子参数\n// 单算子卷积模式\nHiAI_SingleOpConvMode convMode = HIAI_SINGLEOP_CONV_MODE_DEPTHWISE;\nint64_t strides[2] = {1, 1};\nint64_t dilations[2] = {1, 1};\nint64_t pads[4] = {0, 0, 0, 0};\nint64_t groups = 1;\n// 单算子填充模式\nHiAI_SingleOpPadMode padMode = HIAI_SINGLEOP_PAD_MODE_SAME;\nint64_t filterDims[4] = {8, 1, 3, 3};\nsize_t filterDataSize = 8 * 1 * 3 * 3 * sizeof(float);\nvoid* filterData = malloc(filterDataSize);\nint64_t biasDims[1] = {8};\nsize_t biasDataSize = 8 * sizeof(float);\nvoid* biasData = malloc(biasDataSize);\nint64_t inputDims[4] = {1, 8, 224, 224};\nHiAI_SingleOpDataType inputDataType = HIAI_SINGLEOP_DT_FLOAT;\n// 单算子张量排布格式\nHiAI_SingleOpFormat inputFormat = HIAI_SINGLEOP_FORMAT_NCHW;\nbool inputIsVirtual = false;\n// 若不指定算子输出数据类型和排布格式，请设置数据类型为HIAI_SINGLEOP_DT_UNDEFINED，排布格式为HIAI_SINGLEOP_FORMAT_RESERVED\n// 在单算子创建完成后，调用HMS_HiAISingleOpExecutor_UpdateOutputTensorDesc，将输出Tensor描述更新为硬件适配最优的数据类型和排布格式\nint64_t outputDims[4] = {1, 8, 224, 224};\nHiAI_SingleOpDataType outputDataType = HIAI_SINGLEOP_DT_FLOAT;\nHiAI_SingleOpFormat outputFormat = HIAI_SINGLEOP_FORMAT_NCHW;\nbool outputIsVirtual = false;\n\n// 创建单算子执行器\nHiAI_SingleOpOptions* options = HMS_HiAISingleOpOptions_Create();\nHiAISingleOpDescriptor_ConvolutionParam convOpDescCreateParam = {convMode, {0}, {0}, {0}, groups, padMode};\nmemcpy(convOpDescCreateParam.strides, strides, 2 * sizeof(int64_t));\nmemcpy(convOpDescCreateParam.dilations, dilations, 2 * sizeof(int64_t));\nmemcpy(convOpDescCreateParam.pads, pads, 4 * sizeof(int64_t));\n// 创建卷积类的描述符对象\nHiAI_SingleOpDescriptor* convOpDesc = HMS_HiAISingleOpDescriptor_CreateConvolution(convOpDescCreateParam);\n// 创建一个单算子tensor描述对象，根据维度、数据类型和格式\nHiAI_SingleOpTensorDesc* filterDesc = HMS_HiAISingleOpTensorDesc_Create(filterDims, 4, HIAI_SINGLEOP_DT_FLOAT, HIAI_SINGLEOP_FORMAT_NCHW, false);\n// 创建一个单算子tensor对象\nHiAI_SingleOpTensor* filter = HMS_HiAISingleOpTensor_CreateFromConst(filterDesc, filterData, filterDataSize);\nHiAI_SingleOpTensorDesc* biasDesc = HMS_HiAISingleOpTensorDesc_Create(biasDims, 1, HIAI_SINGLEOP_DT_FLOAT, HIAI_SINGLEOP_FORMAT_NCHW, false);\nHiAI_SingleOpTensor* bias = HMS_HiAISingleOpTensor_CreateFromConst(biasDesc, biasData, biasDataSize);\nHiAI_SingleOpTensorDesc* inputDesc = HMS_HiAISingleOpTensorDesc_Create(inputDims, 4, inputDataType, inputFormat, inputIsVirtual);\nHiAI_SingleOpTensorDesc* outputDesc = HMS_HiAISingleOpTensorDesc_Create(outputDims, 4, outputDataType, outputFormat, outputIsVirtual);\n// 构造单算子卷积executor参数\nHiAI_SingleOpExecutorConvolutionParam executorCreateParam = {options, convOpDesc, inputDesc, outputDesc, filter, bias};\n// 创建卷积单算子executor\nHiAI_SingleOpExecutor* executor = HMS_HiAISingleOpExecutor_CreateConvolution(executorCreateParam);\nif (executor == nullptr) {\n    printf(\"HMS_HiAISingleOp executor create failed. \\n\");\n}\n// 对不需要的资源建议即时销毁\nHMS_HiAISingleOpTensorDesc_Destroy(&filterDesc);\nHMS_HiAISingleOpTensorDesc_Destroy(&biasDesc);\nHMS_HiAISingleOpOptions_Destroy(&options);\nHMS_HiAISingleOpDescriptor_Destroy(&convOpDesc);\nOH_NN_ReturnCode ret = HMS_HiAISingleOpTensor_Destroy(&filter);\nif (ret != OH_NN_SUCCESS) {\n    printf(\"HMS_HiAISingleOp filter destroy failed.\\n\");\n}\nret = HMS_HiAISingleOpTensor_Destroy(&bias);\nif (ret != OH_NN_SUCCESS) {\n    printf(\"HMS_HiAISingleOp bias destroy failed.\\n\");\n}\n\n// 创建输入/输出Tensor\nHiAI_SingleOpTensor* input = HMS_HiAISingleOpTensor_CreateFromTensorDesc(inputDesc);\nHMS_HiAISingleOpTensorDesc_Destroy(&inputDesc);\nHiAI_SingleOpTensor* output = HMS_HiAISingleOpTensor_CreateFromTensorDesc(outputDesc);\nHMS_HiAISingleOpTensorDesc_Destroy(&outputDesc);\n// 单算子输入Tensor和输出Tensor的内存必须为ION内存以节省拷贝开销\n// 创建输入Tensor成功后，可以使用以下方式获取输入Tensor内的ION内存地址进行输入数据填装\n// 输出Tensor内的ION内存地址也可以用以下方式获取，在推理计算成功后用于输出数据读取\nHiAI_SingleOpBuffer* inputBuffer = HMS_HiAISingleOpTensor_GetBuffer(input);\nvoid* inputData = HMS_HiAISingleOpBuffer_GetData(inputBuffer);\nsize_t inputDataSize = HMS_HiAISingleOpBuffer_GetSize(inputBuffer);\nmemset(inputData, 0, inputDataSize);\n\n// 查询单算子执行器所需的ION内存工作空间的字节大小\nsize_t workspaceSize = HMS_HiAISingleOpExecutor_GetWorkspaceSize(executor);\n// 若存在多个单算子执行器，各个执行器的工作空间内存可以复用，只需要申请所需的最大工作空间即可\nHiAI_SingleOpBuffer* workspaceBuffer = HMS_HiAISingleOpBuffer_Create(workspaceSize);\nvoid* workspace = HMS_HiAISingleOpBuffer_GetData(workspaceBuffer);\nret = HMS_HiAISingleOpExecutor_Init(executor, workspace, workspaceSize);\nif (ret != OH_NN_SUCCESS) {\n    printf(\"HMS_HiAISingleOp executor init failed.\\n\");\n}\n\n// 执行推理运算\nHiAI_SingleOpTensor* inputs[] = {input};\nHiAI_SingleOpTensor* outputs[] = {output};\nret = HMS_HiAISingleOpExecutor_Execute(executor, inputs, 1, outputs, 1);\nif (ret != OH_NN_SUCCESS) {\n    printf(\"HMS_HiAISingleOp executor execute failed.\\n\");\n}\n\n// 卸载单算子执行器，释放资源\nret = HMS_HiAISingleOpTensor_Destroy(&input);\nif (ret != OH_NN_SUCCESS) {\n    printf(\"HMS_HiAISingleOp input destroy failed.\\n\");\n}\nret = HMS_HiAISingleOpTensor_Destroy(&output);\nif (ret != OH_NN_SUCCESS) {\n    printf(\"HMS_HiAISingleOp output destroy failed.\\n\");\n}\nret = HMS_HiAISingleOpBuffer_Destroy(&workspaceBuffer);\nif (ret != OH_NN_SUCCESS) {\n    printf(\"HMS_HiAISingleOp workspaceBuffer destroy failed.\\n\");\n}\nret = HMS_HiAISingleOpExecutor_Destroy(&executor);\nif (ret != OH_NN_SUCCESS) {\n    printf(\"HMS_HiAISingleOp executor destroy failed.\\n\");\n}\nfree(filterData);\nfree(biasData);\n"
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
533216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799574-1117879e466bfca035365bd994874e63.jpg");

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