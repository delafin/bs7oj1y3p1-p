import {useEffect, type RefObject} from 'react';

const useOutsideFunction = (ref: RefObject<HTMLElement>, handler: () => void) => {
    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
        };
        
    }, [ref]);
}

export default useOutsideFunction;

