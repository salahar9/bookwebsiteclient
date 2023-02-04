import axios from "axios";

const ax = axios.create();
ax.interceptors.request.use(function (config) {
	config.auth={
		username:localStorage.getItem("username"),
		password: localStorage.getItem(("password"))
	}
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
export default ax;
