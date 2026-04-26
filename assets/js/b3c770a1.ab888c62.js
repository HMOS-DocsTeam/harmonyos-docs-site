"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["299956"], {
187861(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_data_type_definition_cannkit_localtensor_cannkit_localtensor_md_b3c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-data-type-definition-cannkit-localtensor-cannkit-localtensor-md-b3c.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_data_type_definition_cannkit_localtensor_cannkit_localtensor_md_b3c_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor/cannkit-localtensor","title":"LocalTensor","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor/cannkit-localtensor.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"LocalTensor","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-localtensor","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通用约束","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints/"},"next":{"title":"GlobalTensor","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-globaltensor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor/cannkit-localtensor.md


const frontMatter = {
	title: 'LocalTensor',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-localtensor',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'LocalTensor';

const assets = {

};



const toc = [{
  "value": "功能说明",
  "id": "功能说明",
  "level": 2
}, {
  "value": "定义原型",
  "id": "定义原型",
  "level": 2
}, {
  "value": "函数说明",
  "id": "函数说明",
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
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "localtensor",
        children: "LocalTensor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于存放AI Core中Local Memory（内部存储）的数据，支持QuePosition为VECIN、VECOUT、VECCALC、A1、A2、B1、B2、CO1、CO2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定义原型",
      children: "定义原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> class LocalTensor : public BaseLocalTensor<T> {\npublic:\n    using PrimType = PrimT<T>;\n    __aicore__ inline LocalTensor<T>() {};\n#if defined(ASCENDC_CPU_DEBUG) && ASCENDC_CPU_DEBUG == 1\n    ~LocalTensor();\n    explicit LocalTensor<T>(TBuffAddr& address);\n    LocalTensor<T>(const LocalTensor<T>& other);\n    LocalTensor<T> operator = (const LocalTensor<T>& other);\n    PrimType* GetPhyAddr(const uint32_t offset) const;\n    PrimType* GetPhyAddr() const;\n    __inout_pipe__(S) PrimType GetValue(const uint32_t offset) const;\n    __inout_pipe__(S) PrimType& operator()(const uint32_t offset) const;\n    template <typename CAST_T> __aicore__ inline LocalTensor<CAST_T> ReinterpretCast() const;\n    template <typename T1> __inout_pipe__(S) void SetValue(const uint32_t index, const T1 value) const;\n    LocalTensor operator[](const uint32_t offset) const;\n    template <typename T1> void SetAddrWithOffset(LocalTensor<T1> &src, uint32_t offset);\n    inline void Print();\n    inline void Print(uint32_t len);\n    int32_t ToFile(const std::string& fileName) const;\n#else\n    __aicore__ inline uint64_t GetPhyAddr() const;\n    __aicore__ inline uint64_t GetPhyAddr(const uint32_t offset) const;\n    __aicore__ inline __inout_pipe__(S) PrimType GetValue(const uint32_t index) const;\n    __aicore__ inline __inout_pipe__(S) __ubuf__ PrimType& operator()(const uint32_t offset) const;\n    template <typename CAST_T> __aicore__ inline LocalTensor<CAST_T> ReinterpretCast() const;\n    template <typename T1> __aicore__ inline __inout_pipe__(S)\n        void SetValue(const uint32_t index, const T1 value) const;\n    __aicore__ inline LocalTensor operator[](const uint32_t offset) const;\n    template <typename T1> \n    [[deprecated(\"NOTICE: SetAddrWithOffset has been deprecated and will be removed in the next version. \"\n        \"Please do not use it!\")]]\n    __aicore__ inline void SetAddrWithOffset(LocalTensor<T1> &src, uint32_t offset);\n#endif\n    __aicore__ inline int32_t GetPosition() const;\n    __aicore__ inline void SetSize(const uint32_t size);\n    __aicore__ inline uint32_t GetSize() const;\n    [[deprecated(\"NOTICE: GetLength has been deprecated and will be removed in the next version. Please do not use \"\n                 \"it!\")]]\n    __aicore__ inline uint32_t GetLength() const;\n    [[deprecated(\"NOTICE: SetBufferLen has been deprecated and will be removed in the next version. Please do not use \"\n                 \"it!\")]]\n    __aicore__ inline void SetBufferLen(uint32_t dataLen);\n    __aicore__ inline void SetUserTag(const TTagType tag);\n    __aicore__ inline TTagType GetUserTag() const;\n    // ...\n    __aicore__ inline void SetShapeInfo(const ShapeInfo& shapeInfo);\n    __aicore__ inline ShapeInfo GetShapeInfo() const;\n    // ...\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型T支持基础数据类型，但需要遵循使用此LocalTensor的指令的数据类型支持情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 函数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "入参说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset：偏移量，单位为'element'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取LocalTensor中的某个值，返回PrimType类型的数值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "该接口仅在LocalTensor的TPosition为VECIN/VECCALC/VECOUT时支持。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset：偏移值，单位为'element'  value：设置值，单位为任意类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置LocalTensor中的某个值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "该接口仅在LocalTensor的TPosition为VECIN/VECCALC/VECOUT时支持。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operator[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset：偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取距原LocalTensor起始地址偏移量为offset的新LocalTensor，注意offset不能超过原有LocalTensor的size大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operator()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset: 下标索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本LocalTensor的第offset个变量的引用。用于左值，相当于SetValue接口，用于右值，相当于GetValue接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前LocalTensor size大小。单位为元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size：元素个数，单位为'element'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前LocalTensor size大小。单位为元素。当开发者重用local tensor变量且使用长度发生变化的时候，需要使用此接口重新设置Size。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetUserTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag：设置的Tag信息，类型TTagType对应为int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为Tensor添加开发者自定义信息，开发者可以根据需要设置对应的Tag。后续可通过GetUserTag获取指定Tensor的Tag信息，并根据Tag信息对Tensor进行相应操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetUserTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定Tensor块的Tag信息，开发者可以根据Tag信息对Tensor进行不同操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReinterpretCast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将当前Tensor重解释为开发者指定的新类型，转换后的Tensor与原Tensor地址及内容完全相同，Tensor的大小(字节数)保持不变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetPhyAddr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回LocalTensor的地址，如果传入offset，则表示偏移offset个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取QuePosition抽象的逻辑位置，支持QuePosition为VECIN、VECOUT、VECCALC、A1、A2、B1、B2、CO1、CO2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取LocalTensor数据长度，单位为Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetShapeInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shapeInfo：ShapeInfo结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置LocalTensor的shapeInfo。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetShapeInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取LocalTensor的shapeInfo。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Shape信息没有默认值，只有通过SetShapeInfo设置过Shape信息后，才可以调用该接口获取正确的ShapeInfo。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetAddrWithOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "src：基础地址的Tensor，将该Tensor的地址作为基础地址，设置偏移后的Tensor地址  offset：偏移的长度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置带有偏移的Tensor地址。用于快速获取定义一个Tensor，同时指定新Tensor相对于旧Tensor首地址的偏移。偏移的长度为旧Tensor的元素个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetBufferLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dataLen：buffer长度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置buffer长度。单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ToFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fileName：文件名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只限于CPU调试，将LocalTensor数据Dump到文件中，用于精度调试，文件保存在执行目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Print"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dataLen：打印元素个数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只限于CPU调试，在调试窗口中打印LocalTensor数据用于精度调试，每一行打印一个datablock(32Bytes)的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不要大量使用SetValue对LocalTensor进行赋值，会使性能下降。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// srcLen = 256, num = 100, M=50\n// 示例1\nfor (int32_t i = 0; i < srcLen; ++i) {\n    inputLocal.SetValue(i, num); // 对inputLocal中第i个位置进行赋值为num\n}\n// 示例1结果如下：\n// 数据(inputLocal): [100 100 100  ... 100]\n \n// 示例2\nfor (int32_t i = 0; i < srcLen; ++i) {\n    auto element = inputLocal.GetValue(i); // 获取inputLocal中第i个位置的数值\n}\n// 示例2结果如下：\n// element 为100\n \n// 示例3\nfor (int32_t i = 0; i < srcLen; ++i) {\n    inputLocal(i) = num; // 对inputLocal中第i个位置进行赋值为num\n}\n// 示例3结果如下：\n// 数据(inputLocal): [100 100 100  ... 100]\n \n// 示例4\nfor (int32_t i = 0; i < srcLen; ++i) {\n    auto element = inputLocal(i); // 获取inputLocal中第i个位置的数值\n}\n// 示例4结果如下：\n// element 为100\n \n// 示例5\nauto size = inputLocal.GetSize(); // 获取inputLocal的长度，size大小为inputLocal有多少个element\n// 示例5结果如下：\n// size大小为srcLen，256。\n \n// 示例6\n// operator[]使用方法, inputLocal[16]为从起始地址开始偏移量为16的新tensor\nAscendC::Add(outputLocal[16], inputLocal[16], inputLocal2[16], M);\n// 示例6结果如下：\n// 输入数据(inputLocal): [100 100 100 ... 100]\n// 输入数据(inputLocal2): [1 2 3 ... 66]\n// 输出数据(outputLocal): [... 117 118 119 ... 166]\n \n// 示例7\nAscendC::TTagType tag = 10;\ninputLocal.SetUserTag(tag); // 对LocalTensor设置tag信息。\n \n// 示例8\nAscendC::LocalTensor<half> tensor1 = que1.DeQue<half>();\nAscendC::TTagType tag1 = tensor1.GetUserTag();\nAscendC::LocalTensor<half> tensor2 = que2.DeQue<half>();\nAscendC::TTagType tag2 = tensor2.GetUserTag();\nAscendC::LocalTensor<half> tensor3 = que3.AllocTensor<half>();\n/* 使用Tag控制条件语句执行 */\nif ((tag1 <= 10) && (tag2 >= 9)) {\n    AscendC::Add(tensor3, tensor1, tensor2, TILE_LENGTH); // 当tag1小于等于10，tag2大于等于9的时候，才能进行相加操作。\n}\n// 示例9\n// input_local为int32_t 类型，包含16个元素(64字节)\nfor (int32_t i = 0; i < 16; ++i) {\n    inputLocal.SetValue(i, i); // 对inputLocal中第i个位置进行赋值为i\n}\n \n// 调用ReinterpretCast将input_local重解释为int16_t类型\nAscendC::LocalTensor<int16_t> interpreTensor = inputLocal.ReinterpretCast<int16_t>();\n// 示例9结果如下，二者数据完全一致，在物理内存上也是同一地址，仅根据不同类型进行了重解释\n// inputLocal:0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\n// interpreTensor:0 0 1 0 2 0 3 0 4 0 5 0 6 0 7 0 8 0 9 0 10 0 11 0 12 0 13 0 14 0 15 0\n \n// 示例10\n// 调用GetPhyAddr()返回LocalTensor地址，CPU上返回的是指针类型(T*)，NPU上返回的是物理存储的地址(uint64_t)\n#ifdef ASCEND_CPU_DEBUG\nfloat *inputLocalCpuPtr = inputLocal.GetPhyAddr();\nuint64_t realAddr = (uint64_t)inputLocalCpuPtr - (uint64_t)(GetTPipePtr()->GetBaseAddr(static_cast<int8_t>(AscendC::QuePosition::VECCALC)));\n#else\nuint64_t realAddr = inputLocal.GetPhyAddr();\n#endif\n \n// 示例11\nAscendC::QuePosition srcPos = (AscendC::QuePosition)inputLocal.GetPosition();\nif (srcPos == AscendC::QuePosition::VECCALC) {\n    // 处理逻辑1\n} else if (srcPos == AscendC::QuePosition::A1) {\n    // 处理逻辑2\n} else {\n    // 处理逻辑3\n}\n \n// 示例12\n// 获取localTensor的长度(单位为Byte)，数据类型为int32_t，所以是16*sizeof(int32_t)\nuint32_t len = inputLocal.GetLength();\n// inputLocal:0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\n// len: 64\n \n// 示例13 设置Tensor的ShapeInfo信息\nAscendC::LocalTensor<float> maxUb = softmaxMaxBuf.template Get<float>();\nuint32_t shapeArray[] = {16, 1024};\nmaxUb.SetShapeInfo(AscendC::ShapeInfo(2, shapeArray, AscendC::DataFormat::ND));\n \n// 示例14 获取Tensor的ShapeInfo信息\nAscendC::ShapeInfo maxShapeInfo = maxUb.GetShapeInfo();\nuint32_t orgShape0 = maxShapeInfo.originalShape[0];\nuint32_t orgShape1 = maxShapeInfo.originalShape[1];\nuint32_t orgShape2 = maxShapeInfo.originalShape[2];\nuint32_t orgShape3 = maxShapeInfo.originalShape[3];\nuint32_t shape2 = maxShapeInfo.shape[2];\n \n// 示例15 SetAddrWithOffset，用于快速获取定义一个Tensor，同时指定新Tensor相对于旧Tensor首地址的偏移\n// 需要注意，偏移的长度为旧Tensor的元素个数\nAscendC::LocalTensor<float> tmpBuffer1 = tempBmm2Queue.AllocTensor<float>();\nAscendC::LocalTensor<half> tmpHalfBuffer;\ntmpHalfBuffer.SetAddrWithOffset(tmpBuffer1, calcSize * 2);\n \n// 示例16 SetBufferLen 如下示例将申请的Tensor长度修改为1024(单位为字节)\nAscendC::LocalTensor<float> tmpBuffer2 = tempBmm2Queue.AllocTensor<float>();\ntmpBuffer2.SetBufferLen(1024);\n \n// 示例17 SetSize 如下示例将申请的Tensor长度修改为256(单位为元素)\nAscendC::LocalTensor<float> tmpBuffer3 = tempBmm2Queue.AllocTensor<float>();\ntmpBuffer3.SetSize(256);\n \n#ifdef ASCEND_CPU_DEBUG\n// 示例18 只限于CPU调试，将LocalTensor数据Dump到文件中，用于精度调试，文件保存在执行目录\nAscendC::LocalTensor<float> tmpTensor = softmaxMaxBuf.template Get<float>();\ntmpTensor.ToFile(\"tmpTensor.bin\");\n \n// 示例19 只限于CPU调试，在调试窗口中打印LocalTensor数据用于精度调试，每一行打印一个datablock(32Bytes)的数据\nAscendC::LocalTensor<int32_t> inputLocal = softmaxMaxBuf.template Get<int32_t>();\nfor (int32_t i = 0; i < 16; ++i) {\n    inputLocal.SetValue(i, i); // 对input_local中第i个位置进行赋值为i\n}\ninputLocal.Print();\n// 0000: 0 1 2 3 4 5 6 7 8\n// 0008: 9 10 11 12 13 14 15\n#endif\n"
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