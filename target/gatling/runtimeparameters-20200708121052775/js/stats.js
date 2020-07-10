var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4411",
        "ok": "1899",
        "ko": "2512"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10013",
        "ok": "2146",
        "ko": "10013"
    },
    "meanResponseTime": {
        "total": "48",
        "ok": "10",
        "ko": "77"
    },
    "standardDeviation": {
        "total": "572",
        "ok": "85",
        "ko": "754"
    },
    "percentiles1": {
        "total": "2",
        "ok": "6",
        "ko": "1"
    },
    "percentiles2": {
        "total": "6",
        "ok": "10",
        "ko": "1"
    },
    "percentiles3": {
        "total": "11",
        "ok": "12",
        "ko": "3"
    },
    "percentiles4": {
        "total": "225",
        "ok": "18",
        "ko": "1915"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1896,
    "percentage": 43
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2512,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "176.44",
        "ok": "75.96",
        "ko": "100.48"
    }
},
contents: {
"req_get-all-emp-9e73d": {
        type: "REQUEST",
        name: "Get all Emp",
path: "Get all Emp",
pathFormatted: "req_get-all-emp-9e73d",
stats: {
    "name": "Get all Emp",
    "numberOfRequests": {
        "total": "4411",
        "ok": "1899",
        "ko": "2512"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10013",
        "ok": "2146",
        "ko": "10013"
    },
    "meanResponseTime": {
        "total": "48",
        "ok": "10",
        "ko": "77"
    },
    "standardDeviation": {
        "total": "572",
        "ok": "85",
        "ko": "754"
    },
    "percentiles1": {
        "total": "2",
        "ok": "6",
        "ko": "1"
    },
    "percentiles2": {
        "total": "6",
        "ok": "10",
        "ko": "1"
    },
    "percentiles3": {
        "total": "11",
        "ok": "12",
        "ko": "3"
    },
    "percentiles4": {
        "total": "225",
        "ok": "18",
        "ko": "1915"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1896,
    "percentage": 43
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2512,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "176.44",
        "ok": "75.96",
        "ko": "100.48"
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
