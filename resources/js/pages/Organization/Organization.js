import React from "react";
import "./Organization.css";
import Layout from "../../Layouts/Layout";
import {
    MainButton,
    MainButtonSubmit,
} from "../../components/Button/MainButton";
import Partners from "../../components/Partners/Partners";
import { FormBox } from "../../components/Form/Form";
import PartnerSection from "../Home/PartnerSection";
import RoadMap from "../../components/RoadMap/RoadMap";
import { Link, usePage } from "@inertiajs/inertia-react";

const Organization = () => {
    const { userName } = usePage().props;
    return (
        <Layout>
            <div className=" organization">
                <div className="showcase">
                    <div className="wrapper">
                        <div className="content">
                            <div className="heading">
                                <div className="f35">
                                    {__("organization_first_title")}
                                </div>
                            </div>
                            <p>{__("organization_frist_text")}</p>
                            <p>{__("organization_second_text")}</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper main_context">
                    <div className="f35">{__("about_us_new_title_2")}</div>
                    <p>{__("about_us_new_paragraph_2")}</p>
                </div>
                <div className="history">
                    <div className="heading f35">
                        {__("organization_our_history_title")}
                    </div>
                    <RoadMap />
                </div>
                {/* <PartnerSection /> */}
                <div className="bottom_form">
                    <div className="wrapper ">
                        <div className="container">
                            <div className="f35">{__("organization_get_started_text")}</div>
                            {userName ?
                                <form>
                                    <div className="f35">
                                        {__("contact_us_main_title_1")}
                                    </div>
                                    <div className="inputs">
                                        <div className="flex">
                                            <label htmlFor="">
                                                {__("contact_us_form_name_full_name")}
                                            </label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder={__(
                                                    "contact_us_form_first_name"
                                                )}
                                            />
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder={__(
                                                    "contact_us_form_last_name"
                                                )}
                                            />
                                        </div>
                                        <div className="flex">
                                            <label htmlFor="">
                                                {__("contact_us_form_email_phone")}
                                            </label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder={__("contact_us_form_email")}
                                            />
                                            <input
                                                className="phone"
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder={__("contact_us_form_phone")}
                                            />
                                        </div>
                                        <div className="flex">
                                            <label htmlFor="">
                                                {__("contact_us_form_company_country")}
                                            </label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder={__("contact_us_form_country")}
                                            />
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder={__("contact_us_form_company")}
                                            />
                                        </div>
                                        <div className="flex">
                                            <label htmlFor="">
                                                {__("contact_us_form_help_select")}
                                            </label>
                                            <select name="" id="">
                                                <option value="">
                                                    {__("contact_us_form_how_can_we_help")}
                                                </option>
                                                <option value="">
                                                    {__(
                                                        "contact_us_form_how_can_we_help_option_1"
                                                    )}
                                                </option>
                                                <option value="">
                                                    {__(
                                                        "contact_us_form_how_can_we_help_option_2"
                                                    )}
                                                </option>
                                                <option value="">
                                                    {__(
                                                        "contact_us_form_how_can_we_help_option_3"
                                                    )}
                                                </option>
                                                <option value="">
                                                    {__(
                                                        "contact_us_form_how_can_we_help_option_4"
                                                    )}
                                                </option>
                                                <option value="">
                                                    {__(
                                                        "contact_us_form_how_can_we_help_option_5"
                                                    )}
                                                </option>
                                                <option value="">
                                                    {__(
                                                        "contact_us_form_how_can_we_help_option_6"
                                                    )}
                                                </option>
                                            </select>
                                        </div>
                                        <div className="flex">
                                            <label htmlFor="">
                                                {__("contact_us_form_your_message")}
                                            </label>
                                            <textarea></textarea>
                                        </div>
                                    </div>

                                    <p>{__("contact_us_form_contact_preferance")}</p>
                                    <div className="flex check">
                                        <div className="flex ">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id="emailCheck"
                                            />
                                            <label htmlFor="emailCheck">
                                                {__(
                                                    "contact_us_form_contact_preferance_email"
                                                )}
                                            </label>
                                        </div>
                                        <div className="flex ">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id="phoneCheck"
                                            />
                                            <label htmlFor="phoneCheck">
                                                {__(
                                                    "contact_us_form_contact_preferance_phone"
                                                )}
                                            </label>
                                        </div>
                                        <div className="flex ">
                                            <input type="checkbox" name="" id="smsCheck" />
                                            <label htmlFor="smsCheck">
                                                {__(
                                                    "contact_us_form_contact_preferance_sms"
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                    <div style={{ maxWidth: "240px" }}>
                                        <MainButtonSubmit
                                            text={__("contact_us_form_send_button")}
                                        />
                                    </div>
                                </form>
                                : <FormBox imgSrc="/img/form/1.png" />}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Organization;
