<template>
  <div
    class="container"
    :style="`background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('https://mrserie.fr/wp-content/uploads/2021/11/Netflix-Background-1-1024x576.jpg?ezimgfmt=ng:webp/ngcb1')`"
  >
    <div class="screen">
      <div class="screen__content">
        <form class="login">
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input
              type="text"
              class="login__input"
              placeholder="User Name / Email"
            />
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input
              type="password"
              class="login__input"
              placeholder="Password"
            />
          </div>
          <button class="button login__submit">
            <span class="button__text">Log In Now</span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>
        </form>
      </div>
      <div class="screen__background">
        <span
          class="screen__background__shape screen__background__shape4"
        ></span>
        <span
          class="screen__background__shape screen__background__shape3"
        ></span>
        <span
          class="screen__background__shape screen__background__shape2"
        ></span>
        <span
          class="screen__background__shape screen__background__shape1"
        ></span>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow-y: hidden;
}

.screen {
  background: linear-gradient(90deg, #222222, #4a4a4a);
  position: relative;
  height: 500px;
  width: 500px;
  box-shadow: 0px 0px 24px #eb2b09;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #7a7479;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #05050c;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: radial-gradient(#000000 80%, red 20%);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #7a7479;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 30px;
  color: #7875b5;
}

.login__input {
  border: none;
  border-bottom: 2px solid #000000;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
  color: white;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #0b0b0c;
}

.login__submit {
  background: rgb(184, 184, 184);
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #0a0a0b;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 50%;
  color: #ff1100;
  box-shadow: 0px 2px 2px #0f0f11;
  cursor: pointer;
  transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #000000;
  outline: none;
}

.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: #7875b5;
}

.social-login {
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  padding: 20px 10px;
  color: rgb(14, 13, 13);
  text-decoration: none;
  text-shadow: 0px 0px 8px #7875b5;
}

.social-login__icon:hover {
  transform: scale(1.5);
}
.login__input::placeholder {
  color: white;
}
</style>
