package stepDefinition;

import cucumber.api.java.Before;
import cucumber.api.java.After;

public class Hooks
{
	@Before
	public void setUp() {
		System.out.println("Lets Execute all the pre requisites here");
	}
	
	@After
	public void tearDown() {
		System.out.println("All the teardown process should be executed here");
	}
	
	@Before("@First")
	public void setFirst() {
		System.out.println("Set up pre requisites specific to first scenario");
	}
	
	@After("@First")
	public void tearFirst() {
		System.out.println("Tear down specific to first scenario");
	}
}
