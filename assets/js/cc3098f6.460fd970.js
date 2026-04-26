"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["683008"], {
918774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_faqs_image_common_mistakes_image_common_mistakes_md_cc3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-faqs-image-common-mistakes-image-common-mistakes-md-cc3.json
var site_docs_image_kit_image_faqs_image_common_mistakes_image_common_mistakes_md_cc3_namespaceObject = JSON.parse('{"id":"image-kit/image-faqs/image-common-mistakes/image-common-mistakes","title":"Image Kit常见崩溃报错问题","description":"本文档展示了Image Kit接口的典型错误用法案例，帮助开发者避免常见的开发问题，提高应用的稳定性和性能。","source":"@site/docs/image-kit/image-faqs/image-common-mistakes/image-common-mistakes.md","sourceDirName":"image-kit/image-faqs/image-common-mistakes","slug":"/image-kit/image-faqs/image-common-mistakes/","permalink":"/harmonyos-docs-site/image-kit/image-faqs/image-common-mistakes/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Image Kit常见崩溃报错问题","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-common-mistakes","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Image Kit异常处理","permalink":"/harmonyos-docs-site/image-kit/image-faqs/image-error-faq/"},"next":{"title":"图片解码","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-decoding-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-faqs/image-common-mistakes/image-common-mistakes.md


const frontMatter = {
	title: 'Image Kit常见崩溃报错问题',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-common-mistakes',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Image Kit常见崩溃报错问题';

const assets = {

};



const toc = [{
  "value": "编码过程中PixelMap被释放/修改导致崩溃",
  "id": "编码过程中pixelmap被释放修改导致崩溃",
  "level": 2
}, {
  "value": "多个异步操作共享同一个ImageSource对象",
  "id": "多个异步操作共享同一个imagesource对象",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "image-kit常见崩溃报错问题",
        children: "Image Kit常见崩溃报错问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档展示了Image Kit接口的典型错误用法案例，帮助开发者避免常见的开发问题，提高应用的稳定性和性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编码过程中pixelmap被释放修改导致崩溃",
      children: "编码过程中PixelMap被释放/修改导致崩溃"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "典型崩溃堆栈示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fault thread info:\nTid:5005, Name:OS_FFRT_3_0\n#00 pc 000000000006d1f0 /system/lib64/platformsdk/libextplugin.z.so(OHOS::ImagePlugin::ExtWStream::write(void const*, unsigned long)+24)(300e33eb41735f2d3c8fe2259a671217)\n#01 pc 0000000001828c94 /system/lib64/libskia_canvaskit.z.so(sk_empty_output_buffer(jpeg_compress_struct*)+48)(484139254f1cae74fd86fe798dbea128)\n#02 pc 00000000010d1bb4 /system/lib64/libskia_canvaskit.z.so(encode_mcu_huff+692)(484139254f1cae74fd86fe798dbea128)\n#03 pc 00000000010c8a88 /system/lib64/libskia_canvaskit.z.so(compress_output+384)(484139254f1cae74fd86fe798dbea128)\n#04 pc 0000000000f8c4b0 /system/lib64/libskia_canvaskit.z.so(jpeg_finish_compress+220)(484139254f1cae74fd86fe798dbea128)\n#05 pc 0000000000f8bf08 /system/lib64/libskia_canvaskit.z.so(SkJpegEncoderImpl::onEncodeRows(int)+384)(484139254f1cae74fd86fe798dbea128)\n#06 pc 0000000000fd25ac /system/lib64/libskia_canvaskit.z.so(SkEncoder::encodeRows(int)+68)(484139254f1cae74fd86fe798dbea128)\n#07 pc 0000000000fd2514 /system/lib64/libskia_canvaskit.z.so(SkJpegEncoder::Encode(SkWStream*, SkPixmap const&, SkJpegEncoder::Options const&)+64)(484139254f1cae74fd86fe798dbea128)\n#08 pc 00000000000545dc /system/lib64/platformsdk/libextplugin.z.so(OHOS::ImagePlugin::ExtEncoder::SkEncodeImage(SkWStream*, SkBitmap const&, SkEncodedImageFormat, int)+188)(300e33eb41735f2d3c8fe2259a671217)\n#09 pc 00000000000547a4 /system/lib64/platformsdk/libextplugin.z.so(OHOS::ImagePlugin::ExtEncoder::DoEncode(SkWStream*, SkBitmap const&, SkEncodedImageFormat const&)+204)(300e33eb41735f2d3c8fe2259a671217)\n#10 pc 0000000000055464 /system/lib64/platformsdk/libextplugin.z.so(OHOS::ImagePlugin::ExtEncoder::EncodeImageByBitmap(SkBitmap&, bool, SkWStream&)+284)(300e33eb41735f2d3c8fe2259a671217)\n#11 pc 0000000000055ad8 /system/lib64/platformsdk/libextplugin.z.so(OHOS::ImagePlugin::ExtEncoder::EncodeImageByPixelMap(OHOS::Media::PixelMap*, bool, SkWStream&)+1356)(300e33eb41735f2d3c8fe2259a671217)\n#12 pc 0000000000053350 /system/lib64/platformsdk/libextplugin.z.so(OHOS::ImagePlugin::ExtEncoder::EncodeSdrImage(OHOS::ImagePlugin::ExtWStream&)+984)(300e33eb41735f2d3c8fe2259a671217)\n#13 pc 0000000000052684 /system/lib64/platformsdk/libextplugin.z.so(OHOS::ImagePlugin::ExtEncoder::PixelmapEncode(OHOS::ImagePlugin::ExtWStream&)+184)(300e33eb41735f2d3c8fe2259a671217)\n#14 pc 0000000000053a7c /system/lib64/platformsdk/libextplugin.z.so(OHOS::ImagePlugin::ExtEncoder::FinalizeEncode()+952)(300e33eb41735f2d3c8fe2259a671217)\n#15 pc 00000000000b7d00 /system/lib64/platformsdk/libimage_native.z.so(std::__h::__function::__func<OHOS::Media::ImagePacker::FinalizePacking()::$_3, std::__h::allocator<OHOS::Media::ImagePacker::FinalizePacking()::$_3>, unsigned int (OHOS::ImagePlugin::AbsImageEncoder*)>::operator()(OHOS::ImagePlugin::AbsImageEncoder*&&)+28)(abee48eb37a365d523ba3560f087b63a)\n#16 pc 00000000000b58b4 /system/lib64/platformsdk/libimage_native.z.so(OHOS::Media::ImagePacker::DoEncodingFunc(std::__h::function<unsigned int (OHOS::ImagePlugin::AbsImageEncoder*)>, bool)+272)(abee48eb37a365d523ba3560f087b63a)\n#17 pc 00000000000b6de4 /system/lib64/platformsdk/libimage_native.z.so(OHOS::Media::ImagePacker::FinalizePacking(long&)+80)(abee48eb37a365d523ba3560f087b63a)\n#18 pc 000000000009a5b8 /system/lib64/platformsdk/libimage_napi.z.so(OHOS::Media::PackToFileExec(napi_env__*, void*)+912)(1d95fd2a148829930aeec8cbeaf92976)\n#19 pc 000000000006258c /system/lib64/platformsdk/libace_napi.z.so(NativeAsyncWork::AsyncWorkCallback(uv_work_s*)+264)(f5de54fc91f8cc9643b4846b808f9d4c)\n#20 pc 0000000000013bd4 /system/lib64/platformsdk/libuv.so(uv__queue_work+48)(7dfe11681838c768af19f3408663affb)\n ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "崩溃原因："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编码过程中未使用await等待异步操作执行完毕，致使资源对象在异步操作完成前被提前释放或修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "异步操作的生命周期管理："
          })
        }), " 在调用Image Kit的异步接口（如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagepacker/arkts-apis-image-imagepacker#packtodata13",
          children: "packToData"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagepacker/arkts-apis-image-imagepacker#packtofile11",
          children: "packToFile"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagesource/arkts-apis-image-imagesource#createpixelmap7",
          children: "createPixelMap"
        }), "等）时，必须确保传入的资源对象（如PixelMap、ImageSource）在异步操作完成之前不被释放或修改。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "使用await或Promise.then："
          })
        }), " 推荐使用await等待异步操作完成，或者在Promise.then()的回调中释放资源，确保释放时机正确。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "页面生命周期管理："
          })
        }), " 如果在页面中使用异步图片操作，需要在页面销毁时确保所有异步操作已经完成或取消，避免页面卸载后异步回调访问已销毁的资源。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误代码示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function wrongPackingExample(pixelMap: image.PixelMap, fd: number): Promise<void> {\n  let imagePacker = image.ImagePacker | null = null;\n\n  try {\n    imagePacker = image.createImagePacker();\n    let packOpts: image.PackingOption = { format: 'image/jpeg', quality: 95 };\n    // 错误：异步编码执行过程中，对pixelMap进行修改。\n    pixelMap.crop({x:1, y:1, size: {height:200, width:200}});\n    \n     // 错误：异步操作没有使用await。\n    imagePacker.packToFile(pixelMap, fd, packOpts).then(() => {\n      console.info('Succeeded in packing the image to file.');\n    }).catch((error: BusinessError) => {\n      console.error('Pack failed: ' + error);\n    });\n\n  } catch (error) {\n    console.error('Pack failed: ' + error);\n  } finally {\n    // 错误：异步编码未完成，直接释放PixelMap，触发应用闪退。\n    pixelMap?.release();\n    imagePacker?.release();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确代码示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\n\nasync function correctPackingExample(pixelMap: image.PixelMap, fd: number): Promise<void> {\n  let imagePacker = image.ImagePacker | null = null;\n\n  try {\n    imagePacker = image.createImagePacker();\n    let packOpts: image.PackingOption = { format: 'image/jpeg', quality: 95 };\n\n    // 正确：对PixelMap做裁剪时，必须await等待操作完成。\n    await pixelMap.crop({x:1, y:1, size: {height:200, width:200}});\n    \n    // 正确：使用await等待异步操作完成。\n    await imagePacker.packToFile(pixelMap, fd, packOpts);\n    console.info('Pack success');\n\n  } catch (error) {\n    console.error('Pack failed: ' + error)\n  } finally {\n    pixelMap?.release();\n    imagePacker?.release();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多个异步操作共享同一个imagesource对象",
      children: "多个异步操作共享同一个ImageSource对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "典型崩溃堆栈示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fault thread info:\nTid: 41048, Name: OS_FFRT_3_5\n#00 pc 00000000000b0864 /system/lib64/platformsdk/libimage_napi.z.so(OHOS::Media::CreatePixelMapInner(OHOS::Media::ImageSourceNapi*, std::__h::shared_ptr<OHOS::Media::ImageSource>, unsigned int, OHOS::Media::DecodeOptions, unsigned int8)+116) (3a63d0a0dc3ac58d9e1a58a77ad194f9)\n#01 pc 00000000000b1178 /system/lib64/platformsdk/libimage_napi.z.so(OHOS::Media::CreatePixelMapExecute(napi_env__*, void*) (.1167.cfi)+308) (3a63d0a0dc3ac58d9e1a58a77ad194f9)\n#02 pc 000000000005c3c0 /system/lib64/platformsdk/libace_napi.z.so(NativeAsyncWork: :AsyncWorkCallback(uv_work_s*)+304) (68011f831ed16fa3d94d4f22664d2eaf)\n#03 pc 0000000000013614 /system/lib64/platformsdk/libuv.so(uv__queue_work+60)(1399a989328aa340c8622e4a1d0ca961)\n#04 pc 0000000000091794 /system/lib64/ndk/libffrt.so(ffrt::UVTask::Execute()+764) (7921196b695415b02aa2bódfb05c7deb)\n#05\npc 000000000008d13c /system/lib64/ndk/libffrt.so(ffrt::ExecuteTask(ffrt::TaskBase*)+248) (7921196b695415b02aa2b6dfb05c7deb)\n#06 pc 000000000002e054 /system/lib64/ndk/libffrt.so(ffrt::CPUWorker::RunTask(ffrt: :TaskBase*, ffrt::CPUWorker*)+84) (7921196b695415b02aa2bódfb05c7deb)\n#07 pc 00000000000cóc58 /system/lib64/ndk/libffrt.so(7921196b695415b02aa2b6dfb05c7deb)\n#08 pc 00000000001d8c5c /system/lib/ld-musl-aarch64.so.1(start+240)(05aecbbf0bdce12d75badb7b497d0f9f)\n ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "崩溃原因："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并发操作同一个ImageSource对象，引发资源竞态问题导致崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "避免并发访问："
          })
        }), " 不要对同一个ImageSource实例并发执行多个异步操作，推荐按顺序执行，确保一个操作完成后再执行下一个操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "资源生命周期："
          })
        }), " ImageSource的生命周期应该覆盖所有使用它的异步操作，只有在确认所有异步操作都完成后才能释放。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "性能考虑："
          })
        }), " 虽然顺序执行可能会降低并发性能，但可以避免竞态条件和崩溃问题。如果确实需要并发处理，应该创建多个独立的ImageSource实例。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误代码示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function wrongSharedImageSourceExample(filePath: string, decodingOptions: Array<image.DecodingOptions>): Promise<Array<image.PixelMap>> {\n  // 创建一个ImageSource实例。\n  const imageSource = image.createImageSource(filePath);\n  const pixelMaps: Array<image.PixelMap> = [];\n\n  // 错误：for循环中并发启动多个解码操作，共享同一个ImageSource。\n  for (const opts of decodingOptions) {\n    imageSource.createPixelMap(opts).then((pixelMap: image.PixelMap) => {\n      pixelMaps.push(pixelMap);\n      console.info('PixelMap created');\n    }).catch((error: BusinessError) => {\n      console.error('Create pixelMap failed: ' + error);\n    });\n  }\n\n  // 错误：立即释放ImageSource，此时异步操作可能还在执行。\n  imageSource.release();\n  return pixelMaps;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确代码示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function correctSharedImageSourceExample(filePath: string): Promise<void> {\n  // 创建一个ImageSource实例。\n  const imageSource = image.createImageSource(filePath);\n\n  try {\n    // 正确：按顺序执行异步操作，避免并发访问。\n    const imageInfo = await imageSource.getImageInfo();\n    console.info(`Image info: width=${imageInfo.size.width}, height=${imageInfo.size.height}`);\n\n    const pixelMap1 = await imageSource.createPixelMap({ editable: true });\n    console.info('First pixelMap created');\n\n    const pixelMap2 = await imageSource.createPixelMap({ editable: false });\n    console.info('Second pixelMap created');\n\n    // 使用完成后释放资源。\n    pixelMap1.release();\n    pixelMap2.release();\n  } catch (error) {\n    console.error('Operation failed: ' + error);\n  }\n\n  // 所有操作完成后，安全地释放ImageSource。\n  imageSource.release();\n}\n"
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