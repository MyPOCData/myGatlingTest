var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "2",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "8",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "3150",
        "ok": "3150",
        "ko": "7"
    },
    "meanResponseTime": {
        "total": "1055",
        "ok": "1579",
        "ko": "7"
    },
    "standardDeviation": {
        "total": "1481",
        "ok": "1571",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8",
        "ok": "1579",
        "ko": "7"
    },
    "percentiles2": {
        "total": "1579",
        "ok": "2365",
        "ko": "7"
    },
    "percentiles3": {
        "total": "2836",
        "ok": "2993",
        "ko": "7"
    },
    "percentiles4": {
        "total": "3087",
        "ok": "3119",
        "ko": "7"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.75",
        "ok": "0.5",
        "ko": "0.25"
    }
},
contents: {
"req_get-specific-em-dfcd5": {
        type: "REQUEST",
        name: "Get specific Emp",
path: "Get specific Emp",
pathFormatted: "req_get-specific-em-dfcd5",
stats: {
    "name": "Get specific Emp",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "3150",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "3150",
        "ok": "3150",
        "ko": "7"
    },
    "meanResponseTime": {
        "total": "1579",
        "ok": "3150",
        "ko": "7"
    },
    "standardDeviation": {
        "total": "1572",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1579",
        "ok": "3150",
        "ko": "7"
    },
    "percentiles2": {
        "total": "2364",
        "ok": "3150",
        "ko": "7"
    },
    "percentiles3": {
        "total": "2993",
        "ok": "3150",
        "ko": "7"
    },
    "percentiles4": {
        "total": "3119",
        "ok": "3150",
        "ko": "7"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.25",
        "ko": "0.25"
    }
}
    },"req_get-all-emp-9e73d": {
        type: "REQUEST",
        name: "Get all Emp",
path: "Get all Emp",
pathFormatted: "req_get-all-emp-9e73d",
stats: {
    "name": "Get all Emp",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
