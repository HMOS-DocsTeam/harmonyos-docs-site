"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["676892"], {
273832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_camera_api_camera_c_camera_headerfile_capi_metadata_output_h_capi_metadata_output_h_md_16a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-camera-api-camera-c-camera-headerfile-capi-metadata-output-h-capi-metadata-output-h-md-16a.json
var site_docs_ref_camera_api_camera_c_camera_headerfile_capi_metadata_output_h_capi_metadata_output_h_md_16a_namespaceObject = JSON.parse('{"id":"camera-api/camera-c/camera-headerfile/capi-metadata-output-h/capi-metadata-output-h","title":"metadata_output.h","description":"概述","source":"@site/docs-ref/camera-api/camera-c/camera-headerfile/capi-metadata-output-h/capi-metadata-output-h.md","sourceDirName":"camera-api/camera-c/camera-headerfile/capi-metadata-output-h","slug":"/camera-api/camera-c/camera-headerfile/capi-metadata-output-h/capi-metadata-output-h","permalink":"/harmonyos-docs-site/ref/camera-api/camera-c/camera-headerfile/capi-metadata-output-h/capi-metadata-output-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"metadata_output.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-metadata-output-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-metadata-output-h"},"sidebar":"ref","previous":{"title":"capture_session.h","permalink":"/harmonyos-docs-site/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h"},"next":{"title":"photo_native.h","permalink":"/harmonyos-docs-site/ref/camera-api/camera-c/camera-headerfile/capi-photo-native-h/capi-photo-native-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/camera-api/camera-c/camera-headerfile/capi-metadata-output-h/capi-metadata-output-h.md


const frontMatter = {
	title: 'metadata_output.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-metadata-output-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-metadata-output-h'
};
const contentTitle = 'metadata_output.h';

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
  "value": "OH_MetadataOutput_OnMetadataObjectAvailable()",
  "id": "oh_metadataoutput_onmetadataobjectavailable",
  "level": 3
}, {
  "value": "OH_MetadataOutput_OnError()",
  "id": "oh_metadataoutput_onerror",
  "level": 3
}, {
  "value": "OH_MetadataOutput_RegisterCallback()",
  "id": "oh_metadataoutput_registercallback",
  "level": 3
}, {
  "value": "OH_MetadataOutput_UnregisterCallback()",
  "id": "oh_metadataoutput_unregistercallback",
  "level": 3
}, {
  "value": "OH_MetadataOutput_Start()",
  "id": "oh_metadataoutput_start",
  "level": 3
}, {
  "value": "OH_MetadataOutput_Stop()",
  "id": "oh_metadataoutput_stop",
  "level": 3
}, {
  "value": "OH_MetadataOutput_Release()",
  "id": "oh_metadataoutput_release",
  "level": 3
}, {
  "value": "OH_MetadataOutput_AddMetadataObjectTypes()",
  "id": "oh_metadataoutput_addmetadataobjecttypes",
  "level": 3
}, {
  "value": "OH_MetadataOutput_RemoveMetadataObjectTypes()",
  "id": "oh_metadataoutput_removemetadataobjecttypes",
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
        id: "metadata_outputh",
        children: "metadata_output.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明元数据输出概念。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ohcamera/metadata_output.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohcamera.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Camera.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera",
        children: "OH_Camera"
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
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-metadataoutput-callbacks/capi-oh-camera-metadataoutput-callbacks",
              children: "MetadataOutput_Callbacks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MetadataOutput_Callbacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据输出的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera_MetadataOutput"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["元数据输出对象。  可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createmetadataoutput",
              children: "OH_CameraManager_CreateMetadataOutput"
            }), "方法创建指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_metadataoutput_onmetadataobjectavailable",
              children: "typedef void (*OH_MetadataOutput_OnMetadataObjectAvailable)(Camera_MetadataOutput* metadataOutput, Camera_MetadataObject* metadataObject, uint32_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MetadataOutput_OnMetadataObjectAvailable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-metadataoutput-callbacks/capi-oh-camera-metadataoutput-callbacks",
              children: "MetadataOutput_Callbacks"
            }), "中被调用的元数据输出元数据对象可用回调。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_metadataoutput_onerror",
              children: "typedef void (*OH_MetadataOutput_OnError)(Camera_MetadataOutput* metadataOutput, Camera_ErrorCode errorCode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MetadataOutput_OnError"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-metadataoutput-callbacks/capi-oh-camera-metadataoutput-callbacks",
              children: "MetadataOutput_Callbacks"
            }), "中被调用的元数据输出错误回调。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_metadataoutput_registercallback",
              children: "Camera_ErrorCode OH_MetadataOutput_RegisterCallback(Camera_MetadataOutput* metadataOutput, MetadataOutput_Callbacks* callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册元数据输出更改事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_metadataoutput_unregistercallback",
              children: "Camera_ErrorCode OH_MetadataOutput_UnregisterCallback(Camera_MetadataOutput* metadataOutput, MetadataOutput_Callbacks* callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销元数据输出更改事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_metadataoutput_start",
              children: "Camera_ErrorCode OH_MetadataOutput_Start(Camera_MetadataOutput* metadataOutput)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动元数据输出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_metadataoutput_stop",
              children: "Camera_ErrorCode OH_MetadataOutput_Stop(Camera_MetadataOutput* metadataOutput)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止元数据输出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_metadataoutput_release",
              children: "Camera_ErrorCode OH_MetadataOutput_Release(Camera_MetadataOutput* metadataOutput)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放元数据输出实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_metadataoutput_addmetadataobjecttypes",
              children: "Camera_ErrorCode OH_MetadataOutput_AddMetadataObjectTypes(Camera_MetadataOutput* metadataOutput, Camera_MetadataObjectType* types, uint32_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加元数据对象类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_metadataoutput_removemetadataobjecttypes",
              children: "Camera_ErrorCode OH_MetadataOutput_RemoveMetadataObjectTypes(Camera_MetadataOutput* metadataOutput, Camera_MetadataObjectType* types, uint32_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除元数据对象类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_metadataoutput_onmetadataobjectavailable",
      children: "OH_MetadataOutput_OnMetadataObjectAvailable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_MetadataOutput_OnMetadataObjectAvailable)(Camera_MetadataOutput* metadataOutput, Camera_MetadataObject* metadataObject, uint32_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-metadataoutput-callbacks/capi-oh-camera-metadataoutput-callbacks",
        children: "MetadataOutput_Callbacks"
      }), "中被调用的元数据输出元数据对象可用回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            }), "* metadataOutput"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递回调的元数据输出实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataobject/capi-oh-camera-camera-metadataobject",
              children: "Camera_MetadataObject"
            }), "* metadataObject"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调传递的元数据实例信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据对象的大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_metadataoutput_onerror",
      children: "OH_MetadataOutput_OnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_MetadataOutput_OnError)(Camera_MetadataOutput* metadataOutput, Camera_ErrorCode errorCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-metadataoutput-callbacks/capi-oh-camera-metadataoutput-callbacks",
        children: "MetadataOutput_Callbacks"
      }), "中被调用的元数据输出错误回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            }), "* metadataOutput"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递回调的元数据输出实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            }), " errorCode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据输出的错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
        children: "CAMERA_SERVICE_FATAL_ERROR"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_metadataoutput_registercallback",
      children: "OH_MetadataOutput_RegisterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode OH_MetadataOutput_RegisterCallback(Camera_MetadataOutput* metadataOutput, MetadataOutput_Callbacks* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册元数据输出更改事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            }), "* metadataOutput"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据输出实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-metadataoutput-callbacks/capi-oh-camera-metadataoutput-callbacks",
              children: "MetadataOutput_Callbacks"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的元数据输出回调。"
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
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK：方法调用成功。  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_metadataoutput_unregistercallback",
      children: "OH_MetadataOutput_UnregisterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode OH_MetadataOutput_UnregisterCallback(Camera_MetadataOutput* metadataOutput, MetadataOutput_Callbacks* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注销元数据输出更改事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            }), "* metadataOutput"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据输出实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-metadataoutput-callbacks/capi-oh-camera-metadataoutput-callbacks",
              children: "MetadataOutput_Callbacks"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注销的元数据输出回调。"
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
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK：方法调用成功。  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_metadataoutput_start",
      children: "OH_MetadataOutput_Start()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode OH_MetadataOutput_Start(Camera_MetadataOutput* metadataOutput)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动元数据输出。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            }), "* metadataOutput"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要启动的元数据输出实例。"
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
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK：方法调用成功。  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。  CAMERA_SESSION_NOT_CONFIG：捕获会话未配置。  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_metadataoutput_stop",
      children: "OH_MetadataOutput_Stop()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode OH_MetadataOutput_Stop(Camera_MetadataOutput* metadataOutput)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止元数据输出。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            }), "* metadataOutput"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要停止的元数据输出实例。"
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
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK：方法调用成功。  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_metadataoutput_release",
      children: "OH_MetadataOutput_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode OH_MetadataOutput_Release(Camera_MetadataOutput* metadataOutput)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放元数据输出实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            }), "* metadataOutput"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的元数据输出实例。"
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
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK：方法调用成功。  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_metadataoutput_addmetadataobjecttypes",
      children: "OH_MetadataOutput_AddMetadataObjectTypes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode OH_MetadataOutput_AddMetadataObjectTypes(Camera_MetadataOutput* metadataOutput, Camera_MetadataObjectType* types, uint32_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加元数据对象类型。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            }), "* metadataOutput"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据输出实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_metadataobjecttype",
              children: "Camera_MetadataObjectType"
            }), "* types"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于添加到Camera_MetadataOutput实例的元数据对象类型数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据对象类型数组长度。"
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
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK：方法调用成功。  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_metadataoutput_removemetadataobjecttypes",
      children: "OH_MetadataOutput_RemoveMetadataObjectTypes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode OH_MetadataOutput_RemoveMetadataObjectTypes(Camera_MetadataOutput* metadataOutput, Camera_MetadataObjectType* types, uint32_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除元数据对象类型。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-metadataoutput/capi-oh-camera-camera-metadataoutput",
              children: "Camera_MetadataOutput"
            }), "* metadataOutput"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据输出实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_metadataobjecttype",
              children: "Camera_MetadataObjectType"
            }), "* types"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从Camera_MetadataOutput实例移除的元数据对象类型数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据对象类型数组长度。"
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
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
              children: "Camera_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_OK：方法调用成功。  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。"
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