import styled from "styled-components";

export const LoginButton = styled.button``;

export const RegisterWrapper = styled.div`
height: 100vh;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  margin: 20px 60px;

  .logo {
    width: 50px;
    height: 50px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff3209 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 20px #ff320926;
    border-radius: 15px;
    border: none;
    width: 100px;
    height: 40px;
    color: #fff;
  }
`;

export const RegBody = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;


  .prompt {
    display: none;
  }

  .action {
    margin: 15px;
    width: 80%;

    .login-prompt {
      text-align: center;
    }
  }

  .head {
    text-align: center;
  }
  .or {
    text-align: center;
    margin-bottom: 20px;
  }

  .icons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 60px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      box-shadow: 0 0 50px #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .opaque {
      opacity: 0.2;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
    width: 100%;

    input[type="submit"] {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      color: #fff;
      background: #ff3209 0% 0% no-repeat padding-box;
      box-shadow: 0px 10px 20px #ff320926;
      border-radius: 15px;
      padding: 10px;
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    label {
      color: #c8c8c8;
      font-size: 14px;
    }

    input {
      background: #f5f5f5 0% 0% no-repeat padding-box;
      border-radius: 5px;
      border: none;
      padding: 10px 10px;
    }
  }

  .check-container {
    display: flex;
    align-items: center;
    gap: 10px;
    input {
      height: 24px;
      width: 24px;
    }
  }

  @media screen and (min-width: 1024px) {

    margin-top: 40px;
    .prompt{
      display: flex;
      align-items: center;
      flex-direction: column;

      span{
        color: #FF3209;
      }

      .avatar-container{

       img{
        width: 580px;
        height: 580px;
       }
      }
    }

    .action{
    margin: 0;
    }

    form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;

    .input-container{
      width: 40%;
    }

    .check-container{
      width: 40%;
    }
    input[type=submit]{
      width: 40%;
    }
    }

  }
`;

export const FieldsWrapper = styled.div``;
