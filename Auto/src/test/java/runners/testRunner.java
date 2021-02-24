package runners;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
features="src/test/java/features",
glue= {"stepDefinition"},
dryRun=false,
monochrome=true,
plugin= {"pretty","html:target/html-report"},
tags= {"@Regression"}
)


public class testRunner
{

}
