import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { MainButton } from "../../components/Button/MainButton";

import Form, { FormBox } from "../../components/Form/Form";
import "./FinanceFraud.css";
import Layout from "../../Layouts/Layout";
import Partners from "../../components/Partners/Partners";

const Blockchain = () => {
    return (
        <Layout>
            <div className="finance_fraud ">
                <div className="showcase">
                    <img
                        src="/img/bgs/ff/5.jpg"
                        alt=""
                        className="background"
                    />
                    <div className="wrapper">
                        <div className="left">
                            <div className="page_head">
                                <div className="f35">
                                    {__("blockchain_monitoring")}
                                </div>
                            </div>
                            <p>{__("blockchain_content_1")}</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper content">
                    <div className="f35">
                        {__("blockchain_monitoring_new_title_2")}
                    </div>
                    <p>{__("blockchain_content_2")}</p>
                    <div className="other_services">
                        <div className="f25">{__("fraud_recovery_other_services")}</div>
                        <div className="boxes">
                            <Link href={route("client.fraud.recovery.index")}>
                                <div className="box">
                                    <h4>{__("fraud_recovery")}</h4>
                                    <p>{__("fraud_services_other_desk_6")}</p>
                                </div>
                            </Link>
                            <Link href={route("client.fraud.detection.index")}>
                                <div className="box">
                                    <h4>{__("fraud_detection")}</h4>
                                    <p>{__("fraud_services_other_desk_1")}</p>
                                </div>
                            </Link>
                            <Link href={route("client.fraud.expertise.index")}>
                                <div className="box">
                                    <h4>{__("out_experience")}</h4>
                                    <p>{__("fraud_services_other_desk_2")}</p>
                                </div>
                            </Link>
                            <Link href={route("client.entities.index")}>
                                <div className="box">
                                    <h4>{__("regulation_entities")}</h4>
                                    <p>{__("fraud_services_other_desk_4")}</p>
                                </div>
                            </Link>
                            <Link href={route("client.framework.index")}>
                                <div className="box">
                                    <h4>{__("regulation_framework")}</h4>
                                    <p>{__("fraud_services_other_desk_5")}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Blockchain;
