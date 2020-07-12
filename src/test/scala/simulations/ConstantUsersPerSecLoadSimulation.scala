package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ConstantUsersPerSecLoadSimulation extends Simulation{

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

  val scn = scenario("Constant Users Per Sec Load Simulation")
    .exec(getAllEmp())
    .pause(5)
    .exec(getSpecificEmp())
    .pause(5)
    .exec(getAllEmp())


  setUp(
    scn.inject(
      nothingFor(5 seconds),
      // Injects users at a constant rate, defined in users per second, during a given duration. Users will be injected at regular intervals
      constantUsersPerSec(10) during (10 seconds),
      // Injects users from starting rate to target rate, defined in users per second, during a given duration. Users will be injected at regular intervals
      rampUsersPerSec(1) to (5) during (20 seconds)
    ).protocols(httpConf)
  )
}
