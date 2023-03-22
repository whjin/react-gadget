import IndexView from "../views/home";
import AboutView from "../views/home/about";
import ListView from "../views/home/list";
import UndefinedView from "../views/home/404";

const routes = [
    {
        path: "/",
        exact: true,
        render (props) {
            return <IndexView {...props} />;
        }
    },
    {
        path: "/about",
        exact: true,
        render (props) {
            return <AboutView {...props} />;
        }
    },
    {
        path: ["/list", "/list/:page"],
        exact: true,
        render (props) {
            const { page = 1 } = props.match.params;

            if (page >= 1) {
                return <ListView {...props} />;
            }
            return <UndefinedView {...props} />;
        }
    },
    {
        path: "",
        exact: false,
        render (props) {
            return <UndefinedView {...props} />;
        }
    }
];

const navs = [
    {
        to: "/",
        exact: true,
        title: "首页"
    },
    {
        to: "/about",
        exact: true,
        title: "关于"
    },
    {
        to: "/list",
        title: "课程列表",
        isactive (url) {
            let urlList = url.split("/");
            let flag = url == "/list" || (urlList.length == 3 && urlList[1] == "list" && urlList[2] > 0);
            if (flag) {
                return true;
            } else {
                return false;
            }
        }
    }
];

export { routes, navs };