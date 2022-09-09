import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia'
import {
    MainButton,
    MainButtonSubmit,
} from "../../components/Button/MainButton";
import {
    financeTabs,
    fraudTabs,
    hero,
    howFoundOut,
    partners,
    questions,
    users,
    whatWeDo,
    serviceBoxes,
} from "./HomeData.js";
import "./Home.css";
import Swal from "sweetalert2";
import { useForm } from '@inertiajs/inertia-react'
import { Form, FormBox } from "../../components/Form/Form";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import PartnerSlider from "../../components/PartnerSlider";
import PartnerSection from "./PartnerSection";
import '../ReportIncident/ReportIncident.css'

const Home = ({ alert, msgsend }) => {

    const { data, setData, post, processing, errors } = useForm({
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

    // const [values, setValues] = useState({
    //     name: '',
    //     lastname: '',
    //     email: '',
    //     phone: '',
    //     country: '',
    //     company: '',
    //     help: '',
    //     msg: '',
    //     select: '',
    //     opt1: '',
    //     opt2: '',
    //     opt3: '',
    // })


    // function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value
    //     setValues(values => ({
    //         ...values,
    //         [key]: value,
    //     }))
    // }

    function submit(e) {
        e.preventDefault()
        post(route("client.contactus.save.db"))
    }


    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route("client.contactus.save.db"), values)
    }


    // function submit(e) {
    //     e.preventDefault()
    //     post(route("client.contactus.save.db"))
    // }

    // if (alert) {
    //     Swal.fire({
    //         title: alert,
    //         text: "Do you want to continue",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //     });
    // }

    // if (success) {
    //     Swal.fire({
    //         title: alert,
    //         text: __("form_success"),
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //     });
    // }

    // if(msgsend){
    //         Swal.fire({
    //             title: __("form_sent_successfully"),
    //             text: __("form_sent_successfully"),
    //             icon: 'success',
    //             confirmButtonText: __("cool")
    //         })
    //     }

    const [showFraud, setShowFraud] = useState(1);
    const [showFinance, setShowFinance] = useState(2);

    const [showAnswer, setShowAnswer] = useState(0);
    const questionClick = (index) => {
        if (showAnswer === index) {
            setShowAnswer(0);
        } else {
            setShowAnswer(index);
        }
    };

    const { userName } = usePage().props;

    return (
        <Layout>
            <div className="homePage">
                <div className="hero">
                    <div className="wrapper">
                        <div className="flex main">
                            <div className="content">
                                <div className="">
                                    {__("home_paragraph1_main")}
                                </div>
                                <div className="f35">
                                    {__("home_paragraph2_main")}
                                </div>
                                <p>{hero.paragraph}</p>
                                <div className="flex">
                                    <Link
                                        className="contact_btn flex centered"
                                        href={route("client.incident.index")}
                                    >
                                        {__("contact_us")}
                                        <img
                                            src="/img/icons/other/arrow-right.svg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partners">
                        <div className="wrapper">
                            <div className="our-partners-text">{__("home_our_partners")}</div>
                        </div>
                        <PartnerSlider/>
                    </div>
                </div>
                <section className="why-choose">
                    <div className="main-inner">
                        <div className="main-inner__wrapper">
                            <h1 className="main-inner__title">
                                {__("home_new_section_title")}
                            </h1>
                            <div className="main-inner__content">
                                <div className="why-choose__inner">
                                    <div className="why-choose__reason-container">
                                        <div className="why-choose__top-reason">
                                            <section
                                                className="top-reason"
                                                data-duration="500"
                                                data-value="10"
                                            >
                                                <div className="top-reason__big">
                                                    <span className="top-reason__title">
                                                        {__(
                                                            "home_new_section_numbers_1"
                                                        )}
                                                    </span>
                                                    <span className="top-reason__static-value">
                                                        {__(
                                                            "home_new_section_numbers_2"
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="top-reason__small">
                                                    <span className="top-reason__description">
                                                        {__(
                                                            "home_new_section_numbers_text_below"
                                                        )}
                                                    </span>
                                                </div>
                                            </section>
                                        </div>
                                        <div className="why-choose__reason-list">
                                            <ul className="reason-list">
                                                <li className="reason-list__item">
                                                    <div className="reason-list__item-wrapper">
                                                        <section className="reason-item">
                                                            <div className="reason-item__big">
                                                                <span className="reason-item__title">
                                                                    {__(
                                                                        "home_new_section_numbers_3"
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="reason-item__small">
                                                                <span className="reason-item__description">
                                                                    {__(
                                                                        "home_new_section_numbers_3_text"
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </li>
                                                <li className="reason-list__item">
                                                    <div className="reason-list__item-wrapper">
                                                        <section className="reason-item">
                                                            <div className="reason-item__big">
                                                                <span className="reason-item__title">
                                                                    {__(
                                                                        "home_new_section_numbers_4"
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="reason-item__small">
                                                                <span className="reason-item__description">
                                                                    {__(
                                                                        "home_new_section_numbers_4_text"
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </li>
                                                <li className="reason-list__item">
                                                    <div className="reason-list__item-wrapper">
                                                        <section className="reason-item">
                                                            <div className="reason-item__big">
                                                                <span className="reason-item__title">
                                                                    {__(
                                                                        "home_new_section_numbers_5"
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="reason-item__small">
                                                                <span className="reason-item__description">
                                                                    {__(
                                                                        "home_new_section_numbers_6_text"
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </li>
                                                <li className="reason-list__item">
                                                    <div className="reason-list__item-wrapper">
                                                        <section className="reason-item">
                                                            <div className="reason-item__big">
                                                                <span className="reason-item__title">
                                                                    {__(
                                                                        "home_new_section_numbers_6"
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="reason-item__small">
                                                                <span className="reason-item__description">
                                                                    {__(
                                                                        "home_new_section_numbers_6_text"
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </li>
                                                <li className="reason-list__item">
                                                    <div className="reason-list__item-wrapper">
                                                        <section className="reason-item">
                                                            <div className="reason-item__big">
                                                                <span className="reason-item__title">
                                                                    {__(
                                                                        "home_new_section_numbers_7"
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="reason-item__small">
                                                                <span className="reason-item__description">
                                                                    {__(
                                                                        "home_new_section_numbers_7_text"
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </li>
                                                <li className="reason-list__item">
                                                    <div className="reason-list__item-wrapper">
                                                        <section className="reason-item">
                                                            <div className="reason-item__big">
                                                                <span className="reason-item__title">
                                                                    {__(
                                                                        "home_new_section_numbers_8"
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="reason-item__small">
                                                                <span className="reason-item__description">
                                                                    {__(
                                                                        "home_new_section_numbers_8_text"
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="why-choose__rating-container">
                                        <div className="why-choose__accreditation">
                                            <div className="accreditation">
                                                <div className="accreditation__title">
                                                    {__("home_new_section_accreditied_by")}
                                                </div>
                                                <div className="grid">
                                                    <div className="img">
                                                          <img
                                                        src="/img/partners/type-6/1.png"
                                                        alt=""
                                                        class="partners__logo"
                                                    />
                                                    </div>
                                                  <div className="img">    <img
                                                        src="/img/partners/type-6/2.png"
                                                        alt=""
                                                        class="partners__logo"
                                                    /></div>
                                                  <div className="img">  <img
                                                        src="/img/partners/type-6/3.png"
                                                        alt=""
                                                        class="partners__logo"
                                                    /></div>
                                                  <div className="img"> <img
                                                        src="/img/partners/type-6/4.png"
                                                        alt=""
                                                        class="partners__logo"
                                                    /></div>
                                                  <div className="img">
                                                    <img
                                                        src="/img/partners/type-6/5.png"
                                                        alt=""
                                                        class="partners__logo"
                                                    /></div>
                                                  <div className="img"> <img
                                                        src="/img/partners/type-6/6.png"
                                                        alt=""
                                                        class="partners__logo"
                                                    /></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="why-choose__left-img"></div>
                    <div className="why-choose__right-img"></div>
                </section>

                <div className="users">
                    <img className="abs_bg" src="/img/bgs/2.png" alt="" />
                    <div className="wrapper ">
                        <div className="content" data-aos="slide-right">
                            <span style={{ color: "#377dffc7" }}>
                                {__("home_explore_our_services")}
                            </span>
                            <br />{" "}
                            <div className="f35">
                                {__("home_molding_fund_recovery")}
                            </div>
                            <p>{__("home_molding_text_below_title")}</p>
                        </div>
                        <div className="boxes">
                            {serviceBoxes.map((item, index) => {
                                return (
                                    <div className="box" key={index}>
                                        <img src={item.icon} alt="" />
                                        <h4>{item.title}</h4>
                                        <p>{item.para}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="we_aid_you wrapper">
                    <div className="f35">
                        <br /> {__("home_aid_we_are_here_to_aid_you")}
                    </div>
                    <div className="">
                        <div className="text">
                            <p>
                                <strong>
                                    {__("home_aid_scams_we_worked_the_way")}
                                </strong>
                            </p>
                            <p style={{ opacity: "1" }}>
                                {__("home_aid_scamers_are_prevalent")}
                            </p>
                            <p>{__("home_aid_number_of_ways")}</p>
                        </div>
                        <div className="boxes">
                            <div className="box">
                                <div className="number">01</div>
                                <h4>{__("home_aid_option_1")}</h4>
                                <p>{__("home_aid_answer_1")}</p>
                            </div>
                            <div className="box">
                                <div className="number">02</div>
                                <h4>{__("home_aid_option_2")}</h4>
                                <p>{__("home_aid_answer_2")}</p>
                            </div>
                            <div className="box">
                                <div className="number">03</div>
                                <h4>{__("home_aid_option_3")}</h4>
                                <p>{__("home_aid_answer_3")}</p>
                            </div>
                            <div className="box">
                                <div className="number">04</div>
                                <h4>{__("home_aid_option_4")}</h4>
                                <p>{__("home_aid_answer_4")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        {" "}
                        <div className="text">
                            <p style={{ opacity: "1" }}>
                                {__("home_aid_growing_buzz")}
                            </p>
                            <p>{__("home_aid_the_number_ways_con_work")}</p>
                        </div>
                        <div className="boxes">
                            <div className="box">
                                <div className="number">05</div>
                                <h4>{__("home_aid_option_5")}</h4>
                                <p>{__("home_aid_answer_5")}</p>
                            </div>
                            <div className="box">
                                <div className="number">06</div>
                                <h4>{__("home_aid_option_6")}</h4>
                                <p>{__("home_aid_answer_6")}</p>
                            </div>
                            <div className="box">
                                <div className="number">07</div>
                                <h4>{__("home_aid_option_7")}</h4>
                                <p>{__("home_aid_answer_7")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <PartnerSection /> */}
                <div className="what_we_do">
                    <div className="wrapper ">
                        <div data-aos="fade-up" className="text">
                            <div className="f35">
                                {__("home_what_do_we_do")}
                            </div>
                            <p>{whatWeDo.p1}</p>
                            <p>{whatWeDo.p2}</p>
                        </div>
                        <div className="flex formCheck">
                            {userName ?
                                <form onSubmit={submit} name='ownerapplication'>
                                    <div className="f35">
                                        {__("contact_us_main_title_1")}
                                    </div>
                                    <div className="inputs">
                                        <div className="flex">
                                            <label htmlFor="">
                                                {__("contact_us_form_name_full_name")}
                                            </label>
                                            <input
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                type="text"
                                                name=""
                                                id="name"
                                                placeholder={__(
                                                    "contact_us_form_first_name"
                                                )}
                                                required
                                            />
                                            <input
                                                value={data.lastname}
                                                onChange={e => setData('lastname', e.target.value)}
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
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                type="text"
                                                name=""
                                                id="email"
                                                placeholder={__("contact_us_form_email")}
                                                required
                                            />
                                            <input
                                                value={data.phone}
                                                onChange={e => setData('phone', e.target.value)}
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
                                                value={data.country}
                                                onChange={e => setData('country', e.target.value)}
                                                type="text"
                                                name=""
                                                id="country"
                                                placeholder={__("contact_us_form_country")}
                                            />
                                            <input
                                                value={data.company}
                                                onChange={e => setData('company', e.target.value)}
                                                type="text"
                                                name=""
                                                id="company"
                                                placeholder={__("contact_us_form_company")}
                                            />
                                        </div>
                                        <div className="flex">
                                            <label htmlFor="">
                                                {__("contact_us_form_help_select")}
                                            </label>
                                            <select name="" id="help" value={data.help}
                                                onChange={e => setData('help', e.target.value)}>
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
                                            <textarea id='msg' name="msg" value={data.msg} onChange={e => setData('msg', e.target.value)}

                                            ></textarea>
                                        </div>
                                    </div>

                                    <p>{__("contact_us_form_contact_preferance")}</p>
                                    <div className="flex check">
                                        <div className="flex ">
                                            <input
                                                value={data.opt1} onChange={e => setData('opt1', e.target.checked)}
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
                                                value={data.opt2} onChange={e => setData('opt2', e.target.checked)}
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
                                                value={data.opt3} onChange={e => setData('opt3', e.target.checked)}
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
                                : <FormBox imgSrc="/img/form/1.png" />}

                            <div className="checks">
                                {whatWeDo.checks.map((check, index) => {
                                    return (
                                        <div key={index} className="item flex">
                                            {" "}
                                            <img
                                                src="/img/icons/other/check.svg"
                                                alt=""
                                            />{" "}
                                            <span> {check}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
