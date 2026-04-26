"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["64898"], {
870587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_uniform_data_definition_uniform_data_type_descriptors_uniform_data_type_descriptors_md_2c5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-uniform-data-definition-uniform-data-type-descriptors-uniform-data-type-descriptors-md-2c5.json
var site_docs_arkdata_uniform_data_definition_uniform_data_type_descriptors_uniform_data_type_descriptors_md_2c5_namespaceObject = JSON.parse('{"id":"arkdata/uniform-data-definition/uniform-data-type-descriptors/uniform-data-type-descriptors","title":"标准化数据类型 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/uniform-data-definition/uniform-data-type-descriptors/uniform-data-type-descriptors.md","sourceDirName":"arkdata/uniform-data-definition/uniform-data-type-descriptors","slug":"/arkdata/uniform-data-definition/uniform-data-type-descriptors/","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-type-descriptors/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"标准化数据类型 (ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-type-descriptors","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"标准化数据定义概述","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/unified-data-definition-overview/"},"next":{"title":"标准化数据类型 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-type-descriptors-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/uniform-data-definition/uniform-data-type-descriptors/uniform-data-type-descriptors.md


const frontMatter = {
	title: '标准化数据类型 (ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-type-descriptors',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '标准化数据类型 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "标准化数据类型的设计和分类原则",
  "id": "标准化数据类型的设计和分类原则",
  "level": 2
}, {
  "value": "标准化数据类型按层级结构构建",
  "id": "标准化数据类型按层级结构构建",
  "level": 3
}, {
  "value": "标准化数据类型的分类原则",
  "id": "标准化数据类型的分类原则",
  "level": 3
}, {
  "value": "标准化数据类型的定义",
  "id": "标准化数据类型的定义",
  "level": 2
}, {
  "value": "预置数据类型",
  "id": "预置数据类型",
  "level": 2
}, {
  "value": "应用自定义数据类型",
  "id": "应用自定义数据类型",
  "level": 2
}, {
  "value": "工作原理",
  "id": "工作原理",
  "level": 3
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "如何查询媒体类文件归属类型",
  "id": "如何查询媒体类文件归属类型",
  "level": 2
}, {
  "value": "如何通过文件后缀获取对应的MIMEType列表",
  "id": "如何通过文件后缀获取对应的mimetype列表",
  "level": 2
}, {
  "value": "如何通过MIMEType获取对应的后缀列表",
  "id": "如何通过mimetype获取对应的后缀列表",
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
        id: "标准化数据类型-arkts",
        children: "标准化数据类型 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准化数据类型（Uniform Type Descriptor，简称UTD）旨在解决数据类型描述的歧义问题。例如，JPEG图片可能被描述为image/jpeg、.jpg、.jpeg或image/picture等不同形式，导致跨系统传输时，接收方需依赖复杂的兼容逻辑（如扩展名匹配、MIME类型检测）才能识别数据类型，甚至可能因描述不一致而失败。UTD通过统一类型标识，确保数据能被准确、高效地解析和处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["标准化数据类型分为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A2%84%E7%BD%AE%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
        children: "预置数据类型"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
        children: "应用自定义数据类型"
      }), "。并且支持从其他类型体系，如文件扩展名和MIME type转换为UTD标准类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对标准化数据类型，典型的应用场景有：文件管理中的图片预览、系统分享等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "标准化数据类型的设计和分类原则",
      children: "标准化数据类型的设计和分类原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标准化数据类型按层级结构构建",
      children: "标准化数据类型按层级结构构建"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于MIME Type或文件后缀名进行类型区分，存在另一个不足：即扁平化的数据类型定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扁平或松散的类型定义难以准确描述不同类型间的兼容与继承关系，且在实际使用中，会增加应用处理数据类型时的开发复杂度。例如，在搜索场景中，用户从精确搜索动物相关的图片，希望进一步扩展搜索动物相关的图片、视频或音频资源。为了满足上述需求，我们需要在定义数据类型时，支持类型层级结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建标准类型的层级结构，定义层级结构中的类型归属关系，能够帮助系统、应用实现数据类型的分层、分类管理。当用户进行数据分享或拖拽时，如果数据中同时包含图片、视频、音频等内容，系统/应用可以根据层级按需对分享内容进行整理，如分享了几张图片、几条视频或几个媒体资源文件等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标准化数据类型的分类原则",
      children: "标准化数据类型的分类原则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UTD中定义的标准化数据类型在设计原则上按物理和逻辑分为两类。HarmonyOS中预置了常用的标准化数据类型，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/uniform-data-definition/uniform-data-type-list",
        children: "UTD预置列表"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "按物理分类"
          })
        }), "的根节点为general.entity，用于描述类型的物理属性，比如文件、目录等，具体可见图1。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "按逻辑分类"
          })
        }), "的根节点为general.object，用于描述类型的功能性特征，如图片、网页等，具体可见图2。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照此分类原则，可以从两个维度对数据类型进行描述。如描述图片时，可以是一个图片对象，同时也可以是一个文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并非所有的格式都具有两个维度，如general.calendar，更多的注重calendar对象的功能性描述。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 物理标准化数据类型示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(195404)/* ["default"] */.A) + "",
        width: "534",
        height: "580"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 逻辑标准化数据类型示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(550281)/* ["default"] */.A) + "",
        width: "968",
        height: "687"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "标准化数据类型的定义",
      children: "标准化数据类型的定义"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["标准化数据类型包含了标准化数据类型的标识ID、归属类型关系、简要描述等信息，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor#%E5%B1%9E%E6%80%A7",
        children: "TypeDescriptor属性"
      }), "，每个类型定义具体包含以下内容："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "typeId："
          })
        }), " 定义标准化数据类型的ID，该ID具有唯一性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "belongingToTypes："
          })
        }), " 定义标准化数据类型的归属关系，即该标准化数据类型归属于哪个更高层级的类型，允许存在一个标准化数据类型归属于多个类型的情况。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "description："
          })
        }), " 标准化数据类型的简要说明。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "referenceURL："
          })
        }), " 标准化数据类型的参考链接URL，用于描述类型的详细信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "iconFile："
          })
        }), " 标准化数据类型的默认图标文件路径，可以为空字符串（空字符串即没有默认图标），应用可以自行决定是否使用该默认图标。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "filenameExtensions："
          })
        }), " 标准化数据类型所关联的文件名后缀列表。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "mimeTypes："
          })
        }), " 标准化数据类型所关联的多用途互联网邮件扩展类型列表。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预置数据类型",
      children: "预置数据类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于常用的数据类型，预先定义了一部分标准数据类型描述符，即预置数据类型。如用于描述音频文件的“general.audio”，描述视频文件的“general.video”，更多预置数据类型参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/uniform-data-definition/uniform-data-type-list",
        children: "UTD预置列表"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用自定义数据类型",
      children: "应用自定义数据类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于预置标准数据类型无法穷举所有数据类型，在业务跨应用、跨设备交互过程中，会涉及到一些应用独有的数据类型，因此支持应用声明自定义数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用自定义的数据类型可继承已有的标准类型，例如业务自定义的图片类型可以使用“com.company.x-image”作为自定义数据类型的标识。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以将自定义数据类型注册到设备本地系统中，这样其他业务在需要时可以引用，从而实现生态内各应用自定义数据类型的共享与统一。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "工作原理",
      children: "工作原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于标准类型的层级结构，业务声明自己支持的数据类型标识符时，需要声明该类型标识符的层级逻辑，例如业务自定义图片类型UTD标识符“com.company.x-image”，并归属到general.image类中。UTD会检验自定义类型标识符，确保归属关系中不出现环状结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用安装时，UTD会读取应用中自定义的数据类型进行安装。校验自定义类型数据符合约束条件后，应用自定义数据类型将被安装到设备中。应用启动后能正常读取到应用自定义的数据类型。如果引用其他应用定义的自定义数据类型，需要在应用开发时一并写入自定义数据类型配置文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "utd.json5文件需要在类型为entry的HAP中配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对自定义的类型描述各字段，有以下相关要求和限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "TypeId："
          })
        }), " 定义标准化数据类型的ID，该ID具有唯一性，由应用bundleName + 具体类型名组成，不可缺省，允许包含数字、大小写字母、-和.。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BelongingToTypes："
          })
        }), " 定义标准化数据类型的归属关系，即该标准化数据类型归属于哪个更高层级的类型，所属类型可以为多个，但是必须为已存在的数据类型（标准化数据类型预置类型或其他新增自定义数据类型），不能为应用自定义类型本身，不能为空，且与现有标准化数据类型、其他新增自定义数据类型不能形成环形依赖结构。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "FilenameExtensions："
          })
        }), " 应用自定义标准化数据类型所关联的文件后缀。可以缺省；可以为多个，每个后缀为以.开头且长度不超过127的字符串。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "MIMETypes："
          })
        }), " 应用自定义标准化数据类型所关联的web消息数据类型。可以缺省；可以为多个，每个类型为长度不超过127的字符串。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Description："
          })
        }), " 应用自定义标准化数据类型的简要说明。可以缺省；填写时，长度为不超过255的字符串。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ReferenceURL："
          })
        }), " 应用自定义标准化数据类型的参考链接URL，用于描述类型的详细信息。可以缺省；填写时，长度为不超过255的字符串。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以新增媒体类文件类型场景为例，说明如何自定义UTD标准化数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前应用在entry\\src\\main\\resources\\rawfile\\arkdata\\utd\\目录下新增utd.json5文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前应用的utd.json5配置文件内新增所需的自定义数据类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n     \"UniformDataTypeDeclarations\": [\n         {\n             \"TypeId\": \"com.example.myFirstHap.image\",\n             \"BelongingToTypes\": [\"general.image\"],\n             \"FilenameExtensions\": [\".myImage\", \".khImage\"],\n             \"MIMETypes\": [\"application/myImage\", \"application/khImage\"],\n             \"Description\": \"My Image.\",\n             \"ReferenceURL\": \"\"\n         },\n         {\n             \"TypeId\": \"com.example.myFirstHap.audio\",\n             \"BelongingToTypes\": [\"general.audio\"],\n             \"FilenameExtensions\": [\".myAudio\", \".khAudio\"],\n             \"MIMETypes\": [\"application/myAudio\", \"application/khAudio\"],\n             \"Description\": \"My audio.\",\n             \"ReferenceURL\": \"\"\n         },\n         {\n             \"TypeId\": \"com.example.myFirstHap.video\",\n             \"BelongingToTypes\": [\"general.video\"],\n             \"FilenameExtensions\": [\".myVideo\", \".khVideo\"],\n             \"MIMETypes\": [\"application/myVideo\", \"application/khVideo\"],\n             \"Description\": \"My video.\",\n             \"ReferenceURL\": \"\"\n         }\n     ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果其他应用要直接使用当前应用内的自定义数据类型，需要在其应用的entry\\src\\main\\resources\\rawfile\\arkdata\\utd\\目录下新增utd.json5文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "然后在utd.json5配置文件中进行以下声明："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"ReferenceUniformDataTypeDeclarations\": [\n         {\n             \"TypeId\": \"com.example.myFirstHap.image\",\n             \"BelongingToTypes\": [\"general.image\"],\n             \"FilenameExtensions\": [\".myImage\", \".khImage\"],\n             \"MIMETypes\": [\"application/myImage\", \"application/khImage\"],\n             \"Description\": \"My Image.\",\n             \"ReferenceURL\": \"\"\n         }\n    ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他应用也可以在DevEco Studio中创建utd.json5模板，在模板中引用当前应用内的自定义数据类型之后，基于已引用的自定义数据类型进行自定义。同时，DevEco Studio还会对配置文件中的字段进行格式校验，utd.json5配置文件示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"UniformDataTypeDeclarations\": [\n        {\n            \"TypeId\": \"com.example.mySecondHap.image\",\n            \"BelongingToTypes\": [\"com.example.myFirstHap.image\"],\n            \"FilenameExtensions\": [\".myImageEx\", \".khImageEx\"],\n            \"MIMETypes\": [\"application/my-ImageEx\", \"application/khImageEx\"],\n            \"Description\": \"My Image extension.\",\n            \"ReferenceURL\": \"\"\n        }\n    ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是UTD常用接口说明，对于预置数据类型和应用自定义数据类型同样适用，更多接口和详细说明，请见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor",
        children: "@ohos.data.uniformTypeDescriptor (标准化数据定义与描述)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "UniformDataType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准化数据类型的枚举定义。此处不再展开列举各枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "belongsTo(type: string): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前标准化数据类型是否归属于指定的标准化数据类型，true表示归属，false表示不归属。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isLowerLevelType(type: string): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前标准化数据类型是否是指定标准化数据类型的低层级类型，true表示低层级，false表示非低层级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isHigherLevelType(type: string): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前标准化数据类型是否是指定标准化数据类型的高层级类型，true表示高层级，false表示非高层级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getUniformDataTypesByFilenameExtension(filenameExtension: string, belongsTo?: string): Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的文件后缀名和所归属的标准化数据类型查询标准化数据类型ID列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getUniformDataTypesByMIMEType(mimeType: string, belongsTo?: string): Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的MIME类型和所归属的标准化数据类型查询标准化数据类型ID列表。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何查询媒体类文件归属类型",
      children: "如何查询媒体类文件归属类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以媒体类文件的归属类型查询场景为例，说明如何使用UTD。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入uniformTypeDescriptor模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1.导入模块\nimport { uniformTypeDescriptor } from '@kit.ArkData';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对“.mp3”文件扩展名，使用getUniformDataTypesByFilenameExtension()方法获取对应UTD数据类型，并打印对应UTD数据类型的具体属性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对“audio/mp3”MIMEType，使用getUniformDataTypesByMIMEType()查询对应UTD数据类型，并打印对应UTD数据类型的具体属性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "比较上述步骤查询的数据类型，确认类型是否相等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据上述步骤中查询到的标准数据类型“general.mp3”与表示音频数据的已知标准数据类型“general.audio”做比较查询，确认是否存在归属关系。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function uniformTypeDescriptorTest() {\n  try {\n    // 2.可根据 “.mp3” 文件后缀查询对应UTD数据类型，并查询对应UTD数据类型的具体属性\n    let fileExtension = '.mp3';\n    let typeIds1 = uniformTypeDescriptor.getUniformDataTypesByFilenameExtension(fileExtension);\n    if (typeIds1.length == 0) {\n      return;\n    }\n    let typeObj1 = uniformTypeDescriptor.getTypeDescriptor(typeIds1[0]);\n    hilog.info(0xFF00, '[Sample_Udmf]', `typeId: ${typeObj1.typeId}`);\n    hilog.info(0xFF00, '[Sample_Udmf]', `belongingToTypes: ${typeObj1.belongingToTypes}`);\n    hilog.info(0xFF00, '[Sample_Udmf]', `description: ${typeObj1.description}`);\n    hilog.info(0xFF00, '[Sample_Udmf]', `filenameExtensions: ${typeObj1.filenameExtensions}`);\n    hilog.info(0xFF00, '[Sample_Udmf]', `mimeTypes: ${typeObj1.mimeTypes}`);\n\n    // 3.可根据 “audio/mp3” MIMEType查询对应UTD数据类型，并查询对应UTD数据类型的具体属性。\n    let mimeType = 'audio/mp3';\n    let typeIds2 = uniformTypeDescriptor.getUniformDataTypesByMIMEType(mimeType);\n    if (typeIds2.length == 0) {\n      return;\n    }\n    let typeObj2 = uniformTypeDescriptor.getTypeDescriptor(typeIds2[0]);\n    hilog.info(0xFF00, '[Sample_Udmf]', `typeId: ${typeObj2.typeId}`);\n    hilog.info(0xFF00, '[Sample_Udmf]', `belongingToTypes: ${typeObj2.belongingToTypes}`);\n    hilog.info(0xFF00, '[Sample_Udmf]', `description: ${typeObj2.description}`);\n    hilog.info(0xFF00, '[Sample_Udmf]', `filenameExtensions: ${typeObj2.filenameExtensions}`);\n    hilog.info(0xFF00, '[Sample_Udmf]', `mimeTypes: ${typeObj2.mimeTypes}`);\n\n    // 4.将数据类型进行比较，确认是否同一种数据类型\n    if (typeObj1 != null && typeObj2 != null) {\n      let ret = typeObj1.equals(typeObj2);\n      hilog.info(0xFF00, '[Sample_Udmf]', `typeObj1 equals typeObj2, ret: ${ret}`);\n    }\n\n    // 5.将查询到的标准数据类型“general.mp3”与表示音频数据的已知标准数据类型“general.audio”做比较查询，确认是否存在归属关系。\n    if (typeObj1 != null) {\n      let ret = typeObj1.belongsTo('general.audio');\n      hilog.info(0xFF00, '[Sample_Udmf]', `belongsTo, ret: + ${ret}`);\n      let mediaTypeObj = uniformTypeDescriptor.getTypeDescriptor('general.media');\n      // 确认是否存在归属关系\n      ret = mediaTypeObj.isHigherLevelType('general.audio');\n      hilog.info(0xFF00, '[Sample_Udmf]', `isHigherLevelType, ret: + ${ret}`);\n    }\n  } catch (err) {\n    hilog.error(0xFF00, '[Sample_Udmf]', `err message: ${err.message}, err code: ${err.code}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何通过文件后缀获取对应的mimetype列表",
      children: "如何通过文件后缀获取对应的MIMEType列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以通过“.ts”文件后缀获取对应的MIMEType列表为例，说明如何通过文件后缀获取对应的MIMEType列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入uniformTypeDescriptor模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1.导入模块\nimport { uniformTypeDescriptor } from '@kit.ArkData';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对“.ts”文件后缀，使用getUniformDataTypesByFilenameExtension()方法获取对应UTD数据类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对UTD数据类型，使用getTypeDescriptor()方法查询对应的MIMEType列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 2.可根据 “.ts” 文件后缀查询对应UTD数据类型。\n  let fileExtension = '.ts';\n  let typeIds = uniformTypeDescriptor.getUniformDataTypesByFilenameExtension(fileExtension);\n  for (let typeId of typeIds) {\n    // 3.根据UTD数据类型查询对应的MIMEType列表。\n    let typeObj = uniformTypeDescriptor.getTypeDescriptor(typeId);\n    let mimeTypes = typeObj.mimeTypes;\n    hilog.info(0xFF00, '[Sample_Udmf]', `mimeTypes: ${mimeTypes}`);\n  }\n} catch (err) {\n  hilog.error(0xFF00, '[Sample_Udmf]', `err message: ${err.message}, err code: ${err.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何通过mimetype获取对应的后缀列表",
      children: "如何通过MIMEType获取对应的后缀列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以通过“text/plain”MIMEType获取对应文件后缀列表为例，说明如何通过MIMEType获取对应的后缀列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入uniformTypeDescriptor模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1.导入模块\nimport { uniformTypeDescriptor } from '@kit.ArkData';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对“text/plain”MIMEType，使用getUniformDataTypesByMIMEType()方法获取对应UTD数据类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对UTD数据类型，使用getTypeDescriptor()方法查询对应的MIMEType列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 2.可根据 “text/plain” MIMEType查询对应UTD数据类型。\n  let mimeType = 'text/plain';\n  let typeIds = uniformTypeDescriptor.getUniformDataTypesByMIMEType(mimeType);\n  for (let typeId of typeIds) {\n    // 3. 根据UTD数据类型查询对应的文件后缀列表\n    let typeObj = uniformTypeDescriptor.getTypeDescriptor(typeId);\n    let filenameExtensions = typeObj.filenameExtensions;\n    hilog.info(0xFF00, '[Sample_Udmf]', `filenameExtensions: ${filenameExtensions}`);\n  }\n} catch (err) {\n  hilog.error(0xFF00, '[Sample_Udmf]', `err message: ${err.message}, err code: ${err.code}`);\n}\n"
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
195404(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477521-face63ee62117b67f0ba93e051615838.png");

},
550281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797872-37e47ced12536385ded4381db3678e1d.png");

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