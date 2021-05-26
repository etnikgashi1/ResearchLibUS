package com.cybertekschool.runners;



import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                "json:target/cucumber.json",
                "rerun:target/rerun.txt"
        },
        features = "src/test/resources/features/",
        glue = "com/cybertekschool/step_definitions",
        tags = "@RES-79",
        dryRun = false
)
public class CukesRunner {
}
