---
title: "规则变更说明"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-codelinter-rules-change
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# 规则变更说明

## 6.1.0.609

新增规则

- [@performance/custom-node-memory-leak-check](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-node-memory-leak-check)
- [@performance/state-variable-usage-in-ui-format-check](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-state-variable-usage-in-ui-format-check)
- [@correctness/multimedia-use-stride-in-image-receiver](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-multimedia-use-stride-in-image-receiver)
- [@correctness/v1-nested-object-property-change-format-check](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-v1-nested-object-property-change-format-check)
- [@correctness/v1-state-object-member-used-in-function-parameter-check](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-v1-state-object-member-used-in-fun-parameter)

## 6.0.2.636

新增规则

- [@correctness/redundant-dependency-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-redundant-dependency-check)
- [@cross-device-app-dev/immersive-effect-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-immersive-effect-check)

## 6.0.1.246

新增规则

- [@compatibility/api-compatibility-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-compatibility/ide-api-compatibility-check)

## 6.0.0.848

新增规则

- [@security/no-unsafe-kdf](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-kdf)
- [@security/no-unsafe-sm4](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-sm4)
- [@security/no-unsafe-sm2-key](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-sm2-key)
- [@security/no-unsafe-sm2-cipher](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-sm2-cipher)
- [@security/no-unsafe-ecdh](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-ecdh)
- [@security/no-unsafe-huks](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-huks)

## 6.0.0.828

新增规则

- [@performance/no-use-any-import](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-no-use-any-import)
- [@performance/avoid-overusing-custom-component-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-avoid-overusing-custom-component-check)
- [@performance/bad-deep-clone-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-bad-deep-clone-check)
- [@performance/reasonable-audio-use-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reasonable-audio-use-check)
- [@performance/reasonable-sensor-use-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reasonable-sensor-use-check)
- [@performance/reasonable-gps-use-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reasonable-gps-use-check)
- [@performance/reuse-date-instances-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reuse-date-instances-check)
- [@performance/crypto-replacement-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-crypto-replacement-check)
- [@performance/monitor-invisible-area-in-image-animation](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-monitor-invisible-area-in-image-animation)
- [@performance/datashare-query-unrelease-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-datashare-query-unrelease-check)
- [@performance/dark-color-mode-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-dark-color-mode-check)
- [@performance/update-state-var-between-animatetos-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-update-state-var-between-animatetos-check)
- [@performance/tabs-on-change-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-tabs-on-change-check)
- [@performance/nested-post-frame-callback-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-nested-post-frame-callback-check)
- [@cross-device-app-dev/window-size-change-listener-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-window-size-change-listener-check)

## 6.0.0.418

新增规则

- [@performance/web-on-active-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-web-on-active-check)
- [@performance/gif-hardware-decoding-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-gif-hardware-decoding-check)
- [@cross-device-app-dev/one-multi-breakpoint-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-one-multi-breakpoint-check)

变更规则

- [@typescript-eslint/explicit-function-return-type](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_explicit-function-return-type)规则新增额外选项allowArkTS（默认为false），配置为true时，支持对.ets文件进行检查。

## 5.1.0.828

新增规则

- [@performance/web-cache-mode-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-performance-web-cache-mode-check)
- [@correctness/audio-interrupt-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-audio-interrupt-check)
- [@correctness/audio-pause-or-mute-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-audio-pause-or-mute-check)
- [@correctness/avsession-metadata-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-avsession-metadata-check)
- [@correctness/avsession-buttons-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-avsession-buttons-check)
- [@correctness/image-interpolation-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-image-interpolation-check)
- [@correctness/image-pixel-format-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-image-pixel-format-check)
- [@performance/hp-ffrt-no-use-std](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-ffrt-no-use-std)

变更规则

- [@performance/hp-arkui-use-taskpool-for-web-request](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-use-taskpool-for-web-request)所属规则集由recommended改为all。

## 5.0.7.100

新增规则

- [@performance/foreach-index-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-foreach-index-check)
- [@performance/js-code-cache-by-precompile-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-precompile-check)
- [@performance/js-code-cache-by-interception-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-interception-check)
- [@performance/init-list-component](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-init-list-component)
- [@correctness/listen-default-network-change](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide_listen-default-network-change)
- [@correctness/listen-multi-network-concurrent](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide_listen-multi-network-concurrent)
- [@security/no-unsafe-3des](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide-no-unsafe-3des)

变更规则

- [@performance/high-frequency-log-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-high-frequency-log-check)增加检测高频函数onWillScroll。
- [@typescript-eslint/prefer-readonly-parameter-types](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_prefer-readonly-parameter-types)和[@typescript-eslint/no-magic-numbers](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-magic-numbers)中，规则的默认告警级别由error改为warn。
- [@typescript-eslint/lines-between-class-members](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_lines-between-class-members)默认检查规则从成员变量之间必须有空行分隔，变更为成员变量和成员变量之间不需要有空行分隔。
- [@security/no-unsafe-hash](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-hash)新增对@ohos/crypto-js包中不安全Hash算法检查。
- [@security/no-unsafe-mac](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-mac)新增对@ohos/crypto-js包中不安全Mac算法检查。

## 5.0.5.200

变更规则

- [@performance/hp-arkui-avoid-empty-callback](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-avoid-empty-callback)所属规则集由recommended改为all。
- [@performance/hp-arkui-use-word-break-to-replace-zero-width-space](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-word-break-in-space)所属规则集由recommended改为all。
- [@performance/hp-arkui-remove-redundant-nest-container](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-redundant-nest)所属规则集由recommended改为all。
- [@performance/hp-arkui-remove-container-without-property](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-remove-container-without-property)所属规则集由recommended改为all。
- [@performance/sparse-array-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-sparse-array-check)所属规则集由recommended改为all。
- [@performance/number-init-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-number-init-check)所属规则集由recommended改为all。
- [@performance/typed-array-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-typed-array-check)所属规则集由recommended改为all。

## 5.0.3.800

****新增规则****

- [@performance/hp-arkui-reduce-pangesture-distance](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-reduce-ges-distance)
- [@performance/hp-arkui-suggest-use-get-anonymousid-async](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-sg-anonymousid-async)
- [@performance/multiple-associations-state-var-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-multi-associations-state-var-check)
- [@performance/constant-property-referencing-check-in-loops](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-constant-property-check-in-loops)
- [@performance/foreach-args-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-foreach-args-check)

****变更规则****

- [@security/specified-interface-call-chain-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide-specified-interface-call-chain-check)新增对命名空间namespace、类型别名type、接口interface、枚举enum和结构体struct的支持。namespace字段配置类型从字符串变更为数组。
- [@performance/high-frequency-log-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-high-frequency-log-check)默认告警等级从suggestion变更为warn，该规则新增至all规则集中。
- [@performance/number-init-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-number-init-check)默认告警等级从warn变更为suggestion，该规则新增至recommended规则集中。
- [@performance/start-window-icon-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-start-window-icon-check)默认告警等级从warn变更为suggestion，该规则新增至recommended规则集中。
- [@performance/sparse-array-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-sparse-array-check)默认告警等级从warn变更为suggestion，该规则新增至recommended规则集中。
- [@performance/typed-array-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-typed-array-check)默认告警等级从warn变更为suggestion，该规则新增至recommended规则集中。
- [@performance/waterflow-data-preload-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-waterflow-data-preload-check)该规则新增至recommended规则集中。
- [@performance/hp-arkts-no-use-any-export-current](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkts-no-use-any-export-current)告警级别由suggestion改为warn，该规则新增至recommended规则集中。
- [@performance/hp-arkts-no-use-any-export-other](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkts-no-use-any-export-other)，该规则新增至recommended规则集中。
- [@performance/hp-arkui-avoid-empty-callback](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-avoid-empty-callback)告警级别由warn改为suggestion。
- [@performance/hp-arkui-avoid-update-auto-state-var-in-aboutToReuse](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-abouttoreuse)，该规则新增至recommended规则集中。
- [@performance/hp-arkui-image-async-load](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-image-async-load)所属规则集由recommend改为all。
- [@performance/hp-arkui-load-on-demand](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-load-on-demand)告警级别由suggestion改为warn。
- [@performance/hp-arkui-no-stringify-in-lazyforeach-key-generator](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-stringify-lazyforeach-key)告警级别由suggestion改为warn，该规则新增至recommended规则集中。
- [@performance/hp-arkui-remove-container-without-property](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-remove-container-without-property)告警级别由warn改为suggestion。
- [@performance/hp-arkui-remove-redundant-nest-container](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-redundant-nest)告警级别由warn改为suggestion。
- [@performance/hp-arkui-replace-nested-reusable-component-by-builder](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui--replace-reusable-by-builder)告警级别由suggestion改为warn，该规则新增至recommended规则集中。
- [@performance/hp-arkui-suggest-cache-avplayer](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-cache-avplayer)告警级别由suggestion改为warn，该规则新增至recommended规则集中。
- [@performance/hp-arkui-suggest-reuseid-for-if-else-reusable-component](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-reuseid-if-else-component)告警级别由suggestion改为warn, 该规则新增至recommended规则集中。
- [@performance/hp-arkui-suggest-use-effectkit-blur](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-use-effectkit-blur)，该规则新增至recommended规则集中。
- [@performance/hp-arkui-use-grid-layout-options](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-grid-layout-options)告警级别由suggestion改为warn，该规则新增至recommended规则集中。
- [@performance/hp-arkui-use-local-var-to-replace-state-var](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-local-var-to-replace-state-var)告警级别由suggestion改为warn。
- [@performance/hp-arkui-use-onAnimationStart-for-swiper-preload](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-onanimationstart-in-swiper)告警级别由suggestion改为warn，该规则新增至recommended规则集中。
- [@performance/hp-arkui-use-reusable-component](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-reusable-component)告警级别由suggestion改为warn。
- [@performance/hp-arkui-use-row-column-to-replace-flex](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-row-column-to-replace-flex)，所属规则集由recommended改为all。
- [@performance/hp-arkui-use-scale-to-replace-attr-animateto](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-scale-to-replace-attr-animateto)告警级别由suggestion改为warn，该规则新增至recommended规则集中。
- [@performance/hp-arkui-use-taskpool-for-web-request](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-use-taskpool-for-web-request)告警级别由suggestion改为warn，该规则新增至recommended规则集中。
- [@performance/hp-arkui-use-transition-to-replace-animateto](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-transition-to-replace-animateto)告警级别由suggestion改为warn，该规则新增至recommended规则集中。
- [@performance/hp-arkui-use-word-break-to-replace-zero-width-space](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-word-break-in-space)该规则新增至recommended规则集中。
- [@performance/hp-arkui-set-cache-count-for-lazyforeach-grid](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-set-cache-count-for-lazyforeach-grid)告警级别由warn改为suggestion。

****下线规则****

- [@performance/hp-arkui-wrap-waterflow-if-else-footer](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-wrap-waterflow-if-else-footer)

## 5.0.3.600

****新增规则****

- [@performance/hp-arkui-wrap-waterflow-if-else-footer](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-wrap-waterflow-if-else-footer)
- [@performance/hp-arkui-remove-unchanged-state-var](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-remove-unchanged-state-var)
- [@performance/hp-arkts-no-use-any-export-current](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkts-no-use-any-export-current)
- [@performance/hp-arkts-no-use-any-export-other](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkts-no-use-any-export-other)
- [@performance/hp-arkui-suggest-cache-avplayer](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-cache-avplayer)
- [@performance/hp-arkui-suggest-use-effectkit-blur](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-use-effectkit-blur)
- [@performance/lottie-animation-destroy-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lottie-animation-destroy-check)
- [@performance/timezone-interface-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-timezone-interface-check)

****变更规则****

以下规则的部分场景，在5.0.3.600之前的版本检查执行Codelinter检查时不报错，升级至DevEco Studio 5.0.3.600版本后执行Codelinter检查将报错。

- [@typescript-eslint/no-unnecessary-condition](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-unnecessary-condition)

```
// 场景一：支持逻辑表达式的检查
interface GeneratedTypeLiteralInterface {}
declare let foo: GeneratedTypeLiteralInterface;
foo ??= 1; // 升级前不报错，升级后报错
// 场景二：链式表达式中可以推断为非空的场景下，不需要增加判空
interface GeneratedTypeLiteralInterface {
  bar: () => number;
}
type Foo = GeneratedTypeLiteralInterface | null;
declare const foo: Foo;
foo?.bar()?.toExponential(); // 升级前不报错，升级后报错
```

- [@typescript-eslint/promise-function-async](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_promise-function-async)

```
// 函数返回值没有显式定义类型，并且返回值可能为Promise的场景下，函数需要定义为async
function promiseInUnionWithoutExplicitReturnType(p: boolean) { // 升级前不报错，升级后报错
  return p ? Promise.resolve(5) : 5;
}
```

- [@typescript-eslint/member-ordering](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_member-ordering)

```
// 配置了optionalityOrder选项，并且类属性中不包含可选变量的场景下，规则中配置的order选项在历史版本中失效了
// 规则配置为"@typescript-eslint/member-ordering": ["error", {"default": {"memberTypes": 'never', "order": 'natural-case-insensitive', "optionalityOrder": 'required-first',}}]
class X {
  b: string = '';
  a: string = ''; // 升级前不报错，升级后报错
}
```

- [@typescript-eslint/naming-convention](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_naming-convention)

```
// 支持检查interface中的typeMethod
// 规则配置为："@typescript-eslint/naming-convention": ["error", {selector: 'typeMethod', format: ['PascalCase']}]
interface SOME_INTERFACE {
  someMethod: () => void; // 升级前不报错，升级后报错
  some_property: string;
}
```

- [@typescript-eslint/ban-types](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_ban-types)

```
// 支持检查extend、implements后的类型
// 规则配置为："@typescript-eslint/ban-types": ["error",{"types": {"Bar": {"message": ""}}}]
interface Bar {}
interface Baz {}
interface Foo extends Bar, Baz {} // 升级前不报错，升级后报错
```

- [@typescript-eslint/no-floating-promises](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-floating-promises)

```
// 场景一：.finally()被认为是没有有效处理Promise中可能发生的异常
Promise.reject().finally(() => {}) // 升级前不报错，升级后报错
// 场景二：.then()中的第二个参数如果是undefined或者null，被认为是没有有效处理Promise中可能发生的异常
Promise.resolve().then(() => {}, undefined); // 升级前不报错，升级后报错
Promise.resolve().then(() => {}, null); // 升级前不报错，升级后报错
```

- [@typescript-eslint/no-inferrable-types](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-inferrable-types)

```
// 支持检查构造函数中的参数类型
class Foo {
  constructor(param: boolean = true) {} // 升级前不报错，升级后报错
}
```

- [@typescript-eslint/prefer-readonly](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_prefer-readonly)

```
interface GeneratedObjectLiteralInterface {
  prop?: string
}

class Test {
  // 支持检查私有属性
  #testObj: GeneratedObjectLiteralInterface = {}; // 升级前不报错，升级后报错

  public test(): void {
    this.#testObj?.prop;
  }
}
```

## 5.0.3.500

****新增规则****

- [@security/no-unsafe-dh-key](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-dh-key)
- [@security/no-unsafe-dsa-key](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-dsa-key)
- [@security/no-unsafe-rsa-key](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-rsa-key)
- [@performance/hp-arkui-use-attributeUpdater-control-refresh-scope](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-attribute-update-refresh-scope)
- [@performance/hp-arkui-use-id-in-get-resource-sync-api](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-id-in-get-resource-sync-api)
- [@performance/hp-arkui-use-transition-to-replace-animateto](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-transition-to-replace-animateto)
- [@performance/hp-arkui-remove-redundant-state-var](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-remove-redundant-state-var)
- [@performance/hp-arkui-use-taskpool-for-web-request](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-use-taskpool-for-web-request)
- [@security/specified-interface-call-chain-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide-specified-interface-call-chain-check)
- [@hw-stylistic/file-naming-convention](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-hw-stylistic/ide-file-naming-convention)

****变更规则****

- @performance/high-frequency-log-check所属规则集由all变更为recommended。

****下线规则****

- [@performance/object-creation-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-object-creation-check)
- [@performance/hp-arkui-limit-refresh-scope](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-limit-refresh-scope)
- [@performance/lazyforeach-args-check](/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lazyforeach-args-check)
