"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["401792"], {
858244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_muls_cannkit_scala_65d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-scalar-binocular-instruction-cannkit-scalar-binocular-muls-cannkit-scala-65d.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_muls_cannkit_scala_65d_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-muls/cannkit-scalar-binocular-muls","title":"Muls","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-muls/cannkit-scalar-binocular-muls.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-muls","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-muls/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-muls/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Muls","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-muls","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Adds","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-adds/"},"next":{"title":"Maxs","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-maxs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-muls/cannkit-scalar-binocular-muls.md


const frontMatter = {
	title: 'Muls',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-muls',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Muls';

const assets = {

};



const toc = [{
  "value": "功能说明",
  "id": "功能说明",
  "level": 2
}, {
  "value": "函数原型",
  "id": "函数原型",
  "level": 2
}, {
  "value": "参数说明",
  "id": "参数说明",
  "level": 2
}, {
  "value": "返回值",
  "id": "返回值",
  "level": 2
}, {
  "value": "支持的型号",
  "id": "支持的型号",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "调用示例",
  "id": "调用示例",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "muls",
        children: "Muls"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矢量内每个元素与标量求积，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(505269)/* ["default"] */.A) + "",
        width: "455",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T, bool isSetMask = true> \n__aicore__ inline void Muls(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const T& scalarValue, const int32_t& calCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 模板参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作数数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scalarValue数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSetMask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否在接口内部设置mask模式和mask值。  - true，表示在接口内部设置。  - false，表示在接口外部设置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
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
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dstLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t  KirinX90系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t  KirinX90系列处理器，支持的数据类型为：  前n个tensor、mask连续模式支持：int16_t、int32_t、half、float32_t"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scalarValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数，数据类型需要与目的操作数Tensor中的元素类型保持一致  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t  KirinX90系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入数据元素个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的型号",
      children: "支持的型号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
        children: "通用约束"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本样例中只展示Compute流程中的部分代码。如果开发者需要运行样例代码，请将该代码段拷贝并替换标量双目指令样例模板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocularinstructions",
        children: "更多样例"
      }), "中的Compute函数即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int16_t scalar = 2;\nAscendC::Muls(dstLocal, srcLocal, scalar, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1 2 3 ... 512]\n输入数据 scalar = 2\n输出数据(dstLocal): [2 4 6 ... 1024]\n"
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
505269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAccAAAAmCAYAAACxk1AhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAASaUlEQVR42u2de5RdVX3HP3dmnGQYJjAkMU8SCCRhpMlAEkjolBDDU0oJpCCQocUSKFBtMdj6oKYiiLZoUNvGstRqsQgKGkBxQSoWsIlMQoQQNUwMYLC861TJa4Ammf6xv3vdPXv2Offc12Rmsr9r3TVr7j33nL1/+/f+/fa+EBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERETGI0AC0AEuBfwP+JJKkIGqA0cAZwA2i27hIliGLeuBIYAmwErgeqC3xXvOBjcD0SJchj5HAQ0CP92qPpMmM9gD9+kV+/MX7JTCzws84GtgQmGAP8A2gaRAuWJs3j1ulKCJgHrA9Yb0/PUiV53JvHucW+f0pDp/PA9YAk/X/aGDMIF3rculyoBjH2xSEpGE08ClgG9AFfAE4vIJjaZK+7Ul5PQ58HJhU4jPOAE5O+XxZyrM7gS8CrUCuAD371bmcBKwF7gEOqVKkdQbwsgixDGgcAsz/p5rP4qgHeqEOeJ9o8zJwyRBwHg4CvgJ0KFrKitHAKmA1MEtCfZfe/0MphRsHccRVKl2iccxjuhymG6QXG4ArZaxmV1gPzwc2SzYvlqzaLMBZMjwbgZOKvHeLxjsv5Zqcgq8OPf/jes99dhdw4UAyjqfK219WxWfMlqJcBTQPAcavVSTUrws1iHCuBOCLwLAhMJ/xwCMZowAf4zApx07gs8C/A18CngQuA0YcoHQZCLhQeum6BAelUUbk24rqQlFPkg7IYhyt8+TrxUbg68B9Fc4s2PVKcmZsGvNbRfDlGI0ziy5sED22YzJwoWf/kHCZqijjWFMBYuUcL2F9mdHCVcAJCZ8fowmvBn47BJTlGNHtKeDFaAuDHiLAA8BbQ2BOxwILgCeA7iK/+4ocqdOAUcCl8pBPAW6XojgQ6TLQMV366i7gveRT4ZV2Is8P6MVdwPeBRTLOuQo970gFKhuBVwOfb/P0ddYs0SKN+c0C1x8MHAX8FPiV91mnZOVYGfGyw+RyMQKT510HPF+GYbxawv9s4PNhwIma+IYhIjgtYrIOMUVEHodiUog/wdSxh0KW4GRgq4xAsbCR48PAb4A75AU/Nsgjx3LpMhBwjxTxrcBe5/2xwArJ+YeBCZpvLvA6DthSwrMPwaQTdwBPBz5/VrQ9S/xSCZyIqT8mOTMH6e8ejx5JTvCFwP8BP9I8dhb4zjRgLiYF+5r32XDJyk7dsyzUVYBYk2UcvwO8XsL3R4t5/hpToP9d4JqxwBwxwAtDJDI6SYtYirGfp6ghC34NfBd4exDRZ4rm+L0SeWqgoVkZkVL4dzSmk7MR09W5C1Nb+oQU1Qp50p/MoIyGEl0GunwvwdTnrlbk2FOF51jd+zzhbNoromurrv1Nmc9rAo5PcWbqlAUA04Py3wXuN0P8vRrTf1Eoe5CTYWxSULE3Idv08wzPrviCtwJfU0pnkwixlHCn2Vjgc7p2vZMSukz3qgWu1ed+Dr4tkDpwC7DFoAF4D3C3ntUFfBk4IoO3/iHyxd9N9C5A+5ik8XXqGSuA0zH1CH/czZgaQakNTKH25KRX1lpOTgbp+/re7aLRXPJp8zpgotZjpZR0vb57pmj0gYQMxSzgH8nXXVbJYw7BdqWV0rL+To3hUfJdbNeS3sBlhfobWrvt4vPDU2jVomhhm14fVuosNO4TxQel1uQr1a3apHFuE12WiP8uczz+ctatGnQZpsjnXq1LB6YR6VbytaOcZKpNDvYd5DsmJ2PqfcXUwLJk3MZrXDcAX5VucyO6e4AHvfeLRaGao9WLDyVEhu5ugosqMO+ZyuSE9FYOWKg17xAfpGEMpn4+hnyH+kpFf2mR8j2E650ter9LejeNnpZvKoLDgL/Xw0+XMmkEPoJpClhL73y6LQY/oPdrxNDbAgJiC7xJjGQbV3pSJp2EWVIkdwJTNY5mTDNDh94LKcrLpOj/jHyRe46IOjvh+k5MLahBAn2tBD9UOJ6dYDT3J47FdKH9nebQKMF3GelUejcVtGv+S8lvv1gW4J2VMrrzZUxrZMBCQmZbxovdFmTX4WVlIZrp3d32TwkKZrIU/u3yZOu0fp8lvMWmQev2JKaD2srCCqV5QoK3LIEPSkGp+xxrMV2tG+Xk1ihq65BBocx1qwZd7NrcKQchp7Taf+p71miMk/7Y7jmEsx3ntpKd9JcorWcde79beLrmW0jZl2sc24swjpXYG2kDoZsxtT/rKEyR3ugSvxxX4D6Nuoc1oKfrvssLfM/qza84zlyz9HSnXufTj1s5xijqeoC+BWXrSfiLZ5nD3Zc2DNN56AuC7XRNMhTWeK6luIL2KVLkKwNRgx23/8w6GfzVnuGsBf4mENUOAz5GuHX5GBnYR+hbHL6qgsqyUmgPOCBHYjojR3oeoms0L5aymC1HZKbHO/dJEBq9VOGqBKFO807TDONHRNMlAT5KordtH/+AlxGYKqXq83WTHKvVAcdqPuG9t9bYlxtFlAurGNzx5TBdlu0BmS9m3apBl9/TGvhjsPzXo3UNPatda/tJZTrulGKvtCP6oQSn3SrxrNmdJGU9kIyj2yX6L8D9jqPcqWDodAp3lueUSVgQmEehzMpVThbPddIfkdyPzCgDmYxjoZpjozyCaVKALwS8/KnAP3i54teVB18o5foMpuNwvZf3djtdH0/Iy9vGla8T7o4KwY7p58BN9G14eQvYLcEZrrHbRWtXBLjVM46jlJ75pTP2q2UcL9D4XfQA++hbOG6Skg51W+1PbMXUKM7DNMLs0lo9IVpZHCxPcZOMVzemNtgD/EGAd97QWuzyBO1QOVy/88ZxgtbPCmIWXAD8LXCLHDmfj3aK7kfIybIG4DOKQm7DNBC4Yz8U0yTQ7ThCn5BQX+zxB+TrH2sxjQWugzEPU5Pfn13WOzFNH4uUUXlMdPqZt77Frls16HKE1mRLYAw9uufWgMy16P1fScZu0XeXVIGeDeLTUNOYbQwZSpik9VqrCK/U+uV8THPSKue9KY7dSCsJtElHXSFbshjTT7FJf/utqz2H2UjaI2ORC3x+XUr6y0Zua1Ks9Ch5jkn7UnKK7orxfGz6KG1zfSjHbaPd6zJ6mHM0v5sTnIw2PcOvxYai6oEAG331YE7XSKrR2cjuRjkHDSmR6MuYulIp3mnWqHqc+CdtE/nH6F13qdV7xWw8X6RxXZnAH3a+szNE5PsLti7TKSVViXWrNF2GYXoVNifoFcsjfmbBRqKrgL8gXDKpJI4ULUOpdxs5livjlaw5lnv60GLKP6Vqggyrq1vqRcOeFJ6EfNnHzTTYNcgqxxXb5zhWkdS9wA8C3vhkESyp0+zHmPbzmfL+Qk0D06UEH0/wGkbq863ycLNgolK1Dwc8S2twf1/CtIn8vpoFmGaOxyjcWTYMc4bsbqVs9gQM9JmKnrcEjGorfbutSkmBVrIhZw/wz0qPXRtINVrMkOI5FFNf6E7w8s6Ul1lMi7r1TouJqk/ANHv9B6Yz14ftiNyqDIaNGs+Q1/9Shmc0Y+qZ6xQ19QQyLKcFZKEBs1VhoGxJeUYO0HBFVS1lrls16NKqSO87wC8Cz5wiJfq0l1kYL13TJF2xtcq0nIFpVltD307wndJnEwk3OlUKLymSaiJfA/TXZ5SueamM59Q7WaFS9Vaj7MGNoo/VT28pnbqD9I7648SvazG1TTv/n2gdjq80cWsyKJ3/CqQ96uQptmlwbwS+36MU183yLt/veRy2LRcZpL0JgtBK4VbvmeTP5Jso4/dEgsEdD5wjRbHGEdbjdf3OlMjK0utoebw/JLwvc5o8tQ5PYdfLq1xXhLEP4TngoxlfjxXBzLvEvPcrTXlKwCk4UYz8oxSBs4qqK4Xh6xO8w1bMwQhpaZsFmJqUVaaIT/em8PFa0c16nAvE128nOFDvcP6fpXs8SDi1P9cxKl3O+++UEt1A9pJAtWGd1ndhOkkby1i3StOlVrKJjO3egAyeLxl/xDPGxzq6Yn2VaVgv/nk6wYC/KuM8h9LPGc2C552oKVS3PURr2kHpe9Btdmau5lvKfsxapULvpu8ez1GYWnXSdhTXmdpB7/Lb25iudOTsVvSEpZoCYSzy4n3Fca6U/A6PEY8GPuhFI19W9HmqmNpiBKbeuE7hMgmpyXEpBtgSbpGj+Cy6A8JVK6/03ZgaZqfz/nB5ecMS0gF/6RD/KHkxm+mb525U1GWVfHeAyTZKgCZR2l7TDkXjWV53FfDILvJSmK8pdbIT02Fc72UT5igq/3HKPd+h7x0UmF9OiuUcLw3neqePpox5tIy27yztTrj2auB/Me32tnY13OGd2oBMXEDvMx7diMSPjsYAf6W1Xed93ipHbb3DR/2NZjk6DY7T+l3x/5mYxrFS163SdDlYcrWF8KlRbVKyfmbB8s4rUsDVrj2NkjOddLrVdinxFumbuiqN47fK6o0j3CFqT6l5kPD+8ayYpvXqSMjOFEKb0swhnXGweCjtdJyxml/IVjwt+zCv0o5IsSfk5GTkdivK+qkWaJzDNDM8b3S7Y4TwDKlNqf6PPIORnlCfHDDA/njOl7KzTS875LXVeso3J6X6fqUOv+QYzz1anKmKtmzbeL08khuVPt3lpJ8IpBSbyG//sKf5THQUsGWyp3TtjIABtzWV/vpZmimegkQCvyVFSAod4femeOQ8TIfZCGdNP6ho7nuewpyge6d5p3XA5XIsbHPH646D40e5VyiyuV4C5EbIO6S4LhHNcxrDp/ScNZ4AE1C6E5ReH677P+c4gLUSWFsSaFUq2oetg1Src3mk+Mx99lsJDmmx61ZputRJLvbQ+4STnOizUPLylJ7Z7Bmrh53UebGw9bssZQh75F2H5tMWyJp9W9Ht9UphH1UlI/mAMj3z6b2Pc4R01/0BWQtFwrbu1x6Qo3Oc7Ex3kfbiLGXZksZwiJzYtNNxFiqoCGUDX1R2rFXOfMU6ktOM43oN+GIxbCOmHfoNpRLfJQZvIV9zm4w5DmiJGKxGHt15mNbwFwNezQZNfJ+TemkErpHhezUgfPUyrreImR91jMxm4F8x9dL5GkOjjNYdwDdlAHd5SuFuRSOXSJj36blXiMHdjtNf6NrFUgR1iqjeK2YcIQV/kLzrffreHP3dovE/GmCYbkU73+wHwzhcSutKKawardtFStW4J+vYNHioS9DHNkzDRBNmv+AbmucLotXn6V2nHYnZKjNXztSbAYdhptZ1qff8+0TzazQXa+RuxdTDLsdsAHfp/DNMF/Vk/d2tNdqkl3/9k54s1MvonkS+QeA5ea6THeU0U3PuFm1DBqlLCmRtFaOcsx1jl1NK+iKt7+Yy1q3SdLHHoNl0rN2X/D5d+4ycua1SmPVOmnw2fTtii4HVPRNJ35voloOel1ENlVZeEk+vw9TUnpXBL2YrRxa8hunIn66MVYNofJ3eu4m+x6z5eNtxdid5zuhZ5H/lYk9GA29l8DPSq0lZoBHSoVMVHU7zbFKN9NKVjt7312avnBCUqfhj+uEXm+ym6m2K/D4qC29TJj9QynSs851Ldc1p8uJ69HdxgKhniyHvxdSx7Kk5nyZ7s4nd4zI+4O1cTn4DcKeYZEqKZ2Ejy3udaDfpZJUazcnut/kq+d8RG4HpmlsP/JGz2LViWHsiSFqXZw/9sweyWWvWpLna032+pmjDV7IPkn3/YYOMfIfDB6d5zJ/lN+Ky/IbnWCnzbc6zlpJ+Isph4ulOrffdmBpaiD+GyfhaWVhB/oSlw/W8hyTIOSel+y3xwcIUvltOdX+Z5T1SOrM0R3vKTFKncZZ1qyZdxkqvbJfzeI0jg2dLfj7v6B3b0R7qiC0Gdo9koY37teQ3vN8sPioUuf85pnmti8r/KofFEaJbl9bjekdfZzFmN9C7ozup6S8LnZdTuDFwecL9NyhwSPsdX/+0H7sX3n6+nfBPX+2Xn6yKqGwa7DYqd1BwxMDGdGVAGiIp9ivsQRGLBpguyGocy4F1UtdQ+FjNwa5bK3YIQET/4xilZLoiKQ4I2AP1uyMp9htaMKnbm5QRO5CQw2S4ZmH2h26L7GBQE0kw4LAQc2pLxNBHAyYdvyGSYr/qwFMxZ+/6NdUDAYdhGq0uJb0D/YBDjBwHXtg/gXB3b8TQg21++HUkxX7DPszhFwcquij912IiIvoNbRR3qk3E4IZtelgeSRGR4Czb49/cV3skTdEyVqnu4IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIquP/AYTYewnFCZ+ZAAAAAElFTkSuQmCC");

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