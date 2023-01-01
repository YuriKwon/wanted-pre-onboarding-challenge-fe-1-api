import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <LoginBox>
        <h1>로그인</h1>
        <input type="text" name="id" id="id" placeholder="아이디" />
        <input type="password" name="pw" id="pw" placeholder="비밀번호" />
        <button>로그인</button>
        <p>----</p>
        <p>
          아직 회원이 아니신가요?
          <button>회원가입</button>
        </p>
      </LoginBox>
    </LoginPageLayout>
  );
};

export default LoginPage;

export const LoginPageLayout = styled.div`
  background-color: pink;
  width: 100vw;
  height: 100vh;
  /* padding: 1rem 5rem; */
  /* border-radius: 0.7rem; */
  /* margin: auto; // 가로방향 중앙정렬 */
  /* margin-top: 10rem; */
  display: flex;
  justify-content: center; // 가로방향 중앙정렬
  align-items: center; // 세로 방향 중앙정렬
`;

export const LoginBox = styled.div`
  width: 40%;
  height: 50%;
  background-color: red;
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem;
  border-radius: 1.5rem;
`;
