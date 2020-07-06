package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class MyFirstTest extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl("http://localhost:9091/")
    .header("Accept", "application/json")

  // 2 Scenario Definition
  val scn = scenario("My First Test")
    .exec(http("Get All Emp")
      .get("employees"))

  // 3 Load Scenario
  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)

}
