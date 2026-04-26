"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["856882"], {
566759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_device_file_explorer_ide_device_file_explorer_md_312_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-device-file-explorer-ide-device-file-explorer-md-312.json
var site_docs_ide_debug_app_ide_device_file_explorer_ide_device_file_explorer_md_312_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-device-file-explorer/ide-device-file-explorer","title":"访问设备文件","description":"开发者可以使用Device File Browser，在DevEco Studio上如PC端操作一样，对设备文件进行新建、删除、上传、下载等操作，而无需使用命令行，提升开发效率，当前支持普通文件视图与应用沙箱视图两种模式。","source":"@site/docs/ide-debug-app/ide-device-file-explorer/ide-device-file-explorer.md","sourceDirName":"ide-debug-app/ide-device-file-explorer","slug":"/ide-debug-app/ide-device-file-explorer/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-device-file-explorer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"访问设备文件","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-device-file-explorer","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"布局分析","permalink":"/harmonyos-docs-site/ide-debug-app/ide-arkui-inspector/"},"next":{"title":"数据库调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-database-inspector/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-device-file-explorer/ide-device-file-explorer.md


const frontMatter = {
	title: '访问设备文件',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-device-file-explorer',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '访问设备文件';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}, {
  "value": "可访问目录",
  "id": "可访问目录",
  "level": 2
}, {
  "value": "应用沙箱目录",
  "id": "应用沙箱目录",
  "level": 3
}, {
  "value": "一般暂存区目录",
  "id": "一般暂存区目录",
  "level": 3
}, {
  "value": "日志目录",
  "id": "日志目录",
  "level": 3
}, {
  "value": "公共目录",
  "id": "公共目录",
  "level": 3
}, {
  "value": "媒体库目录",
  "id": "媒体库目录",
  "level": 3
}, {
  "value": "特殊目录",
  "id": "特殊目录",
  "level": 2
}, {
  "value": "faultlog目录",
  "id": "faultlog目录",
  "level": 3
}, {
  "value": "图库目录",
  "id": "图库目录",
  "level": 3
}, {
  "value": "命令行方式访问应用沙箱",
  "id": "命令行方式访问应用沙箱",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
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
        id: "访问设备文件",
        children: "访问设备文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用Device File Browser，在DevEco Studio上如PC端操作一样，对设备文件进行新建、删除、上传、下载等操作，而无需使用命令行，提升开发效率，当前支持普通文件视图与应用沙箱视图两种模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看设备上的文件列表及基本信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在设备上搜索文件及文件夹。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在设备上新建、删除文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从PC本地上传文件到设备上，从设备上下载文件到PC本地。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已通过USB或Wi-Fi连接设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持访问无权限目录，新建、删除、上传、下载文件受设备权限约束。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持文件拖拽。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持文件修改。如需对文件进行修改，需下载至PC，在本地修改后再上传至设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持上传文件或文件夹的快捷方式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用沙箱视图不支持模拟器设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需为debug应用才可使用沙箱视图查看文件结构、对应用沙箱内的文件/文件夹进行新建、删除、上传或下载操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在菜单栏单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "View > Tool Windows > Device File Browser"
            })
          }), "，打开Device File Browser。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(932700)/* ["default"] */.A) + "",
            width: "431",
            height: "321"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从下拉列表中选择设备（设备需已连接）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择设备后，显示文件/文件夹列表，可进行以下操作："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "右键单击目录或文件，进行新建/删除操作。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["右键单击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Save As"
                })
              }), "将选定的文件或目录下载到PC上，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Upload"
                })
              }), "将PC上的文件上传到设备指定目录。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果需要查看数据库文件，可以通过该方式将数据库文件（路径举例：data > app > el2 > 100 > database >项目名称 > entry > rdb > 数据库文件）下载到PC上，再通过其他工具进行可视化查看。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(328870)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["从DevEco Studio 6.0.0 Beta2版本开始，支持使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Ctrl或Shift+鼠标左键"
                })
              }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Command或Shift+鼠标左键"
                })
              }), "），选中多个文件或目录下载到本地计算机。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "焦点在Device File Browser框中，输入字母可以快速进行搜索。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "双击某个文件可在DevEco Studio中将其打开。打开文件会默认下载文件到临时目录（%USER%\\AppData\\Local\\Huawei\\DevEcoStudio{版本号}\\device-file-browser\\{设备名称}\\{设备上的文件路径}），关闭文件后，临时文件将被删除。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果通过命令行方式上传文件到设备后，需要右键对应文件夹，选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Synchronize"
                })
              }), "后才可以在Device File Browser窗口中显示该文件。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可访问目录",
      children: "可访问目录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Device File Browser可访问的文件夹有五种类型：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-sandbox-directory",
        children: "应用沙箱目录"
      }), "、一般暂存区目录、日志目录、设备公共目录、媒体库目录。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(85413)/* ["default"] */.A) + "",
        width: "790",
        height: "687"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用沙箱目录",
      children: "应用沙箱目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此目录用于存放应用自身相关的数据、资源文件等，有两种访问方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "普通文件视图"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通文件视图将按照设备的真实物理路径显示当前设备上的文件结构。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(878506)/* ["default"] */.A) + "",
            width: "180",
            height: "105"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用沙箱在设备上的物理路径位于/data/app/{el1，el2}/100/{base，database}/{packageName}路径下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在普通文件视图下，el1目录下的文件仅具备查看文件目录结构的权限，无法执行新建、删除、上传或下载操作；与el1相比，el2目录下的文件允许下载，但其他操作仍无权限执行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用沙箱视图"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用沙箱视图会展示所有debug类型的应用，按照应用的沙箱文件路径显示应用的沙箱文件结构。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从DevEco Studio 6.1.0 Beta1版本开始，点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(943847)/* ["default"] */.A) + "",
            width: "16",
            height: "16"
          }), "即可过滤出当前工程对应的沙箱目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(37192)/* ["default"] */.A) + "",
            width: "146",
            height: "97"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API 15以下的版本，当需要以沙箱视图查看应用的文件结构时，需在module.json5文件内配置ohos.permission.INTERNET开启网络权限，卸载并重新安装应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(243124)/* ["default"] */.A) + "",
            width: "965",
            height: "493"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应于物理路径，沙箱路径为/data/storage/{el1，el2}/{base，database}。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用沙箱视图下，el1和el2目录下的文件均支持新建、删除、上传、下载操作。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从DevEco Studio 6.0.1 Release版本开始，新增云空间目录/data/storage/el2/cloud，具体使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloud-sync-file-overview",
            children: "端云文件协同"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一般暂存区目录",
      children: "一般暂存区目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般暂存区目录位于/data/local/tmp/路径下，支持新建、删除、上传、下载操作，在DevEco Studio进行调试、测试等操作时，将在此目录下生成相关的文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258439)/* ["default"] */.A) + "",
        width: "628",
        height: "150"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志目录",
      children: "日志目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用运行时的日志通过HiLog工具实时输出，此工具的输出缓存区一般为256K，超出大小的历史日志将会以压缩包的形式保存在/data/log/hilog/路径下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要查看历史日志时，需要将此目录下的压缩包文件和数据字典压缩包文件hilog_dict.XXX.zip下载到本地计算机，然后使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hilog-tool",
        children: "hilogtool工具"
      }), "解析出对应的日志原文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(427544)/* ["default"] */.A) + "",
        width: "618",
        height: "264"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "公共目录",
      children: "公共目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户的桌面、文档、下载等公共目录位于/storage/media/100/local/files/Docs路径下，支持删除、上传、下载操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(572609)/* ["default"] */.A) + "",
        width: "628",
        height: "361"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体库目录",
      children: "媒体库目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 22开始，新增媒体库目录/mnt/data/100/media_fuse/Photo，原有的/storage/media/100/local/files/Photo目录变为一个链接，点击后跳转到/mnt/data/100/media_fuse/Photo，支持通过该目录上传、下载、删除图片、视频文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(461701)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wearable设备不支持媒体库目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711027)/* ["default"] */.A) + "",
        width: "623",
        height: "286"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "特殊目录",
      children: "特殊目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备上存在两个特殊的目录：faultlog目录和图库目录，这两个目录有下载权限，但没有查看权限，Device File Browser中无法显示这两个目录，但其下的文件可以通过hdc命令查看并导出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "faultlog目录",
      children: "faultlog目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用崩溃时，会在/data/log/faultlog/faultlogger路径下生成相关的崩溃日志，可通过以下方式查询并下载日志。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行命令，查询此路径下的崩溃日志文件列表。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设备版本低于5.1.0.54时，执行以下命令。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell hidumper -s 1201 -a \"-p Faultlogger\"\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(233436)/* ["default"] */.A) + "",
                width: "618",
                height: "281"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设备版本为5.1.0.54及以上时，崩溃日志文件名时间戳新增了毫秒级信息，执行以下命令。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell hidumper -s 1201 -a \"-p Faultlogger %s -LogSuffixWithMs\"\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(750491)/* ["default"] */.A) + "",
                width: "620",
                height: "249"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行命令，查看指定的崩溃日志文件的内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell hidumper -s 1201 -a \"-p Faultlogger -f {filename}\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(45397)/* ["default"] */.A) + "",
            width: "988",
            height: "384"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行命令，将文件保存到本地计算机指定的路径下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv /data/log/faultlog/faultlogger/{filename} {path}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(291043)/* ["default"] */.A) + "",
            width: "866",
            height: "50"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图库目录",
      children: "图库目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图库目录中保存了录屏工具、照相机等系统应用生成的图片、视频文件，可通过以下方式将文件下载到本地计算机。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在图库中查看文件名及后缀，例如a.mp4。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(764694)/* ["default"] */.A) + "",
            width: "454",
            height: "869"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询文件路径，记录为{FilePath}。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell mediatool query a.mp4 -u\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果查询的结果中包含uri字段，则返回值第三行对应的文件路径不允许直接下载。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(965706)/* ["default"] */.A) + "",
                width: "487",
                height: "74"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "需要再执行如下命令，指定该uri，将文件复制到有下载权限的路径中（如/data/local/tmp）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell mediatool recv file://media/Photo/2/VID_1744944984_000/a.mp4 /data/local/tmp\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "命令返回值第二行即为文件路径{FilePath}。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(258274)/* ["default"] */.A) + "",
                width: "610",
                height: "46"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果查询结果不包含uri字段，则返回值第二行即为文件路径{FilePath}。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(729332)/* ["default"] */.A) + "",
                width: "581",
                height: "53"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定上一个步骤中获取到的文件路径{FilePath}，下载文件到本地。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv {FilePath} .\\\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行方式访问应用沙箱",
      children: "命令行方式访问应用沙箱"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过命令行的方式访问debug应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-sandbox-directory#%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1%E8%B7%AF%E5%BE%84%E5%92%8C%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E8%B7%AF%E5%BE%84%E7%9A%84%E5%AF%B9%E5%BA%94%E5%85%B3%E7%B3%BB",
        children: "沙箱目录"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API 15开始，支持通过hdc工具访问debug应用的沙箱目录，推荐开发者使用此种方式。更多关于命令行工具hdc的说明请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc",
          children: "hdc工具使用指导"
        }), "。\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在设备侧启动应用。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "$ hdc shell aa start -a {abilityName} -b {bundleName}\nstart ability successfully.\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "abilityName：应用的ability名称。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "bundleName：调试应用包名。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过命令访问应用沙箱目录，创建目录文件，删除指定目录下的文件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "$ hdc shell -b {bundleName} ls -lZ -A \"./data/storage/el2/base\"          // 查看应用沙箱下/el2/base目录文件（返回文件全部信息）\n$ hdc shell -b {bundleName} ls -A \"./data/storage/el2/base\"          // 查看应用沙箱下/el2/base目录文件（仅返回文件名）\n$ hdc shell -b {bundleName} mkdir -p \"./data/storage/el2/base/test\"     // 在应用沙箱下/el2/base目录下创建test目录\n$ hdc shell -b {bundleName} rm -r \"./data/storage/el2/base/test.txt\"  // 在应用沙箱下/el2/base目录下删除test.txt文件\n$ hdc shell -b {bundleName} rm -r \"./data/storage/el2/base/test\"      // 在应用沙箱下/el2/base目录下删除test目录\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过命令往应用沙箱目录中发送文件，从沙箱目录中下载文件到本地计算机。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "$ hdc file send -b {bundleName} \"D:\\test.txt\" \"./data/storage/el2/base\"    // 发送文件到设备沙箱目录/el2/base\n$ hdc file recv -b {bundleName} \"./data/storage/el2/base/test.txt\" D:\\  // 从设备沙箱目录/el2/base下载文件到本地计算机\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API 15以下的版本，通过以下方式访问debug应用的沙箱目录。\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在工程主模块下的module.json5文件下增加网络权限。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "\"requestPermissions\": [\n  {\"name\":  \"ohos.permission.INTERNET\"}\n]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在设备侧(hdc shell)启动应用的bftpd服务，并查询端口号是否启动成功。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "$ aa process -b {bundleName} -a {abilityName} -p \"/system/bin/bftpd -D -p {port}\"  -S\nstart native process successfully.\n$ ps -ef | grep bftpd\n20020143     12254   613 0 11:52:53 ?     00:00:00 bftpd -D -p 9021   // 对应端口号的bftpd服务启动成功\nshell        13035 11901 10 11:54:44 ?    00:00:00 grep bftpd\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "bundleName：调试应用包名。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "abilityName：应用的ability名称。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "port：可用端口号。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过命令访问应用沙箱目录，创建目录文件，删除指定目录下的文件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "$ ftpget -p {port} -P guest -u anonymous localhost -l /data/storage/el2/base           // 查看应用沙箱下/el2/base目录文件（返回文件全部信息）\n$ ftpget -p {port} -P guest -u anonymous localhost -L /data/storage/el2/base           // 查看应用沙箱下/el2/base目录文件（仅返回文件名）\n$ ftpget -p {port} -P guest -u anonymous localhost -M /data/storage/el2/base/test      // 在应用沙箱下/el2/base目录下创建test目录\n$ ftpget -p {port} -P guest -u anonymous localhost -d /data/storage/el2/base/test.txt  // 在应用沙箱下/el2/base目录下删除test.txt文件\n$ ftpget -p {port} -P guest -u anonymous localhost -D /data/storage/el2/base/test      // 在应用沙箱下/el2/base目录下删除test目录（仅支持删除空目录）\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过命令往应用沙箱目录中发送文件，从沙箱目录中下载文件到本地。(/data/local/tmp/作为中转目录)"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "$ hdc file send test.txt /data/local/tmp/test.txt    // 先发送文件到设备data/local/tmp目录\n$ ftpget -p {port} -P guest -u anonymous localhost -s /data/local/tmp/test.txt /data/storage/el2/base/test.txt  // 再推送到应用沙箱目录\n$ ftpget -p {port} -P guest -u anonymous localhost -g /data/local/tmp/test.txt /data/storage/el2/base/test.txt  // 先下载到设备的data/local/tmp目录\n$ hdc file recv /data/local/tmp/test.txt test.txt  // 再从设备中获取\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "沙箱视图下，打开沙箱文件夹时报错：[Fail][E003001] Invalid bundle name。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756207)/* ["default"] */.A) + "",
        width: "622",
        height: "89"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能是以下原因："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用不是debug应用，无法查看沙箱文件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用安装后，未运行过或重启了设备，导致应用沙箱暂未挂载。此场景下先手动运行一遍应用，然后在报错目录右键点击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Synchronize"
          })
        }), "即可打开目录。"]
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
45397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913164-f31baebb46b0c1deddf1183d0b8d3f20.png");

},
427544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833097-1efcbd19017f7504131efc886229aaf0.png");

},
258274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833071-d21bcdf148c5dac0c7dcc90824bab066.png");

},
85413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913138-559ac8b3406a1cce2820fe322a2e3afd.png");

},
233436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913152-42e3e953d29160594de00e36e983594c.png");

},
756207(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm4AAABZCAIAAAAIKj94AAAAAXNSR0IArs4c6QAAEvVJREFUeAHtnM9uHMUWh1ss7pItDxB4A4/8DPgVLDQLbyMBT+DZ2JLlFYidd8YgxTcIJ7DIAotFYhHFq+AgJRJClmDGwfYMCkI2kbhwVXXqnDpVXT3TMzX/8PwshGrK9efU1z31VVW3U3R61/gPBEAABEAABEBgZALFyDVREQRAAARAAARAoNO7hkqxKQcBEAABEACBLAJQaRY+LMdAAARAAARAACqFSkEABEAABEAgiwBUmoUPazEQAAEQAAEQgEqhUhAAARAAARDIIgCVZuHDWgwEQAAEQAAEhlPpy+dfvnz+JaiBAAiAAAiAAAgIgSFUenb56vKLdy6/eOfs8pXUn06i3T1YLYqiWNvrXo2rR91m+3hradztjytOtAMCIAACIDDnBIZQ6a/Hm93dortb/Hq8WXNUrCujKf5Zbh0PrUNuZ0SVcnUOoSiWNk4407Q5lEq5om+taB7UBIJiIAACIAACN49AbZWenXY/f5NU2v38zc7ZaR0WCeuQgKbrnnIYSxsnOv5clRbF6v7Q6wMdANIgAAIgAAL/XgJ1VXrx7XvdXVe4u1tcfPtenTGzw/xOdK9JLnU5XMBkkt6oAJnJGa6x9fAyOODVtWhHqHMiTXZ61/xbH4bKTOxKubyPSg+Wf+u2yDZg07KLtnlgc2yz7lyahqxyGluP7Em1Hqyvtb9GFQo2NPfo4yn3pSNEGgRAAARAYJoEaqn07KeH3U/f0CrtfvrG2U8PBwbKDvAOa3dPWg2jhNX9K/6tiMNmWpGQDtuc5pLKRlKpecC/lax4j8gFfBh9VMqFB7YmBVyzLP5leuz6qdO/FHPPer16WbT2tNliaWw9dE9tXa1KSlSs4foa4yPkgdcUBUAABEBg5gTa3ae76+sfPfhFImkf32nZn/X1T77+MXFMmKhiG2m1WlVVpPGBiToqvbq836CjXWqO0pf3G51eIlzdJWspcBhtxYw/aPtlD3vJQ/4Rpt23laxjVapqUV/JdlJheKspRdk21WtHI7RWFGaATqU2bVRNcYYb0KWNk0cby24lYTpdXmoUBa8GhIneWCfjifrSg0UaBEAABG4wgXb3l68/Xl9fv7P7mVep0eTH3/xgT/vax3fW1+8cqXdUK6qYdkjG5SrDAhys0pdPd9wjUnXASzkvn+7076+sUr0rJal4vxUkFdq2ru3R/tWqiNsx2hMVSdfJduS3agPqu+qj0tqtmWC8MpsHTm/8GJjaESnKR79o2F8rGlutZlE0th5ZrRof81bVxGrHnown6ksPFmkQAAEQWAQCR0qlerx295nemOoq7R+/+YiNS67dHf6VWOl3kErPz7t33hKVxok7b3XOz6WtcoLFwEegfLpLf9YidokqUv7qhvkDFffQVP0xjFMLG6vTu65qR5qNwqB8zox3pbVbcyqVeCK96d1kp3dNe3GrcHeW22raF4nN5nW5tbGm/9TH1bVri2Q8UV8yUiRAAARAYEEIaC/qIcsW08oycKquYop99lQq6l9JZv3EAJWeH32o9Unt6pzzow/7dMa68ttBSoWClN/yPs8ety41lsUu3I7Vnt63uY0svZQUtyOBcfXgnJkzY5Vy/sDWpIBJmLNZOiVmx5fa8X8Xa+1ojnaNWWWwdNBNx8LSNp/9SgYxifqSkSIBAiAAAgtCICk/q8912l/2V+kPDz6ZkkrPfv7+cu8/Wpx0hXTO5d5/zn7+vurKJXTCzw6pilOCEwWrVDavsZa4AEmLapGBdE7pX3LgMGqp1JzZ1mrN2829JEW1OObSwbILXrVvLc6DdcsLrVJmVY4HKq265ZAPAiCwIATKKjV2rHjniJjoKtPblV48eFdbsyp98eDdBblyGCYIgAAIgMCcENBe7PSujz5b17vMZJC6ilGpvKlkX2Wa5LPSHv61dxAAARAAARCYOwKBF9U7RCLR/ge8+lUjrVWpPlRiwLPSodpCYRAAARAAARCYDoFApfxHpfSnpa1Wa/f4qr9KzbM2I+B1+3elwR/PjBA/VDp3S60RriKqgAAIgAAIzJAAVAqVggAIgAAIgEAWAag0C98MF0HoGgRAAARAYE4IQKVQKQiAAAiAAAhkEYBKs/DNyYIIYYAACIAACMyQAFQKlYIACIAACIBAFgGoNAvfDBdB6BoEQAAEQGBOCEClUCkIgAAIgAAIZBGASrPwzcmCCGGAAAiAAAjMkABUCpWCAAiAAAiAQBYBqDQL3wwXQegaBEAABEBgTghApVApCIAACIAACGQRgEqz8M3JgghhgAAIgAAIzJAAVAqVggAIgAAIgEAWAag0C98MF0HoGgRAAARAYE4IQKVQKQiAAAiAAAhkEYBKs/DNyYIIYYAACIAACMyQwNyptH28tVQst46v2t2D1WJtr3s1Qzrz1rUwEUpRhO39taKx9SiE1u6etBrF6v7YSEovEk8UBj6Ol8Ccc5bwqm7LOjRy6tZpH2VAYKIEJq7SvWZhfpoHNKHbD/Z/pRmfxinfKPl+uha4fGWD7F1bkfoxSnbNGjH3yfTOrl+907umwksbJ9RLFKq+cnvNQorp/KHSwkQoRdVFcjofKtU0/o1pue7zGbyEV3Vb1gk7p26d9lEGBCZKYBoqpf3QsBO6fD+NsdRma6/pNljJBimTpGVqWb9WZzqDGgU2D6wazQaudvWiKNZWQ0fqUPWVG69Kdcs6new9CUrXGjYtvehrNGwjKF+fwJxzHjm8sd+Z9ZGiJAiMl8CNU6k5H3aClC+qXfDGmZqjd8Pw1SNHSlO6/U7vOioW/bbmx4FzVrJ34VCzl4HFpJeB8QxsCgXqEJhzziOHN/Y7sw5MlAGBSRCYsUqt5NzBq9u8ssz091PmbnJSn22uKWn3lwSLBJbM1DTFc8mSyUypLnUpxxTms2gpo1Vqx7Xc2lijYS9tnNCEIse/jzaWqYUEHH5+HC4O5OzaNlnqnScsXyxCbbbjAfYgPDcuf0LuewmukSogYxEC5VG7Zk2/7ocv68Fqsdzad/mr+1cGqf2RZm1rrpY7QjDt+PP8sN+wpIqTDi34oH5Ap33aNJeMF3D+hGP4oVVeKb7uHGowojCwylFEt5ncqKnbjB6ul24Y99C9nO9ea5C7KBln1JG+iEVj6yHfgVFdAVt1C8nwkQCBGRKYtkrdHFCYQ1Tz3W66d2TsdGk2jvJttN8c3koqP0UHvNIgGdRMaiWVJjPNN5YnO5rEO73rZMlkplyzkVTK58ksAD+v8StCaTg8pYaU/CtFZh6vUKmfkuTcW09enHYTHB13S3hWP0JJepFr5KY5+2SafRC85VTRbOoGINXZUTiJ+mDsHWIKOGtKXxZIrFLqVAQsc7Tk+LtuUKdyuatG6hdtFHny3h7UCw0ncaVMxcqxh7G5GyCNrvQ9qrjNjEpTYVTlc3jhXSScLfnktSZnm1sluqWlbnyN/M0QX27hgAQITJ/AtFUq07EM1YjK/Yyi0qhB88UrqTSZKQHQltFtBIevPpJKtQlMWiZomVAovBiOTKkyZ6nJ0cxH4UdqRHwTfdR9SVoicdNfw4YXNiu92ML2qvHGkS9l/I5VstnqMQofbU2XNr2HPzLtUoPyf4mzKkfIhOElOg1aSPVuWygKdjyVT12+vkPjhRRVD8MbzHngKKSATZgGK+L0huPbwCzXJJ7K8CpuSyrvlqqOnh2OGq+/A6ObjctI8BySIymNIwECMyQwS5XaLw+/4yNfQkmwNiJDRLvShEp5WybffD2lSqaGLt/SZMlkplQfi0rlBPjRxjKJIQ2HmVTOO+E0REFGQ5aP0oghHGCX6f6kVV+ljF3I6IQQ1vNg9RglgITV9OXQXZTT5ZJRjkVh+grDS3QqjUct+HxzabxKRxwaa4Oa9VdKrnvq+oYx9ENHMlvaOJGDloo4x6/SgR3ZArxcUPdSxTVyd6aMHQkQmC2BmapUzQt2/W6/SMGc7hbOev4aoFI1GUktmZK0lc1Xl/evpnc5l+M/wexfXS7buFRq4mmsrVp16Th5LU+r+PRJGq0naJiVB7x6sHRaaFC7mdfzN7O2TMesUuuJci/WQBKYPmd2F04oha7iZpM3QBCADsalbVNxX3YidmGHnbqS7e5ByzxTMMKTXay6xImOrPW5U2aV7F2vhPzxBvuggm2iR3cFy1fKhF3JWcYeQk60b0ZU6zazB7mJMKryObzgyxuST19r72w7Cj/GQdcIKsW/LTNfBGaqUqs9Ou9Zaq7Rm7fhN8rNyDLl0ZwVzOn+tI0FYL7P9OMndNtsnGnnuDgzWTKZSVP22FRKNHj+crOqjc7DkSmV5ywnXRpEYV8X4hlcGcVOWE05F/VYhEDYBZM0IXHaH6v6XuzczdfIY/eeUzHomZ1VmrwBBqnU+cANmedr03us0rAkx2ltyrV1Jo80FYC9AbhAaaTq4bGTTfXl40aSvVggq6Ur1Z+zxFZHpfpxhuGTvgTpG4YK9wnPRsJIPSWTk+yIl4nm+W7d14788/jE5Zb7DQkQmDKB6ak0Z2BJleY0OLm6OtTJ9YKWbyQB56rx/btUSUrR4q9cpiqMqvxyC8gBgUUjMA2Vmh0Ab7ZG4GuW/IV/MdV9zGhwhBhqVolCrVkLxUCACEzBVXrjWIW9Koyq/Kp2kA8Ci0Ng4ipdHJQYKQhkEpi0q2ipF72pV465Koyq/HILyAGBRSMAlc7Xs+tFu/8wXhAAARC4AQSgUqgUBEAABEAABLIIQKVZ+G7AYgpDAAEQAAEQyCQAlUKlIAACIAACIJBFACrNwpe5kEF1EAABEACBG0AAKoVKQQAEQAAEQCCLAFSahe8GLKYwBBAAARAAgUwCUClUCgIgAAIgAAJZBKDSLHyZCxlUBwEQAAEQuAEEoFKoFARAAARAAASyCEClWfhuwGIKQwABEAABEMgkAJVCpSAAAiAAAiCQRWA2Km2/eLby/uH2i6vMhYCu3j56cmvz2ePuiG1KSO3u6e33n9yt106yU2lKhze19Gx7n9ow0REIgAAIzA+Byar07s79WzunerSP7x3e2nz23XOoNGsFpJFGaag0AoKPIAACIDBpApNVqdm0qR1eu3uxvXn/9tGIG8f+LJIbRKlSv+v8Xal0WjNRP7aqBvNbqGoZ+SAAAiAAAgMJTFil5rDUu9NumOqenQ4MPSoAlU5ojRJxxkcQAAEQAIGIwGRV2uld6zNec7prz3u1U+0u8P7bH3z19gdfrdy7oCqUoF+RIZKm1HXf/uAreVaq81fuXeiPVMYG4Dp17ZvHt0bztrDzva5IIXV61zpTdypkZXS25OH2vSd6dJ3e9eN7h5Rz6/0n/700qw33cfPZd5fnduNuMvkknIPhCKMY3j14HrRgDs+5il3KSF/0ALhOVDUfFcuQkQABEACBRSYwcZUqr/jTXZV5epvfP5JTSm/coycrm4eRX+VqkdJkK2acbV87cqqw7zRJm5KwHrrY3nEvKMkRdBiSONW9GyXVqzqVqEz77DwqrFYPpjX5rVSRxl1sm/flVFwXljQ1K2qXWqk1wX0p5kdq/TowKgkPCRAAARAAgf4EJq9Sfj4qJghkc+R2bLRzoo2plLy7c7j94vS2EeTF9mb8xm+0T5WP7WSbHIbg0FtDsxkN/GdVmmwnfE9YOpVmg9EZaWkZW5WSyTg/FmEYp0QVNBvGELcgAwmLibBLS410VHpESIMACIAACPQhMHGV0nnmrZ1T2Wv2twKLIZTo0bOV0h+6RBqTj5LQwxaRcO9uuyau8gmjOqdSOTGWpqLGo49ULGwqVqkrY5V5ywo1iG2yKhVrDo5KhowECIAACIBAfwLTUKlVy+GK2laGsvHvJd3dcQ/5Ht8z5ekQktJyUCnj0WetZCN1wBu3GehKbdeM4EmcspkTldrtozpAllNf17juVKJiVUvhWFrtF8+27TvMEpIkeBnhgyd09Ae4PlQVWLt7um0eBlcdnocHvOkDcOvXclQGiAtejw5pEAABEACBiMBUVEo7MLWtFJWyeII3gCRTPfxLz+lylmu2d/f8P9Fg24/bpBNd8y6PfbWHjpRXdp64t41KKpUwqKQ4tapTISujSx6l0ntV7lUg/qPbKDbpS7+jJKHqwOSpqm+h5mtH/lmyY3t3h99+8q+GpbHLSJEAARAAARDo9K6noVKABgEQAAEQAIEbTAAqndS/OnSDbxoMDQRAAARAQBOASqFSEAABEAABEMgiAJVm4dOrEqRBAARAAAQWkwBUCpWCAAiAAAiAQBYBqDQL32KuvzBqEAABEAABTQAqhUpBAARAAARAIIsAVJqFT69KkAYBEAABEFhMAlApVAoCIAACIAACWQSg0ix8i7n+wqhBAARAAAQ0AagUKgUBEAABEACBLAJQaRY+vSpBGgRAAARAYAEJXLx6XVy8er2AI8eQQQAEQAAEQCCfwMWr13/97+/i73/++ePPvy5+f332G/ZnIAACIAACIAACgwmc/XZ98fvrP/786+9/zE9h/4//gQAIgAAIgAAIjEjg/xB2m8FKj0K3AAAAAElFTkSuQmCC");

},
965706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913182-227ba4eee781a1d83efa1ca5e6370f34.png");

},
461701(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
932700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913150-b696af224dc89fbf68b2ec00d6946fef.png");

},
291043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913142-4beedac4c66215a98244891206e366c6.png");

},
37192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAABhCAIAAACyH29uAAAQAElEQVR4AexdC1xU1bpfawSUQc1HKIWKPNXSHmZy9Z7yGR1Qi7y9LMtTENbvqiG3LnZuda081/hViMI9RzjQuVJqndvPMAUUDfTcLh7U8hY+GR6igg98pgy+5/6/tfae2TMjMOCgMzqr/977W9/61re+/f33WmvPMP7SHag/7oHbZUDHPMUNM+ChzQ1JY8xDm4c2t8yAWwbtmW0e2twyA24ZtPNnm6l66VN3R2dXm5ySD7M3k+n75LuTNpmc49Ypsd1EJ7a0mUzV2U/cOeBuM25opmxHf2JpDWsPT5veNsd/5wA4ueXItqVNPkHTvmyQn0Brv2QvB/onF7chdzzk9W/rC+NDuHTV1jPszaMf+O71kJA32uftoflb5S3kDnp3zL8Ww+2thGvTZr5DPj619ocFFdP/xX1Xp6Dwh823c8sIrdBG9xkcNWlEbmEJiWKDUdafp7Kq5ZoGgdoYq8mKxopUXf2np9RNyEQbksUeZvYaKFuA2NtsF2rHnSDC79dumxY9HkNAxvqfXIw9Ulk5tX4GqDFjgZV3JFvlSmMqTsKt1ZhMdI/KDqJEJc3ktqJ2pI1GOxBGdy4coE0dEPHNC/w0/AdaP2vrtk5aO3JeSXBc4ss/ri3C/ZhM1ZSgxJnBTFkehf1zFepi9W1CiNBYeZBJUUdQriun+2uzoGjVi4NOfpw/Ek6CAkd+yBa8Pk7tzNjK6fnRdQ1Yfgey4nmBlvDEdkCLCmbnj4Ya6lCSXzHi4YpKkjcX5j40OWpgTWbS/CG56E5f5KaO5byFYMwDBXMlIeTTSYeDtD0cPpCxkvyVbNuHv6GcUjq2M7qlcZOmbV/9PW6tpih/+8vRmgSR/YgFqa8FW0K9pgdLsyKZ9zYwrai0F8ecmPe22sSKMYHEh/Qx7cvPkG6S4Ucb3rhZ74tFZeDEJx9ano9NYXPhnklpb0XQQ1ldue/hSRODWXB4BMt9OTDG8p4MJ/Y5Ie/MMpCoOvfkAG0lGR+yJyfI5I9YsFl51ujvBkgr5xOiX9yWv7Fm/8bVbP4sJSMtxGjnoQXbZpva5AQPFtsj5kyz/tQG8XTSpgD74sJ9uOvgcLb6+5KifJEB3GxK/fHauv9kiXh21Q85bQpGHek6r63QhjU9aPqe99Nm0kzH/W9/d2mJMuKmt5XFfcwbC9jajKVrGT2PSqO4aOyxmGRnVTONBhZmD5DbgLY6oQkxJEw+dtphhJ+kP2OhEFr16eQ8ZMJklp/46cpB4cFSTlvNJkchA9hos4tNMIhbvfX9EdsM+xkTTuxzIjx24OnatJl3l6C0iM11BfJtHs/ax/RWiQeN3jIKo9XVBo8ny1056C1pZg5Wax8UmB/2Gm58wrU9mPs4IGjdYveyhGHdV+5tMAiaznLr1FA1NuSn7usIsQUqZqvF08kY1km2XXmREbLyROKzTVgh3T7tEYO+ThnPyck1c6IZqCNEW9rwKMV/Rwug/NCDrRvJNg+MuL+l3ZgMELTUK10+maBU6XMbbdeoauztNcfNHmApIV1p9cID9UWCUupJgKVQUgwIUmuMJomxnyitMDhg7sVDcGtae+HTbKk4hwfpX1oK2fIx1OLZ6n4VJ0oXu4Hg07mwpc253m8Fby55Dx7aXJKW1oLy0NZahlyy3UObS9LSWlAe2lrLkEu2e2hzSVpaC8pDW2sZcsl23amGOg/cLgO6YE9xwww4f5Hs3r2b09FBC9XFK+ynepa/j6/4mS93G1Cozqetg1LsdLfgbJ2B72ngp8+36/cqTg+oLQ47irZffz3rFLTlXtpmu+sYP3uBXb16pfHMyTMnjpw+ftiN0FG0tS2FN8P60Bka1Xj2TNcuuoSJQfNiw90Ity9txktE2+VLF5+O7NvTz5sq7nPcvrRdvipZMvXu6macIe7blzbcfMtobGxMTU19/vnnn9AUVKFEU8t9O7rVlraz56/8dduxrM31wNfbGs40XZYRnL909feran6zcEdq0cGrDv/I98iRIzU1NRcvXrxw4QIEG5w8eRLO6+vrDx06BMFxNBqbNhb/b8afcucvWAxAQBVKxz04YpmZmVlaWjp+/Hhvb2U6QkAVSjS16qGitp6wn86G2sMW7D9sEKjYf1hFfQXMaur3Eer2VdftVXBobxVhT9UhCVQhYGhb2t5caVi389ThMxeBDbtO/vOXBhiBs6SvqxrOXvzjS+H/Yzjzh/wDDjJXUlJSXFxcLQqE/Pz8lStXQpDA/ZtMpg2igFoM5Ah27qpIW/L5+fMXYp+IGhU5HICAKpRocsSDgzZbt26NiopKSEhYvHhxoigQUIUSTQ46YRz/aW1NjD5u2JyFDnrMBxNdqI7UCJlO0Amost0/S9xZZ/yPqcH//sRAYOE/Be89Yrx4+WryN9WXr5rSXwi/r1/XzJcifqo9m7bBofkxbdq0uLi4wYMHDxkyBAJuuF+/fhAkJk+ezDmfMWPGK6+84uPjo7255mQQU7Bu06u/e3ZyzPh+gQFeXp0ACKhCiSYYNNe3rXqj0ditWzf0QsyYZAAEVKFEE4SWwRkRhjOjYuaJKlaHbGFgidREDGkEgaCKZCIRogXMjjZMI86pPw6djqTj5y6XVp1JeTqkizdNzT7dfcDo6v87AQNnoxV/jY3G1Ws2vPTiU3cF+NubQokmGMDMvtVVNESLkn8wRaBDcoazaIaG2KIq6vbAvRATuLSAXl29BgfoP1l38MpVOGPGi1eXbKx7JPyOFrp0UNOWsh333TcE9Jj933tPOGCuogkGMDNrXEsAAwplkCiZCI8umFqSKtFKNVRlGyr2YHazLcTfd/HGOryPAIuKDvXr2bmLl27JC+FVDU3v5e0/0Xhp1nKD3kf33pQguL3B2Luv6sH779EOGtDXH9BqYAAzreamyRwjgxQJyABknMWiZ76CFSFLragJM5JIwGEDmNvOtkXPh/bp5o33EQAfaLCfwain3mvpSxEHT55/PPWXHnqvz54L7exl2xFmjgAvjTlqWbduHRaC5cuX5+bmXrokPv226OL4idO7dhu+LykFjhxt0NqiCiUAA5hpm1xDlpm3iaU5JeYammyMraq22Q/s0fn1sXcnjCFA6N+rszQHc588E/qXVwf/26QB7eYMrnr37o29XWL48OGc80cffXTMmDFeXl5ovbVgm3qlbn1RbpnmliLaXGjSqirIAGq2tP35b/WPpOyYsqQceOTjHX8sqYfR3sPGiZ/9PHlJ+Suf73180S/PZe7Gxzvo2wFfX1/zn7f69OkDD/379w8KCgJ/kFvGnb17YCebMG40ENDX6q0EVSgBGMCsZT83q1VmnN4vKQKq0UEyY1wR5UWtMVmglJBVAzPY0ras9GjO7wZvf+8h4Iv4IblbjuBNJG/H8XGDe0ADlL7zoE8n/oNBfBEr3dyo8+BBoTt+3q0dDWsjoNXAAGZazc2UkWzt8JxxRhAHk8XMkCJwDhvGuCi4MKVAq6LSsNaWNnyy7ttd+VKgT3fvy1dM+MQmlD6yv4+XrpefNzSyeiPPoyIf/OWXPYePWHY17GSAOQY0wQBmZs1NFDjjNDpOBDqUKqMGzhnnXBE5ZMZwgsAYXSFwxhgOrhTGuYq8T/fa0sY6svTs2fPo0aOOfyFiE4ufn/7JKY99sfxb0GPThCqUaIIBzFB1Impra/HlDgBBuj087LB/vn+vv/T6IP+Dc+fOSaXtGWlWE82ZlCj1UqKzooQo2jkVqtDVohE1q1NWVpYtbX6dO+2sa8RrJFB+qLGzl867E8cbf1XDeWiAAyfOHzlzERrW9uLv73/PPffgKyL5Lrl+/Xq8Sa5YseKLL7645MCbJAYcem9EzG/Hfv5ff11bUHyo7sjly1cACKhCiSYYwMwp0Ov1Z8+etXcFZfmw8uOBx09NP7U0cOnmzZvtbRQNJZ8x5YwLyZwzAkSuFihUUWcWzJKq4dAIIGm2tCVO7PeH/AN4HwE++G7/m4/1g+W0f+gLtqABns3cHXCHz5hBPVi7yqRJk/BtlnyTfOCBBxDSI6J4OfwmCWIS57zapUvnvO+KtpT9BEBAFUo0tSuoa3caOXJkUVERHm18dyotIKAKZadTndi9jHkzr3u9jh07Jlttzrg1SZB6VsnBFaBm5VBrDJZM0V37Ai4ADKTDocVTw+8sfut+vHoAJW8/8OwIemHr37Pz8teGQAP8/ffDF08Lk190aTs6LuMFUr5M9u3bF73wJjlw4ECECdlB+Ol9J47/x1lvvDz/3TcBCKhC6WB3B81mzpw5evRofOuN5dEMVKGcGzC3766+gZcC5+2ah9tp1iFnTAHuj3NR4RxXjsI4CbCQV24paBEVUCSudNLRZCOBc8bsviWBygOZAT8/v6SkpK+++uo7TUEVynmPzcupy/noy48G1g3Eh05pb3PmKMi/AtHIqcLkmeEqQFWYclwZty62daWVsduYNvV7Hn7iXOtf0CBTWnTt2hWrPf5wgTNkbZNZDgkMCOnXPPoHhNhgQECogrtCBxDCgu6yQGikHkPYLpJQOQXO+qmkU4K5phO9+Jjj5e3zTdnRU41tZu6aPm+YsqNou2E30O6B+om/Yei73XHu/NWsjbUf5xncCM6n7Vcn/UJS66fd3LTQ8d4+pm6dmU7Xye+OXnf0Duhx511uBOfT1kKmXKrJpxP7bbhpiL+pRxfGXSoyB4K5fWlDcsDc8LvZpEGmF+43vegWUIO8rWkDc24KD21uSZyHNg9tbpkBtwzaM9vck7ZuHVPwRxkP2poBx6nowNk22VPakoE2zfoOpK1NcXiM25QBD21tSperGLsMba6SEPeIw0Obe/BkE6WHNpuEuEfVQ5t78GQTpW7RaM756EX0j0bVpsKZNgq1wXN1lQzQbEtIGJY0w4o4V4nOE0czGSDaWOxbqcyNiTOtn+U7dkmlCaVyyVjfWeuVf9PSzC23X20i9zRS+104qaegjYXPXQbiImYW2nk1iEUU6yjnaqtYQwsVPSmhEAaapdbekZ1nj+I6MiBpY4K4UVkxxILGm2HRp2wZHmKgIEHTuiXpI6EnJed5sWg3VaSypE8LqTNo/Iiut9zBw+Zsato0J+zm/4ZBpe3axIXPzZzL5LyKydKwMCp12dxw1KNjE9io1LeiIbLwwcNY+V682hTmZbEtpHHvw6Wjt9BmIS5PjViskDPEvMJkGqWqW7+OSm3dhjHaKXxlwX5EG5LYPKRG2aJMcuNaMktqsbFIz0Ivdb762BypVM9FirWv4gR6rb1Q03AiAGVo7I+whqWESYRiHo4sxy4xGOTWSX21DqUZPEhBNsEvXMnwITgXWtpU4rLUiVW5d4s6rwxr/9vRGRQdm7AlqdUokZb45KF5RmMTlYzH6f+FVpmexrKFxpgXlxM7e73yT2PLkiumwMpYnsKS48W7x/rZ+liWJ/s25cVZjZYTu2aKtRPkEfY7U8rhBDDmsVg9Oceah3EWplchubFoTo8yO+I8bPY7cWWrCippA6gs1VHKgwAAA/lJREFUWFUW985s8+poMiGAhRHlFIDRWD511TCQFBoRWVZRRR6K1uyMjNy5j+SiNTmRU2NI6dTDmjaFOHWEaHrDjBCvGzP2DnN4tkVnYp9TfTR7DR00lOXE6seBBmmDTM3JmMPSx2ESWU+gyJREkdDQmKmRwpaSoehQj5pixVtcXjoeAuhZVGJKZM6aIsaEffbsUFLiMOsZi0rPG5o8TA/SssGK9aYFv+ANya8i1qaIENCbAIesDP0oVP2w5DIGkii6nDV41MDa1Ox3hhLllft2grVQ6uLUQze31JQp9ibVbTg0plKxdeFFpZQeNhylmZmqYXSm2sxYM3L4XNVbs1fOH89oajIas1m83le+v9NK5BvPspuamjCxJEHN9r/ehsiI1pKJCKfQfKsCaywlUXkUzONGppSLOd0kyqY5YYx4A33EWkxoaARbVVBUsIpNjWltILNLxwWd46bOtcQiuWS9CTNsdkl5ilxdqirKIlPknECmyloYj+ZBchqmEWPYhNIXWu1tYn5R56r0+OSyOJolwj4+HROH9KwoLVnNZtFsTLRysfqmVyprsrARp6jEFLYqLc0+98KhDACG62dhjaR7iZnKVsUvzBk6KIyHkbyQeoZx60mMDtcN3XV7aKcDvEwPWoN55qvHIjM0D5sbrWkMCw8p4yuGtjDbMA/SsSnFkqVeH8+mWi+SbA3WLmAY7Z20YJK9kRZDKAHaFktoScRLBEjDgxI6Oxvb5rDZ4kHQ3hAmEMvJGfrOnDCr1JPD8pSdIgA4XDOFRkE/Mi+TTwrNPVamPh1ocypuGm24C1olxQrTlPE4qph5+FgkFZsyMjZBy1FghRWIsiYMVBlqaYoPUnMycAqDLZ4FdMvA6ivbMswrGxJt1jYJzxiRfJA/9AyjoTMoDOjNECOSudRI99KnkOUo5E5joFSFAXmXTc4930zanHsnt5U3D21uQ7c2UA9t2my4jayr6JjiNglwpUAdp0IX0THFlbLhNrE4ToVnkXQbUrWBemjTZsNtZA9tbkOVNtDrou3bos1mrP/b3/cfOqx17ZE7LgMW2k6fPr1ixYp2//8kjOcv7Nhdsa/mQMfF6vFszoCFNm9vbzC3bNmydjMHp7sNNXL+QV7rKW3JADLmOCy0+fn5zZgxAz2vkzl4ADp199fi6RaK34ZnUg/e36zB/QdTn9ng12zzrdSAvDkIC23o4Fzm4NCDDsqAFW0YA8zh+W1oaCgoKEC1w1A4E1+7S2h/XGSQvzeiBvEjMphFJG1hWTHqL6dtDTosQNd2bEsbNrZvvvnG398/Jsb5v4BQUwEyYlgB/mZOKEhQ1cz+933463lF6iiWAGP6g7u9gbnv7SX8PwAAAP//2rB7YwAAAAZJREFUAwAyTTtvdb3WJgAAAABJRU5ErkJggg==");

},
328870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
764694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753101-3ff896d4c739bf13a5f5bc82e8747fc6.png");

},
258439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913140-6be10643ec04ad50a5625a16ceb6149e.png");

},
878506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
711027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753182-54f4491face4d988389150aa1dbc10b5.png");

},
243124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833115-4007a00d8703172cc0bde4f2608b6dc7.png");

},
750491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913178-d1cadc5c017b961d3a92a97c82917043.png");

},
572609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753196-8ac4f60a8675dd997a16c630ffe569b5.png");

},
943847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABfUlEQVR4AZSOO0tCYRzGxYRMl6Ako7bopmHYItZSdiGk69ISRbgFUX2ABoc+QEXQJlG0tHRFoou1lLgkSdqNtiKjggg0A4N+L0fec3DKw8M5z/Xw138V+Oh1mieV/j4OnS+vrPnnFwEEiamp6NTBdfx+YSmQyfwMDfS4XS0AgsQkkpvcACt4cOabGOnzeqqrrAZDEYAgMYkoKBsxSKXSO3tHY6PDlVaL4mrfmEQUqOGLQTgSdTgaCdAK7LZaoHDeRBSowcXg9u7R2WxDSFgrLEBKCAVqEDF4//iMJx5OTi9A8vUNVwKJCShQwxcDPv+HGJSXlXJxZ0cryLsEiQkoUOO/YtBQXxO9SiAkuARICaFADSIGbpczFrt5SarXczEgVkBEgRpSDMxm02B/9/rGFgFWHjCJKFAjEgM+TfY6b297YHVzPxh6ek5ms78AgsQkokAN5AYwrNlpn9FYvL17GI5cAggSk4iCAnWANptKujxtU5Pj/rkZAEFiEkn8AQAA//+JZDx9AAAABklEQVQDAM0C54G6QV9GAAAAAElFTkSuQmCC");

},
729332(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkUAAAA1CAIAAADAoQh+AAAM7UlEQVR4Ae2dbY4TSROER0JCQuJi70U4yh5sf3OOvca+QoUeYiOzqstt92A8sUIoMjLyo6Jt18wsgrev+S8OxIE4EAfiwJ/vwNuff4ScIA7EgTgQB+LA19xneRHEgTgQB+LAKziQ++wVnmLOEAfiQByIA7nP8hqIA3EgDsSBV3DgzH32/fv3Vzh6zhAH4kAciAMv5MDb9//+t3m09kpryc2GzyObnWLGX7r5eDiXjpg1/y3nnS3ztHxcetpHk8U+oAM/vj/T96TihR0zWeU3P5E3ZYuVLHWi4SiZHaHyNvEhoa1t4UNGHDaZ+XBY+NEEv+XpfDSTc944sO+A32d2vc0aLT7ca6oybdtNWVvbkucazqpmfDv6HvLOQXeWs/mj+tDw9UDus9d7pjnRH+3A8X02e9MuPu8sZeHMr03ZrLzy5xrOqmZ8nXsnc+egO8tZ/lF9aPhiYPgTl17sseY4f7QDl9xn9k0e7/x6NQ6G39XKllSBYsQDjNTmXO1jm2tq85PLNtF9RnME1hyeQTCqHLhNQQ6gVZra4Rc+aLlihqrtCMgOpu4Doy4ZriH9DWg3S1mIUgGDFGihPiPl9/EYh95C+IA4EAf2HTi+z2a9eEsfCuy9SiFgdNBwhttZKh4fQDTUFBiATNtaltSMRwBAaYBwKAkBxrehHtDwjl5Lbp07+re/00qfNaQtNuPHbmQrsD7tJnpAw4d6m3jiLO2I0Ud/bw/C9LZJyDgQBw4dOH+frT8s9M2pWKs2+cMzWB/0xhMChnIdzrrBV0BDA4Q2d8abrB1ktWovetMQAtpBlqVbBaYkBFj/Gd8uv66tyyijF5LyhtnHAOHQEwIWC9uINtQ+d7Zq+4eMAx/NgUvus/UblSxgmE4I2H8Y9Yvf+gFBWxXXjzxkNn3Gm0znUjLAbC4y86ENIelpC1g33YdaAzuhTdHQJhICrP/Mh7oqU2gFINUCHuuOHo0BwsP9TdmuVEmrsrDqw8SBOLB24K77rP0Aqm9LYwgBY0VCwHr1WZZywE39rYopMx4BAKUBQpQDGL8OzXMTW3bd32rXoe2s4axwk1+0spQ11KxilSlWjWI0BgiH2MIFqc0X2BpauChMKg7EgdYBv8/qm4ovddt601s4SowkBIxPYQsZpzykAhMQAmyNGW8yHdHeEyYgpL8BQhukfHVbs7VwnTW9hVa7Dkft7HdqdX9Ie77Km7GW0nHaWfmKaWIlFlKo+kEORvVoqFKlkZuh9tRZm+WRxYE4YA4c//0g63eavSetOx9kyEa3NrRBpqydYVBqB8ghm4VsoqtqnwXPAgp0EH0MEFK4qNKU6dkNfoBFfz0v5aZnovE2xULEOoJWzNINKSGr+trfmEVIZwAjrEonIm7JWSFVJtgJdwbt9IkmDsSBr18f8e/F6OdXPI0DF70eLmq7eF7vP3GxTFJxIA4cOvDj5413/pe3/Z0GvlK5fsPxqHPd8w3Q6R2uOMjpZVIYB+LAjgMPuM92xkQTB+JAHIgDceBSB3KfXWpvmseBOBAH4sA7OZD77J2Mzpg4EAfiQBy41IGD++x9/tfFU/0fuKda5tJnn+ZxIA7EgVdy4D/3Wb29KrN5+M3CIXuSK+Spltn0ObI4EAfiQBwYDvy6z7hUAHd6tN9nX3nnSjvls2Vm/E7PaOJAHIgDceBqB5r77FEj9y+AfeWjdlv0mS2z4GepxZSk4kAciANx4LEO/LjP+Dmb/ZAQXkeiWWTblDYxvHMfaE/FoxWMtVJ+pAbDAhYON8jW5tYf96wkYRyIA3EgDryzA8ffnx1+giMAjDNYuDjYTUrEFdhcBJu8yWxh62bZhHEgDsSBOPB7HTh5n+nSfNADRtZCLTF8p9LKCQHrcSazkNoZjyAgDsSBOBAHfqMDL3Kf1Z8rDk+Vx2W7mdbhrAo+IA7EgTgQB57BgRe5z3as5N4CjKp1SGeTwQfEgTgQB+LAMzhw1X1W/5zF4rT7V0WrNJIQMEYTAto/zaFZ3RkeQFtjtCo4DsSBOBAH3seBH/eZ/lBOP5pbHnLstwhHan0Myg/Fa6VmmaiknkuPDAZQRR/ASBEO0JKmSRgH4kAciANXO/Dr+7OrJ6V/HIgDcSAOxIHrHHj78uV/nz//lV9xIA7EgThwhQNfvvzvuk/wdFYH3j5//uvt7d/8igNxIA7EgSsc+Pz5L/3MDb7OgZ/32adPf1/xhUl6xoE4EAc+rAOfPv399vZv7rPrLjDr/PM+U8ftj05YwfOHz7b/1ftc3f/WJ/6q+zzbuW59LtG/vwPjp1/66fr+O3yoiX6f/elv2v3995X3vCDaKTPyJn5s1ZbUhRd/CHOzQ+3ZMnTjj4kCWv3VJPvooBnZ8qOQlB1HQ/AAFCqvaxxihratLIvG2uoyaHQl7aO89oFXUrE2sT8qrDJSRi7Cuv8Q38ovRpxI2XlnHXKfzZy5iP+I99nhm/OE14t3l3abjebtARhVhADtNj4djGk/Mtr1ZsvUhvuM7qmYVdtN9vvfqqw7tAsgA9gg5RVzLvSWNUHNUqigfTRWa+HsuY+2KlZsQ9tQ9YoRm6Wm0RAMoEkLkAGGjBCw5tvmp0k776JP7rOFOVekzt9n9kq6YrkTPfe32ldurtE23CFNQwgYC1g4I5EB1vtvytZNyGo3xfqxbjy1a/DAKmtlYbuGahTruUahZXcE7cRaqLI6ZeiVV3xYW8dRDlgcUDWKta3xulKLTU8IsH1mfNv8HjL32T3uXVr7n/vMXhDrwTeJ160elb1ppZvEOxvWhpUZfYyfhTOeZUzQNkc8A22TmXjNW6tZaPy6J9kTVbMS4y1kIsAEGioe+kOmChhkYKGsqcEor1g7b/LIAO0BR1Y1il/vPqvnVW8N5/szM+Tq8OA+4+ce+iVJS45FNWUMXz/qyx29nRN+ALLKQwK0s5LWZKTWYrJW24ZsxdDFCH2HtzIdrQ3hIY1hjdmSFCqwJiOlrUw8S916LvrM+sOjHABeX1GzU6gYbOIRMgUZwPR60kVqVl5LUBqYKSsPA2DJei4YFY/RMAD6sFubUhJl25PpJquh9SQEtP3pYzJ4qtgEwCtKgRbSE6DZinOfVU8uZX7dZ/UJGbMOD1/3lFdgtQgWvKVqOFybtWr1KlbBrXwdbY9w1tAKN2Xr5mSt24I3JSHA9mzDYSCfFFo7yLqAatT/RX+a7OgR10HKKK5tbRkTt3rTWMhWFcyUlYcBjE0stOVn22qVaTafHWfRVrNaxAa0Vte4lbe2hPQxoHuSGlWEALq1IPdZa8t15A33mS1Rn6gxGiq2Pos3nr6IDR+GVWBz60rGEAJGB0KA8W2o0zcLN2XaeXFq60ZV5Y0hBFCroGYrM/TGEwLWMobeqj9XaFN0t0WKWfWJtFWqB7fKSiozw3WNdgrlgCEbH/GDJAWYNVdB1ViWfQAmIASwm4E2pC2APgYIrY/yimlYQe6z6smlzOo+Gy9BfSnrKvWJGqOhYmsyUiZoh0ICrJWG9f1zmK07jJJb+bZKp88aWuGmTDsvTm3dqKo89gJUXElbW8VgBTaRENA2tGw9qQks3Flgcy6j2xGVNMZCXcxwq6wkT0QBS9KzFtp5TWBh7aPjwFU2Y2b9D/VWSAgYHSykLQCBAULrwxkV0K0Fuc9aW64jf95n3779czhj9pgpXAgsNUqUnGGa1/fnYUp7qrhObxnKASab8etVa3bWZ8bXDno6qyK1z8+UtDIfZvvM+hhPCKj92xELvaUWm9fOWqu4NmmzlTTGQmurYatsSao0q1iPeStP8wGsvCVPa3SWNSEE2OgZrz0VozdAaP3bWiUrzn1WPbmUWd1n6+dKtoKxMby+l/QwCMbXO5biiyB49Jv9be6ivDbUWi3UVWe81rK8Ai200ZYiBJhe265T1oHCyhtDCKiDLFUFjKvmUAtoy8lWUPVodC64ZpWZYcrrOE1peVXWrNYabsUtSaFlNQQD7FkoP0uZpp1rGg1nmD4G0AOGgBCw4PU9q/2pNaB6Ulpo5lhKw9xn6sY74F8/b6zDuFH0Aaus8loylMrUFwcdAPW1olXajU1UAAmgpDI6dGQRW0/4sR7ZlifLRAD6AeCt7Zqf9Z81v5VnGVty0UcXHhixpYyfhe0Zh1gbUq56xSq2c5mMVpSYAH6AmqWD7tmS1qqGi6o6l320ip6QMOqDksrXKaOP6a1kVDERoFUtqQLD67kmZh/l2w66BoKW1Fb0V6UJNMx9pm68A17dZ+8wvh1h7yULa8mhoJZcyly9z9X9bzXnVfd5tnPd+lyiP+fAA5977rNzj+B01c/77Nn+fv1v3/7h14f9y7lz8Bd2gJe3gRc+cns0Oz5hK34H8rEL5O/XP30znSv8eZ9d8a/+pGcciANxIA7k79c/dzmdqMq/T51/mzsOxIE4cKED+fepT9xM50r+D46TMqXODUxlAAAAAElFTkSuQmCC");

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