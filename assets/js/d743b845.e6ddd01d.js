"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["241593"], {
595168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_ide_hvigor_verification_rule_ide_hvigor_verification_rule_md_d74_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-ide-hvigor-verification-rule-ide-hvigor-verification-rule-md-d74.json
var site_docs_ide_hvigor_configuration_ide_hvigor_verification_rule_ide_hvigor_verification_rule_md_d74_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration/ide-hvigor-verification-rule/ide-hvigor-verification-rule","title":"HAP唯一性校验逻辑","description":"HAP是应用安装的基本单位，在DevEco Studio工程目录中，一个HAP对应一个Module。应用打包时，每个Module生成一个.hap文件。","source":"@site/docs/ide-hvigor-configuration/ide-hvigor-verification-rule/ide-hvigor-verification-rule.md","sourceDirName":"ide-hvigor-configuration/ide-hvigor-verification-rule","slug":"/ide-hvigor-configuration/ide-hvigor-verification-rule/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-verification-rule/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"HAP唯一性校验逻辑","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-verification-rule","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"多工程构建","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-multi-projects/"},"next":{"title":"自定义.hvigor目录路径","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-path/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration/ide-hvigor-verification-rule/ide-hvigor-verification-rule.md


const frontMatter = {
	title: 'HAP唯一性校验逻辑',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-verification-rule',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = 'HAP唯一性校验逻辑';

const assets = {

};



const toc = [{
  "value": "Module校验逻辑",
  "id": "module校验逻辑",
  "level": 2
}, {
  "value": "Ability校验逻辑",
  "id": "ability校验逻辑",
  "level": 2
}, {
  "value": "Entry校验逻辑",
  "id": "entry校验逻辑",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "hap唯一性校验逻辑",
        children: "HAP唯一性校验逻辑"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP是应用安装的基本单位，在DevEco Studio工程目录中，一个HAP对应一个Module。应用打包时，每个Module生成一个.hap文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用如果包含多个Module，在应用市场上架时，会将多个.hap文件打包成一个.app文件（称为Bundle），但在云端分发和端侧安装时，仍然是以HAP为基本单位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了能够正常分发和安装应用，需要保证一个应用安装到设备时，Module的名称、Ability的名称不重复，并且只有一个Entry类型的Module与目标设备相对应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio会在编译构建时，对HAP进行上述唯一性校验，如果校验不通过，将会编译失败或给出告警。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "module校验逻辑",
      children: "Module校验逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验目的：同一目标设备上Module唯一。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验Module的Name。如果多个Module的Name不同，则校验通过。如果Name相同，继续校验deviceType。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验设备类型deviceType。如果deviceType不相交，则校验通过。如果deviceType相交，继续校验distributionFilter。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "deviceType不相交是指两个Module的deviceType中配置了完全不同的设备，例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//Module1和Module2配置了完全不同的设备，deviceType不相交。\n//Module1\n{\n  \"deviceType\": [\"tv\", \"tablet\"]\n}\n//Module2\n{\n  \"deviceType\": [\"car\"]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "deviceType相交是指两个Module的deviceType中包含了相同的设备，例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//Module1和Module2因为都包含\"tablet\"设备，导致deviceType相交。\n//Module1\n{\n  \"deviceType\": [\"tv\", \"tablet\"]\n}\n//Module2\n{\n  \"deviceType\": [\"car\", \"tablet\"]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验分发规则distributionFilter。如果distributionFilter不相交，则校验通过。如果distributionFilter相交，则无法保证Module唯一性，校验失败，打包失败。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "distributionFilter中包含属性apiVersion、screenShape、screenWindow、screenDensity和countryCode。相交的相关含义如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "distributionFilter不相交：如果两个distributionFilter中任意一个属性不相交，则两个distributionFilter不相交。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "distributionFilter相交：如果两个distributionFilter中所有属性都相交，则两个distributionFilter相交。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，两 Module 中的apiVersion、screenShape、screenWindow、screenDensity都相交，但countryCode不相交，则可以区分两个Module，校验通过。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//Module1和Module2的两个distributionFilter中，countryCode不相交，则两个distributionFilter不相交。\n//Module1\n{\n  \"distributionFilter\": {\n    \"apiVersion\" : {\n      \"policy\": \"include\",\n      \"value\": [10,11]\n    },\n    \"screenShape\": {\n      \"policy\": \"include\",\n      \"value\": [\"rect\"]\n    },\n    \"screenWindow\": {\n      \"policy\": \"include\",\n      \"value\": [\"454*454\", \"466*466\"]\n    },\n    \"screenDensity\": {\n      \"policy\": \"include\",\n      \"value\": [\"ldpi\", \"xldpi\"]\n    },\n    \"countryCode\": {\n      \"policy\": \"include\",\n      \"value\": [\"CN\", \"HK\"]\n    }\n  }\n}\n//Module2\n{\n  \"distributionFilter\": {\n    \"apiVersion\" : {\n      \"policy\": \"include\",\n      \"value\": [10,11]\n    },\n    \"screenShape\": {\n      \"policy\": \"include\",\n      \"value\": [\"rect\"]\n    },\n    \"screenWindow\": {\n      \"policy\": \"include\",\n      \"value\": [\"454*454\", \"466*466\"]\n    },\n    \"screenDensity\": {\n      \"policy\": \"include\",\n      \"value\": [\"ldpi\", \"xldpi\"]\n    },\n    \"countryCode\": {\n      \"policy\": \"include\",\n      \"value\": [\"USA\", \"UK\"]\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ability校验逻辑",
      children: "Ability校验逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验目的：同一目标设备上Ability唯一。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验Ability的Name。如果多个Ability的Name不同，则校验通过。如果Name相同，继续校验Ability所属Module的deviceType。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验Ability所属Module的deviceType。如果deviceType不相交，校验通过。如果deviceType相交，继续校验Ability所属Module的distributionFilter。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，两个Ability的Name相同，但其所属Module的deviceType不相交，校验通过。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//Ability1和Ability2虽然名称相同，但由于其所属Module的deviceType不相交，所以可以区分两个Ability，校验通过。\n//Ability1\n{\n  \"module\": {\n    \"name\": \"module_sample1\",\n    \"deviceType\": [\"tv\", \"tablet\"],\n    \"abilities\": [\n      {\n        \"name\": \"ability_sample\"\n      }\n    ]\n  }\n}\n//Ability2\n{\n  \"module\": {\n    \"name\": \"module_sample2\",\n    \"deviceType\": [\"car\"],\n    \"abilities\": [\n      {\n        \"name\": \"ability_sample\"\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验Ability所属Module的distributionFilter。如果distributionFilter不相交，校验通过。如果distributionFilter相交，校验失败，抛出告警。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，两个Ability的Name相同，其所属Module的deviceType也相交，但其所属Module的distributionFilter不相交，校验通过。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//Ability1和Ability2的Name相同，而且其所属Module的deviceType相交，但其所属Module的distributionFilter不相交，所以可以区分两个Ability，校验通过。\n//Ability1\n{\n  \"module\": {\n    \"name\": \"module_sample\",\n    \"deviceType\": [\"tv\", \"tablet\"],\n    \"metadata\": [\n      {\n        \"name\": \"distributionFilter_config\",\n        \"resource\": \"$profile:distributionFilter_config_sample1\"\n      }\n    ],\n    \"abilities\": [\n      {\n        \"name\": \"ability_sample\"\n      }\n    ]\n  }\n}\n//Ability1所属Module的distributionFilter\n{\n  \"distributionFilter\": {\n    \"apiVersion\" : {\n      \"policy\": \"include\",\n      \"value\": [10,11]\n    },\n    \"screenShape\": {\n      \"policy\": \"include\",\n      \"value\": [\"rect\"]\n    },\n    \"screenWindow\": {\n      \"policy\": \"include\",\n      \"value\": [\"454*454\", \"466*466\"]\n    },\n    \"screenDensity\": {\n      \"policy\": \"include\",\n      \"value\": [\"ldpi\", \"xldpi\"]\n    },\n    \"countryCode\": {\n      \"policy\": \"include\",\n      \"value\": [\"CN\", \"HK\"]\n    }\n  }\n}\n\n//Ability2\n{\n  \"module\": {\n    \"name\": \"module_sample2\",\n    \"deviceType\":  [\"tv\", \"tablet\"],\n    \"metadata\": [\n      {\n        \"name\": \"distributionFilter_config\",\n        \"resource\": \"$profile:distributionFilter_config_sample2\"\n      }\n    ],\n    \"abilities\": [\n      {\n        \"name\": \"ability_sample\"\n      }\n    ]\n  }\n}\n//Ability2所属Module的distributionFilter\n{\n  \"distributionFilter\": {\n    \"apiVersion\" : {\n      \"policy\": \"include\",\n      \"value\": [10,11]\n    },\n    \"screenShape\": {\n      \"policy\": \"include\",\n      \"value\": [\"rect\"]\n    },\n    \"screenWindow\": {\n      \"policy\": \"include\",\n      \"value\": [\"454*454\", \"466*466\"]\n    },\n    \"screenDensity\": {\n      \"policy\": \"include\",\n      \"value\": [\"ldpi\", \"xldpi\"]\n    },\n    \"countryCode\": {\n      \"policy\": \"include\",\n      \"value\": [\"USA\", \"UK\"]\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entry校验逻辑",
      children: "Entry校验逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验目的：目标设备只有一个Entry类型的Module与之对应，Feature类型的Module经过deviceType及distributionFilter指明的目标设备都需要存在Entry类型的Module。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验Feature类型的Module经过deviceType及distributionFilter指明的目标设备都存在Entry类型的Module。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，Bundle中存在一个Entry类型Module1，其支持设备为tablet和wearable，其分发规则为circle和rect形状的屏幕，同时存在一个Feature类型的Module2，通过分发规则可知，其可以分发到rect形状的tablet和wearable设备上，而rect形状的tablet和wearable设备上存在Entry类型的Module1，校验通过。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//Entry类型Module1\n{\n  \"module\": {\n    \"name\": \"module_sample1\",\n    \"type\": \"entry\",\n    \"deviceType\": [\"tablet\", \"wearable\"],\n    \"metadata\": [\n      {\n        \"name\": \"distributionFilter_config\",\n        \"resource\": \"$profile:distributionFilter_config1\"\n      }\n    ]\n  }\n}\n//Module1的distributionFilter，distributionFilter_config1.json\n{\n  \"screenShape\":{\n    \"policy\": \"include\",\n    \"value\": [\"circle\", \"rect\"]\n  }\n}\n//Feature类型Module2\n{\n  \"module\": {\n    \"name\": \"module_sample2\",\n    \"type\": \"feature\",\n    \"deviceType\": [\"tablet\", \"wearable\"],\n    \"metadata\": [\n      {\n        \"name\": \"distributionFilter_config\",\n        \"resource\": \"$profile:distributionFilter_config2\"\n      }\n    ]\n  }\n}\n//Module2的distributionFilter，distributionFilter_config2.json\n{\n  \"screenShape\":{\n    \"policy\": \"include\",\n    \"value\": [\"rect\"]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验目标设备只有一个Entry类型的Module与之对应。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "校验Entry类型Module的deviceType。如果deviceType不相交，校验通过。如果deviceType相交，继续校验Entry类型Module的distributionFilter。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "例如，同一个Bundle中存在两个Entry类型的Module，分别为Module1和Module2，两者的deviceType不相交，可以有效区分两个Module，校验通过。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "//Entry类型Module1\n{\n  \"module\": {\n    \"name\": \"module_sample1\",\n    \"type\": \"entry\",\n    \"deviceType\": [\"tablet\"]\n  }\n}\n//Entry类型Module2\n{\n  \"module\": {\n    \"name\": \"module_sample2\",\n    \"type\": \"entry\",\n    \"deviceType\": [\"wearable\"]\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "校验Entry类型Module的distributionFilter。如果distributionFilter不相交，校验通过。如果distributionFilter相交，校验失败，打包失败。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "例如，同一个Bundle中存在两个Entry类型的Module，分别为Module1和Module2，两者的deviceType相交，但两者的distributionFilter不相交，可以有效区分两个Module，校验通过。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "//Entry类型Module1\n{\n  \"module\": {\n    \"name\": \"module_sample1\",\n    \"type\": \"entry\",\n    \"deviceType\": [\"wearable\"],\n    \"metadata\": [\n      {\n        \"name\":\"distributionFilter_config\",\n        \"resource\": \"$profile:distributionFilter_sample1\"\n      }\n    ]\n  }\n}\n//Module1的distributionFilter，distributionFilter_sample1.json\n{\n  \"distributionFilter\": {\n    \"screenShape\":{\n      \"policy\": \"include\",\n      \"value\": [\"rect\"]\n    }\n  }\n}\n//Entry类型Module2\n{\n  \"module\": {\n    \"name\": \"module_sample2\",\n    \"type\": \"entry\",\n    \"deviceType\": [\"wearable\"],\n    \"metadata\": [\n      {\n        \"name\":\"distributionFilter_config\",\n        \"resource\": \"$profile:distributionFilter_sample2\"\n      }\n    ]\n  }\n}\n//Module2的distributionFilter，distributionFilter_sample2.json\n{\n  \"distributionFilter\": {\n    \"screenShape\":{\n      \"policy\": \"include\",\n      \"value\": [\"circle\"]\n    }\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
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