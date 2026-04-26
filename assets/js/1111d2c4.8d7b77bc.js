"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["982425"], {
517899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_device_base_h_capi_native_audio_device_base_h_md_111_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-audio-api-audio-c-audio-headerfile-capi-native-audio-device-base-h-capi-native-audio-device-base-h-md-111.json
var site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_device_base_h_capi_native_audio_device_base_h_md_111_namespaceObject = JSON.parse('{"id":"audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h","title":"native_audio_device_base.h","description":"概述","source":"@site/docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h.md","sourceDirName":"audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h","slug":"/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"native_audio_device_base.h","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-device-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-audio-device-base-h"},"sidebar":"ref","previous":{"title":"native_audio_common.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h"},"next":{"title":"native_audio_resource_manager.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-resource-manager-h/capi-native-audio-resource-manager-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h.md


const frontMatter = {
	title: 'native_audio_device_base.h',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-device-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-audio-device-base-h'
};
const contentTitle = 'native_audio_device_base.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_AudioDevice_ChangeType",
  "id": "oh_audiodevice_changetype",
  "level": 3
}, {
  "value": "OH_AudioDevice_Role",
  "id": "oh_audiodevice_role",
  "level": 3
}, {
  "value": "OH_AudioDevice_Type",
  "id": "oh_audiodevice_type",
  "level": 3
}, {
  "value": "OH_AudioDevice_Flag",
  "id": "oh_audiodevice_flag",
  "level": 3
}, {
  "value": "OH_AudioDevice_Usage",
  "id": "oh_audiodevice_usage",
  "level": 3
}, {
  "value": "OH_AudioDevice_BlockStatus",
  "id": "oh_audiodevice_blockstatus",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AudioDeviceDescriptor_GetDeviceRole()",
  "id": "oh_audiodevicedescriptor_getdevicerole",
  "level": 3
}, {
  "value": "OH_AudioDeviceDescriptor_GetDeviceType()",
  "id": "oh_audiodevicedescriptor_getdevicetype",
  "level": 3
}, {
  "value": "OH_AudioDeviceDescriptor_GetDeviceId()",
  "id": "oh_audiodevicedescriptor_getdeviceid",
  "level": 3
}, {
  "value": "OH_AudioDeviceDescriptor_GetDeviceName()",
  "id": "oh_audiodevicedescriptor_getdevicename",
  "level": 3
}, {
  "value": "OH_AudioDeviceDescriptor_GetDeviceAddress()",
  "id": "oh_audiodevicedescriptor_getdeviceaddress",
  "level": 3
}, {
  "value": "OH_AudioDeviceDescriptor_GetDeviceSampleRates()",
  "id": "oh_audiodevicedescriptor_getdevicesamplerates",
  "level": 3
}, {
  "value": "OH_AudioDeviceDescriptor_GetDeviceChannelCounts()",
  "id": "oh_audiodevicedescriptor_getdevicechannelcounts",
  "level": 3
}, {
  "value": "OH_AudioDeviceDescriptor_GetDeviceDisplayName()",
  "id": "oh_audiodevicedescriptor_getdevicedisplayname",
  "level": 3
}, {
  "value": "OH_AudioDeviceDescriptor_GetDeviceEncodingTypes()",
  "id": "oh_audiodevicedescriptor_getdeviceencodingtypes",
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
        id: "native_audio_device_baseh",
        children: "native_audio_device_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频设备参数的类型以及获取每个设备参数的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohaudio.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ohaudio/native_audio_device_base.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Audio.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio",
        children: "OHAudio"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioDeviceDescriptorArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明音频设备描述符数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioDeviceDescriptor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明音频设备描述符。该实例用于获取更多音频设备详细信息属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevice_changetype",
              children: "OH_AudioDevice_ChangeType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioDevice_ChangeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频设备更改类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevice_role",
              children: "OH_AudioDevice_Role"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioDevice_Role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频设备角色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevice_type",
              children: "OH_AudioDevice_Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioDevice_Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevice_flag",
              children: "OH_AudioDevice_Flag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioDevice_Flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频设备标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevice_usage",
              children: "OH_AudioDevice_Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioDevice_Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义可获取的设备种类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevice_blockstatus",
              children: "OH_AudioDevice_BlockStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioDevice_BlockStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明音频设备的堵塞状态。默认情况下，音频设备被视为未堵塞。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevicedescriptor_getdevicerole",
              children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceRole(OH_AudioDeviceDescriptor *audioDeviceDescriptor, OH_AudioDevice_Role *deviceRole)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标音频设备描述符的设备角色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevicedescriptor_getdevicetype",
              children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceType(OH_AudioDeviceDescriptor *audioDeviceDescriptor, OH_AudioDevice_Type *deviceType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标音频设备描述符的设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevicedescriptor_getdeviceid",
              children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceId(OH_AudioDeviceDescriptor *audioDeviceDescriptor, uint32_t *id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标音频设备描述符的设备id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevicedescriptor_getdevicename",
              children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceName(OH_AudioDeviceDescriptor *audioDeviceDescriptor, char **name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标音频设备描述符的设备名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevicedescriptor_getdeviceaddress",
              children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceAddress(OH_AudioDeviceDescriptor *audioDeviceDescriptor, char **address)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标音频设备描述符的设备地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevicedescriptor_getdevicesamplerates",
              children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceSampleRates(OH_AudioDeviceDescriptor *audioDeviceDescriptor, uint32_t **sampleRates, uint32_t *size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标音频设备描述符的采样率数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevicedescriptor_getdevicechannelcounts",
              children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceChannelCounts(OH_AudioDeviceDescriptor *audioDeviceDescriptor, uint32_t **channelCounts, uint32_t *size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标音频设备描述符的设备通道计数数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevicedescriptor_getdevicedisplayname",
              children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceDisplayName(OH_AudioDeviceDescriptor *audioDeviceDescriptor, char **displayName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标音频设备描述符的显示名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevicedescriptor_getdeviceencodingtypes",
              children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceEncodingTypes(OH_AudioDeviceDescriptor *audioDeviceDescriptor, OH_AudioStream_EncodingType **encodingTypes, uint32_t *size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标音频设备描述符的编码类型数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevice_changetype",
      children: "OH_AudioDevice_ChangeType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioDevice_ChangeType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频设备更改类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_CHANGE_TYPE_CONNECT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_CHANGE_TYPE_DISCONNECT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备断开。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevice_role",
      children: "OH_AudioDevice_Role"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioDevice_Role\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频设备角色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_ROLE_INPUT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_ROLE_OUTPUT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevice_type",
      children: "OH_AudioDevice_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioDevice_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_INVALID = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_EARPIECE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内置听筒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_SPEAKER = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内置扬声器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_WIRED_HEADSET = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带话筒的耳机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_WIRED_HEADPHONES = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无话筒的耳机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_BLUETOOTH_SCO = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用面向同步连接链路（SCO）的蓝牙设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_BLUETOOTH_A2DP = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用高级音频分布模式（A2DP）的蓝牙设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_MIC = 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内置麦克风。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_USB_HEADSET = 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB音频耳机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_DISPLAY_PORT = 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示端口（DisplayPort）设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_REMOTE_CAST = 24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频被系统应用投送到其他远程的设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_USB_DEVICE = 25"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["USB设备（不包含USB耳机）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_ACCESSORY = 26"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["附件设备，如遥控器上的麦克风。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 19"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_HDMI = 27"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HDMI设备（例如HDMI、ARC、eARC等）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 19"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_LINE_DIGITAL = 28"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["有线数字设备（例如S/PDIF等）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 19"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_HEARING_AID = 30"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["助听器设备。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_NEARLINK = 31"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["星闪设备。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_TYPE_DEFAULT = 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认设备类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevice_flag",
      children: "OH_AudioDevice_Flag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioDevice_Flag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频设备标志。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_FLAG_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_FLAG_OUTPUT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_FLAG_INPUT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_FLAG_ALL = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevice_usage",
      children: "OH_AudioDevice_Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioDevice_Usage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义可获取的设备种类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_USAGE_MEDIA_OUTPUT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体输出设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_USAGE_MEDIA_INPUT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体输入设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_USAGE_MEDIA_ALL = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有媒体设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_USAGE_CALL_OUTPUT = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通话输出设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_USAGE_CALL_INPUT = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通话输入设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_USAGE_CALL_ALL = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有通话设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevice_blockstatus",
      children: "OH_AudioDevice_BlockStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioDevice_BlockStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明音频设备的堵塞状态。默认情况下，音频设备被视为未堵塞。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_UNBLOCKED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频设备未被堵塞。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DEVICE_BLOCKED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频设备被堵塞。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevicedescriptor_getdevicerole",
      children: "OH_AudioDeviceDescriptor_GetDeviceRole()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceRole(OH_AudioDeviceDescriptor *audioDeviceDescriptor,OH_AudioDevice_Role *deviceRole)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标音频设备描述符的设备角色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符。通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), " 或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevice_role",
              children: "OH_AudioDevice_Role"
            }), " *deviceRole"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备角色指针。将设置设备角色值的变量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevice_role",
              children: "OH_AudioDevice_Role"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS或AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevicedescriptor_getdevicetype",
      children: "OH_AudioDeviceDescriptor_GetDeviceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceType(OH_AudioDeviceDescriptor *audioDeviceDescriptor,OH_AudioDevice_Type *deviceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标音频设备描述符的设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符。通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), " 或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodevice_type",
              children: "OH_AudioDevice_Type"
            }), " *deviceType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备类型指针。将设置设备类型值的变量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_type",
              children: "OH_AudioDevice_Type"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS或AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevicedescriptor_getdeviceid",
      children: "OH_AudioDeviceDescriptor_GetDeviceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceId(OH_AudioDeviceDescriptor *audioDeviceDescriptor,uint32_t *id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标音频设备描述符的设备id。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符。通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), " 或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备id指针，将设置设备角色值的变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS 或 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevicedescriptor_getdevicename",
      children: "OH_AudioDeviceDescriptor_GetDeviceName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceName(OH_AudioDeviceDescriptor *audioDeviceDescriptor,char **name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标音频设备描述符的设备名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符。通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), " 或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **name"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备名称指针，将设置设备名称值的变量。  不要单独释放音频设备名称指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "，以便在不再使用时释放所有DeviceDescriptor数组。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS或AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevicedescriptor_getdeviceaddress",
      children: "OH_AudioDeviceDescriptor_GetDeviceAddress()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceAddress(OH_AudioDeviceDescriptor *audioDeviceDescriptor,char **address)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标音频设备描述符的设备地址。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符。通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), " 或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **address"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备MAC地址指针，将设置设备MAC地址值的变量。  不要单独释放音频设备MAC地址指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "，以便在不再使用时释放所有DeviceDescriptor数组。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS或AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevicedescriptor_getdevicesamplerates",
      children: "OH_AudioDeviceDescriptor_GetDeviceSampleRates()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceSampleRates(OH_AudioDeviceDescriptor *audioDeviceDescriptor,uint32_t **sampleRates, uint32_t *size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标音频设备描述符的采样率数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符。通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), " 或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t **sampleRates"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置采样率数组值的数组指针变量。  不要单独释放音频设备采样率指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "，以便在不再使用时释放所有DeviceDescriptor数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置采样率大小值的指针变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS或AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevicedescriptor_getdevicechannelcounts",
      children: "OH_AudioDeviceDescriptor_GetDeviceChannelCounts()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceChannelCounts(OH_AudioDeviceDescriptor *audioDeviceDescriptor,uint32_t **channelCounts, uint32_t *size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标音频设备描述符的设备通道计数数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符。通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), " 或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t **channelCounts"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数组指针变量，该变量将设置通道计数数组值。  不要单独释放音频设备通道数指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "，以便在不再使用时释放所有DeviceDescriptor数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置通道计数大小值的指针变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS或AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevicedescriptor_getdevicedisplayname",
      children: "OH_AudioDeviceDescriptor_GetDeviceDisplayName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceDisplayName(OH_AudioDeviceDescriptor *audioDeviceDescriptor,char **displayName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标音频设备描述符的显示名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符。通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), " 或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **displayName"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置显示名称值的指针变量。  不要单独释放音频设备显示名称指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "，以便在不再使用时释放所有DeviceDescriptor数组。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS或AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodevicedescriptor_getdeviceencodingtypes",
      children: "OH_AudioDeviceDescriptor_GetDeviceEncodingTypes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioDeviceDescriptor_GetDeviceEncodingTypes(OH_AudioDeviceDescriptor *audioDeviceDescriptor,OH_AudioStream_EncodingType **encodingTypes, uint32_t *size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标音频设备描述符的编码类型数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符。通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), " 或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_encodingtype",
              children: "OH_AudioStream_EncodingType"
            }), " **encodingTypes"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备编码类型，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_encodingtype",
              children: "OH_AudioStream_EncodingType"
            }), "。  不要单独释放音频设备编码类型指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "，以便在不再使用时释放所有DeviceDescriptor数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编码类型大小值的指针变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS或AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM。"
          })]
        })
      })]
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