"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["135705"], {
939101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_uniform_data_definition_uniform_data_type_list_uniform_data_type_list_md_589_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-uniform-data-definition-uniform-data-type-list-uniform-data-type-list-md-589.json
var site_docs_arkdata_uniform_data_definition_uniform_data_type_list_uniform_data_type_list_md_589_namespaceObject = JSON.parse('{"id":"arkdata/uniform-data-definition/uniform-data-type-list/uniform-data-type-list","title":"UTD预置列表","description":"标准化数据类型（Uniform Type Descriptor，简称UTD）用于解决系统中的类型模糊问题，即针对同一种数据类型，存在不同的类型描述方式：MIME Type、文件扩展名等。例如描述jpg/jpeg类型图片时，可以使用image/jpeg、.jpg、.jpeg或image/picture等方式进行描述，详情可见UTD基础类型表格。","source":"@site/docs/arkdata/uniform-data-definition/uniform-data-type-list/uniform-data-type-list.md","sourceDirName":"arkdata/uniform-data-definition/uniform-data-type-list","slug":"/arkdata/uniform-data-definition/uniform-data-type-list/","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-type-list/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"UTD预置列表","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-type-list","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于标准化数据结构的控件 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/components-based-on-uniform-data-structure/"},"next":{"title":"应用数据持久化概述","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/app-data-persistence-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/uniform-data-definition/uniform-data-type-list/uniform-data-type-list.md


const frontMatter = {
	title: 'UTD预置列表',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-type-list',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UTD预置列表';

const assets = {

};



const toc = [{
  "value": "基础类型",
  "id": "基础类型",
  "level": 2
}, {
  "value": "系统关联类型",
  "id": "系统关联类型",
  "level": 2
}, {
  "value": "应用定义类型",
  "id": "应用定义类型",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "utd预置列表",
        children: "UTD预置列表"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["标准化数据类型（Uniform Type Descriptor，简称UTD）用于解决系统中的类型模糊问题，即针对同一种数据类型，存在不同的类型描述方式：MIME Type、文件扩展名等。例如描述jpg/jpeg类型图片时，可以使用image/jpeg、.jpg、.jpeg或image/picture等方式进行描述，详情可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B",
        children: "UTD基础类型"
      }), "表格。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当相关类型的数据进行跨应用、跨设备传输时，目标端应用/设备需要进行多方面的适配，才能够对数据内容进行相关处理，且存在无法识别的情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便业务使用，系统中预置了一部分常用类型，从通用性、场景以及归属等角度将预置类型分为三类：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B",
        children: "基础类型"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%B3%BB%E7%BB%9F%E5%85%B3%E8%81%94%E7%B1%BB%E5%9E%8B",
        children: "系统关联类型"
      }), "以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B",
        children: "应用定义类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础类型",
      children: "基础类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础类型表示通用数据类型，进行跨应用、跨设备设置跨平台交互时，能够被绝大多数应用、设备以及平台识别，标识UTD-ID为general.xxx。当前系统中预定义的通用类型列表如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "UTD-ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BelongingTo类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "后缀名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "MIMEType类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有表示物理存储类型的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有表示逻辑内容类型的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有文件的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有目录的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.folder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有文件夹的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.symlink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有符号链接的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有组合内容类型（例如PDF文件类型混合了文本和图片类数据）的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有媒体的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.content-form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据内容卡片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有图片的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.png"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".png"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/png"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PNG图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.jpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".jpg, .jpeg,.jpe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/jpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.tiff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tif, .tiff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/tiff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIFF图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有原始图像格式的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.fax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传真图像的基本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.xbitmap-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xbm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-xbitmap,image/x-xbm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X Window系统（X11）中使用的位图图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.gif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/gif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIF图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.djvu-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".djv,.djvu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/vnd.djvu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DjVu图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.jng-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".jng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-jng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG网络图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.pcx-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pcx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/vnd.zbrush.pcx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画笔位图图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.pbm-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pbm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-portable-bitmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可移植位图图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.pgm-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pgm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-portable-graymap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可移植灰度图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.pnm-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pnm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-portable-anymap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可移植任意图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ppm-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ppm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-portable-pixmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可移植完整RGB图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.rgb-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rgb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-rgb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB位图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.svg-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".svg,.svgz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/svg+xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可扩展矢量图形类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.wbmp-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wbmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/vnd.wap.wbmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线位图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.xpixmap-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xpm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-xpixmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XMP图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.xwindowdump-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xwd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-xwindowdump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XWD图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.heif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".heif, .heifs, .hif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/heif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高效图像文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.heic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".heic, .heics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/heic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高效容器图像文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.jpeg-2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".jp2, .jpg2, .jpx, .jpf, .jpm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/jp2, image/jpx, image/jpm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG 2000图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ief-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ief"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/ief"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像交换格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有视频的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.avi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".avi, .vfw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/avi, video/msvideo, video/x-msvideo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVI视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mpg, .mpeg, .m75, .m15,.mpe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/mpg, video/mpeg, video/x-mpg, video/x-mpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG-1或MPEG-2视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mpeg-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mp4, .mp4v, .mpeg4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/mp4, video/mp4v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG-4视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.3gpp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".3gp, .3gpp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/3gpp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3GPP视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.3gpp2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".3g2, .3gp2, .3gpp2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/3gpp2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3GPP2视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.vob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/mpeg, video/x-ms-vob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DVD视频类媒体的容器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.dif-video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/dv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原始数字视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.dv-video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/dv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DV视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.flc-animation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".fli, .flc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/fli, video/flc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLIC动画类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-mng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多重图像网络图形类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mpegurl-video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mxu, .m4u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/vnd.mpegurl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频播放列表类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/mp2ts, video/mp2t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mpeg传输流格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mp2t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".m2ts, .mts, .m2t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/mp2t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝光BDAV 视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mpeg-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mpeg2, .mpv2, .mp2v, .m2v, .mpv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/mpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG-2视频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mpeg-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mpeg1, .mpv1, .mp1v, .m1v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/mpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG-1视频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.divx-video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".divx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/divx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DivX编码电影文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ogv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ogv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ogg视频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.h264-video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".h264"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/H264"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.264编码视频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有音频的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OGG音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.aiff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".aiff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/aiff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIFF音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.pcm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pcm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/pcm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCM音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.flac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".flac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/flac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLAC音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.alac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".alac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/alac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALAC音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mp3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mp3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mp3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG-3音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.aac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".aac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/aac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.au-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".au, .snd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/basic, audio/au, audio/snd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Au音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.aifc-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".aifc, .aif, .aiff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/x-aiff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频交换文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.amr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".amr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/amr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自适应多速率音频编解码音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.amr-wb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".awb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/amr-wb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自适应多速率宽带音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.gsm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gsm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/x-gsm, audio/gsm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全球移动音频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.imy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".imy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/imelody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非复调铃声交换对象格式音频。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.kar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".kar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/midi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡拉ok MIDI音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mpegurl-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".m3u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mpegurl,audio/x-mpegurl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频播放列表类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mpeg-4-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".m4a, .m4b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只有音频的MPEG-4类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.midi-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mid, .midi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/midi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIDI音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mp2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mp2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mp2音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mpeg-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mpga"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mxmf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mxmf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mobile-xmf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动XMF音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/midi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OTA 铃声音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.pls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/x-scpls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体播放列表类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.rtttl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rtttl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/midi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTTTL格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.psid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sid, .psid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/prs.sid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SID音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ulaw-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".au, .ulw, .snd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/basic, audio/au, audio/snd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "μLaw音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.xmf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xmf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/midi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可扩展音乐文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ac3-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ac3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/ac3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编解码器3文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有文件和目录存档文件的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.tar-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-tar, application/tar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAR压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.zip-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".zip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/zip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zip压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有可作为卷装载项的文件类型的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.bz2-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".bz2, .bzip2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-bzip2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BZ2存档文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.opg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".opg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPG存档文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.lha-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lha"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-lha"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LHARC压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.lzh-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lzh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-lzh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LZH压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.lzx-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lzx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-lzx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LZX压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.shar-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".shar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-shar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unix Shar压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.cpio-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cpio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-cpio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unix CPIO压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.web-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mht, .mhtml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-mimearchive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页归档文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ustar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ustar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-ustar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统一的标准磁带归档格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.taz-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.tar-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".taz,.tar.z,.tz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-gtar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAZ压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.bz-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".bz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-bzip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bzip压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.tar-bzip-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.bz-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tbz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-bzip-compressed-tar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bzip压缩后的TAR压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.tar-bzip2-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.bz2-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tbz2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-bzip2-compressed-tar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bzip2压缩后的TAR压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.xar-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-xar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XAR压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.lza-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lza"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-lzh-compressed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LZA压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.arj-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".arj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-arj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARJ压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.lzma-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lzma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-lzma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LZMA压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.lzma86-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lzma86"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LZMA86压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.hfs-disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hfs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HFS镜像文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.img-disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".img"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-raw-disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMG镜像文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.virtual-cd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vcd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-cdlink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CD镜像文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.iso"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".iso"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-iso9660-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光盘镜像文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有文本的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.plain-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".txt,.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未指定编码的文本类型，无修饰的文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.html"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".html, .htm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/html"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTML文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.hyperlink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超链接类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.asc-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".asc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASCII文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.portable-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".po"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可移植对象类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.rich-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rtf,.rtx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/rtf, text/richtext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.delimited-values-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带分隔符文本基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.diff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".diff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本或源代码版本间差异描述数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.setext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".etx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-setext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结构增强文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.gcd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gcd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-pcs-gcd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用内容描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.p7r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".p7r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-pkcs7-certreqresp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书请求响应文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.pem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-pem-file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增强私隐邮件证书文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.tel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含器件封装、网络拓扑、编码信息等的原理图信息文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件内容描述类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.conf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".conf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用配置文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有日程类数据的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.vcs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vcs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VCalendar日历数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICalendar日历数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.comma-separated-values-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.delimited-values-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".csv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/csv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于逗号分隔符文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.tab-separated-values-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.delimited-values-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tsv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/tab-separated-values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于Tab分隔符文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mathml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/mathml,application/mathml+xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数学标记语言文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.xhtml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xhtml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/xhtml+xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展超文本标识语言文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.rss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/rss+xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "丰富站点摘要。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.rdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/rdf+xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源描述框架文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有源代码的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.markdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".md, .markdown, .markdn, .mdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/markdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markdown数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.chess-pgn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.plain-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pgn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-chess-pgn,application/vnd.chess-pgn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可移植式棋局记号数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.text-lst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.plain-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据列表类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.c-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-csrc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C源代码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.c-header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-chdr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C头文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.c-plus-plus-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cp, .cpp, .c++, .cc, .cxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-c++src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++源代码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.c-plus-plus-header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hpp, .h++ , .hxx, .hh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-c++hdr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++头文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.java-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".java, .jav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java源代码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.boo-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".boo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-boo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boo源代码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.d-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-dsrc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D源代码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.html-component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".htc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTML组件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.pascal-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".p,.pas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-pascal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pascal源代码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TeX源代码基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.dvi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dvi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-dvi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备独立的数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有脚本语言源代码的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.type-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript源代码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.java-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".js, .jscript, .javascript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/javascript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript源代码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.css"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".css"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/css"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSS样式表类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.haskell-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-haskell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Haskell脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.literate-haskell-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lhs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-literate-haskell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Literate Haskell脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.tcl-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tcl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-tcl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCL脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.json"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".json"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/json"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.yaml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".yaml, .yml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/yaml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.shell-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sh, .command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-shellscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shell脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "extended TypeScript源代码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.json5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".json5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON5数据交换类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.csh-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.shell-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".csh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-csh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-shell脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.perl-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.shell-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pl, .pm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-perl-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perl脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.python-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.shell-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-python-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ruby-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.shell-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rb, .rbw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/ruby-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ruby脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.php-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.shell-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".php, .php3, .php4, .ph3, .ph4, .phtml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-php-script, text/php, application/php"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统一资源标识符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.file-uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统一文件资源标识符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有导航类数据的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航定位类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有数据库文件的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.vcard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vcf, .vcard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/vcard,text/x-vcard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有电子名片类数据的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有消息类数据的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.contact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有联系人类数据的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有可执行文件的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.c-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译后的C对象文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.octet-stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/octet-stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任意二进制数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.mesh-model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".msh,.mesh,.silo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "model/mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三维网格模型数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全证书数据基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.cer-certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/pkix-cert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "互联网安全证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.crt-certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".crt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-x509-ca-cert,application/x-x509-server-cert,application/x-x509-user-cert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全证书数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.crl-certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".crl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-pkix-crl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书吊销列表文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.cad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算机辅助设计数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.iges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.cad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".iges,.igs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "model/iges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IGES绘图数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有字体数据类型的基础类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.truetype-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ttf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "font/ttf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TrueType字体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.truetype-collection-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ttc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "font/collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TrueType collection字体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.opentype-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".otf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "font/otf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenType 字体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ofd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ofd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子文件版式文档格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.prn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".prn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印到文件数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.ebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有电子书文件格式的基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.epub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.ebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".epub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/epub+zip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子出版物（EPUB）文件格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.kml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml,general.navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".kml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.google-earth.kml+xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KML地理标记语言。从HarmonyOS 6.0.2开始支持此类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.kmz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive,general.navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".kmz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.google-earth.kmz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMZ文件压缩格式。从HarmonyOS 6.0.2开始支持此类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "general.gpx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml,general.navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gpx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/gpx+xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS位置数据格式。从HarmonyOS 6.0.2开始支持此类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.iwork"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iWork类型基类。从HarmonyOS 6.0.2开始支持此类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.iwork.keynote.key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object,com.apple.iwork"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.apple.keynote"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iWork Keynote演示文稿文件。从HarmonyOS 6.0.2开始支持此类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.iwork.numbers.numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object,com.apple.iwork"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.apple.numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iWork Numbers电子表格文件。从HarmonyOS 6.0.2开始支持此类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.iwork.pages.pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object,com.apple.iwork"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.apple.pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iWork Pages文档文件。从HarmonyOS 6.0.2开始支持此类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统关联类型",
      children: "系统关联类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统定义数据类型与具体的平台/操作系统有较为深入的关联，支持系统/平台内的跨应用交互，标识UTD-ID为os-name.xxx。当前系统中预定义的系统关联类型列表如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "UTD-ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BelongingTo类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "后缀名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "MIMEType类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的Form类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.app-item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的桌面图标类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.want"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的Want数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.atomic-service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的元服务数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的文件封装类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.hap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的Ability封装类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的应用包类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.hsp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hsp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的动态共享包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.har"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".har"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的静态共享包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.hdoc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hdoc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的备忘录文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.hinote"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hinote"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的笔记文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.styled-string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的样式字符串类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.moving-photo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的动图Moving Photo类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.pixel-map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的Pixel map数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "macos.dmg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dmg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-apple-diskimage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MacOS系统定义的安装包格式文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "debian.deb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".deb,.udeb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-debian-package,application/vnd.debian.binary-package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debian系统中的软件安装包类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.android.apk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".apk, .apks, .aab, .xapk, .apkm, .akp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.android.package-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android安装包文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "redhat.rpm-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rpm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-rpm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RedHat软件安装包类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.huawei.hmos.settings.wifi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hmoswifi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS wifi分享配置文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openharmony.dlp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dlp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统定义的基于账号身份加密的文件类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用定义类型",
      children: "应用定义类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用定义类型表示该类型由具体的应用或者组织进行定义与维护，数据的交互依赖特定的应用进行识别，标识UTD-ID为com.company-name.xxx或org.organization-name.xxx。当前系统中预定义的应用定义类型列表如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "UTD-ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BelongingTo类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "后缀名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "MIMEType类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.bmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".bmp, .bm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/bmp, image/x-ms-bmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS位图图像类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.ico"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ico"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/ico, image/x-icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS图标图像类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.advanced-systems-format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".asf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-ms-asf, application/vnd.ms-asf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "微软高级流格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.waveform-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio,com.microsoft.advanced-systems-format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wav, .wave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/wav, audio/wave, audio/x-wav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS波形音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-wm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video,com.microsoft.advanced-systems-format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-ms-wm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WM视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-wmv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video,com.microsoft.advanced-systems-format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wmv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-ms-wmv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WMV视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-wmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video,com.microsoft.advanced-systems-format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-ms-wmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WMP视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-wma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio,com.microsoft.advanced-systems-format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/x-ms-wma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows WMA音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-wmx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video,com.microsoft.advanced-systems-format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wmx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-ms-wmx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WMX视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-wvx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video,com.microsoft.advanced-systems-format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wvx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-ms-wvx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WVX视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-wax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio,com.microsoft.advanced-systems-format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/x-ms-wax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows WAX音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-wmd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.advanced-systems-format, general.zip-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wmd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-ms-wmd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Media下载包格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-wmz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.advanced-systems-format, general.zip-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wmz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-ms-wmz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Media Player皮肤存档格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.portable-executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".exe,.dll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.microsoft.portable-executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Windows应用程序类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-installer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".msi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-msi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows安装包文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.publisher.pub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-mspublisher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Publisher文档格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.windows-media-playlist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml,general.media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wpl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-wpl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Media Player播放列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.access.mdb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mdb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/msaccess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Access数据库类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.hta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive,general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/hta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTML应用程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.internet.ins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-internet-signup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "互联网服务文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.internet.isp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".isp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-internet-signup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IIS互联网服务提供商配置文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.ini"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ini"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 初始化文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".eml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "message/rfc822"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子邮件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".msg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outlook消息文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.pst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outlook数据文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.cab-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-cab-compressed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Cab文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.wim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-ms-wim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows镜像文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.swm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".swm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-ms-wim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows镜像文件分片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.advanced-stream-redirector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".asx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-ms-asf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "微软高级数据流转向器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.cur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/ico"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Windows鼠标指针图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.dds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/vnd-ms.dds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DirectDraw Surface图像类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.metafile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wmf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Windows的图形档案格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.word.doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/msword"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Word数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.excel.xls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-excel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Excel数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.powerpoint.ppt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ppt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-powerpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft PowerPoint演示文稿类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.word.dot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/msword"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Word模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.powerpoint.pps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-powerpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft PowerPoint演示文稿幻灯片放映类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.powerpoint.pot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-powerpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft PowerPoint演示文稿模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.excel.xlt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xlt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-excel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Excel模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.visio.vsd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vsd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.visio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Visio数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.excel.dif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Excel数据交换格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.lsf-video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lsf, .lsx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-la-asf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流媒体格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML文档基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.wordprocessingml.document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".docx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.spreadsheetml.sheet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xlsx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML电子表格类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.presentationml.presentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pptx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML演示文稿类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.drawingml.visio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vsdx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.openxmlformats-officedocument.drawingml.drawing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office OpenXML Visio类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.wordprocessingml.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dotx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML文档模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.presentationml.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".potx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.openxmlformats-officedocument.presentationml.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML演示文稿模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.presentationml.slideshow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ppsx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML幻灯片放映类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.spreadsheetml.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xltx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML电子表格模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.drawingml.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vstx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office OpenXML Visio模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.wordprocessingml.document.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".docm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-word.document.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML文档类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.wordprocessingml.template.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dotm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-word.template.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML文档模板类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.spreadsheetml.template.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xltm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-excel.template.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML电子表格模板类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.spreadsheetml.addin.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xlam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-excel.addin.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML电子表格外接程序类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.spreadsheetml.binary.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xlsb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML电子表格二进制类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.spreadsheetml.sheet.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xlsm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-excel.sheet.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML电子表格类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.presentationml.addin.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ppam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-powerpoint.addin.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML演示文稿外接程序类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.presentationml.presentation.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pptm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML演示文稿类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.presentationml.slideshow.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ppsm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML幻灯片放映类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.presentationml.template.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object, general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".potm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-powerpoint.template.macroEnabled.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office Open XML演示文稿模板类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.drawingml.visio.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vsdm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office OpenXML Visio类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.drawingml.template.macroenabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openxmlformats.openxml, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vstm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office OpenXML Visio模板类型（启用宏功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kingsoft办公文档基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office.writer.wps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office,general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kingsoft文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office.writer.wpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office,general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kingsoft文档模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office.presentation.dps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office,general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kingsoft演示文稿类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office.presentation.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office,general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kingsoft演示文稿模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office.spreadsheets.et"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office,general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".et"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kingsoft电子表格类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office.spreadsheets.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office,general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ett"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kingsoft电子表格模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office.spreadsheets.etx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office,general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".etx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kingsoft电子表格类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office.spreadsheets.ettx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.kingsoft.office,general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ettx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kingsoft电子表格模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument文档基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".odt, .fodt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument.spreadsheet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ods, .fods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.spreadsheet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument电子表格类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument.presentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".odp, .fodp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.presentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument演示文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument.graphics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".odg, .fodg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.graphics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument图形类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument.formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".odf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument公式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.chart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".odc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.chart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument图表类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.text-master"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".odm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.text-master"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument主文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.text-web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".oth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.text-web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument HTML模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".odb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument数据库类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".odi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.formula-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".otf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.formula-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument公式模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.chart-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".otc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.chart-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument图表模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.presentation-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".otp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.presentation-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument演示文档模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.image-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".oti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.image-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument图片模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.graphics-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".otg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.graphics-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument图形模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.spreadsheet-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.spreadsheet-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument电子表格模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis-open.opendocument.text-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.oasis.opendocument, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ott"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.oasis.opendocument.text-template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenDocument文档模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice文档基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.calc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sxc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.calc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice计算电子表格类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.draw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sxd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.draw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice绘图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.writer-global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sxg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.writer.global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice主文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.impress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sxi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.impress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice演示文稿类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sxm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice数学公式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.writer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sxw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.writer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.calc.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".stc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.calc.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice计算电子表格模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.draw.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".std"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.draw.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice绘图模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.impress.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.impress.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice演示文稿模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice.writer.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.openoffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".stw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sun.xml.writer.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenOffice文档模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice文档基类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice.draw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.stardivision.draw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice绘图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice.calc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sdc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.stardivision.calc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice计算电子表格类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice.impress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sdd,.sdp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.stardivision.impress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice演示文稿类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice.writer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sdw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.stardivision.writer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice文本文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice.chart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.stardivision.chart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice图表类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice.mail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sdm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.stardivision.mail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice邮件消息类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice.writer-global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sgl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.stardivision.writer-global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice主文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice.math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".smf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.stardivision.math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice数学公式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.staroffice, general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.stardivision.template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarOffice模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.pdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/pdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDF数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.postscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/postscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostScript数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.framemaker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".book,.fm,.frame,.maker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-maker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe FrameMaker数据文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.framemaker.mif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.mif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameMaker交换文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.postscript-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostScript 字体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.postscript-pfb-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.postscript-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pfb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostScript Font Binary字体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.postscript-pfa-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.postscript-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pfa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe Type 1 字体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.encapsulated-postscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.postscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".eps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulated PostScript类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.photoshop-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".psd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-photoshop, image/photoshop, image/psd, application/photoshop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe Photoshop图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.illustrator.ai-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ai"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe Illustrator图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.dcr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dcr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-director"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe Shockwave媒体文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-director"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe Director电影文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.dxr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dxr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-director"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "受保护（不可编辑）电影文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.futuresplash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".spl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/futuresplash, application/x-futuresplash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FutureSplash动画类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.flash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".swf, .flv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-shockwave-flash, video/x-flv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.f4v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".f4v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash MP4视频文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.adobe.dng-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-adobe-dng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字负片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.sun.java-class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java类文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.sun.java-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive,general.executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".jar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/java-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAVA存档文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.sun.raster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ras"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-cmu-raster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sun Raster图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.gnu.gnu-tar-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gtar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-gtar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUN存档文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.gnu.gnu-zip-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gz, .gzip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-gzip, application/gzip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GZIP存档文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.gnu.gnu-zip-tar-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tgz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-gtar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GZIP TAR存档文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.gnu.texinfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".texinfo,.texi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-texinfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GNU Texinfo源文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.amazon.mobi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.ebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mobi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-mobipocket-ebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOBI电子书文件格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.amazon.azw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.ebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".azw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.amazon.ebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AZW电子书文件格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.amazon.azw3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.ebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".azw3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.amazon.mobi8-ebook, application/x-mobi8-ebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AZW3电子书文件格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.amazon.kfx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.ebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".kfx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KFX电子书文件格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.dwg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dwg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/vnd.dwg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD绘图保存格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.dxf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dxf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/vnd.dxf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD绘图交换交流格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.dws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD绘图标准文件模板格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.dwt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dwt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD绘图模板文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.dwf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dwf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "model/vnd.dwf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD网络文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.dwfx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dwfx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD 2D/3D绘图的XPS文档格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.shp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".shp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD 3D矢量数据格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.shx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".shx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD创建的形状编译类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.slide-library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".slb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD幻灯片库文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".lin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD线型类型文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.autodesk.plotter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".plt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AutoCAD绘图文档。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.tug.bib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".bib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-bibtex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TeX参考文献数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.tug.cls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TeX类文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.tug.sty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TeX样式文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.tug.tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TeX源文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.latex-project.latex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.tex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ltx, .latex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-latex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LaTeX源文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.media.playlist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".m3u8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.apple.mpegurl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTF-8 M3U播放列表格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.truevision.tga-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tga"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/targa, image/tga, application/tga"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标签图形（TaggedGraphics）图像类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.sgi.sgi-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sgi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/sgi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硅图（Silicon Graphics）图像类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.ilm.openexr-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".exr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开放标准的高动态范围图像格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.kodak.flashpix.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".fpx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/fpx, application/vnd.fpx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FlashPix 图像文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.coreldraw.cdr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cdr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-coreldraw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CorelDRAW矢量图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.coreldraw.cdt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cdt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-coreldrawtemplate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CorelDRAW矢量图模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.coreldraw.cpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-corelphotopaint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corel PHOTO-PAINT图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.coreldraw.pat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-coreldrawpattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CorelDRAW模式文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.ea.iff-ilbm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ilbm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-ilbm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "交错位图图像类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.aomedia.avif-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".avif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/avif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVIF图片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.google.webp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".webp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/webp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebP图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.gimp.xcf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xcf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-xcf,image/x-xcf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIMP图像类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.aol.art-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".art"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-jg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ART图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.real.realmedia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.rn-realmedia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流媒体视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.real.realmedia-vbr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rmvb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.rn-realmedia-vbr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RealMedia可变比特率格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.real.realvideo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-pn-realvideo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RealVideo格式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.matroska.mkv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mkv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-matroska"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matroska视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.sgi.movie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".movie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-sgi-movie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SGI电影格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.webmproject.webm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".webm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/webm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebM音视频媒体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.m4v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".m4v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/m4v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M4V视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.quicktime-movie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mov,.qt,.movie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/quicktime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QuickTime视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.m4p-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".m4p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iTunes音乐商店音频文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.real.realaudio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ram, .ra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/vnd.rn-realaudio, audio/x-pn-realaudio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RealMedia音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.digidesign.sd2-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sd2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/x-sd2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单声道/立体声音频类型（Digidesign Sound Designer II）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.matroska.mka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/x-matroska"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matroska音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.yamaha.smaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mmf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.smaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合成音乐移动应用程序格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.xiph.ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".oga,.ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ogg Vorbis音频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.sseyo.koan-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".skd,.skm, .skp, .skt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-koan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Koan互联网音乐文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.j2.jfx-fax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.fax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".jfx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "J2 jConnect传真文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.js.efx-fax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.fax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".efx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/efax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子传真文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.canon.cr2-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cr2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-canon-cr2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "佳能Raw 2图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.canon.cr3-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cr3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-canon-cr3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "佳能Raw 3图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.canon.crw-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".crw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-canon-crw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "佳能Raw CIFF图像文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.sony.arw-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".arw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-sony-arw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sony数码相机原始图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.nikon.nef-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".nef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-nikon-nef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nikon数码相机原始图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.nikon.nrw-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".nrw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-nikon-nrw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nikon原始图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.webarchive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".webarchive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-webarchive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safari Web存档文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.binhex-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hqx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/mac-binhex40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BinHex 4.0编码文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.quicktime-link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".qtl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-quicktimeplayer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QuickTime链接文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.troff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".man,.t, .roff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/troff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unix troff格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.wolfram.mathematica.notebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".nb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/mathematica"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematica笔记本文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.red-bean.sgf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sgf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-go-sgf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart Game棋盘游戏记录文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.bittorrent.torrent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".torrent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-bittorrent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BitTorrent文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.spatial.acis.sat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACIS三维模型类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.netscape.proxy-autoconfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.plain-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-ns-proxy-autoconfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理自动配置文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "io.qt.moc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.source-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".moc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/x-moc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qt元对象编译文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.gnumeric.spreadsheet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gnumeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-gnumeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gnumeric电子表格类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.real.smil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".smil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/smil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步多媒体集成语言类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.ghostscript.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gsf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ghostscript字体格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.x.pcf-font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pcf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-font,application/x-font-pcf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCF字体格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.openpgp.signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pgp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/pgp-signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PGP安全密钥类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.hdfgroup.hdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-hdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分层数据格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.edrawsoft.edrawmax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".eddx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-eddx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edraw Max绘图格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.edrawsoft.edrawmind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".emmx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-emmx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edraw MindMaster绘图格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "net.cnki.caj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".caj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/caj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAJ学术期刊文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.mindjet.mindmanager.mmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindManager思维导图格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.hp.graphics-language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hpgl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.hp-hpgl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HP图形语言绘图格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.wolfram.cdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-cdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wolfram可计算的文档格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "de.cinderella.cdy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cdy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.cinderella"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cinderella结构文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.3dsystems.stereolithography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".stl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.ms-pki.stl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stereolithography三维文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.abisource.word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".abw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-abiword"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbiWord文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "io.sourceforge.freemind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.composite-object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-freemind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FreeMind思维导图文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.idsoftware.doom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-doom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doom WAD 游戏数据文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.android.webarchive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".webarchivexml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-webarchive-xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android Web存档文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.rarlab.rar-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/rar,application/vnd.rar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WinRAR压缩文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.7-zip.7-zip-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".7z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-7z-compressed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-zip压缩文档类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.rsa.pkcs-12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pfx,.p12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-pkcs12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS #12 证书文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.stuffit.sit-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-stuffit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StuffIt压缩文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.allume.stuffit-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sit, .sitx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-stuffit, application/x-sit , application/stuffit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stuffit压缩格式类型（Stuffit archive）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.tukaani.xz-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-xz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XZ压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.tukaani.tar-xz-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "org.tukaani.xz-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".txz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-xz-compressed-tar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XZ压缩后的TAR压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.winzip.zipx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".zipx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZIPX压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.godotengine.tpz-archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tpz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Godot引擎导出文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.mozilla.xpinstall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".xpi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-xpinstall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "压缩文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.ezbsystems.zipped-iso"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.disk-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".isz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zip压缩后的ISO镜像文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.dbase.dbf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".dbf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/dbf, application/dbase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.youtube.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".yt, .vt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/vnd.youtube.yt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Youtube视频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.cisco.webex-video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".wrf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/x-webex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebEx录制格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.csiro.annodex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".axv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/annodex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annodex视频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.fujifilm.raf-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".raf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-fuji-raf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fujifilm原始图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.panasonic.rw2-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".rw2, .raw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-panasonic-raw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Panasonic原始图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.pentax.pef-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-pentax-pef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pentax电子原始图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.sumsung.srw-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".srw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-samsung-srw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Samsung原始图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.epson.erf-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".erf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-epson-erf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epson原始图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.olympus.orf-raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.raw-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".orf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/x-olympus-orf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Olympus原始图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.w3.woff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".woff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "font/woff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web开放字体格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.sqlite.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sqlite, .sqlite3, .db, .db3, .s3db, .sl3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/vnd.sqlite3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite 数据库类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.pdb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pdb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-ms-pdb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序数据库类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.monkeysaudio.ape-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/x-monkeys-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monkey's Audio音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "org.xiph.opus-audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".opus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/opus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opus有损音频编码格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.tlb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tlb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OLE类型库类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows目录文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.vbscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".vbs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-vbs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBScript脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.sys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows系统文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.powershell-script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ps1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows PowerShell脚本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".reg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOS批处理文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.dos-batch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".bat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/x-bat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows注册表类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.inf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".inf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装信息文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "com.microsoft.sccd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "general.xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".sccd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名自定义功能描述符。"
          })]
        })]
      })]
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