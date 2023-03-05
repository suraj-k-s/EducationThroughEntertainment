import "./widgetLarge.css"

export default function WidgetLarge() {

    const Button =({type}) =>{
        return <button className={"widgetLargeButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLarge">
          <h3 className="widgetLargeTitle">Latest Transactions</h3>
          <table className="widgetLargeTable">
            <tr className="widgetLargeTr">
              <th className="widgetLargeTh">Customer</th>
              <th className="widgetLargeTh">Date</th>
              <th className="widgetLargeTh">Amount</th>
              <th className="widgetLargeTh">Status</th>
            </tr>
            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="widgetLargeImg" />
                <span className="widgetLargeName">Elon Musk</span>
              </td>
              <td className="widgetLargeDate">28-10-1999</td>
              <td className="widgetLargeAmount">$2000</td>
              <td className="widgetLargeStatus">
                <Button type="Approved"/>
              </td>
            </tr>
            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="widgetLargeImg" />
                <span className="widgetLargeName">Elon Musk</span>
              </td>
              <td className="widgetLargeDate">28-10-1999</td>
              <td className="widgetLargeAmount">$2000</td>
              <td className="widgetLargeStatus">
                <Button type="Declined"/>
              </td>
            </tr>
            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="widgetLargeImg" />
                <span className="widgetLargeName">Elon Musk</span>
              </td>
              <td className="widgetLargeDate">28-10-1999</td>
              <td className="widgetLargeAmount">$2000</td>
              <td className="widgetLargeStatus">
                <Button type="Pending"/>
              </td>
            </tr>
            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="widgetLargeImg" />
                <span className="widgetLargeName">Elon Musk</span>
              </td>
              <td className="widgetLargeDate">28-10-1999</td>
              <td className="widgetLargeAmount">$2000</td>
              <td className="widgetLargeStatus">
                <Button type="Pending"/>
              </td>
            </tr>
          </table>
        </div>
    )
}
