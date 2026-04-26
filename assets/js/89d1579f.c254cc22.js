"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["99747"], {
188771(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_matrix_programming_high_level_api_cannkit_basic_knowledge_cannkit_basic_knowledge_md_89d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-operator-implementation-cannkit-matrix-programming-high-level-api-cannkit-basic-knowledge-cannkit-basic-knowledge-md-89d.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_matrix_programming_high_level_api_cannkit_basic_knowledge_cannkit_basic_knowledge_md_89d_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge/cannkit-basic-knowledge","title":"基础知识","description":"本节内容为使用高阶API进行矩阵乘法的编程指导。使用高阶API进行实际的矩阵编程时，需要通过Matmul查看确认接口支持的产品型号。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge/cannkit-basic-knowledge.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"基础知识","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-knowledge","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"矢量编程","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-vector-programming/"},"next":{"title":"矩阵编程算子实现","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-matrix-programming-operator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge/cannkit-basic-knowledge.md


const frontMatter = {
	title: '基础知识',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-knowledge',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '基础知识';

const assets = {

};



const toc = [{
  "value": "矩阵乘法概述",
  "id": "矩阵乘法概述",
  "level": 2
}, {
  "value": "矩阵乘法数据流",
  "id": "矩阵乘法数据流",
  "level": 2
}, {
  "value": "数据格式",
  "id": "数据格式",
  "level": 2
}, {
  "value": "数据分块(Tiling)",
  "id": "数据分块tiling",
  "level": 2
}, {
  "value": "多核切分",
  "id": "多核切分",
  "level": 3
}, {
  "value": "核内切分",
  "id": "核内切分",
  "level": 3
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "基础知识",
        children: "基础知识"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(20717)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节内容为使用高阶API进行矩阵乘法的编程指导。使用高阶API进行实际的矩阵编程时，需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-matmul-usage-description",
        children: "Matmul"
      }), "查看确认接口支持的产品型号。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "矩阵乘法概述",
      children: "矩阵乘法概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MatMul的计算公式为：C = A * B + bias，其示意图如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A、B为源操作数，A为左矩阵，形状为[M, K]；B为右矩阵，形状为[K, N]。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C为目的操作数，存放矩阵乘结果的矩阵，形状为[M, N]。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bias为矩阵乘偏置，形状为[1, N]。对A*B结果矩阵的每一行都采用该bias进行偏置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(298221)/* ["default"] */.A) + "",
        width: "528",
        height: "138"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "矩阵乘法数据流",
      children: "矩阵乘法数据流"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在了解矩阵乘法数据流之前，需要先回顾一下几个重要的存储", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "逻辑位置"
        })
      }), "的概念："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：A1，用于存放整块A矩阵，可类比CPU多级缓存中的二级缓存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：B1，用于存放整块B矩阵，可类比CPU多级缓存中的二级缓存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：A2，用于存放切分后的小块A矩阵，可类比CPU多级缓存中的一级缓存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：B2，用于存放切分后的小块B矩阵，可类比CPU多级缓存中的一级缓存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结果数据的存放位置：CO1，用于存放小块结果C矩阵，可理解为Cube Out。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结果数据的存放位置：CO2，用于存放整块结果C矩阵，可理解为Cube Out。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：VECCALC，一般在计算需要临时变量时使用此位置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "矩阵乘法数据流"
        })
      }), "指矩阵乘的输入输出在各存储位置间的流向。逻辑位置的数据流向如下图所示（为了简化描述，没有列出bias）："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A矩阵从输入位置到A2的数据流如下（输入位置可以是GM或者VECOUT）：GM->A2，GM->A1->A2；VECOUT->A1->A2。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B矩阵从输入位置到B2的数据流如下（输入位置可以是GM或者VECOUT）：GM->B2，GM->B1->B2；VECOUT->B1->B2。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "完成A2*B2=CO1计算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CO1数据汇聚到CO2：CO1->CO2。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从CO2到输出位置（输出位置可以是GM或者VECIN）：CO2->GM/CO2->VECIN。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(88655)/* ["default"] */.A) + "",
        width: "528",
        height: "229"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据格式",
      children: "数据格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在完成Matmul矩阵乘法时，涉及到两种分形格式ND和NZ。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ND：普通格式，N维张量。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NZ：为满足AICore中Cube计算单元高性能计算的需要，引入该特殊格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ND –> NZ的变换过程为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(..., N，H, W )->pad->(..., N, H1*H0, W1*W0)->reshape->(..., N, H1, H0, W1, W0)->transpose->(..., N, W1, H1, H0, W0)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图所示 （W，H）大小的矩阵被分为（H1*W1）个分形，按照column major排布，形状如N字形；每个分形内部有（H0*W0）个元素，按照row major排布，形状如z字形。所以这种数据格式称为NZ（大N小Z）格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(406942)/* ["default"] */.A) + "",
            width: "528",
            height: "224"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面我们再通过一个具体的例子来深入理解ND和NZ格式的数据排布区别。假设分形格式为2*2，如下图所示4*4的矩阵，ND和NZ格式存储两种情况下，数据在内存中的排布格式分别为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ND：0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NZ：0, 1, 4, 5, 8, 9, 12, 13, 2, 3, 6, 7, 10, 11, 14, 15"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(731360)/* ["default"] */.A) + "",
            width: "517",
            height: "163"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据分块tiling",
      children: "数据分块(Tiling)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多核切分",
      children: "多核切分"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了实现多核并行，需要将矩阵数据进行切分，分配到不同的核上进行处理。切分策略如下图所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于A矩阵，沿着M轴进行切分，切分成多份的singleCoreM，单核上处理SingleCoreM * K大小的数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于B矩阵，沿着N轴进行切分，切分成多份的singleCoreN，单核上处理K * SingleCoreN大小的数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于C矩阵，SingleCoreM * K大小的A矩阵和K * SingleCoreN大小的B矩阵相乘得到SingleCoreM * SingleCoreN大小的C矩阵，即为单核上输出的C矩阵大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如，下图中共有8个核参与计算，将A矩阵沿着M轴划分为4块，将B矩阵沿着N轴切分为两块，单核上仅处理某一分块（比如图中绿色部分为core3上参与计算的数据）：SingleCoreM * K大小的A矩阵分块和SingleCoreN* K大小的B矩阵分块相乘得到SingleCoreM * SingleCoreN大小的C矩阵分块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(310418)/* ["default"] */.A) + "",
        width: "512",
        height: "294"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "核内切分",
      children: "核内切分"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大多数情况下，Local Memory的存储，无法完整的容纳算子的输入与输出，需要每次搬运一部分输入进行计算然后搬出，再搬运下一部分输入进行计算，直到得到完整的最终结果，也就是需要做核内的输入切分。切分的策略如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于A矩阵，沿M轴进行切分，切分成多份的baseM；沿K轴进行切分，切分成多份的baseK。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于B矩阵，沿N轴进行切分，切分成多份的baseN，沿K轴进行切分，切分成多份的baseK。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于C矩阵，A矩阵中baseM*baseK大小的分块和B矩阵中baseK*baseN大小的分块相乘并累加，得到C矩阵中对应位置baseM*baseN大小的分块。比如，图中结果矩阵中的蓝色矩阵块5是通过如下的累加过程得到的：a*a+b*b+c*c+d*d+e*e+f*f。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997357)/* ["default"] */.A) + "",
        width: "528",
        height: "416"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了baseM, baseN, baseK外，还有一些常用的tiling参数，其含义如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "iterateOrder：一次Iterate迭代计算出[baseM, baseN]大小的C矩阵分片。Iterate完成后，Matmul会自动偏移下一次Iterate输出的C矩阵位置，iterateOrder表示自动偏移的顺序。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "0代表先往M轴方向偏移再往N轴方向偏移。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "1代表先往N轴方向偏移再往M轴方向偏移。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "depthA1，depthB1：A1、B1上存储的矩阵片全载A2/B2的份数，A2、B2存储大小分别是baseM * baseK，baseN * baseK。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "stepM，stepN：stepM为左矩阵在A1中缓存的buffer M方向上baseM的倍数。stepN为右矩阵在B1中缓存的buffer N方向上baseN的倍数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "stepKa，stepKb：stepKa为左矩阵在A1中缓存的buffer K方向上baseK的倍数，stepKb为右矩阵在B1中缓存的buffer K方向上baseK的倍数。"
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
731360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799594-43cc112ce9a061ef452e7fc12ad760e6.png");

},
997357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959244-d44b1c709d3a588cc921ab7b374ced65.png");

},
406942(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479243-0eb3c13ebc888380c2a25358acf0659a.png");

},
310418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439289-0de333ef12860e5e69f1b0e410c87c4b.png");

},
20717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
298221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439287-1a1a45dd5aad5feabd7499a8c4e919b0.png");

},
88655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959242-917fe48c5bd7fe0b638bd11973159d9e.png");

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