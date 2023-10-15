let mydata;
let uname;



const btn = document.querySelector(".btn");
const url="https://api.github.com/users/";
btn.addEventListener("click", function () {
  getUser(document.querySelector("input").value);
  async function getUser(name) {
    try {

      mydata = await fetch(url + name);
     
      uname = await mydata.json();
      console.log(uname);
     

      if ((uname.message == "Not Found" )||(mydata.status==404)) {
        document.querySelector(".msg1").innerHTML = "Enter valid ID";
        document.querySelector(".msg img").setAttribute('src','corrupt-file.png');

        document.querySelector(".list").style.display = "none";
      } else {
        document.querySelector(".msg").style.display = "none";
        document.querySelector(".list").setAttribute("type", "bullet");
        document.querySelector(".list").style.display = "block";

        document.querySelector("li:nth-of-type(1) img").setAttribute('src',uname.avatar_url);
        document.querySelector("li:nth-of-type(2)").innerHTML = 'UserName: '+ uname.login;
        document.querySelector("li:nth-of-type(3)").innerHTML =
          "Public Repos: " + uname.public_repos;
        document.querySelector("li:nth-of-type(4)").innerHTML =
          "Following: " + uname.following;
        document.querySelector("li:nth-of-type(5)").innerHTML =
          "Followers: " + uname.followers;
        document.querySelector("li:nth-of-type(6)").innerHTML =
          "Account_Bio: " + uname.bio;
        document.querySelector("li:nth-of-type(7)").innerHTML =
          "Account_create_on: " + uname.created_at;

       



      }
    } catch (error) {
      console.log("error");
    }
  }
});
