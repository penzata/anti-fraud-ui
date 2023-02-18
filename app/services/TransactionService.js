import axios from "axios";

const TRANSACTION_REST_API_URL = "http://localhost:28852/api/antifraud";

class TransactionService {
  registerTransaction(amount, ip, number, region, date) {
    const base64encodedData = localStorage.getItem("Authorization");
    const customAxios = axios.create({
      baseURL: TRANSACTION_REST_API_URL,
      headers: {
        Authorization: base64encodedData,
      },
    });
    const transactionData = {
      amount: amount,
      ip: ip,
      number: number,
      region: region,
      date: date,
    };
    customAxios.interceptors.response.use(
      (response) => {},
      (error) => {
        alert(error);
      }
    );
    customAxios.post("transaction", transactionData);
  }

  addFeedback(id, feedback) {
    const base64encodedData = localStorage.getItem("Authorization");
    const customAxios = axios.create({
      baseURL: TRANSACTION_REST_API_URL,
      headers: {
        Authorization: base64encodedData,
      },
    });
    const transactionData = {
      transactionId: id,
      feedback: feedback,
    };
    customAxios.interceptors.response.use(
      (response) => {},
      (error) => {
        alert(error);
      }
    );
    customAxios.put("transaction", transactionData);
  }
}
export default new TransactionService();
