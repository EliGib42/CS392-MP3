import {Link} from "react-router-dom";


export default function Nav(){
    return(
        <nav>
            <ul className = "nav_ul">
                <li className = "nav_li">
                    <Link to={"/Home"}>Home</Link>
                </li>
                <li className = "nav_li">
                    <Link to={"/Education"}>Education</Link>
                </li>
                <li className = "nav_li">
                    <Link to={"/Employment"}>Employment</Link>
                </li>
                <li className = "nav_li">
                    <Link to={"/Achievements"}>Achievements</Link>
                </li>
                <li className = "nav_li">
                    <Link to={"/Projects"}>Projects</Link>
                </li>
                <li className = "nav_li">
                    <Link to={"/References"}>References</Link>
                </li>
            </ul>
        </nav>
    );
}