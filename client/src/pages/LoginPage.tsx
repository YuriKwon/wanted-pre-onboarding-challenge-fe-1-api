import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  let [loginIsPossible, setLoginPossiblity] = useState(false); // ref
  // 유효한 입력값인지 여부(빈 문자열이면 true?)
  let [isValidId, setIsValidId] = useState<boolean>(true);
  let [isValidPw, setIsValidPw] = useState<boolean>(true);
  let idRef = useRef('');
  let pwRef = useRef('');

  const inputId = (e) => {
    const inputValue = e.target.value;
    idRef.current = inputValue;

    // 유효한 ID 인지 검사
    setIsValidId(inputValue.includes('@') && inputValue.includes('.') ? true : false);
  };

  const inputPw = (e) => {
    const inputValue = e.target.value;
    pwRef.current = inputValue;

    // 입력되는 시점에서 빨간 메시지를 띄우기 위해 필요- > 추후 디바운싱으로 변경하기
    setIsValidPw(inputValue.length >= 8 ? true : false);
  };

  useEffect(() => {
    const isNotEmpty = idRef.current.length > 0 && pwRef.current.length > 0;
    setLoginPossiblity(isValidId && isValidPw && isNotEmpty ? true : false);
  }, [isValidId, isValidPw]);

  return (
    <LoginPageLayout>
      <LoginBox>
        <h1>로그인</h1>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" placeholder="아이디를 입력해주세요." onChange={inputId} />
        {!isValidId && idRef.current.length > 0 && <ErrorMsgParagraph>이메일 형식으로 입력해주세요.</ErrorMsgParagraph>}
        <label htmlFor="pw">Password</label>
        <input type="password" name="pw" id="pw" placeholder="비밀번호를 입력해주세요." onChange={inputPw} />
        {!isValidPw && pwRef.current.length > 0 && <ErrorMsgParagraph>8자 이상 입력해주세요.</ErrorMsgParagraph>}
        <LoginButton disabled={!loginIsPossible} onClick={() => console.log('로그인. 라우팅')}>
          로그인
        </LoginButton>
        <hr />
        <SignUpParagraph>
          아직 회원이 아니신가요?
          <button>회원가입</button>
        </SignUpParagraph>
      </LoginBox>
    </LoginPageLayout>
  );
};

export default LoginPage;

export const LoginPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center; // 가로방향 중앙정렬
  align-items: center; // 세로 방향 중앙정렬
`;

export const LoginBox = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 1rem 6rem;
  border-radius: 1.5rem;
  border: 2px solid #e8e8e8;

  h1 {
    font-size: 1.8rem;
    padding: 0.8rem;
  }

  label {
    display: block;
    position: relative;
    bottom: -10px;
    width: fit-content;
    left: 10px;
    padding: 0px 5px;
    background-color: white;
  }
  input {
    outline: none;
    border: 2px solid gray;
    height: 30px;
    padding: 23px 10px 17px 15px;
    font-weight: bold;
    background-color: transparent;
    border-radius: 0.3rem;
  }

  input::placeholder {
    color: #d4d4d4;
  }

  // 파란 배경 생기는 것 방지
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  }

  hr {
    margin: 2rem 0;
  }
`;

export const LoginButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;

  /* font-family: 'Noto Sans KR', sans-serif; */
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  border-radius: 4px;
  background-color: #71ced9;
  color: white;

  :disabled {
    /* border: 1px solid #999999; */
    background-color: #cccccc;
    background-color: #828282;
    /* color: #666666; */
  }
`;

export const SignUpParagraph = styled.p`
  /* background-color: pink; */
  text-align: right;
  /* font-weight: 500; */
  button {
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
    text-decoration: none;
    margin-left: 0.5rem;
    display: inline-block;
    width: auto;

    border: none;
    background-color: white;
    color: #71ced9;
  }
`;

export const ErrorMsgParagraph = styled.p`
  color: red;
  font-size: 0.8rem;
  text-align: left;
  margin-top: 6px;
  margin-left: 4px;
`;
