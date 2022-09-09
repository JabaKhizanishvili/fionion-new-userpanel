import React from "react";
import "./RoadMap.css";

const RoadMap = () => {
    const timelines = [
        {
            title: __("organization_step_1_title"),
            para: __("organization_step_1_text"),
            date: __("organization_step_1_date"),
            status: 1,
        },
        {
            title: __("organization_step_2_title"),
            para: __("organization_step_2_text"),
            date: __("organization_step_2_date"),
            status: 1,
        },
        {
            title: __("organization_step_3_title"),
            para: __("organization_step_3_text"),
            date: __("organization_step_3_date"),
            status: 1,
        },
        {
            title: __("organization_step_4_title"),
            para: __("organization_step_4_text"),
            date: __("organization_step_4_date"),
            status: 1,
        },
        {
            title: __("organization_step_5_title"),
            para: __("organization_step_5_text"),
            date: __("organization_step_5_date"),
            status: 2,
        },
    ];
    return (
        <section className="roadMap">
            <div className="wrapper flex">
                {timelines.map((item, index) => {
                    return (
                        <div className="roadmap_item" key={index}>
                            <img
                                src={`/img/icons/roadmap/${item.status}.svg`}
                                alt=""
                                class="roadmap-item__status"
                            ></img>
                            <div class="roadmap-item__date">{item.date}</div>
                            <div className="f25">{item.title}</div>
                            <p>{item.para}</p>
                            <div class="roadmap_item__bg"></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default RoadMap;
