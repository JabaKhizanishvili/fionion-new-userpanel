import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { MainButton } from "../../components/Button/MainButton";
import Form from "../../components/Form/Form";
import "./FinanceFraud.css";
import Layout from "../../Layouts/Layout";

const Recovery = () => {
    return (
        <Layout>
            <div className="finance_fraud ">
                <div className="showcase" style={{ padding: "100px 0" }}>
                    <img
                        src="/img/bgs/ff/1.jpg"
                        alt=""
                        className="background"
                    />
                    <div className="wrapper flex">
                        <div className="left">
                            <div className="page_head">
                                <div className="f35">
                                    {__("fraud_recovery")}
                                </div>
                            </div>
                            <p>{__("fraud_recovery_content_1")}</p>
                        </div>
                        <img
                            className="img_absolute"
                            src="/img/ff/1.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="wrapper content">
                    <div className="f35">
                        {__("fraud_recovery_titele_2_new")}
                    </div>
                    <p>{__("fraud_recovery_content_2")}</p>
                    <div className="other_services">
                        <div className="f25">{__("fraud_recovery_other_services")}</div>
                        <div className="boxes">
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

export default Recovery;
