import Chart from "../../Chart/Chart"
import Featuredinfo from "../../Featuredinfo/Featuredinfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetLarge from "../../WidgetLarge/WidgetLarge"
import WidgetSmall from "../../WidgetSmall/WidgetSmall"

export default function Home() {
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart title="User Analytics" data={userData} dataKey="Active Users" grid/>
        </div>
    )
}
