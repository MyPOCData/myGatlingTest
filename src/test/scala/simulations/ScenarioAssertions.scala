package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ScenarioAssertions extends Simulation{

  val httpConf = http.baseUrl("http://localhost:9091/")
    .header("Accept", "application/json")

  def getAllVideoGames() = {
    exec(
      http("Get all Emp")
        .get("employees")
        .check(status.is(200))
    )
  }

  def getSpecificGame() = {
    exec(
      http("Get Specific Emp")
        .get("employees/Abhinav")
        .check(status.is(200))
    )
  }

  val scn = scenario("Fixed Duration Load Simulation")
    .forever() {
      exec(getAllVideoGames())
        .pause(5)
        .exec(getSpecificGame())
        .pause(5)
        .exec(getAllVideoGames())
    }

  setUp(
    scn.inject(
      nothingFor(5 seconds),
      atOnceUsers(10),
      rampUsers(50) during (30 second)
    ).protocols(httpConf)
  ).maxDuration(1 minute)
    //Maximum response time is less than 100 ms
    //Number of successful requests is greater than 95%
    //If either of these assertions fail, then Gatling will fail the Maven build.
    .assertions(
      global.responseTime.max.lt(100),
      global.successfulRequests.percent.gt(95)
    )

}
