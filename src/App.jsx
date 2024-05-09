function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 -> fragment <></> 사용
  return (
    <>
      <p>Lorem ipsum.</p>
      <p>Impedit, officiis.</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개임
  // 2개 이상일 때 div로 감싸서 사용
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Animi, nostrum.</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄일 때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Inventore, pariatur!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
