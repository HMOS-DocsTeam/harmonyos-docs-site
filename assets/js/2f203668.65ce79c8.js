"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["617669"], {
962812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_resource_management_rawfile_guidelines_rawfile_guidelines_md_2f2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-resource-management-rawfile-guidelines-rawfile-guidelines-md-2f2.json
var site_docs_coding_resource_management_rawfile_guidelines_rawfile_guidelines_md_2f2_namespaceObject = JSON.parse('{"id":"coding/resource-management/rawfile-guidelines/rawfile-guidelines","title":"Rawfile开发指导","description":"场景介绍","source":"@site/docs/coding/resource-management/rawfile-guidelines/rawfile-guidelines.md","sourceDirName":"coding/resource-management/rawfile-guidelines","slug":"/coding/resource-management/rawfile-guidelines/","permalink":"/harmonyos-docs-site/coding/resource-management/rawfile-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Rawfile开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rawfile-guidelines","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"OpenMP应用构建和运行指南","permalink":"/harmonyos-docs-site/coding/openmp/openmp-guideline/"},"next":{"title":"QoS 开发指导","permalink":"/harmonyos-docs-site/coding/thread-scheduling/qos-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/resource-management/rawfile-guidelines/rawfile-guidelines.md


const frontMatter = {
	title: 'Rawfile开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rawfile-guidelines',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'Rawfile开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "rawfile开发指导",
        children: "Rawfile开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过本指导了解在HarmonyOS应用中，如何使用Native Rawfile接口操作Rawfile目录和文件。功能包括文件列表遍历、文件打开、搜索、读取和关闭Rawfile。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["64后缀相关接口属于新增接口，新接口支持打开更大的rawfile文件(超过2G建议使用)，具体请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-module/capi-rawfile/capi-rawfile",
        children: "Rawfile接口介绍"
      }), "。64相关的开发步骤和非64一致，将非64接口替换为64接口即可，例如：OH_ResourceManager_OpenRawFile替换为OH_ResourceManager_OpenRawFile64。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化native resource manager。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开指定rawfile目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_ResourceManager_GetRawFileCount(RawDir *rawDir)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定rawfile目录下的rawfile文件数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *OH_ResourceManager_GetRawFileName(RawDir *rawDir, int index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取rawfile名字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开指定rawfile文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "long OH_ResourceManager_GetRawFileSize(RawFile *rawFile)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取rawfile文件大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_ResourceManager_ReadRawFile(const RawFile *rawFile, void *buf, size_t length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取rawfile文件内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_ResourceManager_CloseRawFile(RawFile *rawFile)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放rawfile文件相关资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_ResourceManager_CloseRawDir(RawDir *rawDir)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放rawfile目录相关资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_ResourceManager_GetRawFileDescriptor(const RawFile *rawFile, RawFileDescriptor &descriptor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取rawfile的fd。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放native resource manager相关资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断路径是否是rawfile下的目录。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-module/capi-rawfile/capi-rawfile",
        children: "rawfile"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以ArkTS侧获取rawfile文件列表、获取rawfile文件内容、获取rawfile描述符（fd, offset, length）、判断是否是rawfile下的目录四种调用方式为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 创建工程"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(709516)/* ["default"] */.A) + "",
        width: "983",
        height: "658"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 添加依赖"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建完成后，DevEco Studio会在工程中生成cpp目录，目录下有libentry/index.d.ts、hello.cpp、CMakeLists.txt等文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加rawfile依赖librawfile.z.so以及日志依赖libhilog_ndk.z.so。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so librawfile.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src/main/cpp/types/libentry/index.d.ts文件，在此文件中声明ArkTS侧接口getFileList、getRawFileContent、getRawFileDescriptor、isRawDir。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { resourceManager } from '@kit.LocalizationKit';\nexport const getFileList: (resMgr: resourceManager.ResourceManager, path: string) => Array<String>;\nexport const getRawFileContent: (resMgr: resourceManager.ResourceManager, path: string) => Uint8Array;\nexport const getRawFileDescriptor: (resMgr: resourceManager.ResourceManager, path: string) => resourceManager.RawFileDescriptor;\nexport const isRawDir: (resMgr: resourceManager.ResourceManager, path: string) => boolean;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 修改源文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src/main/cpp/hello.cpp文件，在Init方法中添加ArkTS接口与C++接口的映射。ArkTS侧接口getFileList、getRawFileContent、getRawFileDescriptor、isRawDir，映射C++接口分别为GetFileList、GetRawFileContent、GetRawFileDescriptor、IsRawDir。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"getFileList\", nullptr, GetFileList, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"getRawFileContent\", nullptr, GetRawFileContent, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"getRawFileDescriptor\", nullptr, GetRawFileDescriptor, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"isRawDir\", nullptr, IsRawDir, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在src/main/cpp/目录下创建hello.h文件，在hello.h文件中增加对应的四个方法，如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef RAWFILE_HELLO_H\n#define RAWFILE_HELLO_H\n\n#include <js_native_api.h>\n#include <js_native_api_types.h>\n#include <string>\n#include <vector>\n#include <cstdlib>\n#include \"napi/native_api.h\"\n\nnapi_value GetFileList(napi_env env, napi_callback_info info);\nnapi_value GetRawFileContent(napi_env env, napi_callback_info info);\nnapi_value GetRawFileDescriptor(napi_env env, napi_callback_info info);\nnapi_value IsRawDir(napi_env env, napi_callback_info info);\n\n#endif // RAWFILE_HELLO_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在hello.cpp文件中实现上述四个方法。通过env和info获取Js的资源管理对象，并转换为Native的资源管理对象，即可调用Native资源管理对象的接口，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入头文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hello.h\"\n#include \"rawfile/raw_file_manager.h\"\n#include \"rawfile/raw_file.h\"\n#include \"rawfile/raw_dir.h\"\n#include \"hilog/log.h\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明hilog日志打印的DOMAIN和TAG常量"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const int GLOBAL_RESMGR = 0xFF00;\nconst char *TAG = \"[Sample_rawfile]\";\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 示例一：获取rawfile文件列表 GetFileList\nnapi_value GetFileList(napi_env env, napi_callback_info info)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, TAG, \"NDKTest GetFileList Begin\");\n    size_t argc = 2;\n    napi_value argv[2] = { nullptr };\n    // 获取参数信息\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n\n    // argv[0]即为函数第一个参数Js资源对象，OH_ResourceManager_InitNativeResourceManager转为Native对象\n    NativeResourceManager *mNativeResMgr = OH_ResourceManager_InitNativeResourceManager(env, argv[0]);\n\n    // 获取函数argv[1]，此为rawfile相对路径\n    size_t strSize;\n    char strBuf[256];\n    napi_get_value_string_utf8(env, argv[1], strBuf, sizeof(strBuf), &strSize);\n    std::string dirName(strBuf, strSize);\n\n    // 获取对应的rawDir指针对象\n    RawDir* rawDir = OH_ResourceManager_OpenRawDir(mNativeResMgr, dirName.c_str());\n\n    // 获取rawDir下文件及文件夹数量\n    int count = OH_ResourceManager_GetRawFileCount(rawDir);\n\n    // 遍历获取文件名称，并保存\n    std::vector<std::string> tempArray;\n    for (int i = 0; i < count; i++) {\n        std::string filename = OH_ResourceManager_GetRawFileName(rawDir, i);\n        tempArray.emplace_back(filename);\n    }\n\n    // 转为js数组\n    napi_value fileList;\n    napi_create_array(env, &fileList);\n    for (size_t i = 0; i < tempArray.size(); i++) {\n        napi_value jsString;\n        napi_create_string_utf8(env, tempArray[i].c_str(), NAPI_AUTO_LENGTH, &jsString);\n        napi_set_element(env, fileList, i, jsString);\n    }\n\n    // 关闭打开的指针对象\n    OH_ResourceManager_CloseRawDir(rawDir);\n    OH_ResourceManager_ReleaseNativeResourceManager(mNativeResMgr);\n    return fileList;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 示例二：获取rawfile文件内容 GetRawFileContent\nnapi_value CreateJsArrayValue(napi_env env, std::unique_ptr<uint8_t[]> &data, long length)\n{\n    // 创建js外部ArrayBuffer\n    napi_value buffer;\n    napi_status status = napi_create_external_arraybuffer(env, data.get(), length,\n        [](napi_env env, void *data, void *hint) {\n            delete[] static_cast<char*>(data);\n        }, nullptr, &buffer);\n    // 检测ArrayBuffer是否创建成功\n    if (status != napi_ok) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, GLOBAL_RESMGR, TAG, \"Failed to create external array buffer\");\n        return nullptr;\n    }\n    // 创建js TypedArray  将ArrayBuffer绑定到TypedArray\n    napi_value result = nullptr;\n    status = napi_create_typedarray(env, napi_uint8_array, length, buffer, 0, &result);\n    if (status != napi_ok) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, GLOBAL_RESMGR, TAG, \"Failed to create media typed array\");\n        return nullptr;\n    }\n    data.release();\n    return result;\n}\n\nnapi_value GetRawFileContent(napi_env env, napi_callback_info info)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, TAG, \"GetFileContent Begin\");\n    size_t argc = 2;\n    napi_value argv[2] = { nullptr };\n    // 获取参数信息\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n\n    // argv[0]即为函数第一个参数Js资源对象，OH_ResourceManager_InitNativeResourceManager转为Native对象\n    NativeResourceManager *mNativeResMgr = OH_ResourceManager_InitNativeResourceManager(env, argv[0]);\n    size_t strSize;\n    char strBuf[256];\n    napi_get_value_string_utf8(env, argv[1], strBuf, sizeof(strBuf), &strSize);\n    std::string filename(strBuf, strSize);\n\n    // 获取rawfile指针对象\n    RawFile *rawFile = OH_ResourceManager_OpenRawFile(mNativeResMgr, filename.c_str());\n    if (rawFile != nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, TAG, \"OH_ResourceManager_OpenRawFile success\");\n    }\n    // 获取rawfile大小并申请内存\n    long len = OH_ResourceManager_GetRawFileSize(rawFile);\n    std::unique_ptr<uint8_t[]> data = std::make_unique<uint8_t[]>(len);\n\n    // 一次性读取rawfile全部内容\n    int res = OH_ResourceManager_ReadRawFile(rawFile, data.get(), len);\n\n    // 关闭打开的指针对象\n    OH_ResourceManager_CloseRawFile(rawFile);\n    OH_ResourceManager_ReleaseNativeResourceManager(mNativeResMgr);\n    // 转为js对象\n    return CreateJsArrayValue(env, data, len);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 示例三：获取rawfile文件描述符 GetRawFileDescriptor\n// 定义一个函数，将RawFileDescriptor转为js对象\nnapi_value createJsFileDescriptor(napi_env env, RawFileDescriptor& descriptor)\n{\n    // 创建js对象\n    napi_value result;\n    napi_status status = napi_create_object(env, &result);\n    if (status != napi_ok) {\n        return result;\n    }\n\n    // 将文件描述符fd存入到result对象中\n    napi_value fd;\n    status = napi_create_int32(env, descriptor.fd, &fd);\n    if (status != napi_ok) {\n        return result;\n    }\n    status = napi_set_named_property(env, result, \"fd\", fd);\n    if (status != napi_ok) {\n        return result;\n    }\n\n    // 将文件偏移量offset存入到result对象中\n    napi_value offset;\n    status = napi_create_int64(env, descriptor.start, &offset);\n    if (status != napi_ok) {\n        return result;\n    }\n    status = napi_set_named_property(env, result, \"offset\", offset);\n    if (status != napi_ok) {\n        return result;\n    }\n\n    // 将文件长度length存入到result对象中\n    napi_value length;\n    status = napi_create_int64(env, descriptor.length, &length);\n    if (status != napi_ok) {\n        return result;\n    }\n    status = napi_set_named_property(env, result, \"length\", length);\n    if (status != napi_ok) {\n        return result;\n    }\n    return result;\n}\n\nnapi_value GetRawFileDescriptor(napi_env env, napi_callback_info info)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, TAG, \"NDKTest GetRawFileDescriptor Begin\");\n    size_t argc = 2;\n    napi_value argv[2] = { nullptr };\n    // 获取参数信息\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n\n    // argv[0]即为函数第一个参数Js资源对象，OH_ResourceManager_InitNativeResourceManager转为Native对象\n    NativeResourceManager *mNativeResMgr = OH_ResourceManager_InitNativeResourceManager(env, argv[0]);\n    size_t strSize;\n    char strBuf[256];\n    napi_get_value_string_utf8(env, argv[1], strBuf, sizeof(strBuf), &strSize);\n    std::string filename(strBuf, strSize);\n    // 获取rawfile指针对象\n    RawFile *rawFile = OH_ResourceManager_OpenRawFile(mNativeResMgr, filename.c_str());\n    if (rawFile != nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, TAG, \"OH_ResourceManager_OpenRawFile success\");\n    }\n    // 获取rawfile的描述符RawFileDescriptor {fd, offset, length}\n    RawFileDescriptor descriptor;\n    OH_ResourceManager_GetRawFileDescriptor(rawFile, descriptor);\n    // 关闭打开的指针对象\n    OH_ResourceManager_CloseRawFile(rawFile);\n    OH_ResourceManager_ReleaseNativeResourceManager(mNativeResMgr);\n    // 转为js对象\n    return createJsFileDescriptor(env, descriptor);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 示例四：判断路径是否是rawfile下的目录 IsRawDir\nnapi_value CreateJsBool(napi_env env, bool &bValue)\n{\n    napi_value jsValue = nullptr;\n    if (napi_get_boolean(env, bValue, &jsValue) != napi_ok) {\n        return nullptr;\n    }\n    return jsValue;\n}\n\nnapi_value IsRawDir(napi_env env, napi_callback_info info)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, TAG, \"NDKTest IsRawDir Begin\");\n    size_t argc = 2;\n    napi_value argv[2] = { nullptr };\n    // 获取参数信息\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n\n    // argv[0]即为函数第一个参数Js资源对象，OH_ResourceManager_InitNativeResourceManager转为Native对象\n    NativeResourceManager *mNativeResMgr = OH_ResourceManager_InitNativeResourceManager(env, argv[0]);\n\n    napi_valuetype fileNameType;\n    napi_typeof(env, argv[1], &fileNameType);\n    if (fileNameType == napi_undefined || fileNameType == napi_null) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, GLOBAL_RESMGR, TAG, \"NDKTest file name is null\");\n        bool temp = false;\n        return CreateJsBool(env, temp);\n    }\n    size_t strSize;\n    char strBuf[256];\n    napi_get_value_string_utf8(env, argv[1], strBuf, sizeof(strBuf), &strSize);\n    std::string filename(strBuf, strSize);\n    // 判断是否是rawfile下的目录\n    bool result = OH_ResourceManager_IsRawDir(mNativeResMgr, filename.c_str());\n    OH_ResourceManager_ReleaseNativeResourceManager(mNativeResMgr);\n    return CreateJsBool(env, result);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4. ArkTS侧调用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src\\main\\ets\\pages\\index.ets, 导入\"libentry.so\"。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源获取包括获取本应用包资源、应用内跨包资源、跨应用包资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过context.resourceManager获取本应用包resourceManager对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过context.createModuleContext().resourceManager获取应用内跨包resourceManager对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Context的更多使用信息请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage",
            children: "应用上下文Context"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用src/main/cpp/types/libentry/index.d.ts中声明的接口，如getFileList，传入js的资源管理对象以及rawfile文件夹的相对路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取本应用包资源resourceManager对象的示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { util } from '@kit.ArkTS';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so'; // 导入so\n\nconst DOMAIN = 0x0000;\nconst TAG = '[Sample_rawfile]';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  private resMgr = this.getUIContext().getHostContext()?.resourceManager; // 获取本应用包的资源对象\n  @State rawfileListMsg: string = 'FileList = ';\n  @State retMsg: string = 'isRawDir = ';\n  @State rawfileContentMsg: string = 'RawFileContent = ';\n  @State rawfileDescriptorMsg: string = 'RawFileDescriptor.length = ';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .id('hello_world')\n          .fontSize(30)\n          .fontWeight(FontWeight.Bold)\n          .onClick(async () => {\n            // 传入资源管理对象，以及访问的rawfile文件夹名称\n            let rawFileList: Array<String> = testNapi.getFileList(this.resMgr, '');\n            this.rawfileListMsg = 'FileList = ' + rawFileList;\n            hilog.info(DOMAIN, TAG, this.rawfileListMsg);\n\n            // 'sub_rawfile'仅作示例，请替换为实际使用的资源\n            let ret: boolean = testNapi.isRawDir(this.resMgr, 'sub_rawfile');\n            this.retMsg = 'isRawDir = ' + ret;\n            hilog.info(DOMAIN, TAG, this.retMsg);\n\n            // 传入资源管理对象，以及访问的rawfile文件夹名称\n            // 'rawfile1.txt'仅作示例，请替换为实际使用的资源\n            let rawfileArray: Uint8Array = testNapi.getRawFileContent(this.resMgr, 'rawfile1.txt');\n            // 将Uint8Array转为字符串\n            let textDecoder: util.TextDecoder = new util.TextDecoder();\n            let rawfileContent: string = textDecoder.decodeToString(rawfileArray);\n            this.rawfileContentMsg = 'RawFileContent = ' + rawfileContent;\n            hilog.info(DOMAIN, TAG, this.rawfileContentMsg);\n\n            // 传入资源管理对象，以及访问的rawfile文件名称\n            // 'rawfile1.txt'仅作示例，请替换为实际使用的资源\n            let rawfileDescriptor: resourceManager.RawFileDescriptor =\n              testNapi.getRawFileDescriptor(this.resMgr, 'rawfile1.txt');\n            this.rawfileDescriptorMsg = 'RawFileDescriptor.length = ' + rawfileDescriptor.length;\n            hilog.info(DOMAIN, TAG, this.rawfileDescriptorMsg);\n          })\n        Text(this.rawfileListMsg).id('get_file_list').fontSize(30);\n        Text(this.retMsg).id('is_raw_dir').fontSize(30);\n        Text(this.rawfileContentMsg).id('get_raw_file_content').fontSize(30);\n        Text(this.rawfileDescriptorMsg).id('get_raw_file_descriptor').fontSize(30);\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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
709516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799738-c69ad0bf5b49018c4cf2275dc12909b1.png");

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