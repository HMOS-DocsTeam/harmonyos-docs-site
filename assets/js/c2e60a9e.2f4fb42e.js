"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["888755"], {
950595(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_appendix_push_detail_rules_push_detail_rules_md_c2e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-appendix-push-detail-rules-push-detail-rules-md-c2e.json
var site_docs_push_kit_guide_push_appendix_push_detail_rules_push_detail_rules_md_c2e_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-appendix/push-detail-rules/push-detail-rules","title":"通知内容管理细则","description":"目的","source":"@site/docs/push-kit-guide/push-appendix/push-detail-rules/push-detail-rules.md","sourceDirName":"push-kit-guide/push-appendix/push-detail-rules","slug":"/push-kit-guide/push-appendix/push-detail-rules/","permalink":"/harmonyos-docs-site/push-kit-guide/push-appendix/push-detail-rules/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"通知内容管理细则","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-detail-rules","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/push-kit-guide/push-personal-data/"},"next":{"title":"通知违规处罚标准","permalink":"/harmonyos-docs-site/push-kit-guide/push-appendix/push-punishment-standards/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-appendix/push-detail-rules/push-detail-rules.md


const frontMatter = {
	title: '通知内容管理细则',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-detail-rules',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通知内容管理细则';

const assets = {

};



const toc = [{
  "value": "目的",
  "id": "目的",
  "level": 2
}, {
  "value": "定义",
  "id": "定义",
  "level": 2
}, {
  "value": "通知内容原则",
  "id": "通知内容原则",
  "level": 2
}, {
  "value": "一致性原则",
  "id": "一致性原则",
  "level": 3
}, {
  "value": "真实客观原则",
  "id": "真实客观原则",
  "level": 3
}, {
  "value": "可读性原则",
  "id": "可读性原则",
  "level": 3
}, {
  "value": "合规性原则",
  "id": "合规性原则",
  "level": 3
}, {
  "value": "附录1 推送内容相关法律法规及规范要求参考",
  "id": "附录1-推送内容相关法律法规及规范要求参考",
  "level": 2
}, {
  "value": "附录2 广告、新闻资讯类推送相关法律法规参考",
  "id": "附录2-广告新闻资讯类推送相关法律法规参考",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通知内容管理细则",
        children: "通知内容管理细则"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "目的",
      children: "目的"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保障华为推送平台内容信息的合法性、真实客观性、一致性、可读性，以及用户良好的通知使用体验，制定了Push Kit通知内容管理细则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定义",
      children: "定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送通知指出现在通知中心、锁屏、桌面横幅的应用消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送内容指推送通知所展现的、用户与推送通知的交互行为所产生的所有元素，包括但不限于消息框、推送文字（标题、文本内容）、图片、应用图标、跳转方式、跳转落地页等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送各元素的定义："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(820807)/* ["default"] */.A) + "",
        width: "958",
        height: "551"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "消息框：消息推送的整体边框、背景、布局样式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "推送文字：通知标题、文本内容部分出现的所有文字。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跳转方式：点击推送后的动作，如打开应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "落地页：点击推送后，跳转直接到达的页面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通知内容原则",
      children: "通知内容原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为推送平台的通知内容需遵照内容一致性、真实客观性、可读性、合规性原则，为用户提供有价值的通知内容信息，以提升用户与推送通知的互动率，并提高用户的使用满意度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一致性原则",
      children: "一致性原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送内容与应用的业务内容相关（即应用内包含的业务）；推送内容各要素需要与应用基本信息（即在应用市场登记的基本信息）保持一致，不应使用其他应用或品牌的图标、品牌名、产品名。新闻等推送内容，因业务涉及其他应用的图标和名称，不在此范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推送跳转内容应该与推送所描述的内容一致，不诱导或强制用户点击推送消息。推送内容与落地页内容不一致的情况包括但不限于："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "题文不符，如：推送标题的表达不清晰或与落地页内容不对称；推送各要素之间没有相关性，造成用户误解。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "虚假通知：点击跳转落地页的内容与推送通知内容无关。如：将应用推送伪装为好友互动、未接来电、新消息、聊天消息等应用系统通知、通讯消息、重要通知，而落地页仅为拉起应用，或跳转至与推送内容无关的页面。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "虚假福利：禁止推送落地页与通知内容描述不一致的福利。推送中发放的各形式福利、优惠，必须在点击跳转后直接发送到用户账户，且有明确的福利标识；禁止不明确标注领取方式、或以误导欺骗的形式，推送需要用户额外操作才可获得的福利。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不可变更推送落地页内容。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "真实客观原则",
      children: "真实客观原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应推送真实客观的内容，不得推送虚假、欺骗、夸张内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推送内容不可冒充华为官方行为，冒充其他应用的推送通知，或仿造具有特殊功能的消息框、使用误导用户的背景图（如仿造红包、信封、未接来电等）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推送虚假或不实内容，如："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "违背科学常理、公认常识的内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "与已发生的事实不相符的内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "无中生有、捏造的不实信息和谣言。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "避免“标题党”类内容，如："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "过分夸张：将感受、范围、结果、程度等过度夸张夸大描述，造成耸人听闻的效果。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "故弄玄虚：故意营造悬念但不在后文中解释，或故弄玄虚。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "诱导强迫式内容：标题采用挑衅恐吓、强迫建议等方式，诱导用户阅读。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不推送过时社会新闻类内容，如："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "推送时间与内容发生时间相隔较远（不具备时效性的新闻内容）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "有新进展的新闻事件仍然推送事件更新状态前的信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "文本中有明确的时间限定词，而推送时间与文本限定时间不符。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推送不应含有虚假跳转，如："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击后无法直接实现其功能描述的按钮形图片、按钮形符号。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "故意隐藏、模糊、过度透明、伪装或遮挡功能性跳转，或实现不符合跳转描述的功能：推送点击跳转强制下载、落地页延时自动下载、落地页点击任意位置下载等。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可读性原则",
      children: "可读性原则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不向最终用户推送测试消息、无效消息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推送文字需要表意完整，以成分完整的句子或短语呈现，不出现语病，避免用户误解或不理解语义。如：将完整的句子拆分在标题和内容呈现；群发消息表意不完整、产生歧义。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "规范使用词语，不乱用成语，不出现中文拼音首字母缩写、非通用英文缩写，不使用非通用的汉语词语、短语、成语。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "规范使用汉字，不单独使用汉语拼音，不使用错别字、国家已废止的异体字和简化字。若借用某字为谐音字，需要在该字上加引号以区别。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推送内容中全角/半角状态标点符号，不得混用、乱用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "规范使用图片，图片应清晰可读，不使用带有马赛克、扭曲变形、像素杂点、模糊等影响用户体验的图片。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推送不应作为广告板使用，推送点击跳转落地页首屏广告含量不应超过用户设备屏幕的二分之一。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "及时清除原则："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用发送通知提醒后，从桌面图标/其他通知提醒进入应用，查看了对应消息后，应及时清除对应的相关通知。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景1：用户收到某个好友的N条IM消息，点击任意1条通知进入应用查看消息后，应用应该清除该好友的N条通知。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景2：用户在应用查看了某个页面的消息，对应页面的通知应及时清除。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "合规性原则",
      children: "合规性原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁止在推送中使用以下内容："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一，损害国家的尊严或者利益。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用或者变相使用中华人民共和国的国旗、国歌、国徽，军旗、军歌、军徽、国家机关、国家机关工作人员的名义或者形象。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "利用党和国家领导人的形象（含各种卡通虚拟形象），包括现任、离任或者已故党和国家领导人的形象作商业促销宣传。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "歪曲、丑化、亵渎、否定英雄烈士事迹和精神，以侮辱、诽谤或者其他方式侵害英雄烈士的姓名、肖像、名誉、荣誉的。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "妨碍社会安定，损害社会公共利益，散布谣言、扰乱经济秩序和社会秩序，宣扬恐怖主义、极端主义或者煽动实施恐怖活动、极端主义活动的。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "危害人身、财产安全，泄露个人隐私，侮辱或者诽谤他人，侵害他人名誉、隐私和其他合法权益的。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "妨碍社会公共秩序、公序良俗或者违背社会良好风尚。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用夸张标题，与标题严重不符的内容，或以庸俗和挑逗性标题吸引点击的内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "直接暴露或描写人体性部位，或者只用很小遮盖物的内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "表现或隐晦表现性行为、具有挑逗性或者侮辱性的内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "以带有性暗示、性挑逗的语言描述性行为、性过程、性方式的内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "带有侵犯个人隐私性质的走光、偷拍、漏点等内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "情色动漫、网站、图片及链接，有关部门禁止传播的色情和有伤社会风化的文字、音视频内容，包括影视的删节片段。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "带有性暗示、性挑逗等易使人产生性联想的内容，或宣扬低俗、庸俗、媚俗的内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "禁止宣扬和描述一夜情、换妻、SM等不正当交友信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "展现血腥、惊悚、残忍等致人身心不适的内容。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "含有民族、种族、宗教、性别歧视的内容，煽动民族仇恨、民族歧视，破坏民族团结的，或煽动人群歧视、地域歧视。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "破坏国家宗教政策，宣扬邪教和封建迷信。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "妨碍环境、自然资源或者文化遗产保护。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不当评述自然灾害、重大事故等灾难。遇突发事件、灾难事故，不得渲染血腥现场、过度强调案件血腥细节等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "炒作绯闻、丑闻、劣迹、娱乐八卦、明星绯闻、血腥暴力、奇闻异事、低俗恶俗等有悖社会主义核心价值观的内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "放大传播失德艺人、负面争议人物的有关言论。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "宣传可能引发未成年人模仿不安全行为和违反社会公德行为、诱导未成年人不良嗜好等的内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "未经授权泄露个人信息或数据的，包括但不限于：姓名、年龄、生日、性别、国籍、职业、工作单位、教育经历、家庭成员信息、家庭住址及相应邮政编码、位置数据等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "侵犯第三方商业秘密、版权等合法权益的内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "法律、行政法规规定禁止的其他情形，以及其他对网络生态造成不良影响的内容。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送新闻信息内容的禁止性要求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未取得互联网新闻信息服务许可的工具类应用不得推送新闻信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止推送违规采编发布、转载的新闻信息，推送新闻信息必须采用规范稿源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不得渲染炒作舆情热点，断章取义、篡改原意吸引眼球、误导网民。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "附录1-推送内容相关法律法规及规范要求参考",
      children: "附录1 推送内容相关法律法规及规范要求参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm",
        children: "《中华人民共和国个人信息保护法》"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.cac.gov.cn/2016-11/07/c_1119867116.htm",
        children: "《中华人民共和国网络安全法》"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.cac.gov.cn/2014-08/19/c_1112138363.htm",
        children: "《互联网信息服务管理办法》"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.cac.gov.cn/2019-12/20/c_1578375159509309.htm",
        children: "《网络信息内容生态治理规定》"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.cac.gov.cn/2016-06/28/c_1119122192.htm",
        children: "《移动互联网应用程序信息服务管理规定》"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.cac.gov.cn/2021-08/27/c_1631652531585631.htm",
        children: "《清朗·移动应用程序PUSH弹窗突出问题专项整治》"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "附录2-广告新闻资讯类推送相关法律法规参考",
      children: "附录2 广告、新闻资讯类推送相关法律法规参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "广告营销类推送："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.gd.gov.cn/zwgk/wjk/zcfgk/content/post_2521398.html",
        children: "《中华人民共和国广告法》"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.gov.cn/gongbao/content/2016/content_5120707.htm",
        children: "《互联网广告管理暂行办法》"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.npc.gov.cn/zgrdw/npc/xinwen/2019-05/07/content_2086834.htm",
        children: "《中华人民共和国反不正当竞争法》"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新闻资讯类推送："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.cac.gov.cn/2017-05/02/c_1120902760.htm",
        children: "《互联网新闻信息服务管理规定》"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本管理细则根据法律法规要求、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/start/agreement-0000001052728169",
        children: "《华为开发者服务协议》"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/20209",
        children: "《华为APIs使用协议》"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/20213",
        children: "《华为推送服务使用协议》"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/50104",
        children: "《应用审核指南》"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/50129",
        children: "《元服务审核指南》"
      }), "和平台体验要求制定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对第三方网站的内容，华为不承担任何责任。"
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
820807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439187-681e2764225ec60eb9f625f1a59793bb.png");

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