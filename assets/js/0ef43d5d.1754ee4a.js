"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["364443"], {
938500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_model_zoo_cannkit_model_zoo_md_0ef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-optimization-cannkit-model-zoo-cannkit-model-zoo-md-0ef.json
var site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_model_zoo_cannkit_model_zoo_md_0ef_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo/cannkit-model-zoo","title":"Model Zoo","description":"概述","source":"@site/docs/cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo/cannkit-model-zoo.md","sourceDirName":"cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo","slug":"/cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Model Zoo","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-model-zoo","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-preparations/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-lightweight-tool-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo/cannkit-model-zoo.md


const frontMatter = {
	title: 'Model Zoo',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-model-zoo',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Model Zoo';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "Model Zoo模型下载",
  "id": "model-zoo模型下载",
  "level": 2
}, {
  "value": "CANN算子性能指导",
  "id": "cann算子性能指导",
  "level": 2
}, {
  "value": "NN算子",
  "id": "nn算子",
  "level": 3
}, {
  "value": "Math算子",
  "id": "math算子",
  "level": 3
}, {
  "value": "Array算子",
  "id": "array算子",
  "level": 3
}, {
  "value": "Detection算子",
  "id": "detection算子",
  "level": 3
}, {
  "value": "Image算子",
  "id": "image算子",
  "level": 3
}, {
  "value": "性能友好计算结构",
  "id": "性能友好计算结构",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "model-zoo",
        children: "Model Zoo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model Zoo提供了可直接调用的硬件最优模型库，集成图片分类、目标检测、语义分割、超分等典型场景的网络模型，包含CANN性能调优使用指导、性能友好模型结构和推荐指数。帮助开发者快速了解算子的参数取值如何在硬件上获得更好的性能和能效收益，以及如何优化模型结构可以实现高性能与低功耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "model-zoo模型下载",
      children: "Model Zoo模型下载"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模型下载中，.caffemodel、.pb、.onnx文件是原始浮点模型，基于相关论文实现，并进行了NPU硬件亲和性调整。因此，这些模型的输入尺寸可能与论文中描述的尺寸有所差异。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [".om是标准IR算子构建的OM模型文件，其中quant8_8.om是量化生成的OM模型文件，所有模型可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-appendixes/cannkit-visualization-tool-usage",
        children: "Netron工具"
      }), "可视化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model Zoo中模型的名称、性能、模型下载信息如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络模型（单batch）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "浮点性能[1]（耗时ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "量化性能[1]（耗时ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模型下载"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SHA256校验码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参考[2]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alexnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.92"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/42/v3/eyPGmahYTnKtskcw6wC7yg/hwhiaimodelzoo-alexnet-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T083009Z&HW-CC-Expire=315360000&HW-CC-Sign=9F85C5C4E2A049C8F6502D37F45E9FF743213331FA837B19F492C961451F5C1E",
              children: "CAFFE&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7b01980acf0d16dadc6c9c326cdf757d2166928ae49cfd4091df154a5c512640"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1404.5997",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resnet18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/2b/v3/-3ps6ob3QO6CSom10fi0Gw/hwhiaimodelzoo-resnet18-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T081504Z&HW-CC-Expire=315360000&HW-CC-Sign=1E7889E8F15927FF8198A949D5D9B42CC3CB81F4CE9A1F341CB4E90B77346E45",
              children: "CAFFE&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4aa7caaa112f5280cb5c0ab5eed6edf84a16fe9a0b92b9ee333a808c9f07e886"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1512.03385",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VGG16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16.56"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/d3/v3/iCUHL864TRKbqKINLlFKnQ/hwhiaimodelzoo-vgg16-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T081340Z&HW-CC-Expire=315360000&HW-CC-Sign=4F2EA9998432D7CD60710CD7690E3554C71512D6AA74F2E01FAD30A9CD4AC70B",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f9193765889077e5997ddc8c1e75a563c8a1205e613da9634d3d83277962dd42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1409.1556",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VGG19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.73"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/21/v3/gd9SP5_hRG2JfFW-8tgC0Q/hwhiaimodelzoo-vgg19-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T080831Z&HW-CC-Expire=315360000&HW-CC-Sign=C156643FD0B8EC4C829972E8C460EA8FF1CB3AEEBCD7DADD5CD031E98FC301A5",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d19f363602740ff5859380c40ca6f0bed0cb3744f469873cdf862c71c7007a94"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1409.1556",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resnet50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/10/v3/Q-dHdmq1TQ6FzYOy60u1VQ/hwhiaimodelzoo-resnet50-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T081405Z&HW-CC-Expire=315360000&HW-CC-Sign=BB6F826B1072CDDBA83C6D7351CEF356327EFF7D97EE84C788F9621E1A9A4CE6",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6dedf4b5c3bfdaf70410236f1f73d942a5231f217e18c51918ba39b3b740b2df"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1512.03385",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inception_v3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.56"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.76"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/4f/v3/qtjKvj1sSoK8_ySu6xLE2g/hwhiaimodelzoo-inceptionv3-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082107Z&HW-CC-Expire=315360000&HW-CC-Sign=2788E8301870BD3C1AC15B845CF204B27BA412C976A9670B1DDF984A8AAA0026",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d06c88a79acd19b10d5f7eddaae6aba3c02372cfdb036296b845aa3a9ccf46be"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1512.00567",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inception_v4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/5c/v3/HCh4-WFvR6iw4egm2vAvxQ/hwhiaimodelzoo-inceptionv4-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082010Z&HW-CC-Expire=315360000&HW-CC-Sign=194B3E4976AE798E8A887AA69BF9894D30EDA727BF8B9B06428892A2A9BD9918",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e042f489e6915eb6de5daa4b3200462e76f1bedca7147e2a19e8311a4b05afde"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1602.07261",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inception_Resnet_v2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.91"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/70/v3/Hsox_-bbR9a5EDFg8_mn6A/hwhiaimodelzoo-inceptionresnetv2-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T081911Z&HW-CC-Expire=315360000&HW-CC-Sign=DB418566ED9B3AA260AAA1D589A13BCC250E2F809BBFD3A67D400DCE1C6DFF16",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "229164e49753126357f4a587694ca925afa60d1bfec184dba00085d69b5fc47b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1602.07261",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobilenet_v1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/2c/v3/KzMd67g3TSqsCjocI_WCVQ/hwhiaimodelzoo-mobilenetv1-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082701Z&HW-CC-Expire=315360000&HW-CC-Sign=E1B233C47BA93FEE1747A38739840277730B54FC0739D78D79277D72FF5D77BA",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "864ef1d651e7f2cb9de69ce34d81e40783bdac47069b6db22aefb6f4ae17f24b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1704.04861",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobilenet_v2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/2/v3/ZSK31G6DQQCZdPN46ialkA/hwhiaimodelzoo-mobilenetv2-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082301Z&HW-CC-Expire=315360000&HW-CC-Sign=8C37AE09586B0DD74C079AE4C3E07E376F66015E4DED2CB1367F22869B92623E",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "362c0169917122e45f4c5aed69ad3b9c8509b51a0531e6912360eff6c8b81cbc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1801.04381",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobilenet_v2_1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/2b/v3/b6CQs3z-TgyxhL2RmM99Gg/hwhiaimodelzoo-mobilenetv2v1p4-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082201Z&HW-CC-Expire=315360000&HW-CC-Sign=638FA2EBD56970A77CEA8ACE1075E6C43AC69890FE7DB3B9FB705E822C10BA15",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8f1a05a83e813fac16e958ad5436569fe83f75f88137819d52ce2e268ad04126"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1704.04861",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobilenet_v3_Large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/c1/v3/1tgbS5yhSHCVSrT3EZMk8Q/hwhiaimodelzoo-mobilenetv3-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082402Z&HW-CC-Expire=315360000&HW-CC-Sign=991EF094DEC163F2A7E32FBAB61DC3DF6C1D26932357D76B452B725A73CF0B27",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "086640ff192629b6dba33d905ddb0925d612e395703948c6c7221f2e4126b85d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1905.02244",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Googlenet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34.69"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/7e/v3/XwBoZqjZSlGr8Qr90k3acA/hwhiaimodelzoo-googlenet-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082502Z&HW-CC-Expire=315360000&HW-CC-Sign=7F5D53B22154CDE1B350367A5A31EAF81780D49DFF0D6C8E070EAAF973958DAC",
              children: "ONNX&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "97ef0325be2c3b8824a903abaeea943260d2f349da63d193168c96eff735ad0e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1409.4842",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片分类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Squeezenet_v1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/22/v3/LsUOWWXqS-Cy7BhWCL6k7w/hwhiaimodelzoo-squeezenetv1-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T081800Z&HW-CC-Expire=315360000&HW-CC-Sign=7A8C3CE1BDD91367BB92DD6A6DDBC3D2F9CE5E1C2C716E4C5B9D687C96997F42",
              children: "ONNX&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e20be44bdaa30b9fa4a22ef876c1e7bd88db49b5d063992ef1595b34d3544997"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1602.07360",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "目标检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSD_mobilenetv2_voc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/ee/v3/-DV4ExjOQv6dZPxNyX0UIg/hwhiaimodelzoo-mobilenetv2ssd-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082602Z&HW-CC-Expire=315360000&HW-CC-Sign=9E6FD16BC06F1EE732447C5CA9A0AAC2E559DF42593D22A517CEC6F94D990AB3",
              children: "CAFFE&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1d273130a07a6f888f6df1088b478049da9a961a3dbeaca7bfa92e616f0f01e9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1801.04381",
              children: "论文1&实现1"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1512.02325",
              children: "论文2&实现2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "目标检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yolo_v5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.74"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/b6/v3/XBnjg_e5TMyG31kCCbdp1Q/hwhiaimodelzoo-yolo-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T081602Z&HW-CC-Expire=315360000&HW-CC-Sign=F31AC615FBD3DE8001EB12B9F8D5718EE3BA0BE1DDECF60A51E6901D24EE8E71",
              children: "ONNX&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "83a205d70fcd9b31c13530da0b8752a6976b125b02ac07091fd088f58cd5a80f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1804.02767",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语义分割"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "131.23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "62.76"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/d8/v3/ZDtRfBLDR86G-UakQBtEPA/hwhiaimodelzoo-fcn-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082927Z&HW-CC-Expire=315360000&HW-CC-Sign=0974C70798D459DBFD9542D65C72FB8B9BD583C14F52837BFED5DABB405719EA",
              children: "CAFFE&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0cd87a51c1ea978a68e9cd4790106e99d910f78d5e68ec06e2bdd637aae5a73c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1605.06211",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语义分割"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeepLab_v3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17.40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13.87"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/11/v3/qUSCbzzPT82XhxA1bC4HAQ/hwhiaimodelzoo-deeplabv3-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T083100Z&HW-CC-Expire=315360000&HW-CC-Sign=230AD01AEDBE1916683B6BB35BDED9B363EB06276BDF98DA64B2C7EF9B6CC285",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "381f830f6b0154bf086dbc5b15575465a34c1b3d233a6d27bc417077832697c7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1706.05587",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VDSR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17.71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/c6/v3/u6c2DYcSQQGHp_-K5pLVIg/hwhiaimodelzoo-vdsr-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T081700Z&HW-CC-Expire=315360000&HW-CC-Sign=358520AA2A16D4C2D7CA6703692D2D1209BFDFC38414C55AF442F89F9ACA6896",
              children: "CAFFE&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bf5a699ea55b2d2e42ac40884f2697d807b5b3f37e655ecb342e873c6ba6b844"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1511.04587",
              children: "论文&实现"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FSRCNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17.24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17.02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/3d/v3/K_eT1fFuQM6vi9zsRe2CDQ/hwhiaimodelzoo-fsr-100.520.020.011.zip?HW-CC-KV=V1&HW-CC-Date=20230423T082800Z&HW-CC-Expire=315360000&HW-CC-Sign=794BA667B6CAC909B5E8EBD672D638C4160971C62FAB237535417E0849713A92",
              children: "TF&OM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "03775c806d8d166fd29753ea8eaa3db377246fa469487b7e161a9e405a6ffa1c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://arxiv.org/abs/1608.00367",
              children: "论文&实现"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(462104)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[1] 此性能数据测试基于kirin 9000芯片的华为手机。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[2] 原始模型文件是参考论文和实现中的模型训练而来。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除Model Zoo中推荐的网络模型，还可以构建自定义的网络模型。性能优势的算子和计算结构如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cann算子性能指导",
      children: "CANN算子性能指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从易用性角度上来说，提供的算子功能不存在限制，但是从性能的使用角度上来说，是基于算子实现方式给出对应的性能使用指导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nn算子",
      children: "NN算子"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IR算子"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "性能使用指导"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐使用指数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Activation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HardSwish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRelu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BNInference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。  Conv(depthwise)+Bn组合使用时，会进行图融合优化抵消。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当Cin和Cout都是16的倍数时性能最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QuantizedConvolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当Cin和Cout都是32的倍数时性能最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ConvTranspose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 当Cin和Cout都是16的倍数时性能最优。  - 当前针对kernel 1*1，2*2，3*3，8*8优化性能最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BiasAdd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。  Conv(depthwise)+BiasAdd组合使用时，会进行图融合优化抵消。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eltwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LRN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件较优。  - 计算过程中计算均值方差，计算量较大，性能差于batchNorm。  - 主要用于图像增强，对精度计算较敏感，NPU使用FP16计算存在精度风险。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ConvolutionDepthwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QuantizedConvolutionDepthwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FullyConnection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能受DDR带宽限制，非算力受限算子，算法设计时合理配置权重大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QuantizedFullyConnection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能受DDR带宽限制，非算力受限算子，算法设计时合理配置权重大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PoolingD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。  Conv(depthwise)+Scale组合使用时，会进行图融合优化抵消。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ShuffleChannel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ShuffleChannelV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为了适配支持ANN场景算子，性能较差，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。  4维输入，axis=1，基于C通道做softmax时性能最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TopK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为了适配支持ANN场景算子，性能较差，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LogSoftmax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shape推导类算子，模型构建时即可抵消。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ScatterNd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非规则数据搬移，性能较差，不建议模型过多使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LogicalXor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AxisAlignedBboxTransform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SVDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReduceMean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LayerNorm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。  - 计算过程中计算均值方差，计算量较大，性能差于batchNorm。  - 主要用于图像增强，对精度计算较敏感，NPU使用FP16计算存在精度风险。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "InstanceNorm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件较优。  - 计算过程中计算均值方差，计算量较大，性能差于batchNorm。  - 主要用于图像增强，对精度计算较敏感，NPU使用FP16计算存在精度风险。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PriorBox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LSTM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件较优，功能支持较窄。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "math算子",
      children: "Math算子"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IR算子"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "性能使用指导"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐使用指数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expm1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ceil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log1p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LogicalAnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LogicalNot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reciprocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sqrt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Square"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CastT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FloorMod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GreaterEqual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greater"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Less"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MatMul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RealDiv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能较差，建议等效成mul或者Reciprocal+mul。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rsqrt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型构建时最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Acos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LogicalOr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReduceProdD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReduceSum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArgMaxExt2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FloorDiv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能较差，不建议使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NotEqual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LessEqual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SquaredDifference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Atan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BatchMatMul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ClipByValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L2Normalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReduceMax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReduceMin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kirin 9000芯片的手机性能较优，其余芯片的手机无性能优化，仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "array算子",
      children: "Array算子"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IR算子"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "性能使用指导"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐使用指数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ConcatD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。  当Cin是16的倍数且Cout是16的倍数时，做图融合抵消，性能最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FakeQuantWithMinMaxVars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reshape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。  有些场景算子会被融合抵消掉。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SplitD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。  当Cin是16的倍数且Cout是16的倍数时，做图融合抵消，性能最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SplitV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unpack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flatten"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ExpandDims"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shape推导类算子，模型构建时即可抵消。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GatherV2D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GatherNd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SpaceToDepth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DepthToSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，大部分场景性能较差。  针对4宫格场景（Cin=4，block=1）有特殊优化，性能较优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StridedSlice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SpaceToBatchND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BatchToSpaceND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shape推导类算子，模型构建时即可抵消。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Select"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅支持功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PadV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "针对HW方向补0的场景性能较优。  其他场景由于乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Squeeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shape推导类算子，模型构建时即可抵消。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "针对HW方向补0的场景性能较优。  其他场景由于乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MirrorPad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其他场景由于乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OneHot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其他场景由于乱序的数据重排，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shape推导类算子，模型构建时即可抵消。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dequantize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detection算子",
      children: "Detection算子"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IR算子"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "性能使用指导"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐使用指数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于乱序的数据重排，虽然做了相关优化，但是硬件不适合过多此类操作。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSDDetectionOutput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前性能最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image算子",
      children: "Image算子"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IR算子"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "性能使用指导"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐使用指数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ImageData  DynamicImageData  ImageCrop  ImageChannelSwap  ImageColorSpaceConvertion  ImageResize  ImageDataTypeConversion  ImagePadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIPP相关图形处理算子，性能硬件最优。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CropAndResize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅功能支持，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResizeBilinear  ResizeBilinearV2  Interp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大部分场景性能硬件最优，个别场景待优化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResizeNearestNeighbor  Upsample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大部分场景性能硬件最优，个别场景待优化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅功能支持，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NonMaxSuppressionV3D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅功能支持，性能较差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "性能友好计算结构",
      children: "性能友好计算结构"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "应用场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐指数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AlexNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全连接层权重较大，推理过程带宽受限，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VGG16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全连接层权重较大，推理过程带宽受限，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VGG19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全连接层权重较大，推理过程带宽受限，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet18/34/50/101/152"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型权重大小适中，硬件算力利用率接近100%，ResNet50可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GoogleNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件算力利用率接近75%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InceptionV3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件算力利用率接近85%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InceptionV4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件算力利用率接近85%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inception_Resnet_v2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件算力利用率接近90%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Xception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件算力利用率接近85%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MobileNet_v1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型权重大小适中，硬件算力利用率接近95%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MobileNet_v2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型权重大小适中，硬件算力利用率接近95%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MobileNet_v3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型权重大小适中，硬件算力利用率接近95%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SqueezeNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型权重大小适中，硬件算力利用率接近95%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DenseNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型权重大小适中，硬件算力利用率接近95%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ShuffleNet_v1  ShuffleNet_v2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存在大量shuffleChannel操作，本身是内存搬移操作，非计算受限。  此网络为带宽受限网络，shuffleChannel仅支持功能，性能不保证较优。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resnext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近85%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EfficientNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型权重大小适中，硬件算力利用率接近95%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分类网络"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SENet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近75%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "目标检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster_RCNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近85%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "目标检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近85%，当前仅支持通过omg流程生成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "目标检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近90%，后处理不在模型中，由算法单独完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语义分割"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件算力利用率接近85%，由于模型计算量较大，实际部署时要做参数裁剪，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载 。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语义分割"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeepLabV3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件算力利用率接近60%，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语义分割"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近60%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语义分割"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MaskRcnn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近80%（仅限tf->om版本，IR对接方式不支持）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语义分割"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSPNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持pyramid pooling算子，可以通过多个pool等效，性能一般。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VDSR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件算力利用率接近85%，可以达到实时超分要求，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FSRCNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件算力利用率接近70%，可以达到部分实时超分要求，可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#model-zoo%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",
              children: "Model Zoo"
            }), "中下载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRCNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近70%，可以达到部分实时超分要求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DnCNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近65%，计算量较大，可以达到部分实时超分要求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRCN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近65%，计算量较大，可以达到部分实时超分要求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRRN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近60%，计算量较大，可以达到部分实时超分要求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EnhanceNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近60%，计算量较大，可以达到部分实时超分要求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语音语义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能支持较为单一。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语音语义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSTM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能支持较为单一。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语音语义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近70%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语音语义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "☆☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件算力利用率接近70%。"
          })]
        })]
      })]
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
462104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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