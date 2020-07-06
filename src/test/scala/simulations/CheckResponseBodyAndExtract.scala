package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CheckResponseBodyAndExtract extends Simulation {

  val httpConf = http.baseUrl("http://localhost:9091/")
    .header("Accept", "application/json")

  val scn = scenario("Check JSON Path")

    // First call - check the deptName of the Emp
    .exec(http("Get specific Emp")
      .get("employees/Abhi")
      // using JSONPath to check that the value of the deptName key in the JSON returned is Music
      .check(jsonPath("$.deptName").is("Music")))

    // Second call - extract the ID of a game and save it to a variable called gameId
    .exec(http("Get all Emp")
      .get("employees")
      // extracting the empName of the second Emp returned in the JSON (i.e. the emp at index 1)
      .check(jsonPath("$[1].empName").saveAs("empName1")))

    // Third call - use the gameId variable saved from the above call
    .exec(http("Get specific Emp")
      // use that variable in the URL
      .get("employees/${empName1}")
      .check(jsonPath("$.deptName").is("IT")))

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
