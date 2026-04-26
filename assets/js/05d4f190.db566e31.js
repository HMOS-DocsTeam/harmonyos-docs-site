"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["255387"], {
140980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_commissioning_functions_cannkit_more_functions_cannkit_commissioning_function_dumptensor_cannkit_c_05d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-usage-of-the-commissioning-tool-cannkit-commissioning-functions-cannkit-more-functions-cannkit-commissioning-function-dumptensor-cannkit-c-05d.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_commissioning_functions_cannkit_more_functions_cannkit_commissioning_function_dumptensor_cannkit_c_05d_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumptensor/cannkit-commissioning-function-dumptensor","title":"DumpTensor功能","description":"功能介绍","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumptensor/cannkit-commissioning-function-dumptensor.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumptensor","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumptensor/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumptensor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"DumpTensor功能","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-commissioning-function-dumptensor","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"printf/PRINTF功能","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-printf/"},"next":{"title":"DumpAccChkPoint功能","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumpaccchkpoint/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-dumptensor/cannkit-commissioning-function-dumptensor.md


const frontMatter = {
	title: 'DumpTensor功能',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-commissioning-function-dumptensor',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'DumpTensor功能';

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
  "value": "接口说明",
  "id": "接口说明",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "dumptensor功能",
        children: "DumpTensor功能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用工具进行算子调测时，支持DumpTensor功能，默认从Tensor的第0位元素开始打印指定长度的元素值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(62896)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "simulator调测场景下的DumpTensor，受dump mode参数控制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "固定为每个核分配的打印数据的最大可使用空间为1M，目前该大小不支持修改，若打印超过1M，打印内容不再显示，请开发者控制待打印的数据量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方法命令行",
      children: "使用方法（命令行）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在核函数代码中按需在目标位置调用DumpTensor接口，接口说明参见表1，样例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "DumpTensor(srcLocal, 5, dataNum);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "simulator调测场景执行如下命令，使能Dump开关。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ascendebug kernel --backend simulator --dump-mode normal ... {其他simulator调测参数}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["--dump-mode取normal，开启通用打印Tensor模式，其他参数参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters#npu%E8%B0%83%E6%B5%8B%E5%8F%82%E6%95%B0",
            children: "NPU调测参数"
          }), "按需配置。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["查看dump结果，具体参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BA%A7%E7%89%A9%E8%AF%B4%E6%98%8E",
            children: "产物说明"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DumpTensor接口说明如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "函数原型："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "void DumpTensor(const LocalTensor<T> &tensor, uint32_t desc, uint32_t dumpNum)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "void DumpTensor(const GlobalTensor<T> &tensor, uint32_t desc, uint32_t dumpNum)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "void DumpTensor(const LocalTensor<T> &tensor, uint32_t desc, uint32_t dumpNum, const ShapeInfo& shapeInfo)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "void DumpTensor(const GlobalTensor<T> &tensor, uint32_t desc, uint32_t dumpNum, const ShapeInfo& shapeInfo)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "函数功能："
            })
          }), " 从Tensor的第0位元素开始打印指定长度的元素值。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数(IN)："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "tensor："
              })
            }), " 开发者需要Dump的Tensor。多个DumpTensor调用时，不可重复。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "待dump的tensor位于Unified Buffer/L1 Buffer/L0C Buffer时使用LocalTensor类型的tensor参数输入。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "待dump的tensor位于Global Memory时使用GlobalTensor类型的tensor参数输入。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "当前支持的数据类型为uint8_t/int8_t/int16_t/uint16_t/int32_t/uint32_t/int64_t/uint64_t/float/half。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "desc："
              })
            }), " 开发者自定义附加信息（行号或其他自定义数字）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "dumpNum："
              })
            }), " 需要Dump的元素个数。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "shapeInfo："
              })
            }), " 如果有Tensor的shape信息，工具可解析shapeInfo并进行打印。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数(OUT)："
            })
          }), " NA"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
            })
          }), " NA"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用约束："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当前接口仅支持位于Unified Buffer/L1 Buffer/L0C Buffer/Global Memory的数据Dump。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "每次Dump的大小(dataNum*sizeof(T))需要32B对齐。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "调用示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "示例1：无Tensor shape的打印"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "DumpTensor(srcLocal,5, dataNum);      # Dump LM\nDumpTensor(this->gm_, 0, dataNum);    # Dump GM\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "示例2：带Tensor shape的打印"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint32_t array[] = {static_cast<uint32_t>(8),static_cast<uint32_t>(8)};\nShapeInfo shapeInfo(2, array);       # dim为2， shape为(8,8)\nDumpTensor(x, 2, 64, shapeInfo);     # dump x的64个元素，且解析按照shapeInfo的(8,8)排列\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "打印结果如下。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: " [[150.000000,83.000000,109.000000,166.000000,129.000000,50.000000,150.000000,74.000000],\n [135.000000,79.000000,98.000000,134.000000,146.000000,166.000000,112.000000,70.000000],\n [122.000000,51.000000,116.000000,68.000000,172.000000,72.000000,102.000000,69.000000],\n [136.000000,83.000000,88.000000,88.000000,112.000000,148.000000,79.000000,136.000000],\n [133.000000,104.000000,83.000000,71.000000,83.000000,99.000000,103.000000,151.000000],\n [98.000000,118.000000,128.000000,83.000000,25.000000,105.000000,179.000000,34.000000],\n [104.000000,169.000000,115.000000,113.000000,134.000000,121.000000,88.000000,96.000000],\n [29.000000,139.000000,70.000000,40.000000,158.000000,138.000000,72.000000,171.000000]]\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "产物说明",
      children: "产物说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dump的Tensor数据存放在${root}/${work_dir}/simulator路径下，其中${root}表示当前操作路径，${work_dir}表示调测工作空间，默认为/debug_workspace/${op_type}目录，${op_type}为算子名。目录结构示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "├ ${op_type}     // 算子名\n├── simulator\n│   ├── dump\n│       ├── PARSER_${timestamp}\n│           ├── dump_data\n│               ├──0                     // core number\n│                   ├──index_5           // index是dump接口的desc唯一标识值\n│                       ├──core_0_index_5_loop_0.bin\n│                       ├──core_0_index_5_loop_0.txt\n│                       ├──core_0_index_5_loop_1.bin\n│                       ├──core_0_index_5_loop_1.txt\n│               ├──index_dtype.json       // 存放每个dump Tensor的数据类型\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中core_${core_id}_index_${index}_loop_${loop}.txt是工具根据bin文件自动解析的Dump结果，其命名规则为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "${core_id}：计算核id。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "${index}：是Dump接口的desc唯一标识值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "${loop}：若DumpTensor接口在for循环中被调用，其表示循环的索引值，否则默认为0。"
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
62896(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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