"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["559074"], {
163038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_audio_channel_layout_h_capi_native_audio_channel_layout_h_md_61d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avcodec-api-avcodec-c-avcodec-headerfile-capi-native-audio-channel-layout-h-capi-native-audio-channel-layout-h-md-61d.json
var site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_audio_channel_layout_h_capi_native_audio_channel_layout_h_md_61d_namespaceObject = JSON.parse('{"id":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h","title":"native_audio_channel_layout.h","description":"概述","source":"@site/docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h.md","sourceDirName":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h","slug":"/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"native_audio_channel_layout.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-channel-layout-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-audio-channel-layout-h"},"sidebar":"ref","previous":{"title":"media_types.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-media-types-h/capi-media-types-h"},"next":{"title":"native_avbuffer.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-h/capi-native-avbuffer-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h.md


const frontMatter = {
	title: 'native_audio_channel_layout.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-channel-layout-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-audio-channel-layout-h'
};
const contentTitle = 'native_audio_channel_layout.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_AudioChannelSet",
  "id": "oh_audiochannelset",
  "level": 3
}, {
  "value": "OH_AmbAttributeSet",
  "id": "oh_ambattributeset",
  "level": 3
}, {
  "value": "OH_AudioChannelLayout",
  "id": "oh_audiochannellayout",
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
        id: "native_audio_channel_layouth",
        children: "native_audio_channel_layout.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在录制和播放时的扬声器布局。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/native_audio_channel_layout.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " 无"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-core/capi-core",
        children: "Core"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiochannelset",
              children: "OH_AudioChannelSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioChannelSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频声道集合。  将每一个声道映射为int64的变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ambattributeset",
              children: "OH_AmbAttributeSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AmbAttributeSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高保真立体声混响设置。  用int64整数来表示高保真立体声混响属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiochannellayout",
              children: "OH_AudioChannelLayout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioChannelLayout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频声道布局。  用int64整数来表示在录制或播放时扬声器的外观和顺序。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiochannelset",
      children: "OH_AudioChannelSet"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioChannelSet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频声道集合。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将每一个声道映射为int64的变量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_LEFT = 1ULL << 0U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左前声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_RIGHT = 1ULL << 1U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右前声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_CENTER = 1ULL << 2U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中前声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_LOW_FREQUENCY = 1ULL << 3U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低频声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_LEFT = 1ULL << 4U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左后声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_RIGHT = 1ULL << 5U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右后声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_LEFT_OF_CENTER = 1ULL << 6U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左前中置声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_RIGHT_OF_CENTER = 1ULL << 7U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右前中置声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_CENTER = 1ULL << 8U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后方中置声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_SIDE_LEFT = 1ULL << 9U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左侧声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_SIDE_RIGHT = 1ULL << 10U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右侧声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_CENTER = 1ULL << 11U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方中置声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_FRONT_LEFT = 1ULL << 12U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方左前声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_FRONT_CENTER = 1ULL << 13U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方中前声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_FRONT_RIGHT = 1ULL << 14U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方右前声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_BACK_LEFT = 1ULL << 15U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方左后声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_BACK_CENTER = 1ULL << 16U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方中后声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_BACK_RIGHT = 1ULL << 17U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方右后声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_STEREO_LEFT = 1ULL << 29U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "立体声左声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_STEREO_RIGHT = 1ULL << 30U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "立体声右声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_WIDE_LEFT = 1ULL << 31U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽左声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_WIDE_RIGHT = 1ULL << 32U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽右声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_SURROUND_DIRECT_LEFT = 1ULL << 33U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左环绕声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_SURROUND_DIRECT_RIGHT = 1ULL << 34U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右环绕声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_LOW_FREQUENCY_2 = 1ULL << 35U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低频声道2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_SIDE_LEFT = 1ULL << 36U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方左侧声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_SIDE_RIGHT = 1ULL << 37U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方右侧声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BOTTOM_FRONT_CENTER = 1ULL << 38U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下方中前声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BOTTOM_FRONT_LEFT = 1ULL << 39U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下方左前声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BOTTOM_FRONT_RIGHT = 1ULL << 40U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下方右前声道。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ambattributeset",
      children: "OH_AmbAttributeSet"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AmbAttributeSet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "高保真立体声混响设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用int64整数来表示高保真立体声混响属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_1 = 1ULL << 0U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一阶高保真立体声混响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_2 = 2ULL << 0U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二阶高保真立体声混响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_3 = 3ULL << 0U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三阶高保真立体声混响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_COM_ACN = 0ULL << 8U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACN通道排序的高保真立体声混响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_COM_FUMA = 1ULL << 8U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FUMA通道排序的高保真立体声混响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_NOR_N3D = 0ULL << 12U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N3D归一化的高保真立体声混响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_NOR_SN3D = 1ULL << 12U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SN3D归一化的高保真立体声混响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_MODE = 1ULL << 44U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高保真立体声混响的声道布局。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiochannellayout",
      children: "OH_AudioChannelLayout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioChannelLayout\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频声道布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用int64整数来表示在录制或播放时扬声器的外观和顺序。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_UNKNOWN = 0ULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知声道布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_MONO = CH_SET_FRONT_CENTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单声道布局，共1个声道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_STEREO = CH_SET_FRONT_LEFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_RIGHT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_STEREO_DOWNMIX = CH_SET_STEREO_LEFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_STEREO_RIGHT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_2POINT1 = CH_LAYOUT_STEREO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_LOW_FREQUENCY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_3POINT0 = CH_LAYOUT_STEREO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_SURROUND = CH_LAYOUT_STEREO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_3POINT1 = CH_LAYOUT_SURROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_LOW_FREQUENCY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_4POINT0 = CH_LAYOUT_SURROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_QUAD_SIDE = CH_LAYOUT_STEREO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_SIDE_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_QUAD = CH_LAYOUT_STEREO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_2POINT0POINT2 = CH_LAYOUT_STEREO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_SIDE_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_AMB_ORDER1_ACN_N3D = AMB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_AMB_ORDER1_ACN_SN3D = AMB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_AMB_ORDER1_FUMA = AMB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_4POINT1 = CH_LAYOUT_4POINT0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_LOW_FREQUENCY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_5POINT0 = CH_LAYOUT_SURROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_SIDE_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_5POINT0_BACK = CH_LAYOUT_SURROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_2POINT1POINT2 = CH_LAYOUT_2POINT0POINT2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_LOW_FREQUENCY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_3POINT0POINT2 = CH_LAYOUT_2POINT0POINT2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_5POINT1 = CH_LAYOUT_5POINT0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_LOW_FREQUENCY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_5POINT1_BACK = CH_LAYOUT_5POINT0_BACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_LOW_FREQUENCY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_6POINT0 = CH_LAYOUT_5POINT0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_3POINT1POINT2 = CH_LAYOUT_3POINT1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_FRONT_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_6POINT0_FRONT = CH_LAYOUT_QUAD_SIDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_LEFT_OF_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_HEXAGONAL = CH_LAYOUT_5POINT0_BACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_6POINT1 = CH_LAYOUT_5POINT1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_6POINT1_BACK = CH_LAYOUT_5POINT1_BACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_6POINT1_FRONT = CH_LAYOUT_6POINT0_FRONT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_LOW_FREQUENCY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_7POINT0 = CH_LAYOUT_5POINT0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_7POINT0_FRONT = CH_LAYOUT_5POINT0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_LEFT_OF_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_7POINT1 = CH_LAYOUT_5POINT1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_OCTAGONAL = CH_LAYOUT_5POINT0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_BACK_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_5POINT1POINT2 = CH_LAYOUT_5POINT1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_SIDE_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_7POINT1_WIDE = CH_LAYOUT_5POINT1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_LEFT_OF_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_7POINT1_WIDE_BACK = CH_LAYOUT_5POINT1_BACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_LEFT_OF_CENTER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_AMB_ORDER2_ACN_N3D = AMB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_AMB_ORDER2_ACN_SN3D = AMB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_AMB_ORDER2_FUMA = AMB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_5POINT1POINT4 = CH_LAYOUT_5POINT1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_FRONT_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_7POINT1POINT2 = CH_LAYOUT_7POINT1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_SIDE_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_7POINT1POINT4 = CH_LAYOUT_7POINT1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_FRONT_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_10POINT2 = CH_SET_FRONT_LEFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_RIGHT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_9POINT1POINT4 = CH_LAYOUT_7POINT1POINT4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_WIDE_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_9POINT1POINT6 = CH_LAYOUT_9POINT1POINT4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_TOP_SIDE_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_HEXADECAGONAL = CH_LAYOUT_OCTAGONAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_WIDE_LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_AMB_ORDER3_ACN_N3D = AMB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_AMB_ORDER3_ACN_SN3D = AMB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_AMB_ORDER3_FUMA = AMB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMB_ORD_3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CH_LAYOUT_22POINT2 = CH_LAYOUT_7POINT1POINT4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH_SET_FRONT_LEFT_OF_CENTER"
          })]
        })]
      })]
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