import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <LoginBox>
        <h1>로그인</h1>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" placeholder="아이디를 입력해주세요." />
        <label htmlFor="pw">Password</label>
        <input type="password" name="pw" id="pw" placeholder="비밀번호를 입력해주세요." />
        <LoginButton>로그인</LoginButton>
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
