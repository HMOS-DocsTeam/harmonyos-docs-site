"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["856610"], {
586450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_aipp_cannkit_aipp_configuration_file_cannkit_aipp_configuration_file_md_a51_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-conversion-cannkit-aipp-cannkit-aipp-configuration-file-cannkit-aipp-configuration-file-md-a51.json
var site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_aipp_cannkit_aipp_configuration_file_cannkit_aipp_configuration_file_md_a51_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-configuration-file/cannkit-aipp-configuration-file","title":"模型转换AIPP配置文件说明","description":"模型转换AIPP配置文件说明","source":"@site/docs/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-configuration-file/cannkit-aipp-configuration-file.md","sourceDirName":"cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-configuration-file","slug":"/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-configuration-file/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-configuration-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"模型转换AIPP配置文件说明","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-aipp-configuration-file","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AIPP参数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-parameters/"},"next":{"title":"可变data_type","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-variable-data_type/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-configuration-file/cannkit-aipp-configuration-file.md


const frontMatter = {
	title: '模型转换AIPP配置文件说明',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-aipp-configuration-file',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '模型转换AIPP配置文件说明';

const assets = {

};



const toc = [{
  "value": "模型转换AIPP配置文件说明",
  "id": "模型转换aipp配置文件说明-1",
  "level": 2
}, {
  "value": "AIPP配置多输入支持",
  "id": "aipp配置多输入支持",
  "level": 3
}, {
  "value": "AIPP配置区分动态AIPP与静态AIPP",
  "id": "aipp配置区分动态aipp与静态aipp",
  "level": 3
}, {
  "value": "图片裁剪(Crop)",
  "id": "图片裁剪crop",
  "level": 2
}, {
  "value": "静态配置",
  "id": "静态配置",
  "level": 3
}, {
  "value": "动态配置",
  "id": "动态配置",
  "level": 3
}, {
  "value": "通道交换功能(axSwap/uvSwap/rbSwap)",
  "id": "通道交换功能axswapuvswaprbswap",
  "level": 2
}, {
  "value": "静态配置",
  "id": "静态配置-1",
  "level": 3
}, {
  "value": "动态配置",
  "id": "动态配置-1",
  "level": 3
}, {
  "value": "色域转换功能(CSC)",
  "id": "色域转换功能csc",
  "level": 2
}, {
  "value": "静态配置",
  "id": "静态配置-2",
  "level": 3
}, {
  "value": "动态配置",
  "id": "动态配置-2",
  "level": 3
}, {
  "value": "图片缩放(Resize)",
  "id": "图片缩放resize",
  "level": 2
}, {
  "value": "静态配置",
  "id": "静态配置-3",
  "level": 3
}, {
  "value": "动态配置",
  "id": "动态配置-3",
  "level": 3
}, {
  "value": "数据类型转换(DTC)",
  "id": "数据类型转换dtc",
  "level": 2
}, {
  "value": "静态配置",
  "id": "静态配置-4",
  "level": 3
}, {
  "value": "动态配置",
  "id": "动态配置-4",
  "level": 3
}, {
  "value": "图片旋转(Rotation)",
  "id": "图片旋转rotation",
  "level": 2
}, {
  "value": "图片补边",
  "id": "图片补边",
  "level": 2
}, {
  "value": "静态配置",
  "id": "静态配置-5",
  "level": 3
}, {
  "value": "动态配置",
  "id": "动态配置-5",
  "level": 3
}, {
  "value": "完整AIPP动态配置示例",
  "id": "完整aipp动态配置示例",
  "level": 2
}, {
  "value": "完整AIPP静态配置",
  "id": "完整aipp静态配置",
  "level": 2
}, {
  "value": "动静态混合配置示例",
  "id": "动静态混合配置示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模型转换aipp配置文件说明",
        children: "模型转换AIPP配置文件说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模型转换aipp配置文件说明-1",
      children: "模型转换AIPP配置文件说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一份功能完整的AIPP配置文件示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# AIPP的配置以aipp_op开始，标识这是一个AIPP算子的配置，aipp_op支持配置多个\naipp_op {\n    # input_name参数为可选，标识对模型的哪个输入做AIPP处理\n    # 类型：string\n    input_name: \"data\"\n\n    # related_input_rank参数为可选，与input_name对应，推荐使用input_name，当模型输入名称未知时，可使用related_input_rank标识对模型的第几个输入做AIPP处理\n    # 类型：uint32\n    related_input_rank: 0\n\n    # node_after_aipp参数为可选，用于当一个输入之后有多个分支，需要对分支进行不同的AIPP处理的场景，且需满足均配置或者均不配置，不能只配置一部分分支\n    # 类型：string\n    node_after_aipp: \"op_name\"\n\n    # input_edge_idx参数为可选，与node_after_aipp对应，当输入Data算子之后的若干算子名称重复时，可以使用input_edge_idx标识对第几个分支进行AIPP处理\n    # 类型：uint32\n    input_edge_idx: 0\n\n    input_para {\n        # 输入图片的类型\n        # 类型: enum\n        # 取值范围：[YUV420SP_U8, XRGB8888_U8, ARGB8888_U8, YUYV_U8, YUV422SP_U8, AYUV444_U8, YUV400_U8, RGB888_U8]\n        format: AYUV444_U8\n\n        shape {\n            # 输入图片的宽度、高度\n            # 类型：uint32\n            # 取值范围 & 约束：[0,4096]、对于除了YUV400之外的YUV类型的图片，要求取值是偶数\n            src_image_size_w: 800\n            src_image_size_h: 600\n        }\n\n        # max_src_image_size用于动态AIPP的场景，当图片的长宽或者输入类型不确定时，设置输入图片最大的size\n        # 类型: uint32\n        max_src_image_size: 102400\n    }\n\n    # == Crop参数设置 == #\n    crop_func {\n        switch: true\n        dynamic: true\n        load_start_pos_w: 50\n        load_start_pos_h: 50\n        crop_size_w: 400\n        crop_size_h: 400\n    }\n\n    # == Channel Swap参数设置 == #\n    swap_func {\n        dynamic: true\n        rbuv_swap_switch: true\n        ax_swap_switch: true\n    }\n\n    # == Resize参数设置 == #\n    resize_func {\n        switch: true\n        dynamic: true\n        resize_output_w: 200\n        resize_output_h: 200\n    }\n\n    # == Color Space Conversion参数设置 == #\n    csc_func {\n        switch: true\n        dynamic: true\n        matrix_r0c0: 256\n        matrix_r0c1: 0\n        matrix_r0c2: 259\n        matrix_r1c0: 256\n        matrix_r1c1: -88\n        matrix_r1c2: -183\n        matrix_r2c0: 256\n        matrix_r2c1: 454\n        matrix_r2c2: 0\n        output_bias_0: 0\n        output_bias_1: 0\n        output_bias_2: 0\n        input_bias_0: 16\n        input_bias_1: 128\n        input_bias_2: 128\n    }\n\n    # == Data Type Conversion参数设置 == #\n    dtc_func {\n        switch: true\n        dynamic: true\n        mean_chn_0: 0\n        mean_chn_1: 0\n        mean_chn_2: 0\n        mean_chn_3: 0\n        min_chn_0: 0\n        min_chn_1: 0\n        min_chn_2: 0\n        min_chn_3: 0\n        var_reci_chn_0: 1.0\n        var_reci_chn_1: 1.0\n        var_reci_chn_2: 1.0\n        var_reci_chn_3: 1.0\n    }\n\n    # == Rotation参数设置 == #\n    rotation_func {\n        switch: true\n        dynamic: true\n        rotation_angle: 0.0\n    }\n\n    # == Padding参数设置 == #\n    padding_func {\n        switch: true\n        dynamic: true\n        left_padding_size: 12\n        right_padding_size: 12\n        top_padding_size: 12\n        bottom_padding_size: 12\n        padding_value_chn_0: 20.0\n        padding_value_chn_1: 20.0\n        padding_value_chn_2: 20.0\n        padding_value_chn_3: 20.0\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aipp配置多输入支持",
      children: "AIPP配置多输入支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP支持对一个多输入模型的多个输入分别配置AIPP，也支持在一个输入Data算子有多个输出分支的情况下，对不同的输出分支分别配置AIPP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP配置的多输入支持由2组共4个配置参数控制：input_name和related_input_rank用于指定对哪一个输入进行AIPP处理，node_after_aipp和input_edge_idx用于指定对Data算子的多个输出中的哪一个输出进行AIPP处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "input_name和related_input_rank两个参数推荐使用input_name，related_input_rank参数用于模型输入名称不确定的场景，如果同时配置这两个参数，则两个参数互为校验；如果两个参数都没有被配置，默认对模型的第一个输入进行AIPP处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "node_after_aipp和input_edge_idx两个参数推荐使用node_after_aipp，input_edge_idx用于Data算子的多个输出分支衔接的算子名称重复或不确定的场景，如果同时配置这两个参数，则两个参数互为校验；如果两个参数都没有被配置，则该Data算子的所有输出分支使用同一个AIPP处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aipp配置区分动态aipp与静态aipp",
      children: "AIPP配置区分动态AIPP与静态AIPP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只要有一个AIPP子功能的dynamic开关配置为true，或者没有打开任何一个子功能的开关，则生成的DaVinci模型为动态AIPP模型，需要在模型推理阶段传入AIPP配置参数；相反没有任何子功能的dynamic开关配置为true，并且至少有一个子功能的开关是打开的，则生成的DaVinci模型为静态AIPP模型，模型推理阶段使用配置文件中定义的AIPP配置参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于动态AIPP的场景，AIPP可以允许输入图片的长宽，以及图片类型不确定，对应即src_image_size_w、src_image_size_h和input_format三个参数不配置，此时开发者需要指定动态AIPP处理时的最大图片尺寸，配置max_src_image_size。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图片裁剪crop",
      children: "图片裁剪(Crop)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片裁剪功能是指在原始图片中从指定的起点裁剪出指定大小的子图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dynamic不写或者写成\"false\"表示静态配置，写成\"true\"表示动态配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "静态配置时，crop_size_w和crop_size_h以设定的值作为输出shape。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "动态配置时，crop_size_w和crop_size_h为预分配的最大输出shape，实际运行时设置的参数值不超过预分配的最大值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "静态配置",
      children: "静态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "crop_func {\n    switch: true\n    load_start_pos_w: 50\n    load_start_pos_h: 50\n    crop_size_w: 150\n    crop_size_h: 150\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态配置",
      children: "动态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "crop_func {\n    switch: true\n    dynamic: true\n    load_start_pos_w: 0\n    load_start_pos_h: 0\n    crop_size_w: 150\n    crop_size_h: 150\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通道交换功能axswapuvswaprbswap",
      children: "通道交换功能(axSwap/uvSwap/rbSwap)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "交换图片的通道支持AX通道交换、UV通道交换、RB通道交换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AX通道交换：仅支持ARGB8888、XRGB8888、AYUV444格式，其他格式不支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UV通道交换：仅支持YUV420SP、YUV422SP_U8、YUYV、AYUV444格式，其他格式不支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RB通道交换：仅支持ARGB8888、XRGB8888、RGB888_U8格式，其他格式不支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dynamic不写或者写成\"false\"表示静态配置，写成\"true\"表示动态配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "静态配置-1",
      children: "静态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "swap_func {\n    ax_swap_switch: true\n    rbuv_swap_switch: false\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态配置-1",
      children: "动态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以不写具体的参数，在动态创建input tensor时指定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "swap_func {\n    dynamic: true\n    ax_swap_switch: true\n    rbuv_swap_switch: false\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "色域转换功能csc",
      children: "色域转换功能(CSC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dynamic不写或者写成\"false\"表示静态配置，写成\"true\"表示动态配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的转换格式如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持从YUV420SP、YUYV、YUV422SP、AYUV444转到RGB888、BGR888。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持从XRGB8888、ARGB8888、RGB888转到YVU444SP、YUV444SP、YUV400。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "静态配置-2",
      children: "静态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "静态AIPP配置色域转化矩阵示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "csc_func {\n    switch: true\n    matrix_r0c0: 256\n    matrix_r0c1: 454\n    matrix_r0c2: 0\n    matrix_r1c0: 256\n    matrix_r1c1: -88\n    matrix_r1c2: -183\n    matrix_r2c0: 256\n    matrix_r2c1: 0\n    matrix_r2c2: 359\n    output_bias_0: 0\n    output_bias_1: 0\n    output_bias_2: 0\n    input_bias_0: 0\n    input_bias_1: 128\n    input_bias_2: 128\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态配置-2",
      children: "动态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定输出的色域格式，动态场景下，inputFormat可以改变，但是output_format不可变，否则会报错，因为输出的格式一般是固定的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "csc_func {\n    switch: true\n    dynamic: true\n    output_format: RGB888_U8\n    color_space: JPEG\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图片缩放resize",
      children: "图片缩放(Resize)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片缩放功能支持图片放大缩小，采用双线性插值方式进行缩放。缩放输出图片最小为16x16，缩放输出最大为448x448。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dynamic不写或者写成\"false\"表示静态配置，写成\"true\"表示动态配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "静态配置-3",
      children: "静态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "resize_func {\n    switch: true\n    resize_output_w: 182\n    resize_output_h: 182\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态配置-3",
      children: "动态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resize_output_w、resize_output_h为预分配最大size。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "resize_func {\n    switch: true\n    dynamic: true\n    resize_output_w: 250\n    resize_output_h: 200\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据类型转换dtc",
      children: "数据类型转换(DTC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据类型转化功能是指将输入的图片数据类型通过转化公式转换为FP16类型送给后续模块计算，实际为依次执行减均值、减最小值和乘方差操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dynamic不写或者写成\"false\"表示静态配置，写成\"true\"表示动态配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "静态配置-4",
      children: "静态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dtc_func {\n    switch: true\n    mean_chn_0: 4\n    mean_chn_1: 4\n    mean_chn_2: 4\n    min_chn_0: 2.0\n    min_chn_1: 2.0\n    min_chn_2: 2.0\n    var_reci_chn_0: 2.0\n    var_reci_chn_1: 2.0\n    var_reci_chn_2: 2.0\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态配置-4",
      children: "动态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以不写具体的参数，在动态创建input tensor时指定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dtc_func {\n    switch: true\n    dynamic: true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图片旋转rotation",
      children: "图片旋转(Rotation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "旋转功能支持图片旋转90°、180°和270°，以适配手机在不同方向时的图像数据。当前旋转功能只支持静态单算子场景，动态场景以及卷积融合场景不支持。静态配置如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "rotate_para {\n    switch: true\n    dynamic: true\n    rotation_angle: 0.0\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图片补边",
      children: "图片补边"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片补边功能支持在图片上下左右padding指定大小的数据。 padding的数据可以按通道来设置不同的值，最多补四个通道，如果有的通道没有设置的话，就默认补0，上下左右Padding的大小最大为32，即最多上下各补32行，左右各补32列。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当crop或resize作为最后一个AIPP算子时，它的输出shape固定，即输出shape不可动态调整。后面如果接卷积，卷积的输入shape就是crop或resize的输出shape。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当crop或者resize后接padding算子时"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果padding算子是静态的，那么padding算子前面的crop或resize也相当于是静态的，输出shape固定不变，crop或resize的输出shape加上padding的值就是后面卷积的shape。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果padding算子是动态的，那么padding算子的四个padding值就写0。此时，padding算子前的crop或resize的输出就是后面卷积的shape。动态时可以调整参数值，但是要保证最终的输出等于卷积的输入。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dynamic不写或者写成\"false\"表示静态配置，写成\"true\"表示动态配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "静态配置-5",
      children: "静态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "padding_func {\n    switch: true\n    left_padding_size: 21\n    right_padding_size: 21\n    top_padding_size: 21\n    bottom_padding_size: 21\n    padding_value_chn_0: 20.0\n    padding_value_chn_1: 20.0\n    padding_value_chn_2: 20.0\n    padding_value_chn_3: 20.0\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态配置-5",
      children: "动态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "padding算子是动态的，padding算子的四个padding值就写0，padding value的值在动态创建input tensor时指定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "padding_func {\n    switch: true\n    dynamic: true\n    left_padding_size: 0\n    right_padding_size: 0\n    top_padding_size: 0\n    bottom_padding_size: 0\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整aipp动态配置示例",
      children: "完整AIPP动态配置示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aipp_op {\n    input_para {\n        shape {\n            src_image_size_w: 480\n            src_image_size_h: 384\n        }\n    }\n    crop_func {\n        switch: true\n        dynamic: true\n        load_start_pos_w: 50\n        load_start_pos_h: 50\n        crop_size_w: 150\n        crop_size_h: 150\n    }\n    resize_func {\n        switch: true\n        dynamic: true\n        resize_output_w: 250\n        resize_output_h: 200\n    }\n    padding_func {\n        switch: true\n        dynamic: true\n        left_padding_size: 0\n        right_padding_size: 0\n        top_padding_size: 0\n        bottom_padding_size: 0\n    }\n    swap_func {\n        dynamic: true\n        ax_swap_switch: true\n    }\n    csc_func {\n        switch: true\n        dynamic: true\n        output_format: RGB888_U8\n        color_space: JPEG\n    }\n    dtc_func {\n        switch: true\n        dynamic: true\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整aipp静态配置",
      children: "完整AIPP静态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aipp_op {\n    input_para {\n        shape {\n            src_image_size_w: 480\n            src_image_size_h: 384\n        }\n        format: AYUV444_U8\n    }\n    crop_func {\n        switch: true\n        load_start_pos_w: 50\n        load_start_pos_h: 50\n        crop_size_w: 150\n        crop_size_h: 150\n    }\n    resize_func {\n        switch: true\n        resize_output_w: 182\n        resize_output_h: 182\n    }\n    padding_func {\n        switch: true\n        left_padding_size: 21\n        right_padding_size: 21\n        top_padding_size: 21\n        bottom_padding_size: 21\n    }\n    swap_func {\n        ax_swap_switch: true\n    }\n    csc_func {\n        switch: true\n        matrix_r0c0: 256\n        matrix_r0c1: 454\n        matrix_r0c2: 0\n        matrix_r1c0: 256\n        matrix_r1c1: -88\n        matrix_r1c2: -183\n        matrix_r2c0: 256\n        matrix_r2c1: 0\n        matrix_r2c2: 359\n        output_bias_0: 0\n        output_bias_1: 0\n        output_bias_2: 0\n        input_bias_0: 0\n        input_bias_1: 128\n        input_bias_2: 128\n    }\n    dtc_func {\n        switch: true\n        mean_chn_0: 4\n        mean_chn_1: 4\n        mean_chn_2: 4\n        min_chn_0: 2.0\n        min_chn_1: 2.0\n        min_chn_2: 2.0\n        var_reci_chn_0: 2.0\n        var_reci_chn_1: 2.0\n        var_reci_chn_2: 2.0\n}\n    rotate_func {\n        switch: true\n        rotate_angle: 180.0\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动静态混合配置示例",
      children: "动静态混合配置示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动静混合场景不支持配置rotate旋转参数，因为此时模型是动态的，动态场景暂不支持rotate旋转参数的配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aipp_op {\n    input_para {\n        shape {\n            src_image_size_w: 200\n            src_image_size_h: 200\n        }\n        format: ARGB8888_U8\n    }\n    crop_func {\n        switch: true\n        dynamic: true\n        crop_size_w: 100\n        crop_size_h: 100\n    }\n    resize_func {\n        switch: true\n        resize_output_w: 200\n        resize_output_h: 200\n    }\n    padding_func {\n        switch: true\n        right_padding_size: 24\n        bottom_padding_size: 24\n    }\n    swap_func {\n        rbuv_swap_switch: true\n        ax_swap_switch: true\n    }\n    dtc_func {\n        switch: true\n        mean_chn_0: 4\n        mean_chn_1: 4\n        mean_chn_2: 4\n        min_chn_0: 2.0\n        min_chn_1: 2.0\n        min_chn_2: 2.0\n        var_reci_chn_0: 2.0\n        var_reci_chn_1: 2.0\n        var_reci_chn_2: 2.0\n    }\n}\n"
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