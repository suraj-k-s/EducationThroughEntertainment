import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="suraj" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Suraj K S" />
        </div>
        <div className="newUserItem">
          <label>E-mail</label>
          <input type="email" placeholder="surajks28101999@gmaill.com" />
        </div>
        <div className="newUserItem">
          <label>Passweprd</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+91 8129 959480" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Idukki" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="Male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="Female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="Other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
              <option value="">-----Select-----</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
