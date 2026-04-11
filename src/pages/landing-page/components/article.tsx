import type { ReactNode } from "react";
import React from "react";

export interface ArticleProps {
    image: string;
    imageAltText: string;
    children: ReactNode;
}

export const ArticleComponent = React.forwardRef<
    HTMLDivElement,
    ArticleProps & React.HTMLAttributes<HTMLDivElement>
    >(({ children, image, imageAltText, ...props }, ref) => {
    return (<article ref={ref} {...props}>
        <img
            src={image}
            alt={imageAltText}
        />
        <div>
            {children}
        </div>
    </article>);
    });
