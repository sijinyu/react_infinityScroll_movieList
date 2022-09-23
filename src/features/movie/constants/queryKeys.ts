class QueryKeys {
  #GET: string;
  #API_KEY: string;
  constructor() {
    this.#GET = "movies";
    this.#API_KEY = "92e32667";
  }

  getGetAll() {
    return this.#GET;
  }
  getApiKey() {
    return this.#API_KEY;
  }
}

const moviesQueryKeysConstant = new QueryKeys();

export default moviesQueryKeysConstant;
