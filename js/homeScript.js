function showplace() {
    document.getElementById('placesSection').innerHTML += `
    <div class="col-lg-4 col-sm-4 head">
          <div style="background-color:ghostwhite;border-radius: 20px;">
            <div class="text-center ">
              <div class="con" id="place1">
                <img src="images/home/place (4).png">
                <div class="text-box">$150</div>
              </div>
                <h3 class=" font-weight-bold text-info">New York, USA</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.There are many variations of
                passages of Lorem Ipsum available.</p>
              <span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span href="#" style="color: black;text-decoration: none;">(20 Review)</span>
              </span><br><br>
              <span class="btn btn-info" id="butt" data-toggle="modal" data-target="#myModal">Schedule a Trip</span>
            </div>
          </div>
        </div>

        <div class="col-lg-4  col-sm-4 head">
          <div style="background-color:ghostwhite;border-radius: 20px;">
            <div class="text-center ">
              <div class="con">
                <img src="images/home/place (2).png">
                  <div class="text-box">$150</div>

              </div>
              <h3 class=" font-weight-bold text-info">Seoul, South Korea</h3></a>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.There are many variations of
                passages of Lorem Ipsum available.</p>
              <span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span href="#" style="color: black;text-decoration: none;">(20 Review)</span>
              </span><br><br>
              <p><span class="btn btn-info" data-toggle="modal" data-target="#myModal">Schedule a Trip</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4  col-sm-4 head">
          <div style="background-color:ghostwhite;border-radius: 20px;">
            <div class="text-center ">
              <div class="con">
                <img src="images/home/place (3).png">
                  <div class="text-box">$150</div>
              </div>
              <h3 class=" font-weight-bold text-info">Paris, France</h3></a>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.There are many variations of
                passages of Lorem Ipsum available.</p>
              <span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span href="#" style="color: black;text-decoration: none;">(20 Review)</span>
              </span>
              <br><br>
              <p><span class="btn btn-info" data-toggle="modal" data-target="#myModal">Schedule a Trip</span>
            </div>
          </div>
        </div>
      </div>


    `
}

    function myFunction() {
        var name = document.getElementById('fullname').value;
        var dates = document.getElementById('date-start').value;
        var activ = document.getElementById('activities');
        var activity = activ.options[activ.selectedIndex].value;
        var dis = document.getElementById('destination');
        var destinat = dis.options[dis.selectedIndex].value;


        if ((name == '') || (dates == '')) {
          document.getElementById("msg-error").style.display = "block";
        } else {

          $("#myModal").modal("hide");
          $("#Modal").modal();
          document.getElementById("info").innerHTML = name + " : your trip is booked successfully with date "
            + dates + "<br>" + "to:" + destinat + "<br>" + "for activity :" + activity;
          document.getElementById("msg-error").style.display = "none";
        }
      }

      function showAlert() {
        var name = document.getElementById('fullname');
        var date = document.getElementById('date-start');
        alert(
          `
              wlecome ${name.value}
              your trip is booked successfully on ${date.value}
              Thanks for your time
          `
        );
      }
