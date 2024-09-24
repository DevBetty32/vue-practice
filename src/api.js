import axios from "axios";
export default {
    methods: {
        async $callAPI(url, method, data){ // $는 오버라이딩을 회피하기 위해 붙인 접두사
            return (
                await axios( //액시오스는 기본적으로 프로미스를 반환한다. await로 대기시킴.
                    {
                        method: method, url, data
                    }
                ).catch( e => {
                    console.log(e);
                })
            ).data;
        }
    }
}