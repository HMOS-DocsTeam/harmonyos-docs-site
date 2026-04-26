"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["960151"], {
514951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_video_encoding_configuration_typical_scenarios_video_encoding_configuration_typical_scenarios_md_e73_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-video-encoding-configuration-typical-scenarios-video-encoding-configuration-typical-scenarios-md-e73.json
var site_docs_avcodec_kit_audio_video_codec_video_encoding_configuration_typical_scenarios_video_encoding_configuration_typical_scenarios_md_e73_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/video-encoding-configuration-typical-scenarios/video-encoding-configuration-typical-scenarios","title":"典型场景的视频编码配置","description":"此文档描述了AVCodec视频编码能力在不同应用场景下的推荐配置参数，供开发者根据实际应用场景进行视频编码应用的开发。","source":"@site/docs/avcodec-kit/audio-video-codec/video-encoding-configuration-typical-scenarios/video-encoding-configuration-typical-scenarios.md","sourceDirName":"avcodec-kit/audio-video-codec/video-encoding-configuration-typical-scenarios","slug":"/avcodec-kit/audio-video-codec/video-encoding-configuration-typical-scenarios/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding-configuration-typical-scenarios/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"典型场景的视频编码配置","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-configuration-typical-scenarios","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"B帧视频编码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding-b-frame/"},"next":{"title":"ROI视频编码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding-roi/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/video-encoding-configuration-typical-scenarios/video-encoding-configuration-typical-scenarios.md


const frontMatter = {
	title: '典型场景的视频编码配置',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-configuration-typical-scenarios',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '典型场景的视频编码配置';

const assets = {

};



const toc = [{
  "value": "通用开发步骤",
  "id": "通用开发步骤",
  "level": 2
}, {
  "value": "低时延场景",
  "id": "低时延场景",
  "level": 2
}, {
  "value": "实时流媒体编码",
  "id": "实时流媒体编码",
  "level": 2
}, {
  "value": "离线编码场景",
  "id": "离线编码场景",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
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
        id: "典型场景的视频编码配置",
        children: "典型场景的视频编码配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此文档描述了AVCodec视频编码能力在不同应用场景下的推荐配置参数，供开发者根据实际应用场景进行视频编码应用的开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频编码在短距投屏（通常指10米以内的多个设备间进行屏幕编码投递）、视频通话、视频会议、直播、视频编辑、视频分享等场景均有广泛使用，按照体验要求，上述场景可归纳划分为低时延、实时流媒体、离线编码三大类别应用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将给出上述三大类别应用场景下视频编码的推荐参数配置，方便开发者根据不同应用场景下的需求进行参数配置选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用开发步骤",
      children: "通用开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在CMake脚本中链接动态库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\ntarget_link_libraries(sample PUBLIC libnative_media_venc.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859029)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述'sample'字样仅为示例，此处由开发者根据实际工程目录自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <multimedia/player_framework/native_avcodec_videoencoder.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <fstream>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "低时延场景",
      children: "低时延场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "低时延编码场景包括短距投屏、视频通话、视频会议、连麦直播等对端到端时延要求较高的交互式应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发指导"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基础编码流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-encoding",
        children: "视频编码"
      }), "，下面仅针对编码器配置阶段做具体说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置编码器参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在配置编码器参数阶段，配置适合低时延编码场景的参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "低时延短距投屏场景，典型分辨率的编码参数（以H.265为例）推荐如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "分辨率（px）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "帧率（fps）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "码率（kbps）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "接入帧间隔（ms）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "码控模式"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2560x1600"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "60"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "5000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "5000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CBR"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "60"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3500"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "5000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CBR"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1280x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "60"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2500"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "5000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CBR"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "960x540"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "60"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1500"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "5000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CBR"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "低时延视频通话、视频会议、连麦直播等场景，典型分辨率的编码参数（以H.265为例）推荐如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "分辨率（px）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "帧率（fps）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "码率（kbps）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "接入帧间隔（ms）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "码控模式"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1920x1080"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "30"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1500"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CBR"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1280x720"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "30"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CBR"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "960x540"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "30"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "700"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CBR"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "640x360"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "30"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "550"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CBR"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "320x180"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "20"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "200"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CBR"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(342213)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接入帧间隔-1表示只有第一帧为接入帧，开发者可以根据传输情况和画质情况，在运行过程中动态配置编码器参数，实现插入新的接入帧（IDR）功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下以低时延视频通话场景为示例，其示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["videoEnc：视频编码器实例的指针。创建方式可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-encoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频编码Surface模式"
          }), "“步骤-2：创建编码器实例对象”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1. 创建AVFormat参数实例。\nOH_AVFormat *format = OH_AVFormat_Create();\n// 2. 填充编码参数键值对（以1080p@30fps SDR输入源为例）。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_WIDTH, 1920); // 必须配置，视频像素宽。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_HEIGHT, 1080); // 必须配置，视频像素高。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PIXEL_FORMAT, AV_PIXEL_FORMAT_NV12); // 必须配置，视频源数据排布格式。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_RANGE_FLAG, 0); // VUI（视频可用性信息），视频YUV值域标志，0:limited range 1:full range。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_COLOR_PRIMARIES, OH_ColorPrimary::COLOR_PRIMARY_BT709); // VUI，视频源色域。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_TRANSFER_CHARACTERISTICS, OH_TransferCharacteristic::TRANSFER_CHARACTERISTIC_BT709); // VUI，OETF/EOTF曲线。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_MATRIX_COEFFICIENTS, OH_MatrixCoefficient::MATRIX_COEFFICIENT_BT709); // VUI，YUV和RGB转换矩阵。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PROFILE, OH_HEVCProfile::HEVC_PROFILE_MAIN); // 视频编码器profile。\nOH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, 30.0); // 必须配置，视频帧率。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_I_FRAME_INTERVAL, -1); // 必须配置，接入帧间隔。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, OH_BitrateMode::BITRATE_MODE_CBR); // 必须配置，码控模式配置为CBR。\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, 1500000); // 必须配置，设置码率，单位为bps。\n// 3. 配置视频编码器的编码参数。\nint32_t ret = OH_VideoEncoder_Configure(videoEnc, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 4. 配置完成后销毁AVFormat实例。\nOH_AVFormat_Destroy(format);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在运行过程中动态配置编码器参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详情可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-encoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频编码Surface模式"
          }), "“步骤-9：OH_VideoEncoder_SetParameter()在运行过程中动态配置编码器参数”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1. 创建AVFormat参数实例。\nOH_AVFormat *format = OH_AVFormat_Create();\n// 2. 填充编码参数键值对（动态请求IDR帧）。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_REQUEST_I_FRAME, 1);\n// 3. 设置编码器参数生效。\nret = OH_VideoEncoder_SetParameter(videoEnc, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 4. 配置完成后销毁AVFormat实例。\nOH_AVFormat_Destroy(format);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果需要适配网络波动，推荐结合采用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability",
            children: "时域可分层视频编码"
          }), "配置。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实时流媒体编码",
      children: "实时流媒体编码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实时流媒体编码场景包括泛娱乐直播、游戏直播等对视频端到端时延要求不高的应用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发指导"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基础编码流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-encoding",
        children: "视频编码"
      }), "，下面仅针对编码器配置阶段，对配置实时流媒体编码场景的参数做具体说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "娱乐直播场景，典型分辨率的编码参数（以H.265为例）推荐如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分辨率（px）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "帧率（fps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码率（kbps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接入帧间隔（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码控模式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1920x1080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1080x720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "960x544"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "864x480"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游戏直播场景，典型分辨率的编码参数（以H.265为例）推荐如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分辨率（px）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "帧率（fps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码率（kbps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接入帧间隔（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码控模式"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1920x1080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 创建AVFormat参数实例。\nOH_AVFormat *format = OH_AVFormat_Create();\n// 2. 填充编码参数键值对（以1080p@25fps SDR输入源为例）。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_WIDTH, 1080); // 必须配置，视频像素宽。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_HEIGHT, 1920); // 必须配置，视频像素高。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PIXEL_FORMAT, AV_PIXEL_FORMAT_NV12); // 必须配置，视频源数据排布格式。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_RANGE_FLAG, 0); // VUI，视频YUV值域标志，0:limited range 1:full range。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_COLOR_PRIMARIES, OH_ColorPrimary::COLOR_PRIMARY_BT709); // VUI，视频源色域。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_TRANSFER_CHARACTERISTICS, OH_TransferCharacteristic::TRANSFER_CHARACTERISTIC_BT709); // VUI，OETF/EOTF曲线。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_MATRIX_COEFFICIENTS, OH_MatrixCoefficient::MATRIX_COEFFICIENT_BT709); // VUI，YUV和RGB转换矩阵。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PROFILE, OH_HEVCProfile::HEVC_PROFILE_MAIN); // 视频编码器profile。\nOH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, 25.0); // 必须配置，视频帧率。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_I_FRAME_INTERVAL, 2000); // 必须配置，接入帧间隔，单位为ms。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, OH_BitrateMode::BITRATE_MODE_VBR); // 必须配置，码控模式配置为VBR。\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, 3000000); // 必须配置，设置码率，单位为bps。\n// 3. 配置视频编码器的编码参数。\nint32_t ret = OH_VideoEncoder_Configure(videoEnc, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 4. 配置完成后销毁AVFormat实例。\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，在支持SQR（质量稳定码控）的平台下，推荐使用SQR码控方式替代VBR（可变码率）码控方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "娱乐直播场景，典型分辨率的编码参数（以H.265为例）推荐如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分辨率（px）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "帧率（fps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQR质量因子"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "峰值码率（kbps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接入帧间隔（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码控模式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1920x1080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1080x720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "960x544"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "864x480"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游戏直播场景，典型分辨率的编码参数（以H.265为例）推荐如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分辨率（px）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "帧率（fps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQR质量因子"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "峰值码率（kbps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接入帧间隔（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码控模式"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1920x1080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQR码控方式配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 创建AVFormat参数实例。\nOH_AVFormat *format = OH_AVFormat_Create();\n// 2. 填充编码参数键值对（以1080p@25fps SDR输入源为例）。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_WIDTH, 1080); // 必须配置，视频像素宽。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_HEIGHT, 1920); // 必须配置，视频像素高。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PIXEL_FORMAT, AV_PIXEL_FORMAT_NV12); // 必须配置，视频源数据排布格式。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_RANGE_FLAG, 0); // VUI，视频YUV值域标志，0:limited range 1:full range。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_COLOR_PRIMARIES, OH_ColorPrimary::COLOR_PRIMARY_BT709); // VUI，视频源色域。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_TRANSFER_CHARACTERISTICS, OH_TransferCharacteristic::TRANSFER_CHARACTERISTIC_BT709); // VUI，OETF/EOTF曲线。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_MATRIX_COEFFICIENTS, OH_MatrixCoefficient::MATRIX_COEFFICIENT_BT709); // VUI，YUV和RGB转换矩阵。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PROFILE, OH_HEVCProfile::HEVC_PROFILE_MAIN); // 视频编码器profile。\nOH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, 25.0); // 必须配置，视频帧率。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_I_FRAME_INTERVAL, 2000); // 必须配置，接入帧间隔，单位为ms。\n\n// 3. 查询SQR支持情况选择合适的码控配置。\nOH_AVCapability *cap = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_HEVC, true);\nif (cap == nullptr || !OH_AVCapability_IsEncoderBitrateModeSupported(cap, OH_BitrateMode::BITRATE_MODE_SQR)) {\n    // 不支持SQR，使用VBR代替。\n    OH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, OH_BitrateMode::BITRATE_MODE_VBR); // 必须配置，码控模式配置为VBR。\n    OH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, 3000000); // 必须配置，设置码率，单位为bps。\n} else {\n    // 支持SQR，配置SQR码控参数。\n    OH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, OH_BitrateMode::BITRATE_MODE_SQR); // 必须配置，码控模式配置为SQR。\n    OH_AVFormat_SetIntValue(format, OH_MD_KEY_SQR_FACTOR, 25); // 必选配置，设置SQR质量因子，取值范围为[0, 51]，数值越小画质越高。\n    OH_AVFormat_SetLongValue(format, OH_MD_KEY_MAX_BITRATE, 3000000); // 必须配置，设置峰值码率，单位为bps。\n}\n\n// 4. 配置视频编码器的编码参数。\nint32_t ret = OH_VideoEncoder_Configure(videoEnc, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 5. 配置完成后销毁AVFormat实例。\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "离线编码场景",
      children: "离线编码场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "离线编码场景包括视频编辑、视频分享等多种应用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发指导"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基础编码流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-encoding",
        children: "视频编码"
      }), "，下面仅针对编码器配置阶段，对配置离线编码场景的编码参数做具体说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频编辑场景，典型分辨率的编码参数（以H.265为例）推荐如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分辨率（px）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "帧率（fps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码率（kbps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接入帧间隔（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码控模式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3840x2160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2560x1440"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1920x1080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1280x720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "854x480"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频分享场景，典型分辨率的编码参数（以H.265为例）推荐如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分辨率（px）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "帧率（fps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码率（kbps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接入帧间隔（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码控模式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3840x2160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2560x1440"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4900"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1920x1080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1280x720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "854x480"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 创建AVFormat参数实例。\nOH_AVFormat *format = OH_AVFormat_Create();\n// 2. 填充编码参数键值对（以1080p@30fps SDR输入源为例）。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_WIDTH, 1920); // 必须配置，视频像素宽。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_HEIGHT, 1080); // 必须配置，视频像素高。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PIXEL_FORMAT, AV_PIXEL_FORMAT_NV12); // 必须配置，视频源数据排布格式。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_RANGE_FLAG, 0); // VUI，视频YUV值域标志，0:limited range 1:full range。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_COLOR_PRIMARIES, OH_ColorPrimary::COLOR_PRIMARY_BT709); // VUI，视频源色域。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_TRANSFER_CHARACTERISTICS, OH_TransferCharacteristic::TRANSFER_CHARACTERISTIC_BT709); // VUI，OETF/EOTF曲线。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_MATRIX_COEFFICIENTS, OH_MatrixCoefficient::MATRIX_COEFFICIENT_BT709); // VUI，YUV和RGB转换矩阵。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PROFILE, OH_HEVCProfile::HEVC_PROFILE_MAIN); // 视频编码器profile。\nOH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, 30.0); // 必须配置，视频帧率。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_I_FRAME_INTERVAL, 5000); // 必须配置，接入帧间隔，单位为ms。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, OH_BitrateMode::BITRATE_MODE_VBR); // 必须配置，码控模式配置为VBR。\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, 2100000); // 必须配置，设置码率，单位为bps。\n// 3. 配置视频编码器的编码参数。\nint32_t ret = OH_VideoEncoder_Configure(videoEnc, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 4. 配置完成后销毁AVFormat实例。\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，在支持SQR（质量稳定码控）的平台下，推荐使用SQR码控方式替代VBR（可变码率）码控方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频编辑场景，典型分辨率的编码参数（以H.265为例）推荐如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分辨率（px）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "帧率（fps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQR质量因子"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "峰值码率（kbps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接入帧间隔（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码控模式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3840x2160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2560x1440"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1920x1080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1280x720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "854x480"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频分享场景，典型分辨率的编码参数（以H.265为例）推荐如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分辨率（px）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "帧率（fps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQR质量因子"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "峰值码率（kbps）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接入帧间隔（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "码控模式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3840x2160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2560x1440"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4900"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1920x1080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1280x720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "854x480"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQR码控方式配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 创建AVFormat参数实例。\nOH_AVFormat *format = OH_AVFormat_Create();\n// 2. 填充编码参数键值对（以1080p@30fps SDR输入源为例）。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_WIDTH, 1920); // 必须配置，视频像素宽。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_HEIGHT, 1080); // 必须配置，视频像素高。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PIXEL_FORMAT, AV_PIXEL_FORMAT_NV12); // 必须配置，视频源数据排布格式。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_RANGE_FLAG, 0); // VUI，视频YUV值域标志，0:limited range 1:full range。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_COLOR_PRIMARIES, OH_ColorPrimary::COLOR_PRIMARY_BT709); // VUI，视频源色域。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_TRANSFER_CHARACTERISTICS, OH_TransferCharacteristic::TRANSFER_CHARACTERISTIC_BT709); // VUI，OETF/EOTF曲线。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_MATRIX_COEFFICIENTS, OH_MatrixCoefficient::MATRIX_COEFFICIENT_BT709); // VUI，YUV和RGB转换矩阵。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PROFILE, OH_HEVCProfile::HEVC_PROFILE_MAIN); // 视频编码器profile。\nOH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, 30.0); // 必须配置，视频帧率。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_I_FRAME_INTERVAL, 5000); // 必须配置，接入帧间隔，单位为ms。\n\n// 3. 查询SQR支持情况选择合适的码控配置。\nOH_AVCapability *cap = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_HEVC, true);\nif (cap == nullptr || !OH_AVCapability_IsEncoderBitrateModeSupported(cap, OH_BitrateMode::BITRATE_MODE_SQR)) {\n    // 不支持SQR，使用VBR代替。\n    OH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, OH_BitrateMode::BITRATE_MODE_VBR); // 必须配置，码控模式配置为VBR。\n    OH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, 2100000); // 必须配置，设置码率，单位为bps。\n} else {\n    // 支持SQR，配置SQR码控参数。\n    OH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, OH_BitrateMode::BITRATE_MODE_SQR); // 必须配置，码控模式配置为SQR。\n    OH_AVFormat_SetIntValue(format, OH_MD_KEY_SQR_FACTOR, 25); // 必选配置，设置SQR质量因子，取值范围为[0, 51]，数值越小画质越高。\n    OH_AVFormat_SetLongValue(format, OH_MD_KEY_MAX_BITRATE, 2100000); // 必须配置，设置峰值码率，单位为bps。\n}\n\n// 4. 配置视频编码器的编码参数。\nint32_t ret = OH_VideoEncoder_Configure(videoEnc, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 5. 配置完成后销毁AVFormat实例。\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南的编码建议，在实际应用中还需要结合业务具体情况进行优化。在确定的码率下，视频编码的画质会因为所编码的视频内容的时空域复杂度不同而有较大差异。一般而言，运动复杂，画面纹理丰富的视频内容，在码率不足时容易出现模糊或马赛克，此时需要配置较高码率。"
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
342213(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
859029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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