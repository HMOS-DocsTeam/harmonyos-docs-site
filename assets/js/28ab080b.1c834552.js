"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["343239"], {
310234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_cashier_design_payment_cashier_design_md_28a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-cashier-design-payment-cashier-design-md-28a.json
var site_docs_payment_kit_guide_payment_cashier_design_payment_cashier_design_md_28a_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-cashier-design/payment-cashier-design","title":"收银台设计规范","description":"功能需求","source":"@site/docs/payment-kit-guide/payment-cashier-design/payment-cashier-design.md","sourceDirName":"payment-kit-guide/payment-cashier-design","slug":"/payment-kit-guide/payment-cashier-design/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-cashier-design/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"收银台设计规范","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-cashier-design","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入Skill能力说明","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-skill-introduction/"},"next":{"title":"商户入网和获取商户号","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-merc-regist-apply/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-cashier-design/payment-cashier-design.md


const frontMatter = {
	title: '收银台设计规范',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-cashier-design',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '收银台设计规范';

const assets = {

};



const toc = [{
  "value": "功能需求",
  "id": "功能需求",
  "level": 2
}, {
  "value": "定义收银台页面容器",
  "id": "定义收银台页面容器",
  "level": 2
}, {
  "value": "搭建收银台页面",
  "id": "搭建收银台页面",
  "level": 2
}, {
  "value": "展示商户信息",
  "id": "展示商户信息",
  "level": 3
}, {
  "value": "构造支付方式列表",
  "id": "构造支付方式列表",
  "level": 3
}, {
  "value": "添加支付按钮",
  "id": "添加支付按钮",
  "level": 3
}, {
  "value": "页面数据定义",
  "id": "页面数据定义",
  "level": 2
}, {
  "value": "字符串、图片等资源",
  "id": "字符串图片等资源",
  "level": 3
}, {
  "value": "支付方式及支付类型枚举",
  "id": "支付方式及支付类型枚举",
  "level": 3
}, {
  "value": "支付方式测试数据",
  "id": "支付方式测试数据",
  "level": 3
}, {
  "value": "工具类",
  "id": "工具类",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "收银台设计规范",
        children: "收银台设计规范"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能需求",
      children: "功能需求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可在应用项目中实现支付收银台。应用项目由配置文件（module.json5）、页面代码（ets文件）以及资源文件（图片、字符串等）组成，实现的收银台包含以下功能：展示商户信息、金额、支付方式列表（用户选择的支付方式会变成选中状态）和支付按钮。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实现效果如下（具体实现可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/paymentkit-samplecode-uxcodeproject-arkts",
        children: "示例代码"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(873479)/* ["default"] */.A) + "",
        width: "207",
        height: "429"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定义收银台页面容器",
      children: "定义收银台页面容器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义收银台页面容器用于展示支付收银台。UX规范要求以半模态弹窗展示收银台，使用说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#%E7%A4%BA%E4%BE%8B1%E4%B8%8D%E5%90%8C%E9%AB%98%E5%BA%A6%E7%9A%84%E5%8D%8A%E6%A8%A1%E6%80%81%E5%BC%B9%E7%AA%97",
        children: "半模态转场"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "半模态容器CashierBindSheetContainer.ets示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CashierComponent } from './CashierComponent';\n\n@Component\nexport struct CashierBindSheetContainer {\n  @Builder\n  cashierBuilder() {\n    Column() {\n      CashierComponent();\n    }\n  }\n\n  build() {\n    Column() {\n      Column() {\n      }.bindSheet(true, this.cashierBuilder(), {\n        title: () => {},\n        height: SheetSize.FIT_CONTENT,\n        showClose: true,\n        enableOutsideInteractive: false,\n        backgroundColor: '#E5FFFFFF',\n        blurStyle: BlurStyle.COMPONENT_THICK,\n        onWillDismiss: ((action: DismissSheetAction) => {\n          // 退出事件监听\n        }),\n      });\n    }.width('100%');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "搭建收银台页面",
      children: "搭建收银台页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收银台首页CashierComponent.ets从整体上可分为三个部分：头部-商户信息展示、中部-支付方式列表、底部-支付按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码如下："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\nimport { getBorderRadius, isNewCardPaymentType } from '../util/PaymentUtil';\nimport { PaymentOrderComp } from './PaymentOrderComp';\nimport { PaymentItemComp } from './PaymentItemComp';\nimport { ConfirmButton } from './ConfirmButton';\nimport { PaymentType } from '../data/PaymentType';\nimport { paymentTypeList, paymentTypes3PayShow } from '../data/TestData';\n\n@Preview\n@Component\nexport struct CashierComponent {\n  // 商户名称\n  private mercShortName: string = \"华为支付测试商户\";\n  // 支付金额（单位为分）\n  private paymentAmount: string = '0.01';\n  // 当前选中的支付方式信息\n  @State selectedPaymentType: PaymentType = new PaymentType();\n  @State selectedPayTypeSerialNo: string = '';\n\n  // 头部：商户订单信息\n  @Builder\n  orderDetail() {\n    // 后续展示实现\n  }\n\n  // 中部：支付方式列表的标题\n  @Builder\n  displayHeader() {\n    // 后续展示实现\n  }\n\n  // 中部：其他支付方式选项\n  @Builder\n  moreBankFooter() {\n    // 后续展示实现\n  }\n\n  // 中部：选择支付方式事件\n  select(PaymentType: PaymentType) {\n    // 后续展示实现\n  }\n\n  // 中部：支付方式列表\n  @Builder\n  paymentListBuilder() {\n    // 后续展示实现\n  }\n\n  // 中部：支付方式列表 容器\n  @Builder\n  paymentListContent() {\n    Column() {\n      this.paymentListBuilder();\n    }\n    .margin({\n      bottom: 12,\n    })\n  }\n\n  // 底部：按钮区域\n  @Builder\n  buttonArea() {\n    // 后续展示实现\n  }\n\n  // 收银台首页\n  @Builder\n  cashierUI() {\n    // 订单信息+支付方式区域\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {\n      this.orderDetail();\n      this.paymentListContent();\n    }\n    .align(Alignment.Top)\n    .padding({\n      left: $r('sys.float.ohos_id_elements_margin_horizontal_l'),\n      right: $r('sys.float.ohos_id_elements_margin_horizontal_l'),\n    })\n\n    // 按钮区域\n    Column() {\n      this.buttonArea();\n      // 底部aiBar的高度\n      Row()\n        .width('100%')\n        .height(28)\n        .margin({ top: $r('sys.float.ohos_id_elements_margin_vertical_l') })\n    }\n    .flexShrink(0)\n    .padding({\n      left: $r('sys.float.ohos_id_elements_margin_horizontal_l'),\n      right: $r('sys.float.ohos_id_elements_margin_horizontal_l'),\n    })\n  }\n\n  // 页面容器\n  build() {\n    Column() {\n      this.cashierUI();\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "运行结果："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(701000)/* ["default"] */.A) + "",
        width: "207",
        height: "429"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "展示商户信息",
      children: "展示商户信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收银台首页CashierComponent.ets的orderDetail组件为商户信息展示。商户信息竖向居中排列，包含商户名称以及订单金额。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码如下"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\norderDetail() {\n  Column() {\n    PaymentOrderComp({\n      mercShortName: this.mercShortName,\n      paymentAmount: this.paymentAmount,\n    })\n    .margin({ bottom: 24 });\n  }\n  .width('100%')\n  .padding({\n    top: $r('sys.float.ohos_id_elements_margin_vertical_m'),\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中商户订单信息类PaymentOrderComp.ets实现如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Amount } from \"./Amount\";\n\n@Component\nexport struct PaymentOrderComp {\n  @Prop mercShortName: ResourceStr = '';\n  @Prop paymentAmount: string = '';\n\n  build() {\n    Column() {\n      Text(this.mercShortName)\n        .fontFamily('HarmonyHeiTi')\n        .fontSize($r('sys.float.ohos_id_text_size_body2'))\n        .fontColor($r('sys.color.ohos_id_color_text_secondary'))\n        .textAlign(TextAlign.Center)\n        .fontWeight(FontWeight.Normal)\n\n      Amount({\n        amount: this.paymentAmount,\n      }).margin({ top: 2 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中金额类Amount.ets实现如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const FONT_FAMILY_HEITI = 'HarmonyHeiTi';\n\n@Component\n@Preview\nexport struct Amount {\n  @Prop amount: string = '';\n  private currency: string = '¥';\n  private color: ResourceStr = $r('sys.color.ohos_id_color_text_primary');\n\n  build() {\n    Row() {\n      Text() {\n        Span(this.currency)\n          .fontSize(24)\n          .fontFamily(FONT_FAMILY_HEITI)\n          .fontWeight(FontWeight.Bold)\n          .fontColor(this.color)\n          .alignSelf(ItemAlign.Baseline)\n        Span(this.amount)\n          .fontSize(36)\n          .fontFamily(FONT_FAMILY_HEITI)\n          .fontWeight(FontWeight.Bold)\n          .fontColor(this.color)\n      }\n    }.justifyContent(FlexAlign.Center)\n    .alignItems(VerticalAlign.Bottom)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "运行结果："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(143807)/* ["default"] */.A) + "",
        width: "351",
        height: "89"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "构造支付方式列表",
      children: "构造支付方式列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收银台首页CashierComponent.ets的paymentListBuilder组件为收银台中部信息，包含支付方式列表。用户点击选择的支付方式会变成选中状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码如下"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\npaymentListBuilder() {\n  Column() {\n    List() {\n      ListItemGroup({\n        header: this.displayHeader(),\n        style: ListItemGroupStyle.CARD,\n      }) {\n        ForEach(paymentTypeList, (paymentType: PaymentType) => {\n          ListItem({ style: ListItemStyle.CARD }) {\n            PaymentItemComp({\n              paymentType: paymentType,\n              canChecked: !isNewCardPaymentType(paymentType),\n              isChecked: this.selectedPayTypeSerialNo === paymentType.payTypeSerialNo,\n              onSelect: () => {\n                if (paymentType.isAvailable) {\n                  this.select(paymentType);\n                }\n              },\n            })\n          }\n          .height(undefined)\n          .constraintSize({ minHeight: 48 })\n          .backgroundColor(Color.Transparent)\n        })\n\n        // 其他支付方式\n        ListItem({ style: ListItemStyle.CARD }) {\n          this.moreBankFooter();\n        }\n        .height(undefined)\n        .constraintSize({ minHeight: 48 })\n        .backgroundColor(Color.Transparent)\n      }.divider({\n        strokeWidth: 0.5,\n        color: $r('sys.color.ohos_id_color_list_separator'),\n        startMargin: 48,\n        endMargin: 12,\n      }).margin({\n        left: 0,\n        right: 0,\n      }).backgroundColor($r('sys.color.comp_background_list_card'))\n    }.width('100%')\n\n    // 三方支付方式\n    List() {\n      ListItemGroup({ style: ListItemGroupStyle.CARD }) {\n        ForEach(paymentTypes3PayShow, (paymentType: PaymentType) => {\n          ListItem({ style: ListItemStyle.CARD }) {\n            PaymentItemComp({\n              paymentType: paymentType,\n              canChecked: true,\n              isChecked: this.selectedPayTypeSerialNo === paymentType.payTypeSerialNo,\n              onSelect: () => {\n                if (paymentType.isAvailable) {\n                  this.select(paymentType);\n                }\n              },\n            })\n          }\n          .height(undefined)\n          .constraintSize({ minHeight: 48 })\n          .backgroundColor(Color.Transparent)\n        })\n      }.divider({\n        strokeWidth: 0.5,\n        color: $r('sys.color.ohos_id_color_list_separator'),\n        startMargin: 48,\n        endMargin: 12,\n      })\n      .margin({\n        left: 0,\n        right: 0,\n      }).backgroundColor($r('sys.color.comp_background_list_card'))\n    }\n    .width('100%')\n    .margin({\n      top: 12,\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中列表标题组件displayHeader示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\ndisplayHeader() {\n  Column() {\n    Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n      Image($r('app.media.kit_hwpay_wallet'))\n        .borderRadius(getBorderRadius(24))\n        .width(24)\n        .height(24)\n        .margin({ end: LengthMetrics.vp(16) })\n\n      Text($r('app.string.kit_hwpay_desc'))\n        .fontSize(16)\n        .fontWeight(FontWeight.Medium)\n        .fontFamily('HarmonyHeiTi-Medium')\n        .fontColor($r('sys.color.ohos_id_color_text_primary'))\n    }\n    .width('100%')\n    .constraintSize({ minHeight: 48 })\n    .padding({\n      left: 8,\n      right: 8,\n      top: 12,\n      bottom: 12,\n    })\n\n    Divider()\n      .color($r('sys.color.ohos_id_color_list_separator'))\n      .width('100%')\n      .margin({\n        start: LengthMetrics.vp(48),\n        end: LengthMetrics.vp(12),\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中其它支付方式组件moreBankFooter示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nmoreBankFooter() {\n  Flex({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {\n    Text($r('app.string.kit_hwpay_change_other_pay_type'))\n      .fontSize(16)\n      .fontWeight(FontWeight.Medium)\n      .fontFamily('HarmonyHeiTi-Medium')\n      .fontColor($r('sys.color.ohos_id_color_text_primary'))\n\n    Image($r('app.media.kit_hwpay_right_v2'))\n      .matchTextDirection(true)\n      .width(12)\n      .height(24)\n      .fillColor($r('sys.color.ohos_id_color_fourth'))\n  }\n  .padding({\n    top: 12,\n    bottom: 12,\n  })\n  .margin({ start: LengthMetrics.vp(40) })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中支付方式组件类PaymentItemComp.ets实现展示可用、不可用的支付方式，添加银行卡以及用户选中支付方式后展示勾选效果。示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\nimport { PaymentType } from '../data/PaymentType';\nimport { getBorderRadius } from '../util/PaymentUtil';\n\nexport enum ButtonOpacity {\n  // 默认不透明度\n  PRIMARY = 1,\n  // 按钮置灰不透明度\n  DISABLED = 0.6,\n  // 支付方式不可用导致的按钮不可用的不透明度\n  PAYMENT_UNAVAILABLE = 0.38\n}\n\n@Component\nexport struct PaymentItemComp {\n  @Prop paymentType: PaymentType;\n  @Prop canChecked: boolean = false;\n  @Prop isChecked?: boolean = false;\n  onSelect: () => void = () => {\n  };\n\n  build() {\n    Row() {\n      Image($r(\"app.media.payment_logo\"))\n        .borderRadius(getBorderRadius(24))\n        .width(24)\n        .height(24)\n        .margin({ end: LengthMetrics.vp(16) })\n\n      Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center }) {\n        Flex({\n          direction: FlexDirection.Row,\n          justifyContent: FlexAlign.Start,\n          alignItems: ItemAlign.Center,\n        }) {\n          Text(this.paymentType?.payTypeDesc)\n            .fontSize(16)\n            .fontWeight(FontWeight.Medium)\n            .fontFamily('HarmonyHeiTi-Medium')\n            .fontColor($r('sys.color.ohos_id_color_text_primary'))\n        }\n        .padding({\n          top: (this.paymentType?.paymentTypeTip) ? 4 : 0,\n        })\n\n        if (this.paymentType?.paymentTypeTip) {\n          Row() {\n            Text(this.paymentType?.paymentTypeTip)\n              .fontSize($r('sys.float.ohos_id_text_size_body3'))\n              .fontColor($r('sys.color.comp_focused_secondary'))\n              .fontFamily('HarmonyHeiTi')\n              .fontWeight(FontWeight.Normal)\n              .width('90%')\n              .padding({ top: 4, bottom: 4 })\n          }\n        }\n      }\n      .layoutWeight(1)\n\n      if (this.canChecked) {\n        Radio({ value: this.paymentType?.payTypeSerialNo as string, group: 'aggrPaymentRadioGroup' })\n          .visibility(this.isChecked ? Visibility.Visible : Visibility.Hidden)\n          .checked(this.isChecked)\n          .height(20)\n          .width(20)\n          .margin(2)\n      } else {\n        Image($r('app.media.kit_hwpay_right_v2'))\n          .width(12)\n          .height(24)\n          .fillColor($r('sys.color.ohos_id_color_fourth'))\n          .visibility(this.paymentType?.isAvailable ? Visibility.Visible : Visibility.None)\n      }\n    }\n    .padding({\n      top: 12,\n      bottom: 12,\n    })\n    .opacity(this.paymentType?.isAvailable ? ButtonOpacity.PRIMARY : ButtonOpacity.PAYMENT_UNAVAILABLE)\n    .alignItems(VerticalAlign.Center)\n    .onClick(() => {\n      if (!this.paymentType?.isAvailable) {\n        return;\n      }\n      this.onSelect();\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收银台首页CashierComponent.ets中选择支付方式事件示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "select(PaymentType: PaymentType) {\n  this.selectedPaymentType = PaymentType;\n  this.selectedPayTypeSerialNo = PaymentType.payTypeSerialNo || '';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "运行结果："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(587261)/* ["default"] */.A) + "",
        width: "353",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加支付按钮",
      children: "添加支付按钮"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收银台首页CashierComponent.ets的buttonArea组件为收银台底部信息，包含支付按钮。开发者可通过按钮点击事件实现具体支付处理逻辑。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码如下"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nbuttonArea() {\n  ConfirmButton({\n    text: $r('app.string.kit_hwpay_checkout_confirm_pay'),\n  })\n  .margin({\n    top: $r('sys.float.ohos_id_elements_margin_vertical_l'),\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中确认支付按钮类ConfirmButton.ets示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\n@Preview\nexport struct ConfirmButton {\n  @Prop text: ResourceStr = '';\n\n  build() {\n    Column() {\n      Row() {\n        Button(this.text) {\n          Row() {\n            Text(this.text)\n              .fontSize($r('sys.float.Body_L'))\n              .fontWeight(FontWeight.Medium)\n              .fontFamily('HarmonyHeiTi-Medium')\n              .fontColor($r('sys.color.ohos_fa_text_contrary'))\n              .textAlign(TextAlign.Center)\n              .textOverflow({\n                overflow: TextOverflow.Ellipsis\n              })\n              .maxLines(1)\n          }\n          .alignItems(VerticalAlign.Center)\n          .justifyContent(FlexAlign.Center)\n        }\n        .focusOnTouch(true)\n        .type(ButtonType.Normal)\n        .borderRadius(20)\n        .backgroundColor($r('sys.color.ohos_id_color_floating_button_bg_normal'))\n        .constraintSize({\n          minWidth: '100%',\n          maxWidth: '100%',\n          minHeight: 40,\n          maxHeight: 40,\n        })\n        .padding({\n          top: 4,\n          bottom: 4,\n          left: 16,\n          right: 16,\n        })\n        .opacity(1)\n        .stateEffect(true)\n      }\n      .onClick(() => {\n        // 按钮点击事件\n      })\n    }.width('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "运行结果："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(861134)/* ["default"] */.A) + "",
        width: "207",
        height: "47"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面数据定义",
      children: "页面数据定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字符串图片等资源",
      children: "字符串、图片等资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件摆放位置为“src/main/resources”相应的目录下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支付方式及支付类型枚举",
      children: "支付方式及支付类型枚举"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支付方式PaymentType.ets类及支付类型枚举CustPayType.ets类定义示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 支付方式：PaymentType.ets\nexport class PaymentType {\n  payTypeSerialNo?: string;\n  payTypeDesc?: string;\n  paymentTypeTip?: string;\n  isAvailable?: boolean;\n  custPayType: string = '';\n}\n\n// 支付类型枚举：CustPayType.ets\nexport enum CustPayType {\n  NewBankCard = 'NewBankCard',\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支付方式测试数据",
      children: "支付方式测试数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试使用的支付方式数据TestData.ets类定义示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PaymentType } from \"./PaymentType\";\n\nexport const paymentTypeList: PaymentType[] = [\n  {\n    payTypeSerialNo: '1',\n    payTypeDesc: 'xx银行储蓄卡 (0606)',\n    isAvailable: true,\n    custPayType: 'BankFastPayment',\n  },\n  {\n    payTypeSerialNo: '2',\n    payTypeDesc: 'xx银行储蓄卡 (0909)',\n    isAvailable: true,\n    custPayType: 'BankFastPayment',\n  }\n];\n\nexport const paymentTypes3PayShow: PaymentType[] = [\n  {\n    payTypeSerialNo: '3',\n    payTypeDesc: '云闪付',\n    isAvailable: true,\n    custPayType: 'CloudFlashPayment',\n  },\n  {\n    payTypeSerialNo: '4',\n    payTypeDesc: '微信支付',\n    isAvailable: true,\n    custPayType: 'WECHAT_MICROPAY',\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "工具类",
      children: "工具类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支付工具PaymentUtil.ets类定义示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CustPayType } from \"../data/CustPayType\";\nimport { PaymentType } from \"../data/PaymentType\";\n\n/**\n * 支付工具是否是新卡\n * @param paymentType 支付方式\n * @returns 是否为新卡支付方式\n */\nexport const isNewCardPaymentType = (paymentType: PaymentType): boolean => {\n  if (!paymentType) {\n    return false;\n  }\n  return paymentType.custPayType === CustPayType.NewBankCard;\n};\n\n/**\n * 获取图标圆角值\n * @param length 圆角值\n * @returns 图标圆角值\n */\nexport const getBorderRadius = (length: number): number => {\n  // 正方形图标圆角值为：14 / 54 * 图标边长\n  return 7 / 27 * length;\n}\n"
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
873479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959072-ae5315bfac502d7c3372e958cc234dc6.png");

},
701000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959072-ae5315bfac502d7c3372e958cc234dc6.png");

},
861134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
143807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
587261(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799424-8233dc0615d978e928cb630509d2e219.png");

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