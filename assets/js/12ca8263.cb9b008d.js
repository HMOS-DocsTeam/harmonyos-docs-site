"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["852882"], {
538212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_autofill_passwordvault_custom_strong_password_rules_passwordvault_custom_strong_password_rules_md_12c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-passwordvault-passwordvault-apps-passwordvault-autofill-passwordvault-custom-strong-password-rules-passwordvault-custom-strong-password-rules-md-12c.json
var site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_autofill_passwordvault_custom_strong_password_rules_passwordvault_custom_strong_password_rules_md_12c_namespaceObject = JSON.parse('{"id":"system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-custom-strong-password-rules/passwordvault-custom-strong-password-rules","title":"为应用添加自动生成高强度密码的建议","description":"在本文档中介绍的强密码特指，在密码保险箱强密码填充场景中，推荐用户使用的较强密码。强密码中一定包含大写字母、小写字母、数字三种字符。且强密码的复杂度高，破解难度大。","source":"@site/docs/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-custom-strong-password-rules/passwordvault-custom-strong-password-rules.md","sourceDirName":"system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-custom-strong-password-rules","slug":"/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-custom-strong-password-rules/","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-custom-strong-password-rules/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"为应用添加自动生成高强度密码的建议","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-custom-strong-password-rules","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"强密码填充","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-autofill-strong-password/"},"next":{"title":"自定义布局下的适配建议","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-adaptation-in-custom-layout/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-custom-strong-password-rules/passwordvault-custom-strong-password-rules.md


const frontMatter = {
	title: '为应用添加自动生成高强度密码的建议',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-custom-strong-password-rules',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '为应用添加自动生成高强度密码的建议';

const assets = {

};



const toc = [{
  "value": "默认强密码规则",
  "id": "默认强密码规则",
  "level": 2
}, {
  "value": "开发者可自定义的强密码规则",
  "id": "开发者可自定义的强密码规则",
  "level": 2
}, {
  "value": "自定义规则样例说明",
  "id": "自定义规则样例说明",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
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
        id: "为应用添加自动生成高强度密码的建议",
        children: "为应用添加自动生成高强度密码的建议"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本文档中介绍的强密码特指，在密码保险箱强密码填充场景中，推荐用户使用的较强密码。强密码中一定包含大写字母、小写字母、数字三种字符。且强密码的复杂度高，破解难度大。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当开发者没有指定密码规则，或是开发者指定的规则书写错误、不符合规范时，密码保险箱会根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%BB%98%E8%AE%A4%E5%BC%BA%E5%AF%86%E7%A0%81%E8%A7%84%E5%88%99",
        children: "默认的规则"
      }), "生成符合开发者指定条件的强密码。开发者可以在允许的范围内指定强密码的规格，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%80%E5%8F%91%E8%80%85%E5%8F%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E5%BC%BA%E5%AF%86%E7%A0%81%E8%A7%84%E5%88%99",
        children: "开发者可自定义的强密码规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "默认强密码规则",
      children: "默认强密码规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者没有指定规则，或是指定的密码规则不符合规范时，将按照以下默认规则生成强密码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以字母开头。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "包含大小写字母和数字。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "长度为16位。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发者可自定义的强密码规则",
      children: "开发者可自定义的强密码规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以设置新密码输入框的passwordRules属性来指定强密码规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "强密码中一定包含大写字母、小写字母、数字三种字符。开发者可以按照以下指导对强密码规格做一些限定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "强密码规则包含3个属性："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3个属性可以任意选择，书写时顺序不做限制，属性之间以英文“,”进行分隔，每个属性只能出现一次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(999768)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各属性段请严格参照介绍进行书写，否则将导致指定规则不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "\"begin\""
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表示生成的强密码首位的字符类型，可选值如下表所示。该字段可缺省，若填写了非下表中的指定值则按默认规则处理。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "upper"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "以大写字母开头。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "lower"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "以小写字母开头。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "digit"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "以数字开头。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "不填"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不填时，将以任意字母或数字0-9开头。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式举例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "begin:[upper]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "\"special\""
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表示生成的强密码是否可以包含特殊字符。需要包含特殊字符时，请将该字段设置为\"yes\"；如不需要，不填写\"special\"字段。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当设置为\"yes\"时，生成的强密码中将包含至少一个特殊字符，特殊字符不会出现在强密码的首位。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "强密码中可能出现的特殊字符包括：!@#$%^&*"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式举例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "special:[yes]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "\"len\""
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表示生成的强密码长度。密码保险箱允许设定的强密码长度最小12位，最大32位。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "强密码长度属性提供三个关键字用于描述长度。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "关键字"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "fixedlen"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "固定长度"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "minlen"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最小长度"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "maxlen"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最大长度"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以根据以下方式指定强密码长度。如果开发者指定的密码长度数值不在有效范围[12, 32]内，将视为非法指定，系统将使用默认长度16位替代。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "仅设置固定长度fixedlen，此时强密码长度为fixedlen设置值。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "len:[fixedlen:16]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "仅设置最小长度minlen，此时强密码长度随机，最小长度为minlen设置值，最大为默认值32位。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "len:[minlen:15]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "仅设置最大长度maxlen，此时强密码长度随机，最小长度为默认值12位，最大为maxlen设置值。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "len:[maxlen:28]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "同时设置最大长度maxlen和最小长度minlen。设置时，minlen的值必须小于maxlen的值。此时强密码长度随机，最小长度为minlen设置值，最大为maxlen设置值。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "len:[minlen:13,maxlen:18]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若不指定len属性，强密码长度默认为16位。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义规则样例说明",
      children: "自定义规则样例说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正确的规则样例如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "强密码规则样例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规则释义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "begin:[upper],special:[yes],len:[maxlen:32,minlen:12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以大写字母开头，包含大小写字母、数字、特殊字符，长度为12-32之间（包含12和32）的随机数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "begin:[lower],special:[yes],len:[minlen:14]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以小写字母开头，包含大小写字母、数字、特殊字符，长度为14-32之间（包含14和32）的随机数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "begin:[digit],special:[yes],len:[fixedlen:15]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以数字开头，包含大小写字母、数字、特殊字符，长度为15。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "begin:[upper]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以大写字母开头，包含大小写字母、数字，长度为16。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "special:[yes]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以任意字母或数字开头，包含大小写字母、数字、特殊字符，长度为16。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "len:[fixedlen:15]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以任意字母或数字开头，包含大小写字母、数字，长度为15。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "begin:[upper],special:[yes]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以大写字母开头，包含大小写字母、数字、特殊字符,长度为16。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "begin:[lower],len:[maxlen:25,minlen:12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以小写字母开头，包含大小写字母、数字，长度为12-25之间（包含12和25）的随机数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "special:[yes],len:[fixedlen:15]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以任意字母或数字开头，包含大小写字母、数字、特殊字符，长度为15。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误的规则用例如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "强密码规则错误用例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误原因"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "begin:[uppper]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "begin属性的取值upper拼写错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "began:[upper]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "begin属性拼写错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "len:[15]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "len属性语法错误，未使用三种长度关键词。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "len:[fixedlen:15,maxlen:18]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "len属性语法错误，fixedlen与maxlen不可混用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "len:[maxlen:15,minlen:18]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "len属性参数值错误，maxlen的取值不能小于minlen。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput({ placeholder: '新密码' })\n  .enableAutoFill(true)\n  .type(InputType.NEW_PASSWORD)\n  .passwordRules('begin:[lower],special:[yes],len:[maxlen:32,minlen:12]')\n  .placeholderColor(0x182431)\n  .width('100%')\n  .opacity(0.6)\n  .showPasswordIcon(true)\n  .placeholderFont({ size: 16, weight: FontWeight.Regular })\n  .margin({ bottom: 36 })\n"
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
999768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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