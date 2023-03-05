import Chart from "../../Chart/Chart"
import "./home.css"
import axios from 'axios';
import { userData } from "../../dummyData"

export default function Home() {
    return (
        <div className="home">
            <Chart title="User Analytics" data={userData} dataKey="Active Users" grid/>
        </div>
    )
}
