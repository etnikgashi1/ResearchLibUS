package com.cybertekschool.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "@target/rerun.txt",
        glue = "com/cybertekschool/step_definitions",

        plugin = {"html:target/default-cucumber-reports",
                "json:target/cucumber.json"
        }
)
public class FailedTestRunners {

}