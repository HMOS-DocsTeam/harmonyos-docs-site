"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["819071"], {
668262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_use_animation_ndk_use_animation_md_dbf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-use-animation-ndk-use-animation-md-dbf.json
var site_docs_arkui_arkts_use_ndk_ndk_use_animation_ndk_use_animation_md_dbf_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-use-animation/ndk-use-animation","title":"使用动画","description":"使用属性动画","source":"@site/docs/arkui/arkts-use-ndk/ndk-use-animation/ndk-use-animation.md","sourceDirName":"arkui/arkts-use-ndk/ndk-use-animation","slug":"/arkui/arkts-use-ndk/ndk-use-animation/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-use-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用动画","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-use-animation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"监听组件布局和绘制送显事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-inspector-component-observer/"},"next":{"title":"使用列表","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-use-animation/ndk-use-animation.md


const frontMatter = {
	title: '使用动画',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-use-animation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用动画';

const assets = {

};



const toc = [{
  "value": "使用属性动画",
  "id": "使用属性动画",
  "level": 2
}, {
  "value": "组件出现/消失转场",
  "id": "组件出现消失转场",
  "level": 2
}, {
  "value": "使用关键帧动画",
  "id": "使用关键帧动画",
  "level": 2
}, {
  "value": "使用帧动画",
  "id": "使用帧动画",
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
        id: "使用动画",
        children: "使用动画"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用属性动画",
      children: "使用属性动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkui-overview",
        children: "ArkUI"
      }), "开发框架在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ndk-development-overview",
        children: "NDK"
      }), "接口主要提供属性动画，实现组件出现/消失转场。同时，可以通过Node-API桥接", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-overview",
        children: "ArkTS"
      }), "侧帧动画能力，实现Native侧的动画效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(200792)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要从ArkTS侧获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getuicontext",
          children: "this.getUIContext()"
        }), "，传入到Native侧。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在Native侧通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-napi-h/capi-native-node-napi-h#oh_arkui_getcontextfromnapivalue",
          children: "OH_ArkUI_GetContextFromNapiValue"
        }), "方法获取context。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要执行的动画属性变化必须写在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-contextcallback/capi-arkui-nativemodule-arkui-contextcallback",
          children: "ArkUI_ContextCallback"
        }), "中的callback中。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要执行的动画属性，必须在执行动画之前设置过。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本篇示例仅提供核心接口的调用方法，完整的示例工程请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/AnimationNDK",
          children: "AnimationNDK"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供全局", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativeanimateapi-1/capi-arkui-nativemodule-arkui-nativeanimateapi-1#animateto",
        children: "animateTo"
      }), "显式动画接口，来指定由于闭包代码导致的状态变化插入过渡动效。同属性动画，布局类改变宽高的动画，内容都是直接到终点状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在.ets文件中创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontent/js-apis-arkui-nodecontent",
            children: "NodeContent"
          }), "，把NodeContent作为参数输出到Native方法中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  // 初始化NodeContent对象。\n  private rootSlot = new NodeContent();\n  @State @Watch('changeNativeFlag') showNative: boolean = false;\n// ···\n  changeNativeFlag(): void {\n    // ···\n    if (this.showNative) {\n      // 传递NodeContent对象用于Native创建组件的挂载显示\n      nativeNode?.createNativeRoot(this.rootSlot);\n    } else {\n    // ···\n    }\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["解析NodeContent，转换为C中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h",
            children: "ArkUI_NodeContentHandle"
          }), "对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取NodeContent\nArkUI_NodeContentHandle contentHandle;\nOH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativeanimateapi-1/capi-arkui-nativemodule-arkui-nativeanimateapi-1",
            children: "ArkUI_NativeAnimateAPI_1"
          }), " 对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取ArkUI_NativeAnimateAPI接口\nArkUI_NativeAnimateAPI_1 *animateApi = nullptr;\nOH_ArkUI_GetModuleInterface(ARKUI_NATIVE_ANIMATE, ArkUI_NativeAnimateAPI_1, animateApi);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-animateoption/capi-arkui-nativemodule-arkui-animateoption",
            children: "ArkUI_AnimateOption"
          }), "参数，通过提供的C方法设置对应的参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置动画参数\nArkUI_AnimateOption *option = OH_ArkUI_AnimateOption_Create();\nOH_ArkUI_AnimateOption_SetDuration(option, NUM_2000); // NUM_2000 = 2000\nOH_ArkUI_AnimateOption_SetTempo(option, 1.1);\nOH_ArkUI_AnimateOption_SetCurve(option, ARKUI_CURVE_EASE);\nArkUI_CurveHandle cubicBezierCurve = OH_ArkUI_Curve_CreateCubicBezierCurve(0.5f, 4.0f, 1.2f, 0.0f);\n// 设置动画的动画曲线，优先于OH_ArkUI_AnimateOption_SetCurve生效\nOH_ArkUI_AnimateOption_SetICurve(option, cubicBezierCurve);\nOH_ArkUI_AnimateOption_SetDelay(option, NUM_20); // NUM_20 = 20\nOH_ArkUI_AnimateOption_SetIterations(option, NUM_1); // NUM_1 = 1\nOH_ArkUI_AnimateOption_SetPlayMode(option, ARKUI_ANIMATION_PLAY_MODE_REVERSE);\nArkUI_ExpectedFrameRateRange *range = new ArkUI_ExpectedFrameRateRange;\nrange->min = NUM_10; // NUM_10 = 10\nrange->max = NUM_120; // NUM_120 = 120\nrange->expected = NUM_60; // NUM_60 = 60\nOH_ArkUI_AnimateOption_SetExpectedFrameRateRange(option, range);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置回调参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置完成的回调\nArkUI_AnimateCompleteCallback *completeCallback = new ArkUI_AnimateCompleteCallback;\ncompleteCallback->type = ARKUI_FINISH_CALLBACK_REMOVED;\n// 结构体AnimateData中包含ArkUI_AnimateOption* option和ArkUI_CurveHandle curve\nAnimateData* data = new AnimateData();\ndata->option = option;\ndata->curve = cubicBezierCurve;\ncompleteCallback->userData = reinterpret_cast<void*>(data);\ncompleteCallback->callback = [](void *userData) {\n    AnimateData* data = reinterpret_cast<AnimateData*>(userData);\n    if (data) {\n        ArkUI_AnimateOption* option = data->option;\n        ArkUI_CurveHandle curve = data->curve;\n        if (option) {\n            OH_ArkUI_AnimateOption_Dispose(option);\n            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN,\n                \"Init\", \"CXX OH_ArkUI_AnimateOption_Dispose  success!\");\n        }\n        if (curve) {\n            OH_ArkUI_Curve_DisposeCurve(curve);\n            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN,\n                \"Init\", \"CXX OH_ArkUI_Curve_DisposeCurve  success!\");\n        }\n        delete data; // 释放结构体\n    }\n};\n            \n// 设置闭包函数\nstatic bool isback = true;\nArkUI_ContextCallback *update = new ArkUI_ContextCallback;\nupdate->callback = [](void *user) {\n    // 对应的属性变化 width height\n    if (isback) {\n        g_animateto_button->SetWidth(NUM_200); // NUM_200 = 200\n        g_animateto_button->SetHeight(NUM_80); // NUM_80 = 80\n        g_animateto_button->SetBackgroundColor(0xFFA280FF);\n    } else {\n        g_animateto_button->SetWidth(NUM_100); // NUM_100 = 100\n        g_animateto_button->SetHeight(NUM_40); // NUM_40 = 40\n        g_animateto_button->SetBackgroundColor(0xFFFF2E77);\n    }\n    isback = !isback;\n};\n// 执行对应的动画\nanimateApi->animateTo(context, option, update, completeCallback);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(507540)/* ["default"] */.A) + "",
            width: "321",
            height: "107"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件出现消失转场",
      children: "组件出现/消失转场"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件内转场通过NODE_XX_TRANSITION属性（XX包括：OPACITY、TRANSLATE、SCALE、ROTATE、MOVE）配置转场参数，在组件插入和删除时显示过渡动效（通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype",
        children: "NODE_TRANSFORM_CENTER"
      }), "属性设置NODE_SCALE_TRANSITION和NODE_ROTATE_ROTATE动效的中心点坐标）。主要用于容器组件中子组件插入和删除时，提升用户体验。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建可交互界面，界面中包含Button，点击可以控制转场节点的添加和移除。其中 ArkUI_NodeContentHandle 类型节点的获取与使用可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
            children: "接入ArkTS页面"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "constexpr int32_t BUTTON_CLICK_ID = 1;\nbool g_flag = false;\nArkUI_NodeHandle parentNode;\nArkUI_NodeHandle childNode;\nArkUI_NodeHandle buttonNode;\n// ···\nvoid mainViewMethod(ArkUI_NodeContentHandle handle)\n{\n    ArkUI_NativeNodeAPI_1 *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NumberValue widthValue[] = {{.f32 = 500}};\n    ArkUI_AttributeItem widthItem = {.value = widthValue, .size = sizeof(widthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(column, NODE_WIDTH, &widthItem);\n    ArkUI_NumberValue heightValue[] = {{.f32 = 500}};\n    ArkUI_AttributeItem heightItem = {.value = heightValue, .size = sizeof(heightValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(column, NODE_HEIGHT, &heightItem);\n    ArkUI_NodeHandle buttonShow = nodeAPI->createNode(ARKUI_NODE_BUTTON);\n    ArkUI_NumberValue buttonWidthValue[] = {{.f32 = 200}};\n    ArkUI_AttributeItem buttonWidthItem = {.value = buttonWidthValue,\n                                           .size = sizeof(buttonWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(buttonShow, NODE_WIDTH, &buttonWidthItem);\n    ArkUI_NumberValue buttonHeightValue[] = {{.f32 = 50}};\n    ArkUI_AttributeItem buttonHeightItem = {.value = buttonHeightValue,\n                                            .size = sizeof(buttonHeightValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(buttonShow, NODE_HEIGHT, &buttonHeightItem);\n    ArkUI_AttributeItem labelItem = {.string = \"show\"};\n    nodeAPI->setAttribute(buttonShow, NODE_BUTTON_LABEL, &labelItem);\n    ArkUI_NumberValue buttonOpenTypeValue[] = {{.i32 = static_cast<int32_t>(ARKUI_BUTTON_TYPE_NORMAL)}};\n    ArkUI_AttributeItem buttonOpenTypeItem = {.value = buttonOpenTypeValue,\n                                              .size = sizeof(buttonOpenTypeValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(buttonShow, NODE_BUTTON_TYPE, &buttonOpenTypeItem);\n    ArkUI_NumberValue buttonShowMarginValue[] = {{.f32 = 20}};\n    ArkUI_AttributeItem buttonShowMarginItem = {.value = buttonShowMarginValue,\n                                                .size = sizeof(buttonShowMarginValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(buttonShow, NODE_MARGIN, &buttonShowMarginItem);\n    nodeAPI->registerNodeEvent(buttonShow, NODE_ON_CLICK, BUTTON_CLICK_ID, nullptr);\n    nodeAPI->addNodeEventReceiver(buttonShow, OnButtonShowClicked);\n    parentNode = column;\n    buttonNode = buttonShow;\n    nodeAPI->addChild(column, buttonShow);\n    OH_ArkUI_NodeContent_AddNode(handle, column);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建一个设置了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h",
            children: "NODE_ROTATE_TRANSITION"
          }), ", ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h",
            children: "NODE_SCALE_TRANSITION"
          }), ", ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h",
            children: "NODE_TRANSLATE_TRANSITION"
          }), "属性的节点，当目标节点上下树时会播放转场动画。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NodeHandle CreateChildNode()\n{\n    ArkUI_NativeNodeAPI_1 *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    ArkUI_NodeHandle image = nodeAPI->createNode(ARKUI_NODE_IMAGE);\n    ArkUI_AttributeItem imageSrcItem = {.string = \"/pages/common/scenery.jpg\"};\n    nodeAPI->setAttribute(image, NODE_IMAGE_SRC, &imageSrcItem);\n    ArkUI_NumberValue textWidthValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem textWidthItem = {.value = textWidthValue,\n                                         .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(image, NODE_WIDTH, &textWidthItem);\n    ArkUI_NumberValue textHeightValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem textHeightItem = {.value = textHeightValue,\n                                          .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(image, NODE_HEIGHT, &textHeightItem);\n    ArkUI_NumberValue transformCenterValue[] = {0.0f, 0.0f, 0.0f, 0.5f, 0.5f};\n    ArkUI_AttributeItem transformCenterItem = {.value = transformCenterValue,\n                                               .size = sizeof(transformCenterValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(image, NODE_TRANSFORM_CENTER, &transformCenterItem);\n    ArkUI_NumberValue rotateAnimationValue[] = {\n        0.0f, 0.0f, 1.0f, 360.0f, 0.0f, {.i32 = 500}, {.i32 = static_cast<int32_t>(ARKUI_CURVE_SHARP)}};\n    ArkUI_AttributeItem rotateAnimationItem = {.value = rotateAnimationValue,\n                                               .size = sizeof(rotateAnimationValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(image, NODE_ROTATE_TRANSITION, &rotateAnimationItem);\n    ArkUI_NumberValue scaleAnimationValue[] = {\n        0.0f, 0.0f, 0.0f, {.i32 = 500}, {.i32 = static_cast<int32_t>(ARKUI_CURVE_SHARP)}};\n    ArkUI_AttributeItem scaleAnimationItem = {.value = scaleAnimationValue,\n                                              .size = sizeof(scaleAnimationValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(image, NODE_SCALE_TRANSITION, &scaleAnimationItem);\n    ArkUI_NumberValue translateAnimationValue[] = {\n        200, 200, 0.0f, {.i32 = 500}, {.i32 = static_cast<int32_t>(ARKUI_CURVE_SHARP)}};\n    ArkUI_AttributeItem translateAnimationItem = {.value = translateAnimationValue,\n                                                  .size = sizeof(translateAnimationValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(image, NODE_TRANSLATE_TRANSITION, &translateAnimationItem);\n    return image;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Button的监听回调里添加转场节点上下树逻辑，以此控制转场节点的入场和出场。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void OnButtonShowClicked(ArkUI_NodeEvent *event)\n{\n    if (!event) {\n        return;\n    }\n    if (!childNode) {\n        childNode = CreateChildNode();\n    }\n    ArkUI_NativeNodeAPI_1 *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    if (g_flag) {\n        g_flag = false;\n        ArkUI_AttributeItem labelItem = {.string = \"show\"};\n        nodeAPI->setAttribute(buttonNode, NODE_BUTTON_LABEL, &labelItem);\n        nodeAPI->removeChild(parentNode, childNode);\n    } else {\n        g_flag = true;\n        ArkUI_AttributeItem labelItem = {.string = \"hide\"};\n        nodeAPI->setAttribute(buttonNode, NODE_BUTTON_LABEL, &labelItem);\n        nodeAPI->addChild(parentNode, childNode);\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(37461)/* ["default"] */.A) + "",
            width: "563",
            height: "846"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用关键帧动画",
      children: "使用关键帧动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativeanimateapi-1/capi-arkui-nativemodule-arkui-nativeanimateapi-1#keyframeanimateto",
        children: "keyframeAnimateTo"
      }), "接口来指定若干个关键帧状态，实现分段的动画。同属性动画，布局类改变宽高的动画，内容都是直接到终点状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要演示如何通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativeanimateapi-1/capi-arkui-nativemodule-arkui-nativeanimateapi-1#keyframeanimateto",
        children: "keyframeAnimateTo"
      }), "来设置关键帧动画，NDK接口开发的UI界面挂载到ArkTS主页面的完整流程可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkUIColumnNode为工程内封装的node类型\nauto column = std::make_shared<ArkUIColumnNode>();\n// 设置宽度为300，NUM_300 = 300\ncolumn->SetWidth(NUM_300);\n// 设置高度为250，NUM_250 = 250\ncolumn->SetHeight(NUM_250);\n// 创建文本节点，内容区介绍“这是关键帧动画”\nauto textNode = std::make_shared<ArkUITextNode>();\ntextNode->SetTextContent(\"这是关键帧动画\");\n// 设置宽度为120，NUM_120 = 120\ntextNode->SetWidth(NUM_120);\n// 设置高度为120，NUM_120 = 120\ntextNode->SetHeight(NUM_50);\n// 创建button，后续创建的关键帧动画作用在button组件上\nauto button = std::make_shared<ArkUIButtonNode>();\n// 设置button初始宽高，NUM_100 = 100\nbutton->SetWidth(NUM_100);\nbutton->SetHeight(NUM_100);\n// 存储button全局变量，在onTouch注册时需要使用\ng_keyframe_button = button;\n// 注册点击事件到button上，NUM_1 = 1\nbutton->RegisterNodeEvent(button->GetHandle(), NODE_ON_CLICK, NUM_1, nullptr);\ng_keyframe_text = std::make_shared<ArkUITextNode>();\n// 该函数为封装功能为在text组件中打印Animateto中参数值，使用者根据需要自行封装\ng_keyframe_text->KeyframeAnimatetoToString();\nauto onTouch = [](ArkUI_NodeEvent *event) {\n    // 点击button按钮时触发该逻辑，NUM_1 = 1\n    if (OH_ArkUI_NodeEvent_GetTargetId(event) == NUM_1) {\n        // 获取context对象\n        ArkUI_ContextHandle context = nullptr;\n        // std::shared_ptr<ArkUIButtonNode> g_keyframe_button存储button的全局变量，在onTouch注册时需要使用\n        context = OH_ArkUI_GetContextByNode(g_keyframe_button->GetHandle());\n        // 获取ArkUI_NativeAnimateAPI接口\n        ArkUI_NativeAnimateAPI_1 *animateApi = nullptr;\n        OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_ANIMATE, ArkUI_NativeAnimateAPI_1, animateApi);\n            \n        // 以下代码为创建关键帧动画的关键流程，包括设置关键帧动画参数、开启关键帧动画\n        // 设置ArkUI_KeyframeAnimateOption参数，通过提供的C方法设置对应的参数\n        // 关键帧动画状态数，NUM_2 = 2，NUM_500 = 500\n        ArkUI_KeyframeAnimateOption *option =  OH_ArkUI_KeyframeAnimateOption_Create(NUM_2);\n        OH_ArkUI_KeyframeAnimateOption_SetDelay(option, NUM_500);\n        // 第一段关键帧动画的持续时间，NUM_1000 = 1000，NUM_0 = 0\n        OH_ArkUI_KeyframeAnimateOption_SetDuration(option, NUM_1000, NUM_0);\n        // 第二段关键帧动画的持续时间，NUM_2000 = 2000，NUM_1 = 1\n        OH_ArkUI_KeyframeAnimateOption_SetDuration(option, NUM_2000, NUM_1);\n        // 关键帧动画播放次数，NUM_5 = 5\n        OH_ArkUI_KeyframeAnimateOption_SetIterations(option, NUM_5);\n        ArkUI_CurveHandle curve = OH_ArkUI_Curve_CreateCubicBezierCurve(0.5f, 4.0f, 1.2f, 0.0f);\n        // 以下四种曲线需要根据实际业务选择\n        ArkUI_CurveHandle springCurve = OH_ArkUI_Curve_CreateSpringCurve(0.5f, 4.0f, 1.2f, 0.0f);\n        ArkUI_CurveHandle springMotionCurve = OH_ArkUI_Curve_CreateSpringMotion(0.5f, 0.6f, 0.0f);\n        ArkUI_CurveHandle responsiveSpringMotionCurve = OH_ArkUI_Curve_CreateResponsiveSpringMotion(0.5f,\n            4.0f, 1.2f);\n        ArkUI_CurveHandle interpolatingSpringCurve = OH_ArkUI_Curve_CreateInterpolatingSpring(0.5f,\n            4.0f, 1.2f, 0.0f);\n        OH_ArkUI_KeyframeAnimateOption_SetCurve(option, curve, 1);\n        OH_ArkUI_KeyframeAnimateOption_RegisterOnEventCallback(option, nullptr, [](void *userData) {\n              g_keyframe_button->SetWidth(NUM_150);\n        }, NUM_0); // 第一段关键帧时刻状态的闭包函数NUM_150 = 150，NUM_0 = 0\n        OH_ArkUI_KeyframeAnimateOption_RegisterOnEventCallback(option, nullptr, [](void *userData) {\n              g_keyframe_button->SetWidth(80);\n        }, NUM_1); // 第二段关键帧时刻状态的闭包函数NUM_1 = 1\n        KeyFrameAnimateToData* data = new KeyFrameAnimateToData();\n        data->option = option;\n        data->curve = curve;\n        OH_ArkUI_KeyframeAnimateOption_RegisterOnFinishCallback(option, nullptr, [](void *user) {\n            KeyFrameAnimateToData* data = reinterpret_cast<KeyFrameAnimateToData*>(user);\n            if (data) {\n                ArkUI_KeyframeAnimateOption* option = data->option;\n                ArkUI_CurveHandle curve = data->curve;\n                if (option) {\n                    OH_ArkUI_KeyframeAnimateOption_Dispose(option);\n                    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN,\n                        \"Init\", \"CXX OH_ArkUI_KeyframeAnimateOption_Dispose  success!\");\n                }\n                if (curve) {\n                    OH_ArkUI_Curve_DisposeCurve(curve);\n                    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN,\n                        \"Init\", \"CXX OH_ArkUI_Curve_DisposeCurve  success!\");\n                }\n                delete data; // 释放结构体\n            }\n        }); // 关键帧动画结束回调\n        ArkUI_ExpectedFrameRateRange *range = new ArkUI_ExpectedFrameRateRange;\n        range->max = NUM_120; // NUM_120 = 120\n        range->expected = NUM_60; // NUM_60 = 60\n        range->min = NUM_30; // NUM_30 = 30\n        OH_ArkUI_KeyframeAnimateOption_SetExpectedFrameRate(option, range); // 关键帧设置期望帧率\n\n        // 执行对应的动画\n        animateApi->keyframeAnimateTo(context, option);\n        auto delay = OH_ArkUI_KeyframeAnimateOption_GetDelay(option);\n        auto iter = OH_ArkUI_KeyframeAnimateOption_GetIterations(option);\n        auto expected = OH_ArkUI_KeyframeAnimateOption_GetExpectedFrameRate(option); // 获取关键帧动画参数的期望帧率\n        auto dur0 = OH_ArkUI_KeyframeAnimateOption_GetDuration(option, NUM_1); // NUM_1 = 1\n        auto dur1 = OH_ArkUI_KeyframeAnimateOption_GetDuration(option, NUM_1);\n        auto curves = OH_ArkUI_KeyframeAnimateOption_GetCurve(option, NUM_1); // 获取关键帧动画某段状态动画曲线\n        g_keyframe_text->KeyframeAnimatetoToString(dur0, dur1, delay, iter, *expected);\n    }\n};\n// 注册点击事件的回调函数\nbutton->RegisterNodeEventReceiver(onTouch);\n// 将button挂载在column上，返回column节点\ncolumn->AddChild(g_keyframe_text);\ncolumn->AddChild(textNode);\ncolumn->AddChild(button);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(173106)/* ["default"] */.A) + "",
        width: "193",
        height: "136"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用帧动画",
      children: "使用帧动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["帧动画具有逐帧回调的特性，便于开发者在每一帧中调整所需属性。通过提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-animate-h/capi-native-animate-h#oh_arkui_animatoroption_registeronframecallback",
        children: "onFrame"
      }), "逐帧回调，帧动画允许开发者在应用的每一帧设置属性值，从而实现组件属性值变化的自然过渡，营造出流畅的动画效果。帧动画接口可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativeanimateapi-1/capi-arkui-nativemodule-arkui-nativeanimateapi-1#createanimator",
        children: "createAnimator"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与属性动画相比，帧动画能让开发者实时感知动画进程，即时调整UI值，并具备事件即时响应和可暂停的优势，但在性能方面略逊于属性动画。当属性动画能满足需求时，建议优先采用属性动画接口实现。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativeanimateapi-1/capi-arkui-nativemodule-arkui-nativeanimateapi-1#animateto",
        children: "animateTo"
      }), "接口的使用可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%E5%8A%A8%E7%94%BB",
        children: "使用属性动画"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要演示如何通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativeanimateapi-1/capi-arkui-nativemodule-arkui-nativeanimateapi-1#createanimator",
        children: "createAnimator"
      }), "来设置帧动画，完整的示例工程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/AnimationNDK",
        children: "AnimationNDK"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "std::shared_ptr<ArkUIBaseNode> CreateAnimator()\n{\n    auto column = std::make_shared<ArkUIColumnNode>();\n    column->SetWidth(NUM_300); // NUM_300 = 300\n    column->SetHeight(NUM_250); // NUM_250 = 250\n    // 创建文本节点，内容区介绍“这是animator动画”\n    auto textNode = std::make_shared<ArkUITextNode>();\n    textNode->SetTextContent(\"这是animator动画\");\n    textNode->SetWidth(NUM_120); // NUM_120 = 120\n    textNode->SetHeight(NUM_50); // NUM_50 = 50\n    // 创建createButton，用于初始化animator参数\n    auto createButton = std::make_shared<ArkUIButtonNode>();\n    // 创建button，后续创建的animator动画作用在button组件上\n    auto button = std::make_shared<ArkUIButtonNode>();\n    // 设置button初始宽高，NUM_100 = 100\n    button->SetWidth(NUM_100);\n    button->SetHeight(NUM_100);\n    // 存储button全局变量，在onTouch注册时需要使用\n    g_animator_button = button;\n    // 注册点击事件到button上，NUM_3 = 3\n    createButton->RegisterNodeEvent(createButton->GetHandle(), NODE_ON_CLICK, NUM_3, nullptr);\n    g_animator_text = std::make_shared<ArkUITextNode>();\n    g_animator_text->AnimatorToString();\n    auto onTouch = [](ArkUI_NodeEvent *event) {\n        // 点击button按钮时触发该逻辑，NUM_3 = 3\n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == NUM_3) {\n            // 获取context对象\n            static ArkUI_ContextHandle context = nullptr;\n            context = OH_ArkUI_GetContextByNode(g_animator_button->GetHandle());\n\n            // 获取ArkUI_NativeAnimateAPI接口\n            ArkUI_NativeAnimateAPI_1 *animateApi = nullptr;\n            OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_ANIMATE, ArkUI_NativeAnimateAPI_1, animateApi);\n            \n            // 以下代码为创建Animator动画的关键流程，包括设置Animator动画参数、开启Animator动画\n            // 设置ArkUI_AnimatorOption参数，通过提供的C方法设置对应的参数，NUM_0 = 0\n            static ArkUI_AnimatorOption *option =  OH_ArkUI_AnimatorOption_Create(NUM_0); // Animator动画状态数\n            OH_ArkUI_AnimatorOption_SetDuration(option, NUM_2000); // NUM_2000 = 2000\n            OH_ArkUI_AnimatorOption_SetDelay(option, NUM_10); // NUM_10 = 10\n            OH_ArkUI_AnimatorOption_SetIterations(option, NUM_3); // NUM_3 = 3\n            OH_ArkUI_AnimatorOption_SetFill(option, ARKUI_ANIMATION_FILL_MODE_NONE);\n            OH_ArkUI_AnimatorOption_SetDirection(option, ARKUI_ANIMATION_DIRECTION_NORMAL);\n            ArkUI_CurveHandle curve = OH_ArkUI_Curve_CreateCubicBezierCurve(0.5f, 4.0f, 1.2f, 0.0f); // 构造三阶贝塞尔曲线对象\n            OH_ArkUI_AnimatorOption_SetCurve(option, curve);\n            OH_ArkUI_AnimatorOption_SetBegin(option, NUM_100); // NUM_100 = 100\n            OH_ArkUI_AnimatorOption_SetEnd(option, NUM_150); // NUM_150 = 150\n            ArkUI_ExpectedFrameRateRange *range = new ArkUI_ExpectedFrameRateRange;\n            range->max = NUM_120; // NUM_120 = 120\n            range->expected = NUM_60; // NUM_60 = 60\n            range->min = NUM_30; // NUM_30 = 30\n            OH_ArkUI_AnimatorOption_SetExpectedFrameRateRange(option, range);\n            OH_ArkUI_AnimatorOption_SetKeyframe(option, 0.5, 120.5, NUM_0); // 设置animator动画关键帧参数，NUM_0 = 0\n            OH_ArkUI_AnimatorOption_SetKeyframeCurve(option, curve, NUM_0); // 设置animator动画关键帧曲线类型\n            OH_ArkUI_AnimatorOption_RegisterOnFrameCallback(option, nullptr, [](ArkUI_AnimatorOnFrameEvent *event)\n            {\n                OH_ArkUI_AnimatorOnFrameEvent_GetUserData(event); // 获取动画事件对象中的用户自定义对象\n                auto value = OH_ArkUI_AnimatorOnFrameEvent_GetValue(event); // 获取动画事件对象中的当前进度\n                OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"Init\",\n                    \"CXX OH_ArkUI_AnimatorOption_RegisterOnFrameCallback  %{public}f\", value);\n                g_animator_button->SetWidth(value);\n            });\n            OH_ArkUI_AnimatorOption_RegisterOnFinishCallback(option, nullptr, [](ArkUI_AnimatorEvent* event)\n            {\n                OH_ArkUI_AnimatorEvent_GetUserData(event); // 获取动画事件对象中的用户自定义对象\n            });\n            OH_ArkUI_AnimatorOption_RegisterOnCancelCallback(option, nullptr, [](ArkUI_AnimatorEvent* event)\n            {\n            });\n            OH_ArkUI_AnimatorOption_RegisterOnRepeatCallback(option, nullptr, [](ArkUI_AnimatorEvent* event)\n            {\n            });\n            // 执行对应的动画\n            animatorHandle = animateApi->createAnimator(context, option);\n            \n            auto duration = OH_ArkUI_AnimatorOption_GetDuration(option);\n            auto delay = OH_ArkUI_AnimatorOption_GetDelay(option);\n            auto iterations = OH_ArkUI_AnimatorOption_GetIterations(option);\n            auto fill = OH_ArkUI_AnimatorOption_GetFill(option);\n            auto direction = OH_ArkUI_AnimatorOption_GetDirection(option);\n            auto curves = OH_ArkUI_AnimatorOption_GetCurve(option); // 获取animator动画插值曲线\n            auto begin = OH_ArkUI_AnimatorOption_GetBegin(option);\n            auto end = OH_ArkUI_AnimatorOption_GetEnd(option); // 获取animator动画插值终点\n            auto expected = OH_ArkUI_AnimatorOption_GetExpectedFrameRateRange(option); // 获取关键帧动画参数的期望帧率\n            auto keyframeTime = OH_ArkUI_AnimatorOption_GetKeyframeTime(option, NUM_0); // 获取animator动画关键帧时间\n            auto keyframeValue = OH_ArkUI_AnimatorOption_GetKeyframeValue(option, NUM_0); // 获取animator动画关键帧数值\n            auto keyframeCurve = OH_ArkUI_AnimatorOption_GetKeyframeCurve(option, NUM_0); // 获取animator动画关键帧动画插值曲线\n            g_animator_text->AnimatorToString(duration, delay, iterations, fill, direction, begin,\n                end, *expected, keyframeTime, keyframeValue);\n        }\n    };\n\n    // 注册点击事件的回调函数\n    createButton->RegisterNodeEventReceiver(onTouch);\n    createButton->SetButtonLabel(\"create\");\n    // 创建容器，用于存放button按键\n    auto buttoColumn = std::make_shared<ArkUIColumnNode>();\n    buttoColumn->SetPadding(NUM_30, false); // 设置布局格式，调整组件内间距，NUM_30 = 30\n    buttoColumn->SetWidth(NUM_300); // NUM_300 = 300\n    // 创建容器，用于存放playButton按键\n    auto playButtonColumn = std::make_shared<ArkUIColumnNode>();\n    playButtonColumn->SetPadding(NUM_10, false); // 设置布局格式，调整组件内间距，NUM_10 = 10\n    playButtonColumn->SetWidth(NUM_300); // NUM_300 = 300\n    // 设置animator播放按钮\n    auto playButton = std::make_shared<ArkUIButtonNode>();\n    playButton->SetButtonLabel(\"play\");\n    playButton->RegisterNodeEvent(playButton->GetHandle(), NODE_ON_CLICK, NUM_4, nullptr);\n    auto onTouchPlay = [](ArkUI_NodeEvent *event) {\n        // 点击button按钮时触发该逻辑，NUM_4 = 4\n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == NUM_4) {\n            OH_ArkUI_Animator_Play(animatorHandle);\n        }\n    };\n    playButton->RegisterNodeEventReceiver(onTouchPlay);\n    // 设置animator结束按钮\n    auto finishButton = std::make_shared<ArkUIButtonNode>();\n    finishButton->SetButtonLabel(\"finish\");\n    finishButton->RegisterNodeEvent(finishButton->GetHandle(), NODE_ON_CLICK, NUM_5, nullptr); // NUM_5 = 5\n    auto onTouchFinish = [](ArkUI_NodeEvent *event) {\n        // 点击button按钮时触发该逻辑，NUM_5 = 5\n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == NUM_5) {\n            OH_ArkUI_Animator_Finish(animatorHandle);\n        }\n    };\n    finishButton->RegisterNodeEventReceiver(onTouchFinish);\n    // 创建容器，用于存放resetButton按键\n    auto resetButtonColumn = std::make_shared<ArkUIColumnNode>();\n    resetButtonColumn->SetPadding(NUM_10, false); // 设置布局格式，调整组件内间距，NUM_10 = 10\n    resetButtonColumn->SetWidth(NUM_300); // NUM_300 = 300\n    // 设置animator更新按钮\n    auto resetButton = std::make_shared<ArkUIButtonNode>();\n    resetButton->SetButtonLabel(\"reset\");\n    resetButton->RegisterNodeEvent(resetButton->GetHandle(), NODE_ON_CLICK, NUM_6, nullptr); // NUM_6 = 6\n    auto onTouchReset = [](ArkUI_NodeEvent *event) {\n        // 点击button按钮时触发该逻辑，NUM_6 = 6\n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == NUM_6) {\n            static ArkUI_AnimatorOption *option =  OH_ArkUI_AnimatorOption_Create(NUM_0); // Animator动画状态数\n            OH_ArkUI_AnimatorOption_SetDuration(option, NUM_1000); // NUM_1000 = 1000\n            OH_ArkUI_AnimatorOption_SetDelay(option, NUM_0);\n            OH_ArkUI_AnimatorOption_SetIterations(option, NUM_4); // NUM_4 = 4\n            // 根据实际业务需求选择下述两种曲线，设置OH_ArkUI_AnimatorOption_SetCurve\n            auto curve = OH_ArkUI_Curve_CreateCurveByType(ARKUI_CURVE_EASE); // 动画以低速开始，然后加快，在结束前变慢\n            auto stepsCurve = OH_ArkUI_Curve_CreateStepsCurve(NUM_20, true); // 构造阶梯曲线对象，NUM_20 = 20\n            OH_ArkUI_AnimatorOption_SetCurve(option, curve);\n            OH_ArkUI_AnimatorOption_SetBegin(option, NUM_200); // NUM_200 = 200\n            OH_ArkUI_AnimatorOption_SetEnd(option, NUM_100); // NUM_100 = 100\n            OH_ArkUI_AnimatorOption_RegisterOnFrameCallback(option, nullptr, [](ArkUI_AnimatorOnFrameEvent *event)\n            {\n                OH_ArkUI_AnimatorOnFrameEvent_GetUserData(event); // 获取动画事件对象中的用户自定义对象\n                auto value = OH_ArkUI_AnimatorOnFrameEvent_GetValue(event); // 获取动画事件对象中的当前进度\n                g_animator_button->SetWidth(value);\n            });\n            OH_ArkUI_Animator_ResetAnimatorOption(animatorHandle, option);\n        }\n    };\n    resetButton->RegisterNodeEventReceiver(onTouchReset);\n    // 设置animator暂停按钮\n    auto pauseButton = std::make_shared<ArkUIButtonNode>();\n    pauseButton->SetButtonLabel(\"pause\");\n    pauseButton->RegisterNodeEvent(pauseButton->GetHandle(), NODE_ON_CLICK, NUM_7, nullptr); // NUM_7 = 7\n    auto onTouchPause = [](ArkUI_NodeEvent *event) {\n        // 点击button按钮时触发该逻辑，NUM_7 = 7\n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == NUM_7) {\n            OH_ArkUI_Animator_Pause(animatorHandle);\n        }\n    };\n    pauseButton->RegisterNodeEventReceiver(onTouchPause);\n    // 创建容器，用于存放cancelButton按键\n    auto cancelButtonColumn = std::make_shared<ArkUIColumnNode>();\n    cancelButtonColumn->SetPadding(NUM_10, false); // 设置布局格式，调整组件内间距，NUM_10 = 10\n    cancelButtonColumn->SetWidth(NUM_300); // NUM_300 = 300\n    // 设置animator取消按钮\n    auto cancelButton = std::make_shared<ArkUIButtonNode>();\n    cancelButton->SetButtonLabel(\"cancel\");\n    cancelButton->RegisterNodeEvent(cancelButton->GetHandle(), NODE_ON_CLICK, NUM_8, nullptr); // NUM_8 = 8\n    auto onTouchCancel = [](ArkUI_NodeEvent *event) {\n        // 点击button按钮时触发该逻辑，NUM_8 = 8\n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == NUM_8) {\n            OH_ArkUI_Animator_Cancel(animatorHandle);\n        }\n    };\n    cancelButton->RegisterNodeEventReceiver(onTouchCancel);\n    // 设置animator以相反的顺序播放按钮\n    auto reverseButton = std::make_shared<ArkUIButtonNode>();\n    reverseButton->SetButtonLabel(\"reverse\");\n    reverseButton->RegisterNodeEvent(reverseButton->GetHandle(), NODE_ON_CLICK, NUM_9, nullptr);\n    auto onTouchReverse = [](ArkUI_NodeEvent *event) {\n        // 点击button按钮时触发该逻辑，NUM_9 = 9\n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == NUM_9) {\n            OH_ArkUI_Animator_Reverse(animatorHandle);\n        }\n    };\n    reverseButton->RegisterNodeEventReceiver(onTouchReverse);\n    // 将button挂载在column上，返回column节点\n    column->AddChild(g_animator_text);\n    column->AddChild(textNode);\n    column->AddChild(button);\n    buttoColumn->AddChild(createButton);\n    playButtonColumn->AddChild(playButton);\n    buttoColumn->AddChild(playButtonColumn);\n    buttoColumn->AddChild(finishButton);\n    resetButtonColumn->AddChild(resetButton);\n    buttoColumn->AddChild(resetButtonColumn);\n    buttoColumn->AddChild(pauseButton);\n    cancelButtonColumn->AddChild(cancelButton);\n    buttoColumn->AddChild(cancelButtonColumn);\n    buttoColumn->AddChild(reverseButton);\n    column->AddChild(buttoColumn);\n    return column;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(378644)/* ["default"] */.A) + "",
        width: "293",
        height: "625"
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
37461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478063-652461eabae77871a22566f52f953e78.gif");

},
378644(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438109-a2c4d2a88b723ea2d299559388f00759.gif");

},
507540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958062-c24c1c11f3e707c29f9489a30aa43953.gif");

},
200792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
173106(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798414-da577ddd985e9de3a6fdd1cab0558ad8.gif");

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