package simulations

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class CodeReuseWithObjects extends Simulation{

  val httpConf = http.baseUrl("http://localhost:9091/")
    .header("Accept", "application/json")

  def  getAllEmp()={
    // code inside the block will repeat 3 times (i.e. it will make 3 HTTP calls)
    repeat(3){
      exec(http("Get All Emp")
      .get("employees")
      .check(status.is(200)))
    }
  }

  def getSpecificEmp() = {
    repeat(5) {
      exec(http("Get specific game")
        .get("employees/Abhi")
        .check(status.in(200 to 210)))
    }
  }

  val scn = scenario("Code reuse")
    .exec(getAllEmp())
    .pause(5)
    .exec(getSpecificEmp())
    .pause(5)
    .exec(getAllEmp())

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
