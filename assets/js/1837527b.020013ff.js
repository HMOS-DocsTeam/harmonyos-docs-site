"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["603537"], {
941072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_offline_model_conversion_cannkit_model_conversion_example_cannkit_model_conversion_example_md_183_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-conversion-cannkit-offline-model-conversion-cannkit-model-conversion-example-cannkit-model-conversion-example-md-183.json
var site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_offline_model_conversion_cannkit_model_conversion_example_cannkit_model_conversion_example_md_183_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example/cannkit-model-conversion-example","title":"模型转换示例","description":"使用CANN Kit SDK时，可以预先使用OMG工具将Caffe、TensorFlow、ONNX、MindSpore模型转换为OM离线模型，移动端AI程序直接读取离线模型进行推理。OMG工具位于Tools下载的tools/tools\\\\_omg下，可运行在64位Linux平台上。","source":"@site/docs/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example/cannkit-model-conversion-example.md","sourceDirName":"cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example","slug":"/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"模型转换示例","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-model-conversion-example","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"模型转换前准备","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-preparing-for-model-conversion/"},"next":{"title":"OMG参数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example/cannkit-model-conversion-example.md


const frontMatter = {
	title: '模型转换示例',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-model-conversion-example',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '模型转换示例';

const assets = {

};



const toc = [{
  "value": "Caffe模型转换",
  "id": "caffe模型转换",
  "level": 2
}, {
  "value": "TensorFlow模型转换",
  "id": "tensorflow模型转换",
  "level": 2
}, {
  "value": "ONNX模型转换",
  "id": "onnx模型转换",
  "level": 2
}, {
  "value": "量化模型转换（以Caffe模型为例）",
  "id": "量化模型转换以caffe模型为例",
  "level": 2
}, {
  "value": "推理前可变Shape模型转换（以ONNX模型为例）",
  "id": "推理前可变shape模型转换以onnx模型为例",
  "level": 2
}, {
  "value": "MindSpore模型转换",
  "id": "mindspore模型转换",
  "level": 2
}, {
  "value": "AIPP模型转换（以Caffe模型为例）",
  "id": "aipp模型转换以caffe模型为例",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模型转换示例",
        children: "模型转换示例"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用CANN Kit SDK时，可以预先使用OMG工具将Caffe、TensorFlow、ONNX、MindSpore模型转换为OM离线模型，移动端AI程序直接读取离线模型进行推理。OMG工具位于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-preparations#tools%E4%B8%8B%E8%BD%BD",
        children: "Tools下载"
      }), "的tools/tools_omg下，可运行在64位Linux平台上。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "caffe模型转换",
      children: "Caffe模型转换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitee.com/mirrors/caffe",
        children: "Caffe"
      }), " 1.0版本。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令行中的参数说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
        children: "OMG参数"
      }), "，转换命令："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model xxx.prototxt --weight yyy.caffemodel --framework 0 --output ./modelname\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model deploy.prototxt --weight squeezenet_v1.1.caffemodel --framework 0 --output ./squeezenet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当看到OMG generate offline model success时，则说明转换成功，会在当前目录下生成squeezenet.om。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tensorflow模型转换",
      children: "TensorFlow模型转换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.tensorflow.org/?hl=zh-cn",
        children: "TensorFlow"
      }), " 2.x版本。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令行中的参数说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
        children: "OMG参数"
      }), "，转换命令："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model xxx.pb --framework 3 --output ./modelname --input_shape \"xxx:n,h,w,c\" --out_nodes \"node_name1:0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model mobilenet_v2_1.0_224_frozen.pb --framework 3 --output ./mobilenet_v2 --input_shape \"input:1,224,224,3\" --out_nodes \"MobilenetV2/Predictions/Reshape_1:0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当看到OMG generate offline model success时，则说明转换成功，会在当前目录下生成mobilenet_v2.om。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnx模型转换",
      children: "ONNX模型转换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/onnx/onnx",
        children: "ONNX"
      }), " opset版本7~18（最高支持到V1.13.1）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令行中的参数说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
        children: "OMG参数"
      }), "，转换命令："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model xxx.onnx --framework 5 --output ./modelname\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model resnet18.onnx --framework 5 --output ./resnet18\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当看到如下log时，则说明转换成功，会在当前目录下生成resnet18.om。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(436150)/* ["default"] */.A) + "",
        width: "640",
        height: "66"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "量化模型转换以caffe模型为例",
      children: "量化模型转换（以Caffe模型为例）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前大部分模型在NPU上都是使用16bit float类型进行计算的，使用量化既可以减少模型的体积，也可以加快模型推理速度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["量化模型转换依赖轻量化工具，利用轻量化工具生成模型及轻量化配置，通过\"compress_conf\"参数传递给OMG并生成量化模型，更多说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-lightweight-tool-overview",
        children: "模型轻量化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令行中的参数说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
        children: "OMG参数"
      }), "，转换命令："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model xxx.prototxt --weight xxx.caffemodel --framework 0 --output ./modelname  --compress_conf=param\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model deploy.prototxt --weight squeezenet_v1.1.caffemodel --framework 0 --output ./squeezenet --compress_conf=param\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当看到OMG generate offline model success时，说明模型量化成功，会在当前目录下生成量化模型squeezenet.om。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "推理前可变shape模型转换以onnx模型为例",
      children: "推理前可变Shape模型转换（以ONNX模型为例）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果一个模型需要支持一次加载，然后不同次的推理会遇到不同的batch，或者不同的分辨率，那么可以使用推理前可变Shape的模型转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模型转换时，将推理过程可能遇到的所有Shape种类预先通过dynamic_dims和input_shape指定出来，生成一个标准IR模型，其携带多种shape输入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令行中的参数说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
        children: "OMG参数"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model=./1batch.onnx --input_shape=\"inputName:-1,3,128,128\" --dynamic_dims=\"1;2;5\" --framework=5 --output=./FlexibleShapeModelName\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(25062)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同shape输入对应的不同输出shape，可在模型转换日志中，通过 \"Graph:\" 关键字查找对应的shape信息，方便在模型推理时指定对应的输出描述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mindspore模型转换",
      children: "MindSpore模型转换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MindSpore支持的算子数量有限，建议通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#tensorflow%E6%A8%A1%E5%9E%8B%E8%BD%AC%E6%8D%A2",
        children: "TensorFlow模型转换"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onnx%E6%A8%A1%E5%9E%8B%E8%BD%AC%E6%8D%A2",
        children: "ONNX模型转换"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aipp模型转换以caffe模型为例",
      children: "AIPP模型转换（以Caffe模型为例）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果模型推理需要对图像或其他输入数据进行变换（如图像尺寸变换、色域转换、减均值/乘系数等），可使用AIPP模型转换功能。转换后的模型增加算子替换此类操作，可提升效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令行中的参数说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
        children: "OMG参数"
      }), "，转换命令："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model xxx.prototxt --weight xxx.caffemodel --framework 0 --insert_op_conf aipp_conf_static.cfg --output ./modelname\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model deploy.prototxt --weight squeezenet_v1.1.caffemodel --framework 0 --insert_op_conf aipp_conf_static.cfg --output ./squeezenet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当出现OMG generate offline model success时，说明AIPP模型转换成功，会在当前目录下生成AIPP squeezenet.om模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(588937)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["aipp_conf_static.cfg是AIPP的配置文件，位置存放在\"tools/tools_omg/sample\"文件夹中，具体说明参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-configuration-file",
        children: "AIPP配置文件说明"
      }), "。"]
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
25062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
436150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959216-dea63028bd242ff9ec1efabf8e527969.png");

},
588937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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