import React, { useState } from 'react';

function RouterDom( {children} ) {

    
    const [ pathname, setPathname ] = useState(window.location.pathname);

        useEffect(() => {
            setPathname(window.location.pathname);

        }, [window.location.pathname]);
    
    
    
    return (
        <div>
            <h1>
                경로 저장
            </h1>
        </div>
    );
}

export default RouterDom;