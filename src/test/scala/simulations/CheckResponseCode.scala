package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class CheckResponseCode extends Simulation{

  val httpConf = http.baseUrl("http://localhost:9091/")
    .header("Accept", "application/json")

  val scn =scenario("RestAPI Emp - 3 calls")

    .exec(http("Get All Emp - Call 1")
    .get("employees")
      // to check for a 200 response code
    .check(status.is(200)))
      // this will pause for 5 seconds.
    .pause(5)

    .exec(http("Get specific Emp - Call 2")
    .get("employees/Abhi")
      // this will check that the response code is anywhere from 200 to 210.
    .check(status.in(200 to 210)))
      // this will pause for a random time between 1 and 20 seconds
    .pause(1,20)

    .exec(http("Get All Emp - Call 3")
    .get("employees")
      // to check that the status code is not a 404 or 500
    .check(status.not(400), status.not(500)))
      // this paused the Gatling script for 3000 milliseconds. Note: for Gatling to recognize milliseconds, we need to import scala.concurrent.duration.DurationInt
    .pause(3000.milliseconds)

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)

}
