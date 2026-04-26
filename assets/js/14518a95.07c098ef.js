"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["149914"], {
305181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_develop_agc_harmonyos_clouddev_clouddb_agc_harmonyos_clouddev_objecttype_agc_harmonyos_clouddev_objecttype_md_145_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-agc-harmonyos-clouddevguide-agc-harmonyos-clouddev-devprocess-agc-harmonyos-clouddev-develop-agc-harmonyos-clouddev-clouddb-agc-harmonyos-clouddev-objecttype-agc-harmonyos-clouddev-objecttype-md-145.json
var site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_develop_agc_harmonyos_clouddev_clouddb_agc_harmonyos_clouddev_objecttype_agc_harmonyos_clouddev_objecttype_md_145_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-objecttype/agc-harmonyos-clouddev-objecttype","title":"创建对象类型","description":"对象类型（ObjectType）用于定义存储对象的集合，不同的对象类型对应的不同数据结构。每创建一个对象类型，云数据库会在每个存储区实例化一个与之结构相对应的对象类型，用于存储对应的数据。","source":"@site/docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-objecttype/agc-harmonyos-clouddev-objecttype.md","sourceDirName":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-objecttype","slug":"/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-objecttype/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-objecttype/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"创建对象类型","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-objecttype","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"开发流程","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-dbprocess/"},"next":{"title":"添加数据条目","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-dataentry/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-objecttype/agc-harmonyos-clouddev-objecttype.md


const frontMatter = {
	title: '创建对象类型',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-objecttype',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '创建对象类型';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "创建对象类型",
        children: "创建对象类型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象类型（ObjectType）用于定义存储对象的集合，不同的对象类型对应的不同数据结构。每创建一个对象类型，云数据库会在每个存储区实例化一个与之结构相对应的对象类型，用于存储对应的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建对象类型的操作如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右击“clouddb/objecttype”目录，选择“New > Cloud DB Object Type”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(814577)/* ["default"] */.A) + "",
            width: "696",
            height: "413"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入对象类型名称（下文以“objecttype1”为例）后，点击“OK”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(89068)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对象类型名称必须符合如下规范："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "只能包含字母（A-Z或a-z）、数字（0-9）和下划线（_），并且至少包含字母类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "必须以字母开头，以字母或者数字结尾，不允许以“sqlite_”开头，不允许以下划线（_）结尾。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不允许使用如下系统保留名称： naturalbase_metadata、objecttypeinfohelper、t_data_upgrade_info、t_index_schema、t_nstore_config、t_schema_negotiate_info、t_metadata_schema、t_nstore_permission、t_system_config。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(659281)/* ["default"] */.A) + "",
            width: "350",
            height: "130"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "“clouddb/objecttype”目录下生成并打开新建的对象类型JSON文件“objecttype1.json”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(415663)/* ["default"] */.A) + "",
            width: "1076",
            height: "682"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“fields”中为该对象类型配置字段信息。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必选(M)/可选(O)"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "fieldName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字段名称。  输入要求具体如下：  - 字段的名称长度必须大于或等于1个字符，小于或等于30个字符，只能包含以下3种类型，并且至少包含“字母”类型：   - 字母（A-Z或a-z）   - 数字（0-9）   - 特殊字符：_ - 字段名称必须以字母开头，以字母或者数字结尾。 - 字段名称中不区分字母的大小写。 - 修改对象类型时，支持删除字段。 - 字段名称不允许使用系统保留字段名称： naturalbase_version、naturalbase_deleted、naturalbase_operationtype、naturalbase_creator、naturalbase_accesstime、naturalbase_operationtime、naturalbase_syncstatus、naturalbase_changedfieldsbitmap、naturalbase_lastmodifier、cmin、cmax、xmin、xmax、ctid、oid、tableoid、xc_node_id、tablebucketid、rowid。 说明：  当前Cloud Foundation Kit暂不支持自增类型字段IntAutoIncrement或LongAutoIncrement。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "fieldType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字段的数据类型。  当前支持的数据类型：String、Boolean、Byte、Short、Integer、Long、Float、Double、ByteArray、Text、Date。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "belongPrimaryKey"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置该字段是否为对象类型的主键，默认值为false。  - 至少设置一个字段为主键。 - 支持设置复合主键，由多个字段组合成为主键，一个复合主键包含的字段小于等于5个，复合主键字段顺序与字段的顺序一致。 - 数据类型为ByteArray、Text、Date、Double、Float和Boolean的字段不支持设置为主键。 - 主键的值不允许更改。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "notNull"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置字段值是否为非空，默认值为false。  - 数据类型为ByteArray和Date的字段不支持设置为非空。 - 主键默认非空，且不允许更改。 - 设置为非空的字段不支持加密和敏感。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "isNeedEncrypt"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置字段是否需要加密，开启全程加密数据管理功能，默认值为false。  选择加密后，该字段对应的数据会加密存储在存储区中。  - 主键字段不支持加密。 - 加密的字段不支持设置为非空。 - 加密的字段不支持设置为敏感字段。 - 一个对象类型中包含的加密字段和敏感字段的总数需小于或等于5个。 - 字段设置为加密后，不支持导出该字段的数据值。 - 数据类型为ByteArray、Text的字段不支持加密。 - 对象类型创建成功后，不支持修改加密属性。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "isSensitive"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置字段是否为敏感字段，默认值为false。  选择敏感后，该字段对应的数据会加密存储在存储区中。  - 敏感字段不支持设置为主键。 - 敏感字段不支持设置为非空。 - 敏感字段不支持设置为加密。 - 敏感字段不支持设置为默认值。 - 对象类型创建成功后，不支持修改敏感属性。 - 仅支持数据类型为Byte、Short、Integer、Long、Float、Double、String和Date的字段设置为敏感字段。 - 敏感字段不支持设置为索引。 - 一个对象类型中包含的加密字段和敏感字段的总数需小于或等于5个。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "defaultValue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字段为非空时，必须设置默认值。  - 主键不支持设置默认值。 - 加密字段和敏感字段不支持设置默认值。 - 数据类型为ByteArray、Date不支持为其设置默认值。 - 数据类型为Text的字段设置默认值时，默认值的长度小于或等于200个字符。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，我们可为“objecttype1”对象类型配置如下字段。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "fieldName"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "fieldType"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "belongPrimaryKey"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "notNull"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "isNeedEncrypt"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "defaultValue"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "author"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "shadowFlag"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "true"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "bookName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Integer"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "price"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Double"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "publishTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Date"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(376129)/* ["default"] */.A) + "",
            width: "863",
            height: "518"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“indexes”中为该对象类型配置索引、索引包含的字段、以及索引包含的字段的排序方式。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必选(M)/可选(O)"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "indexName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "索引名称。  输入要求具体如下：  - 索引的名称长度必须大于或等于1个字符，小于或等于30个字符，只能包含以下3种类型，并且至少包含“字母”类型：   - 字母（A-Z或a-z）   - 数字（0-9）   - 特殊字符：_ - 索引名称必须以字母开头。 - 索引名称中不区分字母的大小写。 - 修改对象类型时，仅支持新增或者删除索引。当删除索引后，本次提交前不允许新增同名索引。 - 每个对象类型可以设置小于或等于16个索引。 - 数据类型为ByteArray和Text的字段不支持设置为索引。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "indexList > fieldName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "索引包含的字段。  支持设置组合索引，由多个字段组合成为索引，一个组合索引包含的字段不超过5个。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "indexList > sortType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "索引包含的字段的排序方式，支持升序或降序。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，我们可为“objecttype1”对象类型配置如下两个索引。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "indexName"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "fieldName"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "sortType"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "id_Index"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ASC"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "price_Index"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "price"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DESC"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(772837)/* ["default"] */.A) + "",
            width: "862",
            height: "518"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“permissions”中设置各角色是否具有该对象类型的Read、Upsert（包含新增和修改）和Delete权限。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必选(M)/可选(O)"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "role"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户角色，包括：  - World：代表所有用户，包含认证和非认证用户。该角色默认拥有Read权限，可自定义配置Upsert和Delete权限。但是，不建议将Upsert和Delete权限配置给所有人角色。当对象类型中设置了加密字段之后，表示开启全程加密功能，此时所有人角色将不会拥有Read、Upsert和Delete权限，且不允许修改。 - Authenticated：经过AGC登录认证的用户。该角色默认拥有Read权限，可自定义配置Upsert和Delete权限。当对象类型中设置了加密字段之后，表示开启全程加密功能，此时认证用户角色将不会拥有Read、Upsert和Delete权限，且不允许修改。 - Creator：经过认证的数据创建用户。该角色默认拥有所有权限，且可自定义配置所有权限。每条数据都有其对应的数据创建人（即应用用户），每个数据创建者仅可以Upsert或者Delete自己创建的数据，不能Upsert或者Delete他人创建的数据。数据创建者的信息保存在数据记录的系统表中。 - Administrator：应用开发者，主要是指通过AGC控制台或FaaS（Function as a Service，函数即服务）侧访问云数据库的角色。该角色默认拥有所有权限，且可自定义配置所有权限。Administrator可以管理并配置其他角色的权限。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "rights"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "授予角色的权限，包括Read、Upsert（包含新增和修改）和Delete权限。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(671191)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["各角色只能完成对应权限的操作，超出权限范围的操作云侧将返回“permission denied”错误。由于端云一体化工程的初始化代码未", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-cloudcommon/cloudfoundation-cloudcommon#getaccesstoken",
            children: "配置AccessToken"
          }), "，故“CloudProgram/clouddb/objecttype/Post.json”中给World角色添加了Upsert和Delete权限。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，我们可按下表为各个角色配置“objecttype1”对象类型的权限。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "角色"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Read"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Upsert"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Delete"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "World"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "√"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Authenticated"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "√"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "√"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Creator"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "√"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "√"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "√"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Administrator"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "√"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "√"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "√"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(49071)/* ["default"] */.A) + "",
            width: "862",
            height: "518"
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
49071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858785-c431ec236120346cea834f18edf0181e.png");

},
89068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
376129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858781-10b3730de990d6df48ae520d379bfb85.png");

},
415663(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338468-24b25c29614a51a645c4b6f5c34c044b.png");

},
814577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002416494957-bc5ae1ad8318c1a3775b728f01db0d47.png");

},
671191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
659281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
772837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338460-5b1d7c94822e8c402bf4e8a3e6ca07e7.png");

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