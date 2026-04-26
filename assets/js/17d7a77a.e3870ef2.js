"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["786161"], {
216694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_library_api_media_library_comp_ohos_multimedia_movingphotoview_ohos_multimedia_movingphotoview_md_17d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-library-api-media-library-comp-ohos-multimedia-movingphotoview-ohos-multimedia-movingphotoview-md-17d.json
var site_docs_ref_media_library_api_media_library_comp_ohos_multimedia_movingphotoview_ohos_multimedia_movingphotoview_md_17d_namespaceObject = JSON.parse('{"id":"media-library-api/media-library-comp/ohos-multimedia-movingphotoview/ohos-multimedia-movingphotoview","title":"@ohos.multimedia.movingphotoview (动态照片)","description":"用于播放动态照片文件并控制其播放状态的组件。","source":"@site/docs-ref/media-library-api/media-library-comp/ohos-multimedia-movingphotoview/ohos-multimedia-movingphotoview.md","sourceDirName":"media-library-api/media-library-comp/ohos-multimedia-movingphotoview","slug":"/media-library-api/media-library-comp/ohos-multimedia-movingphotoview/ohos-multimedia-movingphotoview","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-comp/ohos-multimedia-movingphotoview/ohos-multimedia-movingphotoview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"@ohos.multimedia.movingphotoview (动态照片)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-movingphotoview","kit":"媒体","last_updated":"2026-04-22","slug":"ohos-multimedia-movingphotoview"},"sidebar":"ref","previous":{"title":"@ohos.file.RecentPhotoComponent (最近图片组件)","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-comp/ohos-file-recentphotocomponent/ohos-file-recentphotocomponent"},"next":{"title":"MediaAssetManager","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-c/media-library-module/capi-mediaassetmanager/capi-mediaassetmanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-library-api/media-library-comp/ohos-multimedia-movingphotoview/ohos-multimedia-movingphotoview.md


const frontMatter = {
	title: '@ohos.multimedia.movingphotoview (动态照片)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-movingphotoview',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'ohos-multimedia-movingphotoview'
};
const contentTitle = '@ohos.multimedia.movingphotoview (动态照片)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "MovingPhotoView",
  "id": "movingphotoview",
  "level": 2
}, {
  "value": "MovingPhotoViewOptions",
  "id": "movingphotoviewoptions",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "muted",
  "id": "muted",
  "level": 3
}, {
  "value": "objectFit",
  "id": "objectfit",
  "level": 3
}, {
  "value": "autoPlayPeriod13+",
  "id": "autoplayperiod13",
  "level": 3
}, {
  "value": "autoPlay13+",
  "id": "autoplay13",
  "level": 3
}, {
  "value": "repeatPlay13+",
  "id": "repeatplay13",
  "level": 3
}, {
  "value": "enableAnalyzer18+",
  "id": "enableanalyzer18",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onComplete13+",
  "id": "oncomplete13",
  "level": 3
}, {
  "value": "onStart",
  "id": "onstart",
  "level": 3
}, {
  "value": "onPause",
  "id": "onpause",
  "level": 3
}, {
  "value": "onFinish",
  "id": "onfinish",
  "level": 3
}, {
  "value": "onError",
  "id": "onerror",
  "level": 3
}, {
  "value": "onStop",
  "id": "onstop",
  "level": 3
}, {
  "value": "onPrepared20+",
  "id": "onprepared20",
  "level": 3
}, {
  "value": "MovingPhotoViewEventCallback",
  "id": "movingphotovieweventcallback",
  "level": 2
}, {
  "value": "MovingPhotoViewController",
  "id": "movingphotoviewcontroller",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "startPlayback",
  "id": "startplayback",
  "level": 3
}, {
  "value": "stopPlayback",
  "id": "stopplayback",
  "level": 3
}, {
  "value": "refreshMovingPhoto18+",
  "id": "refreshmovingphoto18",
  "level": 3
}, {
  "value": "示例1：多种形式播放动态照片",
  "id": "示例1多种形式播放动态照片",
  "level": 2
}, {
  "value": "示例2：在元服务中使用动态照片",
  "id": "示例2在元服务中使用动态照片",
  "level": 2
}, {
  "value": "示例3：图像分析功能使用",
  "id": "示例3图像分析功能使用",
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
        id: "ohosmultimediamovingphotoview-动态照片",
        children: "@ohos.multimedia.movingphotoview (动态照片)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于播放动态照片文件并控制其播放状态的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(878125)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前不支持在预览器中使用MovingPhotoView组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390112)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MovingPhotoViewAttribute是用于配置MovingPhotoView组件属性的关键接口。API version 21及之前版本，导入MovingPhotoView组件后需要开发者手动导入MovingPhotoViewAttribute，否则会编译报错。从API version 22开始，编译工具链识别到导入MovingPhotoView组件后，会自动导入MovingPhotoViewAttribute，无需开发者手动导入。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者手动导入MovingPhotoViewAttribute，DevEco Studio会将其显示置灰，API version 21及之前版本删除会编译报错，从API version 22开始，删除对功能无影响。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 21及之前版本："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MovingPhotoView, MovingPhotoViewController, MovingPhotoViewAttribute } from '@kit.MediaLibraryKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 22及之后版本："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MovingPhotoView, MovingPhotoViewController } from '@kit.MediaLibraryKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "movingphotoview",
      children: "MovingPhotoView"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193283)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前不支持动态属性设置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前不支持ArkUI通用属性ComponentOptions中expandSafeArea属性设置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件长按触发播放时组件区域放大为1.1倍。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该组件使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer",
          children: "AVPlayer"
        }), "进行播放，同时开启的AVPlayer个数不建议超过3个，超过3个可能会出现视频播放卡顿现象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MovingPhotoView(options: MovingPhotoViewOptions)"
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#movingphotoviewoptions",
              children: "MovingPhotoViewOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "movingphotoviewoptions",
      children: "MovingPhotoViewOptions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "movingPhoto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-movingphoto/arkts-apis-photoaccesshelper-movingphoto",
              children: "photoAccessHelper.MovingPhoto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持媒体库MovingPhoto数据源，具体信息详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-movingphoto/arkts-apis-photoaccesshelper-movingphoto",
              children: "MovingPhoto"
            }), "说明。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#movingphotoviewcontroller",
              children: "MovingPhotoViewController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置动态照片控制器，可以控制动态照片的播放状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageAIOptions18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#imageaioptions12",
              children: "ImageAIOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置动态照片AI分析选项，可配置分析类型或绑定一个分析控制器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "muted",
      children: "muted"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "muted(isMuted: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否静音。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isMuted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否静音。  默认值：false。  false：非静音。  true：静音。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectfit",
      children: "objectFit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "objectFit(value: ImageFit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置动态照片显示模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagefit",
              children: "ImageFit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频显示模式。  默认值：Cover。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autoplayperiod13",
      children: "autoPlayPeriod13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "autoPlayPeriod(startTime: number, endTime: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自动播放区间，附属于autoPlay的子配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用此方法前，需将", (0,jsx_runtime.jsx)(_components.a, {
        href: "#autoplay13",
        children: "autoPlay"
      }), "设置为true，设置自动播放，否则指定的视频区间(startTime, endTime)无法生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区间播放开始时间，单位：ms。  取值范围：大于等于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区间播放结束时间，单位：ms。  取值范围：大于startTime。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autoplay13",
      children: "autoPlay13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "autoPlay(isAutoPlay: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自动播放，自动播放一遍视频。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态照片加载完成后，准备播放时可以调用，播放完成后显示静态图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isAutoPlay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否自动播放。  false：不自动播放。  true：自动播放。  默认值：false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repeatplay13",
      children: "repeatPlay13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "repeatPlay(isRepeatPlay: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置循环播放，重复播放视频。 repeatPlay与autoPlay及长按播放互斥，repeatPlay设置时，autoPlay和长按播放均不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isRepeatPlay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否循环播放。  false：不循环播放。  true：循环播放。  默认值：false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enableanalyzer18",
      children: "enableAnalyzer18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableAnalyzer(enabled: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置该图片是否支持AI分析，当前支持主体识别、文字识别和对象查找等功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启AI分析。  false：不开启AI分析。  true：开启AI分析。  默认值：true。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncomplete13",
      children: "onComplete13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onComplete(callback: MovingPhotoViewEventCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态照片加载完成图片时触发该事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#movingphotovieweventcallback",
              children: "MovingPhotoViewEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片加载完成图片的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onstart",
      children: "onStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onStart(callback: MovingPhotoViewEventCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放时触发该事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#movingphotovieweventcallback",
              children: "MovingPhotoViewEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片开始播放时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onpause",
      children: "onPause"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPause(callback: MovingPhotoViewEventCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放暂停时触发该事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#movingphotovieweventcallback",
              children: "MovingPhotoViewEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片播放暂停时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onfinish",
      children: "onFinish"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onFinish(callback: MovingPhotoViewEventCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放结束时触发该事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#movingphotovieweventcallback",
              children: "MovingPhotoViewEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片播放结束时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onerror",
      children: "onError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onError(callback: MovingPhotoViewEventCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放失败时触发该事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#movingphotovieweventcallback",
              children: "MovingPhotoViewEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片播放失败时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onstop",
      children: "onStop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onStop(callback: MovingPhotoViewEventCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放停止时触发该事件(当stop()方法被调用后触发)。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#movingphotovieweventcallback",
              children: "MovingPhotoViewEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片停止播放时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onprepared20",
      children: "onPrepared20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPrepared(callback: MovingPhotoViewEventCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态照片准备播放时触发该事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#movingphotovieweventcallback",
              children: "MovingPhotoViewEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片准备播放时的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "movingphotovieweventcallback",
      children: "MovingPhotoViewEventCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "declare type MovingPhotoViewEventCallback = () => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态照片播放状态发生变化时触发的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "movingphotoviewcontroller",
      children: "MovingPhotoViewController"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一个MovingPhotoViewController对象可以控制一个MovingPhotoView，可用视频播放实例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media/arkts-apis-media",
        children: "@ohos.multimedia.media"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MovingPhotoViewController的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "startplayback",
      children: "startPlayback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startPlayback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始播放，动态照片加载完成后，在播放准备，暂停，完成时调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stopplayback",
      children: "stopPlayback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopPlayback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止播放，再次播放时从头开始播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refreshmovingphoto18",
      children: "refreshMovingPhoto18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "refreshMovingPhoto()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "强制刷新动态照片组件加载的视频和图片资源，会打断组件当前的行为，使用时要谨慎。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例1多种形式播放动态照片",
      children: "示例1：多种形式播放动态照片"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { emitter } from '@kit.BasicServicesKit';\nimport { dataSharePredicates } from '@kit.ArkData';\n// API version 21及之前版本导入方式：import { MovingPhotoView, MovingPhotoViewController, MovingPhotoViewAttribute } from '@kit.MediaLibraryKit';\n// API version 22及之后版本导入方式如下：\nimport { MovingPhotoView, MovingPhotoViewController } from '@kit.MediaLibraryKit';\n\nconst PHOTO_SELECT_EVENT_ID: number = 80001\n\n@Entry\n@Component\nstruct MovingPhotoViewDemo {\n  @State src: photoAccessHelper.MovingPhoto | undefined = undefined\n  @State isMuted: boolean = false\n  controller: MovingPhotoViewController = new MovingPhotoViewController()\n  private uiContext: UIContext = this.getUIContext()\n\n  aboutToAppear(): void {\n    emitter.on({\n      eventId: PHOTO_SELECT_EVENT_ID,\n      priority: emitter.EventPriority.IMMEDIATE,\n    }, (eventData: emitter.EventData) => {\n      this.src = AppStorage.get<photoAccessHelper.MovingPhoto>('mv_data') as photoAccessHelper.MovingPhoto\n    })\n  }\n\n  aboutToDisappear(): void {\n    emitter.off(PHOTO_SELECT_EVENT_ID)\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button('PICK')\n          .margin(5)\n          .onClick(async () => {\n            try {\n              let uris: Array<string> = []\n              const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions()\n              photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE\n              photoSelectOptions.maxSelectNumber = 2\n              const photoViewPicker = new photoAccessHelper.PhotoViewPicker()\n              let photoSelectResult: photoAccessHelper.PhotoSelectResult = await photoViewPicker.select(photoSelectOptions)\n              uris = photoSelectResult.photoUris\n              if (uris[0]) {\n                this.handlePickerResult(this.uiContext.getHostContext()!, uris[0], new MediaDataHandlerMovingPhoto())\n              }\n            } catch (e) {\n              console.error(`pick file failed`)\n            }\n          })\n      }\n      .alignItems(VerticalAlign.Center)\n      .justifyContent(FlexAlign.Center)\n      .height('15%')\n\n      Row() {\n        Column() {\n          MovingPhotoView({\n            movingPhoto: this.src,\n            controller: this.controller\n          })\n            .width('100%')\n            .height('100%')\n            .muted(this.isMuted)\n            .autoPlay(true)\n            .repeatPlay(false)\n            .autoPlayPeriod(0, 600)\n            .objectFit(ImageFit.Cover)\n            .onComplete(() => {\n              console.info('Completed');\n            })\n            .onStart(() => {\n              console.info('onStart')\n            })\n            .onFinish(() => {\n              console.info('onFinish')\n            })\n            .onStop(() => {\n              console.info('onStop')\n            })\n            .onError(() => {\n              console.error('onError')\n            })\n        }\n      }\n      .height('70%')\n\n      Row() {\n        Button('start')\n          .onClick(() => {\n            this.controller.startPlayback()\n          })\n          .margin(5)\n        Button('stop')\n          .onClick(() => {\n            this.controller.stopPlayback()\n          })\n          .margin(5)\n        Button('mute')\n          .onClick(() => {\n            this.isMuted = !this.isMuted\n          })\n          .margin(5)\n      }\n      .alignItems(VerticalAlign.Center)\n      .justifyContent(FlexAlign.Center)\n      .height('15%')\n    }\n  }\n\n  async handlePickerResult(context: Context, uri: string, handler: photoAccessHelper.MediaAssetDataHandler<photoAccessHelper.MovingPhoto>): Promise<void> {\n    let uriPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n    uriPredicates.equalTo('uri', uri)\n    let fetchOptions: photoAccessHelper.FetchOptions = {\n      fetchColumns: [],\n      predicates: uriPredicates\n    };\n    let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context)\n    let assetResult = await phAccessHelper.getAssets(fetchOptions)\n    let asset = await assetResult.getFirstObject()\n    let requestOptions: photoAccessHelper.RequestOptions = {\n      deliveryMode: photoAccessHelper.DeliveryMode.FAST_MODE,\n    }\n    try {\n      photoAccessHelper.MediaAssetManager.requestMovingPhoto(context, asset, requestOptions, handler)\n    } catch (err) {\n      console.error(\"request error: \", err)\n    }\n  }\n}\n\nclass MediaDataHandlerMovingPhoto implements photoAccessHelper.MediaAssetDataHandler<photoAccessHelper.MovingPhoto> {\n  async onDataPrepared(movingPhoto: photoAccessHelper.MovingPhoto) {\n    AppStorage.setOrCreate('mv_data', movingPhoto)\n    emitter.emit({\n      eventId: PHOTO_SELECT_EVENT_ID,\n      priority: emitter.EventPriority.IMMEDIATE,\n    }, {\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(168641)/* ["default"] */.A) + "",
        width: "480",
        height: "957"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例2在元服务中使用动态照片",
      children: "示例2：在元服务中使用动态照片"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n// API version 21及之前版本导入方式：import { photoAccessHelper, MovingPhotoView, MovingPhotoViewController, MovingPhotoViewAttribute } from '@kit.MediaLibraryKit';\n// API version 22及之后版本导入方式如下：\nimport { photoAccessHelper, MovingPhotoView, MovingPhotoViewController } from '@kit.MediaLibraryKit';\n\nlet data: photoAccessHelper.MovingPhoto\nasync function loading(context: Context) {\n  try {\n    // 需要确保imageFileUri和videoFileUri对应的资源在应用沙箱存在。\n    let imageFileUri = 'file://{bundleName}/data/storage/el2/base/haps/entry/files/xxx.jpg';\n    let videoFileUri = 'file://{bundleName}/data/storage/el2/base/haps/entry/files/xxx.mp4';\n    data = await photoAccessHelper.MediaAssetManager.loadMovingPhoto(context, imageFileUri, videoFileUri);\n    console.info('load moving photo successfully');\n  } catch (err) {\n    console.error(`load moving photo failed with error: ${err.code}, ${err.message}`);\n  }\n}\n@Entry\n@Component\nstruct Index {\n  controller: MovingPhotoViewController = new MovingPhotoViewController()\n  private uiContext: UIContext = this.getUIContext()\n  @State ImageFit: ImageFit | undefined | null = ImageFit.Contain;\n  @State flag: boolean = true;\n  @State autoPlayFlag: boolean = true;\n  @State repeatPlayFlag: boolean = false;\n  @State autoPlayPeriodStart: number = 0;\n  @State autoPlayPeriodEnd: number = 500;\n  aboutToAppear(): void {\n    loading(this.uiContext.getHostContext()!)\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Stack({ alignContent: Alignment.BottomStart }) {\n          MovingPhotoView({\n            movingPhoto: data,\n            controller: this.controller\n          })\n            .width(300)\n            .height(400)\n            .muted(this.flag)\n            .objectFit(this.ImageFit)\n            .autoPlay(this.autoPlayFlag)\n            .autoPlayPeriod(this.autoPlayPeriodStart, this.autoPlayPeriodEnd)\n            .repeatPlay(this.repeatPlayFlag)\n            .onComplete(() => {\n              console.info('onComplete')\n            })\n            .onStart(() => {\n              console.info('onStart')\n            })\n            .onStop(() => {\n              console.info('onStop')\n            })\n            .onPause(() => {\n              console.info('onPause')\n            })\n            .onFinish(() => {\n              console.info('onFinish')\n            })\n            .onError(() => {\n              console.info('onError')\n            })\n        }\n\n        Row() {\n          Button('Play')\n            .onClick(() => {\n              this.controller.startPlayback()\n            })\n          Button('StopPlay')\n            .onClick(() => {\n              this.controller.stopPlayback()\n            })\n          Button('refreshMovingPhoto')\n            .onClick(() => {\n              this.controller.refreshMovingPhoto()\n            })\n          Button('mute').id('MovingPhotoView_true')\n            .onClick(() => {\n              this.flag = false\n            })\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(786066)/* ["default"] */.A) + "",
        width: "480",
        height: "649"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例3图像分析功能使用",
      children: "示例3：图像分析功能使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { emitter } from '@kit.BasicServicesKit';\nimport { dataSharePredicates } from '@kit.ArkData';\nimport { MovingPhotoView, MovingPhotoViewController, MovingPhotoViewAttribute } from '@kit.MediaLibraryKit';\nimport { visionImageAnalyzer } from '@kit.VisionKit';\nconst PHOTO_SELECT_EVENT_ID: number = 80001\n\n@Entry\n@Component\nstruct MovingPhotoViewDemo {\n  @State src: photoAccessHelper.MovingPhoto | undefined = undefined\n  @State isMuted: boolean = false\n  controller: MovingPhotoViewController = new MovingPhotoViewController()\n  private aiController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  private options: ImageAIOptions = {\n    types: [ImageAnalyzerType.SUBJECT, ImageAnalyzerType.TEXT, ImageAnalyzerType.OBJECT_LOOKUP],\n    aiController: this.aiController\n  }\n  private uiContext: UIContext = this.getUIContext()\n\n  aboutToAppear(): void {\n    emitter.on({\n      eventId: PHOTO_SELECT_EVENT_ID,\n      priority: emitter.EventPriority.IMMEDIATE,\n    }, (eventData: emitter.EventData) => {\n      this.src = AppStorage.get<photoAccessHelper.MovingPhoto>('mv_data') as photoAccessHelper.MovingPhoto\n    })\n  }\n\n  aboutToDisappear(): void {\n    emitter.off(PHOTO_SELECT_EVENT_ID)\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button('PICK')\n          .margin(5)\n          .onClick(async () => {\n            try {\n              let uris: Array<string> = []\n              const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions()\n              photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE\n              photoSelectOptions.maxSelectNumber = 2\n              const photoViewPicker = new photoAccessHelper.PhotoViewPicker()\n              let photoSelectResult: photoAccessHelper.PhotoSelectResult = await photoViewPicker.select(photoSelectOptions)\n              uris = photoSelectResult.photoUris\n              if (uris[0]) {\n                this.handlePickerResult(this.uiContext.getHostContext()!, uris[0], new MediaDataHandlerMovingPhoto())\n              }\n            } catch (e) {\n              console.error(`pick file failed`)\n            }\n          })\n      }\n      .alignItems(VerticalAlign.Center)\n      .justifyContent(FlexAlign.Center)\n      .height('15%')\n\n      Row() {\n        Column() {\n          MovingPhotoView({\n            movingPhoto: this.src,\n            controller: this.controller,\n            imageAIOptions: this.options\n          })\n            .width('100%')\n            .height('100%')\n            .muted(this.isMuted)\n            .autoPlay(true)\n            .repeatPlay(false)\n            .autoPlayPeriod(0, 600)\n            .objectFit(ImageFit.Cover)\n            .enableAnalyzer(true)\n            .onComplete(() => {\n              console.log('Completed');\n            })\n            .onStart(() => {\n              console.log('onStart')\n            })\n            .onFinish(() => {\n              console.log('onFinish')\n            })\n            .onStop(() => {\n              console.log('onStop')\n            })\n            .onError(() => {\n              console.log('onError')\n            })\n        }\n      }\n      .height('70%')\n\n      Row() {\n        Button('start')\n          .onClick(() => {\n            this.controller.startPlayback()\n          })\n          .margin(5)\n        Button('stop')\n          .onClick(() => {\n            this.controller.stopPlayback()\n          })\n          .margin(5)\n        Button('mute')\n          .onClick(() => {\n            this.isMuted = !this.isMuted\n          })\n          .margin(5)\n      }\n      .alignItems(VerticalAlign.Center)\n      .justifyContent(FlexAlign.Center)\n      .height('15%')\n    }\n  }\n\n  async handlePickerResult(context: Context, uri: string, handler: photoAccessHelper.MediaAssetDataHandler<photoAccessHelper.MovingPhoto>): Promise<void> {\n    let uriPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n    uriPredicates.equalTo('uri', uri)\n    let fetchOptions: photoAccessHelper.FetchOptions = {\n      fetchColumns: [],\n      predicates: uriPredicates\n    };\n    let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context)\n    let assetResult = await phAccessHelper.getAssets(fetchOptions)\n    let asset = await assetResult.getFirstObject()\n    let requestOptions: photoAccessHelper.RequestOptions = {\n      deliveryMode: photoAccessHelper.DeliveryMode.FAST_MODE,\n    }\n    try {\n      photoAccessHelper.MediaAssetManager.requestMovingPhoto(context, asset, requestOptions, handler)\n    } catch (err) {\n      console.error(\"request error: \", err)\n    }\n  }\n}\n\nclass MediaDataHandlerMovingPhoto implements photoAccessHelper.MediaAssetDataHandler<photoAccessHelper.MovingPhoto> {\n  async onDataPrepared(movingPhoto: photoAccessHelper.MovingPhoto) {\n    AppStorage.setOrCreate('mv_data', movingPhoto)\n    emitter.emit({\n      eventId: PHOTO_SELECT_EVENT_ID,\n      priority: emitter.EventPriority.IMMEDIATE,\n    }, {\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(39141)/* ["default"] */.A) + "",
        width: "480",
        height: "689"
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
39141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480857-820d0bac14624876e75889050debfee9.gif");

},
878125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
193283(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
786066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960856-8c982fba7d441b8dab144355b188ab5b.gif");

},
168641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440901-9fe0aa69a8dded69fc3c692ecf49a4ae.gif");

},
390112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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