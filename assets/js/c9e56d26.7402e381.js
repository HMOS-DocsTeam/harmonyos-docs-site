"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["885988"], {
522758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_test_service_indev_cmd_smartperf_guidelines_smartperf_guidelines_md_c9e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-test-service-indev-cmd-smartperf-guidelines-smartperf-guidelines-md-c9e.json
var site_docs_test_service_indev_cmd_smartperf_guidelines_smartperf_guidelines_md_c9e_namespaceObject = JSON.parse('{"id":"test-service/indev_cmd/smartperf-guidelines/smartperf-guidelines","title":"HiSmartPerf Device性能使用指导","description":"工具简介","source":"@site/docs/test-service/indev_cmd/smartperf-guidelines/smartperf-guidelines.md","sourceDirName":"test-service/indev_cmd/smartperf-guidelines","slug":"/test-service/indev_cmd/smartperf-guidelines/","permalink":"/harmonyos-docs-site/test-service/indev_cmd/smartperf-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HiSmartPerf Device性能使用指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/smartperf-guidelines","kit":"testing","last_updated":"2026-04-21"},"sidebar":"docs","previous":{"title":"自定义性能脚本测试（基于Python）","permalink":"/harmonyos-docs-site/ut/hypium-perf-python-guidelines/"},"next":{"title":"wukong稳定性工具使用指导","permalink":"/harmonyos-docs-site/test-service/indev_cmd/wukong-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/test-service/indev_cmd/smartperf-guidelines/smartperf-guidelines.md


const frontMatter = {
	title: 'HiSmartPerf Device性能使用指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/smartperf-guidelines',
	kit: 'testing',
	last_updated: '2026-04-21'
};
const contentTitle = 'HiSmartPerf Device性能使用指导';

const assets = {

};



const toc = [{
  "value": "工具简介",
  "id": "工具简介",
  "level": 2
}, {
  "value": "指标说明",
  "id": "指标说明",
  "level": 3
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "HiSmartPerf Device-hap端",
  "id": "hismartperf-device-hap端",
  "level": 2
}, {
  "value": "HiSmartPerf Device-daemon端",
  "id": "hismartperf-device-daemon端",
  "level": 2
}, {
  "value": "基础采集",
  "id": "基础采集",
  "level": 3
}, {
  "value": "场景化采集",
  "id": "场景化采集",
  "level": 3
}, {
  "value": "其他采集",
  "id": "其他采集",
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
        id: "hismartperf-device性能使用指导",
        children: "HiSmartPerf Device性能使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工具简介",
      children: "工具简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiSmartPerf Device是一款性能功耗测试工具，支持监测性能、功耗相关指标，包括FPS、CPU、GPU、RAM、Temp等，并提供Device hap端和Device daemon端。Device hap适用于有屏设备，支持可视化操作，测试过程中可通过悬浮窗的开始和暂停来实时展示性能指标数据，保存后可生成数据报告，在报告中可分析各指标数据详情。Device daemon端支持shell命令行方式，同时适用于有屏和无屏设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指标说明",
      children: "指标说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU：每秒读取一次设备节点下CPU大中小核的频点和各核使用率，衡量应用占用CPU资源的情况，占用过多的CPU资源会导致芯片发烫。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU：每秒读取一次设备节点下GPU的频点和负载信息，衡量应用占用GPU资源的情况，当GPU占用过多时，会导致性能下降，应用程序的运行速度变慢。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FPS：应用界面每秒刷新次数，衡量应用画面的流畅度，FPS越高通常表示图像流畅度越好，用户体验越好。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TEMP：每秒读取一次设备节点下GPU温度、系统芯片温度信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAM：每秒读取一次应用进程的实际物理内存，衡量应用的内存占比情况。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "snapshot：每2秒截取一张应用界面截图。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图展示了HiSmartPerf Device工具的主要功能组成。Device hap端设置好采集项和采集参数后，启动应用，FPS、RAM、Trace等指标通过消息发送给Device daemon端，Device daemon端进行数据采集、数据持久化和数据分析，将生成的报告回传给Device hap端，Device hap端进行可视化显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(296860)/* ["default"] */.A) + "",
        width: "540",
        height: "425"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Device daemon端从API version 9开始预置使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Device daemon端执行需连接硬件设备，Device hap端需在有屏幕设备使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Device daemon端执行前需完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hdc",
            children: "hdc环境配置"
          }), "，并进入shell环境拉起daemon进程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\issusser>hdc shell\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Device hap端从API version 20开始支持自动拉起Device daemon端的功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(112958)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用可以自动拉起Device daemon进程的Device hap端时，点击性能/功耗测试，选择测试应用后，待hap端界面显示采集器连接成功，即Device daemon进程已被拉起。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "拉起和查看daemon进程（手动拉起daemon进程）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "C:\\Users\\issusser>hdc shell\n// 拉起daemon进程\n$ SP_daemon\n// 查看daemon进程是否存在\n$ ps -ef | grep SP_daemon\nshell          1584     1 0 21:50:05 ?     00:00:00 SP_daemon\nshell          1595  1574 3 21:51:02 pts/0 00:00:00 grep SP_daemon\n$\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "拉起和查看daemon进程（自动拉起daemon进程）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "C:\\Users\\issusser>hdc shell\n// 查看daemon进程是否存在\n$ ps -ef | grep SP_daemon\ntestserver   40960     1 4 15:38:48 ?     00:00:00 SP_daemon -deviceServer:69df7e4df0edf70cbe204549028d7171\nshell          41109 41033 67 15:38:59 ?    00:00:00 grep SP_daemon\n$\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hismartperf-device-hap端",
      children: "HiSmartPerf Device-hap端"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["工具使用说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-device-haromnyos-0000002086884884#section91681917183510",
        children: "操作指导"
      }), "，请前往", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/hismartperf",
        children: "工具下载中心"
      }), "获取HiSmartPerf工具。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hismartperf-device-daemon端",
      children: "HiSmartPerf Device-daemon端"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行和查看帮助命令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  $ SP_daemon --help\n  HarmonyOS performance testing tool SmartPerf command-line version\n  Usage: SP_daemon [options] [arguments]\n\n  options:\n  -N              set the collection times(default value is 0) range[1,2147483647], for example: -N 10\n  -PKG            set package name, must add, for example: -PKG ohos.samples.ecg\n  -PID            set process pid, must add, for example: -PID 3568\n  -threads        get threads, must add -PID or -PKG for example:\n                  -threads -PID 3568 or -threads -PKG ohos.samples.ecg\n  -c              get device CPU frequency and CPU usage, process CPU usage and CPU load ..\n  -ci             get cpu instructions and cycles\n  -g              get device GPU frequency and GPU load\n  -f              get app refresh fps(frames per second) and fps jitters and refreshrate\n  -profilerfps    get refresh fps and timestamp\n  -sections       set collection time period(using with profilerfps)\n  -t              get remaining battery power and temperature..\n  -p              get battery power consumption and voltage(Not supported by some devices)\n  -print          start mode print log\n  -r              get process memory and total memory\n  -snapshot       get screen capture\n  -net            get uplink and downlink traffic\n  -start          collection start command\n  -stop           collection stop command\n  -VIEW           set layler, for example: -VIEW DisplayNode\n  -OUT            set csv output path.\n  -d              get device DDR information\n  -screen         get screen resolution\n  -deviceinfo     get device information\n  -server         start a process to listen to the socket message of the start and stop commands\n  -clear          clear the process ID\n  -ohtestfps      used by the vilidator to obtain the fps, the collection times can be set\n  -recordcapacity get the battery level difference\n  --version       get version\n  --help          get help\n  -editor         scenario-based collection identifier, parameter configuration items can be added later\n  responseTime   get the page response delay after an application is operated\n  completeTime   get the page completion delay after an application is operated\n  fpsohtest      used by the vilidator to obtain the fps\n  example1:\n  SP_daemon -N 20 -c -g -t -p -r -net -snapshot -d\n  SP_daemon -N 20 -PKG ohos.samples.ecg -c -g -t -p -f -r -net -snapshot -d -nav -gc\n  SP_daemon -start -c\n  SP_daemon -stop\n  example2: These parameters need to be used separately\n  SP_daemon -screen\n  SP_daemon -deviceinfo\n  SP_daemon -server\n  SP_daemon -clear\n  SP_daemon -ohtestfps 10\n  SP_daemon -recordcapacity\n  example3: These parameters need to be used separately\n  SP_daemon -editor responseTime ohos.samples.ecg app name\n  SP_daemon -editor completeTime ohos.samples.ecg app name\n  SP_daemon -editor fpsohtest\n\n  command exec finished!\n  $\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础采集",
      children: "基础采集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础采集主要采集整机或者应用的gpu、fps、CPU、DDR、内存等，支持秒级采集和启停采集，并将采集的结果写入data.csv。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 秒级采集"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置采集次数，一秒采集一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-PKG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置进程ID或者线程ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集应用子线程数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集cpu的频点和使用率。  设置应用包名时，采集整机和应用CPU信息。  不设置应用包名时，采集整机CPU信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-ci"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集cpu的指令数。  设置应用包名时，采集整机和应用CPU指令数。  不设置应用包名时，采集整机CPU指令数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集gpu的频点和负载信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集指定应用的fps以及屏幕刷新率，必须设置应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集GPU温度、系统芯片温度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集电流、电压。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集内存。  设置应用包名时，采集整机和应用内存信息。  不设置应用包名时，采集整机内存信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-snapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕截图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集网络速率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-VIEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图层，需要先获取应用图层名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集DDR。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-sections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置分段采集。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置包名并采集1次应用的线程数量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 1 -PKG ohos.samples.ecg -threads\n\norder:0 timestamp=1741415592481\norder:1 threadsNum=18847:113|\norder:2 tids=18847:43411 43409 43350 43236 25783 25622 25384 25381 19423 19170 19167 19166 19165 19163 19162 19159 19157 19156 19154 19153 19152 19151 19150 19149 19147 19146 19145 19142 19141 19140 19139 19136 19135 19134 19120 19112 19111 19088 19083 19081 19077 19076 19075 19074 19073 19072 19071 19070 19055 19044 19040 19039 19034 19033 19032 19031 19030 19029 19028 19027 19019 19017 19016 19015 19014 19013 19012 19011 19009 19007 19006 19005 19004 19003 19001 19000 18999 18998 18997 18996 18995 18994 18993 18992 18991 18990 18989 18988 18987 18986 18985 18984 18983 18982 18981 18980 18977 18974 18946 18942 18936 18934 18933 18931 18930 18929 18928 18927 18926 18925 18924 18923 18847|\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(633937)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该命令采集时需进入被测应用内。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集2次整机CPU大中小核频率、各核使用率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 2 -c\n\norder:0 timestamp=1739348046398\norder:1 TotalcpuUsage=7.072368\norder:2 TotalcpuidleUsage=92.927632\norder:3 TotalcpuioWaitUsage=0.082237\norder:4 TotalcpuirqUsage=0.246711\norder:5 TotalcpuniceUsage=0.000000\norder:6 TotalcpusoftIrqUsage=0.000000\norder:7 TotalcpusystemUsage=3.125000\norder:8 TotalcpuuserUsage=3.618421\norder:9 cpu0Frequency=550000\norder:10 cpu0Usage=16.666667\norder:11 cpu0idleUsage=83.333333\norder:12 cpu0ioWaitUsage=0.000000\norder:13 cpu0irqUsage=2.941176\norder:14 cpu0niceUsage=0.000000\norder:15 cpu0softIrqUsage=0.000000\norder:16 cpu0systemUsage=5.882353\norder:17 cpu0userUsage=7.843137\norder:18 cpu1Frequency=550000\n...\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置包名并采集2次整机CPU大中小核频率、各核使用率以及进程CPU使用率、负载。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 2 -PKG ohos.samples.ecg -c\n\norder:0 timestamp=1741415021814\norder:1 ChildProcCpuLoad=NA\norder:2 ChildProcCpuUsage=NA\norder:3 ChildProcId=NA\norder:4 ChildProcSCpuUsage=NA\norder:5 ChildProcUCpuUsage=NA\norder:6 ProcAppName=ohos.samples.ecg\norder:7 ProcCpuLoad=2.742330\norder:8 ProcCpuUsage=7.825508\norder:9 ProcId=18847\norder:10 ProcSCpuUsage=2.014652\norder:11 ProcUCpuUsage=5.810856\norder:12 TotalcpuUsage=22.527016\norder:13 TotalcpuidleUsage=77.472984\norder:14 TotalcpuioWaitUsage=0.000000\norder:15 TotalcpuirqUsage=0.083126\norder:16 TotalcpuniceUsage=0.000000\norder:17 TotalcpusoftIrqUsage=0.000000\norder:18 TotalcpusystemUsage=7.148795\norder:19 TotalcpuuserUsage=15.295096\norder:20 cpu0Frequency=1430000\norder:21 cpu0Usage=52.475248\norder:22 cpu0idleUsage=47.524752\norder:23 cpu0ioWaitUsage=0.000000\norder:24 cpu0irqUsage=0.000000\n...\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(356940)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该命令采集时需进入被测应用内。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置进程ID并采集2次整机CPU大中小核频率、各核使用率以及进程CPU使用率、负载。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 2 -PID 18847 -c\n\norder:0 timestamp=1741415133211\norder:1 ChildProcCpuLoad=NA\norder:2 ChildProcCpuUsage=NA\norder:3 ChildProcId=NA\norder:4 ChildProcSCpuUsage=NA\norder:5 ChildProcUCpuUsage=NA\norder:6 ProcAppName=ohos.samples.ecg\norder:7 ProcCpuLoad=2.510634\norder:8 ProcCpuUsage=7.005678\norder:9 ProcId=18847\norder:10 ProcSCpuUsage=2.697061\norder:11 ProcUCpuUsage=4.308617\norder:12 TotalcpuUsage=24.979114\norder:13 TotalcpuidleUsage=75.020886\norder:14 TotalcpuioWaitUsage=0.000000\norder:15 TotalcpuirqUsage=0.083542\norder:16 TotalcpuniceUsage=0.000000\norder:17 TotalcpusoftIrqUsage=0.000000\norder:18 TotalcpusystemUsage=8.270677\norder:19 TotalcpuuserUsage=16.624896\norder:20 cpu0Frequency=1430000\norder:21 cpu0Usage=50.000000\norder:22 cpu0idleUsage=50.000000\norder:23 cpu0ioWaitUsage=0.000000\norder:24 cpu0irqUsage=0.000000\n...\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(466289)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该命令采集时需进入被测应用内。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集1次整机GPU频率和负载。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 1 -g\n\norder:0 timestamp=1705041456507\norder:1 gpuFrequency=279000000\norder:2 gpuLoad=12.000000\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集2次整机温度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 2 -t\n\norder:0 timestamp=1739348774378\norder:1 Battery=34.000000\norder:2 cluster0=39.000000\norder:3 gpu=38.000000\norder:4 shell_back=35.838000\norder:5 shell_frame=34.838000\norder:6 shell_front=35.098000\norder:7 soc_thermal=46.785000\norder:8 system_h=35.894000\n\norder:0 timestamp=1739348775386\norder:1 Battery=34.000000\norder:2 cluster0=41.000000\norder:3 gpu=38.000000\norder:4 shell_back=35.820000\norder:5 shell_frame=34.820000\norder:6 shell_front=35.140000\norder:7 soc_thermal=45.016000\norder:8 system_h=35.842000\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集1次整机电流和电压。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 1 -p\n\norder:0 timestamp=1705041491090\norder:1 currentNow=-255\norder:2 voltageNow=4377614\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集2次整机内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 2 -r\n\norder:0 timestamp=1705041562521\norder:1 memAvailable=7339224\norder:2 memFree=7164708\norder:3 memTotal=11641840\n\norder:0 timestamp=1705041563527\norder:1 memAvailable=7339136\norder:2 memFree=7164684\norder:3 memTotal=11641840\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置包名并采集1次整机和指定应用进程内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 1 -PKG ohos.samples.ecg -r\n\norder:0 timestamp=1741415257059\norder:1 arktsHeapPss=44835\norder:2 childCarktsHeapPss=NA\norder:3 childGpuPss=NA\norder:4 childGraphicPss=NA\norder:5 childHeapAlloc=NA\norder:6 childHeapFree=NA\norder:7 childHeapSize=NA\norder:8 childNativeHeapPss=NA\norder:9 childPrivateClean=NA\norder:10 childPrivateDirty=NA\norder:11 childPss=NA\norder:12 childSharedClean=NA\norder:13 childSharedDirty=NA\norder:14 childStackPss=NA\norder:15 childSwap=NA\norder:16 childSwapPss=NA\norder:17 gpuPss=222377\norder:18 graphicPss=184276\norder:19 heapAlloc=154696\norder:20 heapFree=780\norder:21 heapSize=163208\norder:22 memAvailable=4612096\norder:23 memFree=1240924\norder:24 memTotal=11692696\norder:25 nativeHeapPss=85290\norder:26 privateClean=195816\norder:27 privateDirty=418973\norder:28 pss=693349\norder:29 sharedClean=146848\norder:30 sharedDirty=71056\norder:31 stackPss=2492\norder:32 swap=25360\norder:33 swapPss=25356\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(925963)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该命令采集时需要拉起被测应用的进程。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置进程ID并采集1次整机和指定应用进程内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 1 -PID 18847 -r\n\norder:0 timestamp=1741415293198\norder:1 arktsHeapPss=45011\norder:2 childCarktsHeapPss=NA\norder:3 childGpuPss=NA\norder:4 childGraphicPss=NA\norder:5 childHeapAlloc=NA\norder:6 childHeapFree=NA\norder:7 childHeapSize=NA\norder:8 childNativeHeapPss=NA\norder:9 childPrivateClean=NA\norder:10 childPrivateDirty=NA\norder:11 childPss=NA\norder:12 childSharedClean=NA\norder:13 childSharedDirty=NA\norder:14 childStackPss=NA\norder:15 childSwap=NA\norder:16 childSwapPss=NA\norder:17 gpuPss=222381\norder:18 graphicPss=184276\norder:19 heapAlloc=154588\norder:20 heapFree=757\norder:21 heapSize=163184\norder:22 memAvailable=4612096\norder:23 memFree=1238420\norder:24 memTotal=11692696\norder:25 nativeHeapPss=85274\norder:26 privateClean=195996\norder:27 privateDirty=418977\norder:28 pss=693440\norder:29 sharedClean=146848\norder:30 sharedDirty=71056\norder:31 stackPss=2492\norder:32 swap=25360\norder:33 swapPss=25356\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(627048)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该命令采集时需要拉起被测应用的进程。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集1整机cpu指令数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 1 -ci\n\norder:0 hw-cpu-cycles=2168073451.00000\norder:1 hw-instructions=833680950.00000\norder:2 timestamp=1705041491090\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集1整机和指定应用cpu指令数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 1 -pkg ohos.samples.ecg -ci\n\norder:0 cycles per instruction=2.617221\norder:1 hw-cpu-cycles=1923046916.000000\norder:2 hw-instructions=734766759.000000\norder:3 timestamp=1501838024624\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(472781)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该命令采集时需进入被测应用内。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集2次截图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 2 -snapshot\n\norder:0 timestamp=1739349178766\norder:1 capture=data/local/tmp/capture/screenCap_1739349178766.png\n\norder:0 timestamp=1739349179769\norder:1 capture=NA\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(230573)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "截图采集是2秒截取一次。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "截图报告存放路径为：data/local/tmp/capture。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "采集结束后：进入 data/local/tmp/capture 查看生成的截图。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "导出截图示例：hdc file recv data/local/tmp/capture/screenCap_1700725192774.png D:\\。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集2次网络速率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 2 -net\n\norder:0 timestamp=1739349429109\norder:1 networkDown=580407\norder:2 networkUp=58978\n\norder:0 timestamp=1739349430113\norder:1 networkDown=25212\norder:2 networkUp=594\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置包名并采集5次指定应用帧率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 5 -PKG ohos.samples.ecg -f\n\norder:0 fps=32\norder:1 fpsJitters=33259375;;49716667;;33148958;;16629167;;33183854;;33309375;;49678125;;49751042;;33167708;;49753125;;16633333;;16572917;;16648438;;49680208;;33190104;;33264063;;16792187;;49486458;;16582292;;16600000;;16597917;;33223437;;33200521;;33118750;;33220833;;33395313;;16365104;;16604688;;49819791;;16526042;;33177083\norder:2 refreshrate=60\norder:3 timestamp=1773042668242\n\norder:0 fps=35\norder:1 fpsJitters=49807292;;16559375;;16594271;;16603646;;33205208;;49798437;;16518230;;33218750;;33284374;;16462500;;33211980;;16557291;;49760417;;16601562;;33187500;;33161980;;16667708;;16592187;;33126042;;33278646;;33118229;;33175000;;33147396;;33188021;;16578125;;33197916;;16727605;;33089583;;33164583;;33194271;;33170313;;16578645;;16612500;;66352084\norder:2 refreshrate=60\norder:3 timestamp=1773042669243\n...\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(536445)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该命令采集时需要进入被测应用内滑动或切换应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置进程ID采集5次指定应用帧率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 5 -PID 18847 -f\n\norder:0 timestamp=1741415862598\norder:1 fps=28\norder:2 fpsJitters=50192708;;16733855;;33466145;;33460938;;33468229;;33503125;;50156250;;16731250;;33458854;;33460417;;33462500;;33466667;;33461458;;33622396;;33307291;;50336980;;33302083;;16733854;;33464062;;33456771;;33467188;;50186979;;16728646;;33458854;;16736458;;33461459;;33448958;;33464062\norder:3 refreshrate=60\n...\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(904909)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用该命令采集时需要进入被测应用内滑动或切换应用。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集10次指定图层帧率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 10 -VIEW DisplayNode -f\n\norder:0 timestamp=1705306822850\norder:1 fps=15\norder:2 fpsJitters=876291843;;8314062;;8308334;;8314583;;8310417;;8308333;;8326042;;8314583;;8292708;;8492709;;8143750;;8340104;;8294271;;8302604;;8297396\norder:3 refreshrate=120\n\norder:0 timestamp=1705306823852\norder:1 fps=12\norder:2 fpsJitters=906667363;;8279167;;8311458;;8315625;;8291146;;8313021;;8323438;;8293750;;8303125;;8313541;;8301563;;8317708\norder:3 refreshrate=120\n...\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(888580)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DisplayNode 是指定的图层名。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用该命令采集时，需在传入的图层上操作页面。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该命令不能与指定应用帧率一起采集（SP_daemon -N 20 -PKG ohos.samples.ecg -f 或 SP_daemon -N 20 -VIEW DisplayNode -f）。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集1次DDR信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 1 -d\n\norder:0 timestamp=1739349607442\norder:1 ddrFrequency=418000000\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全量采集示例1，采集10次整机信息，包括cpu、gpu、温度、功耗、内存信息、DDR信息、网络速率、屏幕截图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 10 -c -g -t -p -r -d -net -snapshot\n\norder:0 Battery=34.000000\norder:1 TotalcpuUsage=50.000000\norder:2 TotalcpuidleUsage=50.000000\norder:3 TotalcpuioWaitUsage=0.000000\norder:4 TotalcpuirqUsage=0.000000\norder:5 TotalcpuniceUsage=0.000000\norder:6 TotalcpusoftIrqUsage=0.000000\norder:7 TotalcpusystemUsage=33.333333\norder:8 TotalcpuuserUsage=16.666667\norder:9 capture=data/local/tmp/capture/screenCap_1773044447159.png\norder:10 cluster0=42.000000\norder:11 cpu0Frequency=1400000\norder:12 cpu0Usage=0.000000\norder:13 cpu0_curFrequency=1400000\norder:14 cpu0idleUsage=0.000000\norder:15 cpu0ioWaitUsage=0.000000\norder:16 cpu0irqUsage=0.000000\norder:17 cpu0niceUsage=0.000000\norder:18 cpu0softIrqUsage=0.000000\norder:19 cpu0systemUsage=0.000000\norder:20 cpu0userUsage=0.000000\n...\norder:122 currentNow=-326\norder:123 ddrFrequency=1531000000\norder:124 gpu=43.000000\norder:125 gpuFrequency=279000000\norder:126 gpuLoad=31.000000\norder:127 memAvailable=4262912\norder:128 memFree=620768\norder:129 memTotal=11689852\norder:130 networkDown=0\norder:131 networkUp=0\norder:132 npu_thermal=41.000000\norder:133 shell_back=37.384000\norder:134 shell_frame=36.384000\norder:135 shell_front=35.884000\norder:136 soc_thermal=45.068000\norder:137 system_h=37.388000\norder:138 timestamp=1773044447131\norder:139 voltageNow=3808748\n...\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全量采集示例2，设置包名并采集指定应用信息，包括cpu、gpu、温度、功耗、fps、内存信息、DDR信息、网络速率、屏幕截图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 10 -PKG ohos.samples.ecg -c -g -t -p -f -r -d -net -snapshot -threads\n\norder:0 Battery=36.000000\norder:1 ChildProcCpuLoad=0.000000|0.000000|\norder:2 ChildProcCpuUsage=0.000000|0.000000|\norder:3 ChildProcId=12425|12469|\norder:4 ChildProcSCpuUsage=0.000000|0.000000|\norder:5 ChildProcUCpuUsage=0.000000|0.000000|\norder:6 ProcAppName=com.huawei.hmos.browser\norder:7 ProcCpuLoad=0.000000\norder:8 ProcCpuUsage=6.944444\norder:9 ProcId=12083\norder:10 ProcSCpuUsage=0.000000\norder:11 ProcUCpuUsage=6.944444\norder:12 TotalcpuUsage=14.285714\norder:13 TotalcpuidleUsage=85.714286\norder:14 TotalcpuioWaitUsage=0.000000\norder:15 TotalcpuirqUsage=0.000000\norder:16 TotalcpuniceUsage=0.000000\norder:17 TotalcpusoftIrqUsage=0.000000\norder:18 TotalcpusystemUsage=0.000000\norder:19 TotalcpuuserUsage=14.285714\norder:20 arktsHeapPss=132573\norder:21 capture=data/local/tmp/capture/screenCap_1773045247267.png\norder:22 childArktsHeapPss=12425:|12469:|\norder:23 childGpuPss=12425:0|12469:0|\norder:24 childGraphicPss=12425:0|12469:0|\n...\norder:37 cluster0=46.000000\norder:38 cpu0Frequency=1400000\norder:39 cpu0Usage=0.000000\norder:40 cpu0_curFrequency=1400000\norder:41 cpu0idleUsage=100.000000\norder:42 cpu0ioWaitUsage=0.000000\norder:43 cpu0irqUsage=0.000000\norder:44 cpu0niceUsage=0.000000\norder:45 cpu0softIrqUsage=0.000000\norder:46 cpu0systemUsage=0.000000\norder:47 cpu0userUsage=0.000000\n...\norder:149 currentNow=-755\norder:150 ddrFrequency=1531000000\norder:151 fps=60\norder:152 fpsJitters=16618229;;16526562;;16595834;;16633854;;16563542;;16642708;;16564062;;16550000;;16663021;;16540104;;16628125;;16559896;;16603646;;16588542;;16576041;;16571355;;16600520;;16585417;;16961979;;16505209;;16348437;;16601563;;16576041;;16580209;;16566145;;16660417;;16613542;;16503125;;16586458;;16606250;;16615625;;16566146;;16596354;;16619792;;16599479;;16647396;;16535416;;16575000;;16591146;;16566667;;16588541;;16597396;;16570313;;16647916;;16537500;;16583334;;16609896;;16586979;;16644271;;16680208;;16492187;;16577084;;16610416;;16587500;;16571875;;16614063;;16565104;;16601563;;16609375\norder:153 gpu=46.000000\norder:154 gpuFrequency=279000000\norder:155 gpuLoad=0.000000\norder:156 gpuPss=39398\norder:157 graphicPss=140368\norder:158 heapAlloc=162638\norder:159 heapFree=2725\norder:160 heapSize=169080\norder:161 memAvailable=5258240\norder:162 memFree=1507648\norder:163 memTotal=11689852\norder:164 nativeHeapPss=134094\norder:165 networkDown=0\norder:166 networkUp=0\norder:167 npu_thermal=45.000000\norder:168 privateClean=403764\norder:169 privateDirty=193434\norder:170 pss=626348\norder:171 refreshrate=60\norder:172 sharedClean=158860\norder:173 sharedDirty=43800\norder:174 shell_back=39.731000\norder:175 shell_frame=38.731000\norder:176 shell_front=38.231000\norder:177 soc_thermal=49.492000\norder:178 stackPss=2588\norder:179 swap=0\norder:180 swapPss=0\norder:181 system_h=40.529000\norder:182 threadsNum=12083:124|12425:26|12469:12|\norder:183 tids=12083:13102 12761 12597 12596 12584 12583 12553 12551 12529 12528 12527 12526 12524 12523 12521 12489 12486 12485 12467 12464 12457 12455 12454 12453 12450 12449 12448 12410 12407 12406 12405 12404 12403 12399 12397 12358 12354 12353 12352 12351 12349 12348 12347 12346 12345 12344 12343 12342 12340 12339 12336 12335 12334 12333 12332 12331 12330 12327 12326 12325 12324 12323 12322 12321 12320 12319 12318 12317 12316 12315 12312 12310 12309 12308 12307 12305 12304 12303 12302 12301 12300 12298 12283 12281 12280 12279 12278 12277 12270 12269 12268 12267 12266 12265 12253 12244 12242 12241 12240 12239 12238 12237 12225 12214 12213 12197 12196 12195 12194 12193 12192 12191 12190 12189 12188 12187 12186 12185 12184 12183 12182 12181 12180 12083|12425:13124 12929 12638 12637 12636 12614 12606 12605 12604 12602 12601 12581 12580 12579 12487 12484 12483 12474 12473 12472 12471 12470 12468 12465 12462 12425|12469:13125 12506 12505 12503 12502 12501 12499 12498 12493 12492 12491 12469|\norder:184 timestamp=1773045247230\norder:185 voltageNow=3768445\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(772903)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该命令采集时需要进入被测应用内。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全量采集示例3，设置进程ID并采集指定应用信息，包括cpu、gpu、温度、功耗、fps、内存信息、DDR信息、网络速率、屏幕截图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -N 10 -PID 48875 -c -g -t -p -f -r -d -net -snapshot -threads\n\noorder:0 Battery=37.000000\norder:1 ChildProcCpuLoad=NA\norder:2 ChildProcCpuUsage=NA\norder:3 ChildProcId=NA\norder:4 ChildProcSCpuUsage=NA\norder:5 ChildProcUCpuUsage=NA\norder:6 ProcAppName=com.kiloo.subwaysurf.huaweihm\norder:7 ProcCpuLoad=3.352013\norder:8 ProcCpuUsage=8.139535\norder:9 ProcId=15619\norder:10 ProcSCpuUsage=3.682171\norder:11 ProcUCpuUsage=4.457364\norder:12 TotalcpuUsage=98.305085\norder:13 TotalcpuidleUsage=1.694915\norder:14 TotalcpuioWaitUsage=0.000000\norder:15 TotalcpuirqUsage=0.000000\norder:16 TotalcpuniceUsage=1.694915\norder:17 TotalcpusoftIrqUsage=0.000000\norder:18 TotalcpusystemUsage=52.542373\norder:19 TotalcpuuserUsage=44.067797\norder:20 arktsHeapPss=18604\norder:21 capture=data/local/tmp/capture/screenCap_1773045626809.png\norder:22 childCarktsHeapPss=NA\norder:23 childGpuPss=NA\norder:24 childGraphicPss=NA\norder:25 childHeapAlloc=NA\norder:26 childHeapFree=NA\norder:27 childHeapSize=NA\norder:28 childNativeHeapPss=NA\norder:29 childPrivateClean=NA\norder:30 childPrivateDirty=NA\norder:31 childPss=NA\norder:32 childSharedClean=NA\norder:33 childSharedDirty=NA\norder:34 childStackPss=NA\norder:35 childSwap=NA\norder:36 childSwapPss=NA\norder:37 cluster0=63.000000\norder:38 cpu0Frequency=1400000\norder:39 cpu0Usage=100.000000\norder:40 cpu0_curFrequency=1400000\norder:41 cpu0idleUsage=0.000000\norder:42 cpu0ioWaitUsage=0.000000\norder:43 cpu0irqUsage=0.000000\norder:44 cpu0niceUsage=0.000000\norder:45 cpu0softIrqUsage=0.000000\norder:46 cpu0systemUsage=40.000000\norder:47 cpu0userUsage=60.000000\n...\norder:149 currentNow=-1324\norder:150 ddrFrequency=2746000000\norder:151 fps=85\norder:152 fpsJitters=10994792;;11118750;;11017187;;11029167;;11077604;;11044792;;11058854;;11073437;;11077084;;11017708;;11090104;;11103646;;10980729;;11070313;;11119791;;10991667;;11056250;;11114583;;11014063;;11054167;;22150000;;22103645;;11077605;;11064583;;11044271;;11112500;;11059896;;11020312;;11050521;;11135937;;10994792;;11055729;;11057813;;11124479;;10988542;;11103125;;11046354;;11081250;;11111979;;10960937;;11043230;;11082812;;11061458;;11044271;;11060938;;11117708;;11036458;;11050521;;11063542;;11043750;;11072396;;11058333;;11062500;;11069271;;11059896;;11110937;;11021354;;11037500;;11068750;;11093229;;11010417;;11055208;;11071355;;11072395;;22174480;;11014583;;11160937;;10972396;;11053125;;11031250;;11095313;;22112500;;11116146;;10995312;;11091146;;11029687;;11057292;;11060938;;22123958;;11103646;;11038541;;11036459;;11072916;;11125521\norder:153 gpu=56.000000\norder:154 gpuFrequency=279000000\norder:155 gpuLoad=0.000000\norder:156 gpuPss=56476\norder:157 graphicPss=64380\norder:158 heapAlloc=77575\norder:159 heapFree=450\norder:160 heapSize=81500\norder:161 memAvailable=4191232\norder:162 memFree=162596\norder:163 memTotal=11689852\norder:164 nativeHeapPss=49129\norder:165 networkDown=0\norder:166 networkUp=0\norder:167 npu_thermal=55.000000\norder:168 privateClean=468356\norder:169 privateDirty=129248\norder:170 pss=605268\norder:171 refreshrate=90\norder:172 sharedClean=117476\norder:173 sharedDirty=35940\norder:174 shell_back=40.404000\norder:175 shell_frame=39.404000\norder:176 shell_front=38.904000\norder:177 soc_thermal=66.496000\norder:178 stackPss=940\norder:179 swap=0\norder:180 swapPss=0\norder:181 system_h=45.687000\norder:182 threadsNum=15619:73\norder:183 tids=15619:16167 16140 16138 16128 16127 16126 16118 16117 16115 16114 16113 16106 15996 15993 15983 15969 15966 15957 15954 15953 15952 15951 15950 15945 15927 15926 15925 15924 15923 15922 15921 15920 15919 15918 15917 15916 15915 15914 15913 15912 15911 15910 15909 15908 15907 15906 15880 15841 15839 15815 15814 15813 15812 15799 15791 15789 15765 15755 15753 15752 15751 15749 15748 15747 15746 15745 15744 15743 15742 15740 15739 15738 15619\norder:184 timestamp=1773045626635\norder:185 voltageNow=3719892\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(355438)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该命令采集时需要进入被测应用内。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 启停采集"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "先执行start开始采集命令，然后操作设备或应用，最后执行stop结束采集命令。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "启停采集命令参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始采集，该命令参数后可添加基础采集命令，一秒采集一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束采集，执行后会生成采集报告。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-print"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一秒打印一次启停采集信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启停采集整机CPU大中小核频率、各核使用率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 开始采集\n$ SP_daemon -start -c\nSP_daemon Collection begins\n\ncommand exec finished!\n$\n\n# 结束采集\n$ SP_daemon -stop\nSP_daemon Collection ended\nOutput Path: data/local/tmp/smartperf/1/t_index_info.csv\n\ncommand exec finished!\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启停采集并打印整机CPU大中小核频率、各核使用率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 开始采集（打印启停采集信息）\n$ SP_daemon -start -c -print\nSP_daemon Collection begins\n\norder:0 TotalcpuUsage=20.860927\norder:1 TotalcpuidleUsage=79.139073\norder:2 TotalcpuioWaitUsage=0.000000\norder:3 TotalcpuirqUsage=0.082781\norder:4 TotalcpuniceUsage=0.000000\norder:5 TotalcpusoftIrqUsage=0.000000\norder:6 TotalcpusystemUsage=8.029801\norder:7 TotalcpuuserUsage=12.748344\norder:8 cpu0Frequency=1430000\norder:9 cpu0Usage=44.554455\norder:10 cpu0idleUsage=55.445545\norder:11 cpu0ioWaitUsage=0.000000\norder:12 cpu0irqUsage=0.000000\norder:13 cpu0niceUsage=0.000000\norder:14 cpu0softIrqUsage=0.000000\norder:15 cpu0systemUsage=17.821782\norder:16 cpu0userUsage=26.732673\norder:17 cpu10Frequency=1239000\norder:18 cpu10Usage=0.000000\norder:19 cpu10idleUsage=100.000000\norder:20 cpu10ioWaitUsage=0.000000\norder:21 cpu10irqUsage=0.000000\norder:22 cpu10niceUsage=0.000000\norder:23 cpu10softIrqUsage=0.000000\norder:24 cpu10systemUsage=0.000000\norder:25 cpu10userUsage=0.000000\norder:26 cpu11Frequency=1239000\norder:27 cpu11Usage=0.000000\norder:28 cpu11idleUsage=100.000000\norder:29 cpu11ioWaitUsage=0.000000\norder:30 cpu11irqUsage=0.000000\norder:31 cpu11niceUsage=0.000000\norder:32 cpu11softIrqUsage=0.000000\norder:33 cpu11systemUsage=0.000000\norder:34 cpu11userUsage=0.000000\n...\n\ncommand exec finished!\n$\n    \n# 结束采集（在启停打印时，需重新开启命令框执行此命令）\n$ SP_daemon -stop\nSP_daemon Collection ended\nOutput Path: data/local/tmp/smartperf/1/t_index_info.csv\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(692329)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开始采集示例1（采整机cpu、gpu、温度、功耗、fps、内存信息、DDR信息、网络速率、屏幕截图）：SP_daemon -start -c -g -t -p -r -d -net -snapshot。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开始采集示例2（采整机和进程cpu负载、gpu、温度、功耗、fps、内存信息、DDR信息、网络速率、屏幕截图、线程数、文件描述符）：SP_daemon -start -PKG ohos.samples.ecg -c -g -t -p -f -r -d -net -snapshot -threads。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开始采集示例3（采整机和进程cpu负载、gpu、温度、功耗、fps、内存信息、DDR信息、网络速率、屏幕截图、线程数、文件描述符）：SP_daemon -start -PID 18847 -c -g -t -p -f -r -d -net -snapshot -threads。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开始采集示例4（采整机cpu、gpu、温度、功耗、fps、内存信息、DDR信息、网络速率、屏幕截图、线程数、文件描述符并且打印采集信息）：SP_daemon -start -c -g -t -p -r -d -net -snapshot -threads -print。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开始采集示例5（采整机和进程cpu负载、gpu、温度、功耗、fps、内存信息、DDR信息、网络速率、屏幕截图、线程数、文件描述符并且打印采集信息）：SP_daemon -start -PID 18847 -c -g -t -p -f -r -d -net -snapshot -threads -print。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开始采集需和结束采集结合使用，先执行开始采集命令，执行完后操作设备中的应用，最后执行结束采集命令。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在执行启停打印采集时，执行停止命令需重新打开命令框执行停止命令。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "结束采集，文件输出路径为：data/local/tmp/smartperf/1/t_index_info.csv。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "导出示例：hdc file recv data/local/tmp/smartperf/1/t_index_info.csv D:\\。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 查看csv采集结果"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若采集结果保存在csv文件中，可以按照如下操作导出和查看结果内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过-N开启采集，采集结果默认输出路径：/data/local/tmp/data.csv。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看文件位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\issusser>hdc shell\n$ cd data/local/tmp\n$ ls\ndata.csv\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导出文件到指定路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\issusser>hdc file recv data/local/tmp/data.csv D:\\\n[I][2023-11-08 16:16:41] HdcFile::TransferSummary success\nFileTransfer finish, Size:429, File count = 1, time:6ms rate:71.50kB/s\n\nC:\\Users\\issusser>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开data.csv查看数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在自定义导出路径里找到data.csv文件打开查看采集数据表，data.csv数据名描述如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "数据项"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "备注"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cpuFrequency"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU大中小核频率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：Hz"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cpuUasge"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU各核使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cpuidleUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU空闲态使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cpuioWaitUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "等待I/O的使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cpuirqUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "硬中断的使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cpuniceUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "低优先级用户态使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cpusoftIrqUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "软中断的使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cpusystemUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "系统/内核态使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cpuuserUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户态使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ProcId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程id。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ProcAppName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "app包名。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ProcCpuLoad"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程CPU负载占比。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ProcCpuUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程CPU使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ProcUCpuUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程用户态CPU使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ProcSCpuUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程内核态CPU使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TotalcpuUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU总使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TotalcpuidleUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU总空闲态使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TotalcpuioWaitUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU总等待I/O使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TotalcpuirqUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU总硬中断使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TotalcpuniceUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU总低优先级用户态使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TotalcpusoftIrqUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU总软中断使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TotalcpusystemUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU总系统/内核态使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TotalcpuuserUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU总用户态使用率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "gpuFrequency"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整机GPU的频率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "gpuLoad"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整机GPU的负载占比。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "%"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "currentNow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前读到的电流值。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：mA"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "voltageNow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前读到的电压值。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：μV"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "fps"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "每秒帧数。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：fps"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "fpsJitters"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "每一帧绘制间隔。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：ns"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "refreshrate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "屏幕刷新率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：Hz"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "networkDown"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下行速率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：byte/s"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "networkUp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "上行速率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：byte/s"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ddrFrequency"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DDR频率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：Hz"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "shell_front"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "前壳温度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：°C"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "shell_frame"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "边框温度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：°C"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "shell_back"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "后壳温度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：°C"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "soc_thermal"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "系统芯片温度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：°C"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "system_h"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "系统温度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：°C"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Battery"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "电池温度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：°C"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cluster0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU温度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：°C"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "gpu"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GPU温度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：°C"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "npu_thermal"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NPU温度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：°C"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "memAvailable"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整机可用内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "memFree"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整机空闲内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "memTotal"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整机总内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "pss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程实际使用内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Childpss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程实际使用内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "sharedClean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程共享的未改写页面。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildsharedClean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程共享的未改写页面。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "sharedDirty"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程共享的已改写页面。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildsharedDirty"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程共享的已改写页面。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "privateClean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程私有的未改写页面。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildprivateClean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程私有的未改写页面。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "privateDirty"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程私有的已改写页面。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildprivateDirty"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程私有的已改写页面。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "swapTotal"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程总的交换内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildswapTotal"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程总的交换内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "swapPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程交换的pss内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildswapPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程交换的pss内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HeapSize"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程堆内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildHeapSize"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程堆内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HeapAlloc"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程可分配的堆内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildHeapAlloc"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程可分配的堆内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HeapFree"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程剩余的堆内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildHeapFree"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程剩余的堆内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "gpuPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程使用的gpu内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildgpuPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程使用的gpu内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "graphicPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程使用的图形内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildgraphicPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程使用的图形内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "arktsHeapPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程使用的arkts内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildarktsHeapPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程使用的arkts内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "nativeHeapPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程使用的native内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildnativeHeapPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程使用的native内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "stackPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进程使用的栈内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChildstackPss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "子进程使用的栈内存大小。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位：KB"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timeStamp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前时间戳。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "对应采集时间"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景化采集",
      children: "场景化采集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除基本采集外，还支持采集响应和完成时延等内容。场景化采集结果不写入data.csv，采集结果直接在命令框显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景化采集是对应用页面滑动、切换场景下的性能测试，针对不同操作场景执行相对应的采集命令，获取应用性能数据，包括页面的滑动帧率、页面切换或滑动的卡顿率、响应时延、完成时延以及最大连续丢帧，对采集数据进行输出打印，以便用户分析并优化应用性能。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景化采集命令参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-editor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集类型为场景化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timeDelay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面切换（支持ArKUI子系统的router、navigation、tabs、swiper控件内的页面切换/内容切换）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slideList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面滑动（支持ArKUI子系统的List、grid、scroll、waterflow等组件内的页面滑动）。"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景化采集数据项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResponseTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面切换、页面滑动的响应时延。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位：ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CompleteTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面切换的完成时延。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位：ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HitchTimeRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面切换、页面滑动的卡顿率。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位：ms/s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_RENDER_SEQ_MISSED_FRAMES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面切换、页面滑动的最大连续丢帧。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面滑动帧率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位：fps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "页面切换"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤1：打开被测应用，进入需要测试的页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤2：在cmd命令行中输入命令并回车：SP_daemon -editor timeDelay。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤3：等待1-2秒钟，然后手动点击页面内的按钮，跳转到下一个页面，等待测试完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试完成后，打印结果示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ SP_daemon -editor timeDelay\nResponseTime:41ms\nCompleteTime:593ms\nHitchTimeRate:68.65ms/s\nMAX_RENDER_SEQ_MISSED_FRAMES:3\n$\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(54489)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "时延计算受系统打点上报限制，开始时间为点击事件上报时间点，响应时延结束时间点为点击后系统响应首帧的上屏时间点，完成时延是切换后页面的首帧上屏时间点，与端到端用户感知时延存在差异。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面切换卡顿率：目前只支持ArKUI子系统的router、navigation、tabs、swiper控件内的页面切换/内容切换。计算公式：页面切换卡顿率=页面切换动效时间内每一帧的累计丢帧时间（ms）/ 动效时长（s）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最大连续丢帧受系统打点上报限制，与端到端用户感知时延存在差异。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面切换同时会抓取trace，文件路径：data/local/tmp/sp_trace_delay.ftrace，通过hdc file recv的方式导出查看trace。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "页面滑动"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤1：打开被测应用，进入需要测试的页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤2：在cmd命令行中输入命令并回车：SP_daemon -editor slideList。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤3：等待1-2秒钟，然后触摸屏幕滑动一次页面，等待测试完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试完成后，打印结果示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ SP_daemon -editor slideList\nFPS:107.181fps\nResponseTime:20ms\nHitchTimeRate:1.49ms/s\nMAX_RENDER_SEQ_MISSED_FRAMES:0\n$\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(888781)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "时延计算受系统打点上报限制，开始时间为点击事件上报时间点，响应时延结束时间点为滑动后系统响应首帧的上屏时间点，与端到端用户感知时延存在差异，需要注意的是，滑动场景时延计算不支持Web组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面滑动帧率：指的是在页面滑动时，屏幕能够刷新的频率。需要注意的是，该场景目前只支持滑动一次页面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面滑动卡顿率：目前只支持ArKUI子系统的List、grid、scroll、waterflow滚动组件。计算公式：页面滑动卡顿率=页面滑动动效时间内每一帧的累计丢帧时间（ms）/ 动效时长（s）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最大连续丢帧受系统打点上报限制，与端到端用户感知时延存在差异。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面滑动同时会抓取trace，文件路径：data/local/tmp/sp_trace_fps.ftrace，通过hdc file recv的方式导出查看trace。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他采集",
      children: "其他采集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备电量采集结果可写入csv文件，其它命令需单独采集，采集结果不写入data.csv，仅在命令框显示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集屏幕分辨率和刷新率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-deviceinfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启停采集用来拉起daemon进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-clear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除所有SP_daemon进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-recordcapacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前设备电量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-profilerfps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集当前界面fps。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取屏幕分辨率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -screen\nactiveMode: 1260x2720, refreshrate=60\n\ncommand exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(748092)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "activeMode表示当前屏幕分辨率，refreshrate表示屏幕刷新率。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -deviceinfo\n  abilist: default\n  activeMode: 1260x2720\n  board: default\n  brand: default\n  cpu_c1_cluster: 0 1 2 3\n  cpu_c1_max: 1530000\n  cpu_c1_min: 418000\n  cpu_c2_cluster: 4 5 6 7 8 9\n  cpu_c2_max: 2150000\n  cpu_c2_min: 418000\n  cpu_c3_cluster: 10 11\n  cpu_c3_max: 2620000\n  cpu_c3_min: 1239000\n  cpu_cluster_name: policy0 policy1 policy2\n  daemonPerfVersion: 1.0.5\n  deviceTypeName: default\n  fullname: HarmonyOS-5.1.0.50\n  gpu_max_freq: 750000000\n  gpu_min_freq: 279000000\n  model: ohos\n  name: default\n  sn: default\n  version: default\n\n  command exec finished!\n  $\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动一个进程来监听start和stop命令的socket消息"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -server\n$\n$ pidof SP_daemon\n7024\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(139252)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可执行pidof SP_daemon查看进程id。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "清除SP_daemon进程ID"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ pidof SP_daemon\n9923 11402\n$ SP_daemon -clear\n$\n$ pidof SP_daemon\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(490564)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可执行pidof SP_daemon查看进程id。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集当前界面fps。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -profilerfps 10\nset num:10 success\nfps:31|1739353731123\nfps:30|1739353732123\nfps:58|1739353733123\nfps:24|1739353734123\nfps:19|1739353735123\nfps:19|1739353736123\nfps:55|1739353737123\nfps:26|1739353738123\nfps:21|1739353739123\nfps:19|1739353740123\nSP_daemon exec finished!\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(501901)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该条命令里的10表示采集的次数（一秒采集一次），可以设置为其他正整数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集当前界面fps（分段采集）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -profilerfps 100 -sections 10\nset num:100 success\nfps:33|1739353780123\nsectionsFps:15|1739353780123\nsectionsFps:60|1739353780223\nsectionsFps:15|1739353780323\nsectionsFps:60|1739353780423\nsectionsFps:15|1739353780523\nsectionsFps:15|1739353780623\nsectionsFps:24|1739353780723\nsectionsFps:60|1739353780823\nsectionsFps:60|1739353780923\nsectionsFps:60|1739353781023\nfps:49|1739353781123\nsectionsFps:60|1739353781123\nsectionsFps:60|1739353781223\nsectionsFps:60|1739353781323\nsectionsFps:60|1739353781423\nsectionsFps:60|1739353781523\nsectionsFps:60|1739353781623\nsectionsFps:15|1739353798723\nsectionsFps:15|1739353798823\nsectionsFps:10|1739353798923\nsectionsFps:60|1739353799023\nfps:20|1739353799123\nsectionsFps:60|1739353799123\n...\n\nSP_daemon exec finished!\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(76868)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该条命令里的100表示采集的次数（一秒采集一次），可以设置为其他正整数，10表示分段：目前支持设置 1-10（正整数）段采集。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取电池电量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ SP_daemon -recordcapacity\nrecordTime: 1726903063\nrecordPower: 5502\n$\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(156684)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "recordTime表示时间戳，recordPower表示当前时刻的电量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该命令需单独采集，采集结果写入/data/local/tmp/powerLeftRecord.csv，可以使用hdc file recv导出到本地。具体请参考查看csv采集结果。"
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
888781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
156684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
230573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
466289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
296860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002581377647-9fc569797ac313e288173a9fc3830f86.png");

},
355438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
904909(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
356940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
536445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
633937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
888580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
501901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
772903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
925963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
76868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
54489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
139252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
692329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
748092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
490564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
627048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
472781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
112958(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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