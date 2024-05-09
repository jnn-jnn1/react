function App() {
  // 컴포넌트 내에 컴포넌트 생성 불가
  // 변수 생성은 가능

  // const, let 중에 사용
  const MyTag = <h1>hello</h1>;
  const val1 = "흥민";
  const val2 = 3.14;
  const val3 = 456;
  const val4 = true;
  const val5 = null;
  const val6 = undefined;
  const val7 = [2, 3];
  const val8 = { age: 3, name: "강인" };

  // {} : jsx 내에서 javascript 코드 사용
  return (
    <>
      <p>
        {val1} 선수는 연봉이 {val3}억원이다
      </p>
      <div>{val1}</div>;<div>{val2}</div>
      <div>{val3}</div>
      {/*component 아님*/}
      <div>{MyTag}</div>
      {/*boolean 타입, null, undefined 는 표시되지 않음*/}
      <div>{val4}</div>
      <div>{val5}</div>
      <div>{val6}</div>
      {/*배열 값 그대로 출력*/}
      <div>{val7}</div>
      {/*객체는 오류*/}
      {/*<div>{val8}</div>*/}
      {/*프로퍼티에 접근해서 사용*/}
      <div>{val8.name}</div>
      <div>{val8.age}</div>
    </>
  );
}

export default App;
