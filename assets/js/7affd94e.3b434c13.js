"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["621000"], {
3042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_profiler_ide_profiler_session_ide_profiler_session_md_7af_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-profiler-ide-profiler-session-ide-profiler-session-md-7af.json
var site_docs_ide_profiler_ide_profiler_session_ide_profiler_session_md_7af_namespaceObject = JSON.parse('{"id":"ide-profiler/ide-profiler-session/ide-profiler-session","title":"会话区","description":"DevEco Profiler左侧为会话区，可以分为三个部分：","source":"@site/docs/ide-profiler/ide-profiler-session/ide-profiler-session.md","sourceDirName":"ide-profiler/ide-profiler-session","slug":"/ide-profiler/ide-profiler-session/","permalink":"/harmonyos-docs-site/ide-profiler/ide-profiler-session/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"会话区","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-session","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"界面布局","permalink":"/harmonyos-docs-site/ide-profiler/ide-profiler-layout/"},"next":{"title":"数据区","permalink":"/harmonyos-docs-site/ide-profiler/ide-profiler-data/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-profiler/ide-profiler-session/ide-profiler-session.md


const frontMatter = {
	title: '会话区',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-session',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '会话区';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "会话区",
        children: "会话区"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(639459)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1451",
        height: "463"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Profiler左侧为会话区，可以分为三个部分："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "① 调优目标选择区域：选择设备及要分析的应用和进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选定被调优的设备、应用包及应用进程作为后续调优会话的分析对象。依次点击设备、应用、进程列表完成选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "② 会话列表区域：列出当前已创建的调优分析会话。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单击列表中的会话后，界面右侧数据区将显示其数据内容。选择设备、应用和进程后，此处默认显示“Realtime Monitor”任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话区将记录当前所有的会话。每一个会话都会包含：会话的名称（图例中的\"Launch\"）、会话当前状态（图例中的\"Recorded\"）、会话对应的录制时长信息（图例中的\"7s 605ms\"）。会话支持拖拽方式调整顺序。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "录制/删除会话"
        })
      }), "：通过鼠标悬停在名称后方的信息图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284676)/* ["default"] */.A) + "",
        width: "20",
        height: "16"
      }), "上，会话所要观测的调优对象的基本信息将会以Tooltip的形式展示。点击会话的右侧的", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(898642)/* ["default"] */.A) + "",
        width: "19",
        height: "19"
      }), "/", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(466853)/* ["default"] */.A) + "",
        width: "19",
        height: "19"
      }), "按钮，开启/停止会话录制，此时工具开始抓取性能数据，开发者可以操作应用复现性能劣化场景；点击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(457149)/* ["default"] */.A) + "",
        width: "22",
        height: "22"
      }), "将删除该会话。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(965027)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["会话区存在两种会话类型：活跃会话和历史会话。活跃会话可在此区域内直接看到，历史会话需要点击界面下方", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "View Successful Sessions"
          })
        }), "前往查看。开发者主动选择新的调优目标后，活跃会话会清空，相关会话进入历史会话。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "历史会话中支持删除会话和数据导出。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅成功录制或导入的session可长期存留在任务列表中；录制失败或未启动录制的session，在设备/应用切换时自动从任务列表中清除。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["会话录制完成出现", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(370963)/* ["default"] */.A) + "",
          width: "20",
          height: "20"
        }), "图标，表示数据处于解析状态，请耐心等待解析完成。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持的最大会话个数（活跃会话个数+历史会话个数总和，重复不计入）为15个。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数据导出"
        })
      }), "：待数据解析完成后，会话便会进入数据展示状态，将数据可视化展示到右侧的数据区中。此时可以点击会话面板中出现的数据导出按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(177772)/* ["default"] */.A) + "",
        width: "19",
        height: "19"
      }), "，将录制到的数据导出到本地进行保存，借助这个能力，开发者可以方便的在团队内共享录制到的性能数据，也可以防止采集到的性能数据丢失。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "智慧调优"
        })
      }), "：提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ai-profiler",
        children: "智慧调优"
      }), "功能", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(410032)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "500",
        height: "500"
      }), "，支持通过自然语言交互，分析并解释当前实例或项目中存在的性能问题，帮助开发者快速定位影响性能的具体原因，目前支持对Launch、Frame、Allocation、Snapshot模板进行智慧调优分析。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["③ 场景化模板选择区域：新建会话的入口，DevEco Profiler提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-lag-and-frame-loss/ide-insight-session-frame",
        children: "Frame"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-launch-overview",
        children: "Launch"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-snapshot",
        children: "Snapshot"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-allocations",
        children: "Allocation"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-lag-and-frame-loss/ide-arkui-analysis",
        children: "ArkUI"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-profiler-energy",
        children: "Energy"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-profiler-arkweb",
        children: "ArkWeb"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-profiler-network",
        children: "Network"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-parallel-concurrency-analysis",
        children: "Concurrency"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-profiler-gpu",
        children: "GPU"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-time",
        children: "Time"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-cpu",
        children: "CPU"
      }), "等场景化分析模板，提供对不同性能问题场景的数据分析方案。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(614067)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "16",
        height: "16"
      }), "：Frame卡顿丢帧场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(187578)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "：Launch冷启动场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(731042)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "16",
        height: "16"
      }), "：Snapshot ArkTS内存泄漏场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(482203)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "：Allocation Native内存泄漏场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67704)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "：ArkUI卡顿丢帧场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(964492)/* ["default"] */.A) + "",
        width: "18",
        height: "18"
      }), "：Energy能耗诊断场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(79603)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "：ArkWeb加载丢帧场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(497877)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "：Network网络诊断场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(62958)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "：Concurrency并行并发场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(157267)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "64",
        height: "64"
      }), "：GPU活动场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284469)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "：Time函数耗时场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914749)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "：CPU调度场景化模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["选中任意模板图标，点击下方", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Session"
        })
      }), "按钮，即可创建出一个全新的会话。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数据导入"
        })
      }), "：在③场景化模板选择区域，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Open File"
        })
      }), "按钮，即可选择数据进行导入。当前支持.insight，.htrace， .ftrace，.heapsnapshot，.rawheap, .sys，.perfdata，.data，.nas（包含Native Allocation数据的文件），.txt（包含Native Allocation数据的文件）文件的导入。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "配置Profiler缓存路径"
        })
      }), "：在③场景化模板选择区域，点击左上方", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(939202)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "18",
        height: "20"
      }), "设置按钮，会弹出文件选择器，设置Profiler缓存文件的保存路径。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782686)/* ["default"] */.A) + "",
        width: "653",
        height: "151"
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
731042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABt0lEQVQ4jZWSO2hUQRSGv5mdvZHsJlx3UXwgRkyhYpE+orKIQiIWFr5AENTKShAsUmgl1lYGMYYgK3GDjZ2F4AsEIdoJSqI2IqwRVqKXu3dmjsW9bFx3je4Pw8A5838/Z2ZUFEUiInjvSZIE5xxBELSWUorVZEQEay1xHGOMoVwur2roAFhraTabhGGIMQaAd48fsbz0te1gzhh2HByjr1BsByRJgta6ZbZxzLObN7qmBf0Fdh4ab6uper0ub+eqfP/yGYAkilj6sPBXQGloGwDh5i2Mnr+AajQaUjt3qqe502jF2dmHmCAIuvaH91UYOXocRJivVVl88RSAk5Mz9K8trXCcc3LnxJE2cy6f5/T0fXL5fDbWT2bOpLDS1iGCQhGlNGNXrmG01h3p4j0ispKiNVprvHN8+/SRA5cm6CsOANDpBrxzvLo7BSKI97ycvoV3rtV/PXeP+Vo1hYuI3D52+N+Xlqly8TJrBkOUUmzYtRvz385Mbx7MEmSfafzq9RQwuHET2/fs7wm0+PwJkI1QX3hP88cy3jm8tenuLGLT/c+6s5aBdesZ3ltJAb2O8bu6vkIv+gUi2rrpkvNJhAAAAABJRU5ErkJggg==");

},
79603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABD0lEQVQ4jd2SvUoDQRRGzwybCXYJ2hmw0XdQ8LcRrASF2ClY+gzBIthY+SZaRGIjiCLYhoBaiiirsCRpXCZkZvdaBBZEEDex8oPbDPd89xSjrLUiIqRpinOOJEkwxmSjlOKnBCKC957Yxty+XXMeniEIAFppSsUy3X6HyYkpuv0OCkWpWGapssrWXBXtveel98zJwzGN8DSDAZYra9Tm6wAcLhyxOL2SvV08NYYGzjkee/e82/Cb3s3rFe2oBUD9rpYZtKMWg2QwXIqiSPaaO5I3u82qiIhoY8wX7bzRxpiR4b8p0FqPVzAW/Y8KAl0gdvGvodh9EOgCAAHA+swGB5f7uS5vzm4DoERk9G8IfAIMaJ2ZVf0+FgAAAABJRU5ErkJggg==");

},
898642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACl0lEQVQ4Ea2UvUtyYRjGy4poCczMoaygBJ3EwcBobDAIwaG1hKCQ9pZAIYQI/wNxVZccGgJB+hCiFIKkSEEjkWqwiIhUtNLr5XrgHDvm29QZznnO/Vz379xf5+nCH15dv7He3t5wfX2NQCCATCaDcrn8mxwdYTc3N3A4HNBqtTCZTJidncXMzAxGRkbgdDpxcXHREfoD5vF4MD4+jvX1dcRiMeRyORSLRdze3uLg4ACrq6sYGxuD3+//AVTAvF4vRkdHEY1G8fr6imazqXD4+vrC8/Oz2A+Hw4o9vsgwpsa09vf38fHxIQsbjYa8lhafn58olUqw2WzIZrOSuQWz2+1wu92o1Wry5sLCAoaGhrC5uYl2aLVaxdLSEpaXl2W9iIyh9/f3Kwp7dnaG3t5ehEIhUfypqSmxljwJTyQSGBwcFCWhXcDYHb1ej0qlImlxfHwMlUoFpsSP7ezsYGJiAouLi6jX60L39PQEtVqNy8tL8S5gu7u7mJubU6R4cnKCnp4eGU4onSYnJxEMBoWdc0i/vb29FozhGgyGX2GRSARGoxFmsxkvLy/CmR2n3/n5eQv2+PiIvr4+5PN5YeTt6OgI3d3dQsjmaDQaMIP393eh4dhcXV1hYGBAdJZGkSY3+MXt7W15tjhTjIRN2NjYwMPDg2JkOD5bW1uwWq2yj4BJkQwPD8vFpI3tZyRSwUVIgHBOJpPQ6XQ4PT2VzK05Y6tdLpcY3HQ6LQs6LVKplEibv9z3+ZMjoxM7trKyAkbo8/lwf3+vYBUKBfDfZf3W1taE/rtAAeMGa3V4eAiLxSJGY3p6GvPz8+DQsn48Pdh96tqvHzAK2BCKeVLE43HwAGB37+7uhL39AJCgHWHSpvT8n7O0Lz3/Ad0Awfhb/OtqAAAAAElFTkSuQmCC");

},
370963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAC0klEQVQ4EX1UzSu8URR+FxaWSjamWVipKTIbhlLMDEqyoCSFfKwUqZEFY5Ds/AesxkhkmnxtlAUpka+djUgY+RjzURrfz6/n/Ly318zL3dxzzzn3ufc+9zlHwx/j4+MD19fXWFlZwfr6OsLhMD4/P//YAWhm0aurK3i9XlRUVKC8vBxOpxOVlZVic/b5fLi5uTHb+h/w6+tLgpzn5ubQ0NAAt9uNtrY2jI2NYXZ2Fn6/H6Ojo2htbZVYY2MjFhcX00DVDZPJJBYWFlBQUIC6ujosLS0hGo3KhvPzc1xeXor99PQkebW1tcjPz0cwGMTLy4sCVoBbW1sCxpPv7u5UAo2+vj4MDg7+8PHJLpcLhYWF2N3dVTEBJGcDAwOw2+14fHxUQd1oampCe3u7vlQzD7bZbBgeHsbt7a34BZC8MTAzM6OSjUZzczM6OzuNLmVzT0lJCdbW1sSnUQbj4+PIzMzE1NSUSjQafwGS57y8PExOToqktEgkAo/HA03TUFRUhNfXVyOW2C0tLb/ekAnkcmhoSOjSjo+PUV1dDavViu3t7TQw/jAP6ujoSIvpjq6uLnR3d+Pk5ARaPB7H4eEh9vf306rg7OwMVVVVcDgciiMdxDhTt/39/bi4uDCvFCafnp6ipqYGxcXFCAQCP7RmBKNN7Y6MjOD5+fl3wL29PdTX1wvY29tbKoZaM48Cn56eFp8Stsr4NmKxmNzSWAWpOWwe5JY65V9wKEDKh6I+Ojoy/elUMJbq/Pw8cnNz5RW6OhQgHcvLy7BYLFhdXQXlZNaqeCseHAqFkJWVJRXEtqYPBUjHw8MDqDkm9vb2So0mEgmQw/f3d1AROzs76OnpkRx2I/qM4wcgA3zKxsYGSktLkZGRgZycHJSVlck6OztbKordaHNz0/Tn0wAJyhvd39+LNtmtWZoTExNCxcHBgdDx28+bAhqfQG4JTjp04o3xVPsfADdQgbFDNtgAAAAASUVORK5CYII=");

},
964492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAo0lEQVQ4EWP4TxZgIEvX/yGm7faLc03rgwuWWOFCTeuDb784BwkLhN8a1wehaZhzoBxNpGl9MLo2NBVLjzXffnEOTbBgidWlRwf//0cKSWQVS481/////8D1FciCcDZObQVLrA5cX/H///+Td7fCVcMZ+LTdfnEOqx50R1asdIObB7ENmQthN64PQg+S2y/OYQYmss7G9UFYIoCkxImIt+GnDQCKLCgJ7JCy4AAAAABJRU5ErkJggg==");

},
614067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACP0lEQVQ4jZ2Ty08TURSHvxlmpu20BEyhCi1GQo2KiNEo8RU2atyIunHlSmKMf4E7dy5M3Lh0oQuN8bFww8IQSHQrYiIx2gX4iloUB9rJ0Ol0Oo/rojBYMC48yU3OyT3398t3Tq7kOI4QQhCGIZ7nEQQBmqZFR5Ik/hWKEALf93FdFyomSc8GIARqK01yXCfWs53ap3eIIEDN5FDa0g0B3/epuy7VRzdJ9vRhmQbLr583uWw6dQFJbsF88RS1M4f95BY9V28jaTEUz/MIbROpUiZ97jLBcrlZQJJoOzZCafwB6TOXUDuzOB/e4n6bI943gBKGIam6TcU0qBam8Yxik3tyzxHkuM7y9CRaJofW3Yu/9AMRBg0ETdMazK6DM/sG3zSaBNqGz2K9HEfUXWpfCgS2ReBU1oaoaRoCUDO5BoJVihDUjm70HfspTzwEWEOYm2kWcAHv13eWxu7glxY2rKr14Amc2RmWxu6iZrK4xY/RnSzL8lpnGDY99Bbnsd9P0Tp0EqW9AxAgmsWV1SRCWLeFauEVyYFDJAcO0378/EaEyO0vCGpnlvTpi3hGEWtqgsC2NiJESSxBIj9IvHd3o47rdF25jpxIsXD/BsJziW/bSSK/l5ZEap2ALNPS3oHeP0Rq3zBIEltGr6Ft3kp58jG1zwUAkoNH0XcdQEl3wcrsFIBYtg/hOhFCemQUvX+I+s+vlJ7di9xWtxBWLWK5PACSEEIA+KaBZ8yDJJHIDzbmYhTxzUXWx5+fKRL43/gNUs8A3/7rbxkAAAAASUVORK5CYII=");

},
284469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB30lEQVQ4jZWQTWsTURSGnzszztQYTYZgoRUb+mELWrPxY6NkJZTuxNCVgoo73ehef4E7peCiG0UUFBVRKG4KKiIotqASqQRDbWptdCCozWSSmbku0mYcZyr4wlnc97zn4ZwrbNuWUkp836fVauF5Hrqud0oIwb+kSSlxXRfHcdA0jUwmg+97fKl+pvK1TL2xys6eAfp6BjH0rijAdV2azSbpdBpN0yiWZrn5cJIfv2qhoKKojOcnGMsXUITS8YVlWVIIgWmaPJq5xZPn94KmECS6kqzaPzveUHY3Z49fRN9ktMG+72OaJi/nZkLDALmRg0yMnwl5pYUitx9fCzbTdR3bqXN3eipyn6KoKIoa8V+/fUa5Mh8APpTmaLacSFCIdsXpzfsXAcCqVeNTgJTx/vK3xbUtFWXD0Mr3JYb7R+nrHYz0Go16GwCQSW+PBSytLHDjwVXOnbhEb3c21MuY3QFgZCCHIP7YYmmW6/evYOhGyN+za18ASCa2cSCXj79jDVKufOy8U0mT/aOHAwDAsbFTpJLmhpB1CSE4WTiPqmrtt5TBF1q1KlN3LrO4/Cl2eOuWFKcLFxju3xsA/wQA+L7H01fTzJff4Tg2AKqqkd0xxJFDR9lsJMIb/Q34X/0GrDOm958LmJQAAAAASUVORK5CYII=");

},
639459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833603-3486809fb94259161b40bdf238e734a7.png");

},
157267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAEe0lEQVRoBe1Z/0/bRhTvn+xfto4Ohuh+2WDSVk3rtHbVNlFPEEJg3aBBjLKuUAiB8KXVppY2TVpmJyG2Ezvxl9jOm1yjy9mJjS+nEIqM8sPzcfd57/Pe3bt3d9fgA/+79oHbDzGBYUcwjkAcAUoPxFOI0oHUw+MIULuQEuBKR0CT7fW7QnK0xDJc9F92vqY37HC/6g17J1mLjskyXHK09PhHUVf8yIER0GR7/jMy05FBiRH++apime1uGpbZfr6qzH7Co85EwsJE2Wh6OAQS2LwvEUF3d06Nl/JZFefwOtNMjffpFISfSdRwzEACqfEyGkMjLE+dvj3S3h5qf3xZocFBYxdvliMRQAMuoRATIElKgwjg1Y3AILw1CMzACAxC2SAwqQhsTEv5rCqetEy9bai2eNJ6vaM++UWkMZQUs08C63eEhmDhg3FZPjXXbgukNPrDxPUGbmQ+U47SMgBU8sba946VS5MV/oWOA7ly7re6b2DIZ9+YuN5IBJ6tKACQz6q4NanxkgukK/bxVvMorShVJz57i5E40GCSEXh8TwSAZs3CrWcZbvFzZ0tXqtbizU7R8XKzCQCr31Z9nX2flJgEBGav85rsVH+vtpo+I7KpOgCkvz71tUucWS+bvkb8MwRzdyESZiABXI0r7yTPSj/f/GEZ7t0zrbuRZbiNaQkA/v4pMC/RYxIQ4P49W6mW2f79C085WdhTe5bc82PO2ni17Y8Y8g49JgEBtd7Jmw3BWprscFiY6Ex9ZJyboABAPGnhjbhMj0lAAO/qyoWc4/jECJ97UD9Ky8mxUvFAKx0bbvJZuVWVeBMADNXGjcZlekwcwZNGcTWubBrOsbBeNpNjzklqY1oqHmjFfS05Wso9qB8+lBMj/OZ9qZDznLwAwNTb3WhEmMUDDTcUx8TbzyEgVxx3pr/xpxqW4eZulPBT2/LUaUPszLeQRESA+VVvTAIChX3HtXOf9jjIbs/UXm56VurSZAVBv9n17Hp4NOgxkRYA7wMHrsaVn7KBObGwpxYPNN8QFPeQ8o4ek4DAzEd8Q7Qk3pz52HMR4m7DmVn/3Y5LIGT+sAxHj0lAgGW4Rz8IAMC/0BGHlVtVtyydve5hxTKce2lzbikRhtl1ZdSNSUaAZbjDh04paqh2PquibQgAfFuBewu0m4pUzNFgEhNAHPCRAFDYP1upa7eFSt4AgGw0692V43LoAxMfck4axdfoX3eFptRJlDgKAMgV88/vzilCcTRX7g8TV01AwFW5MS292VXF/1qm4RwphXet46fNJz8Hlm7dRne3kGJSEehWf/EtV5cAzuzi/RpdI26nZw3g/4gOd/E9cTtjAsO46I0UAbxUppkk6IFjeapHTd4H8sJEtAeOrV8v6RPT9ky0JyZdseffn8L6cFJihP/nUWNAj3y+J9DARQwAat1avyPM3ehxmglhlUlEeGZV7EzCX4qHYJ49s94T3UuqSGsA73SZ5bAIXGa7kW0xAeSKIQlxBIbkeKQ2jgByxZCEOAJDcjxSG0cAuWJIwv9VxdlVluyDRgAAAABJRU5ErkJggg==");

},
782686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753655-30024921e4f42cebb43333124a07f0bc.png");

},
914749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACHklEQVQ4jZ2QTUgUcRiHn5mdne3D3XZaqYw6KLQJam1Wl8KD1iU6eMjDStRF6NQpCESoIEiCjt0KsQ5iERQI9olSScFashtuuaW2plSmCW5mk7Oz83ZYSEbXkH7wXv7we/7P+yqmaYqI4DgO2WyWXC6Hrut/R1EU/hVVRLBtG9M0AQiFQnRe7MLn8/Hm6Tv6HyQAuHa2oyBAs20by7IIBoNomsb40GeshSx9d/uZHJsGYMG0sH5bfBj4yI7qUpeVMjMzI4qiYBgGj28+Jz04TnhvGZpPW/bb2OAE3jVeGs4cRfN68is4joNhGAwPpJka/86pK8fZf2Q3fmO9a8LVpZw4fwyvrvHqYWLRIJPJyJ3L3fz6YRKprWDPoUqunm4vuG+0uR7LtOi+3sOG4gBNrVFUXddpam0kUlcJisJIfGzFi6diI6gele07t9LUGs2voOs6A08GmUxPrVhcmsz0HInet3mAqqp4PCoiq+6jKOA4DgAaQKSugrnZ+VUDAsV+qg9X5Q0A2lo6ifckQYSS0k0rFreFSwCYSH2hreVW3kYkL5988Z5kX4pocz3p5ASp2MiyclVNOY9uPMPr06hrPOgG2JZNx6V7GFuC7KopR/WoLoDjCEOxYUYTnzh5oYFAqMgNAMhlc7zsek3sfpySss38nJ1HHMG/sYivo9+I1FZwoH4f6wJrF8lSIO3nbouISLw3KfHepOttaVwG/5M/910NeibYF9UAAAAASUVORK5CYII=");

},
457149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAC7ElEQVRIDbWUOUgzURSFDVYi6WwsFJQUiiKiYkC0SKOJhRIkIEFUtLFKQAsRK5dORCMBNyxdIARiqgRUEMG90CgWNorgLmpwx+X8nPszgzNxSeODx7yZOfO9O+fdexPwRyPhj7j4Efzy8oLFxUUMDw9jfHwcY2NjmJiYwObm5q/xfAt+enrCyMgIUlJSUFhYiNLSUpSVlSEnJwfZ2dmYnJz8Ef4t+OzsDNXV1aioqMDBwQEODw9lrq+vo7KyEg6H43fw4+Mj/H6/iBsaGlBfX4/y8nJkZmbC6/XGAGiN0WgUfV1dHZxOJxobGxEKhVStRHx/f4/R0VGkpaUhOTkZubm58sv84Pz8XBUrC0ZttVpFR5sKCgpgNpsxNTWlSP4f3sfHB+7u7uDz+ZCamoqNjQ2cnp7i+vpaFeoXV1dXotne3sby8jJOTk7w8PCgyjQeMwOSkpIwOzurCmZmZtDS0iL3x8fHGBwcFNsUAaOkbSsrK8ojuWrAjJQ2TE9Py0tG0NnZiby8PFxcXGB/fx+1tbXo7e1VIf39/TCZTFhdXVWfcaEBb21toaioCAMDAyKi9x0dHbIZs4RgZkN3d7cK6evrk1SkFZ+HBry3t4fi4mK0trbGBb69vUVzczMsFgu48eehAR8dHUmquVyuuMA3Nzeipz3v7++fuVoreDhVVVXya1T9ZgUDsdlsErWGqvc4Go2ira1N7IgHHIlEUFJSArfbredqI2YF9vT0yGG9vr6C9+3t7dIbmNc8vJqaGnR1dQmIh22328HM0A+Nx+xmQ0NDyMjIkL5A8dLSklQli4hVyOazsLAgnGAwiKysLHg8Hj1XGzHfhsNhqb7d3V0RE/j29qaueUjKQQUCAel4vOqHJmK+ZJGwrJuamsDW+d24vLwEG1B+fj52dnZiZDHg5+dnaewGgwGJiYk/zvT0dKlS/pV+xIApoJAlzDY4Pz8vntJXZc7NzWFtbQ1sRF9ByfgSrOzOj5SpPIv3+g9D/WI1Dx+s5gAAAABJRU5ErkJggg==");

},
965027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
482203(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB50lEQVQ4jY2RTWsTURSGnztzM1KsDUOgkqJtJaLJImloiaVSqA2iGBAKKi7cuNRf0L/hWlDEhaCIgkVUKNK6qdYPbLUmoDXY0EiCU8toG5PJzHWhTQmZaF+4cDmc93nPPVdUKhWllMLzPBzHwXVdDMNoHCEE/5JUSlGv16lWq0gpCYVCADjVX3x+MYvQdfqSw+gBwxcgbNtWtVqNYDCIlBKlPL68niP37Am1zQ0AdnXuIXYsQ28yBTRPJCzLUkIITNOk/CnH0vQDfnwr+aZ17e0hfmKCUF+kUdM8z8M0TX5aZV7du9nWDGCXiry8e4OKvb4NMIw/bytmFxm/NElv8oivWZOSQ6PHSV+eZPX9m+0lbgFyM49YWZhn4NQZDqRGeff4PmuFPAD7Eyli6QzrqyvMXrtCbXODg0fTzQCAze8Wc7euEo4mGJq4gFXIk336kHA0ztup25SXcwBNPyI1TWsZ92tukdLHD6TOXWRffIj5O9fb7qXV/VeeW8cuFdsaWwCalP9t3pIeCLQCeqKJHQP6B0ca90Zs8vR5OoImy89n8FzX19gRNBnInKU7Em0FaLokNp6hf3CEpekpitmFRpPQNCLDYxweO4kuA01QoZRSfmlrhTyu4yCEwNjdSVd32HeqtoCd6jfEI6vgXr04YAAAAABJRU5ErkJggg==");

},
187578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACGElEQVQ4jY2RPUxTURiGn3t6ubblJ5f0x2qlxaCVVokGRONiNNGBsOrgYEjUzbjroEHdTFx10uCgC/5sYow2MlmHYkRAUQoGKIQmEGuwf/dyj0PTi00r8U1OcvKd933yfedT8vm8lFJiWRaGYbCxsYGmafZRFIWtpEopMU2TYrGIqqp4PJ66xsLvX6zMTZDNLOLZ2UGws6cMME2TUqmEruuoqloTXPr+kfH4MMszn0BKu37q4iBt0SOohmEghLDDa0uzlAo5/OFOki+HmBh9Xrej7MpCGWBZFl6vF6OQ4/2Le6SScQAanG6MQu6fszfqvvIImqYhLYuR+1dZTc/YhkpYD4RxOFRW06kqQKCjaxMwP5WoClfkD0fpu3wHoQheP7hB+msSgB17DuJqbgVAaJpGNrNYt01vKIIQDlAUtrfvt+uH+y/YdyGEIBQ7iuZsxB+OEjpwzH6cToyQ/jZG5scXJkafAdB18gzetr22R5FyczcLUx9YW55jZXaS9HSypiPN1cS5wScIx+a6xd/hNw9vIoSDtlgv/vZYDaCUX8csFapqAkBKyduh2/T0DTAeHwYEwUg3u6K9NRBFOGoBiqJw+tItPr97yonz1xh79Qg9EKKw/rPKHIx007DNVQ2s/EEqGafFF8QX2odRzCMti8fXz9rGplY//Vfu4m7x1AfU0/xkgtV0Cqe7md2HjuNs0mtH2grwP/oD7WLId6v5V/YAAAAASUVORK5CYII=");

},
410032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833621-2fd0336e088a0ace8f24fd7033ab2ce1.png");

},
939202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAIAAAAP9fodAAAB90lEQVQ4EZ2TzXLSUBSA+1B1aJP7E1rsA0jCmHuDG4E6JMBawCcBseA41kICXantDANSbhJqpbrq7xNgjBmGvWIYKAiLduYs7pxzvvN/17zh6AGy9gDGG46WY81W++Lq5uLqptlqL427BNs/qAIAp/KhWvufnGGO6338fMSsXliUIEIyIYRSiFBYlJjV+3R0PHDcKT/DCsXS450dLAgQIUWJ+h6EUgDHmbdDodelN4uYaZ8ijAGEz2PxbC5/1j9nps1Mu//9x8tsLrH7YjsU2tzkTPvUJyfZ0plMILBR0+vecMSs3jjJv/YIpczqecNRtWYEAhvpTGYOI5QGt7aM+uHAcQmlHMcnVS2pahzHE0p//vqtGw0sCGFRmsP2yhWIUDT6rHPCAIBJVfPNSVX721jnhClKFGE8bW9SZLny1p/EKoxSBWG8V67MZaNUEYJB3WgMHFcmhOeBqqVULcXzQCZk4LhG/VAIBqVIZA7TUun19UeTkZi2TIg/EpkQZtorR/Lu/f54PxDG4olc/tVZ/7zLrC6zel+/ZXP5WDwBIEQYLy7AG44KxRLH8f72CKV+Mf6hIIw5ji8US75y8ZQPavqXTleUIgBCmZCnsgwgfBIWW+2ObjSmzCLmG+53yneDNVvty+vby+vbe3ycu/yq9+wHrPJYqv8DvE0S8jcqEHYAAAAASUVORK5CYII=");

},
284676(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAB4klEQVQ4EaVUu8u5YRj+opSdyWIyKEU5LGS0WPgjpPwDwoJFDonJgHLYDAaUQVmUZDDIYTEoA6GU8/H6up/i+95++NLvrut93t6erue+rut+3i/8qk6ng3Q6jWQyiVQq9SdoXy6Xw2KxeLB83d+y2SwkEgl4PN5H4PP5UKvVGI/HjIoR0gkmkwkOhwPD4fBjSKVSJBIJHA4HMMLZbAa9Xo9gMHhv+KNVLpcjHA5jv9//EBoMBsRiMQwGA2g0GkZer9dhNBohFosfEIlEaDQanAOJMBKJ/EtIH0+nE8rlMpO9Xq9RrVZB/ubzeRZAoVDghEDMLwn/R/LTDqPRKFarFdxuN4rFIkajEZxOJ8xmM6xWK4PFYmEr2XG5XJj0lx0S4XK5hM1mQyaTwWQygd1uh1KphFarZSB/dTodKpXK34Qk+Xa7YbfbMS+v1yszmrzcbDYc3Lt76yFFT9Xv9zGfz0GENJetVgvtdpuDZrOJ6XT6XnI8Hkev14NMJoPP50OtVoNKpQLdhmcga87nMxQKxfOxCYVCrKvtdovj8cg8oneS/Ax0M6hehuL3+9mGTx+kiDM2FEQgEIBQKIRAIPgYdJO63S7r4/G3IS9KpRI8Hg9cLhebRZrHd6B9Xq+XhUgBUn0DGXq5tleg2RAAAAAASUVORK5CYII=");

},
62958(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABRElEQVQ4jZVSzUrDQBD+drMu7UFNDO1B7EE8FM+WPoAgPoEIPoU3X0LEF/Bu8exV8aoinvw5BIXepNjEIEuym4y3pVuSEj8YmJnd+WbmY5hSiogIZVlCa42iKCCltMYYwyIIIoIxBlmWQQiBMAxx/xpjdBPZT4e76xhu+zi/+sD4SwEAet02jg82IYwxyPMcvu9DCAEAmKba6fLwFuP7R9tiANbnWmtwzm1xFThj8Lyat7IsEQSBk5ztBAA7/VXsDTrodds2Z/0kSWgWt08TOhtFpLKCmkBIKR1xhMdwcrSFluS1KzkrSCmdkU1BWFuRjYoBgHPerFMtAQBHHI8zTOK8OcO8KHfPEzq9jOhXmUYiMiKiedKL6zFePlMbL7zEqqk2Oi2H4PE9xjStucTmy1ajkiBYXnLiQd/H/rD6Eis1+A/+AELJ8mbwUrXDAAAAAElFTkSuQmCC");

},
466853(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAC0ElEQVQ4EZ1Uy0vqURD+LfoDIgmiAgtbtMgKoiAhSEoktBYFLZIUWkQtWqVtLDDCdhK0iGhhIURPCHpsQhdCElarNhHtepelKKY9rO8yE+eg1X1wz+acmTPznTkz842CP6xMJoPLy0tsbm5ie3sbV1dXeH9//62H8tPNxcUFRkdH0dzcjKamJuj1ehiNRhgMBj6PjY3h9PT0myuDfXx88AXti4uL6OzsRGtrK6xWK1wuF+bm5jA/P4/JyUn09vaipaUFJpMJy8vLSKVSElRGlk6nsbKyAq1WC7PZjPX1dcRiMWkoDtFolEHIxuFw4PX1VVxBggWDQQbq6urC3d2dNKCDiDxbeXt7i8PDQ/j9fplLBqMcDQ8Po6amBg8PD9KHkv/09CTlZDLJjlIBoLa2Fk6nEzc3N5+RUZ6qqqrg8/my7dDW1sYvCyVVtKOjQ4i8ezwe1NXVYWdnBwqVmipXWVmJRCKRY1haWsq5E0p6TKPRCJF3ymt5eTncbjeUSCQCu93OUeRYASgpKfkrGPk0NDRwmpRQKITu7m4MDg5+xcK/REZONpsNQ0NDUM7OzjAwMICenp7/BqO+pN8p1HQjIyOor6//BlZUVIS1tTWpX1hYgFqtlrI4VFdXg1jBrTE1NYWKigocHR2Je96pwsRLsajjqXLZKxwOo6ysDLOzs59glDeiR39/f06DTk9P4+TkRPoeHx9jZmZGyjQI+vr60N7ejoODg0+wl5cXeL1ert7q6ipIzl7EgK8sIPotLS2huLiY+Uy0knQ6Pz+HxWJBQUEBtra28Pj4+OO4oWiIJRsbG8jPz+dKXl9f89sSjCQCIEAyolLv7+9zI9Orb29viMfj2Nvb4zYiG5oqpBMrB4yUFP7u7i4aGxuRl5eHwsJC6HQ6llUqFetoxgUCATw/Pwsc3r+BkZYiub+/56RSNcfHxzExMcHfp0lBrMkePQLxF0nBn658ad+MAAAAAElFTkSuQmCC");

},
497877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC7klEQVQ4jWWT7WtbZRjGf895P0nb5KQnJkvThS1sFTfmwPlCXdWio5sI6ub8pMj+Nl++6dAvQwTHGE6ZkyrOldrJEKRrljRpkvacnOc55zx+COrUC264P9z8uC+4LhHHsdZak+c5SimyLMM0bPZHgkEPtIZK1aZac3A9g//K0lqTpilJkqC1yQ83NVsbAyxb4PkmAHGUkaWapZNFVs5V8Av/gMRoNNJSSoQu8vknuxw/WaB2yOXeT/u0lwoIAb/eizhyzGc8TNnaiLj0fo25sgWAoZQiSwVXP+7xwitlnn52jts3h1y4WEXKHKU0r18K+fH2iGeWSzy3UuLTDzvEUT79oNvt6u9vaKTUJJOc8TAlrDlU6w53vhkiBJx5sURnO6HfVczMWTiuoBTYrF6oYBjC5sFWzPm3Q975oE6t4bByLmDhsIvjGjiuQWPR5eW1CuWKzbtX6qy9GbL58wFKaaxeR7N4xMP1DB5sxZQCm0o4neXVMoYpaLV9AKp1h852Qq3hUm86bP8+wRoPBZM459vre9y5NURrsGyBYQi6OxIh4GCcATDYVax/NyYIJ8hEszdIsYQQFGdMFloud9cNsgwaiy6mJUhVjjAECy0XgEmc4fnT2+6OJM81xmzJQqWaw0d91t4KOXF6hlbbp9nyCOZtgnmbZsuj2fIwTUGrPd2lzJkrW1jNlstXX/RIJjmNRY9bX++xefeA4SDl0cOpBSVzeo8kv6zvc/xEkTjK2Pkj4Y3LVSy/YHL0WIFrn00hcZRzfyPi1JlZlJxa8Ism9zcitIbr13YpFE2ePFXEcQ0MgLOvBfQ6kkNNh8tX6ux2JfUF928L7aUCwbzN8y+VqIQ2/Z5ieTWYBklrrQH6PcXVjzqU521qDYd+V9FeKmBags52ghDQeSiJ9jMuvldjtmT9GwCwP8q48WWf3zYjTEtQKJqYJoyHGVmmeer0DGdfDfD8x8r0OOAvTeKc7o6k31MIAeETDmHNxnH/X+c/ASekQq3diFJhAAAAAElFTkSuQmCC");

},
177772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACf0lEQVQ4EbVTTUtqURS9YH8kCKTQUUpQieEgbFAa9AOMTMtJYARmDoyalFioaRA5CgJxXGiUNGlWTgqaZelIhMzCPsn1WPuhL3k9n4P3Nqxzzz1n73XX3R8K/qEp5KrVari+vkY8HsfKygqWl5fh8/masLS0BGJtbQ1XV1e4u7sTfH5+NuQoHx8fSKfTMJvNGB8fR2dnJ7RarbyPjY1hdHQUfFosFgwPD0On08HtduPw8BATExM4Pj4GOWhKPp+Xy66uLuzu7qKnp0cC9/f35SMHBwcSeHR0hL29PSHu7+/H+fk51Go15ufnUSgUfpJdXFxgdnZW5PNkaGgIi4uLeH5+Foevy+PjIxYWFsSH56urq7BarTg7OxM3JZvNirLt7W28vb1hZGQETqdTcvjw8IBSqSTg/vLyEtPT06Lu/f0d0WgUVJlKpZrJtra2wGQGAgHo9XrMzMzA4/GIEqrhnkR9fX2SDhYtEolgcHBQ0kG2hrJwOCzsVEBCFsRgMMBoNAoYRNXBYBD0oTGmJRmdXl5ewPxUKpUm8Oz19VVaiX5/VSafbHOpK/stZ/XfbJNH3P4LGZue1igA/5+WyWTg9/vh9XplfOpjxCfPOGqnp6fi+8ecsWdY7lgsht7eXpkEjUaDr+ju7pa22dnZETLGDAwM/OozTsDc3Bw2NzfFgWXP5XK4ubn5Fre3t1JhOm9sbMBkMuHk5ERiFXa1y+WC3W7H09OToFqtohXox7aZnJzE1NSUTAbZFB6ur6+jo6NDLr/L1de81XNns9mgUqkQCoVEgJBxub+/RyKRgMPhkK5nV7cCJ4Pzm0wmG9PQIOOGnU3SYrHYFsrlssQwtm4/AKuvXnepbhrEAAAAAElFTkSuQmCC");

},
67704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACJ0lEQVQ4jY2SzUtUYRTGf/edO++dcdQZZ4ggTC3MUCRoE4j0hQs3ukgIhFat2kiQ0Kp9/0K1b1WpEJS1iog+zBaVX5h9mTOEhpo6zXTv+977tpi8U04jnd1zOM+Pcx6OVSwWjTGGIAhQSuH7PlJKtrTN1Kqgt9Vht7KNMWitcV0X27bJZDIADI1tMb2iqZWC7qZoVYDQWuN5HqlUilQqBcCHNZ/pFQ3AnVl31w2EUgohBLZth81bMyXTnoTgyaJi+UdQHRAEAQ0NDWGjqA33Fzz2JwXDXXEMMDZXAuY2A0ZmXW68KpLdLEFtKeVfxAcLHgVluNAR4/QBSSpWYHTO40VWM7Ws2VcnyHuG1nSExnpZCbg94xIV0N/mELHgUCbCZE6TdCyunKih3rGICouTLdHKDWa/+cyv+vS2ShLSYvhhnslcKcx03OJMu8N6MSAdF6HHFqIsRn4n3tcmuTieZyKrGOx0WNwIeL6kWNoIaEqW5wFClfcM4+89GusFN9+6TGQV54/GuNxdw9mO0jNth/lPwL13Hq42rBUNE1nFuSMxho7FATjeHGVvQnB33kUHVQDbD1NQhlMtUS51xctDFgx0OHz/aXj0yasEvFnWfFz3ATiciXC1J4G1Y9WBdomwYHTHGeLP8JqTEa711eHYO+2Qjgt6Dkpe5nT4RCHg6RdFQlpc768lGas0b9dgZynMZ0uq3DTGmMefPZPd8M3/1OuvyhRUEOpffmcS6girWdsAAAAASUVORK5CYII=");

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