import React from "react";

export default function Video(props) {
    // Handle px and % width values
    let parsed_width = parse_dimension_value(props?.width);
    let parsed_height = parse_dimension_value(props?.height);

    // Set video-container styles
    let container_styles : React.CSSProperties = {margin: props.centered ? "auto" : ""};

    if (parsed_width) container_styles["--video-max-width"] = parsed_width;
    if (props?.type === "iframe") {
        // Only calculate custom aspect ratio from pixel-based height and width
        if (parsed_width.indexOf("px") > 0 && parsed_height.indexOf("px") > 0) {
            container_styles["--video-aspect-ratio"] = `calc(${parseFloat(parsed_height)} / ${parseFloat(parsed_width)})`;
        }
    
        // Override calculation if specific ratio is specified
        let parsed_ratio = parseFloat(props.ratio);
        if (!isNaN(parsed_ratio)) container_styles["--video-aspect-ratio"] = parsed_ratio;
        
    } else if (props?.type === "video") {
        container_styles.height = "auto";
        container_styles.paddingBottom = "0";
    }

    let embed = 
        props.type === "iframe" ?
            <iframe
                src = {props.src}
                title = {props?.title} 
                allow = {props?.allow}
                frameBorder = {0}
            />
        : props.type === "video" ?
            <video
                style={{width: "100%"}}
                src = {props.src}
                title = {props?.title}
                autoPlay = {props?.autoplay || false}
                loop = {props?.loop || false}
            />
        :
            <div style={{color: "red", textAlign: "center"}}>Invalid type property. Specify either "iframe" or "video."</div>
    ;

    return (
        <div>
            <div className={props.type ? "video-container" : ""} style={container_styles}>
                {embed}
            </div>
        </div>
    )
}

function parse_dimension_value(dim : string) : string {
    let result : string = "";

    if (!isNaN(parseFloat(dim))) {
        result = parseFloat(dim).toString();
        result += (dim.indexOf("%") > 0) ? "%" : "px";
    }

    return result;
}