# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

# Answers to Lab: 
1. No, I wouldn’t use a unit test to test the whole messaging feature. Sending a message involves multiple parts working together, like the UI, backend, and network, which a unit test can’t fully cover since it only checks small pieces of code in isolation. Unit tests are better for things like validating the message text or making sure a send function runs correctly, but you’d need integration or end-to-end tests to make sure the full feature actually works.
   
2. Yes, I would use a unit test for the max message length feature. It’s a small, self-contained piece of logic that just checks whether the input exceeds 80 characters, so it’s easy to test in isolation. You can quickly verify that messages under the limit pass and anything over gets blocked, without needing to involve other parts of the app.
