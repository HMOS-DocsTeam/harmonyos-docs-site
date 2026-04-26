"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["706358"], {
256294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_user_files_request_dir_permission_request_dir_permission_md_fe0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-user-files-request-dir-permission-request-dir-permission-md-fe0.json
var site_docs_core_file_kit_user_files_request_dir_permission_request_dir_permission_md_fe0_namespaceObject = JSON.parse('{"id":"core-file-kit/user-files/request-dir-permission/request-dir-permission","title":"获取并使用公共目录","description":"通过 ArkTS 接口获取并访问公共目录","source":"@site/docs/core-file-kit/user-files/request-dir-permission/request-dir-permission.md","sourceDirName":"core-file-kit/user-files/request-dir-permission","slug":"/core-file-kit/user-files/request-dir-permission/","permalink":"/harmonyos-docs-site/core-file-kit/user-files/request-dir-permission/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"获取并使用公共目录","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-dir-permission","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"授权持久化(C/C++)","permalink":"/harmonyos-docs-site/core-file-kit/user-files/select-save-user-file/native-fileshare-guidelines/"},"next":{"title":"分布式文件系统概述","permalink":"/harmonyos-docs-site/core-file-kit/distributed-fs/distributed-fs-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/user-files/request-dir-permission/request-dir-permission.md


const frontMatter = {
	title: '获取并使用公共目录',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-dir-permission',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '获取并使用公共目录';

const assets = {

};



const toc = [{
  "value": "通过 ArkTS 接口获取并访问公共目录",
  "id": "通过-arkts-接口获取并访问公共目录",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 3
}, {
  "value": "通过 C/C++ 接口获取并使用公共目录",
  "id": "通过-cc-接口获取并使用公共目录",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
        id: "获取并使用公共目录",
        children: "获取并使用公共目录"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过-arkts-接口获取并访问公共目录",
      children: "通过 ArkTS 接口获取并访问公共目录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目录环境能力接口（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-environment/js-apis-file-environment",
        children: "ohos.file.environment"
      }), "）提供获取公共目录路径的能力，支持三方应用在公共文件用户目录下进行文件访问操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用此方式，需确认设备具有以下系统能力：SystemCapability.FileManagement.File.Environment.FolderObtain，当前仅支持2in1设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (!canIUse('SystemCapability.FileManagement.File.Environment.FolderObtain')) {\n    console.error('this api is not supported on this device');\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["公共目录获取接口仅用于获取公共目录路径，不对公共目录访问权限进行校验。若需访问公共目录需申请对应的公共目录访问权限。三方应用需要访问公共目录时，需通过弹窗授权向用户申请授予 Download 目录权限、Documents 目录权限或 Desktop 目录权限，具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
            children: "访问控制-向用户申请授权"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   \"requestPermissions\" : [\n       \"ohos.permission.READ_WRITE_DOWNLOAD_DIRECTORY\",\n       \"ohos.permission.READ_WRITE_DOCUMENTS_DIRECTORY\",\n   ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取公共目录路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { Environment } from '@kit.CoreFileKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getUserDirExample() {\n  try {\n    const downloadPath = Environment.getUserDownloadDir();\n    console.info(`Succeeded in getting user download dir: ${downloadPath}`);\n    const documentsPath = Environment.getUserDocumentDir();\n    console.info(`Succeeded in getting user document dir: ${documentsPath}`);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed to get user dir. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以Download目录为例，访问Download目录下的文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { Environment } from '@kit.CoreFileKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function readUserDownloadDirExample(context: common.UIAbilityContext) {\n  try {\n    // 获取 Download 目录\n    const downloadPath = Environment.getUserDownloadDir();\n    console.info(`Succeeded in getting user download dir: ${downloadPath}`);\n    const dirPath = context.filesDir;\n    // 查看 Download 目录下的文件并拷贝到沙箱目录中\n    let fileList: string[] = fileIo.listFileSync(downloadPath);\n    fileList.forEach((file, index) => {\n      console.info(`${downloadPath} ${index}: ${file}`);\n      if (fileIo.statSync(`${downloadPath}/${file}`).isFile()) {\n        fileIo.copyFileSync(`${downloadPath}/${file}`, `${dirPath}/${file}`);\n      }\n    });\n    // 查看沙箱目录下对应的文件\n    fileList = fileIo.listFileSync(dirPath);\n    fileList.forEach((file, index) => {\n      console.info(`Succeeded in listing file, ${dirPath} ${index}: ${file}`);\n    });\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed to read user download dir. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以Download目录为例，保存文件到Download目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { Environment } from '@kit.CoreFileKit';\nimport { fileIo } from '@kit.CoreFileKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function writeUserDownloadDirExample() {\n  // 检查是否具有 READ_WRITE_DOWNLOAD_DIRECTORY 权限，无权限则需要向用户申请授予权限。\n  try {\n    // 获取 Download 目录\n    const downloadPath = Environment.getUserDownloadDir();\n    console.info(`Succeeded in getting user download dir: ${downloadPath}`);\n    // 保存 temp.txt 到 Download 目录下\n    const file = fileIo.openSync(`${downloadPath}/temp.txt`, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);\n    fileIo.writeSync(file.fd, 'write a message');\n    fileIo.closeSync(file);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed to write user download dir. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过-cc-接口获取并使用公共目录",
      children: "通过 C/C++ 接口获取并使用公共目录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了通过ArkTS访问公共目录的方式，也可通过C/C++接口进行目录访问，具体可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-environment-h/capi-oh-environment-h",
        children: "oh_environment.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用此接口，需确认设备具有以下系统能力：SystemCapability.FileManagement.File.Environment.FolderObtain。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["三方应用需要访问公共目录时，需通过弹窗授权向用户申请授予Download目录权限、Documents目录权限或Desktop目录权限，具体参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "访问控制-向用户申请授权"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口的详细说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-environment-h/capi-oh-environment-h",
        children: "oh_environment.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileManagement_ErrCode OH_Environment_GetUserDownloadDir (char **result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取用户Download目录沙箱路径。只支持2in1设备"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileManagement_ErrCode OH_Environment_GetUserDesktopDir (char **result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取用户Desktop目录沙箱路径。只支持2in1设备"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileManagement_ErrCode OH_Environment_GetUserDocumentDir (char **result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取用户Document目录沙箱路径。只支持2in1设备"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在CMake脚本中链接动态库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libohenvironment.so libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <filemanagement/environment/oh_environment.h>\n#include <filemanagement/fileio/oh_fileio.h>\n#include <hilog/log.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Environment_GetUserDownloadDir接口获取用户Download目录沙箱路径，在接口中使用malloc申请的内存需要在使用完后释放因此需要free对应的内存。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdlib>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void GetUserDownloadDirExample()\n{\n    char *downloadPath = nullptr;\n    FileManagement_ErrCode ret = OH_Environment_GetUserDownloadDir(&downloadPath);\n    if (ret == 0) {\n        OH_LOG_INFO(LOG_APP, \"Succeeded in getting user download directory, download path=%{public}s\", downloadPath);\n        free(downloadPath);\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"Failed to get download path, error code is %{public}d\", ret);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Environment_GetUserDownloadDir接口获取用户Download目录沙箱路径，并查看Download目录下的文件。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdlib>\n#include <dirent.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void ScanUserDownloadDirPathExample()\n{\n    // 获取 download 路径\n    char *downloadPath = nullptr;\n    FileManagement_ErrCode ret = OH_Environment_GetUserDownloadDir(&downloadPath);\n    if (ret == 0) {\n        OH_LOG_INFO(LOG_APP, \"Succeeded in scanning user download directory, path=%{public}s\", downloadPath);\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"Failed to get download path, error code is %{public}d\", ret);\n        return;\n    }\n    // 查看文件夹下的文件\n    struct dirent **namelist = nullptr;\n    int num = scandir(downloadPath, &namelist, nullptr, nullptr);\n    if (num < 0) {\n        free(downloadPath);\n        OH_LOG_ERROR(LOG_APP, \"Failed to scan directory\");\n        return;\n    }\n\n    for (int i = 0; i < num; i++) {\n        OH_LOG_INFO(LOG_APP, \"Succeeded in scanning directory, file name is %{public}s\", namelist[i]->d_name);\n    }\n    free(downloadPath);\n    for (int i = 0; i < num; i++) {\n        free(namelist[i]);\n    }\n    free(namelist);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Environment_GetUserDownloadDir接口获取用户Download目录沙箱路径，并保存temp.txt到Download目录下。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <fstream>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void WriteUserDownloadDirPathExample()\n{\n    // 获取 download 路径\n    char *downloadPath = nullptr;\n    FileManagement_ErrCode ret = OH_Environment_GetUserDownloadDir(&downloadPath);\n    if (ret == 0) {\n        OH_LOG_INFO(LOG_APP, \"Succeeded in getting user download directory, path=%{public}s\", downloadPath);\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"Failed to get download path, error code is %{public}d\", ret);\n        return;\n    }\n    // 保存文件到 download 目录下\n    std::string filePath = std::string(downloadPath) + \"/temp.txt\";\n    free(downloadPath);\n\n    std::ofstream outfile;\n    outfile.open(filePath.c_str());\n    if (!outfile) {\n        OH_LOG_ERROR(LOG_APP, \"Failed to open file\");\n        return;\n    }\n    std::string msg = \"Write a message\";\n    outfile.write(msg.c_str(), msg.size());\n    outfile.close();\n}\n"
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