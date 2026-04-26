"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["605528"], {
485733(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ime_kit_inputmethod_application_guide_inputmethod_application_guide_md_817_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ime-kit-inputmethod-application-guide-inputmethod-application-guide-md-817.json
var site_docs_ime_kit_inputmethod_application_guide_inputmethod_application_guide_md_817_namespaceObject = JSON.parse('{"id":"ime-kit/inputmethod-application-guide/inputmethod-application-guide","title":"实现一个输入法应用","description":"InputMethodExtensionAbility提供了onCreate()和onDestroy()生命周期回调，根据需要重写对应的回调方法。InputMethodExtensionAbility的生命周期如下：","source":"@site/docs/ime-kit/inputmethod-application-guide/inputmethod-application-guide.md","sourceDirName":"ime-kit/inputmethod-application-guide","slug":"/ime-kit/inputmethod-application-guide/","permalink":"/harmonyos-docs-site/ime-kit/inputmethod-application-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"实现一个输入法应用","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputmethod-application-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"IME Kit简介","permalink":"/harmonyos-docs-site/ime-kit/ime-kit-intro/"},"next":{"title":"在自绘编辑框中使用输入法","permalink":"/harmonyos-docs-site/ime-kit/use-inputmethod-in-custom-edit-box/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ime-kit/inputmethod-application-guide/inputmethod-application-guide.md


const frontMatter = {
	title: '实现一个输入法应用',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputmethod-application-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '实现一个输入法应用';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "文件介绍",
  "id": "文件介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "示例效果图",
  "id": "示例效果图",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "实现一个输入法应用",
        children: "实现一个输入法应用"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-extension-ability/js-apis-inputmethod-extension-ability",
        children: "InputMethodExtensionAbility"
      }), "提供了onCreate()和onDestroy()生命周期回调，根据需要重写对应的回调方法。InputMethodExtensionAbility的生命周期如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "onCreate()"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "服务被首次创建时触发该回调，开发者可以在此进行一些初始化的操作，例如注册公共事件监听等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(606463)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果服务已创建，再次启动该InputMethodExtensionAbility不会触发onCreate()回调。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "onDestroy()"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再使用服务且准备将该实例销毁时，触发该回调。开发者可以在该回调中清理资源，如注销监听等。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在实现一个输入法应用时，需要在DevEco Studio工程中新建一个InputMethodExtensionAbility，具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程Module对应的ets目录下，右键选择“New > Directory”，新建一个目录，并命名为InputMethodExtensionAbility。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在InputMethodExtensionAbility目录下，右键选择“New > File”，新建四个文件，分别为KeyboardController.ets、InputMethodService.ets、Index.ets以及KeyboardKeyData.ets。目录如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/src/main/\n├── ets/InputMethodExtensionAbility\n│       └──model/KeyboardController.ets      # 显示键盘\n│       └──InputMethodService.ets        # 自定义类继承InputMethodExtensionAbility并加上需要的生命周期回调\n│       └──pages\n│         └── Index.ets            # 绘制键盘，添加输入删除功能\n│         └── KeyboardKeyData.ets          # 键盘属性定义\n├── resources/base/profile/main_pages.json\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件介绍",
      children: "文件介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "InputMethodService.ets文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在InputMethodService.ets文件中，增加导入InputMethodExtensionAbility的依赖包，自定义类继承InputMethodExtensionAbility并加上需要的生命周期回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { InputMethodExtensionAbility } from '@kit.IMEKit';\nimport Log from '../model/Log';\nimport { keyboardController } from '../InputMethodExtensionAbility/model/KeyboardController';\nimport { Want } from '@kit.AbilityKit';\n\nconst TAG: string = 'ServiceExtAbility->';\n\nexport default class ServiceExtAbility extends InputMethodExtensionAbility {\n  onCreate(want: Want): void {\n    this.addLog(`onCreate want: ${want.abilityName}`);\n    keyboardController.onCreate(this.context);\n  }\n\n  onDestroy(): void {\n    this.addLog('onDestroy');\n    keyboardController.onDestroy();\n  }\n\n  addLog(message: string): void {\n    Log.showInfo(TAG, `kikaInput-new: ${message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["KeyboardController.ets文件。KeyboardController中除创建输入法窗口，设置输入法事件监听，实现文本插入、删除之外，还可以获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#getsystempanelcurrentinsets21",
            children: "输入法键盘与系统面板的偏移区域"
          }), "，输入法系统面板在不同设备上存在差异，当设备有系统面板时，输入法软键盘相对系统面板的偏移区域如图所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(811664)/* ["default"] */.A) + "",
            width: "949",
            height: "596"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class KeyboardController {\n  private barPosition: number = 0;\n  private keyCodes: Array<number> = [];\n  private mContext: InputMethodExtensionContext | undefined;\n  private panel: inputMethodEngine.Panel | undefined;\n  private isSpecialKeyPress: boolean = false;\n  private isKeyboardShow: boolean = false;\n  private inputHandle: InputHandler = InputHandler.getInstance();\n  private mKeyboardDelegate: inputMethodEngine.KeyboardDelegate | undefined;\n\n  constructor() {\n    this.mContext = undefined;\n    this.panel = undefined;\n    this.mKeyboardDelegate = undefined;\n  }\n\n  public onCreate(context: InputMethodExtensionContext): void {\n    this.mContext = context;\n    this.inputHandle.addLog('onCreate');\n    this.initWindow();\n    this.registerListener();\n  }\n\n  public onDestroy(): void {\n    this.inputHandle.addLog('onDestroy');\n    this.unRegisterListener();\n    this.destroyPanel();\n  }\n\n  private initWindow(): void {\n    if (this.mContext === undefined) {\n      return;\n    }\n    this.inputHandle.addLog('initWindow');\n    let dis: display.Display | undefined = undefined;\n    try {\n      dis = display.getDefaultDisplaySync();\n    } catch (err) {\n      let error = err as BusinessError;\n      Log.showError(TAG, `getDefaultDisplaySync catch error: ${error.code} ${error.message}`);\n      return;\n    }\n    if (dis == undefined) {\n      return;\n    }\n    this.inputHandle.addLog(\"initWindow-oncall display\");\n    let dWidth = dis.width;\n    let dHeight = dis.height;\n    let navigationBar_height = NAVIGATIONBAR_HEIGHT_DEFAULT;\n    let keyHeightRate = KEYBOARD_HEIGHT_RATE_DEFAULT;\n    AppStorage.setOrCreate('windowWidth', dis.width);\n    AppStorage.setOrCreate('windowHeight', dis.height);\n    let isLandscape = false;\n    let isRkDevice = false;\n    if (dis.width > dis.height) {\n      isLandscape = true;\n      AppStorage.setOrCreate('isLandscape', true);\n    } else {\n      AppStorage.setOrCreate('isLandscape', false);\n    }\n    if (dWidth === DEVICE_PHONE.width && dHeight === DEVICE_PHONE.height) {\n      navigationBar_height = 0;\n      keyHeightRate = KEYBOARD_HEIGHT_RATE_PHONE;\n    } else if (dWidth === DEVICE_PHONE.height && dHeight === DEVICE_PHONE.width) {\n      navigationBar_height = 0;\n      keyHeightRate = KEYBOARD_HEIGHT_RATE_PHONE_LAND;\n    } else if (dWidth === DEVICE_RK.width && dHeight === DEVICE_RK.height) {\n      navigationBar_height = KEYBOARD_HEIGHT_RATE_DEFAULT;\n      AppStorage.setOrCreate('isRkDevice', true);\n      isRkDevice = true;\n    } else if (dWidth === DEVICE_BIG.width && dHeight === DEVICE_BIG.height) {\n      navigationBar_height = 0;\n      keyHeightRate = KEYBOARD_HEIGHT_RATE_BIG_LAND;\n    } else if (dWidth === DEVICE_BIG.height && dHeight === DEVICE_BIG.width) {\n      navigationBar_height = 0;\n      keyHeightRate = KEYBOARD_HEIGHT_RATE_BIG;\n    }\n    let keyHeight = dHeight * keyHeightRate;\n    this.barPosition = dHeight - keyHeight - navigationBar_height;\n    this.inputHandle.addLog(`initWindow-dWidth = ${dWidth};dHeight = ${dHeight};keyboard height = ${keyHeight};;navibar height = navigationBar_height`);\n    this.inputHandle.addLog(`initWindow-deviceType = ${deviceInfo.deviceType}`);\n    let panelInfo: inputMethodEngine.PanelInfo = {\n      type: inputMethodEngine.PanelType.SOFT_KEYBOARD,\n      flag: inputMethodEngine.PanelFlag.FLG_FIXED\n    }\n    let inputStyle = StyleConfiguration.getInputStyle(isLandscape, isRkDevice, deviceInfo.deviceType);\n    AppStorage.setOrCreate('inputStyle', inputStyle);\n    inputMethodAbility.createPanel(this.mContext, panelInfo).then((panel: inputMethodEngine.Panel) => {\n      this.panel = panel;\n      panel.resize(dWidth, keyHeight).then(() => {\n        panel.setUiContent('InputMethodExtensionAbility/pages/Index').then(() => {\n          this.inputHandle.addLog('loadContent finished');\n        })\n      }).catch((err: BusinessError) => {\n        Log.showError(TAG, `Failed to setUiContent: ${err.code} ${err.message}`);\n      });\n    }).catch((err: BusinessError) => {\n      Log.showError(TAG, `Failed to resize: ${err.code} ${err.message}`);\n    });\n  }\n\n  private destroyPanel(): void {\n    this.inputHandle.addLog('destroyPanel');\n    if (this.panel) {\n      inputMethodAbility.destroyPanel(this.panel).then(() => {\n        this.inputHandle.addLog('Succeeded in destroyPanel.');\n      }).catch((err: BusinessError) => {\n        Log.showError(TAG, `Failed to destroyPanel: ${err.code} ${err.message}`);\n      });\n    }\n  }\n\n  private resizePanel(): void {\n    this.inputHandle.addLog('resizeWindow');\n    let dis: display.Display | undefined = undefined;\n    try {\n      dis = display.getDefaultDisplaySync();\n    } catch (err) {\n      let error = err as BusinessError;\n      Log.showError(TAG, `getDefaultDisplaySync catch error: ${error.code} ${error.message}`);\n      return;\n    }\n    if (dis == undefined) {\n      return;\n    }\n    this.inputHandle.addLog('resizeWindow-oncall display');\n    let dWidth = dis.width;\n    let dHeight = dis.height;\n    let keyHeightRate = KEYBOARD_HEIGHT_RATE_DEFAULT;\n    AppStorage.setOrCreate<number>('windowWidth', dis.width);\n    AppStorage.setOrCreate<number>('windowHeight', dis.height);\n    let isLandscape = false;\n    let isRkDevice = false;\n    if (dis.width > dis.height) {\n      isLandscape = true;\n      AppStorage.setOrCreate('isLandscape', true);\n    } else {\n      AppStorage.setOrCreate('isLandscape', false);\n    }\n    if (dWidth === DEVICE_PHONE.width && dHeight === DEVICE_PHONE.height) {\n      keyHeightRate = KEYBOARD_HEIGHT_RATE_PHONE;\n    } else if (dWidth === DEVICE_PHONE.height && dHeight === DEVICE_PHONE.width) {\n      keyHeightRate = KEYBOARD_HEIGHT_RATE_PHONE_LAND;\n    } else if (dWidth === DEVICE_RK.width && dHeight === DEVICE_RK.height) {\n      AppStorage.setOrCreate('isRkDevice', true);\n      isRkDevice = true;\n    } else if (dWidth === DEVICE_BIG.width && dHeight === DEVICE_BIG.height) {\n      keyHeightRate = KEYBOARD_HEIGHT_RATE_BIG_LAND;\n    } else if (dWidth === DEVICE_BIG.height && dHeight === DEVICE_BIG.width) {\n      keyHeightRate = KEYBOARD_HEIGHT_RATE_BIG;\n    }\n    let keyHeight = dHeight * keyHeightRate;\n    let inputStyle = StyleConfiguration.getInputStyle(isLandscape, isRkDevice, deviceInfo.deviceType);\n    AppStorage.setOrCreate('inputStyle', inputStyle);\n    if (this.panel) {\n      this.panel.resize(dWidth, keyHeight).then(() => {\n      }).catch((err: BusinessError) => {\n        this.inputHandle.addLog(`resizePanel err = ${err.code} ${err.message}`);\n      })\n    }\n  }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private registerListener(): void {\n  this.inputHandle.addLog('registerListener');\n  try {\n    display.on('change', () => {\n      this.inputHandle.addLog('screenChangeEvent');\n      this.resizePanel();\n    });\n  } catch (err) {\n    let error = err as BusinessError;\n    Log.showError(TAG, `display on change catch error: ${error.code} ${error.message}`);\n  }\n  inputMethodAbility.on('inputStart',\n    (kbController: inputMethodEngine.KeyboardController, textInputClient: inputMethodEngine.InputClient) => {\n      this.inputHandle.addLog('keyboard inputStart');\n      this.inputHandle.onInputStart(kbController, textInputClient);\n    })\n\n  // 设置监听子类型事件，改变输入法应用界面\n  inputMethodAbility.on('setSubtype', (inputMethodSubtype: InputMethodSubtype) => {\n    if (inputMethodSubtype.id === 'InputMethodExtAbility') {\n      AppStorage.setOrCreate('subtypeChange', 0);\n    }\n    if (inputMethodSubtype.id === 'InputMethodExtAbility1') {\n      AppStorage.setOrCreate('subtypeChange', 1);\n    }\n  });\n\n  inputMethodAbility.on('inputStop', () => {\n    this.inputHandle.addLog('keyboard inputStop');\n    this.onDestroy();\n    if (this.mContext) {\n      this.mContext.destroy();\n    }\n  });\n\n  this.inputHandle.addLog('pre on privateCommand');\n  try {\n    inputMethodAbility.on('privateCommand', (record: Record<string, inputMethodEngine.CommandDataType>) => {\n      this.inputHandle.addLog(`keyboard privateCommand : ${record}`);\n      Object.keys(record).forEach((key: string) => {\n        this.inputHandle.addLog(`onPageShow private command key: ${key}, value: ${record[key]}`);\n      })\n    });\n  } catch (err) {\n    let error = err as BusinessError;\n    this.inputHandle.addLog(`on privateCommand sendPrivateCommand catch error: ${error.code} ${error.message}`);\n  }\n\n  this.mKeyboardDelegate = inputMethodEngine.getKeyboardDelegate();\n\n  this.mKeyboardDelegate.on('keyDown', (keyEvent: inputMethodEngine.KeyEvent) => {\n    if (this.isKeyboardShow) {\n      this.inputHandle.hideKeyboardSelf();\n    }\n    this.inputHandle.addLog(`keyDown: code = ${keyEvent.keyCode}`);\n    let result = this.onKeyDown(keyEvent);\n    this.inputHandle.addLog(`keyDown: result = ${result}`);\n    return result;\n  });\n\n  this.mKeyboardDelegate.on('keyUp', (keyEvent: inputMethodEngine.KeyEvent) => {\n    this.inputHandle.addLog(`keyUp: code = ${keyEvent.keyCode}`);\n    let result = this.onKeyUp(keyEvent);\n    this.inputHandle.addLog(`keyUp: result = ${result}`);\n    return result;\n  });\n  this.mKeyboardDelegate.on('cursorContextChange', (x: number, y: number, height: number) => {\n    let cursorInfo: CursorInfo = { x: x, y: y, height: height };\n    this.inputHandle.setCursorInfo(cursorInfo);\n  });\n  if (isDebug) {\n    this.mKeyboardDelegate.on('selectionChange',\n      (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => {\n        this.inputHandle.setSelectInfo('selectInfo: from(' + oldBegin + ',' + oldEnd + ') to (' + newBegin + ',' +\n          newEnd + ')');\n      });\n    this.mKeyboardDelegate.on('textChange', (text: string) => {\n      this.inputHandle.setTextInfo('textInfo: ' + text);\n    });\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  public isShiftKeyHold(): boolean {\n    if (this.keyCodes.length === 0) {\n      return false;\n    }\n    let preDownKey = this.keyCodes[0];\n    return preDownKey === KeyCode.KEYCODE_SHIFT_LEFT || preDownKey === KeyCode.KEYCODE_SHIFT_RIGHT;\n  }\n\n  public onKeyDown(keyEvent: inputMethodEngine.KeyEvent): boolean {\n    this.inputHandle.addLog('onKeyDown: code = ' + keyEvent.keyCode);\n    let keyCode = keyEvent.keyCode;\n    let idx = this.keyCodes.indexOf(keyCode);\n    if (idx === -1) {\n      this.keyCodes.push(keyCode);\n    } else {\n      this.inputHandle.addLog(`keyCode down is intercepted: ${keyCode}}`);\n    }\n    if (this.isShiftKeyHold() && this.keyCodes.length === 2 && !this.isKeyCodeAZ(keyCode)) {\n      this.isSpecialKeyPress = true;\n      return false;\n    }\n    if (this.isSpecialKeyPress || keyCode === KeyCode.KEYCODE_ALT_LEFT || keyCode === KeyCode.KEYCODE_ALT_RIGHT) {\n      return false;\n    }\n    let keyValue: string = getHardKeyValue(keyCode, this.isShiftKeyHold());\n    if (keyValue === '') {\n      this.inputHandle.addLog('onKeyDown: unknown keyCode');\n      this.isSpecialKeyPress = true;\n      return false;\n    }\n    return this.inputHardKeyCode(keyValue, keyCode);\n  }\n\n  public onKeyUp(keyEvent: inputMethodEngine.KeyEvent): boolean {\n    this.inputHandle.addLog('OnKeyUp: code = ' + keyEvent.keyCode);\n    let keyCode = keyEvent.keyCode;\n    let idx = this.keyCodes.indexOf(keyCode);\n    if (idx !== -1) {\n      this.keyCodes.splice(idx, 1);\n    } else {\n      this.inputHandle.addLog(`keyCode KeyUp is intercepted: ${keyCode}`);\n    }\n\n    // For KEYCODE_DEL/KEYCODE_FORWARD_DEL, processed in OnKeyDown, so just intercept it\n    if (keyCode === 2055 || keyCode === 2071 || (keyCode >= 2012 && keyCode <= 2016)) {\n      this.inputHandle.addLog(`special code: ${keyCode}`);\n      return true;\n    }\n\n    if (this.isSpecialKeyPress) {\n      let keyValue = getHardKeyValue(keyCode, this.isShiftKeyHold());\n      if (!keyValue) {\n        this.isSpecialKeyPress = true;\n      }\n      if (this.keyCodes.length === 0) {\n        this.isSpecialKeyPress = false;\n      }\n      this.inputHandle.addLog(`OnKeyUp: this.isSpecialKeyPress: ${this.isSpecialKeyPress}`);\n      return false;\n    }\n    return true;\n  }\n\n  public isKeyCodeAZ(keyCode: number): boolean {\n    return keyCode >= KeyCode.KEYCODE_A && keyCode <= KeyCode.KEYCODE_Z;\n  }\n\n  public isKeyCodeNumber(keyCode: number): boolean {\n    return (keyCode >= KeyCode.KEYCODE_0 && keyCode <= KeyCode.KEYCODE_9) ||\n      (keyCode >= KeyCode.KEYCODE_NUMPAD_0 && keyCode <= KeyCode.KEYCODE_NUMPAD_9);\n  }\n\n  public inputHardKeyCode(keyValue: string, keyCode: number): boolean {\n    this.inputHandle.addLog(`inputHardKeyCode keyValue is: ${keyValue}`);\n    if (this.processFunctionKeys(keyValue)) {\n      return true;\n    }\n    if (this.shiftKeys(keyValue)) {\n      return false;\n    }\n    this.inputHandle.insertText(keyValue);\n    return true;\n  }\n\n  public shiftKeys(keyValue: string): boolean {\n    this.inputHandle.addLog(`shiftKeys keyValue is: ${keyValue}`);\n    switch (keyValue) {\n      case 'KEYCODE_SHIFT_LEFT':\n      case 'KEYCODE_SHIFT_RIGHT':\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  public processFunctionKeys(keyValue: string): boolean {\n    this.inputHandle.addLog(`processFunctionKeys keyValue is: ${keyValue}`);\n    switch (keyValue) {\n      case \"KEYCODE_DEL\":\n        this.inputHandle.deleteForward(1);\n        return true;\n      case \"KEYCODE_FORWARD_DEL\":\n        this.inputHandle.deleteBackward(1);\n        return true;\n      case \"KEYCODE_DPAD_UP\":\n        this.inputHandle.moveCursor(inputMethodEngine.Direction.CURSOR_UP);\n        return true;\n      case \"KEYCODE_DPAD_DOWN\":\n        this.inputHandle.moveCursor(inputMethodEngine.Direction.CURSOR_DOWN);\n        return true;\n      case \"KEYCODE_DPAD_LEFT\":\n        this.inputHandle.moveCursor(inputMethodEngine.Direction.CURSOR_LEFT);\n        return true;\n      case \"KEYCODE_DPAD_RIGHT\":\n        this.inputHandle.moveCursor(inputMethodEngine.Direction.CURSOR_RIGHT);\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  private unRegisterListener(): void {\n    this.inputHandle.addLog('unRegisterListener');\n\n    inputMethodAbility.off('inputStop', () => {\n      this.inputHandle.addLog('inputStop off');\n    });\n    if (this.mKeyboardDelegate) {\n      this.mKeyboardDelegate.off('keyDown');\n      this.mKeyboardDelegate.off('keyUp');\n      if (isDebug) {\n        this.mKeyboardDelegate.off('cursorContextChange');\n        this.mKeyboardDelegate.off('selectionChange');\n        this.mKeyboardDelegate.off('textChange');\n      }\n    }\n  }\n}\n\nexport const keyboardController: KeyboardController = new KeyboardController();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "KeyboardKeyData.ets文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义软键盘的按键显示内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export interface keySourceListType {\n  title: string,\n  content: string,\n  upperContent: string\n}\n\nexport interface sourceListType {\n  content: string\n}\n\nexport enum MenuKey {\n  NUMBER_KEY = '?123',\n  NORMAL_KEY = 'ABC',\n  SPECIAL_KEY = '=/\\<'\n}\n\nexport enum SubMenuType {\n  NORMAL = 0,\n  MENU = 1,\n  EDIT = 2\n}\n\nexport enum MenuType {\n  NORMAL = 0,\n  NUMBER = 1,\n  SPECIAL = 2\n}\n\nexport enum KeyState {\n  LOWER_CASE = 0,\n  ONCE_UPPER_CASE = 1,\n  UPPER_CASE = 2\n}\n\nexport let keySourceListData: keySourceListType[] = [\n  {\n    title: '1',\n    content: 'q',\n    upperContent: 'Q'\n  },\n  {\n    title: '2',\n    content: 'w',\n    upperContent: 'W'\n  },\n  {\n    title: '3',\n    content: 'e',\n    upperContent: 'E'\n  },\n  {\n    title: '4',\n    content: 'r',\n    upperContent: 'R'\n  },\n  {\n    title: '5',\n    content: 't',\n    upperContent: 'T'\n  },\n  {\n    title: '6',\n    content: 'y',\n    upperContent: 'Y'\n  },\n  {\n    title: '7',\n    content: 'u',\n    upperContent: 'U'\n  },\n  {\n    title: '8',\n    content: 'i',\n    upperContent: 'I'\n  },\n  {\n    title: '9',\n    content: 'o',\n    upperContent: 'O'\n  },\n  {\n    title: '0',\n    content: 'p',\n    upperContent: 'P'\n  },\n  {\n    title: String.fromCharCode(126),\n    content: 'a',\n    upperContent: 'A'\n  },\n  {\n    title: String.fromCharCode(33),\n    content: 's',\n    upperContent: 'S'\n  },\n  {\n    title: '@',\n    content: 'd',\n    upperContent: 'D'\n  },\n  {\n    title: String.fromCharCode(35),\n    content: 'f',\n    upperContent: 'F'\n  },\n  {\n    title: '%',\n    content: 'g',\n    upperContent: 'G'\n  },\n  {\n    title: String.fromCharCode(39),\n    content: 'h',\n    upperContent: 'H'\n  },\n  {\n    title: '&',\n    content: 'j',\n    upperContent: 'J'\n  },\n  {\n    title: '*',\n    content: 'k',\n    upperContent: 'K'\n  },\n  {\n    title: '?',\n    content: 'l',\n    upperContent: 'L'\n  },\n  {\n    title: String.fromCharCode(72),\n    content: 'z',\n    upperContent: 'Z'\n  },\n  {\n    title: String.fromCharCode(73),\n    content: 'x',\n    upperContent: 'X'\n  },\n  {\n    title: String.fromCharCode(175),\n    content: 'c',\n    upperContent: 'C'\n  },\n  {\n    title: String.fromCharCode(95),\n    content: 'v',\n    upperContent: 'V'\n  },\n  {\n    title: String.fromCharCode(58),\n    content: 'b',\n    upperContent: 'B'\n  },\n  {\n    title: String.fromCharCode(59),\n    content: 'n',\n    upperContent: 'N'\n  },\n  {\n    title: String.fromCharCode(47),\n    content: 'm',\n    upperContent: 'M'\n  }\n]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export let numberSourceListData: sourceListType[] = [\n  {\n    content: '1'\n  },\n  {\n    content: '2'\n  },\n  {\n    content: '3'\n  },\n  {\n    content: '4'\n  },\n  {\n    content: '5'\n  },\n  {\n    content: '6'\n  },\n  {\n    content: '7'\n  },\n  {\n    content: '8'\n  },\n  {\n    content: '9'\n  },\n  {\n    content: '0'\n  },\n  {\n    content: '@'\n  },\n  {\n    content: '#'\n  },\n  {\n    content: '$'\n  },\n  {\n    content: '%'\n  },\n  {\n    content: '&'\n  },\n  {\n    content: '-'\n  },\n  {\n    content: '+'\n  },\n  {\n    content: '('\n  },\n  {\n    content: ')'\n  },\n  {\n    content: '/'\n  },\n  {\n    content: '*'\n  },\n  {\n    content: '\"'\n  },\n  {\n    content: \"'\"\n  },\n  {\n    content: ':'\n  },\n  {\n    content: ';'\n  },\n  {\n    content: '!'\n  },\n  {\n    content: '?'\n  },\n\n]\n\nexport let symbolSourceListData: sourceListType[] = [\n  {\n    content: '~'\n  },\n  {\n    content: '`'\n  },\n  {\n    content: '|'\n  },\n  {\n    content: '\\u2022'\n  },\n  {\n    content: '\\u221A'\n  },\n  {\n    content: '\\u03A0'\n  },\n  {\n    content: '\\u00F7'\n  },\n  {\n    content: '\\u00D7'\n  },\n  {\n    content: String.fromCharCode(182)\n  },\n  {\n    content: '\\u2206'\n  },\n  {\n    content: String.fromCharCode(163)\n  },\n  {\n    content: '\\u20ac'\n  },\n  {\n    content: String.fromCharCode(165)\n  },\n  {\n    content: String.fromCharCode(162)\n  },\n  {\n    content: String.fromCharCode(94)\n  },\n  {\n    content: '\\u00B0'\n  },\n  {\n    content: '='\n  },\n  {\n    content: String.fromCharCode(123)\n  },\n  {\n    content: String.fromCharCode(125)\n  },\n  {\n    content: String.fromCharCode(44)\n  },\n  {\n    content: String.fromCharCode(92)\n  },\n  {\n    content: String.fromCharCode(169)\n  },\n  {\n    content: String.fromCharCode(174)\n  },\n  {\n    content: '\\u2122'\n  },\n  {\n    content: '\\u2105'\n  },\n  {\n    content: '['\n  },\n  {\n    content: ']'\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Index.ets文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主要描绘了具体按键功能。如按下数字键，就会将数字内容在输入框中打印出来，按下删除键，就会将内容删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { deviceInfo } from '@kit.BasicServicesKit';\nimport Log from '../../model/Log';\nimport { EditView } from '../../components/EditView';\nimport { InputHandler } from '../model/KeyboardController';\nimport {\n  MenuType,\n  SubMenuType,\n} from '../../model/KeyboardKeyData';\nimport { KeyMenu } from '../../components/KeyMenu';\nimport { NumberMenu } from '../../components/NumberMenu';\nimport { StyleConfiguration, KeyStyle } from '../../common/StyleConfiguration';\nimport { SymbolMenu } from '../../components/SymbolMenu';\nimport { Submenu } from '../../components/Submenu';\nimport { TopMenu } from '../../components/TopMenu';\nimport { inputMethodEngine } from '@kit.IMEKit';\n\n\nconst DEVICE_TYPE: string = deviceInfo.deviceType;\nconst TAG: string = 'index->';\n\n@Entry\n@Component\nstruct Index {\n  @Provide menuType: number = MenuType.NORMAL;\n  @StorageLink('inputPattern') @Watch('inputPatternChange') inputPattern: InputType = InputType.Normal\n  @StorageLink('submenuType') submenuType: number = SubMenuType.NORMAL;\n  @StorageLink('isLandscape') @Watch('change') isLandscape: boolean = false;\n  @StorageLink('isRkDevice') isRkDevice: boolean = true;\n  @StorageLink('inputStyle') inputStyle: KeyStyle = StyleConfiguration.getInputStyle(this.isLandscape, this.isRkDevice, DEVICE_TYPE);\n  private panel: inputMethodEngine.Panel | undefined;\n  @StorageLink('subtypeChange') subtypeChange: number = 0;\n\n\n  aboutToAppear(): void {\n    // 感知是否设置沉浸模式，如果是沉浸模式选择沉浸模式类型\n    inputMethodEngine.getKeyboardDelegate().on(\"editorAttributeChanged\", (attr : inputMethodEngine.EditorAttribute) => {\n      console.info('recv editorAttributeChanged, immersiveMode: ', attr.immersiveMode);\n      if (attr.immersiveMode == 1) {\n        this.panel?.setImmersiveMode(inputMethodEngine.ImmersiveMode.DARK_IMMERSIVE);\n        console.info('recv editorAttributeChanged, panel:', this.panel?.getImmersiveMode());\n      }\n    })\n  }\n\n  onBackPress(): boolean {\n    Log.showInfo(TAG, 'kikaInput onBackPress');\n    this.submenuType = SubMenuType.NORMAL;\n    InputHandler.getInstance().hideKeyboardSelf();\n    return true;\n  }\n\n  inputPatternChange(): void {\n    if (this.inputPattern === InputType.Number || this.inputPattern === InputType.PhoneNumber) {\n      this.menuType = MenuType.NUMBER;\n    } else {\n      this.menuType = MenuType.NORMAL;\n    }\n  }\n\n  change(): void {\n    AppStorage.set('inputStyle', StyleConfiguration.getInputStyle(this.isLandscape, this.isRkDevice, DEVICE_TYPE));\n  }\n\n\n  build() {\n    Stack() {\n      Column() {\n        TopMenu()\n        Column() {\n          if (this.submenuType > SubMenuType.NORMAL) {\n            if (this.submenuType === SubMenuType.MENU) {\n              Submenu()\n            } else {\n              EditView();\n            }\n          } else {\n            if (this.menuType === MenuType.NORMAL) {\n              if (this.subtypeChange == 0) {\n                KeyMenu()\n              } else {\n                NumberMenu()\n              }\n            } else if (this.menuType === MenuType.NUMBER) {\n              NumberMenu()\n            } else {\n              SymbolMenu()\n            }\n          }\n        }\n        .width('100%')\n        .layoutWeight(1)\n        .justifyContent(FlexAlign.Center)\n        .backgroundColor('#D5D8DD')\n      }\n      .height('100%')\n    }\n    .height('100%')\n    .backgroundColor(Color.White)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "main_pages.json文件。对应ets/InputMethodExtensionAbility/pages/路径下键盘的绘制页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"src\": [\n    \"InputMethodExtensionAbility/pages/Index\"\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程Module对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中注册InputMethodExtensionAbility，type标签需要设置为“inputMethod”，srcEntry标签表示当前InputMethodExtensionAbility组件所对应的代码路径。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"extensionAbilities\": [\n  {\n    \"srcEntry\": \"./ets/InputMethodExtensionAbility/InputMethodService.ets\",\n    \"name\": \"InputMethodService\",\n    \"label\": \"$string:MainAbility_label\",\n    \"description\": \"$string:extension_ability_descriptor\",\n    \"type\": \"inputMethod\",\n    \"exported\": true,\n    \"metadata\": [\n      {\n        \"name\": \"ohos.extension.input_method\",\n        \"resource\": \"$profile:input_method_config\"\n      }\n    ]\n  }\n],\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了降低InputMethodExtensionAbility能力被三方应用滥用的风险，现通过基础访问模式的功能约束对输入法应用进行安全管控。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(623739)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "严格遵从基础访问模式的功能约束。在此模式下，开发者应仅提供基础打字功能，不应提供任何形式与网络交互相关的功能。系统会逐步增加基础访问模式的安全管控能力，包括但不限于：以独立进程和沙箱的方式运行Extension进程；禁止Extension进程创建子进程；进程间通信与网络访问等。因此未遵从此约定可能会导致功能异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例效果图",
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(468497)/* ["default"] */.A) + "",
        width: "252",
        height: "448"
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
811664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438361-53b762d5b7701430a9f614697cf6f701.png");

},
468497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958316-1720a5ec26eb103b7ec182ffb220c294.png");

},
623739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
606463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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