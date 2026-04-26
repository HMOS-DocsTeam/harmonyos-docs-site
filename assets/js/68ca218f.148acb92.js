"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["322557"], {
507521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_character_processing_i_18_n_character_processing_md_68c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-character-processing-i-18-n-character-processing-md-68c.json
var site_docs_localization_kit_i_18_n_i_18_n_character_processing_i_18_n_character_processing_md_68c_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-character-processing/i18n-character-processing","title":"字符处理","description":"功能介绍","source":"@site/docs/localization-kit/i18n/i18n-character-processing/i18n-character-processing.md","sourceDirName":"localization-kit/i18n/i18n-character-processing","slug":"/localization-kit/i18n/i18n-character-processing/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-character-processing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"字符处理","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-character-processing","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建索引","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-sorting/i18n-sorting-index/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-name-localization/i18n-display-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-character-processing/i18n-character-processing.md


const frontMatter = {
	title: '字符处理',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-character-processing',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '字符处理';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "字符处理",
        children: "字符处理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在不同语言中，字符规则差异较大。通过字符处理，可以保证在不同语言规则下，以相似的逻辑处理文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { i18n } from '@kit.LocalizationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用场景。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["字符属性：字符属性用于判断字符类别，如判断字符是否为数字、字母、空格，是否为从右到左语言的字符，是否为表意文字（主要是中文日文韩文）等。使用Unicode类的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#isdigit9",
            children: "isDigit"
          }), "等接口可以实现该功能。示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 判断字符是否是数字\nlet isDigit = i18n.Unicode.isDigit('1'); // isDigit = true\n\n// 判断字符是否是从右到左语言的字符\nlet isRTL = i18n.Unicode.isRTL('a'); // isRTL = false\n\n// 判断字符是否是表意文字\nlet isIdeograph = i18n.Unicode.isIdeograph('华'); // isIdeograph = true\n\n// 获取字符的一般类别值\nlet unicodeType = i18n.Unicode.getType('a'); // unicodeType = 'U_LOWERCASE_LETTER'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["音译：是指将采用某个文字系统或字母表表示的文本转换为发音相同的采用另一个文字系统或字母表表示的文本的过程，并不等同于翻译。使用Transliterator类的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#transform9",
            children: "transform"
          }), "接口可以实现音译功能。示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(974136)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本模块支持中文汉字转拼音，但当中文文本中包含多音字时，可能出现部分多音字无法按照正确的发音转换为拼音的问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 音译成Latn格式\nlet transliterator: i18n.Transliterator = i18n.Transliterator.getInstance('Any-Latn');\nlet translatedText = transliterator.transform('中国'); // translatedText = 'zhōng guó'\n\n// 汉语音译去声调\nlet toneLessTransliterator: i18n.Transliterator = i18n.Transliterator.getInstance('Any-Latn;Latin-Ascii');\nlet toneLessTranslatedText = toneLessTransliterator.transform('中国'); // toneLessTranslatedText = 'zhong guo'\n\n// 汉语姓氏读音\nlet nameTransliterator: i18n.Transliterator = i18n.Transliterator.getInstance('Han-Latin/Names');\nlet nameTranslatedText = nameTransliterator.transform('单老师'); // nameTranslatedText = 'shàn lǎo shī'\n\n// 获取音译支持的转换ID列表\nlet ids = i18n.Transliterator.getAvailableIDs(); // ids = ['ASCII-Latin', 'Accents-Any', ...]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["文本标准化：是指按指定的范式标准化文本。文本标准化的范式包括NFC、NFD、NFKC和NFKD，范式的详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.unicode.org/reports/tr15/#Norm_Forms",
            children: "国际标准"
          }), "。使用Normalizer类的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#normalize10",
            children: "normalize"
          }), "接口可以实现文本标准化。示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 按照NFC范式对文本进行标准化处理\nlet normalizer: i18n.Normalizer = i18n.Normalizer.getInstance(i18n.NormalizerMode.NFC);\nlet normalizedText = normalizer.normalize('\\u1E9B\\u0323'); // normalizedText = 'ẛ̣'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取文本的可换行点：使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#breakiterator8",
            children: "BreakIterator"
          }), "类的接口可以根据设定的区域获取文本的可换行点。示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建获取文本可换行点的对象，该对象将按照指定区域的规则计算文本中的可换行点的位置\nlet iterator: i18n.BreakIterator  = i18n.getLineInstance('en-GB');\n\n// 设置处理文本\niterator.setLineBreakText('Apple is my favorite fruit.');\n\n// 将换行迭代器移动到文本起始位置\nlet firstPos = iterator.first(); // firstPos = 0\n\n// 将换行迭代器向后移动2个可换行点，nextPos为移动后在文本中的位置，如果超出文本的长度范围，返回-1\nlet nextPos = iterator.next(2); // nextPos = 9\n\n// 获取换行迭代器在当前所处理文本中的位置\nlet currentPos = iterator.current(); // currentPos = 9\n\n// 判断某个位置是否是可换行点\nlet isBoundary = iterator.isBoundary(9); // isBoundary = true\n\n// 获取BreakIterator对象处理的文本\nlet breakText = iterator.getLineBreakText(); // breakText = 'Apple is my favorite fruit.'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["文件路径镜像处理：是指传入镜像语言时，对文件路径字符串进行本地化处理，实现镜像语言下文件路径的镜像显示效果。使用I18NUtil类的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#getunicodewrappedfilepath20",
            children: "getUnicodeWrappedFilePath"
          }), "接口可以实现文件路径镜像处理。示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let mirrorPath = '';\nlet unMirrorPath = '';\n\n// 传入镜像语言，对路径进行镜像处理\nlet path = 'data/out/tmp';\n\ntry {\n  let delimiter = '/';\n  let locale: Intl.Locale = new Intl.Locale('ar');\n  // mirrorPath = 'tmp/out/data/'\n  mirrorPath = i18n.I18NUtil.getUnicodeWrappedFilePath(path, delimiter, locale);\n  \n  // 传入非镜像语言，不处理路径\n  let localeZh: Intl.Locale = new Intl.Locale('zh');\n  // unMirrorPath = '/data/out/tmp'\n  unMirrorPath = i18n.I18NUtil.getUnicodeWrappedFilePath(path, delimiter, localeZh);\n} catch (error) {\n  console.error(`call I18NUtil.getUnicodeWrappedFilePath failed, error code: ${error.code}, message: ${error.message}.`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/harmonyos_samples/international",
          children: "国际化-字符处理"
        })
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
974136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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