"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["62802"], {
384176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_compress_deflate_and_inflate_deflate_and_inflate_md_e43_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-compress-deflate-and-inflate-deflate-and-inflate-md-e43.json
var site_docs_system_basicfun_basic_services_kit_compress_deflate_and_inflate_deflate_and_inflate_md_e43_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/compress/deflate-and-inflate/deflate-and-inflate","title":"压缩与解压","description":"本文针对常见的几种压缩、解压场景，介绍相关函数的使用方法。","source":"@site/docs/system-basicfun/basic-services-kit/compress/deflate-and-inflate/deflate-and-inflate.md","sourceDirName":"system-basicfun/basic-services-kit/compress/deflate-and-inflate","slug":"/system-basicfun/basic-services-kit/compress/deflate-and-inflate/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/compress/deflate-and-inflate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"压缩与解压","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deflate-and-inflate","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用文件上传下载","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/upload-download/app-file-upload-download/"},"next":{"title":"文件打印（C/C++）","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/print/native-print-file/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/compress/deflate-and-inflate/deflate-and-inflate.md


const frontMatter = {
	title: '压缩与解压',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deflate-and-inflate',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '压缩与解压';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 3
}, {
  "value": "Zip文件的压缩与解压",
  "id": "zip文件的压缩与解压",
  "level": 3
}, {
  "value": "已知大小缓冲区的压缩与解压",
  "id": "已知大小缓冲区的压缩与解压",
  "level": 3
}, {
  "value": "未知大小缓冲区的压缩与解压（zlib格式）",
  "id": "未知大小缓冲区的压缩与解压zlib格式",
  "level": 3
}, {
  "value": "未知大小缓冲区的压缩与解压（gzip格式）",
  "id": "未知大小缓冲区的压缩与解压gzip格式",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "压缩与解压",
        children: "压缩与解压"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文针对常见的几种压缩、解压场景，介绍相关函数的使用方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是示例中使用的主要接口，更多接口及使用方式请见@ohos.zlib (Zip模块)(../../reference/apis-basic-services-kit/js-apis-zlib.md)。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compressFile(inFile: string, outFile: string, options: Options): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "压缩文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "decompressFile(inFile: string, outFile: string, options?: Options): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解压文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compress(dest: ArrayBuffer, source: ArrayBuffer, sourceLen?: number): Promise<ZipOutputInfo>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将源缓冲区压缩到目标缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compressBound(sourceLen: number): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算返回压缩大小的上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uncompress(dest:ArrayBuffer, source: ArrayBuffer, sourceLen?: number): Promise<ZipOutputInfo>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将压缩后的数据解压缩为原始的未压缩形式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deflate(strm: ZStream, flush: CompressFlushMode): Promise<ReturnStatus>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "压缩数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inflate(strm: ZStream, flush: CompressFlushMode): Promise<ReturnStatus>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解压数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用沙箱目录下创建一个测试文件data.txt，并写入测试数据。示例代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo as fs} from '@kit.CoreFileKit';\n\n@Entry\n@Component\nstruct Index {\n  @State dataSize: number = 0;\n\n  build() {\n    Row() {\n      Column() {\n        // 在应用沙箱目录下创建文件data.txt，并写入测试数据\n        Button('创建测试文件data.txt').onClick(() => {\n          let path = this.getUIContext()?.getHostContext()?.filesDir;\n          // 创建文件data.txt\n          let inFile = fs.openSync(path + '/data.txt', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n          // 写入测试数据\n          for (let index = 0; index < 100; index++) {\n            fs.writeSync(inFile.fd, index + ': hello world, hello world, hello world, hello world, hello world.\\n');\n          }\n          // 获取测试数据原始大小，并保存到dataSize中\n          let stat = fs.statSync(inFile.path);\n          this.dataSize = stat.size;\n          console.info('dataSize: ' + this.dataSize);\n          // 关闭文件\n          fs.closeSync(inFile);\n        })\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zip文件的压缩与解压",
      children: "Zip文件的压缩与解压"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["采用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib#zlibcompressfile9-1",
        children: "zlib.compressFile()"
      }), "将文件data.txt压缩并归档到data.zip中，采用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib#zlibdecompressfile9-1",
        children: "zlib.decompressFile()"
      }), "将data.zip解压到应用沙箱目录下，示例代码如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError, zlib } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      // 示例一：将测试文件data.txt压缩并归档到data.zip中。\n      Button('compressFile').onClick(() => {\n        let path = this.getUIContext()?.getHostContext()?.filesDir;\n        let inFile = path + '/data.txt';\n        let outFile = path + '/data.zip';\n        let options: zlib.Options = {};\n        zlib.compressFile(inFile, outFile, options).then((data: void) => {\n          console.info('compressFile success, data: ' + JSON.stringify(data));\n        }).catch((errData: BusinessError) => {\n          console.error(`compressFile errCode: ${errData.code}, message: ${errData.message}`);\n        })\n      })\n\n      // 示例二：将data.zip文件解压到应用沙箱目录下。\n      Button('decompressFile').onClick(() => {\n        let path = this.getUIContext()?.getHostContext()?.filesDir;\n        let inFile = path + '/data.zip';\n        let outFile = path;\n        let options: zlib.Options = {};\n        zlib.decompressFile(inFile, outFile, options).then((data: void) => {\n          console.info('decompressFile success, data: ' + JSON.stringify(data));\n        }).catch((errData: BusinessError) => {\n          console.error(`decompressFile errCode: ${errData.code}, message: ${errData.message}`);\n        })\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "已知大小缓冲区的压缩与解压",
      children: "已知大小缓冲区的压缩与解压"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对一个已知大小的缓冲区中的数据，使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib#compress12",
        children: "compress()"
      }), "将其压缩到一个目标缓冲区中，使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib#compressbound12",
        children: "compressBound()"
      }), "计算压缩目标缓冲区大小的上限值，使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib#uncompress12",
        children: "uncompress()"
      }), "对存储压缩数据的缓冲区进行解压。由于解压时无法获取解压后原始数据的大小，为了确认解压后目标缓冲区的大小，需要在压缩前获取原始数据的大小并保存，示例代码如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo as fs} from '@kit.CoreFileKit';\nimport { BusinessError, zlib } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  @State dataSize: number = 0;  // 用于保存原始数据的大小\n\n  build() {\n    Row() {\n      // 示例一：读取data.txt文件内容并存入一个缓冲区，调用compress接口压缩缓冲区中的数据到目标缓冲区，并将目标缓冲区的内容写入文件data.bin\n      Button('compress buffer').onClick(() => {\n        let path = this.getUIContext()?.getHostContext()?.filesDir;\n        let inFile = fs.openSync(path + '/data.txt', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        let outFile = fs.openSync(path + '/data.bin', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        // 读取data.txt文件的内容，并存入缓冲区inBuf\n        let stat = fs.statSync(inFile.path);\n        let inBuf = new ArrayBuffer(stat.size);\n        let readLen = fs.readSync(inFile.fd, inBuf);\n        console.info(`original size: ${stat.size}, read len: ${readLen}`);\n        // 获取原始数据的大小，并保存\n        this.dataSize = stat.size;\n        // 创建一个压缩对象实例\n        let zip = zlib.createZipSync();\n        // 获取一个目标缓冲区的上限\n        zip.compressBound(stat.size).then((data) => {\n          console.info(`the max dest buf len is ${data}`);\n          // 目标缓冲区outBuf\n          let outBuf = new ArrayBuffer(data);\n          // 将inBuf中的数据压缩到outBuf中\n          zip.compress(outBuf, inBuf, readLen).then((zipOutInfo) => {\n            console.info(`compress success, status ${zipOutInfo.status}, destLen  ${zipOutInfo.destLen}`);\n            // 将outBuf中的数据写入到data.bin文件\n            let writeLen = fs.writeSync(outFile.fd, outBuf, { length: zipOutInfo.destLen });\n            console.info(`write destBuf to data.bin, writeLen ${writeLen}`);\n            // 关闭文件\n            fs.closeSync(inFile.fd);\n            fs.closeSync(outFile.fd);\n          }).catch((errData: BusinessError) => {\n            console.error(`errData is errCode:${errData.code}  message:${errData.message}`);\n          })\n        }).catch((errData: BusinessError) => {\n          console.error(`errData is errCode:${errData.code}  message:${errData.message}`);\n        })\n      })\n\n      // 示例二：读取data.bin文件中的压缩数据并存入一个缓冲区，调用uncompress接口将缓冲区中的数据解压到目标缓冲区，并将目标缓冲区的内容写入文件data.txt\n      Button('uncompress buffer').onClick(() => {\n        let path = this.getUIContext()?.getHostContext()?.filesDir;\n        let inFile = fs.openSync(path + '/data.bin', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        let outFile = fs.openSync(path + '/data.txt', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        // 读取data.bin文件中的压缩数据，并存入缓冲区inBuf\n        let stat = fs.statSync(inFile.path);\n        let inBuf = new ArrayBuffer(stat.size);\n        let readLen = fs.readSync(inFile.fd, inBuf);\n        console.info(`compressed data size: ${stat.size}, read len: ${readLen}`);\n        // 创建一个目标缓冲区，此处的dataSize是我们进行数据压缩前保存的数据的原始大小\n        let outBuf = new ArrayBuffer(this.dataSize);\n        console.info(`the dest buf size is ${this.dataSize}`);\n        // 创建一个压缩对象实例\n        let zip = zlib.createZipSync();\n        // 将inBuf中的数据解压缩outBuf中\n        zip.uncompress(outBuf, inBuf, readLen).then((zipOutInfo) => {\n          console.info(`uncompress success, status ${zipOutInfo.status}, destLen  ${zipOutInfo.destLen}`);\n          // 将outBuf中的数据写入到data.txt文件\n          let writeLen = fs.writeSync(outFile.fd, outBuf, { length: zipOutInfo.destLen });\n          console.info(`write destBuf to data.txt, writeLen ${writeLen}`);\n          // 关闭文件\n          fs.closeSync(inFile.fd);\n          fs.closeSync(outFile.fd);\n        }).catch((errData: BusinessError) => {\n          console.error(`errData is errCode:${errData.code}  message:${errData.message}`);\n        })\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "未知大小缓冲区的压缩与解压zlib格式",
      children: "未知大小缓冲区的压缩与解压（zlib格式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对一个未知大小的缓冲区中的数据，使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib#deflate12",
        children: "deflate()"
      }), "将从一个原始输入流中读取的数据进行压缩，使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib#inflate12",
        children: "inflate()"
      }), "将从一个压缩输入流中读取的数据进行解压，示例代码如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo as fs} from '@kit.CoreFileKit';\nimport { zlib } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      // 示例一：从文件中不断读取数据进行压缩\n      Button('deflateFile').onClick(() => {\n        let path = this.getUIContext()?.getHostContext()?.filesDir;\n        let inFile = fs.openSync(path + '/data.txt', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        let outFile = fs.openSync(path + '/data.bin', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        deflateFile(inFile, outFile).then(() => {\n          console.info('deflateFile success');\n          fs.closeSync(inFile.fd);\n          fs.closeSync(outFile.fd);\n        })\n      })\n\n      // 示例二：从文件中不断读取压缩数据进行解压\n      Button('inflateFile').onClick(() => {\n        let path = this.getUIContext()?.getHostContext()?.filesDir;\n        let inFile = fs.openSync(path + '/data.bin', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        let outFile = fs.openSync(path + '/data.txt', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        inflateFile(inFile, outFile).then(() => {\n          console.info('inflateFile success');\n          fs.closeSync(inFile.fd);\n          fs.closeSync(outFile.fd);\n        })\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n// 从一个文件中，不断的读入数据，进行压缩，并写入到另一个文件中\nasync function deflateFile(src: fs.File, dest: fs.File) {\n  let flush = zlib.CompressFlushMode.NO_FLUSH;\n  let strm: zlib.ZStream = {};  // 初始化一个压缩流\n  const BUFLEN = 4096;\n  let inBuf = new ArrayBuffer(BUFLEN);  // 初始化一个输入缓冲区\n  let outBuf = new ArrayBuffer(BUFLEN); // 初始化一个输出缓冲区\n  // 创建一个压缩对象实例\n  let zip = zlib.createZipSync();\n  // 初始化流的状态\n  let initStatus = zip.deflateInit(strm, zlib.CompressLevel.COMPRESS_LEVEL_BEST_SPEED);\n  console.info('deflateInit ret: ' + (await initStatus).valueOf());\n  do {\n    // 从文件中读取数据到缓冲区\n    let readLen = fs.readSync(src.fd, inBuf);\n    console.info('readSync readLen: ' + readLen);\n    flush = readLen == 0 ? zlib.CompressFlushMode.FINISH : zlib.CompressFlushMode.NO_FLUSH;\n    // 设置输入缓冲区\n    strm.availableIn = readLen;\n    strm.nextIn = inBuf;\n    do {\n      // 设置输出缓冲区\n      strm.availableOut = BUFLEN;\n      strm.nextOut = outBuf;\n      try {\n        // 压缩输入缓冲区中数据到输出缓冲区\n        let deflateStatus = zip.deflate(strm, flush);\n        console.info('deflate ret: ' + (await deflateStatus).valueOf());\n        // 更新流的状态\n        let innerStrm = zip.getZStream();\n        strm.availableIn = (await innerStrm).availableIn;\n        strm.nextIn = (await innerStrm).nextIn;\n        strm.availableOut = (await innerStrm).availableOut;\n        strm.nextOut = (await innerStrm).nextOut;\n        strm.totalIn = (await innerStrm).totalIn;\n        strm.totalOut = (await innerStrm).totalOut;\n\n        if (strm.availableOut != undefined) {\n          // 将已完成压缩的数据，写入到输出文件中\n          let have = BUFLEN - strm.availableOut;\n          let writeLen = fs.writeSync(dest.fd, outBuf, { length: have });\n          console.info(`writeSync writeLen: ${writeLen}`);\n        }\n      } catch (err) {\n        console.error('deflate err: ' + JSON.stringify(err));\n      }\n    } while (strm.availableOut == 0); // 循环压缩输入缓冲区中剩余的数据，直到全部完成压缩\n  } while (flush != zlib.CompressFlushMode.FINISH); // 循环从文件中读取数据，直到数据全部读取\n  // 释放资源\n  zip.deflateEnd(strm);\n}\n\n// 从一个文件中，不断的读入已压缩的数据，进行解压，并写入到另一个文件中\nasync function inflateFile(src: fs.File, dest: fs.File) {\n  let status: zlib.ReturnStatus = zlib.ReturnStatus.OK;\n  let strm: zlib.ZStream = {};  // 初始化一个压缩流\n  const BUFLEN = 4096;\n  let inBuf = new ArrayBuffer(BUFLEN);  // 初始化一个输入缓冲区\n  let outBuf = new ArrayBuffer(BUFLEN); // 初始化一个输出缓冲区\n  // 创建一个压缩对象实例\n  let zip = zlib.createZipSync();\n  // 初始化流的状态\n  let initStatus = zip.inflateInit(strm);\n  console.info('inflateInit ret: ' + (await initStatus).valueOf());\n  do {\n    // 从文件中读取已压缩的数据到缓冲区\n    let readLen = fs.readSync(src.fd, inBuf);\n    console.info('readSync readLen: ' + readLen);\n    if (readLen == 0) {\n      break;\n    }\n    // 设置输入缓冲区\n    strm.availableIn = readLen;\n    strm.nextIn = inBuf;\n    do {\n      // 设置输出缓冲区\n      strm.availableOut = BUFLEN;\n      strm.nextOut = outBuf;\n      try {\n        // 解压输入缓冲区中数据到输出缓冲区\n        let inflateStatus = zip.inflate(strm, zlib.CompressFlushMode.NO_FLUSH);\n        console.info('inflate ret: ' + (await inflateStatus).valueOf());\n        status = await inflateStatus;\n        // 更新流的状态\n        let innerStrm = zip.getZStream();\n        strm.availableIn = (await innerStrm).availableIn;\n        strm.nextIn = (await innerStrm).nextIn;\n        strm.availableOut = (await innerStrm).availableOut;\n        strm.nextOut = (await innerStrm).nextOut;\n        strm.totalIn = (await innerStrm).totalIn;\n        strm.totalOut = (await innerStrm).totalOut;\n\n        if (strm.availableOut != undefined) {\n          // 将已完成解压的数据，写入到输出文件中\n          let have = BUFLEN - strm.availableOut;\n          let writeLen = fs.writeSync(dest.fd, outBuf, { length: have });\n          console.info(`writeSync writeLen: ${writeLen}`);\n        }\n      } catch (err) {\n        console.error('inflate err: ' + JSON.stringify(err));\n      }\n    } while (strm.availableOut == 0)  // 循环解压输入缓冲区中剩余的数据，直到全部完成解压\n  } while (status != zlib.ReturnStatus.STREAM_END.valueOf())  // 循环从文件中读取数据，直到数据全部读取\n  // 释放资源\n  zip.inflateEnd(strm);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "未知大小缓冲区的压缩与解压gzip格式",
      children: "未知大小缓冲区的压缩与解压（gzip格式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["采用gzip格式，针对一个未知大小的缓冲区中的数据，使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib#deflate12",
        children: "deflate()"
      }), "将从一个原始输入流中读取的数据进行压缩，使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib#inflate12",
        children: "inflate()"
      }), "将从一个压缩输入流中读取的数据进行解压，示例代码如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo as fs} from '@kit.CoreFileKit';\nimport { zlib } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      // 示例一：从文件中不断读取数据进行压缩\n      Button('deflateGzipFile').onClick(() => {\n        let path = this.getUIContext()?.getHostContext()?.filesDir;\n        let inFile = fs.openSync(path + '/data.txt', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        let outFile = fs.openSync(path + '/data.gz', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        deflateGzipFile(inFile, outFile).then(() => {\n          console.info('deflateGzipFile success');\n          fs.closeSync(inFile.fd);\n          fs.closeSync(outFile.fd);\n        })\n      })\n\n      // 示例二：从文件中不断读取压缩数据进行解压\n      Button('inflateGzipFile').onClick(() => {\n        let path = this.getUIContext()?.getHostContext()?.filesDir;\n        let inFile = fs.openSync(path + '/data.gz', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        let outFile = fs.openSync(path + '/data.txt', fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n        inflateGzipFile(inFile, outFile).then(() => {\n          console.info('inflateGzipFile success');\n          fs.closeSync(inFile.fd);\n          fs.closeSync(outFile.fd);\n        })\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n// 从一个文件中，不断的读入数据，进行压缩，并写入到另一个文件中\nasync function deflateGzipFile(src: fs.File, dest: fs.File) {\n  let flush = zlib.CompressFlushMode.NO_FLUSH;\n  let strm: zlib.ZStream = {};  // 初始化一个压缩流\n  const BUFLEN = 4096;\n  let inBuf = new ArrayBuffer(BUFLEN);  // 初始化一个输入缓冲区\n  let outBuf = new ArrayBuffer(BUFLEN); // 初始化一个输出缓冲区\n  // 创建一个压缩对象实例\n  let zip = zlib.createZipSync();\n  // 初始化流的状态，windowBits > 15时，启用gzip格式\n  let windowBits = 15 + 16;\n  let initStatus = zip.deflateInit2(strm, zlib.CompressLevel.COMPRESS_LEVEL_BEST_SPEED,\n    zlib.CompressMethod.DEFLATED, windowBits, zlib.MemLevel.MEM_LEVEL_DEFAULT,\n    zlib.CompressStrategy.COMPRESS_STRATEGY_DEFAULT_STRATEGY);\n  console.info('deflateInit2 ret: ' + (await initStatus).valueOf());\n  do {\n    // 从文件中读取数据到缓冲区\n    let readLen = fs.readSync(src.fd, inBuf);\n    console.info('readSync readLen: ' + readLen);\n    flush = readLen == 0 ? zlib.CompressFlushMode.FINISH : zlib.CompressFlushMode.NO_FLUSH;\n    // 设置输入缓冲区\n    strm.availableIn = readLen;\n    strm.nextIn = inBuf;\n    do {\n      // 设置输出缓冲区\n      strm.availableOut = BUFLEN;\n      strm.nextOut = outBuf;\n      try {\n        // 压缩输入缓冲区中数据到输出缓冲区\n        let deflateStatus = zip.deflate(strm, flush);\n        console.info('deflate ret: ' + (await deflateStatus).valueOf());\n        // 更新流的状态\n        let innerStrm = zip.getZStream();\n        strm.availableIn = (await innerStrm).availableIn;\n        strm.nextIn = (await innerStrm).nextIn;\n        strm.availableOut = (await innerStrm).availableOut;\n        strm.nextOut = (await innerStrm).nextOut;\n        strm.totalIn = (await innerStrm).totalIn;\n        strm.totalOut = (await innerStrm).totalOut;\n\n        if (strm.availableOut != undefined) {\n          // 将已完成压缩的数据，写入到输出文件中\n          let have = BUFLEN - strm.availableOut;\n          let writeLen = fs.writeSync(dest.fd, outBuf, { length: have });\n          console.info(`writeSync writeLen: ${writeLen}`);\n        }\n      } catch (err) {\n        console.error('deflate err: ' + JSON.stringify(err));\n      }\n    } while (strm.availableOut == 0); // 循环压缩输入缓冲区中剩余的数据，直到全部完成压缩\n  } while (flush != zlib.CompressFlushMode.FINISH); // 循环从文件中读取数据，直到数据全部读取\n  // 释放资源\n  zip.deflateEnd(strm);\n}\n\n// 从一个文件中，不断的读入已压缩的数据，进行解压，并写入到另一个文件中\nasync function inflateGzipFile(src: fs.File, dest: fs.File) {\n  let status: zlib.ReturnStatus = zlib.ReturnStatus.OK;\n  let strm: zlib.ZStream = {};  // 初始化一个压缩流\n  const BUFLEN = 4096;\n  let inBuf = new ArrayBuffer(BUFLEN);  // 初始化一个输入缓冲区\n  let outBuf = new ArrayBuffer(BUFLEN); // 初始化一个输出缓冲区\n  // 创建一个压缩对象实例\n  let zip = zlib.createZipSync();\n  // 初始化流的状态，windowBits > 15时，启用gzip格式\n  let windowBits = 15 + 16;\n  let initStatus = zip.inflateInit2(strm, windowBits);\n  console.info('inflateInit2 ret: ' + (await initStatus).valueOf());\n  do {\n    // 从文件中读取已压缩的数据到缓冲区\n    let readLen = fs.readSync(src.fd, inBuf);\n    console.info('readSync readLen: ' + readLen);\n    if (readLen == 0) {\n      break;\n    }\n    // 设置输入缓冲区\n    strm.availableIn = readLen;\n    strm.nextIn = inBuf;\n    do {\n      // 设置输出缓冲区\n      strm.availableOut = BUFLEN;\n      strm.nextOut = outBuf;\n      try {\n        // 解压输入缓冲区中数据到输出缓冲区\n        let inflateStatus = zip.inflate(strm, zlib.CompressFlushMode.NO_FLUSH);\n        console.info('inflate ret: ' + (await inflateStatus).valueOf());\n        status = await inflateStatus;\n        // 更新流的状态\n        let innerStrm = zip.getZStream();\n        strm.availableIn = (await innerStrm).availableIn;\n        strm.nextIn = (await innerStrm).nextIn;\n        strm.availableOut = (await innerStrm).availableOut;\n        strm.nextOut = (await innerStrm).nextOut;\n        strm.totalIn = (await innerStrm).totalIn;\n        strm.totalOut = (await innerStrm).totalOut;\n\n        if (strm.availableOut != undefined) {\n          // 将已完成解压的数据，写入到输出文件中\n          let have = BUFLEN - strm.availableOut;\n          let writeLen = fs.writeSync(dest.fd, outBuf, { length: have });\n          console.info(`writeSync writeLen: ${writeLen}`);\n        }\n      } catch (err) {\n        console.error('inflate err: ' + JSON.stringify(err));\n      }\n    } while (strm.availableOut == 0)  // 循环解压输入缓冲区中剩余的数据，直到全部完成解压\n  } while (status != zlib.ReturnStatus.STREAM_END.valueOf())  // 循环从文件中读取数据，直到数据全部读取\n  // 释放资源\n  zip.inflateEnd(strm);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "17800005 传入的数据错误"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可能原因和处理步骤，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-zlib/errorcode-zlib#section17800005-%E4%BC%A0%E5%85%A5%E7%9A%84%E6%95%B0%E6%8D%AE%E9%94%99%E8%AF%AF",
            children: "17800005"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "17800007 传入的缓冲区错误"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可能原因和处理步骤，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-zlib/errorcode-zlib#section17800007-%E4%BC%A0%E5%85%A5%E7%9A%84%E7%BC%93%E5%86%B2%E5%8C%BA%E9%94%99%E8%AF%AF",
            children: "17800007"
          }), "。"]
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