package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CsvFeeder extends Simulation{

  val httpConf = http.baseUrl("http://localhost:9091/")
    .header("Accept", "application/json")

  // adding in the location of our CSV file:
  // queue - default behavior: use an Iterator on the underlying sequence
  // random - randomly pick an entry in the sequence
  // shuffle - shuffle entries, then behave like queue
  // circular - go back to the top of the sequence once the end is reached
  val csvFeeder = csv("data/empCsvFile.csv").circular

  def getSpecificEmp() = {
    repeat(10){
      feed(csvFeeder)
        .exec(http("get specific Emp")
        .get("employees/${empName}")
        .check(jsonPath("$.deptName").is("${deptName}"))
        .check(status.is(200)))
        .pause(1)
    }
  }

  val scn = scenario("Csv Feeder test")
    .exec(getSpecificEmp())

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
