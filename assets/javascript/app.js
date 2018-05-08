

var topics = ["Agriculture", "Cartoons", "Dog", "Cat", "Soccer", "Nancy Ajram", "Movies"];

    function displayTopicInfo() {

    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=txu6J32l4s3TYPMjD2ge2ALsgegMrgxf&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var results = response.data;
        // looping in response array.
        for (var i = 0; i < results.length; i++) {

           var topicDiv = $("<div class = 'topic'>");
           console.log(results);

           var rating = results[i].rating;
           console.log(rating);
           var pOne = $("<p>").text("Rating: " + rating);
           topicDiv.append(pOne);

           var topicImage = $("<img>").attr("src", results[i].images.fixed_height_still.url);
           topicImage.attr("yup");
           topicDiv.append(topicImage);
           console.log(topicImage);
           $("#topic-view").prepend(topicDiv);
        }
           
       
    
    });      
    }

        function renderButton() {
             $("#buttons-view").empty();
             for (var i = 0; i < topics.length; i++) {
                 var newButton = $("<button>");
                 newButton.addClass("topic-btn");
                 newButton.attr("data-name", topics[i]);
                 newButton.text(topics[i]);
                 $("#buttons-view").append(newButton);
             }
         }
        
        $("#add-topic").on("click", function(event) {
            event.preventDefault();
            var topic = $("#topic-input").val().trim();
            topics.push(topic);
            renderButton();

        });
        $(document).on("click", ".topic-btn", displayTopicInfo);

      
      $(".yup").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
      renderButton();