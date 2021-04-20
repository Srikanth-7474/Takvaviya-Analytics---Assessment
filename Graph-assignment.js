let data = {
    "6": {
        "project_id": 6,
        "name": "hero_ichawar",
        "dates": [
            "2019-10-06"
        ],
        "kml_location": "None",
        "location": "Ichhawar , Madhya Pradesh",
        "plant_size": "50 MW",
        "center": "",
        "no_of_inverters": "",
        "2019-10-06": {
            "layers": {
                "Hotspot": {
                    "defect_type": "Hotspot",
                    "Count": 5297,
                    "kml": "Hotspot,Dirt_1,Dirt_2,Dirt_3,Dirt_4,Dirt_5,By_Pass_Diode_Issues,Broken_Glass",
                    "color": "black",
                    "sub_group": {
                        "By Pass Diode Issues": {
                            "defect_type": "Hotspot",
                            "criticality": "By Pass Diode Issues",
                            "Count": 3,
                            "kml": "By_Pass_Diode_Issues",
                            "color": "yellow"
                        },
                        "Dirt / Vegetation": {
                            "defect_type": "Hotspot",
                            "criticality": "Dirt / Vegetation",
                            "Count": 4373,
                            "kml": "Dirt_1,Dirt_2,Dirt_3,Dirt_4,Dirt_5",
                            "color": "blue"
                        },
                        "Broken Glass": {
                            "defect_type": "Hotspot",
                            "criticality": "Broken Glass",
                            "Count": 151,
                            "kml": "Broken_Glass",
                            "color": "red"
                        },
                        "Others": {
                            "defect_type": "Hotspot",
                            "criticality": "Others",
                            "Count": 770,
                            "kml": "Hotspot",
                            "color": "green"
                        }
                    }
                },
                "Short Circuit": {
                    "defect_type": "Short Circuit",
                    "Count": 8,
                    "kml": "Short_Circuit",
                    "color": "blue",
                    "sub_group": {}
                },
                "Open Circuit": {
                    "defect_type": "Open Circuit",
                    "Count": 474,
                    "kml": "Open_Circuit",
                    "color": "green",
                    "sub_group": {}
                },
                "Panel Failure": {
                    "defect_type": "Panel Failure",
                    "Count": 136,
                    "kml": "Panel_Failure,Open_String_Tables ",
                    "color": "black",
                    "sub_group": {
                        "Module": {
                            "defect_type": "Panel Failure",
                            "criticality": "Module",
                            "Count": 89,
                            "kml": "Panel_Failure",
                            "color": "red"
                        },
                        "Table": {
                            "defect_type": "Panel Failure",
                            "criticality": "Table",
                            "Count": 47,
                            "kml": "Open_String_Tables",
                            "color": "orange"
                        }
                    }
                },
                "PID": {
                    "defect_type": "PID",
                    "Count": 14,
                    "kml": "PID",
                    "color": "yellow",
                    "sub_group": {}
                }
            }
        }
    }
};

const {
    layers
} = data["6"]["2019-10-06"];
console.log(layers["Hotspot"]);

let summaryBtnEl = document.getElementById("summaryBtn");
let graphBtnEl = document.getElementById("graphBtn");


let summaryContainerEl = document.getElementById("summaryContainer");
let graphContainerEl = document.getElementById("graphContainer");


let powerLessMetricBtnEl = document.getElementById("powerLessMetricBtn");
let AnamolyClassificationBtnEl = document.getElementById("AnamolyClassificationBtn");
let invertorBtnEl = document.getElementById("invertorBtn");
let healthBtnEl = document.getElementById("healthBtn");

let AnamolyClassificationContainerEl = document.getElementById("AnamolyClassificationContainer");
let powerLessMetricContainerEl = document.getElementById("powerLessMetricContainer");
let invertorContainerEl = document.getElementById("invertorContainer");
let healthContainerEl = document.getElementById("healthContainer");


summaryBtnEl.onclick = function() {
    summaryContainerEl.classList.remove("d-none");
    graphContainerEl.classList.add("d-none");
};

powerLessMetricBtnEl.onclick = function() {
    AnamolyClassificationBtnEl.classList.remove("selected-button");
    powerLessMetricBtnEl.classList.add("selected-button");
    invertorBtnEl.classList.remove("selected-button");
    healthBtnEl.classList.remove("selected-button");

    AnamolyClassificationContainerEl.classList.add("d-none")
    powerLessMetricContainerEl.classList.remove("d-none")
    invertorContainerEl.classList.add("d-none");
    healthContainerEl.classList.add("d-none");
}

AnamolyClassificationBtnEl.onclick = function() {
    AnamolyClassificationBtnEl.classList.add("selected-button");
    powerLessMetricBtnEl.classList.remove("selected-button");
    invertorBtnEl.classList.remove("selected-button");
    healthBtnEl.classList.remove("selected-button");

    AnamolyClassificationContainerEl.classList.remove("d-none")
    powerLessMetricContainerEl.classList.add("d-none")
    invertorContainerEl.classList.add("d-none");
    healthContainerEl.classList.add("d-none");
}

invertorBtnEl.onclick = function() {
    AnamolyClassificationBtnEl.classList.remove("selected-button");
    powerLessMetricBtnEl.classList.remove("selected-button");
    invertorBtnEl.classList.add("selected-button");
    healthBtnEl.classList.remove("selected-button");

    AnamolyClassificationContainerEl.classList.add("d-none")
    powerLessMetricContainerEl.classList.add("d-none")
    invertorContainerEl.classList.remove("d-none");
    healthContainerEl.classList.add("d-none");
}

healthBtnEl.onclick = function() {
    AnamolyClassificationBtnEl.classList.remove("selected-button");
    powerLessMetricBtnEl.classList.remove("selected-button");
    invertorBtnEl.classList.remove("selected-button");
    healthBtnEl.classList.add("selected-button");

    AnamolyClassificationContainerEl.classList.add("d-none")
    powerLessMetricContainerEl.classList.add("d-none")
    invertorContainerEl.classList.add("d-none");
    healthContainerEl.classList.remove("d-none");
}



graphBtnEl.onclick = function() {
    graphContainerEl.classList.remove("d-none")
    summaryContainerEl.classList.add("d-none")
}