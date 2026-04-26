"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["492201"], {
498594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_user_files_select_save_user_file_save_user_file_save_user_file_md_241_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-user-files-select-save-user-file-save-user-file-save-user-file-md-241.json
var site_docs_core_file_kit_user_files_select_save_user_file_save_user_file_save_user_file_md_241_namespaceObject = JSON.parse('{"id":"core-file-kit/user-files/select-save-user-file/save-user-file/save-user-file","title":"保存用户文件","description":"在从网络下载文件到本地或将已有用户文件另存为新的文件路径等场景下，需要使用FilePicker提供的保存用户文件的能力。需关注以下关键点：","source":"@site/docs/core-file-kit/user-files/select-save-user-file/save-user-file/save-user-file.md","sourceDirName":"core-file-kit/user-files/select-save-user-file/save-user-file","slug":"/core-file-kit/user-files/select-save-user-file/save-user-file/","permalink":"/harmonyos-docs-site/core-file-kit/user-files/select-save-user-file/save-user-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"保存用户文件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/save-user-file","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"选择用户文件","permalink":"/harmonyos-docs-site/core-file-kit/user-files/select-save-user-file/select-user-file/"},"next":{"title":"授权持久化","permalink":"/harmonyos-docs-site/core-file-kit/user-files/select-save-user-file/file-persistpermission/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/user-files/select-save-user-file/save-user-file/save-user-file.md


const frontMatter = {
	title: '保存用户文件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/save-user-file',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '保存用户文件';

const assets = {

};



const toc = [{
  "value": "保存图片或视频类文件",
  "id": "保存图片或视频类文件",
  "level": 2
}, {
  "value": "保存文档类文件",
  "id": "保存文档类文件",
  "level": 2
}, {
  "value": "保存音频类文件",
  "id": "保存音频类文件",
  "level": 2
}, {
  "value": "DOWNLOAD模式保存文件",
  "id": "download模式保存文件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "保存用户文件",
        children: "保存用户文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在从网络下载文件到本地或将已有用户文件另存为新的文件路径等场景下，需要使用FilePicker提供的保存用户文件的能力。需关注以下关键点："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过Picker获取的URI默认只具备", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "临时读写权限"
          })
        }), "，临时授权在应用退出后台自动失效。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentsaveoptions",
          children: "autoCreateEmptyFile"
        }), "参数为false，获取的URI除了具备", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "临时读写权限"
          })
        }), "外，还具备", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "临时创建和删除权限"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["获取持久化权限需要通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/select-save-user-file/file-persistpermission#%E9%80%9A%E8%BF%87picker%E8%8E%B7%E5%8F%96%E4%B8%B4%E6%97%B6%E6%8E%88%E6%9D%83%E5%B9%B6%E8%BF%9B%E8%A1%8C%E6%8E%88%E6%9D%83%E6%8C%81%E4%B9%85%E5%8C%96",
          children: "FilePicker设置永久授权"
        }), "方式获取。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用Picker对音频、图片、视频、文档类文件的保存操作", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "无需申请权限"
          })
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统隔离说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过Picker保存的文件存储在用户指定的目录。此类文件与图库管理的资源隔离，无法在图库中看到。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若开发者需要保存图片、视频资源到图库，可使用用户无感的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-savebutton#%E4%BD%BF%E7%94%A8%E5%AE%89%E5%85%A8%E6%8E%A7%E4%BB%B6%E4%BF%9D%E5%AD%98%E5%AA%92%E4%BD%93%E5%BA%93%E8%B5%84%E6%BA%90",
          children: "安全控件进行保存"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保存图片或视频类文件",
      children: "保存图片或视频类文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#photoviewpickerdeprecated",
        children: "PhotoViewPicker"
      }), "在后续版本不再演进，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-savebutton",
        children: "Media Library Kit（媒体文件管理服务）中能力来保存媒体库资源"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发场景无法调用安全控件进行图片、视频保存，可使用相册管理模块", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#showassetscreationdialog12",
        children: "PhotoAccessHelper.showAssetsCreationDialog"
      }), "接口进行保存操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保存文档类文件",
      children: "保存文档类文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块导入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { picker } from '@kit.CoreFileKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据实际业务需求配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentsaveoptions",
            children: "文件保存选项"
          }), "。以下代码仅例举各选项的配置参考。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建文件管理器选项实例。\nconst documentSaveOptions = new picker.DocumentSaveOptions();\n// 保存文件名（可选）。 默认为空。\ndocumentSaveOptions.newFileNames = [\"DocumentViewPicker01.txt\"];\n// 指定保存的文件或者目录的URI（可选）。\ndocumentSaveOptions.defaultFilePathUri = \"file://docs/storage/Users/currentUser/test\";\n// 保存文件类型['后缀类型描述|后缀类型'],选择所有文件：'所有文件(*.*)|.*'（可选） ，如果选择项存在多个后缀（最多限制100个过滤后缀），默认选择第一个。如果不传该参数，默认无过滤后缀。\ndocumentSaveOptions.fileSuffixChoices = ['文档|.txt', '.pdf'];\n// 保存文件时，由应用决定是否预置空文件。默认为true，Picker会预置空文件并且返回文件的URI数组。false不预置空文件，只会返回文件的URI数组。\ndocumentSaveOptions.autoCreateEmptyFile = false;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建文件选择器", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#constructor12",
            children: "DocumentViewPicker"
          }), "实例。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#save",
            children: "save()"
          }), "接口拉起FilePicker界面进行文件保存。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uris: string[] = [];\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst documentViewPicker = new picker.DocumentViewPicker(context);\ndocumentViewPicker.save(documentSaveOptions).then((documentSaveResult: string[]) => {\n  uris = documentSaveResult;\n  console.info('documentViewPicker.save to file succeed and uris are:' + uris);\n  // ···\n}).catch((err: BusinessError) => {\n  console.error(`Invoke documentViewPicker.save failed, code is ${err.code}, message is ${err.message}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(47023)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Picker会默认", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentsaveoptions",
              children: "预置空文件"
            }), "并返回保存文件的URI数组，应用拿到URI后可使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
              children: "文件管理"
            }), "模块的接口进行文件读写操作。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "避免在Picker回调中直接操作URI。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "建议使用全局变量保存URI以供后续使用。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#download%E6%A8%A1%E5%BC%8F%E4%BF%9D%E5%AD%98%E6%96%87%E4%BB%B6",
              children: "DOWNLOAD模式"
            }), "直达下载目录。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["待界面从FilePicker返回后，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopensync",
            children: "fileIo.openSync"
          }), "接口，通过URI打开这个文件得到文件描述符（fd）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (uris.length > 0) {\n   let uri: string = uris[0];\n   // 这里需要注意接口权限参数是fileIo.OpenMode.READ_WRITE。\n   let file = fileIo.openSync(uri, fileIo.OpenMode.READ_WRITE);\n   console.info('file fd: ' + file.fd);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过（fd）使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileiowritesync",
            children: "fileIo.writeSync"
          }), "接口对这个文件进行编辑修改，编辑修改完成后关闭（fd）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let writeLen: number = fileIo.writeSync(file.fd, 'hello, world');\nconsole.info('write data to file succeed and size is:' + writeLen);\nfileIo.closeSync(file);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保存音频类文件",
      children: "保存音频类文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块导入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { picker } from '@kit.CoreFileKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置保存选项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const audioSaveOptions = new picker.AudioSaveOptions();\n// 保存文件名（可选）\naudioSaveOptions.newFileNames = ['AudioViewPicker01.mp3'];\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#audioviewpicker",
            children: "音频选择器AudioViewPicker"
          }), "实例。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#save-5",
            children: "save()"
          }), "接口拉起FilePicker界面进行文件保存。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uris: string[] = [];\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst audioViewPicker = new picker.AudioViewPicker(context);\naudioViewPicker.save(audioSaveOptions).then((audioSelectResult: string[]) => {\n  uris = audioSelectResult;\n  console.info('audioViewPicker.save to file succeed and uri is:' + uris);\n  // ···\n}).catch((err: BusinessError) => {\n  console.error(`Invoke audioViewPicker.save failed, code is ${err.code}, message is ${err.message}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(847738)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Picker会默认", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentsaveoptions",
              children: "预置空文件"
            }), "并返回保存文件的URI数组，应用拿到URI后可使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
              children: "文件管理"
            }), "模块的接口进行文件读写操作。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "避免在Picker回调中直接操作URI。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "建议使用全局变量保存URI以供后续使用。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#download%E6%A8%A1%E5%BC%8F%E4%BF%9D%E5%AD%98%E6%96%87%E4%BB%B6",
              children: "DOWNLOAD模式"
            }), "直达下载目录。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["待界面从FilePicker返回后，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopensync",
            children: "fileIo.openSync"
          }), "接口，通过URI打开这个文件得到文件描述符（fd）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (uris.length > 0) {\n   let uri: string = uris[0];\n   // 这里需要注意接口权限参数是fileIo.OpenMode.READ_WRITE。\n   let file = fileIo.openSync(uri, fileIo.OpenMode.READ_WRITE);\n   console.info('file fd: ' + file.fd);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过（fd）使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileiowritesync",
            children: "fileIo.writeSync"
          }), "接口对这个文件进行编辑修改，编辑修改完成后关闭（fd）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let writeLen = fileIo.writeSync(file.fd, 'hello, world');\nconsole.info('write data to file succeed and size is:' + writeLen);\nfileIo.closeSync(file);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "download模式保存文件",
      children: "DOWNLOAD模式保存文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模式特点"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自动创建在Download/包名/目录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跳过文件选择界面直接保存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回的URI已具备持久化权限， 用户可在该URI下创建文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(569836)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DOWNLOAD模式创建的目录仅用于保存文件，目录之间无访问隔离，不建议保存应用敏感数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块导入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileUri, picker } from '@kit.CoreFileKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置下载模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const documentSaveOptions = new picker.DocumentSaveOptions();\n// 配置保存的模式为DOWNLOAD，若配置了DOWNLOAD模式，此时配置的其他documentSaveOptions参数将不会生效。\ndocumentSaveOptions.pickerMode = picker.DocumentPickerMode.DOWNLOAD;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "保存到下载目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uri: string = '';\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst documentViewPicker = new picker.DocumentViewPicker(context);\nconst documentSaveOptions = new picker.DocumentSaveOptions();\ndocumentSaveOptions.pickerMode = picker.DocumentPickerMode.DOWNLOAD;\ndocumentViewPicker.save(documentSaveOptions).then((documentSaveResult: Array<string>) => {\n  uri = documentSaveResult[0];\n  console.info('documentViewPicker.save succeed and uri is:' + uri);\n  const testFilePath = new fileUri.FileUri(uri + '/test.txt').path;\n  const file = fileIo.openSync(testFilePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);\n  fileIo.writeSync(file.fd, 'Hello World!');\n  fileIo.closeSync(file.fd);\n}).catch((err: BusinessError) => {\n  console.error(`Invoke documentViewPicker.save failed, code is ${err.code}, message is ${err.message}`);\n})\n"
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
47023(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
847738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
569836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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