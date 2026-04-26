"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["774911"], {
876995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_uniformtypedescriptor_js_apis_data_uniformtypedescriptor_md_919_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-arkts-js-apis-data-uniformtypedescriptor-js-apis-data-uniformtypedescriptor-md-919.json
var site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_uniformtypedescriptor_js_apis_data_uniformtypedescriptor_md_919_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor","title":"@ohos.data.uniformTypeDescriptor (标准化数据定义与描述)","description":"本模块对标准化数据类型进行了抽象定义与描述。","source":"@site/docs-ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor.md","sourceDirName":"arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor","slug":"/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"@ohos.data.uniformTypeDescriptor (标准化数据定义与描述)","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-uniformtypedescriptor","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-data-uniformtypedescriptor"},"sidebar":"ref","previous":{"title":"@ohos.data.uniformDataStruct (标准化数据结构)","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct"},"next":{"title":"@ohos.data.ValuesBucket (数据集)","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-valuesbucket/js-apis-data-valuesbucket"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor.md


const frontMatter = {
	title: '@ohos.data.uniformTypeDescriptor (标准化数据定义与描述)',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-uniformtypedescriptor',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-data-uniformtypedescriptor'
};
const contentTitle = '@ohos.data.uniformTypeDescriptor (标准化数据定义与描述)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "UniformDataType",
  "id": "uniformdatatype",
  "level": 2
}, {
  "value": "TypeDescriptor11+",
  "id": "typedescriptor11",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "belongsTo11+",
  "id": "belongsto11",
  "level": 3
}, {
  "value": "isLowerLevelType11+",
  "id": "islowerleveltype11",
  "level": 3
}, {
  "value": "isHigherLevelType11+",
  "id": "ishigherleveltype11",
  "level": 3
}, {
  "value": "equals11+",
  "id": "equals11",
  "level": 3
}, {
  "value": "uniformTypeDescriptor.getTypeDescriptor11+",
  "id": "uniformtypedescriptorgettypedescriptor11",
  "level": 2
}, {
  "value": "uniformTypeDescriptor.getUniformDataTypeByFilenameExtension11+",
  "id": "uniformtypedescriptorgetuniformdatatypebyfilenameextension11",
  "level": 2
}, {
  "value": "uniformTypeDescriptor.getUniformDataTypeByMIMEType11+",
  "id": "uniformtypedescriptorgetuniformdatatypebymimetype11",
  "level": 2
}, {
  "value": "uniformTypeDescriptor.getUniformDataTypesByFilenameExtension13+",
  "id": "uniformtypedescriptorgetuniformdatatypesbyfilenameextension13",
  "level": 2
}, {
  "value": "uniformTypeDescriptor.getUniformDataTypesByMIMEType13+",
  "id": "uniformtypedescriptorgetuniformdatatypesbymimetype13",
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
        id: "ohosdatauniformtypedescriptor-标准化数据定义与描述",
        children: "@ohos.data.uniformTypeDescriptor (标准化数据定义与描述)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块对标准化数据类型进行了抽象定义与描述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(238946)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uniformdatatype",
      children: "UniformDataType"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["标准化数据类型之间存在归属关系，例如JPEG图片类型归属于IMAGE类型。更多预置数据类型参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/uniform-data-definition/uniform-data-type-list",
        children: "UTD预置列表"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表以枚举形式，列举了常用的标准化数据类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTITY11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.entity'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有表示物理存储类型的基类型，无归属类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OBJECT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.object'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有表示逻辑内容类型的基类型，无归属类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMPOSITE_OBJECT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.composite-object'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有组合内容类型（例如PDF文件类型混合了文本和图片类数据）的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.text'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有文本的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PLAIN_TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.plain-text'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["未指定编码的文本类型，没有标识符，归属类型为TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.html'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTML文本类型，归属类型为TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HYPERLINK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.hyperlink'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超链接类型，归属类型为TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XML11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.xml'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML文本类型，归属类型为TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XHTML12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.xhtml'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XHTML文本类型，归属类型为XML。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.rss'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSS文本类型，归属类型为XML。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMIL12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.real.smil'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步多媒体集成语言类型，归属类型为XML文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_CODE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.source-code'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有源代码的基类型，归属类型为TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.script'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有脚本语言源代码的基类型，归属类型为SOURCE_CODE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHELL_SCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.shell-script'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shell脚本类型，归属类型为SCRIPT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSH_SCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.csh-script'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-shell脚本类型，归属类型为SHELL_SCRIPT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERL_SCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.perl-script'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perl脚本类型，归属类型为SHELL_SCRIPT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHP_SCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.php-script'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP脚本类型，归属类型为SHELL_SCRIPT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PYTHON_SCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.python-script'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python脚本类型，归属类型为SHELL_SCRIPT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RUBY_SCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.ruby-script'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ruby脚本类型，归属类型为SHELL_SCRIPT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TYPE_SCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.type-script'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript源代码类型，归属类型为SOURCE_CODE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JAVA_SCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.java-script'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript源代码类型，归属类型为SOURCE_CODE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.css'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSS样式表类型，归属类型为SCRIPT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C_HEADER11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.c-header'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C头文件类型，归属类型为SOURCE_CODE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C_SOURCE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.c-source'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C源代码类型，归属类型为SOURCE_CODE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C_PLUS_PLUS_HEADER11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.c-plus-plus-header'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++头文件类型，归属类型为SOURCE_CODE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C_PLUS_PLUS_SOURCE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.c-plus-plus-source'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++源代码类型，归属类型为SOURCE_CODE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JAVA_SOURCE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.java-source'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java源代码类型，归属类型为SOURCE_CODE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEX12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.tex'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEX源代码类型，归属类型为SOURCE_CODE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MARKDOWN12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.markdown'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标记语言文本类型，归属类型为TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASC_TEXT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.asc-text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASCII文本类型，归属类型为TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RICH_TEXT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.rich-text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本类型，归属类型为TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELIMITED_VALUES_TEXT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.delimited-values-text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有分隔值文本的基类型，归属类型为TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMMA_SEPARATED_VALUES_TEXT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.comma-separated-values-text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSV文本类型，归属类型为DELIMITED_VALUES_TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TAB_SEPARATED_VALUES_TEXT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.tab-separated-values-text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TSV文本类型，归属类型为DELIMITED_VALUES_TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EBOOK11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.ebook'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有电子书文件格式的基类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EPUB11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.epub'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子出版物（EPUB）文件格式类型，归属类型为EBOOK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AZW11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.amazon.azw'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AZW电子书文件格式类型，归属类型为EBOOK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AZW311+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.amazon.azw3'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AZW3电子书文件格式类型，归属类型为EBOOK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KFX11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.amazon.kfx'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KFX电子书文件格式类型，归属类型为EBOOK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOBI11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.amazon.mobi'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOBI电子书文件格式类型，归属类型为EBOOK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.media'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有媒体的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.image'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有图片的基类型，归属类型为MEDIA。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.jpeg'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG图片类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PNG11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.png'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PNG图片类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAW_IMAGE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.raw-image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有原始图像格式的基类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIFF11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.tiff'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIFF图片类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BMP11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.bmp'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS位图图像类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ICO11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.ico'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS图标图像类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHOTOSHOP_IMAGE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.adobe.photoshop-image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe Photoshop图片类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI_IMAGE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.adobe.illustrator.ai-image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe Illustrator图片类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAX12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.fax'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传真图像的基本类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JFX_FAX12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.j2.jfx-fax'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "J2 jConnect传真文件类型，归属类型为FAX。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFX_FAX12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.js.efx-fax'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子传真文件类型，归属类型为FAX。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XBITMAP_IMAGE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.xbitmap-image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X Window系统（X11）中使用的位图图像格式，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GIF12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.gif'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIF图像类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TGA_IMAGE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.truevision.tga-image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标签图形（TaggedGraphics）图像类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SGI_IMAGE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.sgi.sgi-image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硅图（Silicon Graphics）图像类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENEXR_IMAGE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.ilm.openexr-image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开放标准的高动态范围图像格式类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLASHPIX_IMAGE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.kodak.flashpix.image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FlashPix 图像文件类型，归属类型为IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WORD_DOC11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.word.doc'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Word数据类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXCEL11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.excel.xls'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Excel数据类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.powerpoint.ppt'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft PowerPoint演示文稿类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WORD_DOT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.word.dot'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Word模板类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POWERPOINT_PPS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.powerpoint.pps'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft PowerPoint演示文稿幻灯片放映类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POWERPOINT_POT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.powerpoint.pot'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft PowerPoint演示文稿模板类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXCEL_XLT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.excel.xlt'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Excel模板类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VISIO_VSD12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.visio.vsd'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Visio数据类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PDF11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.adobe.pdf'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDF数据类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POSTSCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.adobe.postscript'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostScript数据类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENCAPSULATED_POSTSCRIPT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.adobe.encapsulated-postscript'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulated PostScript类型，归属类型为POSTSCRIPT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.video'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有视频的基类型，归属类型为MEDIA。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVI11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.avi'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVI视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.mpeg'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG-1或MPEG-2视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG411+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.mpeg-4'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG-4视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_3GPP11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.3gpp'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3GPP视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_3GPP211+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.3gpp2'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3GPP2视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.ts'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG-TS类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEGURL_VIDEO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.mpegurl-video'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG视频播放列表文件类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS_MEDIA_WM11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.windows-media-wm'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WM视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS_MEDIA_WMV11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.windows-media-wmv'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WMV视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS_MEDIA_WMP11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.windows-media-wmp'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WMP视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS_MEDIA_WVX11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.windows-media-wvx'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WVX视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS_MEDIA_WMX11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.windows-media-wmx'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WMX视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REALMEDIA12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.real.realmedia'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流媒体视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATROSKA_VIDEO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.matroska.mkv'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MKV视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLASH12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.adobe.flash'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLASH视频类型，归属类型为VIDEO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.audio'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有音频的基类型，归属类型为MEDIA。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAC11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.aac'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AIFF11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.aiff'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIFF音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALAC11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.alac'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALAC音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAC11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.flac'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLAC音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MP311+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.mp3'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MP3音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OGG11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.ogg'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OGG音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCM11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.pcm'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCM音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS_MEDIA_WMA11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.windows-media-wma'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WMA音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAVEFORM_AUDIO11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.waveform-audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS波形音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS_MEDIA_WAX11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.windows-media-wax'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOWS WAX音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AU_AUDIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.au-audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Au数据格式，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AIFC_AUDIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.aifc-audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频交换数据类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEGURL_AUDIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.mpegurl-audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG音频播放列表文件类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG_4_AUDIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.mpeg-4-audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG-4音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MP212+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.mp2'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MP2音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG_AUDIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.mpeg-audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ULAW_AUDIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.ulaw-audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ULAW音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SD2_AUDIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.digidesign.sd2-audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单声道/立体声音频类型（Digidesign Sound Designer II），归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REALAUDIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.real.realaudio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RealMedia音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATROSKA_AUDIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.matroska.mka'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MKA音频类型，归属类型为AUDIO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.file'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有文件的基类型，归属类型为ENTITY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DIRECTORY11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.directory'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有目录的基类型，归属类型为ENTITY。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOLDER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.folder'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有文件夹的基类型，归属类型为DIRECTORY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYMLINK11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.symlink'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有符号链接的基类型，归属类型为ENTITY。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARCHIVE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有文件和目录存档文件的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BZ2_ARCHIVE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.bz2-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BZ2存档文件类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPG12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.opg'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPG存档文件类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TAZ_ARCHIVE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.taz-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAR压缩文件类型，归属类型为TAR_ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEB_ARCHIVE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.web-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MHTML网页归档文件类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISK_IMAGE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.disk-image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有可作为卷挂载项的文件类型的基类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ISO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.iso'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光盘映像文件类型，归属类型为DISK_IMAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TAR_ARCHIVE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.tar-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAR存档文件类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZIP_ARCHIVE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.zip-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZIP存档文件类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JAVA_ARCHIVE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.sun.java-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAVA存档文件类型，归属类型为ARCHIVE和EXECUTABLE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GNU_TAR_ARCHIVE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.gnu.gnu-tar-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GNU存档文件类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GNU_ZIP_ARCHIVE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.gnu.gnu-zip-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GZIP存档文件类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GNU_ZIP_TAR_ARCHIVE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.gnu.gnu-zip-tar-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GZIP TAR存档文件类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENXML12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.openxml'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML基类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WORDPROCESSINGML_DOCUMENT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.wordprocessingml.document'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML文档类型，归属类型为OPENXML和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPREADSHEETML_SHEET12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.spreadsheetml.sheet'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML电子表格类型，归属类型为OPENXML和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRESENTATIONML_PRESENTATION12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.presentationml.presentation'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML演示文稿类型，归属类型为OPENXML和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DRAWINGML_VISIO12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.drawingml.visio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML绘图文件类型，归属类型为OPENXML和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DRAWINGML_TEMPLATE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.drawingml.template'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML绘图模板类型，归属类型为OPENXML和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WORDPROCESSINGML_TEMPLATE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.wordprocessingml.template'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML文档模板类型，归属类型为OPENXML和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRESENTATIONML_TEMPLATE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.presentationml.template'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML演示文稿模板类型，归属类型为OPENXML和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRESENTATIONML_SLIDESHOW12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.presentationml.slideshow'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML演示文稿幻灯片放映类型，归属类型为OPENXML和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPREADSHEETML_TEMPLATE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.openxmlformats.spreadsheetml.template'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源XML电子表格模板类型，归属类型为OPENXML和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENDOCUMENT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.oasis.opendocument'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office应用程序的开源文档类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENDOCUMENT_TEXT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.oasis.opendocument.text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源文档类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENDOCUMENT_SPREADSHEET12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.oasis.opendocument.spreadsheet'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源文档电子表格类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENDOCUMENT_PRESENTATION12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.oasis.opendocument.presentation'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源文档演示类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENDOCUMENT_GRAPHICS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.oasis.opendocument.graphics'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源文档图形类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENDOCUMENT_FORMULA12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.oasis.opendocument.formula'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源文档公式集类型，归属类型为OPENDOCUMENT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STUFFIT_ARCHIVE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.allume.stuffit-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stuffit压缩格式类型（Stuffit archive），归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAR_ARCHIVE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.rarlab.rar-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WinRAR压缩格式类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEVEN_ZIP_ARCHIVE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'org.7-zip.7-zip-archive'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-zip压缩格式类型，归属类型为ARCHIVE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CALENDAR11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.calendar'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有日程类数据的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VCS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.vcs'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VCalendar日历数据类型，归属类型为CALENDAR和TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ICS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.ics'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICalendar日历数据类型，归属类型为CALENDAR和TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTACT11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.contact'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有联系人类数据的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATABASE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.database'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有数据库文件的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MESSAGE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.message'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有消息类数据的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXECUTABLE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.executable'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有可执行文件的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PORTABLE_EXECUTABLE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.microsoft.portable-executable'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Windows应用程序类型，归属类型为EXECUTABLE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUN_JAVA_CLASS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.sun.java-class'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java类文件类型，归属类型为EXECUTABLE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VCARD11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.vcard'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有电子名片类数据的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAVIGATION11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.navigation'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有导航类数据的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.location'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航定位类型，归属类型为NAVIGATION。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FONT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.font'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有字体数据类型的基础类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRUETYPE_FONT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.truetype-font'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TrueType字体类型，归属类型为FONT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRUETYPE_COLLECTION_FONT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.truetype-collection-font'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TrueType collection字体类型，归属类型为FONT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENTYPE_FONT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.opentype-font'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenType 字体类型，归属类型为FONT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POSTSCRIPT_FONT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.adobe.postscript-font'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostScript 字体类型，归属类型为FONT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POSTSCRIPT_PFB_FONT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.adobe.postscript-pfb-font'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostScript Font Binary字体类型，归属类型为FONT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POSTSCRIPT_PFA_FONT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'com.adobe.postscript-pfa-font'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe Type 1 字体类型，归属类型为FONT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_FORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.form'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的卡片类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_APP_ITEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.app-item'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的桌面图标类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_PIXEL_MAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.pixel-map'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的像素图类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_ATOMIC_SERVICE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.atomic-service'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统定义的元服务类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_PACKAGE11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.package'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统定义的包（即目录的打包文件），归属类型为DIRECTORY。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_HAP11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.hap'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统定义的能力包，归属类型为OPENHARMONY_PACKAGE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_HDOC12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.hdoc'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统定义的备忘录数据类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_HINOTE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.hinote'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统定义的笔记数据类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_STYLED_STRING12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.styled-string'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统定义的样式字符串类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENHARMONY_WANT12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.want'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统定义的Want类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFD12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.ofd'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开放版式文档类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAD12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.cad'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有计算机辅助设计类型的基类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OCTET_STREAM12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.octet-stream'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任意二进制数据类型，归属类型为OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_URI15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.file-uri'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件地址类型，归属类型为TEXT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTENT_FORM15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.content-form'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容卡片类型，归属类型为OBJECT。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typedescriptor11",
      children: "TypeDescriptor11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准化数据类型的描述类，它包含了一些属性和方法用于描述标准化数据类型自身以及和其他标准化数据类型之间的归属与层级关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typeId11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标准化数据类型的ID（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#uniformdatatype",
              children: "UTD列表"
            }), "中对应的枚举值），也可以是自定义UTD。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "belongingToTypes11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准化数据类型所归属的类型typeId列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准化数据类型的简要说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "referenceURL11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准化数据类型的参考链接URL，用于描述类型的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconFile11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准化数据类型的默认图标文件路径，可能为空字符串（即没有默认图标），应用可以自行决定是否使用该默认图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filenameExtensions12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准化数据类型所关联的文件名后缀列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mimeTypes12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准化数据类型所关联的多用途互联网邮件扩展类型列表。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "belongsto11",
      children: "belongsTo11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "belongsTo(type: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断当前标准化数据类型是否归属于指定的标准化数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所指定的标准化数据类型（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#uniformdatatype",
              children: "UniformDataType"
            }), "中对应的枚举值）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回true表示当前的标准化数据类型归属于所指定的标准化数据类型，包括所指定类型与当前类型相同的情况；返回false则表示无归属关系。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry{\n    let typeObj : uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.type-script');\n    let ret = typeObj.belongsTo('general.source-code');\n    if(ret) {\n        console.info('type general.type-script belongs to type general.source-code');\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`belongsTo throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "islowerleveltype11",
      children: "isLowerLevelType11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isLowerLevelType(type: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断当前标准化数据类型是否是指定标准化数据类型的低层级类型。例如TYPE_SCRIPT为SOURCE_CODE的低层级类型，TYPE_SCRIPT和SOURCE_CODE为TEXT的低层级类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所指定的标准化数据类型（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#uniformdatatype",
              children: "UniformDataType"
            }), "中对应的枚举值）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回true表示当前的标准化数据类型是所指定标准化数据类型的低层级类型，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry{\n    let typeObj : uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.type-script');\n    let ret = typeObj.isLowerLevelType('general.source-code');\n    if(ret) {\n        console.info('type general.type-script is lower level type of type general.source-code');\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`isLowerLevelType throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ishigherleveltype11",
      children: "isHigherLevelType11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isHigherLevelType(type: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断当前标准化数据类型是否是指定标准化数据类型的高层级类型。例如SOURCE_CODE为TYPE_SCRIPT的高层级类型，TEXT为SOURCE_CODE和TYPE_SCRIPT的高层级类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所指定的标准化数据类型（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#uniformdatatype",
              children: "UniformDataType"
            }), "中对应的枚举值）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回true表示当前的标准化数据类型是所指定标准化数据类型的高层级类型，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry{\n    let typeObj : uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.source-code');\n    let ret = typeObj.isHigherLevelType('general.type-script');\n    if(ret) {\n        console.info('type general.source-code is higher level type of type general.type-script');\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`isHigherLevelType throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "equals11",
      children: "equals11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "equals(typeDescriptor: TypeDescriptor): boolean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["判断指定的标准化数据类型描述类对象的类型ID和当前标准化数据类型描述类对象的类型ID是否相同，即", (0,jsx_runtime.jsx)(_components.a, {
        href: "#typedescriptor11",
        children: "TypeDescriptor"
      }), "对象的typeId。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typeDescriptor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedescriptor11",
              children: "TypeDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待比较的标准化数据类型描述类对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回true表示所比较的标准化数据类型相同；返回false则表示不同。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry{\n    let typeA : uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.type-script');\n    let typeB : uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.python-script');\n    if(!typeA.equals(typeB)) {\n      console.info('typeA is not equal to typeB');\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uniformtypedescriptorgettypedescriptor11",
      children: "uniformTypeDescriptor.getTypeDescriptor11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getTypeDescriptor(typeId: string): TypeDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按给定的标准化数据类型ID查询并返回对应的标准化数据类型描述类对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typeId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
              children: "标准化数据类型ID"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedescriptor11",
              children: "TypeDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回标准化数据类型描述类对象，如果要查询的标准化数据类型不存在则返回null。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n    let typeObj : uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('com.adobe.photoshop-image');\n    if (typeObj) {\n        let typeId = typeObj.typeId;\n        let belongingToTypes = typeObj.belongingToTypes;\n        let description = typeObj.description;\n        let referenceURL = typeObj.referenceURL;\n        let iconFile = typeObj.iconFile;\n        let filenameExtensions = typeObj.filenameExtensions;\n        let mimeTypes = typeObj.mimeTypes;\n        console.info(`typeId: ${typeId}, belongingToTypes: ${belongingToTypes}, description: ${description}, referenceURL: ${referenceURL}, iconFile: ${iconFile}, filenameExtensions: ${filenameExtensions}, mimeTypes: ${mimeTypes}`);\n    } else {\n        console.info('type com.adobe.photoshop-image does not exist');\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`getTypeDescriptor throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uniformtypedescriptorgetuniformdatatypebyfilenameextension11",
      children: "uniformTypeDescriptor.getUniformDataTypeByFilenameExtension11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUniformDataTypeByFilenameExtension(filenameExtension: string, belongsTo?: string): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的文件后缀名和所归属的标准化数据类型查询标准化数据类型ID，若有多个符合条件的标准化数据类型ID，则返回第一个。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "filenameExtension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件后缀名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "belongsTo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要查询的标准化数据类型所归属类型ID，无默认值，若不传入此参数则只按照文件后缀名称查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
              children: "标准化数据类型ID"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回与给定文件后缀名以及归属类型ID（如果设置了belongsTo参数）匹配的标准化数据类型ID，如果要查询的标准化数据类型不存在则返回根据入参按指定规则生成的动态类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n    let typeId = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension('.ts', 'general.source-code');\n    if(typeId) {\n        console.info('typeId is general.type-script');\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`getUniformDataTypeByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n\n// 根据“.myts”，“general.plain-text”查不到预置数据类型则按返回根据入参信息生成的动态类型。\ntry {\n    let typeId = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension('.myts', 'general.plain-text');\n    if(typeId) {\n        console.info('typeId is flex.************');\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`getUniformDataTypeByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uniformtypedescriptorgetuniformdatatypebymimetype11",
      children: "uniformTypeDescriptor.getUniformDataTypeByMIMEType11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUniformDataTypeByMIMEType(mimeType: string, belongsTo?: string): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的MIME类型和所归属的标准化数据类型查询标准化数据类型ID，若有多个符合条件的标准化数据类型ID，则返回第一个。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "mimeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIME类型名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "belongsTo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要查询的标准化数据类型所归属类型ID。无默认值，若不传入此参数则只按照MIME类型名称查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
              children: "标准化数据类型ID"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回与MIME类型名称以及归属类型ID（如果设置了belongsTo参数）匹配的标准化数据类型ID，如果要查询的标准化数据类型不存在则返回根据入参按指定规则生成的动态类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n    let typeId = uniformTypeDescriptor.getUniformDataTypeByMIMEType('image/jpeg', 'general.image');\n    if(typeId) {\n        console.info('typeId is general.jpeg');\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`getUniformDataTypeByMIMEType throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n\n// 根据“image/myimage”, “general.image”查不到预置数据类型则按返回根据入参信息生成的动态类型。\ntry {\n    let typeId = uniformTypeDescriptor.getUniformDataTypeByMIMEType('image/myimage', 'general.image');\n    if(typeId) {\n        console.info('typeId is flex.************');\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`getUniformDataTypeByMIMEType throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uniformtypedescriptorgetuniformdatatypesbyfilenameextension13",
      children: "uniformTypeDescriptor.getUniformDataTypesByFilenameExtension13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUniformDataTypesByFilenameExtension(filenameExtension: string, belongsTo?: string): Array<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的文件后缀名和所归属的标准化数据类型查询标准化数据类型ID列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "filenameExtension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件后缀名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "belongsTo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要查询的标准化数据类型所归属类型ID，无默认值，若不传入此参数则只按照文件后缀名称查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
              children: "标准化数据类型ID"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回与给定文件后缀名以及归属类型ID（如果设置了belongsTo参数）匹配的标准化数据类型ID列表，如果要查询的标准化数据类型不存在则返回根据入参按指定规则生成的动态类型列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n    let typeIds = uniformTypeDescriptor.getUniformDataTypesByFilenameExtension('.ts', 'general.source-code');\n    for (let typeId of typeIds) {\n        console.info(`typeId is ${typeId}`);\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`getUniformDataTypesByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n\n// 根据“.myts”，“general.plain-text”查不到预置数据类型则按返回根据入参信息生成的动态类型列表。\ntry {\n    let flexTypeIds = uniformTypeDescriptor.getUniformDataTypesByFilenameExtension('.myts', 'general.plain-text');\n    for (let flexTypeId of flexTypeIds) {\n        console.info(`typeId is flex type, flex typeId is ${flexTypeId}`);\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`getUniformDataTypesByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uniformtypedescriptorgetuniformdatatypesbymimetype13",
      children: "uniformTypeDescriptor.getUniformDataTypesByMIMEType13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUniformDataTypesByMIMEType(mimeType: string, belongsTo?: string): Array<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的MIME类型和所归属的标准化数据类型查询标准化数据类型ID列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "mimeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIME类型名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "belongsTo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要查询的标准化数据类型所归属类型ID。无默认值，若不传入此参数则只按照MIME类型名称查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
              children: "标准化数据类型ID"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回与MIME类型名称以及归属类型ID（如果设置了belongsTo参数）匹配的标准化数据类型ID列表，如果要查询的标准化数据类型不存在则返回根据入参按指定规则生成的动态类型列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n    let typeIds = uniformTypeDescriptor.getUniformDataTypesByMIMEType('text/plain', 'general.text');\n    for (let typeId of typeIds) {\n        console.info(`typeId is ${typeId}`);\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`getUniformDataTypesByMIMEType throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n\n// 根据“image/myimage”, “general.image”查不到预置数据类型则按返回根据入参信息生成的动态类型列表。\ntry {\n    let flexTypeIds = uniformTypeDescriptor.getUniformDataTypesByMIMEType('image/myimage', 'general.image');\n    for (let flexTypeId of flexTypeIds) {\n        console.info(`typeId is flex type, flex typeId is ${flexTypeId}`);\n    }\n} catch(e) {\n    let error: BusinessError = e as BusinessError;\n    console.error(`getUniformDataTypesByMIMEType throws an exception. code is ${error.code}, message is ${error.message} `);\n}\n"
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
238946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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