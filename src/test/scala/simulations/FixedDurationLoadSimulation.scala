package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class FixedDurationLoadSimulation extends Simulation{

  val httpConf = http.baseUrl("http://localhost:9091/")
    .header("Accept", "application/json")

  def getAllEmp() = {
    exec(
      http("Get all Emp")
        .get("employees")
        .check(status.is(200))
    )
  }

  def getSpecificEmp() = {
    exec(
      http("Get Specific Emp")
        .get("employees/Abhinav")
        .check(status.is(200))
    )
  }

  val scn = scenario("Fixed Duration Load Simulation")
    .forever() {
      exec(getAllEmp())
        .pause(5)
        .exec(getSpecificEmp())
        .pause(5)
        .exec(getAllEmp())
    }

  setUp(
    scn.inject(
      nothingFor(5 seconds),
      atOnceUsers(10),
      rampUsers(50) during (30 second)
    ).protocols(httpConf)
  ).maxDuration(1 minute)
}
