"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["84123"], {
312320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_test_ide_test_mock_ide_test_mock_md_042_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-test-ide-test-mock-ide-test-mock-md-042.json
var site_docs_ide_app_test_ide_test_ide_test_mock_ide_test_mock_md_042_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-test/ide-test-mock/ide-test-mock","title":"Mock能力","description":"在实际开发中，一些接口或者对象依赖于外部资源或复杂的逻辑，这些依赖在测试环境中难以复现，导致这些接口或者对象难以测试，此时，可以使用Mock能力，对这些接口或对象进行模拟。当前Instrument Test和Local Test均支持对模块进行Mock，对于调用系统模块API或外部依赖模块，使用import mock，对于本地模块，使用hamock/hypium插件包的mock接口或者import mock。","source":"@site/docs/ide-app-test/ide-test/ide-test-mock/ide-test-mock.md","sourceDirName":"ide-app-test/ide-test/ide-test-mock","slug":"/ide-app-test/ide-test/ide-test-mock/","permalink":"/harmonyos-docs-site/ide-app-test/ide-test/ide-test-mock/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Mock能力","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-test-mock","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"Local Test","permalink":"/harmonyos-docs-site/ide-app-test/ide-test/ide-code-test/ide-local-test/"},"next":{"title":"黑盒覆盖率测试","permalink":"/harmonyos-docs-site/ide-app-test/ide-test/ide-ui-test/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-test/ide-test-mock/ide-test-mock.md


const frontMatter = {
	title: 'Mock能力',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-test-mock',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'Mock能力';

const assets = {

};



const toc = [{
  "value": "系统模块/依赖模块Mock",
  "id": "系统模块依赖模块mock",
  "level": 2
}, {
  "value": "本地模块Mock",
  "id": "本地模块mock",
  "level": 2
}, {
  "value": "使用hamock/hypium插件包的mock接口",
  "id": "使用hamockhypium插件包的mock接口",
  "level": 3
}, {
  "value": "使用import mock",
  "id": "使用import-mock",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "mock能力",
        children: "Mock能力"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实际开发中，一些接口或者对象依赖于外部资源或复杂的逻辑，这些依赖在测试环境中难以复现，导致这些接口或者对象难以测试，此时，可以使用Mock能力，对这些接口或对象进行模拟。当前Instrument Test和Local Test均支持对模块进行Mock，对于调用系统模块API或外部依赖模块，使用import mock，对于本地模块，使用hamock/hypium插件包的mock接口或者import mock。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(360164)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅API 11及以上版本的Stage模型工程支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统模块依赖模块mock",
      children: "系统模块/依赖模块Mock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过import mock对系统模块API或依赖模块的方法进行Mock，在mock-config.json5配置文件中定义目标模块和Mock实现代码文件的映射关系，运行时import目标模块都将指向Mock实现代码。以系统API bluetoothManager为例，具体实现如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在src/mock目录下新建一个ArkTS文件，例如bluetooth_manager.mock.ets，在这个文件内定义目标模块的Mock实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/mock/bluetooth_manager.mock.ets\nenum BluetoothState {\n  /** Indicates the local Bluetooth is off */\n  STATE_OFF = 0,\n  /** Indicates the local Bluetooth is turning on */\n  STATE_TURNING_ON = 1,\n  /** Indicates the local Bluetooth is on, and ready for use */\n  STATE_ON = 2,\n  /** Indicates the local Bluetooth is turning off */\n  STATE_TURNING_OFF = 3,\n  /** Indicates the local Bluetooth is turning LE mode on */\n  STATE_BLE_TURNING_ON = 4,\n  /** Indicates the local Bluetooth is in LE only mode */\n  STATE_BLE_ON = 5,\n  /** Indicates the local Bluetooth is turning off LE only mode */\n  STATE_BLE_TURNING_OFF = 6\n}\ninterface BluetoothInfo {\n  state: number\n}\nconst MockBluetoothManager: Record<string, Object> = {\n  'getBluetoothInfo': () => {\n    return { state : BluetoothState.STATE_BLE_TURNING_ON } as BluetoothInfo;\n  },\n};\nexport default MockBluetoothManager;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Mock配置文件src/mock/mock-config.json5中定义目标模块与Mock实现的映射关系。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"@ohos.enterprise.bluetoothManager\": {  // 待替换的模块名\n  \"source\": \"src/mock/bluetooth_manager.mock.ets\"  // Mock代码的路径，相对于模块根目录\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在测试文件中编写如下代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// bluetoothManager.test.ets\nimport { describe, it, expect } from '@ohos/hypium';\nimport { bluetoothManager } from '@kit.MDMKit';\n\nexport default function mock_system_api() {   \n  describe('mock_system_api', () => {\n    /* mock系统API */\n    it('mock_system_api', 0, () => {\n      let bluetoothInfo = bluetoothManager.getBluetoothInfo({\n        bundleName: \"com.example.myapplication\"\n      })\n      expect(bluetoothInfo.state).assertEqual(4)\n    });\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果测试文件是手动创建的，需要将用例类mock_system_api添加到List.test.ets文件中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import mock_system_api from './bluetoothManager.test';\n\nexport default function testsuite() {\n  mock_system_api();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行测试，用例通过。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "本地模块mock",
      children: "本地模块Mock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有两种方式可以对本地模块进行Mock，一是使用hamock/hypium插件包的mock接口，二是使用import mock。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用hamockhypium插件包的mock接口",
      children: "使用hamock/hypium插件包的mock接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下例子通过mock接口模拟本地模块的某个方法，关于Mock的更多说明可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/testfwk_arkxtest#mock%E8%83%BD%E5%8A%9B",
        children: "mock能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在src/main/ets目录下新建一个ArkTS文件，例如ClassForMock.ets，并在其中导出一个类。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export class ClassForMock {\n  constructor() {\n  }\n  method_1(arg: string) {\n    return '888888';\n  }\n  method_2(arg: string) {\n    return '999999';\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在测试文件中编写如下代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// afterReturnTest.test.ets\nimport { describe, expect, it, MockKit, when } from '@ohos/hypium';\nimport { ClassForMock } from '../../../main/ets/ClassForMock';\n\nexport default function afterReturnTest() {\n  describe('afterReturnTest', () => {\n    it('afterReturnTest', 0, () => {\n      console.info(\"it begin\");\n      // 1.创建一个mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 2.定义类ClassForMock，里面两个函数，然后创建一个对象classForMock\n      let classForMock: ClassForMock = new ClassForMock();\n      // 3.进行mock操作,比如需要对ClassForMock类的method_1函数进行mock\n      let mockFunc: Function = mocker.mockFunc(classForMock, classForMock.method_1);\n      // 4.期望classForMock.method_1函数被mock后, 以'test'为入参时调用函数返回结果'1'\n      when(mockFunc)('test').afterReturn('1');\n      // 5.对mock后的函数进行断言，看是否符合预期\n      // 执行成功案例，参数为'test'\n      expect(classForMock.method_1('test')).assertEqual('1'); // 执行通过\n    })\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果测试文件是手动创建的，需要将用例类afterReturnTest添加到List.test.ets文件中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import afterReturnTest from './afterReturnTest.test';\n\nexport default function testsuite() {\n  afterReturnTest();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行测试，用例通过。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用import-mock",
      children: "使用import mock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用import mock对本地模块进行Mock，操作步骤和系统模块/依赖模块的Mock类似，在mock-config.json5配置文件中定义目标模块和Mock实现代码文件的映射关系，运行时import目标模块都将指向Mock实现代码。以下例子对本地模块entry/src/main/ets/common/calc.ets中的sum函数进行Mock。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在src/mock目录下新建一个common目录并创建一个ArkTS文件，例如calc.mock.ets，在这个文件内定义目标模块的Mock实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/mock/common/calc.mock.ets\nexport function sum() {\n  return \"this is mock sum\";\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "calc.ets的原始实现如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/common/calc.ets\nexport function sum() {\n  return 1;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Mock配置文件src/mock/mock-config.json5中定义目标模块与Mock实现的映射关系。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"common/calc.ets\": { // 本地模块只支持ets/xxx的相对路径，并需明确文件后缀\n    \"source\": \"src/mock/common/calc.mock.ets\"  // Mock代码的路径，相对于模块根目录\n  },\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在测试文件中编写如下代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// test_mock_local_method.test.ets\nimport { describe, it, expect } from '@ohos/hypium'\nimport { sum } from '../../../main/ets/common/calc';\n\nexport default function test_mock_local_method() {\n  describe('test_mock_local_method', () => {\n    it(\"test_mock_local_method\", 0, () => {\n      expect(sum()).assertEqual(\"this is mock sum\")\n    })\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果测试文件是手动创建的，需要将用例类test_mock_local_method添加到List.test.ets文件中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import test_mock_local_method from './test_mock_local_method.test';\n\nexport default function testsuite() {\n  test_mock_local_method();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行测试，用例通过。"
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
360164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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