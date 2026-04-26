"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["361687"], {
367010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_launch_overview_ide_insight_session_launch_ide_insight_session_launch_md_426_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-launch-overview-ide-insight-session-launch-ide-insight-session-launch-md-426.json
var site_docs_ide_launch_overview_ide_insight_session_launch_ide_insight_session_launch_md_426_namespaceObject = JSON.parse('{"id":"ide-launch-overview/ide-insight-session-launch/ide-insight-session-launch","title":"Launch模板基本操作","description":"开发应用或元服务过程中，启动速度是很重要的一个指标。如果开发者需要分析启动过程的耗时瓶颈，优化应用或元服务的冷启动速度，可使用DevEco Profiler提供的Launch场景分析能力，录制启动过程中的关键数据进行分析，从而识别出导致启动缓慢的原因所在。此外，Launch任务窗口还集成了Time、CPU、Frame、Network场景分析任务的功能，方便开发者在分析启动耗时的过程中同步对比同一时段的其他资源占用情况。","source":"@site/docs/ide-launch-overview/ide-insight-session-launch/ide-insight-session-launch.md","sourceDirName":"ide-launch-overview/ide-insight-session-launch","slug":"/ide-launch-overview/ide-insight-session-launch/","permalink":"/harmonyos-docs-site/ide-launch-overview/ide-insight-session-launch/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Launch模板基本操作","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-launch","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"案例：使用Frame模板分析应用卡顿问题","permalink":"/harmonyos-docs-site/ide-lag-and-frame-loss/ide-frame-case/"},"next":{"title":"案例：应用冷启动首帧完成时延问题分析","permalink":"/harmonyos-docs-site/ide-launch-overview/ide-profiler-launch-case/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-launch-overview/ide-insight-session-launch/ide-insight-session-launch.md


const frontMatter = {
	title: 'Launch模板基本操作',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-launch',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = 'Launch模板基本操作';

const assets = {

};



const toc = [{
  "value": "启动模式",
  "id": "启动模式",
  "level": 2
}, {
  "value": "查看启动过程中各阶段的耗时情况",
  "id": "查看启动过程中各阶段的耗时情况",
  "level": 2
}, {
  "value": "分析静态资源库加载耗时",
  "id": "分析静态资源库加载耗时",
  "level": 2
}, {
  "value": "查看核心线程在CPU Core的运行情况",
  "id": "查看核心线程在cpu-core的运行情况",
  "level": 2
}, {
  "value": "查看启动过程相关的线程Trace数据",
  "id": "查看启动过程相关的线程trace数据",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "launch模板基本操作",
        children: "Launch模板基本操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发应用或元服务过程中，启动速度是很重要的一个指标。如果开发者需要分析启动过程的耗时瓶颈，优化应用或元服务的冷启动速度，可使用DevEco Profiler提供的Launch场景分析能力，录制启动过程中的关键数据进行分析，从而识别出导致启动缓慢的原因所在。此外，Launch任务窗口还集成了Time、CPU、Frame、Network场景分析任务的功能，方便开发者在分析启动耗时的过程中同步对比同一时段的其他资源占用情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处仅介绍“Launch”泳道相关内容，集成的Time、CPU、Frame、Network场景分析任务的功能请参考对应任务的章节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(151665)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持命令拉起的Release应用不能进行Launch分析。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "锁屏状态下可进行Launch录制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动模式",
      children: "启动模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动模式分为", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1196)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "38",
        height: "34"
      }), "自动启动和", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(764794)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "38",
        height: "35"
      }), "手动启动，可点击图标切换两种不同模式："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若选择自动启动模式，当用户使用Launch模板并开始录制时，将主动重启所选应用；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手动启动模式在开始录制时，只会主动终止所选应用，等待界面出现弹窗提示启动应用后，开发者需要手动启动应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看启动过程中各阶段的耗时情况",
      children: "查看启动过程中各阶段的耗时情况"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Launch场景调优分析任务并录制相关数据，操作方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-profiler-introduction/deep-recording",
            children: "性能问题定位：深度录制"
          }), "，或在会话区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open File"
            })
          }), "，导入历史数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(294506)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在任务分析窗口中，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-profiler-appendix/ide-shortcut-key",
              children: "快捷键"
            }), "缩放时间轴、移动时间轴、添加时间标签等。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Launch分析支持离线符号解析能力，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-insight-session-time#section186881175012",
              children: "离线符号解析"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Launch分析支持动效场景调优，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-lag-and-frame-loss/ide-insight-session-frame#section258014238619",
              children: "支持动效场景调优"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Launch分析任务支持在录制前单击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(47662)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "18",
            height: "15"
          }), "指定要录制的泳道。“Launch”泳道显示启动生命周期各阶段的耗时分布情况。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击“Launch”泳道上的单个阶段，或框选多个阶段，在下方的“Details”页签中，可查看到所选阶段的耗时统计情况。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展开各阶段的统计信息折叠表，可以看到各个任务的具体耗时信息。单击跳转按钮，可直接跳转至相关线程打点任务中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(148132)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1541",
            height: "666"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "切换到“Load ETS Files”页签，从DevEco Studio 6.0.0 Beta1版本开始，支持查看冷启动过程中ETS文件的加载情况。各字段含义如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Category：该ETS文件在应用启动过程中是否被使用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Weight****：****该ETS文件加载子节点文件（不包括自身）的总耗时。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Self：该ETS文件自身加载的耗时。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Import Count：该ETS文件被其他文件导入的次数。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "File Name：该ETS文件的名称。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Path：该ETS文件构建产物的路径。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(146208)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1536",
            height: "663"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "切换到“TOP Redundant”页签，可查看冷启动过程中TOP 100冗余ETS加载文件信息。若File Name字段显示为蓝色，双击可快速跳转至对应工程源文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(453490)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1550",
            height: "682"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(391507)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已上架应用市场的应用，不支持使用Load ETS Files或TOP Redundant页签查看冷启动过程中ETS文件的加载情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分析静态资源库加载耗时",
      children: "分析静态资源库加载耗时"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展开“Launch”泳道，其中的“Static Initialization”子泳道展示启动过程中各静态资源库的加载耗时。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击单个静态资源库色块，或框选多个静态资源库，下方的“Details”区域展示所选对象的耗时统计信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对耗时超过预期的加载任务，可单击跳转按钮，跳转至相关线程打点任务中进行深度分析。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(650369)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1533",
            height: "609"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看核心线程在cpu-core的运行情况",
      children: "查看核心线程在CPU Core的运行情况"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展开“Launch”泳道，其中的“Running CPU Cores”子泳道展示启动过程中的关键线程具体运行在哪个CPU核心。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击单个进程色块，或框选多个进程，下方的“Details”区域展示所选对象的运行情况统计信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击对应CPU的跳转按钮，可进一步跳转到CPU Core泳道查看详细的调度信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(719507)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1507",
            height: "611"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看启动过程相关的线程trace数据",
      children: "查看启动过程相关的线程Trace数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展开“Launch”泳道，除“Static Initialization”、“Running CPU Cores”外，还包含启动过程的关键线程的状态和Trace数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击单个切片色块，或框选多个切片，可查看所选对象的详情。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“Details”区域对所选对象进行树状统计，显示任务的名称、起始时间以及耗时信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“Thread States”区域展示线程的状态统计信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“Thread Usage”区域展示线程的使用情况。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“Slice List”区域展示所选对象的切片统计信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“Load Statistics”区域展示所选对象的中载重载信息。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(880962)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1543",
            height: "611"
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
880962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832755-45d954e48f40b87d9b462a432a16389f.png");

},
1196(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAiCAYAAAAzrKu4AAADeklEQVRYhc2YzUsrVxiHn5mJySBMBS/Wj0U2hRJ3LhT8C0ShiAURCZaiZlmCq+yEISBCEERxWWfTICRUuwiIH7jqogs3IZZSaIMLlZFeeiud3HRumuR0kU7amHgzaceP32rOe97zzjPnnHnPhySEELxA+e4bSqUS5XKZSqXyJACKouDz+fD7/Q12yemxarWKbdtPBtQKUFVVZFkGQHYqnhMKoFKpYNt2vSxDbfieE8pRpVKhVCoBf4OVy+VnBfq3HBYZeBG95chhaforvZIQgkKhwM3NDZZlEQqF0DTNdXvPwa6urjg+PmZra6upzjAMxsbGXMWRhBDCsqz/DWRZFvF4nKOjowd9BgcHOTk5aRtL0zRveuzs7IyVlZW2fqZpuo7ZEZhlWaRSKdLpNKZpsrCwAEAymXTVfmJiwnuw/f19dF1vsLkFchQKhVz7yu1d4Pz8vAnqv2hyctK1b1swIQRLS0ttA6XTaS4uLshms0Sj0ZY+Q0ND3oFdX1+3DaLrOsPDw0BtMY5EIi19FEXxDuz29rZtkGAw2FCWJImBgYEG28zMjGsoV2D3X9Dqz9rZ2WkoW5bV8EGHh4cd9RaAouu67qzordTT00N/fz93d3cYhsHs7Cz5fJ58Pl/3MU2Ty8tLgsEguVyOaDRKoVAAakM4Pj7eEVQgEOgs89u2TTKZZHFxkVgs5iqL53I5JEnqCEzTNHfpwoGanp4mlUoBkEgk2ibMcDjcMZQjV2AOlBACwzCYmprCMAw2NjbeCxeJRBDA9M+C794+Atjm5mYdanl5GSEE8/Pz7O7usra2RjgcbmozMjJCX18f3/9RK3/5urPDmCuwWCxGJpNhe3sbIQQHBwfE43FSqRRdXV0tU4GTZL/6VfBJj+B1Gcw/PQaTZZnV1VWy2SyZTAag/lwsFpmbm2tqMzo6ypsy/GjD568kPnslkXzjMVi1WqW3t5dMJoOqqmiaxunpKaqqtlwZdF1HkiS+/q1Knw9+eichIfjWErytugPzZKO4vr7O3t4eUEvAiUQCZIVP883z6osPJSY+eH88TdO828He18nvsPOL4JuPJBTpYduTg+XfQbcMg13/2CoCfrDh44AgID9MVgcrFosv5ginKArd3d21ye/zPdoprmM5LDKA3+/vePV/DCmKUr/1qacLVVWfFc657XEk3b+4eyn3Y38BIjiRlP+ZOwcAAAAASUVORK5CYII=");

},
47662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAYAAADphp8SAAAA1ElEQVQ4EcWSwQsBURDG9w9dN3vDDTf8F6JkRXsXJ3EiF8lFXCQXyV8x+ra+1/Se51FbDtP0Zr757TfbRPfHU4qIqAgIGA5ovdlKq935Knb7g9nGAaWjsSAu15sA6nMMTbfXN30HdDydpVKtySTLpJwkMp3NjZhQ1KCBljUHhAbc1BtNGQzTPFOMDAh60Oj6W5CGaUc+CPReEGFxXDJfxiq2E7r6CIJIg/BfOGjnn0Aa+n/QYrnKz8F2wndwNdwSL13fDQHMQRCuW58AB+0cBNkDvvcLlzOySWh2YigAAAAASUVORK5CYII=");

},
650369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752842-5052eb4db86a0bb046e06f784cecc181.png");

},
453490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832751-6bdfc966d80bca22c749cf7dacf31e8f.png");

},
151665(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
391507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
294506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
719507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752828-1b43fbd3389d482a7db3212fb5543ba8.png");

},
146208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912836-796b12fc8957933940e2115a3403ce47.png");

},
148132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912832-3a08925dd6b7380beee38314e1144bfd.png");

},
764794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAjCAYAAAD48HgdAAADWUlEQVRYhc2YvUsjWxiHn5mJcdZlEALiR5HqFglsqZC/IGgTLERUbPy4bbAKWAhDwE4QxdapApKAFncg+IF/gU0wtzRYqMTdQoQJcQhJzi2ykzWazUz2Ztf8msk5533fefKemfecOZIQQtCH8r3tqFQqVKtVarXaHwFQFAWfz4ff72/pl5yM1et1bNv+Y0DtAFVVRZZlAGRn4COhAGq1GrZtN9syNKbvI6Ec1Wo1KpUK8B2sWq1+KNBrOSwy0BfZcuSwvHsreyUhBKVSiYeHByzLIhQKoWmaZ/+eg93d3XF2dsbe3t67McMwmJqa8hRHEkIIy7L+N5BlWSSTSU5PT39qMz4+zvn5uWssTdN6k7HLy0s2NjZc7YrFoueYXYFZlkU6nSaTyVAsFlleXgYglUp58o9Go70HOz4+Rtf1lj6vQI5CoZBnW9ndBK6urt5B/Yqmp6c927qCCSFYXV11DZTJZMjn8+RyOeLxeFubiYmJ3oHd39+7BtF1nXA4DDQW4/X19bY2iqL0Duzx8dE1SDAYbGlLksTY2FhL3+zsrGcoT2Bvb9DuzTo4OGhpW5bV8oey2WxX2QJQdF3XnRW9nYaHhxkdHeX5+RnDMJibm6NQKFAoFJo2xWKR29tbgsEg19fXxONxSqUS0JjCSCTSFdTg4GB3ld+2bVKpFCsrKyQSiY5V3DAMACYnJ5EkqSswTdO8g9m2TSwWQwjRXHY6weXz+a5g3oJ5qmOvoQzDYGZmBsMw2NnZ6VjNj54gdiP49n27l38RxG4ER0/u9/QEtru724RaW1tDCMHCwgKHh4dsb2+ztLTU0X/v6w9Qr/IElkgkME2T/f19hBCcnJyQTCZJp9MMDAy4loL8SyNL/770GEyWZba2tsjlcpimCdD8XS6XmZ+f7+g/4oOjJ8FIF1sGT2D1ep1AIIBpmqiqiqZpXFxcoKqqp5Xh7xGp5dozMEVR2NzcRFXVd2PhcLjlGYtGo2Sz2RabyGdYDEhEPnvm6t0Otp2OnhpT+M9fPzIVuxEsBiQWAz/381wuflVfPjUgXmsxIPHlk/txiSSEEOVyuW8+4RRFYWhoqJExn++3fcV1LYdFBvD7/V2v/r9DiqI0T32az5iqqh8K55z2OJLeHtz13flYv+k/aA9++Fa8fq8AAAAASUVORK5CYII=");

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