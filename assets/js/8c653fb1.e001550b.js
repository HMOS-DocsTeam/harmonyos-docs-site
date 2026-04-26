"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["283492"], {
106481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_command_line_utilities_mediatool_mediatool_md_8c6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-command-line-utilities-mediatool-mediatool-md-8c6.json
var site_docs_system_debug_optimize_debugging_commands_command_line_utilities_mediatool_mediatool_md_8c6_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/command-line-utilities/mediatool/mediatool","title":"媒体库资源访问工具","description":"开发者可通过mediatool工具或hdc命令操作媒体库资源。媒体库为图库提供和管理数据，媒体库中的图片视频会在图库界面呈现。","source":"@site/docs/system-debug-optimize/debugging-commands/command-line-utilities/mediatool/mediatool.md","sourceDirName":"system-debug-optimize/debugging-commands/command-line-utilities/mediatool","slug":"/system-debug-optimize/debugging-commands/command-line-utilities/mediatool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/mediatool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"媒体库资源访问工具","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mediatool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"toybox","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/toybox/"},"next":{"title":"devicedebug工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/devicedebug-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/command-line-utilities/mediatool/mediatool.md


const frontMatter = {
	title: '媒体库资源访问工具',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mediatool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '媒体库资源访问工具';

const assets = {

};



const toc = [{
  "value": "mediatool工具",
  "id": "mediatool工具",
  "level": 2
}, {
  "value": "前置条件",
  "id": "前置条件",
  "level": 3
}, {
  "value": "导入命令（mediatool send）",
  "id": "导入命令mediatool-send",
  "level": 3
}, {
  "value": "打印命令（mediatool list）",
  "id": "打印命令mediatool-list",
  "level": 3
}, {
  "value": "导出命令（mediatool recv）",
  "id": "导出命令mediatool-recv",
  "level": 3
}, {
  "value": "删除命令（mediatool delete）",
  "id": "删除命令mediatool-delete",
  "level": 3
}, {
  "value": "查询命令（mediatool query）",
  "id": "查询命令mediatool-query",
  "level": 3
}, {
  "value": "列举命令（mediatool ls -l）",
  "id": "列举命令mediatool-ls--l",
  "level": 3
}, {
  "value": "导出特定媒体库资产",
  "id": "导出特定媒体库资产",
  "level": 3
}, {
  "value": "导出所有媒体库资产",
  "id": "导出所有媒体库资产",
  "level": 3
}, {
  "value": "删除特定媒体库资产",
  "id": "删除特定媒体库资产",
  "level": 3
}, {
  "value": "彻底重置媒体库数据库",
  "id": "彻底重置媒体库数据库",
  "level": 3
}, {
  "value": "媒体库uri介绍/获取方式",
  "id": "媒体库uri介绍获取方式",
  "level": 3
}, {
  "value": "hdc命令",
  "id": "hdc命令",
  "level": 2
}, {
  "value": "媒体库文件查询",
  "id": "媒体库文件查询",
  "level": 3
}, {
  "value": "媒体库文件导出",
  "id": "媒体库文件导出",
  "level": 3
}, {
  "value": "媒体库文件导入",
  "id": "媒体库文件导入",
  "level": 3
}, {
  "value": "媒体库文件删除",
  "id": "媒体库文件删除",
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
    li: "li",
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
        id: "媒体库资源访问工具",
        children: "媒体库资源访问工具"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#mediatool%E5%B7%A5%E5%85%B7",
        children: "mediatool工具"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hdc%E5%91%BD%E4%BB%A4",
        children: "hdc命令"
      }), "操作媒体库资源。媒体库为图库提供和管理数据，媒体库中的图片视频会在图库界面呈现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mediatool工具",
      children: "mediatool工具"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mediatool是一个轻量级的命令行工具集合，为系统自带工具，不需要安装，内置在/bin文件夹中，可以通过hdc shell直接调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前置条件",
      children: "前置条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "正常连接设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统设置中开启开发者模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用hdc shell进入命令行执行模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入命令mediatool-send",
      children: "导入命令（mediatool send）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mediatool send <path-to-local-media-file> [-ts] [-tas] [-rf] [-urf]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该命令能够将设备<path-to-local-media-file>路径下的图片视频文件推入媒体库中保存。支持保存图片、视频和音频文件。文件在媒体库中会保留原有的名字。<path-to-local-media-file>可以为文件夹，mediatool会将文件夹里的所有文件置入媒体库中。保存成功后会打印成功置入的资源的uri。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，将媒体文件保存进媒体库是以同步方式创建缩略图，并且置入后<path-to-local-media-file>下的文件会被删除。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-ts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存图片视频时以同步方式创建缩略图。能够保证缩略图正常生成之后图片视频才会显示，但是会导致保存耗时较长。（默认）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-tas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存图片视频时以异步方式创建缩略图。不能与-ts选项同时使用。图片视频保存后会立即显示，不会等待缩略图先生成。保存耗时较短。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-rf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件置入后删除源文件。（默认）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-urf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件置入后不删除源文件。不能与-rf选项同时使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> mediatool send /data/tmp/MyImage.jpg\nfile://media/Photo/3/IMG_1721381297_001/MyImage.jpg # 推图成功，打印推入资源的uri\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "打印命令mediatool-list",
      children: "打印命令（mediatool list）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mediatool list <resource-uri>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该命令能够将<resource-uri>指定uri对应的媒体库内资源信息以csv格式打印出来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，媒体库内图片资源A的uri为file://media/Photo/3/IMG_1721381297_001/MyImage.jpg, mediatool list file://media/Photo/3或者mediatool list file://media/Photo/3/IMG_1721381297_001/MyImage.jpg都能成功打印出该资源信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所打印信息包含："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uri: 媒体资源的uri。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "display_name: 媒体资源的名字。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "data: 媒体资源的源文件在设备中的物理路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "还可以将<resource-uri>指定为all。mediatool list all会将媒体库内所有资源的信息打印出来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 使用存在的uri查询\n> mediatool list file://media/Photo/3\nTable Name: Photos\nuri, display_name, data\n\"file://media/Photo/3/IMG_1721381297_001/MyImage.jpg\", \"MyImage.jpg\", \"/storage/cloud/100/files/Photo/2/IMG_1721381297_001.jpg\"\n\n# 使用格式错误的uri查询\n> mediatool list file://media/Photo/\n[FAIL] uri invalid. uri:file://media/Photo/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出命令mediatool-recv",
      children: "导出命令（mediatool recv）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mediatool recv <media-target> <dest-path>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该命令能够将<media-target>指定的媒体库资源的源文件内容导出到<dest-path>指定的设备路径下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<media-target>可以为以下两种形式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统媒体目录下的文件路径。可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%88%97%E4%B8%BE%E5%91%BD%E4%BB%A4mediatool-ls--l",
          children: "列举命令（mediatool ls -l）"
        }), "获取，不支持指定文件夹路径。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["媒体库uri。（参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%AA%92%E4%BD%93%E5%BA%93uri%E4%BB%8B%E7%BB%8D%E8%8E%B7%E5%8F%96%E6%96%B9%E5%BC%8F",
          children: "媒体库uri介绍/获取方式"
        }), "）"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果<media-target>指定文件路径，只支持以下几种路径，以下几种路径存在映射关系，访问的目录相同，均访问当前用户的系统媒体目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "/storage/media/local/files/Photo 及以下的文件路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "/storage/media/<uid>/local/files/Photo 及以下的文件路径。<uid>必须为当前用户的id，否则报错路径不合法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<dest-path>为待创建文件路径或者文件夹路径。若为文件夹路径则会导出到该文件夹下，文件保留媒体库中的名字。当<dest-path>指定待创建文件路径时，不能是已经存在文件的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<dest-path>只支持/data/local/tmp下的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件导出成功后会打印导出文件的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将<media-target>指定为all则能够将所有媒体库资源的源文件导出。当<media-target>为all时，<dest-path>必须为文件夹路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该命令无法导出隐藏相册内的媒体资产。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 使用uri将对应媒体资源导出\n> mediatool recv file://media/Photo/3 /data/local/tmp/out.jpg\nTable Name: Photos\n/data/local/tmp/out.jpg\n\n# 使用路径将对应媒体资源导出\n> mediatool recv /storage/media/local/files/Photo/16/IMG_1748435796_000.jpg /data/local/tmp/out.jpg\nTable Name: Photos\n/data/local/tmp/out.jpg\n\n# 导出所有媒体资源文件\n> mkdir /data/local/tmp/outmedia\n> mediatool recv all /data/local/tmp/outmedia\nTable Name: Photos\n/data/local/tmp/outmedia/IMG_20250528_203454.jpg\n/data/local/tmp/outmedia/IMG_20250528_221028.jpg\n/data/local/tmp/outmedia/IMG_20250528_221851.jpg\n/data/local/tmp/outmedia/IMG_20250528_221930.jpg\n/data/local/tmp/outmedia/IMG_20250528_221944.jpg\n...\n\nTable Name: Audios\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除命令mediatool-delete",
      children: "删除命令（mediatool delete）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mediatool delete <resource-uri>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该命令能够删除<resource-uri>指定uri的媒体库资源。被删除的资源无法恢复，请谨慎执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["媒体库资源uri的获取可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AA%92%E4%BD%93%E5%BA%93uri%E4%BB%8B%E7%BB%8D%E8%8E%B7%E5%8F%96%E6%96%B9%E5%BC%8F",
        children: "媒体库uri介绍/获取方式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将<resource-uri>指定为all则指定删除所有媒体库资源，并重置媒体库的所有数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> mediatool delete file://media/Photo/3\n[SUCCESS] delete success.\n\n> mediatool delete all # delete all 执行成功不会有任何打印\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询命令mediatool-query",
      children: "查询命令（mediatool query）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mediatool query <display-name> [-p] [-u]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该命令能够查询出所有图库中显示名字为<display-name>的媒体库资源，返回资源源文件真实路径或媒体资源uri。默认返回源文件真实路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该命令无法查询出隐藏相册内的媒体资产。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回媒体资源源文件在设备中的真实路径。（默认）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回媒体资源uri。不能与-p选项同时使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 所查询媒体资源存在\n> mediatool query MyImage.jpg\nfind 1 result:\npath\n/storage/cloud/100/files/Photo/2/IMG_1721381297_001.jpg\n\n# 所查询媒体资源不存在\n> mediatool query non_exist.jpg\nfind 0 result\n\n# 查询的名字格式不正确\n> mediatool query IMG_001\nfind 0 result\nThe displayName format is not correct!\n\n# 查询媒体资源源文件路径\n> mediatool query MyImage.jpg -p\nfind 1 result:\npath\n/storage/cloud/100/files/Photo/2/IMG_1721381297_001.jpg\n\n# 查询媒体资源uri\n> mediatool query MyImage.jpg -u\nfind 1 result:\nuri\n\"file://media/Photo/2/IMG_1721381297_001/MyImage.jpg\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列举命令mediatool-ls--l",
      children: "列举命令（mediatool ls -l）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mediatool ls -l <media-path>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列举出<media-path>所指定的系统媒体路径下的所有文件。效果类似文件系统ls -l。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<media-path>只支持以下几种路径，以下几种路径存在映射关系，访问的目录相同，均访问当前用户的系统媒体目录："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "/storage/media/local/files/Photo 及以下的路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "/storage/media/<uid>/local/files/Photo 及以下的路径。<uid>必须为当前用户的id，否则报错路径不合法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-l为强制选项。不指定-l选项命令会报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该命令不可见用户隐藏相册内的媒体资产。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> mediatool ls -l /storage/media/local/files/Photo\ndrwxrwx--x 2 user_data_rw user_data_rw 3440 2025-05-29 05:45 16\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 05:45 1\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 11:15 2\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 05:56 3\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 05:56 4\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 11:21 5\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 11:59 6\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 05:57 7\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 05:59 8\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 06:00 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出特定媒体库资产",
      children: "导出特定媒体库资产"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例导出图库中名字叫MyImage的jpg图片："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell mediatool query -u MyImage.jpg\nfind 1 result\nuri\n\"file://media/Photo/1/IMG_1743078145_000/MyImage.jpg\"\n\n> hdc shell mediatool recv file://media/Photo/1 /data/local/tmp/out.jpg\nTable Name: Photos\n/data/local/tmp/out.jpg\n\n> hdc file recv /data/local/tmp/out.jpg .\nFileTransfer finish, Size:10015455, File count = 1, time:679ms rate:14750.30kB/s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例根据媒体文件路径导出媒体库资产："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell mediatool ls -l /storage/media/local/files/Photo\ndrwxrwx--x 2 user_data_rw user_data_rw 3440 2025-05-29 05:45 16\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 05:45 1\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 11:15 2\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 05:56 3\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 05:56 4\ndrwxrwx--x 2 user_data_rw user_data_rw 0 2025-05-29 11:21 5\n\n> hdc shell mediatool ls -l /storage/media/local/files/Photo/16\n-rw-rw---- 1 user_data_rw user_data_rw 6107481 2025-05-28 20:34 IMG_1748435794_000.jpg\n-rw-rw---- 1 user_data_rw user_data_rw 839323 2025-05-28 23:06 IMG_1748444892_016.jpg\n-rw-rw---- 1 user_data_rw user_data_rw 9614937 2025-05-28 23:41 IMG_1748446677_032.jpg\n-rw-rw---- 1 user_data_rw user_data_rw 3004885 2025-05-29 00:43 IMG_1748450699_048.jpg\n-rw-rw---- 1 user_data_rw user_data_rw 1915961 2025-05-29 01:18 IMG_1748452814_064.jpg\n-rw-rw---- 1 user_data_rw user_data_rw 13078 2025-05-29 02:41 IMG_1748457806_080.jpeg\n\n> hdc shell mediatool recv /storage/media/local/files/Photo/16/IMG_1748435794_000.jpg /data/local/tmp/out.jpg\nTable Name: Photos\n/data/local/tmp/out.jpg\n\n> hdc file recv /data/local/tmp/out.jpg .\nFileTransfer finish, Size:10015455, File count = 1, time:679ms rate:14750.30kB/s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出所有媒体库资产",
      children: "导出所有媒体库资产"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell mkdir /data/local/tmp/media\n> hdc shell mediatool recv all /data/local/tmp/media\nTable Name: Photos\n/data/local/tmp/media/MyImage.jpg\n\nTable Name: Audios\n\n> hdc shell tar -cvf /data/local/tmp/media.tar /data/local/tmp/media/*\nremoving leading '/' from member names\ndata/local/tmp/media/MyImage.jpg\n\n> hdc file recv /data/local/tmp/media.tar .\nFileTransfer finish, Size:10017280, File count = 1, time:664ms rate:15086.27kB/s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除特定媒体库资产",
      children: "删除特定媒体库资产"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例删除图库中名字叫MyImage的jpg图片："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell mediatool query -u MyImage.jpg\nfind 1 result\nuri\n\"file://media/Photo/1/IMG_1743078145_000/MyImage.jpg\"\n\n> hdc shell mediatool delete file://media/Photo/1/IMG_1743078145_000/MyImage.jpg\n[SUCCESS] delete success.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "彻底重置媒体库数据库",
      children: "彻底重置媒体库数据库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell mediatool delete all\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体库uri介绍获取方式",
      children: "媒体库uri介绍/获取方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "uri是媒体库资产的唯一标识符。mediatool使用uri来判断需要操作的媒体资产对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用以下方式获取uri："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mediatool query 加上 -u 的选项可以返回对应媒体资产的uri。需要输入对应资产的显示名（在图库中展示的名字带后缀名）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体库uri可以用于mediatool recv命令导出特定媒体库资产，也可以用于mediatool delete删除特定媒体库资产。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "uri样例：file://media/Photo/1/IMG_1743078145_000/MyImage.jpg。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在mediatool操作中，需要使用以上uri时，无论使用file://media/Photo/1/IMG_1743078145_000/MyImage.jpg还是file://media/Photo/1都能够正确的定位到目标资产。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdc命令",
      children: "hdc命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，支持通过hdc命令可以访问媒体库文件路径。包含：/mnt/data/<uid>/media_fuse/Photo/目录及其子目录。<uid>为当前用户的id。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体库文件查询",
      children: "媒体库文件查询"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持查询指定路径下未被隐藏的图片和视频。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell ls -l DEST\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc shell ls -l /mnt/data/100/media_fuse/Photo # 返回相册列表\ndrwxrwxrwx 2 user_data_rw user_data_rw 3440 1970-01-01 00:00 其它\ndrwxrwxrwx 2 user_data_rw user_data_rw 3440 1970-01-01 00:00 相机\n\n$ hdc shell ls -l /mnt/data/100/media_fuse/Photo/相机 # 列出相机文件夹下所有未被隐藏的本地图片和视频\ntotal 32813056\n-rw-rw-rw- 1 user_data_rw user_data_rw 7085591 1970-01-01 00:00 1.jpg\n-rw-rw-rw- 1 user_data_rw user_data_rw 6217442 1970-01-01 00:00 2.jpg\n\n$ hdc shell ls -l /mnt/data/100/media_fuse/Photo/相机/1.jpg # 命令返回1.jpg的详细信息\n-rw-rw-rw- 1 user_data_rw user_data_rw 7085591 1970-01-01 00:00 /mnt/data/100/media_fuse/Photo/相机/1.jpg\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体库文件导出",
      children: "媒体库文件导出"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持导出指定路径下所有未被隐藏的本地文件和目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc file recv DEST SOURCE\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc file recv /mnt/data/100/media_fuse/Photo/相机/文件A # 导出文件A\nFileTransfer finish, Size:xxx, File...\n\n$ hdc file recv /mnt/data/100/media_fuse/Photo/相机 # 导出相机目录及里面的文件\nFileTransfer finish, Size:xxx, File...\n\n$ hdc file recv /mnt/data/100/media_fuse/Photo/ # 导出Photo目录及其子文件\nFileTransfer finish, Size:xxx, File...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体库文件导入",
      children: "媒体库文件导入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持导入媒体文件（图片、视频等）及目录，但不支持创建目录。当目录名称相同时会将内容合并（保留所有不重名的文件）；当文件名称相同时会覆盖目标文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc file send SOURCE DEST\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc file send D:\\dest\\相机 /mnt/data/100/media_fuse/Photo/ # 导入“D:\\dest\\相机”的所有文件到/mnt/data/100/media_fuse/Photo/相机/\nFileTransfer finish, Size:xxx, File...\n\n$ hdc file send D:\\dest\\新建目录 /mnt/data/100/media_fuse/Photo/相机/ # 不支持创建目录\n[Fail][E005005] Error create directory: operation not permitted, path:/mnt/data/100/media_fuse/Photo/相机//新建目录\n\n$ hdc file send D:\\dest\\相机\\文件A /mnt/data/100/media_fuse/Photo/相机 # 导入文件A到/mnt/data/100/media_fuse/Photo/相机/\nFileTransfer finish, Size:xxx, File...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体库文件删除",
      children: "媒体库文件删除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持删除相册中的指定文件，但不支持删除目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell rm DEST\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc shell rm /mnt/data/100/media_fuse/Photo/相机 # 返回失败\nrm: /mnt/data/100/media_fuse/Photo/相机: Is a directory\n\n$ hdc shell rm /mnt/data/100/media_fuse/Photo/相机/文件A # 无返回信息，删除成功\n"
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