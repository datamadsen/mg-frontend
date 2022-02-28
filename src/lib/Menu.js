import classNames from 'classnames';
import MenuItem from './MenuItem.js';
import {SecurityTokenService} from "../services/SecurityTokenService";

function Menu() {
    const classes = classNames(
        "text-center",
        "bg-white",
        "h-12",
        "align-middle",
    );

    const loggedInItems = () => {
        return (
            <>
                <MenuItem title={"Profile"} path={"/me"} />
                <MenuItem title={"Data"} path={"/me/data"} />
                <MenuItem title={"Integrations"} path={"/me/integrations"} />
                <MenuItem title="About" path="/"/>
                <MenuItem title={"Sign out"} path={"/me/sign-out"} />
            </>
        )
    }

    const anonymousItems = () => {
        return (
            <>
                <MenuItem title="About" path="/"/>
                <MenuItem title="Log in" path="/log-in"/>
                <MenuItem title="Sign up" path="/sign-up"/>
            </>
        )
    }

    const items = () => {
        return SecurityTokenService.isLoggedIn()
            ? loggedInItems()
            : anonymousItems();
    }

    return (
        <div className={classes}>
            <div style={{"lineHeight": "3em"}}>
                {items()}
            </div>
        </div>
    )
}

export default Menu;
