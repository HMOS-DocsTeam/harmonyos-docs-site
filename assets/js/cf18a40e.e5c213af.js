"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["587102"], {
266275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avsession_api_avsession_c_avsession_headerfile_capi_native_avmetadata_h_capi_native_avmetadata_h_md_cf1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avsession-api-avsession-c-avsession-headerfile-capi-native-avmetadata-h-capi-native-avmetadata-h-md-cf1.json
var site_docs_ref_avsession_api_avsession_c_avsession_headerfile_capi_native_avmetadata_h_capi_native_avmetadata_h_md_cf1_namespaceObject = JSON.parse('{"id":"avsession-api/avsession-c/avsession-headerfile/capi-native-avmetadata-h/capi-native-avmetadata-h","title":"native_avmetadata.h","description":"概述","source":"@site/docs-ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avmetadata-h/capi-native-avmetadata-h.md","sourceDirName":"avsession-api/avsession-c/avsession-headerfile/capi-native-avmetadata-h","slug":"/avsession-api/avsession-c/avsession-headerfile/capi-native-avmetadata-h/capi-native-avmetadata-h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avmetadata-h/capi-native-avmetadata-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"native_avmetadata.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avmetadata-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avmetadata-h"},"sidebar":"ref","previous":{"title":"OHAVSession","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession"},"next":{"title":"native_avsession.h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avmetadata-h/capi-native-avmetadata-h.md


const frontMatter = {
	title: 'native_avmetadata.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avmetadata-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avmetadata-h'
};
const contentTitle = 'native_avmetadata.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AVMetadataBuilder_Create()",
  "id": "oh_avmetadatabuilder_create",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_Destroy()",
  "id": "oh_avmetadatabuilder_destroy",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetAssetId()",
  "id": "oh_avmetadatabuilder_setassetid",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetTitle()",
  "id": "oh_avmetadatabuilder_settitle",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetArtist()",
  "id": "oh_avmetadatabuilder_setartist",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetAuthor()",
  "id": "oh_avmetadatabuilder_setauthor",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetAlbum()",
  "id": "oh_avmetadatabuilder_setalbum",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetWriter()",
  "id": "oh_avmetadatabuilder_setwriter",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetComposer()",
  "id": "oh_avmetadatabuilder_setcomposer",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetDuration()",
  "id": "oh_avmetadatabuilder_setduration",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetMediaImageUri()",
  "id": "oh_avmetadatabuilder_setmediaimageuri",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetSubtitle()",
  "id": "oh_avmetadatabuilder_setsubtitle",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetDescription()",
  "id": "oh_avmetadatabuilder_setdescription",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetLyric()",
  "id": "oh_avmetadatabuilder_setlyric",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetSkipIntervals()",
  "id": "oh_avmetadatabuilder_setskipintervals",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetDisplayTags()",
  "id": "oh_avmetadatabuilder_setdisplaytags",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_SetFilter()",
  "id": "oh_avmetadatabuilder_setfilter",
  "level": 3
}, {
  "value": "OH_AVMetadataBuilder_GenerateAVMetadata()",
  "id": "oh_avmetadatabuilder_generateavmetadata",
  "level": 3
}, {
  "value": "OH_AVMetadata_Destroy()",
  "id": "oh_avmetadata_destroy",
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
    p: "p",
    pre: "pre",
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
        id: "native_avmetadatah",
        children: "native_avmetadata.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供播控元数据的定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/av_session/native_avmetadata.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohavsession.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession",
        children: "OHAVSession"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilderStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVMetadataBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话元数据构造器。构造器用于构造会话元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatastruct/capi-ohavsession-oh-avmetadatastruct",
              children: "OH_AVMetadataStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVMetadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话元数据。资源设置的avmetadata的实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_create",
              children: "AVMetadata_Result OH_AVMetadataBuilder_Create(OH_AVMetadataBuilder** builder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个元数据构造器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_destroy",
              children: "AVMetadata_Result OH_AVMetadataBuilder_Destroy(OH_AVMetadataBuilder* builder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁元数据构造器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setassetid",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetAssetId(OH_AVMetadataBuilder* builder, const char* assetId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前媒体资源id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_settitle",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetTitle(OH_AVMetadataBuilder* builder, const char* title)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置资源标题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setartist",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetArtist(OH_AVMetadataBuilder* builder, const char* artist)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置资源所属的艺术家信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setauthor",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetAuthor(OH_AVMetadataBuilder* builder, const char* author)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置资源的作者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setalbum",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetAlbum(OH_AVMetadataBuilder* builder, const char* album)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置资源专辑名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setwriter",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetWriter(OH_AVMetadataBuilder* builder, const char* writer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置资源词作者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setcomposer",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetComposer(OH_AVMetadataBuilder* builder, const char* composer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置资源作曲者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setduration",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetDuration(OH_AVMetadataBuilder* builder, int64_t duration)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置资源播放时长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setmediaimageuri",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetMediaImageUri(OH_AVMetadataBuilder* builder, const char* mediaImageUri)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置媒体图片数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setsubtitle",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetSubtitle(OH_AVMetadataBuilder* builder, const char* subtitle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置副标题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setdescription",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetDescription(OH_AVMetadataBuilder* builder, const char* description)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置媒体描述信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setlyric",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetLyric(OH_AVMetadataBuilder* builder, const char* lyric)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置歌词。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setskipintervals",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetSkipIntervals(OH_AVMetadataBuilder* builder, AVMetadata_SkipIntervals intervals)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置资源的跳转间隔时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setdisplaytags",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetDisplayTags(OH_AVMetadataBuilder* builder, int32_t tags)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置媒体资源的金标类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_setfilter",
              children: "AVMetadata_Result OH_AVMetadataBuilder_SetFilter(OH_AVMetadataBuilder* builder, uint32_t filter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置支持的协议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadatabuilder_generateavmetadata",
              children: "AVMetadata_Result OH_AVMetadataBuilder_GenerateAVMetadata(OH_AVMetadataBuilder* builder, OH_AVMetadata** avMetadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成媒体元数据对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadata_destroy",
              children: "AVMetadata_Result OH_AVMetadata_Destroy(OH_AVMetadata* avMetadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放媒体元数据对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_create",
      children: "OH_AVMetadataBuilder_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_Create(OH_AVMetadataBuilder** builder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个元数据构造器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "** builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该引用指向创建的构造器实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：参数builder为nullptr。  AVMETADATA_ERROR_NO_MEMORY：内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_destroy",
      children: "OH_AVMetadataBuilder_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_Destroy(OH_AVMetadataBuilder* builder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁元数据构造器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：参数builder为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setassetid",
      children: "OH_AVMetadataBuilder_SetAssetId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetAssetId(OH_AVMetadataBuilder* builder, const char* assetId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前媒体资源id。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* assetId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源id。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数assetId为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_settitle",
      children: "OH_AVMetadataBuilder_SetTitle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetTitle(OH_AVMetadataBuilder* builder, const char* title)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置资源标题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数title为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setartist",
      children: "OH_AVMetadataBuilder_SetArtist()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetArtist(OH_AVMetadataBuilder* builder, const char* artist)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置资源所属的艺术家信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* artist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体资源的艺术家。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数artist为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setauthor",
      children: "OH_AVMetadataBuilder_SetAuthor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetAuthor(OH_AVMetadataBuilder* builder, const char* author)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置资源的作者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* author"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作者。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数author为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setalbum",
      children: "OH_AVMetadataBuilder_SetAlbum()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetAlbum(OH_AVMetadataBuilder* builder, const char* album)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置资源专辑名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* album"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "专辑名。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数album为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setwriter",
      children: "OH_AVMetadataBuilder_SetWriter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetWriter(OH_AVMetadataBuilder* builder, const char* writer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置资源词作者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* writer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "词作者。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数writer为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setcomposer",
      children: "OH_AVMetadataBuilder_SetComposer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetComposer(OH_AVMetadataBuilder* builder, const char* composer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置资源作曲者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作曲者。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数composer为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setduration",
      children: "OH_AVMetadataBuilder_SetDuration()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetDuration(OH_AVMetadataBuilder* builder, int64_t duration)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置资源播放时长。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源播放时长，以ms为单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：参数builder为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setmediaimageuri",
      children: "OH_AVMetadataBuilder_SetMediaImageUri()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetMediaImageUri(OH_AVMetadataBuilder* builder, const char* mediaImageUri)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置媒体图片数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* mediaImageUri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络资源图片数据地址。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数mediaImageUri为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setsubtitle",
      children: "OH_AVMetadataBuilder_SetSubtitle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetSubtitle(OH_AVMetadataBuilder* builder, const char* subtitle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置副标题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* subtitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "副标题名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数subtitle为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setdescription",
      children: "OH_AVMetadataBuilder_SetDescription()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetDescription(OH_AVMetadataBuilder* builder, const char* description)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置媒体描述信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体描述信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数description为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setlyric",
      children: "OH_AVMetadataBuilder_SetLyric()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetLyric(OH_AVMetadataBuilder* builder, const char* lyric)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置歌词。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* lyric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRC格式的歌词内容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数lyric为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setskipintervals",
      children: "OH_AVMetadataBuilder_SetSkipIntervals()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetSkipIntervals(OH_AVMetadataBuilder* builder, AVMetadata_SkipIntervals intervals)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置资源的跳转间隔时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avmetadata_skipintervals",
              children: "AVMetadata_SkipIntervals"
            }), " intervals"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转的时间间隔。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数intervals为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setdisplaytags",
      children: "OH_AVMetadataBuilder_SetDisplayTags()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetDisplayTags(OH_AVMetadataBuilder* builder, int32_t tags)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置媒体资源的金标类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于显示在播控的媒体资源的金标类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：参数builder为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_setfilter",
      children: "OH_AVMetadataBuilder_SetFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_SetFilter(OH_AVMetadataBuilder* builder, uint32_t filter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置支持的协议。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t filter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此会话支持的协议。如果没有设置，默认为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_protocoltype",
              children: "AVSession_ProtocolType"
            }), ".TYPE_CAST_PLUS_STREAM。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数filter是无效的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadatabuilder_generateavmetadata",
      children: "OH_AVMetadataBuilder_GenerateAVMetadata()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadataBuilder_GenerateAVMetadata(OH_AVMetadataBuilder* builder, OH_AVMetadata** avMetadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成媒体元数据对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatabuilderstruct/capi-ohavsession-oh-avmetadatabuilderstruct",
              children: "OH_AVMetadataBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据构造器的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatastruct/capi-ohavsession-oh-avmetadatastruct",
              children: "OH_AVMetadata"
            }), "** avMetadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据的指针对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_NO_MEMORY：内存不足。  AVMETADATA_ERROR_INVALID_PARAM：  1. 参数builder为nullptr。  2. 参数avMetadata为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadata_destroy",
      children: "OH_AVMetadata_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVMetadata_Result OH_AVMetadata_Destroy(OH_AVMetadata* avMetadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放媒体元数据对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatastruct/capi-ohavsession-oh-avmetadatastruct",
              children: "OH_AVMetadata"
            }), "* avMetadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向元数据的指针对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_SUCCESS：函数执行成功。  AVMETADATA_ERROR_INVALID_PARAM：参数avMetadata为nullptr。"
          })]
        })
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