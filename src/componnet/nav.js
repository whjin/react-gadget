import { Fragment } from "react";
import { navs } from "../route/router";
import { NavLink, useLocation } from "react-router-dom";

function Nav () {
    const { pathName } = useLocation();

    return <nav>
        <span> | </span>
        {
            navs.map(item => {
                return <Fragment key={item.to}>
                    <NavLink
                        to={item.to}
                        exact={`${item.exact}`}
                        // isactive={item.isactive ? () => {
                        //     return item.isactive(pathName);
                        // } : null}
                        activestyle={{
                            color: "#f00"
                        }}
                    >{item.title}</NavLink>
                    <span> | </span>
                </Fragment>;
            })
        }
    </nav>;
}

export default Nav;