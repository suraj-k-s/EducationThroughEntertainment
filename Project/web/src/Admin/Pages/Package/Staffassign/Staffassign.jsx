import React, { Component } from 'react'

export default class Staffassign extends Component {
    render() {
        return (
            <div className="mt">
            <h1 className="categoryTitle">Add Metrial</h1>
            <form className="materialForm">
              <div className="MaterialItem">
                <label> Staff</label>
                <select>
                  <option value="Class"> ----------------</option>
                </select>
              </div>
              <div className="MaterialItem">
                <label> Student</label>
                <select>
                  <option value="Class"> ----------------</option>
                </select>
              </div>
              <button className="categoryButton">Save</button>
            </form>
            <div className="categoryList"></div>
          </div>
        )
    }
}
