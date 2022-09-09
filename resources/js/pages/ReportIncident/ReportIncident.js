import React, { useState } from "react";
import "./ReportIncident.css";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/inertia-react'
import Swal from "sweetalert2";
import Layout from "../../Layouts/Layout";
import { MainButtonSubmit } from "../../components/Button/MainButton";

const ReportIncident = () => {
    let data = [];

//     axios.get(route("client.test"),{
//         headers: {
//             "Content-Type":
//             "application/json",
//         },
//     }
// )
// .then((res) => {
//     data = res.data;
//    console.log(res.data);
// });



    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        help: '',
        msg: '',
        select: '',
        opt1: false,
        opt2: false,
        opt3: false,
      })

    function submit(e) {
        e.preventDefault()
        post(route("client.contactus.save.db"))
    }


  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post(route("client.contactus.save.db"), values)
  }

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }

    return (
        <Layout>
            <div className="report_incident pages ">
                <div className="wrapper ">
                    <div className="content">
                        {" "}
                        <div className="f35">{__("report_incident")}</div>
                        <p>{__("report_incident_content_1")}</p>
                        <p>{__("report_incident_content_2")}</p>
                        <p>{__("report_incident_content_3")}</p>
                    </div>
                    <form className="contact_form" onSubmit={handleSubmit}

                    name='ownerapplication'>
                        <div className="f35">
                            {__("contact_us_main_title_1")}
                        </div>
                        <div className="inputs">
                            <div className="flex">
                                <label htmlFor="">
                                    {__("contact_us_form_name_full_name")}
                                </label>
                                <input
                                    // value={data.name}
                                    value={values.name}
                                    // onChange={e => setData('name', e.target.value)}
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder={__(
                                        "contact_us_form_first_name"
                                    )}
                                    required
                                />
                                <input
                                    // value={data.lastname}
                                    value={values.lastname}
                                    // onChange={e => setData('lastname', e.target.value)}
                                    onChange={handleChange}
                                    type="text"
                                    name=""
                                    id="lastname"
                                    placeholder={__(
                                        "contact_us_form_last_name"
                                    )}
                                    required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="">
                                    {__("contact_us_form_email_phone")}
                                </label>
                                <input
                                    // value={data.email}
                                    value={values.email}
                                    // onChange={e => setData('email', e.target.value)}
                                    onChange={handleChange}
                                    type="text"
                                    name=""
                                    id="email"
                                    placeholder={__("contact_us_form_email")}
                                    required
                                />
                                <input
                                    // value={data.phone}
                                    value={values.phone}
                                    // onChange={e => setData('phone', e.target.value)}
                                    onChange={handleChange}
                                    className="phone"
                                    type="text"
                                    name=""
                                    id="phone"
                                    placeholder={__("contact_us_form_phone")}
                                    required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="">
                                    {__("contact_us_form_company_country")}
                                </label>
                                <input
                                    // value={data.country}
                                    value={values.country}
                                    // onChange={e => setData('country', e.target.value)}
                                    onChange={handleChange}
                                    type="text"
                                    name=""
                                    id="country"
                                    placeholder={__("contact_us_form_country")}
                                    required
                                />
                                <input
                                    // value={data.company}
                                    value={values.company}
                                    // onChange={e => setData('company', e.target.value)}
                                    onChange={handleChange}
                                    type="text"
                                    name=""
                                    id="company"
                                    placeholder={__("contact_us_form_company")}
                                // required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="">
                                    {__("contact_us_form_help_select")}
                                </label>
                                <select name="" id="help"
                                //  value={data.help}
                                 value={values.help}
                                    // onChange={e => setData('help', e.target.value)}
                                    onChange={handleChange}
                                    >
                                    <option value="">
                                        {__("contact_us_form_how_can_we_help")}
                                    </option>
                                    <option value={__("contact_us_form_how_can_we_help_option_1")}>
                                        {__(
                                            "contact_us_form_how_can_we_help_option_1"
                                        )}
                                    </option>
                                    <option value={__("contact_us_form_how_can_we_help_option_2")}>
                                        {__(
                                            "contact_us_form_how_can_we_help_option_2"
                                        )}
                                    </option>
                                    <option value={__("contact_us_form_how_can_we_help_option_3")}>
                                        {__(
                                            "contact_us_form_how_can_we_help_option_3"
                                        )}
                                    </option>
                                    <option value={__("contact_us_form_how_can_we_help_option_4")}>
                                        {__(
                                            "contact_us_form_how_can_we_help_option_4"
                                        )}
                                    </option>
                                    <option value={__("contact_us_form_how_can_we_help_option_5")}>
                                        {__(
                                            "contact_us_form_how_can_we_help_option_5"
                                        )}
                                    </option>
                                    <option value={__("contact_us_form_how_can_we_help_option_6")}>
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
                                <textarea id='msg' name="msg"
                                // value={data.msg}
                                value={values.msg}
                                //  onChange={e => setData('msg', e.target.value)}
                                 onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>

                        <p>{__("contact_us_form_contact_preferance")}</p>
                        <div className="flex check">
                            <div className="flex ">
                                <input
                                    // value={data.opt1}
                                    value={values.opt1}
                                    // onChange={e => setData('opt1', e.target.checked)}
                                    onChange={handleChange}
                                    type="checkbox"
                                    name="opt1"
                                    id="opt1"

                                />
                                <label htmlFor="emailCheck">
                                    {__(
                                        "contact_us_form_contact_preferance_email"
                                    )}
                                </label>
                            </div>
                            <div className="flex ">
                                <input
                                    // value={data.opt2}
                                    value={values.opt2}
                                    // onChange={e => setData('opt2', e.target.checked)}
                                    onChange={handleChange}
                                    type="checkbox"
                                    name="opt2"
                                    id="opt2"
                                />
                                <label htmlFor="phoneCheck">
                                    {__(
                                        "contact_us_form_contact_preferance_phone"
                                    )}
                                </label>
                            </div>
                            <div className="flex ">
                                <input
                                    type="checkbox"
                                    // value={data.opt3}
                                    value={values.opt3}
                                    onChange={handleChange}
                                    name="opt3"
                                    id="opt3"
                                />
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
                </div>
            </div>
        </Layout>
    );
};

export default ReportIncident;
