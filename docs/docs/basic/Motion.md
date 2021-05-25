---
group:
  title: 通用
title: Motion 动效
---

# Motion 动效

## 简介

`Motion` 是一个用于丰富组件动作的组件。

## 代码演示

### 淡入淡出

```jsx
  const [fadeShow, setFadeShow] = React.useState(false);

<Motion.Fade
  style={{ position: 'absolute', bottom: 50 }}
  show={fadeShow}
  onHide={() => setFadeShow(!fadeShow)}
>
```

### 上拉下滑

```jsx
  const [pullUpShow, setPullUpShow] = React.useState(false);

<Motion.PullUp
  style={{ position: 'absolute', bottom: 50 }}
  show={pullUpShow}
  onHide={() => setPullUpShow(false)}
>
```

### 放大淡入/缩小淡出

```jsx
const [scaleFadeInShow, setScaleFadeInShow] = React.useState(false);
const contentStyles = {
  width: 375,
  height: 200,
  backgroundColor: '#f0f',
};

<Motion.ScaleFadeIn
  style={{ position: 'absolute', bottom: 50 }}
  show={scaleFadeInShow}
  onHide={() => setScaleFadeInShow(false)}
>
  <View style={contentStyles} />
</Motion.ScaleFadeIn>;
```

### 放大淡入/下滑淡出

```jsx
const [scalePullDownShow, setScalePullDownShow] = React.useState(false);
const contentStyles = {
  width: 375,
  height: 200,
  backgroundColor: '#f0f',
};

<Motion.ScalePullDown
  show={scalePullDownShow}
  onHide={() => setScalePullDownShow(false)}
>
  <View style={contentStyles} />
</Motion.ScalePullDown>;
```

### 下拉上推

```jsx
const [pushDownShow, setPushDownShow] = React.useState(false);
const contentStyles = {
  width: 375,
  height: 200,
  backgroundColor: '#f0f',
};

<Motion.PushDown
  style={{ position: 'absolute', bottom: 100 }}
  show={pushDownShow}
  onHide={() => setPushDownShow(false)}
  dropHeight={100}
>
  <View style={contentStyles} />
</Motion.PushDown>;
```

### 无操作放大淡入/缩小淡出

```jsx
const [toastShow, setToastShow] = React.useState(false);
const contentStyles = {
  width: 375,
  height: 200,
  backgroundColor: '#f0f',
};

<Motion.Toast
  style={{ position: 'absolute', bottom: 50 }}
  show={toastShow}
  onHide={() => setToastShow(false)}
>
  <View style={contentStyles} />
</Motion.Toast>;
```

## API

### Motion.Fade

<Props name="MotionFadeProps"></Props>

### Motion.PullUp

<Props name="MotionPullUpProps"></Props>

### Motion.ScaleFadeIn

<Props name="MotionScaleFadeInProps"></Props>

### Motion.ScalePullDown

<Props name="MotionScalePullDownProps" ></Props>

### Motion.PushDown

<Props name="MotionPushDownProps" ></Props>

### Motion.Toast

<Props name="MotionToastProps"></Props>