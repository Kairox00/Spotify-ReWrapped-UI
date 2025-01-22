import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization:
      "BQCfUvILgZ1hB7PxagPfcLiqgF7NjmpQyweamhLgV3hF5cX-RzXzbXR1_YZZRlS_17zVk67E1723NauIpU1eQbvCwe4u6al5Xwy7ycuLodyIpDSLiNIbKm-CHufz5NBOExrOC35ZQ1x12QMFxmYGsf5XJwg7lixcZqzIk3DxtC47VAgRphcmVVs5pJkqKML0QvwF5w243-78yyJkYbzWgv7kNwbvS59AtuI",
  },
});
