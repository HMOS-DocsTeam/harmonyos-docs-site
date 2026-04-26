"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["228447"], {
973576(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_video_encoding_roi_video_encoding_roi_md_507_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-video-encoding-roi-video-encoding-roi-md-507.json
var site_docs_avcodec_kit_audio_video_codec_video_encoding_roi_video_encoding_roi_md_507_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/video-encoding-roi/video-encoding-roi","title":"ROI视频编码","description":"基础概念","source":"@site/docs/avcodec-kit/audio-video-codec/video-encoding-roi/video-encoding-roi.md","sourceDirName":"avcodec-kit/audio-video-codec/video-encoding-roi","slug":"/avcodec-kit/audio-video-codec/video-encoding-roi/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding-roi/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"ROI视频编码","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-roi","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"典型场景的视频编码配置","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding-configuration-typical-scenarios/"},"next":{"title":"视频解码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-decoding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/video-encoding-roi/video-encoding-roi.md


const frontMatter = {
	title: 'ROI视频编码',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-roi',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'ROI视频编码';

const assets = {

};



const toc = [{
  "value": "基础概念",
  "id": "基础概念",
  "level": 2
}, {
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "参数要求说明",
  "id": "参数要求说明",
  "level": 2
}, {
  "value": "生效机制说明",
  "id": "生效机制说明",
  "level": 2
}, {
  "value": "开发示例",
  "id": "开发示例",
  "level": 2
}, {
  "value": "Surface模式下通过NativeBuffer接口配置ROI",
  "id": "surface模式下通过nativebuffer接口配置roi",
  "level": 3
}, {
  "value": "Surface模式下通过编码输入回调接口配置ROI",
  "id": "surface模式下通过编码输入回调接口配置roi",
  "level": 3
}, {
  "value": "Buffer模式下配置ROI",
  "id": "buffer模式下配置roi",
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
        id: "roi视频编码",
        children: "ROI视频编码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础概念",
      children: "基础概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始支持ROI视频编码（Region Of Interest Video Coding），该功能是基于硬件H.264/H.265编码能力扩展的高级优化技术。其核心逻辑为对画面中指定的重点区域分配更多编码资源实现高画质编码。在有限带宽条件下保障ROI区域内容清晰呈现，显著提升整体视觉体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可自主定义视频画面中的ROI区域（如直播中的人脸、监控中的车牌等），并通过设定质量偏移参数，调节ROI区域与非ROI区域的编码质量差异，实现编码资源的差异化分配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROI视频编码适用于因网络带宽限制导致码率不能满足视频画质要求，且能明确定义关键画面内容（ROI区域）的场景。比如视频通话、视频直播、安全监控等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各场景中ROI区域的选择建议如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "秀场直播：将主播面部区域设为ROI，优化人脸细节（如肤色、五官轮廓），提升观众沉浸式观看体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "户外直播：将主播主体/核心拍摄景物（如自然风光、赛事画面核心区域）设为ROI，在移动网络带宽波动时保障核心内容清晰。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "电商直播：将商品展示区域（如美妆试色、电子产品细节）设为ROI，清晰呈现商品外观、材质与功能细节，助力商品转化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网课视频：将课件文字、讲义图表、板书内容区域设为ROI，保证知识点清晰可读，降低视觉疲劳，提升教学效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全监控：将摄像头画面中的人脸、车牌、出入口等关键区域设为ROI，提升抓拍清晰度，便于后续识别分析。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了支持不同的编码场景，提供了三类ROI编码开发示例，开发者可根据实际业务和技术架构选择。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "不同场景对照点"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "直播/视频通话场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "录像场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "编辑导出/内容发布场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ROI信息生产者"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ROI信息获取方式"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过相机元数据回调获取"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过相机元数据回调获取"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用自管理"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "编码视频帧直接生产者"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "编码模式"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surface模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surface模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer模式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ROI管理&对齐方式"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于时间戳匹配"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于回调时机匹配"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ROI参数配置方式"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeBuffer元数据配置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码输入参数回调配置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码输入buffer回调配置"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "开发示例"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#surface%E6%A8%A1%E5%BC%8F%E4%B8%8B%E9%80%9A%E8%BF%87nativebuffer%E6%8E%A5%E5%8F%A3%E9%85%8D%E7%BD%AEroi",
              children: "Surface模式下通过NativeBuffer接口配置ROI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#surface%E6%A8%A1%E5%BC%8F%E4%B8%8B%E9%80%9A%E8%BF%87%E7%BC%96%E7%A0%81%E8%BE%93%E5%85%A5%E5%9B%9E%E8%B0%83%E6%8E%A5%E5%8F%A3%E9%85%8D%E7%BD%AEroi",
              children: "Surface模式下通过编码输入回调接口配置ROI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buffer%E6%A8%A1%E5%BC%8F%E4%B8%8B%E9%85%8D%E7%BD%AEroi",
              children: "Buffer模式下配置ROI"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持的编码器："
        })
      }), " H.264 8bit硬件编码、H.265 8bit硬件编码、H.265 10bit硬件编码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持的码控模式："
        })
      }), " VBR(Variable Bit Rate)、CBR(Constant Bit Rate)、SQR(Stable Quality Rate Control)。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "依赖ROI检测识别能力："
        })
      }), " 编码器不具备ROI的检测识别能力，所以ROI编码技术生效依赖于开发者输入的ROI信息。开发者可根据业务场景自行设计并实现ROI识别能力，或通过调用系统相机模块原生提供的人脸区域信息，降低开发成本，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-metadata#%E7%8A%B6%E6%80%81%E7%9B%91%E5%90%AC",
        children: "相机人脸ROI获取示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数要求说明",
      children: "参数要求说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持开发者通过字符串形式下发ROI配置参数，参数需满足\"Top,Left-Bottom,Right=DeltaQp\"格式，所有参数均为整数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ROI是一个矩形区域，Top，Left和Bottom，Right分别定义了ROI的区域在图像中的左上角和右下角的坐标位置（如图1所示）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DeltaQp指定编码量化参数（Quantization Parameter）的差异值，DeltaQp绝对值越大，ROI区域与非ROI区域的编码质量差异越大。DeltaQp为负表示ROI区域编码画质优于非ROI区域。\"=DeltaQp\"可以省略，省略时使用默认参数（=-3）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多个ROI参数之间通过\";\"连接, 多ROI配置如\"Top1,Left1-Bottom1,Right1=DeltaQp1;Top2,Left2-Bottom2,Right2=DeltaQp2\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一帧最多支持配置6个ROI区域，按照配置顺序，多出的ROI区域将被忽略。总ROI面积不能超过图片面积的1/5。按照配置顺序依次累加，仅生效累加面积在限制之内的ROI区域。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1：ROI坐标和最大允许面积占比示意图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(436775)/* ["default"] */.A) + "",
        width: "412",
        height: "735"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生效机制说明",
      children: "生效机制说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置ROI支持两种方式：", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "NativeBuffer元数据配置方式"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "编码输入回调配置方式"
        })
      }), "。编码输入回调配置方式包含编码输入参数回调（Surface模式）和编码输入buffer回调（Buffer模式）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NativeBuffer元数据配置方式（推荐）：从API version 22开始支持使用OH_NativeBuffer_MetaDataKey的ROI枚举OH_REGION_OF_INTEREST_METADATA，在NativeBuffer的元数据中配置ROI参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编码输入回调配置方式：使用视频编码参数OH_MD_KEY_VIDEO_ENCODER_ROI_PARAMS在编码输入回调中配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通用生效机制："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ROI参数支持随帧下发并实时生效，开发者无需进行能力查询或配置全局开关。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果系统编码器不支持ROI编码能力，编码器会忽略ROI参数，进行普通编码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DeltaQp有效取值范围为[-51, 51]，编码器会在ROI区域的QP上叠加DeltaQp，然后限制到[minQp, maxQp]范围内得到最终QP。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当某一帧未配置ROI参数时，若上一帧生效了ROI编码，则复用上一帧ROI信息进行当前帧ROI编码；若上一帧是普通编码，则进行普通编码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当某一帧配置的ROI参数无法解析出任何有效ROI信息时，进行普通编码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果多个ROI区域产生交叠，按照配置顺序，仅最先配置的ROI区域会在交叠处生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "NativeBuffer元数据配置方式独有机制："
        })
      }), " 最大支持256Byte长度字符，超出部分会被截断。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "空字符串处理差异："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NativeBuffer元数据配置方式：不允许配置空字符串，视作未配置ROI参数，当前帧会继承历史帧信息进行ROI编码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编码输入回调配置方式：允许配置空字符串，但因无法解析出有效ROI信息，编码时按照普通编码方式进行编码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(644604)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因空字符串处理存在差异，应避免配置空字符串。如需关闭某一帧的ROI编码，可配置无位置信息的字符串，如\"Clear\"或\";\"等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "同时配置时的生效优先级："
        })
      }), " 当某一帧的两种方式均有配置ROI参数，仅生效以编码输入回调配置方式下发的ROI参数，无论其能否解析出有效ROI信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "surface模式下通过nativebuffer接口配置roi",
      children: "Surface模式下通过NativeBuffer接口配置ROI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统相机获取视频帧的接口和获取ROI信息的接口是两个独立的回调接口，需要根据视频时间戳和ROI信息时间戳进行数据同步匹配，并在编码前完成相应帧的ROI配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155463)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROI信息需与相机视频帧信息严格对齐。实际应用中，若两个接口处理不同步，可能导致ROI调用错位；高负载场景下，还可能出现连续两帧ROI时间戳相同的异常。当出现上述情况，不影响编码功能正常运行，开发者可结合编码画质评估结果，自主决定是否继续使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在具体业务场景中，相机获取的视频帧会经过一系列的图像处理，如美颜、滤波和增强等前处理（如图2所示），开发者可以根据实际的业务需求进行模块增减。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2：NativeBuffer元数据接口配置ROI流程图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(777128)/* ["default"] */.A) + "",
        width: "1224",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "详细开发步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMakeList.txt中链接动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "set(BASE_LIBRARY\n    libnative_media_codecbase.so libnative_media_core.so libnative_media_venc.so libnative_window.so\n    libnative_buffer.so libnative_image.so libEGL.so libGLESv3.so\n)\ntarget_link_libraries(recorder PUBLIC ${BASE_LIBRARY})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(432882)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述'recorder'字样仅为示例，此处应由开发者根据具体的CMake工程目标名称进行替换。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听相机元数据回调接口获取人脸位置信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何注册相机元数据回调可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-metadata#%E7%8A%B6%E6%80%81%E7%9B%91%E5%90%AC",
            children: "相机元数据状态监听"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit'\nimport { BusinessError } from '@kit.BasicServicesKit'\nimport recorder from 'librecorder.so';\n\ninterface FaceBoundingBox {\n    topLeftX: number;\n    topLeftY: number;\n    width: number;\n    height: number;\n}\n\nonMetadataObjectsAvailable(metadataOutput: camera.MetadataOutput): void {\n    metadataOutput.on('metadataObjectsAvailable', (err: BusinessError, metadataObjectArr: Array<camera.MetadataObject>) => {\n        if (err !== undefined && err.code !== 0) {\n            return;\n        }\n        const faceBoundingBoxes: Array<FaceBoundingBox> = [];\n        let unifiedTimestamp = 0;\n        let timestampSet = false;\n \n        for (const metadataObject of metadataObjectArr) {\n            if (metadataObject.type === camera.MetadataObjectType.FACE_DETECTION) {\n                if (!timestampSet) {\n                    unifiedTimestamp = metadataObject.timestamp;\n                    timestampSet = true;\n                }\n                faceBoundingBoxes.push({\n                    topLeftX: metadataObject.boundingBox.topLeftX,\n                    topLeftY: metadataObject.boundingBox.topLeftY,\n                    width: metadataObject.boundingBox.width,\n                    height: metadataObject.boundingBox.height\n                })\n            }\n        }\n        if (faceBoundingBoxes.length > 0) {\n            // 下发人脸位置信息到Native层（this.nativeRecorderObj是Native层实例）。\n            recorder.UpdateFaceRect(this.nativeRecorderObj, unifiedTimestamp, faceBoundingBoxes);\n        }\n    });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native层解析TS层传递的人脸位置信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct FaceRect {\n    double topLeftX;\n    double topLeftY;\n    double width;\n    double height;\n};\n\nstatic napi_value UpdateFaceRect(napi_env env, napi_callback_info info)\n{\n    size_t argc = 3;\n    napi_value args[3] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    if (argc < 3) {\n        return nullptr;\n    }\n    // 解析native实例。\n    int64_t addrValue = 0;\n    bool flag = false;\n    napi_get_value_bigint_int64(env, args[0], &addrValue, &flag);\n    Recorder *recorder = reinterpret_cast<Recorder *>(addrValue);\n    if (recorder == nullptr) {\n        return nullptr;\n    }\n    // 解析时间戳。\n    int64_t timestamp = 0;\n    napi_get_value_int64(env, args[1], &timestamp);\n    // 解析人脸Rect。\n    napi_value faceRectArray = args[2];\n    bool isArray;\n    napi_is_array(env, faceRectArray, &isArray);\n    if (!isArray) {\n        return nullptr;\n    }\n    uint32_t arrayLength;\n    napi_get_array_length(env, faceRectArray, &arrayLength);\n    std::vector<FaceRect> faceRectVec;\n    for (uint32_t i = 0; i < arrayLength; i++) {\n        FaceRect item = {0};\n        napi_value faceRectObj;\n        napi_get_element(env, faceRectArray, i, &faceRectObj);\n        napi_value propValue;\n        napi_get_named_property(env, faceRectObj, \"topLeftX\", &propValue);\n        napi_get_value_double(env, propValue, &item.topLeftX);\n        napi_get_named_property(env, faceRectObj, \"topLeftY\", &propValue);\n        napi_get_value_double(env, propValue, &item.topLeftY);\n        napi_get_named_property(env, faceRectObj, \"width\", &propValue);\n        napi_get_value_double(env, propValue, &item.width);\n        napi_get_named_property(env, faceRectObj, \"topLeftX\", &propValue);\n        napi_get_value_double(env, propValue, &item.height);\n        faceRectVec.push_back(item);\n    }\n    recorder->ConvertToRoi(timestamp, faceRectVec);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "转换成ROI信息格式字符串并保存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <map>\n#include <mutex>\n#include <sstream>\n#include <string>\n\nconst int width = 1920;   // 视频帧宽度。\nconst int height = 1080;  // 视频帧高度。\nconst int qpOffset = -6;  // QP偏移参数。\nstd::map<int64_t, std::string> g_roiStrMap; // 时间戳和ROI信息映射。\nstd::mutex g_roiMutex;\n\nvoid Recorder::ConvertToRoi(int64_t timestamp, std::vector<FaceRect>* faceRectVec)\n{\n    std::string mergedRoiStr;\n    // 遍历所有faceRect。\n    for (const auto& faceRect : faceRectVec) {\n        // 归一化坐标转像素坐标。\n        int left = static_cast<int32_t>(faceRect.topLeftX * width);\n        int top = static_cast<int32_t>(faceRect.topLeftY * height);\n        int right = static_cast<int32_t>(faceRect.width * width) + left;\n        int bottom = static_cast<int32_t>(faceRect.height * height) + top;\n\n        // 拼接当前人脸框的格式字符串（top,left-bottom,right=QpOffset;）。\n        std::ostringstream oss;\n        oss << mergedRoiStr; // 拼接已有片段。\n        oss << top << \",\" << left << \"-\" << bottom << \",\" << right << \"=\" << qpOffset << \";\";\n        mergedRoiStr = oss.str();\n    }\n\n    if (!mergedRoiStr.empty()) {\n        std::lock_guard<std::mutex> lock(g_roiMutex);\n        // 此场景可获取视频帧时间戳，基于时间戳匹配。\n        g_roiStrMap[timestamp] = mergedRoiStr;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于视频帧时间戳查找匹配的ROI信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要包含的头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <EGL/egl.h>\n#include <EGL/eglext.h>\n#include <GLES3/gl3.h>\n#include <GLES2/gl2ext.h>\n#include <native_image/native_image.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建NativeImage用来接收视频帧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GLuint textureId;\nglGenTextures(1, &textureId);\n// 创建NativeImage实例，关联纹理。\nOH_NativeImage* image = OH_NativeImage_Create(textureId, GL_TEXTURE_EXTERNAL_OES);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取NativeImage对应NativeWindow，作为相机预览流的目标窗口。并通过OH_NativeImage_SetOnFrameAvailableListener注册回调OH_OnFrameAvailableListener获取视频帧更新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在回调后更新NativeImage。\nint32_t ret = OH_NativeImage_UpdateSurfaceImage(image);\nif (ret != 0) {\n    // 异常处理。\n}\n// 获取视频帧时间戳。\nint64_t imageTimeStamp = OH_NativeImage_GetTimestamp(image);\n// 使用视频帧时间戳找到与之对应的ROI信息。\nstd::lock_guard<std::mutex> lock(g_roiMutex);\nauto it = g_roiStrMap.find(imageTimeStamp);\nstd::string noRoiStr = \";\"; // 随元数据配置方式，需配置非空无效字符串关闭本视频帧ROI编码。\nstd::string roiInfo = (it != g_roiStrMap.end()) ? it->second : noRoiStr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将ROI信息设置到视频帧NativeBuffer元数据中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要包含的头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_videoencoder.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <native_window/external_window.h> \n#include <native_buffer/native_buffer.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "经过系列egl处理后，生成了用于编码的视频帧纹理。需要使用eglSwapBuffers函数将纹理绘制到编码器的输入NativeWindow中。编码输入NativeWindow获取方式如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVCodec *codec = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_HEVC);\nOHNativeWindow *nativeWindow = nullptr;\nOH_VideoEncoder_GetSurface(codec, &nativeWindow);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["绘制之前获取最新的NativeBuffer，并配置ROI信息。绘制过程可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/opengles/opengles#%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B",
            children: "OpenGLES示例"
          }), "，最终通过eglSwapBuffers送绘制好的数据到编码器进行编码。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int fenceFd = -1;\nOHNativeWindowBuffer *winBuffer = nullptr;\n// 从Surface中请求一帧OHNativeWindowBuffer。\nint32_t ret = OH_NativeWindow_NativeWindowRequestBuffer(nativeWindow, &winBuffer, &fenceFd);\nif (ret != 0) {\n    // 异常处理。\n}\n// 将OHNativeWindowBuffer转换为NativeBuffer。\nOH_NativeBuffer *nativeBuffer = nullptr;\nOH_NativeBuffer_FromNativeWindowBuffer(winBuffer, &nativeBuffer);\n// 配置ROI信息到NativeBuffer元数据中。\nint32_t ret = OH_NativeBuffer_SetMetaDataValue(nativeBuffer,\n    OH_NativeBuffer_MetaDataKey::OH_REGION_OF_INTEREST_METADATA, roiInfo.size,\n    reinterpret_cast<uint8_t *>(roiInfo.data()));\nif (ret != 0) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "surface模式下通过编码输入回调接口配置roi",
      children: "Surface模式下通过编码输入回调接口配置ROI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在此场景中，视频帧被直接送入编码器窗口（如图3所示）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机输出视频帧和元数据（如果存在）的时间相近。设置编码输入参数的回调后，编码器在接收到视频帧时会触发回调。在回调中，如果获取成功，则该视频帧包含匹配的ROI信息；如果获取超时，则该视频帧不包含匹配的ROI信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3：编码输入参数回调接口配置ROI流程图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23363)/* ["default"] */.A) + "",
        width: "942",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "详细开发步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMakeList.txt中链接动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "set(BASE_LIBRARY\n    libnative_media_codecbase.so libnative_media_core.so libnative_media_venc.so\n)\ntarget_link_libraries(recorder PUBLIC ${BASE_LIBRARY})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(434589)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述'recorder'字样仅为示例，此处应由开发者根据具体的CMake工程目标名称进行替换。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听相机元数据回调接口获取人脸位置信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同", (0,jsx_runtime.jsx)(_components.a, {
            href: "#surface%E6%A8%A1%E5%BC%8F%E4%B8%8B%E9%80%9A%E8%BF%87nativebuffer%E6%8E%A5%E5%8F%A3%E9%85%8D%E7%BD%AEroi",
            children: "Surface模式下通过NativeBuffer接口配置ROI"
          }), "步骤2。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native层解析TS层传递的人脸位置信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同", (0,jsx_runtime.jsx)(_components.a, {
            href: "#surface%E6%A8%A1%E5%BC%8F%E4%B8%8B%E9%80%9A%E8%BF%87nativebuffer%E6%8E%A5%E5%8F%A3%E9%85%8D%E7%BD%AEroi",
            children: "Surface模式下通过NativeBuffer接口配置ROI"
          }), "步骤3。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "转换成ROI信息格式字符串并保存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编码参数回调的设计中未包含视频帧的时间戳字段，为配合后续对齐，需要使用线程安全的先入先出队列管理ROI信息，参考实现如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// RoiFifoQueue.h\n#include <queue>\n#include <string>\n#include <mutex>\n#include <condition_variable>\n#include <chrono>\n\nclass RoiFifoQueue {\npublic:\n    void push(const std::string& roiStr) {\n        std::lock_guard<std::mutex> lock(mtx);\n        roiQueue.push(roiStr);\n        cv.notify_one(); // 通知等待的取数线程。\n    }\n\n    bool pop(std::string& outRoiStr, const std::chrono::milliseconds& timeout) {\n        std::unique_lock<std::mutex> lock(mtx);\n        if (!cv.wait_for(lock, timeout, [this]() {\n            return !roiQueue.empty() || isStopped;\n        })) {\n            return false; // 超时则无ROI。\n        }\n        if (isStopped || roiQueue.empty()) {\n            return false;\n        }\n        outRoiStr = roiQueue.front();\n        roiQueue.pop();\n        return true;\n    }\n\n    void clear() {\n        std::lock_guard<std::mutex> lock(mtx);\n        while (!roiQueue.empty()) {\n            roiQueue.pop();\n        }\n    }\n\n    void stop() {\n        std::lock_guard<std::mutex> lock(mtx);\n        isStopped = true;\n        cv.notify_all(); // 唤醒所有等待的线程。\n    }\n\n    ~RoiFifoQueue() {\n        stop();\n    }\n};\nprivate:\n    std::queue<std::string> roiQueue;    // 存储合并后的完整ROI字符串。\n    std::mutex mtx;                      // 互斥锁保护队列。\n    std::condition_variable cv;          // 条件变量用于超时等待。\n    bool isStopped = false;              // 停止标志。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "转换成ROI信息格式并保存在队列中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <sstream>\n#include \"RoiFifoQueue.h\"\n\nconst int width = 1920;   // 视频帧宽度。\nconst int height = 1080;  // 视频帧高度。\nconst int qpOffset = -6;  // QP偏移参数。\nRoiFifoQueue g_roiStrQueue;\n\nvoid Recorder::ConvertToRoi(int64_t timestamp, std::vector<FaceRect>* faceRectVec)\n{\n    std::string mergedRoiStr;\n    // 遍历所有faceRect。\n    for (const auto& faceRect : faceRectVec) {\n        // 归一化坐标转像素坐标。\n        int left = static_cast<int32_t>(faceRect.topLeftX * width);\n        int top = static_cast<int32_t>(faceRect.topLeftY * height);\n        int right = static_cast<int32_t>(faceRect.width * width) + left;\n        int bottom = static_cast<int32_t>(faceRect.height * height) + top;\n\n        // 拼接当前人脸框的格式字符串（top,left-bottom,right=QpOffset;）。\n        std::ostringstream oss;\n        oss << mergedRoiStr; // 拼接已有片段。\n        oss << top << \",\" << left << \"-\" << bottom << \",\" << right << \"=\" << qpOffset << \";\";\n        mergedRoiStr = oss.str();\n    }\n\n    if (!mergedRoiStr.empty()) {\n        std::lock_guard<std::mutex> lock(g_roiMutex);\n        // 此场景可获取视频帧时间戳，基于时间戳匹配。\n        g_roiStrQueue.push(mergedRoiStr);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在编码输入参数回调中配置ROI信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要包含的头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_videoencoder.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVCodec *codec = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_HEVC);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["视频编码的详细操作步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-encoding",
            children: "视频编码"
          }), "开发指南，下面仅针对ROI编码做具体说明。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const std::chrono::milliseconds ROI_WAIT_TIMEOUT = std::chrono::milliseconds(4); // 4ms超时。\nstatic void OnNeedInputParameter(OH_AVCodec *codec, uint32_t index, OH_AVFormat *parameter, void *userData)\n{\n    (void)codec;\n    (void)userData;\n    std::string roiInfo = \"\";\n    if (!g_roiStrQueue.pop(roiInfo, ROI_WAIT_TIMEOUT)) {\n        roiInfo = \";\"; // 与NativeBuffer通路统一。\n    }\n    // 找到ROI配置，ROI编码生效；找不到ROI，普通编码生效。\n    OH_AVFormat_SetStringValue(parameter, OH_MD_KEY_VIDEO_ENCODER_ROI_PARAMS, roiInfo.c_str());\n    OH_VideoEncoder_PushInputParameter(codec, index);\n}\n\n// 注册随帧参数回调。\nOH_VideoEncoder_OnNeedInputParameter inParaCb = OnNeedInputParameter;\nOH_VideoEncoder_RegisterParameterCallback(codec, inParaCb, nullptr);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer模式下配置roi",
      children: "Buffer模式下配置ROI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在该场景中，视频帧和ROI均由应用提供，并采用buffer模式编码。开发者可以参考前文所述的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基于时间戳匹配"
        })
      }), "或", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基于回调时机匹配"
        })
      }), "两种对齐方式来实现ROI与视频帧的对齐，并在编码输入Buffer回调中完成ROI参数的配置（如图4所示）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4：编码输入Buffer回调接口配置ROI流程图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515264)/* ["default"] */.A) + "",
        width: "873",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["准备步骤同", (0,jsx_runtime.jsx)(_components.a, {
        href: "#surface%E6%A8%A1%E5%BC%8F%E4%B8%8B%E9%80%9A%E8%BF%87%E7%BC%96%E7%A0%81%E8%BE%93%E5%85%A5%E5%9B%9E%E8%B0%83%E6%8E%A5%E5%8F%A3%E9%85%8D%E7%BD%AEroi",
        children: "Surface模式下通过编码输入回调接口配置ROI"
      }), "步骤1-4，此处仅说明配置差异。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在编码输入Buffer回调中配置ROI信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    (void)codec;\n    (void)userData;\n    auto format = std::shared_ptr<OH_AVFormat>(OH_AVBuffer_GetParameter(buffer), OH_AVFormat_Destroy);\n    if (format == nullptr) {\n        // 异常处理。\n    }\n    std::string roiInfo = \"\";\n    if (!g_roiStrQueue.pop(roiInfo, ROI_WAIT_TIMEOUT)) {\n        roiInfo = \";\"; // 与NativeBuffer通路统一。\n    }\n    OH_AVFormat_SetStringValue(format.get(), OH_MD_KEY_VIDEO_ENCODER_ROI_PARAMS, roiInfo.c_str());\n\n    // 此处还需做视频帧填充，此处忽略。\n    // 通知编码器buffer输入完成。\n    OH_VideoEncoder_PushInputBuffer(codec, index);\n}\n\nstatic void OnStreamChanged(OH_AVCodec *codec, OH_AVFormat *format, void *userData)\n{\n    // 此处仅作定义，实现忽略。\n}\n\nstatic void OnError(OH_AVCodec *codec, int32_t errorCode, void *userData)\n{\n    // 此处仅作定义，实现忽略。\n}\n\nstatic void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 此处仅作定义，实现忽略。\n}\n\nOH_AVCodecCallback cb = {&OnError, &OnStreamChanged, &OnNeedInputBuffer, &OnNewOutputBuffer};\nOH_AVErrCode ret = OH_VideoEncoder_RegisterCallback(videoEnc, cb, nullptr);\n"
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
155463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
515264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958550-dfa9ee51fd7f9a9d2d683d8b087bc9f3.png");

},
432882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
436775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478549-89997e124ee6089123ff0d3bb2f80254.png");

},
777128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798900-9db034070a2ca67c8d097492dcd6f1b8.png");

},
23363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438595-890b4f82dcd2999d7d887520bc94f72c.png");

},
644604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
434589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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