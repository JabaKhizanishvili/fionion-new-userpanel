import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { navbar } from "../Header/NavData";
import "./Footer.css";

const Footer = () => {
    const { gfacebook, ginstagram, gphone, gaddress, gcity, gcountry } =
        usePage().props;

    const partners = Array.from(Array(8).keys());

    return (
        <div className="footer">
            <div className="wrapper">
                <div className="flex navs_part"></div>
                <div className="partners_footer flex">
                    <div className="left-text">
                        <img src="/img/logo/1.png" width="250px"></img>
                        <p>{__("footer_text_under_logo")}</p>
                    </div>
                    <div className="navbar ">
                        <Link href={route("client.home.index")}>
                            {__("home")}
                        </Link>
                        <Link href={route("client.fraud.recovery.index")}>
                            {__("fraud_recovery")}
                        </Link>
                        <Link href={route("client.organization.index")}>
                            {__("about_us")}
                        </Link>
                        <Link href={route("client.fraud.detection.index")}>
                            {__("fraud_detection")}
                        </Link>
                        <Link href={route("client.incident.index")}>
                            {__("report_incident")}
                        </Link>
                        <Link href={route("client.fraud.expertise.index")}>
                            {__("out_experience")}
                        </Link>
                        <Link href={route("client.blockchain.index")}>
                            {__("blockchain_monitoring")}
                        </Link>
                        <Link href={route("client.entities.index")}>
                            {__("regulation_entities")}
                        </Link>
                        <Link href={route("client.framework.index")}>
                            {__("regulation_framework")}
                        </Link>
                    </div>
                    {/* <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5122761.0206436!2d10.454119350000001!3d51.175805749999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1653844260575!5m2!1sen!2sde"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div> */}
                </div>
                <div className="contact_info_footer flex">
                    <div className="column">
                        <p>{__("footer_email_address_text")}</p>
                        <a>{__("footer_email_address_address")}</a>
                    </div>
                    <div className="column">
                        <p>{__("footer_email_phone_number_text")}</p>
                        <a>{__("footer_phone_number_number")}</a>
                    </div>
                    <div className="column">
                        <p>{__("footer_address_text")}</p>
                        <a>{__("footer_address_address")}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
