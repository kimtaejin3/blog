---
title: React Key
date: 2025-02-04
category: "React"
description: React에서 배열 렌더링 시 key props를 사용해야 하는 이유
---

## 리액트 Key props에 대해서

리액트에서 배열을 렌더링할 때 key props를 사용해야 합니다. 만약 key props를 사용하지 않으면 브라우저 콘솔창에 경고 메시지가 출력되고, 린트를 사용할 경우에도 경고 혹은 오류 메시지가 보여질 수 있습니다.

```jsx
return (
  <>
    {todos.map((todo) => (
      <TodoItem todo={todo} /> // 🚫
    ))}
  </>
);
```

### 브라우저 콘솔창 경고 메시지

![브라우저 콘솔창 경고 메시지](/images/image.png)

### 린트 경고 메시지

![린트 에러 메시지](/images/image-1.png)

## 리액트 Key props 사용 이유

그렇다면 리액트 key props 작성을 권장하는 이유가 무엇일까요?

### 최적화

리액트는 Virtual DOM을 통해 렌더링을 최적화하고, Reconciliation(재조정)과정을 통해 변경이 일어난 부분만 실제 DOM에 반영합니다. 이 과정에서 key props가 존재하면 재조정 과정을 효율적으로 수행할 수 있습니다. key props를 사용하지 않았을 때의 문제점과 key props를 사용했을 때의 최적화 예시를 알아봅시다.

### 예시

```jsx
const App = () => {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
```

위 코드를 그림으로 나타내면 아래와 같습니다.

![리액트 컴포넌트 렌더링](/images/image3.png)

위 컴포넌트가 리렌더링 된다면 재조정 과정에서 각각의 li들이 바뀌었는지 확인하는 과정을 거칠 것입니다.

![리액트 컴포넌트 렌더링](/images/image4.png)

변경사항이 없다면 실제 DOM에 반영시키지 않을 것입니다.

만약 items에 4라는 요소가 배열의 마지막에 추가 된다면 어떨까요?

![리액트 컴포넌트 렌더링](/images/image5.png)

새로 추가된 4라는 item은 재조정 과정을 거쳐 실제 DOM에 반영될 것입니다. 그외에 1, 2, 3은 변경사항이 없기 때문에 실제 DOM에 반영되지 않을 것입니다.

하지만 4가 배열의 처음에 추가된다면 어떨까요?

![리액트 컴포넌트 렌더링](/images/image6.png)

위와 같이 재조정 과정에서 두 Virtual Dom을 비교할 때 React는 item3은 새로 추가되었다고 생각하고 그 외는 모두 변경되었다고 생각합니다. 실제로 item 1, 2, 3은 변경사항이 없음에도 실제 DOM에 새롭게 적용되게 됩니다.

지금까지 key props를 사용하지 않았을 때의 문제점을 알아봤습니다. 이제 key props를 사용해서 문제점을 해결해봅시다.

```jsx
const App = () => {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
```

위와 같이 key props를 사용하면 아래와 같은 효과를 얻을 수 있습니다.

![리액트 컴포넌트 렌더링](/images/image7.png)

고유한 key값을 통해 어떤 값이 추가되었고 어떤 값이 변경이 없는지 정확히 파악할 수 있습니다. 따라서 적은 비용으로 최소한의 변경만 실제 DOM에 반영하고 연산작업을 하여 최적화를 할 수 있습니다.

## Key props로 배열의 index를 사용하면 안되는 이유

key가 바뀌면 리런더링 됨을 언급, 그리고 내가 준비한 인풋 예제도 언급

### 예시

## Key props가 변하면 리렌더링이 됩니다.

딥다이브 언급

### 예시
