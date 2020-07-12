package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BasicLoadSimulation extends Simulation {

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

  val scn = scenario("Basic Load Simulation")
    .exec(getAllEmp())
    .pause(5)
    .exec(getSpecificEmp())
    .pause(5)
    .exec(getAllEmp())

  setUp(
    scn.inject(
      // do nothing for 5 seconds initially
      nothingFor(5 seconds),
      // Start up 5 users at the same time
      atOnceUsers(5),
      // Start a further 10 users over a period of 10 seconds
      rampUsers(10) during (10 seconds)
    ).protocols(httpConf)
  )

}