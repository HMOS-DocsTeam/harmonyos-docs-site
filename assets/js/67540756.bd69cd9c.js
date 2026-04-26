"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["20504"], {
419113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_run_emulator_ide_emulator_management_ide_emulator_create_ide_emulator_create_md_675_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-run-emulator-ide-emulator-management-ide-emulator-create-ide-emulator-create-md-675.json
var site_docs_ide_run_emulator_ide_emulator_management_ide_emulator_create_ide_emulator_create_md_675_namespaceObject = JSON.parse('{"id":"ide-run-emulator/ide-emulator-management/ide-emulator-create/ide-emulator-create","title":"创建模拟器","description":"有网络环境可参考以下步骤创建模拟器，如果是无网络环境，请查看离线部署模拟器。","source":"@site/docs/ide-run-emulator/ide-emulator-management/ide-emulator-create/ide-emulator-create.md","sourceDirName":"ide-run-emulator/ide-emulator-management/ide-emulator-create","slug":"/ide-run-emulator/ide-emulator-management/ide-emulator-create/","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-management/ide-emulator-create/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"创建模拟器","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-create","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"模拟器与真机的差异","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-overview/ide-emulator-specification/"},"next":{"title":"启动和关闭模拟器","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-management/ide-emulator-start-and-close/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-run-emulator/ide-emulator-management/ide-emulator-create/ide-emulator-create.md


const frontMatter = {
	title: '创建模拟器',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-create',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '创建模拟器';

const assets = {

};



const toc = [{
  "value": "使用预置的模拟器",
  "id": "使用预置的模拟器",
  "level": 2
}, {
  "value": "创建新的模拟器",
  "id": "创建新的模拟器",
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
        id: "创建模拟器",
        children: "创建模拟器"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["有网络环境可参考以下步骤创建模拟器，如果是无网络环境，请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-no-network",
        children: "离线部署模拟器"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(478610)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在macOS中，您可能在活动监视器中发现模拟器进程占用的内存超过设置的内存。实际上，活动监视器中的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory"
        })
      }), "并不代表模拟器进程实际使用的物理内存，更多详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-running-23",
        children: "macOS上活动监视器中显示模拟器内存偏高"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用预置的模拟器",
      children: "使用预置的模拟器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta2版本开始，如果本地没有模拟器，DevEco Studio会预置模拟器，开发者无需创建即可快速使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(330716)/* ["default"] */.A) + "",
        width: "348",
        height: "474"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在设备选择框中，选择预置的模拟器并点击运行按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(254103)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "后，根据界面提示下载镜像，或点击菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tools > Device Manager"
        })
      }), " >", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(19692)/* ["default"] */.A) + "",
        width: "20",
        height: "20"
      }), "下载镜像后，即可快捷使用模拟器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(58143)/* ["default"] */.A) + "",
        width: "1399",
        height: "503"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建新的模拟器",
      children: "创建新的模拟器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击菜单栏的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tools > Device Manager"
            })
          }), "，点击右下角的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edit"
            })
          }), "设置模拟器实例的存储路径", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Local Emulator Location"
            })
          }), "，Mac默认存储在~/.Huawei/Emulator/deployed下，Windows默认存储在C:\\Users\\xxx\\AppData\\Local\\Huawei\\Emulator\\deployed下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(156439)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1638",
            height: "720"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Local Emulator"
            })
          }), "页签中，单击右下角的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Emulator"
            })
          }), "按钮，创建一个模拟器。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在模拟器配置界面，可以选择一个默认的设备模板，首次使用时请点击设备右侧的", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(111523)/* ["default"] */.A) + "",
            width: "24",
            height: "22"
          }), "下载模拟器镜像，您也可以在该界面更新或删除不同设备的模拟器镜像。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edit"
            })
          }), "可以设置镜像文件的存储路径。macOS默认存储在~/Library/Huawei/Sdk下，Windows默认存储在C:\\Users\\xxx\\AppData\\Local\\Huawei\\Sdk下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(856229)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果配置界面显示异常，例如设备列表为空等，可先关闭DevEco Studio，并进入~/Library/Huawei（Windows路径为C:\\Users\\xxx\\AppData\\Local\\Huawei）目录，删除DevEcoStudiox.x文件夹（如DevEcoStudio6.0，具体文件夹名称和安装的DevEco Studio版本相关）以清理缓存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(210467)/* ["default"] */.A) + "",
            width: "1044",
            height: "616"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "，设置设备相关的参数。从DevEco Studio 6.0.0 Beta1版本开始，部分设备支持自定义屏幕配置，具体支持的设备请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-emulator/ide-emulator-modify/ide-emulator-customize-screen-configuration",
            children: "自定义屏幕配置"
          }), "，下面以Phone为例。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Name"
              })
            }), "：设置模拟器的名称。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Screen Profile"
              })
            }), "：模拟器屏幕配置参数，可点击下拉框选择预置的机型配置，也可点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Customize"
              })
            }), "自定义配置，在自定义配置的情况下可以对屏幕尺寸、分辨率和DPI进行修改，取值范围参考界面提示。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "****Screen size：****屏幕的对角线长度，单位为inch。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Resolution"
                  })
                }), "：分辨率，包括宽度和高度，单位为px。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "DPI"
                  })
                }), "：像素密度，DPI 越高，UI组件占用的像素点越多，从而提供更精细的显示效果。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Boot options"
              })
            }), "：模拟器启动方式。从DevEco Studio 6.1.0 Beta1版本开始支持。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Cold boot"
                  })
                }), "：以开机启动的方式重新启动。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Quick boot"
                  })
                }), "：启动时加载上次关闭时保存的快照，启动后会恢复至上次关闭时的状态。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Memory"
              })
            }), "：设置模拟器的内存。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Storage"
              })
            }), "：设置模拟器的存储空间。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["确认所有参数后，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "创建模拟器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(896054)/* ["default"] */.A) + "",
            width: "923",
            height: "755"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动模拟器，有两种方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["从DevEco Studio 6.1.0 Beta2版本开始，创建后的模拟器会展示在设备列表中（最多10个），选择模拟器后，点击运行按钮", (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(413856)/* ["default"] */.A) + "",
                width: "16",
                height: "16"
              }), "，即可一键完成启动模拟器、编译构建、推包运行操作。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(422571)/* ["default"] */.A) + "",
                width: "303",
                height: "357"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在设备管理器页面，单击", (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(626554)/* ["default"] */.A) + "",
                width: "21",
                height: "20"
              }), "启动模拟器。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(205294)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1388",
                height: "313"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击DevEco Studio的****Run > Run'模块名称'****或", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(825007)/* ["default"] */.A) + "",
            width: "16",
            height: "16"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(266028)/* ["default"] */.A) + "",
            width: "408",
            height: "35"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio会启动应用/元服务的编译构建与推包，完成后应用/元服务即可运行在模拟器上。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(138578)/* ["default"] */.A) + "",
            width: "349",
            height: "734"
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
413856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jWP89OnTfwYKABMlmrEaMPXMAoY3394RbQALusClV9cZrr+9w+CuZM/goeTAwMrMSpoLGBgYGH7//c2w5fYehobDfQyXX10n3QAYePPtHcOUMwvwegvDC9gAPm8RHQu4vEVxNBLlBQYGBgZWZlasXiDKAD0xTYZwLT8GES4h0lwgwiXEEKHlx6ArpolTDVYDcDmXKAPwORcbYBzw3AgAdtk9zz7qfGwAAAAASUVORK5CYII=");

},
825007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jWP89OnTfwYKABMlmrEaMPXMAoY3394RbQALusClV9cZrr+9w+CuZM/goeTAwMrMSpoLGBgYGH7//c2w5fYehobDfQyXX10n3QAYePPtHcOUMwvwegvDC9gAPm8RHQu4vEVxNBLlBQYGBgZWZlasXiDKAD0xTYZwLT8GES4h0lwgwiXEEKHlx6ArpolTDVYDcDmXKAPwORcbYBzw3AgAdtk9zz7qfGwAAAAASUVORK5CYII=");

},
205294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751084-1bf7f03663bef287ebd9b5100407e072.png");

},
422571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831023-fbb62b2b58ce8529680e3581bd1f5605.png");

},
138578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911086-c9f85a75238c34ee90efa8fe96596f30.png");

},
19692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAACcElEQVR4AWSSMU9aURTH773EqIPUxs3GD2ACpn4HukLiWCd5ux00DiY6CFptXOtiv4EDBONSNx0QAzZx0a6aCEOhCRQoynuvv8uBB7E3P84753/O/9373sP4g+V5viBCs9msVmu12u9O51mUV5FhowZL60HWux4cfHEcJ5lMnp9/R/B9whAp2VlJRgc/kEC1+qv9t9Vo1BuNhgxIpAUyZuRCTW8UY4xW2kZtT6c1I3YbZmymFIrdWSmrEkfRfc/QyfToALntcaHxCt/30P+HMRE5Qt8stURUkDyIKD6/QS2p4U4wEO2VEmxmH4f9gxetde/JpUW0O3MbgRrq9Ybr4lFac2uwjlarFTgZZozSmskE1Pv7nxsbG0dHXzudDu1QKPT4+Li1tbW//5lvxhgzRMGaGQpot9tPT09nZ2flchnn2NjYxcVlPp+vVCrdblc8ROaJ9lON3mxx8b3jOBMTk55nT66UwjM7+2519dP09FuZFCet/s6oQA2JRHxlZUVrjf/l5XlmZmZ9fT0ajWitgIEA02z+2dzcvLrKI4mfGI/Hk0mHb4NzbW0tGo3SFRCPj78BY4ZT3d7e3t3dSY8ot8d/eHi4t7e3sLCAGOC63evrwsPDA4p95nD4TSz2gSIAP//q+fn5ubk5cqDFVsArjMVinuciYuYg3uTkBG1qYgCjkpNAkPM68VCaUMi4nntycpLL5TKZbI8MK9tbJJDNZnpY6fQ0d3l5MT5uNzNT4anlj8t822KxeNNfP0p2FUslKLFuboZKoVAIh8NLS0ucxWhlEolEOp1OpXZgp7coA1KpNFpQ7u7ubm9vRyIRpdQ/AAAA//8LZSgiAAAABklEQVQDAGyDie6JEmpxAAAAAElFTkSuQmCC");

},
58143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831025-b3df4d44cf78d28f1cd8438b057f60d6.png");

},
254103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jWP89OnTfwYKABMlmrEaMPXMAoY3394RbQALusClV9cZrr+9w+CuZM/goeTAwMrMSpoLGBgYGH7//c2w5fYehobDfQyXX10n3QAYePPtHcOUMwvwegvDC9gAPm8RHQu4vEVxNBLlBQYGBgZWZlasXiDKAD0xTYZwLT8GES4h0lwgwiXEEKHlx6ArpolTDVYDcDmXKAPwORcbYBzw3AgAdtk9zz7qfGwAAAAASUVORK5CYII=");

},
156439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911088-a6aa804dcdd67be7bd09c8024767128c.png");

},
266028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751074-e2fa47d9e8fcb0d32817d846b6e834c4.png");

},
856229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
111523(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAIAAABVH8vfAAAA3klEQVQ4Ee3TPQqFMAwAYC+YsYugBSdP0MkDuDl4AMGhF+jo6pZziIN0EWfz4AUkiq8iODwer1NI7Bf7F9FDI3rIoQvIOQfv4ZwLt7yArLUMWWv/0PkOfNMe9X1fVVXTNHxqbdvWdd113fmf0+d7VJYlAGitGcqyDACKorgNee/zPGdls8ZxvA0Rkfc+TVNW4jgOKHRYmlIKEWXPaZq01kmSDMMg84iolJKZ3RMBgAPEn67rKucQESICgEweIVkLxxfQsizh+Vyd5zkEGWPkMYVjY4xsuVuaLNyNfxh6ATt1mEirFTveAAAAAElFTkSuQmCC");

},
210467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751027-c9719dbfc9cb06c08bdfedc7938ed6e1.png");

},
626554(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAA0klEQVQ4EWP49OnTf2pjBmobCDIPq6GP3775f+3lC7J9gNXQqIO7/uttXvW//PTR//ffvCbZcKyGeu7Z8l938yowtti27v+Mqxf/v/v4gWjDCRoKM9xrz9b/Ox/cJcpgog2FGZ52dD/B8CbZUJDhRlvX/G+/cPr/i/fvsbqcLENhrnbYufH/ytvX/39ES+sUGQozvPjkYRQXU8VQUNJDzkQUGUpV71M9oqiapKia+KmWTeMO76F+gfL8/bv/t1+9REkmyEmGEBtrkiKkiZA8TQwFANmBvmk4nOi8AAAAAElFTkSuQmCC");

},
478610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
896054(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751096-68c88dd89538a4129194039af3599556.png");

},
330716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831007-1f071201168d6b44ad7f99ddf3c8a184.png");

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