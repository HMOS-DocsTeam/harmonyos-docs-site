"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["650999"], {
799370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_playback_power_saving_for_playback_power_saving_for_playback_md_34b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-playback-power-saving-for-playback-power-saving-for-playback-md-34b.json
var site_docs_audio_kit_audio_playback_power_saving_for_playback_power_saving_for_playback_md_34b_namespaceObject = JSON.parse('{"id":"audio-kit/audio-playback/power-saving-for-playback/power-saving-for-playback","title":"低功耗音频播放","description":"从API version 11开始支持低功耗音频播放。","source":"@site/docs/audio-kit/audio-playback/power-saving-for-playback/power-saving-for-playback.md","sourceDirName":"audio-kit/audio-playback/power-saving-for-playback","slug":"/audio-kit/audio-playback/power-saving-for-playback/","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/power-saving-for-playback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"低功耗音频播放","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/power-saving-for-playback","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"低时延音频播放(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/audio-fast-playback/"},"next":{"title":"使用AudioHaptic开发音振协同播放功能(ArkTs)","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/using-audiohaptic-for-playback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-playback/power-saving-for-playback/power-saving-for-playback.md


const frontMatter = {
	title: '低功耗音频播放',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/power-saving-for-playback',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '低功耗音频播放';

const assets = {

};



const toc = [{
  "value": "使用前提",
  "id": "使用前提",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
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
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "低功耗音频播放",
        children: "低功耗音频播放"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始支持低功耗音频播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "低功耗音频播放是一种通过软硬芯协同设计实现的音频渲染方案。其核心机制是增大音频渲染器的内部缓存，使系统能够一次性填充大量音频数据，从而允许主处理器长时间休眠，减少频繁处理音频数据的功耗，显著降低系统级功耗负载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用前提",
      children: "使用前提"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持外放、有线耳机和部分蓝牙耳机实现低功耗功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["低功耗音频渲染器与普通音频渲染器接口无差异，但需关注应用数据周期与播放进度。音频渲染器使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
        children: "使用AudioRenderer开发音频播放功能(ArkTs)"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/using-ohaudio-for-playback",
        children: "推荐使用OHAudio开发音频播放功能(C/C++)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数据周期示意图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(878117)/* ["default"] */.A) + "",
        width: "805",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在数据周期内，快速请求数据写满缓存时，进入休眠状态。当缓存数据消费完后，会触发下一个周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "播放进度示意图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(324421)/* ["default"] */.A) + "",
        width: "805",
        height: "275"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在数据周期内，快速请求数据写满缓存时，播放进度按实际播放量计算。当缓存数据消费完（即播放进度到达写入数据量）后，会触发下一个周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["流类型使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
            children: "STREAM_USAGE_MUSIC"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
            children: "STREAM_USAGE_AUDIOBOOK"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
            children: "AUDIOSTREAM_USAGE_MUSIC"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
            children: "AUDIOSTREAM_USAGE_AUDIOBOOK"
          }), "，系统默认为低功耗渲染器。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "低功耗渲染器缓存：亮屏场景下，最大1000ms；熄屏场景下，最大10000ms。缓存数据消费完时会唤醒主处理器，触发应用传送数据，传送数据的周期与缓存大小保持一致。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用在感知周期内未请求数据属于正常现象，无需停流。系统会自行判断长时间未收到数据的情况并停流；当应用重新发送数据时，系统将恢复流状态。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["熄屏场景下，数据写满缓存后主处理器进入休眠，应用会进入挂起状态。若应用需要后台播放或熄屏播放，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-playback/audio-playback-overview#%E5%90%8E%E5%8F%B0%E6%92%AD%E6%94%BE%E5%BC%80%E5%8F%91%E9%A1%BB%E7%9F%A5",
              children: "后台播放开发须知"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "低功耗渲染器每次请求数据长度与普通渲染器相同，通过高请求频率来填满缓存。预计每1ms请求1次，实际时长受应用和硬件影响。若应用无法快速提供数据，会降级到普通渲染器周期。如果普通渲染器周期无法保证数据及时性，需应用优化数据处理。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当应用数据不足一次回调长度时，不允许填空数据以避免播放卡顿（到达EOS时除外）。建议等待数据充足或返回错误码。具体参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-playback/using-audiorenderer-for-playback#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4%E5%8F%8A%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
              children: "AudioRenderer音频数据回调"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-playback/using-ohaudio-for-playback#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
              children: "OHAudio音频数据回调"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "低功耗渲染器和低时延渲染器不支持并发，采用先到先得原则，即先启动的生效，后启动的降级为普通渲染器。具体示例如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "先启低功耗渲染器A，再启低功耗渲染器B，则B降级普通渲染器。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "先启低功耗渲染器，再启低时延渲染器，则低时延降级普通渲染器。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "先启低时延渲染器，再启低功耗渲染器，则低功耗降级普通渲染器。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用数据写完不代表已经播完，需调用获取音频时间戳接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#getaudiotimestampinfo19",
            children: "getAudioTimestampInfo"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_getaudiotimestampinfo",
            children: "OH_AudioRenderer_GetAudioTimestampInfo()"
          }), "，判断实际播放进度。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "获取时间戳接口调用频率建议大于200ms一次，以免影响系统性能。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用程序调用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#flush11",
              children: "flush"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_flush",
              children: "OH_AudioRenderer_Flush()"
            }), "后，播放的数据量会重置为0。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "播放数据量均会小于写入数据量。由于系统帧长与时延机制，播完的播放数据量不等于写入数据量。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["写完数据后获取时间戳，如果2个周期内时间戳不变，即为播完；或者根据设置的倍速推算剩余播放时长，超过相应时长，即为播完。（如：记总写入数据量p1，写完后获取时间戳p2，设置倍速α且α>0，音频采样率fs且fs>0，剩余可播时长t。公式：", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(236454)/* ["default"] */.A) + "",
              width: "365",
              height: "31"
            }), "）"]
          }), "\n"]
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
878117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
324421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
236454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW0AAAAfCAYAAAAsnJxcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAxkSURBVHhe7Z3LS1vbHsfvP+PI4qDhgoRC1UHIAYMFIYNAQCFIIeggIhg5YHAQEa4iBAo5oFgQESsOIgUDhQYHloKKYEuxiCLp9RYrhShCBOF7f+sRzWNvs1951fUBOWfv0HS79m991++1Vv8FhUKhULQMSrQVCoWihWh50c7tJRFbPZdXCoVC8WfTsqJ98T6GPv8w/H+50beoRFuhUDwNWt7Tzowr0VYoFE8HJdpPnS9LCE7tICcvFQpFc6NEW3L8dhjBt09T/LNvB+COH8orhcIauYMVhHt9cHv60e0ZQuzDpfykjtydYm0kAHePB65XSezfyPsN5xr7i1F4e3w0NjQ+gVmkf8qPTKIr2hfvhtH2MoF9ed2sOCHauY8xeMefsrd5joV+H2J78lKhMMuXJLo7BrBwIq+vdhB56UPk47W8UR/24z60BdeRmqH/tnuaxqa/zvejzb+C4ztxzTTH/TKGzJW4NoOOaF9ibdDN/5KsvNOs2BbtqzTCz6NIWRi8P4n8VpQb+4W8ViiMc4nlIOnFWEZeC47/CaDtryS+yuvac4hYpxvd80fIvk9gIrHTHPb8cx3+djciH+Q15xRvXtGzJo7ktXG0Rfsugwj9JeyXb3bsijZbAV1Tu/LqCXOTQbijH3Pf5LVCYZRfmwiSXlTMQ/Im29rJpr7I61rDvP0KcWw8PGvRTlHImbwhYdrV5jG/qGmLduGX/yivmxhbon23SytzHY2qqRHRVSss1NocYi4wjOmNI+RkCKrQw+Gx2o6TKOmJthvh97fyRm25F8cf8oZVDpLwhxJY++ZMaiczSeKsJ9rtFOWbzLuXiPbx2yGeJHc9Z1/WBRcvKIxi2e4g1BBbos2MqiOO0qCOcU0DHYD7hQfu8CayV4dYiAzA6/HB3RvFWiFv12BY8ZQ9Iy+4XF0iPTUEb28/3D0DmP5s3uB43m1ws3Yh5dUOJnp9cHX6ENo4F4UrfwDdPT54Rzbv832WubvG141Z+FkRzLYgNbEN5M+RnhmWRS3xPAsHJt+3k2MlxVlPtC3PT4OU6FYHvS9ZCF2wEzX+PsIazSdWMLQr3kKc9US78n41NDxtc/ns/E4SwcFhEz9xpCxWTYu52F7CxGQUXvaingcQnozT4MoPDaIrUgcJ+JnHebIELxldW08M6d/io4vVoYoCbf5sE5FEnVMsFJKGImmabCKV1fZ8CG++S4/m8yxcHaNY+yUucbLJxdHd6UH3I+LIPZXO2ZoVn/dnhnhUw3OdHW64xzNSLERO1D1T2sFieberFCTvi4B1QTJhA8fvoujji1E/wu9O5d0awQt8JITzh/eF89z7KI3nMNb4vDrCXNBEyO3AWLHuo0aKtuAcC356T047HVy8A+QYWRVv+Vy1FW3yhmhCuZ5AC1h6jAZtfEdePbAfHxC53Q/M6PoxfSDuc7ghBvCGeVp7S+h7NYSg36P5PbXk4t0owlsk0lJUQhtFBnW2gj66J3J7ZDSDs/jEJuPdKd70kzhO7iDPPiqH/26xisgjvz2LblocnwXXbRSmDxHzCzHh4+4h0SsSCG7Ar5ZwTP/v2G5XG4Jk2AZorIOFmgi9i752Hya2a5QOoPfHBaC8YHyTRrggjl/IibJQ3LIzVs0h2jXWLcviXQ/RliJQrzxU42BtbtoGlb+65qLGPfGy9El2kRloaSsRv1dn0cYNPSNNrDzzstiLL05hyckSfHcp6hNFzybyfuQ1ak1K/ufIYyt46JJPU138+7QE3Ti3yF0xmyJP0EPfRQvHA+JdlHv5zKgdmfAWBMmoDbDPH2o/Mkot66JwCt7hozk3hWC1UeTyaWoUy3YiWSvirSfO9RTtH8JR4TZfSyyIt544OybajiXzbfLf//1y/KcUfdEWyBVyJF3kld4iNcIGulTYzIh2/mQX6a2MsZ/t06q947zIUVaB5kIjRYW9zxJD5p6jzvvVEe38XpKnodxjafuhp5xcJcIjPcXy0NYx0S5AgrS/GoW3k7zoPSNOSTUbYCJdOl48iqhJq6y27Qnkotc/gJBeFGUWM2O1NwvXI6JdFweQ/111bCr4fYjlERJvih6rbeDZj1MkrivaNguRDC4CRR5P7vshjh/50kbltDVhu6HGowj6yUuoGqJWEW2ZK+4r3iV5t4MI82jKwtPGibbo9dTzWllKhIeuRfltLuh6eWtu+Ha8aQNoLRpycvtXS70kp0U7t7eOCNlGcCaDrBFlq2oDUtRfFxYbEUVoheisaNztMWKXesj3qtkiJj+zuFlDC1NjJVv+vP+U5fNlaqlcSHMfyZP39CO47Ny7FdGPjgBe7WJuJIqJyRhCkXVHCt77qzH09Q5jeuu86iIpHGGZTitCpAltt/zJ0LUQ3t0dImamqNFg2OC44knEyCsMbVQLk6qINvceuhD7LK+JPImLSyNn2ZD0CENOlhKxk/nse6E5W0eQQrkMM+YbEpxO/RCSG5eWoNN3+JmnXVYotAL3Ov5NC4q8Zh5kZpzuvYyLZyzCKdEWAuRD31TmUQekAgM2kF0ehjcuvFv+2X1BsBgad3onbGGybicy9dKv4cXTPJ1m89aBIpy1sdJOC3EHoWJzjVxg2Fho/S4W4V6rjgBmxgsLxy5pg40sQkGsewYQ2zrl6UlDyHla2j8utNaBzTXii8SKeY1PU0O1K6o4jggfjee0ZLipM4nuiysF76FQtV+s7A5omGjL/lgXTRbukctClZueRctDZ1t89T5j8EmmMfGFF0NjpdkeaQbpmZKnXfA6+HbeDppIGi10dkW72Fs0JdYSMzbAHRzdbdu0ME2xbdX2cq5iUSjdvZv7tomJwVGE2LiyQi7ZQGp5t2parRy7Y1W5jZ2ilM4uhLcqxyO7PIRnzG4dKxrKiFOzliAWie6RFaQ+HyF7dmk+fVTiWZsQ6yL43Crexk5RiOt5FGkntrGz0KX7hYf3OTbkwBfLsAXHXE5LT6TuBd2fxALr1ZV9n3rj0SjR5s/fEcMC69fuYc8YQHjxoRWsmOrnqwhvSVMkpaetm1YxSqHLYX6F92tXOzjHqmjbFiCOGRu4pmcNPH7OBltQJx8mrVVYe2Hh0CFv7xAiizsifXGyiRA7JKkngAkT5304M1aC3HYSQXqv1Q+MukY6TtGfU0dHaKWxishuRHn3E1s0dTuntHBArO+h78okCr31enZfFIU8oicVot10/MwgFhxCeDKGYOBhU0OedyIIsquj6CaDvd8Q9HfG2IshIdP2HsUZBkY9gcaItgxJjYTEP2lCBx8EI39CHkf5AD26jf0WF1sk+na3+/N0g/FDfMyKtpMCZMYGWPul/977vsXxt7I859UhlhPr2G+i822cHSsT3F2SeCUtn3CnCd/Bre2wHacSWJCF1BzZsMtISsZJsTbBg44I8dbbkd7con2ygr6XsYcQgm0aYQWgu13MJcomExMEs0n9glCVv2yZFzZa9W6IaMuCWNVt58zDCw1jLvVQ4Jx7TV6O/LjAowdGfV+Cf5DtupTXFhFpFuPVclOinWfC6KAAGbUBstFgKInUfQE5idBU/aMuUzg9Vg3hHMvBLl4EzrK2V825z3LYXQilpMdP+uE1sAjnD9YxV0exLvAHiLbwJEsS9bxdjLztD0nMFRWHGLyIVtKaZQyW5y0/MEr0PldWeytg+UQWAfSQx9vhQ3AsjjfbdUopFc6HqXI4TiEvW/JT0ZLGjKTWR7PKdIPcQPMYTux2tYsxG6Bx4zn60h+9MF3hIPLkvLbXK1iIdOnWCo7fUhQUifN5Gh5z4KiEmmKsYN28os0rruVeMPulPHCPVKYEWFeCpcOOSo5mvUQqUjh7hULjHrYtuU4ibIL9BNuSLp7x2Yt+eP9jL23BhN1by4OiftEYezy8+CTOhqCFt1Ztn7ZpDRtQ0Hsao/dE78c/Y77w2so0r2jz8LQ8lGaiXbalmCO88tJQ9hqZ+VksvF9C7O3jgvSk/xGEL+qfG1MoWonmFW1+bGqxaN/ieHVUtIedUfh6UyzQrGhU5pX/WEGI7eD7sUPCXT1cfcr/3JhCoWgdmroQmfucgD/IdjLFERlLIH12i6+JALyBKKaL25p4KqXsPA1egKOQvMOH6ZrmahUKhaJ+NLVoV+cWuV/XyLPOkZLWt3Msh2JIsaM0P8Tqc/aBQqFQ1IHWFm2+I3AU0zMDZdvWL5GaT2JtK425GQfOGlAoFIomobVF+2wdIf8wwn83eyuPQqFQOEOLp0cUCoXiKQH8Hzb5mh0w+EtlAAAAAElFTkSuQmCC");

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