import React from "react";
import "./LangSwitcher.css";
import { Link, usePage } from "@inertiajs/inertia-react";

export const LangSwitcher1 = () => {
    const { locales, currentLocale, locale_urls } = usePage().props;
    console.log(locale_urls, locales, 'esaa');

    let languages = [];
    // locales.map((locale, index) => {
    //     if (locale.locale !== currentLocale) {
    //         languages.push({
    //             name: locale.file ? "/"+locale.file.path+"/"+locale.file.title : "",
    //             link: locale_urls[locale],
    //             alt: locale.locale,
    //         });
    //     }
    // });
    // Object.keys(locales).map((name, index) => {
    //     if (locales[name] !== currentLocale) {
    //         languages.push({
    //             name: "/img/icons/header/" + locales[name] + ".svg",
    //             link: locale_urls[name],
    //             alt: locales[name],
    //         });
    //     }
    // });
    return (
        <div className="lang_switcher">
            {locales.map((locale, index) => {
                if (locale.locale === currentLocale) {
                    return (
                        <div key={index} className="on">
                          {/* <img src={"/img/icons/header/" + locale.locale + ".svg"} alt="" /> */}

                          <img src={locale.latest_image != null
                                            ? "/" +
                                            locale.latest_image.path +
                                            "/" +
                                            locale.latest_image.title
                                            : null} alt={locale.locale} />

                        </div>
                    );
                }
            })}

            <div className="drop">
                {locales.map((locale, i) => {
                    if (locale.locale !== currentLocale) {
                        return (
                            <a href={locale_urls[locale.locale]} key={i}>
                                {/* {locale.locale} */}

                                <img src={locale.latest_image != null
                                            ? "/" +
                                            locale.latest_image.path +
                                            "/" +
                                            locale.latest_image.title
                                            : null} alt={locale.locale} />

                            </a>
                        );
                    }

                })}
            </div>
        </div>
    );
};
