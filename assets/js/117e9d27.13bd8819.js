"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["846756"], {
695676(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_custom_metadata_rule_validation_ide_custom_metadata_rule_validation_config_ide_custom_metadata_rule_validation_config_md_117_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-appendix-ide-custom-metadata-rule-validation-ide-custom-metadata-rule-validation-config-ide-custom-metadata-rule-validation-config-md-117.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_custom_metadata_rule_validation_ide_custom_metadata_rule_validation_config_ide_custom_metadata_rule_validation_config_md_117_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-custom-metadata-rule-validation-config/ide-custom-metadata-rule-validation-config","title":"自定义元数据规则校验插件配置","description":"ohpm-repo 5.1.3版本开始支持自定义元数据规则校验，允许通过插件对oh-package.json5中部分字段开发定制化的校验规则。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-custom-metadata-rule-validation-config/ide-custom-metadata-rule-validation-config.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-custom-metadata-rule-validation-config","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-custom-metadata-rule-validation-config/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-custom-metadata-rule-validation-config/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义元数据规则校验插件配置","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-metadata-rule-validation-config","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm仓库接口协议","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-interface-protocol/"},"next":{"title":"模板文件","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-custom-metadata-rule-validation-config/ide-custom-metadata-rule-validation-config.md


const frontMatter = {
	title: '自定义元数据规则校验插件配置',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-metadata-rule-validation-config',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '自定义元数据规则校验插件配置';

const assets = {

};



const toc = [{
  "value": "准备工作",
  "id": "准备工作",
  "level": 2
}, {
  "value": "编写自定义规则校验函数文件checkField.ts",
  "id": "编写自定义规则校验函数文件checkfieldts",
  "level": 2
}, {
  "value": "编写自定义规则配置文件CustomExtensionValidationConfig.json",
  "id": "编写自定义规则配置文件customextensionvalidationconfigjson",
  "level": 2
}, {
  "value": "CustomExtensionValidationConfig.json中六种字段规则校验",
  "id": "customextensionvalidationconfigjson中六种字段规则校验",
  "level": 2
}, {
  "value": "启用自定义规则配置",
  "id": "启用自定义规则配置",
  "level": 2
}, {
  "value": "使用自定义规则校验",
  "id": "使用自定义规则校验",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义元数据规则校验插件配置",
        children: "自定义元数据规则校验插件配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo 5.1.3版本开始支持自定义元数据规则校验，允许通过插件对oh-package.json5中部分字段开发定制化的校验规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(426867)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义元数据规则校验插件的作用是基于原有元数据校验规则的增强，而非替换，原有校验规则可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-oh-package-json5",
        children: "oh-package.json5规格文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "准备工作",
      children: "准备工作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下载ohpm-repo5.1.3及以上版本工具安装包并解压。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file",
            children: "模板文件"
          }), "中的操作指示，创建三个必要模板文件：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section14072085013",
            children: "checkField.ts"
          }), "，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section1076523392",
            children: "CustomExtensionValidationConfig.json"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section1613602518915",
            children: "tsconfig.json"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将文件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section1613602518915",
            children: "tsconfig.json"
          }), "文件移动到ohpm-repo解压根目录内；建议将文件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section14072085013",
            children: "checkField.ts"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section1076523392",
            children: "CustomExtensionValidationConfig.json"
          }), "文件移动到ohpm-repo解压根目录的plugins/fieldCheckPlugin文件夹内。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(46633)/* ["default"] */.A) + "",
            width: "655",
            height: "392"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(329854)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "625",
            height: "191"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编写自定义规则校验函数文件checkfieldts",
      children: "编写自定义规则校验函数文件checkField.ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["打开", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section14072085013",
        children: "checkField.ts"
      }), "模板文件（默认名称为checkField，可自定义修改），创建与文件同名的校验函数（示例：文件checkField.ts中仅允许存在一个名称为checkField的函数），实现自定义规则校验函数接口ValidationExtensionRule。若需定义多个校验规则，需要为每个规则创建专属的校验函数文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 自定义规则校验函数接口ValidationExtensionRule定义如下\nexport interface ValidationExtensionRule {\n (fieldData: FieldDataType, userInfo: UserBasicInfo): void; \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["入参：包含两个固定入参：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "fieldData：oh-package.json5文件中字段的取值，类型可以是布尔值，字符串，字符串数组，对象和对象数组。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["userInfo：发布三方包用户的信息，包含userName和userRole两部分：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "userInfo.userName：字符串类型，发布三方包账户的用户名称。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["userInfo.userRole：字符串类型，发布三方包账户的用户角色，1表示为管理员账户，0表示为普通用户（使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-auth-plugin",
                  children: "自定义认证插件"
                }), "，默认为0）。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回值：字段校验成功返回void，校验失败则抛出错误并返回错误原因。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["规则校验函数实现过程中需要引用UserBasicInfo，FieldDataType类型和ValidationExtensionRule接口，处理函数报错时将会使用日志记录、异常处理等基础功能，需准确书写函数引用路径。相关工具类与方法具体使用方法见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section14072085013",
        children: "checkField.ts"
      }), "模板文件，存放位置如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FieldDataType和ValidationExtensionRule：FieldDataType为字段信息类型，ValidationExtensionRule为规则函数的接口，地址：<ohpm-repo解压根目录>/libs/service/validator/validationExtensionRule/ValidationExtensionRule.js。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UserBasicInfo：用户信息类型，地址：<ohpm-repo解压根目录>/libs/service/validator/validationExtensionRule/type.js。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CustomValidateError：错误抛出类，地址：<ohpm-repo解压根目录>/libs/service/validator/CustomValidateError.js。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OhpmLazyLogger：日志打印类，地址为：<ohpm-repo解压根目录>/libs/packages/log。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编写自定义规则配置文件customextensionvalidationconfigjson",
      children: "编写自定义规则配置文件CustomExtensionValidationConfig.json"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成自定义规则校验函数开发后，需要在模板文件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section1076523392",
        children: "CustomExtensionValidationConfig.json"
      }), "中（该文件名不可自定义），为oh-package.json5文件中需要被加强校验的字段配置所需的校验规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[\n  {\n    \"attrName\": \"<被校验字段的名称1>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"规则的类型，不配置默认为CustomFunction\",\n        \"description\": \"<规则的功能描述>\",\n        \"ruleContent\": \"<规则的内容>\"\n      },\n      {\n        \"ruleType\": \"规则的类型，不配置默认为CustomFunction\",\n        \"description\": \"<规则的功能描述>\",\n        \"ruleContent\": \"<规则的内容>\"\n      }\n    ]\n  },\n  {\n    \"attrName\": \"<被校验字段的名称2>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"规则的类型，不配置默认为CustomFunction\",\n        \"description\": \"<规则的功能描述>\",\n        \"ruleContent\": \"<规则的内容>\"\n      },\n      {\n        \"ruleType\": \"规则的类型，不配置默认为CustomFunction\",\n        \"description\": \"<规则的功能描述>\",\n        \"ruleContent\": \"<规则的内容>\"\n      }\n    ]\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "attrName：被校验字段的名称，支持模块级oh-package.json5中所有字段进行校验，也支持自定义字段（例如在三方包的oh-package.json5中添加一个自定义字段A，可以对字段A进行校验）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(268986)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "oh-package.json5中author字段分为'author.name'，'author.email'，'author.url'三个字段独立校验。attrName不能重复，重复将报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "configs：被校验字段的规则配置，一个attrName对应一个configs，configs可包含多个config，每个config对应一个独立规则，config配置有三个参数："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ruleType：表示字段的规则类型，string类型，不配置默认为“CustomFunction”，规则类型有六种：[\"CustomFunction\",\"NotNull\",\"LengthLimit\",\"ListItemLengthLimit\",\"MapEntry\",\"RegExp\"]，当使用“CustomFunction”时需要编写自定义校验规则函数文件，其他五种规则类型配置即生效，系统已经完成功能实现。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "CustomFunction：自定义函数规则。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "NotNull：非空规则。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "LengthLimit：字符串长度限制规则。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ListItemLengthLimit：字符串数组中单个字符串长度限制规则。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "MapEntry：对象数据校验规则，可以对key和value进行不同的规则校验。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "RegExp：字符串正则匹配校验。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "description：string类型，规则的功能描述，内容不做校验。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ruleContent：规则的内容，具体格式要求需与ruleType相匹配。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customextensionvalidationconfigjson中六种字段规则校验",
      children: "CustomExtensionValidationConfig.json中六种字段规则校验"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据ruleType的不同，ohpm-repo提供六种字段校验能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义函数校验：CustomFunction"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "规则配置："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[\n  {\n    \"attrName\": \"<oh-package.json5文件的字段名称>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"CustomFunction\",\n       \"description\": \"自定义规则校验\",\n        \"ruleContent\": \"<自定义规则函数的名称>\"\n      }\n    ]\n  }\n]\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ruleType如果不配置，将默认为CustomFunction。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ruleContent必须是字符串类型，值为自定义规则函数的名称（示例：书写规则函数文件checkField.ts，ruleContent取值为checkField）。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非空校验：NotNull"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "规则配置："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[\n  {\n    \"attrName\": \"<oh-package.json5文件的字段名称>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"NotNull\",\n       \"description\": \"非空校验\",\n        \"ruleContent\": \"\"\n      }\n    ]\n  }\n]\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "当字段配置规则为非空时，会校验字段是否为空或者长度是否为0，ruleContent必须保持为空字符串。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "长度校验：LengthLimit"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "规则配置："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[\n  {\n    \"attrName\": \"<oh-package.json5文件的字段名称>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"LengthLimit\",\n        \"description\": \"字符串长度校验\",\n        \"ruleContent\": {\n          \"minLength\": <最小长度>,\n          \"maxLength\": <最大长度>\n        }\n      }\n    ]\n  }\n]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "字段需要是字符串类型，例如字段name，对字段长度进行限制，长度范围为[最小长度，最大长度]，长度为整数类型，可以仅配置minLength或者maxLength，minLength和maxLength需要为非负数，且maxLength需要大于等于minLength。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数组长度校验：ListItemLengthLimit"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "规则配置："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[\n  {\n    \"attrName\": \"<oh-package.json5文件的字段名称>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"ListItemLengthLimit\",\n        \"description\": \"数组中单个字符串长度校验\",\n        \"ruleContent\": {\n          \"maxLength\": <最大长度>,\n          \"minLength\": <最小长度>\n        }\n      }\n    ]\n  }\n]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "字段需要是字符串数组类型，例如字段keywords，对数组中每一个字符串的长度进行限制，长度范围为[最小长度，最大长度]，长度为整数类型，可以只配置minLength或者maxLength，minLength和maxLength需要为非负数，且maxLength大于等于minLength。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Map对象类型校验：MapEntry"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "规则配置："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[\n  {\n    \"attrName\": \"<oh-package.json5文件的字段名称>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"MapEntry\",\n        \"description\": \"Map中单个key-value的字符校验\",\n        \"ruleContent\": {\n          \"keyRuleConfig\": {\n            \"ruleType\": <key值规则校验类型>,\n            \"ruleContent\": <key值规则校验内容>\n          },\n          \"valueRuleConfig\": {\n            \"ruleType\": <value值规则校验类型>,\n            \"ruleContent\":<value值规则校验内容>\n          }\n        }\n      }\n    ]\n  }\n]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "字段需要是对象类型，例如字段dependencies，针对对象中每一组数据的key和value值分别做校验，key和value需要同时配置。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["keyRuleConfig：有两个参数，ruleType和ruleContent，规格同", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#li1678919385917",
                  children: "configs"
                }), "中的", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#li278918315598",
                  children: "ruleType"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#li157891933595",
                  children: "ruleContent"
                }), "，定义key值的校验规则。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["valueRuleConfig：有两个参数，ruleType和ruleContent，规格同", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#li1678919385917",
                  children: "configs"
                }), "中的", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#li278918315598",
                  children: "ruleType"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#li157891933595",
                  children: "ruleContent"
                }), "，定义value值的校验规则。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "正则校验：RegExp"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "规则配置："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[\n  {\n    \"attrName\": \"<oh-package.json5文件的字段名称>\",\n    \"configs\": [\n      {\n        \"ruleType\": \"RegExp\",\n        \"description\": \"字符串正则表达校验\",\n        \"ruleContent\": <正则表达式>\n      }\n    ]\n  }\n]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "字段需要是字符串类型，例如字段name，对字段内容进行正则匹配限制，ruleContent需为有效的正则表达式。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启用自定义规则配置",
      children: "启用自定义规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了保证ohpm-repo能够正确加载自定义规则校验，需要修改配置文件config.yaml，开启自定义元数据规则校验，涉及field_check_plugin字段内容修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "field_check_plugin:\n  config_file_path:  plugins/fieldCheckPlugin/CustomExtensionValidationConfig.json\n  check_func_dir: plugins/fieldCheckPlugin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config_file_path：字段校验配置文件路径，支持绝对路径和相对路径，相对路径的基准为ohpm-repo解压根目录，建议将文件存放在软件包的plugins/fieldCheckPlugin目录下，默认值为plugins/fieldCheckPlugin/CustomExtensionValidationConfig.json。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "check_func_dir：字段校验函数文件所在目录路径，支持绝对路径和相对路径，相对路径的基准为ohpm-repo解压根目录，建议将目录设置为plugins/fieldCheckPlugin文件夹，默认值为plugins/fieldCheckPlugin。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用自定义规则校验",
      children: "使用自定义规则校验"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装必要的npm包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过命令行工具，在ohpm-repo解压根目录下，安装typescript包和@types/node包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ npm i typescript\n$ npm i @types/node\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译自定义规则函数文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果checkField.ts（举例说明，函数名称可自定义）存放在ohpm-repo安装根目录的plugins/fieldCheckPlugin文件夹中，当编写完规则函数后，通过命令行工具，在ohpm-repo安装根目录下执行如下编译命令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ tsc\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令成功执行后会在ohpm-repo解压根目录的plugins/outDir文件夹中生成编译后的文件checkField.js。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果checkField.ts没有存放在plugins/fieldCheckPlugin内，请先修改", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-rule-verification-template-file#section1613602518915",
            children: "tsconfig.json"
          }), "文件中参数include和outDir，include指定需编译的插件代码的存储目录，outDir指定编译后文件的存储位置，修改后通过命令行工具，在ohpm-repo解压根目录下执行编译命令“tsc”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// tsconfig.json 文件中的默认配置\n// 默认值：自定义规则函数文件默认存放在 ./plugins/fieldCheckPlugin 中，编译后的文件存放在./plugins/outDir中\n \"include\": \"plugins/fieldCheckPlugin/*\"          // 插件文件的位置\n \"outDir\": \"./plugins/outDir\"                     // 编译后文件的存放位置\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译后文件指定存放位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译后获得的checkField.js需要与checkField.ts保持在同一级目录中，否则会编译出错。默认checkField.js文件输出在./plugins/outDir内，需要把checkField.js拷贝到checkField.ts同级目录./plugins/fieldCheckPlugin中（ohpm-repo成功启动后可删除checkField.ts文件）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm-repo服务的启动。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在完成上述操作之后，通过执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-install",
            children: "install"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-start",
            children: "start"
          }), "命令，完成服务的部署启动。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布三方包，使用自定义规则校验。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ohpm命令行工具或者ohpm-repo管理界面，发布三方包。在发包的过程中包的元数据将通过自定义规则的校验，如果校验不通过则会报错，请根据报错信息修改oh-package.json文件的内容再重新发布三方包。"
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
268986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
329854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911254-9a82a4f37c6baf41bfd8e21cdcd0022c.png");

},
46633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831175-2c48b43da8e3ba1aa95fd8be6446c4e6.png");

},
426867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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