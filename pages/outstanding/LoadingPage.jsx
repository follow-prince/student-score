import React from 'react';
import SmallBoy from '../../assets/images/small-boy.svg';
import Logo from '../../assets/images/school.svg';

export default function HomePage() {
    return (
        <div className='w-screen h-screen bg-gradient-to-tr from-blue-600 to-blue-300'>
            {/* Explanation: The className attribute is used to apply CSS classes to the HTML elements. */}
            <div className='sticky inset-64'>
                {/* Explanation: 'sticky' makes the element positionally sticky within its container. 'inset-64' creates a space of 64 pixels from the top, right, bottom, and left edges. */}
                <div className='sticky inset-40 left-20 flex place-items-center justify-center'>
                    {/* Explanation: This div is centered both horizontally and vertically using flexbox utility classes. 'left-20' adds a left margin of 20 pixels. */}
                    <Logo className='w-80 h-20 flex-shrink-0 fill-current text-white' />
                    {/* Explanation: 'w-80' sets the width to 80 pixels, 'h-20' sets the height to 20 pixels, 'flex-shrink-0' prevents the logo from shrinking in a flex container, 'fill-current' sets the fill color to the current text color (usually white). */}
                </div>
                <div className='sticky inset-96 left-20 flex place-items-center justify-center'>
                    {/* Explanation: This div is similar to the previous one, with a different vertical positioning using 'inset-96'. */}
                    <SmallBoy className='w-100 h-150 fill-current text-white' />
                    {/* Explanation: Similar to the logo, this sets the width and height to 80 pixels, and fills the SVG with the current text color. */}
                </div>
            </div>
        </div>
    );
}
