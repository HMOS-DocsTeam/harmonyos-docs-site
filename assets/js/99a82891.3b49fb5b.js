"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["958459"], {
377093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_media_display_arkts_graphics_display_arkts_graphics_display_md_99a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-media-display-arkts-graphics-display-arkts-graphics-display-md-99a.json
var site_docs_arkui_arkts_ui_development_arkts_media_display_arkts_graphics_display_arkts_graphics_display_md_99a_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display/arkts-graphics-display","title":"显示图片 (Image)","description":"开发者经常需要在应用中显示一些图片，例如：按钮中的icon、网络图片、本地图片等。在应用中显示图片需要使用Image组件实现，Image支持多种图片格式，包括png、jpg、jpeg等格式，不支持apng和svga格式，具体支持格式和用法请参考Image组件。","source":"@site/docs/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display/arkts-graphics-display.md","sourceDirName":"arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display","slug":"/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"显示图片 (Image)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-graphics-display","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理软键盘","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard/"},"next":{"title":"视频播放 (Video)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display/arkts-graphics-display.md


const frontMatter = {
	title: '显示图片 (Image)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-graphics-display',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '显示图片 (Image)';

const assets = {

};



const toc = [{
  "value": "加载图片资源",
  "id": "加载图片资源",
  "level": 2
}, {
  "value": "存档图类型数据源",
  "id": "存档图类型数据源",
  "level": 3
}, {
  "value": "多媒体像素图",
  "id": "多媒体像素图",
  "level": 3
}, {
  "value": "可绘制描述符",
  "id": "可绘制描述符",
  "level": 3
}, {
  "value": "显示矢量图",
  "id": "显示矢量图",
  "level": 2
}, {
  "value": "矢量图引用位图",
  "id": "矢量图引用位图",
  "level": 3
}, {
  "value": "添加属性",
  "id": "添加属性",
  "level": 2
}, {
  "value": "设置图片缩放类型",
  "id": "设置图片缩放类型",
  "level": 3
}, {
  "value": "图片插值",
  "id": "图片插值",
  "level": 3
}, {
  "value": "设置图片重复样式",
  "id": "设置图片重复样式",
  "level": 3
}, {
  "value": "设置图片渲染模式",
  "id": "设置图片渲染模式",
  "level": 3
}, {
  "value": "设置图片解码尺寸",
  "id": "设置图片解码尺寸",
  "level": 3
}, {
  "value": "为图片添加滤镜效果",
  "id": "为图片添加滤镜效果",
  "level": 3
}, {
  "value": "同步加载图片",
  "id": "同步加载图片",
  "level": 3
}, {
  "value": "事件调用",
  "id": "事件调用",
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
        id: "显示图片-image",
        children: "显示图片 (Image)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者经常需要在应用中显示一些图片，例如：按钮中的icon、网络图片、本地图片等。在应用中显示图片需要使用Image组件实现，Image支持多种图片格式，包括png、jpg、jpeg等格式，不支持apng和svga格式，具体支持格式和用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image通过调用接口来创建，接口调用形式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image(src: PixelMap | ResourceStr | DrawableDescriptor)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口通过图片数据源获取图片，支持本地图片和网络图片的渲染展示。其中，src是图片的数据源，加载方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8A%A0%E8%BD%BD%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90",
        children: "加载图片资源"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果图片加载过程中出现白色块，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-image-white-lump-solution",
        children: "Image白块解决方案"
      }), "。如果图片加载时间过长，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-texture-compression-improve-performance",
        children: "预置图片资源加载优化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "加载图片资源",
      children: "加载图片资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image支持加载存档图、多媒体像素图和可绘制描述符三种类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "存档图类型数据源",
      children: "存档图类型数据源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存档图类型的数据源可以分为本地资源、网络资源、Resource资源、媒体库资源和base64。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本地资源"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建文件夹，将本地图片放入ets文件夹下的任意位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Image组件引入本地图片路径，即可显示图片（根目录为ets文件夹）。不支持跨包、跨模块调用该Image组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(727813)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使相关模块：build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
            children: "copyCodeResource"
          }), "相关介绍。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 'images/view.jpg'需要替换为开发者所需的资源文件\nImage('images/view.jpg')\n  .width(200)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载本地图片过程中，如果对图片进行修改或者替换，可能会引起应用崩溃。因此需要覆盖图片文件时，应该先删除该文件再重新创建一个同名文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "网络资源"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["引入网络图片需申请权限ohos.permission.INTERNET，具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。此时，Image组件的src参数为网络图片的链接。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前Image组件仅支持加载简单网络图片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首次加载网络图片时，Image组件需要请求网络资源；非首次加载时，默认从缓存中直接读取图片。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["更多图片缓存设置请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app#setimagecachecount7",
            children: "setImageCacheCount"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app#setimagerawdatacachesize7",
            children: "setImageRawDataCacheSize"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app#setimagefilecachesize7",
            children: "setImageFileCacheSize"
          }), "。这三个图片缓存接口主要用于支持简单、通用的场景，后续不再继续演进，且在灵活和扩展性方面存在一定限制，例如："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "无法获取当前缓存占用信息。Image组件目前不支持查询磁盘缓存的实时状态，包括文件总大小和文件数量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "缓存策略不可定制，缺乏缓存状态观测能力。开发者无法通过接口感知缓存命中率、淘汰次数等运行时的指标，难以基于实际缓存效果进行动态调优。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于复杂情况，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony-tpc/ImageKnife",
            children: "ImageKnife"
          }), "，该图像库提供了更灵活、可扩展的缓存策略以及完善的生命周期管理能力，更适合复杂业务需求。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["网络图片必须支持RFC 9113标准，否则会导致加载失败。如果下载的网络图片大于10MB或一次下载的网络图片数量较多，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/network-kit/network-kit-data-transmission/http-request",
            children: "HTTP"
          }), "工具提前下载，提高图片加载性能，方便应用侧管理数据。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在显示网络图片时，Image组件在机制上会依赖", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request-cachedownload/js-apis-request-cachedownload",
            children: "缓存下载模块"
          }), "，开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#%E7%A4%BA%E4%BE%8B3%E4%B8%8B%E8%BD%BD%E4%B8%8E%E6%98%BE%E7%A4%BA%E7%BD%91%E7%BB%9Cgif%E5%9B%BE%E7%89%87",
            children: "示例3（下载与显示网络gif图片）"
          }), "了解具体用法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "缓存下载模块提供独立的预下载接口，允许应用开发者在创建Image组件前预下载所需图片。组件创建后，Image组件可直接从缓存下载模块中获取已下载的图片数据，从而加快图片的显示速度，优化加载体验，并有效避免网络图片加载延迟。网络缓存的位置位于应用根目录下的cache目录中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// $r('app.string.LoadingResources')需要替换为开发者所需的资源文件，资源文件中的value值请替换为真实路径\nImage($r('app.string.LoadingResources'))\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Resource资源"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用资源格式可以跨包/跨模块引入图片，resources文件夹下的图片都可以通过$r资源接口读取到并转换到Resource格式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " resources"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(403357)/* ["default"] */.A) + "",
            width: "340",
            height: "277"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.media.icon')替换为实际资源文件\nImage($r('app.media.icon'))\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "还可以将图片放在rawfile文件夹下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图2"
            })
          }), " rawfile"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(166130)/* ["default"] */.A) + "",
            width: "334",
            height: "394"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// $rawfile('example1.png')需要替换为开发者所需的资源文件\nImage($rawfile('example1.png'))\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体库file://data/storage"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持file://路径前缀的字符串，用于访问通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker",
            children: "选择器"
          }), "提供的图片路径。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "调用接口获取图库的照片url。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'Sample_imagecomponent';\n\n@Entry\n@Component\nstruct MediaLibraryFile {\n  @State imgDatas: string[] = [];\n  // 使用PhotoViewPicker唤起图片选择器，选择图片并且渲染到页面中\n  // 获取照片url集\n  getAllImg() {\n    try {\n      let photoSelectOptions:photoAccessHelper.PhotoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n      photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n      photoSelectOptions.maxSelectNumber = 5;\n      let photoPicker:photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n      photoPicker.select(photoSelectOptions).then((photoSelectResult:photoAccessHelper.PhotoSelectResult) => {\n        this.imgDatas = photoSelectResult.photoUris;\n        hilog.info(DOMAIN, TAG,'PhotoViewPicker.select successfully, photoSelectResult uri: ' + JSON.stringify(photoSelectResult));\n      }).catch((err:Error) => {\n        let message = (err as BusinessError).message;\n        let code = (err as BusinessError).code;\n        hilog.info(DOMAIN, TAG,`PhotoViewPicker.select failed with. Code: ${code}, message: ${message}`);\n      });\n    } catch (err) {\n      let message = (err as BusinessError).message;\n      let code = (err as BusinessError).code;\n      hilog.info(DOMAIN, TAG,`PhotoViewPicker failed with. Code: ${code}, message: ${message}`);\n    };\n  };\n\n  // aboutToAppear中调用上述函数，获取图库的所有图片url，存在imgDatas中\n  async aboutToAppear() {\n    this.getAllImg();\n  };\n  // 使用imgDatas的url加载图片\n  build() {\n    Column() {\n      Grid() {\n        ForEach(this.imgDatas, (item:string) => {\n          GridItem() {\n            Image(item)\n              .width(200)\n          }\n        }, (item:string):string => JSON.stringify(item))\n      }\n    }.width('100%').height('100%')\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "从媒体库获取的url格式通常如下。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 'file://media/Photos/5'需要替换为开发者所需的资源文件，资源文件中的value值请替换为真实路径\nImage('file://media/Photos/5')\n  .width(200)\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "base64"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "路径格式为data:image/[png|jpeg|bmp|webp|heif];base64,[base64 data]，其中[base64 data]为Base64字符串数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Base64格式字符串可用于存储图片的像素数据，在网页上使用较为广泛。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多媒体像素图",
      children: "多媒体像素图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PixelMap是图片解码后的像素图，具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-overview",
        children: "Image Kit简介"
      }), "。以下示例将加载的网络图片返回的数据解码成PixelMap格式，再显示在Image组件上。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'Sample_imagecomponent';\n\n@Entry\n@Component\nstruct HttpExample {\n  outData: http.HttpResponse | undefined = undefined;\n  code: http.ResponseCode | number | undefined = undefined;\n  @State image: PixelMap | undefined = undefined; // 创建PixelMap状态变量\n\n  // 使用createHttp接口将加载的网络图片返回的数据解码成PixelMap格式，再显示在Image组件上\n  aboutToAppear(): void {\n    http.createHttp().request('xxx://xxx.xxx.xxx/example.png', // 需要替换为开发者所需的资源文件，资源文件中的value值请替换为真实路径\n      (error: BusinessError, data: http.HttpResponse) => {\n        if (error) {\n          hilog.error(DOMAIN, TAG, `hello http request failed. Code: ${error.code}, message: ${error.message}`);\n          return;\n        };\n        this.outData = data;\n        // 将网络地址成功返回的数据，编码转码成pixelMap的图片格式\n        if (http.ResponseCode.OK === this.outData.responseCode) {\n          let imageData: ArrayBuffer = this.outData.result as ArrayBuffer;\n          let imageSource: image.ImageSource = image.createImageSource(imageData);\n          let options: image.DecodingOptions = {\n            'desiredPixelFormat': image.PixelMapFormat.RGBA_8888,\n          };\n          imageSource.createPixelMap(options).then((pixelMap: PixelMap) => {\n            this.image = pixelMap;\n          });\n        };\n      });\n  };\n\n  build() {\n    Column() {\n      // 显示图片\n      Image(this.image)\n        .height(100)\n        .width(100)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可绘制描述符",
      children: "可绘制描述符"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DrawableDescriptor是ArkUI提供的一种高级图片抽象机制，它通过将图片资源封装为可编程对象，实现了传统Image组件难以实现的动态组合与运行时控制功能。开发者可利用它实现图片的分层叠加（如徽章图标）、动态属性调整（如颜色滤镜）、复杂动画序列等高级效果，适用于需要灵活控制图片展现或实现复杂视觉交互的场景。详细使用方法，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor",
        children: "DrawableDescriptor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过DrawableDescriptor显示图片及动画的示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  DrawableDescriptor,\n  PixelMapDrawableDescriptor,\n  LayeredDrawableDescriptor,\n  AnimatedDrawableDescriptor,\n  AnimationOptions\n} from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\n\n@Entry\n@Component\nstruct DrawableDescriptorType {\n  // 声明DrawableDescriptor对象\n  @State pixmapDesc: DrawableDescriptor | null = null;\n  @State pixelMapDesc: PixelMapDrawableDescriptor | null = null;\n  @State layeredDesc: LayeredDrawableDescriptor | null = null;\n  @State animatedDesc: AnimatedDrawableDescriptor | null = null;\n  // 动画配置\n  private animationOptions: AnimationOptions = {\n    duration: 3000,\n    iterations: -1\n  };\n\n  // 开发者可利用DrawableDescriptor实现图片的分层叠加（如徽章图标），动态属性调整（如颜色滤镜），复杂动画序列等高级效果\n  async aboutToAppear() {\n    const resManager = this.getUIContext().getHostContext()?.resourceManager;\n    if (!resManager) {\n      return;\n    };\n    // 创建普通DrawableDescriptor\n    // 请将$r('app.media.landscape')替换为实际资源文件\n    let pixmapDescResult = resManager.getDrawableDescriptor($r('app.media.landscape').id);\n    if (pixmapDescResult) {\n      this.pixmapDesc = pixmapDescResult as DrawableDescriptor;\n    };\n    // 创建PixelMapDrawableDescriptor\n    // 请将$r('app.media.landscape')替换为实际资源文件\n    const pixelMap = await this.getPixmapFromMedia($r('app.media.landscape'));\n    this.pixelMapDesc = new PixelMapDrawableDescriptor(pixelMap);\n    // 创建分层图标\n    // 请将$r('app.media.foreground')替换为实际资源文件\n    const foreground = await this.getDrawableDescriptor($r('app.media.foreground'));\n    // 请将$r('app.media.landscape')替换为实际资源文件\n    const background = await this.getDrawableDescriptor($r('app.media.landscape'));\n    this.layeredDesc = new LayeredDrawableDescriptor(foreground, background);\n    // 创建动画图片（需加载多张图片）\n    // 请将$r('app.media.sky')替换为实际资源文件\n    const frame1 = await this.getPixmapFromMedia($r('app.media.sky'));\n    // 请将$r('app.media.landscape')替换为实际资源文件\n    const frame2 = await this.getPixmapFromMedia($r('app.media.landscape'));\n    // 请将$r('app.media.clouds')替换为实际资源文件\n    const frame3 = await this.getPixmapFromMedia($r('app.media.clouds'));\n    if (frame1 && frame2 && frame3) {\n      this.animatedDesc = new AnimatedDrawableDescriptor([frame1, frame2, frame3], this.animationOptions);\n    };\n  };\n\n  // 辅助方法：从资源获取PixelMap\n  private async getPixmapFromMedia(resource: Resource): Promise<image.PixelMap | undefined> {\n    const unit8Array = await this.getUIContext().getHostContext()?.resourceManager.getMediaContent(resource.id);\n    if (!unit8Array) {\n      return undefined;\n    };\n    const imageSource = image.createImageSource(unit8Array.buffer.slice(0, unit8Array.buffer.byteLength));\n    const pixelMap = await imageSource.createPixelMap({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    });\n    await imageSource.release();\n    return pixelMap;\n  };\n\n  // 辅助方法：获取DrawableDescriptor\n  private async getDrawableDescriptor(resource: Resource): Promise<DrawableDescriptor | undefined> {\n    const resManager = this.getUIContext().getHostContext()?.resourceManager;\n    if (!resManager) {\n      return undefined;\n    };\n    return (resManager.getDrawableDescriptor(resource.id)) as DrawableDescriptor;\n  };\n\n  build() {\n    RelativeContainer() {\n      Column() {\n        // 显示普通图片\n        Image(this.pixmapDesc)\n          .width(100)\n          .height(100)\n          .border({ width: 1, color: Color.Black })\n        // 显示PixelMap图片\n        Image(this.pixelMapDesc)\n          .width(100)\n          .height(100)\n          .border({ width: 1, color: Color.Red })\n        // 显示分层图标\n        if (this.layeredDesc) {\n          Image(this.layeredDesc)\n            .width(100)\n            .height(100)\n            .border({ width: 1, color: Color.Blue })\n        }\n        // 显示动画图片\n        if (this.animatedDesc) {\n          Image(this.animatedDesc)\n            .width(200)\n            .height(200)\n            .margin({ top: 20 })\n        }\n      }\n    }\n    .height('100%')\n    .width('100%')\n    .margin(50)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(184802)/* ["default"] */.A) + "",
        width: "238",
        height: "495"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "显示矢量图",
      children: "显示矢量图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image组件可显示矢量图（SVG格式的图片），SVG标签文档请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-svg/ts-basic-svg",
        children: "SVG标签说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果SVG图片没有原始大小，需要给Image组件设置宽高，否则不显示。SVG图片不支持通过image标签引用SVG格式和gif格式的本地其他图片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SVG格式的图片可以使用fillColor属性改变图片的绘制颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 请将$r('app.media.cloud')替换为实际资源文件\nImage($r('app.media.cloud'))\n  .width(50)\n  .fillColor(Color.Blue)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 原始图片"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(15948)/* ["default"] */.A) + "",
        width: "89",
        height: "104"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 设置绘制颜色后的SVG图片"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(887617)/* ["default"] */.A) + "",
        width: "83",
        height: "80"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "矢量图引用位图",
      children: "矢量图引用位图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果Image加载的SVG图源中包含对本地位图的引用，则SVG图源的路径应当设置为以ets为根目录的工程路径，同时，本地位图的路径应设置为与SVG图源同级的相对路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image加载的SVG图源路径设置方法如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 'images/icon.svg'需要替换为开发者所需的资源文件\nImage('/images/icon.svg')\n  .width(50)\n  .height(50)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SVG图源通过<image>标签的xlink:href属性指定本地位图路径，本地位图路径设置为跟SVG图源同级的相对路径："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<svg width=\"200\" height=\"200\">\n  <image width=\"200\" height=\"200\" xlink:href=\"sky.png\"></image>\n</svg>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件工程路径示例如图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(268296)/* ["default"] */.A) + "",
        width: "297",
        height: "178"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加属性",
      children: "添加属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["给Image组件设置属性可以使图片显示更灵活，达到一些自定义的效果。以下是几个常用属性的使用示例，完整属性信息详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置图片缩放类型",
      children: "设置图片缩放类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan#objectfit",
        children: "objectFit"
      }), "属性，可以使图片在高度和宽度确定的框内进行缩放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageScalingType {\n  scroller: Scroller = new Scroller();\n\n  build() {\n    Scroll(this.scroller) {\n      Row() {\n        Column() {\n          // 请将$r('app.media.img_2')替换为实际资源文件\n          Image($r('app.media.img_2'))\n            .width(200)\n            .height(150)\n            .border({ width: 1 })\n            // 通过设置objectFit属性，可以使图片在高度和宽度确定的框内进行缩放\n            // 保持宽高比进行缩小或者放大，使得图片完全显示在显示边界内\n            .objectFit(ImageFit.Contain)\n            .margin({bottom:25,left:10})\n            // overlay接口暂不支持深色模式\n            .overlay('Contain', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          // 请将$r('app.media.img_2')替换为实际资源文件\n          Image($r('app.media.img_2'))\n            .width(200)\n            .height(150)\n            .border({ width: 1 })\n            // 通过设置objectFit属性，可以使图片在高度和宽度确定的框内进行缩放\n            // 保持宽高比进行缩小或者放大，使得图片两边都大于或等于显示边界\n            .objectFit(ImageFit.Cover)\n            .margin({bottom:25,left:10})\n            // overlay接口暂不支持深色模式\n            .overlay('Cover', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          // 请将$r('app.media.img_2')替换为实际资源文件\n          Image($r('app.media.img_2'))\n            .width(200)\n            .height(150)\n            .border({ width: 1 })\n            // 通过设置objectFit属性，可以使图片在高度和宽度确定的框内进行缩放\n            // 自适应显示\n            .objectFit(ImageFit.Auto)\n            .margin({bottom:25,left:10})\n            // overlay接口暂不支持深色模式\n            .overlay('Auto', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n        }\n\n        Column() {\n          // 请将$r('app.media.img_2')替换为实际资源文件\n          Image($r('app.media.img_2'))\n            .width(200)\n            .height(150)\n            .border({ width: 1 })\n            // 通过设置objectFit属性，可以使图片在高度和宽度确定的框内进行缩放\n            // 不保持宽高比进行放大缩小，使得图片充满显示边界\n            .objectFit(ImageFit.Fill)\n            .margin({bottom:25,left:10})\n            // overlay接口暂不支持深色模式\n            .overlay('Fill', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          // 请将$r('app.media.img_2')替换为实际资源文件\n          Image($r('app.media.img_2'))\n            .width(200)\n            .height(150)\n            .border({ width: 1 })\n            // 通过设置objectFit属性，可以使图片在高度和宽度确定的框内进行缩放\n            // 保持宽高比显示，图片缩小或者保持不变\n            .objectFit(ImageFit.ScaleDown)\n            .margin({bottom:25,left:10})\n            // overlay接口暂不支持深色模式\n            .overlay('ScaleDown', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          // 请将$r('app.media.img_2')替换为实际资源文件\n          Image($r('app.media.img_2'))\n            .width(200)\n            .height(150)\n            .border({ width: 1 })\n            // 通过设置objectFit属性，可以使图片在高度和宽度确定的框内进行缩放\n            // 保持原有尺寸显示\n            .objectFit(ImageFit.None)\n            .margin({bottom:25,left:10})\n            // overlay接口暂不支持深色模式\n            .overlay('None', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(362060)/* ["default"] */.A) + "",
        width: "381",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图片插值",
      children: "图片插值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当原图分辨率较低并放大显示时，图片会变得模糊并出现锯齿。这时可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#interpolation",
        children: "interpolation"
      }), "属性对图片进行插值，以提高显示清晰度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageInterpolationType {\n  build() {\n    Column() {\n      Row() {\n        // 请将$r('app.media.grass')替换为实际资源文件\n        Image($r('app.media.grass'))\n          .width('40%')\n          // 使用interpolation接口对图片进行插值，显著提升清晰度\n          .interpolation(ImageInterpolation.None)\n          .borderWidth(1)\n          // overlay接口暂不支持深色模式\n          .overlay('Interpolation.None', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          .margin(10)\n        // 请将$r('app.media.grass')替换为实际资源文件\n        Image($r('app.media.grass'))\n          .width('40%')\n          // 使用interpolation接口对图片进行插值，显著提升清晰度\n          .interpolation(ImageInterpolation.Low)\n          .borderWidth(1)\n          // overlay接口暂不支持深色模式\n          .overlay('Interpolation.Low', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          .margin(10)\n      }.width('100%')\n      .justifyContent(FlexAlign.Center)\n\n      Row() {\n        // 请将$r('app.media.grass')替换为实际资源文件\n        Image($r('app.media.grass'))\n          .width('40%')\n          // 使用interpolation接口对图片进行插值，显著提升清晰度\n          .interpolation(ImageInterpolation.Medium)\n          .borderWidth(1)\n          // overlay接口暂不支持深色模式\n          .overlay('Interpolation.Medium', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          .margin(10)\n        // 请将$r('app.media.grass')替换为实际资源文件\n        Image($r('app.media.grass'))\n          .width('40%')\n          // 使用interpolation接口对图片进行插值，显著提升清晰度\n          .interpolation(ImageInterpolation.High)\n          .borderWidth(1)\n          // overlay接口暂不支持深色模式\n          .overlay('Interpolation.High', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          .margin(10)\n      }.width('100%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(637192)/* ["default"] */.A) + "",
        width: "351",
        height: "358"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置图片重复样式",
      children: "设置图片重复样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过objectRepeat属性设置图片的重复样式方式，重复样式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagerepeat",
        children: "ImageRepeat"
      }), "枚举说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageRepetitionStyle {\n  build() {\n    Column({ space: 10 }) {\n      Column({ space: 25 }) {\n        // 请将$r('app.media.ic_public_favor_filled_1')替换为实际资源文件\n        Image($r('app.media.ic_public_favor_filled_1'))\n          .width(160)\n          .height(160)\n          .border({ width: 1 })\n          // 通过objectRepeat属性设置图片的重复样式方式\n          // 在水平轴和竖直轴上同时重复绘制图片\n          .objectRepeat(ImageRepeat.XY)\n          .objectFit(ImageFit.ScaleDown)\n          // overlay接口暂不支持深色模式\n          .overlay('ImageRepeat.XY', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n        // 请将$r('app.media.ic_public_favor_filled_1')替换为实际资源文件\n        Image($r('app.media.ic_public_favor_filled_1'))\n          .width(160)\n          .height(160)\n          .border({ width: 1 })\n          // 通过objectRepeat属性设置图片的重复样式方式\n          // 只在竖直轴上重复绘制图片\n          .objectRepeat(ImageRepeat.Y)\n          .objectFit(ImageFit.ScaleDown)\n          // overlay接口暂不支持深色模式\n          .overlay('ImageRepeat.Y', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n        // 请将$r('app.media.ic_public_favor_filled_1')替换为实际资源文件\n        Image($r('app.media.ic_public_favor_filled_1'))\n          .width(160)\n          .height(160)\n          .border({ width: 1 })\n          // 通过objectRepeat属性设置图片的重复样式方式\n          // 只在水平轴上重复绘制图片\n          .objectRepeat(ImageRepeat.X)\n          .objectFit(ImageFit.ScaleDown)\n          // overlay接口暂不支持深色模式\n          .overlay('ImageRepeat.X', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n      }\n    }.height(150).width('100%').padding(8)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(70830)/* ["default"] */.A) + "",
        width: "169",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置图片渲染模式",
      children: "设置图片渲染模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过renderMode属性设置图片的渲染模式为原色或黑白。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SetImageRenderingMode {\n  build() {\n    Column({ space: 10 }) {\n      Row({ space: 50 }) {\n        // 请将$r('app.media.example')替换为实际资源文件\n        Image($r('app.media.example'))\n          // 通过renderMode属性设置图片的渲染模式为原色或黑白\n          .renderMode(ImageRenderMode.Original)\n          .width(100)\n          .height(100)\n          .border({ width: 1 })\n          // overlay接口暂不支持深色模式\n          .overlay('Original', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n        // 请将$r('app.media.example')替换为实际资源文件\n        Image($r('app.media.example'))\n          // 通过renderMode属性设置图片的渲染模式为原色或黑白\n          .renderMode(ImageRenderMode.Template)\n          .width(100)\n          .height(100)\n          .border({ width: 1 })\n          // overlay接口暂不支持深色模式\n          .overlay('Template', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n      }\n    }.height(150).width('100%').padding({ top: 20,right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983777)/* ["default"] */.A) + "",
        width: "311",
        height: "154"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置图片解码尺寸",
      children: "设置图片解码尺寸"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过sourceSize属性设置图片解码尺寸，降低图片的分辨率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原图尺寸为1280×960，该示例将图片解码为40×40和90×90两个尺寸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SetImageDecodingSize {\n  build() {\n    Column() {\n      Row({ space: 50 }) {\n        // 请将$r('app.media.example')替换为实际资源文件\n        Image($r('app.media.example'))\n        // 使用sourceSize接口对图片设置解码尺寸，降低图片分辨率\n          .sourceSize({\n            width: 40,\n            height: 40\n          })\n          .objectFit(ImageFit.ScaleDown)\n          .aspectRatio(1)\n          .width('25%')\n          .border({ width: 1 })\n          // overlay接口暂不支持深色模式\n          .overlay('width:40 height:40', { align: Alignment.Bottom, offset: { x: 0, y: 40 } })\n        // 请将$r('app.media.example')替换为实际资源文件\n        Image($r('app.media.example'))\n        // 使用sourceSize接口对图片设置解码尺寸，降低图片分辨率\n          .sourceSize({\n            width: 90,\n            height: 90\n          })\n          .objectFit(ImageFit.ScaleDown)\n          .width(100)\n          .height(100)\n          .aspectRatio(1)\n          .border({ width: 1 })\n          // overlay接口暂不支持深色模式\n          .overlay('width:90 height:90', { align: Alignment.Bottom, offset: { x: 0, y: 40 } })\n      }.height(150).width('100%').padding(20)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(125781)/* ["default"] */.A) + "",
        width: "277",
        height: "204"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "为图片添加滤镜效果",
      children: "为图片添加滤镜效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过colorFilter调整图片的像素颜色，为图片添加滤镜。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct AddFilterEffectsToImages {\n  build() {\n    Column() {\n      Row() {\n        // 请将$r('app.media.example')替换为实际资源文件\n        Image($r('app.media.example'))\n          .width('40%')\n          .margin(10)\n        // 请将$r('app.media.example')替换为实际资源文件\n        Image($r('app.media.example'))\n          .width('40%')\n          // 通过colorFilter调整图片的像素颜色，为图片添加滤镜\n          .colorFilter(\n             [1, 1, 0, 0, 0,\n              0, 1, 0, 0, 0,\n              0, 0, 1, 0, 0,\n              0, 0, 0, 1, 0])\n          .margin(10)\n      }.width('100%')\n      .justifyContent(FlexAlign.Center)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(75559)/* ["default"] */.A) + "",
        width: "444",
        height: "166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "同步加载图片",
      children: "同步加载图片"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般情况下，图片加载流程会异步进行，以避免阻塞主线程，影响UI交互。但是特定情况下，图片刷新时会出现闪烁，这时可以使用syncLoad属性，使图片同步加载，从而避免出现闪烁。不建议图片加载较长时间时使用，会导致页面无法响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 请将$r('app.media.icon')替换为实际资源文件\nImage($r('app.media.icon'))\n  .syncLoad(true)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件调用",
      children: "事件调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过在Image组件上绑定onComplete事件，图片加载成功后可以获取图片的必要信息。如果图片加载失败，也可以通过绑定onError回调来获得结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'Sample_imagecomponent';\n\n@Entry\n@Component\nstruct EventCall {\n  @State widthValue: number = 0;\n  @State heightValue: number = 0;\n  @State componentWidth: number = 0;\n  @State componentHeight: number = 0;\n\n  build() {\n    Column() {\n      Row() {\n        // 请将$r('app.media.ic_img_2')替换为实际资源文件\n        Image($r('app.media.ic_img_2'))\n          .width(200)\n          .height(150)\n          .margin(15)\n          // 图片加载成功后，通过onComplete获取图片必要信息\n          .onComplete(msg => {\n            if(msg){\n              this.widthValue = msg.width;\n              this.heightValue = msg.height;\n              this.componentWidth = msg.componentWidth;\n              this.componentHeight = msg.componentHeight;\n            };\n            hilog.info(DOMAIN, TAG, `${msg}`);\n          })\n          // 如果加载失败，使用onError触发回调函数获取结果\n          .onError(() => {\n            hilog.info(DOMAIN, TAG, 'load image fail');\n          })\n          // overlay接口暂不支持深色模式\n          .overlay('\\nwidth: ' + String(this.widthValue) + ', height: ' + String(this.heightValue) + '\\ncomponentWidth: ' + String(this.componentWidth) + '\\ncomponentHeight: ' + String(this.componentHeight), {\n            align: Alignment.Bottom,\n            offset: { x: 0, y: 60 }\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(321318)/* ["default"] */.A) + "",
        width: "199",
        height: "206"
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
268296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
362060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437905-9676c7229151236ba97f8b243ada21c7.png");

},
321318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477863-3d06f0773491b9f6878acf40330f34db.png");

},
166130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798208-000937c50406810748378374c0d604ab.jpg");

},
637192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957860-dd0cd011d0cdf3b61dde8d070c43d4ba.png");

},
70830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477861-c6bb513a491675dcc9e39d701aedd911.png");

},
15948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
125781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437907-50f68d9afefdf1e036aea7e2090a6907.png");

},
727813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
983777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798212-495699379c58db4e813dc2d3e81623e4.png");

},
887617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
184802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437903-100e9b414c84edddc7e59777d407cb03.gif");

},
403357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477857-e2d5086056d93c08dfdbfb83083bc588.jpg");

},
75559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957862-cf880206bf48bd078247051848462f5f.png");

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