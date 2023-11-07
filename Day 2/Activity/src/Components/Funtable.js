import { Apple, Banana, Cake, CakeSlice, CalendarClock, CalendarDays, CalendarHeart, CalendarRange, Candy, CandyCane, Carrot, Cherry, Laugh, Skull, Smile, SmilePlus } from "lucide-react";
import "../Assets/CSS/Table.css";
const Funtable = ()=>{
    return(
        <div>
            <table border= "2px solid black" cellSpacing="0">
                <tr>
                    <td><Candy/></td>
                    <td><CandyCane/></td>
                    <td><Cake/></td>
                    <td><CakeSlice/></td>
                </tr>
                <tr>
                    <td><CalendarClock/></td>
                    <td><CalendarDays/></td>
                    <td><CalendarHeart/></td>
                    <td><CalendarRange/></td>
                </tr>
                <tr>
                    <td><Carrot/></td>
                    <td><Cherry/></td>
                    <td><Apple/></td>
                    <td><Banana/></td>
                </tr>
                <tr>
                    <td><Laugh/></td>
                    <td><Skull/></td>
                    <td><Smile/></td>
                    <td><SmilePlus/></td>
                </tr>
            </table>
        </div>
    )
}
export default Funtable;