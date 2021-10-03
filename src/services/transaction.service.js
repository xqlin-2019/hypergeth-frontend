import http from "../http-common";

class TransactionDataService {
  getAllPrimo() {
    return http.get("/read_primo");
  }

  getFailPrimo() {
    return http.get("/read_primo_fail");
  }

  getSuccessPrimo() {
    return http.get("/read_primo_success");
  }

  getPendingPrimo() {
    return http.get("/read_primo_pending");
  }

  getPrimo(id) {
    return http.get(`/one_primo/${id}`);
  }

  getAllSgx() {
    return http.get("/read_sgx");
  }

  getFailSgx() {
    return http.get("/read_sgx_fail");
  }

  getSuccessSgx() {
    return http.get("/read_sgx_success");
  }

  getPendingSgx() {
    return http.get("/read_sgx_pending");
  }

  getSgx(id) {
    return http.get(`/one_sgx/${id}`);
  }

  getAllReconcile() {
    return http.get("/read_reconcile");
  }

  getReconcile(id) {
    return http.get(`/one_reconcile/${id}`);
  }
}

export default new TransactionDataService();