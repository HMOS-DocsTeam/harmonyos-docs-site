"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["980596"], {
29870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_examples_cannkit_examples_md_30d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-optimization-cannkit-lightweight-tool-instructions-cannkit-examples-cannkit-examples-md-30d.json
var site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_examples_cannkit_examples_md_30d_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-examples/cannkit-examples","title":"模型轻量化示例","description":"TensorFlow Quant\\\\_INT8-8无训练量化Demo","source":"@site/docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-examples/cannkit-examples.md","sourceDirName":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-examples","slug":"/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-examples/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-examples/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"模型轻量化示例","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-examples","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"网络结构搜索训练","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training/"},"next":{"title":"常见问题","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-model-size-reduction-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-examples/cannkit-examples.md


const frontMatter = {
	title: '模型轻量化示例',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-examples',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '模型轻量化示例';

const assets = {

};



const toc = [{
  "value": "TensorFlow Quant_INT8-8无训练量化Demo",
  "id": "tensorflow-quant_int8-8无训练量化demo",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 3
}, {
  "value": "模型配置",
  "id": "模型配置",
  "level": 3
}, {
  "value": "模型量化",
  "id": "模型量化",
  "level": 3
}, {
  "value": "PyTorch Quant_INT8-8无训练量化Demo",
  "id": "pytorch-quant_int8-8无训练量化demo",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备-1",
  "level": 3
}, {
  "value": "模型配置",
  "id": "模型配置-1",
  "level": 3
}, {
  "value": "模型量化",
  "id": "模型量化-1",
  "level": 3
}, {
  "value": "ONNX Quant_INT8-8无训练量化Demo",
  "id": "onnx-quant_int8-8无训练量化demo",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备-2",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 3
}, {
  "value": "TensorFlow Quant_INT8-8插件式量化Demo",
  "id": "tensorflow-quant_int8-8插件式量化demo",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备-3",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码-1",
  "level": 3
}, {
  "value": "PyTorch Quant_INT8-8插件式量化Demo",
  "id": "pytorch-quant_int8-8插件式量化demo",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备-4",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码-2",
  "level": 3
}, {
  "value": "TensorFlow NASEA网络结构搜索Demo",
  "id": "tensorflow-nasea网络结构搜索demo",
  "level": 2
}, {
  "value": "NASEA分类网络",
  "id": "nasea分类网络",
  "level": 3
}, {
  "value": "NASEA检测网络",
  "id": "nasea检测网络",
  "level": 3
}, {
  "value": "NASEA分割网络",
  "id": "nasea分割网络",
  "level": 3
}, {
  "value": "PyTorch NASEA网络结构搜索Demo",
  "id": "pytorch-nasea网络结构搜索demo",
  "level": 2
}, {
  "value": "NASEA分类网络",
  "id": "nasea分类网络-1",
  "level": 3
}, {
  "value": "NASEA分割网络",
  "id": "nasea分割网络-1",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模型轻量化示例",
        children: "模型轻量化示例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tensorflow-quant_int8-8无训练量化demo",
      children: "TensorFlow Quant_INT8-8无训练量化Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
        children: "环境准备"
      }), "，安装TensorFlow及依赖。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模型配置",
      children: "模型配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备量化模型"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将基线模型的pb文件放入\"dopt_tf_py3/demo/quant8-8/notrain/tensorflow_mnist/basemodel/\"中。该路径下已经放入了mnist基线模型mnist.pb。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备量化输入数据"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization#%E6%A8%A1%E5%9E%8B%E9%87%8F%E5%8C%96",
            children: "模型量化"
          }), "，将图片或二进制形式的校准集放入\"dopt_tf_py3/demo/quant8-8/notrain/tensorflow_mnist/mnist_test/\"中。该路径下已经放入了图片校准集。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模型量化",
      children: "模型量化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行\"dopt_tf_py3/demo/quant8-8/notrain/tensorflow_mnist/\"下run_release.sh即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"dopt_tf_py3/demo/quant8-8/notrain/tensorflow_mnist\"中存有量化后的pb模型和量化配置文件，运行demo后生成的文件如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(122269)/* ["default"] */.A) + "",
        width: "101",
        height: "39"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pytorch-quant_int8-8无训练量化demo",
      children: "PyTorch Quant_INT8-8无训练量化Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境准备-1",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87-1",
        children: "环境准备"
      }), "，安装PyTorch及依赖。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模型配置-1",
      children: "模型配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备量化模型"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将基线模型的模型定义文件(.py)以及模型参数文件放入\"dopt_pytorch_py3/demo/quant8-8/notrain/pytorch_mnist/\"。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该路径下已经放入了mnist基线模型定义文件mnist.py以及模型参数文件mnist.pth。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备量化输入数据"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization#%E6%A8%A1%E5%9E%8B%E9%87%8F%E5%8C%96-1",
            children: "模型量化"
          }), "，将图片或二进制形式的校准集放入\"dopt_pytorch_py3/demo/quant8-8/notrain/pytorch_mnist/\"中。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模型量化-1",
      children: "模型量化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行\"dopt_pytorch_py3/demo/quant8-8/notrain/pytorch_mnist/\"下run_release.sh即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"dopt_pytorch_py3/demo/quant8-8/notrain/pytorch_mnist/\"中存有PyTorch无训练量化示例文件，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(776914)/* ["default"] */.A) + "",
        width: "131",
        height: "101"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnx-quant_int8-8无训练量化demo",
      children: "ONNX Quant_INT8-8无训练量化Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境准备-2",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["环境准备请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87-2",
        children: "环境准备"
      }), "，安装ONNX及依赖。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将dopt_onnx_py3 目录添加到系统环境中，在终端环境执行"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 ./dopt_so.py \\\n    --framework 5 \\\n    --mode   0 \\\n    --model \"./resnet18_matmul.onnx\" \\          ## 待量化的ONNX模型\n    --cal_conf \"./config.prototxt\" \\            ## 校准集配置文件\n    --output  \"./resnet18_matmul_quant.onnx\" \\  ## 量化后的ONNX文件\n    --input_shape   input:1,3,128,128 \\         ## 浮点模型输入shape\n    --compress_conf  ./mnist_param              ## dopt 工具生成的量化文件\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中，./config.prototxt配置内容为（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization#onnx%E6%A8%A1%E5%9E%8B%E6%97%A0%E8%AE%AD%E7%BB%83%E9%87%8F%E5%8C%96",
        children: "配置文件使用方法"
      }), "）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "strategy: 'Quant_INT8-8'\ndevice: USE_CPU\npreprocess_parameter:\n{\n    input_type: BINARY\n    input_file_path: './input1.bin'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tensorflow-quant_int8-8插件式量化demo",
      children: "TensorFlow Quant_INT8-8插件式量化Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境准备-3",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-plugin-based-quantization#%E5%87%86%E5%A4%87tensorflow%E7%8E%AF%E5%A2%83",
        children: "准备TensorFlow环境"
      }), "。安装TensorFlow-gpu 2.8.0版本以及其必要的依赖。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码-1",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import sys\nsys.path.append(\".../dopt_tf_py3\") ## 其中路径为绝对路径\n\ndef generate_config():\n    with tf.Session(config=config) as sess:\n        build_tf_model() ## 自定义tf模型graph，仅构建拓扑图，不可加载权重\n        from dopt.dopt_tf.opt_main import generate_config_file\n        generate_config_file(sess, dst_path=\"./config_gen.json\")\n\ndef train_model():\n    with tf.Session(config=config) as sess:\n        build_tf_model() ## 自定义tf模型graph，仅构建拓扑图，不可加载权重\n        from dopt.dopt_tf.opt_main import optimize_model\n        quant_flag = tf.placeholder(tf.int32)\n        is_train_flag = tf.placeholder(tf.bool, name='is_train')\n        ## 模型量化，自动在 tf.get_default_graph()上进行改图操作\n        optimize_model(\n            sess,\n            \"./config_gen.json\",\n            is_train_flag,\n            quant_flag\n        )\n        ## 调用完optimize_model之后，加载模型权重\n        saver = tf.Saver()\n        saver.restore(ckpt)\n        tf.global_variables_initializer().run()\n        ## train model\n        for i in range(...):\n            optimizer = ...\n            feed_dict[is_train_flag] = True\n            feed_dict[quant_flag] = 1\n            sess.run(train_op, feed_dict)\n        ## eval model\n        feed_dict[is_train_flag] = False\n        feed_dict[quant_flag] = 1\n        sess.run(output, feed_dict)\n        evaluate_output(output)\n\ndef calibrate_model():\n    with tf.Session(config=config) as sess:\n        build_tf_model() ## 自定义tf模型graph，仅构建拓扑图，不可加载权重\n        from dopt.dopt_tf.opt_main import optimize_model, set_calibrate_state\n        quant_flag = tf.placeholder(tf.int32)\n        is_train_flag = tf.placeholder(tf.bool, name='is_train')\n        ## 模型量化，自动在 tf.get_default_graph()上进行改图操作\n        optimize_model(\n            sess,\n            \"./config_gen.json\",\n            is_train_flag,\n            quant_flag\n        )\n        ## 调用完optimize_model之后，加载模型权重\n        saver = tf.Saver()\n        saver.restore(ckpt)\n\n        calibration_mode = True\n        set_calibrate_state(sess, calibration_mode )\n        ## eval model\n        feed_dict[is_train_flag] = False\n        feed_dict[quant_flag] = 1\n        sess.run(output, feed_dict)\n        evaluate_output(output)\n\ndef generate_params():\n    with tf.Session(config=config) as sess:\n        build_tf_model()\n        from dopt.dopt_tf.opt_main import generate_final_model\n        generate_final_model(\n            sess,\n            config_file         = \"./config_gen.json\",\n            output_name_list    = [\"output\"],\n            ckpt_file           = \"train_ckpt_path\",\n            output_dir          = \"./output_dir\"\n        )\nif __name__ == \"__main__\":\n    ## step 1\n    ## 开发者接入，配置修改\n    generate_config()\n    \n    ## step 2\n    ## 训练模型，直至达标\n    train_model() ## 重训练量化模型\n    ## calibrate_model()  ## 校准量化模型\n    \n    ## step 3\n    ## 提取参数，用于后续模型部署\n    generate_params()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pytorch-quant_int8-8插件式量化demo",
      children: "PyTorch Quant_INT8-8插件式量化Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境准备-4",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-plugin-based-quantization#%E5%87%86%E5%A4%87pytorch%E7%8E%AF%E5%A2%83",
        children: "准备PyTorch环境"
      }), "。安装PyTorch-gpu 1.11版本以及其必要的依赖。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码-2",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import sys\nsys.path.append(\".../dopt_tf_py3\") ## 其中路径为绝对路径\n\ndef generate_config():\n    model = build_torch_model()  ## 开发者待量化的浮点模型\n    generate_config_file(model, input_shape, dst_path=\"./config_gen.json\") # model：torch.nn.Module， input_shape : \"input1:input1.shape;input2:input2.shape\"\n    return model\n\ndef train_model():\n    model = build_torch_model() ## 开发者待量化的浮点模型\n    from dopt.dopt_torch.opt_main import optimize_model\n    model.load_state_dict(state)  ## load 浮点模型参数\n    \n    ## 调用optimize model 量化模型\n    quanted_model = optimize_model(model, config_path)\n    \n    ## train model\n    quant_loss = get_quant_loss(quant_model)\n    optimizer = torch.optim.SGD(quanted_model.parameters(), lr=0.001, momentum=0.9) ## 假设使用SGD优化器\n    \n    for input_data, label in range(...):\n        optimizer.zero_grad()\n        outputs = model(input_data)\n        loss = loss_fn(outputs, label) ## loss_fn 为原始浮点网络训练loss\n        \n        total_loss = loss + quant_weight * quant_loss ## quant_weight是指量化损失所占比例\n        loss.backward()\n        \n        optimizer.step()\n\ndef calibrate_model():\n    model = build_torch_model() ## 开发者待量化的浮点模型\n    from dopt.dopt_torch.opt_main import optimize_model, set_calibrate_state\n    model.load_state_dict(state)  ## load 浮点模型参数\n    \n    ## 调用optimize model 量化模型\n    quanted_model = optimize_model(model, config_path)\n    \n    calibrate_mode = True\n    set_calibrate_state(model, calibrate_mode)\n    \n    for input_data, label in range(...):\n        outputs = model(input_data)\n\ndef generate_params():\n    model = build_torch_model()\n    from dopt.dopt_torch.opt_main import generate_final_model\n    generate_final_model(model,\n                        config_file,\n                        pth_file=\"quant.pth\",\n                        output_dir=\"./results_dir\")\n\nif __name__ == \"__main__\":\n    ## step 1\n    ## 开发者接入，配置修改\n    generate_config()\n    \n    ## step 2\n    ## 训练模型，直至达标\n    train_model()\n    ## 无训练模式\n    ## calibrate_model()\n \n    ## step 3\n    ## 提取参数，用于后续模型部署\n    generate_params()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tensorflow-nasea网络结构搜索demo",
      children: "TensorFlow NASEA网络结构搜索Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nasea分类网络",
      children: "NASEA分类网络"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分类网络Demo位于tools_dopt/dopt_tf_py3/demo/nas_ea/ea_cls_imagenet，包含5个文件，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(12814)/* ["default"] */.A) + "",
        width: "171",
        height: "111"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "blocks.so：搜索空间文件"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "readme.md：搜索训练指导文件"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "run_release.sh：开始搜索的执行脚本"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "scen.yaml：配置项"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "user_module.py：工具的自定义接口"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备ImageNet数据集（tfrecord格式），并修改scen.yaml文件中的数据集路径。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["环境准备请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
            children: "环境准备"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载依赖的开源代码："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "进入分类网络demo目录："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd tools_dopt/dopt_tf_py3/demo/nas_ea/ea_cls_imagenet\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "下载开源代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git clone https://github.com/Tensorflow/models.git\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "进入开源代码目录："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd models\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "切换到指定版本："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果TensorFlow版本为1.12.0，执行如下命令："
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "git checkout v1.12.0\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果TensorFlow版本为2.1.0，执行如下命令："
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "git checkout v2.1.0\n"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "返回分类网络demo目录："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd ..\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置PYTHONPATH默认路径："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "export PYTHONPATH=$PYTHONPATH:`pwd`/models/\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(837212)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每次打开终端需要重新执行一次上述命令，或添加到“~/.bashrc”文件，并执行“source ~/.bashrc”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置demo下的scen.yaml文件，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
            children: "搜索参数配置"
          }), "。scen.yaml中提供了建议参数，开发者可根据实际需求修改。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改demo下的user_module.py文件，模型接口定义请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#tensorflow%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8E%A5%E5%8F%A3",
            children: "TensorFlow用户自定义接口"
          }), "。user_module.py中提供了建议配置，开发者可根据实际需求进行修改。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行脚本run_release.sh，在results下，生成多个model_arch_result_*.py文件。开发者可根据log_classification中提供的信息选择合适的网络结构进行训练。后续训练可参考readme.md中的指导。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nasea检测网络",
      children: "NASEA检测网络"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检测网络Demo位于\"tools_dopt/dopt_tf_py3/demo/nas_ea/ea_det_coco\"，包含6个文件，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499597)/* ["default"] */.A) + "",
        width: "201",
        height: "137"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "blocks.so：搜索空间文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pre_train.yaml：预训练的配置项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "readme.md：搜索训练指导文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "run_release.sh：开始搜索的执行脚本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "scen.yaml：配置项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "user_module.py：工具的自定义接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["准备数据集，包括用于预训的ImageNet数据集（tfrecord格式）和用于训练的COCO数据集（原始格式）。若有完成预训练的ckpt文件，则不需再准备ImageNet数据集。请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
            children: "搜索参数配置"
          }), "，修改scen.yaml文件中的数据集路径。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["环境准备请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
            children: "环境准备"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载依赖的开源代码。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "进入检测网络demo目录。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd tools_dopt/dopt_tf_py3/demo/nas_ea/ea_det_coco\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "下载开源代码。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git clone https://github.com/pierluigiferrari/ssd_keras.git\ngit clone https://github.com/Tensorflow/models.git\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "进入开源代码目录。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd ssd_keras\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "切换到指定版本。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git checkout -b v0.9.0\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "返回检测网络demo目录。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd ..\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "进入models开源代码目录。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd models\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "切换models到指定版本。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果TensorFlow版本为1.12.0，执行如下命令："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git checkout v1.12.0\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果TensorFlow版本为2.1.0，则执行如下命令："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git checkout v2.1.0\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "进入models开源代码目录"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd models\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置PYTHONPATH默认路径"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "export PYTHONPATH=$PYTHONPATH:`pwd`/models/\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "按照readme.md中的step1~step4步骤，修改相关开源文件。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置demo的scen.yaml文件和pre_train.yaml，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
            children: "搜索参数配置"
          }), "。scen.yaml中提供了建议参数，开发者可根据实际需求修改。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改demo的user_module.py文件，模型接口定义请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#tensorflow%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8E%A5%E5%8F%A3",
            children: "TensorFlow用户自定义接口"
          }), "。user_module.py中提供了建议配置，开发者可根据实际需求进行修改。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行脚本run_release.sh，在results下，生成多个model_arch_result_*.py文件。开发者可根据log_detection中提供的信息选择合适的网络结构进行训练。后续训练可参考readme.md中的指导。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nasea分割网络",
      children: "NASEA分割网络"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分割网络Demo位于tools_dopt/dopt_tf_py3/demo/nas_ea/ea_seg_voc，包含 6个文件，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(198262)/* ["default"] */.A) + "",
        width: "200",
        height: "143"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "blocks.so：搜索空间文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pre_train.yaml：预训练的配置项"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "readme.md：搜索训练指导文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "run_release.sh：开始搜索的执行脚本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "scen.yaml：配置项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "user_module.py：工具的自定义接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["准备数据集，包括用于预训练的ImageNet数据集（tfrecord格式）和用于训练的VOC数据集（tfrecord格式）。若有完成预训练的ckpt文件，则不需再准备ImageNet数据集。请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
            children: "搜索参数配置"
          }), "，修改scen.yaml文件中的数据集路径。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["环境准备请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
            children: "环境准备"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载依赖的开源代码。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "进入分割网络demo目录。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd tools_dopt/dopt_tf_py3/demo/nas_ea/ea_seg_voc\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "下载开源代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git clone https://github.com/Tensorflow/models.git\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "进入开源代码目录。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd models\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "切换到指定版本。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git checkout v1.13.0\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "返回分割网络demo目录。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd ..\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置PYTHONPATH默认路径："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "export PYTHONPATH=$PYTHONPATH:`pwd`/models/research:`pwd`/models/research/slim\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果TensorFlow版本为2.1.0，需要执行如下命令："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "创建models_tf2.1，并进入文件夹"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "mkdir models_tf2.1\ncd models_tf2.1\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "下载开源实现"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "git clone https://github.com/Tensorflow/models.git\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "进入开源代码路径"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "cd models\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "切换到指定版本"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "git checkout v2.1.0\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "返回models_tf2.1目录"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "cd ..\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "设置PYTHONPATH默认路径"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "export PYTHONPATH=$PYTHONPATH:`pwd`/models/\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(825146)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "每次打开终端需要重新执行一次上述命令，或添加到\"~/.bashrc\"文件，并执行\"source ~/.bashrc\"。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "修改开源实现，按照readme.md中修改开源实现的步骤，修改相关开源文件。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置demo的scen.yaml文件和pre_train.yaml，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
            children: "搜索参数配置"
          }), "。scen.yaml中提供了建议参数，开发者可根据实际需求修改。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改demo的user_module.py文件，模型接口定义请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#tensorflow%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8E%A5%E5%8F%A3",
            children: "TensorFlow用户自定义接口"
          }), "。user_module.py中提供了建议配置，开发者可根据实际需求进行修改。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行脚本run_release.sh，在results下，生成多个model_arch_result_*.py文件。开发者可根据log_segmentation中提供的信息选择合适的网络结构进行训练。后续训练可参考readme.md中的指导。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pytorch-nasea网络结构搜索demo",
      children: "PyTorch NASEA网络结构搜索Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nasea分类网络-1",
      children: "NASEA分类网络"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分类网络Demo位于tools_dopt/dopt_pytorch_py3/demo/nas_ea/ea_cls_imagenet_pytorch，包含5个文件，如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(349005)/* ["default"] */.A) + "",
        width: "129",
        height: "106"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "blocks.so：搜索空间文件"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "readme.md：搜索训练指导文件"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "run_release.sh：开始搜索的执行脚本"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "scen.yaml：配置项"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "user_module.py：工具的自定义接口"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "准备ImageNet数据集（原始格式），并修改scen.yaml文件中的数据集路径。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["环境准备请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
          children: "环境准备"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["配置demo下的scen.yaml文件，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
          children: "搜索参数配置"
        }), "。scen.yaml中提供了建议参数，开发者可根据实际需求修改。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["修改demo下的user_module.py文件，模型接口定义请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#pytorch%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8E%A5%E5%8F%A3",
          children: "PyTorch开发者自定义接口"
        }), "。user_module.py中提供了建议配置，开发者可根据实际需求进行修改。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行脚本run_release.sh，在results下，生成多个model_arch_result_*.py文件。开发者可根据log_classification中提供的信息选择合适的网络结构进行训练。后续训练可参考readme.md中的指导。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nasea分割网络-1",
      children: "NASEA分割网络"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分割网络Demo位于tools_dopt/dopt_pytorch_py3/demo/nas_ea/ea_seg_voc_pytorch，包含 6个文件，如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(638697)/* ["default"] */.A) + "",
        width: "211",
        height: "135"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "blocks.so：搜索空间文件"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pre_train.yaml：预训练的配置项"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "readme.md：搜索训练指导文件"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "run_release.sh：开始搜索的执行脚本"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "scen.yaml：配置项"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "user_module.py：工具的自定义接口"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["准备数据集，包括用于预训练的ImageNet数据集（原始格式）和用于训练VOC数据集（原始格式）。若有完成预训练的ckpt文件，则不需再准备ImageNet数据集。请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
          children: "搜索参数配置"
        }), "，修改scen.yaml文件中的数据集路径。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["环境准备请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
          children: "环境准备"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "加载依赖的开源代码：参考tools_dopt/dopt_pytorch_py3/demo/nas_ea/ea_seg_voc_pytorch/readme.md"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["配置demo下的scen.yaml文件和pre_train.yaml文件，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
          children: "搜索参数配置"
        }), "。scen.yaml中提供了建议参数，开发者可根据实际需求修改。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["修改demo下的user_module.py文件，模型接口定义请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#pytorch%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8E%A5%E5%8F%A3",
          children: "PyTorch开发者自定义接口"
        }), "。user_module.py中提供了建议配置，开发者可根据实际需求进行修改。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行脚本run_release.sh，在results下，生成多个model_arch_result_*.py文件。开发者可根据log_segmentation中提供的信息选择合适的网络结构进行训练。后续训练可参考readme.md中的指导。"
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
638697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
837212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
349005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799566-dcdd6f2d0d326f07a5465def4b0acbc6.png");

},
825146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
776914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
12814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
198262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
499597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959214-8e9b7d03aca56b1aea1156d1a4c3b035.png");

},
122269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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