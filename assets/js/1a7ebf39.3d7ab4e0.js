"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["114970"], {
991703(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_user_files_select_save_user_file_select_user_file_select_user_file_md_1a7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-user-files-select-save-user-file-select-user-file-select-user-file-md-1a7.json
var site_docs_core_file_kit_user_files_select_save_user_file_select_user_file_select_user_file_md_1a7_namespaceObject = JSON.parse('{"id":"core-file-kit/user-files/select-save-user-file/select-user-file/select-user-file","title":"选择用户文件","description":"用户需要分享文件、保存图片、视频等用户文件时，开发者可以通过系统预置的文件选择器（FilePicker），实现该能力。通过Picker访问相关文件，将拉起对应的应用，引导用户完成界面操作，接口本身无需申请权限。Picker选择文件或文件夹获取到的URI只具有*临时读写权限*，获取持久化权限需要通过FilePicker设置永久授权方式获取。","source":"@site/docs/core-file-kit/user-files/select-save-user-file/select-user-file/select-user-file.md","sourceDirName":"core-file-kit/user-files/select-save-user-file/select-user-file","slug":"/core-file-kit/user-files/select-save-user-file/select-user-file/","permalink":"/harmonyos-docs-site/core-file-kit/user-files/select-save-user-file/select-user-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"选择用户文件","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/select-user-file","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取用户目录环境(C/C++)","permalink":"/harmonyos-docs-site/core-file-kit/user-files/native-environment-guidelines/"},"next":{"title":"保存用户文件","permalink":"/harmonyos-docs-site/core-file-kit/user-files/select-save-user-file/save-user-file/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/user-files/select-save-user-file/select-user-file/select-user-file.md


const frontMatter = {
	title: '选择用户文件',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/select-user-file',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '选择用户文件';

const assets = {

};



const toc = [{
  "value": "选择图片或视频类文件",
  "id": "选择图片或视频类文件",
  "level": 2
}, {
  "value": "选择文档类文件",
  "id": "选择文档类文件",
  "level": 2
}, {
  "value": "选择音频类文件",
  "id": "选择音频类文件",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "选择用户文件",
        children: "选择用户文件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户需要分享文件、保存图片、视频等用户文件时，开发者可以通过系统预置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker",
        children: "文件选择器（FilePicker）"
      }), "，实现该能力。通过Picker访问相关文件，将拉起对应的应用，引导用户完成界面操作，接口本身无需申请权限。Picker选择文件或文件夹获取到的URI只具有", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "临时读写权限"
        })
      }), "，获取持久化权限需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/user-files/select-save-user-file/file-persistpermission#%E9%80%9A%E8%BF%87picker%E8%8E%B7%E5%8F%96%E4%B8%B4%E6%97%B6%E6%8E%88%E6%9D%83%E5%B9%B6%E8%BF%9B%E8%A1%8C%E6%8E%88%E6%9D%83%E6%8C%81%E4%B9%85%E5%8C%96",
        children: "FilePicker设置永久授权"
      }), "方式获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据用户文件的常见类型，选择器（FilePicker）分别提供以下选项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#photoviewpickerdeprecated",
          children: "PhotoViewPicker"
        }), "：适用于图片或视频类型文件的选择与保存（该接口在后续版本不再演进）。请使用PhotoAccessHelper的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoviewpicker/arkts-apis-photoaccesshelper-photoviewpicker",
          children: "PhotoViewPicker"
        }), "来选择图片文件。请使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-savebutton",
          children: "安全控件保存媒体库资源"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentviewpicker",
          children: "DocumentViewPicker"
        }), "：适用于文件类型文件的选择与保存。DocumentViewPicker对接的选择资源来自于FilePicker，负责文件类型的资源管理，文件类型不区分后缀，比如浏览器下载的图片、文档等，都属于文件类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#audioviewpicker",
          children: "AudioViewPicker"
        }), "：适用于音频类型文件的选择与保存。AudioViewPicker目前对接的选择资源来自于AudioPicker。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择图片或视频类文件",
      children: "选择图片或视频类文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#photoviewpickerdeprecated",
        children: "PhotoViewPicker"
      }), "在后续版本不再演进，请使用PhotoAccessHelper的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoviewpicker/arkts-apis-photoaccesshelper-photoviewpicker",
        children: "PhotoViewPicker"
      }), "来选择图片文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择文档类文件",
      children: "选择文档类文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入选择器模块和文件管理模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import  { picker } from '@kit.CoreFileKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需根据实际业务需求配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentselectoptions",
            children: "文档选择选项"
          }), "。以下代码仅例举各选项的配置参考。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const documentSelectOptions = new picker.DocumentSelectOptions();\n// 选择文件最大个数（可选）。API version 20及之前的版本，单次文件选择的最大数量上限为500个，默认值也为500。目录选择功能仅对具备该系统能力的设备开放，且单次最多可选择1个目录。API version 21及之后的版本取消文件选择数量的限制。受系统能力限制，选择文件数量过大可能会出现功能异常或处理性能较差等情况，建议单次选择文件个数不超过1万个。API version 23及之后的版本取消目录选择数量的限制。\ndocumentSelectOptions.maxSelectNumber = 5;\n// 指定选择的文件或者目录的URI（可选）。\ndocumentSelectOptions.defaultFilePathUri = \"file://docs/storage/Users/currentUser/test\";\n// 选择的文档类型，默认值是FILE(文件类型)。该参数在2in1设备中可正常使用，在其他设备中无效果。\ndocumentSelectOptions.selectMode = picker.DocumentSelectMode.FILE;\n// 选择文件的后缀类型['后缀类型描述|后缀类型']（可选，不传该参数，默认不过滤，即显示所有文件），若选择项存在多个后缀名，则每一个后缀名之间用英文逗号进行分隔（可选），后缀类型名不能超过100。此外2in1设备支持通配符方式['所有文件(*.*)|.*']（说明：从API version 17开始，手机支持该配置），表示为显示所有文件。\n documentSelectOptions.fileSuffixFilters = ['图片(.png, .jpg)|.png,.jpg', '文档|.txt', '视频|.mp4', '.pdf'];\n// 选择是否对指定文件或目录授权，true为授权，当为true时，defaultFilePathUri为必选参数，拉起文管授权界面；false为非授权(默认为false)，拉起常规文管界面（可选）。该参数在2in1设备中可正常使用，在其他设备中无效果。\ndocumentSelectOptions.authMode = false;\n// 批量授权模式，默认为false（非批量授权模式）。当multiAuthMode为true时为批量授权模式。当multiAuthMode为true时，只有multiUriArray参数生效，其他参数不生效。该参数在Phone设备中可正常使用，在其他设备中无效果。\ndocumentSelectOptions.multiAuthMode = false;\n// 需要传入批量授权的uri数组（仅支持文件，文件夹不生效）。配合multiAuthMode使用。当multiAuthMode为false时，配置该参数不生效。该参数在Phone设备中可正常使用，在其他设备中无效果。\ndocumentSelectOptions.multiUriArray = [\"file://docs/storage/Users/currentUser/test\", \"file://docs/storage/Users/currentUser/2test\"];\n// 开启聚合视图模式，支持拉起文件管理应用的聚合视图。默认为DEFAULT，表示该参数不生效，非聚合视图。当该参数置为非DEFAULT时，其他参数不生效。\n// 该参数在Phone设备中可正常使用，在其他设备中无效果。\ndocumentSelectOptions.mergeMode = picker.MergeTypeMode.DEFAULT;\n// 是否支持加密（仅支持文件，文件夹不生效），默认为false。该参数为true时，在Picker界面可以选择对文件进行加密。（说明：从API version 19开始支持该参数）。\ndocumentSelectOptions.isEncryptionSupported = false;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建文件选择器", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentviewpicker",
            children: "DocumentViewPicker"
          }), "实例。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#select-3",
            children: "select()"
          }), "接口拉起FilePicker应用界面进行文件选择。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uris: string[] = [];\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst documentViewPicker = new picker.DocumentViewPicker(context);\ndocumentViewPicker.select(documentSelectOptions).then((documentSelectResult: string[]) => {\n  uris = documentSelectResult;\n  console.info('documentViewPicker.select to file succeed and uris are:' + uris);\n  // ...\n}).catch((err: BusinessError) => {\n  console.error(`Invoke documentViewPicker.select failed, code is ${err.code}, message is ${err.message}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(713507)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用Picker获取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#select-3",
              children: "select()"
            }), "返回的URI权限是临时只读权限，待退出应用后台后，获取的临时权限就会失效。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果想要获取持久化权限，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-file-kit/user-files/select-save-user-file/file-persistpermission#%E9%80%9A%E8%BF%87picker%E8%8E%B7%E5%8F%96%E4%B8%B4%E6%97%B6%E6%8E%88%E6%9D%83%E5%B9%B6%E8%BF%9B%E8%A1%8C%E6%8E%88%E6%9D%83%E6%8C%81%E4%B9%85%E5%8C%96",
              children: "文件持久化授权访问"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开发者可以根据结果集中URI做进一步的处理。建议定义一个全局变量保存URI。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如有获取元数据需求，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
              children: "文件管理"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fileuri/js-apis-file-fileuri",
              children: "文件URI"
            }), "根据URI获取部分文件属性信息，比如文件大小、访问时间、修改时间、文件名、文件路径等。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["待界面从FilePicker返回后，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopensync",
            children: "fileIo.openSync"
          }), "接口通过URI打开这个文件得到文件描述符（fd）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (uris.length > 0) {\n   let uri: string = uris[0];\n   // 这里需要注意接口权限参数是fileIo.OpenMode.READ_ONLY。\n   let file = fileIo.openSync(uri, fileIo.OpenMode.READ_ONLY);\n   console.info('file fd: ' + file.fd);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过fd使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioreadsync",
            children: "fileIo.readSync"
          }), "接口读取这个文件内的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let buffer = new ArrayBuffer(4096);\nlet readLen = fileIo.readSync(file.fd, buffer);\nconsole.info('readSync data to file succeed and buffer size is:' + readLen);\n// 读取完成后关闭fd。\nfileIo.closeSync(file);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择音频类文件",
      children: "选择音频类文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入选择器模块和文件管理模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import  { picker } from '@kit.CoreFileKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建音频类型文件选择选项实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(703274)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目前AudioSelectOptions不支持参数配置，默认可以选择所有类型的用户文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const audioSelectOptions = new picker.AudioSelectOptions();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建音频选择器", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#audioviewpicker",
            children: "AudioViewPicker"
          }), "实例。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#select-5",
            children: "select()"
          }), "接口拉起AudioPicker应用界面进行文件选择。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uris: string[] = [];\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst audioViewPicker = new picker.AudioViewPicker(context);\naudioViewPicker.select(audioSelectOptions).then((audioSelectResult: Array<string>) => {\n  // 文件选择成功后，返回被选中音频的URI结果集。\n  uris = audioSelectResult;\n  console.info('audioViewPicker.select to file succeed and uri is:' + uris);\n  // ...\n}).catch((err: BusinessError) => {\n  console.error(`Invoke audioViewPicker.select failed, code is ${err.code}, message is ${err.message}`);\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(193518)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用Picker获取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#select-3",
              children: "select()"
            }), "返回的URI权限是临时只读权限，待退出应用后台后，获取的临时权限就会失效。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果想要获取持久化权限，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-file-kit/user-files/select-save-user-file/file-persistpermission#%E9%80%9A%E8%BF%87picker%E8%8E%B7%E5%8F%96%E4%B8%B4%E6%97%B6%E6%8E%88%E6%9D%83%E5%B9%B6%E8%BF%9B%E8%A1%8C%E6%8E%88%E6%9D%83%E6%8C%81%E4%B9%85%E5%8C%96",
              children: "文件持久化授权访问"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["开发者可以根据结果集中的URI做读取文件数据操作。建议定义一个全局变量保存URI。例如通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
              children: "文件管理"
            }), "模块的接口根据URI拿到音频资源的文件描述符（fd），再配合媒体服务实现音频播放的开发，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-playback/audio-playback-overview",
              children: "音频播放开发指导"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["待界面从AudioPicker返回后，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopensync",
            children: "fileIo.openSync"
          }), "接口通过URI打开这个文件得到文件描述符（fd）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (uris.length > 0) {\n   let uri: string = uris[0];\n   // 这里需要注意接口权限参数是fileIo.OpenMode.READ_ONLY。\n   let file = fileIo.openSync(uri, fileIo.OpenMode.READ_ONLY);\n   console.info('file fd: ' + file.fd);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过fd可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#readsync",
            children: "fileIo.readSync"
          }), "接口读取这个文件内的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let buffer = new ArrayBuffer(4096);\nlet readLen = fileIo.readSync(file.fd, buffer);\nconsole.info('readSync data to file succeed and buffer size is:' + readLen);\n// 读取完成后关闭fd。\nfileIo.closeSync(file);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/picker",
          children: "选择并查看文档与媒体文件"
        })
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
703274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
713507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
193518(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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