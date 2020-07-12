# Read Me
* To execute this project you should need to setup DB and APIs, you can take help and import following project for the same:
https://github.com/MyPOCData/springBootRESTMongo
* This is Mavan project
* In /src/test/scala/simulations folder there are different .scala files. Each file is independ to eash other.
* To execute specific .scala file you need to follow :
  * Open terminal
  * cd upto project location
  * $ mvn gatling:test -Dgatling.simulationClass=<Folder Name>.<Scala File Name>  (mvn gatling:test -Dgatling.simulationClass=simulations.MyFirstTest)
* For Run time Parameters use :
  * $ mvn gatling:test -Dgatling.simulationClass=simulations.RuntimeParameters -DUSERS=10 -DRAMP_DURATION=5 -DDURATION=30
 
* Learing scequence:
  * 1 MyFirstTest.scala
  * 2 CheckResponseCode.scala
  * 3 CheckResponseBodyAndExtract.scala
  * 4 ScenarioAssertions.scala
  * 5 CodeReuseWithObjects.scala
  * 6 CsvFeeder.scala
  * 7 CustomFeeder.scala
  * 8 BasicLoadSimulation.scala
  * 9 FixedDurationLoadSimulation.scala
  * 10 ConstantUsersPerSecLoadSimulation.scala
  * 11 CallJavaMethod.scala
  * 12 RuntimeParameters.scala
  
* Ref : https://www.james-willett.com/gatling-load-testing-complete-guide/#2-gatling-recorder
* For Simulation : https://gatling.io/docs/current/general/simulation_setup

