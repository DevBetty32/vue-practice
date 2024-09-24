<template>
    <div>
        <!-- .prevent로 리프레시를 막고 대신 login메소드를 호출함 -->
      <form @submit.prevent="login">
        <!--ID가 예시로 표시되고, required처리되어 없으면 폼을 제출할 수 없음.-->
        <input v-model="username" placeholder="ID" required />
        <!--type="password"처리되어 입력값 숨김처리됨.-->
        <input v-model="password" type="password" placeholder="Password" required />
        <!--submit 이벤트발생>login 메소드 호출됨-->
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/api/login', { //임시 엔드포인트
            username: this.username,
            password: this.password,
          });
          // 로그인 성공시 response.data.token으로 토큰이 온다.
          localStorage.setItem('token', response.data.token); //브라우저에 저장해서 세션 유지
          this.$router.push('/dashboard'); // 로그인 후 임시 대시보드로 이동
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    },
  };
  </script>
  