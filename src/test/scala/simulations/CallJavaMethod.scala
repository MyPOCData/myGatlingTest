package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import signature.generateUid

class CallJavaMethod extends Simulation{

  // 1 Http Conf
  var uid: String = generateUid.getUuidMaison("2222222222")
  println("******** "+uid+" ********")
  val httpConf = http.baseUrl("http://localhost:9091/")
    .header("Accept", "application/json")
    .header(name = "unbroken",uid)

  // 2 Scenario Definition
  val scn = scenario("Call Java Method")
    .exec(http("Get All Emp")
      .get("employees"))

  // 3 Load Scenario
  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)

}
