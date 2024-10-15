/**
 * JS for blog post exercise
 * You will be writing JavaScript to add the functionality of adding a new blog post to the blog.
 
  addEntry function specification:
  - An article should be appended to the #posts container.
  - DONE The article should have the class .post added to it
  - Inside should be a third level heading
  - The third level heading text content should be the text "Date: " followed by the date submitted.
  - followed by a paragraph.
  - The paragraph's text content should be the text "Entry: " followed by the entry submitted
    - Hint: to grab the text from a form element use .value
  - If a user double clicks on any of the blog posts, the post that was clicked should be removed from the page
  - The content in #date and #entry should be cleared

 */

  "use strict";
  (function() {
  
    window.addEventListener("load", init);
  
    /**
     * sets up necessary functionality when page loads
     */
    function init() {
      qs("button").addEventListener("click", addEntry);
    }
  
    /**
     * TODO
     * adds a blog entry to the blog post page
     */
    function addEntry() {
        //Grab the elements
        const container = id("posts");
        const dateField = id("date");
        const date = dateField.value.trim();
        const thoughtsField = id("entry");
        const thoughts = thoughtsField.value.trim();

        if (date != "" && thoughts != "") {
            //Create the new elements
            const article = document.createElement("article");
            article.className = "post";
            const heading = document.createElement("h3");
            heading.innerText = `Date: ${date}`;
            const paragraph = document.createElement("p");
            paragraph.innerText = `Entry: ${thoughts}`;

            //Clear the form
            dateField.value = "";
            thoughtsField.value = "";

            //Nest the elements together
            article.appendChild(heading);
            article.appendChild(paragraph);
            container.appendChild(article);

            //add the double click (delete) listener
            article.addEventListener("dblclick", deleteEntry);
        }
    }

    function deleteEntry() {
        this.remove();
    }
  
    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} name - element ID.
     * @returns {object} - DOM object associated with id.
     */
    function id(id) {
      return document.getElementById(id);
    }
  
    /**
     * Returns first element matching selector.
     * @param {string} selector - CSS query selector.
     * @returns {object} - DOM object associated selector.
     */
    function qs(selector) {
      return document.querySelector(selector);
    }
  })();