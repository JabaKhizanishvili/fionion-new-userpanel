import React, { useState } from "react";
import {
    MainButton,
    MainButtonSubmit,
} from "../../components/Button/MainButton";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { checkNavigable } from "react-slick/lib/utils/innerSliderUtils";

export const Dashboard = ({ balance, crypto_address, account }) => {
    const managerArray = [
        account.manager_name,
        account.manager_email,
        account.manager_phone,
    ];

    let address = account.crypto_address;
    let containeraddress = [];
    let parseaddress = JSON.parse(address);
    let bg = 0;

    Object.keys(parseaddress).map((e, v) => {
        containeraddress.push({ name: e, amount: parseaddress[e] });
    });

    const [copied, setCopied] = useState(0);

    const copyAddress = (e) => {
        navigator.clipboard.writeText(e.address);
        setCopied(e);

        setTimeout(() => setCopied(0), 4000);
        console.log(copied);
    };

    return (
        <div className="dashboard">
            <p className="uppercase">{__("dashboard_balance")}</p>

            <div className="currency_grid">
                {balance.map((item, index) => {
                    console.log(bg);
                    if (index > 2) {
                        bg = 0;
                    }
                    bg++;
                    if (item.value != undefined) {
                        return (
                            <div
                                key={index}
                                className="currency_box"
                                // style={{
                                //     backgroundImage: `url(/img/bgs/cur/${bg}.png)`,
                                // }}
                            >
                                <div>{item.value}</div>
                                <p>{item.currency.name}</p>
                                {/* <b
                                        style={{ color: item.color }}
                                        className="flex centered sign"
                                    >
                                        {item.sign}
                                    </b> */}
                            </div>
                        );
                    }
                })}
            </div>
            {crypto_address.map((e, v) => {
                if (e.address != null) {
                    return (
                        <>
                            <div key={v} className="addresses">
                                <p className="uppercase">
                                    {" "}
                                    {e.currency.name} address
                                </p>

                                <span>{e.address}</span>
                                <button
                                    className="copy"
                                    onClick={() => copyAddress(e)}
                                >
                                    <img
                                        className={
                                            copied === e
                                                ? "active copySvg"
                                                : "copySvg"
                                        }
                                        src="/img/icons/other/check.png"
                                        alt=""
                                    />

                                    <img
                                        className={
                                            copied !== e
                                                ? "active copySvg"
                                                : "copySvg"
                                        }
                                        src="/img/icons/other/copy.svg"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </>
                    );
                }
            })}
            <div className="user">
                <div className="verification">
                    <p className="uppercase">status</p>
                    {account.verified ? (
                        <div style={{ color: "green" }}>
                            {__("your_account_verified")}
                        </div>
                    ) : (
                        <div style={{ color: "red" }}>
                            {__("your_account_is_not_verified")}
                        </div>
                    )}
                    {/* {!account.verified ? (
                        <a href="#">{__("dashboard_verify_account_now")}</a>
                    ) : (
                        ""
                    )} */}
                </div>
            </div>

            {/* {account.manager_name && ( */}
            {managerArray.some((e) => e != null) && (
                <div className="manager">
                    <p className="uppercase">Your Manager</p>
                    {account.manager_name && (
                        <div className="line flex">
                            <div className="label">Name:</div>{" "}
                            <span> {account.manager_name}</span>
                        </div>
                    )}
                    {account.manager_email && (
                        <div className="line flex">
                            <div className="label">Mail:</div>{" "}
                            <span>{account.manager_email}</span>
                        </div>
                    )}
                    {account.manager_phone && (
                        <div className="line flex">
                            <div className="label">Phone:</div>{" "}
                            <span> {account.manager_phone}</span>
                        </div>
                    )}
                </div>
            )}

            {/* )} */}

            <img className="abs_img" src="/img/other/6.png" alt="" />
            <div className="container mt-5">
                {/* {
                    photo.map((e, v) => {
                        return (
                            <>
                                <img src={`/${e.path}/${e.title}`} style={{ 'width': '20%' }} alt='error'></img>
                            </>
                        )
                    })
                } */}
            </div>
        </div>
    );
};

export const EditProfile = ({ profile, photo }) => {
    const inputs = [
        {
            label: "Name",
            type: "text",
            max: "",
        },
        {
            label: "Surname",
            type: "text",
            max: "",
        },
        {
            label: "Phone number",
            type: "tel",
            max: "",
        },
        {
            label: "Address",
            type: "text",
            max: "",
        },
        {
            label: "City",
            type: "text",
            max: "",
        },
        {
            label: "Country",
            type: "text",
            max: "",
        },
        {
            label: "Zip code",
            type: "text",
            max: "4",
        },
    ];
    const { errors } = usePage().props;

    const { data, setData, post, progress } = useForm({
        name: profile.name ?? "",
        surname: profile.surname ?? "",
        phone: profile.phone ?? "",
        address: profile.address ?? "",
        city: profile.city ?? "",
        country: profile.country ?? "",
        zip_code: profile.zip_code ?? "",
        photo: photo ? "/" + photo.path + "/" + photo.title : "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("client.changeAccount"));
    }

    return (
        <div className="edit_profile">
            <div className="content_box">
                <p>{__("dashboard_account_settings")}</p>
                <form className="" onSubmit={submit}>
                    <div key={"name_key"}>
                        {errors.name && <div>{errors.name}</div>}
                        <input
                            placeholder={__("dashboard_name")}
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            type="text"
                        />
                    </div>
                    <div key={"surname_key"}>
                        {errors.surname && <div>{errors.surname}</div>}
                        <input
                            placeholder={__("dashboard_surname")}
                            id="surname"
                            value={data.surname}
                            onChange={(e) => setData("surname", e.target.value)}
                            type="text"
                        />
                    </div>
                    <div key={"phone_key"}>
                        {errors.phone && <div>{errors.phone}</div>}
                        <input
                            placeholder={__("dashboard_phone_number")}
                            id="phone"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            type="text"
                        />
                    </div>
                    <div key={"address_key"}>
                        {errors.address && <div>{errors.address}</div>}
                        <input
                            placeholder={__("dashboard_address_account")}
                            id="address"
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            type="text"
                        />
                    </div>
                    <div key={"city_key"}>
                        {errors.city && <div>{errors.city}</div>}
                        <input
                            placeholder={__("dashboard_account_city")}
                            id="city"
                            value={data.city}
                            onChange={(e) => setData("city", e.target.value)}
                            type="text"
                        />
                    </div>
                    <div key={"country_key"}>
                        {errors.country && <div>{errors.country}</div>}
                        <input
                            placeholder={__("dashboard_account_country")}
                            id="country"
                            value={data.country}
                            onChange={(e) => setData("country", e.target.value)}
                            type="text"
                        />
                    </div>
                    <div key={"zip_code_key"}>
                        {errors.zip_code && <div>{errors.zip_code}</div>}
                        <input
                            placeholder={__("dashboard_account_zip_code")}
                            id="zip_code"
                            value={data.zip_code}
                            onChange={(e) =>
                                setData("zip_code", e.target.value)
                            }
                            type="text"
                        />
                    </div>
                    <div key={"photo_key"}>
                        <div className="file">
                            <input
                                placeholder={__("dashboard_account_photo")}
                                type="file"
                                filename={data.photo}
                                onChange={(e) =>
                                    setData("photo", e.target.files[0])
                                }
                            />
                        </div>

                        {/*<input id="photo" value="ff" onChange={handleChange} type="file"/>*/}
                    </div>

                    <div className="flex">
                        <MainButtonSubmit
                            text={__("dashboard_save_changes_button")}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
export const VerifyProfile = () => {
    const { errors } = usePage().props;

    const { data, setData, post, progress } = useForm({
        user_document_type: "",
        user_document: "",
        user_bank_statement: "",
        user_selfie_with_document: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("client.uploadDocument"));
    }

    return (
        <div className="edit_profile">
            <div className="content_box">
                <p>{__("dashboard_account_settings")}</p>
                <div className="flex" style={{ marginBottom: "30px" }}>
                    <div className="flex">
                        <label htmlFor="passport">Passport</label>
                        <input
                            type="radio"
                            name="user_document_type"
                            value="passport"
                            id="passport"
                            onChange={(e) =>
                                setData("user_document_type", e.target.value)
                            }
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="nationalid">National ID</label>
                        <input
                            type="radio"
                            name="user_document_type"
                            value="nationalid"
                            id="nationalid"
                            onChange={(e) =>
                                setData("user_document_type", e.target.value)
                            }
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="driverslicense">Driver license</label>
                        <input
                            type="radio"
                            name="user_document_type"
                            value="driverslicense"
                            id="driverslicense"
                            onChange={(e) =>
                                setData("user_document_type", e.target.value)
                            }
                        />
                    </div>
                </div>
                <form className="" onSubmit={submit}>
                    <div key={"document"}>
                        <label>{__("document")}</label>
                        {errors.document && <div>{errors.document}</div>}
                        <div className="file">
                            <input
                                type="file"
                                onChange={(e) =>
                                    setData("user_document", e.target.files[0])
                                }
                            />
                        </div>

                        {/*<input id="photo" value="ff" onChange={handleChange} type="file"/>*/}
                    </div>
                    <div key={"bank_statement"}>
                        <label>{__("bank_statement")}</label>
                        {errors.bank_statement && (
                            <div>{errors.bank_statement}</div>
                        )}
                        <div className="file">
                            <input
                                type="file"
                                onChange={(e) =>
                                    setData(
                                        "user_bank_statement",
                                        e.target.files[0]
                                    )
                                }
                            />
                        </div>

                        {/*<input id="photo" value="ff" onChange={handleChange} type="file"/>*/}
                    </div>
                    <div key={"selfie_with_document"}>
                        <label>{__("selfie_with_document")}</label>
                        {errors.selfie_with_document && (
                            <div>{errors.selfie_with_document}</div>
                        )}
                        <div className="file">
                            <input
                                type="file"
                                onChange={(e) =>
                                    setData(
                                        "user_selfie_with_document",
                                        e.target.files[0]
                                    )
                                }
                            />
                        </div>

                        {/*<input id="photo" value="ff" onChange={handleChange} type="file"/>*/}
                    </div>
                    {/*{inputs.map((input, i) => {*/}
                    {/*    return (*/}
                    {/*        <div key={i}>*/}
                    {/*            <label>{input.label}</label>*/}
                    {/*            <input type={input.type} maxLength={input.max}/>*/}
                    {/*        </div>*/}
                    {/*    );*/}
                    {/*})}*/}
                    <div className="flex">
                        <MainButtonSubmit
                            text={__("dashboard_save_changes_button")}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export const ChangePassword = () => {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        old_password: "",
        password: "",
        password_repeat: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post(route("client.changePassword"), values);
    }

    return (
        <form className="change_password" onSubmit={handleSubmit}>
            <div className="content_box">
                <p>Change Password</p>
                {errors.old_password && <div>{errors.old_password}</div>}
                <input
                    placeholder={__("dashboard_account_old_password")}
                    id="old_password"
                    value={values.old_password}
                    onChange={handleChange}
                    type="password"
                />

                {errors.password && <div>{errors.password}</div>}
                <input
                    placeholder={__("dashboard_account_new_password")}
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                />

                {errors.password_repeat && <div>{errors.password_repeat}</div>}
                <input
                    placeholder={__("dashboard_account_rep_new_password")}
                    id="password_repeat"
                    value={values.password_repeat}
                    onChange={handleChange}
                    type="password"
                />

                <div style={{ textAlign: "center" }}>
                    <MainButtonSubmit
                        text={__("dashboard_account_new_password")}
                    />
                </div>
            </div>
        </form>
    );
};
