"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["250136"], {
648999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_transcoder_arkts_avtranscoder_practice_avtranscoder_practice_md_00d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-transcoder-arkts-avtranscoder-practice-avtranscoder-practice-md-00d.json
var site_docs_media_kit_media_kit_dev_arkts_media_transcoder_arkts_avtranscoder_practice_avtranscoder_practice_md_00d_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-practice/avtranscoder-practice","title":"创建异步线程执行AVTranscoder视频转码(ArkTS)","description":"在开发过程中，应用经常会创建异步线程执行视频转码任务以满足不同诉求，主要包括：","source":"@site/docs/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-practice/avtranscoder-practice.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-practice","slug":"/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-practice/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-practice/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"创建异步线程执行AVTranscoder视频转码(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avtranscoder-practice","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVTranscoder实现视频转码(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-transcoder-arkts/using-avtranscoder-for-transcodering/"},"next":{"title":"转码常见问题","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-practice/avtranscoder-practice.md


const frontMatter = {
	title: '创建异步线程执行AVTranscoder视频转码(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avtranscoder-practice',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '创建异步线程执行AVTranscoder视频转码(ArkTS)';

const assets = {

};



const toc = [{
  "value": "基础概念",
  "id": "基础概念",
  "level": 2
}, {
  "value": "选择合适的码率和分辨率",
  "id": "选择合适的码率和分辨率",
  "level": 2
}, {
  "value": "视频转码压缩开发样例",
  "id": "视频转码压缩开发样例",
  "level": 2
}, {
  "value": "使用异步线程的方式进行转码",
  "id": "使用异步线程的方式进行转码",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "运行示例工程",
  "id": "运行示例工程",
  "level": 2
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
        id: "创建异步线程执行avtranscoder视频转码arkts",
        children: "创建异步线程执行AVTranscoder视频转码(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发过程中，应用经常会创建异步线程执行视频转码任务以满足不同诉求，主要包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "节省存储空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "高清视频文件通常存储空间占用大，几分钟的视频就可能占用数GB的存储空间。视频压缩可以显著减小文件大小，节省存储空间。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提高设备兼容性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不同设备所支持播放的视频格式各不相同。视频转码可以将源视频格式转换成设备支持的常用格式，以满足不同设备的播放需求，从而提高视频文件的设备兼容性。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础概念",
      children: "基础概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频的码率（Bitrate）和分辨率（宽×高）是影响视频画质和文件大小的两个关键因素。它们之间的关系并非简单的线性对应，而是受到编码效率、内容复杂度等多种因素的共同影响。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "码率（Bitrate）和分辨率（宽×高）的基本概念"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "码率：指的是单位时间内视频流的数据量（单位：Kbps 或 Mbps）。1 Mbps = 1,000,000 bit/s（1,000,000比特每秒）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "码率越高，单位时间内传输的数据越多，潜在画质更高，但文件体积也更大。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "分辨率：指视频画面的像素数量（例如 1920×1080）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "分辨率越高，像素数量越多，画面细节更加清晰，但需要处理的数据量也更大。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "码率和分辨率的关系"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "直观关系"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在相同编码效率和内容复杂度的情况下，分辨率越大，则需要分配越高的码率以保持画质。如果所分配的码率不足，编码器会通过压缩（如丢弃细节、增加块效应）来降低数据量。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "公式参考（经验法则）"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "码率正比于 分辨率宽×分辨率高×帧率×复杂度系数"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "复杂度系数与视频内容的动态程度相关，例如静态画面（例如讲座视频）低复杂度系数，可以较低码率保持清晰，动态画面（例如体育比赛）高复杂度系数，需要更高的码率。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "编码效率的影响"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不同的编码标准（如 H.264、H.265、AV1）具有不同的压缩效率："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "高效编码器（如 H.265）在相同分辨率和画质下，码率可比 H.264 降低约50%。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "低效编码器（如 MJPEG）需要更高的码率以避免画质损失。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择合适的码率和分辨率",
      children: "选择合适的码率和分辨率"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "码率转换"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入：源视频的宽wref、高href、帧率fpsref、码率Rref；目标视频的宽wtar、高htar、帧率fpstar。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输出：目标视频的码率Rtar。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "计算过程："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(928673)/* ["default"] */.A) + "",
            width: "542",
            height: "74"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分辨率和帧率的系数由以下经验公式计算可得。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(161568)/* ["default"] */.A) + "",
            width: "547",
            height: "66"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(18830)/* ["default"] */.A) + "",
            width: "536",
            height: "88"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述计算帧率的公式y=clip(0.5, 2, x)表示：如果x∈[0.5, 2.0]，取y=x；如果x＜0.5，取y=0.5；如果x＞2.0，取y=2.0。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "码率计算"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选定一个baseline的码率，例如720P/30fps的视频，码率默认3Mbps，记为V0。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果要对视频V1做转码，输出视频为V2，可以按如下过程计算："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "代入(V0,V2)，得到估计码率为R2。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "代入(V1,V2)，得到估计码率为R2'。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取二者最小值，以确保目标码率比源视频有所降低。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "分辨率设置参考（以H.264为例）"
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "分辨率"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "动态内容（如游戏）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "中等动态（如电影）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "静态内容（如幻灯片）"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "720p(1280 × 720)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3.5–5 Mbps"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2.5–4 Mbps"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1–2 Mbps"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1080p(1920 × 1080)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "6–8 Mbps"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4–6 Mbps"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2–3 Mbps"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "4K(3840 × 2160)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "25–35 Mbps"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "15–25 Mbps"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10–15 Mbps"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "转换样例"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景一：假设要转码一个分辨率1280×720，30fps的视频，码率为1Mbps，这是画质相对比较良好的视频。需要将视频转码为分辨率640×480，30fps的视频，码率应该设置为463,463bps。计算如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Resolution_factor = 0.463463"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "fps_factor = 1"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Rtar = 463,463bps"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景二：假设要转码一个分辨率1280×720，30fps的视频，码率为1Mbps的视频。需要将视频转码为码率为600,000bps，30fps的视频，分辨率应该设置为888×500。计算如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "fps_factor = 1"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Rtar = 600,000bps"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Resolution_factor = 0.482029"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "视频转码压缩开发样例",
      children: "视频转码压缩开发样例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nexport class AVTranscoderDemo {\n    private avTranscoder: media.AVTranscoder | undefined = undefined;\n    private context: Context | undefined;\n    constructor(context: Context) {\n        this.context = context;\n    }\n    private avConfig: media.AVTranscoderConfig = {\n        // audioBitrate: 100000, // 音频比特率。\n        // audioCodec: media.CodecMimeType.AUDIO_AAC, // 音频编码格式。\n        fileFormat: media.ContainerFormatType.CFT_MPEG_4, // 封装格式。\n        videoBitrate: 1000000, // 视频比特率。\n        videoCodec: media.CodecMimeType.VIDEO_AVC, // 视频编码格式。\n        videoFrameWidth: 1280, // 视频分辨率的宽。\n        videoFrameHeight: 720  // 视频分辨率的高。\n    };\n    // 注册avTranscoder回调函数。\n    setAVTranscoderCallback() {\n        if (canIUse(\"SystemCapability.Multimedia.Media.AVTranscoder\")) {\n            if (this.avTranscoder != undefined) {\n                // 转码完成回调函数。\n                this.avTranscoder.on('complete', async () => {\n                    console.info(`AVTranscoder is completed`);\n                    await this.releaseTranscoderingProcess();\n                });\n                // 错误上报回调函数。\n                this.avTranscoder.on('error', (err: BusinessError) => {\n                    console.error(`AVTranscoder failed, code is ${err.code}, message is ${err.message}`);\n                });\n            }\n        }\n    }\n    // 开始转码对应的流程。\n    async startTranscoderingProcess() {\n        if (canIUse(\"SystemCapability.Multimedia.Media.AVTranscoder\") && this.context != undefined) {\n            if (this.avTranscoder != undefined) {\n                await this.avTranscoder.release();\n                this.avTranscoder = undefined;\n            }\n            // 1.创建转码实例。\n            this.avTranscoder = await media.createAVTranscoder();\n            this.setAVTranscoderCallback();\n            // 2.获取转码源文件fd和目标文件fd赋予avTranscoder；参考FilePicker文档。\n            let fileDescriptor = await this.context.resourceManager.getRawFd('H264_AAC.mp4');\n            this.avTranscoder.fdSrc = fileDescriptor;\n            let outputFilePath = this.context.filesDir + \"/output.mp4\";\n            let file = fileIo.openSync(outputFilePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n            this.avTranscoder.fdDst = file.fd;\n            // 3.配置转码参数完成准备工作。\n            await this.avTranscoder.prepare(this.avConfig);\n            // 4.开始转码。\n            await this.avTranscoder.start();\n        }\n    }\n    // 暂停转码对应的流程。\n    async pauseTranscoderingProcess() {\n        if (canIUse(\"SystemCapability.Multimedia.Media.AVTranscoder\")) {\n            if (this.avTranscoder != undefined) { // 仅在调用start返回后调用pause为合理调用。\n                await this.avTranscoder.pause();\n            }\n        }\n    }\n    // 恢复对应的转码流程。\n    async resumeTranscoderingProcess() {\n        if (canIUse(\"SystemCapability.Multimedia.Media.AVTranscoder\")) {\n            if (this.avTranscoder != undefined) { // 仅在调用pause返回后调用resume为合理调用。\n                await this.avTranscoder.resume();\n            }\n        }\n    }\n    // 释放转码流程。\n    async releaseTranscoderingProcess() {\n        if (canIUse(\"SystemCapability.Multimedia.Media.AVTranscoder\")) {\n            if (this.avTranscoder != undefined) {\n                // 1.释放转码实例。\n                await this.avTranscoder.release();\n                this.avTranscoder = undefined;\n                // 2.关闭转码目标文件fd。\n            }\n        }\n    }\n    // 一个完整的【开始转码-暂停转码-恢复转码-转码完成】示例。\n    async avTranscoderDemo() {\n        await this.startTranscoderingProcess(); // 开始转码。\n        await this.pauseTranscoderingProcess(); // 暂停转码。\n        await this.resumeTranscoderingProcess(); // 恢复转码。\n        await this.releaseTranscoderingProcess(); // 释放转码。\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体如何使用转码能力对视频进行转码，可以参见文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-transcoder-arkts/using-avtranscoder-for-transcodering",
        children: "用AVTranscoder实现视频转码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用异步线程的方式进行转码",
      children: "使用异步线程的方式进行转码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例使用的是worker线程的方式来实现异步线程进行转码，worker线程的详细使用方式，可以参见文档:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker",
          children: "Worker线程使用说明"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
          children: "Worker简介"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入头文件，创建worker线程，并注册回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ErrorEvent, MessageEvents, worker } from '@kit.ArkTS'\nimport { SendableObject } from '../util/SendableObject';\nimport { common, sendableContextManager } from '@kit.AbilityKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建Worker对象。\nprivate workerInstance?: worker.ThreadWorker;\n@State currentProgress: number = 0;\n\nthis.workerInstance = new worker.ThreadWorker('entry/ets/workers/task.ets');\n\n// 注册onmessage回调，当宿主线程接收到来自其创建的Worker通过workerPort.postMessage接口发送的消息时被调用，在宿主线程执行。\nthis.workerInstance.onmessage = (e: MessageEvents) => {\n   let data: string | number = e.data;\n   if (typeof data === 'string') { // complete事件。\n     console.info('workerInstance onmessage is: ', data);\n     if (data === 'complete') {\n       console.info('complete: ', data);\n       this.workerInstance?.terminate();\n     }\n   } else if (typeof data === 'number') {\n     this.currentProgress = data; // 当前进度。\n   }\n }\n\n// 注册onErrors回调，可以捕获Worker线程的onmessage回调、timer回调以及文件执行等流程产生的全局异常，在宿主线程执行。\nthis.workerInstance.onerror = (err: ErrorEvent) => {\n    console.info(\"workerInstance onerror message is: \" + err.message);\n}\n\n// 注册onmessageerror回调，当Worker对象接收到一条无法被序列化的消息时被调用，在宿主线程执行。\nthis.workerInstance.onmessageerror = () => {\n    console.info('workerInstance onmessageerror');\n}\n\n// 注册onexit回调，当Worker销毁时被调用，在宿主线程执行。\nthis.workerInstance.onexit = (e: number) => {\n    // 当Worker正常退出时code为0，异常退出时code为1。\n    console.info(\"workerInstance onexit code is: \", e);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建参数对象，向worker线程发送参数对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下是参数对象模型："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { sendableContextManager } from '@kit.AbilityKit';\n\n// 发送的参数必须加上@Sendable标注。\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, data: string = '') {\n    this.sendableContext = sendableContext;\n    this.data = data;\n  }\n\n  private sendableContext: sendableContextManager.SendableContext;\n  private data: string;\n\n\n  public getSendableContext() {\n    return this.sendableContext;\n  }\n\n  public getData() {\n    return this.data;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下是发送参数的逻辑："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private context: Context | undefined;\n// 向Worker线程发送消息。\nthis.context = this.getUIContext().getHostContext(); // 获取当前组件所在Ability的Context。\nif (this.context != undefined) {\n  const sendableContext: sendableContextManager.SendableContext = sendableContextManager.convertFromContext(\n    this.context);\n  const sendableObject: SendableObject = new SendableObject(sendableContext, 'some information');\n  this.workerInstance.postMessageWithSharedSendable(sendableObject);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "worker线程接收参数，并且执行转码的逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "worker线程接收参数："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//worker线程接收参数。\nconst sendableObject: SendableObject = event.data;\nconst sendableContext: sendableContextManager.SendableContext =\n  sendableObject.getSendableContext() as sendableContextManager.SendableContext;\nconst context: common.Context =\n  sendableContextManager.convertToContext(sendableContext) as common.Context;\n// 执行转码逻辑。\nawait doSome(context);\n// 向主线程发送消息。\nworkerPort.postMessage('start end');\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行转码逻辑："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function doSome(context: common.Context) {\n  console.info(`doSome in`);\n  try {\n    let transcoder = await media.createAVTranscoder();\n    // 转码完成回调函数。\n    transcoder.on('complete', async () => {\n      console.info(`transcode complete`);\n      fileIo.closeSync(transcoder.fdDst); // 关闭fdDst。\n      await transcoder?.release()\n      workerPort.postMessage('complete');\n    })\n    // 转码错误回调函数。\n    transcoder.on('error', async (err: BusinessError) => {\n      fileIo.closeSync(transcoder.fdDst);\n      await transcoder?.release();\n    })\n    // 转码进度更新回调函数。\n    transcoder.on('progressUpdate', (progress: number) => {\n      console.info(`AVTranscoder progressUpdate = ${progress}`);\n      workerPort.postMessage(progress);\n    })\n\n    try {\n      // 获取输入文件fd，H264_AAC.mp4为rawfile目录下的预置资源，需要开发者根据实际情况进行替换。\n      let fileDescriptor = await context.resourceManager.getRawFd('H264_AAC.mp4');\n      transcoder.fdSrc = fileDescriptor; // 设置fdSrc。\n    } catch (error) {\n      console.error('Failed to get the file descriptor, please check the resource and path.');\n    }\n    // 设置输出文件路径，context.filesDir为应用的沙箱路径。\n    let fdPath = context.filesDir + \"/\" + \"VID_\" + Date.parse(new Date().toString()) + \".mp4\";\n    let file = fileIo.openSync(fdPath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n    let fd = file.fd;\n    console.info(`file fd ${fd}`);\n    transcoder.fdDst = file.fd;\n\n    let config: media.AVTranscoderConfig = {\n      fileFormat: media.ContainerFormatType.CFT_MPEG_4, // 封装格式。\n      audioCodec: media.CodecMimeType.AUDIO_AAC, // 音频编码格式。\n      videoCodec: media.CodecMimeType.VIDEO_AVC, // 视频编码格式。\n      videoBitrate: 200000, // 视频比特率。\n    }\n    await transcoder?.prepare(config);\n    await transcoder?.start();\n  } catch (e) {\n    console.error(`transcode error: code = ` + e.code.toString() + `, message = ${JSON.stringify(e.message)}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听转码的Complete回调，在转码结束的时候向主线程发送消息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 转码完成回调函数。\ntranscoder.on('complete', async () => {\n  console.info(`transcode complete`);\n  fileIo.closeSync(transcoder.fdDst); // 关闭fdDst。\n  await transcoder?.release()\n  workerPort.postMessage('complete');\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主线程接收到worker线程转码结束的信息，销毁worker线程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注册onmessage回调，当宿主线程接收到来自其创建的Worker通过workerPort.postMessage接口发送的消息时被调用，在宿主线程执行。\nthis.workerInstance.onmessage = (e: MessageEvents) => {\n  let data: string | number = e.data;\n  if (typeof data === 'string') {\n    console.info('workerInstance onmessage is: ', data);\n    if (data === 'complete') {\n      console.info('complete: ', data);\n      this.workerInstance?.terminate();\n    }\n  } else if (typeof data === 'number') {\n    this.currentProgress = data;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行示例工程",
      children: "运行示例工程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，使用worker线程的方式来实现异步线程进行转码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVTranscoder/AsyncTranscoder",
            children: "完整示例工程"
          }), "，并将示例工程的资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AsyncTranscoder\nentry/build-profile.json5 (配置字段信息将Worker线程文件打包到应用)\nentry/src/main/ets/\n├── pages\n│    └── Index.ets (转码界面)\n├── util\n│    └── SendableObject.ets (Sendable对象)\n│\n└── workers\n    └── task.ets (转码任务)\n\nentry/src/main/resources/\n├── base\n│   ├── element\n│   │   ├── color.json\n│   │   ├── float.json\n│   │   └── string.json\n│   └── media\n│\n└── rawfile\n    └── H264_AAC.mp4 (视频资源)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译新建工程并运行。"
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
18830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
928673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
161568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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