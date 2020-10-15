import React from 'react'
import "./Sidebar.css"
import { useDataLayerValue} from "./DataLayer";
import SidebarOption from "./SidebarOption";
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import LibraryMusicSharpIcon from '@material-ui/icons/LibraryMusicSharp';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img 
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <SidebarOption Icon={HomeSharpIcon} title ="Home"/>
            <SidebarOption Icon={SearchSharpIcon} title ="Now Playing"/>
            <SidebarOption Icon={LibraryMusicSharpIcon} title ="Daily Mix"/>
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map(playlist =>(
            <SidebarOption title ={playlist.name}/>
        ))}
        </div>
    )
}

export default Sidebar
