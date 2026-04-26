"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["695787"], {
108947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_run_device_ide_run_device_md_6d0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-run-device-ide-run-device-md-6d0.json
var site_docs_ide_run_device_ide_run_device_md_6d0_namespaceObject = JSON.parse('{"id":"ide-run-device/ide-run-device","title":"使用本地真机运行应用","description":"在本地真机中运行HarmonyOS应用/元服务，可以采用USB连接方式或者无线连接方式。","source":"@site/docs/ide-run-device/ide-run-device.md","sourceDirName":"ide-run-device","slug":"/ide-run-device/","permalink":"/harmonyos-docs-site/ide-run-device/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用本地真机运行应用","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"配置调试签名","permalink":"/harmonyos-docs-site/ide-signing/"},"next":{"title":"使用仿真器运行轻量级穿戴应用","permalink":"/harmonyos-docs-site/ide-run-simulator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-run-device/ide-run-device.md


const frontMatter = {
	title: '使用本地真机运行应用',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '使用本地真机运行应用';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "使用USB连接方式",
  "id": "使用usb连接方式",
  "level": 2
}, {
  "value": "使用设备连接助手排查问题",
  "id": "使用设备连接助手排查问题",
  "level": 3
}, {
  "value": "使用无线连接方式",
  "id": "使用无线连接方式",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用本地真机运行应用",
        children: "使用本地真机运行应用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本地真机中运行HarmonyOS应用/元服务，可以采用USB连接方式或者无线连接方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(302051)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wearable设备仅支持无线连接方式（Lite Wearable设备不支持）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["确保设备系统版本升级到", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-500#section849861583816",
          children: "HarmonyOS NEXT Developer Beta1"
        }), "或以上。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在真机设备上查看", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设置 > 系统"
          })
        }), "中开发者选项是否存在，如果不存在，可在", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["设置 > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "具体的设备名称"
            })]
          })
        }), "中，连续七次单击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "软件版本"
          })
        }), "，直到提示“开启开发者选项”，点击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "确认开启"
          })
        }), "后输入PIN码（如果已设置），设备将自动重启，请等待设备完成重启。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在设备运行应用/元服务需要根据", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing",
          children: "配置调试签名"
        }), "章节，提前对应用/元服务进行签名。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用usb连接方式",
      children: "使用USB连接方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用USB方式，将真机设备与PC端进行连接。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设置 > 系统 > 开发者选项"
            })
          }), "中，打开", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USB调试"
            })
          }), "开关（确保设备已连接USB）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在真机设备中会弹出“允许USB调试”的弹框，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "允许"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(775816)/* ["default"] */.A) + "",
            width: "434",
            height: "253"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在菜单栏中，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Run>Run'模块名称'", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsxs)(_components.strong, {
                  children: ["或", (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(194670)/* ["default"] */.A) + "",
                    width: "14",
                    height: "17"
                  }), "，或使用默认快捷键"]
                })
              }), "Shift+F10"]
            })
          }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control+R"
            })
          }), "）运行应用/元服务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(413073)/* ["default"] */.A) + "",
            width: "466",
            height: "135"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio启动HAP的编译构建和安装。安装成功后，设备会自动运行安装的HarmonyOS应用/元服务。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用设备连接助手排查问题",
      children: "使用设备连接助手排查问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 5.1.1 Beta1版本开始，设备连接后，如果DevEco Studio无法识别到设备，显示“No Devices”，可使用设备连接助手来排查问题。点击设备下拉框，并点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Troubleshoot Device Connections"
        })
      }), "打开该功能，分为三个步骤，每个步骤排查完后点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        })
      }), "排查下一个。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["通过USB连接设备：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "根据界面提示，使用USB连接设备后，点击"
              })
            }), "Rescan Devices"]
          })
        }), "按钮，扫描已连接的设备，确保扫描结果中包含待调试的设备。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****启用USB调试：****根据界面提示，确保设备系统版本正确，并且启用开发者选项和USB调试。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["重启HDC服务：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "如果DevEco Studio仍然无法识别设备，点击"
              })
            }), "Restart hdc Service"]
          })
        }), "按钮重启HDC服务，重启后HDC会重新识别设备。如果重启后仍识别不到设备，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-debugging-3",
          children: "设备连接后，无法识别设备的处理指导"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-32",
          children: "如何解决设备无法识别问题"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用无线连接方式",
      children: "使用无线连接方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将真机设备和PC连接到同一WLAN网络。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设置 > 系统 >"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "开发者选项"
            })
          }), "中，打开", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "无线调试"
            })
          }), "或", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "通过WLAN调试"
            })
          }), "（Wearable设备）开关，并获取设备端的IP地址和端口号。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(264841)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "451",
            height: "308"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接设备，有两种方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在DevEco Studio菜单栏中，单击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Tools > IP Connection"
                })
              }), "，输入连接设备的IP地址和端口号，单击", (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(859535)/* ["default"] */.A) + "",
                width: "22",
                height: "20"
              }), "，连接正常后，设备状态为", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "online"
                })
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(828801)/* ["default"] */.A) + "",
                width: "664",
                height: "499"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["执行hdc命令，关于hdc工具的使用指导请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/system-debug-optimize/debugging-commands/hdc",
                children: "hdc"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc tconn 设备IP地址:端口号\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在菜单栏中，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Run>Run'模块名称'", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsxs)(_components.strong, {
                  children: ["或", (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(611008)/* ["default"] */.A) + "",
                    width: "16",
                    height: "16"
                  }), "，或使用默认快捷键"]
                })
              }), "Shift+F10"]
            })
          }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control+R"
            })
          }), "）运行应用/元服务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(336308)/* ["default"] */.A) + "",
            width: "466",
            height: "135"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio启动HAP的编译构建和安装。安装成功后，设备会自动运行安装的HarmonyOS应用/元服务。"
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
859535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAABbElEQVQ4Eb3UzUvCABgGcP8/dV/uQ80soiKCSOoQSFiHoDrVLRLvfUDbHBrOj61SCKEOdvASdrBDFwlM8PrEhgvBOV3LDmOHsd/z7H23+fr9PmZx+GaBGub/wmk9gzPt3NOIbBvHtAUwmoCl7CrUp+KvAmzhhLaNgEiBKfOgSzySyi6ab01XAbbwpraFgESZeDBLI6QLIG9DOFFP0f3qThXgDBv4IIDIMwjdCYjK87iqXU/Ep4OHAugiZwasyxuoN+tjA9zBg/bGUzAVHpTKIqXso/3RHglwDw/a+29IBBUakec4BCX6N7BfJM1lsvdhzMlxSI+yR1ikzJYGSCgM0pUMer3eCDr2k/553YaWZs2VLnFI5fbQem/Zgta/Z/KMRRJUgYXRckVaQ/Wl5ghOhI05EjkG7EMEYTmGi+rlVKAjvFheBqVyIAssjvLH6Hx2XKFjZ3ygH2JHTaLx2nANOja2Lno52y7PC2jd+w2dMQMRQfGRcgAAAABJRU5ErkJggg==");

},
828801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753629-d475b5964c3591ffea70f067f9f4591f.png");

},
194670(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAAoUlEQVQ4jWP89OnTfwYyABM5mqinceqZBQxvvr0jSiMLMufSq+sM19/eYXBXsmfwUHJgYGVmJc5GBgYGht9/fzNsub2HoeFwH8PlV9eJ1wgDb769Y5hyZgFO57Ng0YMCcDmfqFDF5nyyo4OgUxkYGBhYmVkxnEpQo56YJkO4lh+DCJcQcTaKcAkxRGj5MeiKaRLnVGzOIqgRl7OwAUa6ZysAaVo90R4OdQgAAAAASUVORK5CYII=");

},
611008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jWP89OnTfwYKABMlmrEaMPXMAoY3394RbQALusClV9cZrr+9w+CuZM/goeTAwMrMSpoLGBgYGH7//c2w5fYehobDfQyXX10n3QAYePPtHcOUMwvwegvDC9gAPm8RHQu4vEVxNBLlBQYGBgZWZlasXiDKAD0xTYZwLT8GES4h0lwgwiXEEKHlx6ArpolTDVYDcDmXKAPwORcbYBzw3AgAdtk9zz7qfGwAAAAASUVORK5CYII=");

},
302051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
264841(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753696-dd9db9f5ac944d871bab7b35db9a9bdd.png");

},
413073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753637-2bdcdadeb57094a46d8ad131b116d47d.png");

},
775816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753700-1b2b7302a43375e50ba9efa092f45121.png");

},
336308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753694-2bdcdadeb57094a46d8ad131b116d47d.png");

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