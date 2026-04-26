"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["518296"], {
766617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_profiler_introduction_realtime_monitor_realtime_monitor_md_d7c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-profiler-introduction-realtime-monitor-realtime-monitor-md-d7c.json
var site_docs_ide_profiler_introduction_realtime_monitor_realtime_monitor_md_d7c_namespaceObject = JSON.parse('{"id":"ide-profiler-introduction/realtime-monitor/realtime-monitor","title":"性能问题定界：实时监控","description":"解决性能问题，首先对当前应用的运行情况以及设备的资源消耗进行监测，以初步确定可能存在的性能问题以及问题出现的位置。","source":"@site/docs/ide-profiler-introduction/realtime-monitor/realtime-monitor.md","sourceDirName":"ide-profiler-introduction/realtime-monitor","slug":"/ide-profiler-introduction/realtime-monitor/","permalink":"/harmonyos-docs-site/ide-profiler-introduction/realtime-monitor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"性能问题定界：实时监控","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/realtime-monitor","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"性能优化过程简介","permalink":"/harmonyos-docs-site/ide-profiler-introduction/ide-profiler-process/"},"next":{"title":"性能问题定位：深度录制","permalink":"/harmonyos-docs-site/ide-profiler-introduction/deep-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-profiler-introduction/realtime-monitor/realtime-monitor.md


const frontMatter = {
	title: '性能问题定界：实时监控',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/realtime-monitor',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '性能问题定界：实时监控';

const assets = {

};



const toc = [{
  "value": "配置并确认设备环境",
  "id": "配置并确认设备环境",
  "level": 2
}, {
  "value": "实时监控应用，多维度对比识别性能热区",
  "id": "实时监控应用多维度对比识别性能热区",
  "level": 2
}, {
  "value": "面板整体介绍",
  "id": "面板整体介绍",
  "level": 3
}, {
  "value": "泳道简介",
  "id": "泳道简介",
  "level": 3
}, {
  "value": "实时监控页面的常用操作交互方式",
  "id": "实时监控页面的常用操作交互方式",
  "level": 2
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
        id: "性能问题定界实时监控",
        children: "性能问题定界：实时监控"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解决性能问题，首先对当前应用的运行情况以及设备的资源消耗进行监测，以初步确定可能存在的性能问题以及问题出现的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Profiler提供实时监控（Realtime Monitor）能力，可以实时监控系统事件、异常事件、CPU占用、内存占用、实时帧率、GPU使用率、温度、电流、能耗以及网络流量消耗等多维度数据，帮助开发者了解到当前应用具体运行情况和可能出现性能问题的热点区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1开始，支持通过无线方式完成设备连接后，进行性能调优分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置并确认设备环境",
      children: "配置并确认设备环境"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了能够正确地监测您的设备资源，首先您需要使用USB或无线调试连接方式完成设备连接，然后通过DevEco Studio将您开发的应用安装到设备上。随后您可以通过如下步骤来查看应用的实时资源使用情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device#section171436512424",
            children: "使用USB连接方式"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device#section9315596477",
            children: "使用无线调试连接方式"
          }), "，将真机设备与PC连接。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过如下三种方式打开DevEco Profiler："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在DevEco Studio顶部菜单栏中选择“View > Tool Windows > Profiler”。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在DevEco Studio底部工具栏中单击“Profiler”。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用“Ctrl+Shift+A”（macOS中为双击“Shift”）打开搜索功能，搜索“Profiler”。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(128082)/* ["default"] */.A) + "",
            width: "608",
            height: "890"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备上启动您想要监测的应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Profiler界面左上角的设备、应用及进程列表中，选择调优设备及待调优的应用/元服务进程。如果您的应用不止有一个主进程（还存在Extension或者Render进程），那么您需要再手动选择一个您想要监控的进程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(619073)/* ["default"] */.A) + "",
            width: "315",
            height: "107"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实时监控应用多维度对比识别性能热区",
      children: "实时监控应用，多维度对比识别性能热区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实时监控界面，设备各项资源的使用情况均以泳道图的形式在时间维度展示，提供系统事件、CPU占用等多维度信息，帮助您识别性能热区。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "面板整体介绍",
      children: "面板整体介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "界面左侧为实时数据展示区域，该区域的数据显示了每一项监测内容的瞬时值，并通过饼图或者仪表盘的形式让您更加直观地观察到各项数据的使用占比以及具体数值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "界面右侧为各项数据随着时间推移的变化趋势，通过不同的图像形式（直方图、柱状图、折线图等）来更加清晰的展示某一项资源在一段时间范围内的变化趋势，以帮助您快速判断性能热点区域。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整个实时监控页面从上到下，依次展示了系统事件、异常事件、前台应用、CPU占用、内存占用、帧率、GPU使用率、温度、电流、能耗以及网络流量消耗等各个维度的数据，帮助您从多个维度来对比识别当前应用的性能热区。下面为您依次介绍每一条泳道的数据内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(15602)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1899",
        height: "971"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "泳道简介",
      children: "泳道简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "System Events泳道：该泳道展示了时间窗内系统事件的起始、终止等状态的统计情况。泳道内存在三种形状的标识："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "菱形：表示事件开始。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "正方形：表示事件结束。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "圆形：表示当前为时间点事件，无持续时间。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Anomaly泳道：用于展示设备侧上报的各种异常事件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Foreground Ability泳道：用于展示应用/元服务的Ability状态。当Ability在前台运行时，会在此时间段内显示该Ability的名称；若当前无前台运行的Ability，则此时间段内显示“Background”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPU泳道：左侧饼图展示了当前时刻应用/元服务的CPU使用率、其他进程的CPU使用率以及空闲情况。右侧的泳道图则展示了时间窗内的整体CPU使用情况，其中灰色的部分代表系统中其他进程的CPU占用，蓝色部分则展示了当前应用/元服务的CPU占用情况。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Memory泳道：左侧饼图展示了当前时刻应用/元服务的内存占用、其他进程的内存占用以及未使用的内存。右侧的泳道图则展示了时间窗内的整体内存使用情况，其中灰色的部分代表系统中其他进程的内存占用，蓝色部分则展示了当前应用/元服务的内存占用情况。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Current Process：当前时刻应用/元服务的内存占用。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Other Processes：其他进程的内存占用。在5.1 Release版本之前，cached缓存空间（内存会被系统自动回收）占用的内存被计入Other Processes内存中。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Free：未使用的内存。在5.1 Release版本及以后，cached缓存空间占用的内存被计入Free内存中。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(979727)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["当前应用内存展示的是应用的PSS值，如需内存详细信息请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-allocations",
                children: "基础内存：Allocation分析"
              }), "。此处的PSS值比hidumper略大，原因是hidumper计算过程中会执行取整操作，计算值偏小。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FPS泳道：左侧仪表盘展示了当前设备屏幕的帧率瞬时值，红色、黄色、绿色区域则代表当前屏幕帧率是否达到理想状态。右侧柱状图则展示了每一次采集设备帧率时的数值。该泳道仅支持在配备硬件屏幕的设备上进行数据采集。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "GPU泳道：左侧仪表盘展示了当前设备GPU使用率的瞬时值，右侧泳道则展示了时间窗内的整体GPU使用率。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Temperature泳道：左侧温度计显示了当前设备温度信息，右侧泳道的数据采集周期为3秒，展示了时间窗内的设备温度信息以及温度等级。该泳道暂不支持在TV/2in1/Car设备上进行应用性能分析。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["*Device Current泳道：左侧展示了当前设备最大电流、平均电流以及最新的电流值，右侧泳道则展示了时间窗内的设备电流信息。该泳道统计电池的电流会由于充放电导致电流为非准确的消耗值，使用*Device Current进行区分，若需要准确的消耗电流，可以在设备侧打开\"关闭充电\"，操作方式为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设置 > 系统 > 开发者选项"
            })
          }), "。该泳道暂不支持在TV设备上进行应用性能分析。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Energy泳道：该泳道包含了各项部件（包括CPU、*Display、GPU、Location、Camera、Bluetooth、Flashlight、Audio、Wifi、Modem）的周期内平均功耗占比。通过图例上方的下拉多选框则可以勾选您想要监控的功耗使用情况的应用，选择多个应用后，该泳道会展示所有您所选择应用的功耗总和。右侧区域柱状图则展示了时间窗内各部件资源的实时使用情况，柱状图的颜色代表每种部件的功耗占比。Display指标只能测量不同亮度的屏幕电流，无法精确测量不同明暗色的显示电流，为提示开发者，使用*Display来突出该差异。该泳道暂不支持在TV设备上进行应用性能分析。暂不支持展示Wearable设备GPU、Location、Camera、Flashlight的功耗占比情况。2in1设备暂不支持展示Location的功耗占比情况。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Network Traffic泳道：左侧区域内仪表盘展示了当前设备网络上行瞬时速率和下行瞬时速率，仪表盘右边展示了时间窗内上行总流量和下行总流量。右侧泳道柱状图则展示了时间窗内网络流量消耗的实时情况。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(931149)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPS、GPU、Temperature、*Device Current泳道显示的是所使用设备的实时信息，而非当前调优应用/元服务的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实时监控页面的常用操作交互方式",
      children: "实时监控页面的常用操作交互方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实时监控页面除了展示各个维度数据的瞬时值以及时间窗内的变化趋势之外，还提供了多种交互方式以供您更加便捷、快速、细致地分析您的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启停控制"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击会话区“Realtime Monitor”页签上的", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(556683)/* ["default"] */.A) + "",
            width: "15",
            height: "15"
          }), "、", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(893649)/* ["default"] */.A) + "",
            width: "15",
            height: "15"
          }), "按钮或工具控制栏上的 ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(650307)/* ["default"] */.A) + "",
            width: "17",
            height: "17"
          }), "、", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(363382)/* ["default"] */.A) + "",
            width: "16",
            height: "16"
          }), "来即时控制实时监控界面的录制状态。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "泳道筛选"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击工具控制栏上的", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(302477)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "22",
            height: "22"
          }), "按钮，可以选择泳道进行筛选。筛选无需录制的泳道，可以降低数据采集本身的开销，但同时会造成数据分析维度的减少。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "详细数据展示"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将鼠标悬浮于所关心的泳道数据上时，界面上会出现当前时间点的时间标线以及含有当前时间点上泳道详细数据的Tooltips。更进一步，当您将鼠标悬浮于时间轴上时，实时监控页面内的所有泳道均会以Tooltips展示出该时刻的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(239919)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1899",
            height: "979"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图例选择"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实时监控界面部分泳道内的图例均支持选择/反选来增加/去除泳道内这一数据的展示，能够更加专注地分析所关心的数据。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过分析实时监控的多维度数据，可以了解到当前应用的具体运行情况以及可能出现性能问题的热点区域。通过深度录制详细的应用运行数据来更加详细地分析应用可能存在的性能问题。"
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
931149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
15602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753452-cc5d1ba62f3ed4756b8a9798ca064cc3.png");

},
556683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA/ElEQVQ4EZ2R0RFEQBBEZUAEQiECMiADIciEDIiADIQgAyH4mau3Vb23rA93H2r0bPdMz0xynqf9+yV34XEcNo6j1XVtZVm6CCZ/517Ey7JYlmXWNI1N02TgYRgcTtPU4bCAF0OEsG1b1AEBeQpGYizRUULwuq6PVvM89wVcZ1lT1b7vrSgKg8i8yhMZCT7/TlxV1cUSYsbY990VYXFyhfWu675iukBWB4lDTA4MD/6rznSFHHbGqRc/zYyImTWfXEQzs93wTGDsESUi0h2e8j/dmXOGu/FiKvNA5bZtbZ5nd2simHwohH8Rk8ASc7IUFkUEyyocfZFYD2/iB7WF6oa+5WRDAAAAAElFTkSuQmCC");

},
302477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABCElEQVRIDWP4+Pnrf1pgBloYCjKTPga/ePn6/9nzF0jCID3YfI3i4uqa2v8JiUkk4ZraOsIGgwzdtHkrWCGMxuYamBhIDUgPjI9Mo7h41569YIWbt277D3J9X/+E/7i8ClMLopENhLFRDAYJwjTADO/t68fQCFODy1CQORgGoxt+7fpNFIOJMRSnwSAJkIGZWdlgH4D4yGLolsHkkWmsLoYpWLFq9f+W1nYUF99/+BiFD1OLTpNkMCi8iUktIEtIMhjkepAv0F2HjT+MDT5y9Pj/rOwclFSCLQhgYgSDAlQWgMIWlPSIjTiQ4XgNBmVnUEqYNmMmzqwNcyE6jddgdMWk8EcNhmceAHMp5SRSKQHoAAAAAElFTkSuQmCC");

},
239919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753385-71b2dd980bf2cfc461ec4692f19d3dd8.png");

},
128082(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753444-1eeb622cd92a3971688a7d43c937e475.png");

},
363382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVQ4EWP4+Pnrf0owA7LmBy++/u9Z/+1/+vRv/xMno2KQWPf6b/9BapD1wA0AScinf//PFYkfg9QgGwI3AGQ6Ic0weZArYa6AGwByIkwBIRqkFsMAkJ8JaYTJg9QORwMoDkRQ1MACiRANinKMQKQ4IYFMBBkCMh3kHWxJGeRK5FQI0gNPSDAnkUoPvAEAIEEm4qrpjmkAAAAASUVORK5CYII=");

},
979727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
619073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
650307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAq0lEQVQ4EWP4+Pnrf0oxA6UGgPTTxpDLD7//L1j893/Lhj//QWxiXIrhkt5tv/8HTfwPx33bfv9//vYbXsMwDKlc+RduAMywmOn//q858ROnQUQZAjMsbe6//ydv/cAwjCRDYIZVrfrz/+5zhBfJMgRkGCjwYYFOtiH5lBoCCnyyvZNKScBGT//3fzUpUYye2EB8khMbKKmDAq15PQXJHhZtpNAYUUyKZphaAMtDCR4qQpyuAAAAAElFTkSuQmCC");

},
893649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA5UlEQVQ4EaWSURGEMAxEcQAOkAIOwAE4QEIlVAI4AAfgAClIyM3LTHopHzfMkZ90y26yTSjkRRR37XVdsiyL9H0vbdtqBnN/j0y877tUVSXDMMi6rgKe51lxWZaKfYEkhgjhPE//PZ25p6APFWOJjia8W/S4ruukV7FZs9sQgsQYFZLBFjwJPqHirusyS5BN4M8IsD5N01fcNE02DC/wZxTMBj7xV2ecJvGrNzNNvyY/XToYZhvwDKttCE/2zDrhWSSxLzCOo2zbJsdxaAb//MOsGpaYAUNhqmSwWTUeOevsPzw5fwBZCfzCPcZOKAAAAABJRU5ErkJggg==");

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