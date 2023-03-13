import { createContext, useState } from "react";



export const Context = createContext({
    cars : [],
    sideNav: {},
    user: null,
    setUser: null,
});


export default function ContextProvider ({children}) {


    const [sideNavStatus, setSideNavStatus] = useState(false);
    const [user, setUser] = useState(null);

    const initialValue = {
        cars : [
            {
                title: 'Model 3',
                name:"model3",
                description: 'Leasing starting at $349/mo',
                LeftButtonText: 'Custome Order',
                RightButtonText: "Demo Drive",
                backgroundImage: 'model-3.jpg',
                arrow: true,
                // Car View Data 
                view_backgroundImage: 'model3_2.jpeg',
                range: "396 mi",
                speed: "1.99s",
                top_speed: "200 mph",
                peak_power: "1,020 hp",
            },
            {
                title: 'Model Y',
                name: 'modely',
                description: '',
                LeftButtonText: 'Custome Order',
                RightButtonText: "Demo Drive",
                backgroundImage: 'model-y.jpg',
                arrow: false,
                view_backgroundImage: 'modely_2.jpeg',
                range: "330 mi",
                speed: "3.5s",
                top_speed: "155 mph",
                peak_power: "1,020 hp",
            },
            {
                title: 'Model S',
                name: "models",
                description: 'Schedule a Demo Drive',
                LeftButtonText: 'Custome Order',
                RightButtonText: "View Inventory",
                backgroundImage: 'model-s.jpg',
                arrow: false,
                view_backgroundImage: 'model-s.jpg',
                range: "330 mi",
                speed: "3.5s",
                top_speed: "155 mph",
                peak_power: "1,020 hp",
            },
            {
                title: 'Model X',
                name: "modelx",
                description: 'Schedule a Demo Drive',
                LeftButtonText: 'Custome Order',
                RightButtonText: "View Inventory",
                backgroundImage: 'model-x.jpg',
                arrow: false,
                view_backgroundImage: 'model-x.jpg',
                range: "330 mi",
                speed: "3.5s",
                top_speed: "155 mph",
                peak_power: "1,020 hp",
            },
            {
                title: 'Solar Panels',
                description: 'Lowest Cost Solar Panels in America',
                LeftButtonText: 'Order Now',
                RightButtonText: "Learn More",
                backgroundImage: 'solar-panel.jpg',
                arrow: false,
            },
            {
                title: 'Solar Roof',
                description: 'Produce Clean Energy From Your Roof',
                LeftButtonText: 'Order Now',
                RightButtonText: "Learn More",
                backgroundImage: 'solar-roof.jpg',
                arrow: false,
            },
            {
                title: 'Accessories',
                description: '',
                LeftButtonText: 'Shop Now',
                arrow: false,
            },
        ],
    
        sideNav : {
            sideNavStatus: sideNavStatus,
            setSideNavStatus: setSideNavStatus,
        },

        user: user,
        setUser: setUser,
    }

    return <Context.Provider value={initialValue}>
        {children}
    </Context.Provider>

} 