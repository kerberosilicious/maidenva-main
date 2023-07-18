# PROMPTS

- IF includes "time" ->
	## RESPONSE:
		"The current time right now is (TIME)"

- IF includes "date" ->
	## RESPONSE:
		"Today is (DATE)"

- IF asked to "go offline" ->
	## RESPONSE:
		"Maiden is shutting down... Closing window in a few seconds... Maiden going offline..."
	## THEN:
		after 7 seconds -> index.html

- IF asked to "clear chat" ->
	## RESPONSE:
		"Clearing chat for you..."
	## THEN:
		after 3 seconds -> chat cleared

- IF asked to "continue" ->
	## RESPONSE:
		"Here is another result for your previous question, (to continue)"
