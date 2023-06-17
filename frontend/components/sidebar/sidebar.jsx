import React from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

export function SideBar({}){
    return(
        <div className="p-3  relative w-full h-full">
            <div>
                {/* appname logo */}
                <div>

                </div>

                {/* navigation section */}
                <div>
                    <div className="mb-10 text-grey w-fit hover:text-hoverColor">
                        <HomeIcon/>
                    </div>
                    <div className="mb-10 text-grey">
                        <SearchIcon/>
                    </div>
                    <div className="mb-10 text-grey">
                        <GridViewIcon/>
                    </div>
                    <div className="mb-10 text-grey">
                        <FavoriteIcon/>
                    </div>
                    <div className="mb-10 text-grey">
                        <CalendarMonthIcon/>
                    </div>
                    <div className="mb-10 text-grey">
                        <CloudDownloadIcon/>
                    </div>
                    <div className="mb-10 text-grey">
                        <VolunteerActivismIcon/>
                    </div>
                    
                </div>

            </div>
            <div className="absolute bottom-0">
                <div>
                    <div className="mt-10 text-grey">
                        <PersonIcon/>
                    </div>

                    <div className="mt-10 text-grey">
                        <SettingsIcon/>
                    </div>
                </div>

            </div>
        </div>
    )
}