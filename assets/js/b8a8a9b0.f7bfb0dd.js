"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["228919"], {
301971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_image_decoding_c_image_allocator_type_c_image_allocator_type_c_md_b8a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-image-decoding-c-image-allocator-type-c-image-allocator-type-c-md-b8a.json
var site_docs_image_kit_image_native_image_decoding_c_image_allocator_type_c_image_allocator_type_c_md_b8a_namespaceObject = JSON.parse('{"id":"image-kit/image-native/image-decoding-c/image-allocator-type-c/image-allocator-type-c","title":"图片解码内存优化(C/C++)","description":"应用在进行图片解码操作时，需要申请解码所需的内存。当前指导将介绍不同的内存类型，以及如何进行申请。","source":"@site/docs/image-kit/image-native/image-decoding-c/image-allocator-type-c/image-allocator-type-c.md","sourceDirName":"image-kit/image-native/image-decoding-c/image-allocator-type-c","slug":"/image-kit/image-native/image-decoding-c/image-allocator-type-c/","permalink":"/harmonyos-docs-site/image-kit/image-native/image-decoding-c/image-allocator-type-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"图片解码内存优化(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-allocator-type-c","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Image_NativeModule完成多图对象解码","permalink":"/harmonyos-docs-site/image-kit/image-native/image-decoding-c/image-source-picture-c/"},"next":{"title":"使用Image_NativeModule完成图片编码","permalink":"/harmonyos-docs-site/image-kit/image-native/image-encoding-c/image-packer-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native/image-decoding-c/image-allocator-type-c/image-allocator-type-c.md


const frontMatter = {
	title: '图片解码内存优化(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-allocator-type-c',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '图片解码内存优化(C/C++)';

const assets = {

};



const toc = [{
  "value": "内存类型介绍",
  "id": "内存类型介绍",
  "level": 2
}, {
  "value": "SHARE_MEMORY和DMA_ALLOC的区别",
  "id": "share_memory和dma_alloc的区别",
  "level": 3
}, {
  "value": "使用DMA_ALLOC的优势",
  "id": "使用dma_alloc的优势",
  "level": 3
}, {
  "value": "系统默认的内存分配方式",
  "id": "系统默认的内存分配方式",
  "level": 2
}, {
  "value": "自定义内存分配方式",
  "id": "自定义内存分配方式",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 3
}, {
  "value": "获取stride",
  "id": "获取stride",
  "level": 3
}, {
  "value": "解码单张图片的内存限制",
  "id": "解码单张图片的内存限制",
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
        id: "图片解码内存优化cc",
        children: "图片解码内存优化(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在进行图片解码操作时，需要申请解码所需的内存。当前指导将介绍不同的内存类型，以及如何进行申请。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用侧通过解码API接口获取PixelMap，并将其传递给Image组件以进行显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当PixelMap占用的内存空间较大且使用共享内存时，RenderScript主线程将经历较长的纹理上传时间，导致卡顿现象。图形侧提供了DMA（Direct Memory Access）内存零拷贝功能，可在绘制图片时避免这一消耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内存类型介绍",
      children: "内存类型介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前PixelMap的内存类型包括以下两种。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SHARE_MEMORY：共享内存。需要进行纹理上传。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DMA_ALLOC：DMA内存。无需纹理上传。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createpixelmapusingallocator",
        children: "OH_ImageSourceNative_CreatePixelmapUsingAllocator"
      }), "接口，以便用户能够自定义内存分配类型进行解码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "share_memory和dma_alloc的区别",
      children: "SHARE_MEMORY和DMA_ALLOC的区别"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SHARE_MEMORY"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DMA_ALLOC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作系统提供的共享内存（如ashmem/匿名共享），便于在同一物理页上读写。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用可被外设/GPU/显示管线直接DMA访问的缓冲区（常见形态是dmabuf/SurfaceBuffer），用于零拷贝链路。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "工作原理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程共享同一段内存，通过CPU进行读写。若要给GPU/显示使用，通常需进行拷贝。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码器通过DMA将数据写入dmabuf；GPU/显示直接使用该dmabuf，无需拷贝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于进程或线程间的数据共享，如后处理、算法中间结果交换等场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频/图片硬解、预览、显示等高带宽数据传输场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU占用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU需参与共享内存的管理和同步（如加锁、解锁），会造成额外开销。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "占用极低，CPU仅参与DMA控制器的配置，实际数据传输无需CPU干预。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "硬件依赖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖操作系统支持的共享内存机制。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强依赖硬件DMA控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "内存分配与访问权限"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统为共享内存分配物理或虚拟内存区域，访问需通过用户或内核映射操作。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA控制器直接操作物理内存，需预先分配DMA缓冲区（通常是连续内存）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "优势"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "灵活性强。支持多线程或多进程同时共享数据，便于图像后处理和协作。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高效、低延迟；适合大数据量、连续数据块的传输。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "缺点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享内存操作需要额外的同步机制，增加编程复杂度和CPU负担。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要硬件支持，数据传输范围受DMA地址空间限制（通常需要连续物理内存）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用dma_alloc的优势",
      children: "使用DMA_ALLOC的优势"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "减少纹理上传时间"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当使用SHARE_MEMORY时，图片数据需通过CPU复制到GPU显存，增加了纹理上传的时间。而采用DMA_ALLOC后，数据直接保存在GPU可访问的内存中，避免了耗时的复制过程。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SHARE_MEMORY耗时：4K图片单帧渲染耗时约为20ms。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DMA_ALLOC耗时：4K图片单帧渲染时间可降至约4ms。此项优化在大尺寸图片显示和高频动态图片加载场景中效果尤为显著。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "减轻CPU负载"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DMA_ALLOC允许GPU直接访问解码后数据，减少了内存复制带来的负载。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统默认的内存分配方式",
      children: "系统默认的内存分配方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createpixelmap",
        children: "OH_ImageSourceNative_CreatePixelmap"
      }), "进行解码时，不同场景下会采取不同的内存分配类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下场景将使用DMA_ALLOC。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解码HDR图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解码HEIF格式图片。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["解码JPEG格式图片，原图的宽和高均在1024像素至8192像素之间，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
          children: "PIXEL_FORMAT"
        }), "为PIXEL_FORMAT_RGBA_8888或PIXEL_FORMAT_NV21，同时系统并发任务数不超过3个。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["解码其他格式图片。要求", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
          children: "OH_DecodingOptions"
        }), "里的desiredSize大于等于512像素 * 512像素（未设置desiredSize时按原图尺寸考虑），并且宽度为64的倍数。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除上述场景外，其余情况均使用SHARE_MEMORY。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义内存分配方式",
      children: "自定义内存分配方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认场景下，由系统选择性能最优的内存分配方式。特定场景支持应用使用指定的内存分配方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createpixelmapusingallocator",
        children: "OH_ImageSourceNative_CreatePixelmapUsingAllocator"
      }), "进行解码时，系统会根据传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
        children: "解码参数"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#image_allocator_type",
        children: "内存申请类型"
      }), "，自动选择硬件解码和软件解码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在创建像素图时，将根据用户指定的分配器类型来决定采用DMA_ALLOC分配机制还是SHARE_MEMORY分配机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前图片解码功能针对内存分配模式有如下限制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HDR图片解码仅支持DMA_ALLOC的内存模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "硬件解码仅支持DMA_ALLOC的内存模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SVG格式图片解码仅支持SHARE_MEMORY的内存模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createpixelmapusingallocator",
        children: "OH_ImageSourceNative_CreatePixelmapUsingAllocator"
      }), "进行解码时，若设置的内存分配模式与图片格式或解码方式不匹配，则会抛出内存分配失败的异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果用户选择的分配类型为AUTO，系统将根据解码和渲染的时间综合评估，以决定使用DMA_ALLOC还是SHARE_MEMORY分配机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同的内存分配策略会导致图片的stride（步幅）有所差异。对于通过DMA_ALLOC申请的内存，在对PixelMap执行编辑等操作时，必须使用stride。接下来将介绍如何获取stride。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取stride",
      children: "获取stride"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stride（步幅）描述了图片在内存中每一行像素数据的存储宽度。它是图片绘制过程中的重要参数，用于正确定位图片数据在内存中的布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用DMA分配机制分配内存时，stride必须满足硬件对齐要求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "stride值需为硬件平台要求字节数的整数倍。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当stride值不满足对齐要求时，系统会自动补齐填充数据（padding）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["stride的值可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_getimageinfo",
            children: "OH_PixelmapNative_GetImageInfo"
          }), " 接口获取。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_getimageinfo",
          children: "OH_PixelmapNative_GetImageInfo"
        }), "方法，获取 OH_Pixelmap_ImageInfo 对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapimageinfo_getrowstride",
          children: "OH_PixelmapImageInfo_GetRowStride"
        }), "方法，获取stride的值。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C-API 获取和操作stride示例代码如下。在使用下面的示例代码之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加libimage_packer.so 以及日志依赖libhilog_ndk.z.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhilog_ndk.z.so libimage_source.so libimage_packer.so libpixelmap.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(550304)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分接口在API version 20以后才支持，需要开发者在进行开发时选择合适的API版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建GetJsResult函数处理napi返回值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 处理napi返回值。\nnapi_value GetJsResult(napi_env env, int result)\n{\n    napi_value resultNapi = nullptr;\n    napi_create_int32(env, result, &resultNapi);\n    return resultNapi;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取和操作stride值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstring>\n#include <hilog/log.h>\n#include <multimedia/image_framework/image/image_common.h>\n#include <multimedia/image_framework/image/pixelmap_native.h>\n#include <multimedia/image_framework/image/image_source_native.h>\n// ...\n\n// 根据像素格式返回每像素的字节数。\nint32_t GetPixelFormatBytes(int32_t pixelFormat)\n{\n    switch (pixelFormat) {\n        case PIXEL_FORMAT_RGB_565:\n            return 2; // 每像素2字节。\n        case PIXEL_FORMAT_RGBA_8888:\n        case PIXEL_FORMAT_BGRA_8888:\n            return 4; // 每像素4字节。\n        case PIXEL_FORMAT_RGB_888:\n            return 3; // 每像素3字节。\n        case PIXEL_FORMAT_ALPHA_8:\n            return 1; // 每像素1字节。\n        case PIXEL_FORMAT_RGBA_F16:\n            return 8; // 每通道16位浮点数，共4通道，合计8字节。\n        case PIXEL_FORMAT_NV21:\n        case PIXEL_FORMAT_NV12:\n            // NV21和NV12格式是YUV 4:2:0半平面格式，返回2作为每像素字节。\n            return 2; // 每像素2字节（简化处理）。\n        case PIXEL_FORMAT_RGBA_1010102:\n            return 4; // 每像素4字节。\n        case PIXEL_FORMAT_YCBCR_P010:\n        case PIXEL_FORMAT_YCRCB_P010:\n            return 2; // 每像素2字节。\n        default:\n            return 0; // 如果像素格式未知，返回0。\n    }\n}\n\nstruct PixelmapInfo {\n    uint32_t width = 0;\n    uint32_t height = 0;\n    uint32_t rowStride = 0;\n    int32_t pixelFormat = 0;\n    uint32_t byteCount = 0;\n    uint32_t allocationByteCount = 0;\n};\n\nstatic void GetPixelmapInfo(OH_PixelmapNative *pixelmap, PixelmapInfo *info)\n{\n    OH_Pixelmap_ImageInfo *srcInfo = nullptr;\n    OH_PixelmapImageInfo_Create(&srcInfo);\n    OH_PixelmapNative_GetImageInfo(pixelmap, srcInfo);\n    OH_PixelmapImageInfo_GetWidth(srcInfo, &info->width);\n    OH_PixelmapImageInfo_GetHeight(srcInfo, &info->height);\n    OH_PixelmapImageInfo_GetRowStride(srcInfo, &info->rowStride);\n    OH_PixelmapImageInfo_GetPixelFormat(srcInfo, &info->pixelFormat);\n    OH_PixelmapImageInfo_Release(srcInfo);\n    srcInfo = nullptr;\n    return;\n}\n\nstatic void GetPixelmapAddrInfo(OH_PixelmapNative *pixelmap, PixelmapInfo *info)\n{\n    OH_PixelmapNative_GetByteCount(pixelmap, &info->byteCount);\n    OH_PixelmapNative_GetAllocationByteCount(pixelmap, &info->allocationByteCount);\n    return;\n}\n\nvoid DataCopy(OH_PixelmapNative *pixelmap, OH_ImageSourceNative* imageSource, OH_DecodingOptions *options,\n              IMAGE_ALLOCATOR_TYPE allocatorType)\n{\n    PixelmapInfo srcInfo;\n    GetPixelmapInfo(pixelmap, &srcInfo);\n    GetPixelmapAddrInfo(pixelmap, &srcInfo);\n\n    void *pixels = nullptr;\n    OH_PixelmapNative_AccessPixels(pixelmap, &pixels);\n    OH_PixelmapNative *newPixelmap = nullptr;\n    OH_ImageSourceNative_CreatePixelmap(imageSource, options, &newPixelmap);\n    uint32_t dstRowStride = srcInfo.width * GetPixelFormatBytes(srcInfo.pixelFormat);\n    void *newPixels = nullptr;\n    OH_PixelmapNative_AccessPixels(newPixelmap, &newPixels);\n    uint8_t *src = reinterpret_cast<uint8_t *>(pixels);\n    uint8_t *dst = reinterpret_cast<uint8_t *>(newPixels);\n    uint32_t dstSize = srcInfo.byteCount;\n    uint32_t rowSize;\n    if (allocatorType == IMAGE_ALLOCATOR_TYPE::IMAGE_ALLOCATOR_TYPE_DMA) {\n        rowSize = srcInfo.rowStride;\n    } else {\n        rowSize = dstRowStride;\n    }\n    for (uint32_t i = 0; i < srcInfo.height; ++i) {\n        if (dstSize >= dstRowStride) {\n            std::copy(src, src + dstRowStride, dst);\n        } else {\n            break;\n        }\n        src += rowSize;\n        dst += dstRowStride;\n        dstSize -= dstRowStride;\n    }\n    OH_PixelmapNative_UnaccessPixels(newPixelmap);\n    OH_PixelmapNative_UnaccessPixels(pixelmap);\n    OH_DecodingOptions_Release(options);\n    options = nullptr;\n    OH_ImageSourceNative_Release(imageSource);\n    imageSource = nullptr;\n    OH_PixelmapNative_Release(pixelmap);\n    pixelmap = nullptr;\n    OH_PixelmapNative_Release(newPixelmap);\n    newPixelmap = nullptr;\n}\n\nnapi_value TestStrideWithAllocatorType(napi_env env, napi_callback_info info)\n{\n    napi_value argValue[1] = {nullptr};\n    size_t argCount = 1;\n    if (napi_get_cb_info(env, info, &argCount, argValue, nullptr, nullptr) != napi_ok || argCount < 1 ||\n        argValue[0] == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"CreateImageSource napi_get_cb_info failed!\");\n        return GetJsResult(env, IMAGE_BAD_PARAMETER);\n    }\n    \n    const size_t maxPathLength = 1024;\n    char filePath[maxPathLength];\n    size_t pathSize = maxPathLength;\n    napi_get_value_string_utf8(env, argValue[0], filePath, maxPathLength, &pathSize);\n\n    OH_ImageSourceNative* imageSource = nullptr;\n    Image_ErrorCode image_ErrorCode = OH_ImageSourceNative_CreateFromUri(filePath, pathSize, &imageSource);\n    OH_DecodingOptions *options = nullptr;\n    OH_DecodingOptions_Create(&options);\n    IMAGE_ALLOCATOR_TYPE allocatorType = IMAGE_ALLOCATOR_TYPE::IMAGE_ALLOCATOR_TYPE_DMA;  // 使用DMA创建pixelMap。\n    OH_PixelmapNative *pixelmap = nullptr;\n    image_ErrorCode = OH_ImageSourceNative_CreatePixelmapUsingAllocator(imageSource, options, allocatorType, &pixelmap);\n    DataCopy(pixelmap, imageSource, options, allocatorType);\n    return GetJsResult(env, image_ErrorCode);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解码单张图片的内存限制",
      children: "解码单张图片的内存限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了防止内存溢出导致系统崩溃，系统对进程内存做了限制，详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-runtime-appkilled-detection",
        children: "应用被查杀问题检测方法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图片框架对解码单张图片设置了2GB的内存限制。进程需要主动管理自身内存，建议在不使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
        children: "OH_PixelmapNative"
      }), "时及时释放，以避免进程被系统终止。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onmemorylevel",
        children: "onMemoryLevel"
      }), "监听系统内存变化情况。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PixelMap申请像素内存的计算规则如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pixels_size(像素内存大小) = stride(图片像素存储宽度) * height(图片像素高度)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于原始像素内存超过2GB且支持下采样的图片，建议开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createpixelmap",
        children: "OH_ImageSourceNative_CreatePixelmap"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createpixelmapusingallocator",
        children: "OH_ImageSourceNative_CreatePixelmapUsingAllocator"
      }), "接口，并在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
        children: "OH_DecodingOptions（解码参数）"
      }), "中设置desiredSize（期望输出大小）进行下采样解码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，对于支持下采样解码的图片，设置desiredSize（期望输出大小）后，解码器将以基准梯度为1/8的最优下采样率计算PixelMap的像素内存，即按照7/8、6/8、...、1/8的采样率，逐次递减取一个清晰度最高的采样数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片框架内，不同图片格式的下采样解码支持情况如下所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持下采样"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "图片格式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".jpg .png .heic（具体支持情况请参考设备规格文档。）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".gif .bmp .webp .dng .svg .ico"
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
550304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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