import "./featuredinfo.css";
import axios from "axios";

export default function Featuredinfo({ title, amt, dur, id }) {
    function buyNow(id){
    var uid = sessionStorage.getItem("userid");

        axios.get(
            "http://localhost/EducationThroughEntertainment/Project/api/User/Package/UserPackage.php?id=" +
              id +
              "&uid=" +
              uid
          )
           .then(res => {
            if(res.data)
        {
          window.location='/User/';
        }
           })
  };

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">{title}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${amt}</span>
          <span className="featuredMoneyRate">{dur} Days</span>
        </div>
        <span className="featuredSub" onClick={()=>{buyNow(id)}}>
          Buy Now
        </span>
      </div>
    </div>
  );
}
