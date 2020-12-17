import { HttpClient } from "./http-client";

class Apis extends HttpClient {
    constructor() {
        super(process.env.NODE_ENV === "production" ? "" : "http://localhost:8080");

        this._initializeRequestInterceptor();
    }

    _initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(this._handleRequest);
    };

    _handleRequest = (config) => {
        config.headers["Authorization"] = "Bearer xxx";
        return config;
    };

    getList = async () => this.instance.get('/allTodoList');
}

export default new Apis();
