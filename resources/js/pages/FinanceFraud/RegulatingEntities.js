import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FormBox } from "../../components/Form/Form";
import "./FinanceFraud.css";
import Layout from "../../Layouts/Layout";
import Partners from "../../components/Partners/Partners";

const RegulatingEntities = () => {
    return (
        <Layout>
            <div className="finance_fraud ">
                <div className="showcase">
                    <img
                        style={{ transform: "rotateY(180deg)" }}
                        src="/img/bgs/ff/2.jpg"
                        alt=""
                        className="background"
                    />
                    <div className="wrapper ">
                        <div className="left">
                            <div className="page_head">
                                <p>
                                    {__("regulatory_framework_text_above_you")}
                                </p>
                                <div className="f35">
                                    {__("regulating_entities")}
                                </div>
                            </div>
                            <p>{__("entities_content_1")}</p>
                        </div>
                    </div>
                </div>{" "}
                <div className="wrapper content">
                    <div className="f35">
                        {__("regulating_entities_new_title_2")}
                    </div>
                    <p>{__("entities_content_2")}</p>
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
                            <Link href={route("client.blockchain.index")}>
                                <div className="box">
                                    <h4>{__("blockchain_monitoring")}</h4>
                                    <p>{__("fraud_services_other_desk_3")}</p>
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

export default RegulatingEntities;
