"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["777862"], {
722067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_aipp_cannkit_aipp_parameters_cannkit_aipp_parameters_md_85c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-conversion-cannkit-aipp-cannkit-aipp-parameters-cannkit-aipp-parameters-md-85c.json
var site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_aipp_cannkit_aipp_parameters_cannkit_aipp_parameters_md_85c_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-parameters/cannkit-aipp-parameters","title":"AIPP参数","description":"AIPP分为静态AIPP和动态AIPP，两者使用严格区分，静态AIPP模型不能接收模型推理时传入的AIPP参数，不兼容动态AIPP场景，静态与动态AIPP区别详见下表。","source":"@site/docs/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-parameters/cannkit-aipp-parameters.md","sourceDirName":"cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-parameters","slug":"/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-parameters/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-parameters/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"AIPP参数","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-aipp-parameters","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-overview/"},"next":{"title":"模型转换AIPP配置文件说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-configuration-file/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-parameters/cannkit-aipp-parameters.md


const frontMatter = {
	title: 'AIPP参数',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-aipp-parameters',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'AIPP参数';

const assets = {

};



const toc = [{
  "value": "AIPP支持的输入格式",
  "id": "aipp支持的输入格式",
  "level": 2
}, {
  "value": "AIPP支持的功能",
  "id": "aipp支持的功能",
  "level": 2
}, {
  "value": "Crop",
  "id": "crop",
  "level": 3
}, {
  "value": "Channel Swap",
  "id": "channel-swap",
  "level": 3
}, {
  "value": "Color Space Conversion",
  "id": "color-space-conversion",
  "level": 3
}, {
  "value": "Resize",
  "id": "resize",
  "level": 3
}, {
  "value": "Data Type Conversion",
  "id": "data-type-conversion",
  "level": 3
}, {
  "value": "Rotation",
  "id": "rotation",
  "level": 3
}, {
  "value": "Padding",
  "id": "padding",
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
        id: "aipp参数",
        children: "AIPP参数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP分为静态AIPP和动态AIPP，两者使用严格区分，静态AIPP模型不能接收模型推理时传入的AIPP参数，不兼容动态AIPP场景，静态与动态AIPP区别详见下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AIPP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置AIPP参数方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "优点"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "静态AIPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在模型生成时通过配置文件或者IR构图预置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更高效率，模型加载阶段即可完成AIPP初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "动态AIPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅标记该模型具备AIPP处理功能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更灵活，每次推理可传入不同AIPP参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aipp支持的输入格式",
      children: "AIPP支持的输入格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP可配置的图片格式如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YUV420SP_U8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XRGB8888_U8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ARGB8888_U8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YUYV_U8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YUV422SP_U8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AYUV444_U8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YUV400_U8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RGB888_U8"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式后缀U8表示图片像素点为Uint8类型，范围为0到255。当图片的输入为YUV类型时，无论是YUV420还是YUV422或者YUYV，AIPP自动将图片数据补齐为YUV444格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除以上列举的图片类型，AIPP还可以通过开启Channel Swap通道交换功能，支持更加丰富的图片输入格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973461)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YUYV_U8和AYUV444_U8当前版本不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aipp支持的功能",
      children: "AIPP支持的功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP按照芯片的处理顺序，支持的功能如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#crop",
          children: "Crop"
        }), "：图片裁剪。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#channel-swap",
          children: "Channel Swap"
        }), "：通道交换。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#color-space-conversion",
          children: "Color Space Conversion"
        }), "：色域转换。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#resize",
          children: "Resize"
        }), "：图片缩放。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#data-type-conversion",
          children: "Data Type Conversion"
        }), "：数据类型转换。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#rotation",
          children: "Rotation"
        }), "：图片旋转。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#padding",
          children: "Padding"
        }), "：图片补边。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "crop",
      children: "Crop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP的Crop功能用于对输入图片进行裁剪，涉及参数如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "取值范围"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪使能开关。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false/true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "load_start_pos_w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪起始位置水平方向坐标。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "load_start_pos_w < src_image_size_w"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "load_start_pos_h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪起始位置垂直方向坐标。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "load_start_pos_h < src_image_size_h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "crop_size_w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪出的图像宽度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "load_start_pos_w + crop_size_w <= src_image_size_w"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "crop_size_h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪出的图像高度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "load_start_pos_h + crop_size_h <= src_image_size_h"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YUV类型的图片受图片自身类型的限制，当输入图片类型为YUV420SP、YUYV、YUV422SP和AYUV444时，裁剪的起始坐标和裁剪的宽高都应该是偶数，系统会进行校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "channel-swap",
      children: "Channel Swap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP支持两种类型的通道交换：RB/UV通道交换和AX通道交换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RB/UV通道交换丰富了输入图片的格式，开启RB/UV通道交换后，AIPP支持的图片输入格式比可配置的输入类型丰富了一倍。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可接受图片类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YUV420SP_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV420，YVU420 + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XRGB8888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XRGB，XBGR + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARGB8888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARGB，ABGR + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RGB888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGR + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YUYV_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUYV，YVYU + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YUV422SP_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV422，YVU422 + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AYUV444_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AYUV + rbuv_swap_switch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当配置的图片输入格式为XRGB、ARGB或AYUV时，支持开启AX通道交换。开启通道交换后，图片第一个通道的输入被搬移到第四个通道上，即当XRGB、ARGB和AYUV开启AX通道交换后，转变为RGBX、RGBA和YUVA。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当模型训练集为RGB格式的图片，而推理时的图片输入为XRGB或者ARGB时，可以通过使能AX通道交换，将RGB通道前移，实现兼容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "color-space-conversion",
      children: "Color Space Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "色域转换（Color Space Conversion，以下简称CSC），特指在YUV444和RGB888两种图片格式之间进行转换。涉及如下配置参数。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "取值范围"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "csc_switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSC开关。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true/false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix_r0c0  matrix_r0c1  matrix_r0c2  matrix_r1c0  matrix_r1c1  matrix_r1c2  matrix_r2c0  matrix_r2c1  matrix_r2c2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSC矩阵元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-32677, 32676]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "output_bias_0  output_bias_1  output_bias_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB转YUV时的输出偏移。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 255]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "input_bias_0  input_bias_1  input_bias_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV转RGB时的输入偏移。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 255]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考1：YUV和BGR的转换公式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "YUV转BGR"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(10668)/* ["default"] */.A) + "",
            width: "533",
            height: "74"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BGR转YUV"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(223418)/* ["default"] */.A) + "",
            width: "533",
            height: "68"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考2：BT-601 narrow、JPEG和BT-709 narrow三种类型图片的转换公式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BT-601 narrow"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(154707)/* ["default"] */.A) + "",
            width: "400",
            height: "158"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JPEG"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(737786)/* ["default"] */.A) + "",
            width: "400",
            height: "172"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BT-709 narrow"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(752530)/* ["default"] */.A) + "",
            width: "400",
            height: "163"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用配置文件生成静态AIPP模型时，需要根据以上的公式配置CSC矩阵以及\"input_bias\"或者\"output_bias\"的值。使用IR定义AIPP CSC功能算子，以及使用CANN Kit接口配置CSC参数时，支持传入目标类型，由系统来填充CSC配置参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为JPEG和BT-601NARROW两种图片类型下的CSC配置参考。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入为YUV格式图片(YUV420/YUYV/YUV422SP/AYUV444)，模型训练集为RGB，不支持从YUV400到RGB的转换。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "JPEG"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601NARROW"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601FULL"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-709NARROW"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 256  matrix_r0c1 : 0  matrix_r0c2 : 359  matrix_r1c0 : 256  matrix_r1c1 : -88  matrix_r1c2 : -183  matrix_r2c0 : 256  matrix_r2c1 : 454  matrix_r2c2 : 0  input_bias_0 : 0  input_bias_1 : 128  input_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 298  matrix_r0c1 : 0  matrix_r0c2 : 409  matrix_r1c0 : 298  matrix_r1c1 : -100  matrix_r1c2 : -208  matrix_r2c0 : 298  matrix_r2c1 : 516  matrix_r2c2 : 0  input_bias_0 : 16  input_bias_1 : 128  input_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 256  matrix_r0c1 : 0  matrix_r0c2 : 359  matrix_r1c0 : 256  matrix_r1c1 : -88  matrix_r1c2 : -183  matrix_r2c0 : 256  matrix_r2c1 : 454  matrix_r2c2 : 0  input_bias_0 : 0  input_bias_1 : 128  input_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 298  matrix_r0c1 : 0  matrix_r0c2 : 460  matrix_r1c0 : 298  matrix_r1c1 : -55  matrix_r1c2 : -137  matrix_r2c0 : 298  matrix_r2c1 : 541  matrix_r2c2 : 0  input_bias_0 : 16  input_bias_1 : 128  input_bias_2 : 128"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入为YUV格式图片(YUV420/YUYV/YUV422SP/AYUV444)，模型训练集为BGR，不支持从YUV400到BGR的转换。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "JPEG"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601NARROW"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601FULL"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-709NARROW"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 256  matrix_r0c1 : 454  matrix_r0c2 : 0  matrix_r1c0 : 256  matrix_r1c1 : -88  matrix_r1c2 : -183  matrix_r2c0 : 256  matrix_r2c1 : 0  matrix_r2c2 : 359  input_bias_0 : 0  input_bias_1 : 128  input_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 298  matrix_r0c1 : 516  matrix_r0c2 : 0  matrix_r1c0 : 298  matrix_r1c1 : -100  matrix_r1c2 : -208  matrix_r2c0 : 298  matrix_r2c1 : 0  matrix_r2c2 : 409  input_bias_0 : 16  input_bias_1 : 128  input_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 256  matrix_r0c1 : 454  matrix_r0c2 : 0  matrix_r1c0 : 256  matrix_r1c1 : -88  matrix_r1c2 : -183  matrix_r2c0 : 256  matrix_r2c1 : 0  matrix_r2c2 : 359  input_bias_0 : 0  input_bias_1 : 128  input_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 298  matrix_r0c1 : 541  matrix_r0c2 : 0  matrix_r1c0 : 298  matrix_r1c1 : -55  matrix_r1c2 : -137  matrix_r2c0 : 298  matrix_r2c1 : 0  matrix_r2c2 : 460  input_bias_0 : 16  input_bias_1 : 128  input_bias_2 : 128"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入为YUV格式图片(YUV420/YUYV/YUV422SP/AYUV444)，模型训练集为灰度图（YUV400_U8）。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "JPEG"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601NARROW"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601FULL"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-709NARROW"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 256  matrix_r0c1 : 0  matrix_r0c2 : 0  matrix_r1c0 : 0  matrix_r1c1 : 0  matrix_r1c2 : 0  matrix_r2c0 : 0  matrix_r2c1 : 0  matrix_r2c2 : 0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "N/A"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "N/A"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "N/A"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入为RGB格式图片(XRGB8888/ARGB8888)，模型训练集为灰度图（YUV400_U8）。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "JPEG"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601NARROW"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601FULL"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-709NARROW"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 76  matrix_r0c1 : 150  matrix_r0c2 : 30  matrix_r1c0 : 0  matrix_r1c1 : 0  matrix_r1c2 : 0  matrix_r2c0 : 0  matrix_r2c1 : 0  matrix_r2c2 : 0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "N/A"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "N/A"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "N/A"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入为RGB格式图片(XRGB8888/ARGB8888)，模型训练集为YUV444SP。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "JPEG"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601NARROW"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601FULL"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-709NARROW"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 77  matrix_r0c1 : 150  matrix_r0c2 : 29  matrix_r1c0 : -43  matrix_r1c1 : -85  matrix_r1c2 : 128  matrix_r2c0 : 128  matrix_r2c1 : -107  matrix_r2c2 : -21  output_bias_0 : 0  output_bias_1 : 128  output_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 66  matrix_r0c1 : 129  matrix_r0c2 : 25  matrix_r1c0 : -38  matrix_r1c1 : -74  matrix_r1c2 : 112  matrix_r2c0 : 112  matrix_r2c1 : -94  matrix_r2c2 : -18  output_bias_0 : 16  output_bias_1 : 128  output_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 77  matrix_r0c1 : 150  matrix_r0c2 : 29  matrix_r1c0 : -43  matrix_r1c1 : -85  matrix_r1c2 : 128  matrix_r2c0 : 128  matrix_r2c1 : -107  matrix_r2c2 : -21  output_bias_0 : 0  output_bias_1 : 128  output_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 47  matrix_r0c1 : 157  matrix_r0c2 : 16  matrix_r1c0 : -26  matrix_r1c1 : -87  matrix_r1c2 : 112  matrix_r2c0 : 112  matrix_r2c1 : -102  matrix_r2c2 : -10  output_bias_0 : 16  output_bias_1 : 128  output_bias_2 : 128"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入为RGB格式图片(XRGB8888/ARGB8888)，模型训练集为YVU444SP。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "JPEG"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601NARROW"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-601FULL"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "BT-709NARROW"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 77  matrix_r0c1 : 150  matrix_r0c2 : 29  matrix_r1c0 : 128  matrix_r1c1 : -107  matrix_r1c2 : -21  matrix_r2c0 : -43  matrix_r2c1 : -85  matrix_r2c2 : 128  output_bias_0 : 0  output_bias_1 : 128  output_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 66  matrix_r0c1 : 129  matrix_r0c2 : 25  matrix_r1c0 : 112  matrix_r1c1 : -94  matrix_r1c2 : -18  matrix_r2c0 : -38  matrix_r2c1 : -74  matrix_r2c2 : 112  output_bias_0 : 16  output_bias_1 : 128  output_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 77  matrix_r0c1 : 150  matrix_r0c2 : 29  matrix_r1c0 : 128  matrix_r1c1 : -107  matrix_r1c2 : -21  matrix_r2c0 : -43  matrix_r2c1 : -85  matrix_r2c2 : 128  output_bias_0 : 0  output_bias_1 : 128  output_bias_2 : 128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "matrix_r0c0 : 47  matrix_r0c1 : 157  matrix_r0c2 : 16  matrix_r1c0 : 112  matrix_r1c1 : -102  matrix_r1c2 : -10  matrix_r2c0 : -26  matrix_r2c1 : -87  matrix_r2c2 : 112  output_bias_0 : 16  output_bias_1 : 128  output_bias_2 : 128"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(426605)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从使用的角度，将灰度图转成RGB没有意义，系统约束当输入格式配置为YUV400_U8时，不支持CSC。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resize",
      children: "Resize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片缩放参数及约束如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "取值范围（静态）"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "取值范围（动态）"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放使能开关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false/true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false/true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resize_input_w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放前图像宽度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[16, 4096]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[16, 1280]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resize_input_h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放前图像高度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[16, 4096]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[16, 4096]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resize_output_w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放后图像宽度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[16, 1280]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[16, 448]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resize_output_h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放后图像高度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[16, 4096]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[16, 4096]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片缩放倍数约束如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "范围（动态&静态）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resize_output_w / resize_input_w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像宽度缩放倍数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1/16, 16]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resize_output_h / resize_input_h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像高度缩放倍数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1/16, 16]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resize类型为双线性插值。Resize子功能的\"resize_input_w\"和\"resize_input_h\"两个参数对开发者不可见。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当Crop功能关闭时，图片缩放前的大小取输入图片的大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当Crop功能打开时，因为AIPP的Resize处理总是在Crop之后，图片缩放前的大小取图片裁剪后的大小。配置时，只需要关心缩放后的大小即可。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过配置文件转换静态AIPP模型时，Crop之后的大小crop_size_w和crop_size_h，以及Resize之后的大小resize_output_w和resize_output_h可以省去不配置，前提是这两个参数可以通过计算获取。省略resize_output_w和resize_output_h时，Resize功能这两个值取模型训练集的图片尺寸减去AIPP Padding之后的结果；当Resize不使用时，同理可省略Crop功能crop_size_w和crop_size_h。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-type-conversion",
      children: "Data Type Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据类型转换（Data Type Conversion，以下简称DTC），DTC用于将输入图片中像素值转换为模型训练时的数据类型。AIPP允许开发者设置DTC参数，使得转换之后的数据在一个预期的范围，避免强制转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Uint8类型的数据转换为Int8类型的数据，计算规则如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pixel_out_chx(i) = pixel_in_chx(i)-mean_chn_i"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Uint8类型的数据转换为Float16类型的数据，计算规则如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pixel_out_chx(i) = [pixel_in_chx(i)-mean_chn_i-min_chn_i] * var_reci_chn"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DTC涉及的配置参数如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "取值范围"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTC使能开关。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false/true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mean_chn_0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道0均值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 255]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mean_chn_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道1均值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 255]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mean_chn_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道2均值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 255]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mean_chn_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道3均值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 255]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min_chn_0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道0最小值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min_chn_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道1最小值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min_chn_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道2最小值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min_chn_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道3最小值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "var_reci_chn_0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道0方差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "var_reci_chn_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道1方差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "var_reci_chn_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道2方差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "var_reci_chn_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道3方差。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(154512)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当DTC开关为false时，或者开发者调用CANN Kit接口未传入DTC参数时，系统默认对图片输入数据进行类型强转，效果同通道均值和最小值均为0，通道方差为1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rotation",
      children: "Rotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP的Rotation功能用于对输入图片进行旋转，涉及的参数如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "取值范围"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotation使能开关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false/true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotation_angle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像旋转角度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 90, 180, 270]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "padding",
      children: "Padding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP的Padding功能用于对输入图片进行补边，涉及的参数如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "取值范围"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Padding使能开关。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false/true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "left_padding_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像左侧Padding像素数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "right_padding_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像右侧Padding像素数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top_padding_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像上侧Padding像素数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottom_padding_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像下侧Padding像素数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "padding_value_chn_0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道0 Padding的值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "padding_value_chn_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道1 Padding的值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "padding_value_chn_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道2 Padding的值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "padding_value_chn_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道3 Padding的值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-65504, 65504]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667562)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上下左右的Padding值不要超过32，如果Padding值过大，AIPP将使用软件代码进行处理，效率低于硬件实现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "padding_value_chn_0~padding_value_chn_3暂不支持。"
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
737786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959218-e02bd034fcf99e495e396f0770d9dc23.png");

},
223418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799568-c6bd0322ee5eeb6020700f05a909fa37.png");

},
752530(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479219-42facd3291a46a80792853e33a072422.png");

},
667562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
154512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
10668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479217-4892e9c938c6bb8caa92c1bae9872fe9.png");

},
973461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
426605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
154707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439263-b0cc3062107c6e3a1228a0d8bcd93948.png");

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