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
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useNavigate,useLocation } from "react-router-dom";

export function SideBar({}){
    //navigat hook
    const navigate = useNavigate();
    const location = useLocation();

    // console.log("here is the path",location.pathname);
    
    function navigateToLocation(path){
        if(path === location.pathname){
            return;
        }
        else{
            navigate(path);
        }
    }


    const goBack = () => {
        navigate(-1); // Navigate back to the previous route
      };
    
      const goForward = () => {
        const forwardRouteExists = true; // Replace with your logic to check if there is a forward route available
    
        if (forwardRouteExists) {
          navigate(1); // Navigate forward to the next route
        }
      };
    

    return(
        <div className="p-3  relative w-full h-full">
            <div>
                {/* appname logo */}
                <div>

                </div>

                {/* navigation section */}
                <div>
                    {
                        location.pathname === "/" ? 

                        <div className=" mb-10 text-hoverColor w-3/4 flex flex-row justify-center">
                            <HomeIcon /> 
                        </div>

                        :
                        <div className="sidebarComponents">
                            <HomeIcon onClick={()=>navigateToLocation("/")} />
                        </div>

                    }
                    <div className="sidebarComponents">
                        <SearchIcon/>
                    </div>
                    <div className="sidebarComponents">
                        <GridViewIcon/>
                    </div>
                    <div className="sidebarComponents">
                        <FavoriteIcon/>
                    </div>
                    <div className="sidebarComponents">
                        <CalendarMonthIcon/>
                    </div>
                    <div className="sidebarComponents">
                        <CloudDownloadIcon/>
                    </div>
                    <div className="sidebarComponents">
                        <VolunteerActivismIcon/>
                    </div>
                    <div className="sidebarComponents">
                        <div>
                            <WestIcon onClick={goBack}/>
                        </div>
                        <div>
                            <EastIcon  onClick={goForward} />
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="absolute bottom-0">
                <div>
                    <div className="mt-10 text-grey hover:text-hoverColor">
                        <PersonIcon  />
                    </div>

                    <div className="mt-10 text-grey hover:text-hoverColor">
                        <SettingsIcon />
                    </div>
                </div>

            </div>
        </div>
    )
}