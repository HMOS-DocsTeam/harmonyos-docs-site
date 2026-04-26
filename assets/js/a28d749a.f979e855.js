"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["95393"], {
845894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_app_file_app_file_access_management_app_file_access_app_file_access_md_a28_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-app-file-app-file-access-management-app-file-access-app-file-access-md-a28.json
var site_docs_core_file_kit_app_file_app_file_access_management_app_file_access_app_file_access_md_a28_namespaceObject = JSON.parse('{"id":"core-file-kit/app-file/app-file-access-management/app-file-access/app-file-access","title":"应用文件访问(ArkTS)","description":"应用需要对应用文件目录下的应用文件进行查看、创建、读写、删除、移动、复制、获取属性等访问操作，下文介绍具体方法。","source":"@site/docs/core-file-kit/app-file/app-file-access-management/app-file-access/app-file-access.md","sourceDirName":"core-file-kit/app-file/app-file-access-management/app-file-access","slug":"/core-file-kit/app-file/app-file-access-management/app-file-access/","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-access-management/app-file-access/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用文件访问(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-access","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用沙箱目录","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-sandbox-directory/"},"next":{"title":"应用文件访问(C/C++)","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-access-management/native-fileio-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/app-file/app-file-access-management/app-file-access/app-file-access.md


const frontMatter = {
	title: '应用文件访问(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-access',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用文件访问(ArkTS)';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发示例",
  "id": "开发示例",
  "level": 2
}, {
  "value": "新建并读写一个文件",
  "id": "新建并读写一个文件",
  "level": 3
}, {
  "value": "读取文件内容并写入到另一个文件",
  "id": "读取文件内容并写入到另一个文件",
  "level": 3
}, {
  "value": "以流的形式读写文件",
  "id": "以流的形式读写文件",
  "level": 3
}, {
  "value": "查看文件列表",
  "id": "查看文件列表",
  "level": 3
}, {
  "value": "使用文件流",
  "id": "使用文件流",
  "level": 3
}, {
  "value": "使用文件哈希流",
  "id": "使用文件哈希流",
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
        id: "应用文件访问arkts",
        children: "应用文件访问(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要对应用文件目录下的应用文件进行查看、创建、读写、删除、移动、复制、获取属性等访问操作，下文介绍具体方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过基础文件操作接口（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
        children: "ohos.file.fs"
      }), "）实现应用文件访问能力，主要功能如下表所示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 基础文件操作接口功能，其中“√”表示支持，“-”表示不区分同步和异步。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持同步"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持异步"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查文件是否存在"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "close"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copyFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createStream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于文件路径打开文件流"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "listFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出文件夹下所有文件名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mkdir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建目录"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moveFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "open"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从文件读取数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重命名文件或文件夹"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rmdir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除整个目录"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取文件详细属性信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unlink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除单个文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将数据写入文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream.close"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭文件流"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream.flush"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新文件流"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream.write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将数据写入流文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream.read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从流文件读取数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File.fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取文件描述符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文件打开标签"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文件过滤配置项"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333273)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用基础文件操作接口时，耗时较长的操作，例如：read、write等，建议使用异步接口，避免应用崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在对应用文件开始访问前，开发者需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
        children: "获取应用文件路径"
      }), "。以从UIAbilityContext获取HAP级别的文件路径为例进行说明，UIAbilityContext的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面介绍几种常用操作示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "新建并读写一个文件",
      children: "新建并读写一个文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码演示了如何新建一个文件并对其读写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/xxx.ets\nimport { fileIo, ReadOptions } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\nimport { buffer } from '@kit.ArkTS';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function createFile(context: common.UIAbilityContext): void {\n  let filesDir = context.filesDir;\n  let file: fileIo.File | null = null;\n  try {\n    // 文件不存在时创建并打开文件，文件存在时打开文件\n    file = fileIo.openSync(filesDir + '/test.txt', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n    // 写入一段内容至文件\n    let writeLen = fileIo.writeSync(file.fd, 'Hello world');\n    console.info('The length of str is: ' + writeLen);\n    // 创建一个大小为1024字节的ArrayBuffer对象，用于存储从文件中读取的数据\n    let arrayBuffer = new ArrayBuffer(1024);\n    // 设置读取的偏移量和长度，单位为Byte\n    let readOptions: ReadOptions = {\n      offset: 0,\n      length: arrayBuffer.byteLength\n    };\n    // 读取文件内容到ArrayBuffer对象中，并返回实际读取的字节数\n    let readLen = fileIo.readSync(file.fd, arrayBuffer, readOptions);\n    // 将ArrayBuffer对象转换为Buffer对象，并转换为字符串输出\n    let buf = buffer.from(arrayBuffer, 0, readLen);\n    console.info('Succeeded in creating file, the content of file: ' + buf.toString());\n  } catch (err) {\n    console.error(`Failed to create file. Code: ${err.code}, message: ${err.message}`);\n  } finally {\n    if (file) {\n      try {\n        fileIo.closeSync(file);\n      } catch (err) {\n        console.error(`Failed to close file`);\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "读取文件内容并写入到另一个文件",
      children: "读取文件内容并写入到另一个文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码演示了如何从一个文件读写内容到另一个文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/xxx.ets\nimport { fileIo, ReadOptions, WriteOptions } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function readWriteFile(context: common.UIAbilityContext): void {\n  let srcFile: fileIo.File | null = null;\n  let destFile: fileIo.File | null = null;\n  try {\n    let filesDir = context.filesDir;\n    // 以读写的方式打开文件，文件不存在会新建文件\n    srcFile = fileIo.openSync(filesDir + '/readFile.txt', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n    destFile = fileIo.openSync(filesDir + '/writeFile.txt', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n    // 创建缓冲区\n    let bufSize = 4096;\n    let buf = new ArrayBuffer(bufSize);\n    let readOffset = 0;\n    let readLength = 128;\n    // 设置读取的偏移量和长度，单位为Byte\n    let readOptions: ReadOptions = {\n      offset: readOffset,\n      length: readLength\n    };\n    // 分次读取源文件内容并写入至目标文件\n    let readLen = fileIo.readSync(srcFile.fd, buf, readOptions);\n    while (readLen > 0) {\n      readOffset += readLen;\n      let writeOptions: WriteOptions = {\n        length: readLen\n      };\n      // 写入目标文件\n      fileIo.writeSync(destFile.fd, buf, writeOptions);\n      // 更新读取位置\n      readOptions.offset = readOffset;\n      readLen = fileIo.readSync(srcFile.fd, buf, readOptions);\n    }\n    console.info(`Succeeded in reading and writing file.`);\n  } catch (err) {\n    console.error(`Failed to read and write File. Code: ${err.code}, message: ${err.message}`);\n  } finally {\n    try {\n      if (srcFile) {\n        fileIo.closeSync(srcFile);\n      }\n      if (destFile) {\n        fileIo.closeSync(destFile);\n      }\n    } catch (closeErr) {\n      console.error(`Failed to close file`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(799066)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用读写接口时，需注意可选项参数offset的设置。对于已存在且读写过的文件，文件偏移指针默认在上次读写操作的终止位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "以流的形式读写文件",
      children: "以流的形式读写文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码演示了如何使用流接口读取test.txt的文件内容并写入到destFile.txt文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/xxx.ets\nimport { fileIo, ReadOptions } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function readWriteFileWithStream(context: common.UIAbilityContext): Promise<void> {\n  let filesDir = context.filesDir;\n  let inputStream: fileIo.Stream | null = null;\n  let outputStream: fileIo.Stream | null = null;\n  try {\n    // 创建并打开输入文件流\n    inputStream = fileIo.createStreamSync(filesDir + '/test.txt', 'r+');\n    // 创建并打开输出文件流\n    outputStream = fileIo.createStreamSync(filesDir + '/destFile.txt', 'w+');\n    let bufSize = 4096;\n    let readSize = 0;\n    let buf = new ArrayBuffer(bufSize);\n    // 设置读取的偏移量和长度，单位为Byte\n    let readOptions: ReadOptions = {\n      offset: readSize,\n      length: bufSize\n    };\n    // 以流的形式读取源文件内容并写入到目标文件\n    let readLen = await inputStream.read(buf, readOptions);\n    readSize += readLen;\n    while (readLen > 0) {\n      const writeBuf = readLen < bufSize ? buf.slice(0, readLen) : buf;\n      await outputStream.write(writeBuf);\n      readOptions.offset = readSize;\n      readLen = await inputStream.read(buf, readOptions);\n      readSize += readLen;\n    }\n    console.info(`Succeeded in reading and writing file with stream.`);\n  } catch (err) {\n    console.error(`Failed to read and write file with stream. Code: ${err.code}, message: ${err.message}`);\n  } finally {\n    try {\n      if (inputStream) {\n        inputStream.closeSync();\n      }\n      if (outputStream) {\n        outputStream.closeSync();\n      }\n    } catch (closeErr) {\n      console.error(`Failed to close stream`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(451282)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用流接口时，需注意流的及时关闭。同时流的异步接口应严格遵循异步接口使用规范，避免同步、异步接口混用。流接口不支持并发读写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看文件列表",
      children: "查看文件列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码演示了如何查看文件列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo, Filter, ListFileOptions } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function getListFile(context: common.UIAbilityContext): void {\n  let listFileOption: ListFileOptions = {\n    recursion: false,\n    listNum: 0,\n    filter: {\n      suffix: ['.png', '.jpg', '.txt'],\n      displayName: ['test*'],\n      fileSizeOver: 0,\n      lastModifiedAfter: new Date(0).getTime()\n    }\n  };\n  let filesDir = context.filesDir;\n  try {\n    let files = fileIo.listFileSync(filesDir, listFileOption);\n    for (let i = 0; i < files.length; i++) {\n      console.info(`Succeeded in listing file, The name of file: ${files[i]}`);\n    }\n  } catch (err) {\n    console.error(`Failed to list file. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用文件流",
      children: "使用文件流"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码演示了如何使用文件可读流，文件可写流。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/xxx.ets\nimport { fileIo } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function copyFileWithReadable(context: common.UIAbilityContext): void {\n  try {\n    let filesDir = context.filesDir;\n    // 创建文件可读流\n    const rs = fileIo.createReadStream(`${filesDir}/test.txt`);\n    // 创建文件可写流\n    const ws = fileIo.createWriteStream(`${filesDir}/destFile.txt`);\n    // 暂停模式拷贝文件。在拷贝数据时，将原始数据暂停，然后将数据复制到另一个位置，适用于对数据完整性和一致性要求较高的场景\n    rs.on('readable', () => {\n      const data = rs.read();\n      if (!data) {\n        return;\n      }\n      ws.write(data);\n    });\n\n    rs.on('end', () => {\n      ws.end();\n      console.info(`Succeeded in copying file with read stream.`);\n    });\n\n    // 捕获异常\n    rs.on('error', () => {\n      rs.close();\n      ws.close();\n    });\n  } catch (err) {\n    console.error(`Failed to copy file with read stream. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function copyFileWithData(context: common.UIAbilityContext): void {\n  let filesDir = context.filesDir;\n\n  try {\n    // 创建文件可读流\n    let rs = fileIo.createReadStream(`${filesDir}/test.txt`);\n    // 创建文件可写流\n    let ws = fileIo.createWriteStream(`${filesDir}/destFile.txt`);\n\n    rs.push('Hello world');\n    // 流动模式拷贝文件\n    rs.on('data', (emitData) => {\n      const data = emitData?.data;\n      if (!data) {\n        return;\n      }\n      ws.write(data as Uint8Array);\n    });\n\n    rs.on('end', () => {\n      ws.end();\n      console.info(`Succeeded in copying file with data.`);\n    });\n\n    // 捕获异常\n    rs.on('error', () => {\n      rs.close();\n      ws.close();\n    });\n  } catch (err) {\n    console.error(`Failed to copy file with data. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用文件哈希流",
      children: "使用文件哈希流"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["哈希流是一种数据传输和存储技术，可以将任意长度的数据转换为固定长度的哈希值来验证数据的完整性和一致性。以下代码演示了如何使用文件哈希处理接口（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-hash/js-apis-file-hash",
        children: "ohos.file.hash"
      }), "）来处理文件哈希流。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/xxx.ets\nimport { fileIo } from '@kit.CoreFileKit';\nimport { hash } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n\n// 获取应用文件路径，请在组件内获取context\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function hashFileWithStream(context: common.UIAbilityContext) {\n  try {\n    let filesDir = context.filesDir;\n    const filePath = `${filesDir}/test.txt`;\n    // 创建文件可读流\n    const rs = fileIo.createReadStream(filePath);\n    // 创建哈希流\n    const hs = hash.createHash('sha256');\n    rs.on('data', (emitData) => {\n      const data = emitData?.data;\n      hs.update(new Uint8Array(data?.split('').map((x: string) => x.charCodeAt(0))).buffer);\n    });\n    rs.on('end', async () => {\n      const hashResult = hs.digest();\n      const fileHash = await hash.hash(filePath, 'sha256');\n      console.info(`Succeeded in hashing file with stream, hash result: ${hashResult}, file hash: ${fileHash}`);\n    });\n  } catch (err) {\n    console.error(`Failed to hash file with stream. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
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
799066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
451282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
333273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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