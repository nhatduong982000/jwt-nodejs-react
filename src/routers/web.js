import  express  from "express";
import homeController from "../controller/homeController";
const router = express.Router();
/**
 * 
 * @param {*} app: express app 
 */


const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld)
    router.get("/about", homeController.handleUserPage)
    return app.use("/", router); // tức là ứng dụng sẽ bắt đầu với cái dấu "/"
                                //vd khi /abc thì ứng dụng sẽ chạy là localhost:port/abc/about
}

export default initWebRoutes;