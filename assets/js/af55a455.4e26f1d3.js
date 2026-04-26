"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["690226"], {
228591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_arkts_dev_image_editing_arkts_image_pixelmap_operation_image_pixelmap_operation_md_af5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-arkts-dev-image-editing-arkts-image-pixelmap-operation-image-pixelmap-operation-md-af5.json
var site_docs_image_kit_image_arkts_dev_image_editing_arkts_image_pixelmap_operation_image_pixelmap_operation_md_af5_namespaceObject = JSON.parse('{"id":"image-kit/image-arkts-dev/image-editing-arkts/image-pixelmap-operation/image-pixelmap-operation","title":"使用PixelMap完成位图操作","description":"当需要对目标图片中的部分区域进行处理时，可以使用位图操作功能。此功能常用于图片美化等操作。","source":"@site/docs/image-kit/image-arkts-dev/image-editing-arkts/image-pixelmap-operation/image-pixelmap-operation.md","sourceDirName":"image-kit/image-arkts-dev/image-editing-arkts/image-pixelmap-operation","slug":"/image-kit/image-arkts-dev/image-editing-arkts/image-pixelmap-operation/","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-editing-arkts/image-pixelmap-operation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用PixelMap完成位图操作","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-pixelmap-operation","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用PixelMap完成图像变换","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-editing-arkts/image-transformation/"},"next":{"title":"使用VideoProcessingEngine完成图片超分","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-editing-arkts/image-processing-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-arkts-dev/image-editing-arkts/image-pixelmap-operation/image-pixelmap-operation.md


const frontMatter = {
	title: '使用PixelMap完成位图操作',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-pixelmap-operation',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用PixelMap完成位图操作';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发示例",
  "id": "开发示例",
  "level": 2
}, {
  "value": "复制（深拷贝）位图并改变像素格式",
  "id": "复制深拷贝位图并改变像素格式",
  "level": 3
}, {
  "value": "将两张宽度相同的位图纵向拼接成一张长图",
  "id": "将两张宽度相同的位图纵向拼接成一张长图",
  "level": 3
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
        id: "使用pixelmap完成位图操作",
        children: "使用PixelMap完成位图操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要对目标图片中的部分区域进行处理时，可以使用位图操作功能。此功能常用于图片美化等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，一张图片中，将指定的矩形区域像素数据读取出来，进行修改后，再写回原图片对应区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 位图操作示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(903161)/* ["default"] */.A) + "",
        width: "1081",
        height: "877"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["位图操作相关API的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/image-kit/image-arkts-dev/image-decoding-arts/image-decoding",
            children: "图片解码"
          }), "，获取PixelMap位图对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从PixelMap位图对象中获取信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// 获取图像像素的总字节数。\nlet pixelBytesNumber: number = pixelMap.getPixelBytesNumber();\n// 获取图像像素每行字节数。\nlet rowBytes: number = pixelMap.getBytesNumberPerRow();\n// 获取当前图像像素密度。像素密度是指每英寸图片所拥有的像素数量。像素密度越大，图片越精细。\nlet density: number = pixelMap.getDensity();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "读取并修改目标区域像素数据，写回原图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(466993)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议readPixelsToBuffer和writeBufferToPixels成对使用，readPixels和writePixels成对使用，避免因图像像素格式不一致，造成PixelMap图像出现异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// 场景一：读取并修改整张图片数据。\n// 按照PixelMap的像素格式，读取PixelMap的图像像素数据，并写入缓冲区中。\nconst buffer = new ArrayBuffer(pixelBytesNumber);\npixelMap.readPixelsToBuffer(buffer).then(() => {\n  console.info('Succeeded in reading image pixel data.');\n}).catch((error : BusinessError) => {\n  console.error('Failed to read image pixel data. The error is: ' + error);\n})\n// 按照PixelMap的像素格式，读取缓冲区中的图像像素数据，并写入PixelMap。\npixelMap.writeBufferToPixels(buffer).then(() => {\n  console.info('Succeeded in writing image pixel data.');\n}).catch((error : BusinessError) => {\n  console.error('Failed to write image pixel data. The error is: ' + error);\n})\n\n// 场景二：读取并修改指定区域内的图片数据。\n// 固定按照BGRA_8888格式，读取PixelMap指定区域内的图像像素数据，并写入PositionArea.pixels缓冲区中，该区域由PositionArea.region指定。\nconst area : image.PositionArea = {\n  pixels: new ArrayBuffer(8),\n  offset: 0,\n  stride: 8,\n  region: { size: { height: 1, width: 2 }, x: 0, y: 0 }\n}\npixelMap.readPixels(area).then(() => {\n  console.info('Succeeded in reading the image data in the area.');\n}).catch((error : BusinessError) => {\n  console.error('Failed to read the image data in the area. The error is: ' + error);\n})\n// 固定按照BGRA_8888格式，读取PositionArea.pixels缓冲区中的图像像素数据，并写入PixelMap指定区域内，该区域由PositionArea.region指定。\npixelMap.writePixels(area).then(() => {\n  console.info('Succeeded in writing the image data in the area.');\n}).catch((error : BusinessError) => {\n  console.error('Failed to write the image data in the area. The error is: ' + error);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "复制深拷贝位图并改变像素格式",
      children: "复制（深拷贝）位图并改变像素格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(123391)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该方法仅可实现PixelMap基本内容的复制，不支持复制色域和HDR元数据。如果不需要改变新PixelMap的像素格式，请使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap#clone18",
          children: "clone"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap#clonesync18",
          children: "cloneSync"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该方法不支持将新PixelMap转换为下列像素格式：RGBA_1010102、YCBCR_P010、YCRCB_P010、ASTC_4x4。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/image-kit/image-arkts-dev/image-decoding-arts/image-decoding",
            children: "图片解码"
          }), "，获取PixelMap位图对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考以下代码对PixelMap进行深拷贝。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 复制（深拷贝）PixelMap并改变像素格式。\n *\n * @param pixelMap - 被复制的原PixelMap。\n * @param desiredPixelFormat - 新PixelMap的像素格式。如果不指定，则仍使用原PixelMap的像素格式。\n * @returns 新PixelMap的Promise。\n */\nasync function clonePixelMap(pixelMap: PixelMap, desiredPixelFormat?: image.PixelMapFormat): Promise<PixelMap> {\n  // 获取原PixelMap的图片信息。\n  const imageInfo = pixelMap.getImageInfoSync();\n  // 读取原PixelMap的像素数据，并按照原PixelMap的像素格式写入缓冲区。\n  const buffer = new ArrayBuffer(pixelMap.getPixelBytesNumber());\n  await pixelMap.readPixelsToBuffer(buffer);\n\n  // 根据原PixelMap的图片信息，生成初始化选项。\n  const options: image.InitializationOptions = {\n    // 数据源的像素格式：必须匹配原PixelMap的像素格式，否则新PixelMap的图像会出现异常。\n    srcPixelFormat: imageInfo.pixelFormat,\n    // 新PixelMap的像素格式。\n    pixelFormat: desiredPixelFormat || imageInfo.pixelFormat,\n    // 新PixelMap的透明度类型。\n    alphaType: imageInfo.alphaType,\n    // 新PixelMap的尺寸：必须匹配原PixelMap的尺寸，不支持传入其他尺寸以进行缩放。\n    size: imageInfo.size\n  };\n\n  // 根据像素数据和初始化选项，创建新PixelMap。\n  return await image.createPixelMap(buffer, options);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将两张宽度相同的位图纵向拼接成一张长图",
      children: "将两张宽度相同的位图纵向拼接成一张长图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924044)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法仅支持以下像素格式的PixelMap：RGBA_8888、BGRA_8888、RGBA_F16。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/image-kit/image-arkts-dev/image-decoding-arts/image-decoding",
            children: "图片解码"
          }), "，获取两张宽度相同且像素格式相同的PixelMap位图对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考以下代码对两张PixelMap进行拼接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function concatPixelMap(pixelMap1: PixelMap, pixelMap2: PixelMap): Promise<PixelMap> {\n  // 将pixelMap1的像素数据读取至area1.pixels中。\n  const imageInfo1 = pixelMap1.getImageInfoSync();\n  const area1: image.PositionArea = {\n    pixels: new ArrayBuffer(pixelMap1.getPixelBytesNumber()),\n    offset: 0,\n    stride: pixelMap1.getBytesNumberPerRow(),\n    region: {\n      size: imageInfo1.size,\n      x: 0,\n      y: 0\n    }\n  };\n  await pixelMap1.readPixels(area1);\n\n  // 将pixelMap2的像素数据读取至area2.pixels中。\n  const imageInfo2 = pixelMap2.getImageInfoSync();\n  const area2: image.PositionArea = {\n    pixels: new ArrayBuffer(pixelMap2.getPixelBytesNumber()),\n    offset: 0,\n    stride: pixelMap2.getBytesNumberPerRow(),\n    region: {\n      size: imageInfo2.size,\n      x: 0,\n      y: 0\n    }\n  };\n  await pixelMap2.readPixels(area2);\n\n  // 创建一个新的空白PixelMap，其宽度与pixelMap1和pixelMap2相等，高度为pixelMap1和pixelMap2相加。\n  const options: image.InitializationOptions = {\n    srcPixelFormat: imageInfo1.pixelFormat,\n    pixelFormat: imageInfo1.pixelFormat,\n    size: {\n      width: imageInfo1.size.width,\n      height: imageInfo1.size.height + imageInfo2.size.height\n    }\n  };\n  const newPixelMap = image.createPixelMapSync(options);\n\n  // 将之前获取的pixelMap1和pixelMap2的像素数据按顺序写入新PixelMap。\n  await newPixelMap.writePixels(area1);\n  area2.region.y = imageInfo1.size.height; // pixelMap2像素的写入位置应该从pixelMap1末行像素的下一行开始。\n  await newPixelMap.writePixels(area2);\n\n  return newPixelMap;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/image-depth-copy",
          children: "PixelMap深拷贝案例"
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
123391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
903161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438635-a52d0e582b1e4f5376c7c0f992ab30c2.png");

},
924044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
466993(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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