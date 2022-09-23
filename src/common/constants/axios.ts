// 여러 컴포넌트에서 쓰이는 상수 집합

class Axios {
  //private 변수 선언
  #BASE_URL: string;
  constructor() {
    this.#BASE_URL = "http://www.omdbapi.com/";
  }
  //Get으로만 접근하여 외부 접근을 제한하였습니다.

  getBaseUrl() {
    return this.#BASE_URL;
  }
}

const axiosConstant = new Axios();

export default axiosConstant;
