package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.util.Random

import java.time.LocalDate
import java.time.format.DateTimeFormatter

class CustomFeeder extends Simulation{

  val httpConf = http.baseUrl("http://localhost:9091/")
    .header("Accept", "application/json")

  var idNumbers = (11 to 20).iterator
  val rnd = new Random()
  val now = LocalDate.now()
  val pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd")

  def randomString(length: Int) = {
    rnd.alphanumeric.filter(_.isLetter).take(length).mkString
  }

  def getRandomDate(startDate: LocalDate, random: Random): String = {
    startDate.minusDays(random.nextInt(30)).format(pattern)
  }

  val customFeeder = Iterator.continually(Map(
    "id" -> ("111-" + randomString(3)),
    "empName" -> ("Emp-" + randomString(5)),
    "deptName" -> ("Admin-" + randomString(6)),
    "age" -> rnd.nextInt(100)
  ))

  def postNewEmp()={
    repeat(5){
      feed(customFeeder)
        .exec(http("Post New Emp")
        .post("employees/")
            .body(ElFileBody("bodies/NewEmpTemplate.json")).asJson
            .check(status.is(200)))
        .pause(1)
    }
  }

  val scn = scenario("Post new emp")
    .exec(postNewEmp())

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)

}
