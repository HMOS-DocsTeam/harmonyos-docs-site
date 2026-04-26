"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["944290"], {
678133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_avsource_h_capi_native_avsource_h_md_b5a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avcodec-api-avcodec-c-avcodec-headerfile-capi-native-avsource-h-capi-native-avsource-h-md-b5a.json
var site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_avsource_h_capi_native_avsource_h_md_b5a_namespaceObject = JSON.parse('{"id":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avsource-h/capi-native-avsource-h","title":"native_avsource.h","description":"概述","source":"@site/docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avsource-h/capi-native-avsource-h.md","sourceDirName":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avsource-h","slug":"/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avsource-h/capi-native-avsource-h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avsource-h/capi-native-avsource-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"native_avsource.h","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsource-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avsource-h"},"sidebar":"ref","previous":{"title":"native_avmuxer.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avmuxer-h/capi-native-avmuxer-h"},"next":{"title":"native_cencinfo.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-cencinfo-h/capi-native-cencinfo-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avsource-h/capi-native-avsource-h.md


const frontMatter = {
	title: 'native_avsource.h',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsource-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avsource-h'
};
const contentTitle = 'native_avsource.h';

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
  "value": "OH_AVSource_CreateWithDataSource()",
  "id": "oh_avsource_createwithdatasource",
  "level": 3
}, {
  "value": "OH_AVSource_CreateWithDataSourceExt()",
  "id": "oh_avsource_createwithdatasourceext",
  "level": 3
}, {
  "value": "OH_AVSource_CreateWithURI()",
  "id": "oh_avsource_createwithuri",
  "level": 3
}, {
  "value": "OH_AVSource_CreateWithFD()",
  "id": "oh_avsource_createwithfd",
  "level": 3
}, {
  "value": "OH_AVSource_Destroy()",
  "id": "oh_avsource_destroy",
  "level": 3
}, {
  "value": "OH_AVSource_GetSourceFormat()",
  "id": "oh_avsource_getsourceformat",
  "level": 3
}, {
  "value": "OH_AVSource_GetTrackFormat()",
  "id": "oh_avsource_gettrackformat",
  "level": 3
}, {
  "value": "OH_AVSource_GetCustomMetadataFormat()",
  "id": "oh_avsource_getcustommetadataformat",
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
        id: "native_avsourceh",
        children: "native_avsource.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于音视频媒体数据解析的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/native_avsource.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_media_avsource.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Spliter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-avsource/capi-avsource",
        children: "AVSource"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
        children: "AVCodec"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为媒体资源接口定义native层对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_avsource_createwithdatasource",
              children: "OH_AVSource *OH_AVSource_CreateWithDataSource(OH_AVDataSource *dataSource)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为用户自定义数据源的资源对象创建OH_AVSource实例，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_destroy",
              children: "OH_AVSource_Destroy"
            }), "接口释放实例。  参数dataSource生命周期需与返回的指针OH_AVSource *保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_createwithdatasourceext",
              children: "OH_AVSource *OH_AVSource_CreateWithDataSourceExt(OH_AVDataSourceExt *dataSource, void *userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为用户自定义数据源的资源对象创建OH_AVSource实例，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_destroy",
              children: "OH_AVSource_Destroy"
            }), "接口释放实例。  回调支持通过userData传递用户自定义数据。  参数dataSource生命周期需与返回的指针OH_AVSource *保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_createwithuri",
              children: "OH_AVSource *OH_AVSource_CreateWithURI(char *uri)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为统一资源标识符对应的资源对象创建OH_AVSource实例，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_destroy",
              children: "OH_AVSource_Destroy"
            }), "接口释放实例。该接口仅支持HTTP渐进式流媒体，不支持HLS/DASH的流媒体；对于HLS/DASH的流媒体播放，推荐使用AVPlayer组件进行开发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_createwithfd",
              children: "OH_AVSource *OH_AVSource_CreateWithFD(int32_t fd, int64_t offset, int64_t size)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为文件描述符对应的资源对象创建OH_AVSource实例。可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_destroy",
              children: "OH_AVSource_Destroy"
            }), "接口释放实例。  接口如果传入offset不为文件起始位置，或size不为文件大小时，可能会因数据获取不完整导致OH_AVSource创建失败、后续解封装失败等未定义错误。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_destroy",
              children: "OH_AVErrCode OH_AVSource_Destroy(OH_AVSource *source)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OH_AVSource实例并清理内部资源。  同一实例只能被销毁一次。销毁的实例在被重新创建之前不能再被使用。建议实例销毁成功后将指针置为NULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_getsourceformat",
              children: "OH_AVFormat *OH_AVSource_GetSourceFormat(OH_AVSource *source)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源文件的基础信息。  需要注意的是，指向的OH_AVFormat实例在生命周期结束时需调用者通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
              children: "OH_AVFormat_Destroy"
            }), "释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_gettrackformat",
              children: "OH_AVFormat *OH_AVSource_GetTrackFormat(OH_AVSource *source, uint32_t trackIndex)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取轨道的基础信息。  需要注意的是，指向的OH_AVFormat实例在生命周期结束时需调用者通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
              children: "OH_AVFormat_Destroy"
            }), "释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsource_getcustommetadataformat",
              children: "OH_AVFormat *OH_AVSource_GetCustomMetadataFormat(OH_AVSource *source)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取自定义元数据的基础信息。  需要注意的是，指向的OH_AVFormat实例在生命周期结束时需开发者通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
              children: "OH_AVFormat_Destroy"
            }), "释放。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsource_createwithdatasource",
      children: "OH_AVSource_CreateWithDataSource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSource *OH_AVSource_CreateWithDataSource(OH_AVDataSource *dataSource)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为用户自定义数据源的资源对象创建OH_AVSource实例，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avsource_destroy",
        children: "OH_AVSource_Destroy"
      }), "接口释放实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数dataSource生命周期需与返回的指针OH_AVSource *保持一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Spliter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avdatasource/capi-codecbase-oh-avdatasource",
              children: "OH_AVDataSource"
            }), " *dataSource"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据源。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果执行成功，则返回一个指向OH_AVSource实例的指针，否则返回NULL。  可能的故障原因：  1. dataSource为nullptr。  2. dataSource->size == 0。  3. 设置数据源失败。  4. 内存不足。  5. 解码器引擎为nullptr。  6. dataSource->readAt == nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsource_createwithdatasourceext",
      children: "OH_AVSource_CreateWithDataSourceExt()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSource *OH_AVSource_CreateWithDataSourceExt(OH_AVDataSourceExt *dataSource, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为用户自定义数据源的资源对象创建OH_AVSource实例，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avsource_destroy",
        children: "OH_AVSource_Destroy"
      }), "接口释放实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调支持通过userData传递用户自定义数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数dataSource生命周期需与返回的指针OH_AVSource *保持一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Spliter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avdatasourceext/capi-codecbase-oh-avdatasourceext",
              children: "OH_AVDataSourceExt"
            }), " *dataSource"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向数据源结构体的指针，该结构体可用于获取输入数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向用户自定义数据的指针。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果执行成功，则返回一个指向OH_AVSource实例的指针，否则返回NULL。  可能的故障原因：  1. dataSource为nullptr。  2. dataSource->size == 0。  3. 设置数据源失败。  4. 内存不足。  5. 解码器引擎为nullptr。  6. dataSource->readAt == nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsource_createwithuri",
      children: "OH_AVSource_CreateWithURI()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSource *OH_AVSource_CreateWithURI(char *uri)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为统一资源标识符对应的资源对象创建OH_AVSource实例，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avsource_destroy",
        children: "OH_AVSource_Destroy"
      }), "接口释放实例。该接口仅支持HTTP渐进式流媒体，不支持HLS/DASH的流媒体；对于HLS/DASH的流媒体播放，推荐使用AVPlayer组件进行开发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Spliter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远程媒体资源的统一资源标识符。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回一个指向OH_AVSource实例的指针, 否则返回NULL。  可能的故障原因：  1. 网络异常。  2. 资源无效。  3. 文件格式不支持。  4. 应用配置明文拦截。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsource_createwithfd",
      children: "OH_AVSource_CreateWithFD()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSource *OH_AVSource_CreateWithFD(int32_t fd, int64_t offset, int64_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为文件描述符对应的资源对象创建OH_AVSource实例。可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avsource_destroy",
        children: "OH_AVSource_Destroy"
      }), "接口释放实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口如果传入offset不为文件起始位置，或size不为文件大小时，可能会因数据获取不完整导致OH_AVSource创建失败、后续解封装失败等未定义错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Spliter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据资源的文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始读取数据的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件的字节数大小。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回一个指向OH_AVSource实例的指针, 否则返回NULL。  可能的故障原因：  1. fd无效。  2. 传入offset不是文件起始位置。  3. size错误。  4. 资源无效。  5. 文件格式不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsource_destroy",
      children: "OH_AVSource_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVSource_Destroy(OH_AVSource *source)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁OH_AVSource实例并清理内部资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同一实例只能被销毁一次。销毁的实例在被重新创建之前不能再被使用。建议实例销毁成功后将指针置为NULL。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Spliter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVSource实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：操作成功。  AV_ERR_INVALID_VAL：  1. source指针无效，空指针。  2. 非OH_AVSource实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsource_getsourceformat",
      children: "OH_AVSource_GetSourceFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVFormat *OH_AVSource_GetSourceFormat(OH_AVSource *source)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取媒体资源文件的基础信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意的是，指向的OH_AVFormat实例在生命周期结束时需调用者通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
        children: "OH_AVFormat_Destroy"
      }), "释放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Spliter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVSource实例的指针。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回文件的基础信息，否则返回NULL。  可能的故障原因：  1. source指针无效。  2. 空指针或非OH_AVSource实例。  3. source没有初始化。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsource_gettrackformat",
      children: "OH_AVSource_GetTrackFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVFormat *OH_AVSource_GetTrackFormat(OH_AVSource *source, uint32_t trackIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轨道的基础信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意的是，指向的OH_AVFormat实例在生命周期结束时需调用者通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
        children: "OH_AVFormat_Destroy"
      }), "释放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Spliter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVSource实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t trackIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要获取信息的轨道的索引。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回轨道的基础信息，否则返回NULL。  可能的故障原因：  1. source指针无效，空指针或非OH_AVSource实例。  2. 轨道的索引超出范围。  3. source没有初始化。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsource_getcustommetadataformat",
      children: "OH_AVSource_GetCustomMetadataFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVFormat *OH_AVSource_GetCustomMetadataFormat(OH_AVSource *source)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取自定义元数据的基础信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意的是，指向的OH_AVFormat实例在生命周期结束时需开发者通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
        children: "OH_AVFormat_Destroy"
      }), "释放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.Spliter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVSource实例的指针。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回元数据的基础信息，否则返回NULL。  可能的故障原因：  1. source指针无效。  2. 空指针或非OH_AVSource实例。  3. source没有初始化。"
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