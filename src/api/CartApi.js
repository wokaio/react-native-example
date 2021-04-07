import HttpClient from "@/helpers/HttpClient";

const CartApi = {
  addItemToCart() {
    // Fake api
    return HttpClient.post('https://reqres.in/api/users?delay=1');
  },
};

export default CartApi;