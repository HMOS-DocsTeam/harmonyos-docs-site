"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["528414"], {
124557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_video_encoding_temporal_scalability_video_encoding_temporal_scalability_md_fcc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-video-encoding-temporal-scalability-video-encoding-temporal-scalability-md-fcc.json
var site_docs_avcodec_kit_audio_video_codec_video_encoding_temporal_scalability_video_encoding_temporal_scalability_md_fcc_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/video-encoding-temporal-scalability/video-encoding-temporal-scalability","title":"时域可分层视频编码","description":"基础概念","source":"@site/docs/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability/video-encoding-temporal-scalability.md","sourceDirName":"avcodec-kit/audio-video-codec/video-encoding-temporal-scalability","slug":"/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"时域可分层视频编码","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-temporal-scalability","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"视频编码同步模式","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/synchronous-video-encoding/"},"next":{"title":"B帧视频编码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding-b-frame/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability/video-encoding-temporal-scalability.md


const frontMatter = {
	title: '时域可分层视频编码',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-temporal-scalability',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '时域可分层视频编码';

const assets = {

};



const toc = [{
  "value": "基础概念",
  "id": "基础概念",
  "level": 2
}, {
  "value": "时域可分层视频编码介绍",
  "id": "时域可分层视频编码介绍",
  "level": 3
}, {
  "value": "时域分层码流结构介绍",
  "id": "时域分层码流结构介绍",
  "level": 3
}, {
  "value": "如何实现时域分层码流结构",
  "id": "如何实现时域分层码流结构",
  "level": 3
}, {
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "全局时域可分层特性（Feature_Temporal_Scalability）",
  "id": "全局时域可分层特性feature_temporal_scalability",
  "level": 2
}, {
  "value": "接口介绍",
  "id": "接口介绍",
  "level": 3
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 3
}, {
  "value": "长期参考帧特性（Feature_Long-Term_Reference）",
  "id": "长期参考帧特性feature_long-term_reference",
  "level": 2
}, {
  "value": "接口介绍",
  "id": "接口介绍-1",
  "level": 3
}, {
  "value": "开发指导",
  "id": "开发指导-1",
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
        id: "时域可分层视频编码",
        children: "时域可分层视频编码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础概念",
      children: "基础概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时域可分层视频编码介绍",
      children: "时域可分层视频编码介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可分层视频编码"
        })
      }), "，又叫可分级视频编码、可伸缩视频编码，是视频编码的扩展标准，目前广泛使用的包含SVC（H.264编码标准采用的可伸缩扩展）和SHVC（H.265编码标准采用的可扩展标准）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其特点是能一次编码出时域分层、空域分层、质量域分层的码流结构，满足因网络、终端能力和用户需求不同带来的差异化需求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "时域可分层视频编码"
        })
      }), "，是指能编码出时域分层码流的视频编码，下图展示了通过参考关系构建的4层时域分层码流结构。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(182559)/* ["default"] */.A) + "",
        width: "634",
        height: "189"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从高到低逐层丢弃部分层级的码流（丢弃顺序L3->L2->L1），能实现不同程度的帧率伸缩，以满足传输和解码能力的变化需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，这是上述4层时域分层码流结构丢弃L3后组成的新的码流结构，能在解码正常的情况下实现帧率减半的效果。其他层的丢弃同理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(366005)/* ["default"] */.A) + "",
        width: "635",
        height: "178"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时域分层码流结构介绍",
      children: "时域分层码流结构介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础码流是由一个或多个独立图像组（Group Of Pictures，简称GOP）组合而成的视频码流。GOP是在编码中一组从I帧开始到I帧结束的连续的可独立解码的图像组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时域分层码流可以在GOP内继续细分为独立的一个或多个时域图像组（Temporal Group Of Pictures，简称TGOP），每一个TGOP由一个基本层和后续的一个或多个增强层组合而成，如上述4层时域分层码流结构中的帧0到帧7是一个TGOP。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "基本层（Base Layer，简称BL）："
          })
        }), " 是GOP中的最底层（L0）。在时域分层中，该层用最低帧率进行编码。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "增强层（Enhance Layer，简称EL）："
          })
        }), " 是BL之上的层级，由低到高可以分为多层（L1、L2、L3）。在时域分层中，最低层的EL参考BL，进一步编码帧率更高的层级，更高层的EL会参考BL或低层EL，来编码比低层更高帧率的视频。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何实现时域分层码流结构",
      children: "如何实现时域分层码流结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时域分层码流结构的实现依赖于逐帧指定的参考关系，参考帧根据在解码图像缓存区（Decoded Picture Buffer，简称DPB）驻留的时长分为短期参考帧和长期参考帧。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "短期参考帧（Short-Term Reference，简称STR）："
          })
        }), " 是不能长期驻留在DPB中的参考帧，更新方式是先进先出，如果DPB满，旧的短期参考帧会被移出DPB。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "长期参考帧（Long-Term Reference，简称LTR）："
          })
        }), " 是能长期驻留在DPB中的参考帧，通过标记替换的方式更新，不主动标记替换就不会更新。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "虽然STR个数大于1时，也能实现一定的跨帧参考结构，但受限于存在时效过短，时域分层结构支持的跨度有限。LTR则不存在上述问题，也能覆盖短期参考帧跨帧场景。优选使用LTR实现时域分层码流结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上述描述的时域分层编码特点，推荐以下场景使用："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景1：播放侧无缓存或低缓存的实时编码传输场景，例如视频会议、视频直播、协同办公等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景2：有视频预览播放或倍速播放需求的视频编码录制场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若应用场景不涉及动态调整时域参考结构，且分层结构简单，则推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%85%A8%E5%B1%80%E6%97%B6%E5%9F%9F%E5%8F%AF%E5%88%86%E5%B1%82%E7%89%B9%E6%80%A7feature_temporal_scalability",
        children: "全局时域可分层特性"
      }), "，否则使能", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%95%BF%E6%9C%9F%E5%8F%82%E8%80%83%E5%B8%A7%E7%89%B9%E6%80%A7feature_long-term_reference",
        children: "长期参考帧特性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不可以混用全局时域可分层特性和长期参考帧特性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于底层实现归一，全局时域可分层特性和长期参考帧特性不能同时开启。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "叠加强制IDR配置时，请使用随帧通路配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考帧仅在GOP内有效，刷新I帧后，DPB随之清空，参考帧也会被清空，因此参考关系的指定受I帧刷新位置影响很大。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使能时域分层能力后，若需要通过OH_MD_KEY_REQUEST_I_FRAME临时请求I帧，应使用生效时机确定的随帧通路配置方式准确告知系统I帧刷新位置以避免参考关系错乱，参考随帧通路配置相关指导，避免使用生效时机不确定的OH_VideoEncoder_SetParameter方式。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-encoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频编码Surface模式"
          }), "\"步骤-4\"。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持OH_AVBuffer回调通路，不支持OH_AVMemory回调通路。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新特性依赖随帧特性，应避免使用OH_AVMemory回调OH_AVCodecAsyncCallback，应使用OH_AVBuffer回调OH_AVCodecCallback。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持时域P分层，不支持时域B分层。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "时域可分层编码按分层帧类型分为基于P帧的时域分层和基于B帧的时域编码，当前支持分层P编码，不支持分层B编码。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "均匀分层模式当前只支持TGOP为2或4。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "全局时域可分层特性feature_temporal_scalability",
      children: "全局时域可分层特性（Feature_Temporal_Scalability）"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口介绍",
      children: "接口介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局时域可分层特性，适用于编码稳定和简单的时域分层结构，初始配置全局生效，不支持动态修改。开发配置参数如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "语义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_ENABLE_TEMPORAL_SCALABILITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全局时域可分层编码使能参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_TEMPORAL_GOP_SIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全局时域可分层编码TGOP大小参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_TEMPORAL_GOP_REFERENCE_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全局时域可分层编码TGOP参考模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "全局时域可分层编码使能参数："
            })
          }), " 在配置阶段配置，仅特性支持才会真正使能成功。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "全局时域可分层编码TGOP大小参数："
            })
          }), " 可选配置，影响时域关键帧之间的间隔，用户需要基于自身业务场景下抽帧需求自定义关键帧密度，可在[2, GopSize)范围内配置，若不配置则使用默认值。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "全局时域可分层编码TGOP参考模式参数："
            })
          }), " 可选配置，影响非关键帧参考模式。包括相邻参考ADJACENT_REFERENCE、跨帧参考JUMP_REFERENCE和均匀分层UNIFORMLY_SCALED_REFERENCE。相邻参考相对跨帧参考拥有更好的压缩性能，跨帧参考相对相邻参考拥有更好的丢帧自由度，均匀分层模式丢帧后的码流分布更均匀，如不配置则使用默认值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(639281)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "均匀分层模式当前只支持TGOP为2或4。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用举例1：TGOP=4时的相邻参考模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(104609)/* ["default"] */.A) + "",
        width: "632",
        height: "182"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用举例2：TGOP=4时的跨帧参考模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(881676)/* ["default"] */.A) + "",
        width: "614",
        height: "167"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用举例3：TGOP=4时的均匀分层模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(886405)/* ["default"] */.A) + "",
        width: "614",
        height: "167"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基础编码流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-encoding",
        children: "视频编码开发指导"
      }), "。下面将重点说明与基础视频编码流程中的不同之处。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在初始阶段创建编码实例时，校验视频编码器是否支持全局时域可分层特性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1.1 获取对应视频编码器能力实例，此处以H.264为例。\nOH_AVCapability *cap = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\n// 1.2 通过特性能力查询接口校验是否支持全局时域可分层特性。\nbool isSupported = OH_AVCapability_IsFeatureSupported(cap, VIDEO_ENCODER_TEMPORAL_SCALABILITY);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果支持，则可以使能全局时域可分层特性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建硬件编码器实例。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在配置阶段，设置全局时域可分层编码特性参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "constexpr int32_t TGOP_SIZE = 3;\n// 2.1 创建配置用临时AVFormat。\nauto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\n// 2.2 填充使能参数键值对。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_VIDEO_ENCODER_ENABLE_TEMPORAL_SCALABILITY, 1);\n// 2.3 (可选)填充TGOP大小和TGOP内参考模式键值对。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_VIDEO_ENCODER_TEMPORAL_GOP_SIZE, TGOP_SIZE);\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_VIDEO_ENCODER_TEMPORAL_GOP_REFERENCE_MODE, ADJACENT_REFERENCE);\n// 2.4 参数配置。\nint32_t ret = OH_VideoEncoder_Configure(videoEnc, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在输出轮转中，可以获取码流对应时域层级信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可利用已配置的TGOP参数和编码出帧数目获取时域层级信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "constexpr int32_t TGOP_SIZE = 3;\nuint32_t outPoc = 0;\n// 通过输出回调中有效帧数，获取TGOP内相对位置，对照配置确认层级。\nstatic void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    struct OH_AVCodecBufferAttr attr;\n    OH_AVErrCode ret = OH_AVBuffer_GetBufferAttr(buffer, &attr);\n    if (ret != AV_ERR_OK) {\n        // 异常处理。\n    }\n    // 刷新I帧后POC归零。\n    if (attr.flags & AVCODEC_BUFFER_FLAGS_SYNC_FRAME) {\n        outPoc = 0;\n    }\n    // 只有XPS的输出需要跳过。\n    if (attr.flags != AVCODEC_BUFFER_FLAGS_CODEC_DATA) {\n        int32_t tGopInner = outPoc % TGOP_SIZE;\n        if (tGopInner == 0) {\n            // 时域关键帧，后续传输、解码流程不可丢弃。\n        } else {\n            // 时域非关键帧，后续传输、解码流程可以丢弃。\n        }\n        outPoc++;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在输出轮转中，使用步骤3获取的时域层级信息，自适应传输或自适应解码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据获取的时域可分层码流和对应的层级信息，开发者可选择需要的层级进行传输，或携带至对端自适应选帧解码。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "长期参考帧特性feature_long-term_reference",
      children: "长期参考帧特性（Feature_Long-Term_Reference）"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口介绍-1",
      children: "接口介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长期参考帧特性提供帧级参考关系配置。适用于灵活和复杂的时域分层结构。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "语义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_LTR_FRAME_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长期参考帧个数参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_MARK_LTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前帧标记为LTR帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_USE_LTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前帧参考的LTR帧的POC号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "长期参考帧个数参数："
          })
        }), " 在配置阶段进行设置，应不大于实际查询到的最大支持数目。具体查询方法请参见下文开发指导的“步骤-3”。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "当前帧标记为LTR帧："
          })
        }), " BL层和被跳跃参考的EL层均标记为LTR。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "当前帧参考的LTR帧的POC号："
          })
        }), " 如当前帧需要跳跃参考前面已被标记为LTR帧的POC号。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用举例，实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%97%B6%E5%9F%9F%E5%8F%AF%E5%88%86%E5%B1%82%E8%A7%86%E9%A2%91%E7%BC%96%E7%A0%81%E4%BB%8B%E7%BB%8D",
        children: "时域可分层视频编码介绍"
      }), "中的4层时域分层结构的配置如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在配置阶段，将OH_MD_KEY_VIDEO_ENCODER_LTR_FRAME_COUNT 配置为5。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在运行阶段输入轮转中，按如下表所示随帧配置LTR相关参数，下表中\\表示不做配置。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "配置\\POC"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "5"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "6"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "7"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "8"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "9"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "10"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "11"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "12"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "13"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "14"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "15"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "16"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MARK_LTR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "USE_LTR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\\"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\\"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\\"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\\"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\\"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\\"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\\"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\\"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "12"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\\"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发指导-1",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基础编码流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-encoding",
        children: "视频编码开发指导"
      }), "，下面仅针对与基础视频编码过程中存在的区别做具体说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在初始阶段创建编码实例时，校验当前视频编码器是否支持LTR特性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "constexpr int32_t NEEDED_LTR_COUNT = 5;\nbool isSupported = false;\nint32_t supportedLTRCount = 0;\n// 1.1 获取对应编码器能力实例，此处以H.264为例。\nOH_AVCapability *cap = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\n// 1.2 通过特性能力查询接口校验是否支持LTR特性。\nisSupported = OH_AVCapability_IsFeatureSupported(cap, VIDEO_ENCODER_LONG_TERM_REFERENCE);\n// 1.3 确定支持的LTR数目。\nif (isSupported) {\n    OH_AVFormat *properties = OH_AVCapability_GetFeatureProperties(cap, VIDEO_ENCODER_LONG_TERM_REFERENCE);\n    if (!OH_AVFormat_GetIntValue(properties, OH_FEATURE_PROPERTY_KEY_VIDEO_ENCODER_MAX_LTR_FRAME_COUNT, &supportedLTRCount)) {\n        // 异常处理。\n    }\n    OH_AVFormat_Destroy(properties);\n    // 1.4 判断LTR是否满足结构需求。\n    isSupported = supportedLTRCount >= NEEDED_LTR_COUNT;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若支持且LTR数目满足自身码流结构需求，则可以使能LTR特性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在配置之前注册回调时，注册随帧通路回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Buffer输入模式示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 2.1 编码输入回调OH_AVCodecOnNeedInputBuffer实现。\nstatic void OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 输入帧buffer对应的index，送入InIndexQueue队列。\n    // 输入帧的数据buffer送入InBufferQueue队列。\n    // 数据处理，请参考：\n    // - 写入编码码流。\n    // - 通知编码器码流结束。\n    // - 随帧参数写入。\n    auto format = std::shared_ptr<OH_AVFormat>(OH_AVBuffer_GetParameter(buffer), OH_AVFormat_Destroy);\n    if (format == nullptr) {\n        // 异常处理。\n    }\n    OH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_MARK_LTR, 1);\n    OH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_USE_LTR, 4);\n    OH_AVBuffer_SetParameter(buffer, format.get());\n    // 通知编码器buffer输入完成。\n    OH_VideoEncoder_PushInputBuffer(codec, index);\n}\n\n// 2.2 编码输出回调OH_AVCodecOnNewOutputBuffer实现。\nstatic void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 完成帧buffer对应的index，送入outIndexQueue队列。\n    // 完成帧的数据buffer送入outBufferQueue队列。\n    // 数据处理，请参考：\n    // - 释放编码帧。\n    // - 记录POC和LTR生效情况。\n}\n\n// 2.3 注册数据回调。\nOH_AVCodecCallback cb;\ncb.onNeedInputBuffer = OnNeedInputBuffer;\ncb.onNewOutputBuffer = OnNewOutputBuffer;\nOH_VideoEncoder_RegisterCallback(videoEnc, cb, nullptr);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Surface输入模式示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 2.1 编码输入参数回调OH_VideoEncoder_OnNeedInputParameter实现。\nstatic void OnNeedInputParameter(OH_AVCodec *codec, uint32_t index, OH_AVFormat *parameter, void *userData)\n{\n    // 输入帧buffer对应的index，送入InIndexQueue队列。\n    // 输入帧的数据avformat送入InFormatQueue队列。\n    // 数据处理，请参考：\n    // - 写入编码码流。\n    // - 通知编码器码流结束。\n    // - 随帧参数写入。\n    OH_AVFormat_SetIntValue(parameter, OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_MARK_LTR, 1);\n    OH_AVFormat_SetIntValue(parameter, OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_USE_LTR, 4);\n    // 通知编码器随帧参数配置输入完成。\n    OH_VideoEncoder_PushInputParameter(codec, index);\n}\n\n// 2.2 编码输出回调OH_AVCodecOnNewOutputBuffer实现。\nstatic void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 完成帧buffer对应的index，送入outIndexQueue队列。\n    // 完成帧的数据buffer送入outBufferQueue队列。\n    // 数据处理，请参考：\n    // - 释放编码帧。\n    // - 记录POC和LTR生效情况。\n}\n\n// 2.3 注册数据回调。\nOH_AVCodecCallback cb;\ncb.onNewOutputBuffer = OnNewOutputBuffer;\nOH_VideoEncoder_RegisterCallback(videoEnc, cb, nullptr);\n// 2.4 注册随帧参数回调。\nOH_VideoEncoder_OnNeedInputParameter inParaCb = OnNeedInputParameter;\nOH_VideoEncoder_RegisterParameterCallback(videoEnc, inParaCb, nullptr);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在配置阶段，设置最大LTR数目。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "constexpr int32_t NEEDED_LTR_COUNT = 5;\n// 3.1 创建配置用临时AVFormat。\nauto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\n// 3.2 填充使能LTR个数键值对。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_VIDEO_ENCODER_LTR_FRAME_COUNT, NEEDED_LTR_COUNT);\n// 3.3 参数配置。\nint32_t ret = OH_VideoEncoder_Configure(videoEnc, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在输出轮转中，可以获取码流的时域层级信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同全局时域可分层特性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于在输入轮转过程中配置了LTR参数，也可以在输入轮转中记录这些参数，并在输出轮转中找到对应的输入参数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在输出轮转中，使用步骤4获取的时域层级信息，进行自适应传输或自适应解码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同全局时域可分层特性。"
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
881676(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438593-b55a5759be98e9b06e4160900597f83d.png");

},
886405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958548-a8003b760de53b2243af8f3fa31ae9c9.png");

},
366005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478547-b5cd5502cf069d3f4e1c56699f8ef75c.png");

},
104609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798898-de9479543aae790ffc47184cee94be41.png");

},
639281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
182559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958546-7a3b3873e3ad1f08041608c4982b0752.png");

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