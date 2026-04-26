"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["220768"], {
493448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_profiler_introduction_deep_recording_deep_recording_md_441_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-profiler-introduction-deep-recording-deep-recording-md-441.json
var site_docs_ide_profiler_introduction_deep_recording_deep_recording_md_441_namespaceObject = JSON.parse('{"id":"ide-profiler-introduction/deep-recording/deep-recording","title":"性能问题定位：深度录制","description":"创建深度分析任务并进行录制","source":"@site/docs/ide-profiler-introduction/deep-recording/deep-recording.md","sourceDirName":"ide-profiler-introduction/deep-recording","slug":"/ide-profiler-introduction/deep-recording/","permalink":"/harmonyos-docs-site/ide-profiler-introduction/deep-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"性能问题定位：深度录制","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deep-recording","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"性能问题定界：实时监控","permalink":"/harmonyos-docs-site/ide-profiler-introduction/realtime-monitor/"},"next":{"title":"Frame分析","permalink":"/harmonyos-docs-site/ide-lag-and-frame-loss/ide-insight-session-frame/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-profiler-introduction/deep-recording/deep-recording.md


const frontMatter = {
	title: '性能问题定位：深度录制',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deep-recording',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '性能问题定位：深度录制';

const assets = {

};



const toc = [{
  "value": "创建深度分析任务并进行录制",
  "id": "创建深度分析任务并进行录制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "性能问题定位深度录制",
        children: "性能问题定位：深度录制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建深度分析任务并进行录制",
      children: "创建深度分析任务并进行录制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可针对不同的性能问题场景选择不同模式的分析任务，对应用/元服务进行深度分析。当前支持以下调优场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frame：主要用于深度分析应用/元服务的卡顿丢帧原因。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Launch：主要用于分析应用/元服务的启动耗时，分析启动周期各阶段的耗时情况、核心线程的运行情况等，协助开发者识别启动瓶颈。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Snapshot：支持多次拍摄ArkTS堆内存快照，分析单个内存快照或多个内存快照之间的差异，定位ArkTS的内存问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocation：主要用于应用/元服务内存资源占用情况的分析，可深度采集内存相关数据，直观呈现不同分类的内存趋势，提供内存实例分配的调用栈记录，深入分析内存问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkUI：主要用于定位由于组件耗时、页面布局、状态变量更新导致的卡顿问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Energy：主要用于应用/元服务的能耗异常分析。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkWeb：主要用于定位web应用加载和丢帧问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network: 主要用于定位http协议栈网络信息诊断，用于网络请求分段耗时分析。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concurrency：主要用于显示并行并发应用的实际运行情况，用于帮助优化并行并发代码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU：主要识别GPU利用率低以及执行图形和计算工作负载性能瓶颈的根本原因。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time：主要用于改进函数执行效率的分析，深度录制函数调用栈及每帧耗时等相关运行数据，并完整展现ArkTS到Native的跨语言调用栈，支撑Native API典型问题分析。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU：通过深度采集CPU内核相关数据，直观地呈现出当前选择调优应用/元服务进程的CPU使用率、CPU各核心时间片调度信息、CPU各核心频率信息、CPU各核心使用率信息、系统各进程的CPU使用情况、线程状态及Trace信息等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择场景模板，创建会话："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建任务的入口，DevEco Profiler提供Frame、Launch、Snapshot、Allocation、ArkUI、Energy、ArkWeb、Network、Concurrency、GPU、Time、CPU场景化分析任务类型。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(393712)/* ["default"] */.A) + "",
            width: "22",
            height: "21"
          }), "：在设备列表中选择设备。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(693502)/* ["default"] */.A) + "",
            width: "23",
            height: "20"
          }), "：在进程列表中选择要调测的应用（可以是正在运行的应用，也可以是已安装但未启动的应用）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(258442)/* ["default"] */.A) + "",
            width: "22",
            height: "20"
          }), "：在DevEco Profiler主界面的新建任务区域，单击要创建的场景调优分析任务类型，并单击“Create Session”。创建后的分析任务，将显示在界面左侧的任务列表中。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(494545)/* ["default"] */.A) + "",
            width: "22",
            height: "20"
          }), "：调优详情，显示具体的调优内容。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(232267)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1446",
            height: "487"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置并确认会话环境："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在右边录制详情区域，工具控制栏上有很多小图标，鼠标放上去会有一些功能提示，可以添加一些录制选项，各泳道区域也有下拉框选项，下拉选择不同的设置可以调整录制功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(853194)/* ["default"] */.A) + "",
            width: "422",
            height: "309"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动录制，复现性能劣化场景："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击任务窗口左上角的 ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(595110)/* ["default"] */.A) + "",
            width: "17",
            height: "17"
          }), "，启动录制，也可以选择左侧的任务列表中的", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(800045)/* ["default"] */.A) + "",
            width: "17",
            height: "17"
          }), "，启动录制后，等待任务状态由“initializing”变为“recording”。录制过程中整个DevEco Profiler不能再点击其他的模板进行操作，如果想录制其他模板可以结束本次录制重新选择其他模板开始录制。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(303748)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "2000",
            height: "677"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "录制场景结束，停止录制："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在调优设备侧操作APP，执行要验证的操作，复现应用性能问题。单击该任务的停止按钮 ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(858038)/* ["default"] */.A) + "",
            width: "16",
            height: "16"
          }), "，进入数据解析阶段，所有泳道任务状态由“analyzing”变为“rendering”，解析结束，右侧调优详情区域显示具体调优内容，解析过程可能包含大量的数据，需要等待一段时间，请耐心等待解析完成。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(218480)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若录制结束后，ArkTS Callstack/Callstack/Native Allocation/ArkTS Allocation泳道显示No Data，在泳道名称处可将光标悬浮于三角告警图标处，查看泳道报错的原因。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(917538)/* ["default"] */.A) + "",
            width: "1553",
            height: "84"
          })
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
595110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAq0lEQVQ4EWP4+Pnrf0oxA6UGgPTTxpDLD7//L1j893/Lhj//QWxiXIrhkt5tv/8HTfwPx33bfv9//vYbXsMwDKlc+RduAMywmOn//q858ROnQUQZAjMsbe6//ydv/cAwjCRDYIZVrfrz/+5zhBfJMgRkGCjwYYFOtiH5lBoCCnyyvZNKScBGT//3fzUpUYye2EB8khMbKKmDAq15PQXJHhZtpNAYUUyKZphaAMtDCR4qQpyuAAAAAElFTkSuQmCC");

},
393712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALbSURBVEhLtZTbS1RRFMa/OWdmHEfn4mA2JpaWkRYUhBJZdpUeInvzpQe7QdRb0FtEz0H1FBQUQY/9AVEplYohQT1EF0NHQ5osNJ1xZpxLczm21jpnxhk7WCR9zOXstff67XX2XmtZFkn4D1oR/PZLDMMTEYx8T2A6mhbbWrcdzX4n2jd5sHODS2xmMgW/+hzFnYEphOMZ2FSLfBWLReY0Wp7RFpHNLaKiTMWFA3Xo2OyVuWL9Br71/CuefpiDy2GFqtACA5jJacgS0E5GVbGA3WiIaCqLQ80+XDpSL+vyItcl3ewLom8kBK/TCitFyVAGRJJZrPc50LW9Gt5yK3JE5DnegMeDo2FcezxpUHQVwAx88SkEt0MtRMmAuXgWPbv9uN7dhFN7atG8rkKOIS9e6yKfofEIHr2bNaxF4Nv9U/DQ7sVQO0X94EwLultrEJhJFuzLL4V92Pfe4DfDYoCfUbQaOSj0annxebY1uuGnLLj4MIBeOveVJJdLnyfv9XUC7h+dh8NWctySCW8mY+i5P4LxmQSclAF/UplVwcBYWJ6FFgyl5CKKxRGkjUxgh9JZczEjGNLzXcCzCxkCybhEDM/n79+IGeFERn/mn+pKm+TkasWMKqdNngVcTznKt71acVXWeezyLOCDW7xIZTQxrEbM6CAWS8CdW32Ui/qOxeJxIp2jr4Z0Vt+Y/5NkWx4Ir9XIdHxHtYwFzDq/vw6RRFZKmMULrYqC01RtXHmtDXon4652st2PzpaqApx9olT2ZztqZcwqaUJc78MTUSlRTrNtVL5XuxqN2VLFUjmcuPsR7nIVCz9zaGtw48qxBmN2GZh1ozdIBcM9Q282DDCTlXKrkgKIUXdrb/Lg8tElKMu0Hw8F5qUfxykSG7VJhtCpiPgc+W24jTpsKs7tq8XhFp8+WSRTcF6vJ6N4GYhgbDqJHzG9ota47GiqcWAvRblro0dsZloR/O8CfgG1Z0DXY0sNTgAAAABJRU5ErkJggg==");

},
232267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752954-23e271d4225d66862777dc87499d507a.png");

},
303748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912946-366928cf49e0ffe79b3ee6dcd1815d47.png");

},
693502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAUCAYAAABmvqYOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAANhSURBVEhLtVRLSJRRFP7+eTvq+BpJ85lm5YPKIqIHRIGG1UaCbFXRwlWLctsuaBGWSbUQpCcUVosWLlITjbBICVEwMc1M8znjq3Gc94ydc+f9sFZ9w//Pvf8957vnnvPdI20Q8J/wV/KfS1b0jP1G/6QZhjUHlsxOpCUokZ6gQnleAo5uT0JBepzPOhoxyceNVjR0TGHCaINGJYNSLkEm8QN4yNpDLk73BmwOD7JT1bhWkYPizHifdxBR5E8/zaOlbwG6ODkUMhmIE06XB05iZUv6BLVcRv8S2NFFm5isLlSX61F7LMtL4kMY+YOuabQNLSOJiCVi5QiXKRX78hKxJycBGoUcS+sOvCUbhlpBOxGYwmR143hxCuroFH4EyDuHV3D33RSStYoAsUQrt2uKkJmkEsahqHs1hpkVO6UsuMEqneDKiWxUlaWJb94Vwv3uXxSxl5jhpjTkU7GYuL59CicbBlDVOICOr0tinSO02D1izGA/9m/qnvF98ZG3kwNH6SdmcETfDRacvjeI3h8m6BOVVAcFXvYZxHpynFKcLhQS/4ixddAo5oK8a2QVKspfCLcAb5CiVUKj5DXhCjkph+Fi2UTYsz/XoZv4GIJ8dtUOOevsH7CRag7m68S4f3ItkO9QsGQXTE7vmF8spcioI8GS0ygkXDySIebPPs8jjk4UCeYx21xiLFazktXwBGsTBS6uw+3BnXNFUFC09W1TMFlcMU/L2UrXqcVYkO/cohWXJBaY2Gx34/qpPGSlqPH44xzej65Aq5b7LMLBJyzJ9LYEQX5mrx52p1toNRR+4pvV27Cfct38YRavvxhEkWOB/W3EU1kaovNC0nMp9Qa7K0jOMmPyW2cLsTs7ETdaJ/CwZ1a0AG5g/Nic4bl0UNRFlIWyLG+fCdxQOymhpmmIGhX3FEnMDxXoUFeZKwxj4XnvPN70LwqpciAWamQvaosRr1KI9bDeYqS2evnJiDDmDfTUXitKUoWmw0pHExUVtnN4GXMmB4lhA+sON5ov7MJWEocfUV2RI7jaMoZxg1UUjeebgdViIdLcVA0azxeJoEIRRe7H4LQZjyjH3+Yt4rLwxeRbyuaUWtGGCym/lw5n4IDvYkViU/JQjC5YsEgFXKO2mkjtWB+vxI4MrW91MwB/ANdmhJ3N4s+UAAAAAElFTkSuQmCC");

},
917538(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912958-8fa662e931be2f8a4fed2f702bbd36f6.png");

},
858038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVQ4EWP4+Pnrf0owA7LmBy++/u9Z/+1/+vRv/xMno2KQWPf6b/9BapD1wA0AScinf//PFYkfg9QgGwI3AGQ6Ic0weZArYa6AGwByIkwBIRqkFsMAkJ8JaYTJg9QORwMoDkRQ1MACiRANinKMQKQ4IYFMBBkCMh3kHWxJGeRK5FQI0gNPSDAnkUoPvAEAIEEm4qrpjmkAAAAASUVORK5CYII=");

},
494545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAANWSURBVDhPtZRdSFNhGMf/+56bzm2ZZaZmJiqCXRkSJUiERV5UFxJdCFHRRVAXYV3UZRBdRFS7KKSbCL3xLjSIlDKhSLxIBUUt8SM/llO3ubmz7Zz1PO/Z5uaWd/3Zznbe876/8zzP+39eTYyE/6BdwRPLAQxMbmB0IYAVXxjBsIy9eUaUOM1oKM9DU40DOQZdfHa6soKHZ/1w9f8mmEQLtTDotNBqaTI9U2i2TJewHEMooqCp2o57Z8rUhSnKALv6FtA75oHNrIdex6htSVEFUQLqtBqY6YW8lOEMeNpaibICszqRlAZ+/H4Wg9Neguqg0aRDA5KMhop81B6wwO2LoHfUI+AszsAbiqKjrRrFdpMYU5+Q3v1YxZep7NAwRVriNFHKpWipK8ClY4XYononxBnkU4Y3307GR5LgGDoGFmHLyYRyQuFoDPfPlWFpQ8JPdxARKsdOaQlOH7z8tKDe86VnxBPfnHQoKxBWcLbOiX02E558mINEUAbsFA+ZjVoq0Zq4F+DPk14Yaed3BCtqZ8vR40ZjMYZmfPg+44dZn6xehkRg9JlaCargZa8k6rRT64EI7pwuEf+f988jl+q/qwjBwNXNiAr2bskZ0W5FZDRW2XG0JBcvyIKbISXry1MlnhKIHSTAxQ4jFIX/qVJow/QEuUsuGFvcRPewW/h1jTJgH3OJ1oNRAUiVMC5d9uQaVR8/+zgvrJbwJdurvtyG9uZShMhWBqorB8tdlxp13/ia6FCrSS0RO2hjK4rOa7UqeHwxgPbuaeTTRrHdOKJCmwGnqp0i+gQqRC9srnXCYtQJ3896Qvj2ywdjfEM5Gys9e32lervzbndNYskbTk5iuBRv14R8FM2rtipxEJ13jdKvITmfMVyeRxcrxL6oo6SHFw7T6aUIIItTtlCKnGbiy/ccrZX8aqHvNpT9LuM4tTxDWUlwHrWk63IlfNTzETllJ1NkIlDPyCq6htzIITCLI/XTmpoiKx60HBJjrIzTjSfd6pzCH/JiLkVIfZPW5uwOwomXSNTq/pCM1vpCXD1RpE6IKwOc0ODUBt58XcbcmkRdyecA9ZVwRgxRKhffnzxix/XGIjishviqbf0TnBCDJpaC8JCHeTPtFgP25xtx0KEej9kF/AXoU47l4mMeGgAAAABJRU5ErkJggg==");

},
218480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
258442(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAOOSURBVDhPtZRNbMtxGMe/fe+6tVuXjdVms5kYIgjzTixeD7IEIXHgIhJGJFxEIhEnxMGBC06EHZF4CwlBJOJAwpDZvIwwXWzNauu6f/tv6/s8bafdxs03a7P+Xj6/592SovAf9E9wezCCJx39aPsWQc+vGIZiCZR7nZhc6sbiWi+aZvhR4LBlTudrXPCLLwM49/A7YQYvWuGwWWG18jD3kjyd4FcskcJwPImmhhIc3lCTvpijMeBzD77hzps++Nx22G0WgggxU0gSJgflAZc+ZIFcFbisn9k2DTVlbmWI8sCn7n7B0w9hQm2wWCyIJ5J6cTVdFvfF4lAkjntvQ4QCTjtfocSD8LCJizsbUFni0rUR8M1XvTj/uBvFBWmoSVcnl7pwemu9HlQS17PafakdA0YCdlouEng0lsSN/bP1dwacQvPZNhTRUmvmshycyETNrS7CtZc/NaYxM4l9TZXYMn8Cnn0M4yQ99DJkIrEuyofWzfJjz6oqqC+3X/dlkvPHIhst6RmI4Rb35MGyIgcrwoHbbSHdLy10qBNZyU2304o7mX0FP+4Iw8mE5HiqErjTzlgzeRLrcNREY41X994Hh3Q/V2oY/zp7htLgYNgYc0gkFeFmgpbW+7C0zocWuriXoejqi6L1eY+WYp6IkJXewXgaHI4mxlgrkgROD3hwcG01Dq2vRvPcMl1/1N4Pg/HOiYRKEQRFGGtNXsvV9wgNmlq3oyUJkxAIpKHCg13LAphT7cUPetlypQMexlWqSCQxjxgmjjXXpS2ePtEDk1UwnqRWpY3LmbxgOIYj1z8xFMMIFLswjxUTp1d/lEKcnDo2ioLXzSxlchLaSbkSa9VlrotV8oiER+aGyCallCP2Eyq8LhR77GnwjEmFmFpekPe6QBfV+rCQn76IyU8c3f0GVjX4dT1JyNvuwZEGkcd/sfsOrKnS3yOdN8DF7RfeseBtWiEyyXYsqcCmeeV6UCok2zyi4zc/69RzszKEEImZWFDjw9GNU3Q/b1Z09Uaxr7UDRS6bTjSxYApnRCMt9BXYdRAFGYb7nBXyeBqaolEJzKosxInNUzOkUWCRWH6gtRM/WYvygMw0iavkVuyVqSZNI/8bbByBbmucgF3LA3o/qzHgrJ529uPysyC+hgx2pUXDIJGQkEgFye8V9SXYvTIAP9t7tP4KzkpA7T+GNHkG27rE40BFsRNV/vR4HF/Ab3OZucvxfNeZAAAAAElFTkSuQmCC");

},
853194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912966-195f864bfdf288dfb71633b23dd97644.png");

},
800045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABCUlEQVQ4Ea2SYQ2EMAxGcQAOkAIOwAE4QAJSwAE4AAdIQAISenlLuuvGSO4Svj+jpX187cjkBWUvMCQJua5L5nmWtm2lrmt3EpNP6QbZtk2KopCu62RZFiGepsnFeZ67OAYFEBooPI4jrnMxecCxPASrOFAA8b7vyRHKsgw4HqKW9e04jlJVldDAPqwYlXqVhzRNE1gFwnjneToYC1aXjDQMgzK+t8NXaVIpxMbkEHXUq35ygguarBOcqzwktROa2Ymdn8bHnXAb9nqJsc1phRvqbN47oZAmC7LNPAPgN7C7Ix9ALKjve1nX1f0rnMR8IAYkISSxyh5YHgvlJLYjUKe6OdEX/5yvQD6c6PQA99vXXgAAAABJRU5ErkJggg==");

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