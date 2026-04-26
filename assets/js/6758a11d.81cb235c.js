"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["353525"], {
382017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_cross_app_data_share_many_to_many_data_share_unified_data_channels_unified_data_channels_md_675_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-cross-app-data-share-many-to-many-data-share-unified-data-channels-unified-data-channels-md-675.json
var site_docs_arkdata_cross_app_data_share_many_to_many_data_share_unified_data_channels_unified_data_channels_md_675_namespaceObject = JSON.parse('{"id":"arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels/unified-data-channels","title":"通过标准化数据通路实现数据共享 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels/unified-data-channels.md","sourceDirName":"arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels","slug":"/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels/","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"通过标准化数据通路实现数据共享 (ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unified-data-channels","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用间配置共享 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/one-to-many-data-share/share-config/"},"next":{"title":"通过标准化数据通路实现数据共享 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels/unified-data-channels.md


const frontMatter = {
	title: '通过标准化数据通路实现数据共享 (ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unified-data-channels',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过标准化数据通路实现数据共享 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "标准化数据通路的定义和实现",
  "id": "标准化数据通路的定义和实现",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "数据提供方",
  "id": "数据提供方",
  "level": 3
}, {
  "value": "数据访问方",
  "id": "数据访问方",
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
        id: "通过标准化数据通路实现数据共享-arkts",
        children: "通过标准化数据通路实现数据共享 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在多对多跨应用数据共享的场景下，需要提供一条数据通路能够写入多个不同应用的数据并共享给其他应用进行读取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UDMF针对多对多跨应用数据共享的不同业务场景提供了标准化的数据通路，提供了标准化的数据写入与读取接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "标准化数据通路的定义和实现",
      children: "标准化数据通路的定义和实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准化数据通路是为各种业务场景提供的跨应用的数据写入与读取通路，它可以暂存应用需要共享的符合标准化数据定义的统一数据对象，并提供给其他应用进行访问，同时按照一定的策略对暂存数据的修改、删除权限和生命周期进行管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准化数据通路通过UDMF提供的系统服务实现，应用（数据提供方）需要共享公共数据时可以通过UDMF提供的插入接口将数据写入到UDMF的数据通路中，并且可以通过UDMF提供的更新和删除接口对本应用已经存入数据进行更新和删除操作。目标应用（数据访问方）可以通过UDMF提供的读取接口进行数据的访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准化数据通路相关接口不推荐多线程调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统一数据对象UnifiedData在UDMF数据通路中具有全局唯一URI标识，其定义为udmf://intention/bundleName/groupId，其中各组成部分的含义分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "udmf:"
          })
        }), " 协议名，表示使用UDMF提供的数据通路。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "intention:"
          })
        }), " UDMF已经支持的数据通路类型枚举值，对应不同的业务场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "bundleName:"
          })
        }), " 数据来源应用的包名称。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "groupId:"
          })
        }), " 分组名称，支持批量数据分组管理。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前UDMF中的跨应用数据共享通路有：", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "公共数据通路"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "公共数据通路"
        })
      }), "：应用共享的公用数据共享通路，所有应用均可向通路中写入数据，写入方可以根据写入数据时生成的数据唯一标识符进行数据的更新、删除、指定数据标识符进行查询、全量查询；数据读取方能通过唯一标识符读取指定的数据，也可以设置Intention枚举类型为DATA_HUB来读取当前数据通路中的全量数据。公共数据通路通常仅用于传输应用间的过程数据，无法用于传输沙箱目录下文件等有权限管控的数据。UDMF会统一对数据的生命周期进行管理，每小时定期清理存入时长超过一小时的数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是UDMF标准化数据通路的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel",
        children: "标准化数据通路"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor",
        children: "标准化数据定义与描述"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将数据写入UDMF的公共数据通路中，并生成数据的唯一标识符，使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateData(options: Options, data: UnifiedData, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新已写入UDMF的公共数据通路的数据，使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "queryData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询UDMF公共数据通路的数据，使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deleteData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除UDMF公共数据通路的数据，返回删除的数据集，使用callback异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct#plaintext",
        children: "PlainText"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct#html",
        children: "HTML"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct#pixelmap15",
        children: "PixelMap"
      }), "三种数据进行多对多数据共享的过程为例说明开发步骤，数据提供方可以通过UDMF提供的insertData接口将数据写入公共数据通路，获取到的返回值（生成的数据的唯一标识符），可用于对其插入的数据进行更新和删除操作。数据访问方则可以通过UDMF提供的查询接口获取当前公共数据通路的全量数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据提供方",
      children: "数据提供方"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入unifiedDataChannel、uniformTypeDescriptor和uniformDataStruct模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { unifiedDataChannel, uniformTypeDescriptor, uniformDataStruct } from '@kit.ArkData';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个统一数据对象并插入到UDMF的公共数据通路中。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "导入对应数据对象模块。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "创建并插入数据。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 准备PlainText文本数据内容\nlet plainTextObj: uniformDataStruct.PlainText = {\n  uniformDataType: 'general.plain-text',\n  textContent: 'Hello world',\n  abstract: 'This is abstract'\n}\nlet record =\n  new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainTextObj);\n// 准备HTML数据内容\nlet htmlObj: uniformDataStruct.HTML = {\n  uniformDataType: 'general.html',\n  htmlContent: '<div><p>Hello world</p></div>',\n  plainContent: 'Hello world'\n}\n// 为该记录增加一种样式，两种样式存储的是同一个数据，为不同表达形式\nrecord.addEntry(uniformTypeDescriptor.UniformDataType.HTML, htmlObj);\nlet unifiedData = new unifiedDataChannel.UnifiedData(record);\n\n// 准备pixelMap数据内容\nlet arrayBuffer = new ArrayBuffer(4 * 3 * 3);\nlet opt: image.InitializationOptions = {\n  editable: true,\n  pixelFormat: 3,\n  size: { height: 3, width: 3 },\n  alphaType: 3\n};\nlet pixelMap: uniformDataStruct.PixelMap = {\n  uniformDataType: 'openharmony.pixel-map',\n  pixelMap: image.createPixelMapSync(arrayBuffer, opt)\n}\nunifiedData.addRecord(new unifiedDataChannel.UnifiedRecord(\n  uniformTypeDescriptor.UniformDataType.OPENHARMONY_PIXEL_MAP, pixelMap));\n// 指定要插入数据的数据通路枚举类型\nlet options: unifiedDataChannel.Options = {\n  intention: unifiedDataChannel.Intention.DATA_HUB\n}\ntry {\n  unifiedDataChannel.insertData(options, unifiedData, (err, key) => {\n    if (err === undefined) {\n      hilog.info(0xFF00, '[Sample_Udmf]', `Succeeded in inserting data. key = ${key}`);\n    } else {\n      hilog.error(0xFF00, '[Sample_Udmf]', `Succeeded in inserting data. key = ${key})`);\n    }\n  });\n} catch (e) {\n  let error: BusinessError = e as BusinessError;\n  hilog.error(0xFF00, '[Sample_Udmf]',\n    `Insert data throws an exception. code is ${error.code},message is ${error.message}`);\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更新上一步插入的统一数据对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let plainTextUpdate: uniformDataStruct.PlainText = {\n  uniformDataType: 'general.plain-text',\n  textContent: 'How are you',\n  abstract: 'This is abstract'\n}\nlet recordUpdate =\n  new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainTextUpdate);\nlet htmlUpdate: uniformDataStruct.HTML = {\n  uniformDataType: 'general.html',\n  htmlContent: '<div><p>How are you</p></div>',\n  plainContent: 'How are you'\n}\nrecordUpdate.addEntry(uniformTypeDescriptor.UniformDataType.HTML, htmlUpdate);\nlet unifiedDataUpdate = new unifiedDataChannel.UnifiedData(recordUpdate);\n\n// 指定要更新的统一数据对象的URI\nlet optionsUpdate: unifiedDataChannel.Options = {\n  // 此处的key值仅为示例，不可直接使用，其值与insertData接口回调函数中key保持一致\n  key: 'udmf://DataHub/com.ohos.test/0123456789'\n};\n\ntry {\n  unifiedDataChannel.updateData(optionsUpdate, unifiedDataUpdate, (err) => {\n    if (err === undefined) {\n      hilog.info(0xFF00, '[Sample_Udmf]', `Succeeded in updating data.`);\n    } else {\n      hilog.error(0xFF00, '[Sample_Udmf]', `Failed to update data. code is ${err.code},message is ${err.message}`);\n    }\n  });\n} catch (e) {\n  let error: BusinessError = e as BusinessError;\n  hilog.error(0xFF00, '[Sample_Udmf]',\n    `Update data throws an exception. code is ${error.code},message is ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除存储在UDMF公共数据通路中的统一数据对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 指定要删除数据的数据通路枚举类型\nlet optionsDelete: unifiedDataChannel.Options = {\n  intention: unifiedDataChannel.Intention.DATA_HUB\n};\n\ntry {\n  unifiedDataChannel.deleteData(optionsDelete, (err, data) => {\n    if (err === undefined) {\n      hilog.info(0xFF00, '[Sample_Udmf]', `Succeeded in deleting data. size = ${data.length}`);\n      for (let i = 0; i < data.length; i++) {\n        let records = data[i].getRecords();\n        for (let j = 0; j < records.length; j++) {\n          let types = records[j].getTypes();\n          // 根据业务需要从记录中获取样式数据\n          if (types.includes(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT)) {\n            let text =\n              records[j].getEntry(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT) as uniformDataStruct.PlainText;\n            hilog.info(0xFF00, '[Sample_Udmf]', `${i + 1}.${text.textContent}`);\n          }\n          if (types.includes(uniformTypeDescriptor.UniformDataType.HTML)) {\n            let html =\n              records[j].getEntry(uniformTypeDescriptor.UniformDataType.HTML) as uniformDataStruct.HTML;\n            hilog.info(0xFF00, '[Sample_Udmf]', `${i + 1}.${html.htmlContent}`);\n          }\n        }\n      }\n    } else {\n      hilog.error(0xFF00, '[Sample_Udmf]', `Failed to delete data. code is ${err.code},message is ${err.message}`);\n    }\n  });\n} catch (e) {\n  let error: BusinessError = e as BusinessError;\n  hilog.error(0xFF00, '[Sample_Udmf]',\n    `Delete data throws an exception. code is ${error.code},message is ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据访问方",
      children: "数据访问方"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入unifiedDataChannel、uniformTypeDescriptor和uniformDataStruct模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { unifiedDataChannel, uniformTypeDescriptor, uniformDataStruct } from '@kit.ArkData';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询存储在UDMF公共数据通路中的全量统一数据对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 指定要查询数据的数据通路枚举类型\nlet options: unifiedDataChannel.Options = {\n  intention: unifiedDataChannel.Intention.DATA_HUB\n};\n\ntry {\n  unifiedDataChannel.queryData(options, (err, data) => {\n    if (err === undefined) {\n      hilog.info(0xFF00, '[Sample_Udmf]', `Succeeded in querying data. size = ${data.length}`);\n      for (let i = 0; i < data.length; i++) {\n        let records = data[i].getRecords();\n        for (let j = 0; j < records.length; j++) {\n          let types = records[j].getTypes();\n          // 根据业务需要从记录中获取样式数据\n          if (types.includes(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT)) {\n            let text =\n              records[j].getEntry(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT) as uniformDataStruct.PlainText;\n            hilog.info(0xFF00, '[Sample_Udmf]', `${i + 1}.${text.textContent}`);\n          }\n          if (types.includes(uniformTypeDescriptor.UniformDataType.HTML)) {\n            let html =\n              records[j].getEntry(uniformTypeDescriptor.UniformDataType.HTML) as uniformDataStruct.HTML;\n            hilog.info(0xFF00, '[Sample_Udmf]', `${i + 1}.${html.htmlContent}`);\n          }\n        }\n      }\n    } else {\n      hilog.error(0xFF00, '[Sample_Udmf]', `Failed to query data. code is ${err.code},message is ${err.message}`);\n    }\n  });\n} catch (e) {\n  let error: BusinessError = e as BusinessError;\n  hilog.error(0xFF00, '[Sample_Udmf]',\n    `Query data throws an exception. code is ${error.code},message is ${error.message}`);\n}\n"
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