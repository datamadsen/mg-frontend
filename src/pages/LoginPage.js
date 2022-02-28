import {Link, useNavigate} from "react-router-dom";
import H2 from "../lib/H2";
import Deck from "../lib/Deck";
import Form from "../lib/Form";
import Input from "../lib/Input";
import React from "react";
import SubmitButton from "../lib/SubmitButton";
import {MgUserApi} from "../services/MgApi";

const LoginPage = () => {
    const [formData, updateFormData] = React.useState({});
    const [errorData, updateErrorData] = React.useState({});
    const navigation = useNavigate();

    const handleInputChange = (e) => {
        updateFormData({
            ...formData,

            // Trim whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <H2>Log in</H2>

            <Form className={"mt-6"}>
                <Input label={"Email"}
                       id={"login_form_email"}
                       type={"text"}
                       name={"email"}
                       autoComplete={"email"}
                       onChange={handleInputChange}
                       error={errorData.email}
                />

                <Input label="Password"
                       id={"login_form_email"}
                       type={"password"}
                       name={"password"}
                       autoComplete={"password"}
                       onChange={handleInputChange}
                />

                <SubmitButton
                    onClick={handleSubmit}
                    value="Log in"
                    subtext="We're happy to see you :-)"
                />
            </Form>

            <Deck>
                <p className={"mt-6 text-xs"}>Do you not have an account? Create one here:<span className={"float-right"}><Link className={"p-1 mr-2 bg-purple-100 border cursor-pointer rounded-md hover:bg-green-100 hover:border-green-400 text-center"} to={"/sign-up"}>Sign up</Link></span></p>
                <p className={"mt-6 text-xs"}>Forgotten your password? Reset here: <span className={"float-right"}><Link className={"p-1 mr-2 bg-purple-100 border cursor-pointer rounded-md hover:bg-green-100 hover:border-green-400 text-center"} to={"/reset-password"}>Reset password</Link></span></p>
            </Deck>
        </>
    )
}
export default LoginPage;