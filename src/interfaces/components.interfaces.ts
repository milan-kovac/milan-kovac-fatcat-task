import { MouseEventHandler, ReactNode } from 'react';

export interface TrustBarProps {
    images: string[];
}

interface PanelShowcaseItem {
    title: string;
    description: string;
    image: string;
}
export interface PanelShowcaseProps {
    items: PanelShowcaseItem[];
}

export interface LayoutProps {
    children: ReactNode;
    background: string;
}

interface ItemsShowcaseItem {
    title: string;
    description: string;
}
export interface ItemsShowcaseProps {
    items: ItemsShowcaseItem[];
}

export interface HeroProps {
    title: string;
    image: string;
}

interface Card {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: () => void;
    buttonText: string;
}

export interface CardsProps {
    cards: Card[];
}

export interface ButtonProps {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export interface CardLanding {
    title: string;
    text: string;
    link: string;
}
