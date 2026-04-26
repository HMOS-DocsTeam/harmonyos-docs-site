"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["133562"], {
391941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_user_files_user_file_uri_intro_user_file_uri_intro_md_1aa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-user-files-user-file-uri-intro-user-file-uri-intro-md-1aa.json
var site_docs_core_file_kit_user_files_user_file_uri_intro_user_file_uri_intro_md_1aa_namespaceObject = JSON.parse('{"id":"core-file-kit/user-files/user-file-uri-intro/user-file-uri-intro","title":"用户文件URI介绍","description":"用户文件URI是文件的唯一标识，在对用户文件进行访问与修改等操作时往往都会使用到URI，不建议开发者解析URI中的片段用于业务代码开发，不同类型的URI使用方式将在下文详细介绍。","source":"@site/docs/core-file-kit/user-files/user-file-uri-intro/user-file-uri-intro.md","sourceDirName":"core-file-kit/user-files/user-file-uri-intro","slug":"/core-file-kit/user-files/user-file-uri-intro/","permalink":"/harmonyos-docs-site/core-file-kit/user-files/user-file-uri-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"用户文件URI介绍","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-file-uri-intro","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"用户文件概述","permalink":"/harmonyos-docs-site/core-file-kit/user-files/user-file-overview/"},"next":{"title":"FileUri开发指导(C/C++)","permalink":"/harmonyos-docs-site/core-file-kit/user-files/native-fileuri-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/user-files/user-file-uri-intro/user-file-uri-intro.md


const frontMatter = {
	title: '用户文件URI介绍',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-file-uri-intro',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '用户文件URI介绍';

const assets = {

};



const toc = [{
  "value": "URI的类型",
  "id": "uri的类型",
  "level": 2
}, {
  "value": "文档类URI",
  "id": "文档类uri",
  "level": 2
}, {
  "value": "文档类URI介绍",
  "id": "文档类uri介绍",
  "level": 3
}, {
  "value": "文档类URI获取方式",
  "id": "文档类uri获取方式",
  "level": 3
}, {
  "value": "文档类URI的使用方式",
  "id": "文档类uri的使用方式",
  "level": 3
}, {
  "value": "媒体文件URI",
  "id": "媒体文件uri",
  "level": 2
}, {
  "value": "媒体文件URI介绍",
  "id": "媒体文件uri介绍",
  "level": 3
}, {
  "value": "媒体文件URI获取方式",
  "id": "媒体文件uri获取方式",
  "level": 3
}, {
  "value": "媒体文件URI的使用方式",
  "id": "媒体文件uri的使用方式",
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
    id: "id",
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
        id: "用户文件uri介绍",
        children: "用户文件URI介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户文件URI是文件的唯一标识，在对用户文件进行访问与修改等操作时往往都会使用到URI，不建议开发者解析URI中的片段用于业务代码开发，不同类型的URI使用方式将在下文详细介绍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uri的类型",
      children: "URI的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URI类型可以归纳为文档类URI和媒体文件URI两类"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["文档类URI：由picker拉起文件管理器选择或保存返回。具体获取方式参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%96%87%E6%A1%A3%E7%B1%BBuri%E8%8E%B7%E5%8F%96%E6%96%B9%E5%BC%8F",
          children: "文档类URI获取方式"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["媒体文件URI：由picker通过拉起图库选择图片或者视频返回，通过photoAccessHelper模块获取图片或者视频文件的URI，以及通过userFileManager模块获取图片、视频或者音频文件的URI。具体获取方式参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%AA%92%E4%BD%93%E6%96%87%E4%BB%B6uri%E8%8E%B7%E5%8F%96%E6%96%B9%E5%BC%8F",
          children: "媒体文件URI获取方式"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(319679)/* ["default"] */.A) + "",
        width: "3118",
        height: "1529"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文档类uri",
      children: "文档类URI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文档类uri介绍",
      children: "文档类URI介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "文档类URI的格式类型为："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "'file://docs/storage/Users/currentUser/<relative_path>/test.txt'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其中各个字段表示的含义为："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "URI字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'file://docs/storage/Users/currentUser/'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件管理器的根目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'<relative_path>/'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件在根目录下的相对路径。例如：'Download/'和'Documents/'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'test.txt'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户文件系统中存储的文件名，支持的文件类型为文件管理器支持的所有类型，以文件管理器为准。例如txt、jpg、mp4和mp3等格式的文件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文档类uri获取方式",
      children: "文档类URI获取方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentviewpicker",
          children: "DocumentViewPicker"
        }), "接口选择或保存文件，返回选择或保存的文件URI。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#audioviewpicker",
          children: "AudioViewPicker"
        }), "接口选择或保存文件，返回选择或保存的文件URI。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文档类uri的使用方式",
      children: "文档类URI的使用方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用使用此类URI可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
        children: "文件管理"
      }), "进行进一步处理。示例代码参见picker中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/user-files/select-save-user-file/select-user-file#%E9%80%89%E6%8B%A9%E6%96%87%E6%A1%A3%E7%B1%BB%E6%96%87%E4%BB%B6",
        children: "选择文档类文件"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/user-files/select-save-user-file/save-user-file#%E4%BF%9D%E5%AD%98%E6%96%87%E6%A1%A3%E7%B1%BB%E6%96%87%E4%BB%B6",
        children: "保存文档类文件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体文件uri",
      children: "媒体文件URI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体文件uri介绍",
      children: "媒体文件URI介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "媒体文件URI的格式类型为："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片URI格式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'file://media/Photo/<id>/IMG_datetime_0001/displayName.jpg'"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频URI格式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'file://media/Photo/<id>/VID_datetime_0001/displayName.mp4'"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频URI格式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'file://media/Audio/<id>/AUD_datetime_0001/displayName.mp3'"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其中各个字段表示的含义为："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "URI字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'file://media'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示这个URI是媒体文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'Photo'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示这个URI是媒体文件中的图片或者视频类文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'Audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示这个URI是媒体文件中的音频类文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["'", (0,jsx_runtime.jsx)(_components.id, {
              children: "'"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在数据库中多个表中处理后的值，并不是指表中的file_id列，注意请不要使用此id去数据库中查询具体文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'IMG_datetime_0001'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示图片文件在用户文件系统中存储的文件名去掉后缀剩下的部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'VID_datetime_0001'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示视频文件在用户文件系统中存储的文件名去掉后缀剩下的部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'AUD_datetime_0001'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示音频文件在用户文件系统中存储的文件名去掉后缀剩下的部分。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体文件uri获取方式",
      children: "媒体文件URI获取方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过PhotoAccessHelper的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoviewpicker/arkts-apis-photoaccesshelper-photoviewpicker",
          children: "PhotoViewPicker"
        }), "选择媒体文件，返回选择的媒体文件的URI。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper/arkts-apis-photoaccesshelper",
          children: "photoAccessHelper"
        }), "模块中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getassets",
          children: "getAssets"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#createasset",
          children: "createAsset"
        }), "接口获取媒体文件对应文件的URI。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体文件uri的使用方式",
      children: "媒体文件URI的使用方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["normal等级的应用使用此类URI可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper/arkts-apis-photoaccesshelper",
        children: "photoAccessHelper"
      }), "模块进行进一步处理。示例代码参见媒体资源使用指导中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-photoviewpicker#%E6%8C%87%E5%AE%9Auri%E8%8E%B7%E5%8F%96%E5%9B%BE%E7%89%87%E6%88%96%E8%A7%86%E9%A2%91%E8%B5%84%E6%BA%90",
        children: "指定URI获取图片或视频资源"
      }), "。此接口需要申请相册管理模块读权限（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-overview#%E8%83%BD%E5%8A%9B%E8%8C%83%E5%9B%B4",
        children: "ohos.permission.READ_IMAGEVIDEO"
      }), "），在使用中需要注意应用是否有此权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若normal等级的应用不想申请权限也可以通过临时授权的方式使用PhotoAccessHelper的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoviewpicker/arkts-apis-photoaccesshelper-photoviewpicker",
        children: "PhotoViewPicker"
      }), "得到的URI使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getassets",
        children: "photoAccessHelper.getAssets"
      }), "接口获取对应URI的PhotoAsset对象。通过此方式获取的PhotoAsset对象可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoasset/arkts-apis-photoaccesshelper-photoasset#getthumbnail",
        children: "getThumbnail"
      }), "方法获取缩略图，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoasset/arkts-apis-photoaccesshelper-photoasset#get",
        children: "get"
      }), "接口方法读取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#photokeys",
        children: "PhotoKeys"
      }), "中的部分信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为PhotoKeys中支持临时授权方式可以读取的信息："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'uri'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件URI。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHOTO_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'media_type'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISPLAY_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'display_name'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示名字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'size'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE_ADDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'date_added'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件创建时的Unix时间戳（单位：秒）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE_MODIFIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'date_modified'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件修改时的Unix时间戳（单位：秒）。修改文件名不会改变此值，当文件内容发生修改时才会更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DURATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'duration'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "持续时间（单位：毫秒）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WIDTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'width'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片宽度（单位：像素）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'height'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片高度（单位：像素）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE_TAKEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'date_taken'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍摄时的Unix时间戳（单位：秒）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORIENTATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'orientation'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片文件的方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TITLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'title'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件标题。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面为通过临时授权方式使用媒体文件URI进行获取缩略图和读取文件部分信息的示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\nimport { common } from '@kit.AbilityKit';\n// ...\nimport { dataSharePredicates } from '@kit.ArkData';\n// ...\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// 定义一个uri数组，用于接收PhotoViewPicker选择图片返回的uri\nlet uris: string[] = [];\n\n// ...\n\n// 调用PhotoViewPicker.select选择图片\nasync function photoPickerGetUri() {\n  try {\n    let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n    photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n    // 设置最多可以选择的图片数量为1\n    photoSelectOptions.maxSelectNumber = 1;\n    let photoPicker = new photoAccessHelper.PhotoViewPicker();\n    // 等待用户选择图片\n    let photoSelectResult: photoAccessHelper.PhotoSelectResult = await photoPicker.select(photoSelectOptions);\n    console.info('PhotoViewPicker.select successfully, PhotoSelectResult uri: ' + JSON.stringify(photoSelectResult));\n    uris = photoSelectResult.photoUris;\n  } catch (err) {\n    let error: BusinessError = err as BusinessError;\n    console.error(`PhotoViewPicker failed with err, code is ${error.code}, message is ${error.message}`);\n  }\n}\n\n// 请在组件内获取context\nasync function uriGetAssets(context: common.UIAbilityContext): Promise<string> {\n  // 检查uris数组是否为空\n  if (uris.length === 0) {\n    throw new Error('No URIs available');\n  }\n  try {\n    let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n    // 配置查询条件，使用PhotoViewPicker选择图片返回的uri进行查询\n    predicates.equalTo('uri', uris[0]);\n    let fetchOption: photoAccessHelper.FetchOptions = {\n      fetchColumns: [photoAccessHelper.PhotoKeys.WIDTH, photoAccessHelper.PhotoKeys.HEIGHT,\n        photoAccessHelper.PhotoKeys.TITLE, photoAccessHelper.PhotoKeys.DURATION],\n      predicates: predicates\n    };\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOption);\n    // 得到uri对应的PhotoAsset对象，读取文件的部分信息\n    const asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    console.info('asset displayName: ', asset.displayName);\n    console.info('asset uri: ', asset.uri);\n    console.info('asset photoType: ', asset.photoType);\n    console.info('asset width: ', asset.get(photoAccessHelper.PhotoKeys.WIDTH));\n    console.info('asset height: ', asset.get(photoAccessHelper.PhotoKeys.HEIGHT));\n    console.info('asset title: ' + asset.get(photoAccessHelper.PhotoKeys.TITLE));\n    // 获取缩略图\n    asset.getThumbnail((err, pixelMap) => {\n      if (err == undefined) {\n        console.info('getThumbnail successful ' + JSON.stringify(pixelMap));\n      } else {\n        console.error('getThumbnail fail', err);\n      }\n    });\n    // ...\n  } catch (error) {\n    console.error(`uriGetAssets failed with err, code is ${error.code}, message is ${error.message}`);\n    return 'ReadMediaUriFail';\n  }\n  return 'ReadMediaUriFail';\n}\n"
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
319679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798630-486788e69812fc940b488253085e69bc.png");

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