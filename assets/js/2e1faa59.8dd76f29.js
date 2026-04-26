"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["824606"], {
347062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_js_objects_image_encoding_native_image_encoding_native_md_2e1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-js-objects-image-encoding-native-image-encoding-native-md-2e1.json
var site_docs_image_kit_image_native_js_objects_image_encoding_native_image_encoding_native_md_2e1_namespaceObject = JSON.parse('{"id":"image-kit/image-native-js-objects/image-encoding-native/image-encoding-native","title":"图片编码","description":"当前开发指导使用的接口为Image模块下的C API，可完成图片编解码，图片接收器，处理图像数据等功能。这部分API在API version 11之前发布，在后续的版本不再增加新功能，*不再推荐使用*。","source":"@site/docs/image-kit/image-native-js-objects/image-encoding-native/image-encoding-native.md","sourceDirName":"image-kit/image-native-js-objects/image-encoding-native","slug":"/image-kit/image-native-js-objects/image-encoding-native/","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-encoding-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"图片编码","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-encoding-native","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图片解码","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-decoding-native/"},"next":{"title":"图像变换","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-transformation-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native-js-objects/image-encoding-native/image-encoding-native.md


const frontMatter = {
	title: '图片编码',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-encoding-native',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '图片编码';

const assets = {

};



const toc = [{
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "图片编码",
        children: "图片编码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(403335)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前开发指导使用的接口为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image/capi-image",
        children: "Image"
      }), "模块下的C API，可完成图片编解码，图片接收器，处理图像数据等功能。这部分API在API version 11之前发布，在后续的版本不再增加新功能，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不再推荐使用"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule",
        children: "Image_NativeModule"
      }), "模块下的C API，不仅提供上述图片框架基础功能，还可以完成多图编解码等新特性，相关开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-native/image-decoding-c/image-source-c",
        children: "图片开发指导(C/C++)"
      }), "节点下的内容。这部分API从API version 12开始支持，并将持续演进，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "推荐开发者使用"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "两套C API不建议同时使用，在部分场景下存在不兼容的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，完成图片编码，即将PixelMap压缩成不同格式的图片文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持编码为JPEG、WebP、PNG和 HEIF（不同硬件设备支持情况不同）格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "适用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片编码转换。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过传入ImageSource，封装成想要的格式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片编辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑PixelMap后导出图片文件的场景，需要编码成对应图片格式文件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考文件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-packer-mdk-h/capi-image-packer-mdk-h",
        children: "image_packer_mdk.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，完成图片编码的全流程，包括：创建编码器、初始化资源、编码过程、销毁资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发过程中，开发者应按一定顺序调用方法，执行对应操作，否则系统可能会抛出异常或生成其他未定义的行为。具体顺序可参考下列开发步骤及对应说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下为图片编码调用关系图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(458880)/* ["default"] */.A) + "",
        width: "512",
        height: "631"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libace_napi.z.so)\ntarget_link_libraries(entry PUBLIC libimage_packer_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入编码器头文件：image_packer_mdk.h。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 引入编码器image_packer_mdk.h头文件。\n#include <multimedia/image_framework/image_packer_mdk.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建编码器实例对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用需要napi_env来创建编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 使用napi_value 承接创建的编码器对象。\nnapi_value packer;\n// 通过 napi_env 创建编码器，返回result为 IMAGE_RESULT_SUCCESS则创建成功。\nint32_t result = OH_ImagePacker_Create(env, &packer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过OH_ImagePacker_InitNative来初始化编码器实例对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过 napi_env 及上述创建的编码器对象初始化实例对象。\nImagePacker_Native* nativePacker = OH_ImagePacker_InitNative(env, packer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编码接口入参包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "上述过程中获取的实例对象（ImagePacker_Native）。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "需要编码的图像源（napi_value）, PixelMap或ImageSource（未调用过CreatePixelMap）的实例对象均可。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编码参数：包括编码格式与编码质量。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(531023)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "根据MIME标准，标准编码格式为image/jpeg。当使用image编码时，编码参数中的编码格式format设置为image/jpeg，image编码后的文件扩展名可设为.jpg或.jpeg，可在支持image/jpeg解码的平台上使用。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编码接口可按输出方式分为向缓存区（内存）输出和向文件输出两种接口，入参均为上述内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可根据输出的不同需求选择编码接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向缓存区（内存）输出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdlib>\n#include <multimedia/image_framework/image_packer_mdk.h>\n\nint32_t packImageToData(napi_env env, napi_callback_info info)\n{\n    napi_value source;\n    // 使用napi_value承接创建的编码器对象。\n    napi_value packer;\n    // 通过napi_env创建编码器，返回result为IMAGE_RESULT_SUCCESS则创建成功。\n    int32_t errorCode = OH_ImagePacker_Create(env, &packer);\n    if (errorCode != IMAGE_RESULT_SUCCESS) {\n        return errorCode;\n    }\n    // 通过napi_env及上述创建的编码器对象初始化实例对象。\n    ImagePacker_Native* nativePacker = OH_ImagePacker_InitNative(env, packer);\n    // 编码参数。\n    struct ImagePacker_Opts_ opts;\n    // 配置编码格式（必须）。\n    opts.format = \"image/jpeg\";\n    // 配置编码质量（必须）。\n    opts.quality = 95;\n    // 配置输出的缓存区大小为4k（缓存区大小视应用场景定）。\n    size_t bufferSize = 4*1024;\n    // 申请图片编码缓存区。\n    uint8_t* outData = (uint8_t *)(malloc(bufferSize));\n    if (outData == NULL) {\n        errorCode = OH_ImagePacker_Release(nativePacker);\n        if (errorCode != IMAGE_RESULT_SUCCESS) {\n            return errorCode;\n        } else {\n            nativePacker = NULL; // 不可重复destroy。\n        }\n        return IMAGE_RESULT_MALLOC_ABNORMAL;\n    }\n    // 开始对输入source进行编码过程，返回result为IMAGE_RESULT_SUCCESS则编码成功，同时bufferSize中包含编码实际使用缓存区大小。\n    int32_t result = OH_ImagePacker_PackToData(nativePacker, source, &opts, outData, &bufferSize);\n    free(outData);\n    outData = NULL;\n    errorCode = OH_ImagePacker_Release(nativePacker);\n    if (errorCode != IMAGE_RESULT_SUCCESS) {\n        return errorCode;\n    } else {\n        nativePacker = NULL; // 不可重复destroy。\n    }\n    return result;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向文件输出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <fcntl.h>\n#include <unistd.h>\n#include <cstdlib>\n#include <multimedia/image_framework/image_packer_mdk.h>\n\nint32_t packImageToFile(napi_env env, napi_callback_info info)\n{\n    napi_value source;\n    // 使用napi_value承接创建的编码器对象。\n    napi_value packer;\n    // 通过napi_env创建编码器，返回result为IMAGE_RESULT_SUCCESS则创建成功。\n    int32_t errorCode = OH_ImagePacker_Create(env, &packer);\n    if (errorCode != IMAGE_RESULT_SUCCESS) {\n        return errorCode;\n    }\n    // 通过napi_env及上述创建的编码器对象初始化实例对象。\n    ImagePacker_Native* nativePacker = OH_ImagePacker_InitNative(env, packer);\n    // 编码参数。\n    struct ImagePacker_Opts_ opts;\n    // 配置编码格式（必须）。\n    opts.format = \"image/jpeg\";\n    // 配置编码质量（必须）。\n    opts.quality = 100;\n    // 打开需要输出的文件（请确保应用有权限访问这个路径）。\n    int fd = open(\"/data/test.jpg\", O_RDWR | O_CREAT, S_IRUSR | S_IWUSR);\n    int result;\n    if (fd >= 0) {\n        // 开始对输入source进行编码过程，返回result为IMAGE_RESULT_SUCCESS则编码成功。\n        result = OH_ImagePacker_PackToFile(nativePacker, source, &opts, fd);\n        // 关闭输出文件。\n        close(fd);\n    }\n    errorCode = OH_ImagePacker_Release(nativePacker);\n    if (errorCode != IMAGE_RESULT_SUCCESS) {\n        return errorCode;\n    } else {\n        nativePacker = NULL; // 不可重复destroy。\n    }\n    return result;\n}\n"
          })
        }), "\n"]
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
531023(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
403335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
458880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958592-7d41fbee9b4590e47f60d0688a5b456b.png");

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