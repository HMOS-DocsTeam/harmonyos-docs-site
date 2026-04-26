"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["845742"], {
223691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_utils_xml_generation_parsing_conversion_xml_generation_xml_generation_md_c7a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-utils-xml-generation-parsing-conversion-xml-generation-xml-generation-md-c7a.json
var site_docs_arkts_arkts_utils_xml_generation_parsing_conversion_xml_generation_xml_generation_md_c7a_namespaceObject = JSON.parse('{"id":"arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation/xml-generation","title":"XML生成","description":"XML可以作为数据交换格式，被各种系统和应用程序支持。例如Web服务，可以将结构化数据以XML格式进行传递。","source":"@site/docs/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation/xml-generation.md","sourceDirName":"arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation","slug":"/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation/","permalink":"/harmonyos-docs-site/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"XML生成","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xml-generation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"XML概述","permalink":"/harmonyos-docs-site/arkts/arkts-utils/xml-generation-parsing-conversion/xml-overview/"},"next":{"title":"XML解析","permalink":"/harmonyos-docs-site/arkts/arkts-utils/xml-generation-parsing-conversion/xml-parsing/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation/xml-generation.md


const frontMatter = {
	title: 'XML生成',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xml-generation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'XML生成';

const assets = {

};



const toc = [{
  "value": "注意事项",
  "id": "注意事项",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "xml生成",
        children: "XML生成"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XML可以作为数据交换格式，被各种系统和应用程序支持。例如Web服务，可以将结构化数据以XML格式进行传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XML还可以作为消息传递格式，用于分布式系统中不同节点的通信。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XML标签必须成对出现，生成开始标签就要生成结束标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XML标签对大小写敏感，开始标签与结束标签大小写要一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XML模块提供XmlSerializer及XmlDynamicSerializer类来生成XML数据，使用XmlSerializer需传入固定长度的ArrayBuffer或DataView对象作为输出缓冲区，用于存储序列化后的XML数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XmlDynamicSerializer类动态扩容，程序根据实际生成的数据大小自动创建ArrayBuffer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用不同的方法写入不同的内容，如startElement(name: string)写入元素开始标记，setText(text: string)写入标签值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["XML模块的API接口可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-xml/js-apis-xml",
        children: "@ohos.xml"
      }), "的详细描述，按需求调用相应的函数可以生成一份完整的XML数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用XmlSerializer生成XML示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { xml, util } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建缓冲区，构造XmlSerializer对象。可以基于ArrayBuffer构造XmlSerializer对象，也可以基于DataView构造XmlSerializer对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式1：基于ArrayBuffer构造XmlSerializer对象"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let arrayBuffer: ArrayBuffer = new ArrayBuffer(2048); // 创建一个2048字节的缓冲区\nlet serializer: xml.XmlSerializer = new xml.XmlSerializer(arrayBuffer); // 基于ArrayBuffer构造XmlSerializer对象\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式2：基于DataView构造XmlSerializer对象"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let arrayBuffer: ArrayBuffer = new ArrayBuffer(2048); // 创建一个2048字节的缓冲区\nlet dataView: DataView = new DataView(arrayBuffer); // 创建一个DataView\nlet serializer: xml.XmlSerializer = new xml.XmlSerializer(dataView); // 基于DataView构造XmlSerializer对象\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用XML元素生成函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "serializer.setDeclaration(); // 写入XML的声明\nserializer.startElement('bookstore'); // 写入元素开始标记\nserializer.startElement('book'); // 嵌套元素开始标记\nserializer.setAttributes('category', 'COOKING'); // 写入属性及其属性值\nserializer.startElement('title');\nserializer.setAttributes('lang', 'en');\nserializer.setText('Everyday'); // 写入标签值\nserializer.endElement(); // 写入结束标记\nserializer.startElement('author');\nserializer.setText('Giana');\nserializer.endElement();\nserializer.startElement('year');\nserializer.setText('2005');\nserializer.endElement();\nserializer.endElement();\nserializer.endElement();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Uint8Array操作ArrayBuffer，并调用TextDecoder对Uint8Array解码后输出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uint8Array: Uint8Array = new Uint8Array(arrayBuffer); // 使用Uint8Array读取arrayBuffer的数据\nlet textDecoder: util.TextDecoder = util.TextDecoder.create(); // 调用util模块的TextDecoder类\nlet result: string = textDecoder.decodeToString(uint8Array); // 对uint8Array解码\nconsole.info(result);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输出结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<?xml version=\"1.0\" encoding=\"utf-8\"?><bookstore>\n  <book category=\"COOKING\">\n    <title lang=\"en\">Everyday</title>\n    <author>Giana</author>\n    <year>2005</year>\n  </book>\n</bookstore>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用XmlDynamicSerializer生成XML示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { xml, util } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用XML元素生成函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let dySerializer = new xml.XmlDynamicSerializer('utf-8');\ndySerializer.setDeclaration(); // 写入XML的声明\ndySerializer.startElement('bookstore'); // 写入元素开始标记\ndySerializer.startElement('book'); // 嵌套元素开始标记\ndySerializer.setAttributes('category', 'COOKING'); // 写入属性及其属性值\ndySerializer.startElement('title');\ndySerializer.setAttributes('lang', 'en');\ndySerializer.setText('Everyday'); // 写入标签值\ndySerializer.endElement(); // 写入结束标记\ndySerializer.startElement('author');\ndySerializer.setText('Giana');\ndySerializer.endElement();\ndySerializer.startElement('year');\ndySerializer.setText('2005');\ndySerializer.endElement();\ndySerializer.endElement();\ndySerializer.endElement();\nlet arrayBuffer = dySerializer.getOutput();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Uint8Array操作ArrayBuffer，并调用TextDecoder对Uint8Array解码后输出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uint8Array: Uint8Array = new Uint8Array(arrayBuffer);\nlet result: string = util.TextDecoder.create().decodeToString(uint8Array);\nconsole.info(result);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输出结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<bookstore>\n  <book category=\"COOKING\">\n    <title lang=\"en\">Everyday</title>\n    <author>Giana</author>\n    <year>2005</year>\n  </book>\n</bookstore>\n"
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