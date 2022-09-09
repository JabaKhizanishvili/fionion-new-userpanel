import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { MainButton } from "../../components/Button/MainButton";
import Form from "../../components/Form/Form";
import "./FinanceFraud.css";
import Layout from "../../Layouts/Layout";

const Expertise = () => {
    return (
        <Layout>
            <div className="finance_fraud pages">
                <div className="showcase">
                    <img
                        src="/img/bgs/ff/4.jpg"
                        alt=""
                        className="background"
                    />
                    <div className="wrapper ">
                        <div
                            className="left"
                            style={{ margin: "auto", paddingTop: "30px" }}
                        >
                            <div className="page_head">
                                <div className="f35">{__("our_expertise")}</div>
                            </div>
                            <p>{__("fraud_expertise_content_1")}</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper content">
                    <div className="f35">
                        {__("our_expertise_title_new_2")}
                    </div>
                    <p>{__("fraud_expertise_content_2")}</p>
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
                            <Link href={route("client.blockchain.index")}>
                                <div className="box">
                                    <h4>{__("blockchain_monitoring")}</h4>
                                    <p>{__("fraud_services_other_desk_3")}</p>
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

export default Expertise;
