"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["89511"], {
569307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_distributed_fs_file_copy_across_devices_file_copy_across_devices_md_6fe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-distributed-fs-file-copy-across-devices-file-copy-across-devices-md-6fe.json
var site_docs_core_file_kit_distributed_fs_file_copy_across_devices_file_copy_across_devices_md_6fe_namespaceObject = JSON.parse('{"id":"core-file-kit/distributed-fs/file-copy-across-devices/file-copy-across-devices","title":"跨设备文件拷贝","description":"分布式文件系统为应用提供了跨设备文件拷贝的能力，开发者可以通过基础文件接口进行跨设备拷贝文件。例如：多设备数据流转的场景，设备组网互联之后，设备A上的应用可将沙箱文件拷贝到设备A的分布式目录下。设备B在粘贴时，从B设备的分布式目录下将文件拷贝到对应的沙箱文件中。","source":"@site/docs/core-file-kit/distributed-fs/file-copy-across-devices/file-copy-across-devices.md","sourceDirName":"core-file-kit/distributed-fs/file-copy-across-devices","slug":"/core-file-kit/distributed-fs/file-copy-across-devices/","permalink":"/harmonyos-docs-site/core-file-kit/distributed-fs/file-copy-across-devices/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"跨设备文件拷贝","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/file-copy-across-devices","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨设备文件共享和访问","permalink":"/harmonyos-docs-site/core-file-kit/distributed-fs/file-access-across-devices/"},"next":{"title":"Data Augmentation Kit简介","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/distributed-fs/file-copy-across-devices/file-copy-across-devices.md


const frontMatter = {
	title: '跨设备文件拷贝',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/file-copy-across-devices',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '跨设备文件拷贝';

const assets = {

};



const toc = [{
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "跨设备文件拷贝",
        children: "跨设备文件拷贝"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分布式文件系统为应用提供了跨设备文件拷贝的能力，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
        children: "基础文件接口"
      }), "进行跨设备拷贝文件。例如：多设备数据流转的场景，设备组网互联之后，设备A上的应用可将沙箱文件拷贝到设备A的分布式目录下。设备B在粘贴时，从B设备的分布式目录下将文件拷贝到对应的沙箱文件中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成分布式组网。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将需要跨设备访问的两个设备登录同一账号，保证设备蓝牙和Wi-Fi功能开启，蓝牙无需互连，Wi-Fi无需接入同一个局域网。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "授权分布式数据同步权限。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分布式数据同步权限的授权方式为user_grant，因此需要调用requestPermissionsFromUser接口，以动态弹窗的方式向用户申请授权。示例中的context的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
            children: "获取UIAbility的上下文信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, abilityAccessCtrl } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let atManager = abilityAccessCtrl.createAtManager();\ntry {\n  // 以动态弹窗的方式向用户申请授权\n  atManager.requestPermissionsFromUser(context, ['ohos.permission.DISTRIBUTED_DATASYNC']).then((result) => {\n    console.info(`request permission result: ${JSON.stringify(result)}`);\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to request permissions from user. Code: ${err.code}, message: ${err.message}`);\n  })\n} catch (error) {\n  let err: BusinessError = error as BusinessError;\n  console.error(`Catch err. Failed to request permissions from user. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行跨设备文件拷贝操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一应用在不同设备之间实现跨设备文件拷贝，只需要将对应的文件放在应用沙箱的分布式目录即可。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将A设备的待拷贝沙箱文件拷贝到A设备的分布式目录下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileIo } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileUri } from '@kit.CoreFileKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let pathDir: string = context.filesDir;\nlet distributedPathDir: string = context.distributedFilesDir;\n// 待拷贝文件沙箱路径\nlet filePath: string = pathDir + '/src.txt';\ntry {\n  // 准备待拷贝沙箱文件\n  let file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);\n  fileIo.writeSync(file.fd, 'Create file success');\n  fileIo.closeSync(file);\n} catch (error) {\n  console.error(`Failed to createFile. Code: ${error.code}, message: ${error.message}`);\n}\n\n// 获取待拷贝源文件uri\nlet srcUri = fileUri.getUriFromPath(filePath);\n// 获取目标路径(分布式目录)的uri\nlet destUri: string = fileUri.getUriFromPath(distributedPathDir + '/src.txt');\ntry {\n  // 将沙箱路径下的源文件拷贝到目标分布式目录下\n  fileIo.copy(srcUri, destUri).then(()=>{\n    console.info(`Succeeded in copying---. `);\n    console.info(`src: ${srcUri} dest: ${destUri}`);\n  }).catch((error: BusinessError)=>{\n    let err: BusinessError = error as BusinessError;\n    console.error(`Failed to copy. Code: ${err.code}, message: ${err.message}`);\n  })\n} catch (error) {\n  console.error(`Catch err. Failed to copy. Code: ${error.code}, message: ${error.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "B设备在获取A设备沙箱文件时，从B设备的分布式目录下将对应的文件拷贝走，以此完成跨设备拷贝。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileIo } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileUri } from '@kit.CoreFileKit';\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ···\nlet pathDir: string = context.filesDir;\nlet distributedPathDir: string = context.distributedFilesDir;\n// 待拷贝文件的目标路径(沙箱路径)\nlet destPath: string = pathDir + '/dest.txt';\n// 获取目标路径uri\nlet destUri = fileUri.getUriFromPath(destPath);\n\n// 拷贝源文件路径(分布式目录)\nlet srcPath = distributedPathDir + '/src.txt';\n// 获取源路径uri\nlet srcUri: string = fileUri.getUriFromPath(srcPath);\n\n// 定义拷贝回调\nlet progressListener: fileIo.ProgressListener = (progress: fileIo.Progress) => {\n  console.info(`progressSize: ${progress.processedSize}, totalSize: ${progress.totalSize}`);\n};\nlet options: fileIo.CopyOptions = {\n  'progressListener' : progressListener\n};\n// 通过分布式设备管理的接口获取设备A的networkId信息\nlet dmInstance = distributedDeviceManager.createDeviceManager('com.example.hap');\nlet deviceInfoList: distributedDeviceManager.DeviceBasicInfo[] = dmInstance.getAvailableDeviceListSync();\nif (deviceInfoList && deviceInfoList.length > 0) {\n  console.info(`success to get available device list`);\n  let networkId = deviceInfoList[0].networkId; // 这里只是两个设备连接，列表中首个即为A设备的networkId\n  // 定义访问分布式目录的回调\n  let listeners : fileIo.DfsListeners = {\n    onStatus: (networkId: string, status: number): void => {\n      console.error(`Failed to access public directory，${status}`);\n    }\n  };\n  // 开始跨设备文件拷贝\n  fileIo.connectDfs(networkId, listeners).then(()=>{\n    try {\n      // 将分布式目录下的文件拷贝到其他沙箱路径下\n      fileIo.copy(srcUri, destUri, options).then(()=>{\n        console.info(`Succeeded in copying from distributed path`);\n        console.info(`src: ${srcUri} dest: ${destUri}`);\n        fileIo.unlinkSync(srcPath); // 拷贝完成后清理分布式目录下的临时文件\n      }).catch((error: BusinessError)=>{\n        let err: BusinessError = error as BusinessError;\n        console.error(`Failed to copy. Code: ${err.code}, message: ${err.message}`);\n      })\n    } catch (error) {\n      console.error(`Catch err. Failed to copy. Code: ${error.code}, message: ${error.message}`);\n    }\n  }).catch((error: BusinessError) => {\n    let err: BusinessError = error as BusinessError;\n    console.error(`Failed to connect dfs. Code: ${err.code}, message: ${err.message}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "跨设备文件拷贝完成，断开链路。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit'\nimport { fileIo } from '@kit.CoreFileKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取设备A的networkId\n// ···\nlet dmInstance = distributedDeviceManager.createDeviceManager('com.example.hap');\nlet deviceInfoList: distributedDeviceManager.DeviceBasicInfo[] = dmInstance.getAvailableDeviceListSync();\nif (deviceInfoList && deviceInfoList.length > 0) {\n  console.info(`Success to get available device list`);\n  let networkId = deviceInfoList[0].networkId;\n  // 关闭跨设备文件访问\n  fileIo.disconnectDfs(networkId).then(() => {\n    console.info(`Success to disconnect dfs`);\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to disconnect dfs. Code: ${err.code}, message: ${err.message}`);\n  })\n}\n"
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