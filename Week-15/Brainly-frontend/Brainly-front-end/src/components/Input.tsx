import React, { forwardRef } from "react";

interface InputProps {
    reference?: React.Ref<HTMLInputElement>; 
    placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ reference, placeholder }, ref) => {
    return (
        <div>
            <input
                type="text"
                ref={reference || ref} 
                className="px-4 py-2 border rounded m-2"
                placeholder={placeholder}
            />
        </div>
    );
});
