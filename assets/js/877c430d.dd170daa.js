"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["238006"], {
488586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_aipp_deployment_cannkit_aipp_deployment_md_877_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-on-device-deployment-cannkit-aipp-deployment-cannkit-aipp-deployment-md-877.json
var site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_aipp_deployment_cannkit_aipp_deployment_md_877_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-on-device-deployment/cannkit-aipp-deployment/cannkit-aipp-deployment","title":"AIPP部署","description":"基本概念","source":"@site/docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-aipp-deployment/cannkit-aipp-deployment.md","sourceDirName":"cann-kit-guide/cannkit-on-device-deployment/cannkit-aipp-deployment","slug":"/cann-kit-guide/cannkit-on-device-deployment/cannkit-aipp-deployment/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-aipp-deployment/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"AIPP部署","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-aipp-deployment","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"模型推理","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-model-inference/"},"next":{"title":"异构","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-optimization/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-aipp-deployment/cannkit-aipp-deployment.md


const frontMatter = {
	title: 'AIPP部署',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-aipp-deployment',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'AIPP部署';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
        id: "aipp部署",
        children: "AIPP部署"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP部署是指动态AIPP推理时开发者按需配置动态AIPP参数，从而达到使能AIPP功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109934)/* ["default"] */.A) + "",
        width: "525",
        height: "41"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为AIPP参数设置接口，如要使用更丰富的设置和查询接口，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit",
        children: "API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " CANN Kit模型推理AIPP设置相关接口功能介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HiAI_AippParam* HMS_HiAIAippParam_Create(uint32_t batchNum);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态AIPP配置实例创建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void HMS_HiAIAippParam_Destroy(HiAI_AippParam** aippParam);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态AIPP配置实例销毁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetInputIndex(HiAI_AippParam* aippParam, uint32_t inputIndex);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置动态AIPP配置作用于输入上的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetInputAippIndex(HiAI_AippParam* aippParam, uint32_t inputAippIndex);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置动态AIPP配置作用于该输入的多个输出分支上的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetInputFormat(HiAI_AippParam* aippParam, HiAI_ImageFormat inputFormat);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输入图片的格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetInputShape(HiAI_AippParam* aippParam, uint32_t srcImageW, uint32_t srcImageH);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输入图片的原始宽高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetCscConfig(HiAI_AippParam* aippParam, HiAI_ImageFormat inputFormat, HiAI_ImageFormat outputFormat, HiAI_ImageColorSpace space);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片色域转换参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetChannelSwapConfig(HiAI_AippParam* aippParam, bool rbuvSwapSwitch, bool axSwapSwitch);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片通道交换参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetCropConfig(HiAI_AippParam* aippParam, uint32_t batchIndex, uint32_t startPosW, uint32_t startPosH, uint32_t croppedW, uint32_t croppedH);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片裁剪参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetResizeConfig(HiAI_AippParam* aippParam, uint32_t batchIndex, uint32_t resizedW, uint32_t resizedH);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片缩放大小参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetPadConfig(HiAI_AippParam* aippParam, uint32_t batchIndex, uint32_t leftPadSize, uint32_t rightPadSize, uint32_t topPadSize, uint32_t bottomPadSize);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片左右上下填充的像素数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetChannelPadding(HiAI_AippParam* aippParam, uint32_t batchIndex, uint32_t paddingValues[], uint32_t channelCount);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置通道填充值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetRotationAngle(HiAI_AippParam* aippParam, uint32_t batchIndex, float rotationAngle);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片旋转参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetDtcMeanPixel(HiAI_AippParam* aippParam, uint32_t batchIndex, uint32_t meanPixel[], uint32_t channelCount);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片数据类型转换的通道像素平均值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetDtcMinPixel(HiAI_AippParam* aippParam, uint32_t batchIndex, float minPixel[], uint32_t channelCount);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片数据类型转换的通道像素最小值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetDtcVarReciPixel(HiAI_AippParam* aippParam, uint32_t batchIndex, float varReciPixel[], uint32_t channelCount);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片数据类型转换的通道像素方差。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAITensor_SetAippParams(NN_Tensor* tensor, HiAI_AippParam* aippParams[], size_t aippNum);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给输入Tensor设置AIPP参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_create",
            children: "HMS_HiAIAippParam_Create"
          }), "创建动态AIPP配置实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置与计算图关联的配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setinputindex",
              children: "HMS_HiAIAippParam_SetInputIndex"
            }), "设置此动态AIPP配置所在输入的索引。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setinputaippindex",
              children: "HMS_HiAIAippParam_SetInputAippIndex"
            }), "设置此动态AIPP配置所在某个输入的输出分支索引。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置动态AIPP输入图片相关配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setinputformat",
              children: "HMS_HiAIAippParam_SetInputFormat"
            }), "设置输入图片的格式。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setinputshape",
              children: "HMS_HiAIAippParam_SetInputShape"
            }), "设置输入图片原始宽高。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者按需设置以下动态AIPP功能参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setchannelswapconfig",
              children: "HMS_HiAIAippParam_SetChannelSwapConfig"
            }), "设置通道交换参数。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setcscconfig",
              children: "HMS_HiAIAippParam_SetCscConfig"
            }), "设置图片色域转换参数。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setcropconfig",
              children: "HMS_HiAIAippParam_SetCropConfig"
            }), "设置图片裁剪参数。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setresizeconfig",
              children: "HMS_HiAIAippParam_SetResizeConfig"
            }), "设置图片缩放大小参数。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setpadconfig",
              children: "HMS_HiAIAippParam_SetPadConfig"
            }), "设置图片填充大小参数。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setchannelpadding",
              children: "HMS_HiAIAippParam_SetChannelPadding"
            }), "设置各通道上的填充值参数。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setrotationangle",
              children: "HMS_HiAIAippParam_SetRotationAngle"
            }), "设置旋转角度。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setdtcmeanpixel",
              children: "HMS_HiAIAippParam_SetDtcMeanPixel"
            }), "设置数据类型转换通道像素平均值。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setdtcminpixel",
              children: "HMS_HiAIAippParam_SetDtcMinPixel"
            }), "设置数据类型转换通道像素最小值。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setdtcvarrecipixel",
              children: "HMS_HiAIAippParam_SetDtcVarReciPixel"
            }), "设置数据类型转换通道像素方差。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将AIPP配置设置到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensor/capi-neuralnetworkruntime-nn-tensor",
            children: "NN_Tensor"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过构造输入输出Tensor后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaitensor_setaippparams",
            children: "HMS_HiAITensor_SetAippParams"
          }), "给输入Tensor设置AIPP参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行模型推理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_destroy",
            children: "HMS_HiAIAippParam_Destroy"
          }), "销毁动态AIPP配置实例。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例说明",
      children: "示例说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假定当前有一个模型，训练时采用的训练集为RGB888的图片，使能了动态AIPP之后，可以接收YUYV类型的图片作为模型推理的输入。当用于模型推理的图片尺寸与训练集不一致时，还可以使用AIPP的裁剪、缩放和填充功能，改变输入图片尺寸。以下示例代码基于NDK接口，实现AIPP的裁剪、缩放和填充等功能，将一张YUYV尺寸为480x480的图片预处理为224x224的输入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"neural_network_runtime/neural_network_core.h\"\n#include \"CANNKit/hiai_aipp_param.h\"\n#include \"CANNKit/hiai_tensor.h\"\n#include <vector>\n\nconstexpr uint32_t BATCH_NUM = 1;\n// 创建一个batch数为1的动态aipp配置实例\nHiAI_AippParam* aippPara = HMS_HiAIAippParam_Create(BATCH_NUM);\n// 在多个输入情况下，设置索引以确定该AippParam对象作用于第几个输入\nuint32_t inputIndex = 0;\nOH_NN_ReturnCode ret = HMS_HiAIAippParam_SetInputIndex(aippPara, inputIndex);\n// 在data有多个输出分支时，设置AippParam对象作用域该输入的第几个输出分支\nuint32_t validInputAippIndex = 0;\nHMS_HiAIAippParam_SetInputAippIndex(aippPara, validInputAippIndex);\n// 设置AippParam对象的输入图像格式\nHMS_HiAIAippParam_SetInputFormat(aippPara, HIAI_YUV420SP_U8);\n// 设置AippParam对象的输入图像宽高\nHMS_HiAIAippParam_SetInputShape(aippPara, 224, 224);\n// 设置AippParam对象的CSC色域转换参数\nHMS_HiAIAippParam_SetCscConfig(aippPara, HIAI_YUV420SP_U8, HIAI_RGB888_U8, HIAI_JPEG);\n// 设置AippParam对象RB/UV通道交换\nHMS_HiAIAippParam_SetChannelSwapConfig(aippPara, true, false);\n// 设置AippParam对象第0个索引batch的crop参数\nHMS_HiAIAippParam_SetCropConfig(aippPara, 0, 0, 0, 100, 100);\n// 设置AippParam对象第0个索引batch的resize参数\nHMS_HiAIAippParam_SetResizeConfig(aippPara, 0, 110, 110);\n// 设置AippParam对象第0个索引batch的通道padding填充值\nHMS_HiAIAippParam_SetPadConfig(aippPara, 0, 1, 1, 1, 1);\n// 设置AippParam对象第0个索引batch的旋转角度\nHMS_HiAIAippParam_SetRotationAngle(aippPara, 0, 90.0);\n// 设置AippParam对象第0个batch的数据类型转换通道像素平均值\nconstexpr unsigned int chnNum = 4;\nunsigned int pixelMeanPara[chnNum] = {1, 2, 3, 4};\nHMS_HiAIAippParam_SetDtcMeanPixel(aippPara, 0, pixelMeanPara, chnNum);\n\n// 准备输入Tensor\nsize_t inputCount = 0;\nret = OH_NNExecutor_GetInputCount(executor, &inputCount); // 创建executor可参考CANN Kit Codelab\nstd::vector<NN_Tensor *> inputTensors;\nfor (size_t i = 0; i < inputCount; ++i) {\n    // 创建executor可参考CANN Kit Codelab\n    NN_TensorDesc* desc = OH_NNExecutor_CreateInputTensorDesc(executor, i);\n    NN_Tensor* tensor = OH_NNTensor_Create(deviceID, desc); // 获取deviceID可参考CANN Kit Codelab\n    inputTensors.push_back(tensor);\n}\n// 准备aipp输入Tensor\nHiAI_AippParam* aippParas[1] = {aippPara};\nNN_Tensor* tensor = nullptr;\nret = HMS_HiAITensor_SetAippParams(tensor, aippParas, 1);\nif (ret != OH_NN_SUCCESS ) {\n    return;\n}\ninputTensors.push_back(tensor);\n\n// 准备输出Tensor\nsize_t outputCount = 0;\nret = OH_NNExecutor_GetOutputCount(executor, &outputCount); // 创建executor可参考CANN Kit Codelab\nstd::vector<NN_Tensor *> outputTensors;\nfor (size_t i = 0; i < outputCount; i++) {\n    NN_TensorDesc* desc = OH_NNExecutor_CreateOutputTensorDesc(executor, i); // 创建executor可参考CANN Kit Codelab\n    NN_Tensor* tensor = OH_NNTensor_Create(deviceID, desc); // 获取deviceID可参考CANN Kit Codelab\n    outputTensors.push_back(tensor);\n}\n// 执行推理\nret = OH_NNExecutor_RunSync(executor_, inputTensors.data(), 1, outputTensors.data(), 1);\nif (ret != OH_NN_SUCCESS ) {\n    return;\n}\nif (aippPara != nullptr) {\n    HMS_HiAIAippParam_Destroy(&aippPara);\n}\n"
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
109934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959220-81ad39a9fd235d7d23dca3b674844756.png");

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