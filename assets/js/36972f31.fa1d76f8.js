"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["338297"], {
40870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_utils_xml_generation_parsing_conversion_xml_parsing_xml_parsing_md_369_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-utils-xml-generation-parsing-conversion-xml-parsing-xml-parsing-md-369.json
var site_docs_arkts_arkts_utils_xml_generation_parsing_conversion_xml_parsing_xml_parsing_md_369_namespaceObject = JSON.parse('{"id":"arkts/arkts-utils/xml-generation-parsing-conversion/xml-parsing/xml-parsing","title":"XML解析","description":"对于以XML作为载体传递的数据，实际使用中需要对相关的元素进行解析，一般包括解析XML标签和标签值、解析XML属性和属性值、解析XML事件类型和元素信息三类操作。如在Web服务中，XML是SOAP（Simple Object Access Protocol）协议的基础，SOAP消息通常以XML格式封装，包含请求和响应参数，通过解析这些XML消息，Web服务可以处理来自客户端的请求并生成相应的响应。","source":"@site/docs/arkts/arkts-utils/xml-generation-parsing-conversion/xml-parsing/xml-parsing.md","sourceDirName":"arkts/arkts-utils/xml-generation-parsing-conversion/xml-parsing","slug":"/arkts/arkts-utils/xml-generation-parsing-conversion/xml-parsing/","permalink":"/harmonyos-docs-site/arkts/arkts-utils/xml-generation-parsing-conversion/xml-parsing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"XML解析","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xml-parsing","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"XML生成","permalink":"/harmonyos-docs-site/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation/"},"next":{"title":"XML转换","permalink":"/harmonyos-docs-site/arkts/arkts-utils/xml-generation-parsing-conversion/xml-conversion/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-utils/xml-generation-parsing-conversion/xml-parsing/xml-parsing.md


const frontMatter = {
	title: 'XML解析',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xml-parsing',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'XML解析';

const assets = {

};



const toc = [{
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "解析XML标签和标签值",
  "id": "解析xml标签和标签值",
  "level": 2
}, {
  "value": "解析XML属性和属性值",
  "id": "解析xml属性和属性值",
  "level": 2
}, {
  "value": "解析XML事件类型和元素信息",
  "id": "解析xml事件类型和元素信息",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
        id: "xml解析",
        children: "XML解析"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于以XML作为载体传递的数据，实际使用中需要对相关的元素进行解析，一般包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%A7%A3%E6%9E%90xml%E6%A0%87%E7%AD%BE%E5%92%8C%E6%A0%87%E7%AD%BE%E5%80%BC",
        children: "解析XML标签和标签值"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%A7%A3%E6%9E%90xml%E5%B1%9E%E6%80%A7%E5%92%8C%E5%B1%9E%E6%80%A7%E5%80%BC",
        children: "解析XML属性和属性值"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%A7%A3%E6%9E%90xml%E4%BA%8B%E4%BB%B6%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%85%83%E7%B4%A0%E4%BF%A1%E6%81%AF",
        children: "解析XML事件类型和元素信息"
      }), "三类操作。如在Web服务中，XML是SOAP（Simple Object Access Protocol）协议的基础，SOAP消息通常以XML格式封装，包含请求和响应参数，通过解析这些XML消息，Web服务可以处理来自客户端的请求并生成相应的响应。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XML模块提供XmlPullParser类用于解析XML文本，输入为包含XML数据的ArrayBuffer或DataView，输出为结构化的解析结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " XML解析选项，其详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-xml/js-apis-xml#parseoptions",
        children: "ParseOptions"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportDoctype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否解析文档类型，false表示不解析文档类型，true表示解析文档类型，默认false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ignoreNameSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否忽略命名空间，忽略命名空间后，将不会对其进行解析。true表示忽略命名空间，false表示不忽略命名空间，默认false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tagValueCallbackFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(name: string, value: string) => boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取tagValue回调函数，打印XML标签及标签值。默认为undefined，表示不解析XML标签和标签值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "attributeValueCallbackFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(name: string, value: string) => boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取attributeValue回调函数，打印XML属性及属性值。默认为undefined，表示不解析XML属性和属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tokenValueCallbackFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(eventType: EventType, value: ParseInfo) => boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取tokenValue回调函数，打印XML事件类型及parseInfo对应属性。默认为undefined，表示不解析XML事件类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保传入的XML数据符合标准格式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目前不支持解析指定节点的值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解析xml标签和标签值",
      children: "解析XML标签和标签值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { xml, util } from '@kit.ArkTS'; // 需要使用util模块函数对文本编码\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对XML文本编码后调用XmlPullParser。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以基于ArrayBuffer创建XmlPullParser对象，也可以基于DataView创建XmlPullParser对象（两种创建方式返回结果无区别）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let strXml: string =\n  '<?xml version=\"1.0\" encoding=\"utf-8\"?>' +\n    '<note importance=\"high\" logged=\"true\">' +\n    '<title>Play</title>' +\n    '<lens>Work</lens>' +\n    '</note>';\nlet textEncoder: util.TextEncoder = new util.TextEncoder();\nlet arrBuffer: Uint8Array = textEncoder.encodeInto(strXml); // 对数据进行编码，防止中文字符乱码\n// 方式1：基于ArrayBuffer构造XmlPullParser对象\nlet xmlParser: xml.XmlPullParser = new xml.XmlPullParser(arrBuffer.buffer as object as ArrayBuffer, 'UTF-8');\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 方式2：基于DataView构造XmlPullParser对象\nlet dataView: DataView = new DataView(arrBuffer.buffer as object as ArrayBuffer);\nlet xmlParser: xml.XmlPullParser = new xml.XmlPullParser(dataView, 'UTF-8');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义回调函数，本例直接打印出标签及标签值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function func(name: string, value: string): boolean {\n  if (name == 'note') {\n    console.info(name);\n  }\n  if (value == 'Play' || value == 'Work') {\n    console.info('    ' + value);\n    // ...\n  }\n  if (name == 'title' || name == 'lens') {\n    console.info('  ' + name);\n  }\n  return true; //true:继续解析 false:停止解析\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置解析选项，调用parseXml函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let options: xml.ParseOptions = {supportDoctype:true, ignoreNameSpace:true, tagValueCallbackFunction:func};\nxmlParser.parseXml(options);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输出结果如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "note\n  title\n    Play\n  title\n  lens\n    Work\n  lens\nnote\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解析xml属性和属性值",
      children: "解析XML属性和属性值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { xml, util } from '@kit.ArkTS'; // 使用util模块对文本编码\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对XML文本编码后调用XmlPullParser。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let strXml: string =\n  '<?xml version=\"1.0\" encoding=\"utf-8\"?>' +\n    '<note importance=\"high\" logged=\"true\">' +\n    '    <title>Play</title>' +\n    '    <title>Happy</title>' +\n    '    <lens>Work</lens>' +\n    '</note>';\nlet textEncoder: util.TextEncoder = new util.TextEncoder();\nlet arrBuffer: Uint8Array = textEncoder.encodeInto(strXml); // 对数据进行编码，防止中文字符乱码\nlet xmlParser: xml.XmlPullParser = new xml.XmlPullParser(arrBuffer.buffer as object as ArrayBuffer, 'UTF-8');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义回调函数，示例直接打印出属性及属性值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let str: string = '';\nfunction func(name: string, value: string): boolean {\n  str += name + ' ' + value + ' ';\n  return true; // true:继续解析 false:停止解析\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置解析选项，调用parseXml函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let options: xml.ParseOptions = {supportDoctype:true, ignoreNameSpace:true, attributeValueCallbackFunction:func};\nxmlParser.parseXml(options);\nconsole.info(str); // 打印所有属性及其值\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输出结果如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "importance high logged true // note节点的属性及属性值\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解析xml事件类型和元素信息",
      children: "解析XML事件类型和元素信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { xml, util } from '@kit.ArkTS'; // 使用util模块函数对文本编码\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对XML文本编码后调用XmlPullParser。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let strXml: string =\n  '<?xml version=\"1.0\" encoding=\"utf-8\"?>' +\n    '<note importance=\"high\" logged=\"true\">' +\n    '<title>Play</title>' +\n    '</note>';\nlet textEncoder: util.TextEncoder = new util.TextEncoder();\nlet arrBuffer: Uint8Array = textEncoder.encodeInto(strXml); // 对数据进行编码，防止中文字符乱码\nlet xmlParser: xml.XmlPullParser = new xml.XmlPullParser(arrBuffer.buffer as object as ArrayBuffer, 'UTF-8');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义回调函数，示例直接打印元素事件类型及元素深度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let str: string = '';\nfunction func(name: xml.EventType, value: xml.ParseInfo): boolean {\n  str = name + ' ' + value.getDepth(); // getDepth 获取元素在XML文档中的当前深度\n  console.info(str);\n  // ...\n  return true; // true:继续解析 false:停止解析\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置解析选项，调用parseXml函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let options: xml.ParseOptions = {supportDoctype:true, ignoreNameSpace:true, tokenValueCallbackFunction:func};\nxmlParser.parseXml(options);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输出结果如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "0 0 // 0：<?xml version=\"1.0\" encoding=\"utf-8\"?> 对应事件类型START_DOCUMENT值为0  0：起始深度为0\n2 1 // 2：<note importance=\"high\" logged=\"true\"> 对应事件类型START_TAG值为2  1：深度为1\n2 2 // 2：<title>对应事件类型START_TAG值为2  2：深度为2\n4 2 // 4：Play对应事件类型TEXT值为4  2：深度为2\n3 2 // 3：</title>对应事件类型END_TAG值为3  2：深度为2\n3 1 // 3：</note>对应事件类型END_TAG值为3  1：深度为1（与<note对应>）\n1 0 // 1：对应事件类型END_DOCUMENT值为1  0：深度为0\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以调用所有解析选项为例，提供解析XML标签、属性和事件类型的开发示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { xml, util } from '@kit.ArkTS';\n// ...\nlet strXml: string =\n  '<?xml version=\"1.0\" encoding=\"UTF-8\"?>' +\n    '<book category=\"COOKING\">' +\n    '<title lang=\"en\">Everyday</title>' +\n    '<author>Giana</author>' +\n    '</book>';\nlet textEncoder: util.TextEncoder = new util.TextEncoder();\nlet arrBuffer: Uint8Array = textEncoder.encodeInto(strXml);\nlet xmlParser: xml.XmlPullParser = new xml.XmlPullParser(arrBuffer.buffer as object as ArrayBuffer, 'UTF-8');\nlet str: string = '';\n\nfunction tagFunc(name: string, value: string): boolean {\n  str = name + value;\n  console.info('tag-' + str);\n  return true;\n}\n\nfunction attFunc(name: string, value: string): boolean {\n  str = name + ' ' + value;\n  console.info('attri-' + str);\n  return true;\n}\n\nfunction tokenFunc(name: xml.EventType, value: xml.ParseInfo): boolean {\n  str = name + ' ' + value.getDepth();\n  console.info('token-' + str);\n  // ...\n  return true;\n}\n// ...\n  let options: xml.ParseOptions = {\n    supportDoctype: true,\n    ignoreNameSpace: true,\n    tagValueCallbackFunction: tagFunc,\n    attributeValueCallbackFunction: attFunc,\n    tokenValueCallbackFunction: tokenFunc\n  };\n  xmlParser.parseXml(options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出结果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tag-\ntoken-0 0\ntag-book\ntoken-2 1\nattri-category COOKING\ntag-title\ntoken-2 2\nattri-lang en\ntag-Everyday\ntoken-4 2\ntag-title\ntoken-3 2\ntag-author\ntoken-2 2\ntag-Giana\ntoken-4 2\ntag-author\ntoken-3 2\ntag-book\ntoken-3 1\ntag-\ntoken-1 0\n"
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